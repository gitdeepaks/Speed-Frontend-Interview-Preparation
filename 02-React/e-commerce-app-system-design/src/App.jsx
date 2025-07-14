import { useState } from 'react';
import './App.css';
import { Cart } from './components/cart-component';
import { Checkout } from './components/checkout';
import { ProductDetails } from './components/product-details';
import { ProductListing } from './components/product-listing';

function App() {
  const [curerentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderComplete, setOrderComplete] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        )
      );
    }
  };

  const handleCheckout = () => {
    setOrderComplete(true);
    setCart([]);
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
    setOrderComplete(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      {curerentPage === 'products' && (
        <ProductListing
          onAddToCart={addToCart}
          onProductClick={(product) => {
            setSelectedProduct(product);
            setCurrentPage('product-details');
          }}
          cartCount={cart.length}
          onCartClick={() => setCurrentPage('cart')}
        />
      )}
      {curerentPage === 'product-details' && (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={addToCart}
          onBackClick={() => setCurrentPage('products')}
        />
      )}

      {curerentPage === 'cart' && (
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onContinueShopping={() => setCurrentPage('products')}
          onCheckout={() => setCurrentPage('checkout')}
        />
      )}

      {curerentPage === 'checkout' && (
        <Checkout
          orderComplete={orderComplete}
          onPlaceorder={handleCheckout}
          onContinueShopping={handleContinueShopping}
        />
      )}
    </div>
  );
}

export default App;
