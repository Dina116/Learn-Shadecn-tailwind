// package: billing
// file: service.proto

import * as service_pb from "./service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingChargeServiceInfo = {
  readonly methodName: string;
  readonly service: typeof BillingChargeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

type BillingChargeServiceCharge = {
  readonly methodName: string;
  readonly service: typeof BillingChargeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.ChargeRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

type BillingChargeServiceSetup = {
  readonly methodName: string;
  readonly service: typeof BillingChargeService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.SetupData;
  readonly responseType: typeof service_pb.Empty;
};

export class BillingChargeService {
  static readonly serviceName: string;
  static readonly Info: BillingChargeServiceInfo;
  static readonly Charge: BillingChargeServiceCharge;
  static readonly Setup: BillingChargeServiceSetup;
}

type BillingTariffProviderInfo = {
  readonly methodName: string;
  readonly service: typeof BillingTariffProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

type BillingTariffProviderGetSetupData = {
  readonly methodName: string;
  readonly service: typeof BillingTariffProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.SetupData;
};

export class BillingTariffProvider {
  static readonly serviceName: string;
  static readonly Info: BillingTariffProviderInfo;
  static readonly GetSetupData: BillingTariffProviderGetSetupData;
}

type BillingDataProviderInfo = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

type BillingDataProviderGetCustomerByCustkey = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Key;
  readonly responseType: typeof service_pb.Customer;
};

type BillingDataProviderGetCustomersByBillgroup = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Key;
  readonly responseType: typeof service_pb.CustomersList;
};

type BillingDataProviderGetLoockup = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Entity;
  readonly responseType: typeof service_pb.LookUpsResponce;
};

type BillingDataProviderGetCtgs = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.CtgsResponce;
};

type BillingDataProviderGetBillsByCustkey = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.GetBillRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

type BillingDataProviderGetBillsByFormNo = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.GetBillRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

type BillingDataProviderLogin = {
  readonly methodName: string;
  readonly service: typeof BillingDataProvider;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.LoginRequest;
  readonly responseType: typeof service_pb.LoginResponce;
};

export class BillingDataProvider {
  static readonly serviceName: string;
  static readonly Info: BillingDataProviderInfo;
  static readonly GetCustomerByCustkey: BillingDataProviderGetCustomerByCustkey;
  static readonly GetCustomersByBillgroup: BillingDataProviderGetCustomersByBillgroup;
  static readonly GetLoockup: BillingDataProviderGetLoockup;
  static readonly GetCtgs: BillingDataProviderGetCtgs;
  static readonly GetBillsByCustkey: BillingDataProviderGetBillsByCustkey;
  static readonly GetBillsByFormNo: BillingDataProviderGetBillsByFormNo;
  static readonly Login: BillingDataProviderLogin;
}

type BillingDataCousumerInfo = {
  readonly methodName: string;
  readonly service: typeof BillingDataCousumer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

type BillingDataCousumerWriteFinantialData = {
  readonly methodName: string;
  readonly service: typeof BillingDataCousumer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.PostMessage;
  readonly responseType: typeof service_pb.Empty;
};

type BillingDataCousumerWriteFinantialDataOne = {
  readonly methodName: string;
  readonly service: typeof BillingDataCousumer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.PostMessage;
  readonly responseType: typeof service_pb.Empty;
};

export class BillingDataCousumer {
  static readonly serviceName: string;
  static readonly Info: BillingDataCousumerInfo;
  static readonly WriteFinantialData: BillingDataCousumerWriteFinantialData;
  static readonly WriteFinantialDataOne: BillingDataCousumerWriteFinantialDataOne;
}

type EngineInfo = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

type EngineCalulate = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.ChargeRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

type EnginePost = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.PostMessage;
  readonly responseType: typeof service_pb.Empty;
};

type EnginePostOne = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.PostMessage;
  readonly responseType: typeof service_pb.Empty;
};

type EngineGetCustomerByCustkey = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Key;
  readonly responseType: typeof service_pb.Customer;
};

type EngineGetLoockup = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Entity;
  readonly responseType: typeof service_pb.LookUpsResponce;
};

type EngineGetCtgs = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.CtgsResponce;
};

type EngineGetBillsByCustkey = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.GetBillRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

type EngineGetBillsByFormNo = {
  readonly methodName: string;
  readonly service: typeof Engine;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.GetBillRequest;
  readonly responseType: typeof service_pb.BillResponce;
};

export class Engine {
  static readonly serviceName: string;
  static readonly Info: EngineInfo;
  static readonly Calulate: EngineCalulate;
  static readonly Post: EnginePost;
  static readonly PostOne: EnginePostOne;
  static readonly GetCustomerByCustkey: EngineGetCustomerByCustkey;
  static readonly GetLoockup: EngineGetLoockup;
  static readonly GetCtgs: EngineGetCtgs;
  static readonly GetBillsByCustkey: EngineGetBillsByCustkey;
  static readonly GetBillsByFormNo: EngineGetBillsByFormNo;
}

type LoginServiceLogin = {
  readonly methodName: string;
  readonly service: typeof LoginService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.LoginRequest;
  readonly responseType: typeof service_pb.LoginResponce;
};

type LoginServiceInfo = {
  readonly methodName: string;
  readonly service: typeof LoginService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.Empty;
  readonly responseType: typeof service_pb.ServiceInfo;
};

export class LoginService {
  static readonly serviceName: string;
  static readonly Login: LoginServiceLogin;
  static readonly Info: LoginServiceInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BillingChargeServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  charge(
    requestMessage: service_pb.ChargeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  charge(
    requestMessage: service_pb.ChargeRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  setup(
    requestMessage: service_pb.SetupData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  setup(
    requestMessage: service_pb.SetupData,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
}

export class BillingTariffProviderClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  getSetupData(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.SetupData|null) => void
  ): UnaryResponse;
  getSetupData(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.SetupData|null) => void
  ): UnaryResponse;
}

export class BillingDataProviderClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  getCustomerByCustkey(
    requestMessage: service_pb.Key,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Customer|null) => void
  ): UnaryResponse;
  getCustomerByCustkey(
    requestMessage: service_pb.Key,
    callback: (error: ServiceError|null, responseMessage: service_pb.Customer|null) => void
  ): UnaryResponse;
  getCustomersByBillgroup(
    requestMessage: service_pb.Key,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CustomersList|null) => void
  ): UnaryResponse;
  getCustomersByBillgroup(
    requestMessage: service_pb.Key,
    callback: (error: ServiceError|null, responseMessage: service_pb.CustomersList|null) => void
  ): UnaryResponse;
  getLoockup(
    requestMessage: service_pb.Entity,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.LookUpsResponce|null) => void
  ): UnaryResponse;
  getLoockup(
    requestMessage: service_pb.Entity,
    callback: (error: ServiceError|null, responseMessage: service_pb.LookUpsResponce|null) => void
  ): UnaryResponse;
  getCtgs(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CtgsResponce|null) => void
  ): UnaryResponse;
  getCtgs(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.CtgsResponce|null) => void
  ): UnaryResponse;
  getBillsByCustkey(
    requestMessage: service_pb.GetBillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByCustkey(
    requestMessage: service_pb.GetBillRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByFormNo(
    requestMessage: service_pb.GetBillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByFormNo(
    requestMessage: service_pb.GetBillRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  login(
    requestMessage: service_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.LoginResponce|null) => void
  ): UnaryResponse;
  login(
    requestMessage: service_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.LoginResponce|null) => void
  ): UnaryResponse;
}

export class BillingDataCousumerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  writeFinantialData(
    requestMessage: service_pb.PostMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  writeFinantialData(
    requestMessage: service_pb.PostMessage,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  writeFinantialDataOne(
    requestMessage: service_pb.PostMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  writeFinantialDataOne(
    requestMessage: service_pb.PostMessage,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
}

export class EngineClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  calulate(
    requestMessage: service_pb.ChargeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  calulate(
    requestMessage: service_pb.ChargeRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  post(
    requestMessage: service_pb.PostMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  post(
    requestMessage: service_pb.PostMessage,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  postOne(
    requestMessage: service_pb.PostMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  postOne(
    requestMessage: service_pb.PostMessage,
    callback: (error: ServiceError|null, responseMessage: service_pb.Empty|null) => void
  ): UnaryResponse;
  getCustomerByCustkey(
    requestMessage: service_pb.Key,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.Customer|null) => void
  ): UnaryResponse;
  getCustomerByCustkey(
    requestMessage: service_pb.Key,
    callback: (error: ServiceError|null, responseMessage: service_pb.Customer|null) => void
  ): UnaryResponse;
  getLoockup(
    requestMessage: service_pb.Entity,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.LookUpsResponce|null) => void
  ): UnaryResponse;
  getLoockup(
    requestMessage: service_pb.Entity,
    callback: (error: ServiceError|null, responseMessage: service_pb.LookUpsResponce|null) => void
  ): UnaryResponse;
  getCtgs(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.CtgsResponce|null) => void
  ): UnaryResponse;
  getCtgs(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.CtgsResponce|null) => void
  ): UnaryResponse;
  getBillsByCustkey(
    requestMessage: service_pb.GetBillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByCustkey(
    requestMessage: service_pb.GetBillRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByFormNo(
    requestMessage: service_pb.GetBillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
  getBillsByFormNo(
    requestMessage: service_pb.GetBillRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.BillResponce|null) => void
  ): UnaryResponse;
}

export class LoginServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: service_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.LoginResponce|null) => void
  ): UnaryResponse;
  login(
    requestMessage: service_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.LoginResponce|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: service_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: service_pb.ServiceInfo|null) => void
  ): UnaryResponse;
}

