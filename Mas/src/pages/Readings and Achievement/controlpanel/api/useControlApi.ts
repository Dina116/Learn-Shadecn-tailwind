import { useMutation, useQuery } from "@tanstack/react-query";
import { useLoginStore } from "../../../../hooks/login/useLoginStore";
import type {
  BILLGROUPS,
  BOOKCYCLE,
  FilterValues,
  Mas2BillingPayload,
  Mas2BillingProcessResponse,
  STATMDEPOSIT,
  WalkData,
} from "../types";
import type { AxiosError } from "axios";
import {
  collectionMas2Billing,
  executeBilling2Mas,
  getBillGroups,
  getCustomerWalkCycle,
  getMeterWalkCycle,
  GetUnPostedStatmDeposits,
  readingPostingMas2Billing,
  readingsBilling2Mas,
  readingsMeterWalkCycle,
  type ExecuteBillingPayload,
  type ReadingBillingPayload,
} from "./ControlApis";
import toast from "react-hot-toast";
import type { ReadingDataWithStatus } from "../operations/readingsPulled/columns";
import type { StatusType } from "../status";

const options = {
  cacheTime: 60 * 60 * 24, // 24 hours
  staleTime: 3 * 60 * 60, // 3 hour
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  retry: 0,
};
export const useGetBillGroupsApi = (
  select?: (data: BILLGROUPS[]) => BILLGROUPS[],
) => {
  const { user } = useLoginStore();
  const query = useQuery<BILLGROUPS[], AxiosError>({
    queryKey: ["getBillGroupsKey"],
    queryFn: () => getBillGroups(),
    enabled: user?.isSuccess as boolean,
    select,
    ...options,
  });
  return query;
};

export const useGetCustomerWalkCycleApi = (filters: FilterValues | null) => {
  const query = useQuery<WalkData[], AxiosError>({
    queryKey: ["customerWalkCycle", filters],
    queryFn: () => {
      if (!filters) return Promise.resolve([]);
      return getCustomerWalkCycle(filters);
    },
    enabled: !!filters,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return query;
};
export const useGetMeterWalkCycle = (filters: FilterValues | null) => {
  const query = useQuery<ReadingDataWithStatus[], AxiosError>({
    queryKey: ["meterWalkCycle", filters],
    queryFn: () => {
      if (!filters) return Promise.resolve([]);
      return getMeterWalkCycle(filters);
    },
    enabled: !!filters,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return query;
};
export interface ExecutionError {
  BOOK_NO: string;
  BILLGROUP: string;
  WALK_NO: string;
  message: string;
}

export const useExecuteBillingApi = (
  onNewSuccess: (bookNo: string) => void,
  onNewError: (error: ExecutionError) => void,
) => {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: (payload: ExecuteBillingPayload) => executeBilling2Mas(payload),

    onSuccess: (_data, variables) => {
      toast.success(`تم التنفيذ بنجاح للدفتر: ${variables.BOOK_NO}`);
      onNewSuccess(variables.BOOK_NO);
    },

    onError: (error: Error, variables) => {
      const errorMessage =
        error.message || `فشل التنفيذ للدفتر ${variables.BOOK_NO}`;
      toast.error(errorMessage);
      onNewError({
        BILLGROUP: variables.BILLGROUP,
        WALK_NO: variables.WALK_NO,
        BOOK_NO: variables.BOOK_NO,
        message: errorMessage,
      });
    },
  });
  return { execute: mutateAsync, ...rest };
};

export const useReadingsBilling2Mas = (
  onNewSuccess: (bookNo: string) => void,
  onNewError: (error: ExecutionError) => void,
) => {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: (payload: ReadingBillingPayload) =>
      readingsBilling2Mas(payload),

    onSuccess: (_data, variables) => {
      toast.success(`تم التنفيذ بنجاح للدفتر: ${variables.BOOK_NO}`);
      onNewSuccess(variables.BOOK_NO);
    },

    onError: (error: Error, variables) => {
      const errorMessage =
        error.message || `فشل التنفيذ للدفتر ${variables.BOOK_NO}`;
      toast.error(errorMessage);
      onNewError({
        BILLGROUP: variables.BILLGROUP,
        WALK_NO: variables.WALK_NO,
        BOOK_NO: variables.BOOK_NO,
        message: errorMessage,
      });
    },
  });
  return { execute: mutateAsync, ...rest };
};

/////////////////CollectionPosting/////////////////////

export interface CollectionPostingExecutionError {
  DEPOSIT_ID: number;
  message: string;
}

export const useGetUnPostedStatmDepositsApi = () => {
  const query = useQuery<STATMDEPOSIT[], AxiosError>({
    queryKey: ["getUnPostedStatmDeposits"],
    queryFn: () => GetUnPostedStatmDeposits(),
    enabled: false,
  });
  return query;
};

export const useCollectionMas2BillingApi = (
  onNewSuccess: (Deposit_id: number) => void,
  onNewError: (error: CollectionPostingExecutionError) => void,
) => {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: (payload: STATMDEPOSIT) => collectionMas2Billing(payload),

    onSuccess: (_data, variables) => {
      toast.success(`تم التنفيذ بنجاح للعملية ${variables.DEPOSIT_ID}`);
      onNewSuccess(variables.DEPOSIT_ID);
    },

    onError: (error: Error, variables) => {
      const errorMessage =
        error.message || `فشل التنفيذ للعملية${variables.DEPOSIT_ID}`;
      toast.error(errorMessage);
      onNewError({
        DEPOSIT_ID: variables.DEPOSIT_ID,
        message: errorMessage,
      });
    },
  });
  return { execute: mutateAsync, ...rest };
};

/////////////////ReadingsPosting/////////////////////
export type BOOKCYCLEWithStatus = BOOKCYCLE & {
  status?: StatusType;
  isFetchingStatus?: boolean;
};
export const useGetReadingsMeterWalkCycleApi = (
  filters: FilterValues | null,
) => {
  const query = useQuery<BOOKCYCLEWithStatus[], AxiosError>({
    queryKey: ["readingsMeterWalkCycle", filters],
    queryFn: () => {
      if (!filters) return Promise.resolve([]);
      return readingsMeterWalkCycle(filters);
    },
    enabled: !!filters,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return query;
};

export const useReadingPostingMas2Billing = (
  onNewSuccess: (payload: Mas2BillingProcessResponse) => void,
  onNewError: (error: ExecutionError) => void,
) => {
  //:Promise<Mas2BillingProcessResponse>
  const { mutateAsync, ...rest } = useMutation<
    Mas2BillingProcessResponse,
    Error,
    Mas2BillingPayload
  >({
    mutationFn: (payload: Mas2BillingPayload) =>
      readingPostingMas2Billing(payload),

    onSuccess: (data, variables) => {
      toast.success(`تم الترحيل بنجاح للدفتر: ${variables.BOOK_NO}`);
      onNewSuccess(data);
    },

    onError: (error: Error, variables) => {
      const message = error.message || "فشل الترحيل";

      toast.error(message);

      onNewError({
        BILLGROUP: variables.BILLGROUP,
        WALK_NO: variables.WALK_NO,
        BOOK_NO: variables.BOOK_NO,
        message,
      });
    },
  });

  return { execute: mutateAsync, ...rest };
};
