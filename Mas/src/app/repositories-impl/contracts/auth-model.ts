export interface AuthModel {
  username?: string;
  password?: string;
  oldPassword?: string;
  newPassword?: string;
  is_enc?: boolean | null;
}
