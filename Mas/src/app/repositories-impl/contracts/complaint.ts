export interface COMPLAINTAPI {
  ID: number;
  COMPLAINT_ID: number;
  CUSTKEY: string;
  DEVICE_ID: string;
  BOOK_NO: string;
  WALK_NO: string;
  TYPE: ComplaintType;
  DEGREE: ComplaintDegree;
  NOTES: string;
  LAT: number | null;
  LNG: number | null;
  STAMP_USER: string;
  STAMP_DATE: string | null;
  ADDRESS: string;
  TEL: string;
  CUSTOMER_NAME: string;
  DEVICE_COMPLAINT_ID: number;
  SHAKWA_TYPE: number | null;
  SHAKWA_DEGREE: number | null;
  SYNC_ST: number | null;
  LOCATION_SOURCE: number | null;
  LOCATION_DATE: string | null;
  ACCURECY: number | null;
}

export enum ComplaintType {
  BILL,
  LOW_PRESSURE,
  PIPE_DAMAGE,
  QUALITY,
}

export enum ComplaintDegree {
  LOW,
  NORMAL,
  HIGHT,
  DANGER,
}
