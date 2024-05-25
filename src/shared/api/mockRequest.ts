import { BaseQueryFn } from '@reduxjs/toolkit/query';
import Toast from 'react-native-toast-message';
import { DataResponse, ErrorResponse } from './type';

export const mockBaseQuery: BaseQueryFn<
  string,
  DataResponse,
  ErrorResponse
> = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate error randomly
  if (Math.random() < 0.5) {
    Toast.show({
      type: 'error',
      text1: 'Reject',
    });
    return { error: { error: { message: 'Simulated Error' } } };
  } else {
    Toast.show({
      type: 'success',
      text1: 'Great Request!',
    });
    return { data: { message: 'Simulated Success' } };
  }
};
