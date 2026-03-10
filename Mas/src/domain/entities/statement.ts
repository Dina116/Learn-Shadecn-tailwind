import { FTRANSACTION } from './fTransaction';

export interface STATMENT {
  paymentNo?: string;
  statmNo?: number;
  clBlnce?: number;
  curCharges?: number;
  opBlnce?: number;
  instalment?: number;
  bilngDate: string | null;
  deliverySt?: number;
  transactionsList: FTRANSACTION[];
}
