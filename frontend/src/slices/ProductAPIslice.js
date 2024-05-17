import { PRODUCTS_URL } from '../constant';
import { apiSlice } from './apiSlices';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //all product
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      KeepUnusedDataFor: 5,
    }),
    //single product
    getProductDetails: builder.query({
      query: (productID) => ({
        url: `${PRODUCTS_URL}/${productID}`,
      }),
      KeepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productApiSlice;
