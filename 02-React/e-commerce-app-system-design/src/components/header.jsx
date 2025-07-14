import React from 'react';

export const Header = ({
  cartCount,
  onCartClick,
  onHomeClick,
  showCart = true,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
      }}
    >
      <h1
        style={{ margin: 0, fontSize: '24px', cursor: 'pointer' }}
        onClick={onHomeClick}
      >
        E-Commerce-Store
      </h1>
      {showCart && (
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Cart ({cartCount})
        </button>
      )}
    </div>
  );
};
