import { useMutation, useQuery } from '@tanstack/react-query';
import { actionDevices } from '@/app/services';
import { ACTIONS, DELETEACTIONDEVICEREQ, UPDATEACTIONDEVICEREQ } from '@/domain/entities/systemMangement/action';

export const getActionDevicesKey = 'getCtgKey';
export const useGetActionDeviceApi = () => {
  const query = useQuery<ACTIONS[], Error>({
    queryKey: [getActionDevicesKey],
    queryFn: () => actionDevices.getActionDevices(),
    enabled: true,
  });
  return query;
};

type UpdateActionDeviceProps = {
  onSuccess?: (res: { message: string }) => void;
};
export const useUpdateActionDeviceApi = ({
  onSuccess,
}: UpdateActionDeviceProps) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATEACTIONDEVICEREQ) =>
      actionDevices.updateActionDevices(req),
    onSuccess,
  });
  return mutation;
};

type DeleteActionDeviceProps = {
  onSuccess?: (res: { message: string }) => void;
};
export const useDeleteActionDeviceApi = ({
  onSuccess,
}: DeleteActionDeviceProps) => {
  const mutation = useMutation({
    mutationFn: (req: DELETEACTIONDEVICEREQ) => actionDevices.deleteActionDevices(req),
    onSuccess,
  });
  return mutation;
};

type AddActionDeviceProps = {
  onSuccess?: (res: { message: string }) => void;
};
export const useAddActionDeviceApi = ({ onSuccess }: AddActionDeviceProps) => {
  const mutation = useMutation({
    mutationFn: (req: ACTIONS) => actionDevices.addActionDevices(req),
    onSuccess,
  });
  return mutation;
};
