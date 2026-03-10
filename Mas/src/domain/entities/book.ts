import { CUSTOMERWALK } from './systemMangement/customerWalk';

export interface CUSTOMERBOOK {
  code: string;
  describe: string;
  billgroup: string;
  noWalks: number | null;
  handheldId: string;
  stationNo: number;
  unused: boolean | null;
}

export interface CUSTOMERWALKREQ {
  groups?: string;
  empid?: number;
  unassigned?: boolean;
  station_no?: number;
}
export interface ICollection2masReq {
  groups: string;
  order: string;
  empid?: number | string;
  isPost?: boolean;
  station_no?: number;
  bilng_date: string | Date;
}
export interface UPDATECUSTOMERWALKREQ {
  walk: CUSTOMERWALK;
  transfeer_ohda?: boolean;
}
