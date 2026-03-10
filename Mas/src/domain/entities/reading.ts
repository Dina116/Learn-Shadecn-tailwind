/* eslint-disable @typescript-eslint/no-explicit-any */
import { BILLGROUPS } from './billGroups';
import { EXTREADING } from './extReading';
import { HANDMHST } from './handMhSt';
import { HHBCYC } from './hhBcyc';

export interface READING {
  Hand: HANDMHST;
  Bcyc: HHBCYC;
  Portal: EXTREADING;
  ALLOW_BATCH_ESTIM_READING: boolean;
  ALLOW_ESTIM_CONSUMP: boolean;
  ALLOW_ESTIM_READING: boolean;
  CTYPE_DESC: string;
  rowIndex?:number;
  status?: 'changed' | 'succssed' | 'failed';
  leaved?:boolean;
}

export interface IUpdateInfoReq {
  custkey: string;
  meter_type: string;
  meter_ref: string;
  new_meter_type: string;
  new_meter_ref: string;
  new_no_dials?: number;
}
export interface IModyfyReadingReq {
  custkey: string;
  cycleid: number;
  empid?: number;
  reading?: number | null ;
  note?: number;
  locked?: boolean;
  SuperLock?: boolean;
  is_acc_consump?: boolean;
  acc_date?: string | Date;
  acc_end_date?:string | Date
  MODIFIED_AVRG_CONSUMP?: number;
  superLock?: boolean;
  is_estim_reading?: boolean;
  is_manual_estim?: boolean;
}
export interface OntherDataRequest {
  empId?: number;
  noMeter?: boolean;
  portal?: boolean;
}

export interface IReOpenGardReq extends IBillGroupBookWalk {
  billgroup?: string | number;
  book_no?: string;
  walk_no?: string;
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
export interface IBill2masReq {
  billgroup: string;
  bookno: string;
  walkno: string;
  station_no?: number;
  bilng_date?: Date | string | undefined;
  withMissing?: boolean;
  guid: number;
  postNegativeFlage: boolean;
  isretry: boolean;
  BILNG_DATE: Date | string | undefined;
  bilngDate: Date | string | undefined;
  uflag: boolean;
}

export interface MODIFYPREVREADINGREQ {
  custkey: string;
  reading?: number;
  date?: Date | string;
  comment?: string;
}
export interface VERIFYISSUEREQ {
  billgroup?: string;
  bilng_date?: Date | string;
}
export interface SWITCHRREQ extends IBillGroupBookWalk {
  cycle_id?: number;
}
export interface REJECTPORTALREQ {
  CUSTKEY: string;
  REASON: string;
}

export interface READINGIMGHISTREQ {
  cycle_id: number;
  custkey: string;
}
