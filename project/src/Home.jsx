import React from 'react';
import ProductList from './ProductList';
import useCartPersistence from './Hooks/useCartPersistence';

const Home = () => {
  useCartPersistence();

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <ProductList />
    </div>
  );
};

export default Home;
