import { DELETEIDREQ, UPDATEDATA, UPDATEDATAREQ } from '../entities/survey/updatingData';

export interface IUpdatingDataRepo {
  getUpdatingData: () => Promise<UPDATEDATA[]>;
  addUpdatingData: (req: UPDATEDATA) => Promise<void>;
  updateUpdatingData: (req: UPDATEDATAREQ) => Promise<void>;
  deleteUpdatingData: (req: DELETEIDREQ) => Promise<void>;
  GetRecord(req: DELETEIDREQ): Promise<boolean>

}
