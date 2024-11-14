// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static(path.join(__dirname, '/')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Route to handle form submissions (e.g., from a contact form)
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body; // Retrieve form data
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    res.send(`<h2>Thank you, ${name}! We received your message.</h2>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
