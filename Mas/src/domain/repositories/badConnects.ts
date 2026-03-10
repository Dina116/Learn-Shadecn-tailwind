import { BADCONN, IDREQ, UPDATEBADCONNREQ } from '../entities/survey/badConnect';

export interface IBadConnectsRepo {
  getBadConnects: () => Promise<BADCONN[]>;
  updateBadConnects: (req: UPDATEBADCONNREQ) => Promise<void>;
  addBadConnects: (req: BADCONN) => Promise<void>;
  deleteBadConnects: (req: IDREQ) => Promise<void>;
  GetRecord(req: IDREQ): Promise<void>
  BadConnExists(req: IDREQ): Promise<boolean>
}
