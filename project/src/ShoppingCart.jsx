import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, updateProductQuantity } from './Store/cartSlice';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateProductQuantity({ id: productId, quantity }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Youre Cart is Empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price} x {product.quantity}
                <button onClick={() => handleRemove(product.id)}>Remove:</button>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleUpdateQuantity(product.id, parseInt(e.target.value))}
                />
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
