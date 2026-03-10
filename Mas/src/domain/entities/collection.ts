import { CTYPEDTL } from './cTypeDetail';
import { CUSTOMERSEQ } from './customerSeq';
import { DistributionItem } from './destibutionItem';

export interface IReopenClosedBillGroupBookReq {
  billgroup: string;
  book_no: string;
  walk_no: string;
  emp_id?: number;
}
export interface CollectionDestributionItm extends DistributionItem {
  PAYMENT_NO?: string;
  RECEIPT_NO?: string;
  COLLECTED_AMOUNT?: number | null;
  CASH_COLLECTED_AMOUNT?: number | null;
  OTHER_COLLECTED_AMOUNT?: number | null;
  COLLECTED_AMOUNT_WITH_RECEIPT_CHARGE?: number | null;
  COLLECTED_COUNT?: number | null;
  UNCOLLECTED_AMOUNT?: number | null;
  UNCOLLECTED_COUNT?: number | null;
  GARD_AMOUNT?: number | null;
  GARD_COUNT?: number | null;
  COLLECTION_DATE?: string | null;
  DEPOSTED_COUNT?: number | null;
  DEPOSTED_AMOUNT?: number | null;
  COLLECTION_NOTE?: number | null;
  DEPOSIT_ID?: number | null;
  CL_BLNCE?: number | null;
  DELIVERY_ST?: number | null;
  DELIVERY_DATE?: string | null;
  IS_COLLECTED_BYDEVICE?: boolean | null;
  IS_DEPOSITED?: boolean | null;
  OP_BLNCE?: number | null;
  INSTALMENT?: number | null;
  WATER_AMT?: number | null;
  SEWER_AMT?: number | null;
  BASIC_AMT?: number | null;
  TAX_AMT?: number | null;
  INSTALLS_AMT?: number | null;
  DBT_AMT?: number | null;
  CRDT_AMT?: number | null;
  AGREEM_AMT?: number | null;
  TAKAFUL_AMT?: number | null;
  TANZEEM_AMT?: number | null;
  METER_INSTALLS_AMT?: number | null;
  CONN_INSTALLS_AMT?: number | null;
  OTHER_AMT?: number | null;
  OTHER_AMT1?: number | null;
  OTHER_AMT2?: number | null;
  OTHER_AMT3?: number | null;
  OTHER_AMT4?: number | null;
  OTHER_AMT5?: number | null;
  ROUND_AMT?: number | null;
  METER_AMT?: number | null;
  CONN_AMT?: number | null;
  METER_MAN_AMT?: number | null;
  COMPUTER_AMT?: number | null;
  CONTRACT_AMT?: number | null;
  GOV_AMT?: number | null;
  UNI_AMT?: number | null;
  CLEAN_AMT?: number | null;
  CUR_PAYMNTS?: number | null;
  COLLECTION_AMT?: number | null;
  CUR_CHARGES?: number | null;
  GARD?: boolean | null;
  NO_UNITS?: number | null;
  ACTIVITY?: string;
  CALC_TYPE?: string;
  CR_REAING?: number | null;
  PR_READING?: number | null;
  PR_READING_DATE?: string | null;
  CONSUMP?: number | null;
  READ_TYPE?: number | null;
  PR_READ1?: number | null;
  METER_REF?: string;
  COLLECTOR_NAME?: string;
  COLLECTOR_ID?: number | null;
  MARKED?: boolean | null;
  MARKE_NOTE?: string;
  IS_FAILED?: boolean | null;
  IS_SUCCSSED?: boolean | null;
  DISCOUNT?: number | null;
  IS_CHEQUE?: boolean | null;
  CHEQUE_NO?: string;
  INSTALMENT_DATE?: string | null;
  STATM_CTYPES?: string;
  REMINDER_VALUE?: number | null;
  COLLECTOR?: string;
  COLLECTION_TYPE?: string;
  COLLECTION_TYPE_ID?: number | null;
  COLLECTION_METHOD?: string;
  COLLECTION_METHOD_ID?: number | null;
  PAYMENT_TYPE?: string;
  PAYMENT_TYPE_ID?: number | null;
  COLLECTION_ID?: number | null;
  DUE_AMOUNT?: number | null;
  BILL_AMOUNT?: number | null;
  BILL_ADJ_AMOUNT?: number | null;
  RECEIPT_CHARGE1?: number | null;
  RECEIPT_CHARGE2?: number | null;
  RECEIPT_CHARGE3?: number | null;
  PARTIAL_COLLECTED_AMOUNT?: number | null;
  PARTIAL_COLLECTED_COUNT?: number | null;
  CUR_BILL_COLLECTED_COUNT?: number | null;
  CUR_BILL_COLLECTED_AMOUNT?: number | null;
  INSTALMENT_COLLECTED_AMOUNT?: number | null;
  TOTAL_COLLECTED_AMOUNT?: number | null;
  GARD_PAYMENT_NO?: string;
  IS_COLLECTED_BY_OWNER?: boolean;
  IS_COLLECTED_BY_OTHER?: boolean;
  PAYMENT_METHOD_ID?: number | null;
  PAYMENT_METHOD?: string;
  COMMENT?: string;
  CTYPES_DTL?: CTYPEDTL[];
  REQUEST_COMMENT?: string;
  ACTION_COMMENT?: string;
  FORM_NO?: number | null;
  ADVANCE_COLLECTION?: boolean | null;
  OWNER?: string;
  OWNER_ID?: number | null;
  totalcountcollected?: number;
  totalamountcollected?: number;
  Bills?: Partial<CollectionDestributionItm>[];
  methods?:[{
    title: string;
    id: number;
    count: number;
  }]
  rowIndex?:number
  siteName?: string;
  CHEQ_BANK?: string;
  IS_CODY?: boolean;
}
export interface ICollectionDestributionItm extends CollectionDestributionItm {
  isSelected?:boolean
}
export interface IPaymentReq {
  custkey?: string;
  payment_no?: string;
  cycle_id?: number;
  skipBracodTrim?: boolean;
  forQuery?: boolean;
}
export interface ICloseGardReq {
  empid: number;
  billgroup?: string;
}
export interface IUncollectedReq {
  mark?: boolean;
  empid?: number;
  bilng_date?: string | Date;
}
export interface Ipostreq {
  seq: CUSTOMERSEQ[];
  bookno: string;
  walkno: string;
  save?: boolean;
  act?: string;
  Action?:string
}
export interface IPaymentForHqReq {
  key: string;
  searchBy?: string;
  allData?: boolean;
  oldOne?: boolean;
  forQuery?: boolean;
  october?: boolean;
}

export interface EnumType {
  DESCRIPTION: string;
  ID: number;
  VALUE: string;
}
export interface ICancelCollectionReq {
  custkey: string;
  payment_no?: string;
  receipt_no?: string;
  collectionId?: number;
  cancelledAmount?: number;
  empid?: number;
  locked?: boolean;
  includeDeposted?: boolean;
  reason?: string;
}

export interface RejectPostReq {
  custkey: string;
  payment_no?: string;
  collection_id?: number;
}

export interface UNPOSTEDReCEIPTSByBILLINGDATEREQ {
  empid?: number;
  depositId?: number;
}

export interface CALCCHARGEREQ {
  amount: number;
  paymentMethod: number;
}
export interface UNPOSTEDREQ {
  empid: number;
  depositId?: number;
}
export interface UNPOSTEDDETAILSREQ {
  empid: number | undefined;
  depositId?: number;
  custkey?:string
}
export interface ICHANGEPAYMENTMETHOD {
    Payments: string[];
    PaymentMethod: number;
}

export interface ChangeReciptsModel {
  Recipts: string[];
  PaymentMethod: number;
}

export interface UNPOSTEDGROUPMETHODREQ {
  empid:string
}

export interface UNPOSTEDGROUPMETHODS {
  Payment_Method: number;
  Payment_Name: string;
  Payment_Amount: number;
  Payment_Count: number
}

export interface CLEARHAFZAPRINTREQ {
  empid: number;
}

export interface GETLASTRECEIPTREQ {
  custkey?: string;
  payment_no?: string;
  includeDeposted?: boolean;
}
export interface COLLECTIONPOSTEDSHAREDREQ {
  empid: number;
  depositId?: number;
}
export interface CUSTKEYREQ {
  custkey: string;
}
export interface LISTPAYMENTSREQ {
  key: string;
  searchBy?: string;
  allData?: boolean;
  oldOne?: boolean;
  forQuery?: boolean;
  october?: boolean;
}
export interface UNCOLLECECTEDREQ {
  empid: number;
  billgroup?: string;
}
export interface COLLECTORSPERFORMANCEREQ {
  bilng_date: string | undefined;
  station_no?: number;
}
