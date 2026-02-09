import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getConsumers } from "./consumersApi";

export const useUpdateFromBilling = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getConsumers,

    onSuccess: (data) => {
      queryClient.setQueryData(["consumers"], data);
    },
  });
};
