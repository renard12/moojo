import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from './constants';

export type RootStackParamList = {
  [Screens.OFFER_FEED]: undefined;
  [Screens.OFFER_DETAILS_PAGE]: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;
