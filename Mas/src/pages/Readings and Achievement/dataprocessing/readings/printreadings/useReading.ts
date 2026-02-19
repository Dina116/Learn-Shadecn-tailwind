import { useQuery } from "@tanstack/react-query";
import {
  getReaders,
  getReadingsData,
  type DynamicApiResponse,
} from "../../../../../api/dataparocessing/printreadings/printReadersApi";
import type { QueryParams } from "../../types";

export const useReaders = () => {
  return useQuery({
    queryKey: ["readers"],
    queryFn: getReaders,
  });
};

export const useReadingsData = (queryParams: QueryParams | null) => {
  return useQuery<DynamicApiResponse[]>({
    queryKey: ["readingsData", queryParams],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey as [string, QueryParams | null];
      return getReadingsData(params);
    },
    enabled: !!queryParams && Object.keys(queryParams).length > 0,
  });
};
