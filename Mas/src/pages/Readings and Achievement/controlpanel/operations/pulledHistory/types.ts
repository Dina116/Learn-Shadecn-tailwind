export interface FormFilterType {
  StationNo?: number;
  Custkey?: string;
  StartDate?: MasDate;
  EndDate?: MasDate;
}
export interface ProcessWalk {
  /**
   * @generated from protobuf field: string Billgroup = 1 [json_name = "Billgroup"];
   */
  Billgroup: string;
  /**
   * @generated from protobuf field: string BookNo = 2 [json_name = "BookNo"];
   */
  BookNo: string;
  /**
   * @generated from protobuf field: string WalkNo = 3 [json_name = "WalkNo"];
   */
  WalkNo: string;
  /**
   * @generated from protobuf field: string Message = 4 [json_name = "Message"];
   */
  Message: string;
  /**
   * @generated from protobuf field: int32 SucssededBills = 5 [json_name = "SucssededBills"];
   */
  SucssededBills: number;
  /**
   * @generated from protobuf field: bool IsSucsseded = 6 [json_name = "IsSucsseded"];
   */
  IsSucsseded: boolean;
}
export interface MasDate {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   * RFC3339     = "2006-01-02T15:04:05Z07:00"
   *
   * @generated from protobuf field: string datetime = 1;
   */
  datetime: string; // RFC3339
}
export interface HistoryRequest {
  /**
   * @generated from protobuf field: int32 StationNo = 1 [json_name = "StationNo"];
   */
  StationNo: number;
  /**
   * @generated from protobuf field: optional string Custkey = 2 [json_name = "Custkey"];
   */
  Custkey?: string;
  /**
   * @generated from protobuf field: optional int32 UserId = 3 [json_name = "UserId"];
   */
  UserId?: number;
  /**
   * @generated from protobuf field: optional central.types.MasDate StartDate = 4 [json_name = "StartDate"];
   */
  StartDate?: MasDate;
  /**
   * @generated from protobuf field: optional central.types.MasDate EndDate = 5 [json_name = "EndDate"];
   */
  EndDate?: MasDate;
  /**
   * @generated from protobuf field: int32 PageSize = 6 [json_name = "PageSize"];
   */
  PageSize: number;
  /**
   * @generated from protobuf field: int32 PageIndex = 7 [json_name = "PageIndex"];
   */
  PageIndex: number;
}

export interface MasDateTime {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   * RFC3339     = "2006-01-02T15:04:05Z07:00"
   *
   * @generated from protobuf field: string datetime = 1;
   */
  datetime: string; // RFC3339
}
export interface PullRequestMode {
  /**
   * @generated from protobuf enum value: PullRequestModeNew = 0;
   */
  PullRequestModeNew: 0;
  /**
   * @generated from protobuf enum value: PullRequestModeUpdate = 1;
   */
  PullRequestModeUpdate: 1;
}
export interface PullStatmentsReq {
  /**
   * @generated from protobuf field: optional int32 StationNo = 1 [json_name = "StationNo"];
   */
  StationNo?: number;
  /**
   * @generated from protobuf field: string Billgroup = 2 [json_name = "Billgroup"];
   */
  Billgroup: string;
  /**
   * @generated from protobuf field: string BookNo = 3 [json_name = "BookNo"];
   */
  BookNo: string;
  /**
   * @generated from protobuf field: string WalkNo = 4 [json_name = "WalkNo"];
   */
  WalkNo: string;
  /**
   * @generated from protobuf field: optional central.types.MasDate StartDate = 5 [json_name = "StartDate"];
   */
  StartDate?: MasDate;
  /**
   * @generated from protobuf field: optional central.types.MasDate EndDate = 6 [json_name = "EndDate"];
   */
  EndDate?: MasDate;
  /**
   * @generated from protobuf field: optional string UserId = 7 [json_name = "UserId"];
   */
  UserId?: string;
  /**
   * @generated from protobuf field: optional string Custkey = 8 [json_name = "Custkey"];
   */
  Custkey?: string;
  /**
   * @generated from protobuf field: optional micromas.PullRequestMode Mode = 9 [json_name = "Mode"];
   */
  Mode?: PullRequestMode;
  /**
   * @generated from protobuf field: optional bool WithCollectedBill = 10 [json_name = "WithCollectedBill"];
   */
  WithCollectedBill?: boolean;
}
export interface TableProcess {
  /**
   * @generated from protobuf field: string TableName = 1 [json_name = "TableName"];
   */
  TableName: string;
  /**
   * @generated from protobuf field: int64 Inserted = 2 [json_name = "Inserted"];
   */
  Inserted: string;
  /**
   * @generated from protobuf field: string Deleted = 3 [json_name = "Deleted"];
   */
  Deleted: string;
  /**
   * @generated from protobuf field: string Updated = 4 [json_name = "Updated"];
   */
  Updated: string;
}
export interface PullStatmentsReply {
  /**
   * @generated from protobuf field: bool HasError = 1 [json_name = "HasError"];
   */
  HasError: boolean;
  /**
   * @generated from protobuf field: string Message = 2 [json_name = "Message"];
   */
  Message: string;
  /**
   * @generated from protobuf field: optional central.types.MasDateTime ProcessStartTime = 4 [json_name = "ProcessStartTime"];
   */
  ProcessStartTime?: MasDateTime;
  /**
   * @generated from protobuf field: optional central.types.MasDateTime ProcessEndTime = 5 [json_name = "ProcessEndTime"];
   */
  ProcessEndTime?: MasDateTime;
  /**
   * @generated from protobuf field: optional micromas.PullStatmentsReq Request = 6 [json_name = "Request"];
   */
  Request?: PullStatmentsReq;
  /**
   * @generated from protobuf field: repeated micromas.ProcessWalk SusccsedWalks = 7 [json_name = "SusccsedWalks"];
   */
  SusccsedWalks: ProcessWalk[];
  /**
   * @generated from protobuf field: repeated micromas.ProcessWalk FailedWalks = 8 [json_name = "FailedWalks"];
   */
  FailedWalks: ProcessWalk[];
  /**
   * @generated from protobuf field: repeated micromas.TableProcess TableProceses = 9 [json_name = "TableProceses"];
   */
  TableProceses: TableProcess[];
  /**
   * @generated from protobuf field: string Billgroup = 10 [json_name = "Billgroup"];
   */
  Billgroup: string;
  /**
   * @generated from protobuf field: bool IS_Walk = 11 [json_name = "ISWalk"];
   */
  IS_Walk: boolean;
}
export interface HistoryReply {
  /**
   * @generated from protobuf field: repeated micromas.PullStatmentsReply PullStatments = 1 [json_name = "PullStatments"];
   */
  PullStatments: PullStatmentsReply[];
  /**
   * @generated from protobuf field: int64 TOTAL_COUNT = 2 [json_name = "TOTALCOUNT"];
   */
  TOTAL_COUNT: string;
}
export interface IModalsProps {
  walks: ProcessWalk[];
  open: boolean;
  handleClose: () => void;
}

export interface IFailledWalksModalProps {
  FailedWalks: ProcessWalk[];
}
export interface Imodals {
  openModalSuccess?: boolean;
  openModalFailed?: boolean;
}
