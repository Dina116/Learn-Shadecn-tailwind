/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoAuthClient } from 'grpc-web-client-gen/GoAuthServiceClientPb';
import {
  GetUserProfileResponse,
  MUSERS,
  Emptymessage,
  AUTH_PROFILES,
  GetAllUserResponse,
  Min_USER_STATIONS,
  RegisterResponse,
} from 'grpc-web-client-gen/GoAuth_pb';
import { RequestMeta } from '../shared';

import { makeBaseUrl } from '@/app/services';
import { setCookie } from '@/utils/cookies';

const client = new GoAuthClient(
  `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
);

export function getAllUsersApi(): Promise<MUSERS.AsObject[]> {
  return new Promise<MUSERS.AsObject[]>((resolve, reject) => {
    try {
      const req = new Emptymessage();
      const meta: any = RequestMeta();
      client.getAllUser(req, meta, (err: any, resp: GetAllUserResponse) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          resolve(resp.toObject().usersList);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

export function getUserProfileApi(): Promise<GetUserProfileResponse.AsObject> {
  return new Promise<GetUserProfileResponse.AsObject>((resolve, reject) => {
    try {
      const req = new Emptymessage();
      const meta: any = RequestMeta();
      client.getUserProfile(
        req,
        meta,
        (err: any, resp: GetUserProfileResponse) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            console.log(resp.toObject(), 'userprofile');
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}

export function getAllProfilesApi(): Promise<AUTH_PROFILES.AsObject[]> {
  return new Promise<AUTH_PROFILES.AsObject[]>((resolve, reject) => {
    try {
      const req = new Emptymessage();
      const meta: any = RequestMeta();
      client.getAllProfiles(req, meta, (err: any, resp) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          console.log(resp.toObject(), 'allprofiles');
          resolve(resp.toObject().allProfilesList);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

export function RefreshTokenWithNewSt(
  _req: Min_USER_STATIONS.AsObject,
): Promise<RegisterResponse.AsObject> {
  return new Promise<RegisterResponse.AsObject>((resolve, reject) => {
    try {
      const req = new Min_USER_STATIONS();
      req.setSectorId(_req.sectorId);
      req.setOrgId(_req.orgId);
      req.setSiteCode(_req.siteCode);
      req.setStationId(_req.stationId);
      const meta: any = RequestMeta();
      client.refreshTokenWithNewSt(req, meta, (err: any, resp) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          const ls = resp.toObject();
          setCookie('token', undefined, true);
          setCookie('token', ls.token);
          window.location.reload();
          resolve(resp.toObject());
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
