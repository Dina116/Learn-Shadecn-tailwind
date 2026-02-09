import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePortal } from "./portalApi";

export const useDeletePortal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePortal(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["portalphones"],
      });
    },
  });
};
