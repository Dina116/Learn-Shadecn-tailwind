import { useQuery } from '@tanstack/react-query';
import { monitorService } from '@/app/services';
import { PROCESS } from '@/domain/entities/process';
import { HHBCYC } from '@/domain/entities/hhBcyc';

export const processKey = 'processKey';
export const hHStatusKey = 'hHStatusKey';
export const useGetProcesApi = () => {
  const query = useQuery<PROCESS[], Error>({
    queryKey: [processKey],
    queryFn: () => monitorService.Processes(),
    enabled: true,
  });
  return query;
};

export const useGetHhStatusApi = () => {
  const query = useQuery<HHBCYC[], Error>({
    queryKey: [hHStatusKey],
    queryFn: () => monitorService.HhStatus(),
    enabled: true,
  });
  return query;
};
