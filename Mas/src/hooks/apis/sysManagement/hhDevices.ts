/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { hhDevice } from '@/app/services';
import {
  ADDDEVICEREQ,
  DELETEHHDEVICEREQ,
  DEVICES,
  UPDATEHHDEVICEREQ,
} from '@/domain/entities/systemMangement/devices';

export const getHHDevicesKey = 'getHHDevicesKey';
export const getUnAssignedDevicesKey = 'getUnAssignedDevicesKey';
export const getFreeDevicesKey = 'getFreeDevicesKey';

// type UpdateHhDeviceProps = {
//   onSuccess?: (res: void) => void;
// };
// export const useUpdateHhDeviceApi = ({ onSuccess }: UpdateHhDeviceProps) => {
//   const mutation = useMutation({
//     mutationFn: (req: UPDATEHHDEVICEREQ) => hhDevice.updateHHDevices(req),
//     onSuccess,
//   });
//   return mutation;
// };

// type DeleteHhDeviceProps = {
//   onSuccess?: (res: DEVICES) => void;
// };
// export const useDeleteHhDeviceApi = ({ onSuccess }: DeleteHhDeviceProps) => {
//   const mutation = useMutation({
//     mutationFn: (req:DELETEHHDEVICEREQ) => hhDevice.deleteHHDevices(req),
//     onSuccess,
//   });
//   return mutation;
// };

// type AddHhDeviceProps = {
//   onSuccess?: (res: void) => void;
// };
// export const useHhDeviceApi = ({ onSuccess }: AddHhDeviceProps) => {
//   const mutation = useMutation({
//     mutationFn: (req: ADDDEVICEREQ) => hhDevice.addHHDevices(req),
//     onSuccess,
//   });
//   return mutation;
// };

export const useGetAllHHDevicesApi = () => {
  const query = useQuery<DEVICES[], Error>({
    queryKey: [getHHDevicesKey],
    queryFn: () => hhDevice.getHHDevices(),
    enabled: true,
  });
  return query;
};

export const useGetAllUnAssignDevicesApi = () => {
  const query = useQuery<DEVICES[], Error>({
    queryKey: [getUnAssignedDevicesKey],
    queryFn: () => hhDevice.UnAssigned(),
    enabled: true,
  });
  return query;
};

export const useGetAllFreeDevicesApi = () => {
  const query = useQuery<DEVICES[], Error>({
    queryKey: [getFreeDevicesKey],
    queryFn: () => hhDevice.FreeDevices(),
    enabled: true,
  });
  return query;
};

type PropsAddHH = {
  onSuccess?: (req: void) => void;
  onMutate?: (req?: ADDDEVICEREQ) => void;
};

export const useAddHHApi = ({ onSuccess, onMutate }: PropsAddHH) => {
  const mutation = useMutation({
    mutationFn: (req: ADDDEVICEREQ) => hhDevice.addHHDevices(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};
type PropsEditHH = {
  onSuccess?: (req: void) => void;

  onMutate?: (req?: UPDATEHHDEVICEREQ) => void;
};

export const useEditHHApi = ({ onSuccess, onMutate }: PropsEditHH) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATEHHDEVICEREQ) => hhDevice.updateHHDevices(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};

type PropsdeleteHH = {
  onSuccess?: (res: DEVICES) => void;

  onMutate?: (req?: { id: string | number }) => void;
};

export const useDeleteHHApi = ({ onSuccess, onMutate }: PropsdeleteHH) => {
  const mutation = useMutation({
    mutationFn: (req: DELETEHHDEVICEREQ) => hhDevice.deleteHHDevices(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};
