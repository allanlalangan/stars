import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  console.log('getUser dispatch');
  try {
    const { data } = await axios.get(
      'http://localhost:5000/auth/login/success',
      { withCredentials: true }
    );
    console.log('google login success');
    return data;
  } catch (error) {
    console.log(error);
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  user: null,
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
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.message = 'Logging in with Google';
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.message = 'Successfully logged in with Google';
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
export { getUser };
