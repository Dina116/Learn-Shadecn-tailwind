// import { EMPApi } from '../contracts/emp';
// import { EntityApi } from '@/app/httpclient/entity';
// import {
//   ADDEMPREQ,
//   DELETEEMPREQ,
//   EMPS,
//   UPDATEEMPREQ,
// } from '@/domain/entities/systemMangement/emp';
// import { IEmpRepo } from '@/domain/repositories/emps';
// import { IServiceConfig } from '@/domain/service';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { ADDEMPREQ, DELETEEMPREQ, EMPS, UPDATEEMPREQ } from "../../domain/entities/systemMangement/emp";
// import type { IEmpRepo } from "../../domain/repositories/emps";
// import type { IServiceConfig } from "../../domain/service";
import type { ADDEMPREQ, DELETEEMPREQ, EMPS, UPDATEEMPREQ } from "../../../domain/entities/systemMangement/emp";
import type { IEmpRepo } from "../../../domain/repositories/emps";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { EMPApi } from "../contracts/emp";

const prepareData = (req: { entity: EMPS }) => {
  const obj: EMPApi = {
    FULL_NAME: req?.entity?.fullName as string,
    BRANCH_ID: Number(req.entity?.branchId),
    DEVICE_ID: req.entity?.deviceId as string,
    DISABLED: req.entity.disabled || null,
    USER_NAME: req.entity?.userName as string,
    PASSWORD: req.entity?.password as string,
    MOBILE1: req.entity?.mobile1 as string,
    MOBILE2: req.entity?.mobile2 as string,
    NID: req.entity.nid as string,
    ADDRESS: req.entity.address as string,
    ALlOW_CANCEL: req.entity.allowCancel || null,
    ALLOW_MODIFY_READING: req.entity.allowModifyReading || null,
    BILNG_EMP_ID: req.entity.bilngEmpId as string,
    CASHER: req.entity.casher || null,
    COLLECTION: req.entity.collection || null,
    DATA_ADMIN: req.entity.dataAdmin || null,
    DATA_ENTRY: req.entity.dataEntry || null,
    EMAIL: req.entity.email as string,
    EMP_TYPE: req.entity.empType || null,
    ID: req.entity.id as number,
    IS_STORE_MAN: req.entity.isStoreMan || null,
    KEEPER: req.entity.keeper || null,
    MARKETING: req.entity.marketing || null,
    NOTES: req.entity.notes as string,
    ORIGINAL_STATION: req.entity.originalStation as string,
    READING: req.entity.reading || null,
    REPORTING_VIEWER: req.entity.reportingViewer || null,
    SYS_ADMIN: req.entity.sysAdmin || null,
    TEL: req.entity.tel as string,
    VALUE1: req.entity.value1 as string,
    VALUE2: req.entity.value2 as string,
    FLAGE1: req.entity.flage1 || null,
    FLAGE2: req.entity.flage2 || null,
    QUOTA: req.entity.quota || null,
    DEPOSITS_QUOTA: req.entity.deposits_qouta || null,
    DASHBOARD: req.entity.dashboard || null,
    CLOSE_READING_CYCLE: req.entity.closeReadingCycle || null,
    CLOSE_COLLECTION_CYCLE: req.entity.closeCollectionCycle || null,
    ALLOW_OVER_PAYMENT: req.entity.allowOverPayment || null,
    ENABLE_HH_PRINTING: req.entity.enableHhPrinting || null,
    PARTIAL_COLLECTION_STATE: req.entity.partialCollectionState || null,
    RANDOMLY_METER_PICTURE_PERCENT:
      req.entity.randomlyMeterPicturePercentage || null,
    DIR_COLLECTION:
      req.entity.dirCollection === '0' ? '0' : req.entity.dirCollection || null,
    READING_ESTIM_PERCENT: req.entity.readingEstimPercent || null,
    READING_PERCENT: req.entity.readinPercent || null,
    DAY_READING_PERCENT: req.entity.dayReadingPercent || null,
    DEPOSIT_DURATION: req.entity.depositDuration || null,
    OFFLINE_PERIOD: req.entity.offlinePeriod || null,
    BILLS_COUNT_ALLOWED_OFFLINE: req.entity.billsCountAllowedOffline || null,
    DEPOSIT_DURATION_EXTRA_DAYES: req.entity.depositDurationExtraDays || null,
  };
  return obj;
};
const getRes = (item: EMPApi) => {
  const obj: EMPS = {
    fullName: item?.FULL_NAME,
    branchId: item?.BRANCH_ID?.toString(),
    deviceId: item?.DEVICE_ID,
    disabled: item?.DISABLED,
    userName: item?.USER_NAME,
    password: item?.PASSWORD,
    mobile1: item?.MOBILE1,
    mobile2: item?.MOBILE2,
    nid: item?.NID,
    address: item?.ADDRESS,
    allowCancel: item?.ALlOW_CANCEL,
    allowModifyReading: item?.ALLOW_MODIFY_READING,
    bilngEmpId: item?.BILNG_EMP_ID,
    casher: item?.CASHER,
    collection: item?.COLLECTION,
    dataAdmin: item?.DATA_ADMIN,
    dataEntry: item?.DATA_ENTRY,
    email: item?.EMAIL,
    empType: item?.EMP_TYPE,
    id: item?.ID,
    isStoreMan: item?.IS_STORE_MAN,
    keeper: item?.KEEPER,
    marketing: item?.MARKETING,
    notes: item?.NOTES,
    originalStation: item?.ORIGINAL_STATION,
    reading: item?.READING,
    reportingViewer: item?.REPORTING_VIEWER,
    sysAdmin: item?.SYS_ADMIN,
    tel: item?.TEL,
    flage1: item?.FLAGE1,
    flage2: item?.FLAGE2,
    value1: item?.VALUE1,
    value2: item?.VALUE2,

    dashboard: item?.DASHBOARD,
    closeReadingCycle: item?.CLOSE_READING_CYCLE,
    closeCollectionCycle: item?.CLOSE_COLLECTION_CYCLE,
    allowOverPayment: item?.ALLOW_OVER_PAYMENT,
    enableHhPrinting: item?.ENABLE_HH_PRINTING,
    partialCollectionState: item?.PARTIAL_COLLECTION_STATE,
    randomlyMeterPicturePercentage: item?.RANDOMLY_METER_PICTURE_PERCENT,
    dirCollection: item?.DIR_COLLECTION,
    readingEstimPercent: item?.READING_ESTIM_PERCENT,
    readinPercent: item?.READING_PERCENT,
    dayReadingPercent: item?.DAY_READING_PERCENT,
    depositDuration: item?.DEPOSIT_DURATION,
    offlinePeriod: item?.OFFLINE_PERIOD,
    billsCountAllowedOffline: item?.BILLS_COUNT_ALLOWED_OFFLINE,
    depositDurationExtraDays: item?.DEPOSIT_DURATION_EXTRA_DAYES,
    quota: item?.QUOTA as number,
    deposits_qouta: item?.DEPOSITS_QUOTA as number,
  };
  return obj;
};
export class HttpEmpRepo extends EntityApi<EMPApi> implements IEmpRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Emp/`;
    super(baseurl, config.headers);
  }

  async getEmps(): Promise<EMPS[]> {
    const res: EMPApi[] = await this.Get();
    const data: EMPS[] = res?.map((item: EMPApi) => {
      const obj: EMPS = getRes(item);
      return obj;
    });
    return data || [];
  }

  async addNewEmp(req: ADDEMPREQ): Promise<void> {
    const res: EMPApi = prepareData(req);
    console.log(req, 'add');
    const resposce = await this.Post({ entity: res });
    console.log(res);
    return resposce;
  }

  async updateEmp(req: UPDATEEMPREQ): Promise<void> {
    const obj = prepareData({ entity: req.entity });
    console.log(obj, 'edit');

    const response = await this.Put({ entity: obj, id: req.id });
    console.log(response);
    return response;
  }

  async deleteEmp(req: DELETEEMPREQ): Promise<EMPS> {
    console.log(req);
    const res: EMPApi | void = await this.Delete(req);
    console.log(res);
    return getRes(res!);
  }

  async getAllCollectors(): Promise<EMPS[]> {
    const res: EMPApi[] = await this.httpClient.Get('GetCollectors');
    const data: EMPS[] = res?.map((item: EMPApi) => {
      const obj: EMPS = getRes(item);
      return obj;
    });
    return data || [];
  }

  async getAllReader(): Promise<EMPS[]> {
    const res: EMPApi[] = await this.httpClient.Get('GetReaders');
    const data: EMPS[] = res?.map((item: EMPApi) => {
      const obj: EMPS = getRes(item);
      return obj;
    });
    return data || [];
  }
}
