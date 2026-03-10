import { useQuery } from '@tanstack/react-query';
import { masProvider } from '@/app/services';
import {
  GetSettingValueRq,
  SETTINGS,
  SiteCode,
  SITES,
  STATIONS,
} from '@/domain/entities/_gen/MasProvider_pb';
// import { checkTokenCookie } from '@/utils/cookies';

export const getAllSitesProviderKey = 'getAllSitesProviderKey';
export const getMasStationsProviderKey = 'getMasStationsProviderKey';

const getAllSitesProvider = async () => {
  const data = await masProvider.getAllSites({});
  return data.response.sITES;
};
const getMasStationsProvider = async () => {
  const data = await masProvider.getMasStations({});
  return data.response.sTATIONS;
};
const getSettingValue = async (req: GetSettingValueRq) => {
  const data = await masProvider.getSettingValue(req);
  return data.response;
};

const getSiteLogo = async (req: SiteCode) => {
  const data = await masProvider.getSiteLogo(req);
  return data.response;
};

export const useGetAllSitesProviderApi = () => {
  const query = useQuery<SITES[], Error>({
    queryKey: [getAllSitesProviderKey],
    queryFn: () => getAllSitesProvider(),
    enabled: !import.meta.env.VITE_IS_GOV_BASIC,
  });
  return query;
};

export const useGetMasStationsProviderKeyApi = () => {
  const query = useQuery<STATIONS[], Error>({
    queryKey: [getMasStationsProvider],
    queryFn: () => getMasStationsProvider(),
    enabled: !import.meta.env.VITE_IS_GOV_BASIC,
  });
  return query;
};

export const useGetMasProviderSettings = (req: GetSettingValueRq) => {
  const query = useQuery<SETTINGS, Error>({
    queryKey: ['useGetMasProviderSettings', req],
    queryFn: () => getSettingValue(req),
    enabled: Object.keys(req || {}).length > 0 && req.SITE_CODE !== undefined,
    retryOnMount: false,
  });
  return query;
};

export const useGetSiteLogoProvider = (req: SiteCode) => {
  const query = useQuery<SITES, Error>({
    queryKey: ['useGetSiteLogoProviderKey', req],
    queryFn: () => getSiteLogo(req),
    cacheTime: 24 * 60 * 60 * 10000,
    staleTime: 23 * 60 * 60 * 10000,
    enabled: Object.keys(req).length > 0 && !!req?.code,
    // enabled: true,
    retryOnMount: false,
  });
  return query;
};
