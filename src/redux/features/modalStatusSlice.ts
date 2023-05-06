import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface modalState {
    headerAvatarModal: boolean;
    headerLoginButtonModal: boolean;
    authMode: 'login' | 'signup';
    tableActiveModal: {
        toggle_status: boolean;
        mode: string;
        url: string;
    };
}

const initialState: modalState = {
    headerAvatarModal: false,

    headerLoginButtonModal: false,

    authMode: 'login',

    tableActiveModal: {
        toggle_status: false,
        mode: '',
        url: '',
    },
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
        openToggleTableActiveModal: (state, action) => {
            (state.tableActiveModal.mode = action.payload.mode),
                (state.tableActiveModal.toggle_status = true),
                (state.tableActiveModal.url = action.payload.url);
        },
        closeToggleTableActiveModal: (state) => {
            state.tableActiveModal.toggle_status = false;
        },
        changeMode: (state, action: PayloadAction<'login' | 'signup'>) => {
            state.authMode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    changeMode,
    toggleHeaderAvatarModal,
    toggleHeaderLoginButtonModal,
    openToggleTableActiveModal,
    closeToggleTableActiveModal,
} = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
