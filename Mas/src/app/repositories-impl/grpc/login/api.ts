/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginClient as LoginClient } from "grpc-web-client-gen/GoAuthServiceClientPb";
// import {
//   Emptymessage,
//   GetAllSitesResponse,
//   LoginRequest,
//   LoginResponse,
//   SITES,
// } from "grpc-web-client-gen/GoAuth_pb";
import * as GoAuth from "grpc-web-client-gen/GoAuth_pb";
import { RequestMeta } from "../shared";
import { makeBaseUrl } from "../../../../services";
// import { makeBaseUrl } from "../../../../services";
// import { makeBaseUrl } from '@/app/services';

// const client = new LoginClient(
//   `${import.meta.env.VITE_BASE_URL_DEV_HTTP}:${
//     import.meta.env.VITE_AUTH_CLIENT_PORT
//   }`,
// );

const client = new LoginClient(
  // `http://192.168.100.7:7000`,
  `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
);
console.log(client);

export function signInApi(
  obj: GoAuth.LoginRequest.AsObject,
): Promise<GoAuth.LoginResponse.AsObject> {
  return new Promise<GoAuth.LoginResponse.AsObject>((resolve, reject) => {
    try {
      const req = new GoAuth.LoginRequest();
      req.setDeviceToken(obj.deviceToken!);
      req.setIsportal(obj.isportal || false);
      req.setPassword(obj.password);
      req.setUsername(obj.username);
      console.log(req.toObject(), "req");
      const meta: any = RequestMeta();
      client.signIn(req, meta, (err: any, resp: GoAuth.LoginResponse) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          resolve(resp.toObject());
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

export function getAllSitesApi(): Promise<GoAuth.SITES.AsObject[]> {
  return new Promise<GoAuth.SITES.AsObject[]>((resolve, reject) => {
    try {
      const req = new GoAuth.Emptymessage();

      const meta: any = RequestMeta();
      client.getAllSites(req, meta, (err: any, resp: GoAuth.GetAllSitesResponse) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          resolve(resp.toObject().sitesList);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
