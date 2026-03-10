import { useMutation, useQuery } from '@tanstack/react-query';
import { devicesLocation } from '@/app/services';
import { ADDDEVICELOCREQ, DELETEDEVICELOCREQ, DEVICELOCATION, UPDATEDEVICELOCATIONREQ } from '@/domain/entities/deviceLocation';

export const DeviceLocationKey = 'DeviceLocationKey';
export const useGetDeviceLocation = () => {
  const query = useQuery<DEVICELOCATION[], Error>({
    queryKey: [DeviceLocationKey],
    queryFn: () => devicesLocation.getDevicesLocation(),
    enabled: true,
  });
  return query;
};

type UpdateDeviceLocationProps = {
  onSuccess?: (req: void) => void;
};

export const useUpdateDeviceRegister = ({
  onSuccess,
}: UpdateDeviceLocationProps) => {
  const mutate = useMutation({
    mutationFn: (req:UPDATEDEVICELOCATIONREQ) =>
      devicesLocation.updateDevicesLocation(req),
    onSuccess,
  });
  return mutate;
};

type AddDeviceLocationProps = {
  onSuccess?: (req: void) => void;
};
export const useAddDeviceslocatotion = ({
  onSuccess,
}: AddDeviceLocationProps) => {
  const mutate = useMutation({
    mutationFn: (req:ADDDEVICELOCREQ) =>
      devicesLocation.addDevicesLocation(req),
    onSuccess,
  });
  return mutate;
};

type DeleteDevicesLocationProps = {
  onSuccess?: (req: void) => void;
};

export const useDeleteDeviceRegister = ({
  onSuccess,
}: DeleteDevicesLocationProps) => {
  const mutate = useMutation({
    mutationFn: (req: DELETEDEVICELOCREQ) =>
      devicesLocation.deleteDevicesLocation(req),
    onSuccess,
  });
  return mutate;
};
