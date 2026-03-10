export interface METERBOOKApi {
  CODE: string;
  DESCRIBE: string;
  BILLGROUP: string;
  NO_WALKS: number | null;
  HANDHELD_ID: string;
  MREADER_ID: string;
  STATION_NO: number;
  UNUSED: boolean | null;
  LAT_MIN: number | null;
  LAT_MAX: number | null;
  LNG_MIN: number | null;
  LNG_MAX: number | null;
  APPLY_REF: number | null;
  REF_DATE: string | null;
  DISTANCE_REF: number | null;
  SHAPE: string;
  PATH: string;
}
