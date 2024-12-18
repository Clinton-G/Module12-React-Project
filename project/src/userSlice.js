import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: JSON.parse(sessionStorage.getItem('user')) || null,
  reducers: {
    setUser(state, action) {
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    },
    clearUser(state) {
      sessionStorage.removeItem('user');
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
