/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHttpClient {
  Get<T>(url: string, params?: { [key: string]: any }): Promise<T>;
  Post<I, T>(url: string, data: I, params?: { [key: string]: any }): Promise<T>;
  Put<I, T>(url: string, data: I, params?: { [key: string]: any }): Promise<T>;
  Delete<T>(url: string, params?: { [key: string]: any }): Promise<T>;
}

export interface AuthorizationHeader {
  Authorization?: string;
}
