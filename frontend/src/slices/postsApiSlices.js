import { apiSlice } from "./apiSlices";
const POST_URL = "/api/v1/posts";

export const postApiSlices = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `${POST_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = postApiSlices;
