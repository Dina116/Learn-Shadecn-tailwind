export interface NewPayments {
  PAYMENT_NO: string;
  AMOUNT: number; // Reminder Value
}
interface NewPaymentsList {
  PAYMENTS: NewPayments[];
}
interface CollectBillRequest {
  custkey?: string;
  empid?: number;
  locked?: boolean;
  enableDiscount?: boolean;
  discountDocumentNo?: string;
  chequeNo?: string;
  chequeBank?: string;
  discount?: number;
  comment?: string;
  paymentMethod?: number;
  totalAmountPayment?: number;
  charge1?: number;
  charge2?: number;
  charge3?: number;
}

export interface COLLECBILLREQUESTAPI extends CollectBillRequest {
  payment_no: string;
}

export interface COLLECTIONLISTOFBILLSREQAPI extends CollectBillRequest {
  payments: string[];
  newPayments: NewPaymentsList;
}

export interface COLLECTIONLISTOFBILLSREQAPINew extends CollectBillRequest {
  newPayments: NewPayments[];
}
export interface PARTIALCOLLECTBILLREQAPI extends COLLECBILLREQUESTAPI {
  isBill?: boolean;
  paymentNo: string | number;
  amountCollected: number;
}
