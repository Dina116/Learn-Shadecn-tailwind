// import {
//   ADDDEVICEREGISTERREQ,
//   DELETEDEVICEREGISTERREQ,
//   DEVICESREGISTER,
//   UPDATEDEVICEREGISTERREQ,
// } from '@/domain/entities/devicesRegister';
// import { IDevicesRegisterRepo } from '@/domain/repositories/devicesRegister';
// import { IServiceConfig } from '@/domain/service';
// import { DEVICEREGISTERApi } from '../contracts/deviceRegister';
// import { EntityApi } from '@/app/httpclient/entity';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { DEVICESREGISTER, UPDATEDEVICEREGISTERREQ, ADDDEVICEREGISTERREQ, DELETEDEVICEREGISTERREQ } from "../../domain/entities/devicesRegister";
// import type { IDevicesRegisterRepo } from "../../domain/repositories/devicesRegister";
// import type { IServiceConfig } from "../../domain/service";
import type { DEVICESREGISTER, UPDATEDEVICEREGISTERREQ, ADDDEVICEREGISTERREQ, DELETEDEVICEREGISTERREQ } from "../../../domain/entities/devicesRegister";
import type { IDevicesRegisterRepo } from "../../../domain/repositories/devicesRegister";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { DEVICEREGISTERApi } from "../contracts/deviceRegister";

export class HttpDevicesRegisterRepo
  extends EntityApi<DEVICEREGISTERApi>
  implements IDevicesRegisterRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/DeviceRegister/`;
    super(baseurl, config.headers);
  }

  async getDevicesRegister(): Promise<DEVICESREGISTER[]> {
    const res: DEVICESREGISTER[] = await this.Get();
    return res;
  }

  async updateDevicesRegister(req: UPDATEDEVICEREGISTERREQ): Promise<void> {
    const res = await this.Put(req);
    return res;
  }

  async addDevicesRegister(req: ADDDEVICEREGISTERREQ): Promise<void> {
    const res = await this.Post(req);
    return res;
  }

  async deleteDevicesRegister(req: DELETEDEVICEREGISTERREQ): Promise<void> {
    const res = await this.Delete(req);
    console.log(res);
  }
}
