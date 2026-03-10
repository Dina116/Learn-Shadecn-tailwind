import type { RpcOptions, ServerStreamingCall } from '@protobuf-ts/runtime-rpc';
import {
  BillCycleRequest,
  BillgroupRequest,
  Billgroups,
  BillingCycle,
  BillingCycleList,
  BillingCycleStatusRequest,
  BillingStatusStatistcs,
  BillingSteps,
  CalcIndividualRequest,
  CalcRequest,
  CalcRequestArr,
  CalcResponce,
  CalcResponceArr,
  CustomHock,
  CustomHocks,
  CustomStep,
  CustomSteps,
  Empty,
  NewCycleRequest,
  ProcedureName,
  ServiceName,
  StatisticsRequest,
  StepReportRequest,
  StepReportResponce,
  STEPRq,
  StepReports,
  Version,
  SearchRequest,
  SearchResponse,
} from '../entities/_gen/operation_pb';
import { MyResponse } from './grpc';

export interface IOperationRepo {
  getVersion(input: Empty): MyResponse<Version>;
  getServiceName(input: Empty): MyResponse<ServiceName>;
  getBillingCycle(input: BillCycleRequest): MyResponse<BillingCycle>;
  getBillingCycleList(input: Empty): MyResponse<BillingCycleList>;
  newBillingCycle(input: NewCycleRequest): MyResponse<BillingCycle>;
  closeBillingCycle(input: BillCycleRequest): MyResponse<CalcResponce>;
  processBillingStep(input: CalcRequest): MyResponse<CalcResponce>;
  reverseBillingStep(input: CalcRequest): MyResponse<CalcResponce>;
  processBillingStepIndividual(
    input: CalcIndividualRequest,
  ): MyResponse<CalcResponce>;
  reverseBillingStepIndividual(
    input: CalcIndividualRequest,
  ): MyResponse<CalcResponce>;
  // getReport(input: StepReportRequest): MyResponse<Empty>;
  addOrUpdateHock(input: CustomHock): MyResponse<Empty>;
  removeHock(input: ProcedureName): MyResponse<Empty>;
  getHocks(input: Empty): MyResponse<CustomHocks>;
  addOrUpdateCustomStep(input: CustomStep): MyResponse<Empty>;
  removeCustomStep(input: ProcedureName): MyResponse<Empty>;
  getCustomSteps(input: Empty): MyResponse<CustomSteps>;
  getBillingStatus(
    input: BillingCycleStatusRequest,
    options?: RpcOptions,
  ): ServerStreamingCall<BillingCycleStatusRequest, BillingCycle>;
  getBillingGroups(input: BillgroupRequest): MyResponse<Billgroups>;
  getStatistics(input: StatisticsRequest): MyResponse<BillingStatusStatistcs>;
  getBillingCycleByNextValidStep(input: STEPRq): MyResponse<BillingCycleList>;
  getBillingSteps(input: Empty): MyResponse<BillingSteps>;
  proccessBillgroupsForStep(input: CalcRequestArr): MyResponse<CalcResponceArr>;
  getStepReports(input: StepReportRequest): MyResponse<StepReportResponce>;
  getPredefinedCustomSteps(input: Empty): MyResponse<CustomSteps>;
  getAllStepReports(input: Empty): MyResponse<StepReports>;
  search(input: SearchRequest): MyResponse<SearchResponse>;
  updateEstimCons(input: SearchResponse): MyResponse<Empty>;
}
