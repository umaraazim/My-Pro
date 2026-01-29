// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware
// Enable CORS for frontend communication
app.use(cors());
// Parse JSON request bodies
app.use(express.json());
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
// Mount item routes at /api/items
app.use('/api/items', itemRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MERN CRUD API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
