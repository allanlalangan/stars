import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signs: [
    { name: 'aries', users: 0 },
    { name: 'taurus', users: 0 },
    { name: 'gemini', users: 0 },
    { name: 'cancer', users: 0 },
    { name: 'leo', users: 0 },
    { name: 'virgo', users: 0 },
    { name: 'libra', users: 0 },
    { name: 'scorpio', users: 0 },
    { name: 'sagittarius', users: 0 },
    { name: 'capricorn', users: 0 },
    { name: 'aquarius', users: 0 },
    { name: 'pisces', users: 0 },
  ],
};
const signsSlice = createSlice({
  name: 'signs',
  initialState,
  reducers: {
    decrement: (state, action) => {
      state.signs.find((sign) => sign.name === action.payload).users -= 1;
    },
    increment: (state, action) => {
      state.signs.find((sign) => sign.name === action.payload).users += 1;
    },
  },
});

export default signsSlice.reducer;
export const { increment, decrement } = signsSlice.actions;
