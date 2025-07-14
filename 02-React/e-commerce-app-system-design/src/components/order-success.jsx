export const OrderSuccess = ({ onContinueShopping }) => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h2 style={{ color: '#28a745', marginBottom: '20px' }}>Order Complete !</h2>
    <p
      style={{
        marginBottom: '20px',
      }}
    >
      Thank you for purchase
    </p>
    <button
      onClick={onContinueShopping}
      style={{
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Continue Shopping
    </button>
  </div>
);
