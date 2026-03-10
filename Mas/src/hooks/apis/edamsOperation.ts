import { useMutation, useQuery } from '@tanstack/react-query';
import { edamsOperation } from '@/app/services';
import {
  BillCycleRequest,
  Billgroup,
  BillgroupRequest,
  BillingCycle,
  BillingStatusStatistcs,
  BillingStep,
  CalcIndividualRequest,
  CalcRequest,
  CalcRequestArr,
  CalcResponce,
  CustomStep,
  Empty,
  NewCycleRequest,
  SearchRequest,
  SearchResponse,
  StatisticsRequest,
  StepReport,
  StepReportRequest,
  StepReportResponce,
  // StepReports,
  STEPRq,
} from '@/domain/entities/_gen/operation_pb';

const closeBillingCycle = async (req: BillCycleRequest) => {
  const data = await edamsOperation.closeBillingCycle(req);
  return data.response;
};

const getBillingCycle = async (req: BillCycleRequest) => {
  const data = await edamsOperation.getBillingCycle(req);
  return data.response;
};

const getBillingCycleList = async (req: Empty) => {
  const data = await edamsOperation.getBillingCycleList(req);
  return data.response.BillingCycles;
};

const getVersion = async (req: Empty) => {
  const data = await edamsOperation.getVersion(req);
  return data.response.Version;
};

const newBillingCycle = async (req: NewCycleRequest) => {
  const data = await edamsOperation.newBillingCycle(req);
  return data.response;
};

const processBillingStep = async (req: CalcRequest) => {
  const data = await edamsOperation.processBillingStep(req);
  return data.response;
};

const processBillingStepIndividual = async (req: CalcIndividualRequest) => {
  const data = await edamsOperation.processBillingStepIndividual(req);
  return data.response;
};

const reverseBillingStep = async (req: CalcRequest) => {
  const data = await edamsOperation.reverseBillingStep(req);
  return data.response;
};

const reverseBillingStepIndividual = async (req: CalcIndividualRequest) => {
  const data = await edamsOperation.reverseBillingStepIndividual(req);
  return data.response;
};

const getBillingGroups = async (req: BillgroupRequest) => {
  const data = await edamsOperation.getBillingGroups(req);
  return data.response.Groups;
};
const getStatistics = async (
  req: StatisticsRequest,
): Promise<BillingStatusStatistcs> => {
  const data = await edamsOperation.getStatistics(req);
  return data.response;
};

const getBillingCycleByNextValidStep = async (req: STEPRq) => {
  console.log('api Req', req);
  const data = await edamsOperation.getBillingCycleByNextValidStep(req);
  return data.response.BillingCycles;
};

const getBillingSteps = async () => {
  const data = await edamsOperation.getBillingSteps({});
  return data.response.Steps;
};

const proccessBillgroupsForStep = async (req: CalcRequestArr) => {
  const data = await edamsOperation.proccessBillgroupsForStep(req);
  return data.response.calcResponse;
};

const getPredefinedCustomSteps = async () => {
  const data = await edamsOperation.getPredefinedCustomSteps({});
  return data.response.Steps;
};

const addOrUpdateCustomStep = async (req: CustomStep) => {
  const data = await edamsOperation.addOrUpdateCustomStep(req);
  return data.response;
};

const getStepReports = async (
  req: StepReportRequest,
): Promise<StepReportResponce> => {
  console.log('api Req', req);
  const data = await edamsOperation.getStepReports(req);
  return data.response;
};

const getAllStepReports = async (): Promise<StepReport[]> => {
  const data = await edamsOperation.getAllStepReports({});
  return data.response.Reports;
};

const consumpSearch = async (req: SearchRequest): Promise<SearchResponse> => {
  const data = await edamsOperation.search(req);
  return data.response;
};
const updateEstimate = async (req: SearchResponse): Promise<Empty> => {
  const data = await edamsOperation.updateEstimCons(req);
  return data.response;
};
//* *************************************** */
type IcloseBillingCycle = {
  onSuccess?: (req: CalcResponce) => void;
};

export const useCloseBillingCycleApi = ({ onSuccess }: IcloseBillingCycle) => {
  const mutation = useMutation({
    mutationFn: (req: BillCycleRequest) => closeBillingCycle(req),
    onSuccess,
  });

  return mutation;
};

// type IGetBillingCycle = {
//   onSuccess?: (req: BillingCycle) => void;
// };

// export const useGetBillingCycleApi = ({ onSuccess }: IGetBillingCycle) => {
//   const mutation = useMutation({
//     mutationFn: (req: BillCycleRequest) => getBillingCycle(req),
//     onSuccess,
//   });

//   return mutation;
// };

export const useGetBillingCycleApi = (req: BillCycleRequest) => {
  // console.log('api Req', req);
  const query = useQuery<BillingCycle>({
    queryKey: ['useGetBillingCycleApiKey', req],
    queryFn: () => getBillingCycle(req),
    enabled:
      Object.keys(req || {}).length > 0 &&
      !!req.CycleId &&
      req.Billgroup !== '',
    // enabled: Object.keys(req || {}).length > 0 && req.CycleId,
    // staleTime: 0,
    // refetchInterval: 5000,
  });
  return query;
};

export const useGetBillingCycleListApi = (req: Empty) => {
  const query = useQuery<BillingCycle[]>({
    queryKey: ['useGetBillingCycleListApiKey', req],
    queryFn: () => getBillingCycleList(req),
    enabled: true,
  });
  return query;
};
export const useSearchConsumbApi = (req: SearchRequest, enable: boolean) => {
  console.log('api Req', req);
  const query = useQuery<SearchResponse>({
    queryKey: ['useGeSearchConsumpKey', req],
    queryFn: () => consumpSearch(req),
    retry: 0,
    enabled: enable,
  });
  return query;
};

type IUpdateEstimate = {
  onSuccess?: (req: Empty) => void;
};
export const useUpdateEstimateConsumbApi = ({ onSuccess }: IUpdateEstimate) => {
  const mutation = useMutation({
    mutationFn: (req: SearchResponse) => updateEstimate(req),
    onSuccess,
  });

  return mutation;
};
export const useGetVersionApi = (req: Empty) => {
  const query = useQuery<string>({
    queryKey: ['useGetVersionApiKey', req],
    queryFn: () => getVersion(req),
    retry: 0,
    enabled: true,
  });
  return query;
};

type InewBillingCycle = {
  onSuccess?: (req: BillingCycle) => void;
};

export const useNewBillingCycleApi = ({ onSuccess }: InewBillingCycle) => {
  const mutation = useMutation({
    mutationFn: (req: NewCycleRequest) => newBillingCycle(req),
    onSuccess,
  });

  return mutation;
};

type IprocessBillingStep = {
  onSuccess?: (req: CalcResponce) => void;
  onMutate?: (req: CalcRequest) => void;
};

export const useProcessBillingStepApi = ({
  onSuccess,
  onMutate,
}: IprocessBillingStep) => {
  const mutation = useMutation({
    mutationFn: (req: CalcRequest) => processBillingStep(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};

type IprocessBillingStepIndividual = {
  onSuccess?: (req: CalcResponce) => void;
};

export const useProcessBillingStepIndividualApi = ({
  onSuccess,
}: IprocessBillingStepIndividual) => {
  const mutation = useMutation({
    mutationFn: (req: CalcIndividualRequest) =>
      processBillingStepIndividual(req),
    onSuccess,
  });

  return mutation;
};

type IreverseBillingStep = {
  onSuccess?: (req: CalcResponce) => void;
};

export const useReverseBillingStepApi = ({
  onSuccess,
}: IreverseBillingStep) => {
  const mutation = useMutation({
    mutationFn: (req: CalcRequest) => reverseBillingStep(req),
    onSuccess,
  });

  return mutation;
};

type IreverseBillingStepIndividual = {
  onSuccess?: (req: CalcResponce) => void;
};

export const useReverseBillingStepIndividualApi = ({
  onSuccess,
}: IreverseBillingStepIndividual) => {
  const mutation = useMutation({
    mutationFn: (req: CalcIndividualRequest) =>
      reverseBillingStepIndividual(req),
    onSuccess,
  });

  return mutation;
};

export const useGetBillingGroups = (
  req: BillgroupRequest,
  enabled: boolean,
) => {
  const query = useQuery<Billgroup[]>({
    queryKey: ['useGetBillingGroupsKey', req],
    queryFn: () => getBillingGroups(req),
    retry: 0,
    enabled,
  });
  return query;
};
export const useGetStatistics = (req: StatisticsRequest) => {
  const query = useQuery<BillingStatusStatistcs>({
    queryKey: ['getStatisticsKey', req],
    queryFn: () => getStatistics(req),
    retry: 0,
    enabled: true,
  });
  return query;
};

export const useGetBillingCycleByNextValidStep = (req: STEPRq) => {
  const query = useQuery<BillingCycle[]>({
    queryKey: ['useGetBillingCycleByNextValidStepKey', req],
    queryFn: () => getBillingCycleByNextValidStep(req),
    retry: 0,
    enabled: Object.keys(req || {}).length > 0,
  });
  return query;
};

export const useGetBillingStepsApi = () => {
  const query = useQuery<BillingStep[]>({
    queryKey: ['useGetBillingStepsApi'],
    queryFn: () => getBillingSteps(),
    retry: 0,
  });
  return query;
};

type IproccessBillgroupsForStep = {
  onSuccess?: (req: CalcResponce[]) => void;
};

export const useProccessBillgroupsForStepApi = ({
  onSuccess,
}: IproccessBillgroupsForStep) => {
  const mutation = useMutation({
    mutationFn: (req: CalcRequestArr) => proccessBillgroupsForStep(req),
    onSuccess,
  });
  return mutation;
};

type IuseGetStepReports = {
  onSuccess?: (req: StepReportResponce) => void;
};

export const useGetStepReportsApi = ({ onSuccess }: IuseGetStepReports) => {
  const mutation = useMutation({
    mutationFn: (req: StepReportRequest) => getStepReports(req),
    onSuccess,
  });
  return mutation;
};

export const useGetPredefinedCustomSteps = () => {
  const query = useQuery<CustomStep[]>({
    queryKey: ['useGetPredefinedCustomStepsKey'],
    queryFn: () => getPredefinedCustomSteps(),
    retry: 0,
  });
  return query;
};

export const useGetAllStepReports = () => {
  const query = useQuery<StepReport[]>({
    queryKey: ['useGetAllStepReportsKey'],
    queryFn: () => getAllStepReports(),
    retry: 0,
  });
  return query;
};

type IAddOrUpdateCustomStepProps = {
  onSuccess?: (res: Empty) => void;
};

export const useAddOrUpdateCustomStep = ({
  onSuccess,
}: IAddOrUpdateCustomStepProps) => {
  const mutation = useMutation({
    mutationFn: (req: CustomStep) => addOrUpdateCustomStep(req),
    onSuccess,
  });

  return mutation;
};
