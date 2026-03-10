import { BILLCTYPEApi } from './billCtype';
import { RECEPTITEMApi } from './receiptItem';

export interface BILLApi {
  CUSTKEY: string;
  PAYMENT_NO: string;
  CYCLE_ID: number;
  SEQ_NO: number | null;
  BILNG_DATE: string;
  S_CR_READING: number | null;
  S_PR_READING: number | null;
  S_CONSUMP: number | null;
  CL_BLNCE: number | null;
  OP_BLNCE: number | null;
  INSTALMENT: number | null;
  PREVIOUS_AMOUNT_COLLECTED: number | null;
  CALC_TYPE: string;
  INSTALMENT_DATE: string | null;
  AMOUNT_COLLECTED: number | null;
  SURNAME: string;
  CTG: string;
  OLD_KEY: string;
  COLLECTION_DATE: string | null;
  DUE_AMOUNT: number | null;
  IS_CANCELLED: boolean | null;
  OWNER_ID: number | null;
  OWNER: string;
  STATION_NO: number | null;
  RECEPTS: RECEPTITEMApi[];
  BILL_CTYPES: BILLCTYPEApi[];
  IS_PARTIAL: boolean;
}
