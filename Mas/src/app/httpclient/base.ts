import { AxiosHttpClient } from './axios-client';
import type { AuthorizationHeader, IHttpClient } from './client';


export class BaseApi {
  httpClient: IHttpClient;

  constructor(baseurl: string, authHeader: AuthorizationHeader) {
    this.httpClient = new AxiosHttpClient(baseurl, authHeader);
  }
}

export const toISOString = (inp: Date | string): string | undefined => {
  if (!inp) {
    return undefined;
  }
  let dt: string | undefined;
  if (inp instanceof Date) {
    dt = inp.toISOString();
  }
  if (typeof inp === 'string') {
    dt = inp;
  }
  return dt;
};
