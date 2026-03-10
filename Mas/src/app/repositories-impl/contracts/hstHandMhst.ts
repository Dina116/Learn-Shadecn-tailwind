export interface HSTHANDMHSTApi {
  STATION_NO: number;
  CUSTKEY: string;
  CYCLE_ID: number;
  BILNG_DATE: string;
  no_units: number | null;
  c_type: string;
  MODIFIED_AVRG_CONSUMP: number | null;
  CONN_AVRG_CONSUMP: number | null;
  READ_TYPE: number | null;
  cl_blnce: number | null;
  OP_BLNCE: number | null;
  CUR_CHARGES: number | null;
  S_CONSUMP: number | null;
  S_CR_READING: number | null;
  S_PR_READING: number | null;
  S_METER_STATUS: string;
  CONN_STATUS: number | null;
  NO_METER: boolean | null;
}
