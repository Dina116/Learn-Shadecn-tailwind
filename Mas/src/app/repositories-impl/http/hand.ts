// import { IServiceConfig } from '@/domain/service';
// import { EntityApi } from '@/app/httpclient/entity';
// import { HANDMHSTApi } from '../contracts/handMhSt';
// import { HANDMHST } from '@/domain/entities/handMhSt';
// import { IHandRepo } from '@/domain/repositories/hand';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { HANDMHST } from "../../domain/entities/handMhSt";
// import type { IHandRepo } from "../../domain/repositories/hand";
// import type { IServiceConfig } from "../../domain/service";
import type { HANDMHST } from "../../../domain/entities/handMhSt";
import type { IHandRepo } from "../../../domain/repositories/hand";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { HANDMHSTApi } from "../contracts/hasnMhSt";


export class HttpHandRepo extends EntityApi<HANDMHSTApi> implements IHandRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }/Hand/`;
    super(baseurl, config.headers);
  }

  async getHandMhst(): Promise<HANDMHST[]> {
    const res: HANDMHST[] = await this.Get();
    return res;
  }
}
