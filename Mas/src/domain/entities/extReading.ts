export interface EXTREADING {
  CUSTKEY: string;
  STAMP_DATE: string | null;
  NAME: string;
  CR_READING: number | null;
  CONFIRM: boolean | null;
  CONFIRM_DATE: string | null;
  CONFIRM_USER: string;
  INS_CYCLE_ID: number | null;
  METER_IMG: string;
  IS_REJECTED: boolean | null;
  REJECT_REASON: string;
  INS_BILNG_DATE: string | null;
  METER_IMAGES_HIST: Array<IMGS>;
}
export interface IMGS {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
}
