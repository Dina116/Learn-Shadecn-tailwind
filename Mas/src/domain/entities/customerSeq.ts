import { Odata } from '@/app/httpclient/odata';

export interface CUSTOMERSEQ {
  BILLGROUP: string;
  BILNG_DATE: string | null;
  BOOK_NO_C: string;
  BOOK_NO_R: string;
  WALK_NO_C: string;
  WALK_NO_R: string;
  NEW_SEQ_C1?: number;
  NEW_SEQ_R1?: number;
  CYCLE_ID: number | null;
  CUSTKEY: string;
  SEQ_NO_C: number | null;
  SEQ_NO_R: number | null;
  NEW_SEQ_C: number | null;
  NEW_SEQ_R: number | null;
  IS_POSTED_C: boolean | null;
  IS_POSTED_R: boolean | null;
  POST_DATE: string | null;
  tent_name: string;
  PROP_REF: string;
}
export interface BOOKSEQREQ extends Odata {
  bookno: string;
  walkno: string;
}
export interface POSTHQREQ {
  req: CUSTOMERSEQ[] & { bookno: string; walkno: string };
}
