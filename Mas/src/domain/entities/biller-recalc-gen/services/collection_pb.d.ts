// package: services
// file: services/collection.proto

import * as jspb from "google-protobuf";
import * as messages_collectionmessages_pb from "../messages/collectionmessages_pb";
import * as serverhostmessages_collectionmessages_pb from "../serverhostmessages/collectionmessages_pb";

export class GetCashierBalanceRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCashierBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCashierBalanceRequest): GetCashierBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCashierBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCashierBalanceRequest;
  static deserializeBinaryFromReader(message: GetCashierBalanceRequest, reader: jspb.BinaryReader): GetCashierBalanceRequest;
}

export namespace GetCashierBalanceRequest {
  export type AsObject = {
    custkey?: string,
  }
}

export class GetPaymentForHqRequest extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasSearchby(): boolean;
  clearSearchby(): void;
  getSearchby(): messages_collectionmessages_pb.SearchByMap[keyof messages_collectionmessages_pb.SearchByMap] | undefined;
  setSearchby(value: messages_collectionmessages_pb.SearchByMap[keyof messages_collectionmessages_pb.SearchByMap]): void;

  hasAlldata(): boolean;
  clearAlldata(): void;
  getAlldata(): boolean | undefined;
  setAlldata(value: boolean): void;

  hasOldone(): boolean;
  clearOldone(): void;
  getOldone(): boolean | undefined;
  setOldone(value: boolean): void;

  hasForquery(): boolean;
  clearForquery(): void;
  getForquery(): boolean | undefined;
  setForquery(value: boolean): void;

  hasOctober(): boolean;
  clearOctober(): void;
  getOctober(): boolean | undefined;
  setOctober(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentForHqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentForHqRequest): GetPaymentForHqRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentForHqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentForHqRequest;
  static deserializeBinaryFromReader(message: GetPaymentForHqRequest, reader: jspb.BinaryReader): GetPaymentForHqRequest;
}

export namespace GetPaymentForHqRequest {
  export type AsObject = {
    key?: string,
    searchby?: messages_collectionmessages_pb.SearchByMap[keyof messages_collectionmessages_pb.SearchByMap],
    alldata?: boolean,
    oldone?: boolean,
    forquery?: boolean,
    october?: boolean,
  }
}

export class CalcChargeRequest extends jspb.Message {
  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasPaymentmethod(): boolean;
  clearPaymentmethod(): void;
  getPaymentmethod(): number | undefined;
  setPaymentmethod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalcChargeRequest): CalcChargeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcChargeRequest;
  static deserializeBinaryFromReader(message: CalcChargeRequest, reader: jspb.BinaryReader): CalcChargeRequest;
}

export namespace CalcChargeRequest {
  export type AsObject = {
    amount?: number,
    paymentmethod?: number,
  }
}

export class CalcChargeResponse extends jspb.Message {
  clearAmountsList(): void;
  getAmountsList(): Array<number>;
  setAmountsList(value: Array<number>): void;
  addAmounts(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcChargeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalcChargeResponse): CalcChargeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcChargeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcChargeResponse;
  static deserializeBinaryFromReader(message: CalcChargeResponse, reader: jspb.BinaryReader): CalcChargeResponse;
}

export namespace CalcChargeResponse {
  export type AsObject = {
    amountsList: Array<number>,
  }
}

export class HqCollectBillRequest extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasLocked(): boolean;
  clearLocked(): void;
  getLocked(): boolean | undefined;
  setLocked(value: boolean): void;

  hasChequeno(): boolean;
  clearChequeno(): void;
  getChequeno(): string | undefined;
  setChequeno(value: string): void;

  hasChequebank(): boolean;
  clearChequebank(): void;
  getChequebank(): string | undefined;
  setChequebank(value: string): void;

  hasDiscount(): boolean;
  clearDiscount(): void;
  getDiscount(): number | undefined;
  setDiscount(value: number): void;

  hasDiscountdocumentno(): boolean;
  clearDiscountdocumentno(): void;
  getDiscountdocumentno(): string | undefined;
  setDiscountdocumentno(value: string): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasPaymentmethod(): boolean;
  clearPaymentmethod(): void;
  getPaymentmethod(): number | undefined;
  setPaymentmethod(value: number): void;

  hasTotalamountpayment(): boolean;
  clearTotalamountpayment(): void;
  getTotalamountpayment(): number | undefined;
  setTotalamountpayment(value: number): void;

  hasCharge1(): boolean;
  clearCharge1(): void;
  getCharge1(): number | undefined;
  setCharge1(value: number): void;

  hasCharge2(): boolean;
  clearCharge2(): void;
  getCharge2(): number | undefined;
  setCharge2(value: number): void;

  hasCharge3(): boolean;
  clearCharge3(): void;
  getCharge3(): number | undefined;
  setCharge3(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HqCollectBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HqCollectBillRequest): HqCollectBillRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HqCollectBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HqCollectBillRequest;
  static deserializeBinaryFromReader(message: HqCollectBillRequest, reader: jspb.BinaryReader): HqCollectBillRequest;
}

export namespace HqCollectBillRequest {
  export type AsObject = {
    paymentNo?: string,
    custkey?: string,
    locked?: boolean,
    chequeno?: string,
    chequebank?: string,
    discount?: number,
    discountdocumentno?: string,
    comment?: string,
    paymentmethod?: number,
    totalamountpayment?: number,
    charge1?: number,
    charge2?: number,
    charge3?: number,
  }
}

