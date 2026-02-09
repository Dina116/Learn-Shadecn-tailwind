import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAccountingGroups } from "./accountingGroupsApi";

export const useUpdateGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getAccountingGroups,

    onSuccess: (data) => {
      queryClient.setQueryData(["accountinggroups"], data);
    },
  });
};
