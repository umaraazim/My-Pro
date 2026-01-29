// Import axios for making HTTP requests
import axios from 'axios';

// Base URL for the API (from environment variable or default)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API functions for CRUD operations

// Get all items
export const getAllItems = async () => {
  const response = await axios.get(`${API_URL}/api/items`);
  return response.data;
};

// Get a single item by ID
export const getItemById = async (id) => {
  const response = await axios.get(`${API_URL}/api/items/${id}`);
  return response.data;
};

// Create a new item
export const createItem = async (itemData) => {
  const response = await axios.post(`${API_URL}/api/items`, itemData);
  return response.data;
};

// Update an existing item
export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${API_URL}/api/items/${id}`, itemData);
  return response.data;
};

// Delete an item
export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_URL}/api/items/${id}`);
  return response.data;
};
