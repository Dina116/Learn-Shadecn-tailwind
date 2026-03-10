import { RECEPTITEM } from './receptItem';

export interface BILL {
  custkey?: string;
  paymentNo?: string;
  cycleId?: number;
  seqNo?: number;
  bilngDate?: string | null;
  sCrReading?: number;
  sPrReading?: number;
  sConsump?: number;
  clBlnce?: number;
  opBlnce?: number;
  instalment?: number;
  previousAmountCollected?: number;
  calcType?: string;
  instalmentDate?: string | null;
  amountCollected?: number;
  surname?: string;
  receptsList?: Array<RECEPTITEM>;
  ctg?: string;
  oldKey?: string;
  collectionDate?: string | null;
  dueAmount?: number;
  isCancelled?: boolean;
  recalcId?: number;
  IS_PARTIAL?:boolean;
}
