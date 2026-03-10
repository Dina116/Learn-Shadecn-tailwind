export interface STATIONApi {
  STATION_NO: number;
  NAME: string;
  DESCRIPTION: string;
  IS_HEADQUARTERS: number | null;
  IS_MAINTSITE: number | null;
  IS_MRREADING: number | null;
  IS_CSERVICES: number | null;
  IS_RECEIPTING: number | null;
  IP_ADDRESS: string;
  PORT_NO: number | null;
  SECTOR_CODE: number | null;
  SECTOR_NAME: string;
  STAMP_DATE: string | null;
  STAMP_USER: string;
}
