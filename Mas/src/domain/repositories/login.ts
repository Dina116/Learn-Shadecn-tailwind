import type { LoginRequest, LoginResponse } from "../entities/_gen/GoAuth_pb";

export interface ILoginRepo {
  signIn(input: LoginRequest): Promise<LoginResponse>;
}
