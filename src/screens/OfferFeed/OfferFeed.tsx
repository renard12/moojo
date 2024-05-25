import { FlatList, ListRenderItemInfo } from 'react-native';
import React, { useCallback } from 'react';
import { General } from 'templates/General';
import { useAppSelector } from 'shared/hooks/store';
import { FeedOffer } from 'shared/types/feed';
import { FeedItem } from './components/FeedItem';

export const OfferFeed = () => {
  const { offers } = useAppSelector(state => state.feedReducer);

  const renderItemData = useCallback(
    ({ item }: ListRenderItemInfo<FeedOffer>) => <FeedItem {...item} />,
    [],
  );

  const keyItemExtractor = useCallback((item: FeedOffer) => `${item.id}`, []);

  return (
    <General>
      <FlatList
        data={offers}
        keyExtractor={keyItemExtractor}
        renderItem={renderItemData}
        showsVerticalScrollIndicator={false}
      />
    </General>
  );
};
