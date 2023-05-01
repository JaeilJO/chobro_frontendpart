import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import jwt_decode from 'jwt-decode';

interface JsonWebTokenDecode {
    username: string;
    exp: number;
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

            transformResponse: (result: string) => {
                const jwt_decoded: JsonWebTokenDecode = jwt_decode(result);

                const transRes = {
                    token: result,
                    userName: jwt_decoded.username,
                    exp: jwt_decoded.exp,
                };
                return transRes;
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
