import {
  type IColumnProps,
  type IDataGridOptions,
  type IRowDraggingProps,
  type ISelectionProps,
  type IExportProps,
  type IColumnChooserProps,
  type ISummaryProps,
  type IPagerProps,
  type IPagingProps,
  type IMasterDetailProps,
} from "devextreme-react/data-grid";
import { type TextOptionsLight } from "jspdf";
import type { MasDateTime } from "../../../pages/Readings and Achievement/controlpanel/operations/pulledHistory/types";

type DataGridOptions = Omit<IDataGridOptions, "columns" | "pager" | "paging">;
export interface IunPostedDetailsReq {
  empid: number | undefined;
  depositId?: number | undefined;
  custkey?: string;
}
export type ReportHeader = {
  text: string;
  options?: TextOptionsLight;
  nextLine?: boolean;
  order?: number;
};
export interface IColumn extends IColumnProps {
  hasChildren?: boolean;
  child?: Array<IColumn>;
  digitNumAfterZero?: number;
}
export interface DataGridProps extends DataGridOptions {
  columns: IColumn[];
  rowDrag?: IRowDraggingProps;
  selection?: ISelectionProps;
  export?: IExportProps;
  orientation?: "p" | "portrait" | "l" | "landscape";
  columnChooser?: IColumnChooserProps;
  reportName?: string;
  printPdf?: boolean;
  reportHeaders?: ReportHeader[];
  onSelectionChange?: () => void;
  summaries?: ISummaryProps;
  isFooter?: boolean;
  pager?: IPagerProps;
  paging?: IPagingProps;
  scrollMode?: "standard" | "infinite" | "virtual" | undefined;
  defaultPageSize?: number;
  footerSignature?: string[];
  saveFilters?: boolean;
  masterDetail?: IMasterDetailProps;
  govHeaders?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anotherTable?: any;
  subReportHeader?: string;
  headersFontSize?: number;
  customLoading?: boolean;
  onExportPdf?: () => void;
}

export interface EMPS extends Other {
  id?: number;
  userName?: string;
  password?: string;
  fullName?: string | null;
  branchId?: string;
  address?: string;
  tel?: string;
  deviceId?: string;
  stationNo?: number;
  notes?: string;
  disabled?: boolean | null;
  reading?: boolean | null;
  collection?: boolean | null;
  sysAdmin?: boolean | null;
  dataAdmin?: boolean | null;
  dataEntry?: boolean | null;
  reportingViewer?: boolean | null;
  casher?: boolean | null;
  mobile1?: string;
  mobile2?: string;
  nid?: string;
  email?: string;
  allowCancel?: boolean | null;
  allowModifyReading?: boolean | null;
  flage1?: boolean | null;
  flage2?: boolean | null;
  value1?: string;
  value2?: string;
  originalStation?: string;
  empType?: number | null;
  bilngEmpId?: string;
  marketing?: boolean | null;
  isStoreMan?: boolean | null;
  keeper?: boolean | null;
  empId?: number;
  isDeleted?: boolean;
  quota?: number;
  deposits_qouta?: number;
  closeReadingCycle?: boolean | null;
  dashboard?: boolean | null;
  closeCollectionCycle?: boolean | null;
  allowOverPayment?: boolean | null;
  enableHhPrinting?: boolean | null;
  partialCollectionState?: number | null;
  randomlyMeterPicturePercentage?: number | null;
  dirCollection?: string | null;
  readingEstimPercent?: number | null;
  readinPercent?: number | null;
  dayReadingPercent?: number | null;
  depositDuration?: number | null;
  offlinePeriod?: number | null;
  billsCountAllowedOffline?: number | null;
  depositDurationExtraDays?: number | null;
}

interface Other {
  hasUnPostiong?: boolean;
  collectorCount?: number;
}
export interface ADDEMPREQ {
  entity: EMPS;
}
export interface UPDATEEMPREQ {
  id: number | string;
  entity: EMPS;
}
export interface DELETEEMPREQ {
  id?: number | string;
}

export interface UNPOSTEDREQ {
  empid: number;
  depositId?: number;
}
export interface UNPOSTEDDETAILSREQ {
  empid: number | undefined;
  depositId?: number;
  custkey?: string;
}
export interface SiteCode {
  code?: number;
}

export interface PROJECT_TAGS {
  /**
   * @generated from protobuf enum value: EDAMS5 = 0;
   */
  EDAMS5: 0;
  /**
   * @generated from protobuf enum value: EDAMS4 = 1;
   */
  EDAMS4: 1;
  /**
   * @generated from protobuf enum value: GIZA_SYSTEMS = 2;
   */
  GIZA_SYSTEMS: 2;
  /**
   * @generated from protobuf enum value: MONOFIA = 3;
   */
  MONOFIA: 3;
  /**
   * @generated from protobuf enum value: SOHAG = 4;
   */
  SOHAG: 4;
  /**
   * @generated from protobuf enum value: OTHERS = 5;
   */
  OTHERS: 5;
}

export interface SITES {
  /**
   * @generated from protobuf field: optional int32 CODE = 1 [json_name = "CODE"];
   */
  CODE?: number; // @gotags: gorm:"primaryKey"
  /**
   * @generated from protobuf field: optional string DESCRIBE = 2 [json_name = "DESCRIBE"];
   */
  DESCRIBE?: string;
  /**
   * @generated from protobuf field: optional bool IS_ACTIVE = 3 [json_name = "ISACTIVE"];
   */
  IS_ACTIVE?: boolean;
  /**
   * @generated from protobuf field: optional int64 SEQ = 4 [json_name = "SEQ"];
   */
  SEQ?: string;
  /**
   * @generated from protobuf field: optional string BILLING_IP = 5 [json_name = "BILLINGIP"];
   */
  BILLING_IP?: string;
  /**
   * @generated from protobuf field: optional string BILLING_PASSWORD = 6 [json_name = "BILLINGPASSWORD"];
   */
  BILLING_PASSWORD?: string;
  /**
   * @generated from protobuf field: optional string BILLING_PORT_NO = 7 [json_name = "BILLINGPORTNO"];
   */
  BILLING_PORT_NO?: string;
  /**
   * @generated from protobuf field: optional string BILLING_USERNAME = 8 [json_name = "BILLINGUSERNAME"];
   */
  BILLING_USERNAME?: string;
  /**
   * @generated from protobuf field: MasProvider.PROJECT_TAGS PROJECT_TAG = 9 [json_name = "PROJECTTAG"];
   */
  PROJECT_TAG: PROJECT_TAGS; // @gotags: `gorm:"not null"`
  /**
   * @generated from protobuf field: optional string SITE_IMAGE = 10 [json_name = "SITEIMAGE"];
   */
  SITE_IMAGE?: string; // @gotags: gorm:"type:nvarchar(max)"
  /**
   * @generated from protobuf field: optional bool HAS_MAS = 11 [json_name = "HASMAS"];
   */
  HAS_MAS?: boolean;
  /**
   * @generated from protobuf field: optional string DESCRIBE_EN = 12 [json_name = "DESCRIBEEN"];
   */
  DESCRIBE_EN?: string;
}

export interface GetSettingValueRq {
  /**
   * @generated from protobuf field: string keyword = 1;
   */
  keyword: string;
  /**
   * @generated from protobuf field: optional int32 SITE_CODE = 2 [json_name = "SITECODE"];
   */
  SITE_CODE?: number;
}

export interface SETTINGS {
  /**
   * @generated from protobuf field: string KEY_WORD = 1 [json_name = "KEYWORD"];
   */
  KEY_WORD: string; // @gotags: gorm:"primaryKey"
  /**
   * @generated from protobuf field: optional string KEY_VALUE = 2 [json_name = "KEYVALUE"];
   */
  KEY_VALUE?: string;
  /**
   * @generated from protobuf field: optional string DESCRIPTION = 3 [json_name = "DESCRIPTION"];
   */
  DESCRIPTION?: string;
}

export interface ENCRYPTION {
  /**
   * @generated from protobuf enum value: NOT_ENCRYPTION = 0;
   */
  NOT_ENCRYPTION: 0;
  /**
   * @generated from protobuf enum value: PASS_ENCRYPTION_ONLY = 1;
   */
  PASS_ENCRYPTION_ONLY: 1;
  /**
   * @generated from protobuf enum value: ALL_SENSITIVE_DATA_ENCRYPTION = 2;
   */
  ALL_SENSITIVE_DATA_ENCRYPTION: 2;
}
export interface ProfileId {
  /**
   * @generated from protobuf field: int64 PROFILES_ID = 1 [json_name = "PROFILESID"];
   */
  PROFILES_ID: string;
}
export interface USER_STATIONS {
  /**
   * @generated from protobuf field: int64 USER_ID = 1 [json_name = "USERID"];
   */
  USER_ID: string; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: int64 ORG_ID = 2 [json_name = "ORGID"];
   */
  ORG_ID: string; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: int32 SITE_CODE = 3 [json_name = "SITECODE"];
   */
  SITE_CODE: number; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: int64 SECTOR_ID = 4 [json_name = "SECTORID"];
   */
  SECTOR_ID: string; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: int64 STATION_ID = 5 [json_name = "STATIONID"];
   */
  STATION_ID: string; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: optional bool IS_MAIN = 6 [json_name = "ISMAIN"];
   */
  IS_MAIN?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETED = 7 [json_name = "DELETED"];
   */
  DELETED?: boolean;
  /**
   * @generated from protobuf field: optional central.types.MasDateTime STAMP_DATE = 8 [json_name = "STAMPDATE"];
   */
  STAMP_DATE?: MasDateTime;
  /**
   * @generated from protobuf field: optional string STAMP_USER = 9 [json_name = "STAMPUSER"];
   */
  STAMP_USER?: string; // @gotags: gorm:"size:100"
  /**
   * @generated from protobuf field: optional string SITE_NAME = 10 [json_name = "SITENAME"];
   */
  SITE_NAME?: string;
  /**
   * @generated from protobuf field: optional string STATION_NAME = 11 [json_name = "STATIONNAME"];
   */
  STATION_NAME?: string; // repeated TAX_CLIENT_IDS            TAX_CLIENT_IDS = 137;   //@gotags:
  // gorm:"-"
}
export interface CASHBOX_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool CASH_BOX = 1 [json_name = "CASHBOX"];
   */
  CASH_BOX?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTION_ADMIN = 2 [json_name = "COLLECTIONADMIN"];
   */
  COLLECTION_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_COLLECTION = 3 [json_name = "ALLOWCOLLECTION"];
   */
  ALLOW_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool IS_CASHIER = 4 [json_name = "ISCASHIER"];
   */
  IS_CASHIER?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CANCEL = 5 [json_name = "ALLOWCANCEL"];
   */
  ALLOW_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool ADD_COLLECTION_DATE = 6 [json_name = "ADDCOLLECTIONDATE"];
   */
  ADD_COLLECTION_DATE?: boolean;
  /**
   * @generated from protobuf field: optional bool CASHBOX_REPORTS = 7 [json_name = "CASHBOXREPORTS"];
   */
  CASHBOX_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool SKIP_RECEIPT = 8 [json_name = "SKIPRECEIPT"];
   */
  SKIP_RECEIPT?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_PRINT_DAMAGE_RECEIPT = 9 [json_name = "ALLOWPRINTDAMAGERECEIPT"];
   */
  ALLOW_PRINT_DAMAGE_RECEIPT?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_RECEIPT = 10 [json_name = "CANCELRECEIPT"];
   */
  CANCEL_RECEIPT?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_PAYMENT = 11 [json_name = "CANCELPAYMENT"];
   */
  CANCEL_PAYMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool CRUD_CASHBOXES = 12 [json_name = "CRUDCASHBOXES"];
   */
  CRUD_CASHBOXES?: boolean;
  /**
   * @generated from protobuf field: optional bool CASHAIR_RE_PRINT_RECEIPT = 13 [json_name = "CASHAIRREPRINTRECEIPT"];
   */
  CASHAIR_RE_PRINT_RECEIPT?: boolean;
  /**
   * @generated from protobuf field: optional bool CASHBOX_REVIEW = 14 [json_name = "CASHBOXREVIEW"];
   */
  CASHBOX_REVIEW?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_RECEIPT_DTL = 15 [json_name = "EDITRECEIPTDTL"];
   */
  EDIT_RECEIPT_DTL?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_CASHBOX_SESSION = 16 [json_name = "CLOSECASHBOXSESSION"];
   */
  CLOSE_CASHBOX_SESSION?: boolean;
}
/**
 * @generated from protobuf message GoAuth.CRM_PERMISSIONS
 */
export interface CRM_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
}
export interface CRM_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
}
/**
 * @generated from protobuf message GoAuth.AUTH_PERMISSIONS
 */
export interface AUTH_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean; // المستخدمين
  /**
   * @generated from protobuf field: optional bool EDIT_USER = 2 [json_name = "EDITUSER"];
   */
  EDIT_USER?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_USER = 3 [json_name = "DELETEUSER"];
   */
  DELETE_USER?: boolean;
  /**
   * @generated from protobuf field: optional bool PROFILE_ADMIN = 4 [json_name = "PROFILEADMIN"];
   */
  PROFILE_ADMIN?: boolean; // الوظائف
  /**
   * @generated from protobuf field: optional bool EDIT_PROFILE = 5 [json_name = "EDITPROFILE"];
   */
  EDIT_PROFILE?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_PROFILE = 6 [json_name = "DELETEPROFILE"];
   */
  DELETE_PROFILE?: boolean;
  /**
   * @generated from protobuf field: optional bool DEPARTMENT = 7 [json_name = "DEPARTMENT"];
   */
  DEPARTMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_DEPARTMENT = 8 [json_name = "EDITDEPARTMENT"];
   */
  EDIT_DEPARTMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_DEPARTMENT = 9 [json_name = "DELETEDEPARTMENT"];
   */
  DELETE_DEPARTMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool TAX_CLIENT_ID = 10 [json_name = "TAXCLIENTID"];
   */
  TAX_CLIENT_ID?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_TAX_CLIENT_ID = 11 [json_name = "EDITTAXCLIENTID"];
   */
  EDIT_TAX_CLIENT_ID?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_TAX_CLIENT_ID = 12 [json_name = "DELETETAXCLIENTID"];
   */
  DELETE_TAX_CLIENT_ID?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_LINKED_PROFILE = 13 [json_name = "DELETELINKEDPROFILE"];
   */
  DELETE_LINKED_PROFILE?: boolean;
}
/**
 * @generated from protobuf message GoAuth.PAYMENTGETWAY_PERMISSIONS
 */
export interface PAYMENTGETWAY_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
}
/**
 * @generated from protobuf message GoAuth.CDU_PERMISSIONS
 */
export interface CDU_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_COMMITE = 2 [json_name = "CDUCOMMITE"];
   */
  CDU_COMMITE?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_EDIT = 3 [json_name = "CDUEDIT"];
   */
  CDU_EDIT?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_VERIFY = 4 [json_name = "CDUVERIFY"];
   */
  CDU_VERIFY?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_APPROVE = 5 [json_name = "CDUAPPROVE"];
   */
  CDU_APPROVE?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_REPORTS = 6 [json_name = "CDUREPORTS"];
   */
  CDU_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_DASHBORAD = 7 [json_name = "CDUDASHBORAD"];
   */
  CDU_DASHBORAD?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_VERIFY_KHELSA = 8 [json_name = "CDUVERIFYKHELSA"];
   */
  CDU_VERIFY_KHELSA?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_APPROVE_KHELSA = 9 [json_name = "CDUAPPROVEKHELSA"];
   */
  CDU_APPROVE_KHELSA?: boolean;
}
/**
 * @generated from protobuf message GoAuth.BI_PERMISSIONS
 */
export interface BI_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool QUERY_MAS = 1 [json_name = "QUERYMAS"];
   */
  QUERY_MAS?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY_TAX = 2 [json_name = "QUERYTAX"];
   */
  QUERY_TAX?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY_BILING = 3 [json_name = "QUERYBILING"];
   */
  QUERY_BILING?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY_CRM = 4 [json_name = "QUERYCRM"];
   */
  QUERY_CRM?: boolean;
  /**
   * @generated from protobuf field: optional bool MAS_REPORTS = 5 [json_name = "MASREPORTS"];
   */
  MAS_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool BILING_REPORTS = 6 [json_name = "BILINGREPORTS"];
   */
  BILING_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CRM_REPORTS = 7 [json_name = "CRMREPORTS"];
   */
  CRM_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool TAX_REPORTS = 8 [json_name = "TAXREPORTS"];
   */
  TAX_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool SYSTEM_REPORTS = 9 [json_name = "SYSTEMREPORTS"];
   */
  SYSTEM_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CRYSTAL_REPORTS = 10 [json_name = "CRYSTALREPORTS"];
   */
  CRYSTAL_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool OTHER_REPORTS = 11 [json_name = "OTHERREPORTS"];
   */
  OTHER_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORING_ADMIN = 13 [json_name = "REPORINGADMIN"];
   */
  REPORING_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool MAIN_DASHBOARD = 14 [json_name = "MAINDASHBOARD"];
   */
  MAIN_DASHBOARD?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_MAS = 15 [json_name = "DASHBOARDMAS"];
   */
  DASHBOARD_MAS?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_BPM = 16 [json_name = "DASHBOARDBPM"];
   */
  DASHBOARD_BPM?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_TAX = 17 [json_name = "DASHBOARDTAX"];
   */
  DASHBOARD_TAX?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_CDU = 18 [json_name = "DASHBOARDCDU"];
   */
  DASHBOARD_CDU?: boolean;
  /**
   * @generated from protobuf field: optional bool SENSITIVE_DATA = 19 [json_name = "SENSITIVEDATA"];
   */
  SENSITIVE_DATA?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_ESDAR = 20 [json_name = "DASHBOARDESDAR"];
   */
  DASHBOARD_ESDAR?: boolean;
  /**
   * @generated from protobuf field: optional bool SHOW_CLIENT_FILE = 21 [json_name = "SHOWCLIENTFILE"];
   */
  SHOW_CLIENT_FILE?: boolean;
  /**
   * @generated from protobuf field: optional bool LONG_SESSION = 22 [json_name = "LONGSESSION"];
   */
  LONG_SESSION?: boolean;
  /**
   * @generated from protobuf field: optional bool CEO_DASHBOARD_PAIR_STATION = 23 [json_name = "CEODASHBOARDPAIRSTATION"];
   */
  CEO_DASHBOARD_PAIR_STATION?: boolean;
  /**
   * @generated from protobuf field: optional bool CTO_DASHBOARD = 24 [json_name = "CTODASHBOARD"];
   */
  CTO_DASHBOARD?: boolean; // cto_dashboard
  /**
   * @generated from protobuf field: optional bool CTO_DASHBOAR_PER_STATION = 25 [json_name = "CTODASHBOARPERSTATION"];
   */
  CTO_DASHBOAR_PER_STATION?: boolean; // cto_dashboard_per_station
}
/**
 * @generated from protobuf message GoAuth.BPM_PERMISSIONS
 */
export interface BPM_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SUPERUSER = 1 [json_name = "SUPERUSER"];
   */
  SUPERUSER?: boolean;
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 2 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD = 3 [json_name = "DASHBOARD"];
   */
  DASHBOARD?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_APPLICATION = 4 [json_name = "CANCELAPPLICATION"];
   */
  CANCEL_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORTS = 5 [json_name = "REPORTS"];
   */
  REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool SYSTEMM_NTINANCE = 6 [json_name = "SYSTEMMNTINANCE"];
   */
  SYSTEMM_NTINANCE?: boolean;
  /**
   * @generated from protobuf field: optional bool APP_REPORT = 7 [json_name = "APPREPORT"];
   */
  APP_REPORT?: boolean;
  /**
   * @generated from protobuf field: optional bool GENERAL_REPORT = 8 [json_name = "GENERALREPORT"];
   */
  GENERAL_REPORT?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD_TOTALMASCOLLECTIONS = 9 [json_name = "DASHBOARDTOTALMASCOLLECTIONS"];
   */
  DASHBOARD_TOTALMASCOLLECTIONS?: boolean; // اجمالي تحصيل الفواتير
  /**
   * @generated from protobuf field: optional bool DASHBOARD_TOTALCRMCOLLECTIONS = 10 [json_name = "DASHBOARDTOTALCRMCOLLECTIONS"];
   */
  DASHBOARD_TOTALCRMCOLLECTIONS?: boolean; // اجمالي تحصيلات خدمة العملاء
  /**
   * @generated from protobuf field: optional bool DASHBOARD_TOTALSUMMASCRM = 11 [json_name = "DASHBOARDTOTALSUMMASCRM"];
   */
  DASHBOARD_TOTALSUMMASCRM?: boolean; // اجمالي الايراد
  /**
   * @generated from protobuf field: optional bool DASHBOARD_CURRENTAPPSCOUNT = 12 [json_name = "DASHBOARDCURRENTAPPSCOUNT"];
   */
  DASHBOARD_CURRENTAPPSCOUNT?: boolean; // عدد الطلبات الحالية
  /**
   * @generated from protobuf field: optional bool DASHBORAD_CANCELEDAPPSCOUNT = 13 [json_name = "DASHBORADCANCELEDAPPSCOUNT"];
   */
  DASHBORAD_CANCELEDAPPSCOUNT?: boolean; // عدد الطلبات الملغاه
  /**
   * @generated from protobuf field: optional bool DASHBOARD_PENDINGAPPSCOUNT = 14 [json_name = "DASHBOARDPENDINGAPPSCOUNT"];
   */
  DASHBOARD_PENDINGAPPSCOUNT?: boolean; // عدد الطلبات المعلقة
  /**
   * @generated from protobuf field: optional bool DASHBOARD_RUNNINGAPPSCOUNT = 15 [json_name = "DASHBOARDRUNNINGAPPSCOUNT"];
   */
  DASHBOARD_RUNNINGAPPSCOUNT?: boolean; // عدد الطلبات الجارية
  /**
   * @generated from protobuf field: optional bool DASHBOARD_CLOSEDAPPSCOUNT = 16 [json_name = "DASHBOARDCLOSEDAPPSCOUNT"];
   */
  DASHBOARD_CLOSEDAPPSCOUNT?: boolean; // عدد الطلبات المغلقة
  /**
   * @generated from protobuf field: optional bool DASHBOARD_REQUIREDUSERAPPSCOUNT = 17 [json_name = "DASHBOARDREQUIREDUSERAPPSCOUNT"];
   */
  DASHBOARD_REQUIREDUSERAPPSCOUNT?: boolean; // عدد الطلبات المطلوبة من المستخدم
  /**
   * @generated from protobuf field: optional bool DASHBOARD_USERTAKEACTIONSCOUNT = 18 [json_name = "DASHBOARDUSERTAKEACTIONSCOUNT"];
   */
  DASHBOARD_USERTAKEACTIONSCOUNT?: boolean; // عدد الطلبات التي تم اخذ اجراء عليها
  /**
   * @generated from protobuf field: optional bool DASHBOARD_AVERAGEDAYSEXECAPP = 19 [json_name = "DASHBOARDAVERAGEDAYSEXECAPP"];
   */
  DASHBOARD_AVERAGEDAYSEXECAPP?: boolean; // متوسط الأيام المستغرقة لتنفيذ الطلب
  /**
   * @generated from protobuf field: optional bool DASHBORAD_TOTALMONTHCOMPAREWITHPREV = 20 [json_name = "DASHBORADTOTALMONTHCOMPAREWITHPREV"];
   */
  DASHBORAD_TOTALMONTHCOMPAREWITHPREV?: boolean; // إيراد الشهر الحالي مقارنة بالشهر السابق
  /**
   * @generated from protobuf field: optional bool DASHBOARD_TOTALINCOMEFORAPP = 21 [json_name = "DASHBOARDTOTALINCOMEFORAPP"];
   */
  DASHBOARD_TOTALINCOMEFORAPP?: boolean; // الإيراد على مستوى نوع الطلب
  /**
   * @generated from protobuf field: optional bool DASHBOARD_COUNTS_PERSANTAGESDONEAPPS = 22 [json_name = "DASHBOARDCOUNTSPERSANTAGESDONEAPPS"];
   */
  DASHBOARD_COUNTS_PERSANTAGESDONEAPPS?: boolean; // نسب وأعداد الطلبات التامة
  /**
   * @generated from protobuf field: optional bool DASHBOARD_EXECAPPSPEEDINDICATOR = 23 [json_name = "DASHBOARDEXECAPPSPEEDINDICATOR"];
   */
  DASHBOARD_EXECAPPSPEEDINDICATOR?: boolean; // مؤشر سرعة تنفيذ الطلب
  /**
   * @generated from protobuf field: optional bool CANCEL_APPS = 24 [json_name = "CANCELAPPS"];
   */
  CANCEL_APPS?: boolean;
}
/**
 * @generated from protobuf message GoAuth.PORTAL_PERMISSIONS
 */
export interface PORTAL_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
}
/**
 * @generated from protobuf message GoAuth.GENERAL_PERMISSIONS
 */
export interface GENERAL_PERMISSIONS {
  /**
   * @generated from protobuf field: optional string ACCESS_CONSTRAINT = 1 [json_name = "ACCESSCONSTRAINT"];
   */
  ACCESS_CONSTRAINT?: string; // @gotags: gorm:"type:nvarchar(max)"
  /**
   * @generated from protobuf field: optional bool DASHBOARD = 2 [json_name = "DASHBOARD"];
   */
  DASHBOARD?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY = 3 [json_name = "QUERY"];
   */
  QUERY?: boolean;
}
/**
 * @generated from protobuf message GoAuth.BILLER_PERMISSIONS
 */
export interface BILLER_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool CREATE_APPLICATION = 2 [json_name = "CREATEAPPLICATION"];
   */
  CREATE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool BILLER = 3 [json_name = "BILLER"];
   */
  BILLER?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_APPLICATION = 4 [json_name = "CANCELAPPLICATION"];
   */
  CANCEL_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_APPLICATION = 5 [json_name = "EDITAPPLICATION"];
   */
  EDIT_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_APPLICATION = 6 [json_name = "DELETEAPPLICATION"];
   */
  DELETE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool PRESENT_CANCEL_BILL = 7 [json_name = "PRESENTCANCELBILL"];
   */
  PRESENT_CANCEL_BILL?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSED_APPLICATION = 8 [json_name = "CLOSEDAPPLICATION"];
   */
  CLOSED_APPLICATION?: boolean;
}
/**
 * @generated from protobuf message GoAuth.BILLING_PERMISSIONS
 */
export interface BILLING_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool BILLER = 2 [json_name = "BILLER"];
   */
  BILLER?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_BILLING_STEPS = 3 [json_name = "EDAMSBILLINGSTEPS"];
   */
  EDAMS_BILLING_STEPS?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_BILLING_STEPS_SETTINGS = 4 [json_name = "EDAMSBILLINGSTEPSSETTINGS"];
   */
  EDAMS_BILLING_STEPS_SETTINGS?: boolean;
}
/**
 * @generated from protobuf message GoAuth.MAS_PERMISSIONS
 */
export interface MAS_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 1 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool READING_ADMIN = 2 [json_name = "READINGADMIN"];
   */
  READING_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTION_ADMIN = 3 [json_name = "COLLECTIONADMIN"];
   */
  COLLECTION_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORING_ADMIN = 4 [json_name = "REPORINGADMIN"];
   */
  REPORING_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool HH_MONITOR = 5 [json_name = "HHMONITOR"];
   */
  HH_MONITOR?: boolean;
  /**
   * @generated from protobuf field: optional bool USER_MANAGEMENT = 6 [json_name = "USERMANAGEMENT"];
   */
  USER_MANAGEMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool DATA_ADMIN = 7 [json_name = "DATAADMIN"];
   */
  DATA_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool SYSTEM_MNTINANCE = 8 [json_name = "SYSTEMMNTINANCE"];
   */
  SYSTEM_MNTINANCE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_COLLECTION = 9 [json_name = "ALLOWCOLLECTION"];
   */
  ALLOW_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MODIFY_READING = 10 [json_name = "ALLOWMODIFYREADING"];
   */
  ALLOW_MODIFY_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_DEPOSIT = 11 [json_name = "ALLOWDEPOSIT"];
   */
  ALLOW_DEPOSIT?: boolean;
  /**
   * @generated from protobuf field: optional bool ALOOW_CANCEL = 12 [json_name = "ALOOWCANCEL"];
   */
  ALOOW_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_REPORTING = 13 [json_name = "ALLOWREPORTING"];
   */
  ALLOW_REPORTING?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_COMPENSATION = 14 [json_name = "ALLOWCOMPENSATION"];
   */
  ALLOW_COMPENSATION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CANCEL = 15 [json_name = "ALLOWCANCEL"];
   */
  ALLOW_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_READING = 16 [json_name = "MAPREADING"];
   */
  MAP_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_COLLECTION = 17 [json_name = "MAPCOLLECTION"];
   */
  MAP_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_LOCATION = 18 [json_name = "MAPLOCATION"];
   */
  MAP_LOCATION?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_PATH = 19 [json_name = "MAPPATH"];
   */
  MAP_PATH?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_COMPLAINTS = 20 [json_name = "MAPCOMPLAINTS"];
   */
  MAP_COMPLAINTS?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_BAD_CONN = 21 [json_name = "MAPBADCONN"];
   */
  MAP_BAD_CONN?: boolean;
  /**
   * @generated from protobuf field: optional bool WALK_ARRANGE_POST = 22 [json_name = "WALKARRANGEPOST"];
   */
  WALK_ARRANGE_POST?: boolean;
  /**
   * @generated from protobuf field: optional bool UPDATE_CUSTOMER_LOCATION = 23 [json_name = "UPDATECUSTOMERLOCATION"];
   */
  UPDATE_CUSTOMER_LOCATION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CANCEL_DEP_COL = 24 [json_name = "ALLOWCANCELDEPCOL"];
   */
  ALLOW_CANCEL_DEP_COL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_RECOL_CANCEL = 25 [json_name = "ALLOWRECOLCANCEL"];
   */
  ALLOW_RECOL_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MAPS = 26 [json_name = "ALLOWMAPS"];
   */
  ALLOW_MAPS?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_LOADDATA_C = 27 [json_name = "ALLOWLOADDATAC"];
   */
  ALLOW_LOADDATA_C?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_LOADDATA_R = 28 [json_name = "ALLOWLOADDATAR"];
   */
  ALLOW_LOADDATA_R?: boolean;
  /**
   * @generated from protobuf field: optional bool IS_CASHIER = 29 [json_name = "ISCASHIER"];
   */
  IS_CASHIER?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_METER_MODIFY = 30 [json_name = "ALLOWMETERMODIFY"];
   */
  ALLOW_METER_MODIFY?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_GARD = 31 [json_name = "ALLOWGARD"];
   */
  ALLOW_GARD?: boolean;
  /**
   * @generated from protobuf field: optional bool RESEND_COLLECTION = 32 [json_name = "RESENDCOLLECTION"];
   */
  RESEND_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool RESEND_READING = 33 [json_name = "RESENDREADING"];
   */
  RESEND_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_COLLECTION = 34 [json_name = "CLOSECOLLECTION"];
   */
  CLOSE_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_READING = 35 [json_name = "CLOSEREADING"];
   */
  CLOSE_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTION_DISCOUNT = 36 [json_name = "COLLECTIONDISCOUNT"];
   */
  COLLECTION_DISCOUNT?: boolean;
  /**
   * @generated from protobuf field: optional bool REFRESH_BILLS_DATA = 37 [json_name = "REFRESHBILLSDATA"];
   */
  REFRESH_BILLS_DATA?: boolean;
  /**
   * @generated from protobuf field: optional bool CALCULATE_DUE_AMOUNT = 38 [json_name = "CALCULATEDUEAMOUNT"];
   */
  CALCULATE_DUE_AMOUNT?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECT_BILL_SINGL_UINT = 39 [json_name = "COLLECTBILLSINGLUINT"];
   */
  COLLECT_BILL_SINGL_UINT?: boolean;
  /**
   * @generated from protobuf field: optional bool PRINT_PAYMENT_REQUEST = 40 [json_name = "PRINTPAYMENTREQUEST"];
   */
  PRINT_PAYMENT_REQUEST?: boolean;
  /**
   * @generated from protobuf field: optional bool PARTIAL_COLLECTION = 41 [json_name = "PARTIALCOLLECTION"];
   */
  PARTIAL_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALONE_PANEL = 42 [json_name = "ALONEPANEL"];
   */
  ALONE_PANEL?: boolean;
  /**
   * @generated from protobuf field: optional bool REFRESH_CUSTOMER_BILLS = 43 [json_name = "REFRESHCUSTOMERBILLS"];
   */
  REFRESH_CUSTOMER_BILLS?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_RECALC_NEW = 44 [json_name = "EDAMSRECALCNEW"];
   */
  EDAMS_RECALC_NEW?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_FAWRY_OPEN = 45 [json_name = "ALLOWFAWRYOPEN"];
   */
  ALLOW_FAWRY_OPEN?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_FAWRY_CLOSE = 46 [json_name = "ALLOWFAWRYCLOSE"];
   */
  ALLOW_FAWRY_CLOSE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MODIFY_PREV_READING = 47 [json_name = "ALLOWMODIFYPREVREADING"];
   */
  ALLOW_MODIFY_PREV_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool LIST_COLLECTION = 48 [json_name = "LISTCOLLECTION"];
   */
  LIST_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool MARKETING = 49 [json_name = "MARKETING"];
   */
  MARKETING?: boolean;
  /**
   * @generated from protobuf field: optional bool PREPEAR_HAFZA = 50 [json_name = "PREPEARHAFZA"];
   */
  PREPEAR_HAFZA?: boolean;
  /**
   * @generated from protobuf field: optional bool CASH_BOX = 51 [json_name = "CASHBOX"];
   */
  CASH_BOX?: boolean;
  /**
   * @generated from protobuf field: optional bool SWITCH = 52 [json_name = "SWITCH"];
   */
  SWITCH?: boolean;
  /**
   * @generated from protobuf field: optional bool UFLAG = 53 [json_name = "UFLAG"];
   */
  UFLAG?: boolean;
  /**
   * @generated from protobuf field: optional bool PORTAL = 54 [json_name = "PORTAL"];
   */
  PORTAL?: boolean;
  /**
   * @generated from protobuf field: optional bool SURVEY = 55 [json_name = "SURVEY"];
   */
  SURVEY?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORTS = 56 [json_name = "REPORTS"];
   */
  REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD = 57 [json_name = "DASHBOARD"];
   */
  DASHBOARD?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY = 58 [json_name = "QUERY"];
   */
  QUERY?: boolean;
  /**
   * @generated from protobuf field: optional bool DEVICE_MANAGMENT = 59 [json_name = "DEVICEMANAGMENT"];
   */
  DEVICE_MANAGMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool SYNC = 60 [json_name = "SYNC"];
   */
  SYNC?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_BILL = 61 [json_name = "CANCELBILL"];
   */
  CANCEL_BILL?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_DELIVERY = 62 [json_name = "CANCELDELIVERY"];
   */
  CANCEL_DELIVERY?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CUST_MOD = 63 [json_name = "ALLOWCUSTMOD"];
   */
  ALLOW_CUST_MOD?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_ESTIM_READING = 64 [json_name = "ALLOWESTIMREADING"];
   */
  ALLOW_ESTIM_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_BATCH_ESTIM_READING = 65 [json_name = "ALLOWBATCHESTIMREADING"];
   */
  ALLOW_BATCH_ESTIM_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool CREATE_APPLICATION = 66 [json_name = "CREATEAPPLICATION"];
   */
  CREATE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool BILLER = 67 [json_name = "BILLER"];
   */
  BILLER?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_APPLICATION = 68 [json_name = "CANCELAPPLICATION"];
   */
  CANCEL_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_APPLICATION = 69 [json_name = "EDITAPPLICATION"];
   */
  EDIT_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_APPLICATION = 70 [json_name = "DELETEAPPLICATION"];
   */
  DELETE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool PRESENT_CANCEL_BILL = 71 [json_name = "PRESENTCANCELBILL"];
   */
  PRESENT_CANCEL_BILL?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSED_APPLICATION = 72 [json_name = "CLOSEDAPPLICATION"];
   */
  CLOSED_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool IsActive = 73 [json_name = "IsActive"];
   */
  IsActive?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETED = 74 [json_name = "DELETED"];
   */
  DELETED?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CUSTOMER_RESEQUENCE = 75 [json_name = "ALLOWCUSTOMERRESEQUENCE"];
   */
  ALLOW_CUSTOMER_RESEQUENCE?: boolean; // new
  /**
   * @generated from protobuf field: optional bool ALLOW_ESTIM_CONSUMP = 76 [json_name = "ALLOWESTIMCONSUMP"];
   */
  ALLOW_ESTIM_CONSUMP?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_TAX_PUSH = 77 [json_name = "ALLOWTAXPUSH"];
   */
  ALLOW_TAX_PUSH?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_COLLECTION_INDEVICE = 78 [json_name = "CLOSECOLLECTIONINDEVICE"];
   */
  CLOSE_COLLECTION_INDEVICE?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_RECALC = 79 [json_name = "EDAMSRECALC"];
   */
  EDAMS_RECALC?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_METER_STATUS_CHANGE = 80 [json_name = "ALLOWMETERSTATUSCHANGE"];
   */
  ALLOW_METER_STATUS_CHANGE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_POST_C = 81 [json_name = "ALLOWPOSTC"];
   */
  ALLOW_POST_C?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_POST_R = 82 [json_name = "ALLOWPOSTR"];
   */
  ALLOW_POST_R?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_READING_INDEVICE = 83 [json_name = "CLOSEREADINGINDEVICE"];
   */
  CLOSE_READING_INDEVICE?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_CLEAR_READINGS = 84 [json_name = "EDAMSCLEARREADINGS"];
   */
  EDAMS_CLEAR_READINGS?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_CS = 85 [json_name = "EDAMSCS"];
   */
  EDAMS_CS?: boolean;
  /**
   * @generated from protobuf field: optional bool EMP_MANAGEMENT = 86 [json_name = "EMPMANAGEMENT"];
   */
  EMP_MANAGEMENT?: boolean;
  /**
   * @generated from protobuf field: optional string PRINTER_TYPE = 87 [json_name = "PRINTERTYPE"];
   */
  PRINTER_TYPE?: string;
  /**
   * @generated from protobuf field: optional bool WALKC_ASSIGNMENT = 88 [json_name = "WALKCASSIGNMENT"];
   */
  WALKC_ASSIGNMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool WALKR_ASSIGNMENT = 89 [json_name = "WALKRASSIGNMENT"];
   */
  WALKR_ASSIGNMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool REPRINT_RECEIPT = 90 [json_name = "REPRINTRECEIPT"];
   */
  REPRINT_RECEIPT?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_OPERATIONS_COLLECTION_WALK = 91 [json_name = "ALLOWOPERATIONSCOLLECTIONWALK"];
   */
  ALLOW_OPERATIONS_COLLECTION_WALK?: boolean;
  /**
   * @generated from protobuf field: optional bool CUSTOMER_NOTIFICATION = 92 [json_name = "CUSTOMERNOTIFICATION"];
   */
  CUSTOMER_NOTIFICATION?: boolean; // إخطارات العملاء
  /**
   * @generated from protobuf field: optional bool MANAGE_CUSTOMER_NOTIFICATION_MODULES = 93 [json_name = "MANAGECUSTOMERNOTIFICATIONMODULES"];
   */
  MANAGE_CUSTOMER_NOTIFICATION_MODULES?: boolean; // إدارة نماذج إخطارات العملاء
  /**
   * @generated from protobuf field: optional bool SEND_CUSTOMER_SERVICE_NOTIFICATION = 94 [json_name = "SENDCUSTOMERSERVICENOTIFICATION"];
   */
  SEND_CUSTOMER_SERVICE_NOTIFICATION?: boolean; // إرسال إخطارات خدمة العملاء
}
/**
 * @generated from protobuf message GoAuth.GOV_PERMISSIONS
 */
export interface GOV_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool ALLOW_GOV_COLLECTION = 1 [json_name = "ALLOWGOVCOLLECTION"];
   */
  ALLOW_GOV_COLLECTION?: boolean; // صلاحيه التعامل مع منظومه التحصيل الحكومي عموما
  /**
   * @generated from protobuf field: optional bool IS_CASHIER = 2 [json_name = "ISCASHIER"];
   */
  IS_CASHIER?: boolean; // صلاحيه التحصيل
  /**
   * @generated from protobuf field: optional bool ADD_PAYMENT_FILE = 3 [json_name = "ADDPAYMENTFILE"];
   */
  ADD_PAYMENT_FILE?: boolean; // اضافه ملف تحصيل
  /**
   * @generated from protobuf field: optional bool EDIT_PAYMENT_FILE = 4 [json_name = "EDITPAYMENTFILE"];
   */
  EDIT_PAYMENT_FILE?: boolean; // تعديل ملف تحصيل
  /**
   * @generated from protobuf field: optional bool DELETE_PAYMENT_FILE = 5 [json_name = "DELETEPAYMENTFILE"];
   */
  DELETE_PAYMENT_FILE?: boolean; // ازاله ملف تحصيل
  /**
   * @generated from protobuf field: optional bool ADD_PAYMENT = 6 [json_name = "ADDPAYMENT"];
   */
  ADD_PAYMENT?: boolean; // اضافه مستند تحصيل
  /**
   * @generated from protobuf field: optional bool EDIT_PAYMENT = 7 [json_name = "EDITPAYMENT"];
   */
  EDIT_PAYMENT?: boolean; // تعديل مستند تحصيل
  /**
   * @generated from protobuf field: optional bool DELETE_PAYMENT = 8 [json_name = "DELETEPAYMENT"];
   */
  DELETE_PAYMENT?: boolean; // ازاله مستند تحصيل
  /**
   * @generated from protobuf field: optional bool ADD_EMP = 9 [json_name = "ADDEMP"];
   */
  ADD_EMP?: boolean; // اضافة موظف للتحصيل الحكومي
  /**
   * @generated from protobuf field: optional bool EDIT_EMP = 10 [json_name = "EDITEMP"];
   */
  EDIT_EMP?: boolean; // تعديل موظف للتحصيل الحكومي
  /**
   * @generated from protobuf field: optional bool CANCEL_COLLECTION = 11 [json_name = "CANCELCOLLECTION"];
   */
  CANCEL_COLLECTION?: boolean; // الغاء التحصيل
  /**
   * @generated from protobuf field: optional bool VIEW_REPORTS = 12 [json_name = "VIEWREPORTS"];
   */
  VIEW_REPORTS?: boolean; // التقارير
  /**
   * @generated from protobuf field: optional bool ADD_CENTRAL = 13 [json_name = "ADDCENTRAL"];
   */
  ADD_CENTRAL?: boolean; // إضافة مركزية جديدة
  /**
   * @generated from protobuf field: optional bool REVIEW_CENTRAL = 14 [json_name = "REVIEWCENTRAL"];
   */
  REVIEW_CENTRAL?: boolean; // مراجعة المركزية
  /**
   * @generated from protobuf field: optional bool APPROVE_CENTRAL = 15 [json_name = "APPROVECENTRAL"];
   */
  APPROVE_CENTRAL?: boolean; // إعتماد المركزية
  /**
   * @generated from protobuf field: optional bool DELETE_CENTRAL = 16 [json_name = "DELETECENTRAL"];
   */
  DELETE_CENTRAL?: boolean; // حذف المركزية
  /**
   * @generated from protobuf field: optional bool CENTRAL_REPORT = 17 [json_name = "CENTRALREPORT"];
   */
  CENTRAL_REPORT?: boolean; // عرض تقرير المركزية
  /**
   * @generated from protobuf field: optional bool MERGE_AMOUNT = 18 [json_name = "MERGEAMOUNT"];
   */
  MERGE_AMOUNT?: boolean; // دمج مبلغ جديد ف المستند
  /**
   * @generated from protobuf field: optional bool REASSIGNE_AMOUNT = 19 [json_name = "REASSIGNEAMOUNT"];
   */
  REASSIGNE_AMOUNT?: boolean; // إعادة توزيع المبلغ المتبقي
  /**
   * @generated from protobuf field: optional bool MERGE_ALL_ITEMS = 20 [json_name = "MERGEALLITEMS"];
   */
  MERGE_ALL_ITEMS?: boolean; // دمج جميع البنود ف بند واحد
  /**
   * @generated from protobuf field: optional bool MERGE_WATER_ITEMS = 21 [json_name = "MERGEWATERITEMS"];
   */
  MERGE_WATER_ITEMS?: boolean; // دمج جميع البنود عدا الصرف
  /**
   * @generated from protobuf field: optional bool AUTO_FILL_ITEMS = 22 [json_name = "AUTOFILLITEMS"];
   */
  AUTO_FILL_ITEMS?: boolean; // توزيع المبلغ اتوماتيك
  /**
   * @generated from protobuf field: optional bool CANCEL_ALLOCATE_PAYMENT = 23 [json_name = "CANCELALLOCATEPAYMENT"];
   */
  CANCEL_ALLOCATE_PAYMENT?: boolean; // الغاء تخصيص المبلغ
  /**
   * @generated from protobuf field: optional bool REDUCE_FILE_AMOUNT = 24 [json_name = "REDUCEFILEAMOUNT"];
   */
  REDUCE_FILE_AMOUNT?: boolean;
}
/**
 * @generated from protobuf message GoAuth.TAX_PERMISSIONS
 */
export interface TAX_PERMISSIONS {
  /**
   * @generated from protobuf field: optional bool MANAGE_ITEMS = 1 [json_name = "MANAGEITEMS"];
   */
  MANAGE_ITEMS?: boolean;
  /**
   * @generated from protobuf field: optional bool MANEGE_CLIENTS = 2 [json_name = "MANEGECLIENTS"];
   */
  MANEGE_CLIENTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CUSTOMER_TO_GROUP = 3 [json_name = "CUSTOMERTOGROUP"];
   */
  CUSTOMER_TO_GROUP?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_GROUPS = 4 [json_name = "MANAGEGROUPS"];
   */
  MANAGE_GROUPS?: boolean;
  /**
   * @generated from protobuf field: optional bool GROUPS = 5 [json_name = "GROUPS"];
   */
  GROUPS?: boolean;
  /**
   * @generated from protobuf field: optional bool SUB_GROUPS = 6 [json_name = "SUBGROUPS"];
   */
  SUB_GROUPS?: boolean;
  /**
   * @generated from protobuf field: optional bool ACCECPT_COLLECTED_INVOICES_GROUPS = 7 [json_name = "ACCECPTCOLLECTEDINVOICESGROUPS"];
   */
  ACCECPT_COLLECTED_INVOICES_GROUPS?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTE_INVOICES = 8 [json_name = "COLLECTEINVOICES"];
   */
  COLLECTE_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool ADD_CLIENTS_TO_SUBGROUP = 9 [json_name = "ADDCLIENTSTOSUBGROUP"];
   */
  ADD_CLIENTS_TO_SUBGROUP?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_SUBGROUP_INVOICES = 10 [json_name = "MANAGESUBGROUPINVOICES"];
   */
  MANAGE_SUBGROUP_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_COLLECTED_INVOICES = 11 [json_name = "CANCELCOLLECTEDINVOICES"];
   */
  CANCEL_COLLECTED_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool ACCECPT_COLLECTED_INVOICES_SUBGROUPS = 12 [json_name = "ACCECPTCOLLECTEDINVOICESSUBGROUPS"];
   */
  ACCECPT_COLLECTED_INVOICES_SUBGROUPS?: boolean;
  /**
   * @generated from protobuf field: optional bool TAX_TYPES = 13 [json_name = "TAXTYPES"];
   */
  TAX_TYPES?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_ACTIVITY = 14 [json_name = "MANAGEACTIVITY"];
   */
  MANAGE_ACTIVITY?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_REPORTS = 15 [json_name = "MANAGEREPORTS"];
   */
  MANAGE_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CLIENT_REPORTS = 16 [json_name = "CLIENTREPORTS"];
   */
  CLIENT_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool OTHER_REPORTS = 17 [json_name = "OTHERREPORTS"];
   */
  OTHER_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_PURCHASES = 18 [json_name = "MANAGEPURCHASES"];
   */
  MANAGE_PURCHASES?: boolean;
  /**
   * @generated from protobuf field: optional bool ACCEPT_PURCHASES = 19 [json_name = "ACCEPTPURCHASES"];
   */
  ACCEPT_PURCHASES?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_PURCHASES = 20 [json_name = "CANCELPURCHASES"];
   */
  CANCEL_PURCHASES?: boolean;
  /**
   * @generated from protobuf field: optional bool MANAGE_INVOICES = 21 [json_name = "MANAGEINVOICES"];
   */
  MANAGE_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool CREATE_INVOICE = 22 [json_name = "CREATEINVOICE"];
   */
  CREATE_INVOICE?: boolean;
  /**
   * @generated from protobuf field: optional bool UPLOAD_INVOICE_EXCEL = 23 [json_name = "UPLOADINVOICEEXCEL"];
   */
  UPLOAD_INVOICE_EXCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool DRAFT_INVOICES = 24 [json_name = "DRAFTINVOICES"];
   */
  DRAFT_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool ACCEPT_DRAFT_INVOICES = 25 [json_name = "ACCEPTDRAFTINVOICES"];
   */
  ACCEPT_DRAFT_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool ACCEPT_INVOICES = 26 [json_name = "ACCEPTINVOICES"];
   */
  ACCEPT_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool REVIEW_INVOICES = 27 [json_name = "REVIEWINVOICES"];
   */
  REVIEW_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool SENT_INVOICES = 28 [json_name = "SENTINVOICES"];
   */
  SENT_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool PRINT_CLIENT_INVOICES = 29 [json_name = "PRINTCLIENTINVOICES"];
   */
  PRINT_CLIENT_INVOICES?: boolean;
  /**
   * @generated from protobuf field: optional bool PRINT_ETA_INVOICES = 30 [json_name = "PRINTETAINVOICES"];
   */
  PRINT_ETA_INVOICES?: boolean;
}
/**
 * @generated from protobuf message GoAuth.AUTH_LICENCE
 */
export interface AUTH_ALL_PERMISSIONS {
  /**
   * @generated from protobuf field: optional GoAuth.CASHBOX_PERMISSIONS CASHBOX = 2 [json_name = "CASHBOX"];
   */
  CASHBOX?: CASHBOX_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.CRM_PERMISSIONS CRM = 3 [json_name = "CRM"];
   */
  CRM?: CRM_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.AUTH_PERMISSIONS AUTH = 4 [json_name = "AUTH"];
   */
  AUTH?: AUTH_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.PAYMENTGETWAY_PERMISSIONS PAYMENTGETWAY = 5 [json_name = "PAYMENTGETWAY"];
   */
  PAYMENTGETWAY?: PAYMENTGETWAY_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.CDU_PERMISSIONS CDU = 6 [json_name = "CDU"];
   */
  CDU?: CDU_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.BI_PERMISSIONS BI = 7 [json_name = "BI"];
   */
  BI?: BI_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.BPM_PERMISSIONS BPM = 8 [json_name = "BPM"];
   */
  BPM?: BPM_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.PORTAL_PERMISSIONS PORTAL = 9 [json_name = "PORTAL"];
   */
  PORTAL?: PORTAL_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.GENERAL_PERMISSIONS GENERAL = 10 [json_name = "GENERAL"];
   */
  GENERAL?: GENERAL_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.BILLER_PERMISSIONS BILLER = 11 [json_name = "BILLER"];
   */
  BILLER?: BILLER_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.BILLING_PERMISSIONS BILLING = 12 [json_name = "BILLING"];
   */
  BILLING?: BILLING_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.TAX_PERMISSIONS TAX = 13 [json_name = "TAX"];
   */
  TAX?: TAX_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.MAS_PERMISSIONS MAS = 14 [json_name = "MAS"];
   */
  MAS?: MAS_PERMISSIONS; // @gotags: gorm:"embedded"
  /**
   * @generated from protobuf field: optional GoAuth.GOV_PERMISSIONS GOV = 15 [json_name = "GOV"];
   */
  GOV?: GOV_PERMISSIONS; // @gotags: gorm:"embedded"
}
export interface USERS {
  /**
   * @generated from protobuf field: int64 ID = 1 [json_name = "ID"];
   */
  ID: string; // @gotags: gorm:"primaryKey;autoIncrement:false"
  /**
   * @generated from protobuf field: optional int64 STATION_NO = 2 [json_name = "STATIONNO"];
   */
  STATION_NO?: string;
  /**
   * @generated from protobuf field: optional string FULL_NAME = 3 [json_name = "FULLNAME"];
   */
  FULL_NAME?: string; // @gotags: gorm:"size:255"
  /**
   * @generated from protobuf field: optional string USER_NAME = 4 [json_name = "USERNAME"];
   */
  USER_NAME?: string; // @gotags: gorm:"size:255"
  /**
   * @generated from protobuf field: optional string PASSWORD = 5 [json_name = "PASSWORD"];
   */
  PASSWORD?: string; // @gotags: gorm:"size:255"
  /**
   * @generated from protobuf field: optional bool SYS_ADMIN = 6 [json_name = "SYSADMIN"];
   */
  SYS_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool READING_ADMIN = 7 [json_name = "READINGADMIN"];
   */
  READING_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTION_ADMIN = 8 [json_name = "COLLECTIONADMIN"];
   */
  COLLECTION_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORING_ADMIN = 9 [json_name = "REPORINGADMIN"];
   */
  REPORING_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool HH_MONITOR = 10 [json_name = "HHMONITOR"];
   */
  HH_MONITOR?: boolean;
  /**
   * @generated from protobuf field: optional bool USER_MANAGEMENT = 11 [json_name = "USERMANAGEMENT"];
   */
  USER_MANAGEMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool DATA_ADMIN = 12 [json_name = "DATAADMIN"];
   */
  DATA_ADMIN?: boolean;
  /**
   * @generated from protobuf field: optional bool SYSTEM_MNTINANCE = 13 [json_name = "SYSTEMMNTINANCE"];
   */
  SYSTEM_MNTINANCE?: boolean;
  /**
   * @generated from protobuf field: optional string NID = 14 [json_name = "NID"];
   */
  NID?: string; // @gotags: gorm:"size:100"
  /**
   * @generated from protobuf field: optional string EMAIL = 15 [json_name = "EMAIL"];
   */
  EMAIL?: string; // @gotags: gorm:"size:255"
  /**
   * @generated from protobuf field: optional bool ALLOW_COLLECTION = 16 [json_name = "ALLOWCOLLECTION"];
   */
  ALLOW_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MODIFY_READING = 17 [json_name = "ALLOWMODIFYREADING"];
   */
  ALLOW_MODIFY_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_DEPOSIT = 18 [json_name = "ALLOWDEPOSIT"];
   */
  ALLOW_DEPOSIT?: boolean;
  /**
   * @generated from protobuf field: optional bool ALOOW_CANCEL = 19 [json_name = "ALOOWCANCEL"];
   */
  ALOOW_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_REPORTING = 21 [json_name = "ALLOWREPORTING"];
   */
  ALLOW_REPORTING?: boolean;
  /**
   * @generated from protobuf field: optional GoAuth.ENCRYPTION IS_ENC = 34 [json_name = "ISENC"];
   */
  IS_ENC?: ENCRYPTION;
  /**
   * @generated from protobuf field: optional bool ALLOW_COMPENSATION = 35 [json_name = "ALLOWCOMPENSATION"];
   */
  ALLOW_COMPENSATION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CANCEL = 36 [json_name = "ALLOWCANCEL"];
   */
  ALLOW_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_READING = 37 [json_name = "MAPREADING"];
   */
  MAP_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_COLLECTION = 38 [json_name = "MAPCOLLECTION"];
   */
  MAP_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_LOCATION = 39 [json_name = "MAPLOCATION"];
   */
  MAP_LOCATION?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_PATH = 40 [json_name = "MAPPATH"];
   */
  MAP_PATH?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_COMPLAINTS = 41 [json_name = "MAPCOMPLAINTS"];
   */
  MAP_COMPLAINTS?: boolean;
  /**
   * @generated from protobuf field: optional bool MAP_BAD_CONN = 42 [json_name = "MAPBADCONN"];
   */
  MAP_BAD_CONN?: boolean;
  /**
   * @generated from protobuf field: optional bool WALK_ARRANGE_POST = 43 [json_name = "WALKARRANGEPOST"];
   */
  WALK_ARRANGE_POST?: boolean;
  /**
   * @generated from protobuf field: optional bool UPDATE_CUSTOMER_LOCATION = 44 [json_name = "UPDATECUSTOMERLOCATION"];
   */
  UPDATE_CUSTOMER_LOCATION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CANCEL_DEP_COL = 45 [json_name = "ALLOWCANCELDEPCOL"];
   */
  ALLOW_CANCEL_DEP_COL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_RECOL_CANCEL = 46 [json_name = "ALLOWRECOLCANCEL"];
   */
  ALLOW_RECOL_CANCEL?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MAPS = 47 [json_name = "ALLOWMAPS"];
   */
  ALLOW_MAPS?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_LOADDATA_C = 48 [json_name = "ALLOWLOADDATAC"];
   */
  ALLOW_LOADDATA_C?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_LOADDATA_R = 49 [json_name = "ALLOWLOADDATAR"];
   */
  ALLOW_LOADDATA_R?: boolean;
  /**
   * @generated from protobuf field: optional bool IS_CASHIER = 50 [json_name = "ISCASHIER"];
   */
  IS_CASHIER?: boolean;
  /**
   * @generated from protobuf field: optional int64 CASHIER_ID = 51 [json_name = "CASHIERID"];
   */
  CASHIER_ID?: string;
  /**
   * @generated from protobuf field: optional bool ALLOW_METER_MODIFY = 56 [json_name = "ALLOWMETERMODIFY"];
   */
  ALLOW_METER_MODIFY?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_GARD = 57 [json_name = "ALLOWGARD"];
   */
  ALLOW_GARD?: boolean;
  /**
   * @generated from protobuf field: optional bool RESEND_COLLECTION = 58 [json_name = "RESENDCOLLECTION"];
   */
  RESEND_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool RESEND_READING = 59 [json_name = "RESENDREADING"];
   */
  RESEND_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_COLLECTION = 60 [json_name = "CLOSECOLLECTION"];
   */
  CLOSE_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSE_READING = 61 [json_name = "CLOSEREADING"];
   */
  CLOSE_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECTION_DISCOUNT = 62 [json_name = "COLLECTIONDISCOUNT"];
   */
  COLLECTION_DISCOUNT?: boolean;
  /**
   * @generated from protobuf field: optional bool REFRESH_BILLS_DATA = 63 [json_name = "REFRESHBILLSDATA"];
   */
  REFRESH_BILLS_DATA?: boolean;
  /**
   * @generated from protobuf field: optional bool CALCULATE_DUE_AMOUNT = 64 [json_name = "CALCULATEDUEAMOUNT"];
   */
  CALCULATE_DUE_AMOUNT?: boolean;
  /**
   * @generated from protobuf field: optional bool COLLECT_BILL_SINGL_UINT = 65 [json_name = "COLLECTBILLSINGLUINT"];
   */
  COLLECT_BILL_SINGL_UINT?: boolean;
  /**
   * @generated from protobuf field: optional bool PRINT_PAYMENT_REQUEST = 66 [json_name = "PRINTPAYMENTREQUEST"];
   */
  PRINT_PAYMENT_REQUEST?: boolean;
  /**
   * @generated from protobuf field: optional bool PARTIAL_COLLECTION = 67 [json_name = "PARTIALCOLLECTION"];
   */
  PARTIAL_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALONE_PANEL = 68 [json_name = "ALONEPANEL"];
   */
  ALONE_PANEL?: boolean;
  /**
   * @generated from protobuf field: optional bool REFRESH_CUSTOMER_BILLS = 69 [json_name = "REFRESHCUSTOMERBILLS"];
   */
  REFRESH_CUSTOMER_BILLS?: boolean;
  /**
   * @generated from protobuf field: optional bool EDAMS_RECALC_NEW = 70 [json_name = "EDAMSRECALCNEW"];
   */
  EDAMS_RECALC_NEW?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_FAWRY_OPEN = 71 [json_name = "ALLOWFAWRYOPEN"];
   */
  ALLOW_FAWRY_OPEN?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_FAWRY_CLOSE = 72 [json_name = "ALLOWFAWRYCLOSE"];
   */
  ALLOW_FAWRY_CLOSE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_MODIFY_PREV_READING = 73 [json_name = "ALLOWMODIFYPREVREADING"];
   */
  ALLOW_MODIFY_PREV_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool LIST_COLLECTION = 74 [json_name = "LISTCOLLECTION"];
   */
  LIST_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool MARKETING = 75 [json_name = "MARKETING"];
   */
  MARKETING?: boolean;
  /**
   * @generated from protobuf field: optional bool PREPEAR_HAFZA = 76 [json_name = "PREPEARHAFZA"];
   */
  PREPEAR_HAFZA?: boolean;
  /**
   * @generated from protobuf field: optional bool CASH_BOX = 77 [json_name = "CASHBOX"];
   */
  CASH_BOX?: boolean;
  /**
   * @generated from protobuf field: optional bool SWITCH = 78 [json_name = "SWITCH"];
   */
  SWITCH?: boolean;
  /**
   * @generated from protobuf field: optional bool UFLAG = 79 [json_name = "UFLAG"];
   */
  UFLAG?: boolean;
  /**
   * @generated from protobuf field: optional bool PORTAL = 80 [json_name = "PORTAL"];
   */
  PORTAL?: boolean;
  /**
   * @generated from protobuf field: optional bool SURVEY = 81 [json_name = "SURVEY"];
   */
  SURVEY?: boolean;
  /**
   * @generated from protobuf field: optional bool REPORTS = 82 [json_name = "REPORTS"];
   */
  REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool DASHBOARD = 83 [json_name = "DASHBOARD"];
   */
  DASHBOARD?: boolean;
  /**
   * @generated from protobuf field: optional bool QUERY = 84 [json_name = "QUERY"];
   */
  QUERY?: boolean;
  /**
   * @generated from protobuf field: optional bool DEVICE_MANAGMENT = 85 [json_name = "DEVICEMANAGMENT"];
   */
  DEVICE_MANAGMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool SYNC = 86 [json_name = "SYNC"];
   */
  SYNC?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_BILL = 87 [json_name = "CANCELBILL"];
   */
  CANCEL_BILL?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_DELIVERY = 88 [json_name = "CANCELDELIVERY"];
   */
  CANCEL_DELIVERY?: boolean;
  /**
   * @generated from protobuf field: optional int64 DEPARTMENT = 89 [json_name = "DEPARTMENT"];
   */
  DEPARTMENT?: string;
  /**
   * @generated from protobuf field: optional bool ALLOW_CUST_MOD = 90 [json_name = "ALLOWCUSTMOD"];
   */
  ALLOW_CUST_MOD?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_ESTIM_READING = 91 [json_name = "ALLOWESTIMREADING"];
   */
  ALLOW_ESTIM_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_BATCH_ESTIM_READING = 92 [json_name = "ALLOWBATCHESTIMREADING"];
   */
  ALLOW_BATCH_ESTIM_READING?: boolean;
  /**
   * @generated from protobuf field: optional bool CREATE_APPLICATION = 93 [json_name = "CREATEAPPLICATION"];
   */
  CREATE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool BILLER = 94 [json_name = "BILLER"];
   */
  BILLER?: boolean;
  /**
   * @generated from protobuf field: optional bool CANCEL_APPLICATION = 95 [json_name = "CANCELAPPLICATION"];
   */
  CANCEL_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool EDIT_APPLICATION = 96 [json_name = "EDITAPPLICATION"];
   */
  EDIT_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETE_APPLICATION = 97 [json_name = "DELETEAPPLICATION"];
   */
  DELETE_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool PRESENT_CANCEL_BILL = 98 [json_name = "PRESENTCANCELBILL"];
   */
  PRESENT_CANCEL_BILL?: boolean;
  /**
   * @generated from protobuf field: optional bool CLOSED_APPLICATION = 99 [json_name = "CLOSEDAPPLICATION"];
   */
  CLOSED_APPLICATION?: boolean;
  /**
   * @generated from protobuf field: optional bool IsActive = 100 [json_name = "IsActive"];
   */
  IsActive?: boolean;
  /**
   * @generated from protobuf field: optional bool DELETED = 101 [json_name = "DELETED"];
   */
  DELETED?: boolean;
  /**
   * @generated from protobuf field: optional int32 SITE_CODE = 102 [json_name = "SITECODE"];
   */
  SITE_CODE?: number; // @gotags: gorm:"size:30"
  /**
   * @generated from protobuf field: optional string MOBILE_NO = 103 [json_name = "MOBILENO"];
   */
  MOBILE_NO?: string; // @gotags: gorm:"size:20"
  /**
   * @generated from protobuf field: optional bool SUPERUSER = 104 [json_name = "SUPERUSER"];
   */
  SUPERUSER?: boolean;
  /**
   * @generated from protobuf field: repeated GoAuth.ProfileId PROFILE_ID = 105 [json_name = "PROFILEID"];
   */
  PROFILE_ID: ProfileId[]; // @gotags: gorm:"-"
  /**
   * @generated from protobuf field: repeated GoAuth.USER_STATIONS USER_STATIONS = 106 [json_name = "USERSTATIONS"];
   */
  USER_STATIONS: USER_STATIONS[]; // @gotags: gorm:"-"
  /**
   * @generated from protobuf field: optional GoAuth.AUTH_ALL_PERMISSIONS ALL_PERMISSIONS = 107 [json_name = "ALLPERMISSIONS"];
   */
  ALL_PERMISSIONS?: AUTH_ALL_PERMISSIONS; // @gotags: gorm:"-"
  /**
   * @generated from protobuf field: optional int32 CUL = 108 [json_name = "CUL"];
   */
  CUL?: number;
  /**
   * @generated from protobuf field: optional central.types.MasDateTime CUL_DATE = 109 [json_name = "CULDATE"];
   */
  CUL_DATE?: MasDateTime;
  /**
   * @generated from protobuf field: optional int32 CULA = 110 [json_name = "CULA"];
   */
  CULA?: number;
  /**
   * @generated from protobuf field: optional bool SYSTEM_REPORTS = 111 [json_name = "SYSTEMREPORTS"];
   */
  SYSTEM_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CRYSTAL_REPORTS = 112 [json_name = "CRYSTALREPORTS"];
   */
  CRYSTAL_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CRM_REPORTS = 113 [json_name = "CRMREPORTS"];
   */
  CRM_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool GENERAL_REPORT = 114 [json_name = "GENERALREPORT"];
   */
  GENERAL_REPORT?: boolean;
  /**
   * @generated from protobuf field: optional bool APP_REPORT = 115 [json_name = "APPREPORT"];
   */
  APP_REPORT?: boolean;
  /**
   * @generated from protobuf field: optional string ACCESS_CONSTRAINT = 116 [json_name = "ACCESSCONSTRAINT"];
   */
  ACCESS_CONSTRAINT?: string; // @gotags: gorm:"size:40000"
  /**
   * @generated from protobuf field: optional bool CDU_COMMITE = 117 [json_name = "CDUCOMMITE"];
   */
  CDU_COMMITE?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_EDIT = 118 [json_name = "CDUEDIT"];
   */
  CDU_EDIT?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_VERIFY = 119 [json_name = "CDUVERIFY"];
   */
  CDU_VERIFY?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_APPROVE = 120 [json_name = "CDUAPPROVE"];
   */
  CDU_APPROVE?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_REPORTS = 121 [json_name = "CDUREPORTS"];
   */
  CDU_REPORTS?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_DASHBORAD = 122 [json_name = "CDUDASHBORAD"];
   */
  CDU_DASHBORAD?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_VERIFY_KHELSA = 123 [json_name = "CDUVERIFYKHELSA"];
   */
  CDU_VERIFY_KHELSA?: boolean;
  /**
   * @generated from protobuf field: optional bool CDU_APPROVE_KHELSA = 124 [json_name = "CDUAPPROVEKHELSA"];
   */
  CDU_APPROVE_KHELSA?: boolean;
  /**
   * @generated from protobuf field: optional central.types.MasDateTime STAMP_DATE = 125 [json_name = "STAMPDATE"];
   */
  STAMP_DATE?: MasDateTime;
  /**
   * @generated from protobuf field: optional string STAMP_USER = 126 [json_name = "STAMPUSER"];
   */
  STAMP_USER?: string; // @gotags: gorm:"size:100"
  /**
   * @generated from protobuf field: optional bool ALLOW_GOV_COLLECTION = 127 [json_name = "ALLOWGOVCOLLECTION"];
   */
  ALLOW_GOV_COLLECTION?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_METER_STATUS_CHANGE = 128 [json_name = "ALLOWMETERSTATUSCHANGE"];
   */
  ALLOW_METER_STATUS_CHANGE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_ESTIM_CONSUMP = 129 [json_name = "ALLOWESTIMCONSUMP"];
   */
  ALLOW_ESTIM_CONSUMP?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_CUSTOMER_RESEQUENCE = 130 [json_name = "ALLOWCUSTOMERRESEQUENCE"];
   */
  ALLOW_CUSTOMER_RESEQUENCE?: boolean;
  /**
   * @generated from protobuf field: optional bool ALLOW_TAX_PUSH = 131 [json_name = "ALLOWTAXPUSH"];
   */
  ALLOW_TAX_PUSH?: boolean;
  /**
   * @generated from protobuf field: optional bool EMP_MANAGEMENT = 132 [json_name = "EMPMANAGEMENT"];
   */
  EMP_MANAGEMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool WALKC_ASSIGNMENT = 133 [json_name = "WALKCASSIGNMENT"];
   */
  WALKC_ASSIGNMENT?: boolean;
  /**
   * @generated from protobuf field: optional bool WALKR_ASSIGNMENT = 134 [json_name = "WALKRASSIGNMENT"];
   */
  WALKR_ASSIGNMENT?: boolean;
  /**
   * @generated from protobuf field: optional string PRINTER_TYPE = 135 [json_name = "PRINTERTYPE"];
   */
  PRINTER_TYPE?: string;
  /**
   * @generated from protobuf field: optional string USER_PROFILE_IMAGE = 136 [json_name = "USERPROFILEIMAGE"];
   */
  USER_PROFILE_IMAGE?: string; // @gotags: gorm:"type:nvarchar(max)"
  /**
   * @generated from protobuf field: repeated GoAuth.DEPARTMENTS DEPARTMENTS = 137 [json_name = "DEPARTMENTS"];
   */
  // DEPARTMENTS: DEPARTMENTS[]; // @gotags: gorm:"-"
}
export interface GetUserProfileResponse {
  /**
   * @generated from protobuf field: optional GoAuth.USERS USER = 1 [json_name = "USER"];
   */
  USER?: USERS;
  /**
   * repeated AUTH_PROFILES PROFILE = 2;
   *
   * @generated from protobuf field: optional string SITE_NAME = 3 [json_name = "SITENAME"];
   */
  SITE_NAME?: string;
  /**
   * @generated from protobuf field: optional string STATION_NAME = 4 [json_name = "STATIONNAME"];
   */
  STATION_NAME?: string;
}

export const oldAuthTempUserProfile = (
  state: boolean,
): GetUserProfileResponse => ({
  USER: {
    ID: "",
    PROFILE_ID: [],
    USER_STATIONS: [],
    ALL_PERMISSIONS: {
      GOV: {
        ADD_EMP: state,
        ADD_PAYMENT: state,
        ADD_PAYMENT_FILE: state,
        ALLOW_GOV_COLLECTION: state,
        CANCEL_COLLECTION: state,
        DELETE_PAYMENT: state,
        DELETE_PAYMENT_FILE: state,
        EDIT_EMP: state,
        EDIT_PAYMENT: state,
        EDIT_PAYMENT_FILE: state,
        IS_CASHIER: state,
        VIEW_REPORTS: state,
        ADD_CENTRAL: state,
        APPROVE_CENTRAL: state,
        CENTRAL_REPORT: state,
        DELETE_CENTRAL: state,
        REVIEW_CENTRAL: state,
      },
      MAS: {
        QUERY: true,
      },
    },
  },
});
