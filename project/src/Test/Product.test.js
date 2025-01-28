import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('ProductItem', () => {
  const product = {
    id: 1,
    title: 'Product 1',
    description: 'A test product',
    price: 100,
    image: 'test_image.jpg',
  };

  it('should render product details correctly', () => {
    render(
      <Provider store={store}>
        <ProductItem product={product} />
      </Provider>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should trigger add to cart functionality', () => {
    render(
      <Provider store={store}>
        <ProductItem product={product} onAddToCart={jest.fn()} />
      </Provider>
    );

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(button);

    expect(product.onAddToCart).toHaveBeenCalledTimes(1);
  });
});
