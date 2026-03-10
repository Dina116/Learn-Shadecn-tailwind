export interface READINGSTATUSITEMAPI {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  KEY: string;
  CUSTKEY: string;
  PROP_REF: string;
  SURNAME: string;
  SEQ_NO: number | null;
  LOCATION_DIFF: number | null;
  CONSUMP: number | null;
  CR_READ: number | null;
  PR_READ: number | null;
  MHH_NOTE: number | null;
  TOTAL_COUNT: number | null;
  ACTUAL_COUNT: number | null;
  WALK_DESCRIPTION: string;
  BILNG_DESCRIPTION: string;
  DEVICE_ID: string;
  EMP_ID: number | null;
  BILNG_DATE: string | null;
  REACH_DATE: string | null;
  READING_NOTE: number | null;
  DISCREPANCY: number | null;
  DISCREPANCY_MESSAGE: string;
  PR_CONSUMP: number | null;
  PERCENTAGE: number | null;
}
