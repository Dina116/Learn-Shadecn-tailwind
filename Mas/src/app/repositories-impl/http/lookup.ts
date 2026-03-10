/* eslint-disable @typescript-eslint/no-explicit-any */
// import { BaseApi } from '@/app/httpclient/base';
// import { CTGS } from '@/domain/entities/systemMangement/cTG';
// import { ILookupRepo } from '@/domain/repositories/lookup';
// import { IServiceConfig } from '@/domain/service';
// import { CTG } from '../contracts/cTG';
// import { ConsumptionTypes } from '../contracts/Lookups';
// import { BILLGROUPS } from '@/domain/entities/billGroups';
// import { OPSTATUS } from '@/domain/entities/opStatus';
// import { BILLSTATUS } from '@/domain/entities/billStatus';

// import { BaseApi } from "../../app/httpclient/base";
// import type { BILLGROUPS } from "../../domain/entities/billGroups";
// import type { BILLSTATUS } from "../../domain/entities/billStatus";
// import type { OPSTATUS } from "../../domain/entities/opStatus";
// import type { CTGS } from "../../domain/entities/systemMangement/cTG";
// import type { ILookupRepo } from "../../domain/repositories/lookup";
// import type { IServiceConfig } from "../../domain/service";
import type { BILLGROUPS } from "../../../domain/entities/billGroups";
import type { BILLSTATUS } from "../../../domain/entities/billStatus";
import type { OPSTATUS } from "../../../domain/entities/opStatus";
import type { CTGS } from "../../../domain/entities/systemMangement/cTG";
import type { ILookupRepo } from "../../../domain/repositories/lookup";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { CTG } from "../contracts/cTG";
import type { ConsumptionTypes } from "../contracts/Lookups";

export class HttpLookupRepo extends BaseApi implements ILookupRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/LU/`;
    super(baseurl, config.headers);
  }

  async getCTGS(): Promise<CTGS[]> {
    const res: CTG[] = await this.httpClient.Get('ConsumptionGroupTypes/Get');
    return res.map((item) => {
      const obj: CTGS = {
        ctypeId: item.C_TYPE_ID,
        ctypegrpId: item.CTYPEGRP_ID,
        description: item.DESCRIPTION,
        weight: item.WEIGHT,
      };
      return obj;
    });
  }

  async getConsumptionTypes(): Promise<ConsumptionTypes[]> {
    const res: ConsumptionTypes[] =
      await this.httpClient.Get('ConsumptionTypes');
    return res;
  }

  async getEmpTypes(): Promise<Array<any>> {
    const res: Array<any> = await this.httpClient.Get('EmpTypes');
    return res; // مش عارفه الريسبونس
  }

  async getBillGroups(): Promise<BILLGROUPS[]> {
    const res: BILLGROUPS[] = await this.httpClient.Get('BillGroups');
    return res || [];
  }

  async getOpStatus(): Promise<OPSTATUS[]> {
    const res: OPSTATUS[] = await this.httpClient.Get('OpStatus');
    return res;
  }

  async getBillStatus(): Promise<BILLSTATUS[]> {
    const res: BILLSTATUS[] = await this.httpClient.Get('BillStates');

    return res;
  }

  async getReadingNote(): Promise<Array<any>> {
    const res: [] = await this.httpClient.Get('GetReadingNote');
    return res;
  }
}
