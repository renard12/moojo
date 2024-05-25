import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootStack } from './navigation/RootStack';
import { ThemeProvider } from 'providers/ThemeProvider';
import { StoreProvider } from 'providers/StoreProvider';
import { Toast } from 'components/Toast';

export const App: FC = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer>
          <StoreProvider>
            <ThemeProvider>
              <RootStack />
              <Toast />
            </ThemeProvider>
          </StoreProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
