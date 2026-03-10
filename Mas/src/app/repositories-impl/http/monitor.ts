// import { BaseApi } from '@/app/httpclient/base';

import type { HHBCYC } from "../../../domain/entities/hhBcyc";
import type { PROCESS } from "../../../domain/entities/process";
import type { IMonitorRepo } from "../../../domain/repositories/monitor";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { HHBCYC } from "../../domain/entities/hhBcyc";
// import type { PROCESS } from "../../domain/entities/process";
// import type { IMonitorRepo } from "../../domain/repositories/monitor";
// import type { IServiceConfig } from "../../domain/service";

// import { IServiceConfig } from '@/domain/service';
// import { IMonitorRepo } from '@/domain/repositories/monitor';
// import { HHBCYC } from '@/domain/entities/hhBcyc';
// import { PROCESS } from '@/domain/entities/process';

export class HttpMonitorRepo extends BaseApi implements IMonitorRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }Monitor/`;
    super(baseurl, config.headers);
  }

  async Processes(): Promise<PROCESS[]> {
    const res: PROCESS[] = await this.httpClient.Get('Processes');
    return res;
  }

  async HhStatus(): Promise<HHBCYC[]> {
    const res:HHBCYC[] = await this.httpClient.Get('HhStatus');
    return res;
  }
}
