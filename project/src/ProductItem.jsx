import React, { useCallback } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const handleAddToCart = useCallback(() => {
    onAddToCart(product);
  }, [onAddToCart, product]);

  return (
    <div role="article" aria-labelledby={`product-title-${product.id}`} tabIndex="0">
      <h3 id={`product-title-${product.id}`}>{product.title}</h3>
      <img 
        src={product.image} 
        alt={`Image of ${product.title}`} 
        loading="lazy"
        aria-describedby={`product-description-${product.id}`} 
      />
      <p id={`product-description-${product.id}`}>{product.description}</p>
      <p>{product.price}</p>
      <button 
        onClick={handleAddToCart} 
        aria-label={`Add ${product.title} to cart`}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
