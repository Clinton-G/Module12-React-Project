import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('ShoppingCart', () => {
  it('should render the cart when there are items', () => {
    render(
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );

    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });

  it('should update the quantity when the user changes the input', () => {
    render(
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );

    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '2' } });

    expect(quantityInput.value).toBe('2');
  });

});
