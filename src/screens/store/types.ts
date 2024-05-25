import { FeedOffer } from 'shared/types/feed';

export interface FeedState {
  offers: FeedOffer[];
  selectedOffer: Partial<FeedOffer>;
}
