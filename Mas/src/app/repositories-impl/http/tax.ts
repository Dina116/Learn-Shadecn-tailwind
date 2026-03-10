/* eslint-disable @typescript-eslint/no-explicit-any */
// import { BaseApi } from '@/app/httpclient/base';

import type { IBillGroupBookWalkBilng } from "../../../domain/entities/reading";
import type { TAX, GETSTATUSREQ, ADDPAYTAXPORTALREQ } from "../../../domain/entities/tax";
import type { ITaxRepo } from "../../../domain/repositories/tax";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";

// import { BaseApi } from "../../app/httpclient/base";
// import type { IBillGroupBookWalkBilng } from "../../domain/entities/reading";
// import type { ADDPAYTAXPORTALREQ, GETSTATUSREQ, TAX } from "../../domain/entities/tax";
// import type { ITaxRepo } from "../../domain/repositories/tax";
// import type { IServiceConfig } from "../../domain/service";

// import { IServiceConfig } from '@/domain/service';
// import { ITaxRepo } from '@/domain/repositories/tax';
// import { ADDPAYTAXPORTALREQ, GETSTATUSREQ, TAX } from '@/domain/entities/tax';
// import { IBillGroupBookWalkBilng } from '@/domain/entities/reading';

export class HttpTaxRepo extends BaseApi implements ITaxRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Tax/`;
    super(baseurl, config.headers);
  }

  async AllowTaxPortal(req: IBillGroupBookWalkBilng): Promise<TAX> {
    const res: TAX = await this.httpClient.Get('AllowTaxPortal', req);
    return res;
  }

  async GetStatus(req: GETSTATUSREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('GetStatus', req);
    return res;
  }

  async AddPaymentTaxPortal(req: ADDPAYTAXPORTALREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('AddPaymentTaxPortal', req);
    return res;
  }
}
