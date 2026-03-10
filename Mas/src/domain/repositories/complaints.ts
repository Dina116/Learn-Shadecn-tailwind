import { COMPLAINTIDREQ, COMPLAINTS, UPDATECOMPLAINTREQ } from '../entities/survey/complaints';

export interface IComplaintsRepo {
  getCompaints: () => Promise<COMPLAINTS[]>;
  updateCompaints: (req: UPDATECOMPLAINTREQ) => Promise<void>;
  addCompaints: (req: COMPLAINTS) => Promise<void>;
  deleteCompaints: (req:COMPLAINTIDREQ) => Promise<void>;
  GetRecord(req: COMPLAINTIDREQ): Promise<void>
  DevicesExists(req: COMPLAINTIDREQ): Promise<boolean>
}
