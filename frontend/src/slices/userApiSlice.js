import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({           // mutation is used since this is not a get request
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({           
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = userApiSlice;