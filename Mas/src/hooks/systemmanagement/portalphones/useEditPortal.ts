import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PortalPhonesTypes } from "../../../pages/Readings and Achievement/systemmanagement/portalphones/types";
import { editPortal } from "../../../pages/Readings and Achievement/systemmanagement/portalphones/api/portalApi";


interface EditPortalVariables {
  id: string;
  data: PortalPhonesTypes;
}
export const useEditPortal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: EditPortalVariables) => editPortal({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["portalphones"],
      });
    },
  });
};
