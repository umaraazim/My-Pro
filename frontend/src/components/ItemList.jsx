// Component to display list of items

function ItemList({ items, onDelete, onEdit }) {
  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="items-container">
      <h2>Items List ({items.length})</h2>
      
      {/* Show message if no items */}
      {items.length === 0 ? (
        <div className="no-items">
          <p>No items found. Add your first item above!</p>
        </div>
      ) : (
        // Display items
        <div className="items-list">
          {items.map((item) => (
            <div key={item._id} className="item-card">
              <div className="item-header">
                <div>
                  <h3 className="item-name">{item.name}</h3>
                </div>
                <div className="item-quantity">
                  Qty: {item.quantity}
                </div>
              </div>
              
              <p className="item-description">{item.description}</p>
              
              <p className="item-date">
                Created: {formatDate(item.createdAt)}
              </p>
              
              {/* Action Buttons */}
              <div className="item-actions">
                <button 
                  className="btn-edit"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button 
                  className="btn-danger"
                  onClick={() => onDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
