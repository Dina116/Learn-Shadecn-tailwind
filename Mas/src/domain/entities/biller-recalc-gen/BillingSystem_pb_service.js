// package: BillingRepositorySys
// file: BillingSystem.proto

var BillingSystem_pb = require("./BillingSystem_pb");
var mas_messages_pb = require("./mas-messages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IBilngDataSource = (function () {
  function IBilngDataSource() {}
  IBilngDataSource.serviceName = "BillingRepositorySys.IBilngDataSource";
  return IBilngDataSource;
}());

IBilngDataSource.IsDummy = {
  methodName: "IsDummy",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.IsDummyRq,
  responseType: BillingSystem_pb.IsDummyRs
};

IBilngDataSource.getDllVersion = {
  methodName: "getDllVersion",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.getDllVersionRq,
  responseType: BillingSystem_pb.getDllVersionRs
};

IBilngDataSource.GetDefaultReadingNote = {
  methodName: "GetDefaultReadingNote",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetDefaultReadingNoteRq,
  responseType: BillingSystem_pb.GetDefaultReadingNoteRs
};

IBilngDataSource.UpdateCustomerSeq = {
  methodName: "UpdateCustomerSeq",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateCustomerSeqRq,
  responseType: BillingSystem_pb.UpdateCustomerSeqRs
};

IBilngDataSource.UpdateMeterSeq = {
  methodName: "UpdateMeterSeq",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateMeterSeqRq,
  responseType: BillingSystem_pb.UpdateMeterSeqRs
};

IBilngDataSource.GetReadings = {
  methodName: "GetReadings",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetReadingsRq,
  responseType: BillingSystem_pb.GetReadingsRs
};

IBilngDataSource.GetAllStatmsForBillgroup = {
  methodName: "GetAllStatmsForBillgroup",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetAllStatmsForBillgroupRq,
  responseType: BillingSystem_pb.GetAllStatmsForBillgroupRs
};

IBilngDataSource.CancelStm = {
  methodName: "CancelStm",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CancelStmRq,
  responseType: BillingSystem_pb.ProcessResult
};

IBilngDataSource.GetMetersBooksStatus = {
  methodName: "GetMetersBooksStatus",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMetersBooksStatusRq,
  responseType: BillingSystem_pb.GetMetersBooksStatusRs
};

IBilngDataSource.GetMeterBookStatus = {
  methodName: "GetMeterBookStatus",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMeterBookStatusRq,
  responseType: BillingSystem_pb.WalkStatus
};

IBilngDataSource.GetCustomersBooksStatus = {
  methodName: "GetCustomersBooksStatus",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomersBooksStatusRq,
  responseType: BillingSystem_pb.GetCustomersBooksStatusRs
};

IBilngDataSource.GetCustomerBookStatus = {
  methodName: "GetCustomerBookStatus",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerBookStatusRq,
  responseType: BillingSystem_pb.WalkStatus
};

IBilngDataSource.SetReadings = {
  methodName: "SetReadings",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.SetReadingsRq,
  responseType: BillingSystem_pb.ProcessResult
};

IBilngDataSource.SetStatms = {
  methodName: "SetStatms",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.SetStatmsRq,
  responseType: BillingSystem_pb.ProcessResult
};

IBilngDataSource.ValidateDeposit = {
  methodName: "ValidateDeposit",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.ValidateDepositRq,
  responseType: BillingSystem_pb.DepositValidationResponce
};

IBilngDataSource.SetGard = {
  methodName: "SetGard",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.SetGardRq,
  responseType: BillingSystem_pb.ProcessResult
};

IBilngDataSource.UpdateCustomerData = {
  methodName: "UpdateCustomerData",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateCustomerDataRq,
  responseType: BillingSystem_pb.ProcessResult
};

IBilngDataSource.RegisterCustomerComplaint = {
  methodName: "RegisterCustomerComplaint",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.RegisterCustomerComplaintRq,
  responseType: BillingSystem_pb.RegisterCustomerComplaintRs
};

IBilngDataSource.GetConsumptionTypesGroup = {
  methodName: "GetConsumptionTypesGroup",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetConsumptionTypesGroupRq,
  responseType: BillingSystem_pb.GetConsumptionTypesGroupRs
};

IBilngDataSource.GetConsumptionTypesStation = {
  methodName: "GetConsumptionTypesStation",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetConsumptionTypesStationRq,
  responseType: BillingSystem_pb.GetConsumptionTypesStationRs
};

IBilngDataSource.GetConsumptionGroupTypes = {
  methodName: "GetConsumptionGroupTypes",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetConsumptionGroupTypesRq,
  responseType: BillingSystem_pb.GetConsumptionGroupTypesRs
};

IBilngDataSource.GetCustomerBooks = {
  methodName: "GetCustomerBooks",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerBooksRq,
  responseType: BillingSystem_pb.GetCustomerBooksRs
};

IBilngDataSource.GetCustomerWalks = {
  methodName: "GetCustomerWalks",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerWalksRq,
  responseType: BillingSystem_pb.GetCustomerWalksRs
};

IBilngDataSource.GetMeterBooks = {
  methodName: "GetMeterBooks",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMeterBooksRq,
  responseType: BillingSystem_pb.GetMeterBooksRs
};

IBilngDataSource.GetMeterWalks = {
  methodName: "GetMeterWalks",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMeterWalksRq,
  responseType: BillingSystem_pb.GetMeterWalksRs
};

IBilngDataSource.GetEmployees = {
  methodName: "GetEmployees",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetEmployeesRq,
  responseType: BillingSystem_pb.GetEmployeesRs
};

IBilngDataSource.GetStations = {
  methodName: "GetStations",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetStationsRq,
  responseType: BillingSystem_pb.GetStationsRs
};

IBilngDataSource.GetBillGroups = {
  methodName: "GetBillGroups",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillGroupsRq,
  responseType: BillingSystem_pb.GetBillGroupsRs
};

IBilngDataSource.GetAccessCodes = {
  methodName: "GetAccessCodes",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetAccessCodesRq,
  responseType: BillingSystem_pb.GetAccessCodesRs
};

IBilngDataSource.GetCurrentReadingCycle = {
  methodName: "GetCurrentReadingCycle",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCurrentReadingCycleRq,
  responseType: BillingSystem_pb.Cycle
};

IBilngDataSource.GetCurrentReadingCycleWithDate = {
  methodName: "GetCurrentReadingCycleWithDate",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCurrentReadingCycleWithDateRq,
  responseType: BillingSystem_pb.Cycle
};

IBilngDataSource.GetCurrentCollectionCycle = {
  methodName: "GetCurrentCollectionCycle",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCurrentCollectionCycleRq,
  responseType: BillingSystem_pb.Cycle
};

IBilngDataSource.GetReadingCycle = {
  methodName: "GetReadingCycle",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetReadingCycleRq,
  responseType: BillingSystem_pb.Cycle
};

IBilngDataSource.GetCollectionCycle = {
  methodName: "GetCollectionCycle",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCollectionCycleRq,
  responseType: BillingSystem_pb.Cycle
};

IBilngDataSource.GetBillingSystemName = {
  methodName: "GetBillingSystemName",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillingSystemNameRq,
  responseType: BillingSystem_pb.GetBillingSystemNameRs
};

IBilngDataSource.GetBillingSystemVersion = {
  methodName: "GetBillingSystemVersion",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillingSystemVersionRq,
  responseType: BillingSystem_pb.GetBillingSystemVersionRs
};

IBilngDataSource.IsCollected = {
  methodName: "IsCollected",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.IsCollectedRq,
  responseType: BillingSystem_pb.IsCollectedRs
};

IBilngDataSource.Status = {
  methodName: "Status",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.StatusRq,
  responseType: BillingSystem_pb.StatusRs
};

IBilngDataSource.GetBillItemTypes = {
  methodName: "GetBillItemTypes",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillItemTypesRq,
  responseType: BillingSystem_pb.GetBillItemTypesRs
};

IBilngDataSource.GetBillItemTypesByBillItem = {
  methodName: "GetBillItemTypesByBillItem",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillItemTypesByBillItemRq,
  responseType: BillingSystem_pb.GetBillItemTypesRs
};

IBilngDataSource.GetBillItemTypesByBillPrint = {
  methodName: "GetBillItemTypesByBillPrint",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillItemTypesByBillPrintRq,
  responseType: BillingSystem_pb.GetBillItemTypesByBillPrintRs
};

IBilngDataSource.GetStatmItems = {
  methodName: "GetStatmItems",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetStatmItemsRq,
  responseType: BillingSystem_pb.StatmItem
};

IBilngDataSource.GetStatmItemsByFStatm = {
  methodName: "GetStatmItemsByFStatm",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetStatmItemsByFStatmRq,
  responseType: BillingSystem_pb.StatmItem
};

IBilngDataSource.GetCollectionSummary = {
  methodName: "GetCollectionSummary",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCollectionSummaryRq,
  responseType: BillingSystem_pb.GetCollectionSummaryRs
};

IBilngDataSource.GetBillType = {
  methodName: "GetBillType",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillTypeRq,
  responseType: BillingSystem_pb.BillType
};

IBilngDataSource.GetBillTypeByFtrans = {
  methodName: "GetBillTypeByFtrans",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillTypeByFtransRq,
  responseType: BillingSystem_pb.BillType
};

IBilngDataSource.GetBillTypeByBillPrint = {
  methodName: "GetBillTypeByBillPrint",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillTypeByBillPrintRq,
  responseType: BillingSystem_pb.BillType
};

IBilngDataSource.GetBill_CTYPES = {
  methodName: "GetBill_CTYPES",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBillCtypesRq,
  responseType: BillingSystem_pb.StatmCtypeRs
};

IBilngDataSource.GetBill_CTYPESByFtrans = {
  methodName: "GetBill_CTYPESByFtrans",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetBill_CTYPESByFtransRq,
  responseType: BillingSystem_pb.StatmCtypeRs
};

IBilngDataSource.CloseCollectionCycle = {
  methodName: "CloseCollectionCycle",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CloseCollectionCycleRq,
  responseType: BillingSystem_pb.CloseCollectionCycleRs
};

IBilngDataSource.UpdateHH_BCYC = {
  methodName: "UpdateHH_BCYC",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateHH_BCYCRq,
  responseType: BillingSystem_pb.UpdateHH_BCYCRs
};

IBilngDataSource.UpdateMeterInfo = {
  methodName: "UpdateMeterInfo",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateMeterInfoRq,
  responseType: BillingSystem_pb.UpdateMeterInfoRs
};

IBilngDataSource.GetDepositValue = {
  methodName: "GetDepositValue",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetDepositValueRq,
  responseType: BillingSystem_pb.BillSum
};

IBilngDataSource.UpdateBilngAssignC = {
  methodName: "UpdateBilngAssignC",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateBilngAssignCRq,
  responseType: BillingSystem_pb.UpdateBilngAssignCRs
};

IBilngDataSource.UpdateBilngAssignCWithStatments = {
  methodName: "UpdateBilngAssignCWithStatments",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateBilngAssignCWithStatmentsRq,
  responseType: BillingSystem_pb.UpdateBilngAssignCRs
};

IBilngDataSource.UpdateBilngAssignR = {
  methodName: "UpdateBilngAssignR",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateBilngAssignRRq,
  responseType: BillingSystem_pb.UpdateBilngAssignRRs
};

IBilngDataSource.CancelSewerService = {
  methodName: "CancelSewerService",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CancelSewerServiceRq,
  responseType: BillingSystem_pb.CancelSewerServiceRs
};

IBilngDataSource.GetCustomerInfo = {
  methodName: "GetCustomerInfo",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerInfoRq,
  responseType: BillingSystem_pb.CustomerInfo
};

IBilngDataSource.GetCustomerAgeems = {
  methodName: "GetCustomerAgeems",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerInfoRq,
  responseType: BillingSystem_pb.CustomerAgreems
};

IBilngDataSource.ExecuteSqlCommand = {
  methodName: "ExecuteSqlCommand",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.ExecuteSqlCommandRq,
  responseType: BillingSystem_pb.ExecuteSqlCommandRs
};

IBilngDataSource.VerifyCollectionAmount = {
  methodName: "VerifyCollectionAmount",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.VerifyCollectionAmountRq,
  responseType: BillingSystem_pb.CollectionAmountAcceptance
};

IBilngDataSource.AddInvoicedReading = {
  methodName: "AddInvoicedReading",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.InvoicedReadingForm,
  responseType: BillingSystem_pb.AddInvoicedReadingRs
};

IBilngDataSource.GetLastReading = {
  methodName: "GetLastReading",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetLastReadingRq,
  responseType: BillingSystem_pb.ReadingRecord
};

IBilngDataSource.GetLastInvoicedReading = {
  methodName: "GetLastInvoicedReading",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetLastReadingRq,
  responseType: BillingSystem_pb.InvoicedReadingRecord
};

IBilngDataSource.GetIssueType = {
  methodName: "GetIssueType",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetIssueTypeRq,
  responseType: BillingSystem_pb.GetIssueTypeRs
};

IBilngDataSource.Initialize = {
  methodName: "Initialize",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.InitializeRq,
  responseType: BillingSystem_pb.InitializeRs
};

IBilngDataSource.SetDebug = {
  methodName: "SetDebug",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.SetDebugRq,
  responseType: BillingSystem_pb.SetDebugRs
};

IBilngDataSource.GetMarketingPlan = {
  methodName: "GetMarketingPlan",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMarketingPlanRq,
  responseType: BillingSystem_pb.MarketingResult
};

IBilngDataSource.ApplyMarketingPlan = {
  methodName: "ApplyMarketingPlan",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.MarketingResult,
  responseType: BillingSystem_pb.ApplyMarketingPlanRs
};

IBilngDataSource.GetInfo = {
  methodName: "GetInfo",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetInfoRq,
  responseType: BillingSystem_pb.ReCalcModel
};

IBilngDataSource.Calc = {
  methodName: "Calc",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CalcRq,
  responseType: BillingSystem_pb.ReCalcModel
};

IBilngDataSource.Post = {
  methodName: "Post",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.PostRq,
  responseType: BillingSystem_pb.ReCalcModel
};

IBilngDataSource.FillRecal = {
  methodName: "FillRecal",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.FillRecalRq,
  responseType: BillingSystem_pb.RecalcModelNew
};

IBilngDataSource.ModifyAndExecute = {
  methodName: "ModifyAndExecute",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.RecalcModelNew,
  responseType: BillingSystem_pb.RecalcModelNew
};

IBilngDataSource.GetMeterMakes = {
  methodName: "GetMeterMakes",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMeterMakesRq,
  responseType: BillingSystem_pb.LuMeterMake
};

IBilngDataSource.GetMeterSizes = {
  methodName: "GetMeterSizes",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetMeterSizesRq,
  responseType: BillingSystem_pb.LuMeterSize
};

IBilngDataSource.GetCustomerData = {
  methodName: "GetCustomerData",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetCustomerDataRq,
  responseType: BillingSystem_pb.CustModModel
};

IBilngDataSource.PostCustomerData = {
  methodName: "PostCustomerData",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CustModModel,
  responseType: BillingSystem_pb.CustModModel
};

IBilngDataSource.AddMissingMeter = {
  methodName: "AddMissingMeter",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.MeterInfo,
  responseType: BillingSystem_pb.AddMissingMeterRs
};

IBilngDataSource.VerifyIssue = {
  methodName: "VerifyIssue",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.VerifyIssueRq,
  responseType: BillingSystem_pb.IssueVerificationResultItem
};

IBilngDataSource.GetNewCustomersKeysList = {
  methodName: "GetNewCustomersKeysList",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetNewCustomersKeysListRq,
  responseType: BillingSystem_pb.GetNewCustomersKeysListRs
};

IBilngDataSource.UpdateCustomersKeysList = {
  methodName: "UpdateCustomersKeysList",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.UpdateCustomersKeysListRq,
  responseType: BillingSystem_pb.UpdateCustomersKeysListRs
};

IBilngDataSource.GetAbstractCustomerInfo = {
  methodName: "GetAbstractCustomerInfo",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetAbstractCustomerInfoRq,
  responseType: BillingSystem_pb.CustomerInfo
};

IBilngDataSource.CreateFaxNoIndex = {
  methodName: "CreateFaxNoIndex",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CreateFaxNoIndexRq,
  responseType: BillingSystem_pb.CreateFaxNoIndexRs
};

IBilngDataSource.GetCustomerMetrDtl = {
  methodName: "GetCustomerMetrDtl",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CustkeyRq,
  responseType: BillingSystem_pb.GetCustomerMetrDtlRs
};

IBilngDataSource.GetStationCode = {
  methodName: "GetStationCode",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.GetStationCodeRq,
  responseType: BillingSystem_pb.GetStationCodeRs
};

IBilngDataSource.ImportAllDataFromBilling = {
  methodName: "ImportAllDataFromBilling",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.EMPTY,
  responseType: BillingSystem_pb.IMPORT_ALL_DATA_RS
};

IBilngDataSource.CalcBillgroup = {
  methodName: "CalcBillgroup",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.CalcBillgroupRq,
  responseType: BillingSystem_pb.CalcBillgroupRs
};

IBilngDataSource.GetAllOpenedCyclesInEdams = {
  methodName: "GetAllOpenedCyclesInEdams",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: BillingSystem_pb.EMPTY,
  responseType: BillingSystem_pb.ArrSumBcycRs
};

IBilngDataSource.GetAllData = {
  methodName: "GetAllData",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: mas_messages_pb.EMPTY,
  responseType: mas_messages_pb.AllCustomerData
};

IBilngDataSource.GetBillgroupData = {
  methodName: "GetBillgroupData",
  service: IBilngDataSource,
  requestStream: false,
  responseStream: false,
  requestType: mas_messages_pb.BillGroupBookNoRq,
  responseType: mas_messages_pb.AllCustomerData
};

exports.IBilngDataSource = IBilngDataSource;

function IBilngDataSourceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IBilngDataSourceClient.prototype.isDummy = function isDummy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.IsDummy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getDllVersion = function getDllVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.getDllVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getDefaultReadingNote = function getDefaultReadingNote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetDefaultReadingNote, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateCustomerSeq = function updateCustomerSeq(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateCustomerSeq, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateMeterSeq = function updateMeterSeq(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateMeterSeq, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getReadings = function getReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetReadings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getAllStatmsForBillgroup = function getAllStatmsForBillgroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetAllStatmsForBillgroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.cancelStm = function cancelStm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.CancelStm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMetersBooksStatus = function getMetersBooksStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMetersBooksStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMeterBookStatus = function getMeterBookStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMeterBookStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomersBooksStatus = function getCustomersBooksStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomersBooksStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerBookStatus = function getCustomerBookStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerBookStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.setReadings = function setReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.SetReadings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.setStatms = function setStatms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.SetStatms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.validateDeposit = function validateDeposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.ValidateDeposit, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.setGard = function setGard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.SetGard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateCustomerData = function updateCustomerData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateCustomerData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.registerCustomerComplaint = function registerCustomerComplaint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.RegisterCustomerComplaint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getConsumptionTypesGroup = function getConsumptionTypesGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetConsumptionTypesGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getConsumptionTypesStation = function getConsumptionTypesStation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetConsumptionTypesStation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getConsumptionGroupTypes = function getConsumptionGroupTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetConsumptionGroupTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerBooks = function getCustomerBooks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerWalks = function getCustomerWalks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerWalks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMeterBooks = function getMeterBooks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMeterBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMeterWalks = function getMeterWalks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMeterWalks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getEmployees = function getEmployees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetEmployees, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getStations = function getStations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetStations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillGroups = function getBillGroups(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillGroups, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getAccessCodes = function getAccessCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetAccessCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCurrentReadingCycle = function getCurrentReadingCycle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCurrentReadingCycle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCurrentReadingCycleWithDate = function getCurrentReadingCycleWithDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCurrentReadingCycleWithDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCurrentCollectionCycle = function getCurrentCollectionCycle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCurrentCollectionCycle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getReadingCycle = function getReadingCycle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetReadingCycle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCollectionCycle = function getCollectionCycle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCollectionCycle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillingSystemName = function getBillingSystemName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillingSystemName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillingSystemVersion = function getBillingSystemVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillingSystemVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.isCollected = function isCollected(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.IsCollected, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.status = function status(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.Status, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillItemTypes = function getBillItemTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillItemTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillItemTypesByBillItem = function getBillItemTypesByBillItem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillItemTypesByBillItem, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillItemTypesByBillPrint = function getBillItemTypesByBillPrint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillItemTypesByBillPrint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getStatmItems = function getStatmItems(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetStatmItems, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getStatmItemsByFStatm = function getStatmItemsByFStatm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetStatmItemsByFStatm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCollectionSummary = function getCollectionSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCollectionSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillType = function getBillType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillTypeByFtrans = function getBillTypeByFtrans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillTypeByFtrans, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillTypeByBillPrint = function getBillTypeByBillPrint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillTypeByBillPrint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBill_CTYPES = function getBill_CTYPES(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBill_CTYPES, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBill_CTYPESByFtrans = function getBill_CTYPESByFtrans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBill_CTYPESByFtrans, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.closeCollectionCycle = function closeCollectionCycle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.CloseCollectionCycle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateHH_BCYC = function updateHH_BCYC(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateHH_BCYC, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateMeterInfo = function updateMeterInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateMeterInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getDepositValue = function getDepositValue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetDepositValue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateBilngAssignC = function updateBilngAssignC(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateBilngAssignC, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateBilngAssignCWithStatments = function updateBilngAssignCWithStatments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateBilngAssignCWithStatments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateBilngAssignR = function updateBilngAssignR(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateBilngAssignR, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.cancelSewerService = function cancelSewerService(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.CancelSewerService, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerInfo = function getCustomerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerAgeems = function getCustomerAgeems(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerAgeems, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.executeSqlCommand = function executeSqlCommand(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.ExecuteSqlCommand, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.verifyCollectionAmount = function verifyCollectionAmount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.VerifyCollectionAmount, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.addInvoicedReading = function addInvoicedReading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.AddInvoicedReading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getLastReading = function getLastReading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetLastReading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getLastInvoicedReading = function getLastInvoicedReading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetLastInvoicedReading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getIssueType = function getIssueType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetIssueType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.initialize = function initialize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.Initialize, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.setDebug = function setDebug(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.SetDebug, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMarketingPlan = function getMarketingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMarketingPlan, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.applyMarketingPlan = function applyMarketingPlan(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.ApplyMarketingPlan, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getInfo = function getInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.calc = function calc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.Calc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.post = function post(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.Post, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.fillRecal = function fillRecal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.FillRecal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.modifyAndExecute = function modifyAndExecute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.ModifyAndExecute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMeterMakes = function getMeterMakes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMeterMakes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getMeterSizes = function getMeterSizes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetMeterSizes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerData = function getCustomerData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.postCustomerData = function postCustomerData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.PostCustomerData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.addMissingMeter = function addMissingMeter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.AddMissingMeter, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.verifyIssue = function verifyIssue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.VerifyIssue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getNewCustomersKeysList = function getNewCustomersKeysList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetNewCustomersKeysList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.updateCustomersKeysList = function updateCustomersKeysList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.UpdateCustomersKeysList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getAbstractCustomerInfo = function getAbstractCustomerInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetAbstractCustomerInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.createFaxNoIndex = function createFaxNoIndex(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.CreateFaxNoIndex, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getCustomerMetrDtl = function getCustomerMetrDtl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetCustomerMetrDtl, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getStationCode = function getStationCode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetStationCode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.importAllDataFromBilling = function importAllDataFromBilling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.ImportAllDataFromBilling, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.calcBillgroup = function calcBillgroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.CalcBillgroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getAllOpenedCyclesInEdams = function getAllOpenedCyclesInEdams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetAllOpenedCyclesInEdams, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getAllData = function getAllData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetAllData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

IBilngDataSourceClient.prototype.getBillgroupData = function getBillgroupData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IBilngDataSource.GetBillgroupData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.IBilngDataSourceClient = IBilngDataSourceClient;

