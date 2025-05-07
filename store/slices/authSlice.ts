import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  authMode: 'signIn' | 'signUp' | null;
  authToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  authMode: null,
  authToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuthMode: (state, action: PayloadAction<'signIn' | 'signUp'>) => {
      state.authMode = action.payload;
    },
    setAuthToken: (state, action: PayloadAction<string | null>) => {
      state.authToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
  },
});

// Selectors
export const getIsAuthData = (state: { auth: AuthState }) => state.auth.isAuth;
export const getAuthMode = (state: { auth: AuthState }) => state.auth.authMode;
export const getAuthToken = (state: { auth: AuthState }) => state.auth.authToken;
export const getRefreshToken = (state: { auth: AuthState }) => state.auth.refreshToken;


// Actions
export const { setAuthStatus, setAuthMode ,setAuthToken, setRefreshToken } = authSlice.actions;

// Reducer
export default authSlice.reducer;
