import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface accessTokenInfo {
    accessToken: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/auth' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: `login`,
                responseHandler: 'content-type',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
