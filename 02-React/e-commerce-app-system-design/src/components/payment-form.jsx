export const PaymentForm = () => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ marginBottom: '15px' }}>Card Information</h3>

      <input
        type="text"
        placeholder="1234 1234 1234 1234"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="MM/YY"
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
        <input
          type="text"
          placeholder="CVV"
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );
};
