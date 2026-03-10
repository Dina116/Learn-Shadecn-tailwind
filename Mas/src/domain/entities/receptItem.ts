import { RECEIPT } from './receipt';

export interface RECEPTITEM extends RECEIPT {
  collectorName?: string;
  collectionTypeDesc?: string;
  paymentMethodDesc?: string;
  collectionMethodDesc?: string;
}
