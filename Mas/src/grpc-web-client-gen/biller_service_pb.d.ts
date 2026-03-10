import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Meter extends jspb.Message {
  getMetertype(): string;
  setMetertype(value: string): Meter;

  getMeterref(): string;
  setMeterref(value: string): Meter;

  getDiameter(): number;
  setDiameter(value: number): Meter;

  getConverterfactor(): number;
  setConverterfactor(value: number): Meter;
  hasConverterfactor(): boolean;
  clearConverterfactor(): Meter;

  getOpstatus(): MeterOperationStatus;
  setOpstatus(value: MeterOperationStatus): Meter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meter.AsObject;
  static toObject(includeInstance: boolean, msg: Meter): Meter.AsObject;
  static serializeBinaryToWriter(message: Meter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meter;
  static deserializeBinaryFromReader(message: Meter, reader: jspb.BinaryReader): Meter;
}

export namespace Meter {
  export type AsObject = {
    metertype: string,
    meterref: string,
    diameter: number,
    converterfactor?: number,
    opstatus: MeterOperationStatus,
  }
}

export class Connection extends jspb.Message {
  getCtype(): Ctg | undefined;
  setCtype(value?: Ctg): Connection;
  hasCtype(): boolean;
  clearCtype(): Connection;

  getNounits(): number;
  setNounits(value: number): Connection;

  getIsbulkmeter(): boolean;
  setIsbulkmeter(value: boolean): Connection;
  hasIsbulkmeter(): boolean;
  clearIsbulkmeter(): Connection;

  getConndiameter(): number;
  setConndiameter(value: number): Connection;
  hasConndiameter(): boolean;
  clearConndiameter(): Connection;

  getMeter(): Meter | undefined;
  setMeter(value?: Meter): Connection;
  hasMeter(): boolean;
  clearMeter(): Connection;

  getEstimcons(): number;
  setEstimcons(value: number): Connection;
  hasEstimcons(): boolean;
  clearEstimcons(): Connection;

  getConnectionstatus(): CONNECTION_STATUS_TYPE;
  setConnectionstatus(value: CONNECTION_STATUS_TYPE): Connection;
  hasConnectionstatus(): boolean;
  clearConnectionstatus(): Connection;

  getSubconnectionsList(): Array<SubConnection>;
  setSubconnectionsList(value: Array<SubConnection>): Connection;
  clearSubconnectionsList(): Connection;
  addSubconnections(value?: SubConnection, index?: number): SubConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    ctype?: Ctg.AsObject,
    nounits: number,
    isbulkmeter?: boolean,
    conndiameter?: number,
    meter?: Meter.AsObject,
    estimcons?: number,
    connectionstatus?: CONNECTION_STATUS_TYPE,
    subconnectionsList: Array<SubConnection.AsObject>,
  }
}

export class SubConnection extends jspb.Message {
  getCtype(): Ctg | undefined;
  setCtype(value?: Ctg): SubConnection;
  hasCtype(): boolean;
  clearCtype(): SubConnection;

  getEstimateconsumption(): number;
  setEstimateconsumption(value: number): SubConnection;
  hasEstimateconsumption(): boolean;
  clearEstimateconsumption(): SubConnection;

  getConsumptionpercentage(): number;
  setConsumptionpercentage(value: number): SubConnection;
  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): SubConnection;

  getNounits(): number;
  setNounits(value: number): SubConnection;
  hasNounits(): boolean;
  clearNounits(): SubConnection;

  getConndiameter(): string;
  setConndiameter(value: string): SubConnection;
  hasConndiameter(): boolean;
  clearConndiameter(): SubConnection;

  getMeter(): Meter | undefined;
  setMeter(value?: Meter): SubConnection;
  hasMeter(): boolean;
  clearMeter(): SubConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubConnection.AsObject;
  static toObject(includeInstance: boolean, msg: SubConnection): SubConnection.AsObject;
  static serializeBinaryToWriter(message: SubConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubConnection;
  static deserializeBinaryFromReader(message: SubConnection, reader: jspb.BinaryReader): SubConnection;
}

export namespace SubConnection {
  export type AsObject = {
    ctype?: Ctg.AsObject,
    estimateconsumption?: number,
    consumptionpercentage?: number,
    nounits?: number,
    conndiameter?: string,
    meter?: Meter.AsObject,
  }
}

export class Service extends jspb.Message {
  getServicetype(): SERVICE_TYPE;
  setServicetype(value: SERVICE_TYPE): Service;

  getConnection(): Connection | undefined;
  setConnection(value?: Connection): Service;
  hasConnection(): boolean;
  clearConnection(): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    servicetype: SERVICE_TYPE,
    connection?: Connection.AsObject,
  }
}

export class Property extends jspb.Message {
  getPropref(): string;
  setPropref(value: string): Property;

  getInfoflag1(): string;
  setInfoflag1(value: string): Property;
  hasInfoflag1(): boolean;
  clearInfoflag1(): Property;

  getInfoflag2(): string;
  setInfoflag2(value: string): Property;
  hasInfoflag2(): boolean;
  clearInfoflag2(): Property;

  getInfoflag3(): string;
  setInfoflag3(value: string): Property;
  hasInfoflag3(): boolean;
  clearInfoflag3(): Property;

  getInfoflag4(): string;
  setInfoflag4(value: string): Property;
  hasInfoflag4(): boolean;
  clearInfoflag4(): Property;

  getInfoflag5(): string;
  setInfoflag5(value: string): Property;
  hasInfoflag5(): boolean;
  clearInfoflag5(): Property;

  getNorooms(): number;
  setNorooms(value: number): Property;
  hasNorooms(): boolean;
  clearNorooms(): Property;

  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): Property;
  clearServicesList(): Property;
  addServices(value?: Service, index?: number): Service;

  getIsvacated(): boolean;
  setIsvacated(value: boolean): Property;
  hasIsvacated(): boolean;
  clearIsvacated(): Property;

  getTownship(): string;
  setTownship(value: string): Property;
  hasTownship(): boolean;
  clearTownship(): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    propref: string,
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
  getCustkey(): string;
  setCustkey(value: string): Customer;

  getCusttype(): number;
  setCusttype(value: number): Customer;

  getIscompany(): boolean;
  setIscompany(value: boolean): Customer;
  hasIscompany(): boolean;
  clearIscompany(): Customer;

  getInfoflag1(): string;
  setInfoflag1(value: string): Customer;
  hasInfoflag1(): boolean;
  clearInfoflag1(): Customer;

  getInfoflag2(): string;
  setInfoflag2(value: string): Customer;
  hasInfoflag2(): boolean;
  clearInfoflag2(): Customer;

  getInfoflag3(): string;
  setInfoflag3(value: string): Customer;
  hasInfoflag3(): boolean;
  clearInfoflag3(): Customer;

  getInfoflag4(): string;
  setInfoflag4(value: string): Customer;
  hasInfoflag4(): boolean;
  clearInfoflag4(): Customer;

  getInfoflag5(): string;
  setInfoflag5(value: string): Customer;
  hasInfoflag5(): boolean;
  clearInfoflag5(): Customer;

  getProperty(): Property | undefined;
  setProperty(value?: Property): Customer;
  hasProperty(): boolean;
  clearProperty(): Customer;

  getBillgroup(): string;
  setBillgroup(value: string): Customer;

  getCyclelength(): number;
  setCyclelength(value: number): Customer;
  hasCyclelength(): boolean;
  clearCyclelength(): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    custkey: string,
    custtype: number,
    iscompany?: boolean,
    infoflag1?: string,
    infoflag2?: string,
    infoflag3?: string,
    infoflag4?: string,
    infoflag5?: string,
    property?: Property.AsObject,
    billgroup: string,
    cyclelength?: number,
  }
}

export class ServiceTariff extends jspb.Message {
  getServicetype(): SERVICE_TYPE;
  setServicetype(value: SERVICE_TYPE): ServiceTariff;

  getTariffcode(): string;
  setTariffcode(value: string): ServiceTariff;
  hasTariffcode(): boolean;
  clearTariffcode(): ServiceTariff;

  getIszerotarif(): boolean;
  setIszerotarif(value: boolean): ServiceTariff;
  hasIszerotarif(): boolean;
  clearIszerotarif(): ServiceTariff;

  getTranscode(): string;
  setTranscode(value: string): ServiceTariff;

  getTaxpercentage(): number;
  setTaxpercentage(value: number): ServiceTariff;
  hasTaxpercentage(): boolean;
  clearTaxpercentage(): ServiceTariff;

  getDiscountpercentage(): number;
  setDiscountpercentage(value: number): ServiceTariff;
  hasDiscountpercentage(): boolean;
  clearDiscountpercentage(): ServiceTariff;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTariff.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTariff): ServiceTariff.AsObject;
  static serializeBinaryToWriter(message: ServiceTariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTariff;
  static deserializeBinaryFromReader(message: ServiceTariff, reader: jspb.BinaryReader): ServiceTariff;
}

export namespace ServiceTariff {
  export type AsObject = {
    servicetype: SERVICE_TYPE,
    tariffcode?: string,
    iszerotarif?: boolean,
    transcode: string,
    taxpercentage?: number,
    discountpercentage?: number,
  }
}

export class Ctg extends jspb.Message {
  getCtype(): string;
  setCtype(value: string): Ctg;

  getCtypegroupid(): string;
  setCtypegroupid(value: string): Ctg;
  hasCtypegroupid(): boolean;
  clearCtypegroupid(): Ctg;

  getTariffsList(): Array<ServiceTariff>;
  setTariffsList(value: Array<ServiceTariff>): Ctg;
  clearTariffsList(): Ctg;
  addTariffs(value?: ServiceTariff, index?: number): ServiceTariff;

  getOpEstimCons(): number;
  setOpEstimCons(value: number): Ctg;
  hasOpEstimCons(): boolean;
  clearOpEstimCons(): Ctg;

  getNoopEstimCons(): number;
  setNoopEstimCons(value: number): Ctg;
  hasNoopEstimCons(): boolean;
  clearNoopEstimCons(): Ctg;

  getDescription(): string;
  setDescription(value: string): Ctg;

  getGroupdescription(): string;
  setGroupdescription(value: string): Ctg;
  hasGroupdescription(): boolean;
  clearGroupdescription(): Ctg;

  getWeigth(): number;
  setWeigth(value: number): Ctg;
  hasWeigth(): boolean;
  clearWeigth(): Ctg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ctg.AsObject;
  static toObject(includeInstance: boolean, msg: Ctg): Ctg.AsObject;
  static serializeBinaryToWriter(message: Ctg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ctg;
  static deserializeBinaryFromReader(message: Ctg, reader: jspb.BinaryReader): Ctg;
}

export namespace Ctg {
  export type AsObject = {
    ctype: string,
    ctypegroupid?: string,
    tariffsList: Array<ServiceTariff.AsObject>,
    opEstimCons?: number,
    noopEstimCons?: number,
    description: string,
    groupdescription?: string,
    weigth?: number,
  }
}

export class ExtraTariffFess extends jspb.Message {
  getTranscode(): string;
  setTranscode(value: string): ExtraTariffFess;

  getDescription(): string;
  setDescription(value: string): ExtraTariffFess;
  hasDescription(): boolean;
  clearDescription(): ExtraTariffFess;

  getAmountpermeter(): number;
  setAmountpermeter(value: number): ExtraTariffFess;
  hasAmountpermeter(): boolean;
  clearAmountpermeter(): ExtraTariffFess;

  getTaxpercentage(): number;
  setTaxpercentage(value: number): ExtraTariffFess;
  hasTaxpercentage(): boolean;
  clearTaxpercentage(): ExtraTariffFess;

  getFixedamount(): number;
  setFixedamount(value: number): ExtraTariffFess;
  hasFixedamount(): boolean;
  clearFixedamount(): ExtraTariffFess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraTariffFess.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraTariffFess): ExtraTariffFess.AsObject;
  static serializeBinaryToWriter(message: ExtraTariffFess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraTariffFess;
  static deserializeBinaryFromReader(message: ExtraTariffFess, reader: jspb.BinaryReader): ExtraTariffFess;
}

export namespace ExtraTariffFess {
  export type AsObject = {
    transcode: string,
    description?: string,
    amountpermeter?: number,
    taxpercentage?: number,
    fixedamount?: number,
  }
}

export class TariffBand extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): TariffBand;

  getTo(): number;
  setTo(value: number): TariffBand;

  getConstant(): number;
  setConstant(value: number): TariffBand;

  getCharge(): number;
  setCharge(value: number): TariffBand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffBand.AsObject;
  static toObject(includeInstance: boolean, msg: TariffBand): TariffBand.AsObject;
  static serializeBinaryToWriter(message: TariffBand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffBand;
  static deserializeBinaryFromReader(message: TariffBand, reader: jspb.BinaryReader): TariffBand;
}

export namespace TariffBand {
  export type AsObject = {
    from: number,
    to: number,
    constant: number,
    charge: number,
  }
}

export class Tariff extends jspb.Message {
  getTariffcode(): string;
  setTariffcode(value: string): Tariff;

  getExtrafeesList(): Array<ExtraTariffFess>;
  setExtrafeesList(value: Array<ExtraTariffFess>): Tariff;
  clearExtrafeesList(): Tariff;
  addExtrafees(value?: ExtraTariffFess, index?: number): ExtraTariffFess;

  getBandsList(): Array<TariffBand>;
  setBandsList(value: Array<TariffBand>): Tariff;
  clearBandsList(): Tariff;
  addBands(value?: TariffBand, index?: number): TariffBand;

  getEffectdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectdate(value?: google_protobuf_timestamp_pb.Timestamp): Tariff;
  hasEffectdate(): boolean;
  clearEffectdate(): Tariff;

  getConsumptionpercentage(): number;
  setConsumptionpercentage(value: number): Tariff;
  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): Tariff;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tariff.AsObject;
  static toObject(includeInstance: boolean, msg: Tariff): Tariff.AsObject;
  static serializeBinaryToWriter(message: Tariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tariff;
  static deserializeBinaryFromReader(message: Tariff, reader: jspb.BinaryReader): Tariff;
}

export namespace Tariff {
  export type AsObject = {
    tariffcode: string,
    extrafeesList: Array<ExtraTariffFess.AsObject>,
    bandsList: Array<TariffBand.AsObject>,
    effectdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    consumptionpercentage?: number,
  }
}

export class EntityChargeMappedValue extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): EntityChargeMappedValue;
  hasFrom(): boolean;
  clearFrom(): EntityChargeMappedValue;

  getTo(): number;
  setTo(value: number): EntityChargeMappedValue;
  hasTo(): boolean;
  clearTo(): EntityChargeMappedValue;

  getLukey(): string;
  setLukey(value: string): EntityChargeMappedValue;
  hasLukey(): boolean;
  clearLukey(): EntityChargeMappedValue;

  getValue(): number;
  setValue(value: number): EntityChargeMappedValue;
  hasValue(): boolean;
  clearValue(): EntityChargeMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityChargeMappedValue.AsObject;
  static toObject(includeInstance: boolean, msg: EntityChargeMappedValue): EntityChargeMappedValue.AsObject;
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
  getLukey(): string;
  setLukey(value: string): EntityEnableMappedValue;

  getValue(): boolean;
  setValue(value: boolean): EntityEnableMappedValue;
  hasValue(): boolean;
  clearValue(): EntityEnableMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityEnableMappedValue.AsObject;
  static toObject(includeInstance: boolean, msg: EntityEnableMappedValue): EntityEnableMappedValue.AsObject;
  static serializeBinaryToWriter(message: EntityEnableMappedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityEnableMappedValue;
  static deserializeBinaryFromReader(message: EntityEnableMappedValue, reader: jspb.BinaryReader): EntityEnableMappedValue;
}

export namespace EntityEnableMappedValue {
  export type AsObject = {
    lukey: string,
    value?: boolean,
  }
}

export class RegularChargeEntity extends jspb.Message {
  getEntitytype(): ENTITY_TYPE;
  setEntitytype(value: ENTITY_TYPE): RegularChargeEntity;

  getMappedvaluesList(): Array<EntityChargeMappedValue>;
  setMappedvaluesList(value: Array<EntityChargeMappedValue>): RegularChargeEntity;
  clearMappedvaluesList(): RegularChargeEntity;
  addMappedvalues(value?: EntityChargeMappedValue, index?: number): EntityChargeMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeEntity.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeEntity): RegularChargeEntity.AsObject;
  static serializeBinaryToWriter(message: RegularChargeEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeEntity;
  static deserializeBinaryFromReader(message: RegularChargeEntity, reader: jspb.BinaryReader): RegularChargeEntity;
}

export namespace RegularChargeEntity {
  export type AsObject = {
    entitytype: ENTITY_TYPE,
    mappedvaluesList: Array<EntityChargeMappedValue.AsObject>,
  }
}

export class RegularEnableEntity extends jspb.Message {
  getEntitytype(): ENTITY_TYPE;
  setEntitytype(value: ENTITY_TYPE): RegularEnableEntity;

  getMappedvaluesList(): Array<EntityEnableMappedValue>;
  setMappedvaluesList(value: Array<EntityEnableMappedValue>): RegularEnableEntity;
  clearMappedvaluesList(): RegularEnableEntity;
  addMappedvalues(value?: EntityEnableMappedValue, index?: number): EntityEnableMappedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularEnableEntity.AsObject;
  static toObject(includeInstance: boolean, msg: RegularEnableEntity): RegularEnableEntity.AsObject;
  static serializeBinaryToWriter(message: RegularEnableEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularEnableEntity;
  static deserializeBinaryFromReader(message: RegularEnableEntity, reader: jspb.BinaryReader): RegularEnableEntity;
}

export namespace RegularEnableEntity {
  export type AsObject = {
    entitytype: ENTITY_TYPE,
    mappedvaluesList: Array<EntityEnableMappedValue.AsObject>,
  }
}

export class RegularCharge extends jspb.Message {
  getRegularchargeid(): string;
  setRegularchargeid(value: string): RegularCharge;

  getEffectdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectdate(value?: google_protobuf_timestamp_pb.Timestamp): RegularCharge;
  hasEffectdate(): boolean;
  clearEffectdate(): RegularCharge;

  getEffectdateto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectdateto(value?: google_protobuf_timestamp_pb.Timestamp): RegularCharge;
  hasEffectdateto(): boolean;
  clearEffectdateto(): RegularCharge;

  getTranscode(): string;
  setTranscode(value: string): RegularCharge;

  getTitle(): string;
  setTitle(value: string): RegularCharge;

  getIschargable(): boolean;
  setIschargable(value: boolean): RegularCharge;

  getServicetype(): SERVICE_TYPE;
  setServicetype(value: SERVICE_TYPE): RegularCharge;

  getChargecalcperiod(): RegularChargePeriod;
  setChargecalcperiod(value: RegularChargePeriod): RegularCharge;

  getChargeinterval(): number;
  setChargeinterval(value: number): RegularCharge;
  hasChargeinterval(): boolean;
  clearChargeinterval(): RegularCharge;

  getChargemonthlyday(): number;
  setChargemonthlyday(value: number): RegularCharge;
  hasChargemonthlyday(): boolean;
  clearChargemonthlyday(): RegularCharge;

  getChargetype(): ChargeType;
  setChargetype(value: ChargeType): RegularCharge;
  hasChargetype(): boolean;
  clearChargetype(): RegularCharge;

  getFixedcharge(): number;
  setFixedcharge(value: number): RegularCharge;
  hasFixedcharge(): boolean;
  clearFixedcharge(): RegularCharge;

  getFixedchargediscount(): number;
  setFixedchargediscount(value: number): RegularCharge;
  hasFixedchargediscount(): boolean;
  clearFixedchargediscount(): RegularCharge;

  getMincharge(): number;
  setMincharge(value: number): RegularCharge;
  hasMincharge(): boolean;
  clearMincharge(): RegularCharge;

  getVatpercentage(): number;
  setVatpercentage(value: number): RegularCharge;
  hasVatpercentage(): boolean;
  clearVatpercentage(): RegularCharge;

  getRelationchargeentity(): RegularChargeEntity | undefined;
  setRelationchargeentity(value?: RegularChargeEntity): RegularCharge;
  hasRelationchargeentity(): boolean;
  clearRelationchargeentity(): RegularCharge;

  getRelationenableentity(): RegularEnableEntity | undefined;
  setRelationenableentity(value?: RegularEnableEntity): RegularCharge;
  hasRelationenableentity(): boolean;
  clearRelationenableentity(): RegularCharge;

  getBypass(): boolean;
  setBypass(value: boolean): RegularCharge;
  hasBypass(): boolean;
  clearBypass(): RegularCharge;

  getCtypecalcbase(): ChargeRegularCalcStrategy;
  setCtypecalcbase(value: ChargeRegularCalcStrategy): RegularCharge;
  hasCtypecalcbase(): boolean;
  clearCtypecalcbase(): RegularCharge;

  getPerunit(): boolean;
  setPerunit(value: boolean): RegularCharge;
  hasPerunit(): boolean;
  clearPerunit(): RegularCharge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularCharge.AsObject;
  static toObject(includeInstance: boolean, msg: RegularCharge): RegularCharge.AsObject;
  static serializeBinaryToWriter(message: RegularCharge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularCharge;
  static deserializeBinaryFromReader(message: RegularCharge, reader: jspb.BinaryReader): RegularCharge;
}

export namespace RegularCharge {
  export type AsObject = {
    regularchargeid: string,
    effectdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effectdateto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    transcode: string,
    title: string,
    ischargable: boolean,
    servicetype: SERVICE_TYPE,
    chargecalcperiod: RegularChargePeriod,
    chargeinterval?: number,
    chargemonthlyday?: number,
    chargetype?: ChargeType,
    fixedcharge?: number,
    fixedchargediscount?: number,
    mincharge?: number,
    vatpercentage?: number,
    relationchargeentity?: RegularChargeEntity.AsObject,
    relationenableentity?: RegularEnableEntity.AsObject,
    bypass?: boolean,
    ctypecalcbase?: ChargeRegularCalcStrategy,
    perunit?: boolean,
  }
}

export class RegularChargeRequest extends jspb.Message {
  getRegularchargeList(): Array<RegularCharge>;
  setRegularchargeList(value: Array<RegularCharge>): RegularChargeRequest;
  clearRegularchargeList(): RegularChargeRequest;
  addRegularcharge(value?: RegularCharge, index?: number): RegularCharge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeRequest): RegularChargeRequest.AsObject;
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
  getCode(): string;
  setCode(value: string): TransCode;

  getDescription(): string;
  setDescription(value: string): TransCode;

  getEdamscode(): number;
  setEdamscode(value: number): TransCode;
  hasEdamscode(): boolean;
  clearEdamscode(): TransCode;

  getEdamsscode(): number;
  setEdamsscode(value: number): TransCode;
  hasEdamsscode(): boolean;
  clearEdamsscode(): TransCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransCode.AsObject;
  static toObject(includeInstance: boolean, msg: TransCode): TransCode.AsObject;
  static serializeBinaryToWriter(message: TransCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransCode;
  static deserializeBinaryFromReader(message: TransCode, reader: jspb.BinaryReader): TransCode;
}

export namespace TransCode {
  export type AsObject = {
    code: string,
    description: string,
    edamscode?: number,
    edamsscode?: number,
  }
}

export class ServiceType extends jspb.Message {
  getStype(): SERVICE_TYPE;
  setStype(value: SERVICE_TYPE): ServiceType;

  getDescription(): string;
  setDescription(value: string): ServiceType;
  hasDescription(): boolean;
  clearDescription(): ServiceType;

  getIsselectable(): boolean;
  setIsselectable(value: boolean): ServiceType;
  hasIsselectable(): boolean;
  clearIsselectable(): ServiceType;

  getIsbasic(): boolean;
  setIsbasic(value: boolean): ServiceType;
  hasIsbasic(): boolean;
  clearIsbasic(): ServiceType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceType.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceType): ServiceType.AsObject;
  static serializeBinaryToWriter(message: ServiceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceType;
  static deserializeBinaryFromReader(message: ServiceType, reader: jspb.BinaryReader): ServiceType;
}

export namespace ServiceType {
  export type AsObject = {
    stype: SERVICE_TYPE,
    description?: string,
    isselectable?: boolean,
    isbasic?: boolean,
  }
}

export class ServiceTypeRepsonce extends jspb.Message {
  getStype(): SERVICE_TYPE;
  setStype(value: SERVICE_TYPE): ServiceTypeRepsonce;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceTypeRepsonce.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceTypeRepsonce): ServiceTypeRepsonce.AsObject;
  static serializeBinaryToWriter(message: ServiceTypeRepsonce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceTypeRepsonce;
  static deserializeBinaryFromReader(message: ServiceTypeRepsonce, reader: jspb.BinaryReader): ServiceTypeRepsonce;
}

export namespace ServiceTypeRepsonce {
  export type AsObject = {
    stype: SERVICE_TYPE,
  }
}

export class ChargeSetting extends jspb.Message {
  getCyclelength(): number;
  setCyclelength(value: number): ChargeSetting;

  getBilingdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilingdate(value?: google_protobuf_timestamp_pb.Timestamp): ChargeSetting;
  hasBilingdate(): boolean;
  clearBilingdate(): ChargeSetting;

  getIgnoretimeeffect(): boolean;
  setIgnoretimeeffect(value: boolean): ChargeSetting;
  hasIgnoretimeeffect(): boolean;
  clearIgnoretimeeffect(): ChargeSetting;

  getPaymentno(): string;
  setPaymentno(value: string): ChargeSetting;
  hasPaymentno(): boolean;
  clearPaymentno(): ChargeSetting;

  getTaxfinantialtransembded(): boolean;
  setTaxfinantialtransembded(value: boolean): ChargeSetting;
  hasTaxfinantialtransembded(): boolean;
  clearTaxfinantialtransembded(): ChargeSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeSetting): ChargeSetting.AsObject;
  static serializeBinaryToWriter(message: ChargeSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeSetting;
  static deserializeBinaryFromReader(message: ChargeSetting, reader: jspb.BinaryReader): ChargeSetting;
}

export namespace ChargeSetting {
  export type AsObject = {
    cyclelength: number,
    bilingdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ignoretimeeffect?: boolean,
    paymentno?: string,
    taxfinantialtransembded?: boolean,
  }
}

export class SubConnectionReading extends jspb.Message {
  getCtype(): Ctg | undefined;
  setCtype(value?: Ctg): SubConnectionReading;
  hasCtype(): boolean;
  clearCtype(): SubConnectionReading;

  getNounits(): number;
  setNounits(value: number): SubConnectionReading;

  getPercentage(): number;
  setPercentage(value: number): SubConnectionReading;

  getEstimconsump(): number;
  setEstimconsump(value: number): SubConnectionReading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubConnectionReading.AsObject;
  static toObject(includeInstance: boolean, msg: SubConnectionReading): SubConnectionReading.AsObject;
  static serializeBinaryToWriter(message: SubConnectionReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubConnectionReading;
  static deserializeBinaryFromReader(message: SubConnectionReading, reader: jspb.BinaryReader): SubConnectionReading;
}

export namespace SubConnectionReading {
  export type AsObject = {
    ctype?: Ctg.AsObject,
    nounits: number,
    percentage: number,
    estimconsump: number,
  }
}

export class Reading extends jspb.Message {
  getConsump(): number;
  setConsump(value: number): Reading;
  hasConsump(): boolean;
  clearConsump(): Reading;

  getPrreading(): number;
  setPrreading(value: number): Reading;
  hasPrreading(): boolean;
  clearPrreading(): Reading;

  getCrreading(): number;
  setCrreading(value: number): Reading;
  hasCrreading(): boolean;
  clearCrreading(): Reading;

  getPrdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPrdate(value?: google_protobuf_timestamp_pb.Timestamp): Reading;
  hasPrdate(): boolean;
  clearPrdate(): Reading;

  getCrdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCrdate(value?: google_protobuf_timestamp_pb.Timestamp): Reading;
  hasCrdate(): boolean;
  clearCrdate(): Reading;

  getReadtype(): READING_TYPE;
  setReadtype(value: READING_TYPE): Reading;
  hasReadtype(): boolean;
  clearReadtype(): Reading;

  getReadingby(): string;
  setReadingby(value: string): Reading;
  hasReadingby(): boolean;
  clearReadingby(): Reading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reading.AsObject;
  static toObject(includeInstance: boolean, msg: Reading): Reading.AsObject;
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
    readtype?: READING_TYPE,
    readingby?: string,
  }
}

export class ServiceReading extends jspb.Message {
  getServicetype(): SERVICE_TYPE;
  setServicetype(value: SERVICE_TYPE): ServiceReading;

  getReading(): Reading | undefined;
  setReading(value?: Reading): ServiceReading;
  hasReading(): boolean;
  clearReading(): ServiceReading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceReading.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceReading): ServiceReading.AsObject;
  static serializeBinaryToWriter(message: ServiceReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceReading;
  static deserializeBinaryFromReader(message: ServiceReading, reader: jspb.BinaryReader): ServiceReading;
}

export namespace ServiceReading {
  export type AsObject = {
    servicetype: SERVICE_TYPE,
    reading?: Reading.AsObject,
  }
}

export class ChargeRequest extends jspb.Message {
  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): ChargeRequest;
  hasCustomer(): boolean;
  clearCustomer(): ChargeRequest;

  getServicesreadingsList(): Array<ServiceReading>;
  setServicesreadingsList(value: Array<ServiceReading>): ChargeRequest;
  clearServicesreadingsList(): ChargeRequest;
  addServicesreadings(value?: ServiceReading, index?: number): ServiceReading;

  getSetting(): ChargeSetting | undefined;
  setSetting(value?: ChargeSetting): ChargeRequest;
  hasSetting(): boolean;
  clearSetting(): ChargeRequest;

  getServicesList(): Array<SERVICE_TYPE>;
  setServicesList(value: Array<SERVICE_TYPE>): ChargeRequest;
  clearServicesList(): ChargeRequest;
  addServices(value: SERVICE_TYPE, index?: number): ChargeRequest;

  getOldbill(): Bill | undefined;
  setOldbill(value?: Bill): ChargeRequest;
  hasOldbill(): boolean;
  clearOldbill(): ChargeRequest;

  getCyclelength(): number;
  setCyclelength(value: number): ChargeRequest;
  hasCyclelength(): boolean;
  clearCyclelength(): ChargeRequest;

  getNewBill(): boolean;
  setNewBill(value: boolean): ChargeRequest;
  hasNewBill(): boolean;
  clearNewBill(): ChargeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeRequest): ChargeRequest.AsObject;
  static serializeBinaryToWriter(message: ChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeRequest;
  static deserializeBinaryFromReader(message: ChargeRequest, reader: jspb.BinaryReader): ChargeRequest;
}

export namespace ChargeRequest {
  export type AsObject = {
    customer?: Customer.AsObject,
    servicesreadingsList: Array<ServiceReading.AsObject>,
    setting?: ChargeSetting.AsObject,
    servicesList: Array<SERVICE_TYPE>,
    oldbill?: Bill.AsObject,
    cyclelength?: number,
    newBill?: boolean,
  }
}

export class ExtraCharge extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): ExtraCharge;
  hasDescription(): boolean;
  clearDescription(): ExtraCharge;

  getCode(): string;
  setCode(value: string): ExtraCharge;

  getAmount(): number;
  setAmount(value: number): ExtraCharge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraCharge.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraCharge): ExtraCharge.AsObject;
  static serializeBinaryToWriter(message: ExtraCharge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraCharge;
  static deserializeBinaryFromReader(message: ExtraCharge, reader: jspb.BinaryReader): ExtraCharge;
}

export namespace ExtraCharge {
  export type AsObject = {
    description?: string,
    code: string,
    amount: number,
  }
}

export class MeasuredTransaction extends jspb.Message {
  getConsump(): number;
  setConsump(value: number): MeasuredTransaction;

  getCrreading(): number;
  setCrreading(value: number): MeasuredTransaction;
  hasCrreading(): boolean;
  clearCrreading(): MeasuredTransaction;

  getPrreading(): number;
  setPrreading(value: number): MeasuredTransaction;
  hasPrreading(): boolean;
  clearPrreading(): MeasuredTransaction;

  getReadtype(): READING_TYPE;
  setReadtype(value: READING_TYPE): MeasuredTransaction;

  getMetertype(): string;
  setMetertype(value: string): MeasuredTransaction;
  hasMetertype(): boolean;
  clearMetertype(): MeasuredTransaction;

  getMeterref(): string;
  setMeterref(value: string): MeasuredTransaction;
  hasMeterref(): boolean;
  clearMeterref(): MeasuredTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasuredTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MeasuredTransaction): MeasuredTransaction.AsObject;
  static serializeBinaryToWriter(message: MeasuredTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasuredTransaction;
  static deserializeBinaryFromReader(message: MeasuredTransaction, reader: jspb.BinaryReader): MeasuredTransaction;
}

export namespace MeasuredTransaction {
  export type AsObject = {
    consump: number,
    crreading?: number,
    prreading?: number,
    readtype: READING_TYPE,
    metertype?: string,
    meterref?: string,
  }
}

export class FinantialTransaction extends jspb.Message {
  getServicetype(): SERVICE_TYPE;
  setServicetype(value: SERVICE_TYPE): FinantialTransaction;

  getCode(): string;
  setCode(value: string): FinantialTransaction;

  getBilngdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): FinantialTransaction;
  hasBilngdate(): boolean;
  clearBilngdate(): FinantialTransaction;

  getEffdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffdate(value?: google_protobuf_timestamp_pb.Timestamp): FinantialTransaction;
  hasEffdate(): boolean;
  clearEffdate(): FinantialTransaction;

  getAmount(): number;
  setAmount(value: number): FinantialTransaction;

  getTaxamount(): number;
  setTaxamount(value: number): FinantialTransaction;
  hasTaxamount(): boolean;
  clearTaxamount(): FinantialTransaction;

  getDiscountamount(): number;
  setDiscountamount(value: number): FinantialTransaction;
  hasDiscountamount(): boolean;
  clearDiscountamount(): FinantialTransaction;

  getCtype(): Ctg | undefined;
  setCtype(value?: Ctg): FinantialTransaction;
  hasCtype(): boolean;
  clearCtype(): FinantialTransaction;

  getNounits(): number;
  setNounits(value: number): FinantialTransaction;
  hasNounits(): boolean;
  clearNounits(): FinantialTransaction;

  getPropref(): string;
  setPropref(value: string): FinantialTransaction;
  hasPropref(): boolean;
  clearPropref(): FinantialTransaction;

  getMtransaction(): MeasuredTransaction | undefined;
  setMtransaction(value?: MeasuredTransaction): FinantialTransaction;
  hasMtransaction(): boolean;
  clearMtransaction(): FinantialTransaction;

  getDescription(): string;
  setDescription(value: string): FinantialTransaction;
  hasDescription(): boolean;
  clearDescription(): FinantialTransaction;

  getConsumptionpercentage(): number;
  setConsumptionpercentage(value: number): FinantialTransaction;
  hasConsumptionpercentage(): boolean;
  clearConsumptionpercentage(): FinantialTransaction;

  getTariffid(): string;
  setTariffid(value: string): FinantialTransaction;
  hasTariffid(): boolean;
  clearTariffid(): FinantialTransaction;

  getEditable(): boolean;
  setEditable(value: boolean): FinantialTransaction;
  hasEditable(): boolean;
  clearEditable(): FinantialTransaction;

  getBandsconsumpMap(): jspb.Map<number, number>;
  clearBandsconsumpMap(): FinantialTransaction;

  getBandsamountMap(): jspb.Map<number, number>;
  clearBandsamountMap(): FinantialTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinantialTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: FinantialTransaction): FinantialTransaction.AsObject;
  static serializeBinaryToWriter(message: FinantialTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinantialTransaction;
  static deserializeBinaryFromReader(message: FinantialTransaction, reader: jspb.BinaryReader): FinantialTransaction;
}

export namespace FinantialTransaction {
  export type AsObject = {
    servicetype: SERVICE_TYPE,
    code: string,
    bilngdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    amount: number,
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
    bandsconsumpMap: Array<[number, number]>,
    bandsamountMap: Array<[number, number]>,
  }
}

export class Bill extends jspb.Message {
  getPaymentno(): string;
  setPaymentno(value: string): Bill;

  getBilngdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): Bill;
  hasBilngdate(): boolean;
  clearBilngdate(): Bill;

  getFtransactionsList(): Array<FinantialTransaction>;
  setFtransactionsList(value: Array<FinantialTransaction>): Bill;
  clearFtransactionsList(): Bill;
  addFtransactions(value?: FinantialTransaction, index?: number): FinantialTransaction;

  getServicesreadingsList(): Array<ServiceReading>;
  setServicesreadingsList(value: Array<ServiceReading>): Bill;
  clearServicesreadingsList(): Bill;
  addServicesreadings(value?: ServiceReading, index?: number): ServiceReading;

  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): Bill;
  hasCustomer(): boolean;
  clearCustomer(): Bill;

  getClbalance(): number;
  setClbalance(value: number): Bill;
  hasClbalance(): boolean;
  clearClbalance(): Bill;

  getComment(): string;
  setComment(value: string): Bill;
  hasComment(): boolean;
  clearComment(): Bill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bill.AsObject;
  static toObject(includeInstance: boolean, msg: Bill): Bill.AsObject;
  static serializeBinaryToWriter(message: Bill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bill;
  static deserializeBinaryFromReader(message: Bill, reader: jspb.BinaryReader): Bill;
}

export namespace Bill {
  export type AsObject = {
    paymentno: string,
    bilngdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ftransactionsList: Array<FinantialTransaction.AsObject>,
    servicesreadingsList: Array<ServiceReading.AsObject>,
    customer?: Customer.AsObject,
    clbalance?: number,
    comment?: string,
  }
}

export class CancelledRequest extends jspb.Message {
  getFormno(): number;
  setFormno(value: number): CancelledRequest;

  getFormdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFormdate(value?: google_protobuf_timestamp_pb.Timestamp): CancelledRequest;
  hasFormdate(): boolean;
  clearFormdate(): CancelledRequest;

  getStatus(): string;
  setStatus(value: string): CancelledRequest;
  hasStatus(): boolean;
  clearStatus(): CancelledRequest;

  getComment(): string;
  setComment(value: string): CancelledRequest;
  hasComment(): boolean;
  clearComment(): CancelledRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelledRequest): CancelledRequest.AsObject;
  static serializeBinaryToWriter(message: CancelledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelledRequest;
  static deserializeBinaryFromReader(message: CancelledRequest, reader: jspb.BinaryReader): CancelledRequest;
}

export namespace CancelledRequest {
  export type AsObject = {
    formno: number,
    formdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: string,
    comment?: string,
  }
}

export class BillResponce extends jspb.Message {
  getBillsList(): Array<Bill>;
  setBillsList(value: Array<Bill>): BillResponce;
  clearBillsList(): BillResponce;
  addBills(value?: Bill, index?: number): Bill;

  getRecalcform(): CancelledRequest | undefined;
  setRecalcform(value?: CancelledRequest): BillResponce;
  hasRecalcform(): boolean;
  clearRecalcform(): BillResponce;

  getCalculatedAgain(): boolean;
  setCalculatedAgain(value: boolean): BillResponce;
  hasCalculatedAgain(): boolean;
  clearCalculatedAgain(): BillResponce;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillResponce.AsObject;
  static toObject(includeInstance: boolean, msg: BillResponce): BillResponce.AsObject;
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
  getName(): string;
  setName(value: string): ServiceInfo;

  getVersion(): string;
  setVersion(value: string): ServiceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceInfo): ServiceInfo.AsObject;
  static serializeBinaryToWriter(message: ServiceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceInfo;
  static deserializeBinaryFromReader(message: ServiceInfo, reader: jspb.BinaryReader): ServiceInfo;
}

export namespace ServiceInfo {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export class SetupData extends jspb.Message {
  getTariffsList(): Array<Tariff>;
  setTariffsList(value: Array<Tariff>): SetupData;
  clearTariffsList(): SetupData;
  addTariffs(value?: Tariff, index?: number): Tariff;

  getCtgsList(): Array<Ctg>;
  setCtgsList(value: Array<Ctg>): SetupData;
  clearCtgsList(): SetupData;
  addCtgs(value?: Ctg, index?: number): Ctg;

  getRegularchargesList(): Array<RegularCharge>;
  setRegularchargesList(value: Array<RegularCharge>): SetupData;
  clearRegularchargesList(): SetupData;
  addRegularcharges(value?: RegularCharge, index?: number): RegularCharge;

  getTranscodesList(): Array<TransCode>;
  setTranscodesList(value: Array<TransCode>): SetupData;
  clearTranscodesList(): SetupData;
  addTranscodes(value?: TransCode, index?: number): TransCode;

  getWithRound(): boolean;
  setWithRound(value: boolean): SetupData;
  hasWithRound(): boolean;
  clearWithRound(): SetupData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupData.AsObject;
  static toObject(includeInstance: boolean, msg: SetupData): SetupData.AsObject;
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
  getCustomersList(): Array<Customer>;
  setCustomersList(value: Array<Customer>): CustomersList;
  clearCustomersList(): CustomersList;
  addCustomers(value?: Customer, index?: number): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomersList.AsObject;
  static toObject(includeInstance: boolean, msg: CustomersList): CustomersList.AsObject;
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
  getKey(): string;
  setKey(value: string): Key;

  getBilngdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasBilngdate(): boolean;
  clearBilngdate(): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    key: string,
    bilngdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LookUp extends jspb.Message {
  getCode(): string;
  setCode(value: string): LookUp;

  getDescription(): string;
  setDescription(value: string): LookUp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUp.AsObject;
  static toObject(includeInstance: boolean, msg: LookUp): LookUp.AsObject;
  static serializeBinaryToWriter(message: LookUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookUp;
  static deserializeBinaryFromReader(message: LookUp, reader: jspb.BinaryReader): LookUp;
}

export namespace LookUp {
  export type AsObject = {
    code: string,
    description: string,
  }
}

export class LookUpsResponce extends jspb.Message {
  getLookupsList(): Array<LookUp>;
  setLookupsList(value: Array<LookUp>): LookUpsResponce;
  clearLookupsList(): LookUpsResponce;
  addLookups(value?: LookUp, index?: number): LookUp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookUpsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: LookUpsResponce): LookUpsResponce.AsObject;
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
  getCtgsList(): Array<Ctg>;
  setCtgsList(value: Array<Ctg>): CtgsResponce;
  clearCtgsList(): CtgsResponce;
  addCtgs(value?: Ctg, index?: number): Ctg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CtgsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: CtgsResponce): CtgsResponce.AsObject;
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
  getEntitytype(): ENTITY_TYPE;
  setEntitytype(value: ENTITY_TYPE): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entitytype: ENTITY_TYPE,
  }
}

export class GetBillRequest extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetBillRequest;

  getPaymentno(): string;
  setPaymentno(value: string): GetBillRequest;
  hasPaymentno(): boolean;
  clearPaymentno(): GetBillRequest;

  getBilngdatefrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdatefrom(value?: google_protobuf_timestamp_pb.Timestamp): GetBillRequest;
  hasBilngdatefrom(): boolean;
  clearBilngdatefrom(): GetBillRequest;

  getBilngdateto(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngdateto(value?: google_protobuf_timestamp_pb.Timestamp): GetBillRequest;
  hasBilngdateto(): boolean;
  clearBilngdateto(): GetBillRequest;

  getFormno(): string;
  setFormno(value: string): GetBillRequest;
  hasFormno(): boolean;
  clearFormno(): GetBillRequest;

  getFromCancelBill(): boolean;
  setFromCancelBill(value: boolean): GetBillRequest;
  hasFromCancelBill(): boolean;
  clearFromCancelBill(): GetBillRequest;

  getBpmFormNo(): number;
  setBpmFormNo(value: number): GetBillRequest;
  hasBpmFormNo(): boolean;
  clearBpmFormNo(): GetBillRequest;

  getBpmApplicationTypeId(): number;
  setBpmApplicationTypeId(value: number): GetBillRequest;
  hasBpmApplicationTypeId(): boolean;
  clearBpmApplicationTypeId(): GetBillRequest;

  getBpmCompanyId(): number;
  setBpmCompanyId(value: number): GetBillRequest;
  hasBpmCompanyId(): boolean;
  clearBpmCompanyId(): GetBillRequest;

  getWithBpm(): boolean;
  setWithBpm(value: boolean): GetBillRequest;
  hasWithBpm(): boolean;
  clearWithBpm(): GetBillRequest;

  getWithFake(): boolean;
  setWithFake(value: boolean): GetBillRequest;
  hasWithFake(): boolean;
  clearWithFake(): GetBillRequest;

  getNewBiller(): boolean;
  setNewBiller(value: boolean): GetBillRequest;
  hasNewBiller(): boolean;
  clearNewBiller(): GetBillRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillRequest): GetBillRequest.AsObject;
  static serializeBinaryToWriter(message: GetBillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillRequest;
  static deserializeBinaryFromReader(message: GetBillRequest, reader: jspb.BinaryReader): GetBillRequest;
}

export namespace GetBillRequest {
  export type AsObject = {
    custkey: string,
    paymentno?: string,
    bilngdatefrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bilngdateto?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    formno?: string,
    fromCancelBill?: boolean,
    bpmFormNo?: number,
    bpmApplicationTypeId?: number,
    bpmCompanyId?: number,
    withBpm?: boolean,
    withFake?: boolean,
    newBiller?: boolean,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponce extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponce;
  hasToken(): boolean;
  clearToken(): LoginResponce;

  getSuccssed(): boolean;
  setSuccssed(value: boolean): LoginResponce;
  hasSuccssed(): boolean;
  clearSuccssed(): LoginResponce;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponce.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponce): LoginResponce.AsObject;
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
  getData(): BillResponce | undefined;
  setData(value?: BillResponce): PostMessage;
  hasData(): boolean;
  clearData(): PostMessage;

  getIscancelledrequest(): boolean;
  setIscancelledrequest(value: boolean): PostMessage;
  hasIscancelledrequest(): boolean;
  clearIscancelledrequest(): PostMessage;

  getCancelledrequestformno(): number;
  setCancelledrequestformno(value: number): PostMessage;
  hasCancelledrequestformno(): boolean;
  clearCancelledrequestformno(): PostMessage;

  getWithBpm(): boolean;
  setWithBpm(value: boolean): PostMessage;
  hasWithBpm(): boolean;
  clearWithBpm(): PostMessage;

  getWithFake(): boolean;
  setWithFake(value: boolean): PostMessage;
  hasWithFake(): boolean;
  clearWithFake(): PostMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PostMessage): PostMessage.AsObject;
  static serializeBinaryToWriter(message: PostMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMessage;
  static deserializeBinaryFromReader(message: PostMessage, reader: jspb.BinaryReader): PostMessage;
}

export namespace PostMessage {
  export type AsObject = {
    data?: BillResponce.AsObject,
    iscancelledrequest?: boolean,
    cancelledrequestformno?: number,
    withBpm?: boolean,
    withFake?: boolean,
  }
}

export class SERVICE_TYPE_DATA extends jspb.Message {
  getId(): number;
  setId(value: number): SERVICE_TYPE_DATA;
  hasId(): boolean;
  clearId(): SERVICE_TYPE_DATA;

  getName(): string;
  setName(value: string): SERVICE_TYPE_DATA;
  hasName(): boolean;
  clearName(): SERVICE_TYPE_DATA;

  getDescription(): string;
  setDescription(value: string): SERVICE_TYPE_DATA;
  hasDescription(): boolean;
  clearDescription(): SERVICE_TYPE_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SERVICE_TYPE_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: SERVICE_TYPE_DATA): SERVICE_TYPE_DATA.AsObject;
  static serializeBinaryToWriter(message: SERVICE_TYPE_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SERVICE_TYPE_DATA;
  static deserializeBinaryFromReader(message: SERVICE_TYPE_DATA, reader: jspb.BinaryReader): SERVICE_TYPE_DATA;
}

export namespace SERVICE_TYPE_DATA {
  export type AsObject = {
    id?: number,
    name?: string,
    description?: string,
  }
}

export class GET_SERVICETYPES extends jspb.Message {
  getServiceTypeDataList(): Array<SERVICE_TYPE_DATA>;
  setServiceTypeDataList(value: Array<SERVICE_TYPE_DATA>): GET_SERVICETYPES;
  clearServiceTypeDataList(): GET_SERVICETYPES;
  addServiceTypeData(value?: SERVICE_TYPE_DATA, index?: number): SERVICE_TYPE_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GET_SERVICETYPES.AsObject;
  static toObject(includeInstance: boolean, msg: GET_SERVICETYPES): GET_SERVICETYPES.AsObject;
  static serializeBinaryToWriter(message: GET_SERVICETYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GET_SERVICETYPES;
  static deserializeBinaryFromReader(message: GET_SERVICETYPES, reader: jspb.BinaryReader): GET_SERVICETYPES;
}

export namespace GET_SERVICETYPES {
  export type AsObject = {
    serviceTypeDataList: Array<SERVICE_TYPE_DATA.AsObject>,
  }
}

export class CHARGE_TYPE_DATA extends jspb.Message {
  getId(): number;
  setId(value: number): CHARGE_TYPE_DATA;
  hasId(): boolean;
  clearId(): CHARGE_TYPE_DATA;

  getName(): string;
  setName(value: string): CHARGE_TYPE_DATA;
  hasName(): boolean;
  clearName(): CHARGE_TYPE_DATA;

  getDescription(): string;
  setDescription(value: string): CHARGE_TYPE_DATA;
  hasDescription(): boolean;
  clearDescription(): CHARGE_TYPE_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARGE_TYPE_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: CHARGE_TYPE_DATA): CHARGE_TYPE_DATA.AsObject;
  static serializeBinaryToWriter(message: CHARGE_TYPE_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARGE_TYPE_DATA;
  static deserializeBinaryFromReader(message: CHARGE_TYPE_DATA, reader: jspb.BinaryReader): CHARGE_TYPE_DATA;
}

export namespace CHARGE_TYPE_DATA {
  export type AsObject = {
    id?: number,
    name?: string,
    description?: string,
  }
}

export class GET_CHARGETYPES extends jspb.Message {
  getChargeTypeDataList(): Array<CHARGE_TYPE_DATA>;
  setChargeTypeDataList(value: Array<CHARGE_TYPE_DATA>): GET_CHARGETYPES;
  clearChargeTypeDataList(): GET_CHARGETYPES;
  addChargeTypeData(value?: CHARGE_TYPE_DATA, index?: number): CHARGE_TYPE_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GET_CHARGETYPES.AsObject;
  static toObject(includeInstance: boolean, msg: GET_CHARGETYPES): GET_CHARGETYPES.AsObject;
  static serializeBinaryToWriter(message: GET_CHARGETYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GET_CHARGETYPES;
  static deserializeBinaryFromReader(message: GET_CHARGETYPES, reader: jspb.BinaryReader): GET_CHARGETYPES;
}

export namespace GET_CHARGETYPES {
  export type AsObject = {
    chargeTypeDataList: Array<CHARGE_TYPE_DATA.AsObject>,
  }
}

export class Entity_lockup extends jspb.Message {
  getId(): string;
  setId(value: string): Entity_lockup;
  hasId(): boolean;
  clearId(): Entity_lockup;

  getName(): string;
  setName(value: string): Entity_lockup;
  hasName(): boolean;
  clearName(): Entity_lockup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity_lockup.AsObject;
  static toObject(includeInstance: boolean, msg: Entity_lockup): Entity_lockup.AsObject;
  static serializeBinaryToWriter(message: Entity_lockup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity_lockup;
  static deserializeBinaryFromReader(message: Entity_lockup, reader: jspb.BinaryReader): Entity_lockup;
}

export namespace Entity_lockup {
  export type AsObject = {
    id?: string,
    name?: string,
  }
}

export class ENTITY_TYPE_DATA extends jspb.Message {
  getId(): number;
  setId(value: number): ENTITY_TYPE_DATA;
  hasId(): boolean;
  clearId(): ENTITY_TYPE_DATA;

  getName(): string;
  setName(value: string): ENTITY_TYPE_DATA;
  hasName(): boolean;
  clearName(): ENTITY_TYPE_DATA;

  getDescription(): string;
  setDescription(value: string): ENTITY_TYPE_DATA;
  hasDescription(): boolean;
  clearDescription(): ENTITY_TYPE_DATA;

  getCategoryType(): ENTITY_CATEGORY_TYPE;
  setCategoryType(value: ENTITY_CATEGORY_TYPE): ENTITY_TYPE_DATA;
  hasCategoryType(): boolean;
  clearCategoryType(): ENTITY_TYPE_DATA;

  getEntityLockupList(): Array<Entity_lockup>;
  setEntityLockupList(value: Array<Entity_lockup>): ENTITY_TYPE_DATA;
  clearEntityLockupList(): ENTITY_TYPE_DATA;
  addEntityLockup(value?: Entity_lockup, index?: number): Entity_lockup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENTITY_TYPE_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: ENTITY_TYPE_DATA): ENTITY_TYPE_DATA.AsObject;
  static serializeBinaryToWriter(message: ENTITY_TYPE_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENTITY_TYPE_DATA;
  static deserializeBinaryFromReader(message: ENTITY_TYPE_DATA, reader: jspb.BinaryReader): ENTITY_TYPE_DATA;
}

export namespace ENTITY_TYPE_DATA {
  export type AsObject = {
    id?: number,
    name?: string,
    description?: string,
    categoryType?: ENTITY_CATEGORY_TYPE,
    entityLockupList: Array<Entity_lockup.AsObject>,
  }
}

export class GET_ENTITYTYPES extends jspb.Message {
  getEntityTypeDataList(): Array<ENTITY_TYPE_DATA>;
  setEntityTypeDataList(value: Array<ENTITY_TYPE_DATA>): GET_ENTITYTYPES;
  clearEntityTypeDataList(): GET_ENTITYTYPES;
  addEntityTypeData(value?: ENTITY_TYPE_DATA, index?: number): ENTITY_TYPE_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GET_ENTITYTYPES.AsObject;
  static toObject(includeInstance: boolean, msg: GET_ENTITYTYPES): GET_ENTITYTYPES.AsObject;
  static serializeBinaryToWriter(message: GET_ENTITYTYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GET_ENTITYTYPES;
  static deserializeBinaryFromReader(message: GET_ENTITYTYPES, reader: jspb.BinaryReader): GET_ENTITYTYPES;
}

export namespace GET_ENTITYTYPES {
  export type AsObject = {
    entityTypeDataList: Array<ENTITY_TYPE_DATA.AsObject>,
  }
}

export class CHARGE_REGULAR_CALC_STRATEGY extends jspb.Message {
  getId(): number;
  setId(value: number): CHARGE_REGULAR_CALC_STRATEGY;
  hasId(): boolean;
  clearId(): CHARGE_REGULAR_CALC_STRATEGY;

  getName(): string;
  setName(value: string): CHARGE_REGULAR_CALC_STRATEGY;
  hasName(): boolean;
  clearName(): CHARGE_REGULAR_CALC_STRATEGY;

  getDescription(): string;
  setDescription(value: string): CHARGE_REGULAR_CALC_STRATEGY;
  hasDescription(): boolean;
  clearDescription(): CHARGE_REGULAR_CALC_STRATEGY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARGE_REGULAR_CALC_STRATEGY.AsObject;
  static toObject(includeInstance: boolean, msg: CHARGE_REGULAR_CALC_STRATEGY): CHARGE_REGULAR_CALC_STRATEGY.AsObject;
  static serializeBinaryToWriter(message: CHARGE_REGULAR_CALC_STRATEGY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARGE_REGULAR_CALC_STRATEGY;
  static deserializeBinaryFromReader(message: CHARGE_REGULAR_CALC_STRATEGY, reader: jspb.BinaryReader): CHARGE_REGULAR_CALC_STRATEGY;
}

export namespace CHARGE_REGULAR_CALC_STRATEGY {
  export type AsObject = {
    id?: number,
    name?: string,
    description?: string,
  }
}

export class GET_CHARGEREGULARCALCSTRATEGY extends jspb.Message {
  getChargeRegularCalcStrategyList(): Array<CHARGE_REGULAR_CALC_STRATEGY>;
  setChargeRegularCalcStrategyList(value: Array<CHARGE_REGULAR_CALC_STRATEGY>): GET_CHARGEREGULARCALCSTRATEGY;
  clearChargeRegularCalcStrategyList(): GET_CHARGEREGULARCALCSTRATEGY;
  addChargeRegularCalcStrategy(value?: CHARGE_REGULAR_CALC_STRATEGY, index?: number): CHARGE_REGULAR_CALC_STRATEGY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GET_CHARGEREGULARCALCSTRATEGY.AsObject;
  static toObject(includeInstance: boolean, msg: GET_CHARGEREGULARCALCSTRATEGY): GET_CHARGEREGULARCALCSTRATEGY.AsObject;
  static serializeBinaryToWriter(message: GET_CHARGEREGULARCALCSTRATEGY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GET_CHARGEREGULARCALCSTRATEGY;
  static deserializeBinaryFromReader(message: GET_CHARGEREGULARCALCSTRATEGY, reader: jspb.BinaryReader): GET_CHARGEREGULARCALCSTRATEGY;
}

export namespace GET_CHARGEREGULARCALCSTRATEGY {
  export type AsObject = {
    chargeRegularCalcStrategyList: Array<CHARGE_REGULAR_CALC_STRATEGY.AsObject>,
  }
}

export class Tariffs extends jspb.Message {
  getTarrifId(): number;
  setTarrifId(value: number): Tariffs;
  hasTarrifId(): boolean;
  clearTarrifId(): Tariffs;

  getTariffCode(): string;
  setTariffCode(value: string): Tariffs;
  hasTariffCode(): boolean;
  clearTariffCode(): Tariffs;

  getEffectDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectDate(value?: google_protobuf_timestamp_pb.Timestamp): Tariffs;
  hasEffectDate(): boolean;
  clearEffectDate(): Tariffs;

  getDescription(): string;
  setDescription(value: string): Tariffs;
  hasDescription(): boolean;
  clearDescription(): Tariffs;

  getConsumpPercentage(): number;
  setConsumpPercentage(value: number): Tariffs;
  hasConsumpPercentage(): boolean;
  clearConsumpPercentage(): Tariffs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tariffs.AsObject;
  static toObject(includeInstance: boolean, msg: Tariffs): Tariffs.AsObject;
  static serializeBinaryToWriter(message: Tariffs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tariffs;
  static deserializeBinaryFromReader(message: Tariffs, reader: jspb.BinaryReader): Tariffs;
}

export namespace Tariffs {
  export type AsObject = {
    tarrifId?: number,
    tariffCode?: string,
    effectDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description?: string,
    consumpPercentage?: number,
  }
}

export class ArrTariffs extends jspb.Message {
  getTariffsList(): Array<Tariffs>;
  setTariffsList(value: Array<Tariffs>): ArrTariffs;
  clearTariffsList(): ArrTariffs;
  addTariffs(value?: Tariffs, index?: number): Tariffs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTariffs.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTariffs): ArrTariffs.AsObject;
  static serializeBinaryToWriter(message: ArrTariffs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTariffs;
  static deserializeBinaryFromReader(message: ArrTariffs, reader: jspb.BinaryReader): ArrTariffs;
}

export namespace ArrTariffs {
  export type AsObject = {
    tariffsList: Array<Tariffs.AsObject>,
  }
}

export class TariffBands extends jspb.Message {
  getTariffId(): string;
  setTariffId(value: string): TariffBands;
  hasTariffId(): boolean;
  clearTariffId(): TariffBands;

  getEffectDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectDate(value?: google_protobuf_timestamp_pb.Timestamp): TariffBands;
  hasEffectDate(): boolean;
  clearEffectDate(): TariffBands;

  getRangeFrom(): number;
  setRangeFrom(value: number): TariffBands;
  hasRangeFrom(): boolean;
  clearRangeFrom(): TariffBands;

  getRangeTo(): number;
  setRangeTo(value: number): TariffBands;
  hasRangeTo(): boolean;
  clearRangeTo(): TariffBands;

  getConstant(): number;
  setConstant(value: number): TariffBands;
  hasConstant(): boolean;
  clearConstant(): TariffBands;

  getCharge(): number;
  setCharge(value: number): TariffBands;
  hasCharge(): boolean;
  clearCharge(): TariffBands;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffBands.AsObject;
  static toObject(includeInstance: boolean, msg: TariffBands): TariffBands.AsObject;
  static serializeBinaryToWriter(message: TariffBands, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffBands;
  static deserializeBinaryFromReader(message: TariffBands, reader: jspb.BinaryReader): TariffBands;
}

export namespace TariffBands {
  export type AsObject = {
    tariffId?: string,
    effectDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rangeFrom?: number,
    rangeTo?: number,
    constant?: number,
    charge?: number,
  }
}

export class ArrTariffBands extends jspb.Message {
  getTariffbandsList(): Array<TariffBands>;
  setTariffbandsList(value: Array<TariffBands>): ArrTariffBands;
  clearTariffbandsList(): ArrTariffBands;
  addTariffbands(value?: TariffBands, index?: number): TariffBands;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTariffBands.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTariffBands): ArrTariffBands.AsObject;
  static serializeBinaryToWriter(message: ArrTariffBands, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTariffBands;
  static deserializeBinaryFromReader(message: ArrTariffBands, reader: jspb.BinaryReader): ArrTariffBands;
}

export namespace ArrTariffBands {
  export type AsObject = {
    tariffbandsList: Array<TariffBands.AsObject>,
  }
}

export class TariffExtraFees extends jspb.Message {
  getTariffId(): number;
  setTariffId(value: number): TariffExtraFees;
  hasTariffId(): boolean;
  clearTariffId(): TariffExtraFees;

  getTransCode(): string;
  setTransCode(value: string): TariffExtraFees;
  hasTransCode(): boolean;
  clearTransCode(): TariffExtraFees;

  getDescription(): string;
  setDescription(value: string): TariffExtraFees;
  hasDescription(): boolean;
  clearDescription(): TariffExtraFees;

  getAmountPerMeter(): number;
  setAmountPerMeter(value: number): TariffExtraFees;
  hasAmountPerMeter(): boolean;
  clearAmountPerMeter(): TariffExtraFees;

  getAmountPerPercentage(): number;
  setAmountPerPercentage(value: number): TariffExtraFees;
  hasAmountPerPercentage(): boolean;
  clearAmountPerPercentage(): TariffExtraFees;

  getFixedAmount(): number;
  setFixedAmount(value: number): TariffExtraFees;
  hasFixedAmount(): boolean;
  clearFixedAmount(): TariffExtraFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffExtraFees.AsObject;
  static toObject(includeInstance: boolean, msg: TariffExtraFees): TariffExtraFees.AsObject;
  static serializeBinaryToWriter(message: TariffExtraFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffExtraFees;
  static deserializeBinaryFromReader(message: TariffExtraFees, reader: jspb.BinaryReader): TariffExtraFees;
}

export namespace TariffExtraFees {
  export type AsObject = {
    tariffId?: number,
    transCode?: string,
    description?: string,
    amountPerMeter?: number,
    amountPerPercentage?: number,
    fixedAmount?: number,
  }
}

export class ArrTariffExtraFees extends jspb.Message {
  getTariffextrafeesList(): Array<TariffExtraFees>;
  setTariffextrafeesList(value: Array<TariffExtraFees>): ArrTariffExtraFees;
  clearTariffextrafeesList(): ArrTariffExtraFees;
  addTariffextrafees(value?: TariffExtraFees, index?: number): TariffExtraFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTariffExtraFees.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTariffExtraFees): ArrTariffExtraFees.AsObject;
  static serializeBinaryToWriter(message: ArrTariffExtraFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTariffExtraFees;
  static deserializeBinaryFromReader(message: ArrTariffExtraFees, reader: jspb.BinaryReader): ArrTariffExtraFees;
}

export namespace ArrTariffExtraFees {
  export type AsObject = {
    tariffextrafeesList: Array<TariffExtraFees.AsObject>,
  }
}

export class TariffsData extends jspb.Message {
  getTariffs(): Tariffs | undefined;
  setTariffs(value?: Tariffs): TariffsData;
  hasTariffs(): boolean;
  clearTariffs(): TariffsData;

  getTariffbandsList(): Array<TariffBands>;
  setTariffbandsList(value: Array<TariffBands>): TariffsData;
  clearTariffbandsList(): TariffsData;
  addTariffbands(value?: TariffBands, index?: number): TariffBands;

  getTariffextrafeesList(): Array<TariffExtraFees>;
  setTariffextrafeesList(value: Array<TariffExtraFees>): TariffsData;
  clearTariffextrafeesList(): TariffsData;
  addTariffextrafees(value?: TariffExtraFees, index?: number): TariffExtraFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffsData.AsObject;
  static toObject(includeInstance: boolean, msg: TariffsData): TariffsData.AsObject;
  static serializeBinaryToWriter(message: TariffsData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffsData;
  static deserializeBinaryFromReader(message: TariffsData, reader: jspb.BinaryReader): TariffsData;
}

export namespace TariffsData {
  export type AsObject = {
    tariffs?: Tariffs.AsObject,
    tariffbandsList: Array<TariffBands.AsObject>,
    tariffextrafeesList: Array<TariffExtraFees.AsObject>,
  }
}

export class TariffCodeReq extends jspb.Message {
  getTariffCode(): string;
  setTariffCode(value: string): TariffCodeReq;
  hasTariffCode(): boolean;
  clearTariffCode(): TariffCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: TariffCodeReq): TariffCodeReq.AsObject;
  static serializeBinaryToWriter(message: TariffCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffCodeReq;
  static deserializeBinaryFromReader(message: TariffCodeReq, reader: jspb.BinaryReader): TariffCodeReq;
}

export namespace TariffCodeReq {
  export type AsObject = {
    tariffCode?: string,
  }
}

export class TariffsDataRes extends jspb.Message {
  getTariffsdataList(): Array<TariffsData>;
  setTariffsdataList(value: Array<TariffsData>): TariffsDataRes;
  clearTariffsdataList(): TariffsDataRes;
  addTariffsdata(value?: TariffsData, index?: number): TariffsData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffsDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: TariffsDataRes): TariffsDataRes.AsObject;
  static serializeBinaryToWriter(message: TariffsDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffsDataRes;
  static deserializeBinaryFromReader(message: TariffsDataRes, reader: jspb.BinaryReader): TariffsDataRes;
}

export namespace TariffsDataRes {
  export type AsObject = {
    tariffsdataList: Array<TariffsData.AsObject>,
  }
}

export class TariffIdReq extends jspb.Message {
  getTariffId(): string;
  setTariffId(value: string): TariffIdReq;
  hasTariffId(): boolean;
  clearTariffId(): TariffIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: TariffIdReq): TariffIdReq.AsObject;
  static serializeBinaryToWriter(message: TariffIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffIdReq;
  static deserializeBinaryFromReader(message: TariffIdReq, reader: jspb.BinaryReader): TariffIdReq;
}

export namespace TariffIdReq {
  export type AsObject = {
    tariffId?: string,
  }
}

export class ArrRegularCharges extends jspb.Message {
  getRegularchargesList(): Array<RegularCharge>;
  setRegularchargesList(value: Array<RegularCharge>): ArrRegularCharges;
  clearRegularchargesList(): ArrRegularCharges;
  addRegularcharges(value?: RegularCharge, index?: number): RegularCharge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrRegularCharges.AsObject;
  static toObject(includeInstance: boolean, msg: ArrRegularCharges): ArrRegularCharges.AsObject;
  static serializeBinaryToWriter(message: ArrRegularCharges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrRegularCharges;
  static deserializeBinaryFromReader(message: ArrRegularCharges, reader: jspb.BinaryReader): ArrRegularCharges;
}

export namespace ArrRegularCharges {
  export type AsObject = {
    regularchargesList: Array<RegularCharge.AsObject>,
  }
}

export class RegularChargeInfo extends jspb.Message {
  getRegularcharges(): RegularCharge | undefined;
  setRegularcharges(value?: RegularCharge): RegularChargeInfo;
  hasRegularcharges(): boolean;
  clearRegularcharges(): RegularChargeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeInfo): RegularChargeInfo.AsObject;
  static serializeBinaryToWriter(message: RegularChargeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeInfo;
  static deserializeBinaryFromReader(message: RegularChargeInfo, reader: jspb.BinaryReader): RegularChargeInfo;
}

export namespace RegularChargeInfo {
  export type AsObject = {
    regularcharges?: RegularCharge.AsObject,
  }
}

export class RegularChargeIdReq extends jspb.Message {
  getRegularChargeId(): string;
  setRegularChargeId(value: string): RegularChargeIdReq;
  hasRegularChargeId(): boolean;
  clearRegularChargeId(): RegularChargeIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeIdReq): RegularChargeIdReq.AsObject;
  static serializeBinaryToWriter(message: RegularChargeIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeIdReq;
  static deserializeBinaryFromReader(message: RegularChargeIdReq, reader: jspb.BinaryReader): RegularChargeIdReq;
}

export namespace RegularChargeIdReq {
  export type AsObject = {
    regularChargeId?: string,
  }
}

export class RegularChargeReq extends jspb.Message {
  getRegularChargeId(): string;
  setRegularChargeId(value: string): RegularChargeReq;
  hasRegularChargeId(): boolean;
  clearRegularChargeId(): RegularChargeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularChargeReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegularChargeReq): RegularChargeReq.AsObject;
  static serializeBinaryToWriter(message: RegularChargeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularChargeReq;
  static deserializeBinaryFromReader(message: RegularChargeReq, reader: jspb.BinaryReader): RegularChargeReq;
}

export namespace RegularChargeReq {
  export type AsObject = {
    regularChargeId?: string,
  }
}

export class RegularRelationEntity extends jspb.Message {
  getRegularChargeId(): string;
  setRegularChargeId(value: string): RegularRelationEntity;
  hasRegularChargeId(): boolean;
  clearRegularChargeId(): RegularRelationEntity;

  getReleationType(): ReleationType;
  setReleationType(value: ReleationType): RegularRelationEntity;
  hasReleationType(): boolean;
  clearReleationType(): RegularRelationEntity;

  getEntityType(): ENTITY_TYPE;
  setEntityType(value: ENTITY_TYPE): RegularRelationEntity;
  hasEntityType(): boolean;
  clearEntityType(): RegularRelationEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularRelationEntity.AsObject;
  static toObject(includeInstance: boolean, msg: RegularRelationEntity): RegularRelationEntity.AsObject;
  static serializeBinaryToWriter(message: RegularRelationEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularRelationEntity;
  static deserializeBinaryFromReader(message: RegularRelationEntity, reader: jspb.BinaryReader): RegularRelationEntity;
}

export namespace RegularRelationEntity {
  export type AsObject = {
    regularChargeId?: string,
    releationType?: ReleationType,
    entityType?: ENTITY_TYPE,
  }
}

export class ArrRegularRelationEntity extends jspb.Message {
  getRegularrelationentityList(): Array<RegularRelationEntity>;
  setRegularrelationentityList(value: Array<RegularRelationEntity>): ArrRegularRelationEntity;
  clearRegularrelationentityList(): ArrRegularRelationEntity;
  addRegularrelationentity(value?: RegularRelationEntity, index?: number): RegularRelationEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrRegularRelationEntity.AsObject;
  static toObject(includeInstance: boolean, msg: ArrRegularRelationEntity): ArrRegularRelationEntity.AsObject;
  static serializeBinaryToWriter(message: ArrRegularRelationEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrRegularRelationEntity;
  static deserializeBinaryFromReader(message: ArrRegularRelationEntity, reader: jspb.BinaryReader): ArrRegularRelationEntity;
}

export namespace ArrRegularRelationEntity {
  export type AsObject = {
    regularrelationentityList: Array<RegularRelationEntity.AsObject>,
  }
}

export class RegularRelationValues extends jspb.Message {
  getRegularChargeId(): string;
  setRegularChargeId(value: string): RegularRelationValues;
  hasRegularChargeId(): boolean;
  clearRegularChargeId(): RegularRelationValues;

  getEntityType(): ENTITY_TYPE;
  setEntityType(value: ENTITY_TYPE): RegularRelationValues;
  hasEntityType(): boolean;
  clearEntityType(): RegularRelationValues;

  getLuKey(): string;
  setLuKey(value: string): RegularRelationValues;
  hasLuKey(): boolean;
  clearLuKey(): RegularRelationValues;

  getRangeFrom(): number;
  setRangeFrom(value: number): RegularRelationValues;
  hasRangeFrom(): boolean;
  clearRangeFrom(): RegularRelationValues;

  getRangeTo(): number;
  setRangeTo(value: number): RegularRelationValues;
  hasRangeTo(): boolean;
  clearRangeTo(): RegularRelationValues;

  getValue(): number;
  setValue(value: number): RegularRelationValues;
  hasValue(): boolean;
  clearValue(): RegularRelationValues;

  getEnableValue(): boolean;
  setEnableValue(value: boolean): RegularRelationValues;
  hasEnableValue(): boolean;
  clearEnableValue(): RegularRelationValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegularRelationValues.AsObject;
  static toObject(includeInstance: boolean, msg: RegularRelationValues): RegularRelationValues.AsObject;
  static serializeBinaryToWriter(message: RegularRelationValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegularRelationValues;
  static deserializeBinaryFromReader(message: RegularRelationValues, reader: jspb.BinaryReader): RegularRelationValues;
}

export namespace RegularRelationValues {
  export type AsObject = {
    regularChargeId?: string,
    entityType?: ENTITY_TYPE,
    luKey?: string,
    rangeFrom?: number,
    rangeTo?: number,
    value?: number,
    enableValue?: boolean,
  }
}

export class ArrRegularRelationValues extends jspb.Message {
  getRegularrelationvaluesList(): Array<RegularRelationValues>;
  setRegularrelationvaluesList(value: Array<RegularRelationValues>): ArrRegularRelationValues;
  clearRegularrelationvaluesList(): ArrRegularRelationValues;
  addRegularrelationvalues(value?: RegularRelationValues, index?: number): RegularRelationValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrRegularRelationValues.AsObject;
  static toObject(includeInstance: boolean, msg: ArrRegularRelationValues): ArrRegularRelationValues.AsObject;
  static serializeBinaryToWriter(message: ArrRegularRelationValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrRegularRelationValues;
  static deserializeBinaryFromReader(message: ArrRegularRelationValues, reader: jspb.BinaryReader): ArrRegularRelationValues;
}

export namespace ArrRegularRelationValues {
  export type AsObject = {
    regularrelationvaluesList: Array<RegularRelationValues.AsObject>,
  }
}

export class TransCodesData extends jspb.Message {
  getId(): number;
  setId(value: number): TransCodesData;
  hasId(): boolean;
  clearId(): TransCodesData;

  getName(): string;
  setName(value: string): TransCodesData;
  hasName(): boolean;
  clearName(): TransCodesData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransCodesData.AsObject;
  static toObject(includeInstance: boolean, msg: TransCodesData): TransCodesData.AsObject;
  static serializeBinaryToWriter(message: TransCodesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransCodesData;
  static deserializeBinaryFromReader(message: TransCodesData, reader: jspb.BinaryReader): TransCodesData;
}

export namespace TransCodesData {
  export type AsObject = {
    id?: number,
    name?: string,
  }
}

export class TransCodesRes extends jspb.Message {
  getTranscodesdataList(): Array<TransCodesData>;
  setTranscodesdataList(value: Array<TransCodesData>): TransCodesRes;
  clearTranscodesdataList(): TransCodesRes;
  addTranscodesdata(value?: TransCodesData, index?: number): TransCodesData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransCodesRes.AsObject;
  static toObject(includeInstance: boolean, msg: TransCodesRes): TransCodesRes.AsObject;
  static serializeBinaryToWriter(message: TransCodesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransCodesRes;
  static deserializeBinaryFromReader(message: TransCodesRes, reader: jspb.BinaryReader): TransCodesRes;
}

export namespace TransCodesRes {
  export type AsObject = {
    transcodesdataList: Array<TransCodesData.AsObject>,
  }
}

export class CTGConsumptionServiceTariff extends jspb.Message {
  getCtypeid(): string;
  setCtypeid(value: string): CTGConsumptionServiceTariff;
  hasCtypeid(): boolean;
  clearCtypeid(): CTGConsumptionServiceTariff;

  getServicetype(): number;
  setServicetype(value: number): CTGConsumptionServiceTariff;
  hasServicetype(): boolean;
  clearServicetype(): CTGConsumptionServiceTariff;

  getTranscode(): string;
  setTranscode(value: string): CTGConsumptionServiceTariff;
  hasTranscode(): boolean;
  clearTranscode(): CTGConsumptionServiceTariff;

  getTariffid(): string;
  setTariffid(value: string): CTGConsumptionServiceTariff;
  hasTariffid(): boolean;
  clearTariffid(): CTGConsumptionServiceTariff;

  getCtypegrpid(): string;
  setCtypegrpid(value: string): CTGConsumptionServiceTariff;
  hasCtypegrpid(): boolean;
  clearCtypegrpid(): CTGConsumptionServiceTariff;

  getIszerotariff(): boolean;
  setIszerotariff(value: boolean): CTGConsumptionServiceTariff;
  hasIszerotariff(): boolean;
  clearIszerotariff(): CTGConsumptionServiceTariff;

  getTaxpercentage(): number;
  setTaxpercentage(value: number): CTGConsumptionServiceTariff;
  hasTaxpercentage(): boolean;
  clearTaxpercentage(): CTGConsumptionServiceTariff;

  getDiscountpercentage(): number;
  setDiscountpercentage(value: number): CTGConsumptionServiceTariff;
  hasDiscountpercentage(): boolean;
  clearDiscountpercentage(): CTGConsumptionServiceTariff;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTGConsumptionServiceTariff.AsObject;
  static toObject(includeInstance: boolean, msg: CTGConsumptionServiceTariff): CTGConsumptionServiceTariff.AsObject;
  static serializeBinaryToWriter(message: CTGConsumptionServiceTariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTGConsumptionServiceTariff;
  static deserializeBinaryFromReader(message: CTGConsumptionServiceTariff, reader: jspb.BinaryReader): CTGConsumptionServiceTariff;
}

export namespace CTGConsumptionServiceTariff {
  export type AsObject = {
    ctypeid?: string,
    servicetype?: number,
    transcode?: string,
    tariffid?: string,
    ctypegrpid?: string,
    iszerotariff?: boolean,
    taxpercentage?: number,
    discountpercentage?: number,
  }
}

export class ArrCTGConsumptionServiceTariff extends jspb.Message {
  getCtgconsumptionservicetariffList(): Array<CTGConsumptionServiceTariff>;
  setCtgconsumptionservicetariffList(value: Array<CTGConsumptionServiceTariff>): ArrCTGConsumptionServiceTariff;
  clearCtgconsumptionservicetariffList(): ArrCTGConsumptionServiceTariff;
  addCtgconsumptionservicetariff(value?: CTGConsumptionServiceTariff, index?: number): CTGConsumptionServiceTariff;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCTGConsumptionServiceTariff.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCTGConsumptionServiceTariff): ArrCTGConsumptionServiceTariff.AsObject;
  static serializeBinaryToWriter(message: ArrCTGConsumptionServiceTariff, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCTGConsumptionServiceTariff;
  static deserializeBinaryFromReader(message: ArrCTGConsumptionServiceTariff, reader: jspb.BinaryReader): ArrCTGConsumptionServiceTariff;
}

export namespace ArrCTGConsumptionServiceTariff {
  export type AsObject = {
    ctgconsumptionservicetariffList: Array<CTGConsumptionServiceTariff.AsObject>,
  }
}

export enum VERION { 
  PROTO_VERSION = 57,
}
export enum MeterOperationStatus { 
  WORKING = 0,
  NOT_WORKING = 1,
}
export enum SERVICE_TYPE { 
  WATER = 0,
  SEWER = 1,
  ELECTRICITY = 2,
  GAS = 3,
  HYDRANT = 4,
  FIRE = 5,
}
export enum CONNECTION_STATUS_TYPE { 
  CONNECTED_WITHOUT_METER = 0,
  CONNECTED_WITH_METER = 1,
  DISCONNECTED_WITH_METER = 2,
  DISCONNECTED_WITHOUT_METER = 3,
}
export enum READING_TYPE { 
  ACTUAL = 0,
  AVERAGE = 1,
  ESTIMATE = 2,
}
export enum RegularChargePeriod { 
  BILL = 1,
  MONTHLY = 2,
}
export enum ENTITY_TYPE { 
  CTYPE = 1,
  CTYPE_GROUP = 2,
  CUSTOMER_TYPE = 3,
  CUSTOMER_FLAG1 = 4,
  CUSTOMER_FLAG2 = 5,
  CUSTOMER_FLAG3 = 6,
  CUSTOMER_FLAG4 = 7,
  CUSTOMER_FLAG5 = 8,
  PROPERTY_VACATED = 9,
  PROPERTY_FLAG1 = 10,
  PROPERTY_FLAG2 = 11,
  PROPERTY_FLAG3 = 12,
  PROPERTY_FLAG4 = 13,
  PROPERTY_FLAG5 = 14,
  CONNECTION_DIAMETER = 15,
  CONNECTION_STATUS = 16,
  CONNECTION_ISBULK_METER = 18,
  METER_DIAMETER = 19,
  SERVICE = 20,
  TOWINSHIP = 21,
  CONSUMPTION = 22,
}
export enum ChargeRegularCalcStrategy { 
  EACH_ONE = 0,
  SUM_ALL = 1,
  MAIN_CTYPE = 2,
  HIGHTEST_AMOUNT = 3,
  LOWEST_AMOUNT = 4,
  DUPPLICATE_EACH_CTYPE = 5,
  DUPPLICATE_EACH_CTYPE_GROUP = 6,
}
export enum ChargeType { 
  FIXED = 0,
  RELATION = 1,
}
export enum ReleationType { 
  ENABLE_RELEATION = 1,
  CHARGE_RELEATION = 2,
}
export enum ENTITY_CATEGORY_TYPE { 
  UNKNOWN_CATEGORY = 0,
  LOOKUP = 1,
  RANGE = 2,
}
export enum FLAGS_TYPES { 
  UNKNOWN_FLAG = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}
export enum PROPERTY_VACATED_TYPES { 
  UNKNOWN_PROPERTY = 0,
  VACATED = 1,
  NOT_VACATED = 2,
}
export enum TransCodes { 
  WATER_AMT = 0,
  SEWER_AMT = 1,
  BASIC_AMT = 2,
  TANZEEM_AMT = 3,
  TAX_AMT = 4,
  CRDT_AMT = 5,
  DBT_AMT = 6,
  CLEAN_AMT = 7,
  ROUND_AMT = 8,
  OTHER_AMT = 9,
  ADMIN_AMT = 10,
  CONTRACT_AMT = 11,
  INITIAL_AMT = 12,
}
