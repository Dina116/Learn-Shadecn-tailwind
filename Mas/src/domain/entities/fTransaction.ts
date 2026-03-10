export interface FTRANSACTION {
  transNo?: number;
  amount?: number;
  description?: string;
  documentNo?: string;
  effectDte?: string | null;
  bilngDate?: string | null;
  memoFld?: string;
  statmNo?: number;
  trnsType?: number;
  trnsStype?: number;
  crReading?: number;
  prReading?: number;
  consump?: number;
  readType?: number;
  runningBlance?: number;
}
