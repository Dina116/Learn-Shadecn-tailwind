import type { JSX } from "react";

export interface Other {
  status?: string | null;
  count?: number;
  uniqueID?: string;
  isChanged?: boolean;
  isError?: boolean;
  changed?: boolean;
  rowIndex?: number;
  isComplete?: boolean;
  SusccsedWalks?: number;
  FailedWalks?: number;
}

export interface BILLGROUPS extends Other {
  GROUP_ID: string;
  DESCRIPTION: string;
  STATION_NO: number;
  UNUSED: boolean;
}

export type CardList = {
  id: string;
  title: string;
  subTitle?: string;
  icon: JSX.Element;
  path: string;
};

export interface FilterValues {
  billingDate?: string;
  groups?: { id: string; name: string }[];
  AllBilingDate?: boolean;
}

export interface CounterValues {
  success?: number;
  failed?: number;
  pending?: number;
  completed?: number;
}

export interface ControlPanelFormProps {
  showLoadingBtn?: boolean;
  showBillingDate?: boolean;
  showGroups?: boolean;
  showCounters?: boolean;
  showCompletedCounter?: boolean;
  onLoad: (values: FilterValues) => void;
  onExecute?: () => void;
  isLoading?: boolean;
  isExecuting?: boolean;
  counters?: CounterValues;
  groupsList?: { id: string; name: string }[];
  isGroupsLoading?: boolean;
  completedCounterTitle?: string;
  showDivider?: boolean;
  isAllOption?: boolean;
  isAllBillings?: boolean;
  handleChageAllBilings?: (value: boolean) => void;
}

export interface NewDataType {
  group: string;
  description: string;
  cycle: string;
  totalPathsReading: number;
  totalPathsCollection: number;
  withdrawnPathsReading: number;
  withdrawnPathsCollection: number;
  openPathsReading: number;
  openPathsCollection: number;
  closedPathsReading: number;
  closedPathsCollection: number;
}

export type WalkData = {
  OWNERS: [];
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  ASSIGNED_TO_HH: number;
  WALK_DESCRIPTION: string;
  EMPID_C: number;
  IS_CUSTOMER_BOOK: boolean;
  ALLOW_FAWRY: boolean;
  MARKETING: number;
  BILLS: [];
  COUNT_CYCLES: number;
  ALL_BILL_DATE: boolean;
  Cycles: [];
  IS_ALLOWED_C_FRONT: boolean;
  IS_ALLOWED_R_FRONT: boolean;
};
export type ReadingWalkData = {
  OWNERS: [];
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  ASSIGNED_TO_HH: number;
  WALK_DESCRIPTION: string;
  EMPID_R: number;
  ISSUED_COUNT: number;
  IS_METER_BOOK: boolean;
  BILLS: [];
  COUNT_CYCLES: number;
  ALL_BILL_DATE: boolean;
  Cycles: [];
  IS_ALLOWED_C_FRONT: boolean;
  IS_ALLOWED_R_FRONT: boolean;
};

export interface STATMDEPOSIT {
  COLLECTOR?: number;
  DEPOSIT_ID: number;
  RECEIPT_NO: string;
  AMOUNT: number;
  COUNT: number;
  DELIVERY_MAN: string;
  DELIVERY_DATE: string;
  STAMP_USER: string;
  STAMP_DATE: string;
  BILNG_DATE: string;
  EMP_ID: number | null;
  IS_POSTED: boolean | null;
  BILNG_DEPOSIT_ID: number | null;
  STATION_NO: number | null;
  POST_DATE: string | null;
  FROM_BILNG: boolean | null;
  USER_ID: number | null;
  CHAIN: string;
  rowIndex?: number;
}
export interface RECEIPT {
  receiptNo?: string;
  custkey?: string;
  paymentNo?: string;
  amount?: number;
  empId?: number;
  collectionDate?: string | null;
  collectionType?: number;
  collectionMethod?: number;
  paymentMethod?: number;
  cheqNo?: string;
  cheqBank?: string;
  discountAmount?: number;
  discountDocumentNo?: string;
  documentNo?: string;
  cancelled?: boolean;
  cancelledAmount?: number;
  cancelledBy?: string;
  cancelledReason?: string;
  cancelledDate?: string | null;
  lat?: number;
  lng?: number;
  accurecy?: number;
  deviceId?: string;
  stampUser?: string;
  stampDate?: string | null;
  depositId?: number;
  isPosted?: boolean;
  postDate?: string | null;
  postBy?: string;
  transNo?: number;
  insCycleId?: number;
  insBilngDate?: string | null;
  bilngDate?: string | null;
  cycleId?: number;
  isHafzaPrinted?: boolean;
  hafzaPrintCount?: number;
  hafzaPrintDate?: string | null;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  stationNo?: number;
  statmNo?: number;
  collectionId?: number;
  receiptCharge1?: number;
  receiptCharge2?: number;
  receiptCharge3?: number;
  cancelledRecieptNo?: string;
  userId?: number;
  fptn?: string;
  fcrn?: string;
  blrptn?: string;
  receiptType?: number;
  comment?: string;
  deliveryDate?: string;
}
export interface RECEPTITEM extends RECEIPT {
  collectorName?: string;
  collectionTypeDesc?: string;
  paymentMethodDesc?: string;
  collectionMethodDesc?: string;
}

export interface BILL {
  custkey?: string;
  paymentNo?: string;
  cycleId?: number;
  seqNo?: number;
  bilngDate?: string | null;
  sCrReading?: number;
  sPrReading?: number;
  sConsump?: number;
  clBlnce?: number;
  opBlnce?: number;
  instalment?: number;
  previousAmountCollected?: number;
  calcType?: string;
  instalmentDate?: string | null;
  amountCollected?: number;
  surname?: string;
  receptsList?: Array<RECEPTITEM>;
  ctg?: string;
  oldKey?: string;
  collectionDate?: string | null;
  dueAmount?: number;
  isCancelled?: boolean;
  recalcId?: number;
  IS_PARTIAL?: boolean;
}

export interface BOOKCYCLE extends Other {
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  CYCLE_IDS: number[];
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  UNUSED: boolean | null;
  ASSIGNED_TO_HH: number | null;
  BILNG_DATE: string | null;
  BDB_CDB_C: number | null;
  BDB_CDB_DATE_C: string | null;
  BDB_CDB_USER_C: string;
  BDB_CDB_R: number | null;
  BDB_CDB_DATE_R: string | null;
  BDB_CDB_USER_R: string;
  CDB_HH_C: number | null;
  CDB_HH_DATE_C: string | null;
  CDB_HH_USER_C: string;
  CDB_HH_R: number | null;
  CDB_HH_DATE_R: string | null;
  CDB_HH_USER_R: string;
  HH_CDB_C: number | null;
  HH_CDB_DATE_C: string | null;
  HH_CDB_USER_C: string;
  HH_CDB_R: number | null;
  HH_CDB_DATE_R: string | null;
  HH_CDB_USER_R: string;
  CDB_BDB_C: number | null;
  CDB_BDB_DATE_C: string | null;
  CDB_BDB_USER_C: string;
  CDB_BDB_R: number | null;
  CDB_BDB_DATE_R: string | null;
  CDB_BDB_USER_R: string;
  ISCYCLE_COMPLETED_C: number | null;
  CLOSE_DATE_C: string | null;
  CLOSE_BY_C: string;
  ISCYCLE_COMPLETED_R: number | null;
  CLOSE_DATE_R: string | null;
  CLOSE_BY_R: string;
  DEVICEID_R: string;
  DEVICEID_C: string;
  WALK_DESCRIPTION: string;
  BILNG_DESCRIPTION: string;
  IS_ALLOWED_C: boolean | null;
  IS_ALLOWED_R: boolean | null;
  IS_READY_C: boolean | null;
  IS_READY_R: boolean | null;
  COUNT_C: number | null;
  COUNT_R: number | null;
  EMPID_C: number | null;
  EMPID_R: number | null;
  COLLECTED_AMOUNT: number | null;
  ISSUED_AMOUNT: number | null;
  ISSUED_COUNT: number | null;
  COLLECTED_COUNT: number | null;
  READED_COUNT: number | null;
  REACHED_C: number | null;
  REACHED_R: number | null;
  IS_METER_BOOK: boolean | null;
  IS_CUSTOMER_BOOK: boolean | null;
  IS_REVIRSE_C: boolean | null;
  IS_REVIRSE_R: boolean | null;
  ISCLOSED_INDEVICE_C: boolean | null;
  ISCLOSED_INDEVICE_R: boolean | null;
  GARD_OK: boolean | null;
  ALLOW_FAWRY: boolean | null;
  MARKETING: number | null;
  BILLS: Array<BILL>;
  READER: string;
  COLLECTOR: string;
  WALK_DELIVERY_ID: number | null;
  OWNERS: string[];
  SKIP: boolean | null;
  selected?: boolean;
  guid?: number;
  ALLOW_TAX_PORTAL?: number;
  COUNT_CYCLES?: number;
  ALL_BILL_DATE?: boolean;
  Cycles?: BOOKCYCLE[];
  IS_ALLOWED_R_FRONT?: boolean;
  IS_ALLOWED_C_FRONT?: boolean;
}
export interface ReqAllow extends BOOKCYCLE {
  isChanged?: boolean;
  isRunning?: boolean;
  isError?: boolean;
  status?: string | null;
  mess?: string | null;
  isComplete?: boolean;
  AllBilingDate?: boolean;
}

export interface Mas2BillingFlags {
  BDB_CDB_C: number | null;
  BDB_CDB_DATE_C: string | null;
  BDB_CDB_R: number | null;
  BDB_CDB_DATE_R: string | null;
  BDB_CDB_USER_R: string;

  CDB_HH_C: number | null;
  CDB_HH_DATE_C: string | null;
  CDB_HH_R: number | null;
  CDB_HH_DATE_R: string | null;
  CDB_HH_USER_R: string;

  HH_CDB_R: number | null;

  CDB_BDB_C: number | null;
  CDB_BDB_DATE_C: string | null;
  CDB_BDB_USER_C: string;
  CDB_BDB_R: number | null;
  CDB_BDB_DATE_R: string | null;
  CDB_BDB_USER_R: string;

  ISCYCLE_COMPLETED_C: number | null;
  ISCYCLE_COMPLETED_R: number | null;

  DEVICEID_R: string;
  DEVICEID_C: string;

  IS_ALLOWED_C: boolean | null;
  IS_ALLOWED_R: boolean | null;
  IS_READY_C: boolean | null;
  IS_READY_R: boolean | null;

  COUNT_R: number | null;
  EMPID_C: number | null;
  EMPID_R: number | null;

  IS_METER_BOOK: boolean | null;
  IS_REVIRSE_R: boolean | null;
  ISCLOSED_INDEVICE_C: boolean | null;
  ISCLOSED_INDEVICE_R: boolean | null;

  ALLOW_FAWRY: boolean | null;
  READER: string;
  COLLECTOR: string;

  COUNT_CYCLES: number | null;
  ALL_BILL_DATE: boolean | null;

  IS_RETRY: boolean | null;
  UFLAG: boolean | null;
  postNegativeFlage: number | null;
}
export interface Mas2BillingPayload {
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  BILNG_DATE: string;

  flags: Mas2BillingFlags;
}

export type Mas2BillingProcessResponse = {
  Billgroup: string;
  BookNo: string;
  Walkno: string;
  CycleId: number;
  BilngDate: string;
  ProcessId: string;
  User: string;
  HasError: boolean;
  AffectedRows: number;
  Status: number;
  StartDate: string;
  EndDate: string;
  Period: number;
  SKIP_COUNT: number;
};

export const bookCycleUnique = (item: BOOKCYCLE): string => {
  const uniqueID: string = `${item?.BOOK_NO}${item?.WALK_NO}${item?.BILLGROUP}`;
  // console.log(uniqueID, 'uniqueID -1');
  return uniqueID;
};

export interface STATIONS {
  stationNo: number;
  stationName: string;
  description: string;
  iscurrent: number;
  dbStandalone: number;
  dbAccess: number;
  isHeadquarters: number;
  isMaintsite: number;
  isMrreading: number;
  isCservices: number;
  isReceipting: number;
  telWork: string;
  telFax: string;
  telEmail: string;
  telAhours: string;
  telCompl: string;
  lnAddress1: string;
  lnAddress2: string;
  lnAddress3: string;
  lnCity: string;
  lnPostal: string;
  workingMon: number;
  workingTue: number;
  workingWed: number;
  workingThu: number;
  workingFri: number;
  workingSat: number;
  workingSun: number;
  overtimeMon: number;
  overtimeTue: number;
  overtimeWed: number;
  overtimeThu: number;
  overtimeFri: number;
  overtimeSat: number;
  overtimeSun: number;
  siteMemo: string;
  stampDate: string;
  stampUser: string;
  maintsiteCode: number;
  defaultwarehouse: number;
  defaultdepot: number;
  warehousesetting: number;
  depotdsetting: number;
  ipAddress: string;
  portNo: number;
  sectorCode: number;
  sectorName: string;
  isDeleted: boolean;
}
export interface ADDSTATIONREQ {
  entity: STATIONS;
}

export interface UPDATESTATIONREQ {
  id?: number | string;
  entity: STATIONS;
}
export interface DELETESTATIONREQ {
  id?: number | string;
}
