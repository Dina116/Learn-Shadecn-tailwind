import { ADDDEVICEREQ, DELETEHHDEVICEREQ, DEVICES, UPDATEHHDEVICEREQ } from '../entities/systemMangement/devices';

export interface IHHDevicesRepo {
  getHHDevices: () => Promise<DEVICES[]>;
  addHHDevices: (req: ADDDEVICEREQ) => Promise<void>;
  updateHHDevices: (req: UPDATEHHDEVICEREQ) => Promise<void>;
  deleteHHDevices: (req: DELETEHHDEVICEREQ) => Promise<DEVICES>;
  UnAssigned(): Promise<DEVICES[]>
  FreeDevices(): Promise<DEVICES[]>
}
