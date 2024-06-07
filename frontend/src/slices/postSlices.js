import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],

  // localStorage.getItem("posts")
  // ? JSON.parse(localStorage.getItem("posts"))
  // : []
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      // localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      // localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      // localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export const { addPost, deletePost, setPosts } = postsSlice.actions;
export default postsSlice.reducer;
