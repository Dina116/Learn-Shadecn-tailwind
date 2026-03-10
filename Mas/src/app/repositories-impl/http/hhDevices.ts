// import { IHHDevicesRepo } from '@/domain/repositories/hHDevices';
// import { DEVICE } from '../contracts/device';
// import { IServiceConfig } from '@/domain/service';
// import { EntityApi } from '@/app/httpclient/entity';
// import {
//   ADDDEVICEREQ,
//   DELETEHHDEVICEREQ,
//   DEVICES,
//   UPDATEHHDEVICEREQ,
// } from '@/domain/entities/systemMangement/devices';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { ADDDEVICEREQ, DELETEHHDEVICEREQ, DEVICES, UPDATEHHDEVICEREQ } from "../../domain/entities/systemMangement/devices";
// import type { IHHDevicesRepo } from "../../domain/repositories/hHDevices";
// import type { IServiceConfig } from "../../domain/service";
import type { ADDDEVICEREQ, DELETEHHDEVICEREQ, DEVICES, UPDATEHHDEVICEREQ } from "../../../domain/entities/systemMangement/devices";
import type { IHHDevicesRepo } from "../../../domain/repositories/hHDevices";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { DEVICE } from "../contracts/device";

const getResult = (item: DEVICE) => {
  const obj: DEVICES = {
    deviceId: item.DEVICE_ID,
    note: item.NOTE,
    id: item.ID,
    opStatus: item.OP_STATUS,
    deviceStatus: item.STATUS,
    simNo: item.SIM_NO,
    company: item.COMPANY,
    os: item.OS,
    deviceModel: item.MODEL,
    osVersion: item.OS_VERSION,
    batteryNo: item.BATTERY_NO,
    warrenty: item.WARRENTY,
    internetStart: item.INTERNET_START,
    internetRenew: item.INTERNET_RENEW,
    cradle: item.CRADLE,
    assignTo: 0,
    stationId: 0,
    purchaseDate: item.PURCHASE_DATE as string,
    isActive: false,
    fullName: '',
  };
  return obj;
};
export class HttpHHDevicesRepo
  extends EntityApi<DEVICE>
  implements IHHDevicesRepo {
  constructor(config: IServiceConfig) {
    const baseUrl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Devices/`;
    super(baseUrl, config.headers);
  }

  async getHHDevices(): Promise<DEVICES[]> {
    const res: DEVICE[] = await this.Get();

    return res.map((item) => getResult(item));
  }

  async updateHHDevices(req: UPDATEHHDEVICEREQ): Promise<void> {
    const res = {
      DEVICE_ID: req.entity.deviceId,
      NOTE: req.entity.note,
      ID: req.entity.id,
      OP_STATUS: req.entity.opStatus,
      STATUS: req.entity.deviceStatus,
      SIM_NO: req.entity.simNo,
      COMPANY: req.entity.company,
      OS: req.entity.os,
      MODEL: req.entity.deviceModel,
      OS_VERSION: req.entity.osVersion,
      BATTERY_NO: req.entity.batteryNo,
      PURCHASE_DATE: req.entity.purchaseDate,
      WARRENTY: req.entity.warrenty,
      INTERNET_START: req.entity.internetStart,
      INTERNET_RENEW: req.entity.internetRenew,
      CRADLE: req.entity.cradle,
    };
    await this.Put({ entity: res, id: req.id });
  }

  async addHHDevices(req: ADDDEVICEREQ): Promise<void> {
    const res = {
      DEVICE_ID: req.entity.deviceId,
      NOTE: req.entity.note,
      ID: req.entity.id,
      OP_STATUS: req.entity.opStatus,
      STATUS: req.entity.deviceStatus,
      SIM_NO: req.entity.simNo,
      COMPANY: req.entity.company,
      OS: req.entity.os,
      MODEL: req.entity.deviceModel,
      OS_VERSION: req.entity.osVersion,
      BATTERY_NO: req.entity.batteryNo,
      PURCHASE_DATE: req.entity.purchaseDate,
      WARRENTY: req.entity.warrenty,
      INTERNET_START: req.entity.internetStart,
      INTERNET_RENEW: req.entity.internetRenew,
      CRADLE: req.entity.cradle,
    };
    await this.Post({ entity: res });
    console.log(res);
  }

  async deleteHHDevices(req: DELETEHHDEVICEREQ): Promise<DEVICES> {
    const res: DEVICE | void = await this.Delete({ id: req.id });
    console.log(res);
    const temp: DEVICES = {
      id: res?.ID as number,
      deviceId: res?.DEVICE_ID as string,
      note: '',
      opStatus: null,
      stationId: 0,
      simNo: '',
      deviceStatus: null,
      company: '',
      deviceModel: '',
      os: null,
      osVersion: '',
      batteryNo: '',
      purchaseDate: '',
      warrenty: null,
      internetStart: null,
      internetRenew: null,
      cradle: '',
      isActive: false,
    };
    return temp;
  }

  async UnAssigned(): Promise<DEVICES[]> {
    const res: DEVICE[] = await this.httpClient.Get('UnAssigned');
    return res.map((item: DEVICE) => getResult(item));
  }

  async FreeDevices(): Promise<DEVICES[]> {
    const res: DEVICE[] = await this.httpClient.Get('FreeDevices');
    return res.map((item: DEVICE) => getResult(item));
  }
}
