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
        setUser: (state, action: PayloadAction<any>) => {
            //action.payload는 data라는 object로 가져와야함

            state.token = action.payload.data.token;
            state.tokenExp = action.payload.data.exp;
            state.userName = action.payload.data.userName;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            (state.token = ''), (state.tokenExp = 0), (state.userName = '');
            state.isLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
