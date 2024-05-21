import { apiSlice } from './apiSlices.js';

import { PRODUCTS_URL } from '../constant.js';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApiSlice;
