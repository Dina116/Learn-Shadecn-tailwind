import { useQuery } from '@tanstack/react-query';
import { syncService } from '@/app/services';

export const getSyncKey = 'getSyncKey';
export const useGetSyncListApi = () => {
  const query = useQuery<boolean, Error>({
    queryKey: [getSyncKey],
    queryFn: () => syncService.GetSyncList(),
    enabled: true,
  });
  return query;
};
