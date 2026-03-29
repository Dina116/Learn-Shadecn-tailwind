import type { BILLGROUPS } from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CycleData {
  OWNERS: any[];
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  BILNG_DATE: string;
  BDB_CDB_C: number;
  BDB_CDB_DATE_C: string;
  BDB_CDB_USER_C: string;
  BDB_CDB_R: number;
  BDB_CDB_DATE_R: string;
  BDB_CDB_USER_R: string;
  CDB_HH_C: number;
  CDB_HH_DATE_C: string;
  CDB_HH_R: number;
  CDB_HH_DATE_R: string;
  CDB_HH_USER_R: string;
  HH_CDB_C: number;
  HH_CDB_R: number;
  CDB_BDB_C: number;
  CDB_BDB_DATE_C: string;
  CDB_BDB_USER_C: string;
  CDB_BDB_R: number;
  ISCYCLE_COMPLETED_C: number;
  ISCYCLE_COMPLETED_R: number;
  DEVICEID_R: string;
  DEVICEID_C: string;
  WALK_DESCRIPTION: string;
  BILNG_DESCRIPTION: string;
  IS_ALLOWED_C: boolean;
  IS_ALLOWED_R: boolean;
  IS_READY_C: boolean;
  IS_READY_R: boolean;
  COUNT_C: number;
  COUNT_R: number;
  EMPID_C: number;
  EMPID_R: number;
  ISSUED_AMOUNT: number;
  IS_METER_BOOK: boolean;
  IS_CUSTOMER_BOOK: boolean;
  ISCLOSED_INDEVICE_R: boolean;
  ALLOW_FAWRY: boolean;
  BILLS: any[];
  READER: string;
  COLLECTOR: string;
  COUNT_CYCLES: number;
  ALL_BILL_DATE: boolean;
  Cycles: any[];
  IS_ALLOWED_C_FRONT: boolean;
  IS_ALLOWED_R_FRONT: boolean;
}
export interface IBillGroupBookWalk {
  STATION_NO?: number;
  bilngDate?: string | Date;
  BOOK_NO?: string;
  WALK_NO?: string;
  deviceid?: string;
  colector?: string;
  collected?: string;
  readed?: number;
  from?: number;
  to?: number;
  effDate?: Date | string;
  last?: boolean;
  biling?: boolean;
  empid?: string | number;
  order?: string;
  isPost?: boolean;
  includeOldBills?: boolean;
  CYCLE_ID?: number;
  BILLGROUP?: string | BILLGROUPS[];
  startDate?: string;
  endDate?: string;
  station_no?:number;
  AllBilingDate?:boolean
}

export interface IBillGroupBookWalkBilng extends IBillGroupBookWalk {
  bilng_date?: Date | string;
  groups?: string;
}