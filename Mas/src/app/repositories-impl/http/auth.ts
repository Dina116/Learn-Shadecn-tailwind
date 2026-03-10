// import { BaseApi } from '@/app/httpclient/base';

// import { IAuthRepo } from '@/domain/repositories/auth';
// import { IServiceConfig } from '@/domain/service';
// import { USERApi } from '../contracts/user';
// import {
//   ChangePasswordRequest,
//   LoginRequest,
//   USERS,
// } from '@/domain/entities/systemMangement/users';

// import { BaseApi } from '../../app/httpclient/base';
// import type { ChangePasswordRequest, LoginRequest, USERS } from '../../domain/entities/systemMangement/users';
// import type { IAuthRepo } from '../../domain/repositories/auth';
// import type { IServiceConfig } from '../../domain/service';
import type { ChangePasswordRequest, LoginRequest, USERS } from '../../../domain/entities/systemMangement/users';
import type { IAuthRepo } from '../../../domain/repositories/auth';
import type { IServiceConfig } from '../../../domain/service';
import { BaseApi } from '../../httpclient/base';
import type { USERApi } from '../contracts/user';
import { getRes } from './users';

export class HttpAuthRepo extends BaseApi implements IAuthRepo {
  constructor(config: IServiceConfig) {
    const baseurl = `${
      config.baseUrl.endsWith('/') ? config.baseUrl : `${config.baseUrl}/`
    }api/Auth/`;
    super(baseurl, config.headers);
  }

  async login(req: LoginRequest): Promise<USERS> {
    const user: USERApi = await this.httpClient.Post(
      'Authenticat',
      {
        username: req.username,
        password: req.password,
      },
      {},
    );
    if (user) {
      return getRes(user);
    }
    return {} as USERS;
  }

  //   logout(req: Partial<User>) {
  //     console.log(req);
  //     // do nothing because not implemented in http server
  //     console.error(`logout :  ${NOT_IMPLEMENTED}`);
  //   }

  async changePassword(req: ChangePasswordRequest): Promise<USERS> {
    const user: USERApi = await this.httpClient.Post('ChangePassword', {
      oldPassword: req.oldPassword,
      newPassword: req.newPassword,
      userName: req.userName,
    });
    if (user) {
      return getRes(user);
    }
    return {} as USERS;
  }

  //   async register(req: Partial<User>): Promise<User> {
  //     throw NOT_IMPLEMENTED;
  //   }

  //   async reCaptcha(req: LoignRequest): Promise<string> {
  //     throw NOT_IMPLEMENTED;
  //   }
}
