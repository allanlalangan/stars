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
    const resp = await axios.get(
      // 'http://localhost:5000/api/posts',
      'https://stars-production-0f42.up.railway.app/api/posts',
      config
    );

    const sorted = resp.data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return sorted;
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
        // 'http://localhost:5000/api/posts',
        'https://stars-production-0f42.up.railway.app/api/posts',
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

const likePost = createAsyncThunk('posts/likePost', async (post, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(post);

    const resp = await axios.put(
      // `http://localhost:5000/api/posts/${post.id}`,
      `https://stars-production-0f42.up.railway.app/api/posts/${post.id}`,

      post,
      config
    );
    const sorted = resp.data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sorted;
    // return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.toString());
  }
});

const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const resp = await axios.delete(
        // `http://localhost:5000/api/posts/${id}`,
        `https://stars-production-0f42.up.railway.app/api/posts/${id}`,
        config
      );

      const sorted = resp.data.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sorted;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
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
        state.posts.unshift(action.payload.post);
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
        state.message = 'Creating Post';
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.message = 'Post Liked!';
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.message = 'Deleting Post';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.message = 'Post Deleted';
        state.posts = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default postsSlice.reducer;
export { getPosts, createPost, deletePost, likePost };
