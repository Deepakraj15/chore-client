import { combineReducers } from 'redux';
import preferenceSlice from '../slices/preferenceSlice';
import authReducer from '../slices/authSlice'; 
import { authApi } from '../services/authApiSlice'; // Adjust the path as needed

const rootReducer = combineReducers({
    counter: preferenceSlice,
    auth: authReducer, 
    [authApi.reducerPath]: authApi.reducer,
    
    // Add other reducers here
});

export default rootReducer;