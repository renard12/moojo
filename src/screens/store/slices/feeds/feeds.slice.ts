import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { FeedState } from 'screens/store/types';
import { mockedData } from 'shared/config/mockedData';
import { FeedOffer } from 'shared/types/feed';

const initialState: FeedState = {
  offers: mockedData.offers,
  selectedOffer: {},
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    getFeedList: (store, action: PayloadAction<FeedOffer[]>) => {
      store.offers = action.payload;
    },
    setFeedListSelected: (store, action: PayloadAction<FeedOffer>) => {
      store.selectedOffer = action.payload;
    },
  },
});

export const { actions: feedActions, reducer: feedReducer } = feedSlice;
