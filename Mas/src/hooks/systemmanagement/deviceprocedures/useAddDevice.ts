import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { DeviceProcedureTypes } from "../types";
import { addDeviceProcedure } from "./deviceApi";

export const useAddDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DeviceProcedureTypes) => addDeviceProcedure(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deviceprocedure"] });
    },
    onError: (error) => {
      console.error("Add scout failed:", error);
    },
  });
};
