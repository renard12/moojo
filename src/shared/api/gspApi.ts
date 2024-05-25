import { createApi } from '@reduxjs/toolkit/query/react';
import { mockBaseQuery } from './mockRequest';
import { DataResponse } from './type';

export const gspApi = createApi({
  baseQuery: mockBaseQuery,
  endpoints: builder => ({
    simulateApiCall: builder.mutation<DataResponse, void>({
      query: () => 'data',
    }),
  }),
});

export const { useSimulateApiCallMutation } = gspApi;
