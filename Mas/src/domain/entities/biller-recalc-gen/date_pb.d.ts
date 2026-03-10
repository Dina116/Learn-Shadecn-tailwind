// package: central.types
// file: date.proto

import * as jspb from "google-protobuf";

export class MasDate extends jspb.Message {
  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): string | undefined;
  setDatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasDate.AsObject;
  static toObject(includeInstance: boolean, msg: MasDate): MasDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MasDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasDate;
  static deserializeBinaryFromReader(message: MasDate, reader: jspb.BinaryReader): MasDate;
}

export namespace MasDate {
  export type AsObject = {
    datetime?: string,
  }
}

export class MasDateTime extends jspb.Message {
  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): string | undefined;
  setDatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: MasDateTime): MasDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MasDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasDateTime;
  static deserializeBinaryFromReader(message: MasDateTime, reader: jspb.BinaryReader): MasDateTime;
}

export namespace MasDateTime {
  export type AsObject = {
    datetime?: string,
  }
}

