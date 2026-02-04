import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TreasuryTypes } from "../types";
import { addNewTreasury } from "./treasuryApi";

export const useAddNewTreasury = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TreasuryTypes) => addNewTreasury(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["treasuryinside"] });
    },
  });
};
