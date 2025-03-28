   import { createSlice } from '@reduxjs/toolkit';

    const PreferenceSlice = createSlice({
      name: 'preference',
      initialState: {
        theme: 'light',
      },
      reducers: {
        setTheme: (state,action) => {
            state.theme = action.payload;
        },
      },
    });
    
    export const {setTheme } = PreferenceSlice.actions;
    export default PreferenceSlice.reducer;