import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface accessTokenInfo {
    //아직없음
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/auth' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
