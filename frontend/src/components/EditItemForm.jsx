// Import React hooks
import { useState, useEffect } from 'react';
// Import API function
import { updateItem } from '../api/itemApi';

function EditItemForm({ item, onItemUpdated, onCancel }) {
  // State for form inputs (initialize with item data)
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description,
    quantity: item.quantity
  });

  // State for form submission
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Update form data when item prop changes
  useEffect(() => {
    setFormData({
      name: item.name,
      description: item.description,
      quantity: item.quantity
    });
  }, [item]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'quantity' ? Number(value) : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      
      // Call API to update item
      await updateItem(item._id, formData);
      
      // Notify parent component
      onItemUpdated();
    } catch (err) {
      setError('Failed to update item. Please try again.');
      console.error('Error updating item:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Item</h2>
      
      {/* Show error if any */}
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter item name"
            required
          />
        </div>

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter item description"
            required
          />
        </div>

        {/* Quantity Input */}
        <div className="form-group">
          <label htmlFor="quantity">Quantity *</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button 
            type="submit" 
            className="btn-primary"
            disabled={submitting}
          >
            {submitting ? 'Updating...' : 'Update Item'}
          </button>
          <button 
            type="button" 
            className="btn-secondary"
            onClick={onCancel}
            disabled={submitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItemForm;
