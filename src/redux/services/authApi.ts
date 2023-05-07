import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import jwt from 'jsonwebtoken';
import { decodeJwt, isAccessTokenValid } from './utils/AuthFunction';

interface DecodedUserDataType {
    username: string;
    exp: number;
    iat?: number;
    user_id: string;
}

interface LoginResultType {
    accessToken: string;
}

interface ResultData {
    accessToken: string;
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
        //endPoint: /login
        login: builder.mutation({
            query: (body) => ({
                url: `login`,
                method: 'POST',
                body,
            }),
            transformResponse: async (result: LoginResultType) => {
                //Token 가져오기
                const token: string = result.accessToken;
                //Token 존재 여부
               isAccessTokenValid(token)
               //Token Decode
                return decodeJwt(token)
            },
        }),

        logout: builder.query({
            query: (refreshToken) => ({
                url: `logout`,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                }}),

        }),

        //endPoint : /refresh
        refresh: builder.query({
            query: (refreshToken) => ({
                url: `refresh`,
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },

                responseHandler: async (response) => {
                    const accessToken= await response.json().then((data)=> (data.accessToken))
                    const setCookieHeader = response.headers.get('set-cookie');
                    if (setCookieHeader === null) {
                        throw new Error("don't have a refreshToken");
                    }
                    return {
                        accessToken: accessToken,
                        setCookieHeader,
                    };
                },
            }),
            transformResponse: async (result: ResultData) => {
                
                //jwt 디코드해서 필요한 값 뽑기
                const jwtString = result.accessToken;
                console.log('jwtStirig==',jwtString)
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

export const { useLoginMutation, useLogoutQuery,useRefreshQuery } = authApi;
