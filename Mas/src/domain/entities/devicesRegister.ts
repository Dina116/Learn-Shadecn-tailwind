export interface DEVICESREGISTER {
  ID: number;
  DEVICE_ID: string;
  ACTION_ID: number;
  ACTION_ENDDATE: string | null;
  ACTION_STARTDATE: string | null;
  ACTION_PERIOD: string;
  ACTION_BY: string;
  ACTION_RECOMMENDATION: string;
  ACTIION_FOLLOWUP: string;
  ACTION_COST: string;
  DESCRIPTION: string;
}

export interface UPDATEDEVICEREGISTERREQ {
  id: number | string;
  entity: DEVICESREGISTER;
}
export interface ADDDEVICEREGISTERREQ {
  entity: DEVICESREGISTER;
}
export interface DELETEDEVICEREGISTERREQ {
  id?: number | string;
}
