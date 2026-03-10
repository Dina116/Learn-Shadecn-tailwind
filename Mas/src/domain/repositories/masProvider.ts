import {
  ArrSITES,
  ArrSTATIONS,
  DEPARTMENTS,
  EMPTY,
  GetDepartmentRq,
  GetSettingValueRq,
  SETTINGS,
  SiteCode,
  SITES,
  StationRq,
  STATIONS,
} from '../entities/_gen/MasProvider_pb';
import { MyResponse } from './grpc';

export interface IMasProvider {
  getStationByStationNo(input: StationRq): MyResponse<STATIONS>;

  getMasStations(input: EMPTY): MyResponse<ArrSTATIONS>;

  getSettingValue(input: GetSettingValueRq): MyResponse<SETTINGS>;

  getDepartment(input: GetDepartmentRq): MyResponse<DEPARTMENTS>;

  getAllSites(input: EMPTY): MyResponse<ArrSITES>;

  getSiteLogo(input: SiteCode): MyResponse<SITES>;
}
