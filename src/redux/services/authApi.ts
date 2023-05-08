import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import jwt from 'jsonwebtoken';
import { isAccessTokenValid, decodeJwt, checkRefreshToken, jwtDecode, getRefreshTokenValue } from '../../utils/utils';

interface LoginResultType {
    accessToken: string;
}

interface ResultData {
    accessToken: string;
    refreshToken: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/auth',
        credentials: 'include',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        //endPoint: /login
        login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body,
            }),
            transformResponse: async (result: LoginResultType) => {
                const token: string = result.accessToken;

                isAccessTokenValid(token);

                return decodeJwt(token);
            },
        }),

        //endPoint: /logout
        logout: builder.query({
            query: (refreshToken) => ({
                url: `logout`,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            }),
        }),

        //endPoint: /refresh
        refresh: builder.query({
            query: (refreshToken) => ({
                url: `refresh`,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
                responseHandler: async (response) => {
                    const accessToken: Promise<string> = await response.json().then((data) => data.accessToken);
                    const refreshToken: string | null = response.headers.get('set-cookie');
                    checkRefreshToken(refreshToken);
                    return {
                        accessToken,
                        refreshToken,
                    };
                },
            }),
            transformResponse: async (result: ResultData) => {
                const decodedAccessToken = jwtDecode(result.accessToken);

                const refreshTokenValue = getRefreshTokenValue(result.refreshToken);

                const returnValue = {
                    userData: decodedAccessToken,
                    accessToken: result.accessToken,
                    refreshToken: refreshTokenValue,
                };
                return returnValue;
            },
        }),
    }),
});

export const { useLoginMutation, useLogoutQuery, useRefreshQuery } = authApi;
