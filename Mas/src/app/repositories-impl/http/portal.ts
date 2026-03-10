// import { BaseApi } from '@/app/httpclient/base';

import type { PORTAL } from "../../../domain/entities/portal";
import type { IBillGroupBookWalk } from "../../../domain/entities/reading";
import type { IPortalRepo } from "../../../domain/repositories/portal";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { PORTAL } from "../../domain/entities/portal";
// import type { IBillGroupBookWalk } from "../../domain/entities/reading";
// import type { IPortalRepo } from "../../domain/repositories/portal";
// import type { IServiceConfig } from "../../domain/service";

// import { IServiceConfig } from '@/domain/service';
// import { IBillGroupBookWalk } from '@/domain/entities/reading';
// import { PORTAL } from '@/domain/entities/portal';
// import { IPortalRepo } from '@/domain/repositories/portal';

export class HttpPortalRepo extends BaseApi implements IPortalRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }Portal/`;
    super(baseurl, config.headers);
  }

  async PostDataToGate(req: IBillGroupBookWalk): Promise<PORTAL> {
    const res:PORTAL = await this.httpClient.Get('PostDataToGate', req);
    return res;
  }
}
