// Import React hooks
import { useState } from 'react';
// Import API function
import { createItem } from '../api/itemApi';

function AddItemForm({ onItemAdded }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 0
  });

  // State for form submission
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

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
      
      // Call API to create item
      await createItem(formData);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        quantity: 0
      });
      
      // Notify parent component
      onItemAdded();
    } catch (err) {
      setError('Failed to create item. Please try again.');
      console.error('Error creating item:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Item</h2>
      
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

        {/* Submit Button */}
        <div className="button-group">
          <button 
            type="submit" 
            className="btn-primary"
            disabled={submitting}
          >
            {submitting ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
