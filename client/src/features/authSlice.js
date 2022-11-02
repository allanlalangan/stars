import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const existingUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {
  console.log('register dispatch');
  try {
  } catch (error) {
    console.log(error);
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.message = 'Registering new account';
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.message = 'Successfully created account. Welcome to Stars!';
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
export { register };
