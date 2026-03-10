import { CUSTKEYREQ } from '../entities/collection';
import { CUSTOMERINFORMATION } from '../entities/customerInformation';
import { SEARCHITEM, SEARCHREQMAS, SEARCHRES } from '../entities/searchItem';

export interface IQueryRepo {
  getListBills: (req: CUSTKEYREQ) => Promise<SEARCHITEM>;
  getFromBilling: (req: CUSTKEYREQ) => Promise<CUSTOMERINFORMATION>;
  getListReadingHistory: (req: CUSTKEYREQ) => Promise<SEARCHITEM[]>;
  onSearch: (req: SEARCHREQMAS) => Promise<SEARCHRES>;

}
