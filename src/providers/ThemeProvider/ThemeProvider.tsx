import { PaperProvider } from 'react-native-paper';
import React from 'react';

import type { FC, PropsWithChildren as ThemeProviderProps } from 'react';
import { lightTheme } from './config';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <PaperProvider theme={lightTheme}>{children}</PaperProvider>;
};
