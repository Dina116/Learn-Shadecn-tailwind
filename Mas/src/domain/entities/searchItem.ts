import { BILL } from './bill';

export interface SEARCHITEM {
  custkey?: string;
  surname?: string;
  oldKey?: string;
  propRef?: string;
  address?: string;
  meterRef?: string;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  amountCollected?: number;
  clBlnce?: number;
  billsList?: BILL[];
  bilingDate?: string | null;
  crReading?: number;
  readingDate?: string | null;
  readingNoteDesc?: string;
  readingDesc?:string;
  readBy?: string;
  readingNote?: number;
  modifiedAvgConsump?: number;
  UN_BILLED?: number;
  AgreemAmount?: number;
  BillingTotalAmount?: number;
  TotalUnCollBilledAmount?: number;
  WalletsBalance?: number;
  stationName?:string;
  stationNo?: number;
  serial_no?:string;
}
export interface SEARCHRES {
  COUNT: number;
  Items: SEARCHITEM[];
}
export enum SEARCHFILTERS {
  CUSTKEY = 'custkey',
  PAYMENT_NO = 'payment_no',
  OLD_KEY = 'old_key',
  METER_REF = 'meter_ref',
  PROP_REF = 'prop_ref',
  SURNAME = 'surname',
  ADDRESS = 'address',
}
export enum FCONDITION {
  EQUAL = 0,
  CONTAIN = 1,
  START_WITH = 2,
  END_WITH = 3,
}
export interface SEARCHREQMAS {
  key: string | undefined;
  searchBy:
    | 'custkey'
    | 'payment_no'
    | 'old_key'
    | 'meter_ref'
    | 'prop_ref'
    | 'surname'
    | 'address'
    | undefined;
    listgroup?:string
  // billgroupcode?: string | undefined;
  // customerbookcode?: string | undefined;
  // searchfilter?: 0 | 1 | 2 | 3 | undefined;
}

export interface IBILLSDETAILS {
  all: Array<BILL>;
  paid: Array<BILL>;
  unpaid: Array<BILL>;
  partialPaid: Partial<Array<BILL>>;
}
