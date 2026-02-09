import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editScout } from "./scoutsApi";
import type { scoutsFormType } from "../scoutstypes";

interface EditScoutVariables {
  id: number;
  data: scoutsFormType;
}

export const useEditScout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: EditScoutVariables) => editScout({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["scouts"],
      });
    },
  });
};
