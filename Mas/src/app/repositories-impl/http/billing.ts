// import { BaseApi } from '@/app/httpclient/base';
// import {
//   CUSTOMERINFORMATION,
//   GETLASTBILLINGREADINGREQ,
//   TRUNCATEREQ,
// } from '@/domain/entities/customerInformation';
// import { IBillingRepo } from '@/domain/repositories/billing';
// import { IServiceConfig } from '@/domain/service';
// import {
//   AgremInstalmentApi,
//   CustAgreemApi,
//   CUSTOMERINFOAPI,
//   MeterInfoApi,
// } from '../contracts/customerInfor';
// import { FTRANSACTION } from '@/domain/entities/fTransaction';
// import { STATMENT } from '@/domain/entities/statement';
// import { METERINFORMATION } from '@/domain/entities/meterInfo';
// import { METERRDG } from '@/domain/entities/meterRdg';
// import { CUSTOMERCTG } from '@/domain/entities/customerCtg';
// import { PROPINFO } from '@/domain/entities/propInfo';
// import { CustAgreem } from '@/domain/entities/customerAgreement';
// import { AGREEMINSTALMENT } from '@/domain/entities/agreemInstalment';
// import {
//   CANCELSEWERREQ,
//   HHttpActionResult,
// } from '@/domain/entities/hhttpActionres';
// import { HHTTPACTIONRESAPI } from '../contracts/hhActionResult';
// import { READINGRECORDAPI } from '../contracts/readingRecord';
// import { IssueVerificationResultItem } from '@/domain/entities/issueVerify';
// import {
//   MODIFYPREVREADINGREQ,
//   VERIFYISSUEREQ,
// } from '@/domain/entities/reading';
// import { READINGRECORD } from '@/domain/entities/readingRecord';

// import { BaseApi } from "../../app/httpclient/base";
// import type { AGREEMINSTALMENT } from "../../domain/entities/agreemInstalment";
// import type { CustAgreem } from "../../domain/entities/customerAgreement";
// import type { CUSTOMERCTG } from "../../domain/entities/customerCtg";
// import type { CUSTOMERINFORMATION, TRUNCATEREQ, GETLASTBILLINGREADINGREQ } from "../../domain/entities/customerInformation";
// import type { FTRANSACTION } from "../../domain/entities/fTransaction";
// import type { CANCELSEWERREQ, HHttpActionResult } from "../../domain/entities/hhttpActionres";
// import type { IssueVerificationResultItem } from "../../domain/entities/issueVerify";
// import type { METERINFORMATION } from "../../domain/entities/meterInfo";
// import type { METERRDG } from "../../domain/entities/meterRdg";
// import type { PROPINFO } from "../../domain/entities/propInfo";
// import type { MODIFYPREVREADINGREQ, VERIFYISSUEREQ } from "../../domain/entities/reading";
// import type { READINGRECORD } from "../../domain/entities/readingRecord";
// import type { STATMENT } from "../../domain/entities/statement";
// import type { IBillingRepo } from "../../domain/repositories/billing";
// import type { IServiceConfig } from "../../domain/service";
import type { AGREEMINSTALMENT } from "../../../domain/entities/agreemInstalment";
import type { CustAgreem } from "../../../domain/entities/customerAgreement";
import type { CUSTOMERCTG } from "../../../domain/entities/customerCtg";
import type { CUSTOMERINFORMATION, TRUNCATEREQ, GETLASTBILLINGREADINGREQ } from "../../../domain/entities/customerInformation";
import type { FTRANSACTION } from "../../../domain/entities/fTransaction";
import type { CANCELSEWERREQ, HHttpActionResult } from "../../../domain/entities/hhttpActionres";
import type { IssueVerificationResultItem } from "../../../domain/entities/issueVerify";
import type { METERINFORMATION } from "../../../domain/entities/meterInfo";
import type { METERRDG } from "../../../domain/entities/meterRdg";
import type { PROPINFO } from "../../../domain/entities/propInfo";
import type { MODIFYPREVREADINGREQ, VERIFYISSUEREQ } from "../../../domain/entities/reading";
import type { READINGRECORD } from "../../../domain/entities/readingRecord";
import type { STATMENT } from "../../../domain/entities/statement";
import type { IBillingRepo } from "../../../domain/repositories/billing";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi } from "../../httpclient/base";
import type { CUSTOMERINFOAPI, MeterInfoApi, CustAgreemApi, AgremInstalmentApi } from "../contracts/customerInfor";
import type { HHTTPACTIONRESAPI } from "../contracts/hhActionResult";
import type { READINGRECORDAPI } from "../contracts/readingRecord";

const ftransaction = (res: CUSTOMERINFOAPI) =>
  res?.ALL_TRANSACTIONS?.map((item) => {
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
  res?.STATMENTS?.map((item) => {
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
const meterRdg = (inf: MeterInfoApi) =>
  inf.READINGS?.map((item) => {
    const itm: METERRDG = {
      readingNo: item.READING_NO as number,
      bReading: item.B_READING as number,
      curDate: item.CUR_DATE,
      isInvoiced: item.IS_INVOICED as number,
      invoiceBilngDate: item.INVOICE_BILNG_DATE as string,
      isCancelled: item.IS_CANCELLED as boolean,
      meterId: item.METER_ID as number,
      meterType: item.METER_TYPE,
      meterRef: item.METER_REF,
    };
    return itm;
  });
const meterInfo = (res: CUSTOMERINFOAPI) => {
  const inf: MeterInfoApi = res?.PropInfo?.ConnectionInfo?.MeterInfo;
  const data: METERINFORMATION = {
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
  return data;
};
const propInfo = (res: CUSTOMERINFOAPI) => {
  const data: PROPINFO = {
    propRef: res?.PropInfo.PROP_REF,
    waterService: res?.PropInfo.WATER_SERVICE,
    sewerService: res?.PropInfo.SEWER_SERVICE,
    isMultiCtypes: res?.PropInfo.IS_MULTI_CTYPES,
    ctgList: res?.PropInfo.CTG?.map((item) => {
      const m: CUSTOMERCTG = {
        code: item.CODE,
        description: item.DESCRIPTION,
        waterPercentage: item.WATER_PERCENTAGE,
        sewerPercentage: item.SEWER_PERCENTAGE,
      };
      return m;
    }),
    connectioninfo: {
      propRef: res?.PropInfo.ConnectionInfo.PROP_REF,
      connectionDate: res?.PropInfo.ConnectionInfo.CONNECTION_DATE,
      connStatus: res?.PropInfo.ConnectionInfo.CONN_STATUS as number,
      meterinfo: meterInfo(res),
    },
  };
  return data;
};
const agreemlist = (res: CUSTOMERINFOAPI) =>
  res?.AGREEMS?.map((item: CustAgreemApi) => {
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
      instalmentsList: item.Instalments?.map((itmm: AgremInstalmentApi) => {
        const x: AGREEMINSTALMENT = {
          instalmentNo: itmm.INSTALMENT_NO,
          transNo: itmm.TRANS_NO as number,
          amount: itmm.AMOUNT as number,
          invoiceDate: itmm.INVOICE_DATE,
          chargeDate: itmm.CHARGE_DATE,
        };
        return x;
      }),
    };
    return itm;
  });
export class HttpBillingRepo extends BaseApi implements IBillingRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Billing/`;
    super(baseurl, config.headers);
  }

  async getBillingInformation(custkey: string): Promise<CUSTOMERINFORMATION> {
    const res: CUSTOMERINFOAPI = await this.httpClient.Get('GetCustomerInfo', {
      custkey,
    });
    const data: CUSTOMERINFORMATION = {
      custkey: res?.CUSTKEY,
      propRef: res?.PROP_REF,
      billgroup: res?.BILLGROUP,
      bookNo: res?.BOOK_NO,
      walkNo: res?.WALK_NO,
      seqNo: res?.SEQ_NO,
      prevCustkey: res?.PREV_CUSTKEY,
      oldKey: res?.OLD_KEY,
      surname: res?.SURNAME,
      address: res?.ADDRESS,
      propinfo: propInfo(res),
      agreemsList: agreemlist(res),
      statmentsList: statment(res),
      allTransactionsList: ftransaction(res),
      stationNo: res?.STATION_NO?.toString(),
      taxNo: res?.TAX_NO,
      meterRef: res?.METER_REF,
      prevPropRef: res?.PREV_PROP_REF,
      noUnits: res?.NO_UNITS,
      meterDiam: res?.METER_DIAM,
      meterStatus: res?.METER_STATUS,
      conStatus: res?.CONN_STATUS,
      nId: res?.NID,
      hasWater: res?.HAS_WATER,
      hasSewer: res?.HAS_SEWER,
      installDate: res?.INSTALL_DATE,
      removalDate: res?.REMOVAL_DATE,
      cTypeDescription: res?.C_TYPE_DESCRIPTION,
      meterType: res?.METER_TYPE,
      meterMake: res?.METER_MAKE,
      connDate: res?.CONN_DATE,
    };
    return data;
  }

  async refreshCustomerBooks(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get('RefreshCustomerBooks', {
      truncate: req.truncate,
    });
    return res;
  }

  async RefreshMeterBooks(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get('RefreshMeterBooks', {
      truncate: req.truncate,
    });
    return res;
  }

  async UpdateBilngCustomerWalks(): Promise<number> {
    const res: number = await this.httpClient.Get('UpdateBilngCustomerWalks');
    return res;
  }

  async RefreshConsumptionTypes(req: TRUNCATEREQ): Promise<string[]> {
    const res: string[] = await this.httpClient.Get(
      'RefreshConsumptionTypes',
      req,
    );
    return res;
  }

  async GetLastBilngReading(
    req: GETLASTBILLINGREADINGREQ,
  ): Promise<READINGRECORD> {
    const res: READINGRECORDAPI = await this.httpClient.Get(
      'GetLastBilngReading',
      req,
    );
    return res;
  }

  async ModifyPrevReading(req: MODIFYPREVREADINGREQ): Promise<number> {
    const res: number = await this.httpClient.Get('ModifyPrevReading', req);
    return res;
  }

  async CancelSewerService(req: CANCELSEWERREQ): Promise<HHttpActionResult> {
    const res: HHTTPACTIONRESAPI = await this.httpClient.Get(
      'CancelSewerService',
      req,
    );
    return res;
  }

  async VerifyIssue(
    req: VERIFYISSUEREQ,
  ): Promise<IssueVerificationResultItem[]> {
    const res: IssueVerificationResultItem[] = await this.httpClient.Get(
      'VerifyIssue',
      req,
    );
    return res;
  }

  async RefreshBillGroups(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get('RefreshBillGroups', req);
    return res;
  }

  async RefreshConsumptionTypesGroups(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get(
      'RefreshConsumptionTypesGroups',
      req,
    );
    return res;
  }

  async RefreshAccessCodes(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get('RefreshAccessCodes', req);
    return res;
  }

  async RefreshAll(req: TRUNCATEREQ): Promise<number> {
    const res: number = await this.httpClient.Get('RefreshAll', req);
    return res;
  }
}
