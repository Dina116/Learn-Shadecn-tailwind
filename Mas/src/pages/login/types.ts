import type { USERS } from "../Readings and Achievement/controlpanel/moneyTransfeer/users";

export type InputFormData = {
  username: string;
  password: string;
};
export interface LoginFormProps {
  onSubmit: (data: InputFormData) => void;
}
export interface UserToken extends USERS {
  userID: number;
  username: string;
  userStationNo?: number;
  hq?: boolean;
  superUser?: boolean;
  isactive: boolean;
  IsPortal: boolean;
  SITE_CODE: number;
  FullName?: string;
  exp?: number;
  isSuccess: boolean;
}
export interface LoginState {
  user?: UserToken;
  updateLogin: (token: UserToken) => void;
  logOut: () => void;
}
