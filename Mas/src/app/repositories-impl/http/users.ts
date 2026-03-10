// import { EntityApi } from '@/app/httpclient/entity';
// import { IServiceConfig } from '@/domain/service';
// import { USERApi } from '../contracts/user';
// import { IUserRepo } from '@/domain/repositories/users';
// import {
//   ADDUSEREQ,
//   DELETEUSEREQ,
//   UPDATEUSERREQ,
//   USERS,
// } from '@/domain/entities/systemMangement/users';

// import { EntityApi } from "../../app/httpclient/entity";
// import type { ADDUSEREQ, DELETEUSEREQ, UPDATEUSERREQ, USERS } from "../../domain/entities/systemMangement/users";
// import type { IUserRepo } from "../../domain/repositories/users";
// import type { IServiceConfig } from "../../domain/service";
import type { ADDUSEREQ, DELETEUSEREQ, UPDATEUSERREQ, USERS } from "../../../domain/entities/systemMangement/users";
import type { IUserRepo } from "../../../domain/repositories/users";
import type { IServiceConfig } from "../../../domain/service";
import { EntityApi } from "../../httpclient/entity";
import type { USERApi } from "../contracts/user";

export const prepareData = (req: { entity: USERS }) => {
  const obj: USERApi = {
    ID: req.entity.id,
    USER_NAME: req.entity.username,
    STATION_NO: req.entity.stationNo,
    DEPARTMENT: req.entity.departmentid,
    FULL_NAME: req.entity.userfullname,
    SYS_ADMIN: req.entity.sysAdmin,
    READING_ADMIN: req.entity.readingAdmin,
    COLLECTION_ADMIN: req.entity.collectionAdmin,
    REPORING_ADMIN: req.entity.reporingAdmin,
    HH_MONITOR: req.entity.dataAdmin,
    USER_MANAGEMENT: req.entity.hHMonitor,
    SYSTEM_MNTINANCE: req.entity.userManagement,
    DATA_ADMIN: req.entity.systemMntinance,
    IS_ENC: req.entity.isEnc,
    ALLOW_COLLECTION: req.entity.allowCollection,
    ALLOW_MODIFY_READING: req.entity.allowModifyReading,
    ALLOW_DEPOSIT: req.entity.allowDeposit,
    ALLOW_CANCEL: req.entity.allowCancel,
    ALLOW_POST_C: req.entity.allowPostC,
    ALLOW_POST_R: req.entity.allowPostR,
    ALLOW_COMPENSATION: req.entity.allowCompensation,
    MAP_READING: req.entity.mapReading,
    MAP_COLLECTION: req.entity.mapCollection,
    MAP_LOCATION: req.entity.mapLocation,
    MAP_PATH: req.entity.mapPath,
    MAP_COMPLAINTS: req.entity.mapComplaints,
    MAP_BAD_CONN: req.entity.mapBadConn,
    WALK_ARRANGE_POST: req.entity.walkArrangePost,
    UPDATE_CUSTOMER_LOCATION: req.entity.updateCustomerLocation,
    ALLOW_CANCEL_DEP_COL: req.entity.allowCancelDepCol,
    ALLOW_RECOL_CANCEL: req.entity.allowRecolCancel,
    ALLOW_MAPS: req.entity.allowMaps,
    ALLOW_LOADDATA_C: req.entity.allowLoadDataC,
    ALLOW_LOADDATA_R: req.entity.allowLoadDataR,
    IS_CASHIER: req.entity.isCashier,
    EDAMS_CLEAR_READINGS: req.entity.edamsClearReadings,
    EDAMS_RECALC: req.entity.edamsRecalc,
    EDAMS_CS: req.entity.edamsCs,
    ALLOW_METER_MODIFY: req.entity.allowMeterModify,
    ALLOW_GARD: req.entity.allowGard,
    RESEND_COLLECTION: req.entity.resendCollection,
    RESEND_READING: req.entity.resendReading,
    CLOSE_COLLECTION: req.entity.closeCollection,
    CLOSE_READING: req.entity.closeReading,
    COLLECTION_DISCOUNT: req.entity.collectionDiscount,
    REFRESH_BILLS_DATA: req.entity.refreshBillsData,
    REFRESH_CUSTOMER_BILLS: req.entity.refreshCustomerBills,
    CALCULATE_DUE_AMOUNT: req.entity.calculateDueAmount,
    COLLECT_BILL_SINGL_UINT: req.entity.collectBillSinglUint,
    PRINT_PAYMENT_REQUEST: req.entity.printPaymentRequest,
    PARTIAL_COLLECTION: req.entity.partialCollection,
    ALONE_PANEL: req.entity.alonePanel,
    EDAMS_RECALC_NEW: req.entity.edamsRecalcNew,
    ALLOW_MODIFY_PREV_READING: req.entity.allowModifyPrevReading,
    LIST_COLLECTION: req.entity.listCollection,
    MARKETING: req.entity.marketing,
    PREPEAR_HAFZA: req.entity.prepearHafza,
    CASH_BOX: req.entity.cashBox,
    SWITCH: req.entity.switch,
    UFLAG: req.entity.uFlag,
    PORTAL: req.entity.portal,
    ALLOW_FAWRY_OPEN: req.entity.allowFawryOpen,
    ALLOW_FAWRY_CLOSE: req.entity.allowFawryClose,
    SURVEY: req.entity.survey,
    REPORTS: req.entity.reports,
    DASHBOARD: req.entity.dashBoard,
    QUERY: req.entity.query,
    DEVICE_MANAGMENT: req.entity.deviceManagment,
    SYNC: req.entity.sync,
    CANCEL_BILL: req.entity.cancelBill,
    CANCEL_DELIVERY: req.entity.cancelDelivery,
    ALLOW_CUST_MOD: req.entity.allowCustMod,
    ALLOW_ESTIM_READING: req.entity.allowEstimReading,
    ALLOW_BATCH_ESTIM_READING: req.entity.allowBatchEstimReading,
    CLOSE_COLLECTION_INDEVICE: req.entity.closeCollectionInDevice,
    CLOSE_READING_INDEVICE: req.entity.closeReadingInDevice,
    ALLOW_METER_STATUS_CHANGE: req.entity.allowMeteStatusChange,
    ALLOW_CUSTOMER_RESEQUENCE: req.entity.allowCustomerResequence,
    PASSWORD: req.entity.password,
    CASHIER_ID: req.entity.CASHIER_ID,
    ALLOW_GOV_COLLECTION: req?.entity.allowGovCollection,
    EMP_MANAGEMENT: req?.entity.empManagment,
    WALKC_ASSIGNMENT: req?.entity.walkcAssignment,
    WALKR_ASSIGNMENT: req?.entity.walkrAssignment,
    ALLOW_TAX_PUSH: req?.entity.allowTaxPush,
    ALLOW_ESTIM_CONSUMP: req?.entity.allowEstimConsump,
    REOPEN_READING: req?.entity.reopenReading,
  };
  return obj;
};
export const getRes = (item: USERApi) => {
  const obj: USERS = {
    id: item?.ID,
    username: item?.USER_NAME,
    password: item?.PASSWORD,
    stationNo: item?.STATION_NO,

    departmentid: item?.DEPARTMENT,
    userfullname: item?.FULL_NAME,
    sysAdmin: item?.SYS_ADMIN,
    readingAdmin: item?.READING_ADMIN,
    collectionAdmin: item?.COLLECTION_ADMIN,
    reporingAdmin: item?.REPORING_ADMIN,
    dataAdmin: item?.HH_MONITOR,
    hHMonitor: item?.USER_MANAGEMENT,
    userManagement: item?.SYSTEM_MNTINANCE,
    systemMntinance: item?.DATA_ADMIN,
    isEnc: item?.IS_ENC,
    allowCollection: item?.ALLOW_COLLECTION,
    allowModifyReading: item?.ALLOW_MODIFY_READING,
    allowDeposit: item?.ALLOW_DEPOSIT,
    allowCancel: item?.ALLOW_CANCEL,
    allowPostC: item?.ALLOW_POST_C,
    allowPostR: item?.ALLOW_POST_R,
    allowCompensation: item?.ALLOW_COMPENSATION,
    mapReading: item?.MAP_READING,
    mapCollection: item?.MAP_COLLECTION,
    mapLocation: item?.MAP_LOCATION,
    mapPath: item?.MAP_PATH,
    mapComplaints: item?.MAP_COMPLAINTS,
    mapBadConn: item?.MAP_BAD_CONN,
    walkArrangePost: item?.WALK_ARRANGE_POST,
    updateCustomerLocation: item?.UPDATE_CUSTOMER_LOCATION,
    allowCancelDepCol: item?.ALLOW_CANCEL_DEP_COL,
    allowRecolCancel: item?.ALLOW_RECOL_CANCEL,
    allowMaps: item?.ALLOW_MAPS,
    allowLoadDataC: item?.ALLOW_LOADDATA_C,
    allowLoadDataR: item?.ALLOW_LOADDATA_R,
    isCashier: item?.IS_CASHIER,
    edamsClearReadings: item?.EDAMS_CLEAR_READINGS,
    edamsRecalc: item?.EDAMS_RECALC,
    edamsCs: item?.EDAMS_CS,
    allowMeterModify: item?.ALLOW_METER_MODIFY,
    allowGard: item?.ALLOW_GARD,
    resendCollection: item?.RESEND_COLLECTION,
    resendReading: item?.RESEND_READING,
    closeCollection: item?.CLOSE_COLLECTION,
    closeReading: item?.CLOSE_READING,
    collectionDiscount: item?.COLLECTION_DISCOUNT,
    refreshBillsData: item?.REFRESH_BILLS_DATA,
    refreshCustomerBills: item?.REFRESH_CUSTOMER_BILLS,
    calculateDueAmount: item?.CALCULATE_DUE_AMOUNT,
    collectBillSinglUint: item?.COLLECT_BILL_SINGL_UINT,
    printPaymentRequest: item?.PRINT_PAYMENT_REQUEST,
    partialCollection: item?.PARTIAL_COLLECTION,
    alonePanel: item?.ALONE_PANEL,
    edamsRecalcNew: item?.EDAMS_RECALC_NEW,
    allowModifyPrevReading: item?.ALLOW_MODIFY_PREV_READING,
    listCollection: item?.LIST_COLLECTION,
    marketing: item?.MARKETING,
    prepearHafza: item?.PREPEAR_HAFZA,
    cashBox: item?.CASH_BOX,
    switch: item?.SWITCH,
    uFlag: item?.UFLAG,
    portal: item?.PORTAL,
    allowFawryOpen: item?.ALLOW_FAWRY_OPEN,
    allowFawryClose: item?.ALLOW_FAWRY_CLOSE,
    survey: item?.SURVEY,
    reports: item?.REPORTS,
    dashBoard: item?.DASHBOARD,
    query: item?.QUERY,
    deviceManagment: item?.DEVICE_MANAGMENT,
    sync: item?.SYNC,
    cancelBill: item?.CANCEL_BILL,
    cancelDelivery: item?.CANCEL_DELIVERY,
    allowCustMod: item?.ALLOW_CUST_MOD,
    allowEstimReading: item?.ALLOW_ESTIM_READING,
    allowBatchEstimReading: item?.ALLOW_BATCH_ESTIM_READING,
    closeCollectionInDevice: item?.CLOSE_COLLECTION_INDEVICE,
    closeReadingInDevice: item?.CLOSE_READING_INDEVICE,
    allowMeteStatusChange: item?.ALLOW_METER_STATUS_CHANGE,
    allowCustomerResequence: item?.ALLOW_CUSTOMER_RESEQUENCE,
    printerType: item?.PRINTER_TYPE,
    printerHafza: item?.PREPEAR_HAFZA,
    CASHIER_ID: item.CASHIER_ID,
    allowGovCollection:  item?.ALLOW_GOV_COLLECTION || true,
    empManagment: item?.EMP_MANAGEMENT,
    walkcAssignment: item?.WALKC_ASSIGNMENT,
    walkrAssignment: item?.WALKR_ASSIGNMENT,
    allowTaxPush: item?.ALLOW_TAX_PUSH,
    allowEstimConsump: item?.ALLOW_ESTIM_CONSUMP,
    reopenReading: item?.REOPEN_READING,
  };
  return obj;
};

export class HttpUserRepo extends EntityApi<USERApi> implements IUserRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Users/`;
    super(baseurl, config.headers);
  }

  async getUsers(): Promise<USERS[]> {
    const res: USERApi[] = await this.Get();
    const data: USERS[] = res.map((item: USERApi) => {
      const obj: USERS = getRes(item);
      return obj;
    });
    return data;
  }

  async addNewUser(req: ADDUSEREQ): Promise<void> {
    const res: USERApi = prepareData(req);
    const resposce = await this.Post({ entity: res });
    console.log(res);
    return resposce;
  }

  async updateUser(req: UPDATEUSERREQ): Promise<void> {
    const obj = prepareData({ entity: req.entity });
    const response = await this.Put({
      entity: obj,
      id: req.id,
      undefined: '',
    });
    console.log(response);
  }

  async deleteUser(req: DELETEUSEREQ): Promise<USERS> {
    console.log(req);
    const res: USERApi | void = await this.Delete(req);
    console.log(res);
    const obj: USERS = {
      id: res?.ID as number,
      username: res?.USER_NAME,
      password: res?.PASSWORD,
      isEnc: res?.IS_ENC,
    };
    return obj;
  }
}
