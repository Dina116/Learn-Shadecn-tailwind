import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPortal } from "./portalApi";
import type { PortalPhonesTypes } from "../types";

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
