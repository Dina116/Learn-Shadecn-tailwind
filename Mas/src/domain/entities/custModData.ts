/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CUSTMODDATA {
  CUSTKEY: string;
  PROP_REF: string;
  STATM_NO: number;
  OLD_HAS_METER: number;
  OLD_METER_TYPE: string;
  OLD_METER_REF: string;
  OLD_METER_CONDITION: string;
  OLD_METER_SIZE: string;
  OLD_HAS_SEWER: number;
  OLD_C_TYPE: string;
  OLD_NO_UNITS: number;
  OLD_IS_MAIN_CONN: number;
  OLD_CONN_STATUS: number;
  OLD_SURNAME: string;
  OLD_UA_ADRESS1: string;
  OLD_UA_ADRESS2: string;
  OLD_UA_ADRESS3: string;
  OLD_UA_ADRESS4: string;
  OLD_ESTIM_CONS: string;
  NEW_ESTIM_CONS: string;
  NEW_HAS_METER: number;
  NEW_METER_TYPE: string;
  NEW_METER_REF: string;
  NEW_METER_CONDITION: string;
  NEW_METER_SIZE: string;
  NEW_HAS_SEWER: number;
  NEW_C_TYPE: string;
  NEW_NO_UNITS: number;
  NEW_IS_MAIN_CONN: number;
  NEW_CONN_STATUS: number;
  NEW_SURNAME: string;
  NEW_UA_ADRESS1: string;
  NEW_UA_ADRESS2: string;
  NEW_UA_ADRESS3: string;
  NEW_UA_ADRESS4: string;
  LAST_INVOICED_READING: number;
  READING_INVOICED_BILNG_DATE: Date;
  CTYPES_DESCRIPTION: string;
  CTYPES: any[];
  UnbilledReadings: any[];
}
export interface GETRECALCMODIFYINVICEREQ {
  custkey?: number;
  startDate?: string;
}
