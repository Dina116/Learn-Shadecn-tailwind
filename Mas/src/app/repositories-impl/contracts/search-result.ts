import { BILLApi } from './bill';

export interface SEARCHRESAPI {
  COUNT: number;
  Items: SEARCHITEMAPI[];
}

export interface SEARCHITEMAPI {
  CUSTKEY: string;
  SURNAME: string;
  OLD_KEY: string;
  PROP_REF: string;
  ADDRESS: string;
  METER_REF: string;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  AMOUNT_COLLECTED: number | null;
  CL_BLNCE: number | null;
  CR_READING: number | null;
  PR_READING: number | null;
  REAING_NOTE: number | null;
  READING_NOTE_DESCR: string;
  READING_DESC: string;
  STATION_NO: number | null;
  STATION_NAME?: string;
  READING_DATE: string | null;
  MODIFIED_AVG_CONSUMP: number | null;
  READ_BY: string;
  BILLS: BILLApi[];
  BILNG_DATE: string | null;
  UN_BILLED?: number;
  AgreemAmount?: number;
  BillingTotalAmount?: number;
  TotalUnCollBilledAmount?: number;
  WalletsBalance?: number;
  SERIAL_NUMBER?: string;
}
