import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface modalState {
    headerAvatarModal: boolean;
    headerLoginButtonModal: boolean;
    authMode: 'login' | 'signup';
    tableActiveModal: {
        toggle_status: boolean;
        is_active: boolean;
        url: string;
        cert_id: string;
    };
}

const initialState: modalState = {
    headerAvatarModal: false,

    headerLoginButtonModal: false,

    authMode: 'login',

    tableActiveModal: {
        toggle_status: false,
        is_active: false,
        url: '',
        cert_id: '',
    },
};

export const modalStatusSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleHeaderLoginButtonModal: (state) => {
            state.headerLoginButtonModal = !state.headerLoginButtonModal;
        },
        toggleHeaderAvatarModal: (state) => {
            state.headerAvatarModal = !state.headerAvatarModal;
        },
        openToggleTableActiveModal: (state, action) => {
            state.tableActiveModal.is_active = action.payload.is_active;
            state.tableActiveModal.toggle_status = true;
            state.tableActiveModal.url = action.payload.url;
            state.tableActiveModal.cert_id = action.payload.cert_id;
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
