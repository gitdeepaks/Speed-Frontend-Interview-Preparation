import { products } from "../products";
import { Header } from "./header";
import { ProductCard } from "./product-card";

export const ProductListing = ({
  onAddToCart,
  onProductClick,
  cartCount,
  onCartClick,
}) => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Header
        cartCount={cartCount}
        onCartClick={onCartClick}
        onHomeClick={() => {}}
      />

      <div className="product-listing-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddCart={onAddToCart}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};
