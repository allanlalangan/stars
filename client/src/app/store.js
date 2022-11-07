import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import todayReducer from '../features/todaySlice';
import postsReducer from '../features/postsSlice';
import chartReducer from '../features/chartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    today: todayReducer,
    posts: postsReducer,
    chart: chartReducer,
  },
});

export default store;
