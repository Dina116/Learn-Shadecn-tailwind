import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CustomerSeq } from "../../../pages/Readings and Achievement/dataprocessing/types";
import {
  downloadWalks,
  postWalks,
  saveWalks,
  type SavePayload,
} from "../../../api/dataparocessing/rearrangementpaths/RearrangementWalksApi";

export function useDownloadWalks(data: CustomerSeq | null) {
  return useQuery({
    queryKey: ["downloadWalks", data],
    queryFn: () => downloadWalks(data as CustomerSeq),
    enabled: !!data,
    retry: false,
  });
}

export function useSaveWalks() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: SavePayload) => saveWalks(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["downloadWalks"],
      });
    },
  });
}

export function usePostWalks() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: SavePayload) => postWalks(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["downloadWalks"],
      });
    },
  });
}
