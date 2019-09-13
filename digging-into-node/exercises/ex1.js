#!/usr/bin/env node

"use strict";

console.log("yo!");

var args = require("minimist")( process.argv.slice(2), {
    boolean: [ "help" ], 
    string: [ "file" ]
} );
console.log(args);

//******** */

function printHelp() {
    console.log("ex1 usage:");
    console.log(" ex1.js --help ");
    console.log("");
    console.log("--help     print this help");
}

//type ./ex1.js --help to print the function
