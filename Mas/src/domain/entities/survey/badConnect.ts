export interface BADCONN {
  id?: number;
  bookNo?: string;
  walkNo?: string;
  connType?: number;
  notes?: string;
  lat?: number;
  lng?: number;
  syncSt?: number;
  surname?: string;
  noFloors?: number;
  deviceId?: string;
  deviceConnid?: number;
  stampUser?: string;
  stampDate?: string;
  status?: string;
  locationSource?: number;
  locationDate?: string;
  accurecy?: number;
}

export interface UPDATEBADCONNREQ {
  data: BADCONN;
  id: number;
}
export interface IDREQ {
  id: number;
}
