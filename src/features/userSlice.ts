import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    token: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    token: '',
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions;

export default userSlice.reducer;
