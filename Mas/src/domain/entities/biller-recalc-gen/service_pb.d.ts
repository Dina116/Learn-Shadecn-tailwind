// package: billing
// file: service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

export class Meter extends jspb.Message {
  hasMetertype(): boolean;
  clearMetertype(): void;
  getMetertype(): string | undefined;
  setMetertype(value: string): void;

  hasMeterref(): boolean;
  clearMeterref(): void;
  getMeterref(): string | undefined;
  setMeterref(value: string): void;

  hasDiameter(): boolean;
  clearDiameter(): void;
  getDiameter(): number | undefined;
  setDiameter(value: number): void;

  hasConverterfactor(): boolean;
  clearConverterfactor(): void;
  getConverterfactor(): number | undefined;
  setConverterfactor(value: number): void;

  hasOpstatus(): boolean;
  clearOpstatus(): void;
  getOpstatus(): MeterOperationStatusMap[keyof MeterOperationStatusMap] | undefined;
  setOpstatus(value: MeterOperationStatusMap[keyof MeterOperationStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meter.AsObject;
  static toObject(includeInstance: boolean, msg: Meter): Meter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Meter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meter;
  static deserializeBinaryFromReader(message: Meter, reader: jspb.BinaryReader): Meter;
}

export namespace Meter {
  export type AsObject = {
    metertype?: string,
    meterref?: string,
    diameter?: number,
    converterfactor?: number,
    opstatus?: MeterOperationStatusMap[keyof MeterOperationStatusMap],
  }
}

export class Connection extends jspb.Message {
  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): Ctg;
  setCtype(value?: Ctg): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasIsbulkmeter(): boolean;
  clearIsbulkmeter(): void;
  getIsbulkmeter(): boolean | undefined;
  setIsbulkmeter(value: boolean): void;

  hasConndiameter(): boolean;
  clearConndiameter(): void;
  getConndiameter(): number | undefined;
  setConndiameter(value: number): void;

  hasMeter(): boolean;
  clearMeter(): void;
  getMeter(): Meter | undefined;
  setMeter(value?: Meter): void;

  hasEstimcons(): boolean;
  clearEstimcons(): void;
  getEstimcons(): number | undefined;
  setEstimcons(value: number): void;

  hasConnectionstatus(): boolean;
  clearConnectionstatus(): void;
  getConnectionstatus(): CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap] | undefined;
  setConnectionstatus(value: CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap]): void;

  clearSubconnectionsList(): void;
  getSubconnectionsList(): Array<SubConnection>;
  setSubconnectionsList(value: Array<SubConnection>): void;
  addSubconnections(value?: SubConnection, index?: number): SubConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    ctype: Ctg.AsObject,
    nounits?: number,
    isbulkmeter?: boolean,
    conndiameter?: number,
    meter?: Meter.AsObject,
    estimcons?: number,
    connectionstatus?: CONNECTION_STATUS_TYPEMap[keyof CONNECTION_STATUS_TYPEMap],
    subconnectionsList: Array<SubConnection.AsObject>,
  }
}

export class SubConnection extends jspb.Message {
  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): Ctg;
  setCtype(value?: Ctg): void;

  hasEstimateconsumption(): boolean;
  clearEstimateconsumption(): void;
  getEstimateconsumption(): number | undefined;
  setEstimateconsumption(value: number): void;

  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): void;
  getConsumptionpercentage(): number | undefined;
  setConsumptionpercentage(value: number): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubConnection.AsObject;
  static toObject(includeInstance: boolean, msg: SubConnection): SubConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubConnection;
  static deserializeBinaryFromReader(message: SubConnection, reader: jspb.BinaryReader): SubConnection;
}

export namespace SubConnection {
  export type AsObject = {
    ctype: Ctg.AsObject,
    estimateconsumption?: number,
    consumptionpercentage?: number,
    nounits?: number,
  }
}

export class Service extends jspb.Message {
  hasServicetype(): boolean;
  clearServicetype(): void;
  getServicetype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setServicetype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasConnection(): boolean;
  clearConnection(): void;
  getConnection(): Connection;
  setConnection(value?: Connection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    servicetype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    connection: Connection.AsObject,
  }
}

export class Property extends jspb.Message {
  hasPropref(): boolean;
  clearPropref(): void;
  getPropref(): string | undefined;
  setPropref(value: string): void;

  hasInfoflag1(): boolean;
  clearInfoflag1(): void;
  getInfoflag1(): string | undefined;
  setInfoflag1(value: string): void;

  hasInfoflag2(): boolean;
  clearInfoflag2(): void;
  getInfoflag2(): string | undefined;
  setInfoflag2(value: string): void;

  hasInfoflag3(): boolean;
  clearInfoflag3(): void;
  getInfoflag3(): string | undefined;
  setInfoflag3(value: string): void;

  hasInfoflag4(): boolean;
  clearInfoflag4(): void;
  getInfoflag4(): string | undefined;
  setInfoflag4(value: string): void;

  hasInfoflag5(): boolean;
  clearInfoflag5(): void;
  getInfoflag5(): string | undefined;
  setInfoflag5(value: string): void;

  hasNorooms(): boolean;
  clearNorooms(): void;
  getNorooms(): number | undefined;
  setNorooms(value: number): void;

  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

  hasIsvacated(): boolean;
  clearIsvacated(): void;
  getIsvacated(): boolean | undefined;
  setIsvacated(value: boolean): void;

  hasTownship(): boolean;
  clearTownship(): void;
  getTownship(): string | undefined;
  setTownship(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    propref?: string,
    infoflag1?: string,
    infoflag2?: string,
    infoflag3?: string,
    infoflag4?: string,
    infoflag5?: string,
    norooms?: number,
    servicesList: Array<Service.AsObject>,
    isvacated?: boolean,
    township?: string,
  }
}

export class Customer extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCusttype(): boolean;
  clearCusttype(): void;
  getCusttype(): number | undefined;
  setCusttype(value: number): void;

  hasIscompany(): boolean;
  clearIscompany(): void;
  getIscompany(): boolean | undefined;
  setIscompany(value: boolean): void;

  hasInfoflag1(): boolean;
  clearInfoflag1(): void;
  getInfoflag1(): string | undefined;
  setInfoflag1(value: string): void;

  hasInfoflag2(): boolean;
  clearInfoflag2(): void;
  getInfoflag2(): string | undefined;
  setInfoflag2(value: string): void;

  hasInfoflag3(): boolean;
  clearInfoflag3(): void;
  getInfoflag3(): string | undefined;
  setInfoflag3(value: string): void;

  hasInfoflag4(): boolean;
  clearInfoflag4(): void;
  getInfoflag4(): string | undefined;
  setInfoflag4(value: string): void;

  hasInfoflag5(): boolean;
  clearInfoflag5(): void;
  getInfoflag5(): string | undefined;
  setInfoflag5(value: string): void;

  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): Property | undefined;
  setProperty(value?: Property): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    custkey?: string,
    custtype?: number,
    iscompany?: boolean,
    infoflag1?: string,
    infoflag2?: string,
    infoflag3?: string,
    infoflag4?: string,
    infoflag5?: string,
    property?: Property.AsObject,
    billgroup?: string,
  }
}

export class ServiceTariff extends jspb.Message {
  hasServicetype(): boolean;
  clearServicetype(): void;
  getServicetype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setServicetype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasTariffcode(): boolean;
  clearTariffcode(): void;
  getTariffcode(): string | undefined;
  setTariffcode(value: string): void;

  hasIszerotarif(): boolean;
  clearIszerotarif(): void;
  getIszerotarif(): boolean | undefined;
  setIszerotarif(value: boolean): void;

  hasTranscode(): boolean;
  clearTranscode(): void;
  getTranscode(): string | undefined;
  setTranscode(value: string): void;

  hasTaxpercentage(): boolean;
  clearTaxpercentage(): void;
  getTaxpercentage(): number | undefined;
  setTaxpercentage(value: number): void;

  hasDiscountpercentage(): boolean;
  clearDiscountpercentage(): void;
  getDiscountpercentage(): number | undefined;
  setDiscountpercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTariff.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTariff): ServiceTariff.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTariff;
  static deserializeBinaryFromReader(message: ServiceTariff, reader: jspb.BinaryReader): ServiceTariff;
}

export namespace ServiceTariff {
  export type AsObject = {
    servicetype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    tariffcode?: string,
    iszerotarif?: boolean,
    transcode?: string,
    taxpercentage?: number,
    discountpercentage?: number,
  }
}

export class Ctg extends jspb.Message {
  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): string | undefined;
  setCtype(value: string): void;

  hasCtypegroupid(): boolean;
  clearCtypegroupid(): void;
  getCtypegroupid(): string | undefined;
  setCtypegroupid(value: string): void;

  clearTariffsList(): void;
  getTariffsList(): Array<ServiceTariff>;
  setTariffsList(value: Array<ServiceTariff>): void;
  addTariffs(value?: ServiceTariff, index?: number): ServiceTariff;

  hasOpEstimCons(): boolean;
  clearOpEstimCons(): void;
  getOpEstimCons(): number | undefined;
  setOpEstimCons(value: number): void;

  hasNoopEstimCons(): boolean;
  clearNoopEstimCons(): void;
  getNoopEstimCons(): number | undefined;
  setNoopEstimCons(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasGroupdescription(): boolean;
  clearGroupdescription(): void;
  getGroupdescription(): string | undefined;
  setGroupdescription(value: string): void;

  hasWeigth(): boolean;
  clearWeigth(): void;
  getWeigth(): number | undefined;
  setWeigth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ctg.AsObject;
  static toObject(includeInstance: boolean, msg: Ctg): Ctg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ctg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ctg;
  static deserializeBinaryFromReader(message: Ctg, reader: jspb.BinaryReader): Ctg;
}

export namespace Ctg {
  export type AsObject = {
    ctype?: string,
    ctypegroupid?: string,
    tariffsList: Array<ServiceTariff.AsObject>,
    opEstimCons?: number,
    noopEstimCons?: number,
    description?: string,
    groupdescription?: string,
    weigth?: number,
  }
}

export class ExtraTariffFess extends jspb.Message {
  hasTranscode(): boolean;
  clearTranscode(): void;
  getTranscode(): string | undefined;
  setTranscode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasAmountpermeter(): boolean;
  clearAmountpermeter(): void;
  getAmountpermeter(): number | undefined;
  setAmountpermeter(value: number): void;

  hasTaxpercentage(): boolean;
  clearTaxpercentage(): void;
  getTaxpercentage(): number | undefined;
  setTaxpercentage(value: number): void;

  hasFixedamount(): boolean;
  clearFixedamount(): void;
  getFixedamount(): number | undefined;
  setFixedamount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraTariffFess.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraTariffFess): ExtraTariffFess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtraTariffFess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraTariffFess;
  static deserializeBinaryFromReader(message: ExtraTariffFess, reader: jspb.BinaryReader): ExtraTariffFess;
}

export namespace ExtraTariffFess {
  export type AsObject = {
    transcode?: string,
    description?: string,
    amountpermeter?: number,
    taxpercentage?: number,
    fixedamount?: number,
  }
}

export class TariffBand extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): number | undefined;
  setFrom(value: number): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): number | undefined;
  setTo(value: number): void;

  hasConstant(): boolean;
  clearConstant(): void;
  getConstant(): number | undefined;
  setConstant(value: number): void;

  hasCharge(): boolean;
  clearCharge(): void;
  getCharge(): number | undefined;
  setCharge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffBand.AsObject;
  static toObject(includeInstance: boolean, msg: TariffBand): TariffBand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TariffBand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffBand;
  static deserializeBinaryFromReader(message: TariffBand, reader: jspb.BinaryReader): TariffBand;
}

export namespace TariffBand {
  export type AsObject = {
    from?: number,
    to?: number,
    constant?: number,
    charge?: number,
  }
}

export class Tariff extends jspb.Message {
  hasTariffcode(): boolean;
  clearTariffcode(): void;
  getTariffcode(): string | undefined;
  setTariffcode(value: string): void;

  clearExtrafeesList(): void;
  getExtrafeesList(): Array<ExtraTariffFess>;
  setExtrafeesList(value: Array<ExtraTariffFess>): void;
  addExtrafees(value?: ExtraTariffFess, index?: number): ExtraTariffFess;

  clearBandsList(): void;
  getBandsList(): Array<TariffBand>;
  setBandsList(value: Array<TariffBand>): void;
  addBands(value?: TariffBand, index?: number): TariffBand;

  hasEffectdate(): boolean;
  clearEffectdate(): void;
  getEffectdate(): google_protobuf_timestamp_pb.Timestamp;
  setEffectdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): void;
  getConsumptionpercentage(): number | undefined;
  setConsumptionpercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tariff.AsObject;
  static toObject(includeInstance: boolean, msg: Tariff): Tariff.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tariff;
  static deserializeBinaryFromReader(message: Tariff, reader: jspb.BinaryReader): Tariff;
}

export namespace Tariff {
  export type AsObject = {
    tariffcode?: string,
    extrafeesList: Array<ExtraTariffFess.AsObject>,
    bandsList: Array<TariffBand.AsObject>,
    effectdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    consumptionpercentage?: number,
  }
}

export class EntityChargeMappedValue extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): number | undefined;
  setFrom(value: number): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): number | undefined;
  setTo(value: number): void;

  hasLukey(): boolean;
  clearLukey(): void;
  getLukey(): string | undefined;
  setLukey(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number | undefined;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityChargeMappedValue.AsObject;
  static toObject(includeInstance: boolean, msg: EntityChargeMappedValue): EntityChargeMappedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityChargeMappedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityChargeMappedValue;
  static deserializeBinaryFromReader(message: EntityChargeMappedValue, reader: jspb.BinaryReader): EntityChargeMappedValue;
}

export namespace EntityChargeMappedValue {
  export type AsObject = {
    from?: number,
    to?: number,
    lukey?: string,
    value?: number,
  }
}

export class EntityEnableMappedValue extends jspb.Message {
  hasLukey(): boolean;
  clearLukey(): void;
  getLukey(): string | undefined;
  setLukey(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): boolean | undefined;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityEnableMappedValue.AsObject;
  static toObject(includeInstance: boolean, msg: EntityEnableMappedValue): EntityEnableMappedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityEnableMappedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityEnableMappedValue;
  static deserializeBinaryFromReader(message: EntityEnableMappedValue, reader: jspb.BinaryReader): EntityEnableMappedValue;
}

export namespace EntityEnableMappedValue {
  export type AsObject = {
    lukey?: string,
    value?: boolean,
  }
}

export class RegularChargeEntity extends jspb.Message {
  hasEntitytype(): boolean;
  clearEntitytype(): void;
  getEntitytype(): ENTITY_TYPEMap[keyof ENTITY_TYPEMap] | undefined;
  setEntitytype(value: ENTITY_TYPEMap[keyof ENTITY_TYPEMap]): void;

  clearMappedvaluesList(): void;
  getMappedvaluesList(): Array<EntityChargeMappedValue>;
  setMappedvaluesList(value: Array<EntityChargeMappedValue>): void;
  addMappedvalues(value?: EntityChargeMappedValue, index?: number): EntityChargeMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeEntity.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeEntity): RegularChargeEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegularChargeEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeEntity;
  static deserializeBinaryFromReader(message: RegularChargeEntity, reader: jspb.BinaryReader): RegularChargeEntity;
}

export namespace RegularChargeEntity {
  export type AsObject = {
    entitytype?: ENTITY_TYPEMap[keyof ENTITY_TYPEMap],
    mappedvaluesList: Array<EntityChargeMappedValue.AsObject>,
  }
}

export class RegularEnableEntity extends jspb.Message {
  hasEntitytype(): boolean;
  clearEntitytype(): void;
  getEntitytype(): ENTITY_TYPEMap[keyof ENTITY_TYPEMap] | undefined;
  setEntitytype(value: ENTITY_TYPEMap[keyof ENTITY_TYPEMap]): void;

  clearMappedvaluesList(): void;
  getMappedvaluesList(): Array<EntityEnableMappedValue>;
  setMappedvaluesList(value: Array<EntityEnableMappedValue>): void;
  addMappedvalues(value?: EntityEnableMappedValue, index?: number): EntityEnableMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularEnableEntity.AsObject;
  static toObject(includeInstance: boolean, msg: RegularEnableEntity): RegularEnableEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegularEnableEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularEnableEntity;
  static deserializeBinaryFromReader(message: RegularEnableEntity, reader: jspb.BinaryReader): RegularEnableEntity;
}

export namespace RegularEnableEntity {
  export type AsObject = {
    entitytype?: ENTITY_TYPEMap[keyof ENTITY_TYPEMap],
    mappedvaluesList: Array<EntityEnableMappedValue.AsObject>,
  }
}

export class RegularCharge extends jspb.Message {
  hasRegularchargeid(): boolean;
  clearRegularchargeid(): void;
  getRegularchargeid(): string | undefined;
  setRegularchargeid(value: string): void;

  hasEffectdate(): boolean;
  clearEffectdate(): void;
  getEffectdate(): google_protobuf_timestamp_pb.Timestamp;
  setEffectdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEffectdateto(): boolean;
  clearEffectdateto(): void;
  getEffectdateto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectdateto(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTranscode(): boolean;
  clearTranscode(): void;
  getTranscode(): string | undefined;
  setTranscode(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasIschargable(): boolean;
  clearIschargable(): void;
  getIschargable(): boolean | undefined;
  setIschargable(value: boolean): void;

  hasServicetype(): boolean;
  clearServicetype(): void;
  getServicetype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setServicetype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasChargecalcperiod(): boolean;
  clearChargecalcperiod(): void;
  getChargecalcperiod(): RegularChargePeriodMap[keyof RegularChargePeriodMap] | undefined;
  setChargecalcperiod(value: RegularChargePeriodMap[keyof RegularChargePeriodMap]): void;

  hasChargeinterval(): boolean;
  clearChargeinterval(): void;
  getChargeinterval(): number | undefined;
  setChargeinterval(value: number): void;

  hasChargemonthlyday(): boolean;
  clearChargemonthlyday(): void;
  getChargemonthlyday(): number | undefined;
  setChargemonthlyday(value: number): void;

  hasChargetype(): boolean;
  clearChargetype(): void;
  getChargetype(): ChargeTypeMap[keyof ChargeTypeMap] | undefined;
  setChargetype(value: ChargeTypeMap[keyof ChargeTypeMap]): void;

  hasFixedcharge(): boolean;
  clearFixedcharge(): void;
  getFixedcharge(): number | undefined;
  setFixedcharge(value: number): void;

  hasFixedchargediscount(): boolean;
  clearFixedchargediscount(): void;
  getFixedchargediscount(): number | undefined;
  setFixedchargediscount(value: number): void;

  hasMincharge(): boolean;
  clearMincharge(): void;
  getMincharge(): number | undefined;
  setMincharge(value: number): void;

  hasVatpercentage(): boolean;
  clearVatpercentage(): void;
  getVatpercentage(): number | undefined;
  setVatpercentage(value: number): void;

  hasRelationchargeentity(): boolean;
  clearRelationchargeentity(): void;
  getRelationchargeentity(): RegularChargeEntity | undefined;
  setRelationchargeentity(value?: RegularChargeEntity): void;

  hasRelationenableentity(): boolean;
  clearRelationenableentity(): void;
  getRelationenableentity(): RegularEnableEntity | undefined;
  setRelationenableentity(value?: RegularEnableEntity): void;

  hasBypass(): boolean;
  clearBypass(): void;
  getBypass(): boolean | undefined;
  setBypass(value: boolean): void;

  hasCtypecalcbase(): boolean;
  clearCtypecalcbase(): void;
  getCtypecalcbase(): ChargeRegularCalcStrategyMap[keyof ChargeRegularCalcStrategyMap] | undefined;
  setCtypecalcbase(value: ChargeRegularCalcStrategyMap[keyof ChargeRegularCalcStrategyMap]): void;

  hasPerunit(): boolean;
  clearPerunit(): void;
  getPerunit(): boolean | undefined;
  setPerunit(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularCharge.AsObject;
  static toObject(includeInstance: boolean, msg: RegularCharge): RegularCharge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegularCharge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularCharge;
  static deserializeBinaryFromReader(message: RegularCharge, reader: jspb.BinaryReader): RegularCharge;
}

export namespace RegularCharge {
  export type AsObject = {
    regularchargeid?: string,
    effectdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effectdateto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    transcode?: string,
    title?: string,
    ischargable?: boolean,
    servicetype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    chargecalcperiod?: RegularChargePeriodMap[keyof RegularChargePeriodMap],
    chargeinterval?: number,
    chargemonthlyday?: number,
    chargetype?: ChargeTypeMap[keyof ChargeTypeMap],
    fixedcharge?: number,
    fixedchargediscount?: number,
    mincharge?: number,
    vatpercentage?: number,
    relationchargeentity?: RegularChargeEntity.AsObject,
    relationenableentity?: RegularEnableEntity.AsObject,
    bypass?: boolean,
    ctypecalcbase?: ChargeRegularCalcStrategyMap[keyof ChargeRegularCalcStrategyMap],
    perunit?: boolean,
  }
}

export class RegularChargeRequest extends jspb.Message {
  clearRegularchargeList(): void;
  getRegularchargeList(): Array<RegularCharge>;
  setRegularchargeList(value: Array<RegularCharge>): void;
  addRegularcharge(value?: RegularCharge, index?: number): RegularCharge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeRequest): RegularChargeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegularChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeRequest;
  static deserializeBinaryFromReader(message: RegularChargeRequest, reader: jspb.BinaryReader): RegularChargeRequest;
}

export namespace RegularChargeRequest {
  export type AsObject = {
    regularchargeList: Array<RegularCharge.AsObject>,
  }
}

export class TransCode extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasEdamscode(): boolean;
  clearEdamscode(): void;
  getEdamscode(): number | undefined;
  setEdamscode(value: number): void;

  hasEdamsscode(): boolean;
  clearEdamsscode(): void;
  getEdamsscode(): number | undefined;
  setEdamsscode(value: number): void;

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
    code?: string,
    description?: string,
    edamscode?: number,
    edamsscode?: number,
  }
}

export class ServiceType extends jspb.Message {
  hasStype(): boolean;
  clearStype(): void;
  getStype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setStype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIsselectable(): boolean;
  clearIsselectable(): void;
  getIsselectable(): boolean | undefined;
  setIsselectable(value: boolean): void;

  hasIsbasic(): boolean;
  clearIsbasic(): void;
  getIsbasic(): boolean | undefined;
  setIsbasic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceType.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceType): ServiceType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceType;
  static deserializeBinaryFromReader(message: ServiceType, reader: jspb.BinaryReader): ServiceType;
}

export namespace ServiceType {
  export type AsObject = {
    stype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    description?: string,
    isselectable?: boolean,
    isbasic?: boolean,
  }
}

export class ServiceTypeRepsonce extends jspb.Message {
  hasStype(): boolean;
  clearStype(): void;
  getStype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setStype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTypeRepsonce.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTypeRepsonce): ServiceTypeRepsonce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceTypeRepsonce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTypeRepsonce;
  static deserializeBinaryFromReader(message: ServiceTypeRepsonce, reader: jspb.BinaryReader): ServiceTypeRepsonce;
}

export namespace ServiceTypeRepsonce {
  export type AsObject = {
    stype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
  }
}

export class ChargeSetting extends jspb.Message {
  hasCyclelength(): boolean;
  clearCyclelength(): void;
  getCyclelength(): number | undefined;
  setCyclelength(value: number): void;

  hasBilingdate(): boolean;
  clearBilingdate(): void;
  getBilingdate(): google_protobuf_timestamp_pb.Timestamp;
  setBilingdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIgnoretimeeffect(): boolean;
  clearIgnoretimeeffect(): void;
  getIgnoretimeeffect(): boolean | undefined;
  setIgnoretimeeffect(value: boolean): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeSetting): ChargeSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeSetting;
  static deserializeBinaryFromReader(message: ChargeSetting, reader: jspb.BinaryReader): ChargeSetting;
}

export namespace ChargeSetting {
  export type AsObject = {
    cyclelength?: number,
    bilingdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ignoretimeeffect?: boolean,
    paymentno?: string,
  }
}

export class SubConnectionReading extends jspb.Message {
  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): Ctg;
  setCtype(value?: Ctg): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasPercentage(): boolean;
  clearPercentage(): void;
  getPercentage(): number | undefined;
  setPercentage(value: number): void;

  hasEstimconsump(): boolean;
  clearEstimconsump(): void;
  getEstimconsump(): number | undefined;
  setEstimconsump(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubConnectionReading.AsObject;
  static toObject(includeInstance: boolean, msg: SubConnectionReading): SubConnectionReading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubConnectionReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubConnectionReading;
  static deserializeBinaryFromReader(message: SubConnectionReading, reader: jspb.BinaryReader): SubConnectionReading;
}

export namespace SubConnectionReading {
  export type AsObject = {
    ctype: Ctg.AsObject,
    nounits?: number,
    percentage?: number,
    estimconsump?: number,
  }
}

export class Reading extends jspb.Message {
  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasPrreading(): boolean;
  clearPrreading(): void;
  getPrreading(): number | undefined;
  setPrreading(value: number): void;

  hasCrreading(): boolean;
  clearCrreading(): void;
  getCrreading(): number | undefined;
  setCrreading(value: number): void;

  hasPrdate(): boolean;
  clearPrdate(): void;
  getPrdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPrdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCrdate(): boolean;
  clearCrdate(): void;
  getCrdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCrdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReadtype(): boolean;
  clearReadtype(): void;
  getReadtype(): READING_TYPEMap[keyof READING_TYPEMap] | undefined;
  setReadtype(value: READING_TYPEMap[keyof READING_TYPEMap]): void;

  hasReadingby(): boolean;
  clearReadingby(): void;
  getReadingby(): string | undefined;
  setReadingby(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reading.AsObject;
  static toObject(includeInstance: boolean, msg: Reading): Reading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reading;
  static deserializeBinaryFromReader(message: Reading, reader: jspb.BinaryReader): Reading;
}

export namespace Reading {
  export type AsObject = {
    consump?: number,
    prreading?: number,
    crreading?: number,
    prdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    crdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readtype?: READING_TYPEMap[keyof READING_TYPEMap],
    readingby?: string,
  }
}

export class ServiceReading extends jspb.Message {
  hasServicetype(): boolean;
  clearServicetype(): void;
  getServicetype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setServicetype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasReading(): boolean;
  clearReading(): void;
  getReading(): Reading;
  setReading(value?: Reading): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceReading.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceReading): ServiceReading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceReading;
  static deserializeBinaryFromReader(message: ServiceReading, reader: jspb.BinaryReader): ServiceReading;
}

export namespace ServiceReading {
  export type AsObject = {
    servicetype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    reading: Reading.AsObject,
  }
}

export class ChargeRequest extends jspb.Message {
  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): Customer;
  setCustomer(value?: Customer): void;

  clearServicesreadingsList(): void;
  getServicesreadingsList(): Array<ServiceReading>;
  setServicesreadingsList(value: Array<ServiceReading>): void;
  addServicesreadings(value?: ServiceReading, index?: number): ServiceReading;

  hasSetting(): boolean;
  clearSetting(): void;
  getSetting(): ChargeSetting;
  setSetting(value?: ChargeSetting): void;

  clearServicesList(): void;
  getServicesList(): Array<SERVICE_TYPEMap[keyof SERVICE_TYPEMap]>;
  setServicesList(value: Array<SERVICE_TYPEMap[keyof SERVICE_TYPEMap]>): void;
  addServices(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap], index?: number): SERVICE_TYPEMap[keyof SERVICE_TYPEMap];

  hasOldbill(): boolean;
  clearOldbill(): void;
  getOldbill(): Bill | undefined;
  setOldbill(value?: Bill): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeRequest): ChargeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeRequest;
  static deserializeBinaryFromReader(message: ChargeRequest, reader: jspb.BinaryReader): ChargeRequest;
}

export namespace ChargeRequest {
  export type AsObject = {
    customer: Customer.AsObject,
    servicesreadingsList: Array<ServiceReading.AsObject>,
    setting: ChargeSetting.AsObject,
    servicesList: Array<SERVICE_TYPEMap[keyof SERVICE_TYPEMap]>,
    oldbill?: Bill.AsObject,
  }
}

export class ExtraCharge extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraCharge.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraCharge): ExtraCharge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtraCharge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraCharge;
  static deserializeBinaryFromReader(message: ExtraCharge, reader: jspb.BinaryReader): ExtraCharge;
}

export namespace ExtraCharge {
  export type AsObject = {
    description?: string,
    code?: string,
    amount?: number,
  }
}

export class MeasuredTransaction extends jspb.Message {
  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasCrreading(): boolean;
  clearCrreading(): void;
  getCrreading(): number | undefined;
  setCrreading(value: number): void;

  hasPrreading(): boolean;
  clearPrreading(): void;
  getPrreading(): number | undefined;
  setPrreading(value: number): void;

  hasReadtype(): boolean;
  clearReadtype(): void;
  getReadtype(): READING_TYPEMap[keyof READING_TYPEMap] | undefined;
  setReadtype(value: READING_TYPEMap[keyof READING_TYPEMap]): void;

  hasMetertype(): boolean;
  clearMetertype(): void;
  getMetertype(): string | undefined;
  setMetertype(value: string): void;

  hasMeterref(): boolean;
  clearMeterref(): void;
  getMeterref(): string | undefined;
  setMeterref(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasuredTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MeasuredTransaction): MeasuredTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasuredTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasuredTransaction;
  static deserializeBinaryFromReader(message: MeasuredTransaction, reader: jspb.BinaryReader): MeasuredTransaction;
}

export namespace MeasuredTransaction {
  export type AsObject = {
    consump?: number,
    crreading?: number,
    prreading?: number,
    readtype?: READING_TYPEMap[keyof READING_TYPEMap],
    metertype?: string,
    meterref?: string,
  }
}

export class FinantialTransaction extends jspb.Message {
  hasServicetype(): boolean;
  clearServicetype(): void;
  getServicetype(): SERVICE_TYPEMap[keyof SERVICE_TYPEMap] | undefined;
  setServicetype(value: SERVICE_TYPEMap[keyof SERVICE_TYPEMap]): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): google_protobuf_timestamp_pb.Timestamp;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEffdate(): boolean;
  clearEffdate(): void;
  getEffdate(): google_protobuf_timestamp_pb.Timestamp;
  setEffdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasTaxamount(): boolean;
  clearTaxamount(): void;
  getTaxamount(): number | undefined;
  setTaxamount(value: number): void;

  hasDiscountamount(): boolean;
  clearDiscountamount(): void;
  getDiscountamount(): number | undefined;
  setDiscountamount(value: number): void;

  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): Ctg | undefined;
  setCtype(value?: Ctg): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasPropref(): boolean;
  clearPropref(): void;
  getPropref(): string | undefined;
  setPropref(value: string): void;

  hasMtransaction(): boolean;
  clearMtransaction(): void;
  getMtransaction(): MeasuredTransaction | undefined;
  setMtransaction(value?: MeasuredTransaction): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): void;
  getConsumptionpercentage(): number | undefined;
  setConsumptionpercentage(value: number): void;

  hasTariffid(): boolean;
  clearTariffid(): void;
  getTariffid(): string | undefined;
  setTariffid(value: string): void;

  hasEditable(): boolean;
  clearEditable(): void;
  getEditable(): boolean | undefined;
  setEditable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinantialTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: FinantialTransaction): FinantialTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinantialTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinantialTransaction;
  static deserializeBinaryFromReader(message: FinantialTransaction, reader: jspb.BinaryReader): FinantialTransaction;
}

export namespace FinantialTransaction {
  export type AsObject = {
    servicetype?: SERVICE_TYPEMap[keyof SERVICE_TYPEMap],
    code?: string,
    bilngdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    amount?: number,
    taxamount?: number,
    discountamount?: number,
    ctype?: Ctg.AsObject,
    nounits?: number,
    propref?: string,
    mtransaction?: MeasuredTransaction.AsObject,
    description?: string,
    consumptionpercentage?: number,
    tariffid?: string,
    editable?: boolean,
  }
}

export class Bill extends jspb.Message {
  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): google_protobuf_timestamp_pb.Timestamp;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearFtransactionsList(): void;
  getFtransactionsList(): Array<FinantialTransaction>;
  setFtransactionsList(value: Array<FinantialTransaction>): void;
  addFtransactions(value?: FinantialTransaction, index?: number): FinantialTransaction;

  clearServicesreadingsList(): void;
  getServicesreadingsList(): Array<ServiceReading>;
  setServicesreadingsList(value: Array<ServiceReading>): void;
  addServicesreadings(value?: ServiceReading, index?: number): ServiceReading;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): Customer;
  setCustomer(value?: Customer): void;

  hasClbalance(): boolean;
  clearClbalance(): void;
  getClbalance(): number | undefined;
  setClbalance(value: number): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bill.AsObject;
  static toObject(includeInstance: boolean, msg: Bill): Bill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bill;
  static deserializeBinaryFromReader(message: Bill, reader: jspb.BinaryReader): Bill;
}

export namespace Bill {
  export type AsObject = {
    paymentno?: string,
    bilngdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ftransactionsList: Array<FinantialTransaction.AsObject>,
    servicesreadingsList: Array<ServiceReading.AsObject>,
    customer: Customer.AsObject,
    clbalance?: number,
    comment?: string,
  }
}

export class CancelledRequest extends jspb.Message {
  hasFormno(): boolean;
  clearFormno(): void;
  getFormno(): number | undefined;
  setFormno(value: number): void;

  hasFormdate(): boolean;
  clearFormdate(): void;
  getFormdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFormdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): string | undefined;
  setStatus(value: string): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelledRequest): CancelledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelledRequest;
  static deserializeBinaryFromReader(message: CancelledRequest, reader: jspb.BinaryReader): CancelledRequest;
}

export namespace CancelledRequest {
  export type AsObject = {
    formno?: number,
    formdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: string,
    comment?: string,
  }
}

export class BillResponce extends jspb.Message {
  clearBillsList(): void;
  getBillsList(): Array<Bill>;
  setBillsList(value: Array<Bill>): void;
  addBills(value?: Bill, index?: number): Bill;

  hasRecalcform(): boolean;
  clearRecalcform(): void;
  getRecalcform(): CancelledRequest | undefined;
  setRecalcform(value?: CancelledRequest): void;

  hasCalculatedAgain(): boolean;
  clearCalculatedAgain(): void;
  getCalculatedAgain(): boolean | undefined;
  setCalculatedAgain(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillResponce.AsObject;
  static toObject(includeInstance: boolean, msg: BillResponce): BillResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillResponce;
  static deserializeBinaryFromReader(message: BillResponce, reader: jspb.BinaryReader): BillResponce;
}

export namespace BillResponce {
  export type AsObject = {
    billsList: Array<Bill.AsObject>,
    recalcform?: CancelledRequest.AsObject,
    calculatedAgain?: boolean,
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

export class SetupData extends jspb.Message {
  clearTariffsList(): void;
  getTariffsList(): Array<Tariff>;
  setTariffsList(value: Array<Tariff>): void;
  addTariffs(value?: Tariff, index?: number): Tariff;

  clearCtgsList(): void;
  getCtgsList(): Array<Ctg>;
  setCtgsList(value: Array<Ctg>): void;
  addCtgs(value?: Ctg, index?: number): Ctg;

  clearRegularchargesList(): void;
  getRegularchargesList(): Array<RegularCharge>;
  setRegularchargesList(value: Array<RegularCharge>): void;
  addRegularcharges(value?: RegularCharge, index?: number): RegularCharge;

  clearTranscodesList(): void;
  getTranscodesList(): Array<TransCode>;
  setTranscodesList(value: Array<TransCode>): void;
  addTranscodes(value?: TransCode, index?: number): TransCode;

  hasWithRound(): boolean;
  clearWithRound(): void;
  getWithRound(): boolean | undefined;
  setWithRound(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupData.AsObject;
  static toObject(includeInstance: boolean, msg: SetupData): SetupData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetupData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupData;
  static deserializeBinaryFromReader(message: SetupData, reader: jspb.BinaryReader): SetupData;
}

export namespace SetupData {
  export type AsObject = {
    tariffsList: Array<Tariff.AsObject>,
    ctgsList: Array<Ctg.AsObject>,
    regularchargesList: Array<RegularCharge.AsObject>,
    transcodesList: Array<TransCode.AsObject>,
    withRound?: boolean,
  }
}

export class CustomersList extends jspb.Message {
  clearCustomersList(): void;
  getCustomersList(): Array<Customer>;
  setCustomersList(value: Array<Customer>): void;
  addCustomers(value?: Customer, index?: number): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomersList.AsObject;
  static toObject(includeInstance: boolean, msg: CustomersList): CustomersList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomersList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomersList;
  static deserializeBinaryFromReader(message: CustomersList, reader: jspb.BinaryReader): CustomersList;
}

export namespace CustomersList {
  export type AsObject = {
    customersList: Array<Customer.AsObject>,
  }
}

export class Key extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): google_protobuf_timestamp_pb.Timestamp;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    key?: string,
    bilngdate: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LookUp extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUp.AsObject;
  static toObject(includeInstance: boolean, msg: LookUp): LookUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookUp;
  static deserializeBinaryFromReader(message: LookUp, reader: jspb.BinaryReader): LookUp;
}

export namespace LookUp {
  export type AsObject = {
    code?: string,
    description?: string,
  }
}

export class LookUpsResponce extends jspb.Message {
  clearLookupsList(): void;
  getLookupsList(): Array<LookUp>;
  setLookupsList(value: Array<LookUp>): void;
  addLookups(value?: LookUp, index?: number): LookUp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUpsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: LookUpsResponce): LookUpsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookUpsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookUpsResponce;
  static deserializeBinaryFromReader(message: LookUpsResponce, reader: jspb.BinaryReader): LookUpsResponce;
}

export namespace LookUpsResponce {
  export type AsObject = {
    lookupsList: Array<LookUp.AsObject>,
  }
}

export class CtgsResponce extends jspb.Message {
  clearCtgsList(): void;
  getCtgsList(): Array<Ctg>;
  setCtgsList(value: Array<Ctg>): void;
  addCtgs(value?: Ctg, index?: number): Ctg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CtgsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: CtgsResponce): CtgsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CtgsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CtgsResponce;
  static deserializeBinaryFromReader(message: CtgsResponce, reader: jspb.BinaryReader): CtgsResponce;
}

export namespace CtgsResponce {
  export type AsObject = {
    ctgsList: Array<Ctg.AsObject>,
  }
}

export class Entity extends jspb.Message {
  hasEntitytype(): boolean;
  clearEntitytype(): void;
  getEntitytype(): ENTITY_TYPEMap[keyof ENTITY_TYPEMap] | undefined;
  setEntitytype(value: ENTITY_TYPEMap[keyof ENTITY_TYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entitytype?: ENTITY_TYPEMap[keyof ENTITY_TYPEMap],
  }
}

export class GetBillRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasBilngdatefrom(): boolean;
  clearBilngdatefrom(): void;
  getBilngdatefrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdatefrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBilngdateto(): boolean;
  clearBilngdateto(): void;
  getBilngdateto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdateto(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFormno(): boolean;
  clearFormno(): void;
  getFormno(): string | undefined;
  setFormno(value: string): void;

  hasFromCancelBill(): boolean;
  clearFromCancelBill(): void;
  getFromCancelBill(): boolean | undefined;
  setFromCancelBill(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillRequest): GetBillRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillRequest;
  static deserializeBinaryFromReader(message: GetBillRequest, reader: jspb.BinaryReader): GetBillRequest;
}

export namespace GetBillRequest {
  export type AsObject = {
    custkey?: string,
    paymentno?: string,
    bilngdatefrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bilngdateto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    formno?: string,
    fromCancelBill?: boolean,
  }
}

export class LoginRequest extends jspb.Message {
  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username?: string,
    password?: string,
  }
}

export class LoginResponce extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): string | undefined;
  setToken(value: string): void;

  hasSuccssed(): boolean;
  clearSuccssed(): void;
  getSuccssed(): boolean | undefined;
  setSuccssed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponce.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponce): LoginResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponce;
  static deserializeBinaryFromReader(message: LoginResponce, reader: jspb.BinaryReader): LoginResponce;
}

export namespace LoginResponce {
  export type AsObject = {
    token?: string,
    succssed?: boolean,
  }
}

export class PostMessage extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): BillResponce;
  setData(value?: BillResponce): void;

  hasIscancelledrequest(): boolean;
  clearIscancelledrequest(): void;
  getIscancelledrequest(): boolean | undefined;
  setIscancelledrequest(value: boolean): void;

  hasCancelledrequestformno(): boolean;
  clearCancelledrequestformno(): void;
  getCancelledrequestformno(): number | undefined;
  setCancelledrequestformno(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PostMessage): PostMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMessage;
  static deserializeBinaryFromReader(message: PostMessage, reader: jspb.BinaryReader): PostMessage;
}

export namespace PostMessage {
  export type AsObject = {
    data: BillResponce.AsObject,
    iscancelledrequest?: boolean,
    cancelledrequestformno?: number,
  }
}

export interface VERIONMap {
  PROTO_VERSION: 57;
}

export const VERION: VERIONMap;

export interface MeterOperationStatusMap {
  WORKING: 0;
  NOT_WORKING: 1;
}

export const MeterOperationStatus: MeterOperationStatusMap;

export interface SERVICE_TYPEMap {
  WATER: 0;
  SEWER: 1;
  ELECTRICITY: 2;
  GAS: 3;
  HYDRANT: 4;
  FIRE: 5;
}

export const SERVICE_TYPE: SERVICE_TYPEMap;

export interface CONNECTION_STATUS_TYPEMap {
  CONNECTED_WITHOUT_METER: 0;
  CONNECTED_WITH_METER: 1;
  DISCONNECTED_WITH_METER: 2;
  DISCONNECTED_WITHOUT_METER: 3;
}

export const CONNECTION_STATUS_TYPE: CONNECTION_STATUS_TYPEMap;

export interface READING_TYPEMap {
  ACTUAL: 0;
  AVERAGE: 1;
  ESTIMATE: 2;
}

export const READING_TYPE: READING_TYPEMap;

export interface RegularChargePeriodMap {
  BILL: 1;
  MONTHLY: 2;
}

export const RegularChargePeriod: RegularChargePeriodMap;

export interface ENTITY_TYPEMap {
  CTYPE: 1;
  CTYPE_GROUP: 2;
  CUSTOMER_TYPE: 3;
  CUSTOMER_FLAG1: 4;
  CUSTOMER_FLAG2: 5;
  CUSTOMER_FLAG3: 6;
  CUSTOMER_FLAG4: 7;
  CUSTOMER_FLAG5: 8;
  PROPERTY_VACATED: 9;
  PROPERTY_FLAG1: 10;
  PROPERTY_FLAG2: 11;
  PROPERTY_FLAG3: 12;
  PROPERTY_FLAG4: 13;
  PROPERTY_FLAG5: 14;
  CONNECTION_DIAMETER: 15;
  CONNECTION_STATUS: 16;
  CONNECTION_ISBULK_METER: 18;
  METER_DIAMETER: 19;
  SERVICE: 20;
  TOWINSHIP: 21;
  CONSUMPTION: 22;
}

export const ENTITY_TYPE: ENTITY_TYPEMap;

export interface ChargeRegularCalcStrategyMap {
  EACH_ONE: 0;
  SUM_ALL: 1;
  MAIN_CTYPE: 2;
  HIGHTEST_AMOUNT: 3;
  LOWEST_AMOUNT: 4;
  DUPPLICATE_EACH_CTYPE: 5;
  DUPPLICATE_EACH_CTYPE_GROUP: 6;
}

export const ChargeRegularCalcStrategy: ChargeRegularCalcStrategyMap;

export interface ChargeTypeMap {
  FIXED: 0;
  RELATION: 1;
}

export const ChargeType: ChargeTypeMap;

export interface ReleationTypeMap {
  ENABLE_RELEATION: 1;
  CHARGE_RELEATION: 2;
}

export const ReleationType: ReleationTypeMap;

