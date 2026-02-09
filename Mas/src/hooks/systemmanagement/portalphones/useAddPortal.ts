import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPortal } from "../../../pages/Readings and Achievement/systemmanagement/portalphones/api/portalApi";
import type { PortalPhonesTypes } from "../../../pages/Readings and Achievement/systemmanagement/portalphones/types";


export const useAddPortal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PortalPhonesTypes) => addPortal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portalphones"] });
    },
    onError: (error) => {
      console.error("Add scout failed:", error);
    },
  });
};
