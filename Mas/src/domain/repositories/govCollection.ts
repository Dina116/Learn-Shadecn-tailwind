import {
  ACCOUNTING_UNITS,
  ACCOUNTING_UNITS_ID,
  All_ACCOUNTING_UNITS,
  All_ASSOCIATIONS,
  All_DEPENDENCIES,
  ALL_FOLDERS,
  All_GROUPS,
  All_MINISTRIES,
  All_Mosadakat,
  All_SUB_GROUPS,
  All_UNITS,
  Arr_CustomersBills,
  Arr_Emps,
  Arr_Payments,
  ArrCancelleRequste,
  ArrPaymentCollDtl,
  ArrSettlFiles,
  ASSOCIATION,
  ASSOCIATIONS_ID,
  Bills_Parameters,
  CancelAllocateRequste,
  CancelFileRequste,
  CancelledReport,
  CancelleRepRequest,
  CancelPaymentRequste,
  CentralPaymentsReq,
  CentralPaymentsRes,
  ConvCustToPreReq,
  Customers,
  Customers_s,
  CustYearResp,
  DalyallCollectorCollRes,
  DalyallCollRes,
  DalyCollRes,
  DalyTaxDtlRes,
  DEPENDENCY,
  DEPENDENCIES_ID,
  DtlCustFYearRes,
  DtlSubGroubRes,
  EditingRecDtlRSP,
  Emp_Id_rq,
  Emptymessage,
  FOLDER_ID_REQ,
  FOLDER_REQ,
  GetCancelleRequste,
  GetCustomerReq,
  GetSFRequest,
  GOV_CENTRAL_HISTORY_REPORT,
  Gov_CENTRAL_PAYMENTS,
  GOV_EMP,
  GOV_FILES_ID,
  GOV_FOLDERS,
  GOV_SETTLEMENT_FILES,
  GROUP_DTL,
  GROUPS_ID,
  HafzaReports,
  HafzaRequest,
  MergePaymentsFilesReq,
  MessageResponse,
  MINISTRY,
  MINISTRY_ID,
  MosadakatReq,
  NCustomerReq,
  PAY_RQ,
  PAYMENT_ID,
  PaymentCollDtlReq,
  PaymentReq,
  PAYMENTS,
  PaymentSettlementDtlRSP,
  ReduceFileAmountRequst,
  ReportRequest,
  SettlementReportsRSP,
  SettlFileRequst,
  SUB_GROUP_DTL,
  SUB_GROUPS_ID,
  SUB_GROUPS_RELATED_GROUP,
  SubGroubCRes,
  TotalSubGroubQueryRes,
  TotalSubGroubRes,
  UNIT,
  UNITS_ID,
  DeliveryMosadakatReq,
  All_Mosadakat_Custs,
  GardRequest,
  GardResponse,
  SubsMeterExeptionReportResponse,
  SubGroupsDeptsResponse,
  GovGroupsClaimsResponse,
  MosadakaRepReq,
  MosadakaRepRes,
  AllProtocols,
  ProtocolReq,
  GOV_Protocol,
  AllStatements,
  STATEMENT,
  StatementID,
  AllStatementItems,
  STATEMENT_ITEMS,
  StatementItemID,
  AllExeptions,
  EXEPTION,
  ExeptionID,
  LAST_GOV_Protocol,
  All_RAINS,
  GOV_RAIN_WATER,
  GOV_RAIN_REQ,
  SubsRainConsumpRes,
  GOV_RAIN_SETETLEMENT,
  All_RAIN_Mosadakat_Subs,
  RainMosadakatReq,
  All_Rain_Mosadakat,
  RainDeliveryMosadakatReq,
  AllBanks,
  Bank,
  BankID,
  CollectReqRes,
  SettingRes,
  PartiallyPaidReportRes,
} from '../entities/_gen/gov_collection_pb';
import { MyResponse } from './grpc';

export interface IgoveCollectionRepo {
  getGROUPS(input: Emptymessage): MyResponse<All_GROUPS>;
  getSubGROUPS(input: GROUPS_ID): MyResponse<All_SUB_GROUPS>;
  getCustomers(input: SUB_GROUPS_ID): MyResponse<Customers>;
  getCustomersBills(input: Bills_Parameters): MyResponse<Arr_CustomersBills>;
  collectReq(input: Arr_CustomersBills): MyResponse<CollectReqRes>;
  getCollectedByCustkey(
    input: GetCancelleRequste,
  ): MyResponse<ArrCancelleRequste>;
  cancelleCollection(input: ArrCancelleRequste): MyResponse<MessageResponse>;
  getCustomer(input: GetCustomerReq): MyResponse<Customers_s>;

  addPayment(input: PaymentReq): MyResponse<MessageResponse>;
  getPayments(input: PAY_RQ): MyResponse<Arr_Payments>;
  editPayment(input: PAYMENTS): MyResponse<MessageResponse>;
  deletePayment(input: PAYMENT_ID): MyResponse<MessageResponse>;

  addSettlementFile(input: SettlFileRequst): MyResponse<MessageResponse>;
  getSettlementFiles(input: GetSFRequest): MyResponse<ArrSettlFiles>;
  editSettlementFile(input: GOV_SETTLEMENT_FILES): MyResponse<MessageResponse>;
  deleteSettlementFile(input: GOV_FILES_ID): MyResponse<MessageResponse>;

  getAllEmp(input: Emptymessage): MyResponse<Arr_Emps>;
  getEmp(input: Emp_Id_rq): MyResponse<GOV_EMP>;
  addEmp(input: GOV_EMP): MyResponse<MessageResponse>;
  editEmp(input: GOV_EMP): MyResponse<MessageResponse>;

  dalyCollReport(input: ReportRequest): MyResponse<DalyallCollRes>;
  dalyCollDtlReport(input: ReportRequest): MyResponse<DalyCollRes>;
  dalyCollectorsCollReport(
    input: ReportRequest,
  ): MyResponse<DalyallCollectorCollRes>;
  dalyTaxDtlReport(input: ReportRequest): MyResponse<DalyTaxDtlRes>;
  mnthCollReport(input: ReportRequest): MyResponse<DalyallCollRes>;
  totalCustYear(input: ReportRequest): MyResponse<CustYearResp>;
  dtlCustYear(input: ReportRequest): MyResponse<CustYearResp>;
  totalSubGroubC(input: ReportRequest): MyResponse<SubGroubCRes>;
  dtlSubGroub(input: ReportRequest): MyResponse<DtlSubGroubRes>;
  dtlSubGroubYear(input: ReportRequest): MyResponse<DtlSubGroubRes>;
  dtlCustFYear(input: ReportRequest): MyResponse<DtlCustFYearRes>;
  totalSubGroub(input: ReportRequest): MyResponse<TotalSubGroubRes>;
  totalSubGroubQuery(input: ReportRequest): MyResponse<TotalSubGroubQueryRes>;
  getCancelledCollection(
    input: CancelleRepRequest,
  ): MyResponse<CancelledReport>;
  converCustToPrepaied(input: ConvCustToPreReq): MyResponse<MessageResponse>;
  converCustToPostpaied(input: ConvCustToPreReq): MyResponse<MessageResponse>;
  editGROUP(input: GROUP_DTL): MyResponse<MessageResponse>;
  editSubGROUP(input: SUB_GROUP_DTL): MyResponse<MessageResponse>;
  deleteGROUP(input: GROUPS_ID): MyResponse<MessageResponse>;
  deleteSubGROUP(input: SUB_GROUPS_ID): MyResponse<MessageResponse>;
  addCustomer(input: NCustomerReq): MyResponse<MessageResponse>;
  moveCustomers(input: NCustomerReq): MyResponse<MessageResponse>;
  deleteCustomer(input: NCustomerReq): MyResponse<MessageResponse>;
  cancelCollectedPayment(
    input: CancelPaymentRequste,
  ): MyResponse<MessageResponse>;
  cancelCollectedFile(input: CancelFileRequste): MyResponse<MessageResponse>;
  dalySettlementReport(input: ReportRequest): MyResponse<SettlementReportsRSP>;
  getSubGROUPSBySubGROUPID(
    input: SUB_GROUPS_ID,
  ): MyResponse<SUB_GROUPS_RELATED_GROUP>;
  getAllFolders(input: Emptymessage): MyResponse<ALL_FOLDERS>;

  addFolder(input: FOLDER_REQ): MyResponse<MessageResponse>;

  editFolder(input: FOLDER_REQ): MyResponse<MessageResponse>;

  getFolder(input: FOLDER_ID_REQ): MyResponse<GOV_FOLDERS>;
  hafzaSettlementReport(input: HafzaRequest): MyResponse<GOV_FOLDERS>;

  hafzaPayReport(input: HafzaRequest): MyResponse<HafzaReports>;
  getAllCentralPayments(input: Emptymessage): MyResponse<CentralPaymentsRes>;
  addNewCentralPayments(
    input: Gov_CENTRAL_PAYMENTS,
  ): MyResponse<MessageResponse>;
  approveCentralPayments(
    input: CentralPaymentsReq,
  ): MyResponse<MessageResponse>;
  deleteCentralPayments(input: CentralPaymentsReq): MyResponse<MessageResponse>;
  reviewCentralPayments(input: CentralPaymentsReq): MyResponse<MessageResponse>;
  getPaymentCollDtl(input: PaymentCollDtlReq): MyResponse<ArrPaymentCollDtl>;
  editableCentralPayments(
    input: CentralPaymentsReq,
  ): MyResponse<MessageResponse>;
  getCentralHistory(
    input: CentralPaymentsReq,
  ): MyResponse<GOV_CENTRAL_HISTORY_REPORT>;
  paymentSettlementDtl(
    input: ReportRequest,
  ): MyResponse<PaymentSettlementDtlRSP>;
  dalyOnlySettlementReport(
    input: ReportRequest,
  ): MyResponse<SettlementReportsRSP>;
  editingRecReport(input: ReportRequest): MyResponse<EditingRecDtlRSP>;
  mergePaymentsToFile(
    input: MergePaymentsFilesReq,
  ): MyResponse<MessageResponse>;
  cancelAllocatePayment(
    input: CancelAllocateRequste,
  ): MyResponse<MessageResponse>;
  reduceFileAmount(input: ReduceFileAmountRequst): MyResponse<MessageResponse>;

  getAllMinistries(input: Emptymessage): MyResponse<All_MINISTRIES>;
  editMinistry(input: MINISTRY): MyResponse<MessageResponse>;
  deleteMinistry(input: MINISTRY_ID): MyResponse<MessageResponse>;
  getAllAccountsUnits(input: Emptymessage): MyResponse<All_ACCOUNTING_UNITS>;
  editAccountUnits(input: ACCOUNTING_UNITS): MyResponse<MessageResponse>;
  deleteAccountUnits(input: ACCOUNTING_UNITS_ID): MyResponse<MessageResponse>;
  getAllAssociations(input: Emptymessage): MyResponse<All_ASSOCIATIONS>;
  editAssociation(input: ASSOCIATION): MyResponse<MessageResponse>;
  deleteAssociation(input: ASSOCIATIONS_ID): MyResponse<MessageResponse>;
  getAllUnits(input: Emptymessage): MyResponse<All_UNITS>;
  editUnit(input: UNIT): MyResponse<MessageResponse>;
  deleteUnit(input: UNITS_ID): MyResponse<MessageResponse>;
  getAllDependencies(input: Emptymessage): MyResponse<All_DEPENDENCIES>;
  editDependency(input: DEPENDENCY): MyResponse<MessageResponse>;
  deleteDependency(input: DEPENDENCIES_ID): MyResponse<MessageResponse>;
  viewMosadakat(input: MosadakatReq): MyResponse<All_Mosadakat>;
  deliveryMosadakat(input: DeliveryMosadakatReq): MyResponse<MessageResponse>;
  approveFullMosadakat(input: All_Mosadakat): MyResponse<MessageResponse>;
  rejectFullMosadakat(input: All_Mosadakat): MyResponse<MessageResponse>;
  viewMosadakatCusts(input: MosadakatReq): MyResponse<All_Mosadakat_Custs>;
  approvePartialMosadakat(
    input: All_Mosadakat_Custs,
  ): MyResponse<MessageResponse>;
  rejectPartialMosadakat(
    input: All_Mosadakat_Custs,
  ): MyResponse<MessageResponse>;
  getGovGard(input: GardRequest): MyResponse<GardResponse>;
  subsMeterExeptionReport(
    input: ReportRequest,
  ): MyResponse<SubsMeterExeptionReportResponse>;
  subGroupsDepts(input: ReportRequest): MyResponse<SubGroupsDeptsResponse>;
  govGroupsClaims(input: ReportRequest): MyResponse<GovGroupsClaimsResponse>;
  mosadakaReports(input: MosadakaRepReq): MyResponse<MosadakaRepRes>;
  getAllProtocols(input: Emptymessage): MyResponse<AllProtocols>;
  addNewProtocol(input: GOV_Protocol): MyResponse<MessageResponse>;
  deleteProtocol(input: ProtocolReq): MyResponse<MessageResponse>;
  collProtocol(input: ProtocolReq): MyResponse<MessageResponse>;
  getAllStatements(input: Emptymessage): MyResponse<AllStatements>;
  editStatement(input: STATEMENT): MyResponse<MessageResponse>;
  deleteStatement(input: StatementID): MyResponse<MessageResponse>;
  getAllStatementItems(input: Emptymessage): MyResponse<AllStatementItems>;
  editStatementItem(input: STATEMENT_ITEMS): MyResponse<MessageResponse>;
  deleteStatementItem(input: StatementItemID): MyResponse<MessageResponse>;
  getAllExeptions(input: Emptymessage): MyResponse<AllExeptions>;
  editExeption(input: EXEPTION): MyResponse<MessageResponse>;
  deleteExeption(input: ExeptionID): MyResponse<MessageResponse>;
  getLastProtocol(input: Emptymessage): MyResponse<LAST_GOV_Protocol>;
  /** rains */
  getAllRains(input: Emptymessage): MyResponse<All_RAINS>;
  addRainConsump(input: GOV_RAIN_WATER): MyResponse<MessageResponse>;
  viewSubsRainConsump(input: GOV_RAIN_REQ): MyResponse<SubsRainConsumpRes>;
  collectRainConsump(input: GOV_RAIN_SETETLEMENT): MyResponse<MessageResponse>;

  editRainConsump(input: GOV_RAIN_WATER): MyResponse<MessageResponse>;

  viewRainMosadakatCusts(
    input: RainMosadakatReq,
  ): MyResponse<All_RAIN_Mosadakat_Subs>;
  viewRainMosadakat(input: RainMosadakatReq): MyResponse<All_Rain_Mosadakat>;
  rainDeliveryMosadakat(
    input: RainDeliveryMosadakatReq,
  ): MyResponse<MessageResponse>;
  approvePartialRainMosadakat(
    input: All_RAIN_Mosadakat_Subs,
  ): MyResponse<MessageResponse>;
  approveFullRainMosadakat(
    input: All_Rain_Mosadakat,
  ): MyResponse<MessageResponse>;
  rejectFullRainMosadakat(
    input: All_Rain_Mosadakat,
  ): MyResponse<MessageResponse>;
  rejectPartialRainMosadakat(
    input: All_RAIN_Mosadakat_Subs,
  ): MyResponse<MessageResponse>;
  reviewGovGardData(input: GardRequest): MyResponse<GardResponse>;
  upproveGovGardData(input: GardResponse): MyResponse<MessageResponse>;
  getAllBanks(input: Emptymessage): MyResponse<AllBanks>;
  editBank(input: Bank): MyResponse<MessageResponse>;
  deleteBank(input: BankID): MyResponse<MessageResponse>;
  getSetting(input: Emptymessage): MyResponse<SettingRes>;
  partiallyPaidReport(input: ReportRequest): MyResponse<PartiallyPaidReportRes>;
}
