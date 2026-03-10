export interface TransCode {
  TRANS_TYPE: number;
  TRANS_STYPE: number;
}

export interface MarketingPlanApi {
  NO_MONTHES: number;
  REF_AMOUNT: number;
  BILLGROUP: string;
  DESCRIPTION: string;
}

export interface MarketingPlansListApi {
  ID: number;
  DESCRIPTION: string;
  NO_MONTHS: number;
  AMOUNT: number;
  STAMP_DATE: Date | string;
  STAMP_USER: string;
}

export interface MarketingResultApi {
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
  DETAILS: MarketingResultApi[];
  TRANS_CODES: TransCode[];
  CUSTOMERS: string[];
}
