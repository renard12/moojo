export interface FeedResponse {
  offers: FeedOffer[];
}

export interface FeedOffer {
  id: number;
  title: string;
  description: string;
  cashbackAmount: number;
  expirationDate: string;
  retailerLogo: string;
  termsAndConditions: string;
}
