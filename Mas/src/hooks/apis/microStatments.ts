import { useMutation, useQuery } from '@tanstack/react-query';
import { microStatments } from '@/app/services';
import {
  HistoryReply,
  HistoryRequest,
  PullStatmentsReply,
  PullStatmentsReq,
} from '@/domain/entities/_gen/statments_pb';

export const pullStatmentsFromBillingKey = 'pullStatmentsFromBillingKey';
export const useGetHistoryKey = 'useGetHistoryKey';
const pullStatmentsFromBilling = async (req: PullStatmentsReq) => {
  console.log('Api REq', req);
  const data = await microStatments.pullStatmentsFromBilling(req);
  return data.response;
};

const getHistory = async (req: HistoryRequest) => {
  console.log('Api REq', req);
  const data = await microStatments.getHistory(req);
  return data.response;
};

export const usePullStatmentsFromBilling = (req: PullStatmentsReq) => {
  const query = useQuery<PullStatmentsReply, Error>({
    queryKey: [pullStatmentsFromBillingKey, req],
    queryFn: () => pullStatmentsFromBilling(req),
    enabled: Object.keys(req || {}).length > 0,
  });
  return query;
};

export const useGetHistory = (req: HistoryRequest) => {
  console.log('Api REq', req);
  const query = useQuery<HistoryReply, Error>({
    queryKey: [useGetHistoryKey, req],
    queryFn: () => getHistory(req),
    enabled: Object.keys(req || {}).length > 0,
    cacheTime: 0,
    staleTime: 0,
  });
  return query;
};

type IGetHistoryProps = {
  onSuccess?: (req: HistoryReply) => void;
};
export const useGetHistoryApi = ({ onSuccess }: IGetHistoryProps) => {
  const mutation = useMutation({
    mutationFn: (req: HistoryRequest) => getHistory(req),
    onSuccess,
  });

  return mutation;
};
