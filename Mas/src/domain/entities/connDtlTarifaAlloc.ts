export interface CONNDTLTARRIFAALLOC {
  BILNG_DATE: string | null;
  CYCLE_ID: number;
  PROP_REF: string;
  CUSTKEY: string;
  C_TYPE: string;
  ALLOC_PERC: number | null;
  ALLOC_PERC_SEWER: number | null;
  ESTIM_CONS_PU: number | null;
  Quta: number | null;
  NO_UNITS: number | null;
  DESCRIPTION: string;
  UPDATE_DATE: string | null;
}
export interface GETCONNTARRIFAREQ {
  custkey: string;
  cycleid?: number;
}
export interface UPDATECONNTARRIFAREQ {
  source: CONNDTLTARRIFAALLOC[];
  custkey: string;
  is_manual_estim: boolean;
}
