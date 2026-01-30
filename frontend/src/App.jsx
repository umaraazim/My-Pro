// Import React hooks
import { useState, useEffect } from 'react';
// Import components
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
// Import API functions
import { getAllItems, deleteItem } from './api/itemApi';
// Import styles
import './App.css';

function App() {
  // State for storing all items
  const [items, setItems] = useState([]);
  // State for the item being edited (null when not editing)
  const [editingItem, setEditingItem] = useState(null);
  // State for loading indicator
  const [loading, setLoading] = useState(true);
  // State for error messages
  const [error, setError] = useState('');
  // State for success messages
  const [success, setSuccess] = useState('');

  // Fetch items when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  // Function to fetch all items from the API
  const fetchItems = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await getAllItems();
      setItems(response.data);
    } catch (err) {
      setError('Failed to fetch items. Make sure the backend server is running.');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle item creation
  const handleItemAdded = () => {
    // Refresh the items list
    fetchItems();
    // Show success message
    setSuccess('Item added successfully!');
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  // Function to handle item update
  const handleItemUpdated = () => {
    // Refresh the items list
    fetchItems();
    // Clear the editing state
    setEditingItem(null);
    // Show success message
    setSuccess('Item updated successfully!');
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  // Function to handle item deletion
  const handleDelete = async (id) => {
    // Confirm deletion with user
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteItem(id);
        // Refresh the items list
        fetchItems();
        // Show success message
        setSuccess('Item deleted successfully!');
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to delete item.');
        console.error('Error deleting item:', err);
      }
    }
  };

  // Function to start editing an item
  const handleEdit = (item) => {
    setEditingItem(item);
    // Scroll to top to see the edit form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  return (
    <div className="app">
      {/* App Header */}
      <div className="app-header">
        <h1>Item Management</h1>
        <p>Manage your items with Creating, Reading, Updating, and Deleting</p>
      </div>

      {/* Success Message */}
      {success && <div className="success">{success}</div>}

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Show Edit Form or Add Form */}
      {editingItem ? (
        <EditItemForm
          item={editingItem}
          onItemUpdated={handleItemUpdated}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddItemForm onItemAdded={handleItemAdded} />
      )}

      {/* Item List */}
      {loading ? (
        <div className="loading">Loading items...</div>
      ) : (
        <ItemList
          items={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;
