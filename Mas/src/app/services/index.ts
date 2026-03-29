import { getCookie } from "@/utils/cookies";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { GoAuthClient } from "@/domain/entities/_gen/GoAuth_pb.client";

export const makeBaseUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_BASE_URL_DEV;
  }
  return `${window.location.protocol}//${window.location.hostname}`;
};

//
const ServiceTransport = (isBiller?: boolean, isGov?: boolean) =>
  new GrpcWebFetchTransport({
    baseUrl: `http://192.168.100.7:7000`,
    timeout: isGov ? 60 * 60 * 60 * 24 : 30 * 60 * 1000,
    format: "binary",
    jsonOptions: {
      useProtoFieldName: true,
      emitDefaultValues: false,
      enumAsInteger: true,
    },
    meta: {
      Authorization: `bearer ${getCookie("token")}`,
    },
  });

export const goAuthClient = new GoAuthClient(ServiceTransport());
