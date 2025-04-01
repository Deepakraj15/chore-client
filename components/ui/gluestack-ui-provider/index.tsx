import React, { useEffect } from 'react';
import { config } from './config';
import { View, ViewProps } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { useColorScheme } from 'nativewind';

type ModeType = 'light' | 'dark' | 'system';

export function GluestackUIProvider({
  mode = 'system', // Default to system
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    if (mode !== 'system') {
      setColorScheme(mode); 
    }
  }, [mode, setColorScheme]);

  return (
    <View
      style={[
        config[colorScheme ?? 'light'], 
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
