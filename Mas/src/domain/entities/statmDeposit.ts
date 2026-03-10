export interface STATMDEPOSIT {
  COLLECTOR?: number;
  DEPOSIT_ID: number;
  RECEIPT_NO: string;
  AMOUNT: number;
  COUNT: number;
  DELIVERY_MAN: string;
  DELIVERY_DATE: string;
  STAMP_USER: string;
  STAMP_DATE: string;
  BILNG_DATE: string;
  EMP_ID: number | null;
  IS_POSTED: boolean | null;
  BILNG_DEPOSIT_ID: number | null;
  STATION_NO: number | null;
  POST_DATE: string | null;
  FROM_BILNG: boolean | null;
  USER_ID: number | null;
  CHAIN: string;
  rowIndex?: number;
}

export interface StatmValidation extends STATMDEPOSIT {
  COLLECTED_COUNT: number;
  COLLECTED_AMOUNT: number | null;
  BILNG_COLLECTED_COUNT: number;
  BILNG_COLLECTED_AMOUNT: number | null;
}
export interface BILLINGDATEREQ {
  bilng_date?: string;
}
