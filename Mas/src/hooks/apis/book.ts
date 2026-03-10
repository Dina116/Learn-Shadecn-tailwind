/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { bookService } from '@/app/services';
import { BOOKCYCLE, ReqAllow } from '@/domain/entities/bookCycle';
import {
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  SWITCHRREQ,
} from '@/domain/entities/reading';
import { BILLGROUPCYCLE } from '@/domain/entities/billGroupCycle';
import {
  WALKDELIVERY,
  WALKDELEVERYRESPONSE,
} from '@/domain/entities/walkDelivery';
import {
  CUSTOMERBOOK,
  CUSTOMERWALKREQ,
  UPDATECUSTOMERWALKREQ,
} from '@/domain/entities/book';
import { CUSTOMERWALK } from '@/domain/entities/systemMangement/customerWalk';
import {
  METERWALK,
  METERWALKREQ,
  PUTMETERWALKREQ,
} from '@/domain/entities/meterWalk';
import { METERBOOK } from '@/domain/entities/meterBook';
import { BookCycleForEmp, EmpIdReq } from '@/domain/entities/switchBooks';
// import { IHHProcessResponceMessage } from '@/domain/entities/hhProcessResponseMessage';

export const customerWalkCycleKey = 'customerWalkCycleKey';
export const meterWalkCycleKey = 'meterWalkCycleKey';
export const billingStatusKey = 'billingStatusKey';
export const bookCycleKey = 'bookCycleKey';
export const bookAllowKey = 'bookAllowKey';
export const bookCycleFuncKey = 'bookCycleFuncKey';
export const switchHistoryKey = 'switchHistoryKey';
export const getCustomerWalkKey = 'getCustomerWalkKey';
export const customerBookListKey = 'customerBookListKey';
export const switchListKey = 'switchListKey';
export const getMeterWalkKey = 'getMeterWalkKey';
export const switchCKey = 'switchCKey';
export const putMeterbookKey = 'putMeterbookKey';
export const putCustomerWalkKey = 'putCustomerWalkKey';
export const switchRKey = 'switchRKey';
export const billgroupstatusKey = 'billgroupstatusKey';
export const billgroupstatusBilingDateKey = 'billgroupstatusBilingDateKey';
export const meterBookKey = 'meterBookKey';

export const useCustomerWalkCycleApi = (
  req: IBillGroupBookWalkBilng,
  select?: (data: BOOKCYCLE[]) => BOOKCYCLE[],
) => {
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: [customerWalkCycleKey, req],
    queryFn: () => bookService.CustomerWalkCycle(req),
    enabled: Object.keys(req).length > 0,
    staleTime: Infinity,
    select,
  });
  return query;
};

export const useGetCustomerBookApi = () => {
  const query = useQuery<CUSTOMERBOOK[], Error>({
    queryKey: [customerBookListKey],
    queryFn: () => bookService.getCustomerBookList(),
    enabled: true,
  });
  return query;
};
export const useMeterWalkCycleApi = (
  req: IBillGroupBookWalkBilng,
  select?: (data: BOOKCYCLE[]) => BOOKCYCLE[],
) => {
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: [meterWalkCycleKey, req],
    queryFn: () => bookService.MeterWalkCycle(req),
    enabled: Object.keys(req).length > 0,
    // cacheTime: 0,
    staleTime: Infinity,
    select,
  });
  return query;
};

export const useGetMeterWalksApi = (req: {
  groups?: string | undefined;
  empid?: number | undefined;
  unassigned?: boolean | undefined;
  station_no?: number | undefined;
}) => {
  const query = useQuery<METERWALK[], Error>({
    queryKey: [getMeterWalkKey, req],
    queryFn: () => bookService.meterWalks(req),
    enabled: true,
  });
  return query;
};
export const useBillingStatusApi = () => {
  const query = useQuery<BILLGROUPCYCLE[], Error>({
    queryKey: [billingStatusKey],
    queryFn: () => bookService.BillingStatus(),
    enabled: true,
  });
  return query;
};

// type UpdateCustomerWalkProps = {
//   onSuccess?: (res: void) => void;
//   onMutate?: (req: {
//     walk: CUSTOMERWALK;
//     transfeer_ohda?: boolean | undefined;
//   }) => void;
// };
// export const useUpdateCustomerWalkApi = ({
//   onSuccess,
//   onMutate,
// }: UpdateCustomerWalkProps) => {
//   const mutation = useMutation({
//     mutationFn: (req: {
//       walk: CUSTOMERWALK;
//       transfeer_ohda?: boolean | undefined;
//     }) => bookService.updateCustomerWalk(req),
//     onSuccess,
//     onMutate,
//   });
//   return mutation;
// };

export const useBookCycleApi = (
  req: IBillGroupBookWalkBilng,
  select?: (data: BOOKCYCLE[]) => BOOKCYCLE[],
) => {
  // console.log(req, 'API REQ');
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: [bookCycleKey, req],
    queryFn: () => bookService.BookCycle(req),
    enabled: Object.keys(req).length > 0,
    select,
    // cacheTime: 0,
    staleTime: Infinity,
  });
  return query;
};

type BookCycleMutateProps = {
  onSuccess?: (res: BOOKCYCLE[]) => void;
  onMutate?: (req: IBillGroupBookWalkBilng) => void;
};
export const useBookCycleMutateApi = ({
  onSuccess,
  onMutate,
}: BookCycleMutateProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) => bookService.BookCycle(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};

type Allow = {
  onSuccess?: (res: BOOKCYCLE, req: ReqAllow) => void;
  onMutate?: (req: ReqAllow) => void;
  onError?: (error: any, req: ReqAllow) => void;
};
export const useAllowApi = ({ onSuccess, onMutate, onError }: Allow) => {
  const mutation = useMutation({
    mutationFn: (req: ReqAllow) => bookService.Allow(req),
    onSuccess,
    onMutate,
    onError,
  });
  return mutation;
};
export const useBookCycleFuncApi = (req: IBillGroupBookWalkBilng) => {
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: [bookCycleFuncKey, req],
    queryFn: () => bookService.BookCycleFunc(req),
    enabled: true,
  });
  return query;
};

export const useSwitchHistoryApi = (req: IBillGroupBookWalk) => {
  const query = useQuery<WALKDELIVERY[], Error>({
    queryKey: [switchHistoryKey, req],
    queryFn: () => bookService.SwitchHistory(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
export const useSwitchListApi = (req: IBillGroupBookWalkBilng) => {
  // console.log(req, 'reeeeq');
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: [switchListKey, req],
    queryFn: () => bookService.SwitchList(req),
    enabled: Object.keys(req || {}).length > 0 && req?.empid !== undefined,
  });
  return query;
};

type IuseSwitchCApiProps = {
  onSuccess?: (res: boolean) => void;
};
export const useSwitchCApi = ({ onSuccess }: IuseSwitchCApiProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => bookService.SwitchC(req),
    onSuccess,
  });
  return mutation;
};

export const useSwitchRApi = ({ onSuccess }: IuseSwitchCApiProps) => {
  const mutation = useMutation({
    mutationFn: (req: SWITCHRREQ) => bookService.SwitchR(req),
    onSuccess,
  });
  return mutation;
};

type PutMeterWalks = {
  onSuccess?: (res: boolean, req: PUTMETERWALKREQ) => void;
  onError?: (err: AxiosError, req: PUTMETERWALKREQ) => void;
  onMutate?: (req: PUTMETERWALKREQ) => void;
};

export const usePutMeterWalksApi = ({
  onSuccess,
  onMutate,
  onError,
}: PutMeterWalks) => {
  const mutation = useMutation({
    mutationFn: (req: PUTMETERWALKREQ) => bookService.PutMeterWalk(req),
    onSuccess,
    onError,
    onMutate,
  });
  return mutation;
};

// ////////systemmangement
type GetCustomerWalks = {
  onSuccess?: (res: CUSTOMERWALK[], req: CUSTOMERWALKREQ) => void;
  onMutate?: (req: CUSTOMERWALKREQ) => void;
};

export const useGetCustomerWalkApi = ({
  onSuccess,
  onMutate,
}: GetCustomerWalks) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTOMERWALKREQ) => bookService.getCustomerWalk(req),
    onSuccess: (data, req) => {
      if (onSuccess) {
        onSuccess(data, req);
      }
    },
    onMutate,
  });
  return mutation;
};

type UpdateCustomerWalkProps = {
  onSuccess?: (res: void, req: UPDATECUSTOMERWALKREQ) => void;
  onError?: (errr: AxiosError, req: UPDATECUSTOMERWALKREQ) => void;
  onMutate?: (req: UPDATECUSTOMERWALKREQ) => void;
};
export const useUpdateCustomerWalkApi = ({
  onSuccess,
  onError,
  onMutate,
}: UpdateCustomerWalkProps) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATECUSTOMERWALKREQ) =>
      bookService.updateCustomerWalk(req),
    onSuccess,
    onError,
    onMutate,
  });
  return mutation;
};
export const useGetBillGroupStatusApi = (enable: boolean) => {
  const query = useQuery<BILLGROUPCYCLE[], Error>({
    queryKey: [billgroupstatusKey],
    queryFn: () => bookService.BillGroupsStatus(),
    enabled: enable,
  });
  return query;
};
export const useGetBillGroupStatusBilingDateApi = (
  req: IBillGroupBookWalkBilng,
  select?: (data: BILLGROUPCYCLE[]) => BILLGROUPCYCLE[],
) => {
  const query = useQuery<BILLGROUPCYCLE[], Error>({
    queryKey: [billgroupstatusBilingDateKey, req],
    queryFn: () => bookService.BillgroupsStatusBilingDate(req),
    enabled: true,
    staleTime: Infinity,
    select,
  });
  return query;
};
type CancelSwitchCProps = {
  onSuccess?: (res: boolean) => void;
};
export const useCancelSwitchCApi = ({ onSuccess }: CancelSwitchCProps) => {
  const mutation = useMutation({
    mutationFn: (req: { id?: number | undefined }) =>
      bookService.CancelSwitchC(req),
    onSuccess,
  });
  return mutation;
};
type CSwitchDetailsProps = {
  onSuccess?: (res: WALKDELEVERYRESPONSE) => void;
};
export const useSwitchDetailsApi = ({ onSuccess }: CSwitchDetailsProps) => {
  const mutation = useMutation({
    mutationFn: (req: { id?: number | undefined }) =>
      bookService.SwitchDetails(req),
    onSuccess,
  });
  return mutation;
};

export const useMeterBookApi = () => {
  const query = useQuery<METERBOOK, Error>({
    queryKey: [meterBookKey],
    queryFn: () => bookService.MeterBooks(),
    enabled: true,
  });
  return query;
};

type GetMeterWalks = {
  onSuccess?: (res: METERWALK[]) => void;
  onMutate?: (req: METERWALKREQ) => void;
};

export const useGetMeterWalkApi = ({ onSuccess, onMutate }: GetMeterWalks) => {
  const mutation = useMutation({
    mutationFn: (req: METERWALKREQ) => bookService.meterWalks(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};

export const useGetBookCycleByEmpIdApi = (req: EmpIdReq) => {
  // console.log(req, 'API REQ');
  const query = useQuery<BookCycleForEmp[], Error>({
    queryKey: ['useGetBookCycleByEmpIdApi', req, req?.empid],
    queryFn: () => bookService.BookCycleByEmpId(req?.empid === '0' ? {} : req),
    enabled: Object.keys(req || {}).length > 0,
  });
  return query;
};

type IupdateBooksForEmpProps = {
  onSuccess?: (res: boolean) => void;
};
export const useUpdateBooksForEmpApi = ({
  onSuccess,
}: IupdateBooksForEmpProps) => {
  const mutation = useMutation({
    mutationFn: (req: BookCycleForEmp[]) => bookService.UpdateBooksForEmp(req),
    onSuccess,
  });
  return mutation;
};
