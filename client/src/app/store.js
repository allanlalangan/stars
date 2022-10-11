import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import todayReducer from '../features/todaySlice';

const store = configureStore({
  reducer: { auth: authReducer, today: todayReducer },
});

export default store;
