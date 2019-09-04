const http = require('http');
const express= require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Something about robots');

    res.writeHead(200, {'Content-Type' : 'text/xml'});
    res.end(twiml.toString());

});

http.createServer(app).listen(1337, () =>{
    console.log('Express app is listening on the correct port.');
});