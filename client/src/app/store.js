import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import signsReducer from '../features/signsSlice';

const store = configureStore({
  reducer: { auth: authReducer, signs: signsReducer },
});

export default store;
