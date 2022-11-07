import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  charts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const getCharts = createAsyncThunk('chart/getCharts', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await axios.get(
      'http://localhost:5000/api/astro/charts',
      config
    );
    return resp.data;
  } catch (error) {
    console.log('ERROR getCharts getCharts asyncThunk throw error');
    // const message =
    //   (error.resp && error.resp.data && error.resp.data.message) ||
    //   error.message ||
    //   error.toString()
    return thunkAPI.rejectWithValue(error.toString());
  }
});

const getNatalData = createAsyncThunk(
  'chart/getNatalData',
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        'http://localhost:5000/api/astro/charts',
        formData,
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('Error getting current planets');
      const message =
        error?.resp?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const chartSlice = createSlice({
  name: 'today',
  initialState,
  reducers: {
    reset(state) {
      state.data = null;
      state.chart = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNatalData.pending, (state) => {
        state.isLoading = true;
        state.message = 'Getting natal placements...';
      })
      .addCase(getNatalData.fulfilled, (state, action) => {
        state.message = '';
        state.isLoading = false;
        state.isSuccess = true;
        state.charts.push(action.payload);
      })
      .addCase(getNatalData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCharts.pending, (state) => {
        state.isLoading = true;
        state.message = 'Loading your charts';
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        state.message = '';
        state.isLoading = false;
        state.isSuccess = true;
        state.charts = action.payload;
      })
      .addCase(getCharts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default chartSlice.reducer;
export const { reset } = chartSlice.actions;
export { getNatalData, getCharts };
