export interface ICustomerMeters {
    CUSTKEY: string;
    METER_ID?: number;
    METER_REF?: string;
    LAT?: number;
    LNG?: number;
    METAR_NOTE?: string;
  }
export interface ICustomerMeterReq {
    meter_ref: string | null;
    custkey: string | null;
    meter_id : number | null;
}

export interface IHandReadings {
  CUSTKEY: string; // Required: Customer key
  CYCLE_ID: number; // Required: Cycle ID
  STATION_NO: number; // Required: Station number
  BOOK_NO: string; // Required: Book number
  WALK_NO: string; // Required: Walk number
  SEQ_NO?: number; // Optional: Sequence number
  METER_ID?: number; // Optional: Meter ID
  METER_REF?: string; // Optional: Meter reference
  METER_TYPE?: string; // Optional: Meter type
  LAT?: number; // Optional: Latitude
  LNG?: number; // Optional: Longitude
  ACCURECY?: number; // Optional: Accuracy
  GPS_SOURCE?: string; // Optional: GPS source
  READING_DESC?: string; // Optional: Reading description
  READING_NOTE?: number; // Optional: Reading note
  EMP_ID?: number; // Optional: Employee ID
  CR_READING?: number; // Optional: Current reading
  PR_READ?: number; // Optional: Previous reading
  CONSUMP?: number; // Optional: Consumption
  }

  export interface IHandReadingsReq {
  station?: number | null;
  bookno?: string | null;
  walkno?: string | null;
  custkey?: string | null;
  empid?: number | null;
  cycle_id?: number;
}
