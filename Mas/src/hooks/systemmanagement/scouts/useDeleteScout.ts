import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteScout } from "../../../pages/Readings and Achievement/systemmanagement/scouts/api/scoutsApi";


export const useDeleteScout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteScout(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["scouts"],
      });
    },
  });
};
