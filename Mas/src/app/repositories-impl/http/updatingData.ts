// import { BaseApi } from '@/app/httpclient/base';
// import { DELETEIDREQ, UPDATEDATA, UPDATEDATAREQ } from '@/domain/entities/survey/updatingData';
// import { IUpdatingDataRepo } from '@/domain/repositories/updatingData';
// import { IServiceConfig } from '@/domain/service';

import type { UPDATEDATA, UPDATEDATAREQ, DELETEIDREQ } from "../../../domain/entities/survey/updatingData";
import type { IUpdatingDataRepo } from "../../../domain/repositories/updatingData";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { DELETEIDREQ, UPDATEDATA, UPDATEDATAREQ } from "../../domain/entities/survey/updatingData";
// import type { IUpdatingDataRepo } from "../../domain/repositories/updatingData";
// import type { IServiceConfig } from "../../domain/service";

export class HttpUpdatingDataRepo extends BaseApi implements IUpdatingDataRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/CustomerNote/`;
    super(baseurl, config.headers);
  }

  async getUpdatingData(): Promise<UPDATEDATA[]> {
    const res: UPDATEDATA[] = await this.httpClient.Get('Get');

    return res;
  }

  async updateUpdatingData(req: UPDATEDATAREQ): Promise<void> {
    const res = await this.httpClient.Put('Put', req);
    console.log(res);
  }

  async addUpdatingData(req: UPDATEDATA): Promise<void> {
    const res = await this.httpClient.Post('Post', req);
    console.log(res);
  }

  async deleteUpdatingData(req: DELETEIDREQ): Promise<void> {
    const res = await this.httpClient.Delete('Delete', req);
    console.log(res);
  }

  async GetRecord(req: DELETEIDREQ): Promise<boolean> {
    const res:boolean = await this.httpClient.Get('GetRecord', req);
    return res;
  }
}
