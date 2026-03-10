import {
  All_PROFILES,
  Emptymessage,
  GetAllUserResponse,
  GetUserProfileResponse,
  Min_USER_STATIONS,
  RegisterResponse,
} from '../entities/_gen/GoAuth_pb';
import { MyResponse } from './grpc';

export interface IGoAuthRepo {
  getUserProfile(input: Emptymessage): MyResponse<GetUserProfileResponse>;
  getAllUser(input: Emptymessage): MyResponse<GetAllUserResponse>;
  getAllProfiles(input: Emptymessage): MyResponse<All_PROFILES>;
  refreshTokenWithNewSt(input: Min_USER_STATIONS): MyResponse<RegisterResponse>;
}
