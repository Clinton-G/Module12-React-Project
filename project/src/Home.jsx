import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

const Home = () => {
  const cart = useSelector((state) => state.cart || []);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>

      <p>{user?.username ? `Hello, ${user.username}` : 'Please log in'}</p>
      
      <ProductList />  

      <div>
        <h3>Youre Cart</h3>
        {cart.length === 0 ? (
          <p>Youre Cart is Empty</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.title} - {product.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
