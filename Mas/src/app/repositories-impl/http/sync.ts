// import { BaseApi } from '@/app/httpclient/base';

import type { SyncRepo } from "../../../domain/repositories/sync";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { SyncRepo } from "../../domain/repositories/sync";
// import type { IServiceConfig } from "../../domain/service";

// import { IServiceConfig } from '@/domain/service';
// import { SyncRepo } from '@/domain/repositories/sync';

export class HttpSyncRepo extends BaseApi implements SyncRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }Sync/`;
    super(baseurl, config.headers);
  }

  async GetSyncList(): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('GetSyncList');
    return res;
  }
}
