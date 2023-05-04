import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import jwt from 'jsonwebtoken';

interface DecodedUserDataType {
    username: string;
    exp: number;
    iat?: number;
    user_id: string;
}

interface LoginResultType {
    access_token: string;
}

interface ResultData {
    jwtString: string;
    setCookieHeader: string;
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
        login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body,
            }),
            transformResponse: async (result: LoginResultType) => {
                const token: string = result.access_token;

                if (!token) {
                    throw new Error('Token not found in the result');
                }

                const decodedUserData = jwt.decode(token) as DecodedUserDataType;

                const transRes = {
                    token: token,
                    userName: decodedUserData.username,
                    exp: decodedUserData.exp,
                };
                return transRes;
            },
        }),

        //endPoint : /refresh
        refresh: builder.query({
            query: (refreshToken) => ({
                url: `refresh`,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },

                responseHandler: async (response) => {
                    const jwtString = await response.text();
                    const setCookieHeader = response.headers.get('set-cookie');
                    if (setCookieHeader === null) {
                        throw new Error("don't have a refreshToken");
                    }
                    return {
                        jwtString,
                        setCookieHeader,
                    };
                },
            }),
            transformResponse: async (result: ResultData) => {
                console.log(result);
                //jrwt 디코드해서 필요한 값 뽑기
                const jwtString = result.jwtString;

                const jwt_decoded = jwt.decode(jwtString) as DecodedUserDataType;

                //리프레쉬토큰을 값만 뽑기 위한 코드
                const setCookieHeader = result.setCookieHeader;
                const nameValuePattern = /^\s*([^=]+)=([^;]+)/;
                const match = setCookieHeader.match(nameValuePattern);

                // 토큰이 없는 경우
                if (match) {
                    const RefreshTokenValue = match[2];

                    const transRes = {
                        token: jwtString,
                        userName: jwt_decoded.username,
                        exp: jwt_decoded.exp,
                        RefreshTokenValue,
                    };

                    if (!transRes) {
                        throw new Error('Token not found');
                    }

                    return transRes;
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRefreshQuery } = authApi;
