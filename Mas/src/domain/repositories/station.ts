import { ADDSTATIONREQ, DELETESTATIONREQ, STATIONS, UPDATESTATIONREQ } from '../entities/systemMangement/station';

export interface IStationRepo {
  addStation: (req: ADDSTATIONREQ) => void;
  getStations: () => Promise<STATIONS[]>;
  getCurrentStations:()=>Promise<STATIONS>
  updateStation: (req: UPDATESTATIONREQ) => void;
  deleteStation: (req: DELETESTATIONREQ) => void;
}
