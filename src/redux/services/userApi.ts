import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

interface User {
    username: string;
    firstName: string;
    lastName: string;
    source: string;
    is_active: boolean;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/', credentials: 'include' }),

    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
        }),

        getCert: builder.query({
            query: (accessToken) => ({
                url: `cert`,
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }),
        }),
    }),
});

export const { useSignUpMutation, useGetCertQuery } = userApi;
