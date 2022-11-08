import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios.get('http://localhost:5000/api/posts', config);
    console.log('resp data', resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const createPost = createAsyncThunk(
  'posts/createPost',
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const resp = await axios.post(
        'http://localhost:5000/api/posts',
        formData,
        config
      );
      console.log(resp.data);
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
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.message = 'Fetching Posts';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.message = 'Fetch Successful';
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
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
export { getPosts, createPost };
