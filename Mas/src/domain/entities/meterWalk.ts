export interface METERWALK {
  STATION_NO: number;
  BOOK_NO: string;
  WALK_NO: string;
  DESCRIBE: string;
  BILLGROUP: string;
  ASSIGNED_TO_HH: number | null;
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
  changed?:boolean
  uniqueId?:string
  hhAssignedError?:boolean
}

export interface METERWALKREQ {
  groups?: string;
  empid?: number;
  unassigned?: boolean;
  station_no?: number;
}
export interface PUTMETERWALKREQ {
  walk: METERWALK;
  transfeer_ohda?: boolean;
}
