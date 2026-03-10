// import { EntityApi } from '@/app/httpclient/entity';
// import { IStationRepo } from '@/domain/repositories/station';
// import { IServiceConfig } from '@/domain/service';
// import { STATIONApi } from '../contracts/station';
// import {
//   ADDSTATIONREQ,
//   DELETESTATIONREQ,
//   STATIONS,
//   UPDATESTATIONREQ,
// } from '@/domain/entities/systemMangement/station';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { ADDSTATIONREQ, DELETESTATIONREQ, STATIONS, UPDATESTATIONREQ } from "../../domain/entities/systemMangement/station";
// import type { IStationRepo } from "../../domain/repositories/station";
// import type { IServiceConfig } from "../../domain/service";
import type { ADDSTATIONREQ, DELETESTATIONREQ, STATIONS, UPDATESTATIONREQ } from "../../../domain/entities/systemMangement/station";
import type { IStationRepo } from "../../../domain/repositories/station";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { STATIONApi } from "../contracts/station";

const getRes = (item: STATIONApi) => {
  const obj: STATIONS = {
    stationNo: item?.STATION_NO,
    stationName: item?.NAME,
    description: item?.DESCRIPTION,
    isHeadquarters: item?.IS_HEADQUARTERS as number,
    isMaintsite: item?.IS_MAINTSITE as number,
    isMrreading: item?.IS_MRREADING as number,
    isCservices: item?.IS_CSERVICES as number,
    isReceipting: item?.IS_RECEIPTING as number,
    ipAddress: item?.IP_ADDRESS,
    portNo: item?.PORT_NO as number,
    sectorCode: item?.SECTOR_CODE as number,
    sectorName: item?.SECTOR_NAME,
    stampDate: item?.STAMP_DATE as string,
    stampUser: item?.STAMP_USER,
    iscurrent: 0,
    dbStandalone: 0,
    dbAccess: 0,
    telWork: '',
    telFax: '',
    telEmail: '',
    telAhours: '',
    telCompl: '',
    lnAddress1: '',
    lnAddress2: '',
    lnAddress3: '',
    lnCity: '',
    lnPostal: '',
    workingMon: 0,
    workingTue: 0,
    workingWed: 0,
    workingThu: 0,
    workingFri: 0,
    workingSat: 0,
    workingSun: 0,
    overtimeMon: 0,
    overtimeTue: 0,
    overtimeWed: 0,
    overtimeThu: 0,
    overtimeFri: 0,
    overtimeSat: 0,
    overtimeSun: 0,
    siteMemo: '',
    maintsiteCode: 0,
    defaultwarehouse: 0,
    defaultdepot: 0,
    warehousesetting: 0,
    depotdsetting: 0,
    isDeleted: false,
  };
  return obj;
};
export class HTTPStationRepo
  extends EntityApi<STATIONApi>
  implements IStationRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Stations/`;
    super(baseurl, config.headers);
  }

  async getStations(): Promise<STATIONS[]> {
    const res: STATIONApi[] = await this.Get();

    return res.map((item: STATIONApi) => getRes(item));
  }

  async getCurrentStations(): Promise<STATIONS> {
    const res: STATIONApi = await this.httpClient.Get('Current');
    if (res) return getRes(res);
    return {} as STATIONS;
  }

  async updateStation(req: UPDATESTATIONREQ): Promise<void> {
    const res = {
      STATION_NO: req.entity.stationNo,
      NAME: req.entity.stationName,
      DESCRIPTION: req.entity.description,
      IS_HEADQUARTERS: req.entity.isHeadquarters,
      IS_MAINTSITE: req.entity.isMaintsite,
      IS_MRREADING: req.entity.isMrreading,
      IS_CSERVICES: req.entity.isCservices,
      IS_RECEIPTING: req.entity.isReceipting,
      IP_ADDRESS: req.entity.ipAddress,
      PORT_NO: req.entity.portNo,
      SECTOR_CODE: req.entity.sectorCode,
      SECTOR_NAME: req.entity.sectorName,
      STAMP_DATE: req.entity.stampDate,
      STAMP_USER: req.entity.stampUser,
    };
    await this.Put({ entity: res, id: req.id });
    console.log(res);
  }

  async addStation(req: ADDSTATIONREQ): Promise<void> {
    const res = {
      STATION_NO: req.entity.stationNo,
      NAME: req.entity.stationName,
      DESCRIPTION: req.entity.description,
      IS_HEADQUARTERS: req.entity.isHeadquarters,
      IS_MAINTSITE: req.entity.isMaintsite,
      IS_MRREADING: req.entity.isMrreading,
      IS_CSERVICES: req.entity.isCservices,
      IS_RECEIPTING: req.entity.isReceipting,
      IP_ADDRESS: req.entity.ipAddress,
      PORT_NO: req.entity.portNo,
      SECTOR_CODE: req.entity.sectorCode,
      SECTOR_NAME: req.entity.sectorName,
      STAMP_DATE: req.entity.stampDate,
      STAMP_USER: req.entity.stampUser,
    };
    await this.Post({ entity: res });
    console.log(res);
  }

  async deleteStation(req: DELETESTATIONREQ): Promise<void> {
    const res = await this.Delete(req);
    console.log(res);
  }
}
