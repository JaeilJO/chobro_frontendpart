import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import modalStatusReducer from './features/modalStatusSlice';
import { userApi } from './services/userApi';
import { authApi } from './services/authApi';
import userReduecer from './features/userSlice';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

const reducers = {
    modalStatus: modalStatusReducer,
    user: userReduecer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
};
const reducer = combineReducers(reducers);

const makeStore: MakeStore<any> = () =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userApi.middleware).concat(authApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type RootState = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
