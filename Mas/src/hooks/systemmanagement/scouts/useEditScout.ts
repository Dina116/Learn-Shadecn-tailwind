import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { scoutsFormType } from "../../../pages/Readings and Achievement/systemmanagement/scouts/scoutstypes";
import { editScout } from "../../../pages/Readings and Achievement/systemmanagement/scouts/api/scoutsApi";


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
