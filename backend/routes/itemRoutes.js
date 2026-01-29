// Import Express Router
const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

// Define routes
// GET all items and POST new item
router.route('/')
  .get(getItems)      // GET /api/items
  .post(createItem);  // POST /api/items

// GET single item, UPDATE item, and DELETE item
router.route('/:id')
  .get(getItem)       // GET /api/items/:id
  .put(updateItem)    // PUT /api/items/:id
  .delete(deleteItem); // DELETE /api/items/:id

// Export router
module.exports = router;
