/* eslint-disable @typescript-eslint/no-explicit-any */
// import { BaseApi } from '@/app/httpclient/base';
// import { Odata } from '@/app/httpclient/odata';
// import { CUSTOMERSEQ } from '@/domain/entities/customerSeq';
// import { ICustomerSeqRepo } from '@/domain/repositories/customerSeq';
// import { IServiceConfig } from '@/domain/service';
// import { SeqApi } from '../contracts/Seq';
// import { Ipostreq } from '@/domain/entities/collection';

// import { BaseApi } from "../../app/httpclient/base";
// import type { Odata } from "../../app/httpclient/odata";
// import type { Ipostreq } from "../../domain/entities/collection";
// import type { CUSTOMERSEQ } from "../../domain/entities/customerSeq";
// import type { ICustomerSeqRepo } from "../../domain/repositories/customerSeq";
// import type { IServiceConfig } from "../../domain/service";
import type { Ipostreq } from "../../../domain/entities/collection";
import type { CUSTOMERSEQ } from "../../../domain/entities/customerSeq";
import type { ICustomerSeqRepo } from "../../../domain/repositories/customerSeq";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { Odata } from "../../httpclient/odata";
import type { SeqApi } from "../contracts/Seq";

export class HttpCustomerSeqRepo extends BaseApi implements ICustomerSeqRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/CustomerSeq/`;
    super(baseurl, config.headers);
  }

  async getBookSeq(
    req: { bookno: string; walkno: string } & Odata,
  ): Promise<CUSTOMERSEQ[]> {
    const res: SeqApi[] = await this.httpClient.Get('BookSeq', req);
    return res;
  }

  async save(req: CUSTOMERSEQ[]): Promise<void> {
    const res = await this.httpClient.Post('Save', req);
    console.log(res);
  }

  async post(req: Ipostreq): Promise<boolean> {
    const url = `Post${req.act}`;
    const data: CUSTOMERSEQ[] = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    return this.httpClient.Post(url, data, obj);
  }

  async postC(req: Ipostreq): Promise<void> {
    const data = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    const res = await this.httpClient.Post('PostC', data, obj);
    console.log(res);
  }

  async postR(req: Ipostreq): Promise<void> {
    const data = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    const res = await this.httpClient.Post('PostR', data, obj);
    console.log(res);
  }

  async postHq(req: Ipostreq): Promise<void> {
    const data: CUSTOMERSEQ[] = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    const res = await this.httpClient.Post('PostToHq', data, obj);
    console.log(res);
  }

  async PostToHqR(req: Ipostreq): Promise<any[]> {
    const data: CUSTOMERSEQ[] = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    const res: any[] = await this.httpClient.Post('PostToHqR', data, obj);
    return res;
  }

  async PostToHqC(req: Ipostreq): Promise<any[]> {
    const data: CUSTOMERSEQ[] = req.seq;
    const obj = {
      bookno: `%27${req.bookno}%27`,
      walkno: `%27${req.walkno}%27`,
      save: req.save,
    };
    const res: any[] = await this.httpClient.Post('PostToHqC', data, obj);
    return res;
  }

  async SendToServer(req: Ipostreq): Promise<any[]> {
    const res: any[] = await this.httpClient.Post('SendToServer', req);
    return res;
  }
}
