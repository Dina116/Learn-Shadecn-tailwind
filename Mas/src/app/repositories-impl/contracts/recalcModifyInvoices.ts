interface RecalcINVOICES {
  CTYPES: string[];
  CUSTKEY: string;
  PROP_REF: string;
  STATM_NO: number;
  BILNG_DATE: string;
  OLD_OP_BLNCE: number;
  OLD_CL_BLNCE: number;
  OLD_INSTALMENT: number;
  OLD_CUR_CHARGES: number;
  OLD_CUR_PAYMNTS: number;
  OLD_HAS_METER: number;
  OLD_METER_TYPE: string;
  OLD_METER_REF: string;
  OLD_METER_CONDITION: string;
  OLD_METER_SIZE: string;
  OLD_HAS_SEWER: number;
  OLD_C_TYPE: string;
  OLD_NO_UNITS: number;
  OLD_ESTIM_CONS?: number;
  OLD_IS_MAIN_CONN: number;
  OLD_CONN_STATUS: number;
  OLD_CURR_READ: number;
  OLD_PREV_READ: number;
  OLD_CONS: number;
  NEW_HAS_METER: number;
  NEW_METER_TYPE: string;
  NEW_METER_REF: string;
  NEW_METER_CONDITION: string;
  NEW_METER_SIZE: string;
  NEW_HAS_SEWER: number;
  NEW_C_TYPE: string;
  NEW_NO_UNITS: number;
  NEW_ESTIM_CONS?: number;
  NEW_IS_MAIN_CONN: number;
  NEW_CONN_STATUS: number;
  NEW_CURR_READ: number;
  NEW_PREV_READ: number;
  NEW_CONS: number;
}
export interface FILLRECALCRESAPI {
  hasError: boolean;
  CUSTKEY: string;
  STATM_NO: number;
  rows?: Array<RecalcINVOICES>;
  ROWS?: Array<RecalcINVOICES>;
}
export interface FILLRECALCREQAPI {
  custkey: string;
  startDate: string;
}

export interface MODIFYRECALCDATAAPI {
  CUSTKEY: string;
  STATM_NO: number;
  ROWS?: Array<RecalcINVOICES>;
}

export interface MODIFYRECALCREQAPI {
  id: string | null;
  undefined?: string;
}
