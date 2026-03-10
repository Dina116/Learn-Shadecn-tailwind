import { ChangePasswordRequest, LoginRequest, USERS } from '../entities/systemMangement/users';

export interface IAuthRepo {
  login: (req: LoginRequest) => Promise<USERS>;
  // logout: (req: Partial<User>) => void;
  changePassword: (req: ChangePasswordRequest) => Promise<USERS | null>;
  // register: (req: Partial<User>) => Promise<User | null>;
  // reCaptcha: (req: LoignRequest) => Promise<string>;
}
