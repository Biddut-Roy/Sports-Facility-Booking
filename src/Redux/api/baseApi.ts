import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BK_URL_LINK}`,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category/get",
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

export const { useGetCategoryQuery, useAddProductMutation } = baseApi;
