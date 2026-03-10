// import { IServiceConfig } from '@/domain/service';
// import { BaseApi, toISOString } from '@/app/httpclient/base';
// import {
//   CollectionDestributionItm,
//   RejectPostReq,
//   ICancelCollectionReq,
//   IPaymentReq,
//   IUncollectedReq,
//   ICloseGardReq,
//   IPaymentForHqReq,
//   CALCCHARGEREQ,
//   UNPOSTEDREQ,
//   CLEARHAFZAPRINTREQ,
//   GETLASTRECEIPTREQ,
//   COLLECTIONPOSTEDSHAREDREQ,
//   CUSTKEYREQ,
//   LISTPAYMENTSREQ,
//   UNCOLLECECTEDREQ,
//   COLLECTORSPERFORMANCEREQ,
//   UNPOSTEDGROUPMETHODS,
//   ICHANGEPAYMENTMETHOD,
//   ChangeReciptsModel,
//   // UnPOSTEDGROUPMETHODREQ,
// } from '@/domain/entities/collection';
// import {
//   CollectionDestributionItem,
//   CollectionDestributionReceipt,
//   GetPaymentReciptRequest,
//   ReciptBulkItem,
// } from '../contracts/collectionDestributionItem';
// import { ICollectionRepo } from '@/domain/repositories/collection';
// import {
//   COMPONENTSTATEPOSTCOLLECTIONREQ,
//   IHHProcessResponceMessage,
//   RECOLLECTEDCANCELSTMREQ,
//   UPDATECUSTOMERBILLSBILLGRPREQ,
//   UPDATECUSTOMERBILLSREQ,
// } from '@/domain/entities/hhProcessResponseMessage';

// import { BaseApi, toISOString } from "../../app/httpclient/base";
// import type { BALANCE } from "../../domain/entities/balance";
// import type { REOPENCLOSEDBILLGROUPBOOKREQ, REOPENCLOSEDBILLGROUPREQ } from "../../domain/entities/billGroups";
// import type { CASHIERBALANCE } from "../../domain/entities/cashierBalance";
// import type { CALCCHARGEREQ, ChangeReciptsModel, CLEARHAFZAPRINTREQ, CollectionDestributionItm, COLLECTIONPOSTEDSHAREDREQ, COLLECTORSPERFORMANCEREQ, CUSTKEYREQ, EnumType, GETLASTRECEIPTREQ, ICancelCollectionReq, ICHANGEPAYMENTMETHOD, ICloseGardReq, IPaymentForHqReq, IPaymentReq, IUncollectedReq, LISTPAYMENTSREQ, RejectPostReq, UNCOLLECECTEDREQ, UNPOSTEDGROUPMETHODS, UNPOSTEDREQ } from "../../domain/entities/collection";
// import type { COLLECTIONSUMMARY, GARDSUMMARYREQ } from "../../domain/entities/collectionSummary";
// import type { COLLECTIONTYPEANDMETHODE } from "../../domain/entities/collectionTypes";
// import type { GARD, POSTGARDREQ, SAVEGARDREQ } from "../../domain/entities/gard";
// import type { BCYCREQ, HHBCYC } from "../../domain/entities/hhBcyc";
// import type { COMPONENTSTATEPOSTCOLLECTIONREQ, IHHProcessResponceMessage, RECOLLECTEDCANCELSTMREQ, UPDATECUSTOMERBILLSBILLGRPREQ, UPDATECUSTOMERBILLSREQ } from "../../domain/entities/hhProcessResponseMessage";
// import type { PAYMENTMETHODE } from "../../domain/entities/paymentMethode";
// import type { IBill2masReq, IBillGroupBookWalk, IBillGroupBookWalkBilng, IReOpenGardReq } from "../../domain/entities/reading";
// import type { CANCELRECEIPTREQ, MyReceipt, EMPREQ, RECEIPTREQ } from "../../domain/entities/receipt";
// import type { BILLINGDATEREQ, STATMDEPOSIT, StatmValidation } from "../../domain/entities/statmDeposit";
// import type { ICollectionRepo } from "../../domain/repositories/collection";
// import type { IServiceConfig } from "../../domain/service";
import type { BALANCE } from "../../../domain/entities/balance";
import type { REOPENCLOSEDBILLGROUPREQ, REOPENCLOSEDBILLGROUPBOOKREQ } from "../../../domain/entities/billGroups";
import type { CASHIERBALANCE } from "../../../domain/entities/cashierBalance";
import type { IPaymentReq, CollectionDestributionItm, CLEARHAFZAPRINTREQ, GETLASTRECEIPTREQ, ICancelCollectionReq, RejectPostReq, UNPOSTEDREQ, IUncollectedReq, ICloseGardReq, IPaymentForHqReq, UNPOSTEDGROUPMETHODS, CALCCHARGEREQ, ICHANGEPAYMENTMETHOD, ChangeReciptsModel, COLLECTIONPOSTEDSHAREDREQ, COLLECTORSPERFORMANCEREQ, UNCOLLECECTEDREQ, CUSTKEYREQ, LISTPAYMENTSREQ } from "../../../domain/entities/collection";
import type { COLLECTIONSUMMARY, GARDSUMMARYREQ } from "../../../domain/entities/collectionSummary";
import type { COLLECTIONTYPEANDMETHODE } from "../../../domain/entities/collectionTypes";
import type { POSTGARDREQ, SAVEGARDREQ, GARD } from "../../../domain/entities/gard";
import type { BCYCREQ, HHBCYC } from "../../../domain/entities/hhBcyc";
import type { IHHProcessResponceMessage, UPDATECUSTOMERBILLSREQ, UPDATECUSTOMERBILLSBILLGRPREQ, COMPONENTSTATEPOSTCOLLECTIONREQ, RECOLLECTEDCANCELSTMREQ } from "../../../domain/entities/hhProcessResponseMessage";
import type { PAYMENTMETHODE } from "../../../domain/entities/paymentMethode";
import type { IBillGroupBookWalk, IBill2masReq, IBillGroupBookWalkBilng, IReOpenGardReq } from "../../../domain/entities/reading";
import type { CANCELRECEIPTREQ, MyReceipt, EMPREQ, RECEIPTREQ } from "../../../domain/entities/receipt";
import type { STATMDEPOSIT, BILLINGDATEREQ, StatmValidation } from "../../../domain/entities/statmDeposit";
import type { ICollectionRepo } from "../../../domain/repositories/collection";
import type { IServiceConfig } from "../../../domain/service";
import { BaseApi, toISOString } from "../../httpclient/base";
import type { BalanceApi } from "../contracts/balance";
import type { CASHIERBALANCEAPI } from "../contracts/cashierBalanace";
import type { COLLECBILLREQUESTAPI, COLLECTIONLISTOFBILLSREQAPI, COLLECTIONLISTOFBILLSREQAPINew, PARTIALCOLLECTBILLREQAPI } from "../contracts/collectBill";
import type { CollectionDestributionItem, CollectionDestributionReceipt, GetPaymentReciptRequest, ReciptBulkItem } from "../contracts/collectionDestributionItem";
import type { COLLECTIONSUMMARYAPI } from "../contracts/collectionSummary";
import type { EnumType, PAYMENTMETHODSAPI } from "../contracts/enumType";
import type { HHBCYCApi } from "../contracts/hh-bcyc";
import type { HHProcessResponceMessageApi } from "../contracts/hh-process-response-message";
import type { GARDAPI } from "../contracts/loadGard";
import type { MyReceiptApi } from "../contracts/myReceipt";
import type { PostReq } from "../contracts/requestModels";
import type { STATMDEPOSITSApi, StatmValidationApi } from "../contracts/statmDeposit";

// import { HHProcessResponceMessageApi } from '../contracts/hh-process-response-message';
// import { BCYCREQ, HHBCYC } from '@/domain/entities/hhBcyc';
// import { HHBCYCApi } from '../contracts/hh-bcyc';
// import {
//   COLLECBILLREQUESTAPI,
//   COLLECTIONLISTOFBILLSREQAPI,
//   COLLECTIONLISTOFBILLSREQAPINew,
//   PARTIALCOLLECTBILLREQAPI,
// } from '../contracts/collectBill';
// import {
//   BILLINGDATEREQ,
//   STATMDEPOSIT,
//   StatmValidation,
// } from '@/domain/entities/statmDeposit';
// import {
//   STATMDEPOSITSApi,
//   StatmValidationApi,
// } from '../contracts/statmDeposit';
// import { GARD, POSTGARDREQ, SAVEGARDREQ } from '@/domain/entities/gard';
// import { GARDAPI } from '../contracts/loadGard';
// import {
//   COLLECTIONSUMMARY,
//   GARDSUMMARYREQ,
// } from '@/domain/entities/collectionSummary';
// import { COLLECTIONSUMMARYAPI } from '../contracts/collectionSummary';
// import { CASHIERBALANCEAPI } from '../contracts/cashierBalanace';
// import { CASHIERBALANCE } from '@/domain/entities/cashierBalance';
// import { PAYMENTMETHODE } from '@/domain/entities/paymentMethode';
// import { EnumType, PAYMENTMETHODSAPI } from '../contracts/enumType';
// import { COLLECTIONTYPEANDMETHODE } from '@/domain/entities/collectionTypes';
// import {
//   IBill2masReq,
//   IBillGroupBookWalk,
//   IBillGroupBookWalkBilng,
//   IReOpenGardReq,
// } from '@/domain/entities/reading';
// import { PostReq } from '../contracts/requestModels';
// import { BalanceApi } from '../contracts/balance';
// import { BALANCE } from '@/domain/entities/balance';
// import { MyReceiptApi } from '../contracts/myReceipt';
// import {
//   CANCELRECEIPTREQ,
//   EMPREQ,
//   MyReceipt,
//   RECEIPTREQ,
// } from '@/domain/entities/receipt';
// import {
//   REOPENCLOSEDBILLGROUPBOOKREQ,
//   REOPENCLOSEDBILLGROUPREQ,
// } from '@/domain/entities/billGroups';

export class HttpCollectionRepo extends BaseApi implements ICollectionRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Collection/`;
    super(baseurl, config.headers);
  }

  async GetPayment(req: IPaymentReq): Promise<CollectionDestributionItm> {
    const data: CollectionDestributionItem = await this.httpClient.Get(
      'GetPayment',
      req,
    );
    return data;
  }

  // صيانة النظام
  async GetPaymentLength(): Promise<number> {
    const len: number = await this.httpClient.Get('GetPaymentNoLength');
    return len;
  }

  async CancelStms(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelStms',
      {
        ...req,
        BOOK_NO: req.BOOK_NO ? req.BOOK_NO : 'null',
        WALK_NO: req.WALK_NO ? req.WALK_NO : 'null',
      },
    );
    console.log(res);
    return res;
  }

  async ClearHafzaPrint(req: CLEARHAFZAPRINTREQ): Promise<number> {
    const res: number = await this.httpClient.Get('ClearHafzaPrint', req);
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

  async Bcyc(req: BCYCREQ): Promise<HHBCYC[]> {
    const res: HHBCYCApi[] = await this.httpClient.Get('Bcyc', req);
    return res;
  }

  async CloseInDevice(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseInDevice',
      req,
    );
    console.log(res);
    return res;
  }

  async ReOpenClosedInDevice(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'ReOpenClosedInDevice',
      req,
    );
    console.log(res);
    return res;
  }

  async ReOpenClosededBillgroup(
    req: REOPENCLOSEDBILLGROUPREQ,
  ): Promise<number> {
    const res: number = await this.httpClient.Get(
      'ReOpenClosededBillgroup',
      req,
    );
    console.log(res);
    return res;
  }

  async ReOpenClosedBillGroupBook(
    req: REOPENCLOSEDBILLGROUPBOOKREQ,
  ): Promise<HHProcessResponceMessageApi> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'ReOpenClosededBillgroupBook',
      req,
    );
    console.log(res, 'appppp');
    return res;
  }

  // صفحه معالجه البيانات
  async UpdateCustomerBills(
    req: UPDATECUSTOMERBILLSREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'UpdateCustomerBills',
      req,
    );
    return res;
  }

  async CollectBill(
    req: COLLECBILLREQUESTAPI,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CollectBill',
      req,
    );
    return res;
  }

  async GetLastReceipt(
    req: GETLASTRECEIPTREQ,
  ): Promise<CollectionDestributionItm> {
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'GetLastReceipt',
      req,
    );
    return res;
  }

  async GetLastReceipts(
    req: GETLASTRECEIPTREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetLastReceipts',
      req,
    );
    return res;
  }

  async CancelCollection(
    req: ICancelCollectionReq,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CancelCollection',
      req,
    );
    return res;
  }

  async rejectReceiptPost(
    req: RejectPostReq,
  ): Promise<HHProcessResponceMessageApi> {
    const res: IHHProcessResponceMessage = await this.httpClient.Get(
      'RejectReceiptPost',
      req,
    );
    return res;
  }

  // لوحة التحكم
  async Billing2Mas(req: IBill2masReq): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'Billing2Mas',
      req,
    );
    return res;
  }

  async GetUnPostedStatmDeposits(req: {
    all?: boolean;
  }): Promise<STATMDEPOSIT[]> {
    const res: STATMDEPOSITSApi[] = await this.httpClient.Get(
      'GetUnPostedStatmDeposits',
      req,
    );
    return res;
  }

  async GetUnPosted(req: UNPOSTEDREQ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnPosted',
      req,
    );
    console.log(res, 'jjjjjjjjjjjjjjj');
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

  async CloseCWalkInDevice(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseInDevice',
      req,
    );
    return res;
  }

  async UpdateCustomerBillsBillgroup(
    req: UPDATECUSTOMERBILLSBILLGRPREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'UpdateCustomerBillsBillgroup',
      req,
    );
    return res;
  }

  async PostGardToBilling(
    req: POSTGARDREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'PostGardToBilling',
      req,
    );
    return res;
  }

  async OpenFawry(req: IBillGroupBookWalk): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'OpenFawry',
      req,
    );
    return res;
  }

  async CloseFawry(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseFawry',
      req,
    );
    return res;
  }

  async SaveGard(req: SAVEGARDREQ): Promise<CollectionDestributionItm[]> {
    const { payments, ...params } = req;

    const res: CollectionDestributionItem[] = await this.httpClient.Put(
      'SaveGard',
      req.payments,
      params,
    );
    return res;
  }

  async GetUnCollectedDetails(
    req: IReOpenGardReq & IUncollectedReq,
  ): Promise<GARD[]> {
    req.bilng_date = toISOString(req.bilng_date as string);

    const data: GARDAPI[] = await this.httpClient.Get(
      'GetUnCollectedDetails',
      req,
    );
    return data;
  }

  async GetGardSummary(
    req: IBillGroupBookWalkBilng & { empid?: number },
  ): Promise<COLLECTIONSUMMARY[]> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const data: COLLECTIONSUMMARYAPI[] = await this.httpClient.Get(
      'GetGardSummary',
      req,
    );
    return data;
  }

  async CloseGard(req: ICloseGardReq): Promise<IHHProcessResponceMessage> {
    const data: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CloseGard',
      req,
    );
    return data;
  }

  async ReOpenGard(req: IReOpenGardReq & { empid?: number }): Promise<boolean> {
    const data: boolean = await this.httpClient.Get('ReOpenGard', req);
    console.log(data, 'reopenfard');
    return data;
  }

  async GetPaymentForHq(
    req: IPaymentForHqReq,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetPaymentForHq',
      req,
    );
    return res;
  }

  async GetCashierBalance(custkey: string): Promise<CASHIERBALANCE> {
    const res: CASHIERBALANCEAPI = await this.httpClient.Get(
      'GetCashierBalance',
      { custkey },
    );
    const obj: CASHIERBALANCE = {
      custkey: res.Custkey,
      totalcollectedamount: res.TotalCollectedAmount,
      totalcollectedcount: res.TotalCollectedCount,
      customertotalcollectedamount: res.CustomerTotalCollectedAmount,
      customertotalcollectedcount: res.CustomerTotalCollectedCount,
    };
    return obj;
  }

  async GetUnPostedGroupMethod(empid: string): Promise<UNPOSTEDGROUPMETHODS[]> {
    const res: UNPOSTEDGROUPMETHODS[] = await this.httpClient.Get(
      'GetUnPostedGroupMethod',
      {
        empid,
      },
    );
    return res;
  }

  async CalcCharge(req: CALCCHARGEREQ): Promise<number[]> {
    const res: number[] = await this.httpClient.Get('CalcCharge', req);
    // console.log(res);
    return res;
  }

  async GetPaymentMethods(): Promise<PAYMENTMETHODE[]> {
    const res: PAYMENTMETHODSAPI[] =
      await this.httpClient.Get('getPaymentMethods');
    return res.map((item) => {
      const obj: PAYMENTMETHODE = {
        id: item?.ID,
        typeId: item?.TYPE_ID,
        description: item?.DESCRIPTION,
        bilingCode: item?.BILING_CODE,
        selectable: item?.SELECTABLE,
        isSystem: item?.IS_SYSTEM,
        receiptChargeAmount1: item?.RECEIPT_CHARGE_AMOUNT1,
        receiptChargePercentage1: item?.RECEIPT_CHARGE_PERCENTAGE1,
        receiptChargeTitle1: item?.RECEIPT_CHARGE_TITLE1,
        receiptChargeAmount2: item?.RECEIPT_CHARGE_AMOUNT2,
        receiptChargePercentage2: item?.RECEIPT_CHARGE_PERCENTAGE2,
        receiptChargeTitle2: item?.RECEIPT_CHARGE_TITLE2,
        receiptChargeAmount3: item?.RECEIPT_CHARGE_AMOUNT3,
        receiptChargePercentage3: item?.RECEIPT_CHARGE_PERCENTAGE3,
        receiptChargeTitle3: item?.RECEIPT_CHARGE_TITLE3,
        applyMin1: item?.APPLY_MIN1,
        applyMax1: item?.APPLY_MAX1,
        valueMin1: item?.VALUE_MIN1,
        valueMax1: item?.VALUE_MAX1,
        applyMin2: item?.APPLY_MIN2,
        applyMax2: item?.APPLY_MAX2,
        valueMin2: item?.VALUE_MIN2,
        valueMax2: item?.VALUE_MAX2,
        applyMin3: item?.APPLY_MIN3,
        applyMax3: item?.APPLY_MAX3,
        valueMin3: item?.VALUE_MIN3,
        valueMax3: item?.VALUE_MAX3,
        selectableHh: item?.SELECTABLE_HH,
      };
      return obj;
    });
  }

  // محصل مكتب
  async HqCollectListOfBills(
    req: COLLECTIONLISTOFBILLSREQAPI,
  ): Promise<CollectionDestributionItm> {
    const { payments, ...params } = req;
    console.log(req);
    const res: CollectionDestributionItm = await this.httpClient.Post(
      'HqCollectListOfBills',
      payments,
      params,
    );
    return res;
  }

  async HqCollectListOfBillsNew(
    req: COLLECTIONLISTOFBILLSREQAPINew,
  ): Promise<CollectionDestributionItm> {
    const { newPayments, ...params } = req;
    console.log(req, 'API');
    const res: CollectionDestributionItm = await this.httpClient.Post(
      'HqCollectListOfBillsNew',
      newPayments,
      params,
    );
    return res;
  }

  async HqCollectBill(
    req: COLLECBILLREQUESTAPI,
  ): Promise<CollectionDestributionItm> {
    console.log(req);
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'HqCollectBill',
      req,
    );
    console.log(res);
    return res;
  }

  async HqPartialCollect(
    req: PARTIALCOLLECTBILLREQAPI,
  ): Promise<CollectionDestributionItm> {
    console.log(req, 'ddddd');
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'HqPartialCollect',
      req,
    );
    return res;
  }

  async GetUnPostedSummary(): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] =
      await this.httpClient.Get('GetUnPostedSummary');
    return res;
  }

  async GetUnPostedDetails(req: {
    empid?: number;
    depositId?: number;
    custkey?: string;
  }): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnPostedDetails',
      req,
    );
    return res;
  }

  async ChangePayMethodUnPostedPaymentNos(
    req: ICHANGEPAYMENTMETHOD,
  ): Promise<boolean> {
    const res: boolean = await this.httpClient.Post(
      'ChangePayMethodUnPostedPaymentNos',
      req,
    );
    console.log(res);
    return res;
  }

  async ChangePayMethodUnPostedReciptsNos(
    req: ChangeReciptsModel,
  ): Promise<boolean> {
    const res: boolean = await this.httpClient.Post(
      'ChangePayMethodUnPostedReciptsNos',
      req,
    );
    console.log(res);
    return res;
  }

  // المعالجة الفردية
  async ReCalcDueAmount(
    req: IBillGroupBookWalk & { custkey?: string },
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'ReCalcDueAmount',
      req,
    );
    return res;
  }

  async DestributeReceipts(req: {
    custkey?: string;
  }): Promise<CollectionDestributionItm> {
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'DestributeReceipts',
      req,
    );
    return res;
  }

  async GetPaymentsForPrint(req: {
    custkey?: string;
    bilngDate?: string;
    billgroup?: number;
    bookno?: number;
    walkno?: number;
  }): Promise<void> {
    const res = await this.httpClient.Get('GetPaymentsForPrint', req);
    console.log(res);
  }

  // lookup
  async GetCollectionTypes(): Promise<COLLECTIONTYPEANDMETHODE[]> {
    const res: EnumType[] = await this.httpClient.Get('getCollectionTypes');
    return res.map((item) => {
      const obj: COLLECTIONTYPEANDMETHODE = {
        id: item.ID,
        description: item.DESCRIPTION,
        value: item.DESCRIPTION,
      };
      return obj;
    });
  }

  // // List<EnumType> getCollectionTypes()
  async GetCollectionMethods(): Promise<COLLECTIONTYPEANDMETHODE[]> {
    const res: EnumType[] = await this.httpClient.Get('getCollectionMethods');
    return res.map((item) => {
      const obj: COLLECTIONTYPEANDMETHODE = {
        id: item.ID,
        description: item.DESCRIPTION,
        value: item.DESCRIPTION,
      };
      return obj;
    });
  }

  // /////////////////
  async GetDeposits(empId: number): Promise<STATMDEPOSIT[]> {
    const res: STATMDEPOSITSApi[] = await this.httpClient.Get('GetDeposits', {
      id: empId,
    });
    return res;
  }

  async GetIssuePerWalk(
    bilng_date?: Date,
  ): Promise<CollectionDestributionItm[]> {
    const dt = toISOString(bilng_date as Date);
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetIssuePerWalk',
      { bilng_date: dt },
    );
    return res;
  }

  async GetIssuePerBillgroup(
    bilng_date?: Date,
  ): Promise<CollectionDestributionItm[]> {
    const dt = toISOString(bilng_date as Date);
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetIssuePerBillgroup',
      { bilng_date: dt },
    );
    return res;
  }

  async Mas2Billing(DepositId: number): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'Mas2Billing',
      { DepositId },
    );
    return res;
  }

  async GetNewReceptNo(): Promise<number> {
    const res: number = await this.httpClient.Get('GetNewReceptNo');
    return res;
  }

  async Post(req: PostReq): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'Post',
      req,
    );
    return res;
  }

  async GetUnPostedGroupBybilng_date(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnPostedGroupBybilng_date',
      req,
    );
    return res;
  }

  async GetCollectorsPerformance(
    req: COLLECTORSPERFORMANCEREQ,
  ): Promise<CollectionDestributionItm[]> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetCollectorsPerformance',
      req,
    );
    return res;
  }

  async GetUnCollectedPerWalk(
    req: UNCOLLECECTEDREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnCollectedPerWalk',
      req,
    );
    return res;
  }

  async Print(empid: number): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'Print',
      {
        empid,
      },
    );
    return res;
  }

  async GetPosted(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetPosted',
      req,
    );
    return res;
  }

  async GetPostedDetails(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]> {
    const url = 'GetPostedDetails';
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      url,
      req,
    );
    return res;
  }

  async GetUnCollectedDetailsForWalk(
    req: IBillGroupBookWalk & { mark?: boolean },
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnCollectedDetailsForWalk',
      req,
    );
    return res;
  }

  async GetBranchGardSummary(
    req: GARDSUMMARYREQ,
  ): Promise<COLLECTIONSUMMARY[]> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const res: COLLECTIONSUMMARYAPI[] = await this.httpClient.Get(
      'GetBranchGardSummary',
      req,
    );
    return res;
  }

  async GetCustomerPayments(req: {
    custkey: string;
  }): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetCustomerPayments',
      req,
    );
    return res;
  }

  async GetUnCollectedCustomerPayments(
    req: CUSTKEYREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnCollectedCustomerPayments',
      req,
    );
    return res;
  }

  async GetReCalcData(req: CUSTKEYREQ): Promise<CollectionDestributionItm> {
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'GetReCalcData',
      req,
    );
    return res;
  }

  async ListPayments(
    req: LISTPAYMENTSREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'ListPayments',
      req,
    );
    return res;
  }

  async GetPaymentsForHq(
    req: IBillGroupBookWalkBilng & CUSTKEYREQ,
  ): Promise<CollectionDestributionItm[]> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetPaymentsForHq',
      req,
    );
    return res;
  }

  async GetMissingCollection(
    req: IBillGroupBookWalkBilng,
  ): Promise<CollectionDestributionItm[]> {
    req.bilng_date = toISOString(req.bilng_date as string);
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetMissingCollection',
      req,
    );
    return res;
  }

  async GetBalance(): Promise<BALANCE[]> {
    const res: BalanceApi[] = await this.httpClient.Get('GetBalance');
    return res;
  }

  async GetCollectionPerDevice(): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetCollectionPerDevice',
    );
    return res;
  }

  async GetCollectionPerBook(): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetCollectionPerBook',
    );
    return res;
  }

  async CancelStmsAll(req: {
    deviceid: string;
  }): Promise<IHHProcessResponceMessage[]> {
    const res: HHProcessResponceMessageApi[] = await this.httpClient.Get(
      'CancelStmsAll',
      req,
    );
    return res;
  }

  async CancelPrepearToDeviceAll(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage[]> {
    const res: HHProcessResponceMessageApi[] = await this.httpClient.Get(
      'CancelPrepearToDeviceAll',
      req,
    );
    return res;
  }

  async CompensatePostedStmCollection(
    req: COMPONENTSTATEPOSTCOLLECTIONREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'CompensatePostedStmCollection',
      req,
    );
    return res;
  }

  async RecollectCanceledStm(
    req: RECOLLECTEDCANCELSTMREQ,
  ): Promise<IHHProcessResponceMessage> {
    const res: HHProcessResponceMessageApi = await this.httpClient.Get(
      'RecollectCanceledStm',
      req,
    );
    return res;
  }

  async GetStatmDeposits(req: BILLINGDATEREQ): Promise<STATMDEPOSIT[]> {
    const res: STATMDEPOSITSApi[] = await this.httpClient.Get(
      'GetStatmDeposits',
      req,
    );
    return res;
  }

  async CancelledReceipts(req: CANCELRECEIPTREQ): Promise<MyReceipt[]> {
    const res: MyReceiptApi[] = await this.httpClient.Get(
      'CancelledReceipts',
      req,
    );
    return res;
  }

  async OfficePendingReceipts(req: EMPREQ): Promise<MyReceipt[]> {
    const res: MyReceiptApi[] = await this.httpClient.Get(
      'OfficePendingReceipts',
      req,
    );
    return res;
  }

  async CancelledPrintLogs(req: EMPREQ): Promise<MyReceipt[]> {
    const res: MyReceiptApi[] = await this.httpClient.Get(
      'CancelledPrintLogs',
      req,
    );
    return res;
  }

  async Receipts(req: RECEIPTREQ): Promise<MyReceipt[]> {
    const res: MyReceiptApi[] = await this.httpClient.Get('Receipts', req);
    return res;
  }

  async GetValidationReport(req: {
    insBilngDate?: Date | string;
  }): Promise<StatmValidation[]> {
    const res: StatmValidationApi[] = await this.httpClient.Get(
      'GetValidationReport',
      req,
    );
    return res;
  }

  async GetUnCollectedBillsItemsPerBillgroup(
    req: BILLINGDATEREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnCollectedBillsItemsPerBillgroup',
      req,
    );
    return res;
  }

  async GetUnCollectedBillsItemsPerWalk(
    req: BILLINGDATEREQ,
  ): Promise<CollectionDestributionItm[]> {
    const res: CollectionDestributionItem[] = await this.httpClient.Get(
      'GetUnCollectedBillsItemsPerWalk',
      req,
    );
    return res;
  }

  async GetReciptsCustomer(
    custkey: string,
  ): Promise<CollectionDestributionReceipt[]> {
    const res: CollectionDestributionReceipt[] = await this.httpClient.Get(
      'GetReciptsCustomer',
      { custkey },
    );
    return res;
  }

  async GetPaymentRecipt(
    req: GetPaymentReciptRequest,
  ): Promise<CollectionDestributionItem> {
    const res: CollectionDestributionItem = await this.httpClient.Get(
      'GetPaymentRecipt',
      req,
    );
    return res;
  }

  async GetPaymentRecipts(
    req: ReciptBulkItem[],
  ): Promise<CollectionDestributionItem[]> {
    console.log(req, 'GetPaymentReciptsAPI');
    const res: CollectionDestributionItem[] = await this.httpClient.Post<
      ReciptBulkItem[],
      CollectionDestributionItem[]
    >('GetPaymentRecipts', req);
    return res;
  }
}
