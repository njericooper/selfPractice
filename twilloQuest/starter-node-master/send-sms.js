require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio') (accountSid, authToken);

client.messages.create({
    to: +19317977570, 
    from: process.env.TWILIO_PHONE_NUMBER, // +19312885215
    body: 'Sup, fam. This better work.'
})
.then((message) => console.log(message.sid))