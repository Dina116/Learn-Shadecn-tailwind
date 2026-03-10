import { StartEndDateBilng } from '@/app/repositories-impl/contracts/startAndEndDate';
import { IBillGroupBookWalkBilng } from './reading';
import { BILLINGDATEREQ } from './statmDeposit';

export interface RECEIPT {
  receiptNo?: string;
  custkey?: string;
  paymentNo?: string;
  amount?: number;
  empId?: number;
  collectionDate?: string | null;
  collectionType?: number;
  collectionMethod?: number;
  paymentMethod?: number;
  cheqNo?: string;
  cheqBank?: string;
  discountAmount?: number;
  discountDocumentNo?: string;
  documentNo?: string;
  cancelled?: boolean;
  cancelledAmount?: number;
  cancelledBy?: string;
  cancelledReason?: string;
  cancelledDate?: string | null;
  lat?: number;
  lng?: number;
  accurecy?: number;
  deviceId?: string;
  stampUser?: string;
  stampDate?: string | null;
  depositId?: number;
  isPosted?: boolean;
  postDate?: string | null;
  postBy?: string;
  transNo?: number;
  insCycleId?: number;
  insBilngDate?: string | null;
  bilngDate?: string | null;
  cycleId?: number;
  isHafzaPrinted?: boolean;
  hafzaPrintCount?: number;
  hafzaPrintDate?: string | null;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  stationNo?: number;
  statmNo?: number;
  collectionId?: number;
  receiptCharge1?: number;
  receiptCharge2?: number;
  receiptCharge3?: number;
  cancelledRecieptNo?: string;
  userId?: number;
  fptn?: string;
  fcrn?: string;
  blrptn?: string;
  receiptType?: number;
  comment?: string;
  deliveryDate?:string
}
export interface MyReceipt extends RECEIPT {
  OWNER_ID: number | null;
  COLLECTOR_NAME: string;
  OWNER_NAME: string;
  SURNAME: string;
  PAYMENT_METHOD_DESC: string;
  COLLECTION_METHOD_DESC: string;
  COLLECTION_TYPE_DESC: string;
  RECEIPT_NO: string;
  PREVIOUS_AMOUNT_COLLECTED: number;
  BILL_AMOUNT: number;
}

export interface RECEIPTREQ extends IBillGroupBookWalkBilng {
  empid?: number;
  ownerId?: number;
  insBilngDate?: Date | string;
  startDate?: string;
  endDate?: string;
  collectionType?: number;
  collectionMethod?: number;
  paymentMethod?: number;
}
export interface CANCELRECEIPTREQ extends StartEndDateBilng {
  empid?: number;
  unPostedOnly?: boolean;
}

export interface EMPREQ extends BILLINGDATEREQ {
  empid?: number;
}
