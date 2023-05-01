import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface modalState {
    headerAvatarModal: boolean;
    headerLoginButtonModal: boolean;
    authMode: 'login' | 'signup';
}

const initialState: modalState = {
    headerAvatarModal: false,
    headerLoginButtonModal: false,
    authMode: 'login',
};

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState,
    reducers: {
        toggleHeaderLoginButtonModal: (state) => {
            state.headerLoginButtonModal = !state.headerLoginButtonModal;
        },
        toggleHeaderAvatarModal: (state) => {
            state.headerAvatarModal = !state.headerAvatarModal;
        },
        changeMode: (state, action: PayloadAction<'login' | 'signup'>) => {
            state.authMode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeMode, toggleHeaderAvatarModal, toggleHeaderLoginButtonModal } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
