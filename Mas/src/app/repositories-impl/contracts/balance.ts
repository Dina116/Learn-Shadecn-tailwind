export interface BalanceApi {
  STATION_NO: number;
  BRANCH: string;
  TITLE: string;
  ID: number;
  BILNG_DATE: string | null;
  DESCRIPTION: string;
  ISSUED: number | null;
  COLLECTED: number | null;
  DEPOSITED: number | null;
  ISSUED_COUNT: number | null;
  COLLECTED_COUNT: number | null;
  DEPOSITED_COUNT: number | null;
  DATA: { [key: string]: string };
  LIFE: number | null;
  START_DATE: string | null;
  IS_OPEN: number;
}
