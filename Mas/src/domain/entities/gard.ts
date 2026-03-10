import { CollectionDestributionItm } from './collection';
import { IBill2masReq, IBillGroupBookWalk } from './reading';

export interface IGARD {
  BILLGROUP: string;
  BILNG_DATE: string;
  BOOK_NO: string;
  CUSTKEY: string;
  CYCLE_ID: number;
  DELIVERY_ST: number;
  DEVICE_ID: string;
  EMP_ID: number;
  GARD: boolean;
  GARD_PAYMENT_NO: string;
  ISSUED_AMOUNT: number;
  IS_COLLECTED_BY_OTHER: boolean;
  IS_COLLECTED_BY_OWNER: boolean;
  KEY: string;
  PAYMENT_NO: string;
  SEQ_NO: number;
  SURNAME: string;
  WALK_NO: string;
}
export interface GARD extends IGARD {
  MARKE_NOTE?: string;
  posted?: boolean;
  color?: string;
  missing?: boolean;
  MARKED?: boolean;
}
export interface POSTGARDREQ extends IBill2masReq {
  receptNo?: string;
}

export interface SAVEGARDREQ extends IBillGroupBookWalk {
  empid?: number;
  payments: CollectionDestributionItm[];
}
