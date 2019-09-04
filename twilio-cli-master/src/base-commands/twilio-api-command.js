/* eslint no-warning-comments: "off" */
// TODO: Remove the above eslint directive when this file
// is free of TODO's.

const { flags } = require('@oclif/command');
const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;
const { doesObjectHaveProperty } = require('@twilio/cli-core').services.JSUtils;
const { logger } = require('@twilio/cli-core').services.logging;
const { kebabCase, camelCase } = require('@twilio/cli-core').services.namingConventions;
const { ApiCommandRunner, getActionDescription } = require('../services/twilio-api');

// Open API type to oclif flag type mapping. For numerical types, we'll do validation elsewhere.
const typeMap = {
  array: flags.string,
  boolean: flags.boolean,
  integer: flags.string,
  number: flags.string,
  string: flags.string,
  object: flags.string,
  undefined: flags.string // TODO: Handle "anyOf" case more explicitly
};

// AccountSid is a special snowflake
const ACCOUNT_SID_FLAG = 'account-sid';

const isRemoveCommand = actionDefinition => actionDefinition.commandName === 'remove';

class TwilioApiCommand extends TwilioClientCommand {
  async runCommand() {
    const runner = new ApiCommandRunner(
      this.twilioApiClient,
      this.constructor.actionDefinition,
      this.constructor.flags,
      this.flags
    );

    const response = await runner.run();

    if (isRemoveCommand(this.constructor.actionDefinition)) {
      logger.info(response ? 'The resource was deleted successfully' : 'Failed to delete the resource');
      return;
    }

    this.output(response, this.flags.properties);
  }
}

TwilioApiCommand.flags = Object.assign(
  {
    'skip-parameter-validation': flags.boolean({
      default: false,
      hidden: true
    })
  },
  TwilioClientCommand.flags
);

// A static function to help us add the other static
// fields required by oclif on our dynamically created
// command class.
TwilioApiCommand.setUpNewCommandClass = NewCommandClass => {
  const domainName = NewCommandClass.actionDefinition.domainName;
  const resource = NewCommandClass.actionDefinition.resource;
  const action = NewCommandClass.actionDefinition.action;

  const sanitizeDescription = description => {
    if (description) {
      // Replace all backticks with single-quotes. We don't want them mistaken
      // for statements that need to be evaluated (think zsh autocomplete).
      return description.replace(/`/g, '\'');
    }
  };

  // Parameters
  const cmdFlags = {};
  (action.parameters || []).forEach(param => {
    const cliName = param.name.replace('<', 'Before').replace('>', 'After');
    const flagName = kebabCase(cliName);
    const flagConfig = {
      description: sanitizeDescription(param.description),
      // AccountSid on api.v2010 not required, we can get from the current profile
      required: flagName === ACCOUNT_SID_FLAG && domainName === 'api' ? false : param.required,
      multiple: param.schema.type === 'array',
      apiDetails: {
        parameter: param,
        action: action,
        resource: resource
      },
      // Allow negated booleans ('-no' option)
      allowNo: true
    };

    const flagType = typeMap[param.schema.type];

    if (doesObjectHaveProperty(param.schema, 'enum')) {
      // We want the best of all worlds. We want the help to show just lower-case options, but accept all options. Since
      // oclif doesn't support this, we'll create a string that matches the enum flag text and let the schema validator
      // take care of the actual validation.
      const options = param.schema.enum
        .map(value => value.toLowerCase()) // standardize the enum values
        .filter((value, index, self) => self.indexOf(value) === index); // remove duplicates
      flagConfig.helpValue = `(${options.join('|')})`; // format it like the help plugin
    }

    if (flagType) {
      cmdFlags[flagName] = flagType(flagConfig);
    } else {
      logger.error(`Unknown parameter type '${param.schema.type}' for parameter '${flagName}'`);
    }
  });

  // 'remove' commands have no response body and thus do not need display properties.
  if (NewCommandClass.actionDefinition.commandName !== 'remove') {
    const defaultProperties = resource.defaultOutputProperties || [];

    cmdFlags.properties = flags.string({
      // Camel-cased, CSV of the provided property list. Or just the SID.
      default: defaultProperties.map(prop => camelCase(prop)).join(',') || 'sid',
      description: 'The properties you would like to display (JSON output always shows all properties).'
    });
  }

  // Class statics
  NewCommandClass.id = NewCommandClass.actionDefinition.topicName + ':' + NewCommandClass.actionDefinition.commandName;
  NewCommandClass.args = [];
  NewCommandClass.flags = Object.assign(cmdFlags, TwilioApiCommand.flags);
  NewCommandClass.description = sanitizeDescription(getActionDescription(NewCommandClass.actionDefinition));
  NewCommandClass.load = () => NewCommandClass;
};

module.exports = TwilioApiCommand;