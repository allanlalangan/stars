import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const getCurrentPlanets = createAsyncThunk(
  'today/getCurrentPlanets',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { data },
      } = await axios.get(
        'http://localhost:5000/api/astro/chart/today',
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error getting current planets');
      const message =
        error?.resp?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const todaySlice = createSlice({
  name: 'today',
  initialState,
  reducers: {
    reset(state) {
      state.data = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentPlanets.pending, (state) => {
        state.isLoading = true;
        state.message = 'Getting current planet positions...';
      })
      .addCase(getCurrentPlanets.fulfilled, (state, action) => {
        state.message = '';
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getCurrentPlanets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default todaySlice.reducer;
export const { reset } = todaySlice.actions;
export { getCurrentPlanets };
