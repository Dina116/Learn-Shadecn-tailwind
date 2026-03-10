/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/brace-style */
// import { BaseApi } from '@/app/httpclient/base';
// import {
//   CUSTMODDATA,
//   GETRECALCMODIFYINVICEREQ,
// } from '@/domain/entities/custModData';
// import { IReCalcModifyInvoices } from '@/domain/repositories/reCalcMod';
// import { IServiceConfig } from '@/domain/service';
// import { CustModDataApi } from '../contracts/CustModData';
// import { METERCONDITION } from '@/domain/entities/meterCondition';
// import { METERCONDITIONAPI } from '../contracts/meterCondition';
// import { METERSIZEAPI } from '../contracts/meterSize';
// import { METERSIZE } from '@/domain/entities/meterSize';
// import { HHProcessResponceMessageApi } from '../contracts/hh-process-response-message';
// import { IHHProcessResponceMessage } from '@/domain/entities/hhProcessResponseMessage';
// import { CTGS } from '@/domain/entities/systemMangement/cTG';
// import { CTG } from '../contracts/cTG';
// import {
//   FILLRECALCREQAPI,
//   FILLRECALCRESAPI,
//   MODIFYRECALCDATAAPI,
//   MODIFYRECALCREQAPI,
// } from '../contracts/recalcModifyInvoices';

// import { BaseApi } from "../../app/httpclient/base";
// import type { CUSTMODDATA, GETRECALCMODIFYINVICEREQ } from "../../domain/entities/custModData";
// import type { IHHProcessResponceMessage } from "../../domain/entities/hhProcessResponseMessage";
// import type { METERCONDITION } from "../../domain/entities/meterCondition";
// import type { METERSIZE } from "../../domain/entities/meterSize";
// import type { CTGS } from "../../domain/entities/systemMangement/cTG";
// import type { IReCalcModifyInvoices } from "../../domain/repositories/reCalcMod";
// import type { IServiceConfig } from "../../domain/service";
import type { GETRECALCMODIFYINVICEREQ, CUSTMODDATA } from "../../../domain/entities/custModData";
import type { IHHProcessResponceMessage } from "../../../domain/entities/hhProcessResponseMessage";
import type { METERCONDITION } from "../../../domain/entities/meterCondition";
import type { METERSIZE } from "../../../domain/entities/meterSize";
import type { CTGS } from "../../../domain/entities/systemMangement/cTG";
import type { IReCalcModifyInvoices } from "../../../domain/repositories/reCalcMod";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { CTG } from "../contracts/cTG";
import type { CustModDataApi } from "../contracts/CustModData";
import type { HHProcessResponceMessageApi } from "../contracts/hh-process-response-message";
import type { METERCONDITIONAPI } from "../contracts/meterCondition";
import type { METERSIZEAPI } from "../contracts/meterSize";
import type { FILLRECALCREQAPI, FILLRECALCRESAPI, MODIFYRECALCDATAAPI, MODIFYRECALCREQAPI } from "../contracts/recalcModifyInvoices";

export class HttpReCalcModiIncoicesRepo
  extends BaseApi
  implements IReCalcModifyInvoices
{
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/ReCalc/`;
    super(baseurl, config.headers);
  }

  async GetRecalModifyInvoices(req: GETRECALCMODIFYINVICEREQ): Promise<void> {
    const res = await this.httpClient.Get('FillRecal', req);
    console.log(res);
  }

  async GetCustomerData(custkey: string): Promise<CUSTMODDATA> {
    const res: CustModDataApi = await this.httpClient.Get('GetCustomerData', {
      custkey,
    });
    return res;
  }

  async LoadMeterConditions(): Promise<METERCONDITION[]> {
    const res: METERCONDITIONAPI[] =
      await this.httpClient.Get('MeterConditions');
    return res.map((item: METERCONDITIONAPI) => {
      const obj: METERCONDITION = { code: item.CODE, describe: item.DESCRIBE };
      return obj;
    });
  }

  async LoadMeterSize(): Promise<METERSIZE[]> {
    const res: METERSIZEAPI[] = await this.httpClient.Get('MeterSizes');
    return res.map((item: METERSIZEAPI) => {
      const obj: METERSIZE = { code: item.CODE, describe: item.DESCRIBE };
      return obj;
    });
  }

  async PostCustomerData(req: CUSTMODDATA): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Put(
      'PostCustomerData',
      req,
      {
        id: req.CUSTKEY,
      },
    );
    return res;
  }

  async FillRecal(req: FILLRECALCREQAPI): Promise<FILLRECALCRESAPI> {
    const res: FILLRECALCRESAPI = await this.httpClient.Get('FillRecal', req);
    return res;
  }

  async ModifyAndExecute(
    req: MODIFYRECALCREQAPI,
    data: MODIFYRECALCDATAAPI,
  ): Promise<FILLRECALCRESAPI> {
    const res: FILLRECALCRESAPI = await this.httpClient.Put(
      'ModifyAndExecute',
      data,
      req,
    );
    return res;
  }

  async getCTG(): Promise<CTGS[]> {
    const res: CTG[] = await this.httpClient.Get('GetCtg'); // review the res when execute it
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
}
