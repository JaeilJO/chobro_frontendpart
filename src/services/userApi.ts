import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface accessTokenInfo {
    username: string;
    firstName: string;
    lastName: string;
    source: string;
    is_active: boolean;
}

export const userApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSignUpMutation } = userApi;
