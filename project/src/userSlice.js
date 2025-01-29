import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      if (action.payload && typeof action.payload === 'object') {
        const { username, email, password } = action.payload;
        state.username = username;
        state.email = email;
        state.password = password;
      } else {
        console.error('Invalid payload: action.payload should be a plain object');
      }
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
