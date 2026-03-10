// package: BillingRepositorySys
// file: BillingSystem.proto

import * as BillingSystem_pb from "./BillingSystem_pb";
import * as mas_messages_pb from "./mas-messages_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IBilngDataSourceIsDummy = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.IsDummyRq;
  readonly responseType: typeof BillingSystem_pb.IsDummyRs;
};

type IBilngDataSourcegetDllVersion = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.getDllVersionRq;
  readonly responseType: typeof BillingSystem_pb.getDllVersionRs;
};

type IBilngDataSourceGetDefaultReadingNote = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetDefaultReadingNoteRq;
  readonly responseType: typeof BillingSystem_pb.GetDefaultReadingNoteRs;
};

type IBilngDataSourceUpdateCustomerSeq = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateCustomerSeqRq;
  readonly responseType: typeof BillingSystem_pb.UpdateCustomerSeqRs;
};

type IBilngDataSourceUpdateMeterSeq = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateMeterSeqRq;
  readonly responseType: typeof BillingSystem_pb.UpdateMeterSeqRs;
};

type IBilngDataSourceGetReadings = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetReadingsRq;
  readonly responseType: typeof BillingSystem_pb.GetReadingsRs;
};

type IBilngDataSourceGetAllStatmsForBillgroup = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetAllStatmsForBillgroupRq;
  readonly responseType: typeof BillingSystem_pb.GetAllStatmsForBillgroupRs;
};

type IBilngDataSourceCancelStm = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CancelStmRq;
  readonly responseType: typeof BillingSystem_pb.ProcessResult;
};

type IBilngDataSourceGetMetersBooksStatus = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMetersBooksStatusRq;
  readonly responseType: typeof BillingSystem_pb.GetMetersBooksStatusRs;
};

type IBilngDataSourceGetMeterBookStatus = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMeterBookStatusRq;
  readonly responseType: typeof BillingSystem_pb.WalkStatus;
};

type IBilngDataSourceGetCustomersBooksStatus = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomersBooksStatusRq;
  readonly responseType: typeof BillingSystem_pb.GetCustomersBooksStatusRs;
};

type IBilngDataSourceGetCustomerBookStatus = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerBookStatusRq;
  readonly responseType: typeof BillingSystem_pb.WalkStatus;
};

type IBilngDataSourceSetReadings = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.SetReadingsRq;
  readonly responseType: typeof BillingSystem_pb.ProcessResult;
};

type IBilngDataSourceSetStatms = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.SetStatmsRq;
  readonly responseType: typeof BillingSystem_pb.ProcessResult;
};

type IBilngDataSourceValidateDeposit = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.ValidateDepositRq;
  readonly responseType: typeof BillingSystem_pb.DepositValidationResponce;
};

type IBilngDataSourceSetGard = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.SetGardRq;
  readonly responseType: typeof BillingSystem_pb.ProcessResult;
};

type IBilngDataSourceUpdateCustomerData = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateCustomerDataRq;
  readonly responseType: typeof BillingSystem_pb.ProcessResult;
};

type IBilngDataSourceRegisterCustomerComplaint = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.RegisterCustomerComplaintRq;
  readonly responseType: typeof BillingSystem_pb.RegisterCustomerComplaintRs;
};

type IBilngDataSourceGetConsumptionTypesGroup = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetConsumptionTypesGroupRq;
  readonly responseType: typeof BillingSystem_pb.GetConsumptionTypesGroupRs;
};

type IBilngDataSourceGetConsumptionTypesStation = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetConsumptionTypesStationRq;
  readonly responseType: typeof BillingSystem_pb.GetConsumptionTypesStationRs;
};

type IBilngDataSourceGetConsumptionGroupTypes = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetConsumptionGroupTypesRq;
  readonly responseType: typeof BillingSystem_pb.GetConsumptionGroupTypesRs;
};

type IBilngDataSourceGetCustomerBooks = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerBooksRq;
  readonly responseType: typeof BillingSystem_pb.GetCustomerBooksRs;
};

type IBilngDataSourceGetCustomerWalks = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerWalksRq;
  readonly responseType: typeof BillingSystem_pb.GetCustomerWalksRs;
};

type IBilngDataSourceGetMeterBooks = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMeterBooksRq;
  readonly responseType: typeof BillingSystem_pb.GetMeterBooksRs;
};

type IBilngDataSourceGetMeterWalks = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMeterWalksRq;
  readonly responseType: typeof BillingSystem_pb.GetMeterWalksRs;
};

type IBilngDataSourceGetEmployees = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetEmployeesRq;
  readonly responseType: typeof BillingSystem_pb.GetEmployeesRs;
};

type IBilngDataSourceGetStations = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetStationsRq;
  readonly responseType: typeof BillingSystem_pb.GetStationsRs;
};

type IBilngDataSourceGetBillGroups = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillGroupsRq;
  readonly responseType: typeof BillingSystem_pb.GetBillGroupsRs;
};

type IBilngDataSourceGetAccessCodes = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetAccessCodesRq;
  readonly responseType: typeof BillingSystem_pb.GetAccessCodesRs;
};

type IBilngDataSourceGetCurrentReadingCycle = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCurrentReadingCycleRq;
  readonly responseType: typeof BillingSystem_pb.Cycle;
};

type IBilngDataSourceGetCurrentReadingCycleWithDate = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCurrentReadingCycleWithDateRq;
  readonly responseType: typeof BillingSystem_pb.Cycle;
};

type IBilngDataSourceGetCurrentCollectionCycle = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCurrentCollectionCycleRq;
  readonly responseType: typeof BillingSystem_pb.Cycle;
};

type IBilngDataSourceGetReadingCycle = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetReadingCycleRq;
  readonly responseType: typeof BillingSystem_pb.Cycle;
};

type IBilngDataSourceGetCollectionCycle = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCollectionCycleRq;
  readonly responseType: typeof BillingSystem_pb.Cycle;
};

type IBilngDataSourceGetBillingSystemName = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillingSystemNameRq;
  readonly responseType: typeof BillingSystem_pb.GetBillingSystemNameRs;
};

type IBilngDataSourceGetBillingSystemVersion = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillingSystemVersionRq;
  readonly responseType: typeof BillingSystem_pb.GetBillingSystemVersionRs;
};

type IBilngDataSourceIsCollected = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.IsCollectedRq;
  readonly responseType: typeof BillingSystem_pb.IsCollectedRs;
};

type IBilngDataSourceStatus = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.StatusRq;
  readonly responseType: typeof BillingSystem_pb.StatusRs;
};

type IBilngDataSourceGetBillItemTypes = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillItemTypesRq;
  readonly responseType: typeof BillingSystem_pb.GetBillItemTypesRs;
};

type IBilngDataSourceGetBillItemTypesByBillItem = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillItemTypesByBillItemRq;
  readonly responseType: typeof BillingSystem_pb.GetBillItemTypesRs;
};

type IBilngDataSourceGetBillItemTypesByBillPrint = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillItemTypesByBillPrintRq;
  readonly responseType: typeof BillingSystem_pb.GetBillItemTypesByBillPrintRs;
};

type IBilngDataSourceGetStatmItems = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetStatmItemsRq;
  readonly responseType: typeof BillingSystem_pb.StatmItem;
};

type IBilngDataSourceGetStatmItemsByFStatm = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetStatmItemsByFStatmRq;
  readonly responseType: typeof BillingSystem_pb.StatmItem;
};

type IBilngDataSourceGetCollectionSummary = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCollectionSummaryRq;
  readonly responseType: typeof BillingSystem_pb.GetCollectionSummaryRs;
};

type IBilngDataSourceGetBillType = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillTypeRq;
  readonly responseType: typeof BillingSystem_pb.BillType;
};

type IBilngDataSourceGetBillTypeByFtrans = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillTypeByFtransRq;
  readonly responseType: typeof BillingSystem_pb.BillType;
};

type IBilngDataSourceGetBillTypeByBillPrint = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillTypeByBillPrintRq;
  readonly responseType: typeof BillingSystem_pb.BillType;
};

type IBilngDataSourceGetBill_CTYPES = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBillCtypesRq;
  readonly responseType: typeof BillingSystem_pb.StatmCtypeRs;
};

type IBilngDataSourceGetBill_CTYPESByFtrans = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetBill_CTYPESByFtransRq;
  readonly responseType: typeof BillingSystem_pb.StatmCtypeRs;
};

type IBilngDataSourceCloseCollectionCycle = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CloseCollectionCycleRq;
  readonly responseType: typeof BillingSystem_pb.CloseCollectionCycleRs;
};

type IBilngDataSourceUpdateHH_BCYC = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateHH_BCYCRq;
  readonly responseType: typeof BillingSystem_pb.UpdateHH_BCYCRs;
};

type IBilngDataSourceUpdateMeterInfo = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateMeterInfoRq;
  readonly responseType: typeof BillingSystem_pb.UpdateMeterInfoRs;
};

type IBilngDataSourceGetDepositValue = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetDepositValueRq;
  readonly responseType: typeof BillingSystem_pb.BillSum;
};

type IBilngDataSourceUpdateBilngAssignC = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateBilngAssignCRq;
  readonly responseType: typeof BillingSystem_pb.UpdateBilngAssignCRs;
};

type IBilngDataSourceUpdateBilngAssignCWithStatments = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateBilngAssignCWithStatmentsRq;
  readonly responseType: typeof BillingSystem_pb.UpdateBilngAssignCRs;
};

type IBilngDataSourceUpdateBilngAssignR = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateBilngAssignRRq;
  readonly responseType: typeof BillingSystem_pb.UpdateBilngAssignRRs;
};

type IBilngDataSourceCancelSewerService = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CancelSewerServiceRq;
  readonly responseType: typeof BillingSystem_pb.CancelSewerServiceRs;
};

type IBilngDataSourceGetCustomerInfo = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerInfoRq;
  readonly responseType: typeof BillingSystem_pb.CustomerInfo;
};

type IBilngDataSourceGetCustomerAgeems = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerInfoRq;
  readonly responseType: typeof BillingSystem_pb.CustomerAgreems;
};

type IBilngDataSourceExecuteSqlCommand = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.ExecuteSqlCommandRq;
  readonly responseType: typeof BillingSystem_pb.ExecuteSqlCommandRs;
};

type IBilngDataSourceVerifyCollectionAmount = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.VerifyCollectionAmountRq;
  readonly responseType: typeof BillingSystem_pb.CollectionAmountAcceptance;
};

type IBilngDataSourceAddInvoicedReading = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.InvoicedReadingForm;
  readonly responseType: typeof BillingSystem_pb.AddInvoicedReadingRs;
};

type IBilngDataSourceGetLastReading = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetLastReadingRq;
  readonly responseType: typeof BillingSystem_pb.ReadingRecord;
};

type IBilngDataSourceGetLastInvoicedReading = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetLastReadingRq;
  readonly responseType: typeof BillingSystem_pb.InvoicedReadingRecord;
};

type IBilngDataSourceGetIssueType = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetIssueTypeRq;
  readonly responseType: typeof BillingSystem_pb.GetIssueTypeRs;
};

type IBilngDataSourceInitialize = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.InitializeRq;
  readonly responseType: typeof BillingSystem_pb.InitializeRs;
};

type IBilngDataSourceSetDebug = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.SetDebugRq;
  readonly responseType: typeof BillingSystem_pb.SetDebugRs;
};

type IBilngDataSourceGetMarketingPlan = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMarketingPlanRq;
  readonly responseType: typeof BillingSystem_pb.MarketingResult;
};

type IBilngDataSourceApplyMarketingPlan = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.MarketingResult;
  readonly responseType: typeof BillingSystem_pb.ApplyMarketingPlanRs;
};

type IBilngDataSourceGetInfo = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetInfoRq;
  readonly responseType: typeof BillingSystem_pb.ReCalcModel;
};

type IBilngDataSourceCalc = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CalcRq;
  readonly responseType: typeof BillingSystem_pb.ReCalcModel;
};

type IBilngDataSourcePost = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.PostRq;
  readonly responseType: typeof BillingSystem_pb.ReCalcModel;
};

type IBilngDataSourceFillRecal = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.FillRecalRq;
  readonly responseType: typeof BillingSystem_pb.RecalcModelNew;
};

type IBilngDataSourceModifyAndExecute = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.RecalcModelNew;
  readonly responseType: typeof BillingSystem_pb.RecalcModelNew;
};

type IBilngDataSourceGetMeterMakes = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMeterMakesRq;
  readonly responseType: typeof BillingSystem_pb.LuMeterMake;
};

type IBilngDataSourceGetMeterSizes = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetMeterSizesRq;
  readonly responseType: typeof BillingSystem_pb.LuMeterSize;
};

type IBilngDataSourceGetCustomerData = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetCustomerDataRq;
  readonly responseType: typeof BillingSystem_pb.CustModModel;
};

type IBilngDataSourcePostCustomerData = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CustModModel;
  readonly responseType: typeof BillingSystem_pb.CustModModel;
};

type IBilngDataSourceAddMissingMeter = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.MeterInfo;
  readonly responseType: typeof BillingSystem_pb.AddMissingMeterRs;
};

type IBilngDataSourceVerifyIssue = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.VerifyIssueRq;
  readonly responseType: typeof BillingSystem_pb.IssueVerificationResultItem;
};

type IBilngDataSourceGetNewCustomersKeysList = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetNewCustomersKeysListRq;
  readonly responseType: typeof BillingSystem_pb.GetNewCustomersKeysListRs;
};

type IBilngDataSourceUpdateCustomersKeysList = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.UpdateCustomersKeysListRq;
  readonly responseType: typeof BillingSystem_pb.UpdateCustomersKeysListRs;
};

type IBilngDataSourceGetAbstractCustomerInfo = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetAbstractCustomerInfoRq;
  readonly responseType: typeof BillingSystem_pb.CustomerInfo;
};

type IBilngDataSourceCreateFaxNoIndex = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CreateFaxNoIndexRq;
  readonly responseType: typeof BillingSystem_pb.CreateFaxNoIndexRs;
};

type IBilngDataSourceGetCustomerMetrDtl = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CustkeyRq;
  readonly responseType: typeof BillingSystem_pb.GetCustomerMetrDtlRs;
};

type IBilngDataSourceGetStationCode = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.GetStationCodeRq;
  readonly responseType: typeof BillingSystem_pb.GetStationCodeRs;
};

type IBilngDataSourceImportAllDataFromBilling = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.EMPTY;
  readonly responseType: typeof BillingSystem_pb.IMPORT_ALL_DATA_RS;
};

type IBilngDataSourceCalcBillgroup = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.CalcBillgroupRq;
  readonly responseType: typeof BillingSystem_pb.CalcBillgroupRs;
};

type IBilngDataSourceGetAllOpenedCyclesInEdams = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof BillingSystem_pb.EMPTY;
  readonly responseType: typeof BillingSystem_pb.ArrSumBcycRs;
};

type IBilngDataSourceGetAllData = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mas_messages_pb.EMPTY;
  readonly responseType: typeof mas_messages_pb.AllCustomerData;
};

type IBilngDataSourceGetBillgroupData = {
  readonly methodName: string;
  readonly service: typeof IBilngDataSource;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mas_messages_pb.BillGroupBookNoRq;
  readonly responseType: typeof mas_messages_pb.AllCustomerData;
};

export class IBilngDataSource {
  static readonly serviceName: string;
  static readonly IsDummy: IBilngDataSourceIsDummy;
  static readonly getDllVersion: IBilngDataSourcegetDllVersion;
  static readonly GetDefaultReadingNote: IBilngDataSourceGetDefaultReadingNote;
  static readonly UpdateCustomerSeq: IBilngDataSourceUpdateCustomerSeq;
  static readonly UpdateMeterSeq: IBilngDataSourceUpdateMeterSeq;
  static readonly GetReadings: IBilngDataSourceGetReadings;
  static readonly GetAllStatmsForBillgroup: IBilngDataSourceGetAllStatmsForBillgroup;
  static readonly CancelStm: IBilngDataSourceCancelStm;
  static readonly GetMetersBooksStatus: IBilngDataSourceGetMetersBooksStatus;
  static readonly GetMeterBookStatus: IBilngDataSourceGetMeterBookStatus;
  static readonly GetCustomersBooksStatus: IBilngDataSourceGetCustomersBooksStatus;
  static readonly GetCustomerBookStatus: IBilngDataSourceGetCustomerBookStatus;
  static readonly SetReadings: IBilngDataSourceSetReadings;
  static readonly SetStatms: IBilngDataSourceSetStatms;
  static readonly ValidateDeposit: IBilngDataSourceValidateDeposit;
  static readonly SetGard: IBilngDataSourceSetGard;
  static readonly UpdateCustomerData: IBilngDataSourceUpdateCustomerData;
  static readonly RegisterCustomerComplaint: IBilngDataSourceRegisterCustomerComplaint;
  static readonly GetConsumptionTypesGroup: IBilngDataSourceGetConsumptionTypesGroup;
  static readonly GetConsumptionTypesStation: IBilngDataSourceGetConsumptionTypesStation;
  static readonly GetConsumptionGroupTypes: IBilngDataSourceGetConsumptionGroupTypes;
  static readonly GetCustomerBooks: IBilngDataSourceGetCustomerBooks;
  static readonly GetCustomerWalks: IBilngDataSourceGetCustomerWalks;
  static readonly GetMeterBooks: IBilngDataSourceGetMeterBooks;
  static readonly GetMeterWalks: IBilngDataSourceGetMeterWalks;
  static readonly GetEmployees: IBilngDataSourceGetEmployees;
  static readonly GetStations: IBilngDataSourceGetStations;
  static readonly GetBillGroups: IBilngDataSourceGetBillGroups;
  static readonly GetAccessCodes: IBilngDataSourceGetAccessCodes;
  static readonly GetCurrentReadingCycle: IBilngDataSourceGetCurrentReadingCycle;
  static readonly GetCurrentReadingCycleWithDate: IBilngDataSourceGetCurrentReadingCycleWithDate;
  static readonly GetCurrentCollectionCycle: IBilngDataSourceGetCurrentCollectionCycle;
  static readonly GetReadingCycle: IBilngDataSourceGetReadingCycle;
  static readonly GetCollectionCycle: IBilngDataSourceGetCollectionCycle;
  static readonly GetBillingSystemName: IBilngDataSourceGetBillingSystemName;
  static readonly GetBillingSystemVersion: IBilngDataSourceGetBillingSystemVersion;
  static readonly IsCollected: IBilngDataSourceIsCollected;
  static readonly Status: IBilngDataSourceStatus;
  static readonly GetBillItemTypes: IBilngDataSourceGetBillItemTypes;
  static readonly GetBillItemTypesByBillItem: IBilngDataSourceGetBillItemTypesByBillItem;
  static readonly GetBillItemTypesByBillPrint: IBilngDataSourceGetBillItemTypesByBillPrint;
  static readonly GetStatmItems: IBilngDataSourceGetStatmItems;
  static readonly GetStatmItemsByFStatm: IBilngDataSourceGetStatmItemsByFStatm;
  static readonly GetCollectionSummary: IBilngDataSourceGetCollectionSummary;
  static readonly GetBillType: IBilngDataSourceGetBillType;
  static readonly GetBillTypeByFtrans: IBilngDataSourceGetBillTypeByFtrans;
  static readonly GetBillTypeByBillPrint: IBilngDataSourceGetBillTypeByBillPrint;
  static readonly GetBill_CTYPES: IBilngDataSourceGetBill_CTYPES;
  static readonly GetBill_CTYPESByFtrans: IBilngDataSourceGetBill_CTYPESByFtrans;
  static readonly CloseCollectionCycle: IBilngDataSourceCloseCollectionCycle;
  static readonly UpdateHH_BCYC: IBilngDataSourceUpdateHH_BCYC;
  static readonly UpdateMeterInfo: IBilngDataSourceUpdateMeterInfo;
  static readonly GetDepositValue: IBilngDataSourceGetDepositValue;
  static readonly UpdateBilngAssignC: IBilngDataSourceUpdateBilngAssignC;
  static readonly UpdateBilngAssignCWithStatments: IBilngDataSourceUpdateBilngAssignCWithStatments;
  static readonly UpdateBilngAssignR: IBilngDataSourceUpdateBilngAssignR;
  static readonly CancelSewerService: IBilngDataSourceCancelSewerService;
  static readonly GetCustomerInfo: IBilngDataSourceGetCustomerInfo;
  static readonly GetCustomerAgeems: IBilngDataSourceGetCustomerAgeems;
  static readonly ExecuteSqlCommand: IBilngDataSourceExecuteSqlCommand;
  static readonly VerifyCollectionAmount: IBilngDataSourceVerifyCollectionAmount;
  static readonly AddInvoicedReading: IBilngDataSourceAddInvoicedReading;
  static readonly GetLastReading: IBilngDataSourceGetLastReading;
  static readonly GetLastInvoicedReading: IBilngDataSourceGetLastInvoicedReading;
  static readonly GetIssueType: IBilngDataSourceGetIssueType;
  static readonly Initialize: IBilngDataSourceInitialize;
  static readonly SetDebug: IBilngDataSourceSetDebug;
  static readonly GetMarketingPlan: IBilngDataSourceGetMarketingPlan;
  static readonly ApplyMarketingPlan: IBilngDataSourceApplyMarketingPlan;
  static readonly GetInfo: IBilngDataSourceGetInfo;
  static readonly Calc: IBilngDataSourceCalc;
  static readonly Post: IBilngDataSourcePost;
  static readonly FillRecal: IBilngDataSourceFillRecal;
  static readonly ModifyAndExecute: IBilngDataSourceModifyAndExecute;
  static readonly GetMeterMakes: IBilngDataSourceGetMeterMakes;
  static readonly GetMeterSizes: IBilngDataSourceGetMeterSizes;
  static readonly GetCustomerData: IBilngDataSourceGetCustomerData;
  static readonly PostCustomerData: IBilngDataSourcePostCustomerData;
  static readonly AddMissingMeter: IBilngDataSourceAddMissingMeter;
  static readonly VerifyIssue: IBilngDataSourceVerifyIssue;
  static readonly GetNewCustomersKeysList: IBilngDataSourceGetNewCustomersKeysList;
  static readonly UpdateCustomersKeysList: IBilngDataSourceUpdateCustomersKeysList;
  static readonly GetAbstractCustomerInfo: IBilngDataSourceGetAbstractCustomerInfo;
  static readonly CreateFaxNoIndex: IBilngDataSourceCreateFaxNoIndex;
  static readonly GetCustomerMetrDtl: IBilngDataSourceGetCustomerMetrDtl;
  static readonly GetStationCode: IBilngDataSourceGetStationCode;
  static readonly ImportAllDataFromBilling: IBilngDataSourceImportAllDataFromBilling;
  static readonly CalcBillgroup: IBilngDataSourceCalcBillgroup;
  static readonly GetAllOpenedCyclesInEdams: IBilngDataSourceGetAllOpenedCyclesInEdams;
  static readonly GetAllData: IBilngDataSourceGetAllData;
  static readonly GetBillgroupData: IBilngDataSourceGetBillgroupData;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class IBilngDataSourceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  isDummy(
    requestMessage: BillingSystem_pb.IsDummyRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IsDummyRs|null) => void
  ): UnaryResponse;
  isDummy(
    requestMessage: BillingSystem_pb.IsDummyRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IsDummyRs|null) => void
  ): UnaryResponse;
  getDllVersion(
    requestMessage: BillingSystem_pb.getDllVersionRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.getDllVersionRs|null) => void
  ): UnaryResponse;
  getDllVersion(
    requestMessage: BillingSystem_pb.getDllVersionRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.getDllVersionRs|null) => void
  ): UnaryResponse;
  getDefaultReadingNote(
    requestMessage: BillingSystem_pb.GetDefaultReadingNoteRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetDefaultReadingNoteRs|null) => void
  ): UnaryResponse;
  getDefaultReadingNote(
    requestMessage: BillingSystem_pb.GetDefaultReadingNoteRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetDefaultReadingNoteRs|null) => void
  ): UnaryResponse;
  updateCustomerSeq(
    requestMessage: BillingSystem_pb.UpdateCustomerSeqRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateCustomerSeqRs|null) => void
  ): UnaryResponse;
  updateCustomerSeq(
    requestMessage: BillingSystem_pb.UpdateCustomerSeqRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateCustomerSeqRs|null) => void
  ): UnaryResponse;
  updateMeterSeq(
    requestMessage: BillingSystem_pb.UpdateMeterSeqRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateMeterSeqRs|null) => void
  ): UnaryResponse;
  updateMeterSeq(
    requestMessage: BillingSystem_pb.UpdateMeterSeqRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateMeterSeqRs|null) => void
  ): UnaryResponse;
  getReadings(
    requestMessage: BillingSystem_pb.GetReadingsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetReadingsRs|null) => void
  ): UnaryResponse;
  getReadings(
    requestMessage: BillingSystem_pb.GetReadingsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetReadingsRs|null) => void
  ): UnaryResponse;
  getAllStatmsForBillgroup(
    requestMessage: BillingSystem_pb.GetAllStatmsForBillgroupRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetAllStatmsForBillgroupRs|null) => void
  ): UnaryResponse;
  getAllStatmsForBillgroup(
    requestMessage: BillingSystem_pb.GetAllStatmsForBillgroupRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetAllStatmsForBillgroupRs|null) => void
  ): UnaryResponse;
  cancelStm(
    requestMessage: BillingSystem_pb.CancelStmRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  cancelStm(
    requestMessage: BillingSystem_pb.CancelStmRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  getMetersBooksStatus(
    requestMessage: BillingSystem_pb.GetMetersBooksStatusRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMetersBooksStatusRs|null) => void
  ): UnaryResponse;
  getMetersBooksStatus(
    requestMessage: BillingSystem_pb.GetMetersBooksStatusRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMetersBooksStatusRs|null) => void
  ): UnaryResponse;
  getMeterBookStatus(
    requestMessage: BillingSystem_pb.GetMeterBookStatusRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.WalkStatus|null) => void
  ): UnaryResponse;
  getMeterBookStatus(
    requestMessage: BillingSystem_pb.GetMeterBookStatusRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.WalkStatus|null) => void
  ): UnaryResponse;
  getCustomersBooksStatus(
    requestMessage: BillingSystem_pb.GetCustomersBooksStatusRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomersBooksStatusRs|null) => void
  ): UnaryResponse;
  getCustomersBooksStatus(
    requestMessage: BillingSystem_pb.GetCustomersBooksStatusRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomersBooksStatusRs|null) => void
  ): UnaryResponse;
  getCustomerBookStatus(
    requestMessage: BillingSystem_pb.GetCustomerBookStatusRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.WalkStatus|null) => void
  ): UnaryResponse;
  getCustomerBookStatus(
    requestMessage: BillingSystem_pb.GetCustomerBookStatusRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.WalkStatus|null) => void
  ): UnaryResponse;
  setReadings(
    requestMessage: BillingSystem_pb.SetReadingsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  setReadings(
    requestMessage: BillingSystem_pb.SetReadingsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  setStatms(
    requestMessage: BillingSystem_pb.SetStatmsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  setStatms(
    requestMessage: BillingSystem_pb.SetStatmsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  validateDeposit(
    requestMessage: BillingSystem_pb.ValidateDepositRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.DepositValidationResponce|null) => void
  ): UnaryResponse;
  validateDeposit(
    requestMessage: BillingSystem_pb.ValidateDepositRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.DepositValidationResponce|null) => void
  ): UnaryResponse;
  setGard(
    requestMessage: BillingSystem_pb.SetGardRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  setGard(
    requestMessage: BillingSystem_pb.SetGardRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  updateCustomerData(
    requestMessage: BillingSystem_pb.UpdateCustomerDataRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  updateCustomerData(
    requestMessage: BillingSystem_pb.UpdateCustomerDataRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ProcessResult|null) => void
  ): UnaryResponse;
  registerCustomerComplaint(
    requestMessage: BillingSystem_pb.RegisterCustomerComplaintRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RegisterCustomerComplaintRs|null) => void
  ): UnaryResponse;
  registerCustomerComplaint(
    requestMessage: BillingSystem_pb.RegisterCustomerComplaintRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RegisterCustomerComplaintRs|null) => void
  ): UnaryResponse;
  getConsumptionTypesGroup(
    requestMessage: BillingSystem_pb.GetConsumptionTypesGroupRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionTypesGroupRs|null) => void
  ): UnaryResponse;
  getConsumptionTypesGroup(
    requestMessage: BillingSystem_pb.GetConsumptionTypesGroupRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionTypesGroupRs|null) => void
  ): UnaryResponse;
  getConsumptionTypesStation(
    requestMessage: BillingSystem_pb.GetConsumptionTypesStationRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionTypesStationRs|null) => void
  ): UnaryResponse;
  getConsumptionTypesStation(
    requestMessage: BillingSystem_pb.GetConsumptionTypesStationRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionTypesStationRs|null) => void
  ): UnaryResponse;
  getConsumptionGroupTypes(
    requestMessage: BillingSystem_pb.GetConsumptionGroupTypesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionGroupTypesRs|null) => void
  ): UnaryResponse;
  getConsumptionGroupTypes(
    requestMessage: BillingSystem_pb.GetConsumptionGroupTypesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetConsumptionGroupTypesRs|null) => void
  ): UnaryResponse;
  getCustomerBooks(
    requestMessage: BillingSystem_pb.GetCustomerBooksRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerBooksRs|null) => void
  ): UnaryResponse;
  getCustomerBooks(
    requestMessage: BillingSystem_pb.GetCustomerBooksRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerBooksRs|null) => void
  ): UnaryResponse;
  getCustomerWalks(
    requestMessage: BillingSystem_pb.GetCustomerWalksRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerWalksRs|null) => void
  ): UnaryResponse;
  getCustomerWalks(
    requestMessage: BillingSystem_pb.GetCustomerWalksRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerWalksRs|null) => void
  ): UnaryResponse;
  getMeterBooks(
    requestMessage: BillingSystem_pb.GetMeterBooksRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMeterBooksRs|null) => void
  ): UnaryResponse;
  getMeterBooks(
    requestMessage: BillingSystem_pb.GetMeterBooksRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMeterBooksRs|null) => void
  ): UnaryResponse;
  getMeterWalks(
    requestMessage: BillingSystem_pb.GetMeterWalksRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMeterWalksRs|null) => void
  ): UnaryResponse;
  getMeterWalks(
    requestMessage: BillingSystem_pb.GetMeterWalksRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetMeterWalksRs|null) => void
  ): UnaryResponse;
  getEmployees(
    requestMessage: BillingSystem_pb.GetEmployeesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetEmployeesRs|null) => void
  ): UnaryResponse;
  getEmployees(
    requestMessage: BillingSystem_pb.GetEmployeesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetEmployeesRs|null) => void
  ): UnaryResponse;
  getStations(
    requestMessage: BillingSystem_pb.GetStationsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetStationsRs|null) => void
  ): UnaryResponse;
  getStations(
    requestMessage: BillingSystem_pb.GetStationsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetStationsRs|null) => void
  ): UnaryResponse;
  getBillGroups(
    requestMessage: BillingSystem_pb.GetBillGroupsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillGroupsRs|null) => void
  ): UnaryResponse;
  getBillGroups(
    requestMessage: BillingSystem_pb.GetBillGroupsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillGroupsRs|null) => void
  ): UnaryResponse;
  getAccessCodes(
    requestMessage: BillingSystem_pb.GetAccessCodesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetAccessCodesRs|null) => void
  ): UnaryResponse;
  getAccessCodes(
    requestMessage: BillingSystem_pb.GetAccessCodesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetAccessCodesRs|null) => void
  ): UnaryResponse;
  getCurrentReadingCycle(
    requestMessage: BillingSystem_pb.GetCurrentReadingCycleRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCurrentReadingCycle(
    requestMessage: BillingSystem_pb.GetCurrentReadingCycleRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCurrentReadingCycleWithDate(
    requestMessage: BillingSystem_pb.GetCurrentReadingCycleWithDateRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCurrentReadingCycleWithDate(
    requestMessage: BillingSystem_pb.GetCurrentReadingCycleWithDateRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCurrentCollectionCycle(
    requestMessage: BillingSystem_pb.GetCurrentCollectionCycleRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCurrentCollectionCycle(
    requestMessage: BillingSystem_pb.GetCurrentCollectionCycleRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getReadingCycle(
    requestMessage: BillingSystem_pb.GetReadingCycleRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getReadingCycle(
    requestMessage: BillingSystem_pb.GetReadingCycleRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCollectionCycle(
    requestMessage: BillingSystem_pb.GetCollectionCycleRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getCollectionCycle(
    requestMessage: BillingSystem_pb.GetCollectionCycleRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.Cycle|null) => void
  ): UnaryResponse;
  getBillingSystemName(
    requestMessage: BillingSystem_pb.GetBillingSystemNameRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillingSystemNameRs|null) => void
  ): UnaryResponse;
  getBillingSystemName(
    requestMessage: BillingSystem_pb.GetBillingSystemNameRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillingSystemNameRs|null) => void
  ): UnaryResponse;
  getBillingSystemVersion(
    requestMessage: BillingSystem_pb.GetBillingSystemVersionRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillingSystemVersionRs|null) => void
  ): UnaryResponse;
  getBillingSystemVersion(
    requestMessage: BillingSystem_pb.GetBillingSystemVersionRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillingSystemVersionRs|null) => void
  ): UnaryResponse;
  isCollected(
    requestMessage: BillingSystem_pb.IsCollectedRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IsCollectedRs|null) => void
  ): UnaryResponse;
  isCollected(
    requestMessage: BillingSystem_pb.IsCollectedRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IsCollectedRs|null) => void
  ): UnaryResponse;
  status(
    requestMessage: BillingSystem_pb.StatusRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatusRs|null) => void
  ): UnaryResponse;
  status(
    requestMessage: BillingSystem_pb.StatusRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatusRs|null) => void
  ): UnaryResponse;
  getBillItemTypes(
    requestMessage: BillingSystem_pb.GetBillItemTypesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesRs|null) => void
  ): UnaryResponse;
  getBillItemTypes(
    requestMessage: BillingSystem_pb.GetBillItemTypesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesRs|null) => void
  ): UnaryResponse;
  getBillItemTypesByBillItem(
    requestMessage: BillingSystem_pb.GetBillItemTypesByBillItemRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesRs|null) => void
  ): UnaryResponse;
  getBillItemTypesByBillItem(
    requestMessage: BillingSystem_pb.GetBillItemTypesByBillItemRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesRs|null) => void
  ): UnaryResponse;
  getBillItemTypesByBillPrint(
    requestMessage: BillingSystem_pb.GetBillItemTypesByBillPrintRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesByBillPrintRs|null) => void
  ): UnaryResponse;
  getBillItemTypesByBillPrint(
    requestMessage: BillingSystem_pb.GetBillItemTypesByBillPrintRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetBillItemTypesByBillPrintRs|null) => void
  ): UnaryResponse;
  getStatmItems(
    requestMessage: BillingSystem_pb.GetStatmItemsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmItem|null) => void
  ): UnaryResponse;
  getStatmItems(
    requestMessage: BillingSystem_pb.GetStatmItemsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmItem|null) => void
  ): UnaryResponse;
  getStatmItemsByFStatm(
    requestMessage: BillingSystem_pb.GetStatmItemsByFStatmRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmItem|null) => void
  ): UnaryResponse;
  getStatmItemsByFStatm(
    requestMessage: BillingSystem_pb.GetStatmItemsByFStatmRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmItem|null) => void
  ): UnaryResponse;
  getCollectionSummary(
    requestMessage: BillingSystem_pb.GetCollectionSummaryRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCollectionSummaryRs|null) => void
  ): UnaryResponse;
  getCollectionSummary(
    requestMessage: BillingSystem_pb.GetCollectionSummaryRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCollectionSummaryRs|null) => void
  ): UnaryResponse;
  getBillType(
    requestMessage: BillingSystem_pb.GetBillTypeRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBillType(
    requestMessage: BillingSystem_pb.GetBillTypeRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBillTypeByFtrans(
    requestMessage: BillingSystem_pb.GetBillTypeByFtransRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBillTypeByFtrans(
    requestMessage: BillingSystem_pb.GetBillTypeByFtransRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBillTypeByBillPrint(
    requestMessage: BillingSystem_pb.GetBillTypeByBillPrintRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBillTypeByBillPrint(
    requestMessage: BillingSystem_pb.GetBillTypeByBillPrintRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillType|null) => void
  ): UnaryResponse;
  getBill_CTYPES(
    requestMessage: BillingSystem_pb.GetBillCtypesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmCtypeRs|null) => void
  ): UnaryResponse;
  getBill_CTYPES(
    requestMessage: BillingSystem_pb.GetBillCtypesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmCtypeRs|null) => void
  ): UnaryResponse;
  getBill_CTYPESByFtrans(
    requestMessage: BillingSystem_pb.GetBill_CTYPESByFtransRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmCtypeRs|null) => void
  ): UnaryResponse;
  getBill_CTYPESByFtrans(
    requestMessage: BillingSystem_pb.GetBill_CTYPESByFtransRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.StatmCtypeRs|null) => void
  ): UnaryResponse;
  closeCollectionCycle(
    requestMessage: BillingSystem_pb.CloseCollectionCycleRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CloseCollectionCycleRs|null) => void
  ): UnaryResponse;
  closeCollectionCycle(
    requestMessage: BillingSystem_pb.CloseCollectionCycleRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CloseCollectionCycleRs|null) => void
  ): UnaryResponse;
  updateHH_BCYC(
    requestMessage: BillingSystem_pb.UpdateHH_BCYCRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateHH_BCYCRs|null) => void
  ): UnaryResponse;
  updateHH_BCYC(
    requestMessage: BillingSystem_pb.UpdateHH_BCYCRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateHH_BCYCRs|null) => void
  ): UnaryResponse;
  updateMeterInfo(
    requestMessage: BillingSystem_pb.UpdateMeterInfoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateMeterInfoRs|null) => void
  ): UnaryResponse;
  updateMeterInfo(
    requestMessage: BillingSystem_pb.UpdateMeterInfoRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateMeterInfoRs|null) => void
  ): UnaryResponse;
  getDepositValue(
    requestMessage: BillingSystem_pb.GetDepositValueRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillSum|null) => void
  ): UnaryResponse;
  getDepositValue(
    requestMessage: BillingSystem_pb.GetDepositValueRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.BillSum|null) => void
  ): UnaryResponse;
  updateBilngAssignC(
    requestMessage: BillingSystem_pb.UpdateBilngAssignCRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignCRs|null) => void
  ): UnaryResponse;
  updateBilngAssignC(
    requestMessage: BillingSystem_pb.UpdateBilngAssignCRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignCRs|null) => void
  ): UnaryResponse;
  updateBilngAssignCWithStatments(
    requestMessage: BillingSystem_pb.UpdateBilngAssignCWithStatmentsRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignCRs|null) => void
  ): UnaryResponse;
  updateBilngAssignCWithStatments(
    requestMessage: BillingSystem_pb.UpdateBilngAssignCWithStatmentsRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignCRs|null) => void
  ): UnaryResponse;
  updateBilngAssignR(
    requestMessage: BillingSystem_pb.UpdateBilngAssignRRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignRRs|null) => void
  ): UnaryResponse;
  updateBilngAssignR(
    requestMessage: BillingSystem_pb.UpdateBilngAssignRRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateBilngAssignRRs|null) => void
  ): UnaryResponse;
  cancelSewerService(
    requestMessage: BillingSystem_pb.CancelSewerServiceRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CancelSewerServiceRs|null) => void
  ): UnaryResponse;
  cancelSewerService(
    requestMessage: BillingSystem_pb.CancelSewerServiceRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CancelSewerServiceRs|null) => void
  ): UnaryResponse;
  getCustomerInfo(
    requestMessage: BillingSystem_pb.GetCustomerInfoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerInfo|null) => void
  ): UnaryResponse;
  getCustomerInfo(
    requestMessage: BillingSystem_pb.GetCustomerInfoRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerInfo|null) => void
  ): UnaryResponse;
  getCustomerAgeems(
    requestMessage: BillingSystem_pb.GetCustomerInfoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerAgreems|null) => void
  ): UnaryResponse;
  getCustomerAgeems(
    requestMessage: BillingSystem_pb.GetCustomerInfoRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerAgreems|null) => void
  ): UnaryResponse;
  executeSqlCommand(
    requestMessage: BillingSystem_pb.ExecuteSqlCommandRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ExecuteSqlCommandRs|null) => void
  ): UnaryResponse;
  executeSqlCommand(
    requestMessage: BillingSystem_pb.ExecuteSqlCommandRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ExecuteSqlCommandRs|null) => void
  ): UnaryResponse;
  verifyCollectionAmount(
    requestMessage: BillingSystem_pb.VerifyCollectionAmountRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CollectionAmountAcceptance|null) => void
  ): UnaryResponse;
  verifyCollectionAmount(
    requestMessage: BillingSystem_pb.VerifyCollectionAmountRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CollectionAmountAcceptance|null) => void
  ): UnaryResponse;
  addInvoicedReading(
    requestMessage: BillingSystem_pb.InvoicedReadingForm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.AddInvoicedReadingRs|null) => void
  ): UnaryResponse;
  addInvoicedReading(
    requestMessage: BillingSystem_pb.InvoicedReadingForm,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.AddInvoicedReadingRs|null) => void
  ): UnaryResponse;
  getLastReading(
    requestMessage: BillingSystem_pb.GetLastReadingRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReadingRecord|null) => void
  ): UnaryResponse;
  getLastReading(
    requestMessage: BillingSystem_pb.GetLastReadingRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReadingRecord|null) => void
  ): UnaryResponse;
  getLastInvoicedReading(
    requestMessage: BillingSystem_pb.GetLastReadingRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.InvoicedReadingRecord|null) => void
  ): UnaryResponse;
  getLastInvoicedReading(
    requestMessage: BillingSystem_pb.GetLastReadingRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.InvoicedReadingRecord|null) => void
  ): UnaryResponse;
  getIssueType(
    requestMessage: BillingSystem_pb.GetIssueTypeRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetIssueTypeRs|null) => void
  ): UnaryResponse;
  getIssueType(
    requestMessage: BillingSystem_pb.GetIssueTypeRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetIssueTypeRs|null) => void
  ): UnaryResponse;
  initialize(
    requestMessage: BillingSystem_pb.InitializeRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.InitializeRs|null) => void
  ): UnaryResponse;
  initialize(
    requestMessage: BillingSystem_pb.InitializeRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.InitializeRs|null) => void
  ): UnaryResponse;
  setDebug(
    requestMessage: BillingSystem_pb.SetDebugRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.SetDebugRs|null) => void
  ): UnaryResponse;
  setDebug(
    requestMessage: BillingSystem_pb.SetDebugRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.SetDebugRs|null) => void
  ): UnaryResponse;
  getMarketingPlan(
    requestMessage: BillingSystem_pb.GetMarketingPlanRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.MarketingResult|null) => void
  ): UnaryResponse;
  getMarketingPlan(
    requestMessage: BillingSystem_pb.GetMarketingPlanRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.MarketingResult|null) => void
  ): UnaryResponse;
  applyMarketingPlan(
    requestMessage: BillingSystem_pb.MarketingResult,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ApplyMarketingPlanRs|null) => void
  ): UnaryResponse;
  applyMarketingPlan(
    requestMessage: BillingSystem_pb.MarketingResult,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ApplyMarketingPlanRs|null) => void
  ): UnaryResponse;
  getInfo(
    requestMessage: BillingSystem_pb.GetInfoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  getInfo(
    requestMessage: BillingSystem_pb.GetInfoRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  calc(
    requestMessage: BillingSystem_pb.CalcRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  calc(
    requestMessage: BillingSystem_pb.CalcRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  post(
    requestMessage: BillingSystem_pb.PostRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  post(
    requestMessage: BillingSystem_pb.PostRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ReCalcModel|null) => void
  ): UnaryResponse;
  fillRecal(
    requestMessage: BillingSystem_pb.FillRecalRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RecalcModelNew|null) => void
  ): UnaryResponse;
  fillRecal(
    requestMessage: BillingSystem_pb.FillRecalRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RecalcModelNew|null) => void
  ): UnaryResponse;
  modifyAndExecute(
    requestMessage: BillingSystem_pb.RecalcModelNew,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RecalcModelNew|null) => void
  ): UnaryResponse;
  modifyAndExecute(
    requestMessage: BillingSystem_pb.RecalcModelNew,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.RecalcModelNew|null) => void
  ): UnaryResponse;
  getMeterMakes(
    requestMessage: BillingSystem_pb.GetMeterMakesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.LuMeterMake|null) => void
  ): UnaryResponse;
  getMeterMakes(
    requestMessage: BillingSystem_pb.GetMeterMakesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.LuMeterMake|null) => void
  ): UnaryResponse;
  getMeterSizes(
    requestMessage: BillingSystem_pb.GetMeterSizesRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.LuMeterSize|null) => void
  ): UnaryResponse;
  getMeterSizes(
    requestMessage: BillingSystem_pb.GetMeterSizesRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.LuMeterSize|null) => void
  ): UnaryResponse;
  getCustomerData(
    requestMessage: BillingSystem_pb.GetCustomerDataRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustModModel|null) => void
  ): UnaryResponse;
  getCustomerData(
    requestMessage: BillingSystem_pb.GetCustomerDataRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustModModel|null) => void
  ): UnaryResponse;
  postCustomerData(
    requestMessage: BillingSystem_pb.CustModModel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustModModel|null) => void
  ): UnaryResponse;
  postCustomerData(
    requestMessage: BillingSystem_pb.CustModModel,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustModModel|null) => void
  ): UnaryResponse;
  addMissingMeter(
    requestMessage: BillingSystem_pb.MeterInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.AddMissingMeterRs|null) => void
  ): UnaryResponse;
  addMissingMeter(
    requestMessage: BillingSystem_pb.MeterInfo,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.AddMissingMeterRs|null) => void
  ): UnaryResponse;
  verifyIssue(
    requestMessage: BillingSystem_pb.VerifyIssueRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IssueVerificationResultItem|null) => void
  ): UnaryResponse;
  verifyIssue(
    requestMessage: BillingSystem_pb.VerifyIssueRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IssueVerificationResultItem|null) => void
  ): UnaryResponse;
  getNewCustomersKeysList(
    requestMessage: BillingSystem_pb.GetNewCustomersKeysListRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetNewCustomersKeysListRs|null) => void
  ): UnaryResponse;
  getNewCustomersKeysList(
    requestMessage: BillingSystem_pb.GetNewCustomersKeysListRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetNewCustomersKeysListRs|null) => void
  ): UnaryResponse;
  updateCustomersKeysList(
    requestMessage: BillingSystem_pb.UpdateCustomersKeysListRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateCustomersKeysListRs|null) => void
  ): UnaryResponse;
  updateCustomersKeysList(
    requestMessage: BillingSystem_pb.UpdateCustomersKeysListRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.UpdateCustomersKeysListRs|null) => void
  ): UnaryResponse;
  getAbstractCustomerInfo(
    requestMessage: BillingSystem_pb.GetAbstractCustomerInfoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerInfo|null) => void
  ): UnaryResponse;
  getAbstractCustomerInfo(
    requestMessage: BillingSystem_pb.GetAbstractCustomerInfoRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CustomerInfo|null) => void
  ): UnaryResponse;
  createFaxNoIndex(
    requestMessage: BillingSystem_pb.CreateFaxNoIndexRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CreateFaxNoIndexRs|null) => void
  ): UnaryResponse;
  createFaxNoIndex(
    requestMessage: BillingSystem_pb.CreateFaxNoIndexRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CreateFaxNoIndexRs|null) => void
  ): UnaryResponse;
  getCustomerMetrDtl(
    requestMessage: BillingSystem_pb.CustkeyRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerMetrDtlRs|null) => void
  ): UnaryResponse;
  getCustomerMetrDtl(
    requestMessage: BillingSystem_pb.CustkeyRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetCustomerMetrDtlRs|null) => void
  ): UnaryResponse;
  getStationCode(
    requestMessage: BillingSystem_pb.GetStationCodeRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetStationCodeRs|null) => void
  ): UnaryResponse;
  getStationCode(
    requestMessage: BillingSystem_pb.GetStationCodeRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.GetStationCodeRs|null) => void
  ): UnaryResponse;
  importAllDataFromBilling(
    requestMessage: BillingSystem_pb.EMPTY,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IMPORT_ALL_DATA_RS|null) => void
  ): UnaryResponse;
  importAllDataFromBilling(
    requestMessage: BillingSystem_pb.EMPTY,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.IMPORT_ALL_DATA_RS|null) => void
  ): UnaryResponse;
  calcBillgroup(
    requestMessage: BillingSystem_pb.CalcBillgroupRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CalcBillgroupRs|null) => void
  ): UnaryResponse;
  calcBillgroup(
    requestMessage: BillingSystem_pb.CalcBillgroupRq,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.CalcBillgroupRs|null) => void
  ): UnaryResponse;
  getAllOpenedCyclesInEdams(
    requestMessage: BillingSystem_pb.EMPTY,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ArrSumBcycRs|null) => void
  ): UnaryResponse;
  getAllOpenedCyclesInEdams(
    requestMessage: BillingSystem_pb.EMPTY,
    callback: (error: ServiceError|null, responseMessage: BillingSystem_pb.ArrSumBcycRs|null) => void
  ): UnaryResponse;
  getAllData(
    requestMessage: mas_messages_pb.EMPTY,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mas_messages_pb.AllCustomerData|null) => void
  ): UnaryResponse;
  getAllData(
    requestMessage: mas_messages_pb.EMPTY,
    callback: (error: ServiceError|null, responseMessage: mas_messages_pb.AllCustomerData|null) => void
  ): UnaryResponse;
  getBillgroupData(
    requestMessage: mas_messages_pb.BillGroupBookNoRq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mas_messages_pb.AllCustomerData|null) => void
  ): UnaryResponse;
  getBillgroupData(
    requestMessage: mas_messages_pb.BillGroupBookNoRq,
    callback: (error: ServiceError|null, responseMessage: mas_messages_pb.AllCustomerData|null) => void
  ): UnaryResponse;
}

