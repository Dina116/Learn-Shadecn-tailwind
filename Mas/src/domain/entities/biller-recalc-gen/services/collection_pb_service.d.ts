// package: services
// file: services/collection.proto

import * as services_collection_pb from "../services/collection_pb";
import * as messages_collectionmessages_pb from "../messages/collectionmessages_pb";
import * as serverhostmessages_collectionmessages_pb from "../serverhostmessages/collectionmessages_pb";
import {grpc} from "@improbable-eng/grpc-web";

type collectionServiceGetPaymentMethods = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_collectionmessages_pb.Empty;
  readonly responseType: typeof messages_collectionmessages_pb.GetPaymentMethodsResponse;
};

type collectionServiceGetCashierBalance = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_collection_pb.GetCashierBalanceRequest;
  readonly responseType: typeof serverhostmessages_collectionmessages_pb.CashierBalance;
};

type collectionServiceGetPaymentForHq = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_collection_pb.GetPaymentForHqRequest;
  readonly responseType: typeof messages_collectionmessages_pb.GetPaymentForHqResponse;
};

type collectionServiceCalcCharge = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_collection_pb.CalcChargeRequest;
  readonly responseType: typeof services_collection_pb.CalcChargeResponse;
};

type collectionServiceHqCollectBill = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_collection_pb.HqCollectBillRequest;
  readonly responseType: typeof serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
};

type collectionServiceInfo = {
  readonly methodName: string;
  readonly service: typeof collectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_collectionmessages_pb.Empty;
  readonly responseType: typeof messages_collectionmessages_pb.ServiceInfo;
};

export class collectionService {
  static readonly serviceName: string;
  static readonly GetPaymentMethods: collectionServiceGetPaymentMethods;
  static readonly GetCashierBalance: collectionServiceGetCashierBalance;
  static readonly GetPaymentForHq: collectionServiceGetPaymentForHq;
  static readonly CalcCharge: collectionServiceCalcCharge;
  static readonly HqCollectBill: collectionServiceHqCollectBill;
  static readonly Info: collectionServiceInfo;
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

export class collectionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPaymentMethods(
    requestMessage: messages_collectionmessages_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.GetPaymentMethodsResponse|null) => void
  ): UnaryResponse;
  getPaymentMethods(
    requestMessage: messages_collectionmessages_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.GetPaymentMethodsResponse|null) => void
  ): UnaryResponse;
  getCashierBalance(
    requestMessage: services_collection_pb.GetCashierBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: serverhostmessages_collectionmessages_pb.CashierBalance|null) => void
  ): UnaryResponse;
  getCashierBalance(
    requestMessage: services_collection_pb.GetCashierBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: serverhostmessages_collectionmessages_pb.CashierBalance|null) => void
  ): UnaryResponse;
  getPaymentForHq(
    requestMessage: services_collection_pb.GetPaymentForHqRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.GetPaymentForHqResponse|null) => void
  ): UnaryResponse;
  getPaymentForHq(
    requestMessage: services_collection_pb.GetPaymentForHqRequest,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.GetPaymentForHqResponse|null) => void
  ): UnaryResponse;
  calcCharge(
    requestMessage: services_collection_pb.CalcChargeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_collection_pb.CalcChargeResponse|null) => void
  ): UnaryResponse;
  calcCharge(
    requestMessage: services_collection_pb.CalcChargeRequest,
    callback: (error: ServiceError|null, responseMessage: services_collection_pb.CalcChargeResponse|null) => void
  ): UnaryResponse;
  hqCollectBill(
    requestMessage: services_collection_pb.HqCollectBillRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: serverhostmessages_collectionmessages_pb.CollectionDestributionItem|null) => void
  ): UnaryResponse;
  hqCollectBill(
    requestMessage: services_collection_pb.HqCollectBillRequest,
    callback: (error: ServiceError|null, responseMessage: serverhostmessages_collectionmessages_pb.CollectionDestributionItem|null) => void
  ): UnaryResponse;
  info(
    requestMessage: messages_collectionmessages_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.ServiceInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: messages_collectionmessages_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: messages_collectionmessages_pb.ServiceInfo|null) => void
  ): UnaryResponse;
}

