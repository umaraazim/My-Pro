// Import the Item model
const Item = require('../models/Item');

// @desc    Get all items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  try {
    // Fetch all items from database, sorted by most recent first
    const items = await Item.find().sort({ createdAt: -1 });
    
    // Send success response with items
    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single item by ID
// @route   GET /api/items/:id
// @access  Public
const getItem = async (req, res) => {
  try {
    // Find item by ID from URL parameter
    const item = await Item.findById(req.params.id);
    
    // Check if item exists
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }
    
    // Send success response with item
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    // Handle invalid ID format or other errors
    res.status(400).json({
      success: false,
      error: 'Invalid item ID'
    });
  }
};

// @desc    Create new item
// @route   POST /api/items
// @access  Public
const createItem = async (req, res) => {
  try {
    // Create new item with data from request body
    const item = await Item.create(req.body);
    
    // Send success response with created item
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    // Handle other errors
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Update item
// @route   PUT /api/items/:id
// @access  Public
const updateItem = async (req, res) => {
  try {
    // Find item by ID and update with new data
    // new: true returns the updated document
    // runValidators: true runs validation on update
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    // Check if item exists
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }
    
    // Send success response with updated item
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    
    // Handle other errors
    res.status(400).json({
      success: false,
      error: 'Invalid item ID or data'
    });
  }
};

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Public
const deleteItem = async (req, res) => {
  try {
    // Find and delete item by ID
    const item = await Item.findByIdAndDelete(req.params.id);
    
    // Check if item exists
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }
    
    // Send success response
    res.status(200).json({
      success: true,
      data: {},
      message: 'Item deleted successfully'
    });
  } catch (error) {
    // Handle errors
    res.status(400).json({
      success: false,
      error: 'Invalid item ID'
    });
  }
};

// Export all controller functions
module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};
