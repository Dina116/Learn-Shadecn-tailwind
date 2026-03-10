/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CASHBOXSESSION {
  ID: number;
  OPEN_DATE?: string;
  CLOSE_DATE?: string | null;
  USER_STATION_NO?: number;
  USER_ID?: number;
  CASH_BOX_ID?: number;
  CASH_BOX_STATION_NO?: number;
  AMOUNT?: number | null;
  COUNT?: number | null;
  BANK_NAME?: string;
  DOCUMENT_NO?: number | string;
  DEPOSIT_DATE?: string | null;
  STATE?: CASHBOXSESSIONSTATE;
  IS_MANUAL?: boolean | null;
  NEXT_RECEIPT_NO?: number | null;
}

export enum CASHBOXSESSIONSTATE {
  OPEN = 0,
  CLOSE = 1,
}

export interface ADDNEWRECEIPTREQ {
  empId?: number;
  amount: number;
  count: number;
  empStationNo: number;
  cashAmount?: number;
  cheqAmount?: number;
  cheqNo: string;
  receipt_no: string;
  cashDeposit?: number;
  cashDepositDoc: string;
  cashDepositDate?: Date | string;
}
export interface ADDNRWRECEIPTRES {
  SESSION_ID: number
  DEPOSIT_ID: number
  AMOUNT: number
  CASH_BOX_ID: number
  CASH_BOX_STATION_NO: number
  USER_STATION_NO: number
  USER_ID: number
  USER_NAME: string
  TYPE: number
  EMP_STATION_NO: number
  EMP_ID: number
  TRANS_DATE: string
  IS_CANCELED: boolean
  CANCEL_DATE: any
  CANCEL_BY: any
  CANCEL_AMOUNT: number
  EMP_NAME: string
  RECEIPT_NO: any
  CASH: number
  CHEQ_AMOUNT: any
  CHEQ_NO: any
  CASH_DEPOSIT: any
  CASH_DEPOSIT_DOC: any
  CASH_DEPOSIT_DATE: any
}
export interface STARTNEWSEESIONREQ {
  cashBoxId?: number;
  cashBoxStationNo?: number;
  seqType?: number;
  nextSeqId: string;
}
export interface CLOSESESSIONREQ {
  bank: string;
  amount: number;
  documentNo: string;
  depositDate?: Date | string;
}
export interface SESSIONRECEIPTSREQ {
  sessionId?: number;
  stationNo?: number;
}
