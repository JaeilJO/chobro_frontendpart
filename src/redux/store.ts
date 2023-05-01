import { configureStore } from '@reduxjs/toolkit';
import modalStatusReducer from './features/modalStatusSlice';
import { userApi } from './services/userApi';
import { authApi } from './services/authApi';
import userReduecer from './features/userSlice';

export const store = configureStore({
    reducer: {
        modalStatus: modalStatusReducer,
        user: userReduecer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
