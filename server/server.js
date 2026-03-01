const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: [
      'http://localhost:3000',
      'https://finance-tracker-one-blond.vercel.app'
    ],
    credentials: true
  }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error: ', err));

// Routes
const transportationRoutes = require('./routes/transactions');
app.use('/api/transactions', transportationRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({message: 'API is running'})
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});