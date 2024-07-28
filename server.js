const express = require('express');
const connectDB = require('./config/db'); // Correct path to db.js
const cors = require('cors'); // Importing cors

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors()); // Enabling CORS
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blog', require('./routes/blog'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
