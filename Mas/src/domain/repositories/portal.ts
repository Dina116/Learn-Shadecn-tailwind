import { PORTAL } from '../entities/portal';
import { IBillGroupBookWalk } from '../entities/reading';

export interface IPortalRepo {
  PostDataToGate(req: IBillGroupBookWalk): Promise<PORTAL>;
}
