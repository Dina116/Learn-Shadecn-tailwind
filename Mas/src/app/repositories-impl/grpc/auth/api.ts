/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoAuthClient } from "grpc-web-client-gen/GoAuthServiceClientPb";
import {
  GetUserProfileResponse,
  MUSERS,
  Emptymessage,
  AUTH_PROFILES,
  Min_USER_STATIONS,
  RegisterResponse,
} from "grpc-web-client-gen/GoAuth_pb";
import { RequestMeta } from "../shared";
import { makeBaseUrl } from "../../../services";

const client = new GoAuthClient(
  `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
);

function callGrpcApi<TRequest, TResponse>(
  client: any,
  method: (
    req: TRequest,
    meta: any,
    callback: (err: any | null, resp: TResponse) => void,
  ) => void,
  request: TRequest,
): Promise<TResponse> {
  return new Promise<TResponse>((resolve, reject) => {
    try {
      const meta = RequestMeta();
      method.bind(client)(request, meta, (err, response) => {
        if (err) {
          console.error("gRPC Error:", err.code, err.message);
          return reject(err);
        }
        resolve(response);
      });
    } catch (e) {
      reject(e);
    }
  });
}

export async function getAllUsersApi(): Promise<MUSERS.AsObject[]> {
  const response = await callGrpcApi(
    client,
    client.getAllUser,
    new Emptymessage(),
  );
  return response.toObject().usersList;
}

export async function getUserProfileApi(): Promise<GetUserProfileResponse.AsObject> {
  const response = await callGrpcApi(
    client,
    client.getUserProfile,
    new Emptymessage(),
  );
  console.log(response.toObject(), "userprofile");
  return response.toObject();
}

export async function getAllProfilesApi(): Promise<AUTH_PROFILES.AsObject[]> {
  const response = await callGrpcApi(
    client,
    client.getAllProfiles,
    new Emptymessage(),
  );
  return response.toObject().allProfilesList;
}

export async function refreshTokenWithNewStApi(
  _req: Min_USER_STATIONS.AsObject,
): Promise<RegisterResponse.AsObject> {
  const req = new Min_USER_STATIONS();
  req.setSectorId(_req.sectorId);
  req.setOrgId(_req.orgId);
  req.setSiteCode(_req.siteCode);
  req.setStationId(_req.stationId);

  const response = await callGrpcApi(client, client.refreshTokenWithNewSt, req);
  return response.toObject();
}
