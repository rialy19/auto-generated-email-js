const axios = require('axios');

async function checkGmailAvailability(email) {
    const apiKey = 'YOUR_MAILBOXVALIDATOR_API_KEY';
    const endpoint = `https://api.mailboxvalidator.com/v1/email/verify?email=${email}&key=${apiKey}`;

    try {
        const response = await axios.get(endpoint);
        const data = response.data;

        if (data.error) {
            console.error("Error:", data.error.message);
        } else {
            console.log("Email:", email);
            console.log("Is Gmail:", data.is_gmail);
            console.log("Is Valid:", data.is_valid);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function generateRandomGmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const domain = '@gmail.com';
    let username = '';
    for (let i = 0; i < 10; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return username + domain;
}

const randomGmail = generateRandomGmail();
checkGmailAvailability(randomGmail);
