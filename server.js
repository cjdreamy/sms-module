const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send('Test Request');
})
//generate random 6 digit number
const otp = Math.floor(100000 + Math.random() * 900000);

// Set your app credentials
const credentials = {
    apiKey: process.env.AFRICAS_TALKING_API,
    username: process.env.AFRICAS_TALKING_USERNAME,
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: [`${process.env.TO}`],
        // Set your message
        message: `I'm a Cjdreamy this is you OTP : ${otp}, thank you for Choosing us `,
        // Set your shortCode or senderId
        from: 'Cjdreamy'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
//generate random 6 digit number


        
}

sendMessage();

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
})
