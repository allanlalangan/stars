import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import todayReducer from '../features/todaySlice';
import postsReducer from '../features/postsSlice';

const store = configureStore({
  reducer: { auth: authReducer, today: todayReducer, posts: postsReducer },
});

export default store;
