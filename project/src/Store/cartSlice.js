import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(sessionStorage.getItem('cart')) || [],
  reducers: {
    addProductToCart(state, action) {
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      sessionStorage.setItem('cart', JSON.stringify(state));
    },
    removeProductFromCart(state, action) {
      const updatedCart = state.filter(product => product.id !== action.payload);
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    updateProductQuantity(state, action) {
      const product = state.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
        sessionStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart(state) {
      sessionStorage.removeItem('cart');
      return [];
    },
  },
});

export const { addProductToCart, removeProductFromCart, updateProductQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
