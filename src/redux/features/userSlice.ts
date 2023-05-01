import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
    token: string;
    exp: number;
    userName: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<PayloadValue>) => {
            state.token = action.payload.token;
            state.tokenExp = action.payload.exp;
            state.userName = action.payload.userName;
            state.isLoggedIn = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions;

export default userSlice.reducer;
