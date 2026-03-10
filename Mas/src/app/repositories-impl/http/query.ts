// import { BaseApi } from '@/app/httpclient/base';

// import { IServiceConfig } from '@/domain/service';
// import {
//   SEARCHITEM,
//   SEARCHREQMAS,
//   SEARCHRES,
// } from '@/domain/entities/searchItem';
// import { IQueryRepo } from '@/domain/repositories/query';
// import { SEARCHITEMAPI, SEARCHRESAPI } from '../contracts/search-result';
// import { BILL } from '@/domain/entities/bill';
// import { CUSTOMERINFORMATION } from '@/domain/entities/customerInformation';
// import {
//   AgremInstalmentApi,
//   CUSTOMERINFOAPI,
//   MeterInfoApi,
// } from '../contracts/customerInfor';
// import { STATMENT } from '@/domain/entities/statement';
// import { METERRDG } from '@/domain/entities/meterRdg';
// import { METERINFORMATION } from '@/domain/entities/meterInfo';
// import { FTRANSACTION } from '@/domain/entities/fTransaction';
// import { CUSTOMERCTG } from '@/domain/entities/customerCtg';
// import { PROPINFO } from '@/domain/entities/propInfo';
// import { CustAgreem } from '@/domain/entities/customerAgreement';
// import { AGREEMINSTALMENT } from '@/domain/entities/agreemInstalment';
// import { CUSTKEYREQ } from '@/domain/entities/collection';
// import { RECEPTITEMApi } from '../contracts/receiptItem';
// import { BaseApi } from "../../app/httpclient/base";
// import type { AGREEMINSTALMENT } from "../../domain/entities/agreemInstalment";
// import type { BILL } from "../../domain/entities/bill";
// import type { CUSTKEYREQ } from "../../domain/entities/collection";
// import type { CustAgreem } from "../../domain/entities/customerAgreement";
// import type { CUSTOMERCTG } from "../../domain/entities/customerCtg";
// import type { CUSTOMERINFORMATION } from "../../domain/entities/customerInformation";
// import type { FTRANSACTION } from "../../domain/entities/fTransaction";
// import type { METERINFORMATION } from "../../domain/entities/meterInfo";
// import type { METERRDG } from "../../domain/entities/meterRdg";
// import type { PROPINFO } from "../../domain/entities/propInfo";
// import type {
//   SEARCHITEM,
//   SEARCHREQMAS,
//   SEARCHRES,
// } from "../../domain/entities/searchItem";
// import type { STATMENT } from "../../domain/entities/statement";
// import type { IQueryRepo } from "../../domain/repositories/query";
// import type { IServiceConfig } from "../../domain/service";

import type { AGREEMINSTALMENT } from "../../../domain/entities/agreemInstalment";
import type { BILL } from "../../../domain/entities/bill";
import type { CUSTKEYREQ } from "../../../domain/entities/collection";
import type { CustAgreem } from "../../../domain/entities/customerAgreement";
import type { CUSTOMERCTG } from "../../../domain/entities/customerCtg";
import type { CUSTOMERINFORMATION } from "../../../domain/entities/customerInformation";
import type { FTRANSACTION } from "../../../domain/entities/fTransaction";
import type { METERINFORMATION } from "../../../domain/entities/meterInfo";
import type { METERRDG } from "../../../domain/entities/meterRdg";
import type { PROPINFO } from "../../../domain/entities/propInfo";
import type { SEARCHITEM, SEARCHREQMAS, SEARCHRES } from "../../../domain/entities/searchItem";
import type { STATMENT } from "../../../domain/entities/statement";
import type { IQueryRepo } from "../../../domain/repositories/query";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type {
  MeterInfoApi,
  CUSTOMERINFOAPI,
  AgremInstalmentApi,
} from "../contracts/customerInfor";
import type { RECEPTITEMApi } from "../contracts/receiptItem";
import type { SEARCHITEMAPI, SEARCHRESAPI } from "../contracts/search-result";
import { getRecipt } from "./book";

const getResult = (res: SEARCHITEMAPI) => {
  console.log(res.SERIAL_NUMBER, "jjjjjjjjjjjj");
  const responce: SEARCHITEM = {
    ...res,
    custkey: res.CUSTKEY,
    surname: res.SURNAME,
    oldKey: res.OLD_KEY,
    propRef: res.PROP_REF,
    address: res.ADDRESS,
    meterRef: res.METER_REF,
    billgroup: res.BILLGROUP,
    bookNo: res.BOOK_NO,
    walkNo: res.WALK_NO,
    amountCollected: res.AMOUNT_COLLECTED as number,
    clBlnce: res.CL_BLNCE as number,
    bilingDate: res.BILNG_DATE,
    crReading: res.CR_READING as number,
    readingDate: res.READING_DATE,
    readingNoteDesc: res.READING_NOTE_DESCR,
    readingDesc: res.READING_DESC,
    readBy: res.READ_BY,
    readingNote: res.REAING_NOTE as number,
    modifiedAvgConsump: res.MODIFIED_AVG_CONSUMP as number,
    stationName: res.STATION_NAME,
    stationNo: res.STATION_NO as number,
    serial_no: res.SERIAL_NUMBER as string,
    billsList: res.BILLS.map((bil) => {
      const xx: BILL = {
        custkey: bil.CUSTKEY,
        paymentNo: bil.PAYMENT_NO,
        cycleId: bil.CYCLE_ID,
        bilngDate: bil.BILNG_DATE,
        sCrReading: bil.S_CR_READING as number,
        sPrReading: bil.S_PR_READING as number,
        sConsump: bil.S_CONSUMP as number,
        clBlnce: bil.CL_BLNCE as number,
        calcType: bil.CALC_TYPE as string,
        dueAmount: bil.DUE_AMOUNT as number,
        amountCollected: bil.AMOUNT_COLLECTED as number,
        seqNo: bil.SEQ_NO as number,
        opBlnce: bil.OP_BLNCE as number,
        instalment: bil.INSTALMENT as number,
        previousAmountCollected: bil.PREVIOUS_AMOUNT_COLLECTED as number,
        instalmentDate: bil.INSTALMENT_DATE,
        surname: bil.SURNAME,
        receptsList: bil?.RECEPTS?.map((itm: RECEPTITEMApi) => getRecipt(itm)),
        ctg: bil.CTG,
        oldKey: bil.OLD_KEY,
        collectionDate: bil.COLLECTION_DATE,
        isCancelled: bil.IS_CANCELLED!,
        IS_PARTIAL: bil.IS_PARTIAL,
      };
      return xx;
    }),
  };
  return responce;
};
const meterRdg = (inf: MeterInfoApi) =>
  inf.READINGS.map((item) => {
    const itm: METERRDG = {
      readingNo: item.READING_NO as number,
      bReading: item.B_READING as number,
      curDate: item.CUR_DATE,
      isInvoiced: item.IS_INVOICED as number,
      invoiceBilngDate: item.INVOICE_BILNG_DATE,
      isCancelled: item.IS_CANCELLED as boolean,
      meterId: item.METER_ID as number,
      meterType: item.METER_TYPE,
      meterRef: item.METER_REF,
    };
    return itm;
  });
const meterInfo = (res: CUSTOMERINFOAPI) => {
  const inf: MeterInfoApi = res.PropInfo.ConnectionInfo.MeterInfo;
  const Info: METERINFORMATION = {
    meterType: inf.METER_TYPE,
    meterRef: inf.METER_REF,
    meterCondition: inf.METER_CONDITION,
    opStatus: inf.OP_STATUS as number,
    status: inf.STATUS as number,
    size: inf.SIZE,
    make: inf.MAKE,
    installDate: inf.INSTALL_DATE,
    removalDate: inf.REMOVAL_DATE,
    conversionFactor: inf.CONVERSION_FACTOR as number,
    serialNo: inf.SERIAL_NO,
    readingsList: meterRdg(inf),
    meterId: inf.METER_ID,
    insCycleId: inf.INS_CYCLE_ID as number,
    updCycleId: inf.UPD_CYCLE_ID as number,
    wtransNo: inf.WTRANS_NO as number,
    stransNo: inf.STRANS_NO as number,
    propertyId: inf.PROPERTY_ID as number,
    propRef: inf.PROP_REF,
    noDials: inf.NO_DIALS as number,
  };
  return Info;
};
const agreemlist = (res: CUSTOMERINFOAPI) =>
  res.AGREEMS.map((item) => {
    const itm: CustAgreem = {
      agrmNo: item.AGRM_NO as number,
      custkey: item.CUSTKEY,
      agrmRef: item.AGRM_REF,
      effDate: item.EFF_DATE,
      completionDate: item.COMPLETION_DATE,
      agrmValue: item.AGRM_VALUE as number,
      agrmImmpay: item.AGRM_IMMPAY as number,
      immpayRcptno: item.IMMPAY_RCPTNO,
      noInstalments: item.NO_INSTALMENTS as number,
      reminderNoInstalments: item.REMINDER_NO_INSTALMENTS as number,
      reminderAmount: item.REMINDER_AMOUNT as number,
      instlmAmount: item.INSTLM_AMOUNT as number,
      agrmType: item.AGRM_TYPE as number,
      agrmStatus: item.AGRM_STATUS as number,
      trnsType: item.TRNS_TYPE as number,
      trnsStype: item.TRNS_STYPE as number,
      instalmentsList: item.Instalments.map((ss: AgremInstalmentApi) => {
        const x: AGREEMINSTALMENT = {
          instalmentNo: ss.INSTALMENT_NO,
          transNo: ss.TRANS_NO as number,
          amount: ss.AMOUNT as number,
          invoiceDate: ss.INVOICE_DATE,
          chargeDate: ss.CHARGE_DATE,
        };
        return x;
      }),
    };
    return itm;
  });

const propInfo = (res: CUSTOMERINFOAPI) => {
  const itm: PROPINFO = {
    propRef: res.PropInfo.PROP_REF,
    waterService: res.PropInfo.WATER_SERVICE,
    sewerService: res.PropInfo.SEWER_SERVICE,
    isMultiCtypes: res.PropInfo.IS_MULTI_CTYPES,
    ctgList: res.PropInfo.CTG.map((item) => {
      const m: CUSTOMERCTG = {
        code: item.CODE,
        description: item.DESCRIPTION,
        waterPercentage: item.WATER_PERCENTAGE,
        sewerPercentage: item.SEWER_PERCENTAGE,
      };
      return m;
    }),
    connectioninfo: {
      propRef: res.PropInfo.ConnectionInfo.PROP_REF,
      connectionDate: res.PropInfo.ConnectionInfo.CONNECTION_DATE,
      connStatus: res.PropInfo.ConnectionInfo.CONN_STATUS as number,
      meterinfo: meterInfo(res),
    },
  };
  return itm;
};

const ftransaction = (res: CUSTOMERINFOAPI) =>
  res.ALL_TRANSACTIONS.map((item) => {
    const itm: FTRANSACTION = {
      transNo: item.TRANS_NO,
      amount: item.AMOUNT,
      description: item.DESCRIPTION,
      documentNo: item.DOCUMENT_NO,
      effectDte: item.EFFECT_DTE,
      bilngDate: item.BILNG_DATE,
      memoFld: item.MEMO_FLD,
      statmNo: item.STATM_NO as number,
      trnsType: item.TRANS_NO,
      trnsStype: item.TRNS_STYPE as number,
      crReading: item.CR_READING as number,
      prReading: item.PR_READING as number,
      consump: item.CONSUMP as number,
      readType: item.READ_TYPE as number,
      runningBlance: item.RUNNING_BLANCE as number,
    };
    return itm;
  });
const statment = (res: CUSTOMERINFOAPI) =>
  res.STATMENTS.map((item) => {
    const itm: STATMENT = {
      paymentNo: item.PAYMENT_NO,
      statmNo: item.STATM_NO,
      clBlnce: item.CL_BLNCE as number,
      curCharges: item.CUR_CHARGES as number,
      opBlnce: item.OP_BLNCE as number,
      instalment: item.INSTALMENT as number,
      bilngDate: item.BILNG_DATE,
      deliverySt: item.DELIVERY_ST,
      transactionsList: ftransaction(res),
    };
    return itm;
  });

export class HttpQueryRepo extends BaseApi implements IQueryRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith("/") ? config.baseUrl : `${config.baseUrl}/`
    }api/Query/`;
    super(baseurl, config.headers);
  }

  async onSearch(req: SEARCHREQMAS): Promise<SEARCHRES> {
    const newreq = {
      key: req.key,
      searchBy: req.searchBy?.toString(),
      listgroup: req.listgroup,
    };
    const data: SEARCHRESAPI = await this.httpClient.Get("Search", newreq);

    const items = data?.Items?.map((item) => getResult(item));
    const findata: SEARCHRES = {
      COUNT: data?.COUNT,
      Items: items,
    };
    return findata;
  }

  async getListBills(req: CUSTKEYREQ): Promise<SEARCHITEM> {
    const res: SEARCHITEMAPI = await this.httpClient.Get("ListBills", req);
    return getResult(res);
  }

  async getListReadingHistory(req: CUSTKEYREQ): Promise<SEARCHITEM[]> {
    const res: SEARCHITEMAPI[] = await this.httpClient.Get(
      "ListReadingHist",
      req,
    );
    return res.map((item) => getResult(item));
  }

  async getFromBilling(req: CUSTKEYREQ): Promise<CUSTOMERINFORMATION> {
    const res: CUSTOMERINFOAPI = await this.httpClient.Get("GetFromBilng", req);
    const data: CUSTOMERINFORMATION = {
      custkey: res.CUSTKEY,
      propRef: res.PROP_REF,
      billgroup: res.BILLGROUP,
      bookNo: res.BOOK_NO,
      walkNo: res.WALK_NO,
      seqNo: res.SEQ_NO,
      prevCustkey: res.PREV_CUSTKEY,
      oldKey: res.OLD_KEY,
      surname: res.SURNAME,
      address: res.ADDRESS,
      propinfo: propInfo(res),
      agreemsList: agreemlist(res),
      statmentsList: statment(res),
      allTransactionsList: ftransaction(res),
    };
    return data;
  }
}
