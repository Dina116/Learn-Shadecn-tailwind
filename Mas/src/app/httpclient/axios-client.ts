/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import type { AuthorizationHeader, IHttpClient } from './client';
// import { AuthorizationHeader, IHttpClient } from './client';

const defaultTimeout = 60 * 60 * 1000;
export class AxiosHttpClient implements IHttpClient {
  baseUrl: string;

  // headers: Map<string, string>;
  instance: AxiosInstance;

  constructor(baseUrl: string, authHeader: AuthorizationHeader) {
    const newbaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    this.baseUrl = newbaseUrl;
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: defaultTimeout,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader,
      },
    });
  }

  async Get<T>(
    url: string,
    params?: { [key: string]: any } | undefined,
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'GET',
      // headers: {},
      url,
      params,
    };
    const resp = await this.instance(options);
    const respData = resp.data;
    return respData as T;
  }

  async Post<I, T>(
    url: string,
    data: I,
    params?: { [key: string]: any } | undefined,
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'POST',
      // headers: {},
      data,
      url,

      params: params || undefined,
    };
    const resp = await this.instance(options);
    const respData = resp.data;
    return respData as T;
  }

  async Put<I, T>(
    url: string,
    data: I,
    params?: { [key: string]: any } | undefined,
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'PUT',
      // headers: {},
      data,
      url,
      params,
    };
    const resp = await this.instance(options);
    const respData = resp.data;
    return respData as T;
  }

  async Delete<T>(
    url: string,
    params?: { [key: string]: any } | undefined,
  ): Promise<T> {
    const options: AxiosRequestConfig = {
      method: 'DELETE',
      // headers: {},
      url,
      params,
    };
    const resp = await this.instance(options);
    const respData = resp.data;
    return respData as T;
  }
}
