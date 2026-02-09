import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addScouts } from "../../../pages/Readings and Achievement/systemmanagement/scouts/api/scoutsApi";
import type { scoutsFormType } from "../../../pages/Readings and Achievement/systemmanagement/scouts/scoutstypes";


export const useAddScout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: scoutsFormType) => addScouts(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scouts"] });
    },
    onError: (error) => {
      console.error("Add scout failed:", error);
    },
  });
};
