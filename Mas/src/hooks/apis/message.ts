import { useQuery } from '@tanstack/react-query';
import { messageService } from '@/app/services';

export const getConnectedDeviceKey = 'getConnectedDeviceKey';
export const useAplyMarketingPlanApi = () => {
  const query = useQuery<string[], Error>({
    queryKey: [getConnectedDeviceKey],
    queryFn: () => messageService.ConnectedDevices(),
    enabled: true,
  });
  return query;
};
