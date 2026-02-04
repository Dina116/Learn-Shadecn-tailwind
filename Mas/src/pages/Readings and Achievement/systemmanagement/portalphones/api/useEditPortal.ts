import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PortalPhonesTypes } from "../types";
import { editPortal } from "./portalApi";

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
