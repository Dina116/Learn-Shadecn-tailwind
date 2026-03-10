import { RecalcINVOICES } from './fillRecalcres';

export interface MODIFYRECALCRES {
  CUSTKEY: string;
  STATM_NO: number;
  ROWS?: Array<RecalcINVOICES>;
}

export interface MODIFYRECALCREQ {
  id: string | null;
  undefined?: string;
}
