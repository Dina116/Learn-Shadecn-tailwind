import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { useLoginStore } from "../../../../hooks/login/useLoginStore";
import type {
  BILLGROUPS,
  BOOKCYCLE,
  FilterValues,
  Mas2BillingPayload,
  Mas2BillingProcessResponse,
  STATIONS,
  // ReadingWalkData,
  STATMDEPOSIT,
  WalkData,
} from "../types";
import type { AxiosError } from "axios";
import {
  closeCollectionWalkRoute,
  closeWalkRoute,
  collectionMas2Billing,
  customerWalkCycle,
  executeBilling2Mas,
  getAllCollectors,
  getAllStations,
  getBillGroups,
  getCurrentStations,
  getCustomerWalkCycle,
  GetDeposits,
  getHistory,
  getIsHeadQuarter,
  getMeterWalkCycle,
  GetNewReceptNo,
  GetPosted,
  getSettingValue,
  getSiteLogo,
  getTemplate,
  GetUnPosted,
  GetUnPostedDetails,
  GetUnPostedStatmDeposits,
  GetUnPostedSummary,
  Getuserprofilee,
  // Getuserprofilee,
  Post,
  readingPostingMas2Billing,
  readingsBilling2Mas,
  readingsMeterWalkCycle,
  type ExecuteBillingPayload,
  type ReadingBillingPayload,
} from "./ControlApis";
import toast from "react-hot-toast";
// import type { ReadingDataWithStatus } from "../operations/readingsPulled/columns";
import type { StatusType } from "../status";
import type {
  HistoryReply,
  HistoryRequest,
} from "../operations/pulledHistory/types";
import type {
  CollectionDestributionItm,
  COLLECTIONPOSTEDSHAREDREQ,
  PostReq,
} from "../moneyTransfeer/types";
import type {
  EMPS,
  GetSettingValueRq,
  GetUserProfileResponse,
  // GetUserProfileResponse,
  SETTINGS,
  SiteCode,
  SITES,
  UNPOSTEDREQ,
} from "../../../../componenet/shared/dataGrid/types";

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
export const useGetMeterWalkCycle = <T>(
  params: Record<string, string> | null,
) => {
  return useQuery<T[], Error>({
    queryKey: ["meterWalkCycle", JSON.stringify(params)],
    queryFn: () => {
      if (!params) return Promise.resolve([] as T[]);
      return getMeterWalkCycle(params) as Promise<T[]>;
    },
    enabled: !!params,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
// const query = useQuery<ReadingDataWithStatus[], AxiosError>({
//   queryKey: ["meterWalkCycle", filters],
//   queryFn: () => {
//     const groupsString = filters?.groups?.map((g) => g.id).join(",");
//     if (!groupsString || !filters?.billingDate) return;
//     const params = new URLSearchParams({
//       groups: groupsString,
//       order: "desc",
//     });

//     if (!filters) return Promise.resolve([]);
//     return getMeterWalkCycle(params);
//   },
//   enabled: !!filters,
//   refetchOnWindowFocus: false,
//   retry: false,
// });
// return query;

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

///////////////////CloseRWalk/////////////////////

export const useCloseWalkRoute = (
  onNewSuccess: (payload: Mas2BillingProcessResponse) => void,
  onNewError: (error: ExecutionError) => void,
) => {
  const { mutateAsync, ...rest } = useMutation<
    Mas2BillingProcessResponse,
    Error,
    BOOKCYCLEWithStatus
  >({
    mutationFn: (payload: BOOKCYCLEWithStatus) => closeWalkRoute(payload),

    onSuccess: (data, variables) => {
      toast.success(`تم إغلاق المسار: ${variables.BOOK_NO}`);
      onNewSuccess(data);
    },

    onError: (error: Error, variables) => {
      const message = error.message || "فشل إغلاق المسار";

      toast.error(message);
      onNewError({
        BILLGROUP: variables.BILLGROUP,
        WALK_NO: variables.WALK_NO,
        BOOK_NO: variables.BOOK_NO,
        message,
      });
    },
  });

  return {
    closeWalkRoute: mutateAsync,
    // isLoading,
    ...rest,
  };
};

///////////////////CloseCWalk///////////////////
export const useCustomerWalkCycle = <T>(
  params: Record<string, string> | null,
  options?: Omit<UseQueryOptions<T[], Error>, "queryKey" | "queryFn">,
) => {
  return useQuery<T[], Error>({
    queryKey: ["customerWalkCycle", JSON.stringify(params)],
    queryFn: () => {
      if (!params) return Promise.resolve([] as T[]);
      return customerWalkCycle(params) as Promise<T[]>;
    },
    enabled: !!params,
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });
};

export const useCloseCollectionWalkRoute = (
  onNewSuccess: (payload: Mas2BillingProcessResponse) => void,
  onNewError: (error: ExecutionError) => void,
) => {
  const { mutateAsync, ...rest } = useMutation<
    Mas2BillingProcessResponse,
    Error,
    BOOKCYCLEWithStatus
  >({
    mutationFn: (payload) => closeCollectionWalkRoute(payload),

    onSuccess: (data, variables) => {
      toast.success(`تم إغلاق المسار: ${variables.BOOK_NO}`);
      onNewSuccess(data);
    },

    onError: (error: Error, variables) => {
      const message = error.message || "فشل إغلاق المسار";

      toast.error(message);
      onNewError({
        BILLGROUP: variables.BILLGROUP,
        WALK_NO: variables.WALK_NO,
        BOOK_NO: variables.BOOK_NO,
        message,
      });
    },
  });

  return {
    closeWalkRoute: mutateAsync,
    ...rest,
  };
};

/////////////PulledHistory//////////////////////
export const useGetAllStationsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<STATIONS[], Error>({
    queryKey: ["'getStations'"],
    queryFn: () => getAllStations(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetHistory = (req: HistoryRequest) => {
  console.log("Api REq", req);
  const isQueryEnabled = !!req.Custkey && !!req.StartDate && !!req.EndDate;
  console.log(" Checking 'enabled' condition:", {
    isQueryEnabled,
    hasCustkey: !!req.Custkey,
    hasStartDate: !!req.StartDate,
    hasEndDate: !!req.EndDate,
  });
  const query = useQuery<HistoryReply, Error>({
    queryKey: ["getHistory", req],
    queryFn: () => getHistory(req),
    enabled: isQueryEnabled,
    cacheTime: 0,
    staleTime: 0,
  });
  return query;
};
///////////////////////////////////////
export const useGetCurrentStationsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<STATIONS, Error>({
    queryKey: ["getCurrentStationKey"],
    queryFn: () => getCurrentStations(),
    // (import.meta.env.VITE_IS_GOV_BASIC
    //   ? stations.getCurrentStations()
    //   : ({} as STATIONS)),
    enabled: user?.isSuccess as boolean,
    //  && !!import.meta.env.VITE_IS_GOV_BASIC,
    ...options,
  });
  return query;
};

export const useGetUnPostedApi = (req: UNPOSTEDREQ) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: ["unPostKey", req],
    queryFn: () => GetUnPosted(req),
    enabled: Object.keys(req).length > 0 && req.empid !== 0,
  });
  return query;
};

type PostProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
};
export const usePostApi = ({ onSuccess, onError }: PostProps) => {
  const mutation = useMutation({
    mutationFn: (req: PostReq) => Post(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type GetNewReceptNoProps = {
  onSuccess?: (res: number) => void;
  onError?: (err: Error) => void;
};
export const useGetNewReceiptNoApi = ({
  onSuccess,
  onError,
}: GetNewReceptNoProps) => {
  const mutation = useMutation({
    mutationFn: () => GetNewReceptNo(),
    onSuccess,
    onError,
  });
  return mutation;
};

export interface IunPostedDetailsReq {
  empid: number | undefined;
  depositId?: number | undefined;
  custkey?: string;
}
export const useGetUnPostedDetails = (req: IunPostedDetailsReq) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: ["GetUnPostedDetails", req],
    queryFn: () => GetUnPostedDetails(req),
    enabled:
      Object.keys(req).length > 0 && req?.empid !== 0 && req.custkey !== "",
  });
  return query;
};

export const useGetSiteLogoProvider = (req: SiteCode) => {
  const query = useQuery<SITES, Error>({
    queryKey: ["useGetSiteLogoProviderKey", req],
    queryFn: () => getSiteLogo(req),
    cacheTime: 24 * 60 * 60 * 10000,
    staleTime: 23 * 60 * 60 * 10000,
    enabled: Object.keys(req).length > 0 && !!req?.code,
    // enabled: true,
    retryOnMount: false,
  });
  return query;
};

export const useGetMasProviderSettings = (req: GetSettingValueRq) => {
  const query = useQuery<SETTINGS, Error>({
    queryKey: ["useGetMasProviderSettings", req],
    queryFn: () => getSettingValue(req),
    enabled: Object.keys(req || {}).length > 0 && req.SITE_CODE !== undefined,
    retryOnMount: false,
  });
  return query;
};

export const useGetUserProfileApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<GetUserProfileResponse, Error>({
    queryKey: ["getUserProfile"],
    queryFn: () => Getuserprofilee(),
    retry: 0,
    enabled: user?.isSuccess,
  });
  return query;
};

export const useGetUnPostedSummaryApi = () => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: ["unPostSummary"],
    queryFn: () => GetUnPostedSummary(),
    enabled: true,
  });
  return query;
};

export const useGetIsHeadQuarterApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<boolean, AxiosError>({
    queryKey: ["getIsHeadQuarterApi"],
    queryFn: () => getIsHeadQuarter(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};

export const useGetHafzaTemplate = (enable: boolean) => {
  const query = useQuery({
    queryKey: ["hafzaTemplate"],
    queryFn: () => getTemplate(),
    enabled: enable,
    cacheTime: 24 * 1000,
    staleTime: 23 * 1000,
  });
  return query;
};

export const useGetAllCollectorsApi = (select?: (data: EMPS[]) => EMPS[]) => {
  const { data: userProfile } = useGetUserProfileApi();
  const query = useQuery<EMPS[], Error>({
    queryKey: ["getAllCollectors"],
    queryFn: () => getAllCollectors(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 60000, // 60sec
    staleTime: 50000, // 50sec
    select: (collectors) => {
      // console.log(collectors, userProfile?.USER?.STATION_NO, "ER");
      // Apply the filter if select is not provided
      const filteredData = collectors.filter(
        (collector) => collector.branchId === userProfile?.USER?.STATION_NO,
      );
      return select ? select(filteredData) : filteredData;
    },
  });
  return query;
};

export const useGetDepositApi = (empId: number) => {
  const query = useQuery<STATMDEPOSIT[], Error>({
    queryKey: ["useGetDeposit", empId],
    queryFn: () => GetDeposits(empId),
    enabled: !!empId && empId !== 0,
  });
  return query;
};

export const useGetPostedApi = (req: COLLECTIONPOSTEDSHAREDREQ) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: ["postKey", req],
    queryFn: () => GetPosted(req),
    cacheTime: 0,
    staleTime: 0,
    enabled: Object.keys(req || {}).length > 0 && req?.empid !== 0,
  });
  return query;
};
