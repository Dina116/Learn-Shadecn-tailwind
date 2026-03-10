export interface DEVICES {
  deviceId: string;
  assignTo?: number;
  note: string;
  id: number;
  opStatus: number | null;
  stationId: number;
  simNo: string;
  deviceStatus: number | null;
  company: string;
  deviceModel: string;
  os: number | null;
  osVersion: string;
  batteryNo: string;
  purchaseDate: string;
  warrenty: number | null;
  internetStart: string | null;
  internetRenew: number | null;
  cradle: string;
  isActive: boolean;
  fullName?: string;
}

export interface ADDDEVICEREQ {
  entity: DEVICES;
}
export interface UPDATEHHDEVICEREQ {
  id: number | string;
  entity: DEVICES;
}
export interface DELETEHHDEVICEREQ {
  id: number | string;
}
