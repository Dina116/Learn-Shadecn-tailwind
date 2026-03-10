// import { BaseApi } from '@/app/httpclient/base';
// import {
//   BADCONN,
//   IDREQ,
//   UPDATEBADCONNREQ,
// } from '@/domain/entities/survey/badConnect';
// import { IBadConnectsRepo } from '@/domain/repositories/badConnects';
// import { IServiceConfig } from '@/domain/service';
// import { BADCONNApi } from '../contracts/badDonn';

// import { BaseApi } from "../../app/httpclient/base";
// import type { BADCONN, UPDATEBADCONNREQ, IDREQ } from "../../domain/entities/survey/badConnect";
// import type { IBadConnectsRepo } from "../../domain/repositories/badConnects";
// import type { IServiceConfig } from "../../domain/service";
import type { BADCONN, UPDATEBADCONNREQ, IDREQ } from "../../../domain/entities/survey/badConnect";
import type { IBadConnectsRepo } from "../../../domain/repositories/badConnects";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { BADCONNApi } from "../contracts/badDonn";

export class HttpBadConnectsRepo extends BaseApi implements IBadConnectsRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/BadConn/`;
    super(baseurl, config.headers);
  }

  async getBadConnects(): Promise<BADCONN[]> {
    const res: BADCONNApi[] = await this.httpClient.Get('Get');
    return res.map((item) => {
      if (item) {
        const obj: BADCONN = {
          id: item.ID,
          bookNo: item.BOOK_NO,
          walkNo: item.WALK_NO,
          connType: item.CONN_TYPE as number,
          notes: item.NOTES,
          lat: item.LAT as number,
          lng: item.LNG as number,
          syncSt: item.SYNC_ST as number,
          surname: item.SURNAME,
          noFloors: item.NO_FLOORS as number,
          deviceId: item.DEVICE_ID,
          deviceConnid: item.DEVICE_CONNID,
          stampUser: item.STAMP_USER,
          stampDate: String(item.STAMP_DATE),
          status: String(item.STATUS),
          locationSource: item.LOCATION_SOURCE as number,
          locationDate: item.LOCATION_DATE as string,
          accurecy: item.ACCURECY as number,
        };
        return obj;
      }
        return {} as BADCONN;
    });
  }

  async updateBadConnects(req: UPDATEBADCONNREQ): Promise<void> {
    const res = {
      ID: req.data.id,
      BOOK_NO: req.data.bookNo,
      WALK_NO: req.data.walkNo,
      CONN_TYPE: req.data.connType,
      NOTES: req.data.notes,
      LAT: req.data.lat,
      LNG: req.data.lng,
      SYNC_ST: req.data.syncSt,
      SURNAME: req.data.surname,
      NO_FLOORS: req.data.noFloors,
      DEVICE_ID: req.data.deviceId,
      DEVICE_CONNID: req.data.deviceConnid,
      STAMP_USER: req.data.stampUser,
      STAMP_DATE: req.data.stampDate,
      STATUS: Number(req.data.status),
      LOCATION_SOURCE: req.data.locationSource,
      LOCATION_DATE: req.data.locationDate,
      ACCURECY: req.data.accurecy,
    };
    await this.httpClient.Put('Put', res, { id: req.id });
    console.log(res);
  }

  async addBadConnects(req: BADCONN): Promise<void> {
    const data = {
      ID: req.id,
      BOOK_NO: req.bookNo,
      WALK_NO: req.walkNo,
      CONN_TYPE: req.connType,
      NOTES: req.notes,
      LAT: req.lat,
      LNG: req.lng,
      SYNC_ST: req.syncSt,
      SURNAME: req.surname,
      NO_FLOORS: req.noFloors,
      DEVICE_ID: req.deviceId,
      DEVICE_CONNID: req.deviceConnid,
      STAMP_USER: req.stampUser,
      STAMP_DATE: req.stampDate,
      STATUS: Number(req.status),
      LOCATION_SOURCE: req.locationSource,
      LOCATION_DATE: req.locationDate,
      ACCURECY: req.accurecy,
    };
    const response = await this.httpClient.Post('Post', data);
    console.log(response);
  }

  async deleteBadConnects(req: IDREQ): Promise<void> {
    const res = await this.httpClient.Delete('Delete', { id: String(req.id) });
    console.log(res);
  }

  async GetRecord(req: IDREQ): Promise<void> {
    const res = await this.httpClient.Get('GetRecord', req);
    console.log(res);
  }

  async BadConnExists(req: IDREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('BADCONN_Exists', req);
    return res;
  }
}
