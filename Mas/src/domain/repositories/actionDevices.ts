import { ACTIONS, DELETEACTIONDEVICEREQ, UPDATEACTIONDEVICEREQ } from '../entities/systemMangement/action';

export interface IActionDevicesRepo {
  getActionDevices: () => Promise<ACTIONS[]>;
  addActionDevices: (req: ACTIONS) => Promise<{ message: string }>;
  updateActionDevices: (req:UPDATEACTIONDEVICEREQ) => Promise<{ message: string }>;
  deleteActionDevices: (req: DELETEACTIONDEVICEREQ) => Promise<{ message: string }>;
}
