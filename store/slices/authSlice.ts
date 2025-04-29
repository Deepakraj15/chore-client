import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setTheme: (state,action) => {
        state.isAuth = action.payload;
    },
  },
 
});
export const getIsAuthData = (state:any) => state.isAuth;




export const {setTheme } = authSlice.actions;
export default authSlice.reducer;