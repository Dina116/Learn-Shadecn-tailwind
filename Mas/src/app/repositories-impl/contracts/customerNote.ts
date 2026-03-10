export interface CUSTOMERNOTEApi {
  APP_ID: number;
  APP_TYPE: number;
  APP_DATE: string | null;
  BOOK_NO: string;
  WALK_NO: string;
  SEQ_NO: number | null;
  CUSTKEY: string;
  SURNAME: string;
  ADDRESS: string;
  LAT: string;
  LNG: string;
  OLD_CTYPE: string;
  NEW_CTYPE: string;
  ACTUAL_CTYPE: string;
  OLD_UNITS: number | null;
  NEW_UNITS: number | null;
  ACTUAL_UNITS: number | null;
  OLD_SEWER: number | null;
  NEW_SEWER: number | null;
  ACTUAL_SEWER: number | null;
  STATUS: number | null;
  PREVIEW_DATE: string | null;
  ACCURECY: number | null;
}
