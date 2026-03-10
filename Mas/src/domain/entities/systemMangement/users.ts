export interface USERS {
  id?: number;
  username?: string;
  password?: string;
  stationNo?: number | null;
  stationname?: string;
  companyname?: string;
  companylogo?: string;
  departmentid?: number | null;
  departmentname?: string;
  applicationTypeRolesList?: string;
  userfullname?: string;
  deleteapplication?: boolean;
  biller?: boolean;
  createapplication?: boolean;
  editapplication?: boolean;
  cancelapplication?: boolean;
  sysAdmin?: boolean | null;
  readingAdmin?: boolean | null;
  collectionAdmin?: boolean | null;
  reporingAdmin?: boolean | null;
  dataAdmin?: boolean | null;
  hHMonitor?: boolean | null;
  userManagement?: boolean | null;
  systemMntinance?: boolean | null;
  isEnc?: boolean | null;
  allowCollection?: boolean | null;
  allowModifyReading?: boolean | null;
  allowDeposit?: boolean | null;
  allowCancel?: boolean | null;
  allowPostC?: boolean | null;
  allowPostR?: boolean | null;
  allowCompensation?: boolean | null;
  mapReading?: boolean | null;
  mapCollection?: boolean | null;
  mapLocation?: boolean | null;
  mapPath?: boolean | null;
  mapComplaints?: boolean | null;
  mapBadConn?: boolean | null;
  walkArrangePost?: boolean | null;
  updateCustomerLocation?: boolean | null;
  allowCancelDepCol?: boolean | null;
  allowRecolCancel?: boolean | null;
  allowMaps?: boolean | null;
  allowLoadDataC?: boolean | null;
  allowLoadDataR?: boolean | null;
  isCashier?: boolean | null;
  edamsClearReadings?: boolean | null;
  edamsRecalc?: boolean | null;
  edamsCs?: boolean | null;
  allowMeterModify?: boolean | null;
  allowGard?: boolean | null;
  resendCollection?: boolean | null;
  resendReading?: boolean | null;
  closeCollection?: boolean | null;
  closeReading?: boolean | null;
  collectionDiscount?: boolean | null;
  refreshBillsData?: boolean | null;
  refreshCustomerBills?: boolean | null;
  calculateDueAmount?: boolean | null;
  collectBillSinglUint?: boolean | null;
  printPaymentRequest?: boolean | null;
  partialCollection?: boolean | null;
  alonePanel?: boolean | null;
  edamsRecalcNew?: boolean | null;
  allowModifyPrevReading?: boolean | null;
  listCollection?: boolean | null;
  marketing?: boolean | null;
  prepearHafza?: boolean | null;
  cashBox?: boolean | null;
  switch?: boolean | null;
  uFlag?: boolean | null;
  portal?: boolean | null;
  allowFawryOpen?: boolean | null;
  allowFawryClose?: boolean | null;
  survey?: boolean | null;
  reports?: boolean | null;
  dashBoard?: boolean | null;
  query?: boolean | null;
  deviceManagment?: boolean | null;
  sync?: boolean | null;
  cancelBill?: boolean | null;
  cancelDelivery?: boolean | null;
  allowCustMod?: boolean | null;
  allowEstimReading?: boolean | null;
  allowBatchEstimReading?: boolean | null;
  closeCollectionInDevice?: boolean | null;
  closeReadingInDevice?: boolean | null;
  allowMeteStatusChange?: boolean | null;
  custMod?: boolean | null;
  CASHIER_ID?: number | null;
  allowCustomerResequence?: boolean | null;
  isSuccess?: boolean | null;
  printerType?: string | null;
  printerHafza?: boolean | null;
  allowGovCollection?: boolean | null;
  empManagment?: boolean | null;
  walkcAssignment?: boolean | null;
  walkrAssignment?: boolean | null;
  allowTaxPush?: boolean | null;
  allowEstimConsump?: boolean | null;
  reopenReading?: boolean | null;
}
export interface ADDUSEREQ {
  entity: USERS;
}
export interface UPDATEUSERREQ {
  id: number | string;
  entity: USERS;
}
export interface DELETEUSEREQ {
  id: number | string;
}

export interface LoginRequest {
  username: string;
  password: string;
  isTrusted?: boolean;
  captcha?: string;
  isPortal?: boolean;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  userName?: string;
}
