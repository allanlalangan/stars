import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const { token } = JSON.parse(localStorage.getItem('credentials')) || '';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const createPost = createAsyncThunk(
  'posts/createPost',
  async (data, thunkAPI) => {
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const resp = await axios.post(
        'http://localhost:5000/api/posts',
        data,
        config
      );
      return resp.data;
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset(state) {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.message = 'Creating Post';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.message = 'New Post Added';
        state.posts.push(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default postsSlice.reducer;
export { createPost };
