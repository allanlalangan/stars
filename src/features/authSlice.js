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
    reset(state) {
      state.user = initialState.user;
      state.birthDate = initialState.birthDate;
      state.isLoading = initialState.isLoading;
      state.isError = initialState.isError;
      state.isSuccess = initialState.isSuccess;
      state.message = initialState.message;
    },
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
