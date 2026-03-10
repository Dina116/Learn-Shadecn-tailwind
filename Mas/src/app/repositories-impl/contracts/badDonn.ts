export interface BADCONNApi {
  ID: number;
  BOOK_NO: string;
  WALK_NO: string;
  CONN_TYPE: number | null;
  NOTES: string;
  LAT: number | null;
  LNG: number | null;
  SYNC_ST: number | null;
  SURNAME: string;
  NO_FLOORS: number | null;
  DEVICE_ID: string;
  DEVICE_CONNID: number;
  STAMP_USER: string;
  STAMP_DATE: string | null;
  STATUS: number | null;
  LOCATION_SOURCE: number | null;
  LOCATION_DATE: string | null;
  ACCURECY: number | null;
}
