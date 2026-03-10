// export interface RECEIPT {
//   RECEIPT_NO: string;
//   CUSTKEY: string;
//   PAYMENT_NO: string;
//   AMOUNT: number | null;
//   EMP_ID: number | null;
//   COLLECTION_DATE: string | null;
//   COLLECTION_TYPE: number | null;
//   COLLECTION_METHOD: number | null;
//   PAYMENT_METHOD: number | null;
//   CHEQ_NO: string;
//   CHEQ_BANK: string;
//   DISCOUNT_AMOUNT: number | null;
//   DISCOUNT_DOCUMENT_NO: string;
//   DOCUMENT_NO: string;
//   CANCELLED: boolean;
//   CANCELLED_AMOUNT: number | null;
//   CANCELLED_BY: string;
//   CANCELLED_REASON: string;
//   CANCELLED_DATE: string | null;
//   LAT: number | null;
//   LNG: number | null;
//   ACCURECY: number | null;
//   DEVICE_ID: string;
//   STAMP_USER: string;
//   STAMP_DATE: string | null;
//   DEPOSIT_ID: number | null;
//   IS_POSTED: boolean | null;
//   POST_DATE: string | null;
//   POST_BY: string;
//   TRANS_NO: number | null;
//   INS_CYCLE_ID: number | null;
//   INS_BILNG_DATE: string | null;
//   BILNG_DATE: string | null;
//   CYCLE_ID: number | null;
//   IS_HAFZA_PRINTED: boolean | null;
//   HAFZA_PRINT_COUNT: number | null;
//   HAFZA_PRINT_DATE: string | null;
//   BILLGROUP: string;
//   BOOK_NO: string;
//   WALK_NO: string;
//   STATION_NO: number | null;
//   STATM_NO: number | null;
//   COLLECTION_ID: number | null;
//   RECEIPT_CHARGE1: number | null;
//   RECEIPT_CHARGE2: number | null;
//   RECEIPT_CHARGE3: number | null;
//   CANCELLED_RECIEPT_NO: string;
//   USER_ID: number | null;
//   FPTN: string;
//   FCRN: string;
//   BLRPTN: string;
//   RECEIPT_TYPE: number | null;
//   COMMENT: string;
// }

import { RECEIPT } from './myReceipt';

export interface RECEPTITEMApi extends RECEIPT {
  COLLECTOR_NAME: string;
  COLLECTION_TYPE_DESC: string;
  PAYMENT_METHOD_DESC: string;
  COLLECTION_METHOD_DESC: string;
}
