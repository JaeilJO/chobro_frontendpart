import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
export interface CertType {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: string;
    cert_id: string;
    created_at: string;
    updated_at: string;
}

export interface UserState {
    token: string;
    tokenExp: number;
    userName: string;
    isLoggedIn: boolean;
    cert: CertType[];
}

const initialState: UserState = {
    token: '',
    tokenExp: 0,
    userName: '',
    isLoggedIn: false,
    cert: [
        {
            url: '',
            certificate: '',
            expiration_date: '',
            is_active: '',
            cert_id: '',
            created_at: '',
            updated_at: '',
        },
    ],
};

interface PayloadValue {
    data: { token: string; exp: number; userName: string };
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
    reducers: {
        setToken: (state, action: PayloadAction<any>) => {
            console.log('action.payLoad==', action.payload);
            state.token = action.payload.data.token;
            state.tokenExp = action.payload.data.exp;
            state.userName = action.payload.data.userName;
            state.isLoggedIn = true;
        },
        setCert: (state, action: PayloadAction<any>) => {
            state.cert.push({
                url: action.payload.url,
                certificate: action.payload.certificate,
                expiration_date: action.payload.expiration_date,
                is_active: action.payload.is_active,
                cert_id: action.payload.cert_id,
                created_at: action.payload.created_at,
                updated_at: action.payload.updated_at,
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions;

export default userSlice.reducer;
