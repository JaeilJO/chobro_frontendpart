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

        //endpoint : /cert
        getCert: builder.query({
            query: (accessToken) => ({
                url: `cert`,
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }),
        }),

        patchCert: builder.mutation({
            query: ({ cert_id, accessToken, is_active }) => ({
                url: `cert/${cert_id}`,
                method: 'PATCH',
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
                body: {
                    is_active: is_active,
                },
            }),
        }),

        postCert: builder.mutation({
            query: ({ url, accessToken }) => ({
                url: `cert`,
                method: 'POST',
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
                body: {
                    url: url,
                },
            }),
        }),
    }),
});

export const { useSignUpMutation, useGetCertQuery, usePatchCertMutation, usePostCertMutation } = userApi;
