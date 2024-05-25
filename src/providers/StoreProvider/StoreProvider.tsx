import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { setupPersistStore, setupStore } from './store';

import type { FC, PropsWithChildren as StoreProviderProps } from 'react';

const store = setupStore();
const persistor = setupPersistStore(store);

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
