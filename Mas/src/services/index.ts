// import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { BillerSystemClient } from '../domain/entities/_gen/biller-sys_pb.client';
import type { IService, IServiceConfig } from '../domain/service';
import { getCookie } from '../utils/cookies';
import { GrpcHttpService } from './services';

let authName = 'bearer';
if (import.meta.env.VITE_IS_GOV_BASIC) {
  authName = 'Basic';
}
export const makeBaseUrl = () => {
  if (import.meta.env.DEV) {
    // if (isBiller) {
    //   return 'http://192.168.100.3';
    // }
    return import.meta.env.VITE_BASE_URL_DEV;
  }
  return `${window.location.protocol}//${window.location.hostname}`;
};

// reset for mas old client
const httpServiceTransport: IServiceConfig = {
  baseUrl: `${makeBaseUrl()}:${import.meta.env.VITE_httpPort}`,
  headers: { Authorization: `${authName} ${getCookie('token')}` },
};
// grpc for gov & biller

const ServiceTransport = (isBiller?: boolean, isGov?: boolean) =>
  new GrpcWebFetchTransport({
    baseUrl: `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
    timeout: isGov ? 60 * 60 * 60 * 24 : 30 * 60 * 1000,
    format: 'binary',
    jsonOptions: {
      useProtoFieldName: true,
      emitDefaultValues: false,
      enumAsInteger: true,
    },
    meta: {
      Authorization: `${authName} ${getCookie('token')}`,
    },
  });
export const ServiceFactory = (isGov?: boolean): IService =>
  new GrpcHttpService({
    httpConfig: httpServiceTransport,
    grpcCongig: () => ServiceTransport(false, isGov),
  });

const GrpcServiceFactorySetting = (isGov?: boolean) => ServiceFactory(isGov);

export const { govClient } = GrpcServiceFactorySetting(true);

export const billerClient = new BillerSystemClient(ServiceTransport(true));
export const { goAuthClient } = GrpcServiceFactorySetting();
export const { loginClient } = GrpcServiceFactorySetting();
export const { edamsOperation } = GrpcServiceFactorySetting();
export const { masProvider } = GrpcServiceFactorySetting();
export const { microStatments } = GrpcServiceFactorySetting();
export const { masCustomers } = GrpcServiceFactorySetting();

export const HttpServiceFactorySetting = () => ServiceFactory();
export const {
  // ادارة النظام
  actionDevices,
  emps,
  users,
  cashbox,
  lookup,
  hhDevice,
  stations,
  // المسح الميدانى
  badConnection,
  complaints,
  updateData,
  // سجل صيانة الوحدات
  deviceRegester,
  devicesLocation,
  // معالجه البيانات و صيانة النظام ولوحة التحكم

  reading,
  collection,
  billingService,
  /// /
  customerSeq,
  // اعاة احتساب مطورة
  reCalcModifyInvoice,
  //
  bookService,
  authClient,
  systemLookup,
  marketing,
  messageService,
  monitorService,
  portalService,
  syncService,
  query,
  taxService,
  mashhBiClient,
} = HttpServiceFactorySetting();
