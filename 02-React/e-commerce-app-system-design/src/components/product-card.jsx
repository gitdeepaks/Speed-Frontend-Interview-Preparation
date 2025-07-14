export const ProductCard = ({ product, onAddCart, onProductClick }) => {
  return (
    <div className="product-card">
      <div
        className="product-card-image"
        onClick={() => onProductClick(product)}
      >
        {/* If you want to show the image, uncomment the next line: */}
        {/* <img src={product.image} alt={product.name} /> */}
        <span style={{ color: "#666" }}>Product Image</span>
      </div>
      <h3 className="product-card-title">{product.name}</h3>
      <p className="product-card-price">${product.price.toFixed(2)}</p>
      <button
        className="product-card-btn"
        onClick={() => onAddCart()}
      >
        Add To Cart
      </button>
    </div>
  );
};
