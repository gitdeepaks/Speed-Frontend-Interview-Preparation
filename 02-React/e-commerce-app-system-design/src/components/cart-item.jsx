export const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        borderBottom: '1px solid #eee',
        gap: '15px',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
        }}
      >
        Image
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <h4
          style={{
            margin: '0 0 5px 0',
          }}
        >
          {item.name}
        </h4>
        <p
          style={{
            margin: 0,
            color: '#666',
          }}
        >
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span>Qty:</span>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          min="1"
          style={{
            width: '60px',
            padding: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={() => onRemoveItem(item.id)}
          style={{
            padding: '5px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </div>
      <div
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          minWidth: '80px',
          text: 'right',
        }}
      >
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};
