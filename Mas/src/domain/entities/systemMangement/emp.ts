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
  deposits_qouta?:number
  closeReadingCycle?: boolean | null
  dashboard?:boolean | null
  closeCollectionCycle?:boolean | null
  allowOverPayment?: boolean | null;
  enableHhPrinting?: boolean | null;
  partialCollectionState? :number | null ;
 randomlyMeterPicturePercentage?:number | null ;
 dirCollection?:string | null ;
readingEstimPercent?:number | null ;
readinPercent?:number | null ;
dayReadingPercent?:number | null ;
depositDuration?:number | null ;
offlinePeriod?:number | null ;
billsCountAllowedOffline?:number | null ;
depositDurationExtraDays?:number | null ;
}

interface Other {
  hasUnPostiong?:boolean;
  collectorCount?:number

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
