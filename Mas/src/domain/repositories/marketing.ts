import {
  ADDMARKRTINGPLANEREQ,
  GETMARKETINGPLANREQ,
  MARKETINGRESULT,
  MarketingPlansList,
} from '../entities/marketing';

export interface IMarketingRepo {
  AddMarketingPlan(_req: ADDMARKRTINGPLANEREQ): Promise<void>;
  GetMarketingPlansList(): Promise<MarketingPlansList[]>;
  GetMarketingPlan(req: GETMARKETINGPLANREQ): Promise<MARKETINGRESULT>;
  ApplyMarketingPlan(req: MARKETINGRESULT): Promise<void>;
}
