import { combineReducers } from 'redux';
import preferenceSlice from '../slices/preferenceSlice';

const rootReducer = combineReducers({
    counter: preferenceSlice,
    // Add other reducers here
});

export default rootReducer;