import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '../ProductList';
import { useTranslation } from 'react-i18next';

const mockProducts = [
  { id: 1, title: 'Product 1', price: 100, description: 'A great product', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Product 2', price: 200, description: 'Another great product', image: 'https://via.placeholder.com/150' },
];

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

jest.mock('../api/fetchProducts', () => ({
  fetchProducts: jest.fn(() => Promise.resolve(mockProducts)),
}));

test('renders product list and displays products', async () => {
  render(<ProductList />);
  
  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });
});

test('handles product search functionality', async () => {
  render(<ProductList />);
  
  const searchInput = screen.getByPlaceholderText('searchPlaceholder');
  fireEvent.change(searchInput, { target: { value: 'Product 1' } });
  
  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
  });
});
