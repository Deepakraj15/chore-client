import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { authApi } from './services/authApiSlice'; // Adjust the path as needed
import authStorageMiddleware from './middlewares/authStorageMiddleware';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(authStorageMiddleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;