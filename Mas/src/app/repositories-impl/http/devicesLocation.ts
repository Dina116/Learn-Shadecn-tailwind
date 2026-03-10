// import { IServiceConfig } from '@/domain/service';
// import { EntityApi } from '@/app/httpclient/entity';
// import { DEVICELOCATIONApi } from '../contracts/deviceLocation';
// import { ADDDEVICELOCREQ, DELETEDEVICELOCREQ, DEVICELOCATION, UPDATEDEVICELOCATIONREQ } from '@/domain/entities/deviceLocation';
// import { IDevicesLocationRepo } from '@/domain/repositories/devicesLocation';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { DEVICELOCATION, UPDATEDEVICELOCATIONREQ, ADDDEVICELOCREQ, DELETEDEVICELOCREQ } from "../../domain/entities/deviceLocation";
// import type { IDevicesLocationRepo } from "../../domain/repositories/devicesLocation";
// import type { IServiceConfig } from "../../domain/service";
import type { DEVICELOCATION, UPDATEDEVICELOCATIONREQ, ADDDEVICELOCREQ, DELETEDEVICELOCREQ } from "../../../domain/entities/deviceLocation";
import type { IDevicesLocationRepo } from "../../../domain/repositories/devicesLocation";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { DEVICELOCATIONApi } from "../contracts/deviceLocation";

export class HttpDevicesLocationRepo
  extends EntityApi<DEVICELOCATIONApi>
  implements IDevicesLocationRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/DeviceLocation/`;
    super(baseurl, config.headers);
  }

  async getDevicesLocation(): Promise<DEVICELOCATION[]> {
    const res: DEVICELOCATION[] = await this.Get();
    return res;
  }

  async updateDevicesLocation(req: UPDATEDEVICELOCATIONREQ): Promise<void> {
    const res = await this.Put(req);
    console.log(res);
  }

  async addDevicesLocation(req: ADDDEVICELOCREQ): Promise<void> {
    const res = await this.Post(req);
    console.log(res);
  }

  async deleteDevicesLocation(req: DELETEDEVICELOCREQ): Promise<void> {
    const res = await this.Delete(req);
    console.log(res);
  }
}
