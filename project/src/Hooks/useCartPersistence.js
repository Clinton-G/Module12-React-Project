import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from '../Store/cartSlice';

const useCartPersistence = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    dispatch(setCart(cart));
  }, [dispatch]);
};

export default useCartPersistence;
