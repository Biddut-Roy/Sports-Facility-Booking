import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BK_URL_LINK}`,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    userCreate: builder.mutation({
      query: (data) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    logInUser: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getFacility: builder.query({
      query: () => ({
        url: "/api/facility/",
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product/add",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useUserCreateMutation,
  useLogInUserMutation,
  useGetFacilityQuery,
  useAddProductMutation,
} = baseApi;
