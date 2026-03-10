import {
  ADDUSEREQ,
  DELETEUSEREQ,
  UPDATEUSERREQ,
  USERS,
} from '../entities/systemMangement/users';

export interface IUserRepo {
  addNewUser: (req: ADDUSEREQ) => Promise<void>;
  getUsers: () => Promise<USERS[]>;
  updateUser: (req: UPDATEUSERREQ) => Promise<void>;
  deleteUser: (req: DELETEUSEREQ) => Promise<USERS>;
}
