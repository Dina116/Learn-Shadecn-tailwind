import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDevice } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/api/deviceApi";


export const useDeleteDevice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteDevice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deviceprocedure"],
      });
    },
  });
};
