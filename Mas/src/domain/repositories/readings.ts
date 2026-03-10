import {
  IModyfyReadingReq,
  IUpdateInfoReq,
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  OntherDataRequest,
  READING,
  IBill2masReq,
  REJECTPORTALREQ,
  READINGIMGHISTREQ,
} from '../entities/reading';

import { Odata } from '@/app/httpclient/odata';
import {
  CANCELPREPARETOALLREQ,
  IHHProcessResponceMessage,
  MAS2BILLINGREQ,
} from '../entities/hhProcessResponseMessage';

import { BCYCREQ, HHBCYC } from '../entities/hhBcyc';
import { GETMETERINFOREQ, HANDMHST } from '../entities/handMhSt';
import { PortalReadingRejection } from '@/app/repositories-impl/contracts/PortalReadingRejection';
import { GIZAMETER, GIZAMETERREQ } from '../entities/gizaMeter';
import {
  CONNDTLTARRIFAALLOC,
  GETCONNTARRIFAREQ,
  UPDATECONNTARRIFAREQ,
} from '../entities/connDtlTarifaAlloc';
import { READINGSTATUSITEM } from '../entities/readingstatusItem';
import { MAPLOCATION } from '../entities/mapLocation';
// import { READINGBULKITEMAPI } from '@/app/repositories-impl/contracts/readingBulkItem';
import { REOPENCLOSEDBILLGROUPREQ } from '../entities/billGroups';
import {
  ICustomerMeterReq,
  ICustomerMeters,
  IHandReadings,
  IHandReadingsReq,
} from '../entities/customerMeters';
// import { IMGS } from '../entities/extReading';

export interface IReadingRepo {
  // تعديل القراءات
  Reading: (
    req: IBillGroupBookWalk & OntherDataRequest & Odata,
  ) => Promise<READING[]>;
  ModifyReading: (req: IModyfyReadingReq) => Promise<IHHProcessResponceMessage>;
  GetConnTarifaAlloc: (
    req: GETCONNTARRIFAREQ,
  ) => Promise<CONNDTLTARRIFAALLOC[]>;
  UpdateConnTarifa: (
    req: UPDATECONNTARRIFAREQ,
  ) => Promise<CONNDTLTARRIFAALLOC[]>;
  RejectPortalReading: (req: REJECTPORTALREQ) => Promise<boolean>;
  AcceptPortalReading: (CUSTKEY: string) => Promise<boolean>;
  CancelReadings: (
    req: IBillGroupBookWalk,
  ) => Promise<IHHProcessResponceMessage>;
  CancelPrepearToDevice: (
    req: IBillGroupBookWalk,
  ) => Promise<IHHProcessResponceMessage>;
  CloseInDevice: (
    req: IBillGroupBookWalk & { readed?: number },
  ) => Promise<IHHProcessResponceMessage>;
  ReOpenClosedInDevice: (
    req: IBillGroupBookWalk,
  ) => Promise<IHHProcessResponceMessage>;
  ReOpenClosededBillgroup: (req: REOPENCLOSEDBILLGROUPREQ) => Promise<number>;
  Bcyc: (req: BCYCREQ) => Promise<HHBCYC[]>;
  // صفحه معالجه البيانات
  getMeterInfo: (req: GETMETERINFOREQ) => Promise<HANDMHST>;
  updateMeterInfo: (req: IUpdateInfoReq) => Promise<boolean>;
  getCustomerInfo: (req: Odata) => Promise<HANDMHST[]>;
  // // لوحة التحكم الريسيه
  Billing2Mas(req: IBill2masReq): Promise<IHHProcessResponceMessage>;
  CloseRWalkInDevice(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage>;
  CloseWalkRoute(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage>;
  GizaMeters(req: GIZAMETERREQ): Promise<GIZAMETER[]>;
  // /////////////////
  Mas2Billing(req: MAS2BILLINGREQ): Promise<IHHProcessResponceMessage>;
  UpdateCustomerLocation(
    req: IBillGroupBookWalk & { user: number },
  ): Promise<IHHProcessResponceMessage>;
  GetReadingsStatusByBookNo(): Promise<READINGSTATUSITEM[]>;
  GetLocationReadingDescepancy(): Promise<MAPLOCATION[]>;
  CancelPrepearToDeviceAll(
    req: CANCELPREPARETOALLREQ,
  ): Promise<IHHProcessResponceMessage>;
  CancelReadingsAll(
    req: CANCELPREPARETOALLREQ,
  ): Promise<IHHProcessResponceMessage>;
  ModifyReadingBulk(
    req: IModyfyReadingReq[],
  ): Promise<Record<string, IHHProcessResponceMessage>>;
  ReadingImageHistory: (req: READINGIMGHISTREQ) => Promise<Array<string>>;
  ReadingImage(req: READINGIMGHISTREQ): Promise<string>;

  Get(req: Odata): Promise<HANDMHST[]>;

  appendMimType(
    req: PortalReadingRejection & { base64: string },
  ): Promise<string>;

  // تعديل وصف مسار قراءة
  GetCustomerMeters(req: ICustomerMeterReq): Promise<ICustomerMeters[]>;
  UpdateCustomerMeter(req: ICustomerMeters): Promise<IHHProcessResponceMessage>;
  GetHandReadings(req: IHandReadingsReq): Promise<IHandReadings[]>;
}
