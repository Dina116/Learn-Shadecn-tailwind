/* eslint-disable no-confusing-arrow */
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  emps,
  stations,
  collection,
  lookup,
  cashbox,
  hhDevice,
  reCalcModifyInvoice,
  systemLookup,
} from '@/app/services';
import { STATIONS } from '@/domain/entities/systemMangement/station';
import { EMPS } from '@/domain/entities/systemMangement/emp';
import { COLLECTIONTYPEANDMETHODE } from '@/domain/entities/collectionTypes';
import { PAYMENTMETHODE } from '@/domain/entities/paymentMethode';
import { ConsumptionTypes } from '@/app/repositories-impl/contracts/Lookups';
import { CTGS } from '@/domain/entities/systemMangement/cTG';
import { CASHBOX } from '@/domain/entities/systemMangement/cashBox';
import { DEVICES } from '@/domain/entities/systemMangement/devices';
import { useLoginStore } from '@/stores/slices/login';
import { BILLGROUPS } from '@/domain/entities/billGroups';
import { OPSTATUS } from '@/domain/entities/opStatus';
import { BILLSTATUS } from '@/domain/entities/billStatus';
import { ISSUEtYPE } from '@/domain/entities/issueType';
import { METERCONDITION } from '@/domain/entities/meterCondition';
import { METERSIZE } from '@/domain/entities/meterSize';

const options = {
  cacheTime: 60 * 60 * 24, // 24 hours
  staleTime: 3 * 60 * 60, // 3 hour
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  retry: 0,
};

export const getStationKey = 'getStations';
export const getCollectorKey = 'getCollectors';
export const getEmpsKey = 'getEmpsKey';
export const getReaderKey = 'getReaderKey';
export const getCollectionMethodeKey = 'getCollectionMethode';
export const getCollectionTypesKey = 'getCollectionTypesKey';
export const getPaymentMethodKey = 'getPaymentMethodKey';
export const getCashboxKey = 'getCashboxKey';
export const getConsumptionTypesKey = 'getConsumptionTypesKey';
export const getHHDevicesKey = 'getHHDevicesKey';
export const CompanyNameKey = 'CompanyNameKey';
export const getCurrentStationKey = 'getCurrentStationKey';
export const getEmpTypesKey = 'getEmpTypesKey';
export const getBillGroupsKey = 'getBillGroupsKey';
export const getOpStatusKey = 'getOpStatusKey';
export const getBillStatusKey = 'getBillStatusKey';
export const getReadingNoteKey = 'getReadingNoteKey';
export const getIsHeadQuarterApikey = 'getIsHeadQuarterApikey';
export const getIssueTypeKey = 'getIssueTypeKey';
export const getCashboxkey = 'getCashboxkey';
export const getConsumptionGroupTypesKey = 'getConsumptionGroupTypesKey';
export const getMeterConditionsKey = 'getMeterConditionsKey';
export const getMeterSizesKey = 'getMeterSizesKey';

export const useGetCompanyNameApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<string, Error>({
    queryKey: [CompanyNameKey],
    queryFn: () =>
      import.meta.env.VITE_IS_GOV_BASIC ? systemLookup.getCompanyName() : '',
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetAllStationsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<STATIONS[], Error>({
    queryKey: [getStationKey],
    queryFn: () => stations.getStations(),
    // (import.meta.env.VITE_IS_GOV_BASIC ? stations.getStations() : []),
    enabled: user?.isSuccess as boolean,
    // && !!import.meta.env.VITE_IS_GOV_BASIC,
    ...options,
  });
  return query;
};
export const useGetCurrentStationsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<STATIONS, Error>({
    queryKey: [getCurrentStationKey],
    queryFn: () => stations.getCurrentStations(),
    // (import.meta.env.VITE_IS_GOV_BASIC
    //   ? stations.getCurrentStations()
    //   : ({} as STATIONS)),
    enabled: user?.isSuccess as boolean,
    //  && !!import.meta.env.VITE_IS_GOV_BASIC,
    ...options,
  });
  return query;
};
export const useGetEmpsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<EMPS[], Error>({
    queryKey: [getEmpsKey],
    queryFn: () => (import.meta.env.VITE_IS_GOV_BASIC ? emps.getEmps() : []),
    enabled: user?.isSuccess as boolean,
    select(data) {
      const arr = data.sort((a, b) =>
        (a?.fullName || '').localeCompare(b.fullName || '', 'ar'),
      );
      return arr;
    },
    ...options,
  });
  return query;
};
export const useGetCollectorsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<EMPS[], Error>({
    queryKey: [getCollectorKey],
    queryFn: () =>
      import.meta.env.VITE_IS_GOV_BASIC ? emps.getAllCollectors() : [],
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetReaderApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<EMPS[], Error>({
    queryKey: [getReaderKey],
    queryFn: () => emps.getAllReader(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetCollectionMethodeApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<COLLECTIONTYPEANDMETHODE[], AxiosError>({
    queryKey: [getCollectionMethodeKey],
    queryFn: () => collection.GetCollectionMethods(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetCollectionTypesApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<COLLECTIONTYPEANDMETHODE[], AxiosError>({
    queryKey: [getCollectionTypesKey],
    queryFn: () => collection.GetCollectionTypes(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetPaymentMethodApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<PAYMENTMETHODE[], AxiosError>({
    queryKey: [getPaymentMethodKey],
    queryFn: () => collection.GetPaymentMethods(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetConsumptionTypesApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<ConsumptionTypes[], AxiosError>({
    queryKey: [getConsumptionTypesKey],
    queryFn: () =>
      import.meta.env.VITE_IS_GOV_BASIC ? lookup.getConsumptionTypes() : [],
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetConsumptionGroupTypesApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<CTGS[], AxiosError>({
    queryKey: [getConsumptionGroupTypesKey],
    queryFn: () => lookup.getCTGS(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetBillGroupsApi = (select?: (data: BILLGROUPS[]) => BILLGROUPS[],
) => {
  const { user } = useLoginStore();
  const query = useQuery<BILLGROUPS[], AxiosError>({
    queryKey: [getBillGroupsKey],
    queryFn: () => lookup.getBillGroups(),
    enabled: user?.isSuccess as boolean,
    select,
    ...options,
  });
  return query;
};
export const useGetOpStatusApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<OPSTATUS[], AxiosError>({
    queryKey: [getOpStatusKey],
    queryFn: () => lookup.getOpStatus(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetBillStatusApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<BILLSTATUS[], AxiosError>({
    queryKey: [getBillStatusKey],
    queryFn: () => lookup.getBillStatus(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetReadingNoteApi = () => {
  const { user } = useLoginStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = useQuery<
    Array<{
      Code: string;
      Describe: string;
    }>,
    AxiosError
  >({
    queryKey: [getReadingNoteKey],
    queryFn: () => lookup.getReadingNote(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetIsHeadQuarterApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<boolean, AxiosError>({
    queryKey: [getIsHeadQuarterApikey],
    queryFn: () => systemLookup.getIsHeadQuarter(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetIssueTypeApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<ISSUEtYPE, AxiosError>({
    queryKey: [getIssueTypeKey],
    queryFn: () =>
      import.meta.env.VITE_IS_GOV_BASIC
        ? systemLookup.getIssueType()
        : ({} as ISSUEtYPE),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetEmpTypesApi = () => {
  const { user } = useLoginStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = useQuery<Array<any>, AxiosError>({
    queryKey: [getEmpTypesKey],
    queryFn: () => lookup.getEmpTypes(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
export const useGetCashBoxApi = () => {
  const query = useQuery<CASHBOX[], AxiosError>({
    queryKey: [getCashboxKey],
    queryFn: () => cashbox.GetCashBox(),
    enabled: true,
    ...options,
  });
  return query;
};
export const useGetAllHHDevicesApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<DEVICES[], Error>({
    queryKey: [getHHDevicesKey],
    queryFn: () => hhDevice.getHHDevices(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};

export const useGetMeterConditionsApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<METERCONDITION[], Error>({
    queryKey: [getMeterConditionsKey],
    queryFn: () => reCalcModifyInvoice.LoadMeterConditions(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};

export const useGetMeterSizeApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<METERSIZE[], Error>({
    queryKey: [getMeterSizesKey],
    queryFn: () => reCalcModifyInvoice.LoadMeterSize(),
    enabled: user?.isSuccess as boolean,
    ...options,
  });
  return query;
};
