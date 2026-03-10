import { useMutation, useQuery } from '@tanstack/react-query';
import { marketing } from '@/app/services';
import {
  ADDMARKRTINGPLANEREQ,
  GETMARKETINGPLANREQ,
  MARKETINGRESULT,
  MarketingPlansList,
} from '@/domain/entities/marketing';

export const GetMarketingPlansList = 'GetMarketingPlansList';
export const GetMarketingPlan = 'GetMarketingPlan';

type AplyMarketingPlanProps = {
  onSuccess?: (res: void, req: MARKETINGRESULT) => void;
};

export const useAplyMarketingPlanApi = ({
  onSuccess,
}: AplyMarketingPlanProps) => {
  const mutation = useMutation({
    mutationFn: (req: MARKETINGRESULT) => marketing.ApplyMarketingPlan(req),
    onSuccess,
  });
  return mutation;
};

type AddMarketingPlanProps = {
  onSuccess?: (res: void) => void;
};
export const useAddMarketingPlanApi = ({
  onSuccess,
}: AddMarketingPlanProps) => {
  const mutation = useMutation({
    mutationFn: (req: ADDMARKRTINGPLANEREQ) => marketing.AddMarketingPlan(req),
    onSuccess,
  });
  return mutation;
};

export const useGetMarketingPlansListApi = () => {
  const query = useQuery<MarketingPlansList[], Error>({
    queryKey: [GetMarketingPlansList],
    queryFn: () => marketing.GetMarketingPlansList(),
    enabled: true,
  });
  return query;
};

export const useGetMarketingPlanApi = (req: GETMARKETINGPLANREQ) => {
  const query = useQuery<MARKETINGRESULT, Error>({
    queryKey: [GetMarketingPlan, req],
    queryFn: () => marketing.GetMarketingPlan(req),
    enabled: Object.keys(req)?.length > 0,
  });
  return query;
};
