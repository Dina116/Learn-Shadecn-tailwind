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
