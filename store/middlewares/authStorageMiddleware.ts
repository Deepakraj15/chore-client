import * as SecureStore from 'expo-secure-store';
import { Middleware } from '@reduxjs/toolkit';
import { setAuthToken, setRefreshToken } from '@/store/slices/authSlice';

const authStorageMiddleware: Middleware = store => next => (action: any) => {
  if (action.type === setAuthToken.type) {
    const authToken = action.payload;
    if (authToken) {
      // Store auth token in SecureStore
      SecureStore.setItemAsync('authToken', authToken);
    } else {
      // Delete auth token from SecureStore
      SecureStore.deleteItemAsync('authToken');
    }
  }

  if (action.type === setRefreshToken.type) {
    const refreshToken = action.payload;
    if (refreshToken) {
      // Store refresh token in SecureStore
      SecureStore.setItemAsync('refreshToken', refreshToken);
    } else {
      // Delete refresh token from SecureStore
      SecureStore.deleteItemAsync('refreshToken');
    }
  }

  return next(action);
};

export default authStorageMiddleware;
