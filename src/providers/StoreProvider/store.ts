import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { gspApi } from 'shared/api/gspApi';
import { feedReducer } from 'screens/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { rtkQueryErrorLogger } from './middleware';

import type { AppStore } from './types';

export const rootReducer = combineReducers({
  feedReducer: feedReducer,
  [gspApi.reducerPath]: gspApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(rtkQueryErrorLogger)
        .concat(gspApi.middleware),
  });

export const setupPersistStore = (store: AppStore) => persistStore(store);
