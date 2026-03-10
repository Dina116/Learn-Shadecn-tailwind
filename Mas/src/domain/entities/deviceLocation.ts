export interface DEVICELOCATION {
  ID: number;
  DEVICE_ID: string;
  LAT: number | null;
  LNG: number | null;
  START_DATE: string | null;
  END_DATE: string | null;
  GPS_SOURCE: number | null;
  ACCURECY: number | null;
  CHANGE: number | null;
  REPEAT: number | null;
}
export interface UPDATEDEVICELOCATIONREQ {
  id: number | string;
  entity: DEVICELOCATION;
}

export interface ADDDEVICELOCREQ {
  entity: DEVICELOCATION;
}
export interface DELETEDEVICELOCREQ {
  id?: number | string;
}
