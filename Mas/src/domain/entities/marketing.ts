export interface TransCode {
  TRANS_TYPE: number;
  TRANS_STYPE: number;
}
export interface MARKETINGRESULT {
  CUSTKEY: string;
  REF_AMOUNT: number;
  BILNG_DATE: string;
  TOTAL_COUNT: number;
  TOTAL_AMOUNT: number | null;
  LARG_COUNT: number;
  LARG_AMOUNT: number | null;
  TARGET_COUNT: number;
  TARGET_AMOUNT: number | null;
  ACTUAL_COUNT: number;
  ACTUAL_AMOUNT: number | null;
  NO_MONTHES: number;
  BILLGROUP: string;
  DETAILS: MARKETINGRESULT[];
  TRANS_CODES: TransCode[];
  CUSTOMERS: string[];
}

export interface ADDMARKRTINGPLANEREQ {
  noMonthes: number
refAmount: number
billgroups: string
description: string
}

export interface MarketingPlansList {
  ID: number;
  DESCRIPTION: string;
  NO_MONTHS: number;
  AMOUNT: number;
  STAMP_DATE: Date | string;
  STAMP_USER: string;
}
export interface GETMARKETINGPLANREQ {
  refAmount: number | undefined;
  bilngDate: Date | string;
  noMonthes: number | undefined;
  target: string | undefined;
  rejected: string | undefined;
  plan_id:number
}
export interface APPLYMARKETINGREQ {
  plan: MARKETINGRESULT;
}
