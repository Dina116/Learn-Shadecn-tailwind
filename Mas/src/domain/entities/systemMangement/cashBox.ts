export interface CASHBOX {
  ID: number;
  STATION_NO: number;
  DESCRIPTION: string;
}

export interface UBDATECHASHBOXREQ {
  data: CASHBOX;
  id: number;
}

export interface DELETECASHBOXREQ {
  id: number;
}

export interface SESSIONRECEIPTS {
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
