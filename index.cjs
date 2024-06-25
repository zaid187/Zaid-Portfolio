const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Use CORS middleware
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Middleware for admin token authentication
const authenticateAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
};

const Contact = require('./models/Contact');

// POST endpoint to add a new contact
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        // Email notification
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET endpoint to retrieve contacts, protected with admin authentication
app.get('/api/contact', authenticateAdmin, async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
