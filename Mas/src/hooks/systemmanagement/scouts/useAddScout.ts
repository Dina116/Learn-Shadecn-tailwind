import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { scoutsFormType } from "../scoutstypes";
import { addScouts } from "./scoutsApi";

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
