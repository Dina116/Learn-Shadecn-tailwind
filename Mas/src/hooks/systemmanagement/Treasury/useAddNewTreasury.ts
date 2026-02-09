import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewTreasury } from "../../../pages/Readings and Achievement/systemmanagement/treasuryinside/api/treasuryApi";
import type { TreasuryTypes } from "../../../pages/Readings and Achievement/systemmanagement/treasuryinside/types";


export const useAddNewTreasury = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TreasuryTypes) => addNewTreasury(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["treasuryinside"] });
    },
  });
};
