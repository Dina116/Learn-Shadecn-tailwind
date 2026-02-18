import { useQuery } from "@tanstack/react-query";
import {
  getReaders,
  getReadingsData,
} from "../../../../../api/dataparocessing/printreadings/printReadersApi";
import type { QueryParams } from "../../types";

export const useReaders = () => {
  return useQuery({
    queryKey: ["readers"],
    queryFn: getReaders,
  });
};

export const useReadingsData = (queryParams: QueryParams) => {
  return useQuery({
    queryKey: ["readingsData", queryParams],
    queryFn: () => getReadingsData(queryParams),
    enabled: Object.keys(queryParams).length > 0,
  });
};
