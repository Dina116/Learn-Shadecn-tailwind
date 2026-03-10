import { BaseApi } from './base';
import { type AuthorizationHeader } from './client';
// import { AuthorizationHeader } from './client';

export class EntityApi<T> extends BaseApi {
  constructor(baseurl: string, authHeader: AuthorizationHeader) {
    const baseUrl = baseurl.endsWith('/') ? baseurl : `${baseurl}/`;
    super(baseUrl, authHeader);
  }

  async Get(): Promise<T[]> {
    const url = 'Get';
    return this.httpClient.Get(url, {});
  }

  async GetRecord(): Promise<T> {
    const url = 'GetRecord';
    return this.httpClient.Get(url, {});
  }

  async Put(req: {
    id?: number | string;
    entity: T;
    undefined?: string;
  }): Promise<void> {
    const url = 'Put';
    const { entity, ...rest } = req;
    return this.httpClient.Put(url, req.entity, rest);
  }

  async Post(req: { entity: T }): Promise<void> {
    const url = 'Post';
    const { entity, ...rest } = req;
    return this.httpClient.Post(url, req.entity, rest);
  }

  async Delete(req: { id?: number | string }): Promise<void | T> {
    const url = 'Delete';
    return this.httpClient.Delete(url, req);
  }
}
