import { CartItem } from "./cart-item";

export const Cart = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onCheckout,
}) => {
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>Shopping Item</h1>
        <button
          onClick={onContinueShopping}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
      {cart.length === 0 ? (
        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          Your cart is Empty
        </p>
      ) : (
        <div>
          <p>{cart.length} Items in the cart</p>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              padding: "20px 0",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Total: ${getCartTotal().toFixed(2)}
            </span>
            <button
              onClick={onCheckout}
              style={{
                padding: "12px 24px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
