import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../ProductList';

jest.mock('./ProductItem', () => ({
  ProductItem: ({ product, onAddToCart }) => (
    <div>
      <h3>{product.title}</h3>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  ),
}));

test('integrates ProductItem with ProductList and handles add to cart', () => {
  const mockProducts = [
    { id: 1, title: 'Product 1', price: 100, description: 'A great product', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 200, description: 'Another great product', image: 'https://via.placeholder.com/150' },
  ];

  const handleAddToCart = jest.fn();

  render(<ProductList products={mockProducts} onAddToCart={handleAddToCart} />);

  fireEvent.click(screen.getByText(/Add to Cart/i));

  expect(handleAddToCart).toHaveBeenCalledWith(mockProducts[0]);
});
