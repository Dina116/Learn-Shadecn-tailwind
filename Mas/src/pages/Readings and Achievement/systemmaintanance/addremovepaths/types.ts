export type Emp = {
  ID: number;
  USER_NAME: string;
  PASSWORD: string;
  FULL_NAME: string;
  DEVICE_ID: string;
  BRANCH_ID: number;
  DISABLED: boolean;
  READING: boolean;
  COLLECTION: boolean;
  REPORTING_VIEWER: boolean;
  CASHER: boolean;
  EMP_TYPE: number;
  MARKETING: boolean;
  CLOSE_READING_CYCLE: boolean;
  CLOSE_COLLECTION_CYCLE: boolean;
  ENABLE_HH_PRINTING: boolean;
};

export type collectorType = {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  READER: string;
  COLLECTOR: string;
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  STATION_NO: number;
  EMPID_C: number;
  EMPID_R: number;
};
