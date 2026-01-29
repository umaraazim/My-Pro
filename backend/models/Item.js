// Import Mongoose
const mongoose = require('mongoose');

// Define the Item schema
const itemSchema = new mongoose.Schema(
  {
    // Name of the item (required)
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true
    },
    // Description of the item
    description: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true
    },
    // Quantity of the item
    quantity: {
      type: Number,
      required: [true, 'Please add a quantity'],
      min: [0, 'Quantity cannot be negative']
    }
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
  }
);

// Export the Item model
module.exports = mongoose.model('Item', itemSchema);
