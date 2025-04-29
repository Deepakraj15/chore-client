import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/AppConstants';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), 
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth-service/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: (userData) => ({
                url: '/auth-service/auth/signup',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;