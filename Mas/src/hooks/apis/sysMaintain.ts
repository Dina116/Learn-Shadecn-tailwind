import { useQuery } from '@tanstack/react-query';
import { collection } from '@/app/services';
import { HHBCYC } from '@/domain/entities/hhBcyc';

export const bcycKey = 'bcycKey';
export const permitTwoPeriodKey = 'permitTwoPeriodKey';
// *************************
export const cancelReadingKey = 'cancelReadingKey';
export const cancelPrepearToDeviceReadingKey =
  'cancelPrepearToDeviceReadingKey';
export const closecolWalkReadingKey = 'closecolWalkReadingKey';

export interface IBcycReq {
  deviceid: string;
  empid?: number;
}
export const useBcyc = (req: IBcycReq) => {
  const query = useQuery<HHBCYC[], Error>({
    queryKey: [bcycKey, req],
    queryFn: () => collection.Bcyc(req),
    retry: 0,
    enabled: Object.keys(req).length > 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return query;
};
