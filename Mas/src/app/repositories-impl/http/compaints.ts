// import { BaseApi } from '@/app/httpclient/base';
// import { COMPLAINTIDREQ, COMPLAINTS, UPDATECOMPLAINTREQ } from '@/domain/entities/survey/complaints';
// import { IComplaintsRepo } from '@/domain/repositories/complaints';
// import { IServiceConfig } from '@/domain/service';
// import { COMPLAINTAPI } from '../contracts/complaint';

// import { BaseApi } from "../../app/httpclient/base";
// import type { COMPLAINTS, UPDATECOMPLAINTREQ, COMPLAINTIDREQ } from "../../domain/entities/survey/complaints";
// import type { IComplaintsRepo } from "../../domain/repositories/complaints";
// import type { IServiceConfig } from "../../domain/service";
import type { COMPLAINTS, UPDATECOMPLAINTREQ, COMPLAINTIDREQ } from "../../../domain/entities/survey/complaints";
import type { IComplaintsRepo } from "../../../domain/repositories/complaints";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { COMPLAINTAPI } from "../contracts/complaint";

export class HttpComplaintsRepo extends BaseApi implements IComplaintsRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Complaints/`;
    super(baseurl, config.headers);
  }

  async getCompaints(): Promise<COMPLAINTS[]> {
    const res: COMPLAINTAPI[] = await this.httpClient.Get('Get');

    return res;
  }

  async updateCompaints(req: UPDATECOMPLAINTREQ): Promise<void> {
    const res = await this.httpClient.Put('Put', req);
    console.log(res);
  }

  async addCompaints(req: COMPLAINTS): Promise<void> {
    const res = await this.httpClient.Post('Post', req);
    console.log(res);
  }

  async deleteCompaints(req: COMPLAINTIDREQ): Promise<void> {
    const res = await this.httpClient.Delete('Delete', req);
    console.log(res);
  }

  async GetRecord(req: COMPLAINTIDREQ): Promise<void> {
    const res = this.httpClient.Get('GetRecord', req);
    console.log(res);
  }

  async DevicesExists(req: COMPLAINTIDREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('DEVICEExists', req);
    return res;
  }
}
