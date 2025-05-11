import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const useAuthStorage = () => {
  const [authStatus, setAuthStatus] = useState<{ authToken: string | null, refreshToken: string | null }>({
    authToken: null,
    refreshToken: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const authToken = await SecureStore.getItemAsync('authToken');
      const refreshToken = await SecureStore.getItemAsync('refreshToken');

      setAuthStatus({
        authToken,
        refreshToken,
      });
    };

    checkAuth();
  }, []);

  return authStatus;
};
