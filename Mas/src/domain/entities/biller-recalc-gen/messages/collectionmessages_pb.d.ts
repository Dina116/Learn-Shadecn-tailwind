// package: messages
// file: messages/collectionmessages.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as dbmessages_collectionmessages_pb from "../dbmessages/collectionmessages_pb";
import * as serverhostmessages_collectionmessages_pb from "../serverhostmessages/collectionmessages_pb";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ServiceInfo extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string | undefined;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfo): ServiceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfo;
  static deserializeBinaryFromReader(message: ServiceInfo, reader: jspb.BinaryReader): ServiceInfo;
}

export namespace ServiceInfo {
  export type AsObject = {
    name?: string,
    version?: string,
  }
}

export class MessageID extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageID.AsObject;
  static toObject(includeInstance: boolean, msg: MessageID): MessageID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageID;
  static deserializeBinaryFromReader(message: MessageID, reader: jspb.BinaryReader): MessageID;
}

export namespace MessageID {
  export type AsObject = {
    id?: number,
  }
}

export class ApplicationListRequest extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): number | undefined;
  setState(value: number): void;

  hasIncludeclose(): boolean;
  clearIncludeclose(): void;
  getIncludeclose(): boolean | undefined;
  setIncludeclose(value: boolean): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasApplicationtype(): boolean;
  clearApplicationtype(): void;
  getApplicationtype(): number | undefined;
  setApplicationtype(value: number): void;

  hasClientid(): boolean;
  clearClientid(): void;
  getClientid(): number | undefined;
  setClientid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationListRequest): ApplicationListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationListRequest;
  static deserializeBinaryFromReader(message: ApplicationListRequest, reader: jspb.BinaryReader): ApplicationListRequest;
}

export namespace ApplicationListRequest {
  export type AsObject = {
    state?: number,
    includeclose?: boolean,
    custkey?: string,
    applicationtype?: number,
    clientid?: number,
  }
}

export class ApplicationListResponse extends jspb.Message {
  clearCancelledbilllistList(): void;
  getCancelledbilllistList(): Array<dbmessages_collectionmessages_pb.CANCELLED_REQUEST>;
  setCancelledbilllistList(value: Array<dbmessages_collectionmessages_pb.CANCELLED_REQUEST>): void;
  addCancelledbilllist(value?: dbmessages_collectionmessages_pb.CANCELLED_REQUEST, index?: number): dbmessages_collectionmessages_pb.CANCELLED_REQUEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationListResponse): ApplicationListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationListResponse;
  static deserializeBinaryFromReader(message: ApplicationListResponse, reader: jspb.BinaryReader): ApplicationListResponse;
}

export namespace ApplicationListResponse {
  export type AsObject = {
    cancelledbilllistList: Array<dbmessages_collectionmessages_pb.CANCELLED_REQUEST.AsObject>,
  }
}

export class GetCustomerPaymentsRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentsRequest): GetCustomerPaymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentsRequest;
  static deserializeBinaryFromReader(message: GetCustomerPaymentsRequest, reader: jspb.BinaryReader): GetCustomerPaymentsRequest;
}

export namespace GetCustomerPaymentsRequest {
  export type AsObject = {
    custkey?: string,
    formNo?: number,
    applicationTypeId?: number,
  }
}

export class GetCustomerPaymentsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>;
  setItemsList(value: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>): void;
  addItems(value?: serverhostmessages_collectionmessages_pb.CollectionDestributionItem, index?: number): serverhostmessages_collectionmessages_pb.CollectionDestributionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentsResponse): GetCustomerPaymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentsResponse;
  static deserializeBinaryFromReader(message: GetCustomerPaymentsResponse, reader: jspb.BinaryReader): GetCustomerPaymentsResponse;
}

export namespace GetCustomerPaymentsResponse {
  export type AsObject = {
    itemsList: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem.AsObject>,
  }
}

export class SaveApplicationRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): dbmessages_collectionmessages_pb.CANCELLED_REQUEST;
  setRequest(value?: dbmessages_collectionmessages_pb.CANCELLED_REQUEST): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveApplicationRequest): SaveApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveApplicationRequest;
  static deserializeBinaryFromReader(message: SaveApplicationRequest, reader: jspb.BinaryReader): SaveApplicationRequest;
}

export namespace SaveApplicationRequest {
  export type AsObject = {
    request: dbmessages_collectionmessages_pb.CANCELLED_REQUEST.AsObject,
  }
}

export class MessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasSaveid(): boolean;
  clearSaveid(): void;
  getSaveid(): number | undefined;
  setSaveid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    message?: string,
    saveid?: number,
  }
}

export class ApplicationRequest extends jspb.Message {
  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRequest): ApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationRequest;
  static deserializeBinaryFromReader(message: ApplicationRequest, reader: jspb.BinaryReader): ApplicationRequest;
}

export namespace ApplicationRequest {
  export type AsObject = {
    formNo?: number,
    applicationTypeId?: number,
  }
}

export class ApplicationResponse extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): dbmessages_collectionmessages_pb.CANCELLED_REQUEST | undefined;
  setContent(value?: dbmessages_collectionmessages_pb.CANCELLED_REQUEST): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationResponse): ApplicationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationResponse;
  static deserializeBinaryFromReader(message: ApplicationResponse, reader: jspb.BinaryReader): ApplicationResponse;
}

export namespace ApplicationResponse {
  export type AsObject = {
    content?: dbmessages_collectionmessages_pb.CANCELLED_REQUEST.AsObject,
  }
}

export class ApplicationActionRequest extends jspb.Message {
  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): number | undefined;
  setAction(value: number): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasRequestComment(): boolean;
  clearRequestComment(): void;
  getRequestComment(): string | undefined;
  setRequestComment(value: string): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasTele(): boolean;
  clearTele(): void;
  getTele(): string | undefined;
  setTele(value: string): void;

  hasNid(): boolean;
  clearNid(): void;
  getNid(): string | undefined;
  setNid(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): boolean | undefined;
  setAgreement(value: boolean): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationActionRequest): ApplicationActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationActionRequest;
  static deserializeBinaryFromReader(message: ApplicationActionRequest, reader: jspb.BinaryReader): ApplicationActionRequest;
}

export namespace ApplicationActionRequest {
  export type AsObject = {
    formNo?: number,
    action?: number,
    comment?: string,
    requestComment?: string,
    applicationTypeId?: number,
    address?: string,
    tele?: string,
    nid?: string,
    email?: string,
    agreement?: boolean,
    cancelation?: boolean,
  }
}

export class ApplicationActionResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationActionResponse): ApplicationActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationActionResponse;
  static deserializeBinaryFromReader(message: ApplicationActionResponse, reader: jspb.BinaryReader): ApplicationActionResponse;
}

export namespace ApplicationActionResponse {
  export type AsObject = {
    message?: string,
  }
}

export class GetPaymentRequest extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasSkipbracodtrim(): boolean;
  clearSkipbracodtrim(): void;
  getSkipbracodtrim(): boolean | undefined;
  setSkipbracodtrim(value: boolean): void;

  hasForquery(): boolean;
  clearForquery(): void;
  getForquery(): boolean | undefined;
  setForquery(value: boolean): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentRequest): GetPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentRequest;
  static deserializeBinaryFromReader(message: GetPaymentRequest, reader: jspb.BinaryReader): GetPaymentRequest;
}

export namespace GetPaymentRequest {
  export type AsObject = {
    paymentNo?: string,
    custkey?: string,
    skipbracodtrim?: boolean,
    forquery?: boolean,
    cycleId?: number,
  }
}

export class GetPaymentResponse extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
  setItem(value?: serverhostmessages_collectionmessages_pb.CollectionDestributionItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentResponse): GetPaymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentResponse;
  static deserializeBinaryFromReader(message: GetPaymentResponse, reader: jspb.BinaryReader): GetPaymentResponse;
}

export namespace GetPaymentResponse {
  export type AsObject = {
    item: serverhostmessages_collectionmessages_pb.CollectionDestributionItem.AsObject,
  }
}

export class BillActionsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION>;
  setItemsList(value: Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION>): void;
  addItems(value?: dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION, index?: number): dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BillActionsResponse): BillActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillActionsResponse;
  static deserializeBinaryFromReader(message: BillActionsResponse, reader: jspb.BinaryReader): BillActionsResponse;
}

export namespace BillActionsResponse {
  export type AsObject = {
    itemsList: Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION.AsObject>,
  }
}

export class BillStatesResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE>;
  setItemsList(value: Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE>): void;
  addItems(value?: dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE, index?: number): dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BillStatesResponse): BillStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillStatesResponse;
  static deserializeBinaryFromReader(message: BillStatesResponse, reader: jspb.BinaryReader): BillStatesResponse;
}

export namespace BillStatesResponse {
  export type AsObject = {
    itemsList: Array<dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE.AsObject>,
  }
}

export class ApplicationsReportRequest extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): number | undefined;
  setState(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasRequestFrom(): boolean;
  clearRequestFrom(): void;
  getRequestFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRequestTo(): boolean;
  clearRequestTo(): void;
  getRequestTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampFrom(): boolean;
  clearStampFrom(): void;
  getStampFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampTo(): boolean;
  clearStampTo(): void;
  getStampTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): boolean | undefined;
  setAgreement(value: boolean): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationsReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationsReportRequest): ApplicationsReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationsReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationsReportRequest;
  static deserializeBinaryFromReader(message: ApplicationsReportRequest, reader: jspb.BinaryReader): ApplicationsReportRequest;
}

export namespace ApplicationsReportRequest {
  export type AsObject = {
    state?: number,
    custkey?: string,
    formNo?: number,
    requestFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requestTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stationNo?: number,
    applicationTypeId?: number,
    agreement?: boolean,
    cancelation?: boolean,
  }
}

export class ApplicationsReportResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>;
  setItemsList(value: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>): void;
  addItems(value?: serverhostmessages_collectionmessages_pb.CollectionDestributionItem, index?: number): serverhostmessages_collectionmessages_pb.CollectionDestributionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationsReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationsReportResponse): ApplicationsReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationsReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationsReportResponse;
  static deserializeBinaryFromReader(message: ApplicationsReportResponse, reader: jspb.BinaryReader): ApplicationsReportResponse;
}

export namespace ApplicationsReportResponse {
  export type AsObject = {
    itemsList: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem.AsObject>,
  }
}

export class GetStationsResponse extends jspb.Message {
  clearStationsList(): void;
  getStationsList(): Array<Station>;
  setStationsList(value: Array<Station>): void;
  addStations(value?: Station, index?: number): Station;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStationsResponse): GetStationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStationsResponse;
  static deserializeBinaryFromReader(message: GetStationsResponse, reader: jspb.BinaryReader): GetStationsResponse;
}

export namespace GetStationsResponse {
  export type AsObject = {
    stationsList: Array<Station.AsObject>,
  }
}

export class Station extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIshead(): boolean;
  clearIshead(): void;
  getIshead(): boolean | undefined;
  setIshead(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Station.AsObject;
  static toObject(includeInstance: boolean, msg: Station): Station.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Station, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Station;
  static deserializeBinaryFromReader(message: Station, reader: jspb.BinaryReader): Station;
}

export namespace Station {
  export type AsObject = {
    stationNo?: number,
    description?: string,
    ishead?: boolean,
  }
}

export class GetFormNoPaymentsRequest extends jspb.Message {
  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStampFrom(): boolean;
  clearStampFrom(): void;
  getStampFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampTo(): boolean;
  clearStampTo(): void;
  getStampTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReqFrom(): boolean;
  clearReqFrom(): void;
  getReqFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReqFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReqTo(): boolean;
  clearReqTo(): void;
  getReqTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReqTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasWitholdnewbills(): boolean;
  clearWitholdnewbills(): void;
  getWitholdnewbills(): boolean | undefined;
  setWitholdnewbills(value: boolean): void;

  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): boolean | undefined;
  setAgreement(value: boolean): void;

  hasTahselFrom(): boolean;
  clearTahselFrom(): void;
  getTahselFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTahselFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTahselTo(): boolean;
  clearTahselTo(): void;
  getTahselTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTahselTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFormNoPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFormNoPaymentsRequest): GetFormNoPaymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFormNoPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFormNoPaymentsRequest;
  static deserializeBinaryFromReader(message: GetFormNoPaymentsRequest, reader: jspb.BinaryReader): GetFormNoPaymentsRequest;
}

export namespace GetFormNoPaymentsRequest {
  export type AsObject = {
    formNo?: number,
    custkey?: string,
    stampFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reqFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reqTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    witholdnewbills?: boolean,
    stationno?: number,
    applicationTypeId?: number,
    agreement?: boolean,
    tahselFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tahselTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelation?: boolean,
  }
}

export class ReportPayment extends jspb.Message {
  hasReport(): boolean;
  clearReport(): void;
  getReport(): Uint8Array | string;
  getReport_asU8(): Uint8Array;
  getReport_asB64(): string;
  setReport(value: Uint8Array | string): void;

  hasTotalcount(): boolean;
  clearTotalcount(): void;
  getTotalcount(): number | undefined;
  setTotalcount(value: number): void;

  hasSeq(): boolean;
  clearSeq(): void;
  getSeq(): number | undefined;
  setSeq(value: number): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPayment): ReportPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPayment;
  static deserializeBinaryFromReader(message: ReportPayment, reader: jspb.BinaryReader): ReportPayment;
}

export namespace ReportPayment {
  export type AsObject = {
    report: Uint8Array | string,
    totalcount?: number,
    seq?: number,
    ext?: string,
  }
}

export class GetFormNoPaymentsResponse extends jspb.Message {
  clearFormsList(): void;
  getFormsList(): Array<GetFormNoPaymentsResponseItem>;
  setFormsList(value: Array<GetFormNoPaymentsResponseItem>): void;
  addForms(value?: GetFormNoPaymentsResponseItem, index?: number): GetFormNoPaymentsResponseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFormNoPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFormNoPaymentsResponse): GetFormNoPaymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFormNoPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFormNoPaymentsResponse;
  static deserializeBinaryFromReader(message: GetFormNoPaymentsResponse, reader: jspb.BinaryReader): GetFormNoPaymentsResponse;
}

export namespace GetFormNoPaymentsResponse {
  export type AsObject = {
    formsList: Array<GetFormNoPaymentsResponseItem.AsObject>,
  }
}

export class GetFormNoPaymentsResponseItem extends jspb.Message {
  hasFormno(): boolean;
  clearFormno(): void;
  getFormno(): number | undefined;
  setFormno(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasRequestDate(): boolean;
  clearRequestDate(): void;
  getRequestDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastDate(): boolean;
  clearLastDate(): void;
  getLastDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCountpayments(): boolean;
  clearCountpayments(): void;
  getCountpayments(): number | undefined;
  setCountpayments(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<serverhostmessages_collectionmessages_pb.OldNewItem>;
  setItemsList(value: Array<serverhostmessages_collectionmessages_pb.OldNewItem>): void;
  addItems(value?: serverhostmessages_collectionmessages_pb.OldNewItem, index?: number): serverhostmessages_collectionmessages_pb.OldNewItem;

  hasStationname(): boolean;
  clearStationname(): void;
  getStationname(): string | undefined;
  setStationname(value: string): void;

  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): number | undefined;
  setStatus(value: number): void;

  hasStatusname(): boolean;
  clearStatusname(): void;
  getStatusname(): string | undefined;
  setStatusname(value: string): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  hasRequestComment(): boolean;
  clearRequestComment(): void;
  getRequestComment(): string | undefined;
  setRequestComment(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasTele(): boolean;
  clearTele(): void;
  getTele(): string | undefined;
  setTele(value: string): void;

  hasNid(): boolean;
  clearNid(): void;
  getNid(): string | undefined;
  setNid(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  hasAgreement(): boolean;
  clearAgreement(): void;
  getAgreement(): boolean | undefined;
  setAgreement(value: boolean): void;

  hasActionComment(): boolean;
  clearActionComment(): void;
  getActionComment(): string | undefined;
  setActionComment(value: string): void;

  hasTahselDate(): boolean;
  clearTahselDate(): void;
  getTahselDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTahselDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFormNoPaymentsResponseItem.AsObject;
  static toObject(includeInstance: boolean, msg: GetFormNoPaymentsResponseItem): GetFormNoPaymentsResponseItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFormNoPaymentsResponseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFormNoPaymentsResponseItem;
  static deserializeBinaryFromReader(message: GetFormNoPaymentsResponseItem, reader: jspb.BinaryReader): GetFormNoPaymentsResponseItem;
}

export namespace GetFormNoPaymentsResponseItem {
  export type AsObject = {
    formno?: number,
    custkey?: string,
    documentNo?: string,
    requestDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    countpayments?: number,
    itemsList: Array<serverhostmessages_collectionmessages_pb.OldNewItem.AsObject>,
    stationname?: string,
    stationno?: number,
    status?: number,
    statusname?: string,
    applicationTypeId?: number,
    requestComment?: string,
    address?: string,
    tele?: string,
    nid?: string,
    email?: string,
    agreement?: boolean,
    actionComment?: string,
    tahselDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelation?: boolean,
  }
}

export class ApplicationTypesRs extends jspb.Message {
  clearApplicationtypesList(): void;
  getApplicationtypesList(): Array<dbmessages_collectionmessages_pb.ApplicationType>;
  setApplicationtypesList(value: Array<dbmessages_collectionmessages_pb.ApplicationType>): void;
  addApplicationtypes(value?: dbmessages_collectionmessages_pb.ApplicationType, index?: number): dbmessages_collectionmessages_pb.ApplicationType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationTypesRs.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationTypesRs): ApplicationTypesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationTypesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationTypesRs;
  static deserializeBinaryFromReader(message: ApplicationTypesRs, reader: jspb.BinaryReader): ApplicationTypesRs;
}

export namespace ApplicationTypesRs {
  export type AsObject = {
    applicationtypesList: Array<dbmessages_collectionmessages_pb.ApplicationType.AsObject>,
  }
}

export class SaveApplicationTypeRequest extends jspb.Message {
  hasApplicationtypes(): boolean;
  clearApplicationtypes(): void;
  getApplicationtypes(): dbmessages_collectionmessages_pb.ApplicationType | undefined;
  setApplicationtypes(value?: dbmessages_collectionmessages_pb.ApplicationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveApplicationTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveApplicationTypeRequest): SaveApplicationTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveApplicationTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveApplicationTypeRequest;
  static deserializeBinaryFromReader(message: SaveApplicationTypeRequest, reader: jspb.BinaryReader): SaveApplicationTypeRequest;
}

export namespace SaveApplicationTypeRequest {
  export type AsObject = {
    applicationtypes?: dbmessages_collectionmessages_pb.ApplicationType.AsObject,
  }
}

export class GetUsersRequest extends jspb.Message {
  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): number | undefined;
  setUserid(value: number): void;

  hasWithlogo(): boolean;
  clearWithlogo(): void;
  getWithlogo(): boolean | undefined;
  setWithlogo(value: boolean): void;

  hasWithroles(): boolean;
  clearWithroles(): void;
  getWithroles(): boolean | undefined;
  setWithroles(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
  static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
  export type AsObject = {
    userid?: number,
    withlogo?: boolean,
    withroles?: boolean,
  }
}

export class GetUserListResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<GetUserResponse>;
  setUsersList(value: Array<GetUserResponse>): void;
  addUsers(value?: GetUserResponse, index?: number): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserListResponse): GetUserListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserListResponse;
  static deserializeBinaryFromReader(message: GetUserListResponse, reader: jspb.BinaryReader): GetUserListResponse;
}

export namespace GetUserListResponse {
  export type AsObject = {
    usersList: Array<GetUserResponse.AsObject>,
  }
}

export class GetUserResponse extends jspb.Message {
  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): number | undefined;
  setUserid(value: number): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  hasStationmo(): boolean;
  clearStationmo(): void;
  getStationmo(): number | undefined;
  setStationmo(value: number): void;

  hasStationname(): boolean;
  clearStationname(): void;
  getStationname(): string | undefined;
  setStationname(value: string): void;

  hasCompanyname(): boolean;
  clearCompanyname(): void;
  getCompanyname(): string | undefined;
  setCompanyname(value: string): void;

  hasCompanylogo(): boolean;
  clearCompanylogo(): void;
  getCompanylogo(): string | undefined;
  setCompanylogo(value: string): void;

  hasDepartmentid(): boolean;
  clearDepartmentid(): void;
  getDepartmentid(): number | undefined;
  setDepartmentid(value: number): void;

  hasDepartmentname(): boolean;
  clearDepartmentname(): void;
  getDepartmentname(): string | undefined;
  setDepartmentname(value: string): void;

  clearApplicationTypeRolesList(): void;
  getApplicationTypeRolesList(): Array<ApplicationTypeRole>;
  setApplicationTypeRolesList(value: Array<ApplicationTypeRole>): void;
  addApplicationTypeRoles(value?: ApplicationTypeRole, index?: number): ApplicationTypeRole;

  hasUserprivcy(): boolean;
  clearUserprivcy(): void;
  getUserprivcy(): UserPrivcy | undefined;
  setUserprivcy(value?: UserPrivcy): void;

  hasUserfullname(): boolean;
  clearUserfullname(): void;
  getUserfullname(): string | undefined;
  setUserfullname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    userid?: number,
    username?: string,
    stationmo?: number,
    stationname?: string,
    companyname?: string,
    companylogo?: string,
    departmentid?: number,
    departmentname?: string,
    applicationTypeRolesList: Array<ApplicationTypeRole.AsObject>,
    userprivcy?: UserPrivcy.AsObject,
    userfullname?: string,
  }
}

export class UserPrivcy extends jspb.Message {
  hasDeleteapplication(): boolean;
  clearDeleteapplication(): void;
  getDeleteapplication(): boolean | undefined;
  setDeleteapplication(value: boolean): void;

  hasBiller(): boolean;
  clearBiller(): void;
  getBiller(): boolean | undefined;
  setBiller(value: boolean): void;

  hasCreateapplication(): boolean;
  clearCreateapplication(): void;
  getCreateapplication(): boolean | undefined;
  setCreateapplication(value: boolean): void;

  hasEditapplication(): boolean;
  clearEditapplication(): void;
  getEditapplication(): boolean | undefined;
  setEditapplication(value: boolean): void;

  hasCancelapplication(): boolean;
  clearCancelapplication(): void;
  getCancelapplication(): boolean | undefined;
  setCancelapplication(value: boolean): void;

  hasSysAdmin(): boolean;
  clearSysAdmin(): void;
  getSysAdmin(): boolean | undefined;
  setSysAdmin(value: boolean): void;

  hasUserManagement(): boolean;
  clearUserManagement(): void;
  getUserManagement(): boolean | undefined;
  setUserManagement(value: boolean): void;

  hasCustMod(): boolean;
  clearCustMod(): void;
  getCustMod(): boolean | undefined;
  setCustMod(value: boolean): void;

  hasReportMod(): boolean;
  clearReportMod(): void;
  getReportMod(): boolean | undefined;
  setReportMod(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPrivcy.AsObject;
  static toObject(includeInstance: boolean, msg: UserPrivcy): UserPrivcy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPrivcy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPrivcy;
  static deserializeBinaryFromReader(message: UserPrivcy, reader: jspb.BinaryReader): UserPrivcy;
}

export namespace UserPrivcy {
  export type AsObject = {
    deleteapplication?: boolean,
    biller?: boolean,
    createapplication?: boolean,
    editapplication?: boolean,
    cancelapplication?: boolean,
    sysAdmin?: boolean,
    userManagement?: boolean,
    custMod?: boolean,
    reportMod?: boolean,
  }
}

export class ApplicationTypeRole extends jspb.Message {
  clearApplicationRolesList(): void;
  getApplicationRolesList(): Array<ApplicationRoleState>;
  setApplicationRolesList(value: Array<ApplicationRoleState>): void;
  addApplicationRoles(value?: ApplicationRoleState, index?: number): ApplicationRoleState;

  hasApplicationtypeid(): boolean;
  clearApplicationtypeid(): void;
  getApplicationtypeid(): number | undefined;
  setApplicationtypeid(value: number): void;

  hasApplicationtypename(): boolean;
  clearApplicationtypename(): void;
  getApplicationtypename(): string | undefined;
  setApplicationtypename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationTypeRole.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationTypeRole): ApplicationTypeRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationTypeRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationTypeRole;
  static deserializeBinaryFromReader(message: ApplicationTypeRole, reader: jspb.BinaryReader): ApplicationTypeRole;
}

export namespace ApplicationTypeRole {
  export type AsObject = {
    applicationRolesList: Array<ApplicationRoleState.AsObject>,
    applicationtypeid?: number,
    applicationtypename?: string,
  }
}

export class ApplicationRoleState extends jspb.Message {
  clearStateRolesList(): void;
  getStateRolesList(): Array<ApplicationRole>;
  setStateRolesList(value: Array<ApplicationRole>): void;
  addStateRoles(value?: ApplicationRole, index?: number): ApplicationRole;

  hasStateid(): boolean;
  clearStateid(): void;
  getStateid(): number | undefined;
  setStateid(value: number): void;

  hasStatename(): boolean;
  clearStatename(): void;
  getStatename(): string | undefined;
  setStatename(value: string): void;

  hasApplicationtypeid(): boolean;
  clearApplicationtypeid(): void;
  getApplicationtypeid(): number | undefined;
  setApplicationtypeid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRoleState.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRoleState): ApplicationRoleState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationRoleState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationRoleState;
  static deserializeBinaryFromReader(message: ApplicationRoleState, reader: jspb.BinaryReader): ApplicationRoleState;
}

export namespace ApplicationRoleState {
  export type AsObject = {
    stateRolesList: Array<ApplicationRole.AsObject>,
    stateid?: number,
    statename?: string,
    applicationtypeid?: number,
  }
}

export class ApplicationRole extends jspb.Message {
  hasActionid(): boolean;
  clearActionid(): void;
  getActionid(): number | undefined;
  setActionid(value: number): void;

  hasActionname(): boolean;
  clearActionname(): void;
  getActionname(): string | undefined;
  setActionname(value: string): void;

  hasActiondone(): boolean;
  clearActiondone(): void;
  getActiondone(): boolean | undefined;
  setActiondone(value: boolean): void;

  hasActionview(): boolean;
  clearActionview(): void;
  getActionview(): ActionViewMap[keyof ActionViewMap] | undefined;
  setActionview(value: ActionViewMap[keyof ActionViewMap]): void;

  hasActionduration(): boolean;
  clearActionduration(): void;
  getActionduration(): number | undefined;
  setActionduration(value: number): void;

  hasActionDurationType(): boolean;
  clearActionDurationType(): void;
  getActionDurationType(): dbmessages_collectionmessages_pb.DurationTypeMap[keyof dbmessages_collectionmessages_pb.DurationTypeMap] | undefined;
  setActionDurationType(value: dbmessages_collectionmessages_pb.DurationTypeMap[keyof dbmessages_collectionmessages_pb.DurationTypeMap]): void;

  hasStateid(): boolean;
  clearStateid(): void;
  getStateid(): number | undefined;
  setStateid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRole.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRole): ApplicationRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationRole;
  static deserializeBinaryFromReader(message: ApplicationRole, reader: jspb.BinaryReader): ApplicationRole;
}

export namespace ApplicationRole {
  export type AsObject = {
    actionid?: number,
    actionname?: string,
    actiondone?: boolean,
    actionview?: ActionViewMap[keyof ActionViewMap],
    actionduration?: number,
    actionDurationType?: dbmessages_collectionmessages_pb.DurationTypeMap[keyof dbmessages_collectionmessages_pb.DurationTypeMap],
    stateid?: number,
  }
}

export class CancelApplicationRequest extends jspb.Message {
  hasApplicationtypeid(): boolean;
  clearApplicationtypeid(): void;
  getApplicationtypeid(): number | undefined;
  setApplicationtypeid(value: number): void;

  hasFormno(): boolean;
  clearFormno(): void;
  getFormno(): number | undefined;
  setFormno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelApplicationRequest): CancelApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelApplicationRequest;
  static deserializeBinaryFromReader(message: CancelApplicationRequest, reader: jspb.BinaryReader): CancelApplicationRequest;
}

export namespace CancelApplicationRequest {
  export type AsObject = {
    applicationtypeid?: number,
    formno?: number,
  }
}

export class GetPaymentMethodsResponse extends jspb.Message {
  clearMethodslistList(): void;
  getMethodslistList(): Array<dbmessages_collectionmessages_pb.PAYMENT_METHOD>;
  setMethodslistList(value: Array<dbmessages_collectionmessages_pb.PAYMENT_METHOD>): void;
  addMethodslist(value?: dbmessages_collectionmessages_pb.PAYMENT_METHOD, index?: number): dbmessages_collectionmessages_pb.PAYMENT_METHOD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsResponse): GetPaymentMethodsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsResponse;
  static deserializeBinaryFromReader(message: GetPaymentMethodsResponse, reader: jspb.BinaryReader): GetPaymentMethodsResponse;
}

export namespace GetPaymentMethodsResponse {
  export type AsObject = {
    methodslistList: Array<dbmessages_collectionmessages_pb.PAYMENT_METHOD.AsObject>,
  }
}

export class SearchItem extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasAmountCollected(): boolean;
  clearAmountCollected(): void;
  getAmountCollected(): number | undefined;
  setAmountCollected(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  clearBillsList(): void;
  getBillsList(): Array<dbmessages_collectionmessages_pb.BILL>;
  setBillsList(value: Array<dbmessages_collectionmessages_pb.BILL>): void;
  addBills(value?: dbmessages_collectionmessages_pb.BILL, index?: number): dbmessages_collectionmessages_pb.BILL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchItem.AsObject;
  static toObject(includeInstance: boolean, msg: SearchItem): SearchItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchItem;
  static deserializeBinaryFromReader(message: SearchItem, reader: jspb.BinaryReader): SearchItem;
}

export namespace SearchItem {
  export type AsObject = {
    custkey?: string,
    surname?: string,
    oldKey?: string,
    propRef?: string,
    address?: string,
    meterRef?: string,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    amountCollected?: number,
    clBlnce?: number,
    billsList: Array<dbmessages_collectionmessages_pb.BILL.AsObject>,
  }
}

export class SearchResult extends jspb.Message {
  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<SearchItem>;
  setItemsList(value: Array<SearchItem>): void;
  addItems(value?: SearchItem, index?: number): SearchItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResult): SearchResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResult;
  static deserializeBinaryFromReader(message: SearchResult, reader: jspb.BinaryReader): SearchResult;
}

export namespace SearchResult {
  export type AsObject = {
    count?: number,
    itemsList: Array<SearchItem.AsObject>,
  }
}

export class SearchRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasSearchby(): boolean;
  clearSearchby(): void;
  getSearchby(): SearchByMap[keyof SearchByMap] | undefined;
  setSearchby(value: SearchByMap[keyof SearchByMap]): void;

  hasBillgroupcode(): boolean;
  clearBillgroupcode(): void;
  getBillgroupcode(): string | undefined;
  setBillgroupcode(value: string): void;

  hasCustomerbookcode(): boolean;
  clearCustomerbookcode(): void;
  getCustomerbookcode(): string | undefined;
  setCustomerbookcode(value: string): void;

  hasSearchfilter(): boolean;
  clearSearchfilter(): void;
  getSearchfilter(): SearchFilterMap[keyof SearchFilterMap] | undefined;
  setSearchfilter(value: SearchFilterMap[keyof SearchFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    key?: string,
    searchby?: SearchByMap[keyof SearchByMap],
    billgroupcode?: string,
    customerbookcode?: string,
    searchfilter?: SearchFilterMap[keyof SearchFilterMap],
  }
}

export class GETRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GETRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GETRequest): GETRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GETRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GETRequest;
  static deserializeBinaryFromReader(message: GETRequest, reader: jspb.BinaryReader): GETRequest;
}

export namespace GETRequest {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
  }
}

export class ListBillsRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBillsRequest): ListBillsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBillsRequest;
  static deserializeBinaryFromReader(message: ListBillsRequest, reader: jspb.BinaryReader): ListBillsRequest;
}

export namespace ListBillsRequest {
  export type AsObject = {
    custkey?: string,
  }
}

export class GetFromBilngRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFromBilngRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFromBilngRequest): GetFromBilngRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFromBilngRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFromBilngRequest;
  static deserializeBinaryFromReader(message: GetFromBilngRequest, reader: jspb.BinaryReader): GetFromBilngRequest;
}

export namespace GetFromBilngRequest {
  export type AsObject = {
    custkey?: string,
  }
}

export class CustomerInfo extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasPrevCustkey(): boolean;
  clearPrevCustkey(): void;
  getPrevCustkey(): string | undefined;
  setPrevCustkey(value: string): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasPropinfo(): boolean;
  clearPropinfo(): void;
  getPropinfo(): serverhostmessages_collectionmessages_pb.PropInfo | undefined;
  setPropinfo(value?: serverhostmessages_collectionmessages_pb.PropInfo): void;

  clearAgreemsList(): void;
  getAgreemsList(): Array<serverhostmessages_collectionmessages_pb.CustAgreem>;
  setAgreemsList(value: Array<serverhostmessages_collectionmessages_pb.CustAgreem>): void;
  addAgreems(value?: serverhostmessages_collectionmessages_pb.CustAgreem, index?: number): serverhostmessages_collectionmessages_pb.CustAgreem;

  clearStatmentsList(): void;
  getStatmentsList(): Array<serverhostmessages_collectionmessages_pb.STATMENT>;
  setStatmentsList(value: Array<serverhostmessages_collectionmessages_pb.STATMENT>): void;
  addStatments(value?: serverhostmessages_collectionmessages_pb.STATMENT, index?: number): serverhostmessages_collectionmessages_pb.STATMENT;

  clearAllTransactionsList(): void;
  getAllTransactionsList(): Array<serverhostmessages_collectionmessages_pb.F_TRANSACTION>;
  setAllTransactionsList(value: Array<serverhostmessages_collectionmessages_pb.F_TRANSACTION>): void;
  addAllTransactions(value?: serverhostmessages_collectionmessages_pb.F_TRANSACTION, index?: number): serverhostmessages_collectionmessages_pb.F_TRANSACTION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInfo): CustomerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInfo;
  static deserializeBinaryFromReader(message: CustomerInfo, reader: jspb.BinaryReader): CustomerInfo;
}

export namespace CustomerInfo {
  export type AsObject = {
    custkey?: string,
    propRef?: string,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    seqNo?: number,
    prevCustkey?: string,
    oldKey?: string,
    surname?: string,
    address?: string,
    propinfo?: serverhostmessages_collectionmessages_pb.PropInfo.AsObject,
    agreemsList: Array<serverhostmessages_collectionmessages_pb.CustAgreem.AsObject>,
    statmentsList: Array<serverhostmessages_collectionmessages_pb.STATMENT.AsObject>,
    allTransactionsList: Array<serverhostmessages_collectionmessages_pb.F_TRANSACTION.AsObject>,
  }
}

export class GetPaymentForHqResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>;
  setItemsList(value: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem>): void;
  addItems(value?: serverhostmessages_collectionmessages_pb.CollectionDestributionItem, index?: number): serverhostmessages_collectionmessages_pb.CollectionDestributionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentForHqResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentForHqResponse): GetPaymentForHqResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentForHqResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentForHqResponse;
  static deserializeBinaryFromReader(message: GetPaymentForHqResponse, reader: jspb.BinaryReader): GetPaymentForHqResponse;
}

export namespace GetPaymentForHqResponse {
  export type AsObject = {
    itemsList: Array<serverhostmessages_collectionmessages_pb.CollectionDestributionItem.AsObject>,
  }
}

export class GetPaymentActionsRequest extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentActionsRequest): GetPaymentActionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentActionsRequest;
  static deserializeBinaryFromReader(message: GetPaymentActionsRequest, reader: jspb.BinaryReader): GetPaymentActionsRequest;
}

export namespace GetPaymentActionsRequest {
  export type AsObject = {
    paymentNo?: string,
    formNo?: number,
    applicationTypeId?: number,
  }
}

export class GetPaymentActionsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION>;
  setItemsList(value: Array<dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION>): void;
  addItems(value?: dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION, index?: number): dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION;

  hasBillComment(): boolean;
  clearBillComment(): void;
  getBillComment(): string | undefined;
  setBillComment(value: string): void;

  hasRequestComment(): boolean;
  clearRequestComment(): void;
  getRequestComment(): string | undefined;
  setRequestComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentActionsResponse): GetPaymentActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentActionsResponse;
  static deserializeBinaryFromReader(message: GetPaymentActionsResponse, reader: jspb.BinaryReader): GetPaymentActionsResponse;
}

export namespace GetPaymentActionsResponse {
  export type AsObject = {
    itemsList: Array<dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION.AsObject>,
    billComment?: string,
    requestComment?: string,
  }
}

export class GetCustomerBooksRequest extends jspb.Message {
  hasBillgroupcode(): boolean;
  clearBillgroupcode(): void;
  getBillgroupcode(): string | undefined;
  setBillgroupcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerBooksRequest): GetCustomerBooksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerBooksRequest;
  static deserializeBinaryFromReader(message: GetCustomerBooksRequest, reader: jspb.BinaryReader): GetCustomerBooksRequest;
}

export namespace GetCustomerBooksRequest {
  export type AsObject = {
    billgroupcode?: string,
  }
}

export class LookUpMessage extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<LookUpItem>;
  setItemsList(value: Array<LookUpItem>): void;
  addItems(value?: LookUpItem, index?: number): LookUpItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUpMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LookUpMessage): LookUpMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookUpMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookUpMessage;
  static deserializeBinaryFromReader(message: LookUpMessage, reader: jspb.BinaryReader): LookUpMessage;
}

export namespace LookUpMessage {
  export type AsObject = {
    itemsList: Array<LookUpItem.AsObject>,
  }
}

export class LookUpItem extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUpItem.AsObject;
  static toObject(includeInstance: boolean, msg: LookUpItem): LookUpItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookUpItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookUpItem;
  static deserializeBinaryFromReader(message: LookUpItem, reader: jspb.BinaryReader): LookUpItem;
}

export namespace LookUpItem {
  export type AsObject = {
    code?: string,
    description?: string,
  }
}

export class GetCustomerDetailRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerDetailRequest): GetCustomerDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerDetailRequest;
  static deserializeBinaryFromReader(message: GetCustomerDetailRequest, reader: jspb.BinaryReader): GetCustomerDetailRequest;
}

export namespace GetCustomerDetailRequest {
  export type AsObject = {
    custkey?: string,
  }
}

export class GetCustomerDetailResponse extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasStationName(): boolean;
  clearStationName(): void;
  getStationName(): string | undefined;
  setStationName(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerDetailResponse): GetCustomerDetailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerDetailResponse;
  static deserializeBinaryFromReader(message: GetCustomerDetailResponse, reader: jspb.BinaryReader): GetCustomerDetailResponse;
}

export namespace GetCustomerDetailResponse {
  export type AsObject = {
    custkey?: string,
    name?: string,
    address?: string,
    stationNo?: number,
    stationName?: string,
    billgroup?: string,
  }
}

export class GategoryTypesRs extends jspb.Message {
  clearGategorytypesList(): void;
  getGategorytypesList(): Array<GategoryType>;
  setGategorytypesList(value: Array<GategoryType>): void;
  addGategorytypes(value?: GategoryType, index?: number): GategoryType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GategoryTypesRs.AsObject;
  static toObject(includeInstance: boolean, msg: GategoryTypesRs): GategoryTypesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GategoryTypesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GategoryTypesRs;
  static deserializeBinaryFromReader(message: GategoryTypesRs, reader: jspb.BinaryReader): GategoryTypesRs;
}

export namespace GategoryTypesRs {
  export type AsObject = {
    gategorytypesList: Array<GategoryType.AsObject>,
  }
}

export class GategoryType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIsTop(): boolean;
  clearIsTop(): void;
  getIsTop(): boolean | undefined;
  setIsTop(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GategoryType.AsObject;
  static toObject(includeInstance: boolean, msg: GategoryType): GategoryType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GategoryType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GategoryType;
  static deserializeBinaryFromReader(message: GategoryType, reader: jspb.BinaryReader): GategoryType;
}

export namespace GategoryType {
  export type AsObject = {
    id?: number,
    description?: string,
    isTop?: boolean,
  }
}

export class GetProductsRequest extends jspb.Message {
  hasProductCategoryId(): boolean;
  clearProductCategoryId(): void;
  getProductCategoryId(): number | undefined;
  setProductCategoryId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductsRequest): GetProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductsRequest;
  static deserializeBinaryFromReader(message: GetProductsRequest, reader: jspb.BinaryReader): GetProductsRequest;
}

export namespace GetProductsRequest {
  export type AsObject = {
    productCategoryId?: number,
  }
}

export class GetProductsResponse extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<dbmessages_collectionmessages_pb.PRODUCTS>;
  setProductsList(value: Array<dbmessages_collectionmessages_pb.PRODUCTS>): void;
  addProducts(value?: dbmessages_collectionmessages_pb.PRODUCTS, index?: number): dbmessages_collectionmessages_pb.PRODUCTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductsResponse): GetProductsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductsResponse;
  static deserializeBinaryFromReader(message: GetProductsResponse, reader: jspb.BinaryReader): GetProductsResponse;
}

export namespace GetProductsResponse {
  export type AsObject = {
    productsList: Array<dbmessages_collectionmessages_pb.PRODUCTS.AsObject>,
  }
}

export class GetCategoryProductResponse extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<dbmessages_collectionmessages_pb.PRODUCT_CATEGORY>;
  setCategoriesList(value: Array<dbmessages_collectionmessages_pb.PRODUCT_CATEGORY>): void;
  addCategories(value?: dbmessages_collectionmessages_pb.PRODUCT_CATEGORY, index?: number): dbmessages_collectionmessages_pb.PRODUCT_CATEGORY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryProductResponse): GetCategoryProductResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryProductResponse;
  static deserializeBinaryFromReader(message: GetCategoryProductResponse, reader: jspb.BinaryReader): GetCategoryProductResponse;
}

export namespace GetCategoryProductResponse {
  export type AsObject = {
    categoriesList: Array<dbmessages_collectionmessages_pb.PRODUCT_CATEGORY.AsObject>,
  }
}

export class GetMetaDataResponse extends jspb.Message {
  clearMetasList(): void;
  getMetasList(): Array<dbmessages_collectionmessages_pb.META_DATA>;
  setMetasList(value: Array<dbmessages_collectionmessages_pb.META_DATA>): void;
  addMetas(value?: dbmessages_collectionmessages_pb.META_DATA, index?: number): dbmessages_collectionmessages_pb.META_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetaDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetaDataResponse): GetMetaDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetaDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetaDataResponse;
  static deserializeBinaryFromReader(message: GetMetaDataResponse, reader: jspb.BinaryReader): GetMetaDataResponse;
}

export namespace GetMetaDataResponse {
  export type AsObject = {
    metasList: Array<dbmessages_collectionmessages_pb.META_DATA.AsObject>,
  }
}

export class GetDataSourceResponse extends jspb.Message {
  clearDatasourcesList(): void;
  getDatasourcesList(): Array<dbmessages_collectionmessages_pb.DATASOURCE>;
  setDatasourcesList(value: Array<dbmessages_collectionmessages_pb.DATASOURCE>): void;
  addDatasources(value?: dbmessages_collectionmessages_pb.DATASOURCE, index?: number): dbmessages_collectionmessages_pb.DATASOURCE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceResponse): GetDataSourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceResponse;
  static deserializeBinaryFromReader(message: GetDataSourceResponse, reader: jspb.BinaryReader): GetDataSourceResponse;
}

export namespace GetDataSourceResponse {
  export type AsObject = {
    datasourcesList: Array<dbmessages_collectionmessages_pb.DATASOURCE.AsObject>,
  }
}

export class GetDataSourceDetailRequest extends jspb.Message {
  hasDatasourceName(): boolean;
  clearDatasourceName(): void;
  getDatasourceName(): string | undefined;
  setDatasourceName(value: string): void;

  hasDetailParent(): boolean;
  clearDetailParent(): void;
  getDetailParent(): string | undefined;
  setDetailParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceDetailRequest): GetDataSourceDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataSourceDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceDetailRequest;
  static deserializeBinaryFromReader(message: GetDataSourceDetailRequest, reader: jspb.BinaryReader): GetDataSourceDetailRequest;
}

export namespace GetDataSourceDetailRequest {
  export type AsObject = {
    datasourceName?: string,
    detailParent?: string,
  }
}

export class GetDataSourceDetailResponse extends jspb.Message {
  clearDatasourceDetailsList(): void;
  getDatasourceDetailsList(): Array<dbmessages_collectionmessages_pb.DATASOURCE_DETAIL>;
  setDatasourceDetailsList(value: Array<dbmessages_collectionmessages_pb.DATASOURCE_DETAIL>): void;
  addDatasourceDetails(value?: dbmessages_collectionmessages_pb.DATASOURCE_DETAIL, index?: number): dbmessages_collectionmessages_pb.DATASOURCE_DETAIL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceDetailResponse): GetDataSourceDetailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDataSourceDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceDetailResponse;
  static deserializeBinaryFromReader(message: GetDataSourceDetailResponse, reader: jspb.BinaryReader): GetDataSourceDetailResponse;
}

export namespace GetDataSourceDetailResponse {
  export type AsObject = {
    datasourceDetailsList: Array<dbmessages_collectionmessages_pb.DATASOURCE_DETAIL.AsObject>,
  }
}

export class GategoryTypeID extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GategoryTypeID.AsObject;
  static toObject(includeInstance: boolean, msg: GategoryTypeID): GategoryTypeID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GategoryTypeID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GategoryTypeID;
  static deserializeBinaryFromReader(message: GategoryTypeID, reader: jspb.BinaryReader): GategoryTypeID;
}

export namespace GategoryTypeID {
  export type AsObject = {
    id?: number,
  }
}

export interface ActionViewMap {
  ONEVIEW: 1;
  TWOVIEW: 2;
  THREEVIEW: 3;
  NOVIEW: 0;
}

export const ActionView: ActionViewMap;

export interface SearchFilterMap {
  EQUAL: 0;
  CONTAIN: 1;
  START_WITH: 2;
  END_WITH: 3;
}

export const SearchFilter: SearchFilterMap;

export interface SearchByMap {
  CUSTKEY: 0;
  PAYMENT_NO: 1;
  OLD_KEY: 2;
  METER_REF: 3;
  PROP_REF: 4;
  SURNAME: 5;
  ADDRESS: 6;
}

export const SearchBy: SearchByMap;

export interface BILLING_ISSUE_TYPEMap {
  UNDEFINED: -1;
  ACCUMLATED: 0;
  SINGLE: 1;
}

export const BILLING_ISSUE_TYPE: BILLING_ISSUE_TYPEMap;

