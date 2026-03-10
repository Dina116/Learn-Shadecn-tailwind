import { ADDDEVICELOCREQ, DELETEDEVICELOCREQ, DEVICELOCATION, UPDATEDEVICELOCATIONREQ } from '../entities/deviceLocation';

export interface IDevicesLocationRepo {
  getDevicesLocation: () => Promise<DEVICELOCATION[]>;
  updateDevicesLocation: (req: UPDATEDEVICELOCATIONREQ) => Promise<void>;
  addDevicesLocation: (req:ADDDEVICELOCREQ) => Promise<void>;
  deleteDevicesLocation: (req: DELETEDEVICELOCREQ) => Promise<void>;
}
