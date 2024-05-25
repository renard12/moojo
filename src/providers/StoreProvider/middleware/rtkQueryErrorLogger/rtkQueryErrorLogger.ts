import { isRejectedWithValue } from '@reduxjs/toolkit';

import Toast from 'react-native-toast-message';

import type { Middleware } from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    Toast.show({
      type: 'error',
      text1:
        'data' in action.error
          ? (action.error.data as { message: string }).message
          : action.error.message,
    });
  }

  return next(action);
};
