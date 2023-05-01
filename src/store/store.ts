import { configureStore } from '@reduxjs/toolkit';
import authModalModeReducer from '../features/authModalModeSlice';
import { userApi } from '../services/userApi';
import { authApi } from '../services/authApi';

export const store = configureStore({
    reducer: {
        authModalMode: authModalModeReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
