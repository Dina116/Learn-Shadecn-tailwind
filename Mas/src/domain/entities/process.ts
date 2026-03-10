export interface PROCESS {
  ID: number;
  DESCRIPTION: string;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: number | null;
  START_TIME: string | null;
  END_TIME: string | null;
  NO_PHASES: number | null;
  IS_RUNNING: number | null;
  IS_COMPLETED: number | null;
  IS_ERROR: number | null;
  IS_WARRNING: number | null;
  IS_SUCCSSED: number | null;
  IS_READING: number | null;
  IS_COLLECTION: number | null;
  IS_SUPPORT_CANCELL: number | null;
  ERROR_DESCRIPTION: string;
  PROGRESS: number | null;
  CURRENT_PHASE: string;
  PHASE_PROGRESS: number | null;
  STAMP_USER: string;
  ROWS_COUNT: number | null;
  STAMP_DATE: string | null;
  CYCLE_ID: number | null;
  PROCESS_TYPE: number | null;
  PROCESS_GUID: number | null;
}
