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
      // 'http://localhost:5000/api/astro/charts',
      'https://stars-production-0f42.up.railway.app/api/astro/charts',
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

const createChart = createAsyncThunk(
  'chart/createChart',
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        // 'http://localhost:5000/api/astro/charts',
        'https://stars-production-0f42.up.railway.app/api/astro/charts',
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

const deleteChart = createAsyncThunk(
  'chart/deleteChart',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const resp = await axios.delete(
        // `http://localhost:5000/api/astro/charts/${id}`,
        `https://stars-production-0f42.up.railway.app/api/astro/charts/${id}`,
        config
      );

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
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
      .addCase(createChart.pending, (state) => {
        state.isLoading = true;
        state.message = 'Getting natal placements...';
      })
      .addCase(createChart.fulfilled, (state, action) => {
        state.message = '';
        state.isLoading = false;
        state.isSuccess = true;
        state.charts.push(action.payload);
      })
      .addCase(createChart.rejected, (state, action) => {
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
      })
      .addCase(deleteChart.pending, (state) => {
        state.isLoading = true;
        state.message = 'Deleting chart...';
      })
      .addCase(deleteChart.fulfilled, (state, action) => {
        state.message = '';
        state.isLoading = false;
        state.isSuccess = true;
        state.charts = action.payload.charts;
      })
      .addCase(deleteChart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default chartSlice.reducer;
export const { reset } = chartSlice.actions;
export { createChart, getCharts, deleteChart };
