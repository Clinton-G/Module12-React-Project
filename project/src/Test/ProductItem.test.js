import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from '../ProductItem';
import App from '../App';

const mockProduct = {
  id: 1,
  title: 'Product 1',
  price: 100,
  description: 'A great product',
  image: 'https://via.placeholder.com/150',
};

test('renders product item and handles add to cart', () => {
  const handleAddToCart = jest.fn();
  
  render(<ProductItem product={mockProduct} onAddToCart={handleAddToCart} />);
  
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  
  const button = screen.getByRole('button', { name: /Add to Cart/i });
  
  fireEvent.click(button);
  
  expect(handleAddToCart).toHaveBeenCalledTimes(1);
  expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
});
