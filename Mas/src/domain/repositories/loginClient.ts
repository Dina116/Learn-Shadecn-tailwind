import { LoginRequest, LoginResponse } from '../entities/_gen/GoAuth_pb';
import { MyResponse } from './grpc';

export interface ILoginRepo {
  signIn(input: LoginRequest): MyResponse<LoginResponse>;
}
