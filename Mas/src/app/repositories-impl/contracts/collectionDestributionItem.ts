import { CTYPEDTLApi } from './ctypeDtl';
import { DISTRIPUTIONITEMAPI } from './destributionItem';

interface ICollectionDestributionItem extends DISTRIPUTIONITEMAPI {
  PAYMENT_NO: string;
  RECEIPT_NO: string;
  RECEIPT_TYPE:number
  COLLECTED_AMOUNT: number | null;
  CASH_COLLECTED_AMOUNT: number | null;
  OTHER_COLLECTED_AMOUNT: number | null;
  COLLECTED_AMOUNT_WITH_RECEIPT_CHARGE: number | null;
  COLLECTED_COUNT: number | null;
  UNCOLLECTED_AMOUNT: number | null;
  UNCOLLECTED_COUNT: number | null;
  GARD_AMOUNT: number | null;
  GARD_COUNT: number | null;
  COLLECTION_DATE: string | null;
  DEPOSTED_COUNT: number | null;
  DEPOSTED_AMOUNT: number | null;
  COLLECTION_NOTE: number | null;
  DEPOSIT_ID: number | null;
  CL_BLNCE: number | null;
  DELIVERY_ST: number | null;
  DELIVERY_DATE: string | null;
  IS_COLLECTED_BYDEVICE: boolean | null;
  IS_DEPOSITED: boolean | null;
  OP_BLNCE: number | null;
  INSTALMENT: number | null;
  WATER_AMT: number | null;
  SEWER_AMT: number | null;
  BASIC_AMT: number | null;
  TAX_AMT: number | null;
  INSTALLS_AMT: number | null;
  DBT_AMT: number | null;
  CRDT_AMT: number | null;
  AGREEM_AMT: number | null;
  TAKAFUL_AMT: number | null;
  TANZEEM_AMT: number | null;
  METER_INSTALLS_AMT: number | null;
  CONN_INSTALLS_AMT: number | null;
  OTHER_AMT: number | null;
  OTHER_AMT1: number | null;
  OTHER_AMT2: number | null;
  OTHER_AMT3: number | null;
  OTHER_AMT4: number | null;
  OTHER_AMT5: number | null;
  ROUND_AMT: number | null;
  METER_AMT: number | null;
  CONN_AMT: number | null;
  METER_MAN_AMT: number | null;
  COMPUTER_AMT: number | null;
  CONTRACT_AMT: number | null;
  GOV_AMT: number | null;
  UNI_AMT: number | null;
  CLEAN_AMT: number | null;
  CUR_PAYMNTS: number | null;
  COLLECTION_AMT: number | null;
  CUR_CHARGES: number | null;
  GARD: boolean | null;
  NO_UNITS: number | null;
  ACTIVITY: string;
  CALC_TYPE: string;
  CR_REAING: number | null;
  PR_READING: number | null;
  PR_READING_DATE: string | null;
  CONSUMP: number | null;
  READ_TYPE: number | null;
  PR_READ1: number | null;
  METER_REF: string;
  COLLECTOR_NAME: string;
  COLLECTOR_ID: number | null;
  MARKED: boolean | null;
  MARKE_NOTE: string;
  IS_FAILED: boolean | null;
  IS_SUCCSSED: boolean | null;
  DISCOUNT: number | null;
  IS_CHEQUE: boolean | null;
  CHEQUE_NO: string;
  INSTALMENT_DATE: string | null;
  STATM_CTYPES: string;
  REMINDER_VALUE: number | null;
  COLLECTOR: string;
  COLLECTION_TYPE: string;
  COLLECTION_TYPE_ID: number | null;
  COLLECTION_METHOD: string;
  COLLECTION_METHOD_ID: number | null;
  PAYMENT_TYPE: string;
  PAYMENT_TYPE_ID: number | null;
  COLLECTION_ID: number | null;
  DUE_AMOUNT: number | null;
  BILL_AMOUNT: number | null;
  BILL_ADJ_AMOUNT: number | null;
  RECEIPT_CHARGE1: number | null;
  RECEIPT_CHARGE2: number | null;
  RECEIPT_CHARGE3: number | null;
  PARTIAL_COLLECTED_AMOUNT: number | null;
  PARTIAL_COLLECTED_COUNT: number | null;
  CUR_BILL_COLLECTED_COUNT: number | null;
  CUR_BILL_COLLECTED_AMOUNT: number | null;
  INSTALMENT_COLLECTED_AMOUNT: number | null;
  TOTAL_COLLECTED_AMOUNT: number | null;
  GARD_PAYMENT_NO: string;
  IS_COLLECTED_BY_OWNER: boolean;
  IS_COLLECTED_BY_OTHER: boolean;
  PAYMENT_METHOD_ID: number | null;
  PAYMENT_METHOD: string;
  COMMENT: string;
  CTYPES_DTL: CTYPEDTLApi[];
  REQUEST_COMMENT: string;
  ACTION_COMMENT: string;
  FORM_NO: number | null;
  ADVANCE_COLLECTION: boolean | null;
  OWNER: string;
  OWNER_ID: number | null;
  totalcountcollected: number;
  totalamountcollected: number;
  Bills: Partial<ICollectionDestributionItem>[];
  // new_added
  COLLECTED_WITH_BEFORE_AMOUNT?: number;
  REMINDER_BEFORE_AMOUNT?: number;
  FINAL_COLLECTED_AMOUNT?: number;
  REC_AMOUNT?: number;
  COUNT_PRINT?: number;
  DISCOUNT_AMOUNT?: number;
  IS_CODY?: boolean;
}

export type CollectionDestributionItem = Partial<ICollectionDestributionItem>;

export interface CollectionDestributionReceipt {
  CUSTKEY: string;
  PAYMENT_NO: string;
  RECEIPT_NO: string;
  CYCLE_ID?: number;
  REC_AMOUNT?: number;
  COLLECTION_DATE?: string; // or Date
  USER_NAME: string;
  EMP_ID?: number;
  COLLECTED_WITH_BEFORE_AMOUNT?: number;
  REMINDER_BEFORE_AMOUNT?: number;
  BILL_AMOUNT?: number;
  TOTAL_COLLECTED_AMOUNT?: number;
  FINAL_COLLECTED_AMOUNT?: number;
  COUNT_PRINT?: number;
  CUSTOMER_NAME?: string;
  PRINT_COUNT?: number;
  BATCH_NO?: number;
}

export interface GetPaymentReciptRequest {
  payment_no: string;
  custkey: string;
  rec_no: string;
}
export interface ReciptBulkItem {
  payment_no: string;
  custkey: string;
  rec_no: string;
}
