import { useNavigation } from '@react-navigation/native';
import { Card } from 'components/Card';
import { Screens } from 'navigation/constants';
import { RootStackNavigationProps } from 'navigation/types';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { feedActions } from 'screens/store';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import { FeedOffer } from 'shared/types/feed';
import { scaleByWidth } from 'shared/utils/normalize';

export const FeedItem: FC<FeedOffer> = ({
  title,
  description,
  cashbackAmount,
  expirationDate,
  id,
}) => {
  const dispatch = useAppDispatch();
  const { offers } = useAppSelector(state => state.feedReducer);
  const { navigate } = useNavigation<RootStackNavigationProps<Screens>>();

  const onItemPressed = useCallback(() => {
    const selectedOffer: FeedOffer | undefined = offers.find(
      (offer: FeedOffer) => offer.id === id,
    );
    if (selectedOffer) {
      dispatch(feedActions.setFeedListSelected(selectedOffer));
      navigate(Screens.OFFER_DETAILS_PAGE);
    }
  }, [dispatch, id, navigate, offers]);

  return (
    <Card onItemPressed={onItemPressed}>
      <View style={styles.containerText}>
        <Text variant="labelLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
      </View>
      <View style={styles.containerData}>
        <Text>{`Amount: ${cashbackAmount}`}</Text>
        <Text>{expirationDate}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerText: {
    flex: 3,
    paddingRight: scaleByWidth(8),
  },
  containerData: {
    flex: 1,
  },
});
