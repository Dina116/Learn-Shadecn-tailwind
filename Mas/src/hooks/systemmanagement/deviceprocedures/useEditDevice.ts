import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDeviceProcedure } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/api/deviceApi";
import type { DeviceProcedureTypes } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/types";

interface EditPortalVariables {
  id: number;
  data: DeviceProcedureTypes;
}
export const useEditDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: EditPortalVariables) =>
      editDeviceProcedure({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deviceprocedure"],
      });
    },
  });
};
