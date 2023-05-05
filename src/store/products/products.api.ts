import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";
import { BasketCart } from "./products.types";

export const productApi = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (build) => ({
    getProducts: build.query<BasketCart[], number>({
      query: (limit: number) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
