/* eslint-disable @typescript-eslint/no-explicit-any */
import { CollectionDestributionItm } from './collection';
import { IBill2masReq, IBillGroupBookWalk } from './reading';

export enum ProcessStatus {
  NOT_PROCESSED,
  RUNNING,
  SUCCEED,
  FAILED,
  OTHER,
  SUCCSSED_PARTIAL,
}

export interface IHHProcessResponceMessage {
  Custkey: string;
  Billgroup: string;
  BookNo: string;
  Walkno: string;
  CycleId: number;
  BilngDate: string | null;
  ProcessId: string;
  User: string;
  RemoteAddress: string;
  HasError: boolean;
  ErrorMessage: string;
  AffectedRows: number;
  Status: ProcessStatus;
  StartDate: string | null;
  EndDate: string | null;
  Period: number;
  Description: string;
  DeviceId: string;
  Deleted: number | null;
  Inserted: number | null;
  Updated: number | null;
  DepositId: number | null;
  Payment?: CollectionDestributionItm;
  PullStatmentsReply: IPullStatmentReply
}

export interface IPullStatmentReply {
  HasError: false,
  Message: string,
  ProcessStartTime: {
    Datetime: string,
    HasDatetime: boolean
  },
  ProcessEndTime: {
    Datetime: string,
    HasDatetime: boolean
  },
  SusccsedWalks: IWalks[],
  FailedWalks: IWalks[],
  TableProceses: Array<any>
}
export interface IWalks {
  Billgroup:string,
  BookNo:string,
  WalkNo:string
  Message:string
  SucssedeBills:number
  IsSucsseded:boolean
}
export interface UPDATECUSTOMERBILLSREQ extends IBillGroupBookWalk {
  custkey?: string;
  withMissing?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface UPDATECUSTOMERBILLSBILLGRPREQ extends IBill2masReq {
  custkey?: string;
  withMissing?: boolean;
  startDate?: string;
  endDate?: string;
}
export interface COMPONENTSTATEPOSTCOLLECTIONREQ {
  deptPaymentNo: string;
  crdtPaymentNo: string;
}
export interface RECOLLECTEDCANCELSTMREQ {
  custkey: string;
  payment_no?: string;
  empid?: number;
  locked?: boolean;
}
export interface MAS2BILLINGREQ extends IBillGroupBookWalk {
  postNegativeFlage?: number;
  guid?: number;
  isretry?: boolean;
  uflag?: boolean;
  isBatch?: boolean;
}
export interface CANCELPREPARETOALLREQ {
  deviceid: string;
}
