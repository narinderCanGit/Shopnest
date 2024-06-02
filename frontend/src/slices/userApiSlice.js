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
    register: builder.mutation({           // mutation is used since this is not a get request
      query: (data) => ({
        url: `${USERS_URL} `,
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
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
} = userApiSlice;