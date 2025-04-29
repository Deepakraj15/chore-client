import { combineReducers } from 'redux';
import preferenceSlice from '../slices/preferenceSlice';
import { authApi } from '../services/authApiSlice'; // Adjust the path as needed

const rootReducer = combineReducers({
    counter: preferenceSlice,
    [authApi.reducerPath]: authApi.reducer,
    
    // Add other reducers here
});

export default rootReducer;