import { useQuery } from '@tanstack/react-query';
import { portalService } from '@/app/services';
import { PORTAL } from '@/domain/entities/portal';
import { IBillGroupBookWalk } from '@/domain/entities/reading';

export const postDatatoGateKey = 'postDatatoGateKey';
export const usePostDataToGateApi = (req:IBillGroupBookWalk) => {
  const query = useQuery<PORTAL, Error>({
    queryKey: [postDatatoGateKey, req],
    queryFn: () => portalService.PostDataToGate(req),
    enabled: true,
  });
  return query;
};
