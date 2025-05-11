import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    currentPage: 'Home' | 'Search' | 'Profile' | 'Settings' | 'Create';
}

const initialState: AppState = {
  currentPage: 'Home',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<'Home' | 'Search' | 'Profile' | 'Settings' | 'Create'>) => {
      state.currentPage = action.payload;
    },
  },
});

// Selectors
export const getCurrentPage = (state: {app : AppState  }) => state.app.currentPage;



// Actions
export const { setCurrentPage} = appSlice.actions;

// Reducer
export default appSlice.reducer;
