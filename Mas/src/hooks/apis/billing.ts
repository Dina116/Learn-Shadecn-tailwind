import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { billingService } from '@/app/services';
import {
  CUSTOMERINFORMATION,
  GETLASTBILLINGREADINGREQ,
  TRUNCATEREQ,
} from '@/domain/entities/customerInformation';
import {
  CANCELSEWERREQ,
  HHttpActionResult,
} from '@/domain/entities/hhttpActionres';
import { IssueVerificationResultItem } from '@/domain/entities/issueVerify';
import {
  MODIFYPREVREADINGREQ,
  VERIFYISSUEREQ,
} from '@/domain/entities/reading';
import { READINGRECORD } from '@/domain/entities/readingRecord';

export const lastBilingReadingKey = 'lastBilingReadingKey';
export const updateBillingCustWalkKey = 'updateBillingCustWalkKey';
export const getBillingInfoKey = 'getBillingInfoKey';

export const useGetBillingInfoApi = (custkey: string) => {
  const query = useQuery<CUSTOMERINFORMATION, Error>({
    queryKey: [getBillingInfoKey, custkey],
    queryFn: () => billingService.getBillingInformation(custkey),
    enabled: true,
  });
  return query;
};

export const useGetLastBilingReadingApi = (req: GETLASTBILLINGREADINGREQ) => {
  const query = useQuery<READINGRECORD, Error>({
    queryFn: () => billingService.GetLastBilngReading(req),
    enabled: req.custkey !== '',
  });
  return query;
};

type UpdateBillingCustomer = {
  onSuccess?: (res: number) => void;
  onMutate?: () => void;
};

export const useUpdateBillingCustomerWalkApi = ({
  onSuccess,
  onMutate,
}: UpdateBillingCustomer) => {
  const mutation = useMutation({
    mutationFn: () => billingService.UpdateBilngCustomerWalks(),
    onSuccess,
    onMutate,
  });
  return mutation;
};

type ModifyPrevReadingProps = {
  onSuccess?: (res: number) => void;
  onError?: (err: AxiosError) => void;
};
export const useModifyPrevReadingApi = ({
  onSuccess,
  onError,
}: ModifyPrevReadingProps) => {
  const mutation = useMutation({
    mutationFn: (req: MODIFYPREVREADINGREQ) =>
      billingService.ModifyPrevReading(req),
    onSuccess,
    onError,
  });
  return mutation;
};
type RefreshCustomerBookProps = {
  onSuccess?: (res: number) => void;
  onMutate?: (req: TRUNCATEREQ) => number;
};
export const useRefreshCustomerBookApi = ({
  onSuccess,
  onMutate,
}: RefreshCustomerBookProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) => billingService.refreshCustomerBooks(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};

type RefreshConsumptionTypeProps = {
  onSuccess?: (res: string[]) => void;
};
export const useRefreshConsumptionTypeApi = ({
  onSuccess,
}: RefreshConsumptionTypeProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) =>
      billingService.RefreshConsumptionTypes(req),
    onSuccess,
  });
  return mutation;
};
type RefreshMeterBookProps = {
  onSuccess?: (res: number) => void;
  onMutate?: (req: TRUNCATEREQ) => number;
};
export const useRefreshMeterBookApi = ({
  onSuccess,
  onMutate,
}: RefreshMeterBookProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) => billingService.RefreshMeterBooks(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};
type CancelSewerServiceProps = {
  onSuccess?: (res: HHttpActionResult) => void;
  onMutate?: (req: CANCELSEWERREQ) => number;
};
export const useCancelSewerServiceApi = ({
  onSuccess,
  onMutate,
}: CancelSewerServiceProps) => {
  const mutation = useMutation({
    mutationFn: (req: CANCELSEWERREQ) => billingService.CancelSewerService(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};
type VerifyIssueProps = {
  onSuccess?: (res: IssueVerificationResultItem[]) => void;
};
export const useVerifyIssueApi = ({ onSuccess }: VerifyIssueProps) => {
  const mutation = useMutation({
    mutationFn: (req: VERIFYISSUEREQ) => billingService.VerifyIssue(req),
    onSuccess,
  });
  return mutation;
};
type RefreshBillGroupProps = {
  onSuccess?: (res: number) => void;
};
export const useRefreshBillGroupApi = ({
  onSuccess,
}: RefreshBillGroupProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) => billingService.RefreshBillGroups(req),
    onSuccess,
  });
  return mutation;
};
type RefreshConsumptionsTypesGroupsProps = {
  onSuccess?: (res: number) => void;
};
export const useRefreshConsuptionTypesGroupsApi = ({
  onSuccess,
}: RefreshConsumptionsTypesGroupsProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) =>
      billingService.RefreshConsumptionTypesGroups(req),
    onSuccess,
  });
  return mutation;
};
type RefreshAccessCodeProps = {
  onSuccess?: (res: number) => void;
};
export const useRefreshAccessCodeApi = ({
  onSuccess,
}: RefreshAccessCodeProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) => billingService.RefreshAccessCodes(req),
    onSuccess,
  });
  return mutation;
};
type RefreshAllProps = {
  onSuccess?: (res: number) => void;
};
export const useRefreshAllApi = ({ onSuccess }: RefreshAllProps) => {
  const mutation = useMutation({
    mutationFn: (req: TRUNCATEREQ) => billingService.RefreshAll(req),
    onSuccess,
  });
  return mutation;
};
