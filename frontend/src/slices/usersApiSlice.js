// slices/usersApiSlice.js
import { apiSlice } from "./apiSlices";

const USERS_URL = "/api/v1/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/updatedetails`,
        method: "PATCH",
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: `${USERS_URL}/getcurrentuser`,
        method: "GET",
      }),
    }),
    updateAvatar: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/avatar`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateCoverImage: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/coverImage`,
        method: "PATCH",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/changepassword`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetUserInfoQuery,
  useChangePasswordMutation,
  useUpdateAvatarMutation,
  useUpdateCoverImageMutation,
} = userApiSlice;
