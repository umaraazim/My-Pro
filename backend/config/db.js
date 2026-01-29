// Import Mongoose for MongoDB connection
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from .env
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error and exit process if connection fails
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
