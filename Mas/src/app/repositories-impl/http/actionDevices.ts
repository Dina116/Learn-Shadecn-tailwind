// /* eslint-disable @typescript-eslint/brace-style */
// import { BaseApi } from '@/app/httpclient/base';
// import {
//   ACTIONS,
//   DELETEACTIONDEVICEREQ,
//   UPDATEACTIONDEVICEREQ,
// } from '@/domain/entities/systemMangement/action';
// import { IServiceConfig } from '@/domain/service';
// import { ACTION } from '../contracts/ACTION';
// import { IActionDevicesRepo } from '@/domain/repositories/actionDevices';

// import { BaseApi } from "../../app/httpclient/base";
// import type { ACTIONS, UPDATEACTIONDEVICEREQ, DELETEACTIONDEVICEREQ } from "../../domain/entities/systemMangement/action";
// import type { IActionDevicesRepo } from "../../domain/repositories/actionDevices";
// import type { IServiceConfig } from "../../domain/service";
import type { ACTIONS, UPDATEACTIONDEVICEREQ, DELETEACTIONDEVICEREQ } from "../../../domain/entities/systemMangement/action";
import type { IActionDevicesRepo } from "../../../domain/repositories/actionDevices";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { ACTION } from "../contracts/ACTION";

interface Iresponse {
  message: string;
}
export class HttpActionDevicesRepo
  extends BaseApi
  implements IActionDevicesRepo
{
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Action/`;
    super(baseurl, config.headers);
  }

  async getActionDevices(): Promise<ACTIONS[]> {
    const res: ACTION[] = await this.httpClient.Get('Get');
    return (
      res?.map((item) => {
        const obj: ACTIONS = {
          id: item.ACTION_ID,
          fullName: item.DESCRIPTION,
        };
        return obj;
      }) || []
    );
  }

  async updateActionDevices(req: UPDATEACTIONDEVICEREQ): Promise<Iresponse> {
    const tempreq = {
      ACTION_ID: req.data?.id,
      DESCRIPTION: req.data?.fullName,
    };
    const res: Iresponse = await this.httpClient.Put('Put', tempreq, {
      id: req.id,
    });
    console.log(tempreq);
    return res || ({} as Iresponse);
  }

  async addActionDevices(req: ACTIONS): Promise<Iresponse> {
    const tempreq = {
      ACTION_ID: req.id,
      DESCRIPTION: req.fullName,
    };
    const res: Iresponse = await this.httpClient.Post('Post', tempreq);
    console.log(tempreq);
    return res || ({} as Iresponse);
  }

  async deleteActionDevices(req: DELETEACTIONDEVICEREQ): Promise<Iresponse> {
    const res: Iresponse = await this.httpClient.Delete('Delete', req);
    console.log(res);
    return res || ({} as Iresponse);
  }
}
