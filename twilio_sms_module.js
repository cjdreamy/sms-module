const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send('Test Request for Twilio');
})

function sendTwilioSms() {
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        body: 'cjdreamy from code directly',
        from: '+19205573527',
        to: '+18777804236'
    })
    .then(message => console.log(message.sid));
}

sendTwilioSms();

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
})
