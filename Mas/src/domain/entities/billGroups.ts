import { Other } from './bookCycle';

export interface BILLGROUPS extends Other {
  GROUP_ID: string;
  DESCRIPTION: string;
  STATION_NO: number;
  UNUSED: boolean;
}

export interface REOPENCLOSEDBILLGROUPREQ {
  billgroup: string;
  empid?: number;
}
export interface REOPENCLOSEDBILLGROUPBOOKREQ {
  billgroup: string;
  book_no: string;
  walk_no: string;
  emp_id?: number;
}
