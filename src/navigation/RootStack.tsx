import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screens } from './constants';

import { StyleSheet } from 'react-native';

import { RootStackParamList } from './types';
import { OfferFeed } from 'screens/OfferFeed';
import { OfferFeedDetails } from 'screens/OfferFeedDetails';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.OFFER_FEED}
      screenOptions={() => ({
        gestureEnabled: false,
        headerShown: false,
        cardStyle: styles.cardStyle,
      })}
    >
      <Stack.Screen name={Screens.OFFER_FEED} component={OfferFeed} />
      <Stack.Screen
        name={Screens.OFFER_DETAILS_PAGE}
        component={OfferFeedDetails}
        options={{
          headerShown: true,
          headerTitle: 'Offer Details',
          headerLeftLabelVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
  },
});
