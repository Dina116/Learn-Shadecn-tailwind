import { IBillGroupBookWalkBilng } from '../entities/reading';
import { ADDPAYTAXPORTALREQ, GETSTATUSREQ, TAX } from '../entities/tax';

export interface ITaxRepo {
  AllowTaxPortal: (req: IBillGroupBookWalkBilng) => Promise<TAX>;
  GetStatus: (req: GETSTATUSREQ) => Promise<boolean>;
  AddPaymentTaxPortal: (req: ADDPAYTAXPORTALREQ) => Promise<boolean>;
}
