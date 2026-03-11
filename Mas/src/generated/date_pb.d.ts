import * as jspb from 'google-protobuf'



export class MasDate extends jspb.Message {
  getDatetime(): string;
  setDatetime(value: string): MasDate;
  hasDatetime(): boolean;
  clearDatetime(): MasDate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasDate.AsObject;
  static toObject(includeInstance: boolean, msg: MasDate): MasDate.AsObject;
  static serializeBinaryToWriter(message: MasDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasDate;
  static deserializeBinaryFromReader(message: MasDate, reader: jspb.BinaryReader): MasDate;
}

export namespace MasDate {
  export type AsObject = {
    datetime?: string;
  };
}

export class MasDateTime extends jspb.Message {
  getDatetime(): string;
  setDatetime(value: string): MasDateTime;
  hasDatetime(): boolean;
  clearDatetime(): MasDateTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: MasDateTime): MasDateTime.AsObject;
  static serializeBinaryToWriter(message: MasDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasDateTime;
  static deserializeBinaryFromReader(message: MasDateTime, reader: jspb.BinaryReader): MasDateTime;
}

export namespace MasDateTime {
  export type AsObject = {
    datetime?: string;
  };
}

