import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface DataState {
    url: string;
    certificate: string;
    expiration_date: string;
    is_active: string;
    cert_id: string;
    created_at: string;
    updated_at: string;
}

export interface CertState {
    data: DataState[];
}

const initialState: CertState = {
    data: [
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

export const certSlice = createSlice({
    name: 'cert',
    initialState,
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.user,
    //         };
    //     },
    // },
    reducers: {
        setCert: (state, action: PayloadAction<any>) => {
            state.data.push({
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
export const { setCert } = certSlice.actions;

export default certSlice.reducer;
