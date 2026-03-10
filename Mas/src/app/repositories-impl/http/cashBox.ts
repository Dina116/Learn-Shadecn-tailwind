// import { BaseApi, toISOString } from '@/app/httpclient/base';
// import { IServiceConfig } from '@/domain/service';
// import { ICashBoxRepo } from '@/domain/repositories/cashBox';
// import {
//   CASHBOX,
//   DELETECASHBOXREQ,
//   SESSIONRECEIPTS,
//   UBDATECHASHBOXREQ,
// } from '@/domain/entities/systemMangement/cashBox';
// import { CASHBOXApi } from '../contracts/cashbox';
// import {
//   ADDNEWRECEIPTREQ,
//   ADDNRWRECEIPTRES,
//   CASHBOXSESSION,
//   CLOSESESSIONREQ,
//   // SESSIONRECEIPTSREQ,
//   STARTNEWSEESIONREQ,
// } from '@/domain/entities/cashboxSession';
// import {
//   // ADDNRWRECEIPTRESApi,
//   CASHBOXSESSIONApi,
//   SESSIONRECEIPTSAPI,
//   STARTNEWSESSIONRESApi,
// } from '../contracts/cashboxSession';
// import {
//   CollectionDestributionItm,
//   UNPOSTEDReCEIPTSByBILLINGDATEREQ,
// } from '@/domain/entities/collection';
// import { CollectionDestributionItem } from '../contracts/collectionDestributionItem';

// import { BaseApi, toISOString } from "../../app/httpclient/base";
// import type { CASHBOXSESSION, STARTNEWSEESIONREQ, CLOSESESSIONREQ, ADDNEWRECEIPTREQ, ADDNRWRECEIPTRES } from "../../domain/entities/cashboxSession";
// import type { UNPOSTEDReCEIPTSByBILLINGDATEREQ, CollectionDestributionItm } from "../../domain/entities/collection";
// import type { CASHBOX, UBDATECHASHBOXREQ, DELETECASHBOXREQ, SESSIONRECEIPTS } from "../../domain/entities/systemMangement/cashBox";
// import type { ICashBoxRepo } from "../../domain/repositories/cashBox";
// import type { IServiceConfig } from "../../domain/service";
import type { CASHBOXSESSION, STARTNEWSEESIONREQ, CLOSESESSIONREQ, ADDNEWRECEIPTREQ, ADDNRWRECEIPTRES } from "../../../domain/entities/cashboxSession";
import type { UNPOSTEDReCEIPTSByBILLINGDATEREQ, CollectionDestributionItm } from "../../../domain/entities/collection";
import type { CASHBOX, UBDATECHASHBOXREQ, DELETECASHBOXREQ, SESSIONRECEIPTS } from "../../../domain/entities/systemMangement/cashBox";
import type { ICashBoxRepo } from "../../../domain/repositories/cashBox";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi, toISOString } from "../../httpclient/base";
import type { CASHBOXApi } from "../contracts/cashbox";
import type { CASHBOXSESSIONApi, STARTNEWSESSIONRESApi, SESSIONRECEIPTSAPI } from "../contracts/cashboxSession";
import type { CollectionDestributionItem } from "../contracts/collectionDestributionItem";

export interface Iresponse {
  message: string;
}
export class HttpCashBoxRepo extends BaseApi implements ICashBoxRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/CashBox/`;
    super(baseurl, config.headers);
  }

  async GetCashBox(): Promise<CASHBOX[]> {
    const res: CASHBOXApi[] = await this.httpClient.Get('Get');
    return res;
  }

  async UpdateChashBox(req: UBDATECHASHBOXREQ): Promise<Iresponse> {
    const res: Iresponse = await this.httpClient.Put('Put', req.data, {
      id: req.id,
    });
    return res;
  }

  async AddCashBox(req: CASHBOX): Promise<Iresponse> {
    const res: Iresponse = await this.httpClient.Post('Post', req);
    return res;
  }

  async DeleteCashBox(req: DELETECASHBOXREQ): Promise<Iresponse> {
    const res: Iresponse = await this.httpClient.Delete('Delete', req);
    console.log(res);
    return res;
  }

  async GetMySession(): Promise<CASHBOXSESSION> {
    const res: CASHBOXSESSIONApi = await this.httpClient.Get('GetMySession');
    return res;
  }

  async GetUnPostedReceiptsGroupByBilngDate(
    req: UNPOSTEDReCEIPTSByBILLINGDATEREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnPostedReceiptsGroupByBilngDate',
      req,
    );
    return res;
  }

  async StartNewSession(req: STARTNEWSEESIONREQ): Promise<CASHBOXSESSION> {
    const res: STARTNEWSESSIONRESApi = await this.httpClient.Get(
      'StartNewSession',
      req,
    );
    console.log(res);
    return res;
  }

  async CloseSession(req: CLOSESESSIONREQ): Promise<string> {
    req.depositDate = toISOString(req.depositDate as string);

    const res: string = await this.httpClient.Get('CloseSession', req);
    console.log(res);
    return res;
  }

  async AddNewReceipt(req: ADDNEWRECEIPTREQ): Promise<ADDNRWRECEIPTRES> {
    req.cashDepositDate = toISOString(req.cashDepositDate as string);
    const res: ADDNRWRECEIPTRES = await this.httpClient.Get(
      'AddNewReceipt',
      req,
    );
    console.log(res);
    return res;
  }

  async SessionReceipts(): Promise<SESSIONRECEIPTS[]> {
    const res: SESSIONRECEIPTSAPI[] =
      await this.httpClient.Get('SessionReceipts');
    console.log(res);
    return res;
  }
}
