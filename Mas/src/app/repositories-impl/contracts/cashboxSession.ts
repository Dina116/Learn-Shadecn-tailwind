export interface CASHBOXSESSIONApi {
  ID: number;
  OPEN_DATE: string;
  CLOSE_DATE: string | null;
  USER_STATION_NO: number;
  USER_ID: number;
  CASH_BOX_ID: number;
  CASH_BOX_STATION_NO: number;
  AMOUNT: number | null;
  COUNT: number | null;
  BANK_NAME: string;
  DOCUMENT_NO: string;
  DEPOSIT_DATE: string | null;
  STATE: CASHBOXSESSIONSTATE;
  IS_MANUAL: boolean | null;
  NEXT_RECEIPT_NO: number | null;
}

export enum CASHBOXSESSIONSTATE {
  OPEN = 0,
  CLOSE = 1,
}

export interface STARTNEWSESSIONRESApi {
  AMOUNT?: number;
  BANK_NAME?: string;
  CASH_BOX_ID?: number;
  CASH_BOX_STATION_NO?: number;
  CLOSE_DATE?: string;
  COUNT?: number;
  DEPOSIT_DATE?: string;
  DOCUMENT_NO?: number;
  ID: number;
  IS_MANUAL?: boolean;
  NEXT_RECEIPT_NO?: number;
  OPEN_DATE?: string ;
  STATE?: number;
  USER_ID?: number;
  USER_STATION_NO?: number;
}
export interface ADDNRWRECEIPTRESApi {}
export interface SESSIONRECEIPTSAPI {
  AMOUNT: number;
  CANCEL_AMOUNT: number;
  CANCEL_BY?: string;
  CANCEL_DATE?: string;
  CASH?: number;
  CASH_BOX_ID: number;
  CASH_BOX_STATION_NO: number;
  CASH_DEPOSIT?: number;
  CASH_DEPOSIT_DATE?: string;
  CASH_DEPOSIT_DOC?: string;
  CHEQ_AMOUNT?: number;
  CHEQ_NO?: string;
  DEPOSIT_ID: number;
  EMP_ID: number;
  EMP_NAME: string;
  EMP_STATION_NO: number;
  IS_CANCELED?: boolean;
  RECEIPT_NO?: number;
  SESSION_ID: number;
  TRANS_DATE: string;
  TYPE: number; // TODO enum
  USER_ID: number;
  USER_NAME: string;
  USER_STATION_NO: number;
}
