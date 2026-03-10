import { Other } from './bookCycle';

export interface BILLGROUPCYCLE extends Other {
  STATION_NO: number | null;
  BILLGROUP: string;
  DESCRIPTION: string;
  BILNG_DATE: string | null;
  CYCLE_ID: number | null;
  NO_WALKS_C: number | null;
  NO_CLOSED_WALKS_C: number | null;
  NO_OPENED_WALKS_C: number | null;
  NO_LOADED_WALKS_C: number | null;
  NO_WALKS_R: number | null;
  NO_CLOSED_WALKS_R: number | null;
  NO_LOADED_WALKS_R: number | null;
  NO_OPENED_WALKS_R: number | null;
  UNUSED: boolean | null;
}
