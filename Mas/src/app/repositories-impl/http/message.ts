// import { IServiceConfig } from '@/domain/service';
// import { EntityApi } from '@/app/httpclient/entity';
// import { IMessageRepo } from '@/domain/repositories/message';
// import { MESSAGEApi } from '../contracts/message';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { IMessageRepo } from "../../domain/repositories/message";
// import type { IServiceConfig } from "../../domain/service";
import type { IMessageRepo } from "../../../domain/repositories/message";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { MESSAGEApi } from "../contracts/message";

export class HttpMessgeRepo
  extends EntityApi<MESSAGEApi>
  implements IMessageRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }Message/`;
    super(baseurl, config.headers);
  }

  async ConnectedDevices(): Promise<string[]> {
    const res:string[] = await this.httpClient.Get('ConnectedDevices');
    return res;
}
}
