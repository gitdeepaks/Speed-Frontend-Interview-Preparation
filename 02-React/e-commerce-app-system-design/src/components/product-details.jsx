import React from 'react';

export const ProductDetails = ({ product, onAddToCart, onBackClick }) => {
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <button>🔙 Back to Products</button>
      <div
        style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            flex: '1',
            minWidth: '300px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#f5f5f5',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#666' }}>Main Product Image</span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                Thumb {i}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>
            {product.name}
          </h1>
          <p
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#007bff',
              marginBottom: '20px',
            }}
          >
            ${product.price.toFixed(2)}
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '30px',
              color: '#666',
            }}
          >
            {product.description}
          </p>
          <button
            onClick={() => onAddToCart(product)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
