import { ADDDEVICEREGISTERREQ, DELETEDEVICEREGISTERREQ, DEVICESREGISTER, UPDATEDEVICEREGISTERREQ } from '../entities/devicesRegister';

export interface IDevicesRegisterRepo {
  getDevicesRegister: () => Promise<DEVICESREGISTER[]>;
  updateDevicesRegister: (req: UPDATEDEVICEREGISTERREQ) => Promise<void>;
  addDevicesRegister: (req: ADDDEVICEREGISTERREQ) => Promise<void>;
  deleteDevicesRegister: (req: DELETEDEVICEREGISTERREQ) => Promise<void>;
}
