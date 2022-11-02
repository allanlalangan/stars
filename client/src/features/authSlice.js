import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const existingUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: existingUser || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {
  console.log('register dispatch');
  try {
  } catch (error) {
    console.log(error);
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (code, thunkAPI) => {
    console.log('googleLogin dispatch');
    try {
      const { data } = await axios.post('http://localhost:5000/auth/google', {
        code,
      });
      if (data) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem(
          'credentials',
          JSON.stringify({ decoded: data.decoded, token: data.token })
        );
      }
      const user = {
        googleId: data.user.googleId,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        image: data.user.image,
      };

      return user;
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.message = 'Registering new account';
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.message = 'Successfully created account. Welcome to Stars!';
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(googleLogin.pending, (state) => {
        state.message = 'Logging in with Google';
        state.isLoading = true;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.message = 'Successfully Logged in with Google';
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;
export { register, googleLogin };
