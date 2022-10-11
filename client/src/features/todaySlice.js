import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  planets: [],
  houses: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const getCurrentPlanets = createAsyncThunk(
  'today/getCurrentPlanets',
  async (_, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await axios.get('http://localhost:5000/planetstoday');
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
    setCurrentPlanets(state) {
      return state;
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
        // state.data = action.payload;
        for (const prop in action.payload) {
          if (typeof action.payload[prop] !== 'object') {
            state.data[prop] = action.payload[prop];
          }
          if (action.payload[prop]?.point_type === 'Planet') {
            state.planets.push(action.payload[prop]);
          }
          if (action.payload[prop]?.point_type === 'House') {
            state.houses.push(action.payload[prop]);
          }
        }
      })
      .addCase(getCurrentPlanets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default todaySlice.reducer;
export const { setCurrentPlacements } = todaySlice.actions;
export { getCurrentPlanets };
