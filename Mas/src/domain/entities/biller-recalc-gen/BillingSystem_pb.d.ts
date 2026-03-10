// package: BillingRepositorySys
// file: BillingSystem.proto

import * as jspb from "google-protobuf";
import * as date_pb from "./date_pb";
import * as mas_messages_pb from "./mas-messages_pb";

export class EMPTY extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMPTY.AsObject;
  static toObject(includeInstance: boolean, msg: EMPTY): EMPTY.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EMPTY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMPTY;
  static deserializeBinaryFromReader(message: EMPTY, reader: jspb.BinaryReader): EMPTY;
}

export namespace EMPTY {
  export type AsObject = {
  }
}

export class IsCollectedRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCollectedRq.AsObject;
  static toObject(includeInstance: boolean, msg: IsCollectedRq): IsCollectedRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsCollectedRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCollectedRq;
  static deserializeBinaryFromReader(message: IsCollectedRq, reader: jspb.BinaryReader): IsCollectedRq;
}

export namespace IsCollectedRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    paymentNo?: string,
  }
}

export class IsCollectedRs extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): boolean | undefined;
  setMsg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCollectedRs.AsObject;
  static toObject(includeInstance: boolean, msg: IsCollectedRs): IsCollectedRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsCollectedRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCollectedRs;
  static deserializeBinaryFromReader(message: IsCollectedRs, reader: jspb.BinaryReader): IsCollectedRs;
}

export namespace IsCollectedRs {
  export type AsObject = {
    msg?: boolean,
  }
}

export class GetAccessCodesRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessCodesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessCodesRq): GetAccessCodesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessCodesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessCodesRq;
  static deserializeBinaryFromReader(message: GetAccessCodesRq, reader: jspb.BinaryReader): GetAccessCodesRq;
}

export namespace GetAccessCodesRq {
  export type AsObject = {
  }
}

export class GetAccessCodesRs extends jspb.Message {
  clearLuaccesscodeList(): void;
  getLuaccesscodeList(): Array<LuAccessCodes>;
  setLuaccesscodeList(value: Array<LuAccessCodes>): void;
  addLuaccesscode(value?: LuAccessCodes, index?: number): LuAccessCodes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessCodesRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessCodesRs): GetAccessCodesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessCodesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessCodesRs;
  static deserializeBinaryFromReader(message: GetAccessCodesRs, reader: jspb.BinaryReader): GetAccessCodesRs;
}

export namespace GetAccessCodesRs {
  export type AsObject = {
    luaccesscodeList: Array<LuAccessCodes.AsObject>,
  }
}

export class LuAccessCodes extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number | undefined;
  setCode(value: number): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): number | undefined;
  setAction(value: number): void;

  hasActionMsg(): boolean;
  clearActionMsg(): void;
  getActionMsg(): string | undefined;
  setActionMsg(value: string): void;

  hasMeterOpStatus(): boolean;
  clearMeterOpStatus(): void;
  getMeterOpStatus(): number | undefined;
  setMeterOpStatus(value: number): void;

  hasMeterCondition(): boolean;
  clearMeterCondition(): void;
  getMeterCondition(): string | undefined;
  setMeterCondition(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuAccessCodes.AsObject;
  static toObject(includeInstance: boolean, msg: LuAccessCodes): LuAccessCodes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuAccessCodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuAccessCodes;
  static deserializeBinaryFromReader(message: LuAccessCodes, reader: jspb.BinaryReader): LuAccessCodes;
}

export namespace LuAccessCodes {
  export type AsObject = {
    code?: number,
    describe?: string,
    action?: number,
    actionMsg?: string,
    meterOpStatus?: number,
    meterCondition?: string,
  }
}

export class GetCurrentReadingCycleRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentReadingCycleRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentReadingCycleRq): GetCurrentReadingCycleRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentReadingCycleRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentReadingCycleRq;
  static deserializeBinaryFromReader(message: GetCurrentReadingCycleRq, reader: jspb.BinaryReader): GetCurrentReadingCycleRq;
}

export namespace GetCurrentReadingCycleRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
  }
}

export class GetCurrentReadingCycleWithDateRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): date_pb.MasDateTime;
  setBilngdate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentReadingCycleWithDateRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentReadingCycleWithDateRq): GetCurrentReadingCycleWithDateRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentReadingCycleWithDateRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentReadingCycleWithDateRq;
  static deserializeBinaryFromReader(message: GetCurrentReadingCycleWithDateRq, reader: jspb.BinaryReader): GetCurrentReadingCycleWithDateRq;
}

export namespace GetCurrentReadingCycleWithDateRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    bilngdate: date_pb.MasDateTime.AsObject,
  }
}

export class GetCurrentCollectionCycleRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentCollectionCycleRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentCollectionCycleRq): GetCurrentCollectionCycleRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentCollectionCycleRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentCollectionCycleRq;
  static deserializeBinaryFromReader(message: GetCurrentCollectionCycleRq, reader: jspb.BinaryReader): GetCurrentCollectionCycleRq;
}

export namespace GetCurrentCollectionCycleRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
  }
}

export class GetReadingCycleRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadingCycleRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadingCycleRq): GetReadingCycleRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadingCycleRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadingCycleRq;
  static deserializeBinaryFromReader(message: GetReadingCycleRq, reader: jspb.BinaryReader): GetReadingCycleRq;
}

export namespace GetReadingCycleRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleid?: number,
  }
}

export class GetCollectionCycleRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionCycleRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionCycleRq): GetCollectionCycleRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionCycleRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionCycleRq;
  static deserializeBinaryFromReader(message: GetCollectionCycleRq, reader: jspb.BinaryReader): GetCollectionCycleRq;
}

export namespace GetCollectionCycleRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleid?: number,
  }
}

export class Cycle extends jspb.Message {
  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasReadingcycleid(): boolean;
  clearReadingcycleid(): void;
  getReadingcycleid(): number | undefined;
  setReadingcycleid(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilingdate(): boolean;
  clearBilingdate(): void;
  getBilingdate(): date_pb.MasDateTime;
  setBilingdate(value?: date_pb.MasDateTime): void;

  hasReadingbilingdate(): boolean;
  clearReadingbilingdate(): void;
  getReadingbilingdate(): date_pb.MasDateTime | undefined;
  setReadingbilingdate(value?: date_pb.MasDateTime): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIsreadingclosed(): boolean;
  clearIsreadingclosed(): void;
  getIsreadingclosed(): boolean | undefined;
  setIsreadingclosed(value: boolean): void;

  hasIscollectionclosed(): boolean;
  clearIscollectionclosed(): void;
  getIscollectionclosed(): boolean | undefined;
  setIscollectionclosed(value: boolean): void;

  hasIsclosed(): boolean;
  clearIsclosed(): void;
  getIsclosed(): boolean | undefined;
  setIsclosed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cycle.AsObject;
  static toObject(includeInstance: boolean, msg: Cycle): Cycle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cycle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cycle;
  static deserializeBinaryFromReader(message: Cycle, reader: jspb.BinaryReader): Cycle;
}

export namespace Cycle {
  export type AsObject = {
    cycleid?: number,
    readingcycleid?: number,
    billgroup?: string,
    bilingdate: date_pb.MasDateTime.AsObject,
    readingbilingdate?: date_pb.MasDateTime.AsObject,
    description?: string,
    isreadingclosed?: boolean,
    iscollectionclosed?: boolean,
    isclosed?: boolean,
  }
}

export class GetBillingSystemNameRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSystemNameRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSystemNameRq): GetBillingSystemNameRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSystemNameRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSystemNameRq;
  static deserializeBinaryFromReader(message: GetBillingSystemNameRq, reader: jspb.BinaryReader): GetBillingSystemNameRq;
}

export namespace GetBillingSystemNameRq {
  export type AsObject = {
  }
}

export class GetBillingSystemNameRs extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): string | undefined;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSystemNameRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSystemNameRs): GetBillingSystemNameRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSystemNameRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSystemNameRs;
  static deserializeBinaryFromReader(message: GetBillingSystemNameRs, reader: jspb.BinaryReader): GetBillingSystemNameRs;
}

export namespace GetBillingSystemNameRs {
  export type AsObject = {
    msg?: string,
  }
}

export class GetBillingSystemVersionRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSystemVersionRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSystemVersionRq): GetBillingSystemVersionRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSystemVersionRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSystemVersionRq;
  static deserializeBinaryFromReader(message: GetBillingSystemVersionRq, reader: jspb.BinaryReader): GetBillingSystemVersionRq;
}

export namespace GetBillingSystemVersionRq {
  export type AsObject = {
  }
}

export class GetBillingSystemVersionRs extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): string | undefined;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSystemVersionRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSystemVersionRs): GetBillingSystemVersionRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSystemVersionRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSystemVersionRs;
  static deserializeBinaryFromReader(message: GetBillingSystemVersionRs, reader: jspb.BinaryReader): GetBillingSystemVersionRs;
}

export namespace GetBillingSystemVersionRs {
  export type AsObject = {
    msg?: string,
  }
}

export class StatusRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRq.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRq): StatusRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRq;
  static deserializeBinaryFromReader(message: StatusRq, reader: jspb.BinaryReader): StatusRq;
}

export namespace StatusRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class StatusRs extends jspb.Message {
  clearSumbcycList(): void;
  getSumbcycList(): Array<SumBcycs>;
  setSumbcycList(value: Array<SumBcycs>): void;
  addSumbcyc(value?: SumBcycs, index?: number): SumBcycs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRs.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRs): StatusRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRs;
  static deserializeBinaryFromReader(message: StatusRs, reader: jspb.BinaryReader): StatusRs;
}

export namespace StatusRs {
  export type AsObject = {
    sumbcycList: Array<SumBcycs.AsObject>,
  }
}

export class ArrSumBcycRs extends jspb.Message {
  clearSumbcycrsList(): void;
  getSumbcycrsList(): Array<SumBcycRs>;
  setSumbcycrsList(value: Array<SumBcycRs>): void;
  addSumbcycrs(value?: SumBcycRs, index?: number): SumBcycRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrSumBcycRs.AsObject;
  static toObject(includeInstance: boolean, msg: ArrSumBcycRs): ArrSumBcycRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrSumBcycRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrSumBcycRs;
  static deserializeBinaryFromReader(message: ArrSumBcycRs, reader: jspb.BinaryReader): ArrSumBcycRs;
}

export namespace ArrSumBcycRs {
  export type AsObject = {
    sumbcycrsList: Array<SumBcycRs.AsObject>,
  }
}

export class SumBcycRs extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasAct01Done(): boolean;
  clearAct01Done(): void;
  getAct01Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct01Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasAct02Done(): boolean;
  clearAct02Done(): void;
  getAct02Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct02Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasAct03Done(): boolean;
  clearAct03Done(): void;
  getAct03Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct03Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasAct04Done(): boolean;
  clearAct04Done(): void;
  getAct04Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct04Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasAct05Done(): boolean;
  clearAct05Done(): void;
  getAct05Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct05Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasAct06Done(): boolean;
  clearAct06Done(): void;
  getAct06Done(): ACT_STATUSMap[keyof ACT_STATUSMap] | undefined;
  setAct06Done(value: ACT_STATUSMap[keyof ACT_STATUSMap]): void;

  hasCycleClsd(): boolean;
  clearCycleClsd(): void;
  getCycleClsd(): number | undefined;
  setCycleClsd(value: number): void;

  hasCycleLen(): boolean;
  clearCycleLen(): void;
  getCycleLen(): number | undefined;
  setCycleLen(value: number): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumBcycRs.AsObject;
  static toObject(includeInstance: boolean, msg: SumBcycRs): SumBcycRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SumBcycRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumBcycRs;
  static deserializeBinaryFromReader(message: SumBcycRs, reader: jspb.BinaryReader): SumBcycRs;
}

export namespace SumBcycRs {
  export type AsObject = {
    billgroup?: string,
    bilngDate: date_pb.MasDateTime.AsObject,
    description?: string,
    act01Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    act02Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    act03Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    act04Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    act05Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    act06Done?: ACT_STATUSMap[keyof ACT_STATUSMap],
    cycleClsd?: number,
    cycleLen?: number,
    cycleId?: number,
  }
}

export class SumBcycs extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasAct01Done(): boolean;
  clearAct01Done(): void;
  getAct01Done(): number | undefined;
  setAct01Done(value: number): void;

  hasAct02Done(): boolean;
  clearAct02Done(): void;
  getAct02Done(): number | undefined;
  setAct02Done(value: number): void;

  hasAct03Done(): boolean;
  clearAct03Done(): void;
  getAct03Done(): number | undefined;
  setAct03Done(value: number): void;

  hasAct04Done(): boolean;
  clearAct04Done(): void;
  getAct04Done(): number | undefined;
  setAct04Done(value: number): void;

  hasAct05Done(): boolean;
  clearAct05Done(): void;
  getAct05Done(): number | undefined;
  setAct05Done(value: number): void;

  hasAct06Done(): boolean;
  clearAct06Done(): void;
  getAct06Done(): number | undefined;
  setAct06Done(value: number): void;

  hasCycleClsd(): boolean;
  clearCycleClsd(): void;
  getCycleClsd(): number | undefined;
  setCycleClsd(value: number): void;

  hasCutoffMtr(): boolean;
  clearCutoffMtr(): void;
  getCutoffMtr(): date_pb.MasDateTime | undefined;
  setCutoffMtr(value?: date_pb.MasDateTime): void;

  hasCutoffEst(): boolean;
  clearCutoffEst(): void;
  getCutoffEst(): date_pb.MasDateTime | undefined;
  setCutoffEst(value?: date_pb.MasDateTime): void;

  hasCutoffInv(): boolean;
  clearCutoffInv(): void;
  getCutoffInv(): date_pb.MasDateTime | undefined;
  setCutoffInv(value?: date_pb.MasDateTime): void;

  hasCutoffStm(): boolean;
  clearCutoffStm(): void;
  getCutoffStm(): date_pb.MasDateTime | undefined;
  setCutoffStm(value?: date_pb.MasDateTime): void;

  hasPrStmdate(): boolean;
  clearPrStmdate(): void;
  getPrStmdate(): date_pb.MasDateTime | undefined;
  setPrStmdate(value?: date_pb.MasDateTime): void;

  hasPrDisdate(): boolean;
  clearPrDisdate(): void;
  getPrDisdate(): date_pb.MasDateTime | undefined;
  setPrDisdate(value?: date_pb.MasDateTime): void;

  hasPrBilmnth(): boolean;
  clearPrBilmnth(): void;
  getPrBilmnth(): number | undefined;
  setPrBilmnth(value: number): void;

  hasPrBilyear(): boolean;
  clearPrBilyear(): void;
  getPrBilyear(): number | undefined;
  setPrBilyear(value: number): void;

  hasPrMsg1(): boolean;
  clearPrMsg1(): void;
  getPrMsg1(): string | undefined;
  setPrMsg1(value: string): void;

  hasPrMsg2(): boolean;
  clearPrMsg2(): void;
  getPrMsg2(): string | undefined;
  setPrMsg2(value: string): void;

  hasPrMsg3(): boolean;
  clearPrMsg3(): void;
  getPrMsg3(): string | undefined;
  setPrMsg3(value: string): void;

  hasPrMsg4(): boolean;
  clearPrMsg4(): void;
  getPrMsg4(): string | undefined;
  setPrMsg4(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasCycleLen(): boolean;
  clearCycleLen(): void;
  getCycleLen(): number | undefined;
  setCycleLen(value: number): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasSdStart(): boolean;
  clearSdStart(): void;
  getSdStart(): date_pb.MasDateTime | undefined;
  setSdStart(value?: date_pb.MasDateTime): void;

  hasSdClose(): boolean;
  clearSdClose(): void;
  getSdClose(): date_pb.MasDateTime | undefined;
  setSdClose(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumBcycs.AsObject;
  static toObject(includeInstance: boolean, msg: SumBcycs): SumBcycs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SumBcycs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumBcycs;
  static deserializeBinaryFromReader(message: SumBcycs, reader: jspb.BinaryReader): SumBcycs;
}

export namespace SumBcycs {
  export type AsObject = {
    billgroup?: string,
    bilngDate: date_pb.MasDateTime.AsObject,
    description?: string,
    act01Done?: number,
    act02Done?: number,
    act03Done?: number,
    act04Done?: number,
    act05Done?: number,
    act06Done?: number,
    cycleClsd?: number,
    cutoffMtr?: date_pb.MasDateTime.AsObject,
    cutoffEst?: date_pb.MasDateTime.AsObject,
    cutoffInv?: date_pb.MasDateTime.AsObject,
    cutoffStm?: date_pb.MasDateTime.AsObject,
    prStmdate?: date_pb.MasDateTime.AsObject,
    prDisdate?: date_pb.MasDateTime.AsObject,
    prBilmnth?: number,
    prBilyear?: number,
    prMsg1?: string,
    prMsg2?: string,
    prMsg3?: string,
    prMsg4?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    cycleLen?: number,
    cycleId?: number,
    sdStart?: date_pb.MasDateTime.AsObject,
    sdClose?: date_pb.MasDateTime.AsObject,
  }
}

export class GetBillItemTypesRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillItemTypesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillItemTypesRq): GetBillItemTypesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillItemTypesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillItemTypesRq;
  static deserializeBinaryFromReader(message: GetBillItemTypesRq, reader: jspb.BinaryReader): GetBillItemTypesRq;
}

export namespace GetBillItemTypesRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    paymentNo?: string,
  }
}

export class GetBillItemTypesRs extends jspb.Message {
  clearBillitemsList(): void;
  getBillitemsList(): Array<BillItem>;
  setBillitemsList(value: Array<BillItem>): void;
  addBillitems(value?: BillItem, index?: number): BillItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillItemTypesRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillItemTypesRs): GetBillItemTypesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillItemTypesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillItemTypesRs;
  static deserializeBinaryFromReader(message: GetBillItemTypesRs, reader: jspb.BinaryReader): GetBillItemTypesRs;
}

export namespace GetBillItemTypesRs {
  export type AsObject = {
    billitemsList: Array<BillItem.AsObject>,
  }
}

export class GetBillItemTypesByBillPrintRs extends jspb.Message {
  clearBillitemsList(): void;
  getBillitemsList(): Array<BillItem>;
  setBillitemsList(value: Array<BillItem>): void;
  addBillitems(value?: BillItem, index?: number): BillItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillItemTypesByBillPrintRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillItemTypesByBillPrintRs): GetBillItemTypesByBillPrintRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillItemTypesByBillPrintRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillItemTypesByBillPrintRs;
  static deserializeBinaryFromReader(message: GetBillItemTypesByBillPrintRs, reader: jspb.BinaryReader): GetBillItemTypesByBillPrintRs;
}

export namespace GetBillItemTypesByBillPrintRs {
  export type AsObject = {
    billitemsList: Array<BillItem.AsObject>,
  }
}

export class GetStatmItemsRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatmItemsRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatmItemsRq): GetStatmItemsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatmItemsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatmItemsRq;
  static deserializeBinaryFromReader(message: GetStatmItemsRq, reader: jspb.BinaryReader): GetStatmItemsRq;
}

export namespace GetStatmItemsRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    paymentNo?: string,
  }
}

export class StatmItem extends jspb.Message {
  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatmItem.AsObject;
  static toObject(includeInstance: boolean, msg: StatmItem): StatmItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatmItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatmItem;
  static deserializeBinaryFromReader(message: StatmItem, reader: jspb.BinaryReader): StatmItem;
}

export namespace StatmItem {
  export type AsObject = {
    instalment?: number,
    opBlnce?: number,
    curPaymnts?: number,
    curCharges?: number,
    clBlnce?: number,
  }
}

export class GetCollectionSummaryRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionSummaryRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionSummaryRq): GetCollectionSummaryRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionSummaryRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionSummaryRq;
  static deserializeBinaryFromReader(message: GetCollectionSummaryRq, reader: jspb.BinaryReader): GetCollectionSummaryRq;
}

export namespace GetCollectionSummaryRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class GetCollectionSummaryRs extends jspb.Message {
  clearCollectionsummaryrecordsList(): void;
  getCollectionsummaryrecordsList(): Array<CollectionSummaryRecord>;
  setCollectionsummaryrecordsList(value: Array<CollectionSummaryRecord>): void;
  addCollectionsummaryrecords(value?: CollectionSummaryRecord, index?: number): CollectionSummaryRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionSummaryRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionSummaryRs): GetCollectionSummaryRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionSummaryRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionSummaryRs;
  static deserializeBinaryFromReader(message: GetCollectionSummaryRs, reader: jspb.BinaryReader): GetCollectionSummaryRs;
}

export namespace GetCollectionSummaryRs {
  export type AsObject = {
    collectionsummaryrecordsList: Array<CollectionSummaryRecord.AsObject>,
  }
}

export class CollectionSummaryRecord extends jspb.Message {
  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasCollectedCount(): boolean;
  clearCollectedCount(): void;
  getCollectedCount(): number | undefined;
  setCollectedCount(value: number): void;

  hasCollectedAmount(): boolean;
  clearCollectedAmount(): void;
  getCollectedAmount(): number | undefined;
  setCollectedAmount(value: number): void;

  hasExtCollectedCount(): boolean;
  clearExtCollectedCount(): void;
  getExtCollectedCount(): number | undefined;
  setExtCollectedCount(value: number): void;

  hasExtCollectedAmount(): boolean;
  clearExtCollectedAmount(): void;
  getExtCollectedAmount(): number | undefined;
  setExtCollectedAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionSummaryRecord.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionSummaryRecord): CollectionSummaryRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionSummaryRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionSummaryRecord;
  static deserializeBinaryFromReader(message: CollectionSummaryRecord, reader: jspb.BinaryReader): CollectionSummaryRecord;
}

export namespace CollectionSummaryRecord {
  export type AsObject = {
    cycleId?: number,
    billgroup?: string,
    bilngDate: date_pb.MasDateTime.AsObject,
    collectedCount?: number,
    collectedAmount?: number,
    extCollectedCount?: number,
    extCollectedAmount?: number,
  }
}

export class GetBillTypeRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillTypeRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillTypeRq): GetBillTypeRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillTypeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillTypeRq;
  static deserializeBinaryFromReader(message: GetBillTypeRq, reader: jspb.BinaryReader): GetBillTypeRq;
}

export namespace GetBillTypeRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    paymentNo?: string,
  }
}

export class BillType extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasIsMomarsa(): boolean;
  clearIsMomarsa(): void;
  getIsMomarsa(): number | undefined;
  setIsMomarsa(value: number): void;

  hasInstalmentRatio(): boolean;
  clearInstalmentRatio(): void;
  getInstalmentRatio(): string | undefined;
  setInstalmentRatio(value: string): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasSConsump(): boolean;
  clearSConsump(): void;
  getSConsump(): number | undefined;
  setSConsump(value: number): void;

  hasSPrReading(): boolean;
  clearSPrReading(): void;
  getSPrReading(): number | undefined;
  setSPrReading(value: number): void;

  hasSCrReading(): boolean;
  clearSCrReading(): void;
  getSCrReading(): number | undefined;
  setSCrReading(value: number): void;

  hasLastMetrRdg(): boolean;
  clearLastMetrRdg(): void;
  getLastMetrRdg(): number | undefined;
  setLastMetrRdg(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillType.AsObject;
  static toObject(includeInstance: boolean, msg: BillType): BillType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillType;
  static deserializeBinaryFromReader(message: BillType, reader: jspb.BinaryReader): BillType;
}

export namespace BillType {
  export type AsObject = {
    paymentNo?: string,
    custkey?: string,
    readType?: number,
    meterType?: string,
    isMomarsa?: number,
    instalmentRatio?: string,
    calcType?: string,
    sConsump?: number,
    sPrReading?: number,
    sCrReading?: number,
    lastMetrRdg?: number,
  }
}

export class CloseCollectionCycleRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  clearCollectedpaymentsList(): void;
  getCollectedpaymentsList(): Array<string>;
  setCollectedpaymentsList(value: Array<string>): void;
  addCollectedpayments(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseCollectionCycleRq.AsObject;
  static toObject(includeInstance: boolean, msg: CloseCollectionCycleRq): CloseCollectionCycleRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseCollectionCycleRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseCollectionCycleRq;
  static deserializeBinaryFromReader(message: CloseCollectionCycleRq, reader: jspb.BinaryReader): CloseCollectionCycleRq;
}

export namespace CloseCollectionCycleRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    collectedpaymentsList: Array<string>,
  }
}

export class CloseCollectionCycleRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseCollectionCycleRs.AsObject;
  static toObject(includeInstance: boolean, msg: CloseCollectionCycleRs): CloseCollectionCycleRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseCollectionCycleRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseCollectionCycleRs;
  static deserializeBinaryFromReader(message: CloseCollectionCycleRs, reader: jspb.BinaryReader): CloseCollectionCycleRs;
}

export namespace CloseCollectionCycleRs {
  export type AsObject = {
  }
}

export class UpdateHH_BCYCRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): number | undefined;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHH_BCYCRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHH_BCYCRq): UpdateHH_BCYCRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHH_BCYCRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHH_BCYCRq;
  static deserializeBinaryFromReader(message: UpdateHH_BCYCRq, reader: jspb.BinaryReader): UpdateHH_BCYCRq;
}

export namespace UpdateHH_BCYCRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bilngDate: date_pb.MasDateTime.AsObject,
    status?: number,
  }
}

export class UpdateHH_BCYCRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHH_BCYCRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHH_BCYCRs): UpdateHH_BCYCRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHH_BCYCRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHH_BCYCRs;
  static deserializeBinaryFromReader(message: UpdateHH_BCYCRs, reader: jspb.BinaryReader): UpdateHH_BCYCRs;
}

export namespace UpdateHH_BCYCRs {
  export type AsObject = {
  }
}

export class UpdateMeterInfoRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasNewMeterType(): boolean;
  clearNewMeterType(): void;
  getNewMeterType(): string | undefined;
  setNewMeterType(value: string): void;

  hasNewMeterRef(): boolean;
  clearNewMeterRef(): void;
  getNewMeterRef(): string | undefined;
  setNewMeterRef(value: string): void;

  hasNewNoDials(): boolean;
  clearNewNoDials(): void;
  getNewNoDials(): number | undefined;
  setNewNoDials(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeterInfoRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeterInfoRq): UpdateMeterInfoRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMeterInfoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeterInfoRq;
  static deserializeBinaryFromReader(message: UpdateMeterInfoRq, reader: jspb.BinaryReader): UpdateMeterInfoRq;
}

export namespace UpdateMeterInfoRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    meterType?: string,
    meterRef?: string,
    newMeterType?: string,
    newMeterRef?: string,
    newNoDials?: number,
  }
}

export class UpdateMeterInfoRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeterInfoRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeterInfoRs): UpdateMeterInfoRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMeterInfoRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeterInfoRs;
  static deserializeBinaryFromReader(message: UpdateMeterInfoRs, reader: jspb.BinaryReader): UpdateMeterInfoRs;
}

export namespace UpdateMeterInfoRs {
  export type AsObject = {
  }
}

export class GetDepositValueRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasDpositid(): boolean;
  clearDpositid(): void;
  getDpositid(): number | undefined;
  setDpositid(value: number): void;

  hasReceptno(): boolean;
  clearReceptno(): void;
  getReceptno(): string | undefined;
  setReceptno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepositValueRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepositValueRq): GetDepositValueRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepositValueRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepositValueRq;
  static deserializeBinaryFromReader(message: GetDepositValueRq, reader: jspb.BinaryReader): GetDepositValueRq;
}

export namespace GetDepositValueRq {
  export type AsObject = {
    stationno?: number,
    dpositid?: number,
    receptno?: string,
  }
}

export class BillSum extends jspb.Message {
  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  hasSum(): boolean;
  clearSum(): void;
  getSum(): number | undefined;
  setSum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillSum.AsObject;
  static toObject(includeInstance: boolean, msg: BillSum): BillSum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillSum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillSum;
  static deserializeBinaryFromReader(message: BillSum, reader: jspb.BinaryReader): BillSum;
}

export namespace BillSum {
  export type AsObject = {
    count?: number,
    sum?: number,
  }
}

export class UpdateBilngAssignCRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasNewassignto(): boolean;
  clearNewassignto(): void;
  getNewassignto(): number | undefined;
  setNewassignto(value: number): void;

  hasOldassignfrom(): boolean;
  clearOldassignfrom(): void;
  getOldassignfrom(): number | undefined;
  setOldassignfrom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBilngAssignCRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBilngAssignCRq): UpdateBilngAssignCRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBilngAssignCRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBilngAssignCRq;
  static deserializeBinaryFromReader(message: UpdateBilngAssignCRq, reader: jspb.BinaryReader): UpdateBilngAssignCRq;
}

export namespace UpdateBilngAssignCRq {
  export type AsObject = {
    stationno?: number,
    cycleid?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    newassignto?: number,
    oldassignfrom?: number,
  }
}

export class UpdateBilngAssignCWithStatmentsRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasNewassignto(): boolean;
  clearNewassignto(): void;
  getNewassignto(): number | undefined;
  setNewassignto(value: number): void;

  hasOldassignfrom(): boolean;
  clearOldassignfrom(): void;
  getOldassignfrom(): number | undefined;
  setOldassignfrom(value: number): void;

  clearStatmentsList(): void;
  getStatmentsList(): Array<AssignModel>;
  setStatmentsList(value: Array<AssignModel>): void;
  addStatments(value?: AssignModel, index?: number): AssignModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBilngAssignCWithStatmentsRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBilngAssignCWithStatmentsRq): UpdateBilngAssignCWithStatmentsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBilngAssignCWithStatmentsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBilngAssignCWithStatmentsRq;
  static deserializeBinaryFromReader(message: UpdateBilngAssignCWithStatmentsRq, reader: jspb.BinaryReader): UpdateBilngAssignCWithStatmentsRq;
}

export namespace UpdateBilngAssignCWithStatmentsRq {
  export type AsObject = {
    stationno?: number,
    cycleid?: number,
    newassignto?: number,
    oldassignfrom?: number,
    statmentsList: Array<AssignModel.AsObject>,
  }
}

export class UpdateBilngAssignCRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBilngAssignCRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBilngAssignCRs): UpdateBilngAssignCRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBilngAssignCRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBilngAssignCRs;
  static deserializeBinaryFromReader(message: UpdateBilngAssignCRs, reader: jspb.BinaryReader): UpdateBilngAssignCRs;
}

export namespace UpdateBilngAssignCRs {
  export type AsObject = {
  }
}

export class AssignModel extends jspb.Message {
  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAssignto(): boolean;
  clearAssignto(): void;
  getAssignto(): number | undefined;
  setAssignto(value: number): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

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

  hasClblnce(): boolean;
  clearClblnce(): void;
  getClblnce(): number | undefined;
  setClblnce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignModel.AsObject;
  static toObject(includeInstance: boolean, msg: AssignModel): AssignModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignModel;
  static deserializeBinaryFromReader(message: AssignModel, reader: jspb.BinaryReader): AssignModel;
}

export namespace AssignModel {
  export type AsObject = {
    paymentno?: string,
    custkey?: string,
    assignto?: number,
    cycleid?: number,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    clblnce?: number,
  }
}

export class UpdateBilngAssignRRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBilngAssignRRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBilngAssignRRs): UpdateBilngAssignRRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBilngAssignRRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBilngAssignRRs;
  static deserializeBinaryFromReader(message: UpdateBilngAssignRRs, reader: jspb.BinaryReader): UpdateBilngAssignRRs;
}

export namespace UpdateBilngAssignRRs {
  export type AsObject = {
  }
}

export class UpdateBilngAssignRRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasNewassignto(): boolean;
  clearNewassignto(): void;
  getNewassignto(): number | undefined;
  setNewassignto(value: number): void;

  hasOldassignfrom(): boolean;
  clearOldassignfrom(): void;
  getOldassignfrom(): number | undefined;
  setOldassignfrom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBilngAssignRRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBilngAssignRRq): UpdateBilngAssignRRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBilngAssignRRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBilngAssignRRq;
  static deserializeBinaryFromReader(message: UpdateBilngAssignRRq, reader: jspb.BinaryReader): UpdateBilngAssignRRq;
}

export namespace UpdateBilngAssignRRq {
  export type AsObject = {
    stationno?: number,
    cycleid?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    newassignto?: number,
    oldassignfrom?: number,
  }
}

export class CancelSewerServiceRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStampuser(): boolean;
  clearStampuser(): void;
  getStampuser(): string | undefined;
  setStampuser(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSewerServiceRq.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSewerServiceRq): CancelSewerServiceRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelSewerServiceRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSewerServiceRq;
  static deserializeBinaryFromReader(message: CancelSewerServiceRq, reader: jspb.BinaryReader): CancelSewerServiceRq;
}

export namespace CancelSewerServiceRq {
  export type AsObject = {
    custkey?: string,
    stampuser?: string,
  }
}

export class CancelSewerServiceRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSewerServiceRs.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSewerServiceRs): CancelSewerServiceRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelSewerServiceRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSewerServiceRs;
  static deserializeBinaryFromReader(message: CancelSewerServiceRs, reader: jspb.BinaryReader): CancelSewerServiceRs;
}

export namespace CancelSewerServiceRs {
  export type AsObject = {
  }
}

export class GetCustomerInfoRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerInfoRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerInfoRq): GetCustomerInfoRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerInfoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerInfoRq;
  static deserializeBinaryFromReader(message: GetCustomerInfoRq, reader: jspb.BinaryReader): GetCustomerInfoRq;
}

export namespace GetCustomerInfoRq {
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
  getPropinfo(): PropInfo;
  setPropinfo(value?: PropInfo): void;

  clearAgreemsList(): void;
  getAgreemsList(): Array<CustAgreem>;
  setAgreemsList(value: Array<CustAgreem>): void;
  addAgreems(value?: CustAgreem, index?: number): CustAgreem;

  clearStatmentsList(): void;
  getStatmentsList(): Array<STATMENT>;
  setStatmentsList(value: Array<STATMENT>): void;
  addStatments(value?: STATMENT, index?: number): STATMENT;

  clearAllTransactionsList(): void;
  getAllTransactionsList(): Array<F_TRANSACTION>;
  setAllTransactionsList(value: Array<F_TRANSACTION>): void;
  addAllTransactions(value?: F_TRANSACTION, index?: number): F_TRANSACTION;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): string | undefined;
  setStationNo(value: string): void;

  hasMainCtype(): boolean;
  clearMainCtype(): void;
  getMainCtype(): string | undefined;
  setMainCtype(value: string): void;

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
    propinfo: PropInfo.AsObject,
    agreemsList: Array<CustAgreem.AsObject>,
    statmentsList: Array<STATMENT.AsObject>,
    allTransactionsList: Array<F_TRANSACTION.AsObject>,
    stationNo?: string,
    mainCtype?: string,
  }
}

export class CustomerAgreems extends jspb.Message {
  clearAgreemsList(): void;
  getAgreemsList(): Array<CustAgreem>;
  setAgreemsList(value: Array<CustAgreem>): void;
  addAgreems(value?: CustAgreem, index?: number): CustAgreem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAgreems.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAgreems): CustomerAgreems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerAgreems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAgreems;
  static deserializeBinaryFromReader(message: CustomerAgreems, reader: jspb.BinaryReader): CustomerAgreems;
}

export namespace CustomerAgreems {
  export type AsObject = {
    agreemsList: Array<CustAgreem.AsObject>,
  }
}

export class STATMENT extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  clearTransactionsList(): void;
  getTransactionsList(): Array<F_TRANSACTION>;
  setTransactionsList(value: Array<F_TRANSACTION>): void;
  addTransactions(value?: F_TRANSACTION, index?: number): F_TRANSACTION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STATMENT.AsObject;
  static toObject(includeInstance: boolean, msg: STATMENT): STATMENT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STATMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STATMENT;
  static deserializeBinaryFromReader(message: STATMENT, reader: jspb.BinaryReader): STATMENT;
}

export namespace STATMENT {
  export type AsObject = {
    paymentNo?: string,
    statmNo?: number,
    clBlnce?: number,
    curCharges?: number,
    opBlnce?: number,
    instalment?: number,
    bilngDate: date_pb.MasDateTime.AsObject,
    deliverySt?: number,
    transactionsList: Array<F_TRANSACTION.AsObject>,
  }
}

export class F_TRANSACTION extends jspb.Message {
  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasEffectDte(): boolean;
  clearEffectDte(): void;
  getEffectDte(): date_pb.MasDateTime | undefined;
  setEffectDte(value?: date_pb.MasDateTime): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasMemoFld(): boolean;
  clearMemoFld(): void;
  getMemoFld(): string | undefined;
  setMemoFld(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasTrnsType(): boolean;
  clearTrnsType(): void;
  getTrnsType(): number | undefined;
  setTrnsType(value: number): void;

  hasTrnsStype(): boolean;
  clearTrnsStype(): void;
  getTrnsStype(): number | undefined;
  setTrnsStype(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasRunningBlance(): boolean;
  clearRunningBlance(): void;
  getRunningBlance(): number | undefined;
  setRunningBlance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F_TRANSACTION.AsObject;
  static toObject(includeInstance: boolean, msg: F_TRANSACTION): F_TRANSACTION.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F_TRANSACTION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F_TRANSACTION;
  static deserializeBinaryFromReader(message: F_TRANSACTION, reader: jspb.BinaryReader): F_TRANSACTION;
}

export namespace F_TRANSACTION {
  export type AsObject = {
    transNo?: number,
    amount?: number,
    description?: string,
    documentNo?: string,
    effectDte?: date_pb.MasDateTime.AsObject,
    bilngDate?: date_pb.MasDateTime.AsObject,
    memoFld?: string,
    statmNo?: number,
    trnsType?: number,
    trnsStype?: number,
    crReading?: number,
    prReading?: number,
    consump?: number,
    readType?: number,
    runningBlance?: number,
  }
}

export class CustAgreem extends jspb.Message {
  hasAgrmNo(): boolean;
  clearAgrmNo(): void;
  getAgrmNo(): number | undefined;
  setAgrmNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAgrmRef(): boolean;
  clearAgrmRef(): void;
  getAgrmRef(): string | undefined;
  setAgrmRef(value: string): void;

  hasEffDate(): boolean;
  clearEffDate(): void;
  getEffDate(): date_pb.MasDateTime | undefined;
  setEffDate(value?: date_pb.MasDateTime): void;

  hasCompletionDate(): boolean;
  clearCompletionDate(): void;
  getCompletionDate(): date_pb.MasDateTime | undefined;
  setCompletionDate(value?: date_pb.MasDateTime): void;

  hasAgrmValue(): boolean;
  clearAgrmValue(): void;
  getAgrmValue(): number | undefined;
  setAgrmValue(value: number): void;

  hasAgrmImmpay(): boolean;
  clearAgrmImmpay(): void;
  getAgrmImmpay(): number | undefined;
  setAgrmImmpay(value: number): void;

  hasImmpayRcptno(): boolean;
  clearImmpayRcptno(): void;
  getImmpayRcptno(): string | undefined;
  setImmpayRcptno(value: string): void;

  hasNoInstalments(): boolean;
  clearNoInstalments(): void;
  getNoInstalments(): number | undefined;
  setNoInstalments(value: number): void;

  hasReminderNoInstalments(): boolean;
  clearReminderNoInstalments(): void;
  getReminderNoInstalments(): number | undefined;
  setReminderNoInstalments(value: number): void;

  hasReminderAmount(): boolean;
  clearReminderAmount(): void;
  getReminderAmount(): number | undefined;
  setReminderAmount(value: number): void;

  hasInstlmAmount(): boolean;
  clearInstlmAmount(): void;
  getInstlmAmount(): number | undefined;
  setInstlmAmount(value: number): void;

  hasAgrmType(): boolean;
  clearAgrmType(): void;
  getAgrmType(): number | undefined;
  setAgrmType(value: number): void;

  hasAgrmStatus(): boolean;
  clearAgrmStatus(): void;
  getAgrmStatus(): number | undefined;
  setAgrmStatus(value: number): void;

  hasTrnsType(): boolean;
  clearTrnsType(): void;
  getTrnsType(): number | undefined;
  setTrnsType(value: number): void;

  hasTrnsStype(): boolean;
  clearTrnsStype(): void;
  getTrnsStype(): number | undefined;
  setTrnsStype(value: number): void;

  clearInstalmentsList(): void;
  getInstalmentsList(): Array<AgremInstalment>;
  setInstalmentsList(value: Array<AgremInstalment>): void;
  addInstalments(value?: AgremInstalment, index?: number): AgremInstalment;

  hasAgremName(): boolean;
  clearAgremName(): void;
  getAgremName(): string | undefined;
  setAgremName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustAgreem.AsObject;
  static toObject(includeInstance: boolean, msg: CustAgreem): CustAgreem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustAgreem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustAgreem;
  static deserializeBinaryFromReader(message: CustAgreem, reader: jspb.BinaryReader): CustAgreem;
}

export namespace CustAgreem {
  export type AsObject = {
    agrmNo?: number,
    custkey?: string,
    agrmRef?: string,
    effDate?: date_pb.MasDateTime.AsObject,
    completionDate?: date_pb.MasDateTime.AsObject,
    agrmValue?: number,
    agrmImmpay?: number,
    immpayRcptno?: string,
    noInstalments?: number,
    reminderNoInstalments?: number,
    reminderAmount?: number,
    instlmAmount?: number,
    agrmType?: number,
    agrmStatus?: number,
    trnsType?: number,
    trnsStype?: number,
    instalmentsList: Array<AgremInstalment.AsObject>,
    agremName?: string,
  }
}

export class AgremInstalment extends jspb.Message {
  hasInstalmentNo(): boolean;
  clearInstalmentNo(): void;
  getInstalmentNo(): number | undefined;
  setInstalmentNo(value: number): void;

  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): date_pb.MasDateTime | undefined;
  setInvoiceDate(value?: date_pb.MasDateTime): void;

  hasChargeDate(): boolean;
  clearChargeDate(): void;
  getChargeDate(): date_pb.MasDateTime | undefined;
  setChargeDate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgremInstalment.AsObject;
  static toObject(includeInstance: boolean, msg: AgremInstalment): AgremInstalment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgremInstalment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgremInstalment;
  static deserializeBinaryFromReader(message: AgremInstalment, reader: jspb.BinaryReader): AgremInstalment;
}

export namespace AgremInstalment {
  export type AsObject = {
    instalmentNo?: number,
    transNo?: number,
    amount?: number,
    invoiceDate?: date_pb.MasDateTime.AsObject,
    chargeDate?: date_pb.MasDateTime.AsObject,
  }
}

export class PropInfo extends jspb.Message {
  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasWaterService(): boolean;
  clearWaterService(): void;
  getWaterService(): boolean | undefined;
  setWaterService(value: boolean): void;

  hasSewerService(): boolean;
  clearSewerService(): void;
  getSewerService(): boolean | undefined;
  setSewerService(value: boolean): void;

  hasIsMultiCtypes(): boolean;
  clearIsMultiCtypes(): void;
  getIsMultiCtypes(): boolean | undefined;
  setIsMultiCtypes(value: boolean): void;

  clearCtgList(): void;
  getCtgList(): Array<CustomerCtg>;
  setCtgList(value: Array<CustomerCtg>): void;
  addCtg(value?: CustomerCtg, index?: number): CustomerCtg;

  hasConnectioninfo(): boolean;
  clearConnectioninfo(): void;
  getConnectioninfo(): ConnectionInfo;
  setConnectioninfo(value?: ConnectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PropInfo): PropInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropInfo;
  static deserializeBinaryFromReader(message: PropInfo, reader: jspb.BinaryReader): PropInfo;
}

export namespace PropInfo {
  export type AsObject = {
    propRef?: string,
    waterService?: boolean,
    sewerService?: boolean,
    isMultiCtypes?: boolean,
    ctgList: Array<CustomerCtg.AsObject>,
    connectioninfo: ConnectionInfo.AsObject,
  }
}

export class ConnectionInfo extends jspb.Message {
  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasConnectionDate(): boolean;
  clearConnectionDate(): void;
  getConnectionDate(): date_pb.MasDateTime | undefined;
  setConnectionDate(value?: date_pb.MasDateTime): void;

  hasConnStatus(): boolean;
  clearConnStatus(): void;
  getConnStatus(): number | undefined;
  setConnStatus(value: number): void;

  hasMeterinfo(): boolean;
  clearMeterinfo(): void;
  getMeterinfo(): MeterInfo;
  setMeterinfo(value?: MeterInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionInfo): ConnectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionInfo;
  static deserializeBinaryFromReader(message: ConnectionInfo, reader: jspb.BinaryReader): ConnectionInfo;
}

export namespace ConnectionInfo {
  export type AsObject = {
    propRef?: string,
    connectionDate?: date_pb.MasDateTime.AsObject,
    connStatus?: number,
    meterinfo: MeterInfo.AsObject,
  }
}

export class MeterInfo extends jspb.Message {
  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasMeterCondition(): boolean;
  clearMeterCondition(): void;
  getMeterCondition(): string | undefined;
  setMeterCondition(value: string): void;

  hasOpStatus(): boolean;
  clearOpStatus(): void;
  getOpStatus(): number | undefined;
  setOpStatus(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): number | undefined;
  setStatus(value: number): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): string | undefined;
  setSize(value: string): void;

  hasMake(): boolean;
  clearMake(): void;
  getMake(): string | undefined;
  setMake(value: string): void;

  hasInstallDate(): boolean;
  clearInstallDate(): void;
  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): void;

  hasRemovalDate(): boolean;
  clearRemovalDate(): void;
  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): void;

  hasConversionFactor(): boolean;
  clearConversionFactor(): void;
  getConversionFactor(): number | undefined;
  setConversionFactor(value: number): void;

  hasSerialNo(): boolean;
  clearSerialNo(): void;
  getSerialNo(): string | undefined;
  setSerialNo(value: string): void;

  clearReadingsList(): void;
  getReadingsList(): Array<MeterRdg>;
  setReadingsList(value: Array<MeterRdg>): void;
  addReadings(value?: MeterRdg, index?: number): MeterRdg;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  hasInsCycleId(): boolean;
  clearInsCycleId(): void;
  getInsCycleId(): number | undefined;
  setInsCycleId(value: number): void;

  hasUpdCycleId(): boolean;
  clearUpdCycleId(): void;
  getUpdCycleId(): number | undefined;
  setUpdCycleId(value: number): void;

  hasWtransNo(): boolean;
  clearWtransNo(): void;
  getWtransNo(): number | undefined;
  setWtransNo(value: number): void;

  hasStransNo(): boolean;
  clearStransNo(): void;
  getStransNo(): number | undefined;
  setStransNo(value: number): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasNoDials(): boolean;
  clearNoDials(): void;
  getNoDials(): number | undefined;
  setNoDials(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MeterInfo): MeterInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeterInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterInfo;
  static deserializeBinaryFromReader(message: MeterInfo, reader: jspb.BinaryReader): MeterInfo;
}

export namespace MeterInfo {
  export type AsObject = {
    meterType?: string,
    meterRef?: string,
    meterCondition?: string,
    opStatus?: number,
    status?: number,
    size?: string,
    make?: string,
    installDate?: date_pb.MasDateTime.AsObject,
    removalDate?: date_pb.MasDateTime.AsObject,
    conversionFactor?: number,
    serialNo?: string,
    readingsList: Array<MeterRdg.AsObject>,
    meterId?: number,
    insCycleId?: number,
    updCycleId?: number,
    wtransNo?: number,
    stransNo?: number,
    propertyId?: number,
    propRef?: string,
    noDials?: number,
  }
}

export class MeterRdg extends jspb.Message {
  hasReadingNo(): boolean;
  clearReadingNo(): void;
  getReadingNo(): number | undefined;
  setReadingNo(value: number): void;

  hasBReading(): boolean;
  clearBReading(): void;
  getBReading(): number | undefined;
  setBReading(value: number): void;

  hasCurDate(): boolean;
  clearCurDate(): void;
  getCurDate(): date_pb.MasDateTime | undefined;
  setCurDate(value?: date_pb.MasDateTime): void;

  hasIsInvoiced(): boolean;
  clearIsInvoiced(): void;
  getIsInvoiced(): number | undefined;
  setIsInvoiced(value: number): void;

  hasInvoiceBilngDate(): boolean;
  clearInvoiceBilngDate(): void;
  getInvoiceBilngDate(): date_pb.MasDateTime | undefined;
  setInvoiceBilngDate(value?: date_pb.MasDateTime): void;

  hasIsCancelled(): boolean;
  clearIsCancelled(): void;
  getIsCancelled(): boolean | undefined;
  setIsCancelled(value: boolean): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterRdg.AsObject;
  static toObject(includeInstance: boolean, msg: MeterRdg): MeterRdg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeterRdg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterRdg;
  static deserializeBinaryFromReader(message: MeterRdg, reader: jspb.BinaryReader): MeterRdg;
}

export namespace MeterRdg {
  export type AsObject = {
    readingNo?: number,
    bReading?: number,
    curDate?: date_pb.MasDateTime.AsObject,
    isInvoiced?: number,
    invoiceBilngDate?: date_pb.MasDateTime.AsObject,
    isCancelled?: boolean,
    meterId?: number,
    meterType?: string,
    meterRef?: string,
  }
}

export class CustomerCtg extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasWaterPercentage(): boolean;
  clearWaterPercentage(): void;
  getWaterPercentage(): number | undefined;
  setWaterPercentage(value: number): void;

  hasSewerPercentage(): boolean;
  clearSewerPercentage(): void;
  getSewerPercentage(): number | undefined;
  setSewerPercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerCtg.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerCtg): CustomerCtg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerCtg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerCtg;
  static deserializeBinaryFromReader(message: CustomerCtg, reader: jspb.BinaryReader): CustomerCtg;
}

export namespace CustomerCtg {
  export type AsObject = {
    code?: string,
    description?: string,
    waterPercentage?: number,
    sewerPercentage?: number,
  }
}

export class ExecuteSqlCommandRq extends jspb.Message {
  hasStatement(): boolean;
  clearStatement(): void;
  getStatement(): string | undefined;
  setStatement(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlCommandRq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlCommandRq): ExecuteSqlCommandRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSqlCommandRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlCommandRq;
  static deserializeBinaryFromReader(message: ExecuteSqlCommandRq, reader: jspb.BinaryReader): ExecuteSqlCommandRq;
}

export namespace ExecuteSqlCommandRq {
  export type AsObject = {
    statement?: string,
    argsList: Array<string>,
  }
}

export class ExecuteSqlCommandRs extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): number | undefined;
  setMsg(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteSqlCommandRs.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteSqlCommandRs): ExecuteSqlCommandRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteSqlCommandRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteSqlCommandRs;
  static deserializeBinaryFromReader(message: ExecuteSqlCommandRs, reader: jspb.BinaryReader): ExecuteSqlCommandRs;
}

export namespace ExecuteSqlCommandRs {
  export type AsObject = {
    msg?: number,
  }
}

export class VerifyCollectionAmountRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasAmountcollected(): boolean;
  clearAmountcollected(): void;
  getAmountcollected(): number | undefined;
  setAmountcollected(value: number): void;

  hasTotalamountcollected(): boolean;
  clearTotalamountcollected(): void;
  getTotalamountcollected(): number | undefined;
  setTotalamountcollected(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCollectionAmountRq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCollectionAmountRq): VerifyCollectionAmountRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCollectionAmountRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCollectionAmountRq;
  static deserializeBinaryFromReader(message: VerifyCollectionAmountRq, reader: jspb.BinaryReader): VerifyCollectionAmountRq;
}

export namespace VerifyCollectionAmountRq {
  export type AsObject = {
    custkey?: string,
    paymentno?: string,
    amountcollected?: number,
    totalamountcollected?: number,
  }
}

export class CollectionAmountAcceptance extends jspb.Message {
  hasAccepted(): boolean;
  clearAccepted(): void;
  getAccepted(): boolean | undefined;
  setAccepted(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionAmountAcceptance.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionAmountAcceptance): CollectionAmountAcceptance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionAmountAcceptance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionAmountAcceptance;
  static deserializeBinaryFromReader(message: CollectionAmountAcceptance, reader: jspb.BinaryReader): CollectionAmountAcceptance;
}

export namespace CollectionAmountAcceptance {
  export type AsObject = {
    accepted?: boolean,
    message?: string,
  }
}

export class AddInvoicedReadingRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddInvoicedReadingRs.AsObject;
  static toObject(includeInstance: boolean, msg: AddInvoicedReadingRs): AddInvoicedReadingRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddInvoicedReadingRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddInvoicedReadingRs;
  static deserializeBinaryFromReader(message: AddInvoicedReadingRs, reader: jspb.BinaryReader): AddInvoicedReadingRs;
}

export namespace AddInvoicedReadingRs {
  export type AsObject = {
  }
}

export class InvoicedReadingForm extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasReading(): boolean;
  clearReading(): void;
  getReading(): number | undefined;
  setReading(value: number): void;

  hasReadingDate(): boolean;
  clearReadingDate(): void;
  getReadingDate(): date_pb.MasDateTime | undefined;
  setReadingDate(value?: date_pb.MasDateTime): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoicedReadingForm.AsObject;
  static toObject(includeInstance: boolean, msg: InvoicedReadingForm): InvoicedReadingForm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoicedReadingForm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoicedReadingForm;
  static deserializeBinaryFromReader(message: InvoicedReadingForm, reader: jspb.BinaryReader): InvoicedReadingForm;
}

export namespace InvoicedReadingForm {
  export type AsObject = {
    custkey?: string,
    reading?: number,
    readingDate?: date_pb.MasDateTime.AsObject,
    comment?: string,
  }
}

export class GetLastReadingRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastReadingRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastReadingRq): GetLastReadingRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastReadingRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastReadingRq;
  static deserializeBinaryFromReader(message: GetLastReadingRq, reader: jspb.BinaryReader): GetLastReadingRq;
}

export namespace GetLastReadingRq {
  export type AsObject = {
    custkey?: string,
  }
}

export class ReadingRecord extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPropref(): boolean;
  clearPropref(): void;
  getPropref(): string | undefined;
  setPropref(value: string): void;

  hasMetertype(): boolean;
  clearMetertype(): void;
  getMetertype(): string | undefined;
  setMetertype(value: string): void;

  hasMeterref(): boolean;
  clearMeterref(): void;
  getMeterref(): string | undefined;
  setMeterref(value: string): void;

  hasReading(): boolean;
  clearReading(): void;
  getReading(): number | undefined;
  setReading(value: number): void;

  hasReadingdate(): boolean;
  clearReadingdate(): void;
  getReadingdate(): date_pb.MasDateTime;
  setReadingdate(value?: date_pb.MasDateTime): void;

  hasIsinvoiced(): boolean;
  clearIsinvoiced(): void;
  getIsinvoiced(): boolean | undefined;
  setIsinvoiced(value: boolean): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadingRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ReadingRecord): ReadingRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadingRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadingRecord;
  static deserializeBinaryFromReader(message: ReadingRecord, reader: jspb.BinaryReader): ReadingRecord;
}

export namespace ReadingRecord {
  export type AsObject = {
    custkey?: string,
    propref?: string,
    metertype?: string,
    meterref?: string,
    reading?: number,
    readingdate: date_pb.MasDateTime.AsObject,
    isinvoiced?: boolean,
    surname?: string,
  }
}

export class InvoicedReadingRecord extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasLastreading(): boolean;
  clearLastreading(): void;
  getLastreading(): number | undefined;
  setLastreading(value: number): void;

  hasLastconsump(): boolean;
  clearLastconsump(): void;
  getLastconsump(): number | undefined;
  setLastconsump(value: number): void;

  hasEstconsump(): boolean;
  clearEstconsump(): void;
  getEstconsump(): number | undefined;
  setEstconsump(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoicedReadingRecord.AsObject;
  static toObject(includeInstance: boolean, msg: InvoicedReadingRecord): InvoicedReadingRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoicedReadingRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoicedReadingRecord;
  static deserializeBinaryFromReader(message: InvoicedReadingRecord, reader: jspb.BinaryReader): InvoicedReadingRecord;
}

export namespace InvoicedReadingRecord {
  export type AsObject = {
    custkey?: string,
    lastreading?: number,
    lastconsump?: number,
    estconsump?: number,
  }
}

export class GetIssueTypeRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueTypeRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueTypeRq): GetIssueTypeRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIssueTypeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueTypeRq;
  static deserializeBinaryFromReader(message: GetIssueTypeRq, reader: jspb.BinaryReader): GetIssueTypeRq;
}

export namespace GetIssueTypeRq {
  export type AsObject = {
  }
}

export class GetIssueTypeRs extends jspb.Message {
  hasBillingIssueType(): boolean;
  clearBillingIssueType(): void;
  getBillingIssueType(): BILLING_ISSUE_TYPEMap[keyof BILLING_ISSUE_TYPEMap] | undefined;
  setBillingIssueType(value: BILLING_ISSUE_TYPEMap[keyof BILLING_ISSUE_TYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIssueTypeRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetIssueTypeRs): GetIssueTypeRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIssueTypeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIssueTypeRs;
  static deserializeBinaryFromReader(message: GetIssueTypeRs, reader: jspb.BinaryReader): GetIssueTypeRs;
}

export namespace GetIssueTypeRs {
  export type AsObject = {
    billingIssueType?: BILLING_ISSUE_TYPEMap[keyof BILLING_ISSUE_TYPEMap],
  }
}

export class SetDebugRq extends jspb.Message {
  hasDebug(): boolean;
  clearDebug(): void;
  getDebug(): boolean | undefined;
  setDebug(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDebugRq.AsObject;
  static toObject(includeInstance: boolean, msg: SetDebugRq): SetDebugRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDebugRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDebugRq;
  static deserializeBinaryFromReader(message: SetDebugRq, reader: jspb.BinaryReader): SetDebugRq;
}

export namespace SetDebugRq {
  export type AsObject = {
    debug?: boolean,
  }
}

export class SetDebugRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDebugRs.AsObject;
  static toObject(includeInstance: boolean, msg: SetDebugRs): SetDebugRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDebugRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDebugRs;
  static deserializeBinaryFromReader(message: SetDebugRs, reader: jspb.BinaryReader): SetDebugRs;
}

export namespace SetDebugRs {
  export type AsObject = {
  }
}

export class InitializeRq extends jspb.Message {
  hasMasdbversion(): boolean;
  clearMasdbversion(): void;
  getMasdbversion(): number | undefined;
  setMasdbversion(value: number): void;

  clearSettingList(): void;
  getSettingList(): Array<BilngSettings>;
  setSettingList(value: Array<BilngSettings>): void;
  addSetting(value?: BilngSettings, index?: number): BilngSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeRq.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeRq): InitializeRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitializeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeRq;
  static deserializeBinaryFromReader(message: InitializeRq, reader: jspb.BinaryReader): InitializeRq;
}

export namespace InitializeRq {
  export type AsObject = {
    masdbversion?: number,
    settingList: Array<BilngSettings.AsObject>,
  }
}

export class InitializeRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeRs.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeRs): InitializeRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitializeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeRs;
  static deserializeBinaryFromReader(message: InitializeRs, reader: jspb.BinaryReader): InitializeRs;
}

export namespace InitializeRs {
  export type AsObject = {
  }
}

export class BilngSettings extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<BilngSettingItem>;
  setItemsList(value: Array<BilngSettingItem>): void;
  addItems(value?: BilngSettingItem, index?: number): BilngSettingItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BilngSettings.AsObject;
  static toObject(includeInstance: boolean, msg: BilngSettings): BilngSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BilngSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BilngSettings;
  static deserializeBinaryFromReader(message: BilngSettings, reader: jspb.BinaryReader): BilngSettings;
}

export namespace BilngSettings {
  export type AsObject = {
    itemsList: Array<BilngSettingItem.AsObject>,
  }
}

export class BilngSettingItem extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string | undefined;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BilngSettingItem.AsObject;
  static toObject(includeInstance: boolean, msg: BilngSettingItem): BilngSettingItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BilngSettingItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BilngSettingItem;
  static deserializeBinaryFromReader(message: BilngSettingItem, reader: jspb.BinaryReader): BilngSettingItem;
}

export namespace BilngSettingItem {
  export type AsObject = {
    key?: string,
    value?: string,
  }
}

export class Billgroup extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Billgroup.AsObject;
  static toObject(includeInstance: boolean, msg: Billgroup): Billgroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Billgroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Billgroup;
  static deserializeBinaryFromReader(message: Billgroup, reader: jspb.BinaryReader): Billgroup;
}

export namespace Billgroup {
  export type AsObject = {
    code?: string,
    name?: string,
    stationNo?: number,
  }
}

export class GetBillGroupsRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<Billgroup>;
  setReplyList(value: Array<Billgroup>): void;
  addReply(value?: Billgroup, index?: number): Billgroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillGroupsRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillGroupsRs): GetBillGroupsRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillGroupsRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillGroupsRs;
  static deserializeBinaryFromReader(message: GetBillGroupsRs, reader: jspb.BinaryReader): GetBillGroupsRs;
}

export namespace GetBillGroupsRs {
  export type AsObject = {
    replyList: Array<Billgroup.AsObject>,
  }
}

export class GetBillGroupsRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillGroupsRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillGroupsRq): GetBillGroupsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillGroupsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillGroupsRq;
  static deserializeBinaryFromReader(message: GetBillGroupsRq, reader: jspb.BinaryReader): GetBillGroupsRq;
}

export namespace GetBillGroupsRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class Station extends jspb.Message {
  hasSectorCode(): boolean;
  clearSectorCode(): void;
  getSectorCode(): number | undefined;
  setSectorCode(value: number): void;

  hasSectorName(): boolean;
  clearSectorName(): void;
  getSectorName(): string | undefined;
  setSectorName(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIsHeadquarters(): boolean;
  clearIsHeadquarters(): void;
  getIsHeadquarters(): number | undefined;
  setIsHeadquarters(value: number): void;

  hasIsMaintsite(): boolean;
  clearIsMaintsite(): void;
  getIsMaintsite(): number | undefined;
  setIsMaintsite(value: number): void;

  hasIsMrreading(): boolean;
  clearIsMrreading(): void;
  getIsMrreading(): number | undefined;
  setIsMrreading(value: number): void;

  hasIsCservices(): boolean;
  clearIsCservices(): void;
  getIsCservices(): number | undefined;
  setIsCservices(value: number): void;

  hasIsReceipting(): boolean;
  clearIsReceipting(): void;
  getIsReceipting(): number | undefined;
  setIsReceipting(value: number): void;

  hasTelWork(): boolean;
  clearTelWork(): void;
  getTelWork(): string | undefined;
  setTelWork(value: string): void;

  hasLnAddress1(): boolean;
  clearLnAddress1(): void;
  getLnAddress1(): string | undefined;
  setLnAddress1(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

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
    sectorCode?: number,
    sectorName?: string,
    stationNo?: number,
    name?: string,
    description?: string,
    isHeadquarters?: number,
    isMaintsite?: number,
    isMrreading?: number,
    isCservices?: number,
    isReceipting?: number,
    telWork?: string,
    lnAddress1?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
  }
}

export class GetStationsRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<Station>;
  setReplyList(value: Array<Station>): void;
  addReply(value?: Station, index?: number): Station;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStationsRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetStationsRs): GetStationsRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStationsRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStationsRs;
  static deserializeBinaryFromReader(message: GetStationsRs, reader: jspb.BinaryReader): GetStationsRs;
}

export namespace GetStationsRs {
  export type AsObject = {
    replyList: Array<Station.AsObject>,
  }
}

export class GetStationsRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStationsRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStationsRq): GetStationsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStationsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStationsRq;
  static deserializeBinaryFromReader(message: GetStationsRq, reader: jspb.BinaryReader): GetStationsRq;
}

export namespace GetStationsRq {
  export type AsObject = {
  }
}

export class Employer extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasCashierId(): boolean;
  clearCashierId(): void;
  getCashierId(): string | undefined;
  setCashierId(value: string): void;

  hasIsReader(): boolean;
  clearIsReader(): void;
  getIsReader(): boolean | undefined;
  setIsReader(value: boolean): void;

  hasIsCollector(): boolean;
  clearIsCollector(): void;
  getIsCollector(): boolean | undefined;
  setIsCollector(value: boolean): void;

  hasOriginalStation(): boolean;
  clearOriginalStation(): void;
  getOriginalStation(): string | undefined;
  setOriginalStation(value: string): void;

  hasBillingempid(): boolean;
  clearBillingempid(): void;
  getBillingempid(): string | undefined;
  setBillingempid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employer.AsObject;
  static toObject(includeInstance: boolean, msg: Employer): Employer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Employer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employer;
  static deserializeBinaryFromReader(message: Employer, reader: jspb.BinaryReader): Employer;
}

export namespace Employer {
  export type AsObject = {
    id?: string,
    name?: string,
    stationNo?: number,
    cashierId?: string,
    isReader?: boolean,
    isCollector?: boolean,
    originalStation?: string,
    billingempid?: string,
  }
}

export class GetEmployeesRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<Employer>;
  setReplyList(value: Array<Employer>): void;
  addReply(value?: Employer, index?: number): Employer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmployeesRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmployeesRs): GetEmployeesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmployeesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmployeesRs;
  static deserializeBinaryFromReader(message: GetEmployeesRs, reader: jspb.BinaryReader): GetEmployeesRs;
}

export namespace GetEmployeesRs {
  export type AsObject = {
    replyList: Array<Employer.AsObject>,
  }
}

export class GetEmployeesRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmployeesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmployeesRq): GetEmployeesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmployeesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmployeesRq;
  static deserializeBinaryFromReader(message: GetEmployeesRq, reader: jspb.BinaryReader): GetEmployeesRq;
}

export namespace GetEmployeesRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class MeterWalk extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasAssignedTo(): boolean;
  clearAssignedTo(): void;
  getAssignedTo(): string | undefined;
  setAssignedTo(value: string): void;

  hasHandheldId(): boolean;
  clearHandheldId(): void;
  getHandheldId(): string | undefined;
  setHandheldId(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterWalk.AsObject;
  static toObject(includeInstance: boolean, msg: MeterWalk): MeterWalk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeterWalk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterWalk;
  static deserializeBinaryFromReader(message: MeterWalk, reader: jspb.BinaryReader): MeterWalk;
}

export namespace MeterWalk {
  export type AsObject = {
    code?: string,
    describe?: string,
    billgroup?: string,
    bookNo?: string,
    assignedTo?: string,
    handheldId?: string,
    stationNo?: number,
  }
}

export class GetMeterWalksRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<MeterWalk>;
  setReplyList(value: Array<MeterWalk>): void;
  addReply(value?: MeterWalk, index?: number): MeterWalk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterWalksRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterWalksRs): GetMeterWalksRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterWalksRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterWalksRs;
  static deserializeBinaryFromReader(message: GetMeterWalksRs, reader: jspb.BinaryReader): GetMeterWalksRs;
}

export namespace GetMeterWalksRs {
  export type AsObject = {
    replyList: Array<MeterWalk.AsObject>,
  }
}

export class GetMeterWalksRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterWalksRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterWalksRq): GetMeterWalksRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterWalksRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterWalksRq;
  static deserializeBinaryFromReader(message: GetMeterWalksRq, reader: jspb.BinaryReader): GetMeterWalksRq;
}

export namespace GetMeterWalksRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class MeterBook extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasNoWalks(): boolean;
  clearNoWalks(): void;
  getNoWalks(): number | undefined;
  setNoWalks(value: number): void;

  hasHandheldId(): boolean;
  clearHandheldId(): void;
  getHandheldId(): string | undefined;
  setHandheldId(value: string): void;

  hasMreaderId(): boolean;
  clearMreaderId(): void;
  getMreaderId(): string | undefined;
  setMreaderId(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterBook.AsObject;
  static toObject(includeInstance: boolean, msg: MeterBook): MeterBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeterBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterBook;
  static deserializeBinaryFromReader(message: MeterBook, reader: jspb.BinaryReader): MeterBook;
}

export namespace MeterBook {
  export type AsObject = {
    code?: string,
    describe?: string,
    billgroup?: string,
    noWalks?: number,
    handheldId?: string,
    mreaderId?: string,
    stationNo?: number,
  }
}

export class GetMeterBooksRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<MeterBook>;
  setReplyList(value: Array<MeterBook>): void;
  addReply(value?: MeterBook, index?: number): MeterBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterBooksRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterBooksRs): GetMeterBooksRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterBooksRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterBooksRs;
  static deserializeBinaryFromReader(message: GetMeterBooksRs, reader: jspb.BinaryReader): GetMeterBooksRs;
}

export namespace GetMeterBooksRs {
  export type AsObject = {
    replyList: Array<MeterBook.AsObject>,
  }
}

export class GetMeterBooksRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterBooksRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterBooksRq): GetMeterBooksRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterBooksRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterBooksRq;
  static deserializeBinaryFromReader(message: GetMeterBooksRq, reader: jspb.BinaryReader): GetMeterBooksRq;
}

export namespace GetMeterBooksRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class CustomerWalk extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasAssignedTo(): boolean;
  clearAssignedTo(): void;
  getAssignedTo(): string | undefined;
  setAssignedTo(value: string): void;

  hasHandheldId(): boolean;
  clearHandheldId(): void;
  getHandheldId(): string | undefined;
  setHandheldId(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasMarketing(): boolean;
  clearMarketing(): void;
  getMarketing(): number | undefined;
  setMarketing(value: number): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerWalk.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerWalk): CustomerWalk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerWalk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerWalk;
  static deserializeBinaryFromReader(message: CustomerWalk, reader: jspb.BinaryReader): CustomerWalk;
}

export namespace CustomerWalk {
  export type AsObject = {
    code?: string,
    describe?: string,
    billgroup?: string,
    bookNo?: string,
    assignedTo?: string,
    handheldId?: string,
    stationNo?: number,
    marketing?: number,
    walkNo?: string,
  }
}

export class GetCustomerWalksRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<CustomerWalk>;
  setReplyList(value: Array<CustomerWalk>): void;
  addReply(value?: CustomerWalk, index?: number): CustomerWalk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerWalksRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerWalksRs): GetCustomerWalksRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerWalksRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerWalksRs;
  static deserializeBinaryFromReader(message: GetCustomerWalksRs, reader: jspb.BinaryReader): GetCustomerWalksRs;
}

export namespace GetCustomerWalksRs {
  export type AsObject = {
    replyList: Array<CustomerWalk.AsObject>,
  }
}

export class GetCustomerWalksRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerWalksRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerWalksRq): GetCustomerWalksRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerWalksRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerWalksRq;
  static deserializeBinaryFromReader(message: GetCustomerWalksRq, reader: jspb.BinaryReader): GetCustomerWalksRq;
}

export namespace GetCustomerWalksRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class CustomerBook extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasNoWalks(): boolean;
  clearNoWalks(): void;
  getNoWalks(): number | undefined;
  setNoWalks(value: number): void;

  hasAssignedTo(): boolean;
  clearAssignedTo(): void;
  getAssignedTo(): string | undefined;
  setAssignedTo(value: string): void;

  hasHandheldId(): boolean;
  clearHandheldId(): void;
  getHandheldId(): string | undefined;
  setHandheldId(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBook.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBook): CustomerBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBook;
  static deserializeBinaryFromReader(message: CustomerBook, reader: jspb.BinaryReader): CustomerBook;
}

export namespace CustomerBook {
  export type AsObject = {
    code?: string,
    describe?: string,
    billgroup?: string,
    noWalks?: number,
    assignedTo?: string,
    handheldId?: string,
    stationNo?: number,
  }
}

export class GetCustomerBooksRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<CustomerBook>;
  setReplyList(value: Array<CustomerBook>): void;
  addReply(value?: CustomerBook, index?: number): CustomerBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerBooksRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerBooksRs): GetCustomerBooksRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerBooksRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerBooksRs;
  static deserializeBinaryFromReader(message: GetCustomerBooksRs, reader: jspb.BinaryReader): GetCustomerBooksRs;
}

export namespace GetCustomerBooksRs {
  export type AsObject = {
    replyList: Array<CustomerBook.AsObject>,
  }
}

export class GetCustomerBooksRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerBooksRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerBooksRq): GetCustomerBooksRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerBooksRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerBooksRq;
  static deserializeBinaryFromReader(message: GetCustomerBooksRq, reader: jspb.BinaryReader): GetCustomerBooksRq;
}

export namespace GetCustomerBooksRq {
  export type AsObject = {
    stationNo?: number,
  }
}

export class GetConsumptionGroupTypesRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<ConsumptionGroup>;
  setReplyList(value: Array<ConsumptionGroup>): void;
  addReply(value?: ConsumptionGroup, index?: number): ConsumptionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionGroupTypesRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionGroupTypesRs): GetConsumptionGroupTypesRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionGroupTypesRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionGroupTypesRs;
  static deserializeBinaryFromReader(message: GetConsumptionGroupTypesRs, reader: jspb.BinaryReader): GetConsumptionGroupTypesRs;
}

export namespace GetConsumptionGroupTypesRs {
  export type AsObject = {
    replyList: Array<ConsumptionGroup.AsObject>,
  }
}

export class GetConsumptionGroupTypesRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionGroupTypesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionGroupTypesRq): GetConsumptionGroupTypesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionGroupTypesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionGroupTypesRq;
  static deserializeBinaryFromReader(message: GetConsumptionGroupTypesRq, reader: jspb.BinaryReader): GetConsumptionGroupTypesRq;
}

export namespace GetConsumptionGroupTypesRq {
  export type AsObject = {
    stationno?: number,
  }
}

export class ConsumptionGroup extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasConstumptiongroupcode(): boolean;
  clearConstumptiongroupcode(): void;
  getConstumptiongroupcode(): string | undefined;
  setConstumptiongroupcode(value: string): void;

  clearConsumptiontypesList(): void;
  getConsumptiontypesList(): Array<ConsumptionType>;
  setConsumptiontypesList(value: Array<ConsumptionType>): void;
  addConsumptiontypes(value?: ConsumptionType, index?: number): ConsumptionType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumptionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumptionGroup): ConsumptionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumptionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumptionGroup;
  static deserializeBinaryFromReader(message: ConsumptionGroup, reader: jspb.BinaryReader): ConsumptionGroup;
}

export namespace ConsumptionGroup {
  export type AsObject = {
    description?: string,
    constumptiongroupcode?: string,
    consumptiontypesList: Array<ConsumptionType.AsObject>,
  }
}

export class ConsumptionType extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasConstumptioncode(): boolean;
  clearConstumptioncode(): void;
  getConstumptioncode(): string | undefined;
  setConstumptioncode(value: string): void;

  hasConstumptiongroupcode(): boolean;
  clearConstumptiongroupcode(): void;
  getConstumptiongroupcode(): string | undefined;
  setConstumptiongroupcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumptionType.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumptionType): ConsumptionType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumptionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumptionType;
  static deserializeBinaryFromReader(message: ConsumptionType, reader: jspb.BinaryReader): ConsumptionType;
}

export namespace ConsumptionType {
  export type AsObject = {
    description?: string,
    constumptioncode?: string,
    constumptiongroupcode?: string,
  }
}

export class GetConsumptionTypesGroupRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<ConsumptionType>;
  setReplyList(value: Array<ConsumptionType>): void;
  addReply(value?: ConsumptionType, index?: number): ConsumptionType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionTypesGroupRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionTypesGroupRs): GetConsumptionTypesGroupRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionTypesGroupRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionTypesGroupRs;
  static deserializeBinaryFromReader(message: GetConsumptionTypesGroupRs, reader: jspb.BinaryReader): GetConsumptionTypesGroupRs;
}

export namespace GetConsumptionTypesGroupRs {
  export type AsObject = {
    replyList: Array<ConsumptionType.AsObject>,
  }
}

export class GetConsumptionTypesGroupRq extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): string | undefined;
  setGroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionTypesGroupRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionTypesGroupRq): GetConsumptionTypesGroupRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionTypesGroupRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionTypesGroupRq;
  static deserializeBinaryFromReader(message: GetConsumptionTypesGroupRq, reader: jspb.BinaryReader): GetConsumptionTypesGroupRq;
}

export namespace GetConsumptionTypesGroupRq {
  export type AsObject = {
    group?: string,
  }
}

export class GetConsumptionTypesStationRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<ConsumptionType>;
  setReplyList(value: Array<ConsumptionType>): void;
  addReply(value?: ConsumptionType, index?: number): ConsumptionType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionTypesStationRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionTypesStationRs): GetConsumptionTypesStationRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionTypesStationRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionTypesStationRs;
  static deserializeBinaryFromReader(message: GetConsumptionTypesStationRs, reader: jspb.BinaryReader): GetConsumptionTypesStationRs;
}

export namespace GetConsumptionTypesStationRs {
  export type AsObject = {
    replyList: Array<ConsumptionType.AsObject>,
  }
}

export class GetConsumptionTypesStationRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConsumptionTypesStationRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConsumptionTypesStationRq): GetConsumptionTypesStationRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConsumptionTypesStationRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConsumptionTypesStationRq;
  static deserializeBinaryFromReader(message: GetConsumptionTypesStationRq, reader: jspb.BinaryReader): GetConsumptionTypesStationRq;
}

export namespace GetConsumptionTypesStationRq {
  export type AsObject = {
    stationno?: number,
  }
}

export class Complaint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasComplaintId(): boolean;
  clearComplaintId(): void;
  getComplaintId(): number | undefined;
  setComplaintId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ComplaintTypeMap[keyof ComplaintTypeMap] | undefined;
  setType(value: ComplaintTypeMap[keyof ComplaintTypeMap]): void;

  hasDegree(): boolean;
  clearDegree(): void;
  getDegree(): ComplaintDegreeMap[keyof ComplaintDegreeMap] | undefined;
  setDegree(value: ComplaintDegreeMap[keyof ComplaintDegreeMap]): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): string | undefined;
  setNotes(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasTel(): boolean;
  clearTel(): void;
  getTel(): string | undefined;
  setTel(value: string): void;

  hasCustomerName(): boolean;
  clearCustomerName(): void;
  getCustomerName(): string | undefined;
  setCustomerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Complaint.AsObject;
  static toObject(includeInstance: boolean, msg: Complaint): Complaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Complaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Complaint;
  static deserializeBinaryFromReader(message: Complaint, reader: jspb.BinaryReader): Complaint;
}

export namespace Complaint {
  export type AsObject = {
    id?: number,
    complaintId?: number,
    custkey?: string,
    deviceId?: string,
    bookNo?: string,
    walkNo?: string,
    type?: ComplaintTypeMap[keyof ComplaintTypeMap],
    degree?: ComplaintDegreeMap[keyof ComplaintDegreeMap],
    notes?: string,
    lat?: number,
    lng?: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    address?: string,
    tel?: string,
    customerName?: string,
  }
}

export class RegisterCustomerComplaintRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): boolean | undefined;
  setReply(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCustomerComplaintRs.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCustomerComplaintRs): RegisterCustomerComplaintRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCustomerComplaintRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCustomerComplaintRs;
  static deserializeBinaryFromReader(message: RegisterCustomerComplaintRs, reader: jspb.BinaryReader): RegisterCustomerComplaintRs;
}

export namespace RegisterCustomerComplaintRs {
  export type AsObject = {
    reply?: boolean,
  }
}

export class RegisterCustomerComplaintRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasComp(): boolean;
  clearComp(): void;
  getComp(): Complaint;
  setComp(value?: Complaint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCustomerComplaintRq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCustomerComplaintRq): RegisterCustomerComplaintRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCustomerComplaintRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCustomerComplaintRq;
  static deserializeBinaryFromReader(message: RegisterCustomerComplaintRq, reader: jspb.BinaryReader): RegisterCustomerComplaintRq;
}

export namespace RegisterCustomerComplaintRq {
  export type AsObject = {
    stationNo?: number,
    comp: Complaint.AsObject,
  }
}

export class CustomerNote extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasConstumptiongrpcode(): boolean;
  clearConstumptiongrpcode(): void;
  getConstumptiongrpcode(): string | undefined;
  setConstumptiongrpcode(value: string): void;

  hasServAloc(): boolean;
  clearServAloc(): void;
  getServAloc(): number | undefined;
  setServAloc(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerNote.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerNote): CustomerNote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerNote;
  static deserializeBinaryFromReader(message: CustomerNote, reader: jspb.BinaryReader): CustomerNote;
}

export namespace CustomerNote {
  export type AsObject = {
    custkey?: string,
    nounits?: number,
    constumptiongrpcode?: string,
    servAloc?: number,
  }
}

export class UpdateCustomerDataRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasO(): boolean;
  clearO(): void;
  getO(): CustomerNote;
  setO(value?: CustomerNote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerDataRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerDataRq): UpdateCustomerDataRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerDataRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerDataRq;
  static deserializeBinaryFromReader(message: UpdateCustomerDataRq, reader: jspb.BinaryReader): UpdateCustomerDataRq;
}

export namespace UpdateCustomerDataRq {
  export type AsObject = {
    stationNo?: number,
    o: CustomerNote.AsObject,
  }
}

export class SetGardRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  clearStmsList(): void;
  getStmsList(): Array<HHCollection>;
  setStmsList(value: Array<HHCollection>): void;
  addStms(value?: HHCollection, index?: number): HHCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGardRq.AsObject;
  static toObject(includeInstance: boolean, msg: SetGardRq): SetGardRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGardRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGardRq;
  static deserializeBinaryFromReader(message: SetGardRq, reader: jspb.BinaryReader): SetGardRq;
}

export namespace SetGardRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    isretry?: boolean,
    stmsList: Array<HHCollection.AsObject>,
  }
}

export class DepositValidationResponce extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DepositValidationStatusMap[keyof DepositValidationStatusMap] | undefined;
  setStatus(value: DepositValidationStatusMap[keyof DepositValidationStatusMap]): void;

  hasMasdepositid(): boolean;
  clearMasdepositid(): void;
  getMasdepositid(): number | undefined;
  setMasdepositid(value: number): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositValidationResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DepositValidationResponce): DepositValidationResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositValidationResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositValidationResponce;
  static deserializeBinaryFromReader(message: DepositValidationResponce, reader: jspb.BinaryReader): DepositValidationResponce;
}

export namespace DepositValidationResponce {
  export type AsObject = {
    status?: DepositValidationStatusMap[keyof DepositValidationStatusMap],
    masdepositid?: number,
    count?: number,
    amount?: number,
  }
}

export class ValidateDepositRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasMasdepositid(): boolean;
  clearMasdepositid(): void;
  getMasdepositid(): number | undefined;
  setMasdepositid(value: number): void;

  hasCollectorempid(): boolean;
  clearCollectorempid(): void;
  getCollectorempid(): number | undefined;
  setCollectorempid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateDepositRq.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateDepositRq): ValidateDepositRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateDepositRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateDepositRq;
  static deserializeBinaryFromReader(message: ValidateDepositRq, reader: jspb.BinaryReader): ValidateDepositRq;
}

export namespace ValidateDepositRq {
  export type AsObject = {
    stationNo?: number,
    masdepositid?: number,
    collectorempid?: number,
  }
}

export class HHCollection extends jspb.Message {
  hasCollectorStationNo(): boolean;
  clearCollectorStationNo(): void;
  getCollectorStationNo(): number | undefined;
  setCollectorStationNo(value: number): void;

  hasOwnerStationNo(): boolean;
  clearOwnerStationNo(): void;
  getOwnerStationNo(): number | undefined;
  setOwnerStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

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

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCollectionId(): boolean;
  clearCollectionId(): void;
  getCollectionId(): number | undefined;
  setCollectionId(value: number): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasTelNo(): boolean;
  clearTelNo(): void;
  getTelNo(): string | undefined;
  setTelNo(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasPayBy(): boolean;
  clearPayBy(): void;
  getPayBy(): date_pb.MasDateTime | undefined;
  setPayBy(value?: date_pb.MasDateTime): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasAmtCollected(): boolean;
  clearAmtCollected(): void;
  getAmtCollected(): number | undefined;
  setAmtCollected(value: number): void;

  hasPaymentMethod(): boolean;
  clearPaymentMethod(): void;
  getPaymentMethod(): number | undefined;
  setPaymentMethod(value: number): void;

  hasPaymentMethodBilngCode(): boolean;
  clearPaymentMethodBilngCode(): void;
  getPaymentMethodBilngCode(): string | undefined;
  setPaymentMethodBilngCode(value: string): void;

  hasChqNo(): boolean;
  clearChqNo(): void;
  getChqNo(): string | undefined;
  setChqNo(value: string): void;

  hasChqDetails(): boolean;
  clearChqDetails(): void;
  getChqDetails(): string | undefined;
  setChqDetails(value: string): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasDelivreyDate(): boolean;
  clearDelivreyDate(): void;
  getDelivreyDate(): date_pb.MasDateTime | undefined;
  setDelivreyDate(value?: date_pb.MasDateTime): void;

  hasDelivreyMan(): boolean;
  clearDelivreyMan(): void;
  getDelivreyMan(): string | undefined;
  setDelivreyMan(value: string): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): string | undefined;
  setLat(value: string): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): string | undefined;
  setLng(value: string): void;

  hasCollectiorEmpId(): boolean;
  clearCollectiorEmpId(): void;
  getCollectiorEmpId(): number | undefined;
  setCollectiorEmpId(value: number): void;

  hasOwnerEmpId(): boolean;
  clearOwnerEmpId(): void;
  getOwnerEmpId(): number | undefined;
  setOwnerEmpId(value: number): void;

  hasIsByCashier(): boolean;
  clearIsByCashier(): void;
  getIsByCashier(): boolean | undefined;
  setIsByCashier(value: boolean): void;

  hasDepositid(): boolean;
  clearDepositid(): void;
  getDepositid(): number | undefined;
  setDepositid(value: number): void;

  hasBilngDepositId(): boolean;
  clearBilngDepositId(): void;
  getBilngDepositId(): number | undefined;
  setBilngDepositId(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasFileNo(): boolean;
  clearFileNo(): void;
  getFileNo(): number | undefined;
  setFileNo(value: number): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasMarked(): boolean;
  clearMarked(): void;
  getMarked(): boolean | undefined;
  setMarked(value: boolean): void;

  hasTransSerialNo(): boolean;
  clearTransSerialNo(): void;
  getTransSerialNo(): number | undefined;
  setTransSerialNo(value: number): void;

  hasMreceiptNo(): boolean;
  clearMreceiptNo(): void;
  getMreceiptNo(): string | undefined;
  setMreceiptNo(value: string): void;

  hasCollectiontype(): boolean;
  clearCollectiontype(): void;
  getCollectiontype(): COLLECTION_TYPEMap[keyof COLLECTION_TYPEMap] | undefined;
  setCollectiontype(value: COLLECTION_TYPEMap[keyof COLLECTION_TYPEMap]): void;

  hasOriginalEmpStationName(): boolean;
  clearOriginalEmpStationName(): void;
  getOriginalEmpStationName(): string | undefined;
  setOriginalEmpStationName(value: string): void;

  hasReceiptCharge1(): boolean;
  clearReceiptCharge1(): void;
  getReceiptCharge1(): number | undefined;
  setReceiptCharge1(value: number): void;

  hasReceiptCharge2(): boolean;
  clearReceiptCharge2(): void;
  getReceiptCharge2(): number | undefined;
  setReceiptCharge2(value: number): void;

  hasReceiptCharge3(): boolean;
  clearReceiptCharge3(): void;
  getReceiptCharge3(): number | undefined;
  setReceiptCharge3(value: number): void;

  hasTotalStmCollection(): boolean;
  clearTotalStmCollection(): void;
  getTotalStmCollection(): number | undefined;
  setTotalStmCollection(value: number): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): number | undefined;
  setUserId(value: number): void;

  hasMarketing(): boolean;
  clearMarketing(): void;
  getMarketing(): number | undefined;
  setMarketing(value: number): void;

  hasGardStampDate(): boolean;
  clearGardStampDate(): void;
  getGardStampDate(): date_pb.MasDateTime | undefined;
  setGardStampDate(value?: date_pb.MasDateTime): void;

  hasDiscount(): boolean;
  clearDiscount(): void;
  getDiscount(): number | undefined;
  setDiscount(value: number): void;

  hasChqBank(): boolean;
  clearChqBank(): void;
  getChqBank(): string | undefined;
  setChqBank(value: string): void;

  hasCustomerId(): boolean;
  clearCustomerId(): void;
  getCustomerId(): number | undefined;
  setCustomerId(value: number): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): number | undefined;
  setConnectionId(value: number): void;

  hasReceiptType(): boolean;
  clearReceiptType(): void;
  getReceiptType(): RECEIPT_TYPEMap[keyof RECEIPT_TYPEMap] | undefined;
  setReceiptType(value: RECEIPT_TYPEMap[keyof RECEIPT_TYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHCollection.AsObject;
  static toObject(includeInstance: boolean, msg: HHCollection): HHCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHCollection;
  static deserializeBinaryFromReader(message: HHCollection, reader: jspb.BinaryReader): HHCollection;
}

export namespace HHCollection {
  export type AsObject = {
    collectorStationNo?: number,
    ownerStationNo?: number,
    billgroup?: string,
    cycleId?: number,
    bookNo?: string,
    walkNo?: string,
    seqNo?: number,
    custkey?: string,
    paymentNo?: string,
    collectionId?: number,
    surname?: string,
    telNo?: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    payBy?: date_pb.MasDateTime.AsObject,
    deliverySt?: number,
    amtCollected?: number,
    paymentMethod?: number,
    paymentMethodBilngCode?: string,
    chqNo?: string,
    chqDetails?: string,
    deviceid?: string,
    delivreyDate?: date_pb.MasDateTime.AsObject,
    delivreyMan?: string,
    stampUser?: string,
    lat?: string,
    lng?: string,
    collectiorEmpId?: number,
    ownerEmpId?: number,
    isByCashier?: boolean,
    depositid?: number,
    bilngDepositId?: number,
    oldKey?: string,
    fileNo?: number,
    statmNo?: number,
    marked?: boolean,
    transSerialNo?: number,
    mreceiptNo?: string,
    collectiontype?: COLLECTION_TYPEMap[keyof COLLECTION_TYPEMap],
    originalEmpStationName?: string,
    receiptCharge1?: number,
    receiptCharge2?: number,
    receiptCharge3?: number,
    totalStmCollection?: number,
    userId?: number,
    marketing?: number,
    gardStampDate?: date_pb.MasDateTime.AsObject,
    discount?: number,
    chqBank?: string,
    customerId?: number,
    propertyId?: number,
    connectionId?: number,
    receiptType?: RECEIPT_TYPEMap[keyof RECEIPT_TYPEMap],
  }
}

export class SetStatmsRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasMasdepositid(): boolean;
  clearMasdepositid(): void;
  getMasdepositid(): number | undefined;
  setMasdepositid(value: number): void;

  hasCollectorempid(): boolean;
  clearCollectorempid(): void;
  getCollectorempid(): number | undefined;
  setCollectorempid(value: number): void;

  hasDepositDate(): boolean;
  clearDepositDate(): void;
  getDepositDate(): date_pb.MasDateTime;
  setDepositDate(value?: date_pb.MasDateTime): void;

  clearStmsList(): void;
  getStmsList(): Array<HHCollection>;
  setStmsList(value: Array<HHCollection>): void;
  addStms(value?: HHCollection, index?: number): HHCollection;

  hasReceptno(): boolean;
  clearReceptno(): void;
  getReceptno(): string | undefined;
  setReceptno(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasEnableminiaflag(): boolean;
  clearEnableminiaflag(): void;
  getEnableminiaflag(): boolean | undefined;
  setEnableminiaflag(value: boolean): void;

  hasBilngcollectorid(): boolean;
  clearBilngcollectorid(): void;
  getBilngcollectorid(): string | undefined;
  setBilngcollectorid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStatmsRq.AsObject;
  static toObject(includeInstance: boolean, msg: SetStatmsRq): SetStatmsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStatmsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStatmsRq;
  static deserializeBinaryFromReader(message: SetStatmsRq, reader: jspb.BinaryReader): SetStatmsRq;
}

export namespace SetStatmsRq {
  export type AsObject = {
    stationNo?: number,
    masdepositid?: number,
    collectorempid?: number,
    depositDate: date_pb.MasDateTime.AsObject,
    stmsList: Array<HHCollection.AsObject>,
    receptno?: string,
    isretry?: boolean,
    enableminiaflag?: boolean,
    bilngcollectorid?: string,
  }
}

export class HHReadingRes extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasReadingCycleid(): boolean;
  clearReadingCycleid(): void;
  getReadingCycleid(): number | undefined;
  setReadingCycleid(value: number): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasSeqnceNo(): boolean;
  clearSeqnceNo(): void;
  getSeqnceNo(): number | undefined;
  setSeqnceNo(value: number): void;

  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasCrDate(): boolean;
  clearCrDate(): void;
  getCrDate(): date_pb.MasDateTime | undefined;
  setCrDate(value?: date_pb.MasDateTime): void;

  hasCrTime(): boolean;
  clearCrTime(): void;
  getCrTime(): string | undefined;
  setCrTime(value: string): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasClockOver(): boolean;
  clearClockOver(): void;
  getClockOver(): number | undefined;
  setClockOver(value: number): void;

  hasDialsChng(): boolean;
  clearDialsChng(): void;
  getDialsChng(): number | undefined;
  setDialsChng(value: number): void;

  hasWrouteChng(): boolean;
  clearWrouteChng(): void;
  getWrouteChng(): number | undefined;
  setWrouteChng(value: number): void;

  hasNewConnct(): boolean;
  clearNewConnct(): void;
  getNewConnct(): number | undefined;
  setNewConnct(value: number): void;

  hasDescrepancy(): boolean;
  clearDescrepancy(): void;
  getDescrepancy(): number | undefined;
  setDescrepancy(value: number): void;

  hasDescrMsg(): boolean;
  clearDescrMsg(): void;
  getDescrMsg(): string | undefined;
  setDescrMsg(value: string): void;

  hasDescrReset(): boolean;
  clearDescrReset(): void;
  getDescrReset(): number | undefined;
  setDescrReset(value: number): void;

  hasAccesCode(): boolean;
  clearAccesCode(): void;
  getAccesCode(): string | undefined;
  setAccesCode(value: string): void;

  hasAccesDscr(): boolean;
  clearAccesDscr(): void;
  getAccesDscr(): string | undefined;
  setAccesDscr(value: string): void;

  hasOpStatus(): boolean;
  clearOpStatus(): void;
  getOpStatus(): number | undefined;
  setOpStatus(value: number): void;

  hasPropertyVacated(): boolean;
  clearPropertyVacated(): void;
  getPropertyVacated(): number | undefined;
  setPropertyVacated(value: number): void;

  hasConStatus(): boolean;
  clearConStatus(): void;
  getConStatus(): string | undefined;
  setConStatus(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasSyncMasHh(): boolean;
  clearSyncMasHh(): void;
  getSyncMasHh(): number | undefined;
  setSyncMasHh(value: number): void;

  hasPrAccesCode(): boolean;
  clearPrAccesCode(): void;
  getPrAccesCode(): string | undefined;
  setPrAccesCode(value: string): void;

  hasPrOpStatus(): boolean;
  clearPrOpStatus(): void;
  getPrOpStatus(): number | undefined;
  setPrOpStatus(value: number): void;

  hasConnAvrgConsump(): boolean;
  clearConnAvrgConsump(): void;
  getConnAvrgConsump(): number | undefined;
  setConnAvrgConsump(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasNewNoUnits(): boolean;
  clearNewNoUnits(): void;
  getNewNoUnits(): number | undefined;
  setNewNoUnits(value: number): void;

  hasSuezAvg(): boolean;
  clearSuezAvg(): void;
  getSuezAvg(): number | undefined;
  setSuezAvg(value: number): void;

  hasNoDials(): boolean;
  clearNoDials(): void;
  getNoDials(): number | undefined;
  setNoDials(value: number): void;

  hasSuezMonthlyAvrgConsump(): boolean;
  clearSuezMonthlyAvrgConsump(): void;
  getSuezMonthlyAvrgConsump(): number | undefined;
  setSuezMonthlyAvrgConsump(value: number): void;

  hasFileNo(): boolean;
  clearFileNo(): void;
  getFileNo(): number | undefined;
  setFileNo(value: number): void;

  hasOlkKey(): boolean;
  clearOlkKey(): void;
  getOlkKey(): string | undefined;
  setOlkKey(value: string): void;

  hasReadingNote(): boolean;
  clearReadingNote(): void;
  getReadingNote(): number | undefined;
  setReadingNote(value: number): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasIsEstimReading(): boolean;
  clearIsEstimReading(): void;
  getIsEstimReading(): boolean | undefined;
  setIsEstimReading(value: boolean): void;

  clearConndtltarrifallocList(): void;
  getConndtltarrifallocList(): Array<ConnDtlTarrifAlloc>;
  setConndtltarrifallocList(value: Array<ConnDtlTarrifAlloc>): void;
  addConndtltarrifalloc(value?: ConnDtlTarrifAlloc, index?: number): ConnDtlTarrifAlloc;

  hasIsManualEstim(): boolean;
  clearIsManualEstim(): void;
  getIsManualEstim(): boolean | undefined;
  setIsManualEstim(value: boolean): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): number | undefined;
  setConnectionId(value: number): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHReadingRes.AsObject;
  static toObject(includeInstance: boolean, msg: HHReadingRes): HHReadingRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHReadingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHReadingRes;
  static deserializeBinaryFromReader(message: HHReadingRes, reader: jspb.BinaryReader): HHReadingRes;
}

export namespace HHReadingRes {
  export type AsObject = {
    billgroup?: string,
    cycleId?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    readingCycleid?: number,
    bookNo?: string,
    walkNo?: string,
    seqnceNo?: number,
    billCustkey?: string,
    crDate?: date_pb.MasDateTime.AsObject,
    crTime?: string,
    crReading?: number,
    prReading?: number,
    consump?: number,
    meterType?: string,
    meterRef?: string,
    clockOver?: number,
    dialsChng?: number,
    wrouteChng?: number,
    newConnct?: number,
    descrepancy?: number,
    descrMsg?: string,
    descrReset?: number,
    accesCode?: string,
    accesDscr?: string,
    opStatus?: number,
    propertyVacated?: number,
    conStatus?: string,
    deviceId?: string,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    lat?: number,
    lng?: number,
    syncMasHh?: number,
    prAccesCode?: string,
    prOpStatus?: number,
    connAvrgConsump?: number,
    propRef?: string,
    newNoUnits?: number,
    suezAvg?: number,
    noDials?: number,
    suezMonthlyAvrgConsump?: number,
    fileNo?: number,
    olkKey?: string,
    readingNote?: number,
    empId?: number,
    isEstimReading?: boolean,
    conndtltarrifallocList: Array<ConnDtlTarrifAlloc.AsObject>,
    isManualEstim?: boolean,
    propertyId?: number,
    connectionId?: number,
    meterId?: number,
  }
}

export class SetReadingsRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  clearRdgsList(): void;
  getRdgsList(): Array<HHReadingRes>;
  setRdgsList(value: Array<HHReadingRes>): void;
  addRdgs(value?: HHReadingRes, index?: number): HHReadingRes;

  hasPostnegativeflage(): boolean;
  clearPostnegativeflage(): void;
  getPostnegativeflage(): PostNegativeEnumMap[keyof PostNegativeEnumMap] | undefined;
  setPostnegativeflage(value: PostNegativeEnumMap[keyof PostNegativeEnumMap]): void;

  hasUflag(): boolean;
  clearUflag(): void;
  getUflag(): boolean | undefined;
  setUflag(value: boolean): void;

  hasPostcyclescount(): boolean;
  clearPostcyclescount(): void;
  getPostcyclescount(): number | undefined;
  setPostcyclescount(value: number): void;

  hasFrommetrrdg(): boolean;
  clearFrommetrrdg(): void;
  getFrommetrrdg(): boolean | undefined;
  setFrommetrrdg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReadingsRq.AsObject;
  static toObject(includeInstance: boolean, msg: SetReadingsRq): SetReadingsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetReadingsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReadingsRq;
  static deserializeBinaryFromReader(message: SetReadingsRq, reader: jspb.BinaryReader): SetReadingsRq;
}

export namespace SetReadingsRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    rdgsList: Array<HHReadingRes.AsObject>,
    postnegativeflage?: PostNegativeEnumMap[keyof PostNegativeEnumMap],
    uflag?: boolean,
    postcyclescount?: number,
    frommetrrdg?: boolean,
  }
}

export class GetCustomerBookStatusRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerBookStatusRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerBookStatusRq): GetCustomerBookStatusRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerBookStatusRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerBookStatusRq;
  static deserializeBinaryFromReader(message: GetCustomerBookStatusRq, reader: jspb.BinaryReader): GetCustomerBookStatusRq;
}

export namespace GetCustomerBookStatusRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
  }
}

export class GetCustomersBooksStatusRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<WalkStatus>;
  setReplyList(value: Array<WalkStatus>): void;
  addReply(value?: WalkStatus, index?: number): WalkStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomersBooksStatusRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomersBooksStatusRs): GetCustomersBooksStatusRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomersBooksStatusRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomersBooksStatusRs;
  static deserializeBinaryFromReader(message: GetCustomersBooksStatusRs, reader: jspb.BinaryReader): GetCustomersBooksStatusRs;
}

export namespace GetCustomersBooksStatusRs {
  export type AsObject = {
    replyList: Array<WalkStatus.AsObject>,
  }
}

export class GetCustomersBooksStatusRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomersBooksStatusRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomersBooksStatusRq): GetCustomersBooksStatusRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomersBooksStatusRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomersBooksStatusRq;
  static deserializeBinaryFromReader(message: GetCustomersBooksStatusRq, reader: jspb.BinaryReader): GetCustomersBooksStatusRq;
}

export namespace GetCustomersBooksStatusRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
  }
}

export class GetMeterBookStatusRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterBookStatusRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterBookStatusRq): GetMeterBookStatusRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterBookStatusRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterBookStatusRq;
  static deserializeBinaryFromReader(message: GetMeterBookStatusRq, reader: jspb.BinaryReader): GetMeterBookStatusRq;
}

export namespace GetMeterBookStatusRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
  }
}

export class WalkStatus extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): WalkStatusEnumMap[keyof WalkStatusEnumMap] | undefined;
  setStatus(value: WalkStatusEnumMap[keyof WalkStatusEnumMap]): void;

  hasStatusDesc(): boolean;
  clearStatusDesc(): void;
  getStatusDesc(): string | undefined;
  setStatusDesc(value: string): void;

  hasIsupdatble(): boolean;
  clearIsupdatble(): void;
  getIsupdatble(): boolean | undefined;
  setIsupdatble(value: boolean): void;

  hasIsredable(): boolean;
  clearIsredable(): void;
  getIsredable(): boolean | undefined;
  setIsredable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalkStatus.AsObject;
  static toObject(includeInstance: boolean, msg: WalkStatus): WalkStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalkStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalkStatus;
  static deserializeBinaryFromReader(message: WalkStatus, reader: jspb.BinaryReader): WalkStatus;
}

export namespace WalkStatus {
  export type AsObject = {
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    status?: WalkStatusEnumMap[keyof WalkStatusEnumMap],
    statusDesc?: string,
    isupdatble?: boolean,
    isredable?: boolean,
  }
}

export class GetMetersBooksStatusRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<WalkStatus>;
  setReplyList(value: Array<WalkStatus>): void;
  addReply(value?: WalkStatus, index?: number): WalkStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetersBooksStatusRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetersBooksStatusRs): GetMetersBooksStatusRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetersBooksStatusRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetersBooksStatusRs;
  static deserializeBinaryFromReader(message: GetMetersBooksStatusRs, reader: jspb.BinaryReader): GetMetersBooksStatusRs;
}

export namespace GetMetersBooksStatusRs {
  export type AsObject = {
    replyList: Array<WalkStatus.AsObject>,
  }
}

export class GetMetersBooksStatusRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetersBooksStatusRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetersBooksStatusRq): GetMetersBooksStatusRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetersBooksStatusRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetersBooksStatusRq;
  static deserializeBinaryFromReader(message: GetMetersBooksStatusRq, reader: jspb.BinaryReader): GetMetersBooksStatusRq;
}

export namespace GetMetersBooksStatusRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
  }
}

export class CancelStmRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasMasdepositid(): boolean;
  clearMasdepositid(): void;
  getMasdepositid(): number | undefined;
  setMasdepositid(value: number): void;

  hasMascollectionid(): boolean;
  clearMascollectionid(): void;
  getMascollectionid(): number | undefined;
  setMascollectionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStmRq.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStmRq): CancelStmRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelStmRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStmRq;
  static deserializeBinaryFromReader(message: CancelStmRq, reader: jspb.BinaryReader): CancelStmRq;
}

export namespace CancelStmRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    paymentNo?: string,
    cycleid?: number,
    masdepositid?: number,
    mascollectionid?: number,
  }
}

export class ProcessError extends jspb.Message {
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

  hasSeqnceNo(): boolean;
  clearSeqnceNo(): void;
  getSeqnceNo(): number | undefined;
  setSeqnceNo(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): string | undefined;
  setReason(value: string): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessError.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessError): ProcessError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessError;
  static deserializeBinaryFromReader(message: ProcessError, reader: jspb.BinaryReader): ProcessError;
}

export namespace ProcessError {
  export type AsObject = {
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    seqnceNo?: number,
    paymentNo?: string,
    billCustkey?: string,
    reason?: string,
    deliverySt?: number,
    amount?: number,
    name?: string,
    deviceid?: string,
  }
}

export class ProcessRow extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasTransno(): boolean;
  clearTransno(): void;
  getTransno(): number | undefined;
  setTransno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessRow.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessRow): ProcessRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessRow;
  static deserializeBinaryFromReader(message: ProcessRow, reader: jspb.BinaryReader): ProcessRow;
}

export namespace ProcessRow {
  export type AsObject = {
    custkey?: string,
    paymentno?: string,
    cycleid?: number,
    transno?: number,
  }
}

export class ProcessResult extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<ProcessRow>;
  setRowsList(value: Array<ProcessRow>): void;
  addRows(value?: ProcessRow, index?: number): ProcessRow;

  clearErrorrowsList(): void;
  getErrorrowsList(): Array<ProcessRow>;
  setErrorrowsList(value: Array<ProcessRow>): void;
  addErrorrows(value?: ProcessRow, index?: number): ProcessRow;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ProcessStatusMap[keyof ProcessStatusMap] | undefined;
  setStatus(value: ProcessStatusMap[keyof ProcessStatusMap]): void;

  hasProcessedcount(): boolean;
  clearProcessedcount(): void;
  getProcessedcount(): number | undefined;
  setProcessedcount(value: number): void;

  clearErrorsList(): void;
  getErrorsList(): Array<ProcessError>;
  setErrorsList(value: Array<ProcessError>): void;
  addErrors(value?: ProcessError, index?: number): ProcessError;

  clearWarrningsList(): void;
  getWarrningsList(): Array<ProcessError>;
  setWarrningsList(value: Array<ProcessError>): void;
  addWarrnings(value?: ProcessError, index?: number): ProcessError;

  hasStampdate(): boolean;
  clearStampdate(): void;
  getStampdate(): date_pb.MasDateTime | undefined;
  setStampdate(value?: date_pb.MasDateTime): void;

  hasStampuser(): boolean;
  clearStampuser(): void;
  getStampuser(): string | undefined;
  setStampuser(value: string): void;

  hasDepositid(): boolean;
  clearDepositid(): void;
  getDepositid(): number | undefined;
  setDepositid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessResult.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessResult): ProcessResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessResult;
  static deserializeBinaryFromReader(message: ProcessResult, reader: jspb.BinaryReader): ProcessResult;
}

export namespace ProcessResult {
  export type AsObject = {
    rowsList: Array<ProcessRow.AsObject>,
    errorrowsList: Array<ProcessRow.AsObject>,
    status?: ProcessStatusMap[keyof ProcessStatusMap],
    processedcount?: number,
    errorsList: Array<ProcessError.AsObject>,
    warrningsList: Array<ProcessError.AsObject>,
    stampdate?: date_pb.MasDateTime.AsObject,
    stampuser?: string,
    depositid?: number,
  }
}

export class GetAllStatmsForBillgroupRq extends jspb.Message {
  hasStartdate(): boolean;
  clearStartdate(): void;
  getStartdate(): date_pb.MasDateTime | undefined;
  setStartdate(value?: date_pb.MasDateTime): void;

  hasEnddate(): boolean;
  clearEnddate(): void;
  getEnddate(): date_pb.MasDateTime | undefined;
  setEnddate(value?: date_pb.MasDateTime): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): number | undefined;
  setWalkno(value: number): void;

  hasConvertnegativebalancetozero(): boolean;
  clearConvertnegativebalancetozero(): void;
  getConvertnegativebalancetozero(): boolean | undefined;
  setConvertnegativebalancetozero(value: boolean): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStatmsForBillgroupRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStatmsForBillgroupRq): GetAllStatmsForBillgroupRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStatmsForBillgroupRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStatmsForBillgroupRq;
  static deserializeBinaryFromReader(message: GetAllStatmsForBillgroupRq, reader: jspb.BinaryReader): GetAllStatmsForBillgroupRq;
}

export namespace GetAllStatmsForBillgroupRq {
  export type AsObject = {
    startdate?: date_pb.MasDateTime.AsObject,
    enddate?: date_pb.MasDateTime.AsObject,
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: number,
    convertnegativebalancetozero?: boolean,
    custkey?: string,
  }
}

export class GetAllStatmsForBillgroupRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<HHStatm>;
  setReplyList(value: Array<HHStatm>): void;
  addReply(value?: HHStatm, index?: number): HHStatm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllStatmsForBillgroupRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllStatmsForBillgroupRs): GetAllStatmsForBillgroupRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllStatmsForBillgroupRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllStatmsForBillgroupRs;
  static deserializeBinaryFromReader(message: GetAllStatmsForBillgroupRs, reader: jspb.BinaryReader): GetAllStatmsForBillgroupRs;
}

export namespace GetAllStatmsForBillgroupRs {
  export type AsObject = {
    replyList: Array<HHStatm.AsObject>,
  }
}

export class BillItem extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number | undefined;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillItem.AsObject;
  static toObject(includeInstance: boolean, msg: BillItem): BillItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillItem;
  static deserializeBinaryFromReader(message: BillItem, reader: jspb.BinaryReader): BillItem;
}

export namespace BillItem {
  export type AsObject = {
    code?: string,
    value?: number,
  }
}

export class STATM_CTYPE extends jspb.Message {
  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasWaterAmount(): boolean;
  clearWaterAmount(): void;
  getWaterAmount(): number | undefined;
  setWaterAmount(value: number): void;

  hasSewerAmount(): boolean;
  clearSewerAmount(): void;
  getSewerAmount(): number | undefined;
  setSewerAmount(value: number): void;

  hasOtherAmount(): boolean;
  clearOtherAmount(): void;
  getOtherAmount(): number | undefined;
  setOtherAmount(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STATM_CTYPE.AsObject;
  static toObject(includeInstance: boolean, msg: STATM_CTYPE): STATM_CTYPE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STATM_CTYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STATM_CTYPE;
  static deserializeBinaryFromReader(message: STATM_CTYPE, reader: jspb.BinaryReader): STATM_CTYPE;
}

export namespace STATM_CTYPE {
  export type AsObject = {
    cType?: string,
    waterAmount?: number,
    sewerAmount?: number,
    otherAmount?: number,
    noUnits?: number,
  }
}

export class HHStatm_COLLECTION_ROW extends jspb.Message {
  hasMasDepositid(): boolean;
  clearMasDepositid(): void;
  getMasDepositid(): number | undefined;
  setMasDepositid(value: number): void;

  hasMasCollectionId(): boolean;
  clearMasCollectionId(): void;
  getMasCollectionId(): number | undefined;
  setMasCollectionId(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasCollectionDate(): boolean;
  clearCollectionDate(): void;
  getCollectionDate(): date_pb.MasDateTime | undefined;
  setCollectionDate(value?: date_pb.MasDateTime): void;

  hasCollectedBy(): boolean;
  clearCollectedBy(): void;
  getCollectedBy(): number | undefined;
  setCollectedBy(value: number): void;

  hasCollectedByComp(): boolean;
  clearCollectedByComp(): void;
  getCollectedByComp(): string | undefined;
  setCollectedByComp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHStatm_COLLECTION_ROW.AsObject;
  static toObject(includeInstance: boolean, msg: HHStatm_COLLECTION_ROW): HHStatm_COLLECTION_ROW.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHStatm_COLLECTION_ROW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHStatm_COLLECTION_ROW;
  static deserializeBinaryFromReader(message: HHStatm_COLLECTION_ROW, reader: jspb.BinaryReader): HHStatm_COLLECTION_ROW;
}

export namespace HHStatm_COLLECTION_ROW {
  export type AsObject = {
    masDepositid?: number,
    masCollectionId?: number,
    amount?: number,
    collectionDate?: date_pb.MasDateTime.AsObject,
    collectedBy?: number,
    collectedByComp?: string,
  }
}

export class HHStatm extends jspb.Message {
  hasWalkNoNum(): boolean;
  clearWalkNoNum(): void;
  getWalkNoNum(): number | undefined;
  setWalkNoNum(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): number | undefined;
  setWalkNo(value: number): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasInitial(): boolean;
  clearInitial(): void;
  getInitial(): string | undefined;
  setInitial(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasTelNo(): boolean;
  clearTelNo(): void;
  getTelNo(): string | undefined;
  setTelNo(value: string): void;

  hasAddressTp(): boolean;
  clearAddressTp(): void;
  getAddressTp(): number | undefined;
  setAddressTp(value: number): void;

  hasUaAdress1(): boolean;
  clearUaAdress1(): void;
  getUaAdress1(): string | undefined;
  setUaAdress1(value: string): void;

  hasUaAdress2(): boolean;
  clearUaAdress2(): void;
  getUaAdress2(): string | undefined;
  setUaAdress2(value: string): void;

  hasUaAdress3(): boolean;
  clearUaAdress3(): void;
  getUaAdress3(): string | undefined;
  setUaAdress3(value: string): void;

  hasUaAdress4(): boolean;
  clearUaAdress4(): void;
  getUaAdress4(): string | undefined;
  setUaAdress4(value: string): void;

  hasUaAdress5(): boolean;
  clearUaAdress5(): void;
  getUaAdress5(): string | undefined;
  setUaAdress5(value: string): void;

  hasCaCareof(): boolean;
  clearCaCareof(): void;
  getCaCareof(): string | undefined;
  setCaCareof(value: string): void;

  hasCaFlatNm(): boolean;
  clearCaFlatNm(): void;
  getCaFlatNm(): string | undefined;
  setCaFlatNm(value: string): void;

  hasCaFlatNo(): boolean;
  clearCaFlatNo(): void;
  getCaFlatNo(): string | undefined;
  setCaFlatNo(value: string): void;

  hasCaHousNo(): boolean;
  clearCaHousNo(): void;
  getCaHousNo(): string | undefined;
  setCaHousNo(value: string): void;

  hasCaCode(): boolean;
  clearCaCode(): void;
  getCaCode(): string | undefined;
  setCaCode(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasPayBy(): boolean;
  clearPayBy(): void;
  getPayBy(): date_pb.MasDateTime | undefined;
  setPayBy(value?: date_pb.MasDateTime): void;

  hasAgeCur(): boolean;
  clearAgeCur(): void;
  getAgeCur(): number | undefined;
  setAgeCur(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasCtypeGrp(): boolean;
  clearCtypeGrp(): void;
  getCtypeGrp(): string | undefined;
  setCtypeGrp(value: string): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  clearBillitemsList(): void;
  getBillitemsList(): Array<BillItem>;
  setBillitemsList(value: Array<BillItem>): void;
  addBillitems(value?: BillItem, index?: number): BillItem;

  hasInstalmentRatio(): boolean;
  clearInstalmentRatio(): void;
  getInstalmentRatio(): string | undefined;
  setInstalmentRatio(value: string): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasSMeterType(): boolean;
  clearSMeterType(): void;
  getSMeterType(): string | undefined;
  setSMeterType(value: string): void;

  hasSConsump(): boolean;
  clearSConsump(): void;
  getSConsump(): number | undefined;
  setSConsump(value: number): void;

  hasSPrReading(): boolean;
  clearSPrReading(): void;
  getSPrReading(): number | undefined;
  setSPrReading(value: number): void;

  hasSCrReading(): boolean;
  clearSCrReading(): void;
  getSCrReading(): number | undefined;
  setSCrReading(value: number): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasFileNo(): boolean;
  clearFileNo(): void;
  getFileNo(): number | undefined;
  setFileNo(value: number): void;

  hasGroupCode(): boolean;
  clearGroupCode(): void;
  getGroupCode(): string | undefined;
  setGroupCode(value: string): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  clearStatmCtypesList(): void;
  getStatmCtypesList(): Array<STATM_CTYPE>;
  setStatmCtypesList(value: Array<STATM_CTYPE>): void;
  addStatmCtypes(value?: STATM_CTYPE, index?: number): STATM_CTYPE;

  hasIsMultiCtypes(): boolean;
  clearIsMultiCtypes(): void;
  getIsMultiCtypes(): boolean | undefined;
  setIsMultiCtypes(value: boolean): void;

  hasInstalmentDate(): boolean;
  clearInstalmentDate(): void;
  getInstalmentDate(): date_pb.MasDateTime | undefined;
  setInstalmentDate(value?: date_pb.MasDateTime): void;

  hasConsumptionGroup(): boolean;
  clearConsumptionGroup(): void;
  getConsumptionGroup(): string | undefined;
  setConsumptionGroup(value: string): void;

  hasConsumptionType(): boolean;
  clearConsumptionType(): void;
  getConsumptionType(): string | undefined;
  setConsumptionType(value: string): void;

  hasCtypegrpId(): boolean;
  clearCtypegrpId(): void;
  getCtypegrpId(): string | undefined;
  setCtypegrpId(value: string): void;

  hasComp(): boolean;
  clearComp(): void;
  getComp(): string | undefined;
  setComp(value: string): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasTotalBillAmountCollected(): boolean;
  clearTotalBillAmountCollected(): void;
  getTotalBillAmountCollected(): number | undefined;
  setTotalBillAmountCollected(value: number): void;

  hasBilngDepositid(): boolean;
  clearBilngDepositid(): void;
  getBilngDepositid(): number | undefined;
  setBilngDepositid(value: number): void;

  hasMarketing(): boolean;
  clearMarketing(): void;
  getMarketing(): number | undefined;
  setMarketing(value: number): void;

  clearCollectionsList(): void;
  getCollectionsList(): Array<HHStatm_COLLECTION_ROW>;
  setCollectionsList(value: Array<HHStatm_COLLECTION_ROW>): void;
  addCollections(value?: HHStatm_COLLECTION_ROW, index?: number): HHStatm_COLLECTION_ROW;

  hasRejected(): boolean;
  clearRejected(): void;
  getRejected(): boolean | undefined;
  setRejected(value: boolean): void;

  hasBilngCollectorId(): boolean;
  clearBilngCollectorId(): void;
  getBilngCollectorId(): string | undefined;
  setBilngCollectorId(value: string): void;

  hasGardPaymentNo(): boolean;
  clearGardPaymentNo(): void;
  getGardPaymentNo(): string | undefined;
  setGardPaymentNo(value: string): void;

  hasBillAmount(): boolean;
  clearBillAmount(): void;
  getBillAmount(): number | undefined;
  setBillAmount(value: number): void;

  hasTotalClBlnce(): boolean;
  clearTotalClBlnce(): void;
  getTotalClBlnce(): number | undefined;
  setTotalClBlnce(value: number): void;

  hasCustomerId(): boolean;
  clearCustomerId(): void;
  getCustomerId(): number | undefined;
  setCustomerId(value: number): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): number | undefined;
  setConnectionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHStatm.AsObject;
  static toObject(includeInstance: boolean, msg: HHStatm): HHStatm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHStatm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHStatm;
  static deserializeBinaryFromReader(message: HHStatm, reader: jspb.BinaryReader): HHStatm;
}

export namespace HHStatm {
  export type AsObject = {
    walkNoNum?: number,
    billgroup?: string,
    cycleId?: number,
    deviceId?: string,
    bookNo?: string,
    walkNo?: number,
    seqNo?: number,
    custkey?: string,
    title?: string,
    initial?: string,
    surname?: string,
    telNo?: string,
    addressTp?: number,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    uaAdress5?: string,
    caCareof?: string,
    caFlatNm?: string,
    caFlatNo?: string,
    caHousNo?: string,
    caCode?: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    payBy?: date_pb.MasDateTime.AsObject,
    ageCur?: number,
    clBlnce?: number,
    paymentNo?: string,
    noUnits?: number,
    cType?: string,
    ctypeGrp?: string,
    opBlnce?: number,
    instalment?: number,
    propRef?: string,
    curPaymnts?: number,
    curCharges?: number,
    billitemsList: Array<BillItem.AsObject>,
    instalmentRatio?: string,
    calcType?: string,
    readType?: number,
    sMeterType?: string,
    sConsump?: number,
    sPrReading?: number,
    sCrReading?: number,
    statmNo?: number,
    fileNo?: number,
    groupCode?: string,
    deliverySt?: number,
    oldKey?: string,
    statmCtypesList: Array<STATM_CTYPE.AsObject>,
    isMultiCtypes?: boolean,
    instalmentDate?: date_pb.MasDateTime.AsObject,
    consumptionGroup?: string,
    consumptionType?: string,
    ctypegrpId?: string,
    comp?: string,
    dueAmount?: number,
    totalBillAmountCollected?: number,
    bilngDepositid?: number,
    marketing?: number,
    collectionsList: Array<HHStatm_COLLECTION_ROW.AsObject>,
    rejected?: boolean,
    bilngCollectorId?: string,
    gardPaymentNo?: string,
    billAmount?: number,
    totalClBlnce?: number,
    customerId?: number,
    propertyId?: number,
    connectionId?: number,
  }
}

export class IsDummyRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsDummyRq.AsObject;
  static toObject(includeInstance: boolean, msg: IsDummyRq): IsDummyRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsDummyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsDummyRq;
  static deserializeBinaryFromReader(message: IsDummyRq, reader: jspb.BinaryReader): IsDummyRq;
}

export namespace IsDummyRq {
  export type AsObject = {
  }
}

export class IsDummyRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): boolean | undefined;
  setReply(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsDummyRs.AsObject;
  static toObject(includeInstance: boolean, msg: IsDummyRs): IsDummyRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsDummyRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsDummyRs;
  static deserializeBinaryFromReader(message: IsDummyRs, reader: jspb.BinaryReader): IsDummyRs;
}

export namespace IsDummyRs {
  export type AsObject = {
    reply?: boolean,
  }
}

export class getDllVersionRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): getDllVersionRq.AsObject;
  static toObject(includeInstance: boolean, msg: getDllVersionRq): getDllVersionRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: getDllVersionRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): getDllVersionRq;
  static deserializeBinaryFromReader(message: getDllVersionRq, reader: jspb.BinaryReader): getDllVersionRq;
}

export namespace getDllVersionRq {
  export type AsObject = {
  }
}

export class getDllVersionRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): string | undefined;
  setReply(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): getDllVersionRs.AsObject;
  static toObject(includeInstance: boolean, msg: getDllVersionRs): getDllVersionRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: getDllVersionRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): getDllVersionRs;
  static deserializeBinaryFromReader(message: getDllVersionRs, reader: jspb.BinaryReader): getDllVersionRs;
}

export namespace getDllVersionRs {
  export type AsObject = {
    reply?: string,
  }
}

export class GetDefaultReadingNoteRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultReadingNoteRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultReadingNoteRq): GetDefaultReadingNoteRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultReadingNoteRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultReadingNoteRq;
  static deserializeBinaryFromReader(message: GetDefaultReadingNoteRq, reader: jspb.BinaryReader): GetDefaultReadingNoteRq;
}

export namespace GetDefaultReadingNoteRq {
  export type AsObject = {
  }
}

export class GetDefaultReadingNoteRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): number | undefined;
  setReply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultReadingNoteRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultReadingNoteRs): GetDefaultReadingNoteRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultReadingNoteRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultReadingNoteRs;
  static deserializeBinaryFromReader(message: GetDefaultReadingNoteRs, reader: jspb.BinaryReader): GetDefaultReadingNoteRs;
}

export namespace GetDefaultReadingNoteRs {
  export type AsObject = {
    reply?: number,
  }
}

export class UpdateCustomerSeqRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  clearDataList(): void;
  getDataList(): Array<Seq>;
  setDataList(value: Array<Seq>): void;
  addData(value?: Seq, index?: number): Seq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerSeqRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerSeqRq): UpdateCustomerSeqRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerSeqRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerSeqRq;
  static deserializeBinaryFromReader(message: UpdateCustomerSeqRq, reader: jspb.BinaryReader): UpdateCustomerSeqRq;
}

export namespace UpdateCustomerSeqRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    dataList: Array<Seq.AsObject>,
  }
}

export class Seq extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasBookNoC(): boolean;
  clearBookNoC(): void;
  getBookNoC(): string | undefined;
  setBookNoC(value: string): void;

  hasBookNoR(): boolean;
  clearBookNoR(): void;
  getBookNoR(): string | undefined;
  setBookNoR(value: string): void;

  hasWalkNoC(): boolean;
  clearWalkNoC(): void;
  getWalkNoC(): string | undefined;
  setWalkNoC(value: string): void;

  hasWalkNoR(): boolean;
  clearWalkNoR(): void;
  getWalkNoR(): string | undefined;
  setWalkNoR(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasSeqNoC(): boolean;
  clearSeqNoC(): void;
  getSeqNoC(): number | undefined;
  setSeqNoC(value: number): void;

  hasSeqNoR(): boolean;
  clearSeqNoR(): void;
  getSeqNoR(): number | undefined;
  setSeqNoR(value: number): void;

  hasNewSeqC(): boolean;
  clearNewSeqC(): void;
  getNewSeqC(): number | undefined;
  setNewSeqC(value: number): void;

  hasNewSeqR(): boolean;
  clearNewSeqR(): void;
  getNewSeqR(): number | undefined;
  setNewSeqR(value: number): void;

  hasIsPostedC(): boolean;
  clearIsPostedC(): void;
  getIsPostedC(): boolean | undefined;
  setIsPostedC(value: boolean): void;

  hasIsPostedR(): boolean;
  clearIsPostedR(): void;
  getIsPostedR(): boolean | undefined;
  setIsPostedR(value: boolean): void;

  hasPostDate(): boolean;
  clearPostDate(): void;
  getPostDate(): date_pb.MasDateTime | undefined;
  setPostDate(value?: date_pb.MasDateTime): void;

  hasTentName(): boolean;
  clearTentName(): void;
  getTentName(): string | undefined;
  setTentName(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seq.AsObject;
  static toObject(includeInstance: boolean, msg: Seq): Seq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Seq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seq;
  static deserializeBinaryFromReader(message: Seq, reader: jspb.BinaryReader): Seq;
}

export namespace Seq {
  export type AsObject = {
    billgroup?: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    bookNoC?: string,
    bookNoR?: string,
    walkNoC?: string,
    walkNoR?: string,
    cycleId?: number,
    custkey?: string,
    seqNoC?: number,
    seqNoR?: number,
    newSeqC?: number,
    newSeqR?: number,
    isPostedC?: boolean,
    isPostedR?: boolean,
    postDate?: date_pb.MasDateTime.AsObject,
    tentName?: string,
    propRef?: string,
  }
}

export class UpdateCustomerSeqRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): number | undefined;
  setReply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerSeqRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerSeqRs): UpdateCustomerSeqRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomerSeqRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerSeqRs;
  static deserializeBinaryFromReader(message: UpdateCustomerSeqRs, reader: jspb.BinaryReader): UpdateCustomerSeqRs;
}

export namespace UpdateCustomerSeqRs {
  export type AsObject = {
    reply?: number,
  }
}

export class UpdateMeterSeqRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  clearDataList(): void;
  getDataList(): Array<Seq>;
  setDataList(value: Array<Seq>): void;
  addData(value?: Seq, index?: number): Seq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeterSeqRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeterSeqRq): UpdateMeterSeqRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMeterSeqRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeterSeqRq;
  static deserializeBinaryFromReader(message: UpdateMeterSeqRq, reader: jspb.BinaryReader): UpdateMeterSeqRq;
}

export namespace UpdateMeterSeqRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    dataList: Array<Seq.AsObject>,
  }
}

export class UpdateMeterSeqRs extends jspb.Message {
  hasReply(): boolean;
  clearReply(): void;
  getReply(): number | undefined;
  setReply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeterSeqRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeterSeqRs): UpdateMeterSeqRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMeterSeqRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeterSeqRs;
  static deserializeBinaryFromReader(message: UpdateMeterSeqRs, reader: jspb.BinaryReader): UpdateMeterSeqRs;
}

export namespace UpdateMeterSeqRs {
  export type AsObject = {
    reply?: number,
  }
}

export class GetReadingsRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCheckprevious(): boolean;
  clearCheckprevious(): void;
  getCheckprevious(): boolean | undefined;
  setCheckprevious(value: boolean): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasFrommetrrdg(): boolean;
  clearFrommetrrdg(): void;
  getFrommetrrdg(): boolean | undefined;
  setFrommetrrdg(value: boolean): void;

  hasPostcyclescount(): boolean;
  clearPostcyclescount(): void;
  getPostcyclescount(): number | undefined;
  setPostcyclescount(value: number): void;

  hasReadingbilngdate(): boolean;
  clearReadingbilngdate(): void;
  getReadingbilngdate(): date_pb.MasDateTime | undefined;
  setReadingbilngdate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadingsRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadingsRq): GetReadingsRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadingsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadingsRq;
  static deserializeBinaryFromReader(message: GetReadingsRq, reader: jspb.BinaryReader): GetReadingsRq;
}

export namespace GetReadingsRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    checkprevious?: boolean,
    custkey?: string,
    frommetrrdg?: boolean,
    postcyclescount?: number,
    readingbilngdate?: date_pb.MasDateTime.AsObject,
  }
}

export class GetReadingsRs extends jspb.Message {
  clearReplyList(): void;
  getReplyList(): Array<HHReadingReq>;
  setReplyList(value: Array<HHReadingReq>): void;
  addReply(value?: HHReadingReq, index?: number): HHReadingReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReadingsRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetReadingsRs): GetReadingsRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReadingsRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReadingsRs;
  static deserializeBinaryFromReader(message: GetReadingsRs, reader: jspb.BinaryReader): GetReadingsRs;
}

export namespace GetReadingsRs {
  export type AsObject = {
    replyList: Array<HHReadingReq.AsObject>,
  }
}

export class HHReadingReq extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

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

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasPosStatus(): boolean;
  clearPosStatus(): void;
  getPosStatus(): number | undefined;
  setPosStatus(value: number): void;

  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasTentName(): boolean;
  clearTentName(): void;
  getTentName(): string | undefined;
  setTentName(value: string): void;

  hasTownshipNo(): boolean;
  clearTownshipNo(): void;
  getTownshipNo(): string | undefined;
  setTownshipNo(value: string): void;

  hasPlotNo(): boolean;
  clearPlotNo(): void;
  getPlotNo(): string | undefined;
  setPlotNo(value: string): void;

  hasPropNo(): boolean;
  clearPropNo(): void;
  getPropNo(): string | undefined;
  setPropNo(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasConnNo(): boolean;
  clearConnNo(): void;
  getConnNo(): number | undefined;
  setConnNo(value: number): void;

  hasServCatg(): boolean;
  clearServCatg(): void;
  getServCatg(): number | undefined;
  setServCatg(value: number): void;

  hasUaAdress1(): boolean;
  clearUaAdress1(): void;
  getUaAdress1(): string | undefined;
  setUaAdress1(value: string): void;

  hasUaAdress2(): boolean;
  clearUaAdress2(): void;
  getUaAdress2(): string | undefined;
  setUaAdress2(value: string): void;

  hasUaAdress3(): boolean;
  clearUaAdress3(): void;
  getUaAdress3(): string | undefined;
  setUaAdress3(value: string): void;

  hasUaAdress4(): boolean;
  clearUaAdress4(): void;
  getUaAdress4(): string | undefined;
  setUaAdress4(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasCtypegrpId(): boolean;
  clearCtypegrpId(): void;
  getCtypegrpId(): string | undefined;
  setCtypegrpId(value: string): void;

  hasConStatus(): boolean;
  clearConStatus(): void;
  getConStatus(): string | undefined;
  setConStatus(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasSerialNo(): boolean;
  clearSerialNo(): void;
  getSerialNo(): string | undefined;
  setSerialNo(value: string): void;

  hasMake(): boolean;
  clearMake(): void;
  getMake(): string | undefined;
  setMake(value: string): void;

  hasNoDials(): boolean;
  clearNoDials(): void;
  getNoDials(): number | undefined;
  setNoDials(value: number): void;

  hasConvFctr(): boolean;
  clearConvFctr(): void;
  getConvFctr(): number | undefined;
  setConvFctr(value: number): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): string | undefined;
  setSize(value: string): void;

  hasPrAvrCns(): boolean;
  clearPrAvrCns(): void;
  getPrAvrCns(): number | undefined;
  setPrAvrCns(value: number): void;

  hasPrRdgn1(): boolean;
  clearPrRdgn1(): void;
  getPrRdgn1(): number | undefined;
  setPrRdgn1(value: number): void;

  hasPrDate1(): boolean;
  clearPrDate1(): void;
  getPrDate1(): date_pb.MasDateTime | undefined;
  setPrDate1(value?: date_pb.MasDateTime): void;

  hasPrRead1(): boolean;
  clearPrRead1(): void;
  getPrRead1(): number | undefined;
  setPrRead1(value: number): void;

  hasPrCons1(): boolean;
  clearPrCons1(): void;
  getPrCons1(): number | undefined;
  setPrCons1(value: number): void;

  hasPrFlow1(): boolean;
  clearPrFlow1(): void;
  getPrFlow1(): number | undefined;
  setPrFlow1(value: number): void;

  hasPrMread1(): boolean;
  clearPrMread1(): void;
  getPrMread1(): number | undefined;
  setPrMread1(value: number): void;

  hasPrRdgn2(): boolean;
  clearPrRdgn2(): void;
  getPrRdgn2(): number | undefined;
  setPrRdgn2(value: number): void;

  hasPrDate2(): boolean;
  clearPrDate2(): void;
  getPrDate2(): date_pb.MasDateTime | undefined;
  setPrDate2(value?: date_pb.MasDateTime): void;

  hasPrRead2(): boolean;
  clearPrRead2(): void;
  getPrRead2(): number | undefined;
  setPrRead2(value: number): void;

  hasPrCons2(): boolean;
  clearPrCons2(): void;
  getPrCons2(): number | undefined;
  setPrCons2(value: number): void;

  hasPrFlow2(): boolean;
  clearPrFlow2(): void;
  getPrFlow2(): number | undefined;
  setPrFlow2(value: number): void;

  hasPrMread2(): boolean;
  clearPrMread2(): void;
  getPrMread2(): number | undefined;
  setPrMread2(value: number): void;

  hasOpStatus(): boolean;
  clearOpStatus(): void;
  getOpStatus(): number | undefined;
  setOpStatus(value: number): void;

  hasAvrgCons(): boolean;
  clearAvrgCons(): void;
  getAvrgCons(): number | undefined;
  setAvrgCons(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasBuildingNo(): boolean;
  clearBuildingNo(): void;
  getBuildingNo(): string | undefined;
  setBuildingNo(value: string): void;

  hasGroupCode(): boolean;
  clearGroupCode(): void;
  getGroupCode(): string | undefined;
  setGroupCode(value: string): void;

  hasFileNo(): boolean;
  clearFileNo(): void;
  getFileNo(): number | undefined;
  setFileNo(value: number): void;

  hasAcessCode(): boolean;
  clearAcessCode(): void;
  getAcessCode(): string | undefined;
  setAcessCode(value: string): void;

  hasAcessDescr(): boolean;
  clearAcessDescr(): void;
  getAcessDescr(): string | undefined;
  setAcessDescr(value: string): void;

  hasPrReadingNote(): boolean;
  clearPrReadingNote(): void;
  getPrReadingNote(): number | undefined;
  setPrReadingNote(value: number): void;

  hasPrevent(): boolean;
  clearPrevent(): void;
  getPrevent(): boolean | undefined;
  setPrevent(value: boolean): void;

  hasReadingCycleid(): boolean;
  clearReadingCycleid(): void;
  getReadingCycleid(): number | undefined;
  setReadingCycleid(value: number): void;

  hasReadingBilngdate(): boolean;
  clearReadingBilngdate(): void;
  getReadingBilngdate(): date_pb.MasDateTime | undefined;
  setReadingBilngdate(value?: date_pb.MasDateTime): void;

  hasBilngReaderId(): boolean;
  clearBilngReaderId(): void;
  getBilngReaderId(): string | undefined;
  setBilngReaderId(value: string): void;

  clearConndtltarrifallocsList(): void;
  getConndtltarrifallocsList(): Array<ConnDtlTarrifAlloc>;
  setConndtltarrifallocsList(value: Array<ConnDtlTarrifAlloc>): void;
  addConndtltarrifallocs(value?: ConnDtlTarrifAlloc, index?: number): ConnDtlTarrifAlloc;

  hasConStatus5(): boolean;
  clearConStatus5(): void;
  getConStatus5(): number | undefined;
  setConStatus5(value: number): void;

  hasCustomerId(): boolean;
  clearCustomerId(): void;
  getCustomerId(): number | undefined;
  setCustomerId(value: number): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): number | undefined;
  setConnectionId(value: number): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  hasIsNoMeterRecord(): boolean;
  clearIsNoMeterRecord(): void;
  getIsNoMeterRecord(): boolean | undefined;
  setIsNoMeterRecord(value: boolean): void;

  hasIsManualEstim(): boolean;
  clearIsManualEstim(): void;
  getIsManualEstim(): boolean | undefined;
  setIsManualEstim(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHReadingReq.AsObject;
  static toObject(includeInstance: boolean, msg: HHReadingReq): HHReadingReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHReadingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHReadingReq;
  static deserializeBinaryFromReader(message: HHReadingReq, reader: jspb.BinaryReader): HHReadingReq;
}

export namespace HHReadingReq {
  export type AsObject = {
    billgroup?: string,
    cycleId?: number,
    bookNo?: string,
    walkNo?: string,
    seqNo?: number,
    deviceId?: string,
    description?: string,
    posStatus?: number,
    billCustkey?: string,
    tentName?: string,
    townshipNo?: string,
    plotNo?: string,
    propNo?: string,
    propRef?: string,
    connNo?: number,
    servCatg?: number,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    cType?: string,
    ctypegrpId?: string,
    conStatus?: string,
    meterType?: string,
    meterRef?: string,
    serialNo?: string,
    make?: string,
    noDials?: number,
    convFctr?: number,
    size?: string,
    prAvrCns?: number,
    prRdgn1?: number,
    prDate1?: date_pb.MasDateTime.AsObject,
    prRead1?: number,
    prCons1?: number,
    prFlow1?: number,
    prMread1?: number,
    prRdgn2?: number,
    prDate2?: date_pb.MasDateTime.AsObject,
    prRead2?: number,
    prCons2?: number,
    prFlow2?: number,
    prMread2?: number,
    opStatus?: number,
    avrgCons?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    noUnits?: number,
    oldKey?: string,
    crReading?: number,
    buildingNo?: string,
    groupCode?: string,
    fileNo?: number,
    acessCode?: string,
    acessDescr?: string,
    prReadingNote?: number,
    prevent?: boolean,
    readingCycleid?: number,
    readingBilngdate?: date_pb.MasDateTime.AsObject,
    bilngReaderId?: string,
    conndtltarrifallocsList: Array<ConnDtlTarrifAlloc.AsObject>,
    conStatus5?: number,
    customerId?: number,
    propertyId?: number,
    connectionId?: number,
    meterId?: number,
    isNoMeterRecord?: boolean,
    isManualEstim?: boolean,
  }
}

export class ConnDtlTarrifAlloc extends jspb.Message {
  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasAllocPerc(): boolean;
  clearAllocPerc(): void;
  getAllocPerc(): number | undefined;
  setAllocPerc(value: number): void;

  hasAllocPercSewer(): boolean;
  clearAllocPercSewer(): void;
  getAllocPercSewer(): number | undefined;
  setAllocPercSewer(value: number): void;

  hasEstimConsPu(): boolean;
  clearEstimConsPu(): void;
  getEstimConsPu(): number | undefined;
  setEstimConsPu(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasConnectionId(): boolean;
  clearConnectionId(): void;
  getConnectionId(): number | undefined;
  setConnectionId(value: number): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number | undefined;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnDtlTarrifAlloc.AsObject;
  static toObject(includeInstance: boolean, msg: ConnDtlTarrifAlloc): ConnDtlTarrifAlloc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnDtlTarrifAlloc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnDtlTarrifAlloc;
  static deserializeBinaryFromReader(message: ConnDtlTarrifAlloc, reader: jspb.BinaryReader): ConnDtlTarrifAlloc;
}

export namespace ConnDtlTarrifAlloc {
  export type AsObject = {
    bilngDate?: date_pb.MasDateTime.AsObject,
    cycleId?: number,
    propRef?: string,
    custkey?: string,
    cType?: string,
    allocPerc?: number,
    allocPercSewer?: number,
    estimConsPu?: number,
    noUnits?: number,
    connectionId?: number,
    weight?: number,
  }
}

export class StationRights extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationRights.AsObject;
  static toObject(includeInstance: boolean, msg: StationRights): StationRights.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StationRights, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationRights;
  static deserializeBinaryFromReader(message: StationRights, reader: jspb.BinaryReader): StationRights;
}

export namespace StationRights {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
  }
}

export class Stations extends jspb.Message {
  clearStationrightsList(): void;
  getStationrightsList(): Array<Stations>;
  setStationrightsList(value: Array<Stations>): void;
  addStationrights(value?: Stations, index?: number): Stations;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stations.AsObject;
  static toObject(includeInstance: boolean, msg: Stations): Stations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stations;
  static deserializeBinaryFromReader(message: Stations, reader: jspb.BinaryReader): Stations;
}

export namespace Stations {
  export type AsObject = {
    stationrightsList: Array<Stations.AsObject>,
  }
}

export class TransCode extends jspb.Message {
  hasTransType(): boolean;
  clearTransType(): void;
  getTransType(): number | undefined;
  setTransType(value: number): void;

  hasTransStype(): boolean;
  clearTransStype(): void;
  getTransStype(): number | undefined;
  setTransStype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransCode.AsObject;
  static toObject(includeInstance: boolean, msg: TransCode): TransCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransCode;
  static deserializeBinaryFromReader(message: TransCode, reader: jspb.BinaryReader): TransCode;
}

export namespace TransCode {
  export type AsObject = {
    transType?: number,
    transStype?: number,
  }
}

export class GetMarketingPlanRq extends jspb.Message {
  hasRefamount(): boolean;
  clearRefamount(): void;
  getRefamount(): number | undefined;
  setRefamount(value: number): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): date_pb.MasDateTime | undefined;
  setBilngdate(value?: date_pb.MasDateTime): void;

  hasNomonthed(): boolean;
  clearNomonthed(): void;
  getNomonthed(): number | undefined;
  setNomonthed(value: number): void;

  clearTargetbillgroupsList(): void;
  getTargetbillgroupsList(): Array<string>;
  setTargetbillgroupsList(value: Array<string>): void;
  addTargetbillgroups(value: string, index?: number): string;

  clearRejectedbillgroupsList(): void;
  getRejectedbillgroupsList(): Array<string>;
  setRejectedbillgroupsList(value: Array<string>): void;
  addRejectedbillgroups(value: string, index?: number): string;

  clearTransList(): void;
  getTransList(): Array<TransCode>;
  setTransList(value: Array<TransCode>): void;
  addTrans(value?: TransCode, index?: number): TransCode;

  hasIncludedetails(): boolean;
  clearIncludedetails(): void;
  getIncludedetails(): boolean | undefined;
  setIncludedetails(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketingPlanRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketingPlanRq): GetMarketingPlanRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarketingPlanRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketingPlanRq;
  static deserializeBinaryFromReader(message: GetMarketingPlanRq, reader: jspb.BinaryReader): GetMarketingPlanRq;
}

export namespace GetMarketingPlanRq {
  export type AsObject = {
    refamount?: number,
    bilngdate?: date_pb.MasDateTime.AsObject,
    nomonthed?: number,
    targetbillgroupsList: Array<string>,
    rejectedbillgroupsList: Array<string>,
    transList: Array<TransCode.AsObject>,
    includedetails?: boolean,
  }
}

export class MarketingResult extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasRefAmount(): boolean;
  clearRefAmount(): void;
  getRefAmount(): number | undefined;
  setRefAmount(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasTotalCount(): boolean;
  clearTotalCount(): void;
  getTotalCount(): number | undefined;
  setTotalCount(value: number): void;

  hasTotalAmount(): boolean;
  clearTotalAmount(): void;
  getTotalAmount(): number | undefined;
  setTotalAmount(value: number): void;

  hasLargCount(): boolean;
  clearLargCount(): void;
  getLargCount(): number | undefined;
  setLargCount(value: number): void;

  hasLargAmount(): boolean;
  clearLargAmount(): void;
  getLargAmount(): number | undefined;
  setLargAmount(value: number): void;

  hasTargetCount(): boolean;
  clearTargetCount(): void;
  getTargetCount(): number | undefined;
  setTargetCount(value: number): void;

  hasTargetAmount(): boolean;
  clearTargetAmount(): void;
  getTargetAmount(): number | undefined;
  setTargetAmount(value: number): void;

  hasActualCount(): boolean;
  clearActualCount(): void;
  getActualCount(): number | undefined;
  setActualCount(value: number): void;

  hasActualAmount(): boolean;
  clearActualAmount(): void;
  getActualAmount(): number | undefined;
  setActualAmount(value: number): void;

  hasNoMonthes(): boolean;
  clearNoMonthes(): void;
  getNoMonthes(): number | undefined;
  setNoMonthes(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  clearDetailsList(): void;
  getDetailsList(): Array<MarketingResult>;
  setDetailsList(value: Array<MarketingResult>): void;
  addDetails(value?: MarketingResult, index?: number): MarketingResult;

  clearTransCodesList(): void;
  getTransCodesList(): Array<TransCode>;
  setTransCodesList(value: Array<TransCode>): void;
  addTransCodes(value?: TransCode, index?: number): TransCode;

  clearCustomersList(): void;
  getCustomersList(): Array<string>;
  setCustomersList(value: Array<string>): void;
  addCustomers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MarketingResult): MarketingResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketingResult;
  static deserializeBinaryFromReader(message: MarketingResult, reader: jspb.BinaryReader): MarketingResult;
}

export namespace MarketingResult {
  export type AsObject = {
    custkey?: string,
    refAmount?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    totalCount?: number,
    totalAmount?: number,
    largCount?: number,
    largAmount?: number,
    targetCount?: number,
    targetAmount?: number,
    actualCount?: number,
    actualAmount?: number,
    noMonthes?: number,
    billgroup?: string,
    detailsList: Array<MarketingResult.AsObject>,
    transCodesList: Array<TransCode.AsObject>,
    customersList: Array<string>,
  }
}

export class GetInfoRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRq): GetInfoRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRq;
  static deserializeBinaryFromReader(message: GetInfoRq, reader: jspb.BinaryReader): GetInfoRq;
}

export namespace GetInfoRq {
  export type AsObject = {
    custkey?: string,
  }
}

export class ReCalcModel extends jspb.Message {
  hasAmountCancelled(): boolean;
  clearAmountCancelled(): void;
  getAmountCancelled(): number | undefined;
  setAmountCancelled(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasUaAdress1(): boolean;
  clearUaAdress1(): void;
  getUaAdress1(): string | undefined;
  setUaAdress1(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasNoFlats(): boolean;
  clearNoFlats(): void;
  getNoFlats(): number | undefined;
  setNoFlats(value: number): void;

  hasIsInvoicd(): boolean;
  clearIsInvoicd(): void;
  getIsInvoicd(): number | undefined;
  setIsInvoicd(value: number): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasReadingNo(): boolean;
  clearReadingNo(): void;
  getReadingNo(): number | undefined;
  setReadingNo(value: number): void;

  hasReadCmnt(): boolean;
  clearReadCmnt(): void;
  getReadCmnt(): string | undefined;
  setReadCmnt(value: string): void;

  hasReadMthd(): boolean;
  clearReadMthd(): void;
  getReadMthd(): number | undefined;
  setReadMthd(value: number): void;

  hasReadReasn(): boolean;
  clearReadReasn(): void;
  getReadReasn(): number | undefined;
  setReadReasn(value: number): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasPrDate(): boolean;
  clearPrDate(): void;
  getPrDate(): date_pb.MasDateTime | undefined;
  setPrDate(value?: date_pb.MasDateTime): void;

  hasPrDateIso(): boolean;
  clearPrDateIso(): void;
  getPrDateIso(): string | undefined;
  setPrDateIso(value: string): void;

  hasUnBilled(): boolean;
  clearUnBilled(): void;
  getUnBilled(): number | undefined;
  setUnBilled(value: number): void;

  hasWaterAmt(): boolean;
  clearWaterAmt(): void;
  getWaterAmt(): number | undefined;
  setWaterAmt(value: number): void;

  hasSewerAmt(): boolean;
  clearSewerAmt(): void;
  getSewerAmt(): number | undefined;
  setSewerAmt(value: number): void;

  hasTaxAmt(): boolean;
  clearTaxAmt(): void;
  getTaxAmt(): number | undefined;
  setTaxAmt(value: number): void;

  hasEstAmt(): boolean;
  clearEstAmt(): void;
  getEstAmt(): number | undefined;
  setEstAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  hasWAll(): boolean;
  clearWAll(): void;
  getWAll(): number | undefined;
  setWAll(value: number): void;

  hasSAll(): boolean;
  clearSAll(): void;
  getSAll(): number | undefined;
  setSAll(value: number): void;

  hasEstAllTax(): boolean;
  clearEstAllTax(): void;
  getEstAllTax(): number | undefined;
  setEstAllTax(value: number): void;

  hasEstAll(): boolean;
  clearEstAll(): void;
  getEstAll(): number | undefined;
  setEstAll(value: number): void;

  hasBillId(): boolean;
  clearBillId(): void;
  getBillId(): number | undefined;
  setBillId(value: number): void;

  hasIsPosted(): boolean;
  clearIsPosted(): void;
  getIsPosted(): number | undefined;
  setIsPosted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReCalcModel.AsObject;
  static toObject(includeInstance: boolean, msg: ReCalcModel): ReCalcModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReCalcModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReCalcModel;
  static deserializeBinaryFromReader(message: ReCalcModel, reader: jspb.BinaryReader): ReCalcModel;
}

export namespace ReCalcModel {
  export type AsObject = {
    amountCancelled?: number,
    custkey?: string,
    surname?: string,
    uaAdress1?: string,
    statmNo?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    clBlnce?: number,
    instalment?: number,
    opBlnce?: number,
    deliverySt?: number,
    curCharges?: number,
    curPaymnts?: number,
    propRef?: string,
    cType?: string,
    meterRef?: string,
    meterType?: string,
    noFlats?: number,
    isInvoicd?: number,
    readType?: number,
    readingNo?: number,
    readCmnt?: string,
    readMthd?: number,
    readReasn?: number,
    prReading?: number,
    prDate?: date_pb.MasDateTime.AsObject,
    prDateIso?: string,
    unBilled?: number,
    waterAmt?: number,
    sewerAmt?: number,
    taxAmt?: number,
    estAmt?: number,
    otherAmt?: number,
    wAll?: number,
    sAll?: number,
    estAllTax?: number,
    estAll?: number,
    billId?: number,
    isPosted?: number,
  }
}

export class ApplyMarketingPlanRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyMarketingPlanRs.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyMarketingPlanRs): ApplyMarketingPlanRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyMarketingPlanRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyMarketingPlanRs;
  static deserializeBinaryFromReader(message: ApplyMarketingPlanRs, reader: jspb.BinaryReader): ApplyMarketingPlanRs;
}

export namespace ApplyMarketingPlanRs {
  export type AsObject = {
  }
}

export class CalcRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasCrDate(): boolean;
  clearCrDate(): void;
  getCrDate(): date_pb.MasDateTime;
  setCrDate(value?: date_pb.MasDateTime): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasPrDate(): boolean;
  clearPrDate(): void;
  getPrDate(): date_pb.MasDateTime;
  setPrDate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcRq.AsObject;
  static toObject(includeInstance: boolean, msg: CalcRq): CalcRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcRq;
  static deserializeBinaryFromReader(message: CalcRq, reader: jspb.BinaryReader): CalcRq;
}

export namespace CalcRq {
  export type AsObject = {
    custkey?: string,
    crReading?: number,
    crDate: date_pb.MasDateTime.AsObject,
    prReading?: number,
    prDate: date_pb.MasDateTime.AsObject,
  }
}

export class PostRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasBillid(): boolean;
  clearBillid(): void;
  getBillid(): number | undefined;
  setBillid(value: number): void;

  hasCollected(): boolean;
  clearCollected(): void;
  getCollected(): number | undefined;
  setCollected(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostRq.AsObject;
  static toObject(includeInstance: boolean, msg: PostRq): PostRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostRq;
  static deserializeBinaryFromReader(message: PostRq, reader: jspb.BinaryReader): PostRq;
}

export namespace PostRq {
  export type AsObject = {
    custkey?: string,
    billid?: number,
    collected?: number,
  }
}

export class FillRecalRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStartdate(): boolean;
  clearStartdate(): void;
  getStartdate(): date_pb.MasDateTime | undefined;
  setStartdate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FillRecalRq.AsObject;
  static toObject(includeInstance: boolean, msg: FillRecalRq): FillRecalRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FillRecalRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FillRecalRq;
  static deserializeBinaryFromReader(message: FillRecalRq, reader: jspb.BinaryReader): FillRecalRq;
}

export namespace FillRecalRq {
  export type AsObject = {
    custkey?: string,
    startdate?: date_pb.MasDateTime.AsObject,
  }
}

export class RecalcModelNew extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasSurename(): boolean;
  clearSurename(): void;
  getSurename(): string | undefined;
  setSurename(value: string): void;

  clearRowsList(): void;
  getRowsList(): Array<RecalItem>;
  setRowsList(value: Array<RecalItem>): void;
  addRows(value?: RecalItem, index?: number): RecalItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecalcModelNew.AsObject;
  static toObject(includeInstance: boolean, msg: RecalcModelNew): RecalcModelNew.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecalcModelNew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecalcModelNew;
  static deserializeBinaryFromReader(message: RecalcModelNew, reader: jspb.BinaryReader): RecalcModelNew;
}

export namespace RecalcModelNew {
  export type AsObject = {
    custkey?: string,
    statmNo?: number,
    surename?: string,
    rowsList: Array<RecalItem.AsObject>,
  }
}

export class RECALC_CTYPE extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasAllocPerc(): boolean;
  clearAllocPerc(): void;
  getAllocPerc(): number | undefined;
  setAllocPerc(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasIsOld(): boolean;
  clearIsOld(): void;
  getIsOld(): number | undefined;
  setIsOld(value: number): void;

  hasEstimConsPu(): boolean;
  clearEstimConsPu(): void;
  getEstimConsPu(): number | undefined;
  setEstimConsPu(value: number): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number | undefined;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RECALC_CTYPE.AsObject;
  static toObject(includeInstance: boolean, msg: RECALC_CTYPE): RECALC_CTYPE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RECALC_CTYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RECALC_CTYPE;
  static deserializeBinaryFromReader(message: RECALC_CTYPE, reader: jspb.BinaryReader): RECALC_CTYPE;
}

export namespace RECALC_CTYPE {
  export type AsObject = {
    custkey?: string,
    cType?: string,
    statmNo?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    propRef?: string,
    allocPerc?: number,
    noUnits?: number,
    isOld?: number,
    estimConsPu?: number,
    weight?: number,
  }
}

export class RECALC_ROW extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasOldOpBlnce(): boolean;
  clearOldOpBlnce(): void;
  getOldOpBlnce(): number | undefined;
  setOldOpBlnce(value: number): void;

  hasOldClBlnce(): boolean;
  clearOldClBlnce(): void;
  getOldClBlnce(): number | undefined;
  setOldClBlnce(value: number): void;

  hasOldInstalment(): boolean;
  clearOldInstalment(): void;
  getOldInstalment(): number | undefined;
  setOldInstalment(value: number): void;

  hasOldCurCharges(): boolean;
  clearOldCurCharges(): void;
  getOldCurCharges(): number | undefined;
  setOldCurCharges(value: number): void;

  hasOldCurPaymnts(): boolean;
  clearOldCurPaymnts(): void;
  getOldCurPaymnts(): number | undefined;
  setOldCurPaymnts(value: number): void;

  hasOldHasMeter(): boolean;
  clearOldHasMeter(): void;
  getOldHasMeter(): number | undefined;
  setOldHasMeter(value: number): void;

  hasOldMeterType(): boolean;
  clearOldMeterType(): void;
  getOldMeterType(): string | undefined;
  setOldMeterType(value: string): void;

  hasOldMeterRef(): boolean;
  clearOldMeterRef(): void;
  getOldMeterRef(): string | undefined;
  setOldMeterRef(value: string): void;

  hasOldMeterCondition(): boolean;
  clearOldMeterCondition(): void;
  getOldMeterCondition(): string | undefined;
  setOldMeterCondition(value: string): void;

  hasOldMeterSize(): boolean;
  clearOldMeterSize(): void;
  getOldMeterSize(): string | undefined;
  setOldMeterSize(value: string): void;

  hasOldHasSewer(): boolean;
  clearOldHasSewer(): void;
  getOldHasSewer(): number | undefined;
  setOldHasSewer(value: number): void;

  hasOldCType(): boolean;
  clearOldCType(): void;
  getOldCType(): string | undefined;
  setOldCType(value: string): void;

  hasOldNoUnits(): boolean;
  clearOldNoUnits(): void;
  getOldNoUnits(): number | undefined;
  setOldNoUnits(value: number): void;

  hasOldEstimCons(): boolean;
  clearOldEstimCons(): void;
  getOldEstimCons(): number | undefined;
  setOldEstimCons(value: number): void;

  hasOldPrevRead(): boolean;
  clearOldPrevRead(): void;
  getOldPrevRead(): number | undefined;
  setOldPrevRead(value: number): void;

  hasOldCurrRead(): boolean;
  clearOldCurrRead(): void;
  getOldCurrRead(): number | undefined;
  setOldCurrRead(value: number): void;

  hasOldConsump(): boolean;
  clearOldConsump(): void;
  getOldConsump(): number | undefined;
  setOldConsump(value: number): void;

  hasOldIsMainConn(): boolean;
  clearOldIsMainConn(): void;
  getOldIsMainConn(): number | undefined;
  setOldIsMainConn(value: number): void;

  hasOldConnStatus(): boolean;
  clearOldConnStatus(): void;
  getOldConnStatus(): number | undefined;
  setOldConnStatus(value: number): void;

  hasNewHasMeter(): boolean;
  clearNewHasMeter(): void;
  getNewHasMeter(): number | undefined;
  setNewHasMeter(value: number): void;

  hasNewMeterType(): boolean;
  clearNewMeterType(): void;
  getNewMeterType(): string | undefined;
  setNewMeterType(value: string): void;

  hasNewMeterRef(): boolean;
  clearNewMeterRef(): void;
  getNewMeterRef(): string | undefined;
  setNewMeterRef(value: string): void;

  hasNewMeterCondition(): boolean;
  clearNewMeterCondition(): void;
  getNewMeterCondition(): string | undefined;
  setNewMeterCondition(value: string): void;

  hasNewMeterSize(): boolean;
  clearNewMeterSize(): void;
  getNewMeterSize(): string | undefined;
  setNewMeterSize(value: string): void;

  hasNewHasSewer(): boolean;
  clearNewHasSewer(): void;
  getNewHasSewer(): number | undefined;
  setNewHasSewer(value: number): void;

  hasNewCType(): boolean;
  clearNewCType(): void;
  getNewCType(): string | undefined;
  setNewCType(value: string): void;

  hasNewNoUnits(): boolean;
  clearNewNoUnits(): void;
  getNewNoUnits(): number | undefined;
  setNewNoUnits(value: number): void;

  hasNewEstimCons(): boolean;
  clearNewEstimCons(): void;
  getNewEstimCons(): number | undefined;
  setNewEstimCons(value: number): void;

  hasNewPrevRead(): boolean;
  clearNewPrevRead(): void;
  getNewPrevRead(): number | undefined;
  setNewPrevRead(value: number): void;

  hasNewCurrRead(): boolean;
  clearNewCurrRead(): void;
  getNewCurrRead(): number | undefined;
  setNewCurrRead(value: number): void;

  hasNewConsump(): boolean;
  clearNewConsump(): void;
  getNewConsump(): number | undefined;
  setNewConsump(value: number): void;

  hasNewIsMainConn(): boolean;
  clearNewIsMainConn(): void;
  getNewIsMainConn(): number | undefined;
  setNewIsMainConn(value: number): void;

  hasNewConnStatus(): boolean;
  clearNewConnStatus(): void;
  getNewConnStatus(): number | undefined;
  setNewConnStatus(value: number): void;

  hasIsUpdated(): boolean;
  clearIsUpdated(): void;
  getIsUpdated(): number | undefined;
  setIsUpdated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RECALC_ROW.AsObject;
  static toObject(includeInstance: boolean, msg: RECALC_ROW): RECALC_ROW.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RECALC_ROW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RECALC_ROW;
  static deserializeBinaryFromReader(message: RECALC_ROW, reader: jspb.BinaryReader): RECALC_ROW;
}

export namespace RECALC_ROW {
  export type AsObject = {
    custkey?: string,
    propRef?: string,
    statmNo?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    oldOpBlnce?: number,
    oldClBlnce?: number,
    oldInstalment?: number,
    oldCurCharges?: number,
    oldCurPaymnts?: number,
    oldHasMeter?: number,
    oldMeterType?: string,
    oldMeterRef?: string,
    oldMeterCondition?: string,
    oldMeterSize?: string,
    oldHasSewer?: number,
    oldCType?: string,
    oldNoUnits?: number,
    oldEstimCons?: number,
    oldPrevRead?: number,
    oldCurrRead?: number,
    oldConsump?: number,
    oldIsMainConn?: number,
    oldConnStatus?: number,
    newHasMeter?: number,
    newMeterType?: string,
    newMeterRef?: string,
    newMeterCondition?: string,
    newMeterSize?: string,
    newHasSewer?: number,
    newCType?: string,
    newNoUnits?: number,
    newEstimCons?: number,
    newPrevRead?: number,
    newCurrRead?: number,
    newConsump?: number,
    newIsMainConn?: number,
    newConnStatus?: number,
    isUpdated?: number,
  }
}

export class RecalItem extends jspb.Message {
  hasRecalcRow(): boolean;
  clearRecalcRow(): void;
  getRecalcRow(): RECALC_ROW | undefined;
  setRecalcRow(value?: RECALC_ROW): void;

  clearCtypesList(): void;
  getCtypesList(): Array<RECALC_CTYPE>;
  setCtypesList(value: Array<RECALC_CTYPE>): void;
  addCtypes(value?: RECALC_CTYPE, index?: number): RECALC_CTYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecalItem.AsObject;
  static toObject(includeInstance: boolean, msg: RecalItem): RecalItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecalItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecalItem;
  static deserializeBinaryFromReader(message: RecalItem, reader: jspb.BinaryReader): RecalItem;
}

export namespace RecalItem {
  export type AsObject = {
    recalcRow?: RECALC_ROW.AsObject,
    ctypesList: Array<RECALC_CTYPE.AsObject>,
  }
}

export class LuMeterMake1 extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuMeterMake1.AsObject;
  static toObject(includeInstance: boolean, msg: LuMeterMake1): LuMeterMake1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuMeterMake1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuMeterMake1;
  static deserializeBinaryFromReader(message: LuMeterMake1, reader: jspb.BinaryReader): LuMeterMake1;
}

export namespace LuMeterMake1 {
  export type AsObject = {
    code?: string,
    description?: string,
  }
}

export class LuMeterMake extends jspb.Message {
  clearLumetermakeList(): void;
  getLumetermakeList(): Array<LuMeterMake1>;
  setLumetermakeList(value: Array<LuMeterMake1>): void;
  addLumetermake(value?: LuMeterMake1, index?: number): LuMeterMake1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuMeterMake.AsObject;
  static toObject(includeInstance: boolean, msg: LuMeterMake): LuMeterMake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuMeterMake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuMeterMake;
  static deserializeBinaryFromReader(message: LuMeterMake, reader: jspb.BinaryReader): LuMeterMake;
}

export namespace LuMeterMake {
  export type AsObject = {
    lumetermakeList: Array<LuMeterMake1.AsObject>,
  }
}

export class GetMeterMakesRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterMakesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterMakesRq): GetMeterMakesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterMakesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterMakesRq;
  static deserializeBinaryFromReader(message: GetMeterMakesRq, reader: jspb.BinaryReader): GetMeterMakesRq;
}

export namespace GetMeterMakesRq {
  export type AsObject = {
  }
}

export class LuMeterSize1 extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuMeterSize1.AsObject;
  static toObject(includeInstance: boolean, msg: LuMeterSize1): LuMeterSize1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuMeterSize1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuMeterSize1;
  static deserializeBinaryFromReader(message: LuMeterSize1, reader: jspb.BinaryReader): LuMeterSize1;
}

export namespace LuMeterSize1 {
  export type AsObject = {
    code?: string,
    description?: string,
  }
}

export class LuMeterSize extends jspb.Message {
  clearLumetersizeList(): void;
  getLumetersizeList(): Array<LuMeterSize1>;
  setLumetersizeList(value: Array<LuMeterSize1>): void;
  addLumetersize(value?: LuMeterSize1, index?: number): LuMeterSize1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuMeterSize.AsObject;
  static toObject(includeInstance: boolean, msg: LuMeterSize): LuMeterSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuMeterSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuMeterSize;
  static deserializeBinaryFromReader(message: LuMeterSize, reader: jspb.BinaryReader): LuMeterSize;
}

export namespace LuMeterSize {
  export type AsObject = {
    lumetersizeList: Array<LuMeterSize1.AsObject>,
  }
}

export class GetMeterSizesRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeterSizesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeterSizesRq): GetMeterSizesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMeterSizesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeterSizesRq;
  static deserializeBinaryFromReader(message: GetMeterSizesRq, reader: jspb.BinaryReader): GetMeterSizesRq;
}

export namespace GetMeterSizesRq {
  export type AsObject = {
  }
}

export class GetCustomerDataRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerDataRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerDataRq): GetCustomerDataRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerDataRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerDataRq;
  static deserializeBinaryFromReader(message: GetCustomerDataRq, reader: jspb.BinaryReader): GetCustomerDataRq;
}

export namespace GetCustomerDataRq {
  export type AsObject = {
    custkey?: string,
  }
}

export class CustModModel extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasOldHasMeter(): boolean;
  clearOldHasMeter(): void;
  getOldHasMeter(): number | undefined;
  setOldHasMeter(value: number): void;

  hasOldMeterType(): boolean;
  clearOldMeterType(): void;
  getOldMeterType(): string | undefined;
  setOldMeterType(value: string): void;

  hasOldMeterRef(): boolean;
  clearOldMeterRef(): void;
  getOldMeterRef(): string | undefined;
  setOldMeterRef(value: string): void;

  hasOldMeterCondition(): boolean;
  clearOldMeterCondition(): void;
  getOldMeterCondition(): string | undefined;
  setOldMeterCondition(value: string): void;

  hasOldMeterSize(): boolean;
  clearOldMeterSize(): void;
  getOldMeterSize(): string | undefined;
  setOldMeterSize(value: string): void;

  hasOldHasSewer(): boolean;
  clearOldHasSewer(): void;
  getOldHasSewer(): number | undefined;
  setOldHasSewer(value: number): void;

  hasOldCType(): boolean;
  clearOldCType(): void;
  getOldCType(): string | undefined;
  setOldCType(value: string): void;

  hasOldNoUnits(): boolean;
  clearOldNoUnits(): void;
  getOldNoUnits(): number | undefined;
  setOldNoUnits(value: number): void;

  hasOldEstimCons(): boolean;
  clearOldEstimCons(): void;
  getOldEstimCons(): number | undefined;
  setOldEstimCons(value: number): void;

  hasOldIsMainConn(): boolean;
  clearOldIsMainConn(): void;
  getOldIsMainConn(): number | undefined;
  setOldIsMainConn(value: number): void;

  hasOldConnStatus(): boolean;
  clearOldConnStatus(): void;
  getOldConnStatus(): number | undefined;
  setOldConnStatus(value: number): void;

  hasOldSurname(): boolean;
  clearOldSurname(): void;
  getOldSurname(): string | undefined;
  setOldSurname(value: string): void;

  hasOldUaAdress1(): boolean;
  clearOldUaAdress1(): void;
  getOldUaAdress1(): string | undefined;
  setOldUaAdress1(value: string): void;

  hasOldUaAdress2(): boolean;
  clearOldUaAdress2(): void;
  getOldUaAdress2(): string | undefined;
  setOldUaAdress2(value: string): void;

  hasOldUaAdress3(): boolean;
  clearOldUaAdress3(): void;
  getOldUaAdress3(): string | undefined;
  setOldUaAdress3(value: string): void;

  hasOldUaAdress4(): boolean;
  clearOldUaAdress4(): void;
  getOldUaAdress4(): string | undefined;
  setOldUaAdress4(value: string): void;

  hasOldOldKey(): boolean;
  clearOldOldKey(): void;
  getOldOldKey(): string | undefined;
  setOldOldKey(value: string): void;

  hasNewHasMeter(): boolean;
  clearNewHasMeter(): void;
  getNewHasMeter(): number | undefined;
  setNewHasMeter(value: number): void;

  hasNewMeterType(): boolean;
  clearNewMeterType(): void;
  getNewMeterType(): string | undefined;
  setNewMeterType(value: string): void;

  hasNewMeterRef(): boolean;
  clearNewMeterRef(): void;
  getNewMeterRef(): string | undefined;
  setNewMeterRef(value: string): void;

  hasNewMeterCondition(): boolean;
  clearNewMeterCondition(): void;
  getNewMeterCondition(): string | undefined;
  setNewMeterCondition(value: string): void;

  hasNewMeterSize(): boolean;
  clearNewMeterSize(): void;
  getNewMeterSize(): string | undefined;
  setNewMeterSize(value: string): void;

  hasNewHasSewer(): boolean;
  clearNewHasSewer(): void;
  getNewHasSewer(): number | undefined;
  setNewHasSewer(value: number): void;

  hasNewCType(): boolean;
  clearNewCType(): void;
  getNewCType(): string | undefined;
  setNewCType(value: string): void;

  hasNewNoUnits(): boolean;
  clearNewNoUnits(): void;
  getNewNoUnits(): number | undefined;
  setNewNoUnits(value: number): void;

  hasNewEstimCons(): boolean;
  clearNewEstimCons(): void;
  getNewEstimCons(): number | undefined;
  setNewEstimCons(value: number): void;

  hasNewIsMainConn(): boolean;
  clearNewIsMainConn(): void;
  getNewIsMainConn(): number | undefined;
  setNewIsMainConn(value: number): void;

  hasNewConnStatus(): boolean;
  clearNewConnStatus(): void;
  getNewConnStatus(): number | undefined;
  setNewConnStatus(value: number): void;

  hasNewSurname(): boolean;
  clearNewSurname(): void;
  getNewSurname(): string | undefined;
  setNewSurname(value: string): void;

  hasNewOldKey(): boolean;
  clearNewOldKey(): void;
  getNewOldKey(): string | undefined;
  setNewOldKey(value: string): void;

  hasNewUaAdress1(): boolean;
  clearNewUaAdress1(): void;
  getNewUaAdress1(): string | undefined;
  setNewUaAdress1(value: string): void;

  hasNewUaAdress2(): boolean;
  clearNewUaAdress2(): void;
  getNewUaAdress2(): string | undefined;
  setNewUaAdress2(value: string): void;

  hasNewUaAdress3(): boolean;
  clearNewUaAdress3(): void;
  getNewUaAdress3(): string | undefined;
  setNewUaAdress3(value: string): void;

  hasNewUaAdress4(): boolean;
  clearNewUaAdress4(): void;
  getNewUaAdress4(): string | undefined;
  setNewUaAdress4(value: string): void;

  hasLastInvoicedReading(): boolean;
  clearLastInvoicedReading(): void;
  getLastInvoicedReading(): number | undefined;
  setLastInvoicedReading(value: number): void;

  hasReadingInvoicedBilngDate(): boolean;
  clearReadingInvoicedBilngDate(): void;
  getReadingInvoicedBilngDate(): date_pb.MasDateTime | undefined;
  setReadingInvoicedBilngDate(value?: date_pb.MasDateTime): void;

  hasIsSubmited(): boolean;
  clearIsSubmited(): void;
  getIsSubmited(): number | undefined;
  setIsSubmited(value: number): void;

  hasCtypesDescription(): boolean;
  clearCtypesDescription(): void;
  getCtypesDescription(): string | undefined;
  setCtypesDescription(value: string): void;

  clearCtypesList(): void;
  getCtypesList(): Array<CUST_MOD_CTYPE>;
  setCtypesList(value: Array<CUST_MOD_CTYPE>): void;
  addCtypes(value?: CUST_MOD_CTYPE, index?: number): CUST_MOD_CTYPE;

  clearUnbilledreadingsList(): void;
  getUnbilledreadingsList(): Array<MeterRdg>;
  setUnbilledreadingsList(value: Array<MeterRdg>): void;
  addUnbilledreadings(value?: MeterRdg, index?: number): MeterRdg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustModModel.AsObject;
  static toObject(includeInstance: boolean, msg: CustModModel): CustModModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustModModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustModModel;
  static deserializeBinaryFromReader(message: CustModModel, reader: jspb.BinaryReader): CustModModel;
}

export namespace CustModModel {
  export type AsObject = {
    custkey?: string,
    propRef?: string,
    statmNo?: number,
    oldHasMeter?: number,
    oldMeterType?: string,
    oldMeterRef?: string,
    oldMeterCondition?: string,
    oldMeterSize?: string,
    oldHasSewer?: number,
    oldCType?: string,
    oldNoUnits?: number,
    oldEstimCons?: number,
    oldIsMainConn?: number,
    oldConnStatus?: number,
    oldSurname?: string,
    oldUaAdress1?: string,
    oldUaAdress2?: string,
    oldUaAdress3?: string,
    oldUaAdress4?: string,
    oldOldKey?: string,
    newHasMeter?: number,
    newMeterType?: string,
    newMeterRef?: string,
    newMeterCondition?: string,
    newMeterSize?: string,
    newHasSewer?: number,
    newCType?: string,
    newNoUnits?: number,
    newEstimCons?: number,
    newIsMainConn?: number,
    newConnStatus?: number,
    newSurname?: string,
    newOldKey?: string,
    newUaAdress1?: string,
    newUaAdress2?: string,
    newUaAdress3?: string,
    newUaAdress4?: string,
    lastInvoicedReading?: number,
    readingInvoicedBilngDate?: date_pb.MasDateTime.AsObject,
    isSubmited?: number,
    ctypesDescription?: string,
    ctypesList: Array<CUST_MOD_CTYPE.AsObject>,
    unbilledreadingsList: Array<MeterRdg.AsObject>,
  }
}

export class CUST_MOD_CTYPE extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasAllocPerc(): boolean;
  clearAllocPerc(): void;
  getAllocPerc(): number | undefined;
  setAllocPerc(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasIsOld(): boolean;
  clearIsOld(): void;
  getIsOld(): number | undefined;
  setIsOld(value: number): void;

  hasEstimConsPu(): boolean;
  clearEstimConsPu(): void;
  getEstimConsPu(): number | undefined;
  setEstimConsPu(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUST_MOD_CTYPE.AsObject;
  static toObject(includeInstance: boolean, msg: CUST_MOD_CTYPE): CUST_MOD_CTYPE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CUST_MOD_CTYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUST_MOD_CTYPE;
  static deserializeBinaryFromReader(message: CUST_MOD_CTYPE, reader: jspb.BinaryReader): CUST_MOD_CTYPE;
}

export namespace CUST_MOD_CTYPE {
  export type AsObject = {
    custkey?: string,
    cType?: string,
    statmNo?: number,
    propRef?: string,
    allocPerc?: number,
    noUnits?: number,
    isOld?: number,
    estimConsPu?: number,
    description?: string,
  }
}

export class AddMissingMeterRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMissingMeterRs.AsObject;
  static toObject(includeInstance: boolean, msg: AddMissingMeterRs): AddMissingMeterRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMissingMeterRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMissingMeterRs;
  static deserializeBinaryFromReader(message: AddMissingMeterRs, reader: jspb.BinaryReader): AddMissingMeterRs;
}

export namespace AddMissingMeterRs {
  export type AsObject = {
  }
}

export class VerifyIssueRq extends jspb.Message {
  hasBillgroups(): boolean;
  clearBillgroups(): void;
  getBillgroups(): string | undefined;
  setBillgroups(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): date_pb.MasDateTime | undefined;
  setBilngdate(value?: date_pb.MasDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyIssueRq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyIssueRq): VerifyIssueRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyIssueRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyIssueRq;
  static deserializeBinaryFromReader(message: VerifyIssueRq, reader: jspb.BinaryReader): VerifyIssueRq;
}

export namespace VerifyIssueRq {
  export type AsObject = {
    billgroups?: string,
    bilngdate?: date_pb.MasDateTime.AsObject,
  }
}

export class IssueVerificationResultItem1 extends jspb.Message {
  hasRole(): boolean;
  clearRole(): void;
  getRole(): AbstractVerificationRole | undefined;
  setRole(value?: AbstractVerificationRole): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasExpectedvalue(): boolean;
  clearExpectedvalue(): void;
  getExpectedvalue(): number | undefined;
  setExpectedvalue(value: number): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number | undefined;
  setValue(value: number): void;

  hasErrormessage(): boolean;
  clearErrormessage(): void;
  getErrormessage(): string | undefined;
  setErrormessage(value: string): void;

  hasWarningmessagemessage(): boolean;
  clearWarningmessagemessage(): void;
  getWarningmessagemessage(): string | undefined;
  setWarningmessagemessage(value: string): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): string | undefined;
  setNote(value: string): void;

  hasIsexecuted(): boolean;
  clearIsexecuted(): void;
  getIsexecuted(): boolean | undefined;
  setIsexecuted(value: boolean): void;

  hasDiff(): boolean;
  clearDiff(): void;
  getDiff(): number | undefined;
  setDiff(value: number): void;

  hasDiffpercentagestr(): boolean;
  clearDiffpercentagestr(): void;
  getDiffpercentagestr(): string | undefined;
  setDiffpercentagestr(value: string): void;

  hasCssclass(): boolean;
  clearCssclass(): void;
  getCssclass(): string | undefined;
  setCssclass(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueVerificationResultItem1.AsObject;
  static toObject(includeInstance: boolean, msg: IssueVerificationResultItem1): IssueVerificationResultItem1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueVerificationResultItem1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueVerificationResultItem1;
  static deserializeBinaryFromReader(message: IssueVerificationResultItem1, reader: jspb.BinaryReader): IssueVerificationResultItem1;
}

export namespace IssueVerificationResultItem1 {
  export type AsObject = {
    role?: AbstractVerificationRole.AsObject,
    description?: string,
    expectedvalue?: number,
    value?: number,
    errormessage?: string,
    warningmessagemessage?: string,
    note?: string,
    isexecuted?: boolean,
    diff?: number,
    diffpercentagestr?: string,
    cssclass?: string,
  }
}

export class IssueVerificationResultItem extends jspb.Message {
  clearIssueverificationresultitemList(): void;
  getIssueverificationresultitemList(): Array<IssueVerificationResultItem1>;
  setIssueverificationresultitemList(value: Array<IssueVerificationResultItem1>): void;
  addIssueverificationresultitem(value?: IssueVerificationResultItem1, index?: number): IssueVerificationResultItem1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueVerificationResultItem.AsObject;
  static toObject(includeInstance: boolean, msg: IssueVerificationResultItem): IssueVerificationResultItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueVerificationResultItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueVerificationResultItem;
  static deserializeBinaryFromReader(message: IssueVerificationResultItem, reader: jspb.BinaryReader): IssueVerificationResultItem;
}

export namespace IssueVerificationResultItem {
  export type AsObject = {
    issueverificationresultitemList: Array<IssueVerificationResultItem1.AsObject>,
  }
}

export class AbstractVerificationRole extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): date_pb.MasDateTime | undefined;
  setBilngdate(value?: date_pb.MasDateTime): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasExpectedstatment(): boolean;
  clearExpectedstatment(): void;
  getExpectedstatment(): string | undefined;
  setExpectedstatment(value: string): void;

  hasValuestatment(): boolean;
  clearValuestatment(): void;
  getValuestatment(): string | undefined;
  setValuestatment(value: string): void;

  hasCssclass(): boolean;
  clearCssclass(): void;
  getCssclass(): string | undefined;
  setCssclass(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbstractVerificationRole.AsObject;
  static toObject(includeInstance: boolean, msg: AbstractVerificationRole): AbstractVerificationRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AbstractVerificationRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbstractVerificationRole;
  static deserializeBinaryFromReader(message: AbstractVerificationRole, reader: jspb.BinaryReader): AbstractVerificationRole;
}

export namespace AbstractVerificationRole {
  export type AsObject = {
    billgroup?: string,
    bilngdate?: date_pb.MasDateTime.AsObject,
    code?: string,
    description?: string,
    expectedstatment?: string,
    valuestatment?: string,
    cssclass?: string,
  }
}

export class GetNewCustomersKeysListRs extends jspb.Message {
  clearCustomerlistList(): void;
  getCustomerlistList(): Array<string>;
  setCustomerlistList(value: Array<string>): void;
  addCustomerlist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewCustomersKeysListRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewCustomersKeysListRs): GetNewCustomersKeysListRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewCustomersKeysListRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewCustomersKeysListRs;
  static deserializeBinaryFromReader(message: GetNewCustomersKeysListRs, reader: jspb.BinaryReader): GetNewCustomersKeysListRs;
}

export namespace GetNewCustomersKeysListRs {
  export type AsObject = {
    customerlistList: Array<string>,
  }
}

export class GetNewCustomersKeysListRq extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): string | undefined;
  setFrom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewCustomersKeysListRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewCustomersKeysListRq): GetNewCustomersKeysListRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewCustomersKeysListRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewCustomersKeysListRq;
  static deserializeBinaryFromReader(message: GetNewCustomersKeysListRq, reader: jspb.BinaryReader): GetNewCustomersKeysListRq;
}

export namespace GetNewCustomersKeysListRq {
  export type AsObject = {
    from?: string,
  }
}

export class UpdateCustomersKeysListRq extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomersKeysListRq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomersKeysListRq): UpdateCustomersKeysListRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomersKeysListRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomersKeysListRq;
  static deserializeBinaryFromReader(message: UpdateCustomersKeysListRq, reader: jspb.BinaryReader): UpdateCustomersKeysListRq;
}

export namespace UpdateCustomersKeysListRq {
  export type AsObject = {
    keysList: Array<string>,
  }
}

export class UpdateCustomersKeysListRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomersKeysListRs.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomersKeysListRs): UpdateCustomersKeysListRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCustomersKeysListRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomersKeysListRs;
  static deserializeBinaryFromReader(message: UpdateCustomersKeysListRs, reader: jspb.BinaryReader): UpdateCustomersKeysListRs;
}

export namespace UpdateCustomersKeysListRs {
  export type AsObject = {
  }
}

export class GetAbstractCustomerInfoRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAbstractCustomerInfoRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAbstractCustomerInfoRq): GetAbstractCustomerInfoRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAbstractCustomerInfoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAbstractCustomerInfoRq;
  static deserializeBinaryFromReader(message: GetAbstractCustomerInfoRq, reader: jspb.BinaryReader): GetAbstractCustomerInfoRq;
}

export namespace GetAbstractCustomerInfoRq {
  export type AsObject = {
    custkey?: string,
  }
}

export class CreateFaxNoIndexRq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFaxNoIndexRq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFaxNoIndexRq): CreateFaxNoIndexRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFaxNoIndexRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFaxNoIndexRq;
  static deserializeBinaryFromReader(message: CreateFaxNoIndexRq, reader: jspb.BinaryReader): CreateFaxNoIndexRq;
}

export namespace CreateFaxNoIndexRq {
  export type AsObject = {
  }
}

export class CreateFaxNoIndexRs extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFaxNoIndexRs.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFaxNoIndexRs): CreateFaxNoIndexRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFaxNoIndexRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFaxNoIndexRs;
  static deserializeBinaryFromReader(message: CreateFaxNoIndexRs, reader: jspb.BinaryReader): CreateFaxNoIndexRs;
}

export namespace CreateFaxNoIndexRs {
  export type AsObject = {
  }
}

export class GetBillTypeByFtransRq extends jspb.Message {
  clearTransList(): void;
  getTransList(): Array<F_TRANS>;
  setTransList(value: Array<F_TRANS>): void;
  addTrans(value?: F_TRANS, index?: number): F_TRANS;

  clearAgreemsList(): void;
  getAgreemsList(): Array<CUST_AGREEM>;
  setAgreemsList(value: Array<CUST_AGREEM>): void;
  addAgreems(value?: CUST_AGREEM, index?: number): CUST_AGREEM;

  clearInstallsList(): void;
  getInstallsList(): Array<AGREEMENT_INSTALLMENTS>;
  setInstallsList(value: Array<AGREEMENT_INSTALLMENTS>): void;
  addInstalls(value?: AGREEMENT_INSTALLMENTS, index?: number): AGREEMENT_INSTALLMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillTypeByFtransRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillTypeByFtransRq): GetBillTypeByFtransRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillTypeByFtransRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillTypeByFtransRq;
  static deserializeBinaryFromReader(message: GetBillTypeByFtransRq, reader: jspb.BinaryReader): GetBillTypeByFtransRq;
}

export namespace GetBillTypeByFtransRq {
  export type AsObject = {
    transList: Array<F_TRANS.AsObject>,
    agreemsList: Array<CUST_AGREEM.AsObject>,
    installsList: Array<AGREEMENT_INSTALLMENTS.AsObject>,
  }
}

export class F_TRANS extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasEffectDte(): boolean;
  clearEffectDte(): void;
  getEffectDte(): date_pb.MasDateTime | undefined;
  setEffectDte(value?: date_pb.MasDateTime): void;

  hasCancelled(): boolean;
  clearCancelled(): void;
  getCancelled(): number | undefined;
  setCancelled(value: number): void;

  hasTrnsType(): boolean;
  clearTrnsType(): void;
  getTrnsType(): number | undefined;
  setTrnsType(value: number): void;

  hasTrnsStype(): boolean;
  clearTrnsStype(): void;
  getTrnsStype(): number | undefined;
  setTrnsStype(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasConnNo(): boolean;
  clearConnNo(): void;
  getConnNo(): number | undefined;
  setConnNo(value: number): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasTariffId(): boolean;
  clearTariffId(): void;
  getTariffId(): string | undefined;
  setTariffId(value: string): void;

  hasDateFrom(): boolean;
  clearDateFrom(): void;
  getDateFrom(): date_pb.MasDateTime | undefined;
  setDateFrom(value?: date_pb.MasDateTime): void;

  hasDateTo(): boolean;
  clearDateTo(): void;
  getDateTo(): date_pb.MasDateTime | undefined;
  setDateTo(value?: date_pb.MasDateTime): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasDocumntNo(): boolean;
  clearDocumntNo(): void;
  getDocumntNo(): string | undefined;
  setDocumntNo(value: string): void;

  hasRcptVoidd(): boolean;
  clearRcptVoidd(): void;
  getRcptVoidd(): number | undefined;
  setRcptVoidd(value: number): void;

  hasRcptOnlne(): boolean;
  clearRcptOnlne(): void;
  getRcptOnlne(): number | undefined;
  setRcptOnlne(value: number): void;

  hasRcptCheck(): boolean;
  clearRcptCheck(): void;
  getRcptCheck(): number | undefined;
  setRcptCheck(value: number): void;

  hasRcptOrder(): boolean;
  clearRcptOrder(): void;
  getRcptOrder(): number | undefined;
  setRcptOrder(value: number): void;

  hasRcptCash(): boolean;
  clearRcptCash(): void;
  getRcptCash(): number | undefined;
  setRcptCash(value: number): void;

  hasMemoFld(): boolean;
  clearMemoFld(): void;
  getMemoFld(): string | undefined;
  setMemoFld(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasDiscount(): boolean;
  clearDiscount(): void;
  getDiscount(): number | undefined;
  setDiscount(value: number): void;

  hasBillCycleId(): boolean;
  clearBillCycleId(): void;
  getBillCycleId(): number | undefined;
  setBillCycleId(value: number): void;

  hasBillCycleStep(): boolean;
  clearBillCycleStep(): void;
  getBillCycleStep(): number | undefined;
  setBillCycleStep(value: number): void;

  hasItemCode(): boolean;
  clearItemCode(): void;
  getItemCode(): string | undefined;
  setItemCode(value: string): void;

  hasReversed(): boolean;
  clearReversed(): void;
  getReversed(): number | undefined;
  setReversed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F_TRANS.AsObject;
  static toObject(includeInstance: boolean, msg: F_TRANS): F_TRANS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F_TRANS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F_TRANS;
  static deserializeBinaryFromReader(message: F_TRANS, reader: jspb.BinaryReader): F_TRANS;
}

export namespace F_TRANS {
  export type AsObject = {
    billgroup?: string,
    custkey?: string,
    transNo?: number,
    statmNo?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    effectDte?: date_pb.MasDateTime.AsObject,
    cancelled?: number,
    trnsType?: number,
    trnsStype?: number,
    propRef?: string,
    connNo?: number,
    meterType?: string,
    meterRef?: string,
    cType?: string,
    readType?: number,
    tariffId?: string,
    dateFrom?: date_pb.MasDateTime.AsObject,
    dateTo?: date_pb.MasDateTime.AsObject,
    prReading?: number,
    crReading?: number,
    consump?: number,
    amount?: number,
    noUnits?: number,
    documntNo?: string,
    rcptVoidd?: number,
    rcptOnlne?: number,
    rcptCheck?: number,
    rcptOrder?: number,
    rcptCash?: number,
    memoFld?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    discount?: number,
    billCycleId?: number,
    billCycleStep?: number,
    itemCode?: string,
    reversed?: number,
  }
}

export class CUST_AGREEM extends jspb.Message {
  hasAgrmNo(): boolean;
  clearAgrmNo(): void;
  getAgrmNo(): number | undefined;
  setAgrmNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAgrmRef(): boolean;
  clearAgrmRef(): void;
  getAgrmRef(): string | undefined;
  setAgrmRef(value: string): void;

  hasEffDate(): boolean;
  clearEffDate(): void;
  getEffDate(): date_pb.MasDateTime | undefined;
  setEffDate(value?: date_pb.MasDateTime): void;

  hasCompletionDate(): boolean;
  clearCompletionDate(): void;
  getCompletionDate(): date_pb.MasDateTime | undefined;
  setCompletionDate(value?: date_pb.MasDateTime): void;

  hasAgrmValue(): boolean;
  clearAgrmValue(): void;
  getAgrmValue(): number | undefined;
  setAgrmValue(value: number): void;

  hasAgrmImmpay(): boolean;
  clearAgrmImmpay(): void;
  getAgrmImmpay(): number | undefined;
  setAgrmImmpay(value: number): void;

  hasImmpayRcptno(): boolean;
  clearImmpayRcptno(): void;
  getImmpayRcptno(): string | undefined;
  setImmpayRcptno(value: string): void;

  hasNoInstalments(): boolean;
  clearNoInstalments(): void;
  getNoInstalments(): number | undefined;
  setNoInstalments(value: number): void;

  hasInstlmAmount(): boolean;
  clearInstlmAmount(): void;
  getInstlmAmount(): number | undefined;
  setInstlmAmount(value: number): void;

  hasAgrmType(): boolean;
  clearAgrmType(): void;
  getAgrmType(): number | undefined;
  setAgrmType(value: number): void;

  hasAgrmStatus(): boolean;
  clearAgrmStatus(): void;
  getAgrmStatus(): number | undefined;
  setAgrmStatus(value: number): void;

  hasTrnsType(): boolean;
  clearTrnsType(): void;
  getTrnsType(): number | undefined;
  setTrnsType(value: number): void;

  hasTrnsStype(): boolean;
  clearTrnsStype(): void;
  getTrnsStype(): number | undefined;
  setTrnsStype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUST_AGREEM.AsObject;
  static toObject(includeInstance: boolean, msg: CUST_AGREEM): CUST_AGREEM.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CUST_AGREEM, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUST_AGREEM;
  static deserializeBinaryFromReader(message: CUST_AGREEM, reader: jspb.BinaryReader): CUST_AGREEM;
}

export namespace CUST_AGREEM {
  export type AsObject = {
    agrmNo?: number,
    custkey?: string,
    agrmRef?: string,
    effDate?: date_pb.MasDateTime.AsObject,
    completionDate?: date_pb.MasDateTime.AsObject,
    agrmValue?: number,
    agrmImmpay?: number,
    immpayRcptno?: string,
    noInstalments?: number,
    instlmAmount?: number,
    agrmType?: number,
    agrmStatus?: number,
    trnsType?: number,
    trnsStype?: number,
  }
}

export class AGREEMENT_INSTALLMENTS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAgrmNo(): boolean;
  clearAgrmNo(): void;
  getAgrmNo(): number | undefined;
  setAgrmNo(value: number): void;

  hasInstallmentNo(): boolean;
  clearInstallmentNo(): void;
  getInstallmentNo(): number | undefined;
  setInstallmentNo(value: number): void;

  hasChargeDate(): boolean;
  clearChargeDate(): void;
  getChargeDate(): date_pb.MasDateTime | undefined;
  setChargeDate(value?: date_pb.MasDateTime): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AGREEMENT_INSTALLMENTS.AsObject;
  static toObject(includeInstance: boolean, msg: AGREEMENT_INSTALLMENTS): AGREEMENT_INSTALLMENTS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AGREEMENT_INSTALLMENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AGREEMENT_INSTALLMENTS;
  static deserializeBinaryFromReader(message: AGREEMENT_INSTALLMENTS, reader: jspb.BinaryReader): AGREEMENT_INSTALLMENTS;
}

export namespace AGREEMENT_INSTALLMENTS {
  export type AsObject = {
    custkey?: string,
    agrmNo?: number,
    installmentNo?: number,
    chargeDate?: date_pb.MasDateTime.AsObject,
    amount?: number,
    transNo?: number,
  }
}

export class GetBillTypeByBillPrintRq extends jspb.Message {
  clearTransList(): void;
  getTransList(): Array<BILL_PRINT>;
  setTransList(value: Array<BILL_PRINT>): void;
  addTrans(value?: BILL_PRINT, index?: number): BILL_PRINT;

  clearAgreemsList(): void;
  getAgreemsList(): Array<CUST_AGREEM>;
  setAgreemsList(value: Array<CUST_AGREEM>): void;
  addAgreems(value?: CUST_AGREEM, index?: number): CUST_AGREEM;

  clearInstallsList(): void;
  getInstallsList(): Array<AGREEMENT_INSTALLMENTS>;
  setInstallsList(value: Array<AGREEMENT_INSTALLMENTS>): void;
  addInstalls(value?: AGREEMENT_INSTALLMENTS, index?: number): AGREEMENT_INSTALLMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillTypeByBillPrintRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillTypeByBillPrintRq): GetBillTypeByBillPrintRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillTypeByBillPrintRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillTypeByBillPrintRq;
  static deserializeBinaryFromReader(message: GetBillTypeByBillPrintRq, reader: jspb.BinaryReader): GetBillTypeByBillPrintRq;
}

export namespace GetBillTypeByBillPrintRq {
  export type AsObject = {
    transList: Array<BILL_PRINT.AsObject>,
    agreemsList: Array<CUST_AGREEM.AsObject>,
    installsList: Array<AGREEMENT_INSTALLMENTS.AsObject>,
  }
}

export class BILL_PRINT extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasIsMainCtype(): boolean;
  clearIsMainCtype(): void;
  getIsMainCtype(): number | undefined;
  setIsMainCtype(value: number): void;

  hasMainCType(): boolean;
  clearMainCType(): void;
  getMainCType(): string | undefined;
  setMainCType(value: string): void;

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
  getWalkNo(): number | undefined;
  setWalkNo(value: number): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasWaterAmt(): boolean;
  clearWaterAmt(): void;
  getWaterAmt(): number | undefined;
  setWaterAmt(value: number): void;

  hasSewerAmt(): boolean;
  clearSewerAmt(): void;
  getSewerAmt(): number | undefined;
  setSewerAmt(value: number): void;

  hasBasicAmt(): boolean;
  clearBasicAmt(): void;
  getBasicAmt(): number | undefined;
  setBasicAmt(value: number): void;

  hasTaxAmt(): boolean;
  clearTaxAmt(): void;
  getTaxAmt(): number | undefined;
  setTaxAmt(value: number): void;

  hasInstallsAmt(): boolean;
  clearInstallsAmt(): void;
  getInstallsAmt(): number | undefined;
  setInstallsAmt(value: number): void;

  hasCollectionAmt(): boolean;
  clearCollectionAmt(): void;
  getCollectionAmt(): number | undefined;
  setCollectionAmt(value: number): void;

  hasDbtAmt(): boolean;
  clearDbtAmt(): void;
  getDbtAmt(): number | undefined;
  setDbtAmt(value: number): void;

  hasCrdtAmt(): boolean;
  clearCrdtAmt(): void;
  getCrdtAmt(): number | undefined;
  setCrdtAmt(value: number): void;

  hasAgreemAmt(): boolean;
  clearAgreemAmt(): void;
  getAgreemAmt(): number | undefined;
  setAgreemAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  hasTakafulAmt(): boolean;
  clearTakafulAmt(): void;
  getTakafulAmt(): number | undefined;
  setTakafulAmt(value: number): void;

  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): void;
  getTanzeemAmt(): number | undefined;
  setTanzeemAmt(value: number): void;

  hasRoundAmt(): boolean;
  clearRoundAmt(): void;
  getRoundAmt(): number | undefined;
  setRoundAmt(value: number): void;

  hasMeterAmt(): boolean;
  clearMeterAmt(): void;
  getMeterAmt(): number | undefined;
  setMeterAmt(value: number): void;

  hasConnAmt(): boolean;
  clearConnAmt(): void;
  getConnAmt(): number | undefined;
  setConnAmt(value: number): void;

  hasMeterManAmt(): boolean;
  clearMeterManAmt(): void;
  getMeterManAmt(): number | undefined;
  setMeterManAmt(value: number): void;

  hasContractAmt(): boolean;
  clearContractAmt(): void;
  getContractAmt(): number | undefined;
  setContractAmt(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasNetDueAmount(): boolean;
  clearNetDueAmount(): void;
  getNetDueAmount(): number | undefined;
  setNetDueAmount(value: number): void;

  hasVirtualAdj(): boolean;
  clearVirtualAdj(): void;
  getVirtualAdj(): number | undefined;
  setVirtualAdj(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasConsB1(): boolean;
  clearConsB1(): void;
  getConsB1(): number | undefined;
  setConsB1(value: number): void;

  hasConsB2(): boolean;
  clearConsB2(): void;
  getConsB2(): number | undefined;
  setConsB2(value: number): void;

  hasConsB3(): boolean;
  clearConsB3(): void;
  getConsB3(): number | undefined;
  setConsB3(value: number): void;

  hasConsB4(): boolean;
  clearConsB4(): void;
  getConsB4(): number | undefined;
  setConsB4(value: number): void;

  hasConsB5(): boolean;
  clearConsB5(): void;
  getConsB5(): number | undefined;
  setConsB5(value: number): void;

  hasWaterAmountB1(): boolean;
  clearWaterAmountB1(): void;
  getWaterAmountB1(): number | undefined;
  setWaterAmountB1(value: number): void;

  hasWaterAmountB2(): boolean;
  clearWaterAmountB2(): void;
  getWaterAmountB2(): number | undefined;
  setWaterAmountB2(value: number): void;

  hasWaterAmountB3(): boolean;
  clearWaterAmountB3(): void;
  getWaterAmountB3(): number | undefined;
  setWaterAmountB3(value: number): void;

  hasWaterAmountB4(): boolean;
  clearWaterAmountB4(): void;
  getWaterAmountB4(): number | undefined;
  setWaterAmountB4(value: number): void;

  hasWaterAmountB5(): boolean;
  clearWaterAmountB5(): void;
  getWaterAmountB5(): number | undefined;
  setWaterAmountB5(value: number): void;

  hasWaterPriceB1(): boolean;
  clearWaterPriceB1(): void;
  getWaterPriceB1(): number | undefined;
  setWaterPriceB1(value: number): void;

  hasWaterPriceB2(): boolean;
  clearWaterPriceB2(): void;
  getWaterPriceB2(): number | undefined;
  setWaterPriceB2(value: number): void;

  hasWaterPriceB3(): boolean;
  clearWaterPriceB3(): void;
  getWaterPriceB3(): number | undefined;
  setWaterPriceB3(value: number): void;

  hasWaterPriceB4(): boolean;
  clearWaterPriceB4(): void;
  getWaterPriceB4(): number | undefined;
  setWaterPriceB4(value: number): void;

  hasWaterPriceB5(): boolean;
  clearWaterPriceB5(): void;
  getWaterPriceB5(): number | undefined;
  setWaterPriceB5(value: number): void;

  hasSewerAmountB1(): boolean;
  clearSewerAmountB1(): void;
  getSewerAmountB1(): number | undefined;
  setSewerAmountB1(value: number): void;

  hasSewerAmountB2(): boolean;
  clearSewerAmountB2(): void;
  getSewerAmountB2(): number | undefined;
  setSewerAmountB2(value: number): void;

  hasSewerAmountB3(): boolean;
  clearSewerAmountB3(): void;
  getSewerAmountB3(): number | undefined;
  setSewerAmountB3(value: number): void;

  hasSewerAmountB4(): boolean;
  clearSewerAmountB4(): void;
  getSewerAmountB4(): number | undefined;
  setSewerAmountB4(value: number): void;

  hasSewerAmountB5(): boolean;
  clearSewerAmountB5(): void;
  getSewerAmountB5(): number | undefined;
  setSewerAmountB5(value: number): void;

  hasSewerPriceB1(): boolean;
  clearSewerPriceB1(): void;
  getSewerPriceB1(): number | undefined;
  setSewerPriceB1(value: number): void;

  hasSewerPriceB2(): boolean;
  clearSewerPriceB2(): void;
  getSewerPriceB2(): number | undefined;
  setSewerPriceB2(value: number): void;

  hasSewerPriceB3(): boolean;
  clearSewerPriceB3(): void;
  getSewerPriceB3(): number | undefined;
  setSewerPriceB3(value: number): void;

  hasSewerPriceB4(): boolean;
  clearSewerPriceB4(): void;
  getSewerPriceB4(): number | undefined;
  setSewerPriceB4(value: number): void;

  hasSewerPriceB5(): boolean;
  clearSewerPriceB5(): void;
  getSewerPriceB5(): number | undefined;
  setSewerPriceB5(value: number): void;

  hasKestTswya(): boolean;
  clearKestTswya(): void;
  getKestTswya(): number | undefined;
  setKestTswya(value: number): void;

  hasKhasmTaswya(): boolean;
  clearKhasmTaswya(): void;
  getKhasmTaswya(): number | undefined;
  setKhasmTaswya(value: number): void;

  hasCustBand(): boolean;
  clearCustBand(): void;
  getCustBand(): number | undefined;
  setCustBand(value: number): void;

  hasErrorAmt(): boolean;
  clearErrorAmt(): void;
  getErrorAmt(): number | undefined;
  setErrorAmt(value: number): void;

  hasMarketing(): boolean;
  clearMarketing(): void;
  getMarketing(): number | undefined;
  setMarketing(value: number): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasGardPaymentNo(): boolean;
  clearGardPaymentNo(): void;
  getGardPaymentNo(): string | undefined;
  setGardPaymentNo(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasUaAdress1(): boolean;
  clearUaAdress1(): void;
  getUaAdress1(): string | undefined;
  setUaAdress1(value: string): void;

  hasUaAdress2(): boolean;
  clearUaAdress2(): void;
  getUaAdress2(): string | undefined;
  setUaAdress2(value: string): void;

  hasUaAdress3(): boolean;
  clearUaAdress3(): void;
  getUaAdress3(): string | undefined;
  setUaAdress3(value: string): void;

  hasUaAdress4(): boolean;
  clearUaAdress4(): void;
  getUaAdress4(): string | undefined;
  setUaAdress4(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILL_PRINT.AsObject;
  static toObject(includeInstance: boolean, msg: BILL_PRINT): BILL_PRINT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BILL_PRINT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILL_PRINT;
  static deserializeBinaryFromReader(message: BILL_PRINT, reader: jspb.BinaryReader): BILL_PRINT;
}

export namespace BILL_PRINT {
  export type AsObject = {
    custkey?: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    cType?: string,
    paymentNo?: string,
    isMainCtype?: number,
    mainCType?: string,
    billgroup?: string,
    bookNo?: string,
    walkNo?: number,
    readType?: number,
    consump?: number,
    noUnits?: number,
    waterAmt?: number,
    sewerAmt?: number,
    basicAmt?: number,
    taxAmt?: number,
    installsAmt?: number,
    collectionAmt?: number,
    dbtAmt?: number,
    crdtAmt?: number,
    agreemAmt?: number,
    otherAmt?: number,
    takafulAmt?: number,
    tanzeemAmt?: number,
    roundAmt?: number,
    meterAmt?: number,
    connAmt?: number,
    meterManAmt?: number,
    contractAmt?: number,
    curCharges?: number,
    curPaymnts?: number,
    instalment?: number,
    clBlnce?: number,
    opBlnce?: number,
    dueAmount?: number,
    netDueAmount?: number,
    virtualAdj?: number,
    crReading?: number,
    prReading?: number,
    consB1?: number,
    consB2?: number,
    consB3?: number,
    consB4?: number,
    consB5?: number,
    waterAmountB1?: number,
    waterAmountB2?: number,
    waterAmountB3?: number,
    waterAmountB4?: number,
    waterAmountB5?: number,
    waterPriceB1?: number,
    waterPriceB2?: number,
    waterPriceB3?: number,
    waterPriceB4?: number,
    waterPriceB5?: number,
    sewerAmountB1?: number,
    sewerAmountB2?: number,
    sewerAmountB3?: number,
    sewerAmountB4?: number,
    sewerAmountB5?: number,
    sewerPriceB1?: number,
    sewerPriceB2?: number,
    sewerPriceB3?: number,
    sewerPriceB4?: number,
    sewerPriceB5?: number,
    kestTswya?: number,
    khasmTaswya?: number,
    custBand?: number,
    errorAmt?: number,
    marketing?: number,
    seqNo?: number,
    gardPaymentNo?: string,
    surname?: string,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    propRef?: string,
    statmNo?: number,
    oldKey?: string,
  }
}

export class GetBillCtypesRq extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillCtypesRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillCtypesRq): GetBillCtypesRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillCtypesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillCtypesRq;
  static deserializeBinaryFromReader(message: GetBillCtypesRq, reader: jspb.BinaryReader): GetBillCtypesRq;
}

export namespace GetBillCtypesRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    custkey?: string,
    cycleid?: number,
  }
}

export class GetBill_CTYPESByFtransRq extends jspb.Message {
  clearTransList(): void;
  getTransList(): Array<F_TRANS>;
  setTransList(value: Array<F_TRANS>): void;
  addTrans(value?: F_TRANS, index?: number): F_TRANS;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBill_CTYPESByFtransRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBill_CTYPESByFtransRq): GetBill_CTYPESByFtransRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBill_CTYPESByFtransRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBill_CTYPESByFtransRq;
  static deserializeBinaryFromReader(message: GetBill_CTYPESByFtransRq, reader: jspb.BinaryReader): GetBill_CTYPESByFtransRq;
}

export namespace GetBill_CTYPESByFtransRq {
  export type AsObject = {
    transList: Array<F_TRANS.AsObject>,
    cycleid?: number,
  }
}

export class StatmCtypeRs extends jspb.Message {
  clearStatmCtypeList(): void;
  getStatmCtypeList(): Array<STATM_CTYPE>;
  setStatmCtypeList(value: Array<STATM_CTYPE>): void;
  addStatmCtype(value?: STATM_CTYPE, index?: number): STATM_CTYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatmCtypeRs.AsObject;
  static toObject(includeInstance: boolean, msg: StatmCtypeRs): StatmCtypeRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatmCtypeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatmCtypeRs;
  static deserializeBinaryFromReader(message: StatmCtypeRs, reader: jspb.BinaryReader): StatmCtypeRs;
}

export namespace StatmCtypeRs {
  export type AsObject = {
    statmCtypeList: Array<STATM_CTYPE.AsObject>,
  }
}

export class GetBillItemTypesByBillItemRq extends jspb.Message {
  clearBillitemsList(): void;
  getBillitemsList(): Array<VwBillItem>;
  setBillitemsList(value: Array<VwBillItem>): void;
  addBillitems(value?: VwBillItem, index?: number): VwBillItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillItemTypesByBillItemRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillItemTypesByBillItemRq): GetBillItemTypesByBillItemRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillItemTypesByBillItemRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillItemTypesByBillItemRq;
  static deserializeBinaryFromReader(message: GetBillItemTypesByBillItemRq, reader: jspb.BinaryReader): GetBillItemTypesByBillItemRq;
}

export namespace GetBillItemTypesByBillItemRq {
  export type AsObject = {
    billitemsList: Array<VwBillItem.AsObject>,
  }
}

export class GetBillItemTypesByBillPrintRq extends jspb.Message {
  clearBillprintList(): void;
  getBillprintList(): Array<BILL_PRINT>;
  setBillprintList(value: Array<BILL_PRINT>): void;
  addBillprint(value?: BILL_PRINT, index?: number): BILL_PRINT;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillItemTypesByBillPrintRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillItemTypesByBillPrintRq): GetBillItemTypesByBillPrintRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillItemTypesByBillPrintRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillItemTypesByBillPrintRq;
  static deserializeBinaryFromReader(message: GetBillItemTypesByBillPrintRq, reader: jspb.BinaryReader): GetBillItemTypesByBillPrintRq;
}

export namespace GetBillItemTypesByBillPrintRq {
  export type AsObject = {
    billprintList: Array<BILL_PRINT.AsObject>,
    custkey?: string,
    paymentNo?: string,
  }
}

export class VwBillItem extends jspb.Message {
  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasBillItem(): boolean;
  clearBillItem(): void;
  getBillItem(): string | undefined;
  setBillItem(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VwBillItem.AsObject;
  static toObject(includeInstance: boolean, msg: VwBillItem): VwBillItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VwBillItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VwBillItem;
  static deserializeBinaryFromReader(message: VwBillItem, reader: jspb.BinaryReader): VwBillItem;
}

export namespace VwBillItem {
  export type AsObject = {
    cycleId?: number,
    paymentNo?: string,
    billItem?: string,
    custkey?: string,
    amount?: number,
  }
}

export class GetStatmItemsByFStatmRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasSubstmNo(): boolean;
  clearSubstmNo(): void;
  getSubstmNo(): number | undefined;
  setSubstmNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasAmtCollected(): boolean;
  clearAmtCollected(): void;
  getAmtCollected(): number | undefined;
  setAmtCollected(value: number): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasDeliveryMan(): boolean;
  clearDeliveryMan(): void;
  getDeliveryMan(): string | undefined;
  setDeliveryMan(value: string): void;

  hasChqBank(): boolean;
  clearChqBank(): void;
  getChqBank(): string | undefined;
  setChqBank(value: string): void;

  hasChqDetails(): boolean;
  clearChqDetails(): void;
  getChqDetails(): string | undefined;
  setChqDetails(value: string): void;

  hasChqNo(): boolean;
  clearChqNo(): void;
  getChqNo(): string | undefined;
  setChqNo(value: string): void;

  hasDeliveryDate(): boolean;
  clearDeliveryDate(): void;
  getDeliveryDate(): date_pb.MasDateTime | undefined;
  setDeliveryDate(value?: date_pb.MasDateTime): void;

  hasMarketing(): boolean;
  clearMarketing(): void;
  getMarketing(): number | undefined;
  setMarketing(value: number): void;

  hasGardPaymentNo(): boolean;
  clearGardPaymentNo(): void;
  getGardPaymentNo(): string | undefined;
  setGardPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatmItemsByFStatmRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatmItemsByFStatmRq): GetStatmItemsByFStatmRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatmItemsByFStatmRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatmItemsByFStatmRq;
  static deserializeBinaryFromReader(message: GetStatmItemsByFStatmRq, reader: jspb.BinaryReader): GetStatmItemsByFStatmRq;
}

export namespace GetStatmItemsByFStatmRq {
  export type AsObject = {
    custkey?: string,
    statmNo?: number,
    substmNo?: number,
    billgroup?: string,
    paymentNo?: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    clBlnce?: number,
    opBlnce?: number,
    instalment?: number,
    curCharges?: number,
    curPaymnts?: number,
    amtCollected?: number,
    deliverySt?: number,
    deliveryMan?: string,
    chqBank?: string,
    chqDetails?: string,
    chqNo?: string,
    deliveryDate?: date_pb.MasDateTime.AsObject,
    marketing?: number,
    gardPaymentNo?: string,
  }
}

export class GetStationCodeRq extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStationCodeRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStationCodeRq): GetStationCodeRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStationCodeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStationCodeRq;
  static deserializeBinaryFromReader(message: GetStationCodeRq, reader: jspb.BinaryReader): GetStationCodeRq;
}

export namespace GetStationCodeRq {
  export type AsObject = {
    stationno?: number,
  }
}

export class GetStationCodeRs extends jspb.Message {
  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): string | undefined;
  setStationno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStationCodeRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetStationCodeRs): GetStationCodeRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStationCodeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStationCodeRs;
  static deserializeBinaryFromReader(message: GetStationCodeRs, reader: jspb.BinaryReader): GetStationCodeRs;
}

export namespace GetStationCodeRs {
  export type AsObject = {
    stationno?: string,
  }
}

export class CustkeyRq extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustkeyRq.AsObject;
  static toObject(includeInstance: boolean, msg: CustkeyRq): CustkeyRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustkeyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustkeyRq;
  static deserializeBinaryFromReader(message: CustkeyRq, reader: jspb.BinaryReader): CustkeyRq;
}

export namespace CustkeyRq {
  export type AsObject = {
    custkey?: string,
  }
}

export class GetCustomerMetrDtlRs extends jspb.Message {
  hasMeterDiam(): boolean;
  clearMeterDiam(): void;
  getMeterDiam(): number | undefined;
  setMeterDiam(value: number): void;

  hasHasMeter(): boolean;
  clearHasMeter(): void;
  getHasMeter(): boolean | undefined;
  setHasMeter(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerMetrDtlRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerMetrDtlRs): GetCustomerMetrDtlRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerMetrDtlRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerMetrDtlRs;
  static deserializeBinaryFromReader(message: GetCustomerMetrDtlRs, reader: jspb.BinaryReader): GetCustomerMetrDtlRs;
}

export namespace GetCustomerMetrDtlRs {
  export type AsObject = {
    meterDiam?: number,
    hasMeter?: boolean,
  }
}

export class IMPORT_ALL_DATA_RS extends jspb.Message {
  clearCdtList(): void;
  getCdtList(): Array<CUST_DTL>;
  setCdtList(value: Array<CUST_DTL>): void;
  addCdt(value?: CUST_DTL, index?: number): CUST_DTL;

  clearReadingsList(): void;
  getReadingsList(): Array<READINGS>;
  setReadingsList(value: Array<READINGS>): void;
  addReadings(value?: READINGS, index?: number): READINGS;

  clearMultiCTypeList(): void;
  getMultiCTypeList(): Array<MULTI_C_TYPE>;
  setMultiCTypeList(value: Array<MULTI_C_TYPE>): void;
  addMultiCType(value?: MULTI_C_TYPE, index?: number): MULTI_C_TYPE;

  clearFTransactionsList(): void;
  getFTransactionsList(): Array<F_TRANSACTIONS>;
  setFTransactionsList(value: Array<F_TRANSACTIONS>): void;
  addFTransactions(value?: F_TRANSACTIONS, index?: number): F_TRANSACTIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IMPORT_ALL_DATA_RS.AsObject;
  static toObject(includeInstance: boolean, msg: IMPORT_ALL_DATA_RS): IMPORT_ALL_DATA_RS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IMPORT_ALL_DATA_RS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IMPORT_ALL_DATA_RS;
  static deserializeBinaryFromReader(message: IMPORT_ALL_DATA_RS, reader: jspb.BinaryReader): IMPORT_ALL_DATA_RS;
}

export namespace IMPORT_ALL_DATA_RS {
  export type AsObject = {
    cdtList: Array<CUST_DTL.AsObject>,
    readingsList: Array<READINGS.AsObject>,
    multiCTypeList: Array<MULTI_C_TYPE.AsObject>,
    fTransactionsList: Array<F_TRANSACTIONS.AsObject>,
  }
}

export class CUST_DTL extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNoC(): boolean;
  clearBookNoC(): void;
  getBookNoC(): string | undefined;
  setBookNoC(value: string): void;

  hasBookNoR(): boolean;
  clearBookNoR(): void;
  getBookNoR(): string | undefined;
  setBookNoR(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasUaAddress1(): boolean;
  clearUaAddress1(): void;
  getUaAddress1(): string | undefined;
  setUaAddress1(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasPropertyId(): boolean;
  clearPropertyId(): void;
  getPropertyId(): number | undefined;
  setPropertyId(value: number): void;

  hasSeqC(): boolean;
  clearSeqC(): void;
  getSeqC(): number | undefined;
  setSeqC(value: number): void;

  hasSeqR(): boolean;
  clearSeqR(): void;
  getSeqR(): number | undefined;
  setSeqR(value: number): void;

  hasConnStatus(): boolean;
  clearConnStatus(): void;
  getConnStatus(): CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap] | undefined;
  setConnStatus(value: CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap]): void;

  hasMeterDiam(): boolean;
  clearMeterDiam(): void;
  getMeterDiam(): number | undefined;
  setMeterDiam(value: number): void;

  hasEstimCons(): boolean;
  clearEstimCons(): void;
  getEstimCons(): number | undefined;
  setEstimCons(value: number): void;

  hasHasSewer(): boolean;
  clearHasSewer(): void;
  getHasSewer(): boolean | undefined;
  setHasSewer(value: boolean): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasParentCustkey(): boolean;
  clearParentCustkey(): void;
  getParentCustkey(): string | undefined;
  setParentCustkey(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUST_DTL.AsObject;
  static toObject(includeInstance: boolean, msg: CUST_DTL): CUST_DTL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CUST_DTL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUST_DTL;
  static deserializeBinaryFromReader(message: CUST_DTL, reader: jspb.BinaryReader): CUST_DTL;
}

export namespace CUST_DTL {
  export type AsObject = {
    custkey?: string,
    billgroup?: string,
    bookNoC?: string,
    bookNoR?: string,
    surname?: string,
    uaAddress1?: string,
    propRef?: string,
    propertyId?: number,
    seqC?: number,
    seqR?: number,
    connStatus?: CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap],
    meterDiam?: number,
    estimCons?: number,
    hasSewer?: boolean,
    noUnits?: number,
    parentCustkey?: string,
    cType?: string,
    walkNo?: string,
  }
}

export class LU_METER_SIZE extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number | undefined;
  setCode(value: number): void;

  hasBillercode(): boolean;
  clearBillercode(): void;
  getBillercode(): number | undefined;
  setBillercode(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_METER_SIZE.AsObject;
  static toObject(includeInstance: boolean, msg: LU_METER_SIZE): LU_METER_SIZE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LU_METER_SIZE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_METER_SIZE;
  static deserializeBinaryFromReader(message: LU_METER_SIZE, reader: jspb.BinaryReader): LU_METER_SIZE;
}

export namespace LU_METER_SIZE {
  export type AsObject = {
    code?: number,
    billercode?: number,
    description?: string,
  }
}

export class READINGS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasReadingNo(): boolean;
  clearReadingNo(): void;
  getReadingNo(): number | undefined;
  setReadingNo(value: number): void;

  hasBReading(): boolean;
  clearBReading(): void;
  getBReading(): number | undefined;
  setBReading(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasIsCancelled(): boolean;
  clearIsCancelled(): void;
  getIsCancelled(): boolean | undefined;
  setIsCancelled(value: boolean): void;

  hasIsInvoiced(): boolean;
  clearIsInvoiced(): void;
  getIsInvoiced(): boolean | undefined;
  setIsInvoiced(value: boolean): void;

  hasReadingDate(): boolean;
  clearReadingDate(): void;
  getReadingDate(): date_pb.MasDateTime;
  setReadingDate(value?: date_pb.MasDateTime): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasReadStatus(): boolean;
  clearReadStatus(): void;
  getReadStatus(): READ_STATUSMap[keyof READ_STATUSMap] | undefined;
  setReadStatus(value: READ_STATUSMap[keyof READ_STATUSMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: READINGS): READINGS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): READINGS;
  static deserializeBinaryFromReader(message: READINGS, reader: jspb.BinaryReader): READINGS;
}

export namespace READINGS {
  export type AsObject = {
    custkey?: string,
    readingNo?: number,
    bReading?: number,
    consump?: number,
    isCancelled?: boolean,
    isInvoiced?: boolean,
    readingDate: date_pb.MasDateTime.AsObject,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    readStatus?: READ_STATUSMap[keyof READ_STATUSMap],
  }
}

export class MULTI_C_TYPE extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasWaterPrec(): boolean;
  clearWaterPrec(): void;
  getWaterPrec(): number | undefined;
  setWaterPrec(value: number): void;

  hasSewerPrec(): boolean;
  clearSewerPrec(): void;
  getSewerPrec(): number | undefined;
  setSewerPrec(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasEstimCons(): boolean;
  clearEstimCons(): void;
  getEstimCons(): number | undefined;
  setEstimCons(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MULTI_C_TYPE.AsObject;
  static toObject(includeInstance: boolean, msg: MULTI_C_TYPE): MULTI_C_TYPE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MULTI_C_TYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MULTI_C_TYPE;
  static deserializeBinaryFromReader(message: MULTI_C_TYPE, reader: jspb.BinaryReader): MULTI_C_TYPE;
}

export namespace MULTI_C_TYPE {
  export type AsObject = {
    custkey?: string,
    cType?: string,
    waterPrec?: number,
    sewerPrec?: number,
    noUnits?: number,
    estimCons?: number,
  }
}

export class F_TRANSACTIONS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasIsInvoiced(): boolean;
  clearIsInvoiced(): void;
  getIsInvoiced(): boolean | undefined;
  setIsInvoiced(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F_TRANSACTIONS.AsObject;
  static toObject(includeInstance: boolean, msg: F_TRANSACTIONS): F_TRANSACTIONS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: F_TRANSACTIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F_TRANSACTIONS;
  static deserializeBinaryFromReader(message: F_TRANSACTIONS, reader: jspb.BinaryReader): F_TRANSACTIONS;
}

export namespace F_TRANSACTIONS {
  export type AsObject = {
    custkey?: string,
    transNo?: number,
    amount?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    isInvoiced?: boolean,
  }
}

export class CalcBillgroupRq extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): date_pb.MasDateTime;
  setBilngDate(value?: date_pb.MasDateTime): void;

  hasCalcStep(): boolean;
  clearCalcStep(): void;
  getCalcStep(): BillingStepsMap[keyof BillingStepsMap] | undefined;
  setCalcStep(value: BillingStepsMap[keyof BillingStepsMap]): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCycleLen(): boolean;
  clearCycleLen(): void;
  getCycleLen(): number | undefined;
  setCycleLen(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcBillgroupRq.AsObject;
  static toObject(includeInstance: boolean, msg: CalcBillgroupRq): CalcBillgroupRq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcBillgroupRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcBillgroupRq;
  static deserializeBinaryFromReader(message: CalcBillgroupRq, reader: jspb.BinaryReader): CalcBillgroupRq;
}

export namespace CalcBillgroupRq {
  export type AsObject = {
    billgroup?: string,
    bilngDate: date_pb.MasDateTime.AsObject,
    calcStep?: BillingStepsMap[keyof BillingStepsMap],
    description?: string,
    cycleLen?: number,
  }
}

export class CalcBillgroupRs extends jspb.Message {
  hasDone(): boolean;
  clearDone(): void;
  getDone(): boolean | undefined;
  setDone(value: boolean): void;

  hasErrmsg(): boolean;
  clearErrmsg(): void;
  getErrmsg(): string | undefined;
  setErrmsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcBillgroupRs.AsObject;
  static toObject(includeInstance: boolean, msg: CalcBillgroupRs): CalcBillgroupRs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcBillgroupRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcBillgroupRs;
  static deserializeBinaryFromReader(message: CalcBillgroupRs, reader: jspb.BinaryReader): CalcBillgroupRs;
}

export namespace CalcBillgroupRs {
  export type AsObject = {
    done?: boolean,
    errmsg?: string,
  }
}

export interface ACT_STATUSMap {
  NOT_RUN: 0;
  DONE: 1;
  IN_PROGRESS: 2;
}

export const ACT_STATUS: ACT_STATUSMap;

export interface BILLING_ISSUE_TYPEMap {
  ACCUMLATED: 0;
  UNDEFINED: -1;
  SINGLE: 1;
}

export const BILLING_ISSUE_TYPE: BILLING_ISSUE_TYPEMap;

export interface ComplaintTypeMap {
  BILL: 0;
  LOW_PRESSURE: 1;
  PIPE_DAMAGE: 2;
  QUALITY: 3;
}

export const ComplaintType: ComplaintTypeMap;

export interface ComplaintDegreeMap {
  LOW: 0;
  NORMAL: 1;
  HIGHT: 2;
  DANGER: 3;
}

export const ComplaintDegree: ComplaintDegreeMap;

export interface DepositValidationStatusMap {
  NOT_SUPPORTED: 0;
  SUPPORTED: 1;
}

export const DepositValidationStatus: DepositValidationStatusMap;

export interface COLLECTION_TYPEMap {
  TOTAL: 0;
  PARTIAL: 1;
  TOTAL_FARDY: 2;
}

export const COLLECTION_TYPE: COLLECTION_TYPEMap;

export interface RECEIPT_TYPEMap {
  RECEIPT_TYPE_NORMAL: 0;
  RECEIPT_TYPE_DEBT_AND_CRDT: 1;
}

export const RECEIPT_TYPE: RECEIPT_TYPEMap;

export interface PostNegativeEnumMap {
  DONT_POST_NEGATIVE_READING: 0;
  CONVERT_NEGATIVE_TOCLOSE: 1;
  CONVERT_NEGATIVE_TOZERO: 2;
  POST_NEGATIVE_READING: 3;
}

export const PostNegativeEnum: PostNegativeEnumMap;

export interface WalkStatusEnumMap {
  READY: 0;
  RUNNING: 1;
  CLOSED: 2;
}

export const WalkStatusEnum: WalkStatusEnumMap;

export interface ProcessStatusMap {
  PROCESSSTATUS_NOT_PROCESSED: 0;
  PROCESSSTATUS_RUNNING: 1;
  PROCESSSTATUS_SUCCEED: 2;
  PROCESSSTATUS_FAILED: 3;
  PROCESSSTATUS_OTHER: 4;
  PROCESSSTATUS_SUCCSSED_PARTIAL: 5;
}

export const ProcessStatus: ProcessStatusMap;

export interface CONNECTION_STATUS_TYPEMap {
  CONNECTED_WITHOUT_METER: 0;
  CONNECTED_WITH_METER: 1;
  DISCONNECTED_WITH_METER: 2;
  DISCONNECTED_WITHOUT_METER: 3;
}

export const CONNECTION_STATUS_TYPE: CONNECTION_STATUS_TYPEMap;

export interface BillingStepsMap {
  STEP1: 1;
  STEP3: 3;
  STEP4: 4;
  STEP6: 6;
}

export const BillingSteps: BillingStepsMap;

export interface READ_STATUSMap {
  ACTUAL_READ: 1;
  BROKEN: 2;
}

export const READ_STATUS: READ_STATUSMap;

