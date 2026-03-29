import type { IGoAuthRepo } from "../repositories/goAuth";

export type Protocol = "grpc" | "http" | "cache";

export interface IServiceConfig {
  baseUrl: string;
  headers: { [key: string]: string };
}
export interface IService {
  goAuthClient: IGoAuthRepo;
}
