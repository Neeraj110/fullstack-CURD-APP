import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlices";
import { apiSlice } from "../slices/apiSlices";
import postsReducer from "../slices/postSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
