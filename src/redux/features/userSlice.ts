import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
    token: string;
    tokenExp: number;
    userName: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    token: '',
    tokenExp: 0,
    userName: '',
    isLoggedIn: false,
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
            state.token = action.payload.data.token;
            state.tokenExp = action.payload.data.exp;
            state.userName = action.payload.data.userName;
            state.isLoggedIn = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions;

export default userSlice.reducer;
