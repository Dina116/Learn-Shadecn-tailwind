import { useLoginStore } from "@/hooks/login/useLoginStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { STATIONS, STATMDEPOSIT } from "../types";
import {
  getAllCollectors,
  getCurrentStations,
  GetDeposits,
  getIsHeadQuarter,
  GetNewReceptNo,
  GetPosted,
  getSettingValue,
  getSiteLogo,
  getTemplate,
  GetUnPosted,
  GetUnPostedDetails,
  GetUnPostedSummary,
  Getuserprofilee,
  Post,
} from "@/api/ControlPanel/MoneyTransfeerApi";
import type {
  EMPS,
  GetSettingValueRq,
  SETTINGS,
  SiteCode,
  SITES,
  UNPOSTEDREQ,
} from "@/componenet/shared/dataGrid/types";
import type {
  CollectionDestributionItm,
  COLLECTIONPOSTEDSHAREDREQ,
  PostReq,
} from "./types";
import type { GetUserProfileResponse } from "@/domain/entities/_gen/GoAuth_pb";
import type { AxiosError } from "axios";

const options = {
  cacheTime: 60 * 60 * 24, // 24 hours
  staleTime: 3 * 60 * 60, // 3 hour
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  retry: 0,
};
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
    retry: 0,
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
    retry: 0,
    enabled: Object.keys(req).length > 0 && !!req?.code,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return query;
};

export const useGetMasProviderSettings = (req: GetSettingValueRq) => {
  const query = useQuery<SETTINGS, Error>({
    queryKey: ["useGetMasProviderSettings", req],
    queryFn: () => getSettingValue(req),
    enabled: Object.keys(req || {}).length > 0 && req.SITE_CODE !== undefined,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return query;
};

export const useGetUserProfileApi = () => {
  const { user } = useLoginStore();
  // console.log("user", user);
  return useQuery<GetUserProfileResponse, Error>({
    queryKey: ["getUserProfile"],
    queryFn: () => Getuserprofilee(),
    retry: 0,
    enabled: !!user?.isSuccess,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
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
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return query;
};

export const useGetHafzaTemplate = (enable: boolean) => {
  const query = useQuery({
    queryKey: ["hafzaTemplate"],
    queryFn: () => getTemplate(),
    enabled: enable,
    retry: 0,
    cacheTime: 24 * 1000,
    staleTime: 23 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return query;
};

export const useGetAllCollectorsApi = (select?: (data: EMPS[]) => EMPS[]) => {
  const { data: userProfile } = useGetUserProfileApi();
  const query = useQuery<EMPS[], Error>({
    queryKey: ["getAllCollectors"],
    queryFn: () => getAllCollectors(),
    retry: 0,
    enabled: !!userProfile,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 60000, // 60sec
    staleTime: 50000, // 50sec
    select: (collectors) => {
      const filteredData = collectors.filter(
        (collector) =>
          Number(collector.BRANCH_ID) === Number(userProfile?.USER?.STATION_NO),
      );
      // console.log(
      //   "userProfile?.USER?.STATION_NO:",
      //   userProfile?.USER?.STATION_NO,
      // );
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
