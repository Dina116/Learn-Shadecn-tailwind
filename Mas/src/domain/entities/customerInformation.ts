import { CustAgreem } from './customerAgreement';
import { FTRANSACTION } from './fTransaction';
import { PROPINFO } from './propInfo';
import { STATMENT } from './statement';

export interface CUSTOMERINFORMATION {
  custkey: string;
  propRef?: string;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  seqNo?: number;
  prevCustkey?: string;
  oldKey?: string;
  surname?: string;
  address?: string;
  propinfo: PROPINFO;
  agreemsList: CustAgreem[];
  statmentsList: STATMENT[];
  allTransactionsList: FTRANSACTION[];
  stationNo?: string;
  mainCtype?: string;
  UA_ADDRESS?: string;

  meterRef?: string;
  prevPropRef?: string;
  noUnits?: number;
  meterDiam?: string;
  meterStatus?: string;
  conStatus?: string;
  nId?: string;
  taxNo?: string;
  hasWater?: boolean;
  hasSewer?: boolean;
  installDate?: string;
  removalDate?: string;
  cTypeDescription?: string;
  meterType?: string;
  meterMake?: string;
  connDate?: string;
}
export interface TRUNCATEREQ {
  truncate?: boolean;
}

export interface GETLASTBILLINGREADINGREQ {
  custkey: string;
}
