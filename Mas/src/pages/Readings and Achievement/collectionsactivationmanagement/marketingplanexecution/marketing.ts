import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { ApplyMarketingPlan, GetMarketingPlansList } from "./MarketingApi";
import type { GETMARKETINGPLANREQ, MARKETINGRESULT, Plan } from "../types";


export const useApplMarketingPlanApi = (
  filters: GETMARKETINGPLANREQ | null,
) => {
  const query = useQuery({
    queryKey: ["GetMarketingPlan", filters],
    queryFn: () => {
      if (!filters) {
        return Promise.reject(new Error("Filters are not provided."));
      }
      return ApplyMarketingPlan(filters);
    },
    enabled: !!filters,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return query as UseQueryResult<MARKETINGRESULT, Error>;
};

export const useGetMarketingPlansListApi = () => {
  const query = useQuery({
    queryKey: ["GetMarketingPlansList"],
    queryFn: GetMarketingPlansList,
  });
  return query as UseQueryResult<Plan[], Error>;
};
