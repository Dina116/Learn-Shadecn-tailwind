import { useMutation, useQuery } from '@tanstack/react-query';
import { actionDevices, deviceRegester } from '@/app/services';
import {
  ADDDEVICEREGISTERREQ,
  DELETEDEVICEREGISTERREQ,
  DEVICESREGISTER,
  UPDATEDEVICEREGISTERREQ,
} from '@/domain/entities/devicesRegister';
import { ACTIONS } from '@/domain/entities/systemMangement/action';

export const DeviceRegisterKey = 'DeviceRegisterKey';
export const useGetDeviceRegisterApi = () => {
  const query = useQuery<DEVICESREGISTER[], Error>({
    queryKey: [DeviceRegisterKey],
    queryFn: () => deviceRegester.getDevicesRegister(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return query;
};

type UpdateProps = {
  onSuccess?: (req: void) => void;
};

export const useUpdateDeviceRegisterApi = ({
  onSuccess,
}: UpdateProps) => {
  const mutate = useMutation({
    mutationFn: (req: UPDATEDEVICEREGISTERREQ) =>
      deviceRegester.updateDevicesRegister(req),
    onSuccess,
  });
  return mutate;
};

type AddProps = {
  onSuccess?: (req: void) => void;
};
export const useAddDevicesRegisterApi = ({ onSuccess }: AddProps) => {
  const mutate = useMutation({
    mutationFn: (req: ADDDEVICEREGISTERREQ) =>
      deviceRegester.addDevicesRegister(req),
    onSuccess,
  });
  return mutate;
};

type DeleteProps = {
  onSuccess?: (req: void) => void;
};

export const useDeleteDeviceRegisterApi = ({ onSuccess }: DeleteProps) => {
  const mutate = useMutation({
    mutationFn: (req: DELETEDEVICEREGISTERREQ) =>
      deviceRegester.deleteDevicesRegister(req),
    onSuccess,
  });
  return mutate;
};

export const ActionDevicesKey = 'ActionDevicesKey';
export const useGetActionDevicesApi = () => {
  const query = useQuery<ACTIONS[], Error>({
    queryKey: [ActionDevicesKey],
    queryFn: () => actionDevices.getActionDevices(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return query;
};
