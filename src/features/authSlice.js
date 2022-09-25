import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  birthDate: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      return state;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
