// import { BaseApi, toISOString } from '@/app/httpclient/base';
// import { Odata } from '@/app/httpclient/odata';
// import {
//   IModyfyReadingReq,
//   IUpdateInfoReq,
//   IBillGroupBookWalk,
//   IBillGroupBookWalkBilng,
//   OntherDataRequest,
//   READING,
//   IBill2masReq,
//   REJECTPORTALREQ,
//   READINGIMGHISTREQ,
// } from '@/domain/entities/reading';
// import { IReadingRepo } from '@/domain/repositories/readings';

// import { BaseApi, toISOString } from "../../app/httpclient/base";
// import type { Odata } from "../../app/httpclient/odata";
// import type { REOPENCLOSEDBILLGROUPREQ } from "../../domain/entities/billGroups";
// import type { GETCONNTARRIFAREQ, CONNDTLTARRIFAALLOC, UPDATECONNTARRIFAREQ } from "../../domain/entities/connDtlTarifaAlloc";
// import type { ICustomerMeterReq, ICustomerMeters, IHandReadingsReq, IHandReadings } from "../../domain/entities/customerMeters";
// import type { GIZAMETERREQ, GIZAMETER } from "../../domain/entities/gizaMeter";
// import type { GETMETERINFOREQ, HANDMHST } from "../../domain/entities/handMhSt";
// import type { HHBCYC } from "../../domain/entities/hhBcyc";
// import type { IHHProcessResponceMessage, MAS2BILLINGREQ, CANCELPREPARETOALLREQ } from "../../domain/entities/hhProcessResponseMessage";
// import type { MAPLOCATION } from "../../domain/entities/mapLocation";
// import type { IBillGroupBookWalk, OntherDataRequest, READING, IModyfyReadingReq, REJECTPORTALREQ, IUpdateInfoReq, IBill2masReq, IBillGroupBookWalkBilng, READINGIMGHISTREQ } from "../../domain/entities/reading";
// import type { READINGSTATUSITEM } from "../../domain/entities/readingstatusItem";
// import type { IReadingRepo } from "../../domain/repositories/readings";
// import type { IServiceConfig } from "../../domain/service";
import type { REOPENCLOSEDBILLGROUPREQ } from "../../../domain/entities/billGroups";
import type { GETCONNTARRIFAREQ, CONNDTLTARRIFAALLOC, UPDATECONNTARRIFAREQ } from "../../../domain/entities/connDtlTarifaAlloc";
import type { ICustomerMeterReq, ICustomerMeters, IHandReadingsReq, IHandReadings } from "../../../domain/entities/customerMeters";
import type { GIZAMETERREQ, GIZAMETER } from "../../../domain/entities/gizaMeter";
import type { GETMETERINFOREQ, HANDMHST } from "../../../domain/entities/handMhSt";
import type { HHBCYC } from "../../../domain/entities/hhBcyc";
import type { IHHProcessResponceMessage, MAS2BILLINGREQ, CANCELPREPARETOALLREQ } from "../../../domain/entities/hhProcessResponseMessage";
import type { MAPLOCATION } from "../../../domain/entities/mapLocation";
import type { IBillGroupBookWalk, OntherDataRequest, READING, IModyfyReadingReq, REJECTPORTALREQ, IUpdateInfoReq, IBill2masReq, IBillGroupBookWalkBilng, READINGIMGHISTREQ } from "../../../domain/entities/reading";
import type { READINGSTATUSITEM } from "../../../domain/entities/readingstatusItem";
import type { IReadingRepo } from "../../../domain/repositories/readings";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi, toISOString } from "../../httpclient/base";
import type { Odata } from "../../httpclient/odata";
import type { CONNDTLTARIFFALLOCApi } from "../contracts/connDetailTaarifaAlloc";
import type { GIZAMETERAPI } from "../contracts/gizaMeter";
import type { HHBCYCApi } from "../contracts/hh-bcyc";
import type { HHProcessResponceMessageApi } from "../contracts/hh-process-response-message";
import type { PortalReadingRejection } from "../contracts/PortalReadingRejection";
import type { READINGSTATUSITEMAPI } from "../contracts/readingStatusItem";

// import { IServiceConfig } from '@/domain/service';
// // import { ReADINGRESPONSEAPI } from '../contracts/ReadingResponse';
// import {
//   CANCELPREPARETOALLREQ,
//   IHHProcessResponceMessage,
//   MAS2BILLINGREQ,
// } from '@/domain/entities/hhProcessResponseMessage';
// import { HHProcessResponceMessageApi } from '../contracts/hh-process-response-message';
// import { HHBCYC } from '@/domain/entities/hhBcyc';
// import { HHBCYCApi } from '../contracts/hh-bcyc';
// import { GETMETERINFOREQ, HANDMHST } from '@/domain/entities/handMhSt';
// // import { HANDMHSTApi } from '../contracts/handMhSt';
// import { PortalReadingRejection } from '../contracts/PortalReadingRejection';
// import { GIZAMETER, GIZAMETERREQ } from '@/domain/entities/gizaMeter';
// import { GIZAMETERAPI } from '../contracts/gizaMeter';
// import { CONNDTLTARIFFALLOCApi } from '../contracts/connDetailTaarifaAlloc';
// import {
//   CONNDTLTARRIFAALLOC,
//   GETCONNTARRIFAREQ,
//   UPDATECONNTARRIFAREQ,
// } from '@/domain/entities/connDtlTarifaAlloc';
// import { READINGSTATUSITEM } from '@/domain/entities/readingstatusItem';
// import { READINGSTATUSITEMAPI } from '../contracts/readingStatusItem';
// import { MAPLOCATION } from '@/domain/entities/mapLocation';
// import { REOPENCLOSEDBILLGROUPREQ } from '@/domain/entities/billGroups';
// import {
//   ICustomerMeterReq,
//   ICustomerMeters,
//   IHandReadings,
//   IHandReadingsReq,
// } from '@/domain/entities/customerMeters';
// import { IMGS } from '@/domain/entities/extReading';
// import { IMGSAPI } from '../contracts/extReading';

export class HttpReadingRepo extends BaseApi implements IReadingRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Reading/`;
    super(baseurl, config.headers);
  }

  async Reading(
    req: IBillGroupBookWalk & OntherDataRequest & Odata,
  ): Promise<READING[]> {
    const u: READING[] = await this.httpClient.Get('Reading', {
      EMP_ID: req.empId,
      NO_METER: req.noMeter,
      PORTAL: req.portal,
      BILLGROUP: req.BILLGROUP,
      WALK_NO: req.WALK_NO,
      BOOK_NO: req.BOOK_NO,
      $filter: req.$filter,
    });

    return u;
  }

  async ModifyReading(
    req: IModyfyReadingReq,
  ): Promise<IHHProcessResponceMessage> {
    console.log(req);

    const u: HHProcessResponceMessageApi = await this.httpClient.Get(
      'ModifyReading',
      {
        ...req,
        reading:
          req?.reading !== undefined || req?.reading !== null
            ? req?.reading
            : '',
        empid: req.empid ? req.empid : 'undefined',
      },
    );
    return u;
  }

  async GetConnTarifaAlloc(
    req: GETCONNTARRIFAREQ,
  ): Promise<CONNDTLTARRIFAALLOC[]> {
    const u: CONNDTLTARIFFALLOCApi[] = await this.httpClient.Get(
      'GetConnTariffAlloc',
      { ...req },
    );
    return u;
  }

  async CancelReadings(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelReadings',
      {
        ...req,
        BOOK_NO: req.BOOK_NO ? req.BOOK_NO : 'null',
        WALK_NO: req.WALK_NO ? req.WALK_NO : 'null',
      },
    );
    console.log(res);
    return res;
  }

  async CancelPrepearToDevice(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelPrepearToDevice',
      {
        ...req,
        BOOK_NO: req.BOOK_NO ? req.BOOK_NO : 'null',
        WALK_NO: req.WALK_NO ? req.WALK_NO : 'null',
      },
    );
    console.log(res);
    return res;
  }

  async CloseInDevice(
    req: IBillGroupBookWalk & { readed?: number },
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseInDevice',
      req,
    );
    return res;
  }

  async Bcyc(req: { deviceid: string; empid?: number }): Promise<HHBCYC[]> {
    const res: HHBCYCApi[] = await this.httpClient.Get('Bcyc', req);
    return res;
  }
  // تعديل القراءات

  async UpdateConnTarifa(
    req: UPDATECONNTARRIFAREQ,
  ): Promise<CONNDTLTARRIFAALLOC[]> {
    const u: CONNDTLTARIFFALLOCApi[] = await this.httpClient.Post(
      'UpdateConnTariffAlloc',
      req.source,
      req,
    );
    console.log(u);
    return u;
  }

  async AcceptPortalReading(CUSTKEY: string): Promise<boolean> {
    const res: boolean = await this.httpClient.Post('AcceptPortalReading', {
      CUSTKEY,
    });
    return res;
  }

  async RejectPortalReading(req: REJECTPORTALREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Put(
      'RejectPortalReading',
      {
        REASON: req.REASON,
      },
      { CUSTKEY: req.CUSTKEY },
    );
    return res;
  }

  // صفحه معالجه البيانات
  async getMeterInfo(req: GETMETERINFOREQ): Promise<HANDMHST> {
    const res: HANDMHST = await this.httpClient.Get('GetMeterInfo', req);
    return res;
  }

  async updateMeterInfo(req: IUpdateInfoReq): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('UpdateMeterInfo', req);
    return res;
  }

  async getCustomerInfo(req: Odata): Promise<HANDMHST[]> {
    const res: HANDMHST[] = await this.httpClient.Get('Get', req);
    return res;
  }

  // // لوحة التحكم الريسيه
  async Billing2Mas(req: IBill2masReq): Promise<IHHProcessResponceMessage> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'Billing2Mas',
      req,
    );
    return res;
  }

  async CloseRWalkInDevice(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseInDevice',
      req,
    );
    return res;
  }

  async ReOpenClosedInDevice(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'ReOpenClosedInDevice',
      req,
    );
    return res;
  }

  async ReOpenClosededBillgroup(
    req: REOPENCLOSEDBILLGROUPREQ,
  ): Promise<number> {
    const res: number = await this.httpClient.Get(
      'ReOpenClosededBillgroup',
      req,
    );
    return res;
  }

  async CloseWalkRoute(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseWalkRoute',
      req,
    );
    return res;
  }

  // العدادات الجديدة
  async GizaMeters(req: GIZAMETERREQ): Promise<GIZAMETER[]> {
    req.from = toISOString(req.from as string);
    req.to = toISOString(req.to as string);
    const res: GIZAMETERAPI[] = await this.httpClient.Get('GizaMeters', req);
    return res;
  }

  async Mas2Billing(req: MAS2BILLINGREQ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'Mas2Billing',
      req,
    );
    return res;
  }

  async UpdateCustomerLocation(
    req: IBillGroupBookWalk & { user: number },
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'UpdateCustomerLocation',
      req,
    );
    return res;
  }

  async GetReadingsStatusByBookNo(): Promise<READINGSTATUSITEM[]> {
    const res: READINGSTATUSITEMAPI[] = await this.httpClient.Get(
      'GetReadingsStatusByBookNo',
    );
    return res;
  }

  async GetLocationReadingDescepancy(): Promise<MAPLOCATION[]> {
    const res: MAPLOCATION[] = await this.httpClient.Get(
      'GetLocationReadingDescepancy',
    );
    return res;
  }

  async CancelPrepearToDeviceAll(
    req: CANCELPREPARETOALLREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelPrepearToDeviceAll',
      req,
    );
    return res;
  }

  async CancelReadingsAll(
    req: CANCELPREPARETOALLREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelReadingsAll',
      req,
    );
    return res;
  }

  async ModifyReadingBulk(
    req: IModyfyReadingReq[],
  ): Promise<Record<string, IHHProcessResponceMessage>> {
    console.log(req, 'req in http');
    const res: Record<string, IHHProcessResponceMessage> =
      await this.httpClient.Post('ModifyReadingBulkNew', req);
    return res;
  }

  async Get(req: Odata): Promise<HANDMHST[]> {
    const res: HANDMHST[] = await this.httpClient.Get('Get', req);
    return res;
  }

  async ReadingImage(req: READINGIMGHISTREQ): Promise<string> {
    const res: string = await this.httpClient.Get('ReadingImage', req);
    return res;
  }

  async ReadingImageHistory(req: READINGIMGHISTREQ): Promise<string[]> {
    const res: string[] = await this.httpClient.Get('ReadingImageHistory', req);
    return res;
  }

  async appendMimType(
    req: PortalReadingRejection & { base64: string },
  ): Promise<string> {
    const res: string = await this.httpClient.Get('appendMimType', req);
    return res;
  }
  //   const getResult = (u) => {
  //     const res: IHHProcessResponceMessage = {
  //       ...u,
  //       // Payment: Payment(u.Payment),
  //     };
  //     return res

  // تعديل وصف مسار قراءة

  async GetCustomerMeters(req: ICustomerMeterReq): Promise<ICustomerMeters[]> {
    const res: ICustomerMeters[] = await this.httpClient.Get(
      'GetCustomerMeters',
      req,
    );
    return res;
  }

  async UpdateCustomerMeter(
    req: ICustomerMeters,
  ): Promise<IHHProcessResponceMessage> {
    const res: IHHProcessResponceMessage = await this.httpClient.Put(
      'UpdateCustomerMeter',
      req,
    );
    return res;
  }

  async GetHandReadings(req: IHandReadingsReq): Promise<IHandReadings[]> {
    const res: IHandReadings[] = await this.httpClient.Get(
      'GetHandReadings',
      req,
    );
    return res;
  }
}
