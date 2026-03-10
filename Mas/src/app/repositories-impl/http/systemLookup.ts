// import { BaseApi } from '@/app/httpclient/base';
// import { IServiceConfig } from '@/domain/service';
// import { ISystemLookupRepo } from '@/domain/repositories/systemLookup';
// import { ISSUEtYPE } from '@/domain/entities/issueType';

import type { ISSUEtYPE } from "../../../domain/entities/issueType";
import type { ISystemLookupRepo } from "../../../domain/repositories/systemLookup";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { ISSUEtYPE } from "../../domain/entities/issueType";
// import type { ISystemLookupRepo } from "../../domain/repositories/systemLookup";
// import type { IServiceConfig } from "../../domain/service";

export class HttpSystemLookupRepo extends BaseApi implements ISystemLookupRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/System/`;
    super(baseurl, config.headers);
  }

  async getCompanyName(): Promise<string> {
    const res: string = await this.httpClient.Get('CompanyName');
    return res;
  }

  async getIsHeadQuarter(): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('IS_HEAD_QUARTER');
    if (res) return res;
    return false;
  }

  async getIssueType(): Promise<ISSUEtYPE> {
    const code: number = await this.httpClient.Get('IssueType');
    let issueDesc = 'غير معرف';
    if (code === 1) {
      issueDesc = 'فردي';
    } else {
      issueDesc = 'تراكمي';
    }
    if (code === 2) {
      issueDesc = 'غير معرف';
    }
    const obj: ISSUEtYPE = {
      IssueType: code,
      IssueTypeDescription: issueDesc,
    };
    return obj;
  }
}
