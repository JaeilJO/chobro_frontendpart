import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface authModalModeState {
    mode: 'login' | 'signup';
}

const initialState: authModalModeState = {
    mode: 'login',
};

export const authModalModeSlice = createSlice({
    name: 'authModalMode',
    initialState,
    reducers: {
        changeMode: (state, action: PayloadAction<'login' | 'signup'>) => {
            state.mode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeMode } = authModalModeSlice.actions;

export default authModalModeSlice.reducer;
