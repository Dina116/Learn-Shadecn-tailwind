/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import type { BOOKCYCLE, ReqAllow } from "../types";
import type { IBillGroupBookWalkBilng } from "./types";
import { Allow, BookCycle } from "../api/ControlApis";

export const useBookCycleApi = (
  req: IBillGroupBookWalkBilng,
  select?: (data: BOOKCYCLE[]) => BOOKCYCLE[],
) => {
  const query = useQuery<BOOKCYCLE[], Error>({
    queryKey: ["bookCycleKey", req],
    queryFn: () => BookCycle(req),
    enabled: Object.keys(req).length > 0,
    select,
    staleTime: Infinity,
  });
  return query;
};
type Allow = {
  onSuccess?: (res: BOOKCYCLE, req: ReqAllow) => void;
  onMutate?: (req: ReqAllow) => void;
  onError?: (error: any, req: ReqAllow) => void;
};

export const useAllowApi = ({ onSuccess, onMutate, onError }: Allow) => {
  const mutation = useMutation({
    mutationFn: (req: ReqAllow) => Allow(req),
    onSuccess,
    onMutate,
    onError,
  });
  return mutation;
};
