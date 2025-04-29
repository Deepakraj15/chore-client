import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { authApi } from './services/authApiSlice'; // Adjust the path as needed
    
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export default store;