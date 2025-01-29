import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../Store/cartSlice';

const useCartPersistence = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.forEach((product) => {
      dispatch(addProductToCart(product));
    });
  }, [dispatch]);
};

export default useCartPersistence;
