// import { BaseApi } from '@/app/httpclient/base';
// import { CUSTOMERWALK } from '@/domain/entities/systemMangement/customerWalk';
// import { IBookRepo } from '@/domain/repositories/book';
// import { IServiceConfig } from '@/domain/service';
// import { CUSTOMERWALKApi } from '../contracts/customerWalk';
// import {
//   CUSTOMERBOOK,
//   CUSTOMERWALKREQ,
//   UPDATECUSTOMERWALKREQ,
// } from '@/domain/entities/book';
// import { CUSTOMERBOOKApi } from '../contracts/customerBook';
// import { METERWALKApi } from '../contracts/meterWalk';
// import {
//   METERWALK,
//   METERWALKREQ,
//   PUTMETERWALKREQ,
// } from '@/domain/entities/meterWalk';

// import { BaseApi } from "../../app/httpclient/base";
// import type { BILL } from "../../domain/entities/bill";
// import type { BILLGROUPCYCLE } from "../../domain/entities/billGroupCycle";
// import type { CUSTOMERWALKREQ, CUSTOMERBOOK, UPDATECUSTOMERWALKREQ } from "../../domain/entities/book";
// import type { BOOKCYCLE } from "../../domain/entities/bookCycle";
// import type { METERBOOK } from "../../domain/entities/meterBook";
// import type { METERWALKREQ, METERWALK, PUTMETERWALKREQ } from "../../domain/entities/meterWalk";
// import type { IBillGroupBookWalk, IBillGroupBookWalkBilng, SWITCHRREQ } from "../../domain/entities/reading";
// import type { RECEPTITEM } from "../../domain/entities/receptItem";
// import type { EmpIdReq, BookCycleForEmp } from "../../domain/entities/switchBooks";
// import type { CUSTOMERWALK } from "../../domain/entities/systemMangement/customerWalk";
// import type { WALKDELIVERY, WALKDELEVERYRESPONSE } from "../../domain/entities/walkDelivery";
// import type { IBookRepo } from "../../domain/repositories/book";
// import type { IServiceConfig } from "../../domain/service";
import type { BILL } from "../../../domain/entities/bill";
import type { BILLGROUPCYCLE } from "../../../domain/entities/billGroupCycle";
import type { CUSTOMERWALKREQ, CUSTOMERBOOK, UPDATECUSTOMERWALKREQ } from "../../../domain/entities/book";
import type { BOOKCYCLE } from "../../../domain/entities/bookCycle";
import type { METERBOOK } from "../../../domain/entities/meterBook";
import type { METERWALKREQ, METERWALK, PUTMETERWALKREQ } from "../../../domain/entities/meterWalk";
import type { IBillGroupBookWalk, IBillGroupBookWalkBilng, SWITCHRREQ } from "../../../domain/entities/reading";
import type { RECEPTITEM } from "../../../domain/entities/receptItem";
import type { EmpIdReq, BookCycleForEmp } from "../../../domain/entities/switchBooks";
import type { CUSTOMERWALK } from "../../../domain/entities/systemMangement/customerWalk";
import type { WALKDELIVERY, WALKDELEVERYRESPONSE } from "../../../domain/entities/walkDelivery";
import type { IBookRepo } from "../../../domain/repositories/book";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { BILLApi } from "../contracts/bill";
import type { BILLGROUPCYCLEAPI } from "../contracts/billgroupCycle";
import type { BOOKCYCLEAPI } from "../contracts/bookCycle";
import type { CUSTOMERBOOKApi } from "../contracts/customerBook";
import type { CUSTOMERWALKApi } from "../contracts/customerWalk";
import type { METERBOOKApi } from "../contracts/meterBook";
import type { METERWALKApi } from "../contracts/meterWalk";
import type { RECEPTITEMApi } from "../contracts/receiptItem";
import type { WALKDELIVERYApi, WalkDeliveryResponce } from "../contracts/walkDelivery";

// import {
//   WALKDELIVERY,
//   WALKDELEVERYRESPONSE,
// } from '@/domain/entities/walkDelivery';
// import {
//   WALKDELIVERYApi,
//   WalkDeliveryResponce,
// } from '../contracts/walkDelivery';
// import { BILLGROUPCYCLE } from '@/domain/entities/billGroupCycle';
// import { BOOKCYCLE } from '@/domain/entities/bookCycle';
// import { BOOKCYCLEAPI } from '../contracts/bookCycle';
// import { BILLGROUPCYCLEAPI } from '../contracts/billgroupCycle';
// import { BILLApi } from '../contracts/bill';
// import { BILL } from '@/domain/entities/bill';
// import { RECEPTITEMApi } from '../contracts/receiptItem';
// import { RECEPTITEM } from '@/domain/entities/receptItem';
// import {
//   IBillGroupBookWalk,
//   IBillGroupBookWalkBilng,
//   SWITCHRREQ,
// } from '@/domain/entities/reading';
// import { METERBOOK } from '@/domain/entities/meterBook';
// import { METERBOOKApi } from '../contracts/meterBook';
// import { BookCycleForEmp, EmpIdReq } from '@/domain/entities/switchBooks';

export const getRecipt = (item: RECEPTITEMApi) => {
  const obj: RECEPTITEM = {
    collectorName: item.COLLECTOR_NAME,
    collectionTypeDesc: item.COLLECTION_TYPE_DESC,
    paymentMethodDesc: item.PAYMENT_METHOD_DESC,
    collectionMethodDesc: item.COLLECTION_METHOD_DESC,
    receiptNo: item.RECEIPT_NO,
    custkey: item.CUSTKEY,
    paymentNo: item.PAYMENT_NO,
    amount: item.AMOUNT as number,
    empId: item.EMP_ID as number,
    collectionDate: item.COLLECTION_DATE as string,
    collectionType: item.COLLECTION_TYPE as number,
    collectionMethod: item.COLLECTION_METHOD as number,
    paymentMethod: item.PAYMENT_METHOD as number,
    cheqNo: item.CHEQ_NO,
    cheqBank: item.CHEQ_BANK,
    discountAmount: item.DISCOUNT_AMOUNT as number,
    discountDocumentNo: item.DISCOUNT_DOCUMENT_NO,
    documentNo: item.DOCUMENT_NO,
    cancelled: item.CANCELLED,
    cancelledAmount: item.CANCELLED_AMOUNT as number,
    cancelledBy: item.CANCELLED_BY,
    cancelledReason: item.CANCELLED_REASON,
    cancelledDate: item.CANCELLED_DATE,
    lat: item.LAT as number,
    lng: item.LNG as number,
    accurecy: item.ACCURECY as number,
    deviceId: item.DEVICE_ID,
    stampUser: item.STAMP_USER,
    stampDate: item.STAMP_DATE,
    depositId: item.DEPOSIT_ID as number,
    isPosted: item.IS_POSTED as boolean,
    postDate: item.POST_DATE,
    postBy: item.POST_BY,
    transNo: item.TRANS_NO as number,
    insCycleId: item.INS_CYCLE_ID as number,
    insBilngDate: item.INS_BILNG_DATE,
    bilngDate: item.BILNG_DATE,
    cycleId: item.CYCLE_ID as number,
    isHafzaPrinted: item.IS_HAFZA_PRINTED as boolean,
    hafzaPrintCount: item.HAFZA_PRINT_COUNT as number,
    hafzaPrintDate: item.HAFZA_PRINT_DATE,
    billgroup: item.BILLGROUP,
    bookNo: item.BOOK_NO,
    walkNo: item.WALK_NO,
    stationNo: item.STATION_NO as number,
    statmNo: item.STATM_NO as number,
    collectionId: item.COLLECTION_ID as number,
    receiptCharge1: item.RECEIPT_CHARGE1 as number,
    receiptCharge2: item.RECEIPT_CHARGE2 as number,
    receiptCharge3: item.RECEIPT_CHARGE3 as number,
    cancelledRecieptNo: item.CANCELLED_RECIEPT_NO,
    userId: item.USER_ID as number,
    fptn: item.FPTN,
    fcrn: item.FCRN,
    blrptn: item.BLRPTN,
    receiptType: item.RECEIPT_TYPE as number,
    comment: item.COMMENT,
    deliveryDate: item.DELIVERY_DATE,
  };
  return obj;
};
const prepareBill = (bill: BILLApi) => {
  const obj: BILL = {
    ...bill,
    custkey: bill.CUSTKEY,
    amountCollected: bill.AMOUNT_COLLECTED as number,
    bilngDate: bill.BILNG_DATE,
    calcType: bill.CALC_TYPE,
    clBlnce: bill.CL_BLNCE as number,
    collectionDate: bill.COLLECTION_DATE,
    ctg: bill.CTG,
    cycleId: bill.CYCLE_ID,
    dueAmount: bill.DUE_AMOUNT as number,
    instalment: bill.INSTALMENT as number,
    instalmentDate: bill.INSTALMENT_DATE,
    isCancelled: bill.IS_CANCELLED as boolean,
    oldKey: bill.OLD_KEY,
    opBlnce: bill.OP_BLNCE as number,
    paymentNo: bill.PAYMENT_NO,
    previousAmountCollected: bill.PREVIOUS_AMOUNT_COLLECTED as number,
    receptsList: bill.RECEPTS.map((itm: RECEPTITEMApi) => getRecipt(itm)),
    sConsump: bill.S_CONSUMP as number,
    sCrReading: bill.S_CR_READING as number,
    sPrReading: bill.S_PR_READING as number,
    seqNo: bill.SEQ_NO as number,
    surname: bill.SURNAME,
    recalcId: 0,
    IS_PARTIAL: bill.IS_PARTIAL,
  };
  return obj;
};
const prepareData = (res: BOOKCYCLEAPI) => {
  const obj: BOOKCYCLE = {
    ...res,
    // STATION_NO: res.STATION_NO,
    // BILLGROUP: res.BILLGROUP,
    // BOOK_NO: res.BOOK_NO,
    // WALK_NO: res.WALK_NO,
    // CYCLE_ID: res.CYCLE_ID,
    // CYCLE_IDS: res.CYCLE_IDS,
    // IS_COLLECTION: res.IS_COLLECTION,
    // IS_READING: res.IS_READING,
    // UNUSED: res.UNUSED,
    // ASSIGNED_TO_HH: res.ASSIGNED_TO_HH,
    // BILNG_DATE: res.BILNG_DATE,
    // BDB_CDB_C: res.BDB_CDB_C,
    // BDB_CDB_DATE_C: res.BDB_CDB_DATE_C,
    // BDB_CDB_USER_C: res.BDB_CDB_USER_C,
    // BDB_CDB_R: res.BDB_CDB_R,
    // BDB_CDB_DATE_R: res.BDB_CDB_DATE_R,
    // BDB_CDB_USER_R: res.BDB_CDB_USER_R,
    // CDB_HH_C: res.CDB_HH_C,
    // CDB_HH_DATE_C: res.CDB_HH_DATE_C,
    // CDB_HH_USER_C: res.CDB_HH_USER_C,
    // CDB_HH_R: res.CDB_HH_R,
    // CDB_HH_DATE_R: res.CDB_HH_DATE_R,
    // CDB_HH_USER_R: res.CDB_HH_USER_R,
    // HH_CDB_C: res.HH_CDB_C,
    // HH_CDB_DATE_C: res.HH_CDB_DATE_C,
    // HH_CDB_USER_C: res.HH_CDB_USER_C,
    // HH_CDB_R: res.HH_CDB_R,
    // HH_CDB_DATE_R: res.HH_CDB_DATE_R,
    // HH_CDB_USER_R: res.HH_CDB_USER_R,
    // CDB_BDB_C: res.CDB_BDB_C,
    // CDB_BDB_DATE_C: res.CDB_BDB_DATE_C,
    // CDB_BDB_USER_C: res.CDB_BDB_USER_C,
    // CDB_BDB_R: res.CDB_BDB_R,
    // CDB_BDB_DATE_R: res.CDB_BDB_DATE_R,
    // CDB_BDB_USER_R: res.CDB_BDB_USER_R,
    // ISCYCLE_COMPLETED_C: res.ISCYCLE_COMPLETED_C,
    // CLOSE_DATE_C: res.CLOSE_DATE_C,
    // CLOSE_BY_C: res.CLOSE_BY_C,
    // ISCYCLE_COMPLETED_R: res.ISCYCLE_COMPLETED_R,
    // CLOSE_DATE_R: res.CLOSE_DATE_R,
    // CLOSE_BY_R: res.CLOSE_BY_R,
    // DEVICEID_R: res.DEVICEID_R,
    // DEVICEID_C: res.DEVICEID_C,
    // WALK_DESCRIPTION: res.WALK_DESCRIPTION,
    // BILNG_DESCRIPTION: res.BILNG_DESCRIPTION,
    // IS_ALLOWED_C: res.IS_ALLOWED_C,
    // IS_ALLOWED_R: res.IS_ALLOWED_R,
    // IS_READY_C: res.IS_READY_C,
    // IS_READY_R: res.IS_READY_R,
    // COUNT_C: res.COUNT_C,
    // COUNT_R: res.COUNT_R,
    // EMPID_C: res.EMPID_C,
    // EMPID_R: res.EMPID_R,
    // COLLECTED_AMOUNT: res.COLLECTED_AMOUNT,
    // ISSUED_AMOUNT: res.ISSUED_AMOUNT,
    // ISSUED_COUNT: res.ISSUED_COUNT,
    // COLLECTED_COUNT: res.COLLECTED_COUNT,
    // READED_COUNT: res.READED_COUNT,
    // REACHED_C: res.REACHED_C,
    // REACHED_R: res.REACHED_R,
    // IS_METER_BOOK: res.IS_METER_BOOK,
    // IS_CUSTOMER_BOOK: res.IS_CUSTOMER_BOOK,
    // IS_REVIRSE_C: res.IS_REVIRSE_C,
    // IS_REVIRSE_R: res.IS_REVIRSE_R,
    // ISCLOSED_INDEVICE_C: res.ISCLOSED_INDEVICE_C,
    // ISCLOSED_INDEVICE_R: res.ISCLOSED_INDEVICE_R,
    // GARD_OK: res.GARD_OK,
    // ALLOW_FAWRY: res.ALLOW_FAWRY,
    // MARKETING: res.MARKETING,
    // READER: res.READER,
    // COLLECTOR: res.COLLECTOR,
    // WALK_DELIVERY_ID: res.WALK_DELIVERY_ID,
    // OWNERS: res.OWNERS,
    // SKIP: res.SKIP,
    // status: res.status,
    // selected: res.selected,
    BILLS: res.BILLS.map((bl: BILLApi) => prepareBill(bl)),
  };
  return obj;
};
export class HttpBookRepo extends BaseApi implements IBookRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Books/`;
    super(baseurl, config.headers);
  }

  async getCustomerWalk(req: CUSTOMERWALKREQ): Promise<CUSTOMERWALK[]> {
    const res: CUSTOMERWALKApi[] = await this.httpClient.Get(
      'CustomerWalks',
      req,
    );
    return res.map((item) => {
      const obj: CUSTOMERWALK = {
        stationNo: item.STATION_NO,
        billgroup: item.BILLGROUP,
        bookNo: item.BOOK_NO,
        walkNo: item.WALK_NO,
        describe: item.DESCRIBE,
        assignedToHh: item.ASSIGNED_TO_HH as number,
        unused: item.UNUSED as boolean,
        marketing: item.MARKETING as number,
        isHhPrinting: item.IS_HH_PRINTING as boolean,
      };
      return obj;
    });
  }

  async getCustomerBookList(): Promise<CUSTOMERBOOK[]> {
    const res: CUSTOMERBOOKApi[] = await this.httpClient.Get('CustomerBooks');

    const data: CUSTOMERBOOK[] = res.map((item) => {
      const obj: CUSTOMERBOOK = {
        code: item.CODE,
        describe: item.DESCRIBE,
        billgroup: item.BILLGROUP,
        noWalks: item.NO_WALKS,
        handheldId: item.HANDHELD_ID,
        stationNo: item.STATION_NO,
        unused: item.UNUSED,
      };
      return obj;
    });
    return data;
  }

  async updateCustomerWalk(req: UPDATECUSTOMERWALKREQ): Promise<void> {
    const tempreq = {
      STATION_NO: req.walk.stationNo,
      BILLGROUP: req.walk.billgroup,
      BOOK_NO: req.walk.bookNo,
      WALK_NO: req.walk.walkNo,
      DESCRIBE: req.walk.describe,
      ASSIGNED_TO_HH: req.walk.assignedToHh,
      UNUSED: req.walk.unused,
      MARKETING: req.walk.marketing,
      IS_HH_PRINTING: req.walk.isHhPrinting,
    };

    const newreq = {
      walk: tempreq,
      transfeer_ohda: req.transfeer_ohda,
    };
    const { walk, ...params } = newreq;

    await this.httpClient.Put('PutCustomerWalk', walk, params);
  }

  async meterWalks(req: METERWALKREQ): Promise<METERWALK[]> {
    const res: METERWALKApi[] = await this.httpClient.Get('MeterWalks', req);
    return res;
  }

  async SwitchHistory(req: IBillGroupBookWalk): Promise<WALKDELIVERY[]> {
    const res: WALKDELIVERYApi[] = await this.httpClient.Get(
      'SwitchHistory',
      req,
    );
    return res;
  }

  async SwitchList(req: IBillGroupBookWalkBilng): Promise<BOOKCYCLE[]> {
    const res: BOOKCYCLEAPI[] = await this.httpClient.Get('SwitchList', req);
    return res.map((item: BOOKCYCLEAPI) => prepareData(item));
  }

  async CustomerWalkCycle(req: IBillGroupBookWalkBilng): Promise<BOOKCYCLE[]> {
    const res: BOOKCYCLEAPI[] = await this.httpClient.Get(
      'CustomerWalkCycle',
      req,
    );
    return res.map((item: BOOKCYCLEAPI) => prepareData(item));
  }

  async MeterWalkCycle(req: IBillGroupBookWalkBilng): Promise<BOOKCYCLE[]> {
    const res: BOOKCYCLEAPI[] = await this.httpClient.Get(
      'MeterWalkCycle',
      req,
    );
    return res.map((item: BOOKCYCLEAPI) => prepareData(item));
  }

  // control panel
  async BookCycle(req: IBillGroupBookWalkBilng): Promise<BOOKCYCLE[]> {
    console.log(req);
    const res: BOOKCYCLEAPI[] = await this.httpClient.Get('BookCycle', {
      ...req,
      empid: req.empid ? req.empid : '',
      bilng_date: req.bilngDate,
      station_no: 'undefined',
    });
    return res.map((item: BOOKCYCLEAPI) => prepareData(item));
  }

  async Allow(req: BOOKCYCLE): Promise<BOOKCYCLE> {
    const res: BOOKCYCLE = await this.httpClient.Put('Allow', req);
    return res;
  }

  async BookCycleFunc(req: IBillGroupBookWalkBilng): Promise<BOOKCYCLE[]> {
    const res: BOOKCYCLEAPI[] = await this.httpClient.Get('BookCycle', req);
    return res.map((item: BOOKCYCLEAPI) => prepareData(item));
  }

  async BillingStatus(): Promise<BILLGROUPCYCLE[]> {
    const res: BILLGROUPCYCLEAPI[] = await this.httpClient.Get('BillingStatus');
    return res;
  }

  async SwitchC(req: IBillGroupBookWalk): Promise<boolean> {
    const res: boolean = await this.httpClient.Post('SwitchC', [], req);
    return res;
  }

  // async PutCustomerWalk(req: PUTCUSTOMERWALKREQ): Promise<boolean> {
  //   const { walk, ...params } = req;
  //   const res: boolean = await this.httpClient.Put(
  //     'PutCustomerWalk',
  //     walk,
  //     params,
  //   );
  //   return res;
  // }

  async PutMeterWalk(req: PUTMETERWALKREQ): Promise<boolean> {
    const { walk, ...params } = req;
    const res: boolean = await this.httpClient.Put(
      'PutMeterWalk',
      walk,
      params,
    );
    console.log(res);
    return res;
  }

  async BillGroupsStatus(): Promise<BILLGROUPCYCLE[]> {
    const res: BILLGROUPCYCLE[] = await this.httpClient.Get('BillgroupsStatus');
    return res;
  }

  async BillgroupsStatusBilingDate(
    req: IBillGroupBookWalkBilng,
  ): Promise<BILLGROUPCYCLE[]> {
    const res: BILLGROUPCYCLE[] = await this.httpClient.Get(
      'BillgroupsStatusBilingDate',
      req,
    );
    return res;
  }

  async CancelSwitchC(req: { id?: number }): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('CancelSwitchC', req);
    return res;
  }

  async SwitchDetails(req: { id?: number }): Promise<WALKDELEVERYRESPONSE> {
    const res: WalkDeliveryResponce = await this.httpClient.Get(
      'SwitchDetails',
      req,
    );
    const temp: WALKDELEVERYRESPONSE = {
      ...res,
      BILLS: res.BILLS.map((bill: BILLApi) => prepareBill(bill)),
    };
    return temp;
  }

  async SwitchR(req: SWITCHRREQ): Promise<boolean> {
    const res: boolean = await this.httpClient.Get('SwitchR', req);
    return res;
  }

  async MeterBooks(): Promise<METERBOOK> {
    const res: METERBOOKApi = await this.httpClient.Get('MeterBooks');
    return res;
  }

  async BookCycleByEmpId(req?: EmpIdReq): Promise<BookCycleForEmp[]> {
    const res: BookCycleForEmp[] = await this.httpClient.Get(
      'BookCycleByEmpId',
      req,
    );
    return res;
  }

  async UpdateBooksForEmp(req: BookCycleForEmp[]): Promise<boolean> {
    const res: boolean = await this.httpClient.Post(
      'UpdateBooksForEmp',
      req,
      [],
    );
    return res;
  }
}
