import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postAPI";

//Initial State
const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: null,
};

export const fetchPost = createAsyncThunk("posts/fetchPost", async () => {
  const posts = await getPost();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.posts = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.posts = [];
    });
  },
});

export default postsSlice.reducer;
