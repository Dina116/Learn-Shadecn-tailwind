import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDeviceProcedure } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/api/deviceApi";
import type { DeviceProcedureTypes } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/types";


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
