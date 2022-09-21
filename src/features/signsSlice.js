import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aries: { users: 0 },
  taurus: { users: 0 },
  gemini: { users: 0 },
  cancer: { users: 0 },
  leo: { users: 0 },
  virgo: { users: 0 },
  libra: { users: 0 },
  scorpio: { users: 0 },
  sagittarius: { users: 0 },
  capricorn: { users: 0 },
  aquarius: { users: 0 },
  pisces: { users: 0 },
};

const signsSlice = createSlice({
  name: 'signs',
  initialState,
  reducers: {
    increment(state) {},
    decrement(state) {},
  },
});

export default signsSlice.reducer;
export const { increment, decrement } = signsSlice.actions;
