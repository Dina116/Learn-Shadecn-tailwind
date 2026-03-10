import { BILL } from './bill';

export interface WALKDELIVERY {
  ID: number;
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  STAMP_DATE: string;
  STAMP_USER: string;
  FROM_EMP: number;
  TO_EMP: number;
  FROM_NAME: string;
  TO_NAME: string;
  TYPE: number;
  NOTE: string;
  CANCELLED: boolean | null;
  CANCELLED_BY: string;
  CANCELLED_DATE: string | null;
  COUNT: number | null;
  AMOUNT: number | null;
}
export interface WALKDELEVERYRESPONSE extends WALKDELIVERY {
  BILLS: BILL[];
  IS_NOT_VALIED: boolean;
}

export interface BOOKIDREQ {
  id?: number;
}
