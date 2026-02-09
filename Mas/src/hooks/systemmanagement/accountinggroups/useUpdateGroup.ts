import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAccountingGroups } from "../../../pages/Readings and Achievement/systemmanagement/accountinggroups/api/accountingGroupsApi";


export const useUpdateGroup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getAccountingGroups,

    onSuccess: (data) => {
      queryClient.setQueryData(["accountinggroups"], data);
    },
  });
};
