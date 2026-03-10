import type { RpcOptions, ServerStreamingCall } from '@protobuf-ts/runtime-rpc';
import { MyResponse } from './grpc';

import {
  AGREEMS,
  Amout,
  ArrAGREEMS,
  ArrBILLING_GROUPS,
  ArrCalcCustomerReq,
  ArrCTG_CONSUMPTION_TYPES,
  ArrCTG_CONSUMPTION_TYPES_GROUP,
  ArrCTGConsumptionServiceTariff,
  ArrCUSTOMER_Books,
  ArrCYCLES,
  ArrDevices,
  ArrEMPS,
  ArrF_TRANS,
  ArrInventorInvoice,
  ArrINVOICES,
  ArrMETER_BOOKS,
  ArrMETER_READING,
  ArrSECTORS,
  ArrSites,
  ArrStations,
  ArrTRANACTION_TYPES,
  ArrTransactionCatorgry,
  BILLING_GROUPS,
  CalcBillgroupReq,
  CalcBulkCustomerReq,
  CalcProgressMap,
  CancelAgreemReq,
  CollectionRequest,
  CTG_CONSUMPTION_TYPES,
  CTG_CONSUMPTION_TYPES_GROUP,
  CTGConsumptionServiceTariff,
  CustkeyRq,
  CUSTOMER_BOOKS,
  CYCLES,
  DEVICES,
  EMPS,
  Empty,
  GetAgreemsByFlags,
  GetByID,
  GetCustomerInvoicesByFlag,
  GetReadingsByFlags,
  InventorInvoice,
  METER_BOOKS,
  METER_ID_READING_NO,
  SECTORS,
  SITES,
  STATIONS,
  TRANACTION_TYPES,
  TransCodesRes,
} from '../entities/_gen/biller-sys_pb';

export interface IBillerRepo {
  getAllCTGConsumptionTypesGroup(
    input: Empty,
  ): MyResponse<ArrCTG_CONSUMPTION_TYPES_GROUP>;

  saveCTGConsumptionTypesGroup(
    input: CTG_CONSUMPTION_TYPES_GROUP,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getAllCTGConsumptionTypes(
    input: Empty,
    options?: RpcOptions,
  ): MyResponse<ArrCTG_CONSUMPTION_TYPES>;

  saveCTGConsumptionTypes(
    input: CTG_CONSUMPTION_TYPES,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getAllCTGConsumptionServiceTariffs(
    input: Empty,
    options?: RpcOptions,
  ): MyResponse<ArrCTGConsumptionServiceTariff>;

  saveCTGConsumptionServiceTariff(
    input: CTGConsumptionServiceTariff,
    options?: RpcOptions,
  ): MyResponse<Empty>;
  // done

  getAllTransactionTypes(input: Empty): MyResponse<ArrTRANACTION_TYPES>; // not used

  saveTransactionType(
    input: TRANACTION_TYPES, // not used
  ): MyResponse<Empty>;

  getAllTransactionTypeCatagory(
    input: Empty,
  ): MyResponse<ArrTransactionCatorgry>;

  openNewCycle(input: CYCLES, options?: RpcOptions): MyResponse<Empty>;

  editCycle(input: CYCLES, options?: RpcOptions): MyResponse<Empty>;

  deleteCycle(input: CYCLES, options?: RpcOptions): MyResponse<Empty>;

  getCycleByID(input: GetByID, options?: RpcOptions): MyResponse<CYCLES>;

  closeReadingCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  closeCollectionCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  allowCollectionCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  stopCollectionCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  allowReadingsCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  stopReadingsCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  allowElectronicCollectionCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  stopElectronicCollectionCycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  allowElectronicReadingsBycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  stopElectronicReadingsBycleByID(
    input: GetByID,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getAllUnInvoicedTransactionsByCustkey(
    input: CustkeyRq,
    options?: RpcOptions,
  ): MyResponse<ArrF_TRANS>;

  // insertFincanceTransaction(
  //   input: InsertAmt,
  //   options?: RpcOptions,
  // ): MyResponse<Empty>;

  getCustomerTransactions(
    input: CustkeyRq,
    options?: RpcOptions,
  ): MyResponse<ArrF_TRANS>;

  getCustomerComulativeBalance(
    input: CustkeyRq,
    options?: RpcOptions,
  ): MyResponse<Amout>;

  getAllCustomerInvoicesByFlags(
    input: GetCustomerInvoicesByFlag,
    options?: RpcOptions,
  ): MyResponse<ArrINVOICES>;

  collectInvoices(
    input: CollectionRequest,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  inverntorInvoice(
    input: InventorInvoice,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  inverntorInvoices(
    input: ArrInventorInvoice,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getAllCustomerAgreemsByFlags(
    input: GetAgreemsByFlags,
    options?: RpcOptions,
  ): MyResponse<ArrAGREEMS>;

  insertAgreem(input: AGREEMS, options?: RpcOptions): MyResponse<Empty>;

  cancelAgreem(input: CancelAgreemReq, options?: RpcOptions): MyResponse<Empty>;

  getAllReadingsByFlags(
    input: GetReadingsByFlags,
    options?: RpcOptions,
  ): MyResponse<ArrMETER_READING>;

  cancelUnInvoicedRead(
    input: METER_ID_READING_NO,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  // cancelInvoicedRead(
  //   input: METER_ID_READING_NO,
  //   options?: RpcOptions,
  // ): MyResponse<Empty>;

  calcBillgroup(
    input: CalcBillgroupReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  reverseBillgroup(
    input: CalcBillgroupReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  // calcStation(input: CalcStationReq, options?: RpcOptions): MyResponse<Empty>;

  // reverseStation(
  //   input: CalcStationReq,
  //   options?: RpcOptions,
  // ): MyResponse<Empty>;

  calcCustomers(
    input: ArrCalcCustomerReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  reverseCustomers(
    input: ArrCalcCustomerReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  reverseCustomers(
    input: ArrCalcCustomerReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getAllSites(input: Empty, options?: RpcOptions): MyResponse<ArrSites>;
  saveSite(input: SITES, options?: RpcOptions): MyResponse<Empty>;
  getAllStations(input: Empty, options?: RpcOptions): MyResponse<ArrStations>;
  saveStation(input: STATIONS, options?: RpcOptions): MyResponse<Empty>;
  getAllSectors(input: Empty, options?: RpcOptions): MyResponse<ArrSECTORS>;
  saveSector(input: SECTORS, options?: RpcOptions): MyResponse<Empty>;
  getAllBillingGroups(
    input: Empty,
    options?: RpcOptions,
  ): MyResponse<ArrBILLING_GROUPS>;
  addBillgroup(input: BILLING_GROUPS, options?: RpcOptions): MyResponse<Empty>;
  editBillgroup(input: BILLING_GROUPS, options?: RpcOptions): MyResponse<Empty>;
  getAllDevices(input: Empty, options?: RpcOptions): MyResponse<ArrDevices>;
  registerDevice(input: DEVICES, options?: RpcOptions): MyResponse<Empty>;
  getAllEmps(input: Empty, options?: RpcOptions): MyResponse<ArrEMPS>;
  saveEmp(input: EMPS, options?: RpcOptions): MyResponse<Empty>;
  getAllCustomerBooks(
    input: Empty,
    options?: RpcOptions,
  ): MyResponse<ArrCUSTOMER_Books>;
  saveCustomerBooks(
    input: CUSTOMER_BOOKS,
    options?: RpcOptions,
  ): MyResponse<Empty>;
  getAllMeterBooks(
    input: Empty,
    options?: RpcOptions,
  ): MyResponse<ArrMETER_BOOKS>;
  saveMeterBooks(input: METER_BOOKS, options?: RpcOptions): MyResponse<Empty>;
  getAllCycles(input: Empty, options?: RpcOptions): MyResponse<ArrCYCLES>;
  calcMonitor(
    input: Empty,
    options?: RpcOptions,
  ): ServerStreamingCall<Empty, CalcProgressMap>;

  calcBulkCustomers(
    input: CalcBulkCustomerReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  reverseBulkCustomers(
    input: CalcBulkCustomerReq,
    options?: RpcOptions,
  ): MyResponse<Empty>;

  getTransCodes(inout: Empty): MyResponse<TransCodesRes>;
}
