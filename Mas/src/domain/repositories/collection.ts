import {
  CALCCHARGEREQ,
  CLEARHAFZAPRINTREQ,
  COLLECTIONPOSTEDSHAREDREQ,
  COLLECTORSPERFORMANCEREQ,
  CUSTKEYREQ,
  ChangeReciptsModel,
  CollectionDestributionItm,
  GETLASTRECEIPTREQ,
  ICHANGEPAYMENTMETHOD,
  ICancelCollectionReq,
  ICloseGardReq,
  IPaymentForHqReq,
  IPaymentReq,
  IReopenClosedBillGroupBookReq,
  IUncollectedReq,
  LISTPAYMENTSREQ,
  RejectPostReq,
  UNCOLLECECTEDREQ,
  UNPOSTEDDETAILSREQ,
  UNPOSTEDGROUPMETHODS,
  UNPOSTEDREQ,
} from '../entities/collection';
import { BCYCREQ, HHBCYC } from '../entities/hhBcyc';
import {
  COMPONENTSTATEPOSTCOLLECTIONREQ,
  IHHProcessResponceMessage,
  RECOLLECTEDCANCELSTMREQ,
  UPDATECUSTOMERBILLSBILLGRPREQ,
  UPDATECUSTOMERBILLSREQ,
} from '../entities/hhProcessResponseMessage';

import {
  COLLECBILLREQUESTAPI,
  COLLECTIONLISTOFBILLSREQAPI,
  COLLECTIONLISTOFBILLSREQAPINew,
  PARTIALCOLLECTBILLREQAPI,
} from '@/app/repositories-impl/contracts/collectBill';
import {
  BILLINGDATEREQ,
  STATMDEPOSIT,
  StatmValidation,
} from '../entities/statmDeposit';
import { GARD, POSTGARDREQ, SAVEGARDREQ } from '../entities/gard';
import {
  COLLECTIONSUMMARY,
  GARDSUMMARYREQ,
} from '../entities/collectionSummary';
import { CASHIERBALANCE } from '../entities/cashierBalance';
import { PAYMENTMETHODE } from '../entities/paymentMethode';
import { COLLECTIONTYPEANDMETHODE } from '../entities/collectionTypes';
import {
  IBill2masReq,
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  IReOpenGardReq,
} from '../entities/reading';
import { PostReq } from '@/app/repositories-impl/contracts/requestModels';
import { BALANCE } from '../entities/balance';
import {
  CANCELRECEIPTREQ,
  EMPREQ,
  MyReceipt,
  RECEIPTREQ,
} from '../entities/receipt';
import { REOPENCLOSEDBILLGROUPREQ } from '../entities/billGroups';
import {
  CollectionDestributionItem,
  CollectionDestributionReceipt,
  GetPaymentReciptRequest,
  ReciptBulkItem,
} from '@/app/repositories-impl/contracts/collectionDestributionItem';
import { HHProcessResponceMessageApi } from '@/app/repositories-impl/contracts/hh-process-response-message';

export interface ICollectionRepo {
  GetPayment: (req: IPaymentReq) => Promise<CollectionDestributionItm>;
  GetPaymentLength: () => Promise<number>;
  //  صيانة النظام
  CancelStms: (req: IBillGroupBookWalk) => Promise<IHHProcessResponceMessage>;
  ClearHafzaPrint: (req: CLEARHAFZAPRINTREQ) => Promise<number>;
  CancelPrepearToDevice: (
    req: IBillGroupBookWalk,
  ) => Promise<IHHProcessResponceMessage>;
  Bcyc: (req: BCYCREQ) => Promise<HHBCYC[]>;
  CloseInDevice: (
    req: IBillGroupBookWalkBilng,
  ) => Promise<IHHProcessResponceMessage>;
  ReOpenClosededBillgroup: (req: REOPENCLOSEDBILLGROUPREQ) => Promise<number>;
  ReOpenClosedInDevice: (
    req: IBillGroupBookWalkBilng,
  ) => Promise<IHHProcessResponceMessage>;
  // محصل مكتب
  GetPaymentForHq: (
    req: IPaymentForHqReq,
  ) => Promise<CollectionDestributionItm[]>;
  GetCashierBalance: (custkey: string) => Promise<CASHIERBALANCE>;
  CalcCharge: (req: CALCCHARGEREQ) => Promise<number[]>;
  GetPaymentMethods: () => Promise<PAYMENTMETHODE[]>; // lookup
  HqCollectListOfBills: (
    req: COLLECTIONLISTOFBILLSREQAPI,
  ) => Promise<CollectionDestributionItm>;

  HqCollectListOfBillsNew: (
    req: COLLECTIONLISTOFBILLSREQAPINew,
  ) => Promise<CollectionDestributionItm>;

  HqCollectBill: (
    req: COLLECBILLREQUESTAPI,
  ) => Promise<CollectionDestributionItm>;

  HqPartialCollect: (
    req: PARTIALCOLLECTBILLREQAPI,
  ) => Promise<CollectionDestributionItm>;
  GetUnPostedSummary: () => Promise<CollectionDestributionItm[]>;
  GetUnPosted(req: UNPOSTEDREQ): Promise<CollectionDestributionItm[]>;
  GetUnPostedDetails(
    req: UNPOSTEDDETAILSREQ,
  ): Promise<CollectionDestributionItm[]>;
  ChangePayMethodUnPostedPaymentNos(
    req: ICHANGEPAYMENTMETHOD,
  ): Promise<boolean>;

  ChangePayMethodUnPostedReciptsNos(req: ChangeReciptsModel): Promise<boolean>;

  GetUnPostedGroupMethod(empid: string): Promise<UNPOSTEDGROUPMETHODS[]>;

  // صفحه معالجه البيانات
  UpdateCustomerBills: (
    req: UPDATECUSTOMERBILLSREQ,
  ) => Promise<IHHProcessResponceMessage>;
  CollectBill: (
    req: COLLECBILLREQUESTAPI,
  ) => Promise<IHHProcessResponceMessage>;
  GetLastReceipt: (
    req: GETLASTRECEIPTREQ,
  ) => Promise<CollectionDestributionItm>;
  GetLastReceipts: (
    req: GETLASTRECEIPTREQ,
  ) => Promise<CollectionDestributionItm[]>;
  CancelCollection: (
    req: ICancelCollectionReq,
  ) => Promise<IHHProcessResponceMessage>;
  rejectReceiptPost: (
    req: RejectPostReq,
  ) => Promise<HHProcessResponceMessageApi>;
  // //صفحه لوحة التحكم
  Billing2Mas(req: IBill2masReq): Promise<IHHProcessResponceMessage>;
  GetUnPostedStatmDeposits(req: { all?: boolean }): Promise<STATMDEPOSIT[]>;
  CloseWalkRoute(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage>;
  CloseCWalkInDevice(
    req: IBillGroupBookWalkBilng,
  ): Promise<IHHProcessResponceMessage>;
  UpdateCustomerBillsBillgroup(
    req: UPDATECUSTOMERBILLSBILLGRPREQ,
  ): Promise<IHHProcessResponceMessage>;
  PostGardToBilling(req: POSTGARDREQ): Promise<IHHProcessResponceMessage>;
  OpenFawry(req: IBillGroupBookWalkBilng): Promise<IHHProcessResponceMessage>;
  CloseFawry(req: IBillGroupBookWalkBilng): Promise<IHHProcessResponceMessage>;
  SaveGard(req: SAVEGARDREQ): Promise<CollectionDestributionItm[]>;
  GetUnCollectedDetails: (
    req: IReOpenGardReq & IUncollectedReq,
  ) => Promise<GARD[]>;
  GetGardSummary: (
    req: IBillGroupBookWalkBilng & { empid?: number },
  ) => Promise<COLLECTIONSUMMARY[]>;
  CloseGard: (req: ICloseGardReq) => Promise<IHHProcessResponceMessage>;
  ReOpenGard: (req: IReOpenGardReq & { empid?: number }) => Promise<boolean>;
  // المعالجه الفردية
  ReCalcDueAmount(
    req: IBillGroupBookWalk & { custkey?: string },
  ): Promise<IHHProcessResponceMessage>;
  DestributeReceipts(req: {
    custkey?: string;
  }): Promise<CollectionDestributionItm>;
  GetPaymentsForPrint(req: {
    custkey?: string;
    bilngDate?: string;
    billgroup?: number;
    bookno?: number;
    walkno?: number;
  }): Promise<void>;
  // lookup
  GetCollectionTypes(): Promise<COLLECTIONTYPEANDMETHODE[]>;
  GetCollectionMethods(): Promise<COLLECTIONTYPEANDMETHODE[]>;
  // /////////////////
  GetDeposits(empId: number): Promise<STATMDEPOSIT[]>;
  GetIssuePerWalk(bilng_date?: Date): Promise<CollectionDestributionItm[]>;
  GetIssuePerBillgroup(bilng_date?: Date): Promise<CollectionDestributionItm[]>;
  Mas2Billing(DepositId: number): Promise<IHHProcessResponceMessage>;
  GetNewReceptNo(): Promise<number>;
  Post(req: PostReq): Promise<CollectionDestributionItm[]>;
  GetUnPostedGroupBybilng_date(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetCollectorsPerformance(
    req: COLLECTORSPERFORMANCEREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetUnCollectedPerWalk(
    req: UNCOLLECECTEDREQ,
  ): Promise<CollectionDestributionItm[]>;
  Print(empid: number): Promise<CollectionDestributionItm[]>;
  GetPosted(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetPostedDetails(
    req: COLLECTIONPOSTEDSHAREDREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetUnCollectedDetailsForWalk(
    req: IBillGroupBookWalk & { mark?: boolean },
  ): Promise<CollectionDestributionItm[]>;
  GetBranchGardSummary(req: GARDSUMMARYREQ): Promise<COLLECTIONSUMMARY[]>;
  GetCustomerPayments(req: CUSTKEYREQ): Promise<CollectionDestributionItm[]>;
  GetUnCollectedCustomerPayments(
    req: CUSTKEYREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetReCalcData(req: CUSTKEYREQ): Promise<CollectionDestributionItm>;
  ListPayments(req: LISTPAYMENTSREQ): Promise<CollectionDestributionItm[]>;
  GetPaymentsForHq(
    req: IBillGroupBookWalkBilng & CUSTKEYREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetMissingCollection(
    req: IBillGroupBookWalkBilng,
  ): Promise<CollectionDestributionItm[]>;
  GetBalance(): Promise<BALANCE[]>;
  GetCollectionPerDevice(): Promise<CollectionDestributionItm[]>;
  GetCollectionPerBook(): Promise<CollectionDestributionItm[]>;
  CancelStmsAll(req: {
    deviceid: string;
  }): Promise<IHHProcessResponceMessage[]>;
  CancelPrepearToDeviceAll(
    req: IBillGroupBookWalk,
  ): Promise<IHHProcessResponceMessage[]>;
  CompensatePostedStmCollection(
    req: COMPONENTSTATEPOSTCOLLECTIONREQ,
  ): Promise<IHHProcessResponceMessage>;
  RecollectCanceledStm(
    req: RECOLLECTEDCANCELSTMREQ,
  ): Promise<IHHProcessResponceMessage>;
  GetStatmDeposits(req: BILLINGDATEREQ): Promise<STATMDEPOSIT[]>;
  CancelledReceipts(req: CANCELRECEIPTREQ): Promise<MyReceipt[]>;
  OfficePendingReceipts(req: EMPREQ): Promise<MyReceipt[]>;
  CancelledPrintLogs(req: EMPREQ): Promise<MyReceipt[]>;
  Receipts(req: RECEIPTREQ): Promise<MyReceipt[]>;
  GetValidationReport(req: {
    insBilngDate?: Date | string;
  }): Promise<StatmValidation[]>;
  GetUnCollectedBillsItemsPerBillgroup(
    req: BILLINGDATEREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetUnCollectedBillsItemsPerWalk(
    req: BILLINGDATEREQ,
  ): Promise<CollectionDestributionItm[]>;
  GetReciptsCustomer(custkey: string): Promise<CollectionDestributionReceipt[]>;
  GetPaymentRecipt(
    req: GetPaymentReciptRequest,
  ): Promise<CollectionDestributionItem>;
  GetPaymentRecipts(
    req: ReciptBulkItem[],
  ): Promise<CollectionDestributionItem[]>;
  ReOpenClosedBillGroupBook(req: IReopenClosedBillGroupBookReq): Promise<IHHProcessResponceMessage>;
}
