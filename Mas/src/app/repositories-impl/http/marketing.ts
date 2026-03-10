// import { BaseApi } from '@/app/httpclient/base';
// import { IServiceConfig } from '@/domain/service';
// import { IMarketingRepo } from '@/domain/repositories/marketing';
// import {
//   ADDMARKRTINGPLANEREQ,
//   GETMARKETINGPLANREQ,
//   MARKETINGRESULT,
// } from '@/domain/entities/marketing';
// import {
//   MarketingPlansListApi,
//   MarketingResultApi,
// } from '../contracts/marketing';

// import { BaseApi } from "../../app/httpclient/base";
// import type { ADDMARKRTINGPLANEREQ, GETMARKETINGPLANREQ, MARKETINGRESULT } from "../../domain/entities/marketing";
// import type { IMarketingRepo } from "../../domain/repositories/marketing";
// import type { IServiceConfig } from "../../domain/service";
import type { ADDMARKRTINGPLANEREQ, GETMARKETINGPLANREQ, MARKETINGRESULT } from "../../../domain/entities/marketing";
import type { IMarketingRepo } from "../../../domain/repositories/marketing";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { MarketingPlansListApi, MarketingResultApi } from "../contracts/marketing";

// const prepareData = (req: ADDMARKRTINGPLANEREQ): MarketingPlanApi => {
//   const obj: MarketingPlanApi = {
//     NO_MONTHES: req?.noMonthes,
//     REF_AMOUNT: req?.refAmount,
//     BILLGROUP: req?.billgroups,
//     DESCRIPTION: req?.description,
//   };
//   return obj;
// };

export class HttpMarketingRepo extends BaseApi implements IMarketingRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Marketing/`;
    super(baseurl, config.headers);
  }

  async AddMarketingPlan(req: ADDMARKRTINGPLANEREQ): Promise<void> {
    // const req: MarketingPlanApi = prepareData(_req);
    const res: void = await this.httpClient.Get('AddMarketingPlanConfig', req);
    return res;
  }

  async GetMarketingPlansList(): Promise<MarketingPlansListApi[]> {
    // const req: MarketingPlanApi = prepareData(_req);
    const res: MarketingPlansListApi[] =
      await this.httpClient.Get('MarketingPlansList');
    return res;
  }

  async GetMarketingPlan(req: GETMARKETINGPLANREQ): Promise<MARKETINGRESULT> {
    console.log(req);
    const res: MarketingResultApi = await this.httpClient.Get(
      `GetMarketingPlan?bilngDate=${req?.bilngDate}&noMonthes=${req?.noMonthes}&refAmount=${req?.refAmount}&target=${req?.target}&rejected=${req?.rejected}&plan_id=${req?.plan_id}&`,
    );
    return res;
  }

  async ApplyMarketingPlan(req: MARKETINGRESULT): Promise<void> {
    const res = await this.httpClient.Post('ApplyMarketingPlan', req, {});
    console.log(res);
  }
}
