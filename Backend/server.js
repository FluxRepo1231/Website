// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// User registration route (POST)
app.post('/api/auth/register', (req, res) => {
    const { username, email } = req.body;

    // Replace this with your user registration logic (e.g., save user to the database)
    console.log(`User Registered: Username: ${username}, Email: ${email}`);
    res.json({ message: 'User registered successfully' });
});

// Optional: User registration info route (GET)
app.get('/api/auth/register', (req, res) => {
    res.send('Registration endpoint. Use POST to register a user.');
});

// Start the server
const PORT = process.env.PORT || 5000; // Use environment variable for the port or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
