import { useMutation, useQuery } from '@tanstack/react-query';
import { query } from '@/app/services';
import { CUSTOMERINFORMATION } from '@/domain/entities/customerInformation';
import {
  SEARCHITEM,
  SEARCHREQMAS,
  SEARCHRES,
} from '@/domain/entities/searchItem';
import { CUSTKEYREQ } from '@/domain/entities/collection';

export const getFromBillingKey = 'getFromBillingKey';
export const useGetFromBillingApi = (req: CUSTKEYREQ) => {
  const qu = useQuery<CUSTOMERINFORMATION, Error>({
    queryKey: [getFromBillingKey, req],
    queryFn: () => query.getFromBilling(req),
    enabled:
      (Object.keys(req).length > 0 && req?.custkey !== '') ||
      req?.custkey !== undefined,
    cacheTime: 0,
    staleTime: 0,
  });
  return qu;
};

export const getListBillsKey = 'getListBillsKey';
export const useGetListBillsApi = (req: CUSTKEYREQ) => {
  const qu = useQuery<SEARCHITEM, Error>({
    queryKey: [getListBillsKey, req],
    queryFn: () => query.getListBills(req),
    enabled: Object.keys(req || {}).length > 0 && req.custkey !== '',
  });
  return qu;
};
type GetCustomerdata = {
  onSuccess?: (res: SEARCHITEM, req: CUSTKEYREQ) => void;
};
export const useGetListBillsMutateApi = ({ onSuccess }: GetCustomerdata) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTKEYREQ) => query.getListBills(req),
    onSuccess,
  });
  return mutation;
};

export const getListBillsHistoryKey = 'getListBillsHistoryKey';
export const useGetListReadingHistoryApi = (req: CUSTKEYREQ) => {
  const qu = useQuery<SEARCHITEM[], Error>({
    queryKey: [getListBillsHistoryKey, req],
    queryFn: () => query.getListReadingHistory(req),
    enabled: !!req?.custkey,
    cacheTime: 0,
    staleTime: 0,
  });
  return qu;
};

export const querySearchKey = 'querySearchKey';
export const useSearchQueuryMas = (req: SEARCHREQMAS) => {
  // console.log(req);
  const qu = useQuery<SEARCHRES, Error>({
    queryKey: [querySearchKey, req],
    queryFn: () => query.onSearch(req),
    enabled: req.key !== '',
    cacheTime: 0,
    staleTime: 0,
  });
  return qu;
};
