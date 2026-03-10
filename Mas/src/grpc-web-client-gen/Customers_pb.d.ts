import * as jspb from 'google-protobuf'

import * as date_pb from './date_pb'; // proto import: "date.proto"
import * as queries_pb from './queries_pb'; // proto import: "queries.proto"


export class EditOrderSeqCustomersReq extends jspb.Message {
  getItemsList(): Array<EditOrderSeqCustomersReqItem>;
  setItemsList(value: Array<EditOrderSeqCustomersReqItem>): EditOrderSeqCustomersReq;
  clearItemsList(): EditOrderSeqCustomersReq;
  addItems(value?: EditOrderSeqCustomersReqItem, index?: number): EditOrderSeqCustomersReqItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditOrderSeqCustomersReq.AsObject;
  static toObject(includeInstance: boolean, msg: EditOrderSeqCustomersReq): EditOrderSeqCustomersReq.AsObject;
  static serializeBinaryToWriter(message: EditOrderSeqCustomersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditOrderSeqCustomersReq;
  static deserializeBinaryFromReader(message: EditOrderSeqCustomersReq, reader: jspb.BinaryReader): EditOrderSeqCustomersReq;
}

export namespace EditOrderSeqCustomersReq {
  export type AsObject = {
    itemsList: Array<EditOrderSeqCustomersReqItem.AsObject>,
  }
}

export class GetBillGroupsStatusReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetBillGroupsStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillGroupsStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillGroupsStatusReq): GetBillGroupsStatusReq.AsObject;
  static serializeBinaryToWriter(message: GetBillGroupsStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillGroupsStatusReq;
  static deserializeBinaryFromReader(message: GetBillGroupsStatusReq, reader: jspb.BinaryReader): GetBillGroupsStatusReq;
}

export namespace GetBillGroupsStatusReq {
  export type AsObject = {
    custkey: string,
  }
}

export class BillingGroupStatusResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): BillingGroupStatusResponse;
  hasStatus(): boolean;
  clearStatus(): BillingGroupStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingGroupStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BillingGroupStatusResponse): BillingGroupStatusResponse.AsObject;
  static serializeBinaryToWriter(message: BillingGroupStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingGroupStatusResponse;
  static deserializeBinaryFromReader(message: BillingGroupStatusResponse, reader: jspb.BinaryReader): BillingGroupStatusResponse;
}

export namespace BillingGroupStatusResponse {
  export type AsObject = {
    status?: boolean,
  }
}

export class SaveCustomer_OldKeyReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): SaveCustomer_OldKeyReq;
  hasCustkey(): boolean;
  clearCustkey(): SaveCustomer_OldKeyReq;

  getStationNo(): number;
  setStationNo(value: number): SaveCustomer_OldKeyReq;
  hasStationNo(): boolean;
  clearStationNo(): SaveCustomer_OldKeyReq;

  getGroupId(): string;
  setGroupId(value: string): SaveCustomer_OldKeyReq;
  hasGroupId(): boolean;
  clearGroupId(): SaveCustomer_OldKeyReq;

  getAreaCode(): string;
  setAreaCode(value: string): SaveCustomer_OldKeyReq;
  hasAreaCode(): boolean;
  clearAreaCode(): SaveCustomer_OldKeyReq;

  getFileNumber(): string;
  setFileNumber(value: string): SaveCustomer_OldKeyReq;
  hasFileNumber(): boolean;
  clearFileNumber(): SaveCustomer_OldKeyReq;

  getBuildingNumber(): string;
  setBuildingNumber(value: string): SaveCustomer_OldKeyReq;
  hasBuildingNumber(): boolean;
  clearBuildingNumber(): SaveCustomer_OldKeyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveCustomer_OldKeyReq.AsObject;
  static toObject(includeInstance: boolean, msg: SaveCustomer_OldKeyReq): SaveCustomer_OldKeyReq.AsObject;
  static serializeBinaryToWriter(message: SaveCustomer_OldKeyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveCustomer_OldKeyReq;
  static deserializeBinaryFromReader(message: SaveCustomer_OldKeyReq, reader: jspb.BinaryReader): SaveCustomer_OldKeyReq;
}

export namespace SaveCustomer_OldKeyReq {
  export type AsObject = {
    custkey?: string,
    stationNo?: number,
    groupId?: string,
    areaCode?: string,
    fileNumber?: string,
    buildingNumber?: string,
  }
}

export class SaveCustomer_OldKeyRes extends jspb.Message {
  getBillgroup(): string;
  setBillgroup(value: string): SaveCustomer_OldKeyRes;
  hasBillgroup(): boolean;
  clearBillgroup(): SaveCustomer_OldKeyRes;

  getSurname(): string;
  setSurname(value: string): SaveCustomer_OldKeyRes;
  hasSurname(): boolean;
  clearSurname(): SaveCustomer_OldKeyRes;

  getStationNo(): number;
  setStationNo(value: number): SaveCustomer_OldKeyRes;
  hasStationNo(): boolean;
  clearStationNo(): SaveCustomer_OldKeyRes;

  getBookNo(): string;
  setBookNo(value: string): SaveCustomer_OldKeyRes;
  hasBookNo(): boolean;
  clearBookNo(): SaveCustomer_OldKeyRes;

  getUaAddress(): string;
  setUaAddress(value: string): SaveCustomer_OldKeyRes;
  hasUaAddress(): boolean;
  clearUaAddress(): SaveCustomer_OldKeyRes;

  getNoUnits(): number;
  setNoUnits(value: number): SaveCustomer_OldKeyRes;
  hasNoUnits(): boolean;
  clearNoUnits(): SaveCustomer_OldKeyRes;

  getMeterCondition(): string;
  setMeterCondition(value: string): SaveCustomer_OldKeyRes;
  hasMeterCondition(): boolean;
  clearMeterCondition(): SaveCustomer_OldKeyRes;

  getCType(): string;
  setCType(value: string): SaveCustomer_OldKeyRes;
  hasCType(): boolean;
  clearCType(): SaveCustomer_OldKeyRes;

  getMeterType(): string;
  setMeterType(value: string): SaveCustomer_OldKeyRes;
  hasMeterType(): boolean;
  clearMeterType(): SaveCustomer_OldKeyRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveCustomer_OldKeyRes.AsObject;
  static toObject(includeInstance: boolean, msg: SaveCustomer_OldKeyRes): SaveCustomer_OldKeyRes.AsObject;
  static serializeBinaryToWriter(message: SaveCustomer_OldKeyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveCustomer_OldKeyRes;
  static deserializeBinaryFromReader(message: SaveCustomer_OldKeyRes, reader: jspb.BinaryReader): SaveCustomer_OldKeyRes;
}

export namespace SaveCustomer_OldKeyRes {
  export type AsObject = {
    billgroup?: string,
    surname?: string,
    stationNo?: number,
    bookNo?: string,
    uaAddress?: string,
    noUnits?: number,
    meterCondition?: string,
    cType?: string,
    meterType?: string,
  }
}

export class EditOrderSeqCustomersReqItem extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditOrderSeqCustomersReqItem;

  getOrderSeq(): number;
  setOrderSeq(value: number): EditOrderSeqCustomersReqItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditOrderSeqCustomersReqItem.AsObject;
  static toObject(includeInstance: boolean, msg: EditOrderSeqCustomersReqItem): EditOrderSeqCustomersReqItem.AsObject;
  static serializeBinaryToWriter(message: EditOrderSeqCustomersReqItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditOrderSeqCustomersReqItem;
  static deserializeBinaryFromReader(message: EditOrderSeqCustomersReqItem, reader: jspb.BinaryReader): EditOrderSeqCustomersReqItem;
}

export namespace EditOrderSeqCustomersReqItem {
  export type AsObject = {
    custkey: string,
    orderSeq: number,
  }
}

export class CustomersByBillGroupBookWalkReq extends jspb.Message {
  getBillgroup(): string;
  setBillgroup(value: string): CustomersByBillGroupBookWalkReq;

  getBookNo(): string;
  setBookNo(value: string): CustomersByBillGroupBookWalkReq;

  getWalkNo(): number;
  setWalkNo(value: number): CustomersByBillGroupBookWalkReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomersByBillGroupBookWalkReq.AsObject;
  static toObject(includeInstance: boolean, msg: CustomersByBillGroupBookWalkReq): CustomersByBillGroupBookWalkReq.AsObject;
  static serializeBinaryToWriter(message: CustomersByBillGroupBookWalkReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomersByBillGroupBookWalkReq;
  static deserializeBinaryFromReader(message: CustomersByBillGroupBookWalkReq, reader: jspb.BinaryReader): CustomersByBillGroupBookWalkReq;
}

export namespace CustomersByBillGroupBookWalkReq {
  export type AsObject = {
    billgroup: string,
    bookNo: string,
    walkNo: number,
  }
}

export class CUSTOMERS_ARR extends jspb.Message {
  getCustomersList(): Array<CUSTOMER_RESPONSE>;
  setCustomersList(value: Array<CUSTOMER_RESPONSE>): CUSTOMERS_ARR;
  clearCustomersList(): CUSTOMERS_ARR;
  addCustomers(value?: CUSTOMER_RESPONSE, index?: number): CUSTOMER_RESPONSE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMERS_ARR.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMERS_ARR): CUSTOMERS_ARR.AsObject;
  static serializeBinaryToWriter(message: CUSTOMERS_ARR, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMERS_ARR;
  static deserializeBinaryFromReader(message: CUSTOMERS_ARR, reader: jspb.BinaryReader): CUSTOMERS_ARR;
}

export namespace CUSTOMERS_ARR {
  export type AsObject = {
    customersList: Array<CUSTOMER_RESPONSE.AsObject>,
  }
}

export class CUSTOMER_RESPONSE extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_RESPONSE;

  getAddress(): string;
  setAddress(value: string): CUSTOMER_RESPONSE;
  hasAddress(): boolean;
  clearAddress(): CUSTOMER_RESPONSE;

  getFullName(): string;
  setFullName(value: string): CUSTOMER_RESPONSE;
  hasFullName(): boolean;
  clearFullName(): CUSTOMER_RESPONSE;

  getOrderSeq(): number;
  setOrderSeq(value: number): CUSTOMER_RESPONSE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_RESPONSE.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_RESPONSE): CUSTOMER_RESPONSE.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_RESPONSE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_RESPONSE;
  static deserializeBinaryFromReader(message: CUSTOMER_RESPONSE, reader: jspb.BinaryReader): CUSTOMER_RESPONSE;
}

export namespace CUSTOMER_RESPONSE {
  export type AsObject = {
    custkey: string,
    address?: string,
    fullName?: string,
    orderSeq: number,
  }
}

export class ReportCustomersSitesResponse extends jspb.Message {
  getItemsMap(): jspb.Map<number, number>;
  clearItemsMap(): ReportCustomersSitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportCustomersSitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportCustomersSitesResponse): ReportCustomersSitesResponse.AsObject;
  static serializeBinaryToWriter(message: ReportCustomersSitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportCustomersSitesResponse;
  static deserializeBinaryFromReader(message: ReportCustomersSitesResponse, reader: jspb.BinaryReader): ReportCustomersSitesResponse;
}

export namespace ReportCustomersSitesResponse {
  export type AsObject = {
    itemsMap: Array<[number, number]>,
  }
}

export class STATIONS_NOS extends jspb.Message {
  getStationsList(): Array<number>;
  setStationsList(value: Array<number>): STATIONS_NOS;
  clearStationsList(): STATIONS_NOS;
  addStations(value: number, index?: number): STATIONS_NOS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STATIONS_NOS.AsObject;
  static toObject(includeInstance: boolean, msg: STATIONS_NOS): STATIONS_NOS.AsObject;
  static serializeBinaryToWriter(message: STATIONS_NOS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STATIONS_NOS;
  static deserializeBinaryFromReader(message: STATIONS_NOS, reader: jspb.BinaryReader): STATIONS_NOS;
}

export namespace STATIONS_NOS {
  export type AsObject = {
    stationsList: Array<number>,
  }
}

export class GetCountCustomerByStationNoResponse extends jspb.Message {
  getCustomerscount(): number;
  setCustomerscount(value: number): GetCountCustomerByStationNoResponse;
  hasCustomerscount(): boolean;
  clearCustomerscount(): GetCountCustomerByStationNoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountCustomerByStationNoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountCustomerByStationNoResponse): GetCountCustomerByStationNoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountCustomerByStationNoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountCustomerByStationNoResponse;
  static deserializeBinaryFromReader(message: GetCountCustomerByStationNoResponse, reader: jspb.BinaryReader): GetCountCustomerByStationNoResponse;
}

export namespace GetCountCustomerByStationNoResponse {
  export type AsObject = {
    customerscount?: number,
  }
}

export class ImportAllDataFromBillingREQ extends jspb.Message {
  getFromImporter(): boolean;
  setFromImporter(value: boolean): ImportAllDataFromBillingREQ;
  hasFromImporter(): boolean;
  clearFromImporter(): ImportAllDataFromBillingREQ;

  getGeneratedId(): number;
  setGeneratedId(value: number): ImportAllDataFromBillingREQ;

  getCityCode(): number;
  setCityCode(value: number): ImportAllDataFromBillingREQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportAllDataFromBillingREQ.AsObject;
  static toObject(includeInstance: boolean, msg: ImportAllDataFromBillingREQ): ImportAllDataFromBillingREQ.AsObject;
  static serializeBinaryToWriter(message: ImportAllDataFromBillingREQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportAllDataFromBillingREQ;
  static deserializeBinaryFromReader(message: ImportAllDataFromBillingREQ, reader: jspb.BinaryReader): ImportAllDataFromBillingREQ;
}

export namespace ImportAllDataFromBillingREQ {
  export type AsObject = {
    fromImporter?: boolean,
    generatedId: number,
    cityCode: number,
  }
}

export class MessageCustResp extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): MessageCustResp;

  getCustomersList(): Array<CST_CUSTOMERS>;
  setCustomersList(value: Array<CST_CUSTOMERS>): MessageCustResp;
  clearCustomersList(): MessageCustResp;
  addCustomers(value?: CST_CUSTOMERS, index?: number): CST_CUSTOMERS;

  getWithCustomer(): boolean;
  setWithCustomer(value: boolean): MessageCustResp;
  hasWithCustomer(): boolean;
  clearWithCustomer(): MessageCustResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageCustResp.AsObject;
  static toObject(includeInstance: boolean, msg: MessageCustResp): MessageCustResp.AsObject;
  static serializeBinaryToWriter(message: MessageCustResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageCustResp;
  static deserializeBinaryFromReader(message: MessageCustResp, reader: jspb.BinaryReader): MessageCustResp;
}

export namespace MessageCustResp {
  export type AsObject = {
    msg: string,
    customersList: Array<CST_CUSTOMERS.AsObject>,
    withCustomer?: boolean,
  }
}

export class Exists extends jspb.Message {
  getFound(): boolean;
  setFound(value: boolean): Exists;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exists.AsObject;
  static toObject(includeInstance: boolean, msg: Exists): Exists.AsObject;
  static serializeBinaryToWriter(message: Exists, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exists;
  static deserializeBinaryFromReader(message: Exists, reader: jspb.BinaryReader): Exists;
}

export namespace Exists {
  export type AsObject = {
    found: boolean,
  }
}

export class ServiceName extends jspb.Message {
  getServicename(): string;
  setServicename(value: string): ServiceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceName.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceName): ServiceName.AsObject;
  static serializeBinaryToWriter(message: ServiceName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceName;
  static deserializeBinaryFromReader(message: ServiceName, reader: jspb.BinaryReader): ServiceName;
}

export namespace ServiceName {
  export type AsObject = {
    servicename: string,
  }
}

export class SurNameRq extends jspb.Message {
  getSurname(): string;
  setSurname(value: string): SurNameRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurNameRq.AsObject;
  static toObject(includeInstance: boolean, msg: SurNameRq): SurNameRq.AsObject;
  static serializeBinaryToWriter(message: SurNameRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurNameRq;
  static deserializeBinaryFromReader(message: SurNameRq, reader: jspb.BinaryReader): SurNameRq;
}

export namespace SurNameRq {
  export type AsObject = {
    surname: string,
  }
}

export class MessageResp extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): MessageResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResp): MessageResp.AsObject;
  static serializeBinaryToWriter(message: MessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResp;
  static deserializeBinaryFromReader(message: MessageResp, reader: jspb.BinaryReader): MessageResp;
}

export namespace MessageResp {
  export type AsObject = {
    msg: string,
  }
}

export class Version extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    version: string,
  }
}

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

export class CST_CUSTOMERS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CST_CUSTOMERS;

  getCustkey(): string;
  setCustkey(value: string): CST_CUSTOMERS;

  getBillgroup(): string;
  setBillgroup(value: string): CST_CUSTOMERS;

  getBookNo(): string;
  setBookNo(value: string): CST_CUSTOMERS;

  getWalkNo(): number;
  setWalkNo(value: number): CST_CUSTOMERS;

  getSurname(): string;
  setSurname(value: string): CST_CUSTOMERS;

  getUaAddress(): string;
  setUaAddress(value: string): CST_CUSTOMERS;

  getNationalId(): string;
  setNationalId(value: string): CST_CUSTOMERS;
  hasNationalId(): boolean;
  clearNationalId(): CST_CUSTOMERS;

  getOldKey(): string;
  setOldKey(value: string): CST_CUSTOMERS;
  hasOldKey(): boolean;
  clearOldKey(): CST_CUSTOMERS;

  getEMail(): string;
  setEMail(value: string): CST_CUSTOMERS;
  hasEMail(): boolean;
  clearEMail(): CST_CUSTOMERS;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CUSTOMERS;

  getStampUser(): string;
  setStampUser(value: string): CST_CUSTOMERS;
  hasStampUser(): boolean;
  clearStampUser(): CST_CUSTOMERS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CUSTOMERS;
  hasStampDate(): boolean;
  clearStampDate(): CST_CUSTOMERS;

  getStationName(): string;
  setStationName(value: string): CST_CUSTOMERS;
  hasStationName(): boolean;
  clearStationName(): CST_CUSTOMERS;

  getCustomerFlag(): string;
  setCustomerFlag(value: string): CST_CUSTOMERS;
  hasCustomerFlag(): boolean;
  clearCustomerFlag(): CST_CUSTOMERS;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CST_CUSTOMERS;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): CST_CUSTOMERS;

  getPassportId(): string;
  setPassportId(value: string): CST_CUSTOMERS;
  hasPassportId(): boolean;
  clearPassportId(): CST_CUSTOMERS;

  getMobileNo(): string;
  setMobileNo(value: string): CST_CUSTOMERS;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_CUSTOMERS;

  getTaxNo(): string;
  setTaxNo(value: string): CST_CUSTOMERS;
  hasTaxNo(): boolean;
  clearTaxNo(): CST_CUSTOMERS;

  getParentCustkey(): string;
  setParentCustkey(value: string): CST_CUSTOMERS;
  hasParentCustkey(): boolean;
  clearParentCustkey(): CST_CUSTOMERS;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_CUSTOMERS;
  hasIsPrepaid(): boolean;
  clearIsPrepaid(): CST_CUSTOMERS;

  getFirstName(): string;
  setFirstName(value: string): CST_CUSTOMERS;
  hasFirstName(): boolean;
  clearFirstName(): CST_CUSTOMERS;

  getSecondName(): string;
  setSecondName(value: string): CST_CUSTOMERS;
  hasSecondName(): boolean;
  clearSecondName(): CST_CUSTOMERS;

  getThirdName(): string;
  setThirdName(value: string): CST_CUSTOMERS;
  hasThirdName(): boolean;
  clearThirdName(): CST_CUSTOMERS;

  getFourthName(): string;
  setFourthName(value: string): CST_CUSTOMERS;
  hasFourthName(): boolean;
  clearFourthName(): CST_CUSTOMERS;

  getFullName(): string;
  setFullName(value: string): CST_CUSTOMERS;
  hasFullName(): boolean;
  clearFullName(): CST_CUSTOMERS;

  getGovAddress(): string;
  setGovAddress(value: string): CST_CUSTOMERS;
  hasGovAddress(): boolean;
  clearGovAddress(): CST_CUSTOMERS;

  getCityAddress(): string;
  setCityAddress(value: string): CST_CUSTOMERS;
  hasCityAddress(): boolean;
  clearCityAddress(): CST_CUSTOMERS;

  getDistricAddress(): string;
  setDistricAddress(value: string): CST_CUSTOMERS;
  hasDistricAddress(): boolean;
  clearDistricAddress(): CST_CUSTOMERS;

  getAreaAddress(): string;
  setAreaAddress(value: string): CST_CUSTOMERS;
  hasAreaAddress(): boolean;
  clearAreaAddress(): CST_CUSTOMERS;

  getStreetAddress(): string;
  setStreetAddress(value: string): CST_CUSTOMERS;
  hasStreetAddress(): boolean;
  clearStreetAddress(): CST_CUSTOMERS;

  getBuildingAddress(): string;
  setBuildingAddress(value: string): CST_CUSTOMERS;
  hasBuildingAddress(): boolean;
  clearBuildingAddress(): CST_CUSTOMERS;

  getFloorAddress(): string;
  setFloorAddress(value: string): CST_CUSTOMERS;
  hasFloorAddress(): boolean;
  clearFloorAddress(): CST_CUSTOMERS;

  getFlatAddress(): string;
  setFlatAddress(value: string): CST_CUSTOMERS;
  hasFlatAddress(): boolean;
  clearFlatAddress(): CST_CUSTOMERS;

  getFinalAddress(): string;
  setFinalAddress(value: string): CST_CUSTOMERS;
  hasFinalAddress(): boolean;
  clearFinalAddress(): CST_CUSTOMERS;

  getDateOfbirth(): date_pb.MasDateTime | undefined;
  setDateOfbirth(value?: date_pb.MasDateTime): CST_CUSTOMERS;
  hasDateOfbirth(): boolean;
  clearDateOfbirth(): CST_CUSTOMERS;

  getHasWater(): boolean;
  setHasWater(value: boolean): CST_CUSTOMERS;
  hasHasWater(): boolean;
  clearHasWater(): CST_CUSTOMERS;

  getHasSewer(): boolean;
  setHasSewer(value: boolean): CST_CUSTOMERS;
  hasHasSewer(): boolean;
  clearHasSewer(): CST_CUSTOMERS;

  getUaAdress5(): string;
  setUaAdress5(value: string): CST_CUSTOMERS;
  hasUaAdress5(): boolean;
  clearUaAdress5(): CST_CUSTOMERS;

  getSerialNo(): string;
  setSerialNo(value: string): CST_CUSTOMERS;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_CUSTOMERS;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_CUSTOMERS;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_CUSTOMERS;

  getCustkeyImport(): string;
  setCustkeyImport(value: string): CST_CUSTOMERS;
  hasCustkeyImport(): boolean;
  clearCustkeyImport(): CST_CUSTOMERS;

  getStationNoImport(): number;
  setStationNoImport(value: number): CST_CUSTOMERS;
  hasStationNoImport(): boolean;
  clearStationNoImport(): CST_CUSTOMERS;

  getBillgroupImport(): string;
  setBillgroupImport(value: string): CST_CUSTOMERS;
  hasBillgroupImport(): boolean;
  clearBillgroupImport(): CST_CUSTOMERS;

  getBookNoImport(): string;
  setBookNoImport(value: string): CST_CUSTOMERS;
  hasBookNoImport(): boolean;
  clearBookNoImport(): CST_CUSTOMERS;

  getPrevCustkeyImport(): string;
  setPrevCustkeyImport(value: string): CST_CUSTOMERS;
  hasPrevCustkeyImport(): boolean;
  clearPrevCustkeyImport(): CST_CUSTOMERS;

  getOldKeyImport(): string;
  setOldKeyImport(value: string): CST_CUSTOMERS;
  hasOldKeyImport(): boolean;
  clearOldKeyImport(): CST_CUSTOMERS;

  getCrNo(): string;
  setCrNo(value: string): CST_CUSTOMERS;
  hasCrNo(): boolean;
  clearCrNo(): CST_CUSTOMERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CUSTOMERS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CUSTOMERS): CST_CUSTOMERS.AsObject;
  static serializeBinaryToWriter(message: CST_CUSTOMERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CUSTOMERS;
  static deserializeBinaryFromReader(message: CST_CUSTOMERS, reader: jspb.BinaryReader): CST_CUSTOMERS;
}

export namespace CST_CUSTOMERS {
  export type AsObject = {
    stationNo: number,
    custkey: string,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    surname: string,
    uaAddress: string,
    nationalId?: string,
    oldKey?: string,
    eMail?: string,
    seqNo: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stationName?: string,
    customerFlag?: string,
    prevCustkey?: string,
    passportId?: string,
    mobileNo?: string,
    taxNo?: string,
    parentCustkey?: string,
    isPrepaid?: boolean,
    firstName?: string,
    secondName?: string,
    thirdName?: string,
    fourthName?: string,
    fullName?: string,
    govAddress?: string,
    cityAddress?: string,
    districAddress?: string,
    areaAddress?: string,
    streetAddress?: string,
    buildingAddress?: string,
    floorAddress?: string,
    flatAddress?: string,
    finalAddress?: string,
    dateOfbirth?: date_pb.MasDateTime.AsObject,
    hasWater?: boolean,
    hasSewer?: boolean,
    uaAdress5?: string,
    serialNo?: string,
    meterTagNo?: string,
    custkeyImport?: string,
    stationNoImport?: number,
    billgroupImport?: string,
    bookNoImport?: string,
    prevCustkeyImport?: string,
    oldKeyImport?: string,
    crNo?: string,
  }
}

export class CST_CUSTOMERS_SEARCH extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CST_CUSTOMERS_SEARCH;

  getCustkey(): string;
  setCustkey(value: string): CST_CUSTOMERS_SEARCH;

  getBillgroup(): string;
  setBillgroup(value: string): CST_CUSTOMERS_SEARCH;

  getBookNo(): string;
  setBookNo(value: string): CST_CUSTOMERS_SEARCH;

  getWalkNo(): number;
  setWalkNo(value: number): CST_CUSTOMERS_SEARCH;

  getSurname(): string;
  setSurname(value: string): CST_CUSTOMERS_SEARCH;

  getUaAddress(): string;
  setUaAddress(value: string): CST_CUSTOMERS_SEARCH;

  getNationalId(): string;
  setNationalId(value: string): CST_CUSTOMERS_SEARCH;
  hasNationalId(): boolean;
  clearNationalId(): CST_CUSTOMERS_SEARCH;

  getOldKey(): string;
  setOldKey(value: string): CST_CUSTOMERS_SEARCH;
  hasOldKey(): boolean;
  clearOldKey(): CST_CUSTOMERS_SEARCH;

  getEMail(): string;
  setEMail(value: string): CST_CUSTOMERS_SEARCH;
  hasEMail(): boolean;
  clearEMail(): CST_CUSTOMERS_SEARCH;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CUSTOMERS_SEARCH;

  getStampUser(): string;
  setStampUser(value: string): CST_CUSTOMERS_SEARCH;
  hasStampUser(): boolean;
  clearStampUser(): CST_CUSTOMERS_SEARCH;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CUSTOMERS_SEARCH;
  hasStampDate(): boolean;
  clearStampDate(): CST_CUSTOMERS_SEARCH;

  getCustomerFlag(): string;
  setCustomerFlag(value: string): CST_CUSTOMERS_SEARCH;
  hasCustomerFlag(): boolean;
  clearCustomerFlag(): CST_CUSTOMERS_SEARCH;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CST_CUSTOMERS_SEARCH;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): CST_CUSTOMERS_SEARCH;

  getPassportId(): string;
  setPassportId(value: string): CST_CUSTOMERS_SEARCH;
  hasPassportId(): boolean;
  clearPassportId(): CST_CUSTOMERS_SEARCH;

  getMobileNo(): string;
  setMobileNo(value: string): CST_CUSTOMERS_SEARCH;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_CUSTOMERS_SEARCH;

  getTaxNo(): string;
  setTaxNo(value: string): CST_CUSTOMERS_SEARCH;
  hasTaxNo(): boolean;
  clearTaxNo(): CST_CUSTOMERS_SEARCH;

  getParentCustkey(): string;
  setParentCustkey(value: string): CST_CUSTOMERS_SEARCH;
  hasParentCustkey(): boolean;
  clearParentCustkey(): CST_CUSTOMERS_SEARCH;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_CUSTOMERS_SEARCH;
  hasIsPrepaid(): boolean;
  clearIsPrepaid(): CST_CUSTOMERS_SEARCH;

  getFirstName(): string;
  setFirstName(value: string): CST_CUSTOMERS_SEARCH;
  hasFirstName(): boolean;
  clearFirstName(): CST_CUSTOMERS_SEARCH;

  getSecondName(): string;
  setSecondName(value: string): CST_CUSTOMERS_SEARCH;
  hasSecondName(): boolean;
  clearSecondName(): CST_CUSTOMERS_SEARCH;

  getThirdName(): string;
  setThirdName(value: string): CST_CUSTOMERS_SEARCH;
  hasThirdName(): boolean;
  clearThirdName(): CST_CUSTOMERS_SEARCH;

  getFourthName(): string;
  setFourthName(value: string): CST_CUSTOMERS_SEARCH;
  hasFourthName(): boolean;
  clearFourthName(): CST_CUSTOMERS_SEARCH;

  getFullName(): string;
  setFullName(value: string): CST_CUSTOMERS_SEARCH;
  hasFullName(): boolean;
  clearFullName(): CST_CUSTOMERS_SEARCH;

  getGovAddress(): string;
  setGovAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasGovAddress(): boolean;
  clearGovAddress(): CST_CUSTOMERS_SEARCH;

  getCityAddress(): string;
  setCityAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasCityAddress(): boolean;
  clearCityAddress(): CST_CUSTOMERS_SEARCH;

  getDistricAddress(): string;
  setDistricAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasDistricAddress(): boolean;
  clearDistricAddress(): CST_CUSTOMERS_SEARCH;

  getAreaAddress(): string;
  setAreaAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasAreaAddress(): boolean;
  clearAreaAddress(): CST_CUSTOMERS_SEARCH;

  getStreetAddress(): string;
  setStreetAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasStreetAddress(): boolean;
  clearStreetAddress(): CST_CUSTOMERS_SEARCH;

  getBuildingAddress(): string;
  setBuildingAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasBuildingAddress(): boolean;
  clearBuildingAddress(): CST_CUSTOMERS_SEARCH;

  getFloorAddress(): string;
  setFloorAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasFloorAddress(): boolean;
  clearFloorAddress(): CST_CUSTOMERS_SEARCH;

  getFlatAddress(): string;
  setFlatAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasFlatAddress(): boolean;
  clearFlatAddress(): CST_CUSTOMERS_SEARCH;

  getFinalAddress(): string;
  setFinalAddress(value: string): CST_CUSTOMERS_SEARCH;
  hasFinalAddress(): boolean;
  clearFinalAddress(): CST_CUSTOMERS_SEARCH;

  getDateOfbirth(): date_pb.MasDateTime | undefined;
  setDateOfbirth(value?: date_pb.MasDateTime): CST_CUSTOMERS_SEARCH;
  hasDateOfbirth(): boolean;
  clearDateOfbirth(): CST_CUSTOMERS_SEARCH;

  getUaAdress5(): string;
  setUaAdress5(value: string): CST_CUSTOMERS_SEARCH;
  hasUaAdress5(): boolean;
  clearUaAdress5(): CST_CUSTOMERS_SEARCH;

  getSerialNo(): string;
  setSerialNo(value: string): CST_CUSTOMERS_SEARCH;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_CUSTOMERS_SEARCH;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_CUSTOMERS_SEARCH;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_CUSTOMERS_SEARCH;

  getCustkeyImport(): string;
  setCustkeyImport(value: string): CST_CUSTOMERS_SEARCH;
  hasCustkeyImport(): boolean;
  clearCustkeyImport(): CST_CUSTOMERS_SEARCH;

  getStationNoImport(): number;
  setStationNoImport(value: number): CST_CUSTOMERS_SEARCH;
  hasStationNoImport(): boolean;
  clearStationNoImport(): CST_CUSTOMERS_SEARCH;

  getBillgroupImport(): string;
  setBillgroupImport(value: string): CST_CUSTOMERS_SEARCH;
  hasBillgroupImport(): boolean;
  clearBillgroupImport(): CST_CUSTOMERS_SEARCH;

  getBookNoImport(): string;
  setBookNoImport(value: string): CST_CUSTOMERS_SEARCH;
  hasBookNoImport(): boolean;
  clearBookNoImport(): CST_CUSTOMERS_SEARCH;

  getPrevCustkeyImport(): string;
  setPrevCustkeyImport(value: string): CST_CUSTOMERS_SEARCH;
  hasPrevCustkeyImport(): boolean;
  clearPrevCustkeyImport(): CST_CUSTOMERS_SEARCH;

  getOldKeyImport(): string;
  setOldKeyImport(value: string): CST_CUSTOMERS_SEARCH;
  hasOldKeyImport(): boolean;
  clearOldKeyImport(): CST_CUSTOMERS_SEARCH;

  getPropertyId(): number;
  setPropertyId(value: number): CST_CUSTOMERS_SEARCH;
  hasPropertyId(): boolean;
  clearPropertyId(): CST_CUSTOMERS_SEARCH;

  getMeterId(): number;
  setMeterId(value: number): CST_CUSTOMERS_SEARCH;
  hasMeterId(): boolean;
  clearMeterId(): CST_CUSTOMERS_SEARCH;

  getMeterRef(): string;
  setMeterRef(value: string): CST_CUSTOMERS_SEARCH;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_CUSTOMERS_SEARCH;

  getCrNo(): string;
  setCrNo(value: string): CST_CUSTOMERS_SEARCH;
  hasCrNo(): boolean;
  clearCrNo(): CST_CUSTOMERS_SEARCH;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CUSTOMERS_SEARCH.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CUSTOMERS_SEARCH): CST_CUSTOMERS_SEARCH.AsObject;
  static serializeBinaryToWriter(message: CST_CUSTOMERS_SEARCH, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CUSTOMERS_SEARCH;
  static deserializeBinaryFromReader(message: CST_CUSTOMERS_SEARCH, reader: jspb.BinaryReader): CST_CUSTOMERS_SEARCH;
}

export namespace CST_CUSTOMERS_SEARCH {
  export type AsObject = {
    stationNo: number,
    custkey: string,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    surname: string,
    uaAddress: string,
    nationalId?: string,
    oldKey?: string,
    eMail?: string,
    seqNo: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    customerFlag?: string,
    prevCustkey?: string,
    passportId?: string,
    mobileNo?: string,
    taxNo?: string,
    parentCustkey?: string,
    isPrepaid?: boolean,
    firstName?: string,
    secondName?: string,
    thirdName?: string,
    fourthName?: string,
    fullName?: string,
    govAddress?: string,
    cityAddress?: string,
    districAddress?: string,
    areaAddress?: string,
    streetAddress?: string,
    buildingAddress?: string,
    floorAddress?: string,
    flatAddress?: string,
    finalAddress?: string,
    dateOfbirth?: date_pb.MasDateTime.AsObject,
    uaAdress5?: string,
    serialNo?: string,
    meterTagNo?: string,
    custkeyImport?: string,
    stationNoImport?: number,
    billgroupImport?: string,
    bookNoImport?: string,
    prevCustkeyImport?: string,
    oldKeyImport?: string,
    propertyId?: number,
    meterId?: number,
    meterRef?: string,
    crNo?: string,
  }
}

export class CST_CUSTOMERS_MAS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CST_CUSTOMERS_MAS;

  getCustkey(): number;
  setCustkey(value: number): CST_CUSTOMERS_MAS;

  getBillgroup(): string;
  setBillgroup(value: string): CST_CUSTOMERS_MAS;

  getBookNo(): string;
  setBookNo(value: string): CST_CUSTOMERS_MAS;

  getWalkNo(): number;
  setWalkNo(value: number): CST_CUSTOMERS_MAS;

  getSurname(): string;
  setSurname(value: string): CST_CUSTOMERS_MAS;

  getUaAddress(): string;
  setUaAddress(value: string): CST_CUSTOMERS_MAS;

  getNationalId(): string;
  setNationalId(value: string): CST_CUSTOMERS_MAS;
  hasNationalId(): boolean;
  clearNationalId(): CST_CUSTOMERS_MAS;

  getOldKey(): string;
  setOldKey(value: string): CST_CUSTOMERS_MAS;
  hasOldKey(): boolean;
  clearOldKey(): CST_CUSTOMERS_MAS;

  getEMail(): string;
  setEMail(value: string): CST_CUSTOMERS_MAS;
  hasEMail(): boolean;
  clearEMail(): CST_CUSTOMERS_MAS;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CUSTOMERS_MAS;

  getStampUser(): string;
  setStampUser(value: string): CST_CUSTOMERS_MAS;
  hasStampUser(): boolean;
  clearStampUser(): CST_CUSTOMERS_MAS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CUSTOMERS_MAS;
  hasStampDate(): boolean;
  clearStampDate(): CST_CUSTOMERS_MAS;

  getStationName(): string;
  setStationName(value: string): CST_CUSTOMERS_MAS;
  hasStationName(): boolean;
  clearStationName(): CST_CUSTOMERS_MAS;

  getCustomerFlag(): string;
  setCustomerFlag(value: string): CST_CUSTOMERS_MAS;
  hasCustomerFlag(): boolean;
  clearCustomerFlag(): CST_CUSTOMERS_MAS;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CST_CUSTOMERS_MAS;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): CST_CUSTOMERS_MAS;

  getPassportId(): string;
  setPassportId(value: string): CST_CUSTOMERS_MAS;
  hasPassportId(): boolean;
  clearPassportId(): CST_CUSTOMERS_MAS;

  getMobileNo(): string;
  setMobileNo(value: string): CST_CUSTOMERS_MAS;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_CUSTOMERS_MAS;

  getTaxNo(): string;
  setTaxNo(value: string): CST_CUSTOMERS_MAS;
  hasTaxNo(): boolean;
  clearTaxNo(): CST_CUSTOMERS_MAS;

  getParentCustkey(): string;
  setParentCustkey(value: string): CST_CUSTOMERS_MAS;
  hasParentCustkey(): boolean;
  clearParentCustkey(): CST_CUSTOMERS_MAS;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_CUSTOMERS_MAS;
  hasIsPrepaid(): boolean;
  clearIsPrepaid(): CST_CUSTOMERS_MAS;

  getFirstName(): string;
  setFirstName(value: string): CST_CUSTOMERS_MAS;
  hasFirstName(): boolean;
  clearFirstName(): CST_CUSTOMERS_MAS;

  getSecondName(): string;
  setSecondName(value: string): CST_CUSTOMERS_MAS;
  hasSecondName(): boolean;
  clearSecondName(): CST_CUSTOMERS_MAS;

  getThirdName(): string;
  setThirdName(value: string): CST_CUSTOMERS_MAS;
  hasThirdName(): boolean;
  clearThirdName(): CST_CUSTOMERS_MAS;

  getFourthName(): string;
  setFourthName(value: string): CST_CUSTOMERS_MAS;
  hasFourthName(): boolean;
  clearFourthName(): CST_CUSTOMERS_MAS;

  getFullName(): string;
  setFullName(value: string): CST_CUSTOMERS_MAS;
  hasFullName(): boolean;
  clearFullName(): CST_CUSTOMERS_MAS;

  getGovAddress(): string;
  setGovAddress(value: string): CST_CUSTOMERS_MAS;
  hasGovAddress(): boolean;
  clearGovAddress(): CST_CUSTOMERS_MAS;

  getCityAddress(): string;
  setCityAddress(value: string): CST_CUSTOMERS_MAS;
  hasCityAddress(): boolean;
  clearCityAddress(): CST_CUSTOMERS_MAS;

  getDistricAddress(): string;
  setDistricAddress(value: string): CST_CUSTOMERS_MAS;
  hasDistricAddress(): boolean;
  clearDistricAddress(): CST_CUSTOMERS_MAS;

  getAreaAddress(): string;
  setAreaAddress(value: string): CST_CUSTOMERS_MAS;
  hasAreaAddress(): boolean;
  clearAreaAddress(): CST_CUSTOMERS_MAS;

  getStreetAddress(): string;
  setStreetAddress(value: string): CST_CUSTOMERS_MAS;
  hasStreetAddress(): boolean;
  clearStreetAddress(): CST_CUSTOMERS_MAS;

  getBuildingAddress(): string;
  setBuildingAddress(value: string): CST_CUSTOMERS_MAS;
  hasBuildingAddress(): boolean;
  clearBuildingAddress(): CST_CUSTOMERS_MAS;

  getFloorAddress(): string;
  setFloorAddress(value: string): CST_CUSTOMERS_MAS;
  hasFloorAddress(): boolean;
  clearFloorAddress(): CST_CUSTOMERS_MAS;

  getFlatAddress(): string;
  setFlatAddress(value: string): CST_CUSTOMERS_MAS;
  hasFlatAddress(): boolean;
  clearFlatAddress(): CST_CUSTOMERS_MAS;

  getFinalAddress(): string;
  setFinalAddress(value: string): CST_CUSTOMERS_MAS;
  hasFinalAddress(): boolean;
  clearFinalAddress(): CST_CUSTOMERS_MAS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CUSTOMERS_MAS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CUSTOMERS_MAS): CST_CUSTOMERS_MAS.AsObject;
  static serializeBinaryToWriter(message: CST_CUSTOMERS_MAS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CUSTOMERS_MAS;
  static deserializeBinaryFromReader(message: CST_CUSTOMERS_MAS, reader: jspb.BinaryReader): CST_CUSTOMERS_MAS;
}

export namespace CST_CUSTOMERS_MAS {
  export type AsObject = {
    stationNo: number,
    custkey: number,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    surname: string,
    uaAddress: string,
    nationalId?: string,
    oldKey?: string,
    eMail?: string,
    seqNo: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stationName?: string,
    customerFlag?: string,
    prevCustkey?: string,
    passportId?: string,
    mobileNo?: string,
    taxNo?: string,
    parentCustkey?: string,
    isPrepaid?: boolean,
    firstName?: string,
    secondName?: string,
    thirdName?: string,
    fourthName?: string,
    fullName?: string,
    govAddress?: string,
    cityAddress?: string,
    districAddress?: string,
    areaAddress?: string,
    streetAddress?: string,
    buildingAddress?: string,
    floorAddress?: string,
    flatAddress?: string,
    finalAddress?: string,
  }
}

export class CST_PROPERTY extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CST_PROPERTY;

  getPropRef(): string;
  setPropRef(value: string): CST_PROPERTY;
  hasPropRef(): boolean;
  clearPropRef(): CST_PROPERTY;

  getPropertyId(): number;
  setPropertyId(value: number): CST_PROPERTY;
  hasPropertyId(): boolean;
  clearPropertyId(): CST_PROPERTY;

  getStampUser(): string;
  setStampUser(value: string): CST_PROPERTY;
  hasStampUser(): boolean;
  clearStampUser(): CST_PROPERTY;

  getCType(): string;
  setCType(value: string): CST_PROPERTY;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_PROPERTY;
  hasStampDate(): boolean;
  clearStampDate(): CST_PROPERTY;

  getCTypeDesc(): string;
  setCTypeDesc(value: string): CST_PROPERTY;
  hasCTypeDesc(): boolean;
  clearCTypeDesc(): CST_PROPERTY;

  getAreaId(): number;
  setAreaId(value: number): CST_PROPERTY;
  hasAreaId(): boolean;
  clearAreaId(): CST_PROPERTY;

  getDistricId(): number;
  setDistricId(value: number): CST_PROPERTY;
  hasDistricId(): boolean;
  clearDistricId(): CST_PROPERTY;

  getCityId(): number;
  setCityId(value: number): CST_PROPERTY;
  hasCityId(): boolean;
  clearCityId(): CST_PROPERTY;

  getGovId(): number;
  setGovId(value: number): CST_PROPERTY;
  hasGovId(): boolean;
  clearGovId(): CST_PROPERTY;

  getPropertyTypeId(): number;
  setPropertyTypeId(value: number): CST_PROPERTY;
  hasPropertyTypeId(): boolean;
  clearPropertyTypeId(): CST_PROPERTY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_PROPERTY.AsObject;
  static toObject(includeInstance: boolean, msg: CST_PROPERTY): CST_PROPERTY.AsObject;
  static serializeBinaryToWriter(message: CST_PROPERTY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_PROPERTY;
  static deserializeBinaryFromReader(message: CST_PROPERTY, reader: jspb.BinaryReader): CST_PROPERTY;
}

export namespace CST_PROPERTY {
  export type AsObject = {
    custkey: string,
    propRef?: string,
    propertyId?: number,
    stampUser?: string,
    cType: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    cTypeDesc?: string,
    areaId?: number,
    districId?: number,
    cityId?: number,
    govId?: number,
    propertyTypeId?: number,
  }
}

export class CST_PROPERTY_EDAMS4 extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CST_PROPERTY_EDAMS4;

  getPropRef(): string;
  setPropRef(value: string): CST_PROPERTY_EDAMS4;

  getStampUser(): string;
  setStampUser(value: string): CST_PROPERTY_EDAMS4;
  hasStampUser(): boolean;
  clearStampUser(): CST_PROPERTY_EDAMS4;

  getCType(): string;
  setCType(value: string): CST_PROPERTY_EDAMS4;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_PROPERTY_EDAMS4;
  hasStampDate(): boolean;
  clearStampDate(): CST_PROPERTY_EDAMS4;

  getPropertyTypeId(): number;
  setPropertyTypeId(value: number): CST_PROPERTY_EDAMS4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_PROPERTY_EDAMS4.AsObject;
  static toObject(includeInstance: boolean, msg: CST_PROPERTY_EDAMS4): CST_PROPERTY_EDAMS4.AsObject;
  static serializeBinaryToWriter(message: CST_PROPERTY_EDAMS4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_PROPERTY_EDAMS4;
  static deserializeBinaryFromReader(message: CST_PROPERTY_EDAMS4, reader: jspb.BinaryReader): CST_PROPERTY_EDAMS4;
}

export namespace CST_PROPERTY_EDAMS4 {
  export type AsObject = {
    custkey: string,
    propRef: string,
    stampUser?: string,
    cType: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    propertyTypeId: number,
  }
}

export class CST_PROPERTY_EDAMS5 extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CST_PROPERTY_EDAMS5;

  getPropRef(): string;
  setPropRef(value: string): CST_PROPERTY_EDAMS5;
  hasPropRef(): boolean;
  clearPropRef(): CST_PROPERTY_EDAMS5;

  getPropertyId(): number;
  setPropertyId(value: number): CST_PROPERTY_EDAMS5;

  getStampUser(): string;
  setStampUser(value: string): CST_PROPERTY_EDAMS5;
  hasStampUser(): boolean;
  clearStampUser(): CST_PROPERTY_EDAMS5;

  getCType(): string;
  setCType(value: string): CST_PROPERTY_EDAMS5;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_PROPERTY_EDAMS5;
  hasStampDate(): boolean;
  clearStampDate(): CST_PROPERTY_EDAMS5;

  getAreaId(): number;
  setAreaId(value: number): CST_PROPERTY_EDAMS5;
  hasAreaId(): boolean;
  clearAreaId(): CST_PROPERTY_EDAMS5;

  getDistricId(): number;
  setDistricId(value: number): CST_PROPERTY_EDAMS5;
  hasDistricId(): boolean;
  clearDistricId(): CST_PROPERTY_EDAMS5;

  getCityId(): number;
  setCityId(value: number): CST_PROPERTY_EDAMS5;
  hasCityId(): boolean;
  clearCityId(): CST_PROPERTY_EDAMS5;

  getGovId(): number;
  setGovId(value: number): CST_PROPERTY_EDAMS5;
  hasGovId(): boolean;
  clearGovId(): CST_PROPERTY_EDAMS5;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_PROPERTY_EDAMS5.AsObject;
  static toObject(includeInstance: boolean, msg: CST_PROPERTY_EDAMS5): CST_PROPERTY_EDAMS5.AsObject;
  static serializeBinaryToWriter(message: CST_PROPERTY_EDAMS5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_PROPERTY_EDAMS5;
  static deserializeBinaryFromReader(message: CST_PROPERTY_EDAMS5, reader: jspb.BinaryReader): CST_PROPERTY_EDAMS5;
}

export namespace CST_PROPERTY_EDAMS5 {
  export type AsObject = {
    custkey: string,
    propRef?: string,
    propertyId: number,
    stampUser?: string,
    cType: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    areaId?: number,
    districId?: number,
    cityId?: number,
    govId?: number,
  }
}

export class CST_PROPERTY_MAS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CST_PROPERTY_MAS;

  getPropertyId(): number;
  setPropertyId(value: number): CST_PROPERTY_MAS;

  getStampUser(): string;
  setStampUser(value: string): CST_PROPERTY_MAS;
  hasStampUser(): boolean;
  clearStampUser(): CST_PROPERTY_MAS;

  getCType(): string;
  setCType(value: string): CST_PROPERTY_MAS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_PROPERTY_MAS;
  hasStampDate(): boolean;
  clearStampDate(): CST_PROPERTY_MAS;

  getAreaId(): number;
  setAreaId(value: number): CST_PROPERTY_MAS;
  hasAreaId(): boolean;
  clearAreaId(): CST_PROPERTY_MAS;

  getDistricId(): number;
  setDistricId(value: number): CST_PROPERTY_MAS;
  hasDistricId(): boolean;
  clearDistricId(): CST_PROPERTY_MAS;

  getCityId(): number;
  setCityId(value: number): CST_PROPERTY_MAS;
  hasCityId(): boolean;
  clearCityId(): CST_PROPERTY_MAS;

  getGovId(): number;
  setGovId(value: number): CST_PROPERTY_MAS;
  hasGovId(): boolean;
  clearGovId(): CST_PROPERTY_MAS;

  getPropertyTypeId(): number;
  setPropertyTypeId(value: number): CST_PROPERTY_MAS;
  hasPropertyTypeId(): boolean;
  clearPropertyTypeId(): CST_PROPERTY_MAS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_PROPERTY_MAS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_PROPERTY_MAS): CST_PROPERTY_MAS.AsObject;
  static serializeBinaryToWriter(message: CST_PROPERTY_MAS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_PROPERTY_MAS;
  static deserializeBinaryFromReader(message: CST_PROPERTY_MAS, reader: jspb.BinaryReader): CST_PROPERTY_MAS;
}

export namespace CST_PROPERTY_MAS {
  export type AsObject = {
    custkey: string,
    propertyId: number,
    stampUser?: string,
    cType: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    areaId?: number,
    districId?: number,
    cityId?: number,
    govId?: number,
    propertyTypeId?: number,
  }
}

export class CST_PROPERTY_MAS_IMPORT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CST_PROPERTY_MAS_IMPORT;

  getPropertyId(): number;
  setPropertyId(value: number): CST_PROPERTY_MAS_IMPORT;

  getStampUser(): string;
  setStampUser(value: string): CST_PROPERTY_MAS_IMPORT;
  hasStampUser(): boolean;
  clearStampUser(): CST_PROPERTY_MAS_IMPORT;

  getCType(): string;
  setCType(value: string): CST_PROPERTY_MAS_IMPORT;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_PROPERTY_MAS_IMPORT;
  hasStampDate(): boolean;
  clearStampDate(): CST_PROPERTY_MAS_IMPORT;

  getAreaId(): number;
  setAreaId(value: number): CST_PROPERTY_MAS_IMPORT;
  hasAreaId(): boolean;
  clearAreaId(): CST_PROPERTY_MAS_IMPORT;

  getDistricId(): number;
  setDistricId(value: number): CST_PROPERTY_MAS_IMPORT;
  hasDistricId(): boolean;
  clearDistricId(): CST_PROPERTY_MAS_IMPORT;

  getCityId(): number;
  setCityId(value: number): CST_PROPERTY_MAS_IMPORT;
  hasCityId(): boolean;
  clearCityId(): CST_PROPERTY_MAS_IMPORT;

  getGovId(): number;
  setGovId(value: number): CST_PROPERTY_MAS_IMPORT;
  hasGovId(): boolean;
  clearGovId(): CST_PROPERTY_MAS_IMPORT;

  getPropertyTypeId(): number;
  setPropertyTypeId(value: number): CST_PROPERTY_MAS_IMPORT;
  hasPropertyTypeId(): boolean;
  clearPropertyTypeId(): CST_PROPERTY_MAS_IMPORT;

  getCTypeImport(): string;
  setCTypeImport(value: string): CST_PROPERTY_MAS_IMPORT;
  hasCTypeImport(): boolean;
  clearCTypeImport(): CST_PROPERTY_MAS_IMPORT;

  getCustkeyImport(): string;
  setCustkeyImport(value: string): CST_PROPERTY_MAS_IMPORT;
  hasCustkeyImport(): boolean;
  clearCustkeyImport(): CST_PROPERTY_MAS_IMPORT;

  getPropRef(): string;
  setPropRef(value: string): CST_PROPERTY_MAS_IMPORT;
  hasPropRef(): boolean;
  clearPropRef(): CST_PROPERTY_MAS_IMPORT;

  getPropRefImport(): string;
  setPropRefImport(value: string): CST_PROPERTY_MAS_IMPORT;
  hasPropRefImport(): boolean;
  clearPropRefImport(): CST_PROPERTY_MAS_IMPORT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_PROPERTY_MAS_IMPORT.AsObject;
  static toObject(includeInstance: boolean, msg: CST_PROPERTY_MAS_IMPORT): CST_PROPERTY_MAS_IMPORT.AsObject;
  static serializeBinaryToWriter(message: CST_PROPERTY_MAS_IMPORT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_PROPERTY_MAS_IMPORT;
  static deserializeBinaryFromReader(message: CST_PROPERTY_MAS_IMPORT, reader: jspb.BinaryReader): CST_PROPERTY_MAS_IMPORT;
}

export namespace CST_PROPERTY_MAS_IMPORT {
  export type AsObject = {
    custkey: string,
    propertyId: number,
    stampUser?: string,
    cType: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    areaId?: number,
    districId?: number,
    cityId?: number,
    govId?: number,
    propertyTypeId?: number,
    cTypeImport?: string,
    custkeyImport?: string,
    propRef?: string,
    propRefImport?: string,
  }
}

export class CST_MULTI_CTG extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_MULTI_CTG;
  hasPropRef(): boolean;
  clearPropRef(): CST_MULTI_CTG;

  getConnectionId(): number;
  setConnectionId(value: number): CST_MULTI_CTG;
  hasConnectionId(): boolean;
  clearConnectionId(): CST_MULTI_CTG;

  getCType(): string;
  setCType(value: string): CST_MULTI_CTG;

  getCTypeDesc(): string;
  setCTypeDesc(value: string): CST_MULTI_CTG;
  hasCTypeDesc(): boolean;
  clearCTypeDesc(): CST_MULTI_CTG;

  getAllocPerc(): number;
  setAllocPerc(value: number): CST_MULTI_CTG;

  getAllocPercSewer(): number;
  setAllocPercSewer(value: number): CST_MULTI_CTG;

  getNoUnits(): number;
  setNoUnits(value: number): CST_MULTI_CTG;

  getEstimConsPu(): number;
  setEstimConsPu(value: number): CST_MULTI_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_MULTI_CTG.AsObject;
  static toObject(includeInstance: boolean, msg: CST_MULTI_CTG): CST_MULTI_CTG.AsObject;
  static serializeBinaryToWriter(message: CST_MULTI_CTG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_MULTI_CTG;
  static deserializeBinaryFromReader(message: CST_MULTI_CTG, reader: jspb.BinaryReader): CST_MULTI_CTG;
}

export namespace CST_MULTI_CTG {
  export type AsObject = {
    propRef?: string,
    connectionId?: number,
    cType: string,
    cTypeDesc?: string,
    allocPerc: number,
    allocPercSewer: number,
    noUnits: number,
    estimConsPu: number,
  }
}

export class ArrCST_MULTI_CTG extends jspb.Message {
  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): ArrCST_MULTI_CTG;
  clearCstMultiCtgList(): ArrCST_MULTI_CTG;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCST_MULTI_CTG.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCST_MULTI_CTG): ArrCST_MULTI_CTG.AsObject;
  static serializeBinaryToWriter(message: ArrCST_MULTI_CTG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCST_MULTI_CTG;
  static deserializeBinaryFromReader(message: ArrCST_MULTI_CTG, reader: jspb.BinaryReader): ArrCST_MULTI_CTG;
}

export namespace ArrCST_MULTI_CTG {
  export type AsObject = {
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
  }
}

export class CST_MULTI_CTG_EDAMS4 extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_MULTI_CTG_EDAMS4;

  getCType(): string;
  setCType(value: string): CST_MULTI_CTG_EDAMS4;

  getAllocPerc(): number;
  setAllocPerc(value: number): CST_MULTI_CTG_EDAMS4;

  getAllocPercSewer(): number;
  setAllocPercSewer(value: number): CST_MULTI_CTG_EDAMS4;

  getNoUnits(): number;
  setNoUnits(value: number): CST_MULTI_CTG_EDAMS4;

  getEstimConsPu(): number;
  setEstimConsPu(value: number): CST_MULTI_CTG_EDAMS4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_MULTI_CTG_EDAMS4.AsObject;
  static toObject(includeInstance: boolean, msg: CST_MULTI_CTG_EDAMS4): CST_MULTI_CTG_EDAMS4.AsObject;
  static serializeBinaryToWriter(message: CST_MULTI_CTG_EDAMS4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_MULTI_CTG_EDAMS4;
  static deserializeBinaryFromReader(message: CST_MULTI_CTG_EDAMS4, reader: jspb.BinaryReader): CST_MULTI_CTG_EDAMS4;
}

export namespace CST_MULTI_CTG_EDAMS4 {
  export type AsObject = {
    propRef: string,
    cType: string,
    allocPerc: number,
    allocPercSewer: number,
    noUnits: number,
    estimConsPu: number,
  }
}

export class CST_MULTI_CTG_EDAMS5 extends jspb.Message {
  getConnectionId(): number;
  setConnectionId(value: number): CST_MULTI_CTG_EDAMS5;

  getCType(): string;
  setCType(value: string): CST_MULTI_CTG_EDAMS5;

  getAllocPerc(): number;
  setAllocPerc(value: number): CST_MULTI_CTG_EDAMS5;

  getAllocPercSewer(): number;
  setAllocPercSewer(value: number): CST_MULTI_CTG_EDAMS5;

  getNoUnits(): number;
  setNoUnits(value: number): CST_MULTI_CTG_EDAMS5;

  getEstimConsPu(): number;
  setEstimConsPu(value: number): CST_MULTI_CTG_EDAMS5;

  getCTypeImport(): string;
  setCTypeImport(value: string): CST_MULTI_CTG_EDAMS5;
  hasCTypeImport(): boolean;
  clearCTypeImport(): CST_MULTI_CTG_EDAMS5;

  getPropRefImport(): string;
  setPropRefImport(value: string): CST_MULTI_CTG_EDAMS5;
  hasPropRefImport(): boolean;
  clearPropRefImport(): CST_MULTI_CTG_EDAMS5;

  getPropRef(): string;
  setPropRef(value: string): CST_MULTI_CTG_EDAMS5;
  hasPropRef(): boolean;
  clearPropRef(): CST_MULTI_CTG_EDAMS5;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_MULTI_CTG_EDAMS5.AsObject;
  static toObject(includeInstance: boolean, msg: CST_MULTI_CTG_EDAMS5): CST_MULTI_CTG_EDAMS5.AsObject;
  static serializeBinaryToWriter(message: CST_MULTI_CTG_EDAMS5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_MULTI_CTG_EDAMS5;
  static deserializeBinaryFromReader(message: CST_MULTI_CTG_EDAMS5, reader: jspb.BinaryReader): CST_MULTI_CTG_EDAMS5;
}

export namespace CST_MULTI_CTG_EDAMS5 {
  export type AsObject = {
    connectionId: number,
    cType: string,
    allocPerc: number,
    allocPercSewer: number,
    noUnits: number,
    estimConsPu: number,
    cTypeImport?: string,
    propRefImport?: string,
    propRef?: string,
  }
}

export class CST_CONNECTION extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_CONNECTION;
  hasPropRef(): boolean;
  clearPropRef(): CST_CONNECTION;

  getConnNo(): number;
  setConnNo(value: number): CST_CONNECTION;
  hasConnNo(): boolean;
  clearConnNo(): CST_CONNECTION;

  getConnectionId(): number;
  setConnectionId(value: number): CST_CONNECTION;
  hasConnectionId(): boolean;
  clearConnectionId(): CST_CONNECTION;

  getConStatus(): CONN_STATUS;
  setConStatus(value: CONN_STATUS): CST_CONNECTION;

  getEstmCons(): number;
  setEstmCons(value: number): CST_CONNECTION;
  hasEstmCons(): boolean;
  clearEstmCons(): CST_CONNECTION;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CONNECTION;

  getMeterType(): string;
  setMeterType(value: string): CST_CONNECTION;
  hasMeterType(): boolean;
  clearMeterType(): CST_CONNECTION;

  getMeterRef(): string;
  setMeterRef(value: string): CST_CONNECTION;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_CONNECTION;

  getMeterId(): number;
  setMeterId(value: number): CST_CONNECTION;
  hasMeterId(): boolean;
  clearMeterId(): CST_CONNECTION;

  getNoUnits(): number;
  setNoUnits(value: number): CST_CONNECTION;

  getStampUser(): string;
  setStampUser(value: string): CST_CONNECTION;
  hasStampUser(): boolean;
  clearStampUser(): CST_CONNECTION;

  getPropertyId(): number;
  setPropertyId(value: number): CST_CONNECTION;
  hasPropertyId(): boolean;
  clearPropertyId(): CST_CONNECTION;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CONNECTION;
  hasStampDate(): boolean;
  clearStampDate(): CST_CONNECTION;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CST_CONNECTION;
  hasConnDate(): boolean;
  clearConnDate(): CST_CONNECTION;

  getMeter(): CST_METER | undefined;
  setMeter(value?: CST_METER): CST_CONNECTION;
  hasMeter(): boolean;
  clearMeter(): CST_CONNECTION;

  getPrevConnectionId(): number;
  setPrevConnectionId(value: number): CST_CONNECTION;
  hasPrevConnectionId(): boolean;
  clearPrevConnectionId(): CST_CONNECTION;

  getIsManualEstim(): number;
  setIsManualEstim(value: number): CST_CONNECTION;
  hasIsManualEstim(): boolean;
  clearIsManualEstim(): CST_CONNECTION;

  getConnDiameter(): number;
  setConnDiameter(value: number): CST_CONNECTION;
  hasConnDiameter(): boolean;
  clearConnDiameter(): CST_CONNECTION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CONNECTION.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CONNECTION): CST_CONNECTION.AsObject;
  static serializeBinaryToWriter(message: CST_CONNECTION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CONNECTION;
  static deserializeBinaryFromReader(message: CST_CONNECTION, reader: jspb.BinaryReader): CST_CONNECTION;
}

export namespace CST_CONNECTION {
  export type AsObject = {
    propRef?: string,
    connNo?: number,
    connectionId?: number,
    conStatus: CONN_STATUS,
    estmCons?: number,
    seqNo: number,
    meterType?: string,
    meterRef?: string,
    meterId?: number,
    noUnits: number,
    stampUser?: string,
    propertyId?: number,
    stampDate?: date_pb.MasDateTime.AsObject,
    connDate?: date_pb.MasDateTime.AsObject,
    meter?: CST_METER.AsObject,
    prevConnectionId?: number,
    isManualEstim?: number,
    connDiameter?: number,
  }
}

export class CST_CONNECTION_EDAMS4 extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_CONNECTION_EDAMS4;

  getConnNo(): number;
  setConnNo(value: number): CST_CONNECTION_EDAMS4;

  getConStatus(): CONN_STATUS;
  setConStatus(value: CONN_STATUS): CST_CONNECTION_EDAMS4;

  getEstmCons(): number;
  setEstmCons(value: number): CST_CONNECTION_EDAMS4;
  hasEstmCons(): boolean;
  clearEstmCons(): CST_CONNECTION_EDAMS4;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CONNECTION_EDAMS4;

  getMeterType(): string;
  setMeterType(value: string): CST_CONNECTION_EDAMS4;
  hasMeterType(): boolean;
  clearMeterType(): CST_CONNECTION_EDAMS4;

  getMeterRef(): string;
  setMeterRef(value: string): CST_CONNECTION_EDAMS4;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_CONNECTION_EDAMS4;

  getNoUnits(): number;
  setNoUnits(value: number): CST_CONNECTION_EDAMS4;

  getStampUser(): string;
  setStampUser(value: string): CST_CONNECTION_EDAMS4;
  hasStampUser(): boolean;
  clearStampUser(): CST_CONNECTION_EDAMS4;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CONNECTION_EDAMS4;
  hasStampDate(): boolean;
  clearStampDate(): CST_CONNECTION_EDAMS4;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CST_CONNECTION_EDAMS4;
  hasConnDate(): boolean;
  clearConnDate(): CST_CONNECTION_EDAMS4;

  getIsManualEstim(): number;
  setIsManualEstim(value: number): CST_CONNECTION_EDAMS4;
  hasIsManualEstim(): boolean;
  clearIsManualEstim(): CST_CONNECTION_EDAMS4;

  getConnDiameter(): number;
  setConnDiameter(value: number): CST_CONNECTION_EDAMS4;
  hasConnDiameter(): boolean;
  clearConnDiameter(): CST_CONNECTION_EDAMS4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CONNECTION_EDAMS4.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CONNECTION_EDAMS4): CST_CONNECTION_EDAMS4.AsObject;
  static serializeBinaryToWriter(message: CST_CONNECTION_EDAMS4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CONNECTION_EDAMS4;
  static deserializeBinaryFromReader(message: CST_CONNECTION_EDAMS4, reader: jspb.BinaryReader): CST_CONNECTION_EDAMS4;
}

export namespace CST_CONNECTION_EDAMS4 {
  export type AsObject = {
    propRef: string,
    connNo: number,
    conStatus: CONN_STATUS,
    estmCons?: number,
    seqNo: number,
    meterType?: string,
    meterRef?: string,
    noUnits: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    connDate?: date_pb.MasDateTime.AsObject,
    isManualEstim?: number,
    connDiameter?: number,
  }
}

export class CST_CONNECTION_EDAMS5 extends jspb.Message {
  getConnectionId(): number;
  setConnectionId(value: number): CST_CONNECTION_EDAMS5;

  getConStatus(): CONN_STATUS;
  setConStatus(value: CONN_STATUS): CST_CONNECTION_EDAMS5;

  getPropertyId(): number;
  setPropertyId(value: number): CST_CONNECTION_EDAMS5;

  getEstmCons(): number;
  setEstmCons(value: number): CST_CONNECTION_EDAMS5;
  hasEstmCons(): boolean;
  clearEstmCons(): CST_CONNECTION_EDAMS5;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CONNECTION_EDAMS5;

  getMeterId(): number;
  setMeterId(value: number): CST_CONNECTION_EDAMS5;
  hasMeterId(): boolean;
  clearMeterId(): CST_CONNECTION_EDAMS5;

  getNoUnits(): number;
  setNoUnits(value: number): CST_CONNECTION_EDAMS5;

  getStampUser(): string;
  setStampUser(value: string): CST_CONNECTION_EDAMS5;
  hasStampUser(): boolean;
  clearStampUser(): CST_CONNECTION_EDAMS5;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CONNECTION_EDAMS5;
  hasStampDate(): boolean;
  clearStampDate(): CST_CONNECTION_EDAMS5;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CST_CONNECTION_EDAMS5;
  hasConnDate(): boolean;
  clearConnDate(): CST_CONNECTION_EDAMS5;

  getIsManualEstim(): number;
  setIsManualEstim(value: number): CST_CONNECTION_EDAMS5;
  hasIsManualEstim(): boolean;
  clearIsManualEstim(): CST_CONNECTION_EDAMS5;

  getConnDiameter(): number;
  setConnDiameter(value: number): CST_CONNECTION_EDAMS5;
  hasConnDiameter(): boolean;
  clearConnDiameter(): CST_CONNECTION_EDAMS5;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CONNECTION_EDAMS5.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CONNECTION_EDAMS5): CST_CONNECTION_EDAMS5.AsObject;
  static serializeBinaryToWriter(message: CST_CONNECTION_EDAMS5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CONNECTION_EDAMS5;
  static deserializeBinaryFromReader(message: CST_CONNECTION_EDAMS5, reader: jspb.BinaryReader): CST_CONNECTION_EDAMS5;
}

export namespace CST_CONNECTION_EDAMS5 {
  export type AsObject = {
    connectionId: number,
    conStatus: CONN_STATUS,
    propertyId: number,
    estmCons?: number,
    seqNo: number,
    meterId?: number,
    noUnits: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    connDate?: date_pb.MasDateTime.AsObject,
    isManualEstim?: number,
    connDiameter?: number,
  }
}

export class CST_CONNECTION_MAS extends jspb.Message {
  getConnectionId(): number;
  setConnectionId(value: number): CST_CONNECTION_MAS;

  getConStatus(): CONN_STATUS;
  setConStatus(value: CONN_STATUS): CST_CONNECTION_MAS;

  getPropertyId(): number;
  setPropertyId(value: number): CST_CONNECTION_MAS;

  getEstmCons(): number;
  setEstmCons(value: number): CST_CONNECTION_MAS;
  hasEstmCons(): boolean;
  clearEstmCons(): CST_CONNECTION_MAS;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CONNECTION_MAS;

  getMeterId(): number;
  setMeterId(value: number): CST_CONNECTION_MAS;
  hasMeterId(): boolean;
  clearMeterId(): CST_CONNECTION_MAS;

  getNoUnits(): number;
  setNoUnits(value: number): CST_CONNECTION_MAS;

  getStampUser(): string;
  setStampUser(value: string): CST_CONNECTION_MAS;
  hasStampUser(): boolean;
  clearStampUser(): CST_CONNECTION_MAS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CONNECTION_MAS;
  hasStampDate(): boolean;
  clearStampDate(): CST_CONNECTION_MAS;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CST_CONNECTION_MAS;
  hasConnDate(): boolean;
  clearConnDate(): CST_CONNECTION_MAS;

  getPrevConnectionId(): number;
  setPrevConnectionId(value: number): CST_CONNECTION_MAS;
  hasPrevConnectionId(): boolean;
  clearPrevConnectionId(): CST_CONNECTION_MAS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CONNECTION_MAS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CONNECTION_MAS): CST_CONNECTION_MAS.AsObject;
  static serializeBinaryToWriter(message: CST_CONNECTION_MAS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CONNECTION_MAS;
  static deserializeBinaryFromReader(message: CST_CONNECTION_MAS, reader: jspb.BinaryReader): CST_CONNECTION_MAS;
}

export namespace CST_CONNECTION_MAS {
  export type AsObject = {
    connectionId: number,
    conStatus: CONN_STATUS,
    propertyId: number,
    estmCons?: number,
    seqNo: number,
    meterId?: number,
    noUnits: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    connDate?: date_pb.MasDateTime.AsObject,
    prevConnectionId?: number,
  }
}

export class CST_CONNECTION_MAS_IMPORT extends jspb.Message {
  getConnectionId(): number;
  setConnectionId(value: number): CST_CONNECTION_MAS_IMPORT;

  getConStatus(): CONN_STATUS;
  setConStatus(value: CONN_STATUS): CST_CONNECTION_MAS_IMPORT;

  getPropertyId(): number;
  setPropertyId(value: number): CST_CONNECTION_MAS_IMPORT;

  getEstmCons(): number;
  setEstmCons(value: number): CST_CONNECTION_MAS_IMPORT;
  hasEstmCons(): boolean;
  clearEstmCons(): CST_CONNECTION_MAS_IMPORT;

  getSeqNo(): number;
  setSeqNo(value: number): CST_CONNECTION_MAS_IMPORT;

  getMeterId(): number;
  setMeterId(value: number): CST_CONNECTION_MAS_IMPORT;
  hasMeterId(): boolean;
  clearMeterId(): CST_CONNECTION_MAS_IMPORT;

  getNoUnits(): number;
  setNoUnits(value: number): CST_CONNECTION_MAS_IMPORT;

  getStampUser(): string;
  setStampUser(value: string): CST_CONNECTION_MAS_IMPORT;
  hasStampUser(): boolean;
  clearStampUser(): CST_CONNECTION_MAS_IMPORT;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_CONNECTION_MAS_IMPORT;
  hasStampDate(): boolean;
  clearStampDate(): CST_CONNECTION_MAS_IMPORT;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CST_CONNECTION_MAS_IMPORT;
  hasConnDate(): boolean;
  clearConnDate(): CST_CONNECTION_MAS_IMPORT;

  getPrevConnectionId(): number;
  setPrevConnectionId(value: number): CST_CONNECTION_MAS_IMPORT;
  hasPrevConnectionId(): boolean;
  clearPrevConnectionId(): CST_CONNECTION_MAS_IMPORT;

  getConnDiameter(): number;
  setConnDiameter(value: number): CST_CONNECTION_MAS_IMPORT;
  hasConnDiameter(): boolean;
  clearConnDiameter(): CST_CONNECTION_MAS_IMPORT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CONNECTION_MAS_IMPORT.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CONNECTION_MAS_IMPORT): CST_CONNECTION_MAS_IMPORT.AsObject;
  static serializeBinaryToWriter(message: CST_CONNECTION_MAS_IMPORT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CONNECTION_MAS_IMPORT;
  static deserializeBinaryFromReader(message: CST_CONNECTION_MAS_IMPORT, reader: jspb.BinaryReader): CST_CONNECTION_MAS_IMPORT;
}

export namespace CST_CONNECTION_MAS_IMPORT {
  export type AsObject = {
    connectionId: number,
    conStatus: CONN_STATUS,
    propertyId: number,
    estmCons?: number,
    seqNo: number,
    meterId?: number,
    noUnits: number,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    connDate?: date_pb.MasDateTime.AsObject,
    prevConnectionId?: number,
    connDiameter?: number,
  }
}

export class LU_CONNECTION_SIZES extends jspb.Message {
  getId(): number;
  setId(value: number): LU_CONNECTION_SIZES;

  getBillingId(): string;
  setBillingId(value: string): LU_CONNECTION_SIZES;

  getDescription(): string;
  setDescription(value: string): LU_CONNECTION_SIZES;

  getSizeInMm(): number;
  setSizeInMm(value: number): LU_CONNECTION_SIZES;
  hasSizeInMm(): boolean;
  clearSizeInMm(): LU_CONNECTION_SIZES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_CONNECTION_SIZES.AsObject;
  static toObject(includeInstance: boolean, msg: LU_CONNECTION_SIZES): LU_CONNECTION_SIZES.AsObject;
  static serializeBinaryToWriter(message: LU_CONNECTION_SIZES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_CONNECTION_SIZES;
  static deserializeBinaryFromReader(message: LU_CONNECTION_SIZES, reader: jspb.BinaryReader): LU_CONNECTION_SIZES;
}

export namespace LU_CONNECTION_SIZES {
  export type AsObject = {
    id: number,
    billingId: string,
    description: string,
    sizeInMm?: number,
  }
}

export class ArrLU_CONNECTION_SIZES extends jspb.Message {
  getLuConnectionSizesList(): Array<LU_CONNECTION_SIZES>;
  setLuConnectionSizesList(value: Array<LU_CONNECTION_SIZES>): ArrLU_CONNECTION_SIZES;
  clearLuConnectionSizesList(): ArrLU_CONNECTION_SIZES;
  addLuConnectionSizes(value?: LU_CONNECTION_SIZES, index?: number): LU_CONNECTION_SIZES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrLU_CONNECTION_SIZES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrLU_CONNECTION_SIZES): ArrLU_CONNECTION_SIZES.AsObject;
  static serializeBinaryToWriter(message: ArrLU_CONNECTION_SIZES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrLU_CONNECTION_SIZES;
  static deserializeBinaryFromReader(message: ArrLU_CONNECTION_SIZES, reader: jspb.BinaryReader): ArrLU_CONNECTION_SIZES;
}

export namespace ArrLU_CONNECTION_SIZES {
  export type AsObject = {
    luConnectionSizesList: Array<LU_CONNECTION_SIZES.AsObject>,
  }
}

export class CST_SERVICES extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_SERVICES;
  hasPropRef(): boolean;
  clearPropRef(): CST_SERVICES;

  getPropertyId(): number;
  setPropertyId(value: number): CST_SERVICES;
  hasPropertyId(): boolean;
  clearPropertyId(): CST_SERVICES;

  getServiceType(): SERVICE_TYPE;
  setServiceType(value: SERVICE_TYPE): CST_SERVICES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_SERVICES.AsObject;
  static toObject(includeInstance: boolean, msg: CST_SERVICES): CST_SERVICES.AsObject;
  static serializeBinaryToWriter(message: CST_SERVICES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_SERVICES;
  static deserializeBinaryFromReader(message: CST_SERVICES, reader: jspb.BinaryReader): CST_SERVICES;
}

export namespace CST_SERVICES {
  export type AsObject = {
    propRef?: string,
    propertyId?: number,
    serviceType: SERVICE_TYPE,
  }
}

export class CST_SERVICES_EDAMS4 extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_SERVICES_EDAMS4;

  getServiceType(): SERVICE_TYPE;
  setServiceType(value: SERVICE_TYPE): CST_SERVICES_EDAMS4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_SERVICES_EDAMS4.AsObject;
  static toObject(includeInstance: boolean, msg: CST_SERVICES_EDAMS4): CST_SERVICES_EDAMS4.AsObject;
  static serializeBinaryToWriter(message: CST_SERVICES_EDAMS4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_SERVICES_EDAMS4;
  static deserializeBinaryFromReader(message: CST_SERVICES_EDAMS4, reader: jspb.BinaryReader): CST_SERVICES_EDAMS4;
}

export namespace CST_SERVICES_EDAMS4 {
  export type AsObject = {
    propRef: string,
    serviceType: SERVICE_TYPE,
  }
}

export class CST_SERVICES_EDAMS5 extends jspb.Message {
  getPropertyId(): number;
  setPropertyId(value: number): CST_SERVICES_EDAMS5;

  getServiceType(): SERVICE_TYPE;
  setServiceType(value: SERVICE_TYPE): CST_SERVICES_EDAMS5;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_SERVICES_EDAMS5.AsObject;
  static toObject(includeInstance: boolean, msg: CST_SERVICES_EDAMS5): CST_SERVICES_EDAMS5.AsObject;
  static serializeBinaryToWriter(message: CST_SERVICES_EDAMS5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_SERVICES_EDAMS5;
  static deserializeBinaryFromReader(message: CST_SERVICES_EDAMS5, reader: jspb.BinaryReader): CST_SERVICES_EDAMS5;
}

export namespace CST_SERVICES_EDAMS5 {
  export type AsObject = {
    propertyId: number,
    serviceType: SERVICE_TYPE,
  }
}

export class CST_METER extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_METER;
  hasPropRef(): boolean;
  clearPropRef(): CST_METER;

  getMeterType(): string;
  setMeterType(value: string): CST_METER;
  hasMeterType(): boolean;
  clearMeterType(): CST_METER;

  getMeterRef(): string;
  setMeterRef(value: string): CST_METER;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_METER;

  getMeterId(): number;
  setMeterId(value: number): CST_METER;
  hasMeterId(): boolean;
  clearMeterId(): CST_METER;

  getMeterCondition(): string;
  setMeterCondition(value: string): CST_METER;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): CST_METER;

  getMeterSize(): number;
  setMeterSize(value: number): CST_METER;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_METER;

  getStampUser(): string;
  setStampUser(value: string): CST_METER;
  hasStampUser(): boolean;
  clearStampUser(): CST_METER;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_METER;
  hasStampDate(): boolean;
  clearStampDate(): CST_METER;

  getMeterSizeDesc(): string;
  setMeterSizeDesc(value: string): CST_METER;
  hasMeterSizeDesc(): boolean;
  clearMeterSizeDesc(): CST_METER;

  getParentMeterRef(): string;
  setParentMeterRef(value: string): CST_METER;
  hasParentMeterRef(): boolean;
  clearParentMeterRef(): CST_METER;

  getParentMeterType(): string;
  setParentMeterType(value: string): CST_METER;
  hasParentMeterType(): boolean;
  clearParentMeterType(): CST_METER;

  getParentMeterId(): number;
  setParentMeterId(value: number): CST_METER;
  hasParentMeterId(): boolean;
  clearParentMeterId(): CST_METER;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CST_METER;
  hasInstallDate(): boolean;
  clearInstallDate(): CST_METER;

  getLastInvoicedRead(): number;
  setLastInvoicedRead(value: number): CST_METER;
  hasLastInvoicedRead(): boolean;
  clearLastInvoicedRead(): CST_METER;

  getLastInvoicedReadDate(): date_pb.MasDateTime | undefined;
  setLastInvoicedReadDate(value?: date_pb.MasDateTime): CST_METER;
  hasLastInvoicedReadDate(): boolean;
  clearLastInvoicedReadDate(): CST_METER;

  getLastCurReadDate(): date_pb.MasDateTime | undefined;
  setLastCurReadDate(value?: date_pb.MasDateTime): CST_METER;
  hasLastCurReadDate(): boolean;
  clearLastCurReadDate(): CST_METER;

  getNoDials(): number;
  setNoDials(value: number): CST_METER;
  hasNoDials(): boolean;
  clearNoDials(): CST_METER;

  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): CST_METER;
  hasRemovalDate(): boolean;
  clearRemovalDate(): CST_METER;

  getMeterMake(): string;
  setMeterMake(value: string): CST_METER;
  hasMeterMake(): boolean;
  clearMeterMake(): CST_METER;

  getSerialNo(): string;
  setSerialNo(value: string): CST_METER;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_METER;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_METER;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_METER;

  getIsParentMeter(): boolean;
  setIsParentMeter(value: boolean): CST_METER;
  hasIsParentMeter(): boolean;
  clearIsParentMeter(): CST_METER;

  getChildMeterType(): string;
  setChildMeterType(value: string): CST_METER;
  hasChildMeterType(): boolean;
  clearChildMeterType(): CST_METER;

  getChildMeterRef(): string;
  setChildMeterRef(value: string): CST_METER;
  hasChildMeterRef(): boolean;
  clearChildMeterRef(): CST_METER;

  getChildMeterId(): number;
  setChildMeterId(value: number): CST_METER;
  hasChildMeterId(): boolean;
  clearChildMeterId(): CST_METER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_METER.AsObject;
  static toObject(includeInstance: boolean, msg: CST_METER): CST_METER.AsObject;
  static serializeBinaryToWriter(message: CST_METER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_METER;
  static deserializeBinaryFromReader(message: CST_METER, reader: jspb.BinaryReader): CST_METER;
}

export namespace CST_METER {
  export type AsObject = {
    propRef?: string,
    meterType?: string,
    meterRef?: string,
    meterId?: number,
    meterCondition: string,
    opStatus: MeterOperationStatus,
    meterSize: number,
    isPrepaid: boolean,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    meterSizeDesc?: string,
    parentMeterRef?: string,
    parentMeterType?: string,
    parentMeterId?: number,
    installDate?: date_pb.MasDateTime.AsObject,
    lastInvoicedRead?: number,
    lastInvoicedReadDate?: date_pb.MasDateTime.AsObject,
    lastCurReadDate?: date_pb.MasDateTime.AsObject,
    noDials?: number,
    removalDate?: date_pb.MasDateTime.AsObject,
    meterMake?: string,
    serialNo?: string,
    meterTagNo?: string,
    isParentMeter?: boolean,
    childMeterType?: string,
    childMeterRef?: string,
    childMeterId?: number,
  }
}

export class CST_METER_EDAMS4 extends jspb.Message {
  getPropRef(): string;
  setPropRef(value: string): CST_METER_EDAMS4;

  getMeterType(): string;
  setMeterType(value: string): CST_METER_EDAMS4;

  getMeterRef(): string;
  setMeterRef(value: string): CST_METER_EDAMS4;

  getMeterCondition(): string;
  setMeterCondition(value: string): CST_METER_EDAMS4;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): CST_METER_EDAMS4;

  getMeterSize(): number;
  setMeterSize(value: number): CST_METER_EDAMS4;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_METER_EDAMS4;

  getStampUser(): string;
  setStampUser(value: string): CST_METER_EDAMS4;
  hasStampUser(): boolean;
  clearStampUser(): CST_METER_EDAMS4;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_METER_EDAMS4;
  hasStampDate(): boolean;
  clearStampDate(): CST_METER_EDAMS4;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CST_METER_EDAMS4;
  hasInstallDate(): boolean;
  clearInstallDate(): CST_METER_EDAMS4;

  getNoDials(): number;
  setNoDials(value: number): CST_METER_EDAMS4;
  hasNoDials(): boolean;
  clearNoDials(): CST_METER_EDAMS4;

  getParentMeterRef(): string;
  setParentMeterRef(value: string): CST_METER_EDAMS4;
  hasParentMeterRef(): boolean;
  clearParentMeterRef(): CST_METER_EDAMS4;

  getParentMeterType(): string;
  setParentMeterType(value: string): CST_METER_EDAMS4;
  hasParentMeterType(): boolean;
  clearParentMeterType(): CST_METER_EDAMS4;

  getSerialNo(): string;
  setSerialNo(value: string): CST_METER_EDAMS4;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_METER_EDAMS4;

  getMeterSizeDesc(): string;
  setMeterSizeDesc(value: string): CST_METER_EDAMS4;
  hasMeterSizeDesc(): boolean;
  clearMeterSizeDesc(): CST_METER_EDAMS4;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_METER_EDAMS4;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_METER_EDAMS4;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_METER_EDAMS4.AsObject;
  static toObject(includeInstance: boolean, msg: CST_METER_EDAMS4): CST_METER_EDAMS4.AsObject;
  static serializeBinaryToWriter(message: CST_METER_EDAMS4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_METER_EDAMS4;
  static deserializeBinaryFromReader(message: CST_METER_EDAMS4, reader: jspb.BinaryReader): CST_METER_EDAMS4;
}

export namespace CST_METER_EDAMS4 {
  export type AsObject = {
    propRef: string,
    meterType: string,
    meterRef: string,
    meterCondition: string,
    opStatus: MeterOperationStatus,
    meterSize: number,
    isPrepaid: boolean,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    installDate?: date_pb.MasDateTime.AsObject,
    noDials?: number,
    parentMeterRef?: string,
    parentMeterType?: string,
    serialNo?: string,
    meterSizeDesc?: string,
    meterTagNo?: string,
  }
}

export class CST_METER_EDAMS5 extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): CST_METER_EDAMS5;

  getMeterCondition(): string;
  setMeterCondition(value: string): CST_METER_EDAMS5;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): CST_METER_EDAMS5;

  getMeterSize(): number;
  setMeterSize(value: number): CST_METER_EDAMS5;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_METER_EDAMS5;

  getStampUser(): string;
  setStampUser(value: string): CST_METER_EDAMS5;
  hasStampUser(): boolean;
  clearStampUser(): CST_METER_EDAMS5;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_METER_EDAMS5;
  hasStampDate(): boolean;
  clearStampDate(): CST_METER_EDAMS5;

  getChildMeterId(): number;
  setChildMeterId(value: number): CST_METER_EDAMS5;
  hasChildMeterId(): boolean;
  clearChildMeterId(): CST_METER_EDAMS5;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CST_METER_EDAMS5;
  hasInstallDate(): boolean;
  clearInstallDate(): CST_METER_EDAMS5;

  getMeterType(): string;
  setMeterType(value: string): CST_METER_EDAMS5;
  hasMeterType(): boolean;
  clearMeterType(): CST_METER_EDAMS5;

  getMeterRef(): string;
  setMeterRef(value: string): CST_METER_EDAMS5;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_METER_EDAMS5;

  getNoDials(): number;
  setNoDials(value: number): CST_METER_EDAMS5;
  hasNoDials(): boolean;
  clearNoDials(): CST_METER_EDAMS5;

  getSerialNo(): string;
  setSerialNo(value: string): CST_METER_EDAMS5;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_METER_EDAMS5;

  getMeterSizeDesc(): string;
  setMeterSizeDesc(value: string): CST_METER_EDAMS5;
  hasMeterSizeDesc(): boolean;
  clearMeterSizeDesc(): CST_METER_EDAMS5;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_METER_EDAMS5;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_METER_EDAMS5;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_METER_EDAMS5.AsObject;
  static toObject(includeInstance: boolean, msg: CST_METER_EDAMS5): CST_METER_EDAMS5.AsObject;
  static serializeBinaryToWriter(message: CST_METER_EDAMS5, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_METER_EDAMS5;
  static deserializeBinaryFromReader(message: CST_METER_EDAMS5, reader: jspb.BinaryReader): CST_METER_EDAMS5;
}

export namespace CST_METER_EDAMS5 {
  export type AsObject = {
    meterId: number,
    meterCondition: string,
    opStatus: MeterOperationStatus,
    meterSize: number,
    isPrepaid: boolean,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    childMeterId?: number,
    installDate?: date_pb.MasDateTime.AsObject,
    meterType?: string,
    meterRef?: string,
    noDials?: number,
    serialNo?: string,
    meterSizeDesc?: string,
    meterTagNo?: string,
  }
}

export class CST_METER_MAS extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): CST_METER_MAS;

  getMeterCondition(): string;
  setMeterCondition(value: string): CST_METER_MAS;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): CST_METER_MAS;

  getMeterSize(): number;
  setMeterSize(value: number): CST_METER_MAS;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_METER_MAS;

  getStampUser(): string;
  setStampUser(value: string): CST_METER_MAS;
  hasStampUser(): boolean;
  clearStampUser(): CST_METER_MAS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_METER_MAS;
  hasStampDate(): boolean;
  clearStampDate(): CST_METER_MAS;

  getParentMeterId(): number;
  setParentMeterId(value: number): CST_METER_MAS;
  hasParentMeterId(): boolean;
  clearParentMeterId(): CST_METER_MAS;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CST_METER_MAS;
  hasInstallDate(): boolean;
  clearInstallDate(): CST_METER_MAS;

  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): CST_METER_MAS;
  hasRemovalDate(): boolean;
  clearRemovalDate(): CST_METER_MAS;

  getNoDials(): number;
  setNoDials(value: number): CST_METER_MAS;
  hasNoDials(): boolean;
  clearNoDials(): CST_METER_MAS;

  getMeterType(): string;
  setMeterType(value: string): CST_METER_MAS;
  hasMeterType(): boolean;
  clearMeterType(): CST_METER_MAS;

  getMeterRef(): string;
  setMeterRef(value: string): CST_METER_MAS;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_METER_MAS;

  getMeterSizeDesc(): string;
  setMeterSizeDesc(value: string): CST_METER_MAS;
  hasMeterSizeDesc(): boolean;
  clearMeterSizeDesc(): CST_METER_MAS;

  getSerialNo(): string;
  setSerialNo(value: string): CST_METER_MAS;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_METER_MAS;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_METER_MAS;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_METER_MAS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_METER_MAS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_METER_MAS): CST_METER_MAS.AsObject;
  static serializeBinaryToWriter(message: CST_METER_MAS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_METER_MAS;
  static deserializeBinaryFromReader(message: CST_METER_MAS, reader: jspb.BinaryReader): CST_METER_MAS;
}

export namespace CST_METER_MAS {
  export type AsObject = {
    meterId: number,
    meterCondition: string,
    opStatus: MeterOperationStatus,
    meterSize: number,
    isPrepaid: boolean,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    parentMeterId?: number,
    installDate?: date_pb.MasDateTime.AsObject,
    removalDate?: date_pb.MasDateTime.AsObject,
    noDials?: number,
    meterType?: string,
    meterRef?: string,
    meterSizeDesc?: string,
    serialNo?: string,
    meterTagNo?: string,
  }
}

export class CST_METER_MAS_IMPORT extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): CST_METER_MAS_IMPORT;

  getMeterCondition(): string;
  setMeterCondition(value: string): CST_METER_MAS_IMPORT;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): CST_METER_MAS_IMPORT;

  getMeterSize(): number;
  setMeterSize(value: number): CST_METER_MAS_IMPORT;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CST_METER_MAS_IMPORT;

  getStampUser(): string;
  setStampUser(value: string): CST_METER_MAS_IMPORT;
  hasStampUser(): boolean;
  clearStampUser(): CST_METER_MAS_IMPORT;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_METER_MAS_IMPORT;
  hasStampDate(): boolean;
  clearStampDate(): CST_METER_MAS_IMPORT;

  getParentMeterId(): number;
  setParentMeterId(value: number): CST_METER_MAS_IMPORT;
  hasParentMeterId(): boolean;
  clearParentMeterId(): CST_METER_MAS_IMPORT;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CST_METER_MAS_IMPORT;
  hasInstallDate(): boolean;
  clearInstallDate(): CST_METER_MAS_IMPORT;

  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): CST_METER_MAS_IMPORT;
  hasRemovalDate(): boolean;
  clearRemovalDate(): CST_METER_MAS_IMPORT;

  getNoDials(): number;
  setNoDials(value: number): CST_METER_MAS_IMPORT;
  hasNoDials(): boolean;
  clearNoDials(): CST_METER_MAS_IMPORT;

  getMeterType(): string;
  setMeterType(value: string): CST_METER_MAS_IMPORT;
  hasMeterType(): boolean;
  clearMeterType(): CST_METER_MAS_IMPORT;

  getMeterRef(): string;
  setMeterRef(value: string): CST_METER_MAS_IMPORT;
  hasMeterRef(): boolean;
  clearMeterRef(): CST_METER_MAS_IMPORT;

  getMeterSizeDesc(): string;
  setMeterSizeDesc(value: string): CST_METER_MAS_IMPORT;
  hasMeterSizeDesc(): boolean;
  clearMeterSizeDesc(): CST_METER_MAS_IMPORT;

  getSerialNo(): string;
  setSerialNo(value: string): CST_METER_MAS_IMPORT;
  hasSerialNo(): boolean;
  clearSerialNo(): CST_METER_MAS_IMPORT;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CST_METER_MAS_IMPORT;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CST_METER_MAS_IMPORT;

  getMeterSizeImport(): number;
  setMeterSizeImport(value: number): CST_METER_MAS_IMPORT;
  hasMeterSizeImport(): boolean;
  clearMeterSizeImport(): CST_METER_MAS_IMPORT;

  getMeterConditionImort(): string;
  setMeterConditionImort(value: string): CST_METER_MAS_IMPORT;
  hasMeterConditionImort(): boolean;
  clearMeterConditionImort(): CST_METER_MAS_IMPORT;

  getOpStatusImport(): MeterOperationStatus;
  setOpStatusImport(value: MeterOperationStatus): CST_METER_MAS_IMPORT;
  hasOpStatusImport(): boolean;
  clearOpStatusImport(): CST_METER_MAS_IMPORT;

  getMeterTypeImport(): string;
  setMeterTypeImport(value: string): CST_METER_MAS_IMPORT;
  hasMeterTypeImport(): boolean;
  clearMeterTypeImport(): CST_METER_MAS_IMPORT;

  getMeterRefImport(): string;
  setMeterRefImport(value: string): CST_METER_MAS_IMPORT;
  hasMeterRefImport(): boolean;
  clearMeterRefImport(): CST_METER_MAS_IMPORT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_METER_MAS_IMPORT.AsObject;
  static toObject(includeInstance: boolean, msg: CST_METER_MAS_IMPORT): CST_METER_MAS_IMPORT.AsObject;
  static serializeBinaryToWriter(message: CST_METER_MAS_IMPORT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_METER_MAS_IMPORT;
  static deserializeBinaryFromReader(message: CST_METER_MAS_IMPORT, reader: jspb.BinaryReader): CST_METER_MAS_IMPORT;
}

export namespace CST_METER_MAS_IMPORT {
  export type AsObject = {
    meterId: number,
    meterCondition: string,
    opStatus: MeterOperationStatus,
    meterSize: number,
    isPrepaid: boolean,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    parentMeterId?: number,
    installDate?: date_pb.MasDateTime.AsObject,
    removalDate?: date_pb.MasDateTime.AsObject,
    noDials?: number,
    meterType?: string,
    meterRef?: string,
    meterSizeDesc?: string,
    serialNo?: string,
    meterTagNo?: string,
    meterSizeImport?: number,
    meterConditionImort?: string,
    opStatusImport?: MeterOperationStatus,
    meterTypeImport?: string,
    meterRefImport?: string,
  }
}

export class LU_METER_SIZES extends jspb.Message {
  getId(): number;
  setId(value: number): LU_METER_SIZES;

  getBillingId(): string;
  setBillingId(value: string): LU_METER_SIZES;

  getDescription(): string;
  setDescription(value: string): LU_METER_SIZES;

  getSizeInMm(): number;
  setSizeInMm(value: number): LU_METER_SIZES;
  hasSizeInMm(): boolean;
  clearSizeInMm(): LU_METER_SIZES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_METER_SIZES.AsObject;
  static toObject(includeInstance: boolean, msg: LU_METER_SIZES): LU_METER_SIZES.AsObject;
  static serializeBinaryToWriter(message: LU_METER_SIZES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_METER_SIZES;
  static deserializeBinaryFromReader(message: LU_METER_SIZES, reader: jspb.BinaryReader): LU_METER_SIZES;
}

export namespace LU_METER_SIZES {
  export type AsObject = {
    id: number,
    billingId: string,
    description: string,
    sizeInMm?: number,
  }
}

export class ArrLU_METER_SIZES extends jspb.Message {
  getLuMeterSizesList(): Array<LU_METER_SIZES>;
  setLuMeterSizesList(value: Array<LU_METER_SIZES>): ArrLU_METER_SIZES;
  clearLuMeterSizesList(): ArrLU_METER_SIZES;
  addLuMeterSizes(value?: LU_METER_SIZES, index?: number): LU_METER_SIZES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrLU_METER_SIZES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrLU_METER_SIZES): ArrLU_METER_SIZES.AsObject;
  static serializeBinaryToWriter(message: ArrLU_METER_SIZES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrLU_METER_SIZES;
  static deserializeBinaryFromReader(message: ArrLU_METER_SIZES, reader: jspb.BinaryReader): ArrLU_METER_SIZES;
}

export namespace ArrLU_METER_SIZES {
  export type AsObject = {
    luMeterSizesList: Array<LU_METER_SIZES.AsObject>,
  }
}

export class CS_CUSTKEYS_RANGE extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CS_CUSTKEYS_RANGE;

  getAccnoMin(): number;
  setAccnoMin(value: number): CS_CUSTKEYS_RANGE;

  getAccnoMax(): number;
  setAccnoMax(value: number): CS_CUSTKEYS_RANGE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_CUSTKEYS_RANGE.AsObject;
  static toObject(includeInstance: boolean, msg: CS_CUSTKEYS_RANGE): CS_CUSTKEYS_RANGE.AsObject;
  static serializeBinaryToWriter(message: CS_CUSTKEYS_RANGE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_CUSTKEYS_RANGE;
  static deserializeBinaryFromReader(message: CS_CUSTKEYS_RANGE, reader: jspb.BinaryReader): CS_CUSTKEYS_RANGE;
}

export namespace CS_CUSTKEYS_RANGE {
  export type AsObject = {
    stationNo: number,
    accnoMin: number,
    accnoMax: number,
  }
}

export class CS_USERS extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CS_USERS;

  getPassword(): string;
  setPassword(value: string): CS_USERS;

  getIp(): string;
  setIp(value: string): CS_USERS;

  getPort(): number;
  setPort(value: number): CS_USERS;

  getHttps(): boolean;
  setHttps(value: boolean): CS_USERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_USERS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_USERS): CS_USERS.AsObject;
  static serializeBinaryToWriter(message: CS_USERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_USERS;
  static deserializeBinaryFromReader(message: CS_USERS, reader: jspb.BinaryReader): CS_USERS;
}

export namespace CS_USERS {
  export type AsObject = {
    username: string,
    password: string,
    ip: string,
    port: number,
    https: boolean,
  }
}

export class BLOCKED_CUSTOMERS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): BLOCKED_CUSTOMERS;

  getIsBlocked(): boolean;
  setIsBlocked(value: boolean): BLOCKED_CUSTOMERS;

  getStampUser(): string;
  setStampUser(value: string): BLOCKED_CUSTOMERS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): BLOCKED_CUSTOMERS;
  hasStampDate(): boolean;
  clearStampDate(): BLOCKED_CUSTOMERS;

  getStampDateUnix(): number;
  setStampDateUnix(value: number): BLOCKED_CUSTOMERS;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): BLOCKED_CUSTOMERS;

  getReason(): string;
  setReason(value: string): BLOCKED_CUSTOMERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BLOCKED_CUSTOMERS.AsObject;
  static toObject(includeInstance: boolean, msg: BLOCKED_CUSTOMERS): BLOCKED_CUSTOMERS.AsObject;
  static serializeBinaryToWriter(message: BLOCKED_CUSTOMERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BLOCKED_CUSTOMERS;
  static deserializeBinaryFromReader(message: BLOCKED_CUSTOMERS, reader: jspb.BinaryReader): BLOCKED_CUSTOMERS;
}

export namespace BLOCKED_CUSTOMERS {
  export type AsObject = {
    custkey: string,
    isBlocked: boolean,
    stampUser: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampDateUnix: number,
    isFinal: boolean,
    reason: string,
  }
}

export class CreateWaterPreviewRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CreateWaterPreviewRq;

  getUaAddress(): string;
  setUaAddress(value: string): CreateWaterPreviewRq;
  hasUaAddress(): boolean;
  clearUaAddress(): CreateWaterPreviewRq;

  getAppId(): number;
  setAppId(value: number): CreateWaterPreviewRq;
  hasAppId(): boolean;
  clearAppId(): CreateWaterPreviewRq;

  getCTypeGroup(): string;
  setCTypeGroup(value: string): CreateWaterPreviewRq;
  hasCTypeGroup(): boolean;
  clearCTypeGroup(): CreateWaterPreviewRq;

  getHasFile(): boolean;
  setHasFile(value: boolean): CreateWaterPreviewRq;
  hasHasFile(): boolean;
  clearHasFile(): CreateWaterPreviewRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWaterPreviewRq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWaterPreviewRq): CreateWaterPreviewRq.AsObject;
  static serializeBinaryToWriter(message: CreateWaterPreviewRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWaterPreviewRq;
  static deserializeBinaryFromReader(message: CreateWaterPreviewRq, reader: jspb.BinaryReader): CreateWaterPreviewRq;
}

export namespace CreateWaterPreviewRq {
  export type AsObject = {
    custkey: string,
    uaAddress?: string,
    appId?: number,
    cTypeGroup?: string,
    hasFile?: boolean,
  }
}

export class BillGroupBookNoRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): BillGroupBookNoRq;

  getBillgroup(): string;
  setBillgroup(value: string): BillGroupBookNoRq;

  getBookNo(): string;
  setBookNo(value: string): BillGroupBookNoRq;
  hasBookNo(): boolean;
  clearBookNo(): BillGroupBookNoRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillGroupBookNoRq.AsObject;
  static toObject(includeInstance: boolean, msg: BillGroupBookNoRq): BillGroupBookNoRq.AsObject;
  static serializeBinaryToWriter(message: BillGroupBookNoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillGroupBookNoRq;
  static deserializeBinaryFromReader(message: BillGroupBookNoRq, reader: jspb.BinaryReader): BillGroupBookNoRq;
}

export namespace BillGroupBookNoRq {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo?: string,
  }
}

export class AllCustomerData extends jspb.Message {
  getCstCustomersList(): Array<CST_CUSTOMERS>;
  setCstCustomersList(value: Array<CST_CUSTOMERS>): AllCustomerData;
  clearCstCustomersList(): AllCustomerData;
  addCstCustomers(value?: CST_CUSTOMERS, index?: number): CST_CUSTOMERS;

  getCstPropertyList(): Array<CST_PROPERTY>;
  setCstPropertyList(value: Array<CST_PROPERTY>): AllCustomerData;
  clearCstPropertyList(): AllCustomerData;
  addCstProperty(value?: CST_PROPERTY, index?: number): CST_PROPERTY;

  getCstConnectionList(): Array<CST_CONNECTION>;
  setCstConnectionList(value: Array<CST_CONNECTION>): AllCustomerData;
  clearCstConnectionList(): AllCustomerData;
  addCstConnection(value?: CST_CONNECTION, index?: number): CST_CONNECTION;

  getCstServicesList(): Array<CST_SERVICES>;
  setCstServicesList(value: Array<CST_SERVICES>): AllCustomerData;
  clearCstServicesList(): AllCustomerData;
  addCstServices(value?: CST_SERVICES, index?: number): CST_SERVICES;

  getCstMeterList(): Array<CST_METER>;
  setCstMeterList(value: Array<CST_METER>): AllCustomerData;
  clearCstMeterList(): AllCustomerData;
  addCstMeter(value?: CST_METER, index?: number): CST_METER;

  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): AllCustomerData;
  clearCstMultiCtgList(): AllCustomerData;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCustomerData.AsObject;
  static toObject(includeInstance: boolean, msg: AllCustomerData): AllCustomerData.AsObject;
  static serializeBinaryToWriter(message: AllCustomerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCustomerData;
  static deserializeBinaryFromReader(message: AllCustomerData, reader: jspb.BinaryReader): AllCustomerData;
}

export namespace AllCustomerData {
  export type AsObject = {
    cstCustomersList: Array<CST_CUSTOMERS.AsObject>,
    cstPropertyList: Array<CST_PROPERTY.AsObject>,
    cstConnectionList: Array<CST_CONNECTION.AsObject>,
    cstServicesList: Array<CST_SERVICES.AsObject>,
    cstMeterList: Array<CST_METER.AsObject>,
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
  }
}

export class CUSTOMER_MAIN_DATA extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_MAIN_DATA;

  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_MAIN_DATA;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_MAIN_DATA;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_MAIN_DATA;

  getWalkNo(): number;
  setWalkNo(value: number): CUSTOMER_MAIN_DATA;

  getSurname(): string;
  setSurname(value: string): CUSTOMER_MAIN_DATA;

  getUaAddress(): string;
  setUaAddress(value: string): CUSTOMER_MAIN_DATA;

  getNationalId(): string;
  setNationalId(value: string): CUSTOMER_MAIN_DATA;
  hasNationalId(): boolean;
  clearNationalId(): CUSTOMER_MAIN_DATA;

  getCTypeId(): string;
  setCTypeId(value: string): CUSTOMER_MAIN_DATA;
  hasCTypeId(): boolean;
  clearCTypeId(): CUSTOMER_MAIN_DATA;

  getCTypeIdDesc(): string;
  setCTypeIdDesc(value: string): CUSTOMER_MAIN_DATA;
  hasCTypeIdDesc(): boolean;
  clearCTypeIdDesc(): CUSTOMER_MAIN_DATA;

  getBillgroupDesc(): string;
  setBillgroupDesc(value: string): CUSTOMER_MAIN_DATA;
  hasBillgroupDesc(): boolean;
  clearBillgroupDesc(): CUSTOMER_MAIN_DATA;

  getBookNoDesc(): string;
  setBookNoDesc(value: string): CUSTOMER_MAIN_DATA;
  hasBookNoDesc(): boolean;
  clearBookNoDesc(): CUSTOMER_MAIN_DATA;

  getOldKey(): string;
  setOldKey(value: string): CUSTOMER_MAIN_DATA;
  hasOldKey(): boolean;
  clearOldKey(): CUSTOMER_MAIN_DATA;

  getPropRef(): string;
  setPropRef(value: string): CUSTOMER_MAIN_DATA;
  hasPropRef(): boolean;
  clearPropRef(): CUSTOMER_MAIN_DATA;

  getStationName(): string;
  setStationName(value: string): CUSTOMER_MAIN_DATA;
  hasStationName(): boolean;
  clearStationName(): CUSTOMER_MAIN_DATA;

  getCtypeGroupId(): string;
  setCtypeGroupId(value: string): CUSTOMER_MAIN_DATA;
  hasCtypeGroupId(): boolean;
  clearCtypeGroupId(): CUSTOMER_MAIN_DATA;

  getCtypeGroupIdDesc(): string;
  setCtypeGroupIdDesc(value: string): CUSTOMER_MAIN_DATA;
  hasCtypeGroupIdDesc(): boolean;
  clearCtypeGroupIdDesc(): CUSTOMER_MAIN_DATA;

  getMeterId(): number;
  setMeterId(value: number): CUSTOMER_MAIN_DATA;
  hasMeterId(): boolean;
  clearMeterId(): CUSTOMER_MAIN_DATA;

  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): CUSTOMER_MAIN_DATA;
  clearCstMultiCtgList(): CUSTOMER_MAIN_DATA;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  getTenantsList(): Array<CST_TENANT>;
  setTenantsList(value: Array<CST_TENANT>): CUSTOMER_MAIN_DATA;
  clearTenantsList(): CUSTOMER_MAIN_DATA;
  addTenants(value?: CST_TENANT, index?: number): CST_TENANT;

  getCustwalletList(): Array<CustWallet>;
  setCustwalletList(value: Array<CustWallet>): CUSTOMER_MAIN_DATA;
  clearCustwalletList(): CUSTOMER_MAIN_DATA;
  addCustwallet(value?: CustWallet, index?: number): CustWallet;

  getMobileNo(): string;
  setMobileNo(value: string): CUSTOMER_MAIN_DATA;
  hasMobileNo(): boolean;
  clearMobileNo(): CUSTOMER_MAIN_DATA;

  getCrNo(): string;
  setCrNo(value: string): CUSTOMER_MAIN_DATA;
  hasCrNo(): boolean;
  clearCrNo(): CUSTOMER_MAIN_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_MAIN_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_MAIN_DATA): CUSTOMER_MAIN_DATA.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_MAIN_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_MAIN_DATA;
  static deserializeBinaryFromReader(message: CUSTOMER_MAIN_DATA, reader: jspb.BinaryReader): CUSTOMER_MAIN_DATA;
}

export namespace CUSTOMER_MAIN_DATA {
  export type AsObject = {
    stationNo: number,
    custkey: string,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    surname: string,
    uaAddress: string,
    nationalId?: string,
    cTypeId?: string,
    cTypeIdDesc?: string,
    billgroupDesc?: string,
    bookNoDesc?: string,
    oldKey?: string,
    propRef?: string,
    stationName?: string,
    ctypeGroupId?: string,
    ctypeGroupIdDesc?: string,
    meterId?: number,
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
    tenantsList: Array<CST_TENANT.AsObject>,
    custwalletList: Array<CustWallet.AsObject>,
    mobileNo?: string,
    crNo?: string,
  }
}

export class ALL_CUSTOMER_MAIN_DATA extends jspb.Message {
  getCustomerMap(): jspb.Map<string, CUSTOMER_MAIN_DATA>;
  clearCustomerMap(): ALL_CUSTOMER_MAIN_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_CUSTOMER_MAIN_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_CUSTOMER_MAIN_DATA): ALL_CUSTOMER_MAIN_DATA.AsObject;
  static serializeBinaryToWriter(message: ALL_CUSTOMER_MAIN_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_CUSTOMER_MAIN_DATA;
  static deserializeBinaryFromReader(message: ALL_CUSTOMER_MAIN_DATA, reader: jspb.BinaryReader): ALL_CUSTOMER_MAIN_DATA;
}

export namespace ALL_CUSTOMER_MAIN_DATA {
  export type AsObject = {
    customerMap: Array<[string, CUSTOMER_MAIN_DATA.AsObject]>,
  }
}

export class CUSTOMER_DATA extends jspb.Message {
  getCstCustomers(): CST_CUSTOMERS | undefined;
  setCstCustomers(value?: CST_CUSTOMERS): CUSTOMER_DATA;
  hasCstCustomers(): boolean;
  clearCstCustomers(): CUSTOMER_DATA;

  getCstPropertyList(): Array<CST_PROPERTY>;
  setCstPropertyList(value: Array<CST_PROPERTY>): CUSTOMER_DATA;
  clearCstPropertyList(): CUSTOMER_DATA;
  addCstProperty(value?: CST_PROPERTY, index?: number): CST_PROPERTY;

  getCstConnectionList(): Array<CST_CONNECTION>;
  setCstConnectionList(value: Array<CST_CONNECTION>): CUSTOMER_DATA;
  clearCstConnectionList(): CUSTOMER_DATA;
  addCstConnection(value?: CST_CONNECTION, index?: number): CST_CONNECTION;

  getCstServicesList(): Array<CST_SERVICES>;
  setCstServicesList(value: Array<CST_SERVICES>): CUSTOMER_DATA;
  clearCstServicesList(): CUSTOMER_DATA;
  addCstServices(value?: CST_SERVICES, index?: number): CST_SERVICES;

  getCstMeterList(): Array<CST_METER>;
  setCstMeterList(value: Array<CST_METER>): CUSTOMER_DATA;
  clearCstMeterList(): CUSTOMER_DATA;
  addCstMeter(value?: CST_METER, index?: number): CST_METER;

  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): CUSTOMER_DATA;
  clearCstMultiCtgList(): CUSTOMER_DATA;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  getIsMultiCtg(): boolean;
  setIsMultiCtg(value: boolean): CUSTOMER_DATA;
  hasIsMultiCtg(): boolean;
  clearIsMultiCtg(): CUSTOMER_DATA;

  getTenantsList(): Array<CST_TENANT>;
  setTenantsList(value: Array<CST_TENANT>): CUSTOMER_DATA;
  clearTenantsList(): CUSTOMER_DATA;
  addTenants(value?: CST_TENANT, index?: number): CST_TENANT;

  getIsCharity(): boolean;
  setIsCharity(value: boolean): CUSTOMER_DATA;
  hasIsCharity(): boolean;
  clearIsCharity(): CUSTOMER_DATA;

  getIsCharitySewer(): boolean;
  setIsCharitySewer(value: boolean): CUSTOMER_DATA;
  hasIsCharitySewer(): boolean;
  clearIsCharitySewer(): CUSTOMER_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_DATA): CUSTOMER_DATA.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_DATA;
  static deserializeBinaryFromReader(message: CUSTOMER_DATA, reader: jspb.BinaryReader): CUSTOMER_DATA;
}

export namespace CUSTOMER_DATA {
  export type AsObject = {
    cstCustomers?: CST_CUSTOMERS.AsObject,
    cstPropertyList: Array<CST_PROPERTY.AsObject>,
    cstConnectionList: Array<CST_CONNECTION.AsObject>,
    cstServicesList: Array<CST_SERVICES.AsObject>,
    cstMeterList: Array<CST_METER.AsObject>,
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
    isMultiCtg?: boolean,
    tenantsList: Array<CST_TENANT.AsObject>,
    isCharity?: boolean,
    isCharitySewer?: boolean,
  }
}

export class ArrCUSTOMER_DATA extends jspb.Message {
  getCustomerDataList(): Array<CUSTOMER_DATA>;
  setCustomerDataList(value: Array<CUSTOMER_DATA>): ArrCUSTOMER_DATA;
  clearCustomerDataList(): ArrCUSTOMER_DATA;
  addCustomerData(value?: CUSTOMER_DATA, index?: number): CUSTOMER_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCUSTOMER_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCUSTOMER_DATA): ArrCUSTOMER_DATA.AsObject;
  static serializeBinaryToWriter(message: ArrCUSTOMER_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCUSTOMER_DATA;
  static deserializeBinaryFromReader(message: ArrCUSTOMER_DATA, reader: jspb.BinaryReader): ArrCUSTOMER_DATA;
}

export namespace ArrCUSTOMER_DATA {
  export type AsObject = {
    customerDataList: Array<CUSTOMER_DATA.AsObject>,
  }
}

export class StationNoCustkeyRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): StationNoCustkeyRq;

  getCustkey(): string;
  setCustkey(value: string): StationNoCustkeyRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationNoCustkeyRq.AsObject;
  static toObject(includeInstance: boolean, msg: StationNoCustkeyRq): StationNoCustkeyRq.AsObject;
  static serializeBinaryToWriter(message: StationNoCustkeyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationNoCustkeyRq;
  static deserializeBinaryFromReader(message: StationNoCustkeyRq, reader: jspb.BinaryReader): StationNoCustkeyRq;
}

export namespace StationNoCustkeyRq {
  export type AsObject = {
    stationNo: number,
    custkey: string,
  }
}

export class StationNoBillGroupRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): StationNoBillGroupRq;

  getBillgroup(): string;
  setBillgroup(value: string): StationNoBillGroupRq;

  getNoFilterConnStatus(): boolean;
  setNoFilterConnStatus(value: boolean): StationNoBillGroupRq;
  hasNoFilterConnStatus(): boolean;
  clearNoFilterConnStatus(): StationNoBillGroupRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationNoBillGroupRq.AsObject;
  static toObject(includeInstance: boolean, msg: StationNoBillGroupRq): StationNoBillGroupRq.AsObject;
  static serializeBinaryToWriter(message: StationNoBillGroupRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationNoBillGroupRq;
  static deserializeBinaryFromReader(message: StationNoBillGroupRq, reader: jspb.BinaryReader): StationNoBillGroupRq;
}

export namespace StationNoBillGroupRq {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    noFilterConnStatus?: boolean,
  }
}

export class CreateNewPropertyRq extends jspb.Message {
  getCType(): string;
  setCType(value: string): CreateNewPropertyRq;

  getStampUser(): string;
  setStampUser(value: string): CreateNewPropertyRq;
  hasStampUser(): boolean;
  clearStampUser(): CreateNewPropertyRq;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CreateNewPropertyRq;
  hasStampDate(): boolean;
  clearStampDate(): CreateNewPropertyRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewPropertyRq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewPropertyRq): CreateNewPropertyRq.AsObject;
  static serializeBinaryToWriter(message: CreateNewPropertyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewPropertyRq;
  static deserializeBinaryFromReader(message: CreateNewPropertyRq, reader: jspb.BinaryReader): CreateNewPropertyRq;
}

export namespace CreateNewPropertyRq {
  export type AsObject = {
    cType: string,
    stampUser?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
  }
}

export class OpenNewAccountRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): OpenNewAccountRq;

  getBillgroup(): string;
  setBillgroup(value: string): OpenNewAccountRq;

  getBookNo(): string;
  setBookNo(value: string): OpenNewAccountRq;

  getSurname(): string;
  setSurname(value: string): OpenNewAccountRq;

  getUaAddress(): string;
  setUaAddress(value: string): OpenNewAccountRq;

  getEMail(): string;
  setEMail(value: string): OpenNewAccountRq;
  hasEMail(): boolean;
  clearEMail(): OpenNewAccountRq;

  getNid(): string;
  setNid(value: string): OpenNewAccountRq;
  hasNid(): boolean;
  clearNid(): OpenNewAccountRq;

  getPassportId(): string;
  setPassportId(value: string): OpenNewAccountRq;
  hasPassportId(): boolean;
  clearPassportId(): OpenNewAccountRq;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): OpenNewAccountRq;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): OpenNewAccountRq;

  getMobileNo(): string;
  setMobileNo(value: string): OpenNewAccountRq;
  hasMobileNo(): boolean;
  clearMobileNo(): OpenNewAccountRq;

  getWalkNo(): number;
  setWalkNo(value: number): OpenNewAccountRq;

  getAppId(): number;
  setAppId(value: number): OpenNewAccountRq;
  hasAppId(): boolean;
  clearAppId(): OpenNewAccountRq;

  getBbmForm(): string;
  setBbmForm(value: string): OpenNewAccountRq;
  hasBbmForm(): boolean;
  clearBbmForm(): OpenNewAccountRq;

  getTaxNo(): string;
  setTaxNo(value: string): OpenNewAccountRq;
  hasTaxNo(): boolean;
  clearTaxNo(): OpenNewAccountRq;

  getOldKey(): string;
  setOldKey(value: string): OpenNewAccountRq;
  hasOldKey(): boolean;
  clearOldKey(): OpenNewAccountRq;

  getFirstName(): string;
  setFirstName(value: string): OpenNewAccountRq;
  hasFirstName(): boolean;
  clearFirstName(): OpenNewAccountRq;

  getSecondName(): string;
  setSecondName(value: string): OpenNewAccountRq;
  hasSecondName(): boolean;
  clearSecondName(): OpenNewAccountRq;

  getThirdName(): string;
  setThirdName(value: string): OpenNewAccountRq;
  hasThirdName(): boolean;
  clearThirdName(): OpenNewAccountRq;

  getFourthName(): string;
  setFourthName(value: string): OpenNewAccountRq;
  hasFourthName(): boolean;
  clearFourthName(): OpenNewAccountRq;

  getFullName(): string;
  setFullName(value: string): OpenNewAccountRq;
  hasFullName(): boolean;
  clearFullName(): OpenNewAccountRq;

  getGovAddress(): string;
  setGovAddress(value: string): OpenNewAccountRq;
  hasGovAddress(): boolean;
  clearGovAddress(): OpenNewAccountRq;

  getCityAddress(): string;
  setCityAddress(value: string): OpenNewAccountRq;
  hasCityAddress(): boolean;
  clearCityAddress(): OpenNewAccountRq;

  getDistricAddress(): string;
  setDistricAddress(value: string): OpenNewAccountRq;
  hasDistricAddress(): boolean;
  clearDistricAddress(): OpenNewAccountRq;

  getAreaAddress(): string;
  setAreaAddress(value: string): OpenNewAccountRq;
  hasAreaAddress(): boolean;
  clearAreaAddress(): OpenNewAccountRq;

  getStreetAddress(): string;
  setStreetAddress(value: string): OpenNewAccountRq;
  hasStreetAddress(): boolean;
  clearStreetAddress(): OpenNewAccountRq;

  getBuildingAddress(): string;
  setBuildingAddress(value: string): OpenNewAccountRq;
  hasBuildingAddress(): boolean;
  clearBuildingAddress(): OpenNewAccountRq;

  getFloorAddress(): string;
  setFloorAddress(value: string): OpenNewAccountRq;
  hasFloorAddress(): boolean;
  clearFloorAddress(): OpenNewAccountRq;

  getFlatAddress(): string;
  setFlatAddress(value: string): OpenNewAccountRq;
  hasFlatAddress(): boolean;
  clearFlatAddress(): OpenNewAccountRq;

  getFinalAddress(): string;
  setFinalAddress(value: string): OpenNewAccountRq;
  hasFinalAddress(): boolean;
  clearFinalAddress(): OpenNewAccountRq;

  getSettingcreate(): string;
  setSettingcreate(value: string): OpenNewAccountRq;
  hasSettingcreate(): boolean;
  clearSettingcreate(): OpenNewAccountRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenNewAccountRq.AsObject;
  static toObject(includeInstance: boolean, msg: OpenNewAccountRq): OpenNewAccountRq.AsObject;
  static serializeBinaryToWriter(message: OpenNewAccountRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenNewAccountRq;
  static deserializeBinaryFromReader(message: OpenNewAccountRq, reader: jspb.BinaryReader): OpenNewAccountRq;
}

export namespace OpenNewAccountRq {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo: string,
    surname: string,
    uaAddress: string,
    eMail?: string,
    nid?: string,
    passportId?: string,
    prevCustkey?: string,
    mobileNo?: string,
    walkNo: number,
    appId?: number,
    bbmForm?: string,
    taxNo?: string,
    oldKey?: string,
    firstName?: string,
    secondName?: string,
    thirdName?: string,
    fourthName?: string,
    fullName?: string,
    govAddress?: string,
    cityAddress?: string,
    districAddress?: string,
    areaAddress?: string,
    streetAddress?: string,
    buildingAddress?: string,
    floorAddress?: string,
    flatAddress?: string,
    finalAddress?: string,
    settingcreate?: string,
  }
}

export class CS_ACTIVITIES extends jspb.Message {
  getId(): number;
  setId(value: number): CS_ACTIVITIES;

  getActName(): string;
  setActName(value: string): CS_ACTIVITIES;

  getDescription(): string;
  setDescription(value: string): CS_ACTIVITIES;
  hasDescription(): boolean;
  clearDescription(): CS_ACTIVITIES;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): CS_ACTIVITIES;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): CS_ACTIVITIES;

  getWithFees(): boolean;
  setWithFees(value: boolean): CS_ACTIVITIES;

  getCanMakeMoreApp(): boolean;
  setCanMakeMoreApp(value: boolean): CS_ACTIVITIES;
  hasCanMakeMoreApp(): boolean;
  clearCanMakeMoreApp(): CS_ACTIVITIES;

  getLuFieldsList(): Array<LU_FIELDS>;
  setLuFieldsList(value: Array<LU_FIELDS>): CS_ACTIVITIES;
  clearLuFieldsList(): CS_ACTIVITIES;
  addLuFields(value?: LU_FIELDS, index?: number): LU_FIELDS;

  getCloneId(): number;
  setCloneId(value: number): CS_ACTIVITIES;
  hasCloneId(): boolean;
  clearCloneId(): CS_ACTIVITIES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_ACTIVITIES.AsObject;
  static toObject(includeInstance: boolean, msg: CS_ACTIVITIES): CS_ACTIVITIES.AsObject;
  static serializeBinaryToWriter(message: CS_ACTIVITIES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_ACTIVITIES;
  static deserializeBinaryFromReader(message: CS_ACTIVITIES, reader: jspb.BinaryReader): CS_ACTIVITIES;
}

export namespace CS_ACTIVITIES {
  export type AsObject = {
    id: number,
    actName: string,
    description?: string,
    descriptionEn?: string,
    withFees: boolean,
    canMakeMoreApp?: boolean,
    luFieldsList: Array<LU_FIELDS.AsObject>,
    cloneId?: number,
  }
}

export class ArrCS_ACTIVITIES extends jspb.Message {
  getCsActivitiesList(): Array<CS_ACTIVITIES>;
  setCsActivitiesList(value: Array<CS_ACTIVITIES>): ArrCS_ACTIVITIES;
  clearCsActivitiesList(): ArrCS_ACTIVITIES;
  addCsActivities(value?: CS_ACTIVITIES, index?: number): CS_ACTIVITIES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCS_ACTIVITIES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCS_ACTIVITIES): ArrCS_ACTIVITIES.AsObject;
  static serializeBinaryToWriter(message: ArrCS_ACTIVITIES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCS_ACTIVITIES;
  static deserializeBinaryFromReader(message: ArrCS_ACTIVITIES, reader: jspb.BinaryReader): ArrCS_ACTIVITIES;
}

export namespace ArrCS_ACTIVITIES {
  export type AsObject = {
    csActivitiesList: Array<CS_ACTIVITIES.AsObject>,
  }
}

export class CS_FEES extends jspb.Message {
  getId(): number;
  setId(value: number): CS_FEES;
  hasId(): boolean;
  clearId(): CS_FEES;

  getObjFeeId(): number;
  setObjFeeId(value: number): CS_FEES;

  getAppId(): number;
  setAppId(value: number): CS_FEES;

  getDescription(): string;
  setDescription(value: string): CS_FEES;

  getAmount(): number;
  setAmount(value: number): CS_FEES;

  getTransType(): number;
  setTransType(value: number): CS_FEES;

  getTransStype(): number;
  setTransStype(value: number): CS_FEES;

  getCustkey(): string;
  setCustkey(value: string): CS_FEES;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CS_FEES;
  hasStampDate(): boolean;
  clearStampDate(): CS_FEES;

  getOrgAmount(): number;
  setOrgAmount(value: number): CS_FEES;
  hasOrgAmount(): boolean;
  clearOrgAmount(): CS_FEES;

  getVat(): number;
  setVat(value: number): CS_FEES;
  hasVat(): boolean;
  clearVat(): CS_FEES;

  getAdmin(): number;
  setAdmin(value: number): CS_FEES;
  hasAdmin(): boolean;
  clearAdmin(): CS_FEES;

  getAdminVat(): number;
  setAdminVat(value: number): CS_FEES;
  hasAdminVat(): boolean;
  clearAdminVat(): CS_FEES;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CS_FEES;

  getPaymentTransType(): number;
  setPaymentTransType(value: number): CS_FEES;

  getPaymentTransStype(): number;
  setPaymentTransStype(value: number): CS_FEES;

  getFeeParentId(): number;
  setFeeParentId(value: number): CS_FEES;

  getRelatedFeeId(): number;
  setRelatedFeeId(value: number): CS_FEES;
  hasRelatedFeeId(): boolean;
  clearRelatedFeeId(): CS_FEES;

  getFeesBeforeInstallment(): number;
  setFeesBeforeInstallment(value: number): CS_FEES;
  hasFeesBeforeInstallment(): boolean;
  clearFeesBeforeInstallment(): CS_FEES;

  getInstallmentAmount(): number;
  setInstallmentAmount(value: number): CS_FEES;
  hasInstallmentAmount(): boolean;
  clearInstallmentAmount(): CS_FEES;

  getPostPaidAmount(): number;
  setPostPaidAmount(value: number): CS_FEES;
  hasPostPaidAmount(): boolean;
  clearPostPaidAmount(): CS_FEES;

  getNotCharge(): boolean;
  setNotCharge(value: boolean): CS_FEES;
  hasNotCharge(): boolean;
  clearNotCharge(): CS_FEES;

  getStoreInstallFees(): number;
  setStoreInstallFees(value: number): CS_FEES;
  hasStoreInstallFees(): boolean;
  clearStoreInstallFees(): CS_FEES;

  getStoreFeesAmt(): number;
  setStoreFeesAmt(value: number): CS_FEES;
  hasStoreFeesAmt(): boolean;
  clearStoreFeesAmt(): CS_FEES;

  getFeesTransNo(): number;
  setFeesTransNo(value: number): CS_FEES;
  hasFeesTransNo(): boolean;
  clearFeesTransNo(): CS_FEES;

  getNotes(): string;
  setNotes(value: string): CS_FEES;
  hasNotes(): boolean;
  clearNotes(): CS_FEES;

  getObjName(): string;
  setObjName(value: string): CS_FEES;
  hasObjName(): boolean;
  clearObjName(): CS_FEES;

  getIsCross(): boolean;
  setIsCross(value: boolean): CS_FEES;
  hasIsCross(): boolean;
  clearIsCross(): CS_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: CS_FEES): CS_FEES.AsObject;
  static serializeBinaryToWriter(message: CS_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_FEES;
  static deserializeBinaryFromReader(message: CS_FEES, reader: jspb.BinaryReader): CS_FEES;
}

export namespace CS_FEES {
  export type AsObject = {
    id?: number,
    objFeeId: number,
    appId: number,
    description: string,
    amount: number,
    transType: number,
    transStype: number,
    custkey: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    orgAmount?: number,
    vat?: number,
    admin?: number,
    adminVat?: number,
    isCancelled: boolean,
    paymentTransType: number,
    paymentTransStype: number,
    feeParentId: number,
    relatedFeeId?: number,
    feesBeforeInstallment?: number,
    installmentAmount?: number,
    postPaidAmount?: number,
    notCharge?: boolean,
    storeInstallFees?: number,
    storeFeesAmt?: number,
    feesTransNo?: number,
    notes?: string,
    objName?: string,
    isCross?: boolean,
  }
}

export class LU_FEES_DESCRIPTIONS extends jspb.Message {
  getId(): number;
  setId(value: number): LU_FEES_DESCRIPTIONS;

  getDescribe(): string;
  setDescribe(value: string): LU_FEES_DESCRIPTIONS;

  getDescribeEn(): string;
  setDescribeEn(value: string): LU_FEES_DESCRIPTIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_FEES_DESCRIPTIONS.AsObject;
  static toObject(includeInstance: boolean, msg: LU_FEES_DESCRIPTIONS): LU_FEES_DESCRIPTIONS.AsObject;
  static serializeBinaryToWriter(message: LU_FEES_DESCRIPTIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_FEES_DESCRIPTIONS;
  static deserializeBinaryFromReader(message: LU_FEES_DESCRIPTIONS, reader: jspb.BinaryReader): LU_FEES_DESCRIPTIONS;
}

export namespace LU_FEES_DESCRIPTIONS {
  export type AsObject = {
    id: number,
    describe: string,
    describeEn: string,
  }
}

export class APP_FEES extends jspb.Message {
  getCsFeesList(): Array<CS_FEES>;
  setCsFeesList(value: Array<CS_FEES>): APP_FEES;
  clearCsFeesList(): APP_FEES;
  addCsFees(value?: CS_FEES, index?: number): CS_FEES;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): APP_FEES;
  hasTrace(): boolean;
  clearTrace(): APP_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APP_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: APP_FEES): APP_FEES.AsObject;
  static serializeBinaryToWriter(message: APP_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APP_FEES;
  static deserializeBinaryFromReader(message: APP_FEES, reader: jspb.BinaryReader): APP_FEES;
}

export namespace APP_FEES {
  export type AsObject = {
    csFeesList: Array<CS_FEES.AsObject>,
    trace?: APP_TRACER.AsObject,
  }
}

export class CS_ACTIVITY_FEES extends jspb.Message {
  getId(): number;
  setId(value: number): CS_ACTIVITY_FEES;

  getActivityId(): number;
  setActivityId(value: number): CS_ACTIVITY_FEES;

  getObjName(): string;
  setObjName(value: string): CS_ACTIVITY_FEES;

  getDescription(): string;
  setDescription(value: string): CS_ACTIVITY_FEES;

  getValueFieldId(): number;
  setValueFieldId(value: number): CS_ACTIVITY_FEES;
  hasValueFieldId(): boolean;
  clearValueFieldId(): CS_ACTIVITY_FEES;

  getValueObj(): string;
  setValueObj(value: string): CS_ACTIVITY_FEES;
  hasValueObj(): boolean;
  clearValueObj(): CS_ACTIVITY_FEES;

  getValueConst(): number;
  setValueConst(value: number): CS_ACTIVITY_FEES;
  hasValueConst(): boolean;
  clearValueConst(): CS_ACTIVITY_FEES;

  getValueFeeObjId(): number;
  setValueFeeObjId(value: number): CS_ACTIVITY_FEES;
  hasValueFeeObjId(): boolean;
  clearValueFeeObjId(): CS_ACTIVITY_FEES;

  getIsActive(): boolean;
  setIsActive(value: boolean): CS_ACTIVITY_FEES;

  getPerParameter(): boolean;
  setPerParameter(value: boolean): CS_ACTIVITY_FEES;
  hasPerParameter(): boolean;
  clearPerParameter(): CS_ACTIVITY_FEES;

  getIsMain(): boolean;
  setIsMain(value: boolean): CS_ACTIVITY_FEES;

  getTransType(): number;
  setTransType(value: number): CS_ACTIVITY_FEES;
  hasTransType(): boolean;
  clearTransType(): CS_ACTIVITY_FEES;

  getTransStype(): number;
  setTransStype(value: number): CS_ACTIVITY_FEES;
  hasTransStype(): boolean;
  clearTransStype(): CS_ACTIVITY_FEES;

  getEnableCase(): string;
  setEnableCase(value: string): CS_ACTIVITY_FEES;

  getVat(): number;
  setVat(value: number): CS_ACTIVITY_FEES;
  hasVat(): boolean;
  clearVat(): CS_ACTIVITY_FEES;

  getAdminFees(): number;
  setAdminFees(value: number): CS_ACTIVITY_FEES;
  hasAdminFees(): boolean;
  clearAdminFees(): CS_ACTIVITY_FEES;

  getAdminVat(): number;
  setAdminVat(value: number): CS_ACTIVITY_FEES;
  hasAdminVat(): boolean;
  clearAdminVat(): CS_ACTIVITY_FEES;

  getParamterFieldId(): number;
  setParamterFieldId(value: number): CS_ACTIVITY_FEES;
  hasParamterFieldId(): boolean;
  clearParamterFieldId(): CS_ACTIVITY_FEES;

  getPaymentTransType(): number;
  setPaymentTransType(value: number): CS_ACTIVITY_FEES;
  hasPaymentTransType(): boolean;
  clearPaymentTransType(): CS_ACTIVITY_FEES;

  getPaymentTransStype(): number;
  setPaymentTransStype(value: number): CS_ACTIVITY_FEES;
  hasPaymentTransStype(): boolean;
  clearPaymentTransStype(): CS_ACTIVITY_FEES;

  getFeeParentId(): number;
  setFeeParentId(value: number): CS_ACTIVITY_FEES;
  hasFeeParentId(): boolean;
  clearFeeParentId(): CS_ACTIVITY_FEES;

  getAllowInstallments(): boolean;
  setAllowInstallments(value: boolean): CS_ACTIVITY_FEES;
  hasAllowInstallments(): boolean;
  clearAllowInstallments(): CS_ACTIVITY_FEES;

  getValueFieldName(): string;
  setValueFieldName(value: string): CS_ACTIVITY_FEES;
  hasValueFieldName(): boolean;
  clearValueFieldName(): CS_ACTIVITY_FEES;

  getParamterFieldName(): string;
  setParamterFieldName(value: string): CS_ACTIVITY_FEES;
  hasParamterFieldName(): boolean;
  clearParamterFieldName(): CS_ACTIVITY_FEES;

  getValueFeeObjName(): string;
  setValueFeeObjName(value: string): CS_ACTIVITY_FEES;
  hasValueFeeObjName(): boolean;
  clearValueFeeObjName(): CS_ACTIVITY_FEES;

  getInstallmentTransType(): number;
  setInstallmentTransType(value: number): CS_ACTIVITY_FEES;
  hasInstallmentTransType(): boolean;
  clearInstallmentTransType(): CS_ACTIVITY_FEES;

  getInstallmentTransStype(): number;
  setInstallmentTransStype(value: number): CS_ACTIVITY_FEES;
  hasInstallmentTransStype(): boolean;
  clearInstallmentTransStype(): CS_ACTIVITY_FEES;

  getProductCode(): string;
  setProductCode(value: string): CS_ACTIVITY_FEES;
  hasProductCode(): boolean;
  clearProductCode(): CS_ACTIVITY_FEES;

  getTaxCode(): string;
  setTaxCode(value: string): CS_ACTIVITY_FEES;
  hasTaxCode(): boolean;
  clearTaxCode(): CS_ACTIVITY_FEES;

  getNotCharge(): boolean;
  setNotCharge(value: boolean): CS_ACTIVITY_FEES;
  hasNotCharge(): boolean;
  clearNotCharge(): CS_ACTIVITY_FEES;

  getRevAgreemTrnsType(): number;
  setRevAgreemTrnsType(value: number): CS_ACTIVITY_FEES;
  hasRevAgreemTrnsType(): boolean;
  clearRevAgreemTrnsType(): CS_ACTIVITY_FEES;

  getRevAgreemTrnsStype(): number;
  setRevAgreemTrnsStype(value: number): CS_ACTIVITY_FEES;
  hasRevAgreemTrnsStype(): boolean;
  clearRevAgreemTrnsStype(): CS_ACTIVITY_FEES;

  getAllowPost(): boolean;
  setAllowPost(value: boolean): CS_ACTIVITY_FEES;
  hasAllowPost(): boolean;
  clearAllowPost(): CS_ACTIVITY_FEES;

  getFeeTypeId(): number;
  setFeeTypeId(value: number): CS_ACTIVITY_FEES;
  hasFeeTypeId(): boolean;
  clearFeeTypeId(): CS_ACTIVITY_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_ACTIVITY_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: CS_ACTIVITY_FEES): CS_ACTIVITY_FEES.AsObject;
  static serializeBinaryToWriter(message: CS_ACTIVITY_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_ACTIVITY_FEES;
  static deserializeBinaryFromReader(message: CS_ACTIVITY_FEES, reader: jspb.BinaryReader): CS_ACTIVITY_FEES;
}

export namespace CS_ACTIVITY_FEES {
  export type AsObject = {
    id: number,
    activityId: number,
    objName: string,
    description: string,
    valueFieldId?: number,
    valueObj?: string,
    valueConst?: number,
    valueFeeObjId?: number,
    isActive: boolean,
    perParameter?: boolean,
    isMain: boolean,
    transType?: number,
    transStype?: number,
    enableCase: string,
    vat?: number,
    adminFees?: number,
    adminVat?: number,
    paramterFieldId?: number,
    paymentTransType?: number,
    paymentTransStype?: number,
    feeParentId?: number,
    allowInstallments?: boolean,
    valueFieldName?: string,
    paramterFieldName?: string,
    valueFeeObjName?: string,
    installmentTransType?: number,
    installmentTransStype?: number,
    productCode?: string,
    taxCode?: string,
    notCharge?: boolean,
    revAgreemTrnsType?: number,
    revAgreemTrnsStype?: number,
    allowPost?: boolean,
    feeTypeId?: number,
  }
}

export class CS_APPLICATIONS extends jspb.Message {
  getId(): number;
  setId(value: number): CS_APPLICATIONS;

  getActId(): number;
  setActId(value: number): CS_APPLICATIONS;

  getStampUser(): string;
  setStampUser(value: string): CS_APPLICATIONS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CS_APPLICATIONS;
  hasStampDate(): boolean;
  clearStampDate(): CS_APPLICATIONS;

  getCustkey(): string;
  setCustkey(value: string): CS_APPLICATIONS;

  getIsPosted(): boolean;
  setIsPosted(value: boolean): CS_APPLICATIONS;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CS_APPLICATIONS;

  getBbmForm(): string;
  setBbmForm(value: string): CS_APPLICATIONS;
  hasBbmForm(): boolean;
  clearBbmForm(): CS_APPLICATIONS;

  getTaxState(): TAX_STATE;
  setTaxState(value: TAX_STATE): CS_APPLICATIONS;
  hasTaxState(): boolean;
  clearTaxState(): CS_APPLICATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_APPLICATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_APPLICATIONS): CS_APPLICATIONS.AsObject;
  static serializeBinaryToWriter(message: CS_APPLICATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_APPLICATIONS;
  static deserializeBinaryFromReader(message: CS_APPLICATIONS, reader: jspb.BinaryReader): CS_APPLICATIONS;
}

export namespace CS_APPLICATIONS {
  export type AsObject = {
    id: number,
    actId: number,
    stampUser: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    custkey: string,
    isPosted: boolean,
    isCancelled: boolean,
    bbmForm?: string,
    taxState?: TAX_STATE,
  }
}

export class CS_RECIEPT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CS_RECIEPT;

  getFeeId(): number;
  setFeeId(value: number): CS_RECIEPT;

  getAmount(): number;
  setAmount(value: number): CS_RECIEPT;

  getStampUser(): string;
  setStampUser(value: string): CS_RECIEPT;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CS_RECIEPT;
  hasStampDate(): boolean;
  clearStampDate(): CS_RECIEPT;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CS_RECIEPT;

  getCancelledUser(): string;
  setCancelledUser(value: string): CS_RECIEPT;
  hasCancelledUser(): boolean;
  clearCancelledUser(): CS_RECIEPT;

  getCancelledDate(): date_pb.MasDateTime | undefined;
  setCancelledDate(value?: date_pb.MasDateTime): CS_RECIEPT;
  hasCancelledDate(): boolean;
  clearCancelledDate(): CS_RECIEPT;

  getRecTransNo(): number;
  setRecTransNo(value: number): CS_RECIEPT;
  hasRecTransNo(): boolean;
  clearRecTransNo(): CS_RECIEPT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_RECIEPT.AsObject;
  static toObject(includeInstance: boolean, msg: CS_RECIEPT): CS_RECIEPT.AsObject;
  static serializeBinaryToWriter(message: CS_RECIEPT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_RECIEPT;
  static deserializeBinaryFromReader(message: CS_RECIEPT, reader: jspb.BinaryReader): CS_RECIEPT;
}

export namespace CS_RECIEPT {
  export type AsObject = {
    custkey: string,
    feeId: number,
    amount: number,
    stampUser: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    isCancelled: boolean,
    cancelledUser?: string,
    cancelledDate?: date_pb.MasDateTime.AsObject,
    recTransNo?: number,
  }
}

export class LU_FIELDS extends jspb.Message {
  getId(): number;
  setId(value: number): LU_FIELDS;

  getName(): string;
  setName(value: string): LU_FIELDS;

  getDataType(): DATATYPE;
  setDataType(value: DATATYPE): LU_FIELDS;

  getDescription(): string;
  setDescription(value: string): LU_FIELDS;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): LU_FIELDS;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): LU_FIELDS;

  getParentName(): string;
  setParentName(value: string): LU_FIELDS;
  hasParentName(): boolean;
  clearParentName(): LU_FIELDS;

  getIsSystem(): boolean;
  setIsSystem(value: boolean): LU_FIELDS;
  hasIsSystem(): boolean;
  clearIsSystem(): LU_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: LU_FIELDS): LU_FIELDS.AsObject;
  static serializeBinaryToWriter(message: LU_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_FIELDS;
  static deserializeBinaryFromReader(message: LU_FIELDS, reader: jspb.BinaryReader): LU_FIELDS;
}

export namespace LU_FIELDS {
  export type AsObject = {
    id: number,
    name: string,
    dataType: DATATYPE,
    description: string,
    descriptionEn?: string,
    parentName?: string,
    isSystem?: boolean,
  }
}

export class ArrLU_FIELDS extends jspb.Message {
  getLuFieldsList(): Array<LU_FIELDS>;
  setLuFieldsList(value: Array<LU_FIELDS>): ArrLU_FIELDS;
  clearLuFieldsList(): ArrLU_FIELDS;
  addLuFields(value?: LU_FIELDS, index?: number): LU_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrLU_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrLU_FIELDS): ArrLU_FIELDS.AsObject;
  static serializeBinaryToWriter(message: ArrLU_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrLU_FIELDS;
  static deserializeBinaryFromReader(message: ArrLU_FIELDS, reader: jspb.BinaryReader): ArrLU_FIELDS;
}

export namespace ArrLU_FIELDS {
  export type AsObject = {
    luFieldsList: Array<LU_FIELDS.AsObject>,
  }
}

export class SaveFieldsReq extends jspb.Message {
  getId(): number;
  setId(value: number): SaveFieldsReq;

  getName(): string;
  setName(value: string): SaveFieldsReq;

  getDataType(): number;
  setDataType(value: number): SaveFieldsReq;

  getDescription(): string;
  setDescription(value: string): SaveFieldsReq;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): SaveFieldsReq;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): SaveFieldsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFieldsReq): SaveFieldsReq.AsObject;
  static serializeBinaryToWriter(message: SaveFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFieldsReq;
  static deserializeBinaryFromReader(message: SaveFieldsReq, reader: jspb.BinaryReader): SaveFieldsReq;
}

export namespace SaveFieldsReq {
  export type AsObject = {
    id: number,
    name: string,
    dataType: number,
    description: string,
    descriptionEn?: string,
  }
}

export class SetActFieldsReq extends jspb.Message {
  getActId(): number;
  setActId(value: number): SetActFieldsReq;

  getTblActivityFieldsList(): Array<TBL_ACTIVITY_FIELDS>;
  setTblActivityFieldsList(value: Array<TBL_ACTIVITY_FIELDS>): SetActFieldsReq;
  clearTblActivityFieldsList(): SetActFieldsReq;
  addTblActivityFields(value?: TBL_ACTIVITY_FIELDS, index?: number): TBL_ACTIVITY_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetActFieldsReq): SetActFieldsReq.AsObject;
  static serializeBinaryToWriter(message: SetActFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActFieldsReq;
  static deserializeBinaryFromReader(message: SetActFieldsReq, reader: jspb.BinaryReader): SetActFieldsReq;
}

export namespace SetActFieldsReq {
  export type AsObject = {
    actId: number,
    tblActivityFieldsList: Array<TBL_ACTIVITY_FIELDS.AsObject>,
  }
}

export class TBL_ACTIVITY_FIELDS extends jspb.Message {
  getFieldId(): number;
  setFieldId(value: number): TBL_ACTIVITY_FIELDS;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): TBL_ACTIVITY_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_ACTIVITY_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_ACTIVITY_FIELDS): TBL_ACTIVITY_FIELDS.AsObject;
  static serializeBinaryToWriter(message: TBL_ACTIVITY_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_ACTIVITY_FIELDS;
  static deserializeBinaryFromReader(message: TBL_ACTIVITY_FIELDS, reader: jspb.BinaryReader): TBL_ACTIVITY_FIELDS;
}

export namespace TBL_ACTIVITY_FIELDS {
  export type AsObject = {
    fieldId: number,
    isRequired: boolean,
  }
}

export class ArrCS_ACTIVITY_FIELDS extends jspb.Message {
  getCsActivityFieldsList(): Array<CS_ACTIVITY_FIELDS>;
  setCsActivityFieldsList(value: Array<CS_ACTIVITY_FIELDS>): ArrCS_ACTIVITY_FIELDS;
  clearCsActivityFieldsList(): ArrCS_ACTIVITY_FIELDS;
  addCsActivityFields(value?: CS_ACTIVITY_FIELDS, index?: number): CS_ACTIVITY_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCS_ACTIVITY_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCS_ACTIVITY_FIELDS): ArrCS_ACTIVITY_FIELDS.AsObject;
  static serializeBinaryToWriter(message: ArrCS_ACTIVITY_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCS_ACTIVITY_FIELDS;
  static deserializeBinaryFromReader(message: ArrCS_ACTIVITY_FIELDS, reader: jspb.BinaryReader): ArrCS_ACTIVITY_FIELDS;
}

export namespace ArrCS_ACTIVITY_FIELDS {
  export type AsObject = {
    csActivityFieldsList: Array<CS_ACTIVITY_FIELDS.AsObject>,
  }
}

export class CS_FIELDS extends jspb.Message {
  getFieldId(): number;
  setFieldId(value: number): CS_FIELDS;

  getAppId(): number;
  setAppId(value: number): CS_FIELDS;

  getAsNumber(): number;
  setAsNumber(value: number): CS_FIELDS;
  hasAsNumber(): boolean;
  clearAsNumber(): CS_FIELDS;

  getAsString(): string;
  setAsString(value: string): CS_FIELDS;
  hasAsString(): boolean;
  clearAsString(): CS_FIELDS;

  getAsDate(): date_pb.MasDateTime | undefined;
  setAsDate(value?: date_pb.MasDateTime): CS_FIELDS;
  hasAsDate(): boolean;
  clearAsDate(): CS_FIELDS;

  getAsBoolean(): boolean;
  setAsBoolean(value: boolean): CS_FIELDS;
  hasAsBoolean(): boolean;
  clearAsBoolean(): CS_FIELDS;

  getAsBase64(): string;
  setAsBase64(value: string): CS_FIELDS;
  hasAsBase64(): boolean;
  clearAsBase64(): CS_FIELDS;

  getAsTable(): number;
  setAsTable(value: number): CS_FIELDS;
  hasAsTable(): boolean;
  clearAsTable(): CS_FIELDS;

  getTableValues(): ALL_TABLE_VALUES | undefined;
  setTableValues(value?: ALL_TABLE_VALUES): CS_FIELDS;
  hasTableValues(): boolean;
  clearTableValues(): CS_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_FIELDS): CS_FIELDS.AsObject;
  static serializeBinaryToWriter(message: CS_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_FIELDS;
  static deserializeBinaryFromReader(message: CS_FIELDS, reader: jspb.BinaryReader): CS_FIELDS;
}

export namespace CS_FIELDS {
  export type AsObject = {
    fieldId: number,
    appId: number,
    asNumber?: number,
    asString?: string,
    asDate?: date_pb.MasDateTime.AsObject,
    asBoolean?: boolean,
    asBase64?: string,
    asTable?: number,
    tableValues?: ALL_TABLE_VALUES.AsObject,
  }
}

export class CS_TABLE_VALUES extends jspb.Message {
  getTableId(): number;
  setTableId(value: number): CS_TABLE_VALUES;

  getFieldId(): number;
  setFieldId(value: number): CS_TABLE_VALUES;

  getRowNumber(): number;
  setRowNumber(value: number): CS_TABLE_VALUES;

  getAsNumber(): number;
  setAsNumber(value: number): CS_TABLE_VALUES;
  hasAsNumber(): boolean;
  clearAsNumber(): CS_TABLE_VALUES;

  getAsString(): string;
  setAsString(value: string): CS_TABLE_VALUES;
  hasAsString(): boolean;
  clearAsString(): CS_TABLE_VALUES;

  getAsDate(): date_pb.MasDateTime | undefined;
  setAsDate(value?: date_pb.MasDateTime): CS_TABLE_VALUES;
  hasAsDate(): boolean;
  clearAsDate(): CS_TABLE_VALUES;

  getAsBoolean(): boolean;
  setAsBoolean(value: boolean): CS_TABLE_VALUES;
  hasAsBoolean(): boolean;
  clearAsBoolean(): CS_TABLE_VALUES;

  getAsTable(): number;
  setAsTable(value: number): CS_TABLE_VALUES;
  hasAsTable(): boolean;
  clearAsTable(): CS_TABLE_VALUES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_TABLE_VALUES.AsObject;
  static toObject(includeInstance: boolean, msg: CS_TABLE_VALUES): CS_TABLE_VALUES.AsObject;
  static serializeBinaryToWriter(message: CS_TABLE_VALUES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_TABLE_VALUES;
  static deserializeBinaryFromReader(message: CS_TABLE_VALUES, reader: jspb.BinaryReader): CS_TABLE_VALUES;
}

export namespace CS_TABLE_VALUES {
  export type AsObject = {
    tableId: number,
    fieldId: number,
    rowNumber: number,
    asNumber?: number,
    asString?: string,
    asDate?: date_pb.MasDateTime.AsObject,
    asBoolean?: boolean,
    asTable?: number,
  }
}

export class CS_ACTIVITY_FIELDS extends jspb.Message {
  getActId(): number;
  setActId(value: number): CS_ACTIVITY_FIELDS;

  getFieldId(): number;
  setFieldId(value: number): CS_ACTIVITY_FIELDS;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): CS_ACTIVITY_FIELDS;

  getFieldName(): string;
  setFieldName(value: string): CS_ACTIVITY_FIELDS;
  hasFieldName(): boolean;
  clearFieldName(): CS_ACTIVITY_FIELDS;

  getIsSystem(): boolean;
  setIsSystem(value: boolean): CS_ACTIVITY_FIELDS;
  hasIsSystem(): boolean;
  clearIsSystem(): CS_ACTIVITY_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_ACTIVITY_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_ACTIVITY_FIELDS): CS_ACTIVITY_FIELDS.AsObject;
  static serializeBinaryToWriter(message: CS_ACTIVITY_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_ACTIVITY_FIELDS;
  static deserializeBinaryFromReader(message: CS_ACTIVITY_FIELDS, reader: jspb.BinaryReader): CS_ACTIVITY_FIELDS;
}

export namespace CS_ACTIVITY_FIELDS {
  export type AsObject = {
    actId: number,
    fieldId: number,
    isRequired: boolean,
    fieldName?: string,
    isSystem?: boolean,
  }
}

export class LU_DATA_TYPE extends jspb.Message {
  getId(): number;
  setId(value: number): LU_DATA_TYPE;

  getDescription(): string;
  setDescription(value: string): LU_DATA_TYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_DATA_TYPE.AsObject;
  static toObject(includeInstance: boolean, msg: LU_DATA_TYPE): LU_DATA_TYPE.AsObject;
  static serializeBinaryToWriter(message: LU_DATA_TYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_DATA_TYPE;
  static deserializeBinaryFromReader(message: LU_DATA_TYPE, reader: jspb.BinaryReader): LU_DATA_TYPE;
}

export namespace LU_DATA_TYPE {
  export type AsObject = {
    id: number,
    description: string,
  }
}

export class CRM_MODULE extends jspb.Message {
  getId(): number;
  setId(value: number): CRM_MODULE;

  getModuleDesc(): string;
  setModuleDesc(value: string): CRM_MODULE;

  getVersionNo(): number;
  setVersionNo(value: number): CRM_MODULE;
  hasVersionNo(): boolean;
  clearVersionNo(): CRM_MODULE;

  getInChan(): boolean;
  setInChan(value: boolean): CRM_MODULE;
  hasInChan(): boolean;
  clearInChan(): CRM_MODULE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CRM_MODULE.AsObject;
  static toObject(includeInstance: boolean, msg: CRM_MODULE): CRM_MODULE.AsObject;
  static serializeBinaryToWriter(message: CRM_MODULE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CRM_MODULE;
  static deserializeBinaryFromReader(message: CRM_MODULE, reader: jspb.BinaryReader): CRM_MODULE;
}

export namespace CRM_MODULE {
  export type AsObject = {
    id: number,
    moduleDesc: string,
    versionNo?: number,
    inChan?: boolean,
  }
}

export class AllModules extends jspb.Message {
  getCrmModuleList(): Array<CRM_MODULE>;
  setCrmModuleList(value: Array<CRM_MODULE>): AllModules;
  clearCrmModuleList(): AllModules;
  addCrmModule(value?: CRM_MODULE, index?: number): CRM_MODULE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllModules.AsObject;
  static toObject(includeInstance: boolean, msg: AllModules): AllModules.AsObject;
  static serializeBinaryToWriter(message: AllModules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllModules;
  static deserializeBinaryFromReader(message: AllModules, reader: jspb.BinaryReader): AllModules;
}

export namespace AllModules {
  export type AsObject = {
    crmModuleList: Array<CRM_MODULE.AsObject>,
  }
}

export class CalculateActivityFeesRq extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): CalculateActivityFeesRq;

  getAppId(): number;
  setAppId(value: number): CalculateActivityFeesRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateActivityFeesRq.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateActivityFeesRq): CalculateActivityFeesRq.AsObject;
  static serializeBinaryToWriter(message: CalculateActivityFeesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateActivityFeesRq;
  static deserializeBinaryFromReader(message: CalculateActivityFeesRq, reader: jspb.BinaryReader): CalculateActivityFeesRq;
}

export namespace CalculateActivityFeesRq {
  export type AsObject = {
    activityId: number,
    appId: number,
  }
}

export class DUMMY extends jspb.Message {
  getId(): number;
  setId(value: number): DUMMY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DUMMY.AsObject;
  static toObject(includeInstance: boolean, msg: DUMMY): DUMMY.AsObject;
  static serializeBinaryToWriter(message: DUMMY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DUMMY;
  static deserializeBinaryFromReader(message: DUMMY, reader: jspb.BinaryReader): DUMMY;
}

export namespace DUMMY {
  export type AsObject = {
    id: number,
  }
}

export class ExecuteActivityRq extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): ExecuteActivityRq;

  getCsFieldsList(): Array<CS_FIELDS>;
  setCsFieldsList(value: Array<CS_FIELDS>): ExecuteActivityRq;
  clearCsFieldsList(): ExecuteActivityRq;
  addCsFields(value?: CS_FIELDS, index?: number): CS_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteActivityRq.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteActivityRq): ExecuteActivityRq.AsObject;
  static serializeBinaryToWriter(message: ExecuteActivityRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteActivityRq;
  static deserializeBinaryFromReader(message: ExecuteActivityRq, reader: jspb.BinaryReader): ExecuteActivityRq;
}

export namespace ExecuteActivityRq {
  export type AsObject = {
    activityId: number,
    csFieldsList: Array<CS_FIELDS.AsObject>,
  }
}

export class EXTERNAL_FEES extends jspb.Message {
  getCode(): number;
  setCode(value: number): EXTERNAL_FEES;

  getFeesName(): string;
  setFeesName(value: string): EXTERNAL_FEES;

  getFeesAmount(): number;
  setFeesAmount(value: number): EXTERNAL_FEES;

  getStampDateUnx(): number;
  setStampDateUnx(value: number): EXTERNAL_FEES;
  hasStampDateUnx(): boolean;
  clearStampDateUnx(): EXTERNAL_FEES;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): EXTERNAL_FEES;
  hasStampDate(): boolean;
  clearStampDate(): EXTERNAL_FEES;

  getFeesOriginalAmount(): number;
  setFeesOriginalAmount(value: number): EXTERNAL_FEES;

  getFeesVatAmount(): number;
  setFeesVatAmount(value: number): EXTERNAL_FEES;
  hasFeesVatAmount(): boolean;
  clearFeesVatAmount(): EXTERNAL_FEES;

  getFeesAdminAmount(): number;
  setFeesAdminAmount(value: number): EXTERNAL_FEES;
  hasFeesAdminAmount(): boolean;
  clearFeesAdminAmount(): EXTERNAL_FEES;

  getFeesAdminVatAmount(): number;
  setFeesAdminVatAmount(value: number): EXTERNAL_FEES;
  hasFeesAdminVatAmount(): boolean;
  clearFeesAdminVatAmount(): EXTERNAL_FEES;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): EXTERNAL_FEES;
  hasIsCancelled(): boolean;
  clearIsCancelled(): EXTERNAL_FEES;

  getActionId(): number;
  setActionId(value: number): EXTERNAL_FEES;
  hasActionId(): boolean;
  clearActionId(): EXTERNAL_FEES;

  getParentFeeName(): string;
  setParentFeeName(value: string): EXTERNAL_FEES;
  hasParentFeeName(): boolean;
  clearParentFeeName(): EXTERNAL_FEES;

  getParentFeeNameEn(): string;
  setParentFeeNameEn(value: string): EXTERNAL_FEES;
  hasParentFeeNameEn(): boolean;
  clearParentFeeNameEn(): EXTERNAL_FEES;

  getFeesBeforeInstallment(): number;
  setFeesBeforeInstallment(value: number): EXTERNAL_FEES;
  hasFeesBeforeInstallment(): boolean;
  clearFeesBeforeInstallment(): EXTERNAL_FEES;

  getInstallmentAmount(): number;
  setInstallmentAmount(value: number): EXTERNAL_FEES;
  hasInstallmentAmount(): boolean;
  clearInstallmentAmount(): EXTERNAL_FEES;

  getPostPaidAmount(): number;
  setPostPaidAmount(value: number): EXTERNAL_FEES;
  hasPostPaidAmount(): boolean;
  clearPostPaidAmount(): EXTERNAL_FEES;

  getFeeTypeId(): number;
  setFeeTypeId(value: number): EXTERNAL_FEES;
  hasFeeTypeId(): boolean;
  clearFeeTypeId(): EXTERNAL_FEES;

  getActivityId(): number;
  setActivityId(value: number): EXTERNAL_FEES;
  hasActivityId(): boolean;
  clearActivityId(): EXTERNAL_FEES;

  getActivityName(): string;
  setActivityName(value: string): EXTERNAL_FEES;
  hasActivityName(): boolean;
  clearActivityName(): EXTERNAL_FEES;

  getIsCharity(): boolean;
  setIsCharity(value: boolean): EXTERNAL_FEES;
  hasIsCharity(): boolean;
  clearIsCharity(): EXTERNAL_FEES;

  getBpmForm(): string;
  setBpmForm(value: string): EXTERNAL_FEES;
  hasBpmForm(): boolean;
  clearBpmForm(): EXTERNAL_FEES;

  getIsCharitySewer(): boolean;
  setIsCharitySewer(value: boolean): EXTERNAL_FEES;
  hasIsCharitySewer(): boolean;
  clearIsCharitySewer(): EXTERNAL_FEES;

  getIsCross(): boolean;
  setIsCross(value: boolean): EXTERNAL_FEES;
  hasIsCross(): boolean;
  clearIsCross(): EXTERNAL_FEES;

  getCustkey(): string;
  setCustkey(value: string): EXTERNAL_FEES;
  hasCustkey(): boolean;
  clearCustkey(): EXTERNAL_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EXTERNAL_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: EXTERNAL_FEES): EXTERNAL_FEES.AsObject;
  static serializeBinaryToWriter(message: EXTERNAL_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EXTERNAL_FEES;
  static deserializeBinaryFromReader(message: EXTERNAL_FEES, reader: jspb.BinaryReader): EXTERNAL_FEES;
}

export namespace EXTERNAL_FEES {
  export type AsObject = {
    code: number,
    feesName: string,
    feesAmount: number,
    stampDateUnx?: number,
    stampDate?: date_pb.MasDateTime.AsObject,
    feesOriginalAmount: number,
    feesVatAmount?: number,
    feesAdminAmount?: number,
    feesAdminVatAmount?: number,
    isCancelled?: boolean,
    actionId?: number,
    parentFeeName?: string,
    parentFeeNameEn?: string,
    feesBeforeInstallment?: number,
    installmentAmount?: number,
    postPaidAmount?: number,
    feeTypeId?: number,
    activityId?: number,
    activityName?: string,
    isCharity?: boolean,
    bpmForm?: string,
    isCharitySewer?: boolean,
    isCross?: boolean,
    custkey?: string,
  }
}

export class APP_EXTERNAL_ACTIVITY extends jspb.Message {
  getBpmId(): number;
  setBpmId(value: number): APP_EXTERNAL_ACTIVITY;

  getActivityName(): string;
  setActivityName(value: string): APP_EXTERNAL_ACTIVITY;

  getBpmExternalModuleId(): number;
  setBpmExternalModuleId(value: number): APP_EXTERNAL_ACTIVITY;

  getIp(): string;
  setIp(value: string): APP_EXTERNAL_ACTIVITY;

  getPort(): number;
  setPort(value: number): APP_EXTERNAL_ACTIVITY;

  getRequestList(): Array<APP_EXTERNAL_FIELD>;
  setRequestList(value: Array<APP_EXTERNAL_FIELD>): APP_EXTERNAL_ACTIVITY;
  clearRequestList(): APP_EXTERNAL_ACTIVITY;
  addRequest(value?: APP_EXTERNAL_FIELD, index?: number): APP_EXTERNAL_FIELD;

  getResponseList(): Array<APP_EXTERNAL_FIELD>;
  setResponseList(value: Array<APP_EXTERNAL_FIELD>): APP_EXTERNAL_ACTIVITY;
  clearResponseList(): APP_EXTERNAL_ACTIVITY;
  addResponse(value?: APP_EXTERNAL_FIELD, index?: number): APP_EXTERNAL_FIELD;

  getFeesList(): Array<EXTERNAL_FEES>;
  setFeesList(value: Array<EXTERNAL_FEES>): APP_EXTERNAL_ACTIVITY;
  clearFeesList(): APP_EXTERNAL_ACTIVITY;
  addFees(value?: EXTERNAL_FEES, index?: number): EXTERNAL_FEES;

  getWithForm(): boolean;
  setWithForm(value: boolean): APP_EXTERNAL_ACTIVITY;
  hasWithForm(): boolean;
  clearWithForm(): APP_EXTERNAL_ACTIVITY;

  getFormConfig(): string;
  setFormConfig(value: string): APP_EXTERNAL_ACTIVITY;
  hasFormConfig(): boolean;
  clearFormConfig(): APP_EXTERNAL_ACTIVITY;

  getIsPayment(): boolean;
  setIsPayment(value: boolean): APP_EXTERNAL_ACTIVITY;

  getPackageName(): string;
  setPackageName(value: string): APP_EXTERNAL_ACTIVITY;

  getServiceName(): string;
  setServiceName(value: string): APP_EXTERNAL_ACTIVITY;

  getDescription(): string;
  setDescription(value: string): APP_EXTERNAL_ACTIVITY;
  hasDescription(): boolean;
  clearDescription(): APP_EXTERNAL_ACTIVITY;

  getIsDummy(): boolean;
  setIsDummy(value: boolean): APP_EXTERNAL_ACTIVITY;
  hasIsDummy(): boolean;
  clearIsDummy(): APP_EXTERNAL_ACTIVITY;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): APP_EXTERNAL_ACTIVITY;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): APP_EXTERNAL_ACTIVITY;

  getBpmForm(): string;
  setBpmForm(value: string): APP_EXTERNAL_ACTIVITY;
  hasBpmForm(): boolean;
  clearBpmForm(): APP_EXTERNAL_ACTIVITY;

  getIsAsync(): boolean;
  setIsAsync(value: boolean): APP_EXTERNAL_ACTIVITY;
  hasIsAsync(): boolean;
  clearIsAsync(): APP_EXTERNAL_ACTIVITY;

  getActOptionsMap(): jspb.Map<string, string>;
  clearActOptionsMap(): APP_EXTERNAL_ACTIVITY;

  getFormName(): string;
  setFormName(value: string): APP_EXTERNAL_ACTIVITY;
  hasFormName(): boolean;
  clearFormName(): APP_EXTERNAL_ACTIVITY;

  getTransactionId(): number;
  setTransactionId(value: number): APP_EXTERNAL_ACTIVITY;
  hasTransactionId(): boolean;
  clearTransactionId(): APP_EXTERNAL_ACTIVITY;

  getPagesNamesList(): Array<string>;
  setPagesNamesList(value: Array<string>): APP_EXTERNAL_ACTIVITY;
  clearPagesNamesList(): APP_EXTERNAL_ACTIVITY;
  addPagesNames(value: string, index?: number): APP_EXTERNAL_ACTIVITY;

  getWithRefresh(): boolean;
  setWithRefresh(value: boolean): APP_EXTERNAL_ACTIVITY;
  hasWithRefresh(): boolean;
  clearWithRefresh(): APP_EXTERNAL_ACTIVITY;

  getUrl(): string;
  setUrl(value: string): APP_EXTERNAL_ACTIVITY;
  hasUrl(): boolean;
  clearUrl(): APP_EXTERNAL_ACTIVITY;

  getFromActivity(): boolean;
  setFromActivity(value: boolean): APP_EXTERNAL_ACTIVITY;
  hasFromActivity(): boolean;
  clearFromActivity(): APP_EXTERNAL_ACTIVITY;

  getActionId(): number;
  setActionId(value: number): APP_EXTERNAL_ACTIVITY;
  hasActionId(): boolean;
  clearActionId(): APP_EXTERNAL_ACTIVITY;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): APP_EXTERNAL_ACTIVITY;
  hasTrace(): boolean;
  clearTrace(): APP_EXTERNAL_ACTIVITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APP_EXTERNAL_ACTIVITY.AsObject;
  static toObject(includeInstance: boolean, msg: APP_EXTERNAL_ACTIVITY): APP_EXTERNAL_ACTIVITY.AsObject;
  static serializeBinaryToWriter(message: APP_EXTERNAL_ACTIVITY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APP_EXTERNAL_ACTIVITY;
  static deserializeBinaryFromReader(message: APP_EXTERNAL_ACTIVITY, reader: jspb.BinaryReader): APP_EXTERNAL_ACTIVITY;
}

export namespace APP_EXTERNAL_ACTIVITY {
  export type AsObject = {
    bpmId: number,
    activityName: string,
    bpmExternalModuleId: number,
    ip: string,
    port: number,
    requestList: Array<APP_EXTERNAL_FIELD.AsObject>,
    responseList: Array<APP_EXTERNAL_FIELD.AsObject>,
    feesList: Array<EXTERNAL_FEES.AsObject>,
    withForm?: boolean,
    formConfig?: string,
    isPayment: boolean,
    packageName: string,
    serviceName: string,
    description?: string,
    isDummy?: boolean,
    descriptionEn?: string,
    bpmForm?: string,
    isAsync?: boolean,
    actOptionsMap: Array<[string, string]>,
    formName?: string,
    transactionId?: number,
    pagesNamesList: Array<string>,
    withRefresh?: boolean,
    url?: string,
    fromActivity?: boolean,
    actionId?: number,
    trace?: APP_TRACER.AsObject,
  }
}

export class APP_EXTERNAL_FIELD extends jspb.Message {
  getBpmId(): number;
  setBpmId(value: number): APP_EXTERNAL_FIELD;

  getName(): string;
  setName(value: string): APP_EXTERNAL_FIELD;

  getTitle(): string;
  setTitle(value: string): APP_EXTERNAL_FIELD;

  getDataType(): DATATYPE;
  setDataType(value: DATATYPE): APP_EXTERNAL_FIELD;

  getKind(): FIELDKIND;
  setKind(value: FIELDKIND): APP_EXTERNAL_FIELD;
  hasKind(): boolean;
  clearKind(): APP_EXTERNAL_FIELD;

  getExternalModuleId(): number;
  setExternalModuleId(value: number): APP_EXTERNAL_FIELD;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): APP_EXTERNAL_FIELD;

  getFieldValuesList(): Array<FIELD_VALUE>;
  setFieldValuesList(value: Array<FIELD_VALUE>): APP_EXTERNAL_FIELD;
  clearFieldValuesList(): APP_EXTERNAL_FIELD;
  addFieldValues(value?: FIELD_VALUE, index?: number): FIELD_VALUE;

  getExternalParentFieldid(): number;
  setExternalParentFieldid(value: number): APP_EXTERNAL_FIELD;
  hasExternalParentFieldid(): boolean;
  clearExternalParentFieldid(): APP_EXTERNAL_FIELD;

  getExternalParentFieldName(): string;
  setExternalParentFieldName(value: string): APP_EXTERNAL_FIELD;
  hasExternalParentFieldName(): boolean;
  clearExternalParentFieldName(): APP_EXTERNAL_FIELD;

  getIsSystem(): boolean;
  setIsSystem(value: boolean): APP_EXTERNAL_FIELD;
  hasIsSystem(): boolean;
  clearIsSystem(): APP_EXTERNAL_FIELD;

  getSystemColumn(): string;
  setSystemColumn(value: string): APP_EXTERNAL_FIELD;
  hasSystemColumn(): boolean;
  clearSystemColumn(): APP_EXTERNAL_FIELD;

  getMapFieldId(): number;
  setMapFieldId(value: number): APP_EXTERNAL_FIELD;
  hasMapFieldId(): boolean;
  clearMapFieldId(): APP_EXTERNAL_FIELD;

  getMapIsExternal(): boolean;
  setMapIsExternal(value: boolean): APP_EXTERNAL_FIELD;
  hasMapIsExternal(): boolean;
  clearMapIsExternal(): APP_EXTERNAL_FIELD;

  getMapModuleId(): number;
  setMapModuleId(value: number): APP_EXTERNAL_FIELD;
  hasMapModuleId(): boolean;
  clearMapModuleId(): APP_EXTERNAL_FIELD;

  getColumnFieldsMap(): jspb.Map<number, boolean>;
  clearColumnFieldsMap(): APP_EXTERNAL_FIELD;

  getColumnFieldsNamesList(): Array<APP_EXTERNAL_FIELD>;
  setColumnFieldsNamesList(value: Array<APP_EXTERNAL_FIELD>): APP_EXTERNAL_FIELD;
  clearColumnFieldsNamesList(): APP_EXTERNAL_FIELD;
  addColumnFieldsNames(value?: APP_EXTERNAL_FIELD, index?: number): APP_EXTERNAL_FIELD;

  getTitleEn(): string;
  setTitleEn(value: string): APP_EXTERNAL_FIELD;
  hasTitleEn(): boolean;
  clearTitleEn(): APP_EXTERNAL_FIELD;

  getTitleLang(): string;
  setTitleLang(value: string): APP_EXTERNAL_FIELD;
  hasTitleLang(): boolean;
  clearTitleLang(): APP_EXTERNAL_FIELD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APP_EXTERNAL_FIELD.AsObject;
  static toObject(includeInstance: boolean, msg: APP_EXTERNAL_FIELD): APP_EXTERNAL_FIELD.AsObject;
  static serializeBinaryToWriter(message: APP_EXTERNAL_FIELD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APP_EXTERNAL_FIELD;
  static deserializeBinaryFromReader(message: APP_EXTERNAL_FIELD, reader: jspb.BinaryReader): APP_EXTERNAL_FIELD;
}

export namespace APP_EXTERNAL_FIELD {
  export type AsObject = {
    bpmId: number,
    name: string,
    title: string,
    dataType: DATATYPE,
    kind?: FIELDKIND,
    externalModuleId: number,
    isRequired: boolean,
    fieldValuesList: Array<FIELD_VALUE.AsObject>,
    externalParentFieldid?: number,
    externalParentFieldName?: string,
    isSystem?: boolean,
    systemColumn?: string,
    mapFieldId?: number,
    mapIsExternal?: boolean,
    mapModuleId?: number,
    columnFieldsMap: Array<[number, boolean]>,
    columnFieldsNamesList: Array<APP_EXTERNAL_FIELD.AsObject>,
    titleEn?: string,
    titleLang?: string,
  }
}

export class FIELD_VALUE extends jspb.Message {
  getAsNumber(): number;
  setAsNumber(value: number): FIELD_VALUE;
  hasAsNumber(): boolean;
  clearAsNumber(): FIELD_VALUE;

  getAsString(): string;
  setAsString(value: string): FIELD_VALUE;
  hasAsString(): boolean;
  clearAsString(): FIELD_VALUE;

  getAsDate(): date_pb.MasDateTime | undefined;
  setAsDate(value?: date_pb.MasDateTime): FIELD_VALUE;
  hasAsDate(): boolean;
  clearAsDate(): FIELD_VALUE;

  getAsBoolean(): boolean;
  setAsBoolean(value: boolean): FIELD_VALUE;
  hasAsBoolean(): boolean;
  clearAsBoolean(): FIELD_VALUE;

  getAsTable(): ALL_TABLE_VALUES | undefined;
  setAsTable(value?: ALL_TABLE_VALUES): FIELD_VALUE;
  hasAsTable(): boolean;
  clearAsTable(): FIELD_VALUE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FIELD_VALUE.AsObject;
  static toObject(includeInstance: boolean, msg: FIELD_VALUE): FIELD_VALUE.AsObject;
  static serializeBinaryToWriter(message: FIELD_VALUE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FIELD_VALUE;
  static deserializeBinaryFromReader(message: FIELD_VALUE, reader: jspb.BinaryReader): FIELD_VALUE;
}

export namespace FIELD_VALUE {
  export type AsObject = {
    asNumber?: number,
    asString?: string,
    asDate?: date_pb.MasDateTime.AsObject,
    asBoolean?: boolean,
    asTable?: ALL_TABLE_VALUES.AsObject,
  }
}

export class TABLE_ROW_VALUE extends jspb.Message {
  getTableRowMap(): jspb.Map<number, FIELD_VALUE>;
  clearTableRowMap(): TABLE_ROW_VALUE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TABLE_ROW_VALUE.AsObject;
  static toObject(includeInstance: boolean, msg: TABLE_ROW_VALUE): TABLE_ROW_VALUE.AsObject;
  static serializeBinaryToWriter(message: TABLE_ROW_VALUE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TABLE_ROW_VALUE;
  static deserializeBinaryFromReader(message: TABLE_ROW_VALUE, reader: jspb.BinaryReader): TABLE_ROW_VALUE;
}

export namespace TABLE_ROW_VALUE {
  export type AsObject = {
    tableRowMap: Array<[number, FIELD_VALUE.AsObject]>,
  }
}

export class ALL_TABLE_VALUES extends jspb.Message {
  getTableId(): number;
  setTableId(value: number): ALL_TABLE_VALUES;

  getTableRowValueList(): Array<TABLE_ROW_VALUE>;
  setTableRowValueList(value: Array<TABLE_ROW_VALUE>): ALL_TABLE_VALUES;
  clearTableRowValueList(): ALL_TABLE_VALUES;
  addTableRowValue(value?: TABLE_ROW_VALUE, index?: number): TABLE_ROW_VALUE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_TABLE_VALUES.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_TABLE_VALUES): ALL_TABLE_VALUES.AsObject;
  static serializeBinaryToWriter(message: ALL_TABLE_VALUES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_TABLE_VALUES;
  static deserializeBinaryFromReader(message: ALL_TABLE_VALUES, reader: jspb.BinaryReader): ALL_TABLE_VALUES;
}

export namespace ALL_TABLE_VALUES {
  export type AsObject = {
    tableId: number,
    tableRowValueList: Array<TABLE_ROW_VALUE.AsObject>,
  }
}

export class ArrEXTERNAL_FEES extends jspb.Message {
  getExternalFeesList(): Array<EXTERNAL_FEES>;
  setExternalFeesList(value: Array<EXTERNAL_FEES>): ArrEXTERNAL_FEES;
  clearExternalFeesList(): ArrEXTERNAL_FEES;
  addExternalFees(value?: EXTERNAL_FEES, index?: number): EXTERNAL_FEES;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): ArrEXTERNAL_FEES;
  hasTrace(): boolean;
  clearTrace(): ArrEXTERNAL_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrEXTERNAL_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrEXTERNAL_FEES): ArrEXTERNAL_FEES.AsObject;
  static serializeBinaryToWriter(message: ArrEXTERNAL_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrEXTERNAL_FEES;
  static deserializeBinaryFromReader(message: ArrEXTERNAL_FEES, reader: jspb.BinaryReader): ArrEXTERNAL_FEES;
}

export namespace ArrEXTERNAL_FEES {
  export type AsObject = {
    externalFeesList: Array<EXTERNAL_FEES.AsObject>,
    trace?: APP_TRACER.AsObject,
  }
}

export class StationList extends jspb.Message {
  getStationsList(): Array<STATIONS>;
  setStationsList(value: Array<STATIONS>): StationList;
  clearStationsList(): StationList;
  addStations(value?: STATIONS, index?: number): STATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationList.AsObject;
  static toObject(includeInstance: boolean, msg: StationList): StationList.AsObject;
  static serializeBinaryToWriter(message: StationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationList;
  static deserializeBinaryFromReader(message: StationList, reader: jspb.BinaryReader): StationList;
}

export namespace StationList {
  export type AsObject = {
    stationsList: Array<STATIONS.AsObject>,
  }
}

export class STATIONS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): STATIONS;

  getStationName(): string;
  setStationName(value: string): STATIONS;

  getDescription(): string;
  setDescription(value: string): STATIONS;
  hasDescription(): boolean;
  clearDescription(): STATIONS;

  getIscurrent(): number;
  setIscurrent(value: number): STATIONS;
  hasIscurrent(): boolean;
  clearIscurrent(): STATIONS;

  getDbStandalone(): number;
  setDbStandalone(value: number): STATIONS;
  hasDbStandalone(): boolean;
  clearDbStandalone(): STATIONS;

  getDbAccess(): number;
  setDbAccess(value: number): STATIONS;
  hasDbAccess(): boolean;
  clearDbAccess(): STATIONS;

  getIsHeadquarters(): boolean;
  setIsHeadquarters(value: boolean): STATIONS;
  hasIsHeadquarters(): boolean;
  clearIsHeadquarters(): STATIONS;

  getIsMaintsite(): boolean;
  setIsMaintsite(value: boolean): STATIONS;
  hasIsMaintsite(): boolean;
  clearIsMaintsite(): STATIONS;

  getIsMrreading(): boolean;
  setIsMrreading(value: boolean): STATIONS;
  hasIsMrreading(): boolean;
  clearIsMrreading(): STATIONS;

  getIsCservices(): boolean;
  setIsCservices(value: boolean): STATIONS;
  hasIsCservices(): boolean;
  clearIsCservices(): STATIONS;

  getIsReceipting(): boolean;
  setIsReceipting(value: boolean): STATIONS;
  hasIsReceipting(): boolean;
  clearIsReceipting(): STATIONS;

  getTelWork(): string;
  setTelWork(value: string): STATIONS;
  hasTelWork(): boolean;
  clearTelWork(): STATIONS;

  getTelFax(): string;
  setTelFax(value: string): STATIONS;
  hasTelFax(): boolean;
  clearTelFax(): STATIONS;

  getTelEmail(): string;
  setTelEmail(value: string): STATIONS;
  hasTelEmail(): boolean;
  clearTelEmail(): STATIONS;

  getTelAhours(): string;
  setTelAhours(value: string): STATIONS;
  hasTelAhours(): boolean;
  clearTelAhours(): STATIONS;

  getTelCompl(): string;
  setTelCompl(value: string): STATIONS;
  hasTelCompl(): boolean;
  clearTelCompl(): STATIONS;

  getLnAddress1(): string;
  setLnAddress1(value: string): STATIONS;
  hasLnAddress1(): boolean;
  clearLnAddress1(): STATIONS;

  getLnAddress2(): string;
  setLnAddress2(value: string): STATIONS;
  hasLnAddress2(): boolean;
  clearLnAddress2(): STATIONS;

  getLnAddress3(): string;
  setLnAddress3(value: string): STATIONS;
  hasLnAddress3(): boolean;
  clearLnAddress3(): STATIONS;

  getLnCity(): string;
  setLnCity(value: string): STATIONS;
  hasLnCity(): boolean;
  clearLnCity(): STATIONS;

  getLnPostal(): string;
  setLnPostal(value: string): STATIONS;
  hasLnPostal(): boolean;
  clearLnPostal(): STATIONS;

  getWorkingMon(): number;
  setWorkingMon(value: number): STATIONS;
  hasWorkingMon(): boolean;
  clearWorkingMon(): STATIONS;

  getWorkingTue(): number;
  setWorkingTue(value: number): STATIONS;
  hasWorkingTue(): boolean;
  clearWorkingTue(): STATIONS;

  getWorkingWed(): number;
  setWorkingWed(value: number): STATIONS;
  hasWorkingWed(): boolean;
  clearWorkingWed(): STATIONS;

  getWorkingThu(): number;
  setWorkingThu(value: number): STATIONS;
  hasWorkingThu(): boolean;
  clearWorkingThu(): STATIONS;

  getWorkingFri(): number;
  setWorkingFri(value: number): STATIONS;
  hasWorkingFri(): boolean;
  clearWorkingFri(): STATIONS;

  getWorkingSat(): number;
  setWorkingSat(value: number): STATIONS;
  hasWorkingSat(): boolean;
  clearWorkingSat(): STATIONS;

  getWorkingSun(): number;
  setWorkingSun(value: number): STATIONS;
  hasWorkingSun(): boolean;
  clearWorkingSun(): STATIONS;

  getOvertimeMon(): number;
  setOvertimeMon(value: number): STATIONS;
  hasOvertimeMon(): boolean;
  clearOvertimeMon(): STATIONS;

  getOvertimeTue(): number;
  setOvertimeTue(value: number): STATIONS;
  hasOvertimeTue(): boolean;
  clearOvertimeTue(): STATIONS;

  getOvertimeWed(): number;
  setOvertimeWed(value: number): STATIONS;
  hasOvertimeWed(): boolean;
  clearOvertimeWed(): STATIONS;

  getOvertimeThu(): number;
  setOvertimeThu(value: number): STATIONS;
  hasOvertimeThu(): boolean;
  clearOvertimeThu(): STATIONS;

  getOvertimeFri(): number;
  setOvertimeFri(value: number): STATIONS;
  hasOvertimeFri(): boolean;
  clearOvertimeFri(): STATIONS;

  getOvertimeSat(): number;
  setOvertimeSat(value: number): STATIONS;
  hasOvertimeSat(): boolean;
  clearOvertimeSat(): STATIONS;

  getOvertimeSun(): number;
  setOvertimeSun(value: number): STATIONS;
  hasOvertimeSun(): boolean;
  clearOvertimeSun(): STATIONS;

  getSiteMemo(): string;
  setSiteMemo(value: string): STATIONS;
  hasSiteMemo(): boolean;
  clearSiteMemo(): STATIONS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): STATIONS;
  hasStampDate(): boolean;
  clearStampDate(): STATIONS;

  getStampUser(): string;
  setStampUser(value: string): STATIONS;
  hasStampUser(): boolean;
  clearStampUser(): STATIONS;

  getMaintsiteCode(): number;
  setMaintsiteCode(value: number): STATIONS;
  hasMaintsiteCode(): boolean;
  clearMaintsiteCode(): STATIONS;

  getDefaultwarehouse(): number;
  setDefaultwarehouse(value: number): STATIONS;
  hasDefaultwarehouse(): boolean;
  clearDefaultwarehouse(): STATIONS;

  getDefaultdepot(): number;
  setDefaultdepot(value: number): STATIONS;
  hasDefaultdepot(): boolean;
  clearDefaultdepot(): STATIONS;

  getWarehousesetting(): number;
  setWarehousesetting(value: number): STATIONS;
  hasWarehousesetting(): boolean;
  clearWarehousesetting(): STATIONS;

  getDepotdsetting(): number;
  setDepotdsetting(value: number): STATIONS;
  hasDepotdsetting(): boolean;
  clearDepotdsetting(): STATIONS;

  getIpAddress(): string;
  setIpAddress(value: string): STATIONS;
  hasIpAddress(): boolean;
  clearIpAddress(): STATIONS;

  getPortNo(): number;
  setPortNo(value: number): STATIONS;
  hasPortNo(): boolean;
  clearPortNo(): STATIONS;

  getSectorCode(): number;
  setSectorCode(value: number): STATIONS;
  hasSectorCode(): boolean;
  clearSectorCode(): STATIONS;

  getSectorName(): string;
  setSectorName(value: string): STATIONS;
  hasSectorName(): boolean;
  clearSectorName(): STATIONS;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): STATIONS;
  hasIsDeleted(): boolean;
  clearIsDeleted(): STATIONS;

  getSiteCode(): number;
  setSiteCode(value: number): STATIONS;
  hasSiteCode(): boolean;
  clearSiteCode(): STATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: STATIONS): STATIONS.AsObject;
  static serializeBinaryToWriter(message: STATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STATIONS;
  static deserializeBinaryFromReader(message: STATIONS, reader: jspb.BinaryReader): STATIONS;
}

export namespace STATIONS {
  export type AsObject = {
    stationNo: number,
    stationName: string,
    description?: string,
    iscurrent?: number,
    dbStandalone?: number,
    dbAccess?: number,
    isHeadquarters?: boolean,
    isMaintsite?: boolean,
    isMrreading?: boolean,
    isCservices?: boolean,
    isReceipting?: boolean,
    telWork?: string,
    telFax?: string,
    telEmail?: string,
    telAhours?: string,
    telCompl?: string,
    lnAddress1?: string,
    lnAddress2?: string,
    lnAddress3?: string,
    lnCity?: string,
    lnPostal?: string,
    workingMon?: number,
    workingTue?: number,
    workingWed?: number,
    workingThu?: number,
    workingFri?: number,
    workingSat?: number,
    workingSun?: number,
    overtimeMon?: number,
    overtimeTue?: number,
    overtimeWed?: number,
    overtimeThu?: number,
    overtimeFri?: number,
    overtimeSat?: number,
    overtimeSun?: number,
    siteMemo?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    maintsiteCode?: number,
    defaultwarehouse?: number,
    defaultdepot?: number,
    warehousesetting?: number,
    depotdsetting?: number,
    ipAddress?: string,
    portNo?: number,
    sectorCode?: number,
    sectorName?: string,
    isDeleted?: boolean,
    siteCode?: number,
  }
}

export class ActivityPaidRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ActivityPaidRq;

  getArrexternalFees(): ArrEXTERNAL_FEES | undefined;
  setArrexternalFees(value?: ArrEXTERNAL_FEES): ActivityPaidRq;
  hasArrexternalFees(): boolean;
  clearArrexternalFees(): ActivityPaidRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityPaidRq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityPaidRq): ActivityPaidRq.AsObject;
  static serializeBinaryToWriter(message: ActivityPaidRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityPaidRq;
  static deserializeBinaryFromReader(message: ActivityPaidRq, reader: jspb.BinaryReader): ActivityPaidRq;
}

export namespace ActivityPaidRq {
  export type AsObject = {
    custkey: string,
    arrexternalFees?: ArrEXTERNAL_FEES.AsObject,
  }
}

export class CREATE_NEW_AGREEM_Rq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CREATE_NEW_AGREEM_Rq;

  getAmount(): number;
  setAmount(value: number): CREATE_NEW_AGREEM_Rq;

  getNoMonths(): number;
  setNoMonths(value: number): CREATE_NEW_AGREEM_Rq;
  hasNoMonths(): boolean;
  clearNoMonths(): CREATE_NEW_AGREEM_Rq;

  getQestAmt(): number;
  setQestAmt(value: number): CREATE_NEW_AGREEM_Rq;
  hasQestAmt(): boolean;
  clearQestAmt(): CREATE_NEW_AGREEM_Rq;

  getTransType(): number;
  setTransType(value: number): CREATE_NEW_AGREEM_Rq;

  getTransStype(): number;
  setTransStype(value: number): CREATE_NEW_AGREEM_Rq;

  getStartDate(): date_pb.MasDateTime | undefined;
  setStartDate(value?: date_pb.MasDateTime): CREATE_NEW_AGREEM_Rq;
  hasStartDate(): boolean;
  clearStartDate(): CREATE_NEW_AGREEM_Rq;

  getInterest(): number;
  setInterest(value: number): CREATE_NEW_AGREEM_Rq;
  hasInterest(): boolean;
  clearInterest(): CREATE_NEW_AGREEM_Rq;

  getRevAgreemTrnsType(): number;
  setRevAgreemTrnsType(value: number): CREATE_NEW_AGREEM_Rq;
  hasRevAgreemTrnsType(): boolean;
  clearRevAgreemTrnsType(): CREATE_NEW_AGREEM_Rq;

  getRevAgreemTrnsStype(): number;
  setRevAgreemTrnsStype(value: number): CREATE_NEW_AGREEM_Rq;
  hasRevAgreemTrnsStype(): boolean;
  clearRevAgreemTrnsStype(): CREATE_NEW_AGREEM_Rq;

  getNoValidations(): boolean;
  setNoValidations(value: boolean): CREATE_NEW_AGREEM_Rq;
  hasNoValidations(): boolean;
  clearNoValidations(): CREATE_NEW_AGREEM_Rq;

  getId(): number;
  setId(value: number): CREATE_NEW_AGREEM_Rq;

  getAgreemFromType(): number;
  setAgreemFromType(value: number): CREATE_NEW_AGREEM_Rq;
  hasAgreemFromType(): boolean;
  clearAgreemFromType(): CREATE_NEW_AGREEM_Rq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CREATE_NEW_AGREEM_Rq.AsObject;
  static toObject(includeInstance: boolean, msg: CREATE_NEW_AGREEM_Rq): CREATE_NEW_AGREEM_Rq.AsObject;
  static serializeBinaryToWriter(message: CREATE_NEW_AGREEM_Rq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CREATE_NEW_AGREEM_Rq;
  static deserializeBinaryFromReader(message: CREATE_NEW_AGREEM_Rq, reader: jspb.BinaryReader): CREATE_NEW_AGREEM_Rq;
}

export namespace CREATE_NEW_AGREEM_Rq {
  export type AsObject = {
    custkey: string,
    amount: number,
    noMonths?: number,
    qestAmt?: number,
    transType: number,
    transStype: number,
    startDate?: date_pb.MasDateTime.AsObject,
    interest?: number,
    revAgreemTrnsType?: number,
    revAgreemTrnsStype?: number,
    noValidations?: boolean,
    id: number,
    agreemFromType?: number,
  }
}

export class ArrCREATE_NEW_AGREEM_Rq extends jspb.Message {
  getCreateNewAgreemRqList(): Array<CREATE_NEW_AGREEM_Rq>;
  setCreateNewAgreemRqList(value: Array<CREATE_NEW_AGREEM_Rq>): ArrCREATE_NEW_AGREEM_Rq;
  clearCreateNewAgreemRqList(): ArrCREATE_NEW_AGREEM_Rq;
  addCreateNewAgreemRq(value?: CREATE_NEW_AGREEM_Rq, index?: number): CREATE_NEW_AGREEM_Rq;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): ArrCREATE_NEW_AGREEM_Rq;
  hasTrace(): boolean;
  clearTrace(): ArrCREATE_NEW_AGREEM_Rq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCREATE_NEW_AGREEM_Rq.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCREATE_NEW_AGREEM_Rq): ArrCREATE_NEW_AGREEM_Rq.AsObject;
  static serializeBinaryToWriter(message: ArrCREATE_NEW_AGREEM_Rq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCREATE_NEW_AGREEM_Rq;
  static deserializeBinaryFromReader(message: ArrCREATE_NEW_AGREEM_Rq, reader: jspb.BinaryReader): ArrCREATE_NEW_AGREEM_Rq;
}

export namespace ArrCREATE_NEW_AGREEM_Rq {
  export type AsObject = {
    createNewAgreemRqList: Array<CREATE_NEW_AGREEM_Rq.AsObject>,
    trace?: APP_TRACER.AsObject,
  }
}

export class EditAgreemRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditAgreemRq;

  getAmount(): number;
  setAmount(value: number): EditAgreemRq;

  getAgreemNo(): number;
  setAgreemNo(value: number): EditAgreemRq;

  getNoMonths(): number;
  setNoMonths(value: number): EditAgreemRq;
  hasNoMonths(): boolean;
  clearNoMonths(): EditAgreemRq;

  getQestAmt(): number;
  setQestAmt(value: number): EditAgreemRq;
  hasQestAmt(): boolean;
  clearQestAmt(): EditAgreemRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditAgreemRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditAgreemRq): EditAgreemRq.AsObject;
  static serializeBinaryToWriter(message: EditAgreemRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditAgreemRq;
  static deserializeBinaryFromReader(message: EditAgreemRq, reader: jspb.BinaryReader): EditAgreemRq;
}

export namespace EditAgreemRq {
  export type AsObject = {
    custkey: string,
    amount: number,
    agreemNo: number,
    noMonths?: number,
    qestAmt?: number,
  }
}

export class GetNoUnitsRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetNoUnitsRs;

  getOldNoUnits(): number;
  setOldNoUnits(value: number): GetNoUnitsRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoUnitsRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoUnitsRs): GetNoUnitsRs.AsObject;
  static serializeBinaryToWriter(message: GetNoUnitsRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoUnitsRs;
  static deserializeBinaryFromReader(message: GetNoUnitsRs, reader: jspb.BinaryReader): GetNoUnitsRs;
}

export namespace GetNoUnitsRs {
  export type AsObject = {
    custkey: string,
    oldNoUnits: number,
  }
}

export class GetEstimConsumpRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetEstimConsumpRs;

  getCustomerNewEstimCons(): number;
  setCustomerNewEstimCons(value: number): GetEstimConsumpRs;
  hasCustomerNewEstimCons(): boolean;
  clearCustomerNewEstimCons(): GetEstimConsumpRs;

  getIsManualEstim(): number;
  setIsManualEstim(value: number): GetEstimConsumpRs;
  hasIsManualEstim(): boolean;
  clearIsManualEstim(): GetEstimConsumpRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEstimConsumpRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetEstimConsumpRs): GetEstimConsumpRs.AsObject;
  static serializeBinaryToWriter(message: GetEstimConsumpRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEstimConsumpRs;
  static deserializeBinaryFromReader(message: GetEstimConsumpRs, reader: jspb.BinaryReader): GetEstimConsumpRs;
}

export namespace GetEstimConsumpRs {
  export type AsObject = {
    custkey: string,
    customerNewEstimCons?: number,
    isManualEstim?: number,
  }
}

export class TasweyaCustomersRq extends jspb.Message {
  getFromCustkey(): string;
  setFromCustkey(value: string): TasweyaCustomersRq;
  hasFromCustkey(): boolean;
  clearFromCustkey(): TasweyaCustomersRq;

  getToCustkey(): string;
  setToCustkey(value: string): TasweyaCustomersRq;
  hasToCustkey(): boolean;
  clearToCustkey(): TasweyaCustomersRq;

  getAmount(): number;
  setAmount(value: number): TasweyaCustomersRq;
  hasAmount(): boolean;
  clearAmount(): TasweyaCustomersRq;

  getEffectDate(): date_pb.MasDateTime | undefined;
  setEffectDate(value?: date_pb.MasDateTime): TasweyaCustomersRq;
  hasEffectDate(): boolean;
  clearEffectDate(): TasweyaCustomersRq;

  getNotes(): string;
  setNotes(value: string): TasweyaCustomersRq;
  hasNotes(): boolean;
  clearNotes(): TasweyaCustomersRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TasweyaCustomersRq.AsObject;
  static toObject(includeInstance: boolean, msg: TasweyaCustomersRq): TasweyaCustomersRq.AsObject;
  static serializeBinaryToWriter(message: TasweyaCustomersRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TasweyaCustomersRq;
  static deserializeBinaryFromReader(message: TasweyaCustomersRq, reader: jspb.BinaryReader): TasweyaCustomersRq;
}

export namespace TasweyaCustomersRq {
  export type AsObject = {
    fromCustkey?: string,
    toCustkey?: string,
    amount?: number,
    effectDate?: date_pb.MasDateTime.AsObject,
    notes?: string,
  }
}

export class AddCheqBankRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): AddCheqBankRq;

  getOldKey(): string;
  setOldKey(value: string): AddCheqBankRq;
  hasOldKey(): boolean;
  clearOldKey(): AddCheqBankRq;

  getSurname(): string;
  setSurname(value: string): AddCheqBankRq;
  hasSurname(): boolean;
  clearSurname(): AddCheqBankRq;

  getBillGroup(): string;
  setBillGroup(value: string): AddCheqBankRq;
  hasBillGroup(): boolean;
  clearBillGroup(): AddCheqBankRq;

  getTblBankChecksList(): Array<TBL_BANK_CHECKS>;
  setTblBankChecksList(value: Array<TBL_BANK_CHECKS>): AddCheqBankRq;
  clearTblBankChecksList(): AddCheqBankRq;
  addTblBankChecks(value?: TBL_BANK_CHECKS, index?: number): TBL_BANK_CHECKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCheqBankRq.AsObject;
  static toObject(includeInstance: boolean, msg: AddCheqBankRq): AddCheqBankRq.AsObject;
  static serializeBinaryToWriter(message: AddCheqBankRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCheqBankRq;
  static deserializeBinaryFromReader(message: AddCheqBankRq, reader: jspb.BinaryReader): AddCheqBankRq;
}

export namespace AddCheqBankRq {
  export type AsObject = {
    custkey: string,
    oldKey?: string,
    surname?: string,
    billGroup?: string,
    tblBankChecksList: Array<TBL_BANK_CHECKS.AsObject>,
  }
}

export class TBL_BANK_CHECKS extends jspb.Message {
  getDepositDate(): date_pb.MasDateTime | undefined;
  setDepositDate(value?: date_pb.MasDateTime): TBL_BANK_CHECKS;
  hasDepositDate(): boolean;
  clearDepositDate(): TBL_BANK_CHECKS;

  getBankCheckNo(): string;
  setBankCheckNo(value: string): TBL_BANK_CHECKS;

  getBankCheckAmount(): number;
  setBankCheckAmount(value: number): TBL_BANK_CHECKS;

  getBankCheckName(): string;
  setBankCheckName(value: string): TBL_BANK_CHECKS;

  getReceiptNo(): string;
  setReceiptNo(value: string): TBL_BANK_CHECKS;
  hasReceiptNo(): boolean;
  clearReceiptNo(): TBL_BANK_CHECKS;

  getDepositBank(): string;
  setDepositBank(value: string): TBL_BANK_CHECKS;
  hasDepositBank(): boolean;
  clearDepositBank(): TBL_BANK_CHECKS;

  getReceivalDate(): date_pb.MasDateTime | undefined;
  setReceivalDate(value?: date_pb.MasDateTime): TBL_BANK_CHECKS;
  hasReceivalDate(): boolean;
  clearReceivalDate(): TBL_BANK_CHECKS;

  getDueDate(): date_pb.MasDateTime | undefined;
  setDueDate(value?: date_pb.MasDateTime): TBL_BANK_CHECKS;
  hasDueDate(): boolean;
  clearDueDate(): TBL_BANK_CHECKS;

  getNotes(): string;
  setNotes(value: string): TBL_BANK_CHECKS;
  hasNotes(): boolean;
  clearNotes(): TBL_BANK_CHECKS;

  getSignature(): string;
  setSignature(value: string): TBL_BANK_CHECKS;
  hasSignature(): boolean;
  clearSignature(): TBL_BANK_CHECKS;

  getInsertedInFTrans(): boolean;
  setInsertedInFTrans(value: boolean): TBL_BANK_CHECKS;
  hasInsertedInFTrans(): boolean;
  clearInsertedInFTrans(): TBL_BANK_CHECKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_BANK_CHECKS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_BANK_CHECKS): TBL_BANK_CHECKS.AsObject;
  static serializeBinaryToWriter(message: TBL_BANK_CHECKS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_BANK_CHECKS;
  static deserializeBinaryFromReader(message: TBL_BANK_CHECKS, reader: jspb.BinaryReader): TBL_BANK_CHECKS;
}

export namespace TBL_BANK_CHECKS {
  export type AsObject = {
    depositDate?: date_pb.MasDateTime.AsObject,
    bankCheckNo: string,
    bankCheckAmount: number,
    bankCheckName: string,
    receiptNo?: string,
    depositBank?: string,
    receivalDate?: date_pb.MasDateTime.AsObject,
    dueDate?: date_pb.MasDateTime.AsObject,
    notes?: string,
    signature?: string,
    insertedInFTrans?: boolean,
  }
}

export class CustDebitTableRq extends jspb.Message {
  getCustomerDebitsTableList(): Array<CUSTOMER_DEBITS_TABLE>;
  setCustomerDebitsTableList(value: Array<CUSTOMER_DEBITS_TABLE>): CustDebitTableRq;
  clearCustomerDebitsTableList(): CustDebitTableRq;
  addCustomerDebitsTable(value?: CUSTOMER_DEBITS_TABLE, index?: number): CUSTOMER_DEBITS_TABLE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustDebitTableRq.AsObject;
  static toObject(includeInstance: boolean, msg: CustDebitTableRq): CustDebitTableRq.AsObject;
  static serializeBinaryToWriter(message: CustDebitTableRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustDebitTableRq;
  static deserializeBinaryFromReader(message: CustDebitTableRq, reader: jspb.BinaryReader): CustDebitTableRq;
}

export namespace CustDebitTableRq {
  export type AsObject = {
    customerDebitsTableList: Array<CUSTOMER_DEBITS_TABLE.AsObject>,
  }
}

export class CUSTOMER_DEBITS_TABLE extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_DEBITS_TABLE;

  getAmount(): number;
  setAmount(value: number): CUSTOMER_DEBITS_TABLE;

  getMemoField(): string;
  setMemoField(value: string): CUSTOMER_DEBITS_TABLE;

  getEffectDate(): date_pb.MasDateTime | undefined;
  setEffectDate(value?: date_pb.MasDateTime): CUSTOMER_DEBITS_TABLE;
  hasEffectDate(): boolean;
  clearEffectDate(): CUSTOMER_DEBITS_TABLE;

  getTransactionTypes(): number;
  setTransactionTypes(value: number): CUSTOMER_DEBITS_TABLE;
  hasTransactionTypes(): boolean;
  clearTransactionTypes(): CUSTOMER_DEBITS_TABLE;

  getMainTransactionTypes(): number;
  setMainTransactionTypes(value: number): CUSTOMER_DEBITS_TABLE;
  hasMainTransactionTypes(): boolean;
  clearMainTransactionTypes(): CUSTOMER_DEBITS_TABLE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_DEBITS_TABLE.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_DEBITS_TABLE): CUSTOMER_DEBITS_TABLE.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_DEBITS_TABLE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_DEBITS_TABLE;
  static deserializeBinaryFromReader(message: CUSTOMER_DEBITS_TABLE, reader: jspb.BinaryReader): CUSTOMER_DEBITS_TABLE;
}

export namespace CUSTOMER_DEBITS_TABLE {
  export type AsObject = {
    custkey: string,
    amount: number,
    memoField: string,
    effectDate?: date_pb.MasDateTime.AsObject,
    transactionTypes?: number,
    mainTransactionTypes?: number,
  }
}

export class POST_AMOUT_TO_BILLING_RQS extends jspb.Message {
  getItemsList(): Array<POST_AMOUT_TO_BILLING_RQ>;
  setItemsList(value: Array<POST_AMOUT_TO_BILLING_RQ>): POST_AMOUT_TO_BILLING_RQS;
  clearItemsList(): POST_AMOUT_TO_BILLING_RQS;
  addItems(value?: POST_AMOUT_TO_BILLING_RQ, index?: number): POST_AMOUT_TO_BILLING_RQ;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): POST_AMOUT_TO_BILLING_RQS;
  hasTrace(): boolean;
  clearTrace(): POST_AMOUT_TO_BILLING_RQS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): POST_AMOUT_TO_BILLING_RQS.AsObject;
  static toObject(includeInstance: boolean, msg: POST_AMOUT_TO_BILLING_RQS): POST_AMOUT_TO_BILLING_RQS.AsObject;
  static serializeBinaryToWriter(message: POST_AMOUT_TO_BILLING_RQS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): POST_AMOUT_TO_BILLING_RQS;
  static deserializeBinaryFromReader(message: POST_AMOUT_TO_BILLING_RQS, reader: jspb.BinaryReader): POST_AMOUT_TO_BILLING_RQS;
}

export namespace POST_AMOUT_TO_BILLING_RQS {
  export type AsObject = {
    itemsList: Array<POST_AMOUT_TO_BILLING_RQ.AsObject>,
    trace?: APP_TRACER.AsObject,
  }
}

export class EditNoUnitsRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditNoUnitsRq;

  getNewNoUnits(): number;
  setNewNoUnits(value: number): EditNoUnitsRq;

  getOldNoUnits(): number;
  setOldNoUnits(value: number): EditNoUnitsRq;
  hasOldNoUnits(): boolean;
  clearOldNoUnits(): EditNoUnitsRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditNoUnitsRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditNoUnitsRq): EditNoUnitsRq.AsObject;
  static serializeBinaryToWriter(message: EditNoUnitsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditNoUnitsRq;
  static deserializeBinaryFromReader(message: EditNoUnitsRq, reader: jspb.BinaryReader): EditNoUnitsRq;
}

export namespace EditNoUnitsRq {
  export type AsObject = {
    custkey: string,
    newNoUnits: number,
    oldNoUnits?: number,
  }
}

export class AddRemoveUnitsReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): AddRemoveUnitsReq;

  getNoUnits(): number;
  setNoUnits(value: number): AddRemoveUnitsReq;

  getAdd(): boolean;
  setAdd(value: boolean): AddRemoveUnitsReq;
  hasAdd(): boolean;
  clearAdd(): AddRemoveUnitsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRemoveUnitsReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddRemoveUnitsReq): AddRemoveUnitsReq.AsObject;
  static serializeBinaryToWriter(message: AddRemoveUnitsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRemoveUnitsReq;
  static deserializeBinaryFromReader(message: AddRemoveUnitsReq, reader: jspb.BinaryReader): AddRemoveUnitsReq;
}

export namespace AddRemoveUnitsReq {
  export type AsObject = {
    custkey: string,
    noUnits: number,
    add?: boolean,
  }
}

export class GetSurnameRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetSurnameRs;

  getOldSurname(): string;
  setOldSurname(value: string): GetSurnameRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurnameRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurnameRs): GetSurnameRs.AsObject;
  static serializeBinaryToWriter(message: GetSurnameRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurnameRs;
  static deserializeBinaryFromReader(message: GetSurnameRs, reader: jspb.BinaryReader): GetSurnameRs;
}

export namespace GetSurnameRs {
  export type AsObject = {
    custkey: string,
    oldSurname: string,
  }
}

export class EditSurnameRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditSurnameRq;

  getNewSurname(): string;
  setNewSurname(value: string): EditSurnameRq;

  getOldSurname(): string;
  setOldSurname(value: string): EditSurnameRq;
  hasOldSurname(): boolean;
  clearOldSurname(): EditSurnameRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditSurnameRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditSurnameRq): EditSurnameRq.AsObject;
  static serializeBinaryToWriter(message: EditSurnameRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditSurnameRq;
  static deserializeBinaryFromReader(message: EditSurnameRq, reader: jspb.BinaryReader): EditSurnameRq;
}

export namespace EditSurnameRq {
  export type AsObject = {
    custkey: string,
    newSurname: string,
    oldSurname?: string,
  }
}

export class GetAddressRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetAddressRs;

  getOldAddress(): string;
  setOldAddress(value: string): GetAddressRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressRs): GetAddressRs.AsObject;
  static serializeBinaryToWriter(message: GetAddressRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressRs;
  static deserializeBinaryFromReader(message: GetAddressRs, reader: jspb.BinaryReader): GetAddressRs;
}

export namespace GetAddressRs {
  export type AsObject = {
    custkey: string,
    oldAddress: string,
  }
}

export class EditAddressRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditAddressRq;

  getNewAddress(): string;
  setNewAddress(value: string): EditAddressRq;

  getOldAddress(): string;
  setOldAddress(value: string): EditAddressRq;
  hasOldAddress(): boolean;
  clearOldAddress(): EditAddressRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditAddressRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditAddressRq): EditAddressRq.AsObject;
  static serializeBinaryToWriter(message: EditAddressRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditAddressRq;
  static deserializeBinaryFromReader(message: EditAddressRq, reader: jspb.BinaryReader): EditAddressRq;
}

export namespace EditAddressRq {
  export type AsObject = {
    custkey: string,
    newAddress: string,
    oldAddress?: string,
  }
}

export class EditCtypeRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditCtypeRq;

  getNewCType(): string;
  setNewCType(value: string): EditCtypeRq;

  getOldCType(): string;
  setOldCType(value: string): EditCtypeRq;
  hasOldCType(): boolean;
  clearOldCType(): EditCtypeRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCtypeRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditCtypeRq): EditCtypeRq.AsObject;
  static serializeBinaryToWriter(message: EditCtypeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCtypeRq;
  static deserializeBinaryFromReader(message: EditCtypeRq, reader: jspb.BinaryReader): EditCtypeRq;
}

export namespace EditCtypeRq {
  export type AsObject = {
    custkey: string,
    newCType: string,
    oldCType?: string,
  }
}

export class GetCtypeRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetCtypeRs;

  getOldCType(): string;
  setOldCType(value: string): GetCtypeRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCtypeRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCtypeRs): GetCtypeRs.AsObject;
  static serializeBinaryToWriter(message: GetCtypeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCtypeRs;
  static deserializeBinaryFromReader(message: GetCtypeRs, reader: jspb.BinaryReader): GetCtypeRs;
}

export namespace GetCtypeRs {
  export type AsObject = {
    custkey: string,
    oldCType: string,
  }
}

export class EditMeterSizeRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditMeterSizeRq;

  getNewMeterSize(): number;
  setNewMeterSize(value: number): EditMeterSizeRq;

  getOldMeterSize(): string;
  setOldMeterSize(value: string): EditMeterSizeRq;
  hasOldMeterSize(): boolean;
  clearOldMeterSize(): EditMeterSizeRq;

  getNewSerialNo(): string;
  setNewSerialNo(value: string): EditMeterSizeRq;
  hasNewSerialNo(): boolean;
  clearNewSerialNo(): EditMeterSizeRq;

  getOldSerialNo(): string;
  setOldSerialNo(value: string): EditMeterSizeRq;
  hasOldSerialNo(): boolean;
  clearOldSerialNo(): EditMeterSizeRq;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): EditMeterSizeRq;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): EditMeterSizeRq;

  getNewMeterSizeBiling(): string;
  setNewMeterSizeBiling(value: string): EditMeterSizeRq;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): EditMeterSizeRq;
  hasInstallDate(): boolean;
  clearInstallDate(): EditMeterSizeRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMeterSizeRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditMeterSizeRq): EditMeterSizeRq.AsObject;
  static serializeBinaryToWriter(message: EditMeterSizeRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMeterSizeRq;
  static deserializeBinaryFromReader(message: EditMeterSizeRq, reader: jspb.BinaryReader): EditMeterSizeRq;
}

export namespace EditMeterSizeRq {
  export type AsObject = {
    custkey: string,
    newMeterSize: number,
    oldMeterSize?: string,
    newSerialNo?: string,
    oldSerialNo?: string,
    meterTagNo?: string,
    newMeterSizeBiling: string,
    installDate?: date_pb.MasDateTime.AsObject,
  }
}

export class EditKhelsaCustomerRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditKhelsaCustomerRq;

  getMonthlyConsumpAmount(): number;
  setMonthlyConsumpAmount(value: number): EditKhelsaCustomerRq;

  getDisableKhelsa(): boolean;
  setDisableKhelsa(value: boolean): EditKhelsaCustomerRq;
  hasDisableKhelsa(): boolean;
  clearDisableKhelsa(): EditKhelsaCustomerRq;

  getPenaltyCode(): number;
  setPenaltyCode(value: number): EditKhelsaCustomerRq;
  hasPenaltyCode(): boolean;
  clearPenaltyCode(): EditKhelsaCustomerRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditKhelsaCustomerRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditKhelsaCustomerRq): EditKhelsaCustomerRq.AsObject;
  static serializeBinaryToWriter(message: EditKhelsaCustomerRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditKhelsaCustomerRq;
  static deserializeBinaryFromReader(message: EditKhelsaCustomerRq, reader: jspb.BinaryReader): EditKhelsaCustomerRq;
}

export namespace EditKhelsaCustomerRq {
  export type AsObject = {
    custkey: string,
    monthlyConsumpAmount: number,
    disableKhelsa?: boolean,
    penaltyCode?: number,
  }
}

export class EditKhelsaCustomerRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditKhelsaCustomerRs;

  getOldMonthlyConsumpAmount(): number;
  setOldMonthlyConsumpAmount(value: number): EditKhelsaCustomerRs;

  getDisableKhelsa(): boolean;
  setDisableKhelsa(value: boolean): EditKhelsaCustomerRs;
  hasDisableKhelsa(): boolean;
  clearDisableKhelsa(): EditKhelsaCustomerRs;

  getPenaltyCode(): number;
  setPenaltyCode(value: number): EditKhelsaCustomerRs;
  hasPenaltyCode(): boolean;
  clearPenaltyCode(): EditKhelsaCustomerRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditKhelsaCustomerRs.AsObject;
  static toObject(includeInstance: boolean, msg: EditKhelsaCustomerRs): EditKhelsaCustomerRs.AsObject;
  static serializeBinaryToWriter(message: EditKhelsaCustomerRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditKhelsaCustomerRs;
  static deserializeBinaryFromReader(message: EditKhelsaCustomerRs, reader: jspb.BinaryReader): EditKhelsaCustomerRs;
}

export namespace EditKhelsaCustomerRs {
  export type AsObject = {
    custkey: string,
    oldMonthlyConsumpAmount: number,
    disableKhelsa?: boolean,
    penaltyCode?: number,
  }
}

export class GetCMeterSizeRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetCMeterSizeRs;

  getOldMeterSize(): string;
  setOldMeterSize(value: string): GetCMeterSizeRs;
  hasOldMeterSize(): boolean;
  clearOldMeterSize(): GetCMeterSizeRs;

  getOldSerialNo(): string;
  setOldSerialNo(value: string): GetCMeterSizeRs;
  hasOldSerialNo(): boolean;
  clearOldSerialNo(): GetCMeterSizeRs;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): GetCMeterSizeRs;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): GetCMeterSizeRs;

  getOldMeterSizeCode(): number;
  setOldMeterSizeCode(value: number): GetCMeterSizeRs;
  hasOldMeterSizeCode(): boolean;
  clearOldMeterSizeCode(): GetCMeterSizeRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCMeterSizeRs.AsObject;
  static toObject(includeInstance: boolean, msg: GetCMeterSizeRs): GetCMeterSizeRs.AsObject;
  static serializeBinaryToWriter(message: GetCMeterSizeRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCMeterSizeRs;
  static deserializeBinaryFromReader(message: GetCMeterSizeRs, reader: jspb.BinaryReader): GetCMeterSizeRs;
}

export namespace GetCMeterSizeRs {
  export type AsObject = {
    custkey: string,
    oldMeterSize?: string,
    oldSerialNo?: string,
    meterTagNo?: string,
    oldMeterSizeCode?: number,
  }
}

export class CustkeyRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustkeyRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustkeyRq.AsObject;
  static toObject(includeInstance: boolean, msg: CustkeyRq): CustkeyRq.AsObject;
  static serializeBinaryToWriter(message: CustkeyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustkeyRq;
  static deserializeBinaryFromReader(message: CustkeyRq, reader: jspb.BinaryReader): CustkeyRq;
}

export namespace CustkeyRq {
  export type AsObject = {
    custkey: string,
  }
}

export class ArrCustkeyRq extends jspb.Message {
  getCustkeyList(): Array<string>;
  setCustkeyList(value: Array<string>): ArrCustkeyRq;
  clearCustkeyList(): ArrCustkeyRq;
  addCustkey(value: string, index?: number): ArrCustkeyRq;

  getWithMeterReading(): boolean;
  setWithMeterReading(value: boolean): ArrCustkeyRq;
  hasWithMeterReading(): boolean;
  clearWithMeterReading(): ArrCustkeyRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustkeyRq.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustkeyRq): ArrCustkeyRq.AsObject;
  static serializeBinaryToWriter(message: ArrCustkeyRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustkeyRq;
  static deserializeBinaryFromReader(message: ArrCustkeyRq, reader: jspb.BinaryReader): ArrCustkeyRq;
}

export namespace ArrCustkeyRq {
  export type AsObject = {
    custkeyList: Array<string>,
    withMeterReading?: boolean,
  }
}

export class AllAgreemRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): AllAgreemRs;

  getAgreemNo(): number;
  setAgreemNo(value: number): AllAgreemRs;

  getTotalAgreemAmt(): number;
  setTotalAgreemAmt(value: number): AllAgreemRs;

  getRemainingAgreemAmt(): number;
  setRemainingAgreemAmt(value: number): AllAgreemRs;

  getRemainingNoMonths(): number;
  setRemainingNoMonths(value: number): AllAgreemRs;

  getQestVal(): number;
  setQestVal(value: number): AllAgreemRs;

  getPenalty(): number;
  setPenalty(value: number): AllAgreemRs;
  hasPenalty(): boolean;
  clearPenalty(): AllAgreemRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllAgreemRs.AsObject;
  static toObject(includeInstance: boolean, msg: AllAgreemRs): AllAgreemRs.AsObject;
  static serializeBinaryToWriter(message: AllAgreemRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllAgreemRs;
  static deserializeBinaryFromReader(message: AllAgreemRs, reader: jspb.BinaryReader): AllAgreemRs;
}

export namespace AllAgreemRs {
  export type AsObject = {
    custkey: string,
    agreemNo: number,
    totalAgreemAmt: number,
    remainingAgreemAmt: number,
    remainingNoMonths: number,
    qestVal: number,
    penalty?: number,
  }
}

export class ArrAllAgreemRs extends jspb.Message {
  getAllagreemrsList(): Array<AllAgreemRs>;
  setAllagreemrsList(value: Array<AllAgreemRs>): ArrAllAgreemRs;
  clearAllagreemrsList(): ArrAllAgreemRs;
  addAllagreemrs(value?: AllAgreemRs, index?: number): AllAgreemRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrAllAgreemRs.AsObject;
  static toObject(includeInstance: boolean, msg: ArrAllAgreemRs): ArrAllAgreemRs.AsObject;
  static serializeBinaryToWriter(message: ArrAllAgreemRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrAllAgreemRs;
  static deserializeBinaryFromReader(message: ArrAllAgreemRs, reader: jspb.BinaryReader): ArrAllAgreemRs;
}

export namespace ArrAllAgreemRs {
  export type AsObject = {
    allagreemrsList: Array<AllAgreemRs.AsObject>,
  }
}

export class TransactionTypes extends jspb.Message {
  getTransType(): number;
  setTransType(value: number): TransactionTypes;

  getTransStype(): number;
  setTransStype(value: number): TransactionTypes;

  getDescription(): string;
  setDescription(value: string): TransactionTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionTypes.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionTypes): TransactionTypes.AsObject;
  static serializeBinaryToWriter(message: TransactionTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionTypes;
  static deserializeBinaryFromReader(message: TransactionTypes, reader: jspb.BinaryReader): TransactionTypes;
}

export namespace TransactionTypes {
  export type AsObject = {
    transType: number,
    transStype: number,
    description: string,
  }
}

export class ArrTransactionTypes extends jspb.Message {
  getTransactiontypesList(): Array<TransactionTypes>;
  setTransactiontypesList(value: Array<TransactionTypes>): ArrTransactionTypes;
  clearTransactiontypesList(): ArrTransactionTypes;
  addTransactiontypes(value?: TransactionTypes, index?: number): TransactionTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTransactionTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTransactionTypes): ArrTransactionTypes.AsObject;
  static serializeBinaryToWriter(message: ArrTransactionTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTransactionTypes;
  static deserializeBinaryFromReader(message: ArrTransactionTypes, reader: jspb.BinaryReader): ArrTransactionTypes;
}

export namespace ArrTransactionTypes {
  export type AsObject = {
    transactiontypesList: Array<TransactionTypes.AsObject>,
  }
}

export class LookupValues extends jspb.Message {
  getBpmExternalModuleId(): number;
  setBpmExternalModuleId(value: number): LookupValues;

  getAppTypeId(): number;
  setAppTypeId(value: number): LookupValues;

  getLookupvalsList(): Array<LookupVals>;
  setLookupvalsList(value: Array<LookupVals>): LookupValues;
  clearLookupvalsList(): LookupValues;
  addLookupvals(value?: LookupVals, index?: number): LookupVals;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupValues.AsObject;
  static toObject(includeInstance: boolean, msg: LookupValues): LookupValues.AsObject;
  static serializeBinaryToWriter(message: LookupValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupValues;
  static deserializeBinaryFromReader(message: LookupValues, reader: jspb.BinaryReader): LookupValues;
}

export namespace LookupValues {
  export type AsObject = {
    bpmExternalModuleId: number,
    appTypeId: number,
    lookupvalsList: Array<LookupVals.AsObject>,
  }
}

export class LookupVals extends jspb.Message {
  getFieldId(): number;
  setFieldId(value: number): LookupVals;

  getCode(): string;
  setCode(value: string): LookupVals;

  getDescription(): string;
  setDescription(value: string): LookupVals;
  hasDescription(): boolean;
  clearDescription(): LookupVals;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupVals.AsObject;
  static toObject(includeInstance: boolean, msg: LookupVals): LookupVals.AsObject;
  static serializeBinaryToWriter(message: LookupVals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupVals;
  static deserializeBinaryFromReader(message: LookupVals, reader: jspb.BinaryReader): LookupVals;
}

export namespace LookupVals {
  export type AsObject = {
    fieldId: number,
    code: string,
    description?: string,
  }
}

export class LookupDatasource extends jspb.Message {
  getBpmExternalModuleId(): number;
  setBpmExternalModuleId(value: number): LookupDatasource;

  getDataSourcsesValuesList(): Array<DATA_SOURCSES_VALUES>;
  setDataSourcsesValuesList(value: Array<DATA_SOURCSES_VALUES>): LookupDatasource;
  clearDataSourcsesValuesList(): LookupDatasource;
  addDataSourcsesValues(value?: DATA_SOURCSES_VALUES, index?: number): DATA_SOURCSES_VALUES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupDatasource.AsObject;
  static toObject(includeInstance: boolean, msg: LookupDatasource): LookupDatasource.AsObject;
  static serializeBinaryToWriter(message: LookupDatasource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupDatasource;
  static deserializeBinaryFromReader(message: LookupDatasource, reader: jspb.BinaryReader): LookupDatasource;
}

export namespace LookupDatasource {
  export type AsObject = {
    bpmExternalModuleId: number,
    dataSourcsesValuesList: Array<DATA_SOURCSES_VALUES.AsObject>,
  }
}

export class ACTIVITY_DATASOURCES extends jspb.Message {
  getBpmId(): number;
  setBpmId(value: number): ACTIVITY_DATASOURCES;

  getActivityName(): string;
  setActivityName(value: string): ACTIVITY_DATASOURCES;

  getBpmExternalModuleId(): number;
  setBpmExternalModuleId(value: number): ACTIVITY_DATASOURCES;

  getDataSourcsesValuesList(): Array<DATA_SOURCSES_VALUES>;
  setDataSourcsesValuesList(value: Array<DATA_SOURCSES_VALUES>): ACTIVITY_DATASOURCES;
  clearDataSourcsesValuesList(): ACTIVITY_DATASOURCES;
  addDataSourcsesValues(value?: DATA_SOURCSES_VALUES, index?: number): DATA_SOURCSES_VALUES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACTIVITY_DATASOURCES.AsObject;
  static toObject(includeInstance: boolean, msg: ACTIVITY_DATASOURCES): ACTIVITY_DATASOURCES.AsObject;
  static serializeBinaryToWriter(message: ACTIVITY_DATASOURCES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACTIVITY_DATASOURCES;
  static deserializeBinaryFromReader(message: ACTIVITY_DATASOURCES, reader: jspb.BinaryReader): ACTIVITY_DATASOURCES;
}

export namespace ACTIVITY_DATASOURCES {
  export type AsObject = {
    bpmId: number,
    activityName: string,
    bpmExternalModuleId: number,
    dataSourcsesValuesList: Array<DATA_SOURCSES_VALUES.AsObject>,
  }
}

export class DATA_SOURCSES_VALUES extends jspb.Message {
  getFieldId(): number;
  setFieldId(value: number): DATA_SOURCSES_VALUES;

  getFielddatasourceList(): Array<FieldDatasource>;
  setFielddatasourceList(value: Array<FieldDatasource>): DATA_SOURCSES_VALUES;
  clearFielddatasourceList(): DATA_SOURCSES_VALUES;
  addFielddatasource(value?: FieldDatasource, index?: number): FieldDatasource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DATA_SOURCSES_VALUES.AsObject;
  static toObject(includeInstance: boolean, msg: DATA_SOURCSES_VALUES): DATA_SOURCSES_VALUES.AsObject;
  static serializeBinaryToWriter(message: DATA_SOURCSES_VALUES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DATA_SOURCSES_VALUES;
  static deserializeBinaryFromReader(message: DATA_SOURCSES_VALUES, reader: jspb.BinaryReader): DATA_SOURCSES_VALUES;
}

export namespace DATA_SOURCSES_VALUES {
  export type AsObject = {
    fieldId: number,
    fielddatasourceList: Array<FieldDatasource.AsObject>,
  }
}

export class FieldDatasource extends jspb.Message {
  getCode(): string;
  setCode(value: string): FieldDatasource;

  getFieldValue(): FIELD_VALUE | undefined;
  setFieldValue(value?: FIELD_VALUE): FieldDatasource;
  hasFieldValue(): boolean;
  clearFieldValue(): FieldDatasource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDatasource.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDatasource): FieldDatasource.AsObject;
  static serializeBinaryToWriter(message: FieldDatasource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDatasource;
  static deserializeBinaryFromReader(message: FieldDatasource, reader: jspb.BinaryReader): FieldDatasource;
}

export namespace FieldDatasource {
  export type AsObject = {
    code: string,
    fieldValue?: FIELD_VALUE.AsObject,
  }
}

export class CUSTOMER_MULTI_CTGS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_MULTI_CTGS;

  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): CUSTOMER_MULTI_CTGS;
  clearCstMultiCtgList(): CUSTOMER_MULTI_CTGS;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_MULTI_CTGS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_MULTI_CTGS): CUSTOMER_MULTI_CTGS.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_MULTI_CTGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_MULTI_CTGS;
  static deserializeBinaryFromReader(message: CUSTOMER_MULTI_CTGS, reader: jspb.BinaryReader): CUSTOMER_MULTI_CTGS;
}

export namespace CUSTOMER_MULTI_CTGS {
  export type AsObject = {
    custkey: string,
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
  }
}

export class LU_CTG extends jspb.Message {
  getCode(): string;
  setCode(value: string): LU_CTG;

  getDescription(): string;
  setDescription(value: string): LU_CTG;

  getWieght(): number;
  setWieght(value: number): LU_CTG;
  hasWieght(): boolean;
  clearWieght(): LU_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_CTG.AsObject;
  static toObject(includeInstance: boolean, msg: LU_CTG): LU_CTG.AsObject;
  static serializeBinaryToWriter(message: LU_CTG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_CTG;
  static deserializeBinaryFromReader(message: LU_CTG, reader: jspb.BinaryReader): LU_CTG;
}

export namespace LU_CTG {
  export type AsObject = {
    code: string,
    description: string,
    wieght?: number,
  }
}

export class LU_CTGS extends jspb.Message {
  getLuCtgList(): Array<LU_CTG>;
  setLuCtgList(value: Array<LU_CTG>): LU_CTGS;
  clearLuCtgList(): LU_CTGS;
  addLuCtg(value?: LU_CTG, index?: number): LU_CTG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_CTGS.AsObject;
  static toObject(includeInstance: boolean, msg: LU_CTGS): LU_CTGS.AsObject;
  static serializeBinaryToWriter(message: LU_CTGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_CTGS;
  static deserializeBinaryFromReader(message: LU_CTGS, reader: jspb.BinaryReader): LU_CTGS;
}

export namespace LU_CTGS {
  export type AsObject = {
    luCtgList: Array<LU_CTG.AsObject>,
  }
}

export class LU_FEE_CODES extends jspb.Message {
  getId(): number;
  setId(value: number): LU_FEE_CODES;

  getValue(): string;
  setValue(value: string): LU_FEE_CODES;

  getFieldId(): number;
  setFieldId(value: number): LU_FEE_CODES;

  getActivityId(): number;
  setActivityId(value: number): LU_FEE_CODES;

  getCode(): string;
  setCode(value: string): LU_FEE_CODES;
  hasCode(): boolean;
  clearCode(): LU_FEE_CODES;

  getSeqNo(): number;
  setSeqNo(value: number): LU_FEE_CODES;
  hasSeqNo(): boolean;
  clearSeqNo(): LU_FEE_CODES;

  getFieldName(): string;
  setFieldName(value: string): LU_FEE_CODES;
  hasFieldName(): boolean;
  clearFieldName(): LU_FEE_CODES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_FEE_CODES.AsObject;
  static toObject(includeInstance: boolean, msg: LU_FEE_CODES): LU_FEE_CODES.AsObject;
  static serializeBinaryToWriter(message: LU_FEE_CODES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_FEE_CODES;
  static deserializeBinaryFromReader(message: LU_FEE_CODES, reader: jspb.BinaryReader): LU_FEE_CODES;
}

export namespace LU_FEE_CODES {
  export type AsObject = {
    id: number,
    value: string,
    fieldId: number,
    activityId: number,
    code?: string,
    seqNo?: number,
    fieldName?: string,
  }
}

export class ArrALL_LU_FEE_CODES extends jspb.Message {
  getAllLuFeeCodesList(): Array<ALL_LU_FEE_CODES>;
  setAllLuFeeCodesList(value: Array<ALL_LU_FEE_CODES>): ArrALL_LU_FEE_CODES;
  clearAllLuFeeCodesList(): ArrALL_LU_FEE_CODES;
  addAllLuFeeCodes(value?: ALL_LU_FEE_CODES, index?: number): ALL_LU_FEE_CODES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrALL_LU_FEE_CODES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrALL_LU_FEE_CODES): ArrALL_LU_FEE_CODES.AsObject;
  static serializeBinaryToWriter(message: ArrALL_LU_FEE_CODES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrALL_LU_FEE_CODES;
  static deserializeBinaryFromReader(message: ArrALL_LU_FEE_CODES, reader: jspb.BinaryReader): ArrALL_LU_FEE_CODES;
}

export namespace ArrALL_LU_FEE_CODES {
  export type AsObject = {
    allLuFeeCodesList: Array<ALL_LU_FEE_CODES.AsObject>,
  }
}

export class ALL_LU_FEE_CODES extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): ALL_LU_FEE_CODES;

  getLuFeeCodesList(): Array<LU_FEE_CODES>;
  setLuFeeCodesList(value: Array<LU_FEE_CODES>): ALL_LU_FEE_CODES;
  clearLuFeeCodesList(): ALL_LU_FEE_CODES;
  addLuFeeCodes(value?: LU_FEE_CODES, index?: number): LU_FEE_CODES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_LU_FEE_CODES.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_LU_FEE_CODES): ALL_LU_FEE_CODES.AsObject;
  static serializeBinaryToWriter(message: ALL_LU_FEE_CODES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_LU_FEE_CODES;
  static deserializeBinaryFromReader(message: ALL_LU_FEE_CODES, reader: jspb.BinaryReader): ALL_LU_FEE_CODES;
}

export namespace ALL_LU_FEE_CODES {
  export type AsObject = {
    fieldName: string,
    luFeeCodesList: Array<LU_FEE_CODES.AsObject>,
  }
}

export class EDIT_MULTI_C_TYPES extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EDIT_MULTI_C_TYPES;

  getNewCTypesList(): Array<NEW_C_TYPES>;
  setNewCTypesList(value: Array<NEW_C_TYPES>): EDIT_MULTI_C_TYPES;
  clearNewCTypesList(): EDIT_MULTI_C_TYPES;
  addNewCTypes(value?: NEW_C_TYPES, index?: number): NEW_C_TYPES;

  getOldCTypesList(): Array<OLD_C_TYPES>;
  setOldCTypesList(value: Array<OLD_C_TYPES>): EDIT_MULTI_C_TYPES;
  clearOldCTypesList(): EDIT_MULTI_C_TYPES;
  addOldCTypes(value?: OLD_C_TYPES, index?: number): OLD_C_TYPES;

  getCustomerEstimCons(): number;
  setCustomerEstimCons(value: number): EDIT_MULTI_C_TYPES;
  hasCustomerEstimCons(): boolean;
  clearCustomerEstimCons(): EDIT_MULTI_C_TYPES;

  getIs207(): boolean;
  setIs207(value: boolean): EDIT_MULTI_C_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EDIT_MULTI_C_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: EDIT_MULTI_C_TYPES): EDIT_MULTI_C_TYPES.AsObject;
  static serializeBinaryToWriter(message: EDIT_MULTI_C_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EDIT_MULTI_C_TYPES;
  static deserializeBinaryFromReader(message: EDIT_MULTI_C_TYPES, reader: jspb.BinaryReader): EDIT_MULTI_C_TYPES;
}

export namespace EDIT_MULTI_C_TYPES {
  export type AsObject = {
    custkey: string,
    newCTypesList: Array<NEW_C_TYPES.AsObject>,
    oldCTypesList: Array<OLD_C_TYPES.AsObject>,
    customerEstimCons?: number,
    is207: boolean,
  }
}

export class NEW_C_TYPES extends jspb.Message {
  getNewCType(): string;
  setNewCType(value: string): NEW_C_TYPES;

  getNewPrec(): number;
  setNewPrec(value: number): NEW_C_TYPES;
  hasNewPrec(): boolean;
  clearNewPrec(): NEW_C_TYPES;

  getNewNoUnits(): number;
  setNewNoUnits(value: number): NEW_C_TYPES;

  getNewEstim(): number;
  setNewEstim(value: number): NEW_C_TYPES;
  hasNewEstim(): boolean;
  clearNewEstim(): NEW_C_TYPES;

  getSelectMainCtype(): boolean;
  setSelectMainCtype(value: boolean): NEW_C_TYPES;
  hasSelectMainCtype(): boolean;
  clearSelectMainCtype(): NEW_C_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NEW_C_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: NEW_C_TYPES): NEW_C_TYPES.AsObject;
  static serializeBinaryToWriter(message: NEW_C_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NEW_C_TYPES;
  static deserializeBinaryFromReader(message: NEW_C_TYPES, reader: jspb.BinaryReader): NEW_C_TYPES;
}

export namespace NEW_C_TYPES {
  export type AsObject = {
    newCType: string,
    newPrec?: number,
    newNoUnits: number,
    newEstim?: number,
    selectMainCtype?: boolean,
  }
}

export class OLD_C_TYPES extends jspb.Message {
  getOldCType(): string;
  setOldCType(value: string): OLD_C_TYPES;

  getOldPrec(): number;
  setOldPrec(value: number): OLD_C_TYPES;
  hasOldPrec(): boolean;
  clearOldPrec(): OLD_C_TYPES;

  getOldNoUnits(): number;
  setOldNoUnits(value: number): OLD_C_TYPES;

  getOldEstim(): number;
  setOldEstim(value: number): OLD_C_TYPES;
  hasOldEstim(): boolean;
  clearOldEstim(): OLD_C_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OLD_C_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: OLD_C_TYPES): OLD_C_TYPES.AsObject;
  static serializeBinaryToWriter(message: OLD_C_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OLD_C_TYPES;
  static deserializeBinaryFromReader(message: OLD_C_TYPES, reader: jspb.BinaryReader): OLD_C_TYPES;
}

export namespace OLD_C_TYPES {
  export type AsObject = {
    oldCType: string,
    oldPrec?: number,
    oldNoUnits: number,
    oldEstim?: number,
  }
}

export class BBM_RS extends jspb.Message {
  getAllFieldsList(): Array<ALL_FIELDS>;
  setAllFieldsList(value: Array<ALL_FIELDS>): BBM_RS;
  clearAllFieldsList(): BBM_RS;
  addAllFields(value?: ALL_FIELDS, index?: number): ALL_FIELDS;

  getLuCtgsList(): Array<LU_CTG>;
  setLuCtgsList(value: Array<LU_CTG>): BBM_RS;
  clearLuCtgsList(): BBM_RS;
  addLuCtgs(value?: LU_CTG, index?: number): LU_CTG;

  getCstCustomers(): CST_CUSTOMERS | undefined;
  setCstCustomers(value?: CST_CUSTOMERS): BBM_RS;
  hasCstCustomers(): boolean;
  clearCstCustomers(): BBM_RS;

  getCType(): string;
  setCType(value: string): BBM_RS;
  hasCType(): boolean;
  clearCType(): BBM_RS;

  getCTypeDesc(): string;
  setCTypeDesc(value: string): BBM_RS;
  hasCTypeDesc(): boolean;
  clearCTypeDesc(): BBM_RS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BBM_RS.AsObject;
  static toObject(includeInstance: boolean, msg: BBM_RS): BBM_RS.AsObject;
  static serializeBinaryToWriter(message: BBM_RS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BBM_RS;
  static deserializeBinaryFromReader(message: BBM_RS, reader: jspb.BinaryReader): BBM_RS;
}

export namespace BBM_RS {
  export type AsObject = {
    allFieldsList: Array<ALL_FIELDS.AsObject>,
    luCtgsList: Array<LU_CTG.AsObject>,
    cstCustomers?: CST_CUSTOMERS.AsObject,
    cType?: string,
    cTypeDesc?: string,
  }
}

export class ALL_FIELDS extends jspb.Message {
  getTableFieldId(): number;
  setTableFieldId(value: number): ALL_FIELDS;

  getTabledescription(): string;
  setTabledescription(value: string): ALL_FIELDS;
  hasTabledescription(): boolean;
  clearTabledescription(): ALL_FIELDS;

  getFieldValueList(): Array<BPM_TABLE_RAW>;
  setFieldValueList(value: Array<BPM_TABLE_RAW>): ALL_FIELDS;
  clearFieldValueList(): ALL_FIELDS;
  addFieldValue(value?: BPM_TABLE_RAW, index?: number): BPM_TABLE_RAW;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_FIELDS): ALL_FIELDS.AsObject;
  static serializeBinaryToWriter(message: ALL_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_FIELDS;
  static deserializeBinaryFromReader(message: ALL_FIELDS, reader: jspb.BinaryReader): ALL_FIELDS;
}

export namespace ALL_FIELDS {
  export type AsObject = {
    tableFieldId: number,
    tabledescription?: string,
    fieldValueList: Array<BPM_TABLE_RAW.AsObject>,
  }
}

export class BPM_TABLE_RAW extends jspb.Message {
  getValuesMap(): jspb.Map<number, string>;
  clearValuesMap(): BPM_TABLE_RAW;

  getFieldValueMap(): jspb.Map<string, string>;
  clearFieldValueMap(): BPM_TABLE_RAW;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BPM_TABLE_RAW.AsObject;
  static toObject(includeInstance: boolean, msg: BPM_TABLE_RAW): BPM_TABLE_RAW.AsObject;
  static serializeBinaryToWriter(message: BPM_TABLE_RAW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BPM_TABLE_RAW;
  static deserializeBinaryFromReader(message: BPM_TABLE_RAW, reader: jspb.BinaryReader): BPM_TABLE_RAW;
}

export namespace BPM_TABLE_RAW {
  export type AsObject = {
    valuesMap: Array<[number, string]>,
    fieldValueMap: Array<[string, string]>,
  }
}

export class WATER_CONNECTION_REQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): WATER_CONNECTION_REQ;

  getMainConnCTypeList(): number;
  setMainConnCTypeList(value: number): WATER_CONNECTION_REQ;

  getMeterTypeList(): number;
  setMeterTypeList(value: number): WATER_CONNECTION_REQ;

  getMeterDiamList(): number;
  setMeterDiamList(value: number): WATER_CONNECTION_REQ;

  getConnDiamList(): number;
  setConnDiamList(value: number): WATER_CONNECTION_REQ;

  getWithStanding(): boolean;
  setWithStanding(value: boolean): WATER_CONNECTION_REQ;

  getMeterManpulation(): boolean;
  setMeterManpulation(value: boolean): WATER_CONNECTION_REQ;

  getBuildingArea(): number;
  setBuildingArea(value: number): WATER_CONNECTION_REQ;

  getSpaceArea(): number;
  setSpaceArea(value: number): WATER_CONNECTION_REQ;
  hasSpaceArea(): boolean;
  clearSpaceArea(): WATER_CONNECTION_REQ;

  getPipeLength(): number;
  setPipeLength(value: number): WATER_CONNECTION_REQ;
  hasPipeLength(): boolean;
  clearPipeLength(): WATER_CONNECTION_REQ;

  getSwimmingPoolArea(): number;
  setSwimmingPoolArea(value: number): WATER_CONNECTION_REQ;
  hasSwimmingPoolArea(): boolean;
  clearSwimmingPoolArea(): WATER_CONNECTION_REQ;

  getIllegalConnList(): number;
  setIllegalConnList(value: number): WATER_CONNECTION_REQ;
  hasIllegalConnList(): boolean;
  clearIllegalConnList(): WATER_CONNECTION_REQ;

  getIllegalNoMonth(): number;
  setIllegalNoMonth(value: number): WATER_CONNECTION_REQ;
  hasIllegalNoMonth(): boolean;
  clearIllegalNoMonth(): WATER_CONNECTION_REQ;

  getIllegalConnDiamList(): number;
  setIllegalConnDiamList(value: number): WATER_CONNECTION_REQ;
  hasIllegalConnDiamList(): boolean;
  clearIllegalConnDiamList(): WATER_CONNECTION_REQ;

  getHasSewer(): boolean;
  setHasSewer(value: boolean): WATER_CONNECTION_REQ;
  hasHasSewer(): boolean;
  clearHasSewer(): WATER_CONNECTION_REQ;

  getIllegalWaterAmt(): number;
  setIllegalWaterAmt(value: number): WATER_CONNECTION_REQ;
  hasIllegalWaterAmt(): boolean;
  clearIllegalWaterAmt(): WATER_CONNECTION_REQ;

  getHasConstructWater(): boolean;
  setHasConstructWater(value: boolean): WATER_CONNECTION_REQ;
  hasHasConstructWater(): boolean;
  clearHasConstructWater(): WATER_CONNECTION_REQ;

  getConstructNoFloor(): number;
  setConstructNoFloor(value: number): WATER_CONNECTION_REQ;
  hasConstructNoFloor(): boolean;
  clearConstructNoFloor(): WATER_CONNECTION_REQ;

  getConstructNetBuildingArea(): number;
  setConstructNetBuildingArea(value: number): WATER_CONNECTION_REQ;
  hasConstructNetBuildingArea(): boolean;
  clearConstructNetBuildingArea(): WATER_CONNECTION_REQ;

  getConstructBadroomArea(): number;
  setConstructBadroomArea(value: number): WATER_CONNECTION_REQ;
  hasConstructBadroomArea(): boolean;
  clearConstructBadroomArea(): WATER_CONNECTION_REQ;

  getConstructRoofRoomArea(): number;
  setConstructRoofRoomArea(value: number): WATER_CONNECTION_REQ;
  hasConstructRoofRoomArea(): boolean;
  clearConstructRoofRoomArea(): WATER_CONNECTION_REQ;

  getConstructWaterAmt(): number;
  setConstructWaterAmt(value: number): WATER_CONNECTION_REQ;
  hasConstructWaterAmt(): boolean;
  clearConstructWaterAmt(): WATER_CONNECTION_REQ;

  getNoQtySave(): number;
  setNoQtySave(value: number): WATER_CONNECTION_REQ;
  hasNoQtySave(): boolean;
  clearNoQtySave(): WATER_CONNECTION_REQ;

  getDiggingList(): Array<DIGGING>;
  setDiggingList(value: Array<DIGGING>): WATER_CONNECTION_REQ;
  clearDiggingList(): WATER_CONNECTION_REQ;
  addDigging(value?: DIGGING, index?: number): DIGGING;

  getUnitsList(): Array<UNITS>;
  setUnitsList(value: Array<UNITS>): WATER_CONNECTION_REQ;
  clearUnitsList(): WATER_CONNECTION_REQ;
  addUnits(value?: UNITS, index?: number): UNITS;

  getToolsList(): Array<TOOLS>;
  setToolsList(value: Array<TOOLS>): WATER_CONNECTION_REQ;
  clearToolsList(): WATER_CONNECTION_REQ;
  addTools(value?: TOOLS, index?: number): TOOLS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WATER_CONNECTION_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: WATER_CONNECTION_REQ): WATER_CONNECTION_REQ.AsObject;
  static serializeBinaryToWriter(message: WATER_CONNECTION_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WATER_CONNECTION_REQ;
  static deserializeBinaryFromReader(message: WATER_CONNECTION_REQ, reader: jspb.BinaryReader): WATER_CONNECTION_REQ;
}

export namespace WATER_CONNECTION_REQ {
  export type AsObject = {
    custkey: string,
    mainConnCTypeList: number,
    meterTypeList: number,
    meterDiamList: number,
    connDiamList: number,
    withStanding: boolean,
    meterManpulation: boolean,
    buildingArea: number,
    spaceArea?: number,
    pipeLength?: number,
    swimmingPoolArea?: number,
    illegalConnList?: number,
    illegalNoMonth?: number,
    illegalConnDiamList?: number,
    hasSewer?: boolean,
    illegalWaterAmt?: number,
    hasConstructWater?: boolean,
    constructNoFloor?: number,
    constructNetBuildingArea?: number,
    constructBadroomArea?: number,
    constructRoofRoomArea?: number,
    constructWaterAmt?: number,
    noQtySave?: number,
    diggingList: Array<DIGGING.AsObject>,
    unitsList: Array<UNITS.AsObject>,
    toolsList: Array<TOOLS.AsObject>,
  }
}

export class DIGGING extends jspb.Message {
  getDiggingLen(): number;
  setDiggingLen(value: number): DIGGING;

  getSoilType(): number;
  setSoilType(value: number): DIGGING;

  getDiggingDepth(): number;
  setDiggingDepth(value: number): DIGGING;

  getByCustomer(): boolean;
  setByCustomer(value: boolean): DIGGING;
  hasByCustomer(): boolean;
  clearByCustomer(): DIGGING;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DIGGING.AsObject;
  static toObject(includeInstance: boolean, msg: DIGGING): DIGGING.AsObject;
  static serializeBinaryToWriter(message: DIGGING, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DIGGING;
  static deserializeBinaryFromReader(message: DIGGING, reader: jspb.BinaryReader): DIGGING;
}

export namespace DIGGING {
  export type AsObject = {
    diggingLen: number,
    soilType: number,
    diggingDepth: number,
    byCustomer?: boolean,
  }
}

export class UNITS extends jspb.Message {
  getNoUnits(): number;
  setNoUnits(value: number): UNITS;

  getConnCType(): number;
  setConnCType(value: number): UNITS;

  getUnitConnDiamList(): number;
  setUnitConnDiamList(value: number): UNITS;

  getUnitArea(): number;
  setUnitArea(value: number): UNITS;

  getFloorNoList(): number;
  setFloorNoList(value: number): UNITS;

  getUnitIllegalConnList(): number;
  setUnitIllegalConnList(value: number): UNITS;

  getHasWater(): boolean;
  setHasWater(value: boolean): UNITS;
  hasHasWater(): boolean;
  clearHasWater(): UNITS;

  getTermsVoilent(): boolean;
  setTermsVoilent(value: boolean): UNITS;
  hasTermsVoilent(): boolean;
  clearTermsVoilent(): UNITS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UNITS.AsObject;
  static toObject(includeInstance: boolean, msg: UNITS): UNITS.AsObject;
  static serializeBinaryToWriter(message: UNITS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UNITS;
  static deserializeBinaryFromReader(message: UNITS, reader: jspb.BinaryReader): UNITS;
}

export namespace UNITS {
  export type AsObject = {
    noUnits: number,
    connCType: number,
    unitConnDiamList: number,
    unitArea: number,
    floorNoList: number,
    unitIllegalConnList: number,
    hasWater?: boolean,
    termsVoilent?: boolean,
  }
}

export class TOOLS extends jspb.Message {
  getSelectedTool(): number;
  setSelectedTool(value: number): TOOLS;

  getQuantaty(): number;
  setQuantaty(value: number): TOOLS;

  getByCustomer(): boolean;
  setByCustomer(value: boolean): TOOLS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TOOLS.AsObject;
  static toObject(includeInstance: boolean, msg: TOOLS): TOOLS.AsObject;
  static serializeBinaryToWriter(message: TOOLS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TOOLS;
  static deserializeBinaryFromReader(message: TOOLS, reader: jspb.BinaryReader): TOOLS;
}

export namespace TOOLS {
  export type AsObject = {
    selectedTool: number,
    quantaty: number,
    byCustomer: boolean,
  }
}

export class CLIENT_CONNECTION extends jspb.Message {
  getIsLogin(): boolean;
  setIsLogin(value: boolean): CLIENT_CONNECTION;

  getQrCode(): Uint8Array | string;
  getQrCode_asU8(): Uint8Array;
  getQrCode_asB64(): string;
  setQrCode(value: Uint8Array | string): CLIENT_CONNECTION;
  hasQrCode(): boolean;
  clearQrCode(): CLIENT_CONNECTION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CLIENT_CONNECTION.AsObject;
  static toObject(includeInstance: boolean, msg: CLIENT_CONNECTION): CLIENT_CONNECTION.AsObject;
  static serializeBinaryToWriter(message: CLIENT_CONNECTION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CLIENT_CONNECTION;
  static deserializeBinaryFromReader(message: CLIENT_CONNECTION, reader: jspb.BinaryReader): CLIENT_CONNECTION;
}

export namespace CLIENT_CONNECTION {
  export type AsObject = {
    isLogin: boolean,
    qrCode?: Uint8Array | string,
  }
}

export class WhatsappMessage extends jspb.Message {
  getReciever(): number;
  setReciever(value: number): WhatsappMessage;

  getMessage(): string;
  setMessage(value: string): WhatsappMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhatsappMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WhatsappMessage): WhatsappMessage.AsObject;
  static serializeBinaryToWriter(message: WhatsappMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhatsappMessage;
  static deserializeBinaryFromReader(message: WhatsappMessage, reader: jspb.BinaryReader): WhatsappMessage;
}

export namespace WhatsappMessage {
  export type AsObject = {
    reciever: number,
    message: string,
  }
}

export class CounteryCode extends jspb.Message {
  getName(): string;
  setName(value: string): CounteryCode;

  getDialcode(): number;
  setDialcode(value: number): CounteryCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CounteryCode.AsObject;
  static toObject(includeInstance: boolean, msg: CounteryCode): CounteryCode.AsObject;
  static serializeBinaryToWriter(message: CounteryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CounteryCode;
  static deserializeBinaryFromReader(message: CounteryCode, reader: jspb.BinaryReader): CounteryCode;
}

export namespace CounteryCode {
  export type AsObject = {
    name: string,
    dialcode: number,
  }
}

export class ArrCounteryCode extends jspb.Message {
  getCounterycodeList(): Array<CounteryCode>;
  setCounterycodeList(value: Array<CounteryCode>): ArrCounteryCode;
  clearCounterycodeList(): ArrCounteryCode;
  addCounterycode(value?: CounteryCode, index?: number): CounteryCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCounteryCode.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCounteryCode): ArrCounteryCode.AsObject;
  static serializeBinaryToWriter(message: ArrCounteryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCounteryCode;
  static deserializeBinaryFromReader(message: ArrCounteryCode, reader: jspb.BinaryReader): ArrCounteryCode;
}

export namespace ArrCounteryCode {
  export type AsObject = {
    counterycodeList: Array<CounteryCode.AsObject>,
  }
}

export class PROVIDING_WATER_CONNECTION_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PROVIDING_WATER_CONNECTION_RQ;

  getNewCTypesList(): Array<NEW_C_TYPES>;
  setNewCTypesList(value: Array<NEW_C_TYPES>): PROVIDING_WATER_CONNECTION_RQ;
  clearNewCTypesList(): PROVIDING_WATER_CONNECTION_RQ;
  addNewCTypes(value?: NEW_C_TYPES, index?: number): NEW_C_TYPES;

  getTownshipNo(): string;
  setTownshipNo(value: string): PROVIDING_WATER_CONNECTION_RQ;

  getIsSubConnection(): boolean;
  setIsSubConnection(value: boolean): PROVIDING_WATER_CONNECTION_RQ;
  hasIsSubConnection(): boolean;
  clearIsSubConnection(): PROVIDING_WATER_CONNECTION_RQ;

  getMainCustkey(): string;
  setMainCustkey(value: string): PROVIDING_WATER_CONNECTION_RQ;
  hasMainCustkey(): boolean;
  clearMainCustkey(): PROVIDING_WATER_CONNECTION_RQ;

  getTotNoUnits(): number;
  setTotNoUnits(value: number): PROVIDING_WATER_CONNECTION_RQ;
  hasTotNoUnits(): boolean;
  clearTotNoUnits(): PROVIDING_WATER_CONNECTION_RQ;

  getDirection1(): string;
  setDirection1(value: string): PROVIDING_WATER_CONNECTION_RQ;
  hasDirection1(): boolean;
  clearDirection1(): PROVIDING_WATER_CONNECTION_RQ;

  getDirection2(): string;
  setDirection2(value: string): PROVIDING_WATER_CONNECTION_RQ;
  hasDirection2(): boolean;
  clearDirection2(): PROVIDING_WATER_CONNECTION_RQ;

  getDirection3(): string;
  setDirection3(value: string): PROVIDING_WATER_CONNECTION_RQ;
  hasDirection3(): boolean;
  clearDirection3(): PROVIDING_WATER_CONNECTION_RQ;

  getDirection4(): string;
  setDirection4(value: string): PROVIDING_WATER_CONNECTION_RQ;
  hasDirection4(): boolean;
  clearDirection4(): PROVIDING_WATER_CONNECTION_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PROVIDING_WATER_CONNECTION_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: PROVIDING_WATER_CONNECTION_RQ): PROVIDING_WATER_CONNECTION_RQ.AsObject;
  static serializeBinaryToWriter(message: PROVIDING_WATER_CONNECTION_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PROVIDING_WATER_CONNECTION_RQ;
  static deserializeBinaryFromReader(message: PROVIDING_WATER_CONNECTION_RQ, reader: jspb.BinaryReader): PROVIDING_WATER_CONNECTION_RQ;
}

export namespace PROVIDING_WATER_CONNECTION_RQ {
  export type AsObject = {
    custkey: string,
    newCTypesList: Array<NEW_C_TYPES.AsObject>,
    townshipNo: string,
    isSubConnection?: boolean,
    mainCustkey?: string,
    totNoUnits?: number,
    direction1?: string,
    direction2?: string,
    direction3?: string,
    direction4?: string,
  }
}

export class PROVIDING_SEWER_CONNECTION_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PROVIDING_SEWER_CONNECTION_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PROVIDING_SEWER_CONNECTION_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: PROVIDING_SEWER_CONNECTION_RQ): PROVIDING_SEWER_CONNECTION_RQ.AsObject;
  static serializeBinaryToWriter(message: PROVIDING_SEWER_CONNECTION_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PROVIDING_SEWER_CONNECTION_RQ;
  static deserializeBinaryFromReader(message: PROVIDING_SEWER_CONNECTION_RQ, reader: jspb.BinaryReader): PROVIDING_SEWER_CONNECTION_RQ;
}

export namespace PROVIDING_SEWER_CONNECTION_RQ {
  export type AsObject = {
    custkey: string,
  }
}

export class PROVIDING_NEW_METER_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PROVIDING_NEW_METER_RQ;

  getHasMeter(): boolean;
  setHasMeter(value: boolean): PROVIDING_NEW_METER_RQ;

  getMeterRef(): string;
  setMeterRef(value: string): PROVIDING_NEW_METER_RQ;
  hasMeterRef(): boolean;
  clearMeterRef(): PROVIDING_NEW_METER_RQ;

  getNewMeterSize(): number;
  setNewMeterSize(value: number): PROVIDING_NEW_METER_RQ;
  hasNewMeterSize(): boolean;
  clearNewMeterSize(): PROVIDING_NEW_METER_RQ;

  getBillimgMeterSize(): string;
  setBillimgMeterSize(value: string): PROVIDING_NEW_METER_RQ;
  hasBillimgMeterSize(): boolean;
  clearBillimgMeterSize(): PROVIDING_NEW_METER_RQ;

  getMeterMake(): string;
  setMeterMake(value: string): PROVIDING_NEW_METER_RQ;
  hasMeterMake(): boolean;
  clearMeterMake(): PROVIDING_NEW_METER_RQ;

  getMeterInstallRead(): number;
  setMeterInstallRead(value: number): PROVIDING_NEW_METER_RQ;

  getNoDials(): number;
  setNoDials(value: number): PROVIDING_NEW_METER_RQ;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): PROVIDING_NEW_METER_RQ;
  hasInstallDate(): boolean;
  clearInstallDate(): PROVIDING_NEW_METER_RQ;

  getSerialNo(): string;
  setSerialNo(value: string): PROVIDING_NEW_METER_RQ;
  hasSerialNo(): boolean;
  clearSerialNo(): PROVIDING_NEW_METER_RQ;

  getConvFctr(): number;
  setConvFctr(value: number): PROVIDING_NEW_METER_RQ;

  getNewMeterType(): string;
  setNewMeterType(value: string): PROVIDING_NEW_METER_RQ;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): PROVIDING_NEW_METER_RQ;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): PROVIDING_NEW_METER_RQ;

  getIsPrepaied(): boolean;
  setIsPrepaied(value: boolean): PROVIDING_NEW_METER_RQ;
  hasIsPrepaied(): boolean;
  clearIsPrepaied(): PROVIDING_NEW_METER_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PROVIDING_NEW_METER_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: PROVIDING_NEW_METER_RQ): PROVIDING_NEW_METER_RQ.AsObject;
  static serializeBinaryToWriter(message: PROVIDING_NEW_METER_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PROVIDING_NEW_METER_RQ;
  static deserializeBinaryFromReader(message: PROVIDING_NEW_METER_RQ, reader: jspb.BinaryReader): PROVIDING_NEW_METER_RQ;
}

export namespace PROVIDING_NEW_METER_RQ {
  export type AsObject = {
    custkey: string,
    hasMeter: boolean,
    meterRef?: string,
    newMeterSize?: number,
    billimgMeterSize?: string,
    meterMake?: string,
    meterInstallRead: number,
    noDials: number,
    installDate?: date_pb.MasDateTime.AsObject,
    serialNo?: string,
    convFctr: number,
    newMeterType: string,
    meterTagNo?: string,
    isPrepaied?: boolean,
  }
}

export class CS_STORES extends jspb.Message {
  getLuId(): number;
  setLuId(value: number): CS_STORES;

  getDescription(): string;
  setDescription(value: string): CS_STORES;

  getFee(): number;
  setFee(value: number): CS_STORES;

  getInstallAmt(): number;
  setInstallAmt(value: number): CS_STORES;
  hasInstallAmt(): boolean;
  clearInstallAmt(): CS_STORES;

  getVat(): number;
  setVat(value: number): CS_STORES;
  hasVat(): boolean;
  clearVat(): CS_STORES;

  getAdminFees(): number;
  setAdminFees(value: number): CS_STORES;
  hasAdminFees(): boolean;
  clearAdminFees(): CS_STORES;

  getAdminVat(): number;
  setAdminVat(value: number): CS_STORES;
  hasAdminVat(): boolean;
  clearAdminVat(): CS_STORES;

  getTransType(): number;
  setTransType(value: number): CS_STORES;

  getTransStype(): number;
  setTransStype(value: number): CS_STORES;

  getPaymentTransType(): number;
  setPaymentTransType(value: number): CS_STORES;

  getPaymentTransStype(): number;
  setPaymentTransStype(value: number): CS_STORES;

  getFeeParentId(): number;
  setFeeParentId(value: number): CS_STORES;

  getStoreType(): number;
  setStoreType(value: number): CS_STORES;
  hasStoreType(): boolean;
  clearStoreType(): CS_STORES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_STORES.AsObject;
  static toObject(includeInstance: boolean, msg: CS_STORES): CS_STORES.AsObject;
  static serializeBinaryToWriter(message: CS_STORES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_STORES;
  static deserializeBinaryFromReader(message: CS_STORES, reader: jspb.BinaryReader): CS_STORES;
}

export namespace CS_STORES {
  export type AsObject = {
    luId: number,
    description: string,
    fee: number,
    installAmt?: number,
    vat?: number,
    adminFees?: number,
    adminVat?: number,
    transType: number,
    transStype: number,
    paymentTransType: number,
    paymentTransStype: number,
    feeParentId: number,
    storeType?: number,
  }
}

export class CANCEL_CS_APP extends jspb.Message {
  getCancelReason(): string;
  setCancelReason(value: string): CANCEL_CS_APP;

  getCancelUser(): string;
  setCancelUser(value: string): CANCEL_CS_APP;

  getAppId(): number;
  setAppId(value: number): CANCEL_CS_APP;

  getCustkey(): string;
  setCustkey(value: string): CANCEL_CS_APP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCEL_CS_APP.AsObject;
  static toObject(includeInstance: boolean, msg: CANCEL_CS_APP): CANCEL_CS_APP.AsObject;
  static serializeBinaryToWriter(message: CANCEL_CS_APP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCEL_CS_APP;
  static deserializeBinaryFromReader(message: CANCEL_CS_APP, reader: jspb.BinaryReader): CANCEL_CS_APP;
}

export namespace CANCEL_CS_APP {
  export type AsObject = {
    cancelReason: string,
    cancelUser: string,
    appId: number,
    custkey: string,
  }
}

export class CST_SETTINGS extends jspb.Message {
  getKey(): string;
  setKey(value: string): CST_SETTINGS;

  getVal(): string;
  setVal(value: string): CST_SETTINGS;

  getNote(): string;
  setNote(value: string): CST_SETTINGS;
  hasNote(): boolean;
  clearNote(): CST_SETTINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_SETTINGS.AsObject;
  static toObject(includeInstance: boolean, msg: CST_SETTINGS): CST_SETTINGS.AsObject;
  static serializeBinaryToWriter(message: CST_SETTINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_SETTINGS;
  static deserializeBinaryFromReader(message: CST_SETTINGS, reader: jspb.BinaryReader): CST_SETTINGS;
}

export namespace CST_SETTINGS {
  export type AsObject = {
    key: string,
    val: string,
    note?: string,
  }
}

export class AllowedFeeInstallRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): AllowedFeeInstallRq;

  getAppId(): number;
  setAppId(value: number): AllowedFeeInstallRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowedFeeInstallRq.AsObject;
  static toObject(includeInstance: boolean, msg: AllowedFeeInstallRq): AllowedFeeInstallRq.AsObject;
  static serializeBinaryToWriter(message: AllowedFeeInstallRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowedFeeInstallRq;
  static deserializeBinaryFromReader(message: AllowedFeeInstallRq, reader: jspb.BinaryReader): AllowedFeeInstallRq;
}

export namespace AllowedFeeInstallRq {
  export type AsObject = {
    custkey: string,
    appId: number,
  }
}

export class INSTALLMENTS_TABLE extends jspb.Message {
  getFeeId(): number;
  setFeeId(value: number): INSTALLMENTS_TABLE;

  getFeeName(): string;
  setFeeName(value: string): INSTALLMENTS_TABLE;

  getFeeAmount(): number;
  setFeeAmount(value: number): INSTALLMENTS_TABLE;

  getMinCharge(): number;
  setMinCharge(value: number): INSTALLMENTS_TABLE;

  getInterst(): number;
  setInterst(value: number): INSTALLMENTS_TABLE;

  getNoMonths(): number;
  setNoMonths(value: number): INSTALLMENTS_TABLE;

  getAllowInstallment(): boolean;
  setAllowInstallment(value: boolean): INSTALLMENTS_TABLE;

  getAdvancedPayment(): number;
  setAdvancedPayment(value: number): INSTALLMENTS_TABLE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INSTALLMENTS_TABLE.AsObject;
  static toObject(includeInstance: boolean, msg: INSTALLMENTS_TABLE): INSTALLMENTS_TABLE.AsObject;
  static serializeBinaryToWriter(message: INSTALLMENTS_TABLE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INSTALLMENTS_TABLE;
  static deserializeBinaryFromReader(message: INSTALLMENTS_TABLE, reader: jspb.BinaryReader): INSTALLMENTS_TABLE;
}

export namespace INSTALLMENTS_TABLE {
  export type AsObject = {
    feeId: number,
    feeName: string,
    feeAmount: number,
    minCharge: number,
    interst: number,
    noMonths: number,
    allowInstallment: boolean,
    advancedPayment: number,
  }
}

export class TBL_POST_FEES extends jspb.Message {
  getFeeId(): number;
  setFeeId(value: number): TBL_POST_FEES;

  getFeeName(): string;
  setFeeName(value: string): TBL_POST_FEES;

  getFeeAmount(): number;
  setFeeAmount(value: number): TBL_POST_FEES;

  getPostFee(): boolean;
  setPostFee(value: boolean): TBL_POST_FEES;

  getAdvancedPayment(): number;
  setAdvancedPayment(value: number): TBL_POST_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_POST_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_POST_FEES): TBL_POST_FEES.AsObject;
  static serializeBinaryToWriter(message: TBL_POST_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_POST_FEES;
  static deserializeBinaryFromReader(message: TBL_POST_FEES, reader: jspb.BinaryReader): TBL_POST_FEES;
}

export namespace TBL_POST_FEES {
  export type AsObject = {
    feeId: number,
    feeName: string,
    feeAmount: number,
    postFee: boolean,
    advancedPayment: number,
  }
}

export class AllowedFeeInstallRs extends jspb.Message {
  getInstallmentsTableList(): Array<INSTALLMENTS_TABLE>;
  setInstallmentsTableList(value: Array<INSTALLMENTS_TABLE>): AllowedFeeInstallRs;
  clearInstallmentsTableList(): AllowedFeeInstallRs;
  addInstallmentsTable(value?: INSTALLMENTS_TABLE, index?: number): INSTALLMENTS_TABLE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowedFeeInstallRs.AsObject;
  static toObject(includeInstance: boolean, msg: AllowedFeeInstallRs): AllowedFeeInstallRs.AsObject;
  static serializeBinaryToWriter(message: AllowedFeeInstallRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowedFeeInstallRs;
  static deserializeBinaryFromReader(message: AllowedFeeInstallRs, reader: jspb.BinaryReader): AllowedFeeInstallRs;
}

export namespace AllowedFeeInstallRs {
  export type AsObject = {
    installmentsTableList: Array<INSTALLMENTS_TABLE.AsObject>,
  }
}

export class INSTALLMENT_OF_ACT_REQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): INSTALLMENT_OF_ACT_REQ;

  getAppId(): number;
  setAppId(value: number): INSTALLMENT_OF_ACT_REQ;

  getStartInstallmentNow(): boolean;
  setStartInstallmentNow(value: boolean): INSTALLMENT_OF_ACT_REQ;
  hasStartInstallmentNow(): boolean;
  clearStartInstallmentNow(): INSTALLMENT_OF_ACT_REQ;

  getInputFirstInstallDate(): boolean;
  setInputFirstInstallDate(value: boolean): INSTALLMENT_OF_ACT_REQ;
  hasInputFirstInstallDate(): boolean;
  clearInputFirstInstallDate(): INSTALLMENT_OF_ACT_REQ;

  getStartWithConnection(): boolean;
  setStartWithConnection(value: boolean): INSTALLMENT_OF_ACT_REQ;
  hasStartWithConnection(): boolean;
  clearStartWithConnection(): INSTALLMENT_OF_ACT_REQ;

  getFirstInstallmentDate(): date_pb.MasDateTime | undefined;
  setFirstInstallmentDate(value?: date_pb.MasDateTime): INSTALLMENT_OF_ACT_REQ;
  hasFirstInstallmentDate(): boolean;
  clearFirstInstallmentDate(): INSTALLMENT_OF_ACT_REQ;

  getInstallmentsTableList(): Array<INSTALLMENTS_TABLE>;
  setInstallmentsTableList(value: Array<INSTALLMENTS_TABLE>): INSTALLMENT_OF_ACT_REQ;
  clearInstallmentsTableList(): INSTALLMENT_OF_ACT_REQ;
  addInstallmentsTable(value?: INSTALLMENTS_TABLE, index?: number): INSTALLMENTS_TABLE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INSTALLMENT_OF_ACT_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: INSTALLMENT_OF_ACT_REQ): INSTALLMENT_OF_ACT_REQ.AsObject;
  static serializeBinaryToWriter(message: INSTALLMENT_OF_ACT_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INSTALLMENT_OF_ACT_REQ;
  static deserializeBinaryFromReader(message: INSTALLMENT_OF_ACT_REQ, reader: jspb.BinaryReader): INSTALLMENT_OF_ACT_REQ;
}

export namespace INSTALLMENT_OF_ACT_REQ {
  export type AsObject = {
    custkey: string,
    appId: number,
    startInstallmentNow?: boolean,
    inputFirstInstallDate?: boolean,
    startWithConnection?: boolean,
    firstInstallmentDate?: date_pb.MasDateTime.AsObject,
    installmentsTableList: Array<INSTALLMENTS_TABLE.AsObject>,
  }
}

export class POST_FEE_REQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): POST_FEE_REQ;

  getAppId(): number;
  setAppId(value: number): POST_FEE_REQ;

  getTblPostFeesList(): Array<TBL_POST_FEES>;
  setTblPostFeesList(value: Array<TBL_POST_FEES>): POST_FEE_REQ;
  clearTblPostFeesList(): POST_FEE_REQ;
  addTblPostFees(value?: TBL_POST_FEES, index?: number): TBL_POST_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): POST_FEE_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: POST_FEE_REQ): POST_FEE_REQ.AsObject;
  static serializeBinaryToWriter(message: POST_FEE_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): POST_FEE_REQ;
  static deserializeBinaryFromReader(message: POST_FEE_REQ, reader: jspb.BinaryReader): POST_FEE_REQ;
}

export namespace POST_FEE_REQ {
  export type AsObject = {
    custkey: string,
    appId: number,
    tblPostFeesList: Array<TBL_POST_FEES.AsObject>,
  }
}

export class CALC_BILLGROUP_RQ extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CALC_BILLGROUP_RQ;

  getBillgroup(): string;
  setBillgroup(value: string): CALC_BILLGROUP_RQ;

  getCycleLen(): number;
  setCycleLen(value: number): CALC_BILLGROUP_RQ;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): CALC_BILLGROUP_RQ;
  hasBilngDate(): boolean;
  clearBilngDate(): CALC_BILLGROUP_RQ;

  getImportFromBilng(): boolean;
  setImportFromBilng(value: boolean): CALC_BILLGROUP_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CALC_BILLGROUP_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: CALC_BILLGROUP_RQ): CALC_BILLGROUP_RQ.AsObject;
  static serializeBinaryToWriter(message: CALC_BILLGROUP_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CALC_BILLGROUP_RQ;
  static deserializeBinaryFromReader(message: CALC_BILLGROUP_RQ, reader: jspb.BinaryReader): CALC_BILLGROUP_RQ;
}

export namespace CALC_BILLGROUP_RQ {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    cycleLen: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    importFromBilng: boolean,
  }
}

export class REVERSE_CALC_REQ extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): REVERSE_CALC_REQ;

  getBillgroup(): string;
  setBillgroup(value: string): REVERSE_CALC_REQ;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): REVERSE_CALC_REQ;
  hasBilngDate(): boolean;
  clearBilngDate(): REVERSE_CALC_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): REVERSE_CALC_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: REVERSE_CALC_REQ): REVERSE_CALC_REQ.AsObject;
  static serializeBinaryToWriter(message: REVERSE_CALC_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): REVERSE_CALC_REQ;
  static deserializeBinaryFromReader(message: REVERSE_CALC_REQ, reader: jspb.BinaryReader): REVERSE_CALC_REQ;
}

export namespace REVERSE_CALC_REQ {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
  }
}

export class BILL_DETAILS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): BILL_DETAILS;

  getCycleId(): number;
  setCycleId(value: number): BILL_DETAILS;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): BILL_DETAILS;
  hasBilngDate(): boolean;
  clearBilngDate(): BILL_DETAILS;

  getPrRead(): number;
  setPrRead(value: number): BILL_DETAILS;
  hasPrRead(): boolean;
  clearPrRead(): BILL_DETAILS;

  getCrRead(): number;
  setCrRead(value: number): BILL_DETAILS;
  hasCrRead(): boolean;
  clearCrRead(): BILL_DETAILS;

  getConsump(): number;
  setConsump(value: number): BILL_DETAILS;

  getNoUnits(): number;
  setNoUnits(value: number): BILL_DETAILS;

  getClBlnce(): number;
  setClBlnce(value: number): BILL_DETAILS;

  getMeterSize(): number;
  setMeterSize(value: number): BILL_DETAILS;
  hasMeterSize(): boolean;
  clearMeterSize(): BILL_DETAILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILL_DETAILS.AsObject;
  static toObject(includeInstance: boolean, msg: BILL_DETAILS): BILL_DETAILS.AsObject;
  static serializeBinaryToWriter(message: BILL_DETAILS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILL_DETAILS;
  static deserializeBinaryFromReader(message: BILL_DETAILS, reader: jspb.BinaryReader): BILL_DETAILS;
}

export namespace BILL_DETAILS {
  export type AsObject = {
    custkey: string,
    cycleId: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    prRead?: number,
    crRead?: number,
    consump: number,
    noUnits: number,
    clBlnce: number,
    meterSize?: number,
  }
}

export class ALL_BILLS extends jspb.Message {
  getBillDetailsList(): Array<BILL_DETAILS>;
  setBillDetailsList(value: Array<BILL_DETAILS>): ALL_BILLS;
  clearBillDetailsList(): ALL_BILLS;
  addBillDetails(value?: BILL_DETAILS, index?: number): BILL_DETAILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_BILLS.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_BILLS): ALL_BILLS.AsObject;
  static serializeBinaryToWriter(message: ALL_BILLS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_BILLS;
  static deserializeBinaryFromReader(message: ALL_BILLS, reader: jspb.BinaryReader): ALL_BILLS;
}

export namespace ALL_BILLS {
  export type AsObject = {
    billDetailsList: Array<BILL_DETAILS.AsObject>,
  }
}

export class INDV_RECALC extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): INDV_RECALC;

  getTblSelectedBillToCancelList(): Array<TBL_SELECTED_BILL_TO_CANCEL>;
  setTblSelectedBillToCancelList(value: Array<TBL_SELECTED_BILL_TO_CANCEL>): INDV_RECALC;
  clearTblSelectedBillToCancelList(): INDV_RECALC;
  addTblSelectedBillToCancel(value?: TBL_SELECTED_BILL_TO_CANCEL, index?: number): TBL_SELECTED_BILL_TO_CANCEL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INDV_RECALC.AsObject;
  static toObject(includeInstance: boolean, msg: INDV_RECALC): INDV_RECALC.AsObject;
  static serializeBinaryToWriter(message: INDV_RECALC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INDV_RECALC;
  static deserializeBinaryFromReader(message: INDV_RECALC, reader: jspb.BinaryReader): INDV_RECALC;
}

export namespace INDV_RECALC {
  export type AsObject = {
    custkey: string,
    tblSelectedBillToCancelList: Array<TBL_SELECTED_BILL_TO_CANCEL.AsObject>,
  }
}

export class COLLECTION_REQUEST extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): COLLECTION_REQUEST;

  getTblChoosingBillsToCollectList(): Array<TBL_CHOOSING_BILLS_TO_COLLECT>;
  setTblChoosingBillsToCollectList(value: Array<TBL_CHOOSING_BILLS_TO_COLLECT>): COLLECTION_REQUEST;
  clearTblChoosingBillsToCollectList(): COLLECTION_REQUEST;
  addTblChoosingBillsToCollect(value?: TBL_CHOOSING_BILLS_TO_COLLECT, index?: number): TBL_CHOOSING_BILLS_TO_COLLECT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): COLLECTION_REQUEST.AsObject;
  static toObject(includeInstance: boolean, msg: COLLECTION_REQUEST): COLLECTION_REQUEST.AsObject;
  static serializeBinaryToWriter(message: COLLECTION_REQUEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): COLLECTION_REQUEST;
  static deserializeBinaryFromReader(message: COLLECTION_REQUEST, reader: jspb.BinaryReader): COLLECTION_REQUEST;
}

export namespace COLLECTION_REQUEST {
  export type AsObject = {
    custkey: string,
    tblChoosingBillsToCollectList: Array<TBL_CHOOSING_BILLS_TO_COLLECT.AsObject>,
  }
}

export class COLLECT_BILL extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): COLLECT_BILL;

  getTblCollectedBiilsList(): Array<TBL_COLLECTED_BIILS>;
  setTblCollectedBiilsList(value: Array<TBL_COLLECTED_BIILS>): COLLECT_BILL;
  clearTblCollectedBiilsList(): COLLECT_BILL;
  addTblCollectedBiils(value?: TBL_COLLECTED_BIILS, index?: number): TBL_COLLECTED_BIILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): COLLECT_BILL.AsObject;
  static toObject(includeInstance: boolean, msg: COLLECT_BILL): COLLECT_BILL.AsObject;
  static serializeBinaryToWriter(message: COLLECT_BILL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): COLLECT_BILL;
  static deserializeBinaryFromReader(message: COLLECT_BILL, reader: jspb.BinaryReader): COLLECT_BILL;
}

export namespace COLLECT_BILL {
  export type AsObject = {
    custkey: string,
    tblCollectedBiilsList: Array<TBL_COLLECTED_BIILS.AsObject>,
  }
}

export class TBL_SELECTED_BILL_TO_CANCEL extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_SELECTED_BILL_TO_CANCEL;

  getCycleId(): number;
  setCycleId(value: number): TBL_SELECTED_BILL_TO_CANCEL;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): TBL_SELECTED_BILL_TO_CANCEL;
  hasBilngDate(): boolean;
  clearBilngDate(): TBL_SELECTED_BILL_TO_CANCEL;

  getPrRead(): number;
  setPrRead(value: number): TBL_SELECTED_BILL_TO_CANCEL;
  hasPrRead(): boolean;
  clearPrRead(): TBL_SELECTED_BILL_TO_CANCEL;

  getCrRead(): number;
  setCrRead(value: number): TBL_SELECTED_BILL_TO_CANCEL;
  hasCrRead(): boolean;
  clearCrRead(): TBL_SELECTED_BILL_TO_CANCEL;

  getConsump(): number;
  setConsump(value: number): TBL_SELECTED_BILL_TO_CANCEL;

  getNoUnits(): number;
  setNoUnits(value: number): TBL_SELECTED_BILL_TO_CANCEL;

  getClBlnce(): number;
  setClBlnce(value: number): TBL_SELECTED_BILL_TO_CANCEL;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): TBL_SELECTED_BILL_TO_CANCEL;

  getMeterDiamList(): number;
  setMeterDiamList(value: number): TBL_SELECTED_BILL_TO_CANCEL;
  hasMeterDiamList(): boolean;
  clearMeterDiamList(): TBL_SELECTED_BILL_TO_CANCEL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_SELECTED_BILL_TO_CANCEL.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_SELECTED_BILL_TO_CANCEL): TBL_SELECTED_BILL_TO_CANCEL.AsObject;
  static serializeBinaryToWriter(message: TBL_SELECTED_BILL_TO_CANCEL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_SELECTED_BILL_TO_CANCEL;
  static deserializeBinaryFromReader(message: TBL_SELECTED_BILL_TO_CANCEL, reader: jspb.BinaryReader): TBL_SELECTED_BILL_TO_CANCEL;
}

export namespace TBL_SELECTED_BILL_TO_CANCEL {
  export type AsObject = {
    custkey: string,
    cycleId: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    prRead?: number,
    crRead?: number,
    consump: number,
    noUnits: number,
    clBlnce: number,
    isCancelled: boolean,
    meterDiamList?: number,
  }
}

export class TBL_CHOOSING_BILLS_TO_COLLECT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_CHOOSING_BILLS_TO_COLLECT;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): TBL_CHOOSING_BILLS_TO_COLLECT;
  hasBilngDate(): boolean;
  clearBilngDate(): TBL_CHOOSING_BILLS_TO_COLLECT;

  getSurname(): string;
  setSurname(value: string): TBL_CHOOSING_BILLS_TO_COLLECT;
  hasSurname(): boolean;
  clearSurname(): TBL_CHOOSING_BILLS_TO_COLLECT;

  getCollectionType(): number;
  setCollectionType(value: number): TBL_CHOOSING_BILLS_TO_COLLECT;

  getCollectBill(): boolean;
  setCollectBill(value: boolean): TBL_CHOOSING_BILLS_TO_COLLECT;

  getCollectionId(): string;
  setCollectionId(value: string): TBL_CHOOSING_BILLS_TO_COLLECT;

  getClBlnce(): number;
  setClBlnce(value: number): TBL_CHOOSING_BILLS_TO_COLLECT;

  getCollectionAmount(): number;
  setCollectionAmount(value: number): TBL_CHOOSING_BILLS_TO_COLLECT;

  getBankName(): string;
  setBankName(value: string): TBL_CHOOSING_BILLS_TO_COLLECT;
  hasBankName(): boolean;
  clearBankName(): TBL_CHOOSING_BILLS_TO_COLLECT;

  getCollectionDate(): date_pb.MasDateTime | undefined;
  setCollectionDate(value?: date_pb.MasDateTime): TBL_CHOOSING_BILLS_TO_COLLECT;
  hasCollectionDate(): boolean;
  clearCollectionDate(): TBL_CHOOSING_BILLS_TO_COLLECT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_CHOOSING_BILLS_TO_COLLECT.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_CHOOSING_BILLS_TO_COLLECT): TBL_CHOOSING_BILLS_TO_COLLECT.AsObject;
  static serializeBinaryToWriter(message: TBL_CHOOSING_BILLS_TO_COLLECT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_CHOOSING_BILLS_TO_COLLECT;
  static deserializeBinaryFromReader(message: TBL_CHOOSING_BILLS_TO_COLLECT, reader: jspb.BinaryReader): TBL_CHOOSING_BILLS_TO_COLLECT;
}

export namespace TBL_CHOOSING_BILLS_TO_COLLECT {
  export type AsObject = {
    custkey: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    surname?: string,
    collectionType: number,
    collectBill: boolean,
    collectionId: string,
    clBlnce: number,
    collectionAmount: number,
    bankName?: string,
    collectionDate?: date_pb.MasDateTime.AsObject,
  }
}

export class TBL_COLLECTED_BIILS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_COLLECTED_BIILS;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): TBL_COLLECTED_BIILS;
  hasBilngDate(): boolean;
  clearBilngDate(): TBL_COLLECTED_BIILS;

  getSurname(): string;
  setSurname(value: string): TBL_COLLECTED_BIILS;
  hasSurname(): boolean;
  clearSurname(): TBL_COLLECTED_BIILS;

  getCollectionType(): number;
  setCollectionType(value: number): TBL_COLLECTED_BIILS;

  getCollectBill(): boolean;
  setCollectBill(value: boolean): TBL_COLLECTED_BIILS;

  getCollectionId(): string;
  setCollectionId(value: string): TBL_COLLECTED_BIILS;

  getClBlnce(): number;
  setClBlnce(value: number): TBL_COLLECTED_BIILS;

  getCollectionAmount(): number;
  setCollectionAmount(value: number): TBL_COLLECTED_BIILS;

  getBankName(): string;
  setBankName(value: string): TBL_COLLECTED_BIILS;
  hasBankName(): boolean;
  clearBankName(): TBL_COLLECTED_BIILS;

  getCollectionDate(): date_pb.MasDateTime | undefined;
  setCollectionDate(value?: date_pb.MasDateTime): TBL_COLLECTED_BIILS;
  hasCollectionDate(): boolean;
  clearCollectionDate(): TBL_COLLECTED_BIILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_COLLECTED_BIILS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_COLLECTED_BIILS): TBL_COLLECTED_BIILS.AsObject;
  static serializeBinaryToWriter(message: TBL_COLLECTED_BIILS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_COLLECTED_BIILS;
  static deserializeBinaryFromReader(message: TBL_COLLECTED_BIILS, reader: jspb.BinaryReader): TBL_COLLECTED_BIILS;
}

export namespace TBL_COLLECTED_BIILS {
  export type AsObject = {
    custkey: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
    surname?: string,
    collectionType: number,
    collectBill: boolean,
    collectionId: string,
    clBlnce: number,
    collectionAmount: number,
    bankName?: string,
    collectionDate?: date_pb.MasDateTime.AsObject,
  }
}

export class TBL_NEW_BILLS_AMOUNTS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_NEW_BILLS_AMOUNTS;

  getCycleId(): number;
  setCycleId(value: number): TBL_NEW_BILLS_AMOUNTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_NEW_BILLS_AMOUNTS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_NEW_BILLS_AMOUNTS): TBL_NEW_BILLS_AMOUNTS.AsObject;
  static serializeBinaryToWriter(message: TBL_NEW_BILLS_AMOUNTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_NEW_BILLS_AMOUNTS;
  static deserializeBinaryFromReader(message: TBL_NEW_BILLS_AMOUNTS, reader: jspb.BinaryReader): TBL_NEW_BILLS_AMOUNTS;
}

export namespace TBL_NEW_BILLS_AMOUNTS {
  export type AsObject = {
    custkey: string,
    cycleId: number,
  }
}

export class CancelPaymentActivity extends jspb.Message {
  getActivity(): APP_EXTERNAL_ACTIVITY | undefined;
  setActivity(value?: APP_EXTERNAL_ACTIVITY): CancelPaymentActivity;
  hasActivity(): boolean;
  clearActivity(): CancelPaymentActivity;

  getCancelReason(): string;
  setCancelReason(value: string): CancelPaymentActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelPaymentActivity.AsObject;
  static toObject(includeInstance: boolean, msg: CancelPaymentActivity): CancelPaymentActivity.AsObject;
  static serializeBinaryToWriter(message: CancelPaymentActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelPaymentActivity;
  static deserializeBinaryFromReader(message: CancelPaymentActivity, reader: jspb.BinaryReader): CancelPaymentActivity;
}

export namespace CancelPaymentActivity {
  export type AsObject = {
    activity?: APP_EXTERNAL_ACTIVITY.AsObject,
    cancelReason: string,
  }
}

export class CUSTOMER_DATA_FIELDS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_DATA_FIELDS;

  getUaAddress(): string;
  setUaAddress(value: string): CUSTOMER_DATA_FIELDS;

  getNewAddress(): string;
  setNewAddress(value: string): CUSTOMER_DATA_FIELDS;

  getOldAddress(): string;
  setOldAddress(value: string): CUSTOMER_DATA_FIELDS;

  getSurname(): string;
  setSurname(value: string): CUSTOMER_DATA_FIELDS;

  getNewSurname(): string;
  setNewSurname(value: string): CUSTOMER_DATA_FIELDS;

  getOldSurname(): string;
  setOldSurname(value: string): CUSTOMER_DATA_FIELDS;

  getNoUnits(): number;
  setNoUnits(value: number): CUSTOMER_DATA_FIELDS;

  getNewNoUnits(): number;
  setNewNoUnits(value: number): CUSTOMER_DATA_FIELDS;

  getOldNoUnits(): number;
  setOldNoUnits(value: number): CUSTOMER_DATA_FIELDS;

  getCType(): string;
  setCType(value: string): CUSTOMER_DATA_FIELDS;

  getNewCType(): string;
  setNewCType(value: string): CUSTOMER_DATA_FIELDS;

  getOldCType(): string;
  setOldCType(value: string): CUSTOMER_DATA_FIELDS;

  getCTypeGroup(): string;
  setCTypeGroup(value: string): CUSTOMER_DATA_FIELDS;

  getPropRef(): string;
  setPropRef(value: string): CUSTOMER_DATA_FIELDS;

  getMeterRef(): string;
  setMeterRef(value: string): CUSTOMER_DATA_FIELDS;

  getConnNo(): number;
  setConnNo(value: number): CUSTOMER_DATA_FIELDS;

  getPrevPropRef(): string;
  setPrevPropRef(value: string): CUSTOMER_DATA_FIELDS;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_DATA_FIELDS;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_DATA_FIELDS;

  getNid(): string;
  setNid(value: string): CUSTOMER_DATA_FIELDS;
  hasNid(): boolean;
  clearNid(): CUSTOMER_DATA_FIELDS;

  getWalkNo(): number;
  setWalkNo(value: number): CUSTOMER_DATA_FIELDS;

  getConnStatus(): number;
  setConnStatus(value: number): CUSTOMER_DATA_FIELDS;
  hasConnStatus(): boolean;
  clearConnStatus(): CUSTOMER_DATA_FIELDS;

  getMeterSize(): number;
  setMeterSize(value: number): CUSTOMER_DATA_FIELDS;
  hasMeterSize(): boolean;
  clearMeterSize(): CUSTOMER_DATA_FIELDS;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CUSTOMER_DATA_FIELDS;
  hasConnDate(): boolean;
  clearConnDate(): CUSTOMER_DATA_FIELDS;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CUSTOMER_DATA_FIELDS;
  hasInstallDate(): boolean;
  clearInstallDate(): CUSTOMER_DATA_FIELDS;

  getMeterTypeList(): string;
  setMeterTypeList(value: string): CUSTOMER_DATA_FIELDS;
  hasMeterTypeList(): boolean;
  clearMeterTypeList(): CUSTOMER_DATA_FIELDS;

  getMeterType(): string;
  setMeterType(value: string): CUSTOMER_DATA_FIELDS;
  hasMeterType(): boolean;
  clearMeterType(): CUSTOMER_DATA_FIELDS;

  getNewMeterType(): string;
  setNewMeterType(value: string): CUSTOMER_DATA_FIELDS;
  hasNewMeterType(): boolean;
  clearNewMeterType(): CUSTOMER_DATA_FIELDS;

  getLastInvoicedRead(): number;
  setLastInvoicedRead(value: number): CUSTOMER_DATA_FIELDS;
  hasLastInvoicedRead(): boolean;
  clearLastInvoicedRead(): CUSTOMER_DATA_FIELDS;

  getLastInvoicedReadDate(): date_pb.MasDateTime | undefined;
  setLastInvoicedReadDate(value?: date_pb.MasDateTime): CUSTOMER_DATA_FIELDS;
  hasLastInvoicedReadDate(): boolean;
  clearLastInvoicedReadDate(): CUSTOMER_DATA_FIELDS;

  getLastCurReadDate(): date_pb.MasDateTime | undefined;
  setLastCurReadDate(value?: date_pb.MasDateTime): CUSTOMER_DATA_FIELDS;
  hasLastCurReadDate(): boolean;
  clearLastCurReadDate(): CUSTOMER_DATA_FIELDS;

  getMeterTypeDesc(): string;
  setMeterTypeDesc(value: string): CUSTOMER_DATA_FIELDS;
  hasMeterTypeDesc(): boolean;
  clearMeterTypeDesc(): CUSTOMER_DATA_FIELDS;

  getMeterCondition(): string;
  setMeterCondition(value: string): CUSTOMER_DATA_FIELDS;
  hasMeterCondition(): boolean;
  clearMeterCondition(): CUSTOMER_DATA_FIELDS;

  getOldOldKey(): string;
  setOldOldKey(value: string): CUSTOMER_DATA_FIELDS;
  hasOldOldKey(): boolean;
  clearOldOldKey(): CUSTOMER_DATA_FIELDS;

  getNewOldKey(): string;
  setNewOldKey(value: string): CUSTOMER_DATA_FIELDS;
  hasNewOldKey(): boolean;
  clearNewOldKey(): CUSTOMER_DATA_FIELDS;

  getMeterMakeDesc(): string;
  setMeterMakeDesc(value: string): CUSTOMER_DATA_FIELDS;
  hasMeterMakeDesc(): boolean;
  clearMeterMakeDesc(): CUSTOMER_DATA_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_DATA_FIELDS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_DATA_FIELDS): CUSTOMER_DATA_FIELDS.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_DATA_FIELDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_DATA_FIELDS;
  static deserializeBinaryFromReader(message: CUSTOMER_DATA_FIELDS, reader: jspb.BinaryReader): CUSTOMER_DATA_FIELDS;
}

export namespace CUSTOMER_DATA_FIELDS {
  export type AsObject = {
    custkey: string,
    uaAddress: string,
    newAddress: string,
    oldAddress: string,
    surname: string,
    newSurname: string,
    oldSurname: string,
    noUnits: number,
    newNoUnits: number,
    oldNoUnits: number,
    cType: string,
    newCType: string,
    oldCType: string,
    cTypeGroup: string,
    propRef: string,
    meterRef: string,
    connNo: number,
    prevPropRef: string,
    billgroup: string,
    bookNo: string,
    nid?: string,
    walkNo: number,
    connStatus?: number,
    meterSize?: number,
    connDate?: date_pb.MasDateTime.AsObject,
    installDate?: date_pb.MasDateTime.AsObject,
    meterTypeList?: string,
    meterType?: string,
    newMeterType?: string,
    lastInvoicedRead?: number,
    lastInvoicedReadDate?: date_pb.MasDateTime.AsObject,
    lastCurReadDate?: date_pb.MasDateTime.AsObject,
    meterTypeDesc?: string,
    meterCondition?: string,
    oldOldKey?: string,
    newOldKey?: string,
    meterMakeDesc?: string,
  }
}

export class LU_METERMAKES extends jspb.Message {
  getCode(): string;
  setCode(value: string): LU_METERMAKES;

  getDescription(): string;
  setDescription(value: string): LU_METERMAKES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_METERMAKES.AsObject;
  static toObject(includeInstance: boolean, msg: LU_METERMAKES): LU_METERMAKES.AsObject;
  static serializeBinaryToWriter(message: LU_METERMAKES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_METERMAKES;
  static deserializeBinaryFromReader(message: LU_METERMAKES, reader: jspb.BinaryReader): LU_METERMAKES;
}

export namespace LU_METERMAKES {
  export type AsObject = {
    code: string,
    description: string,
  }
}

export class ArrLU_METERMAKES extends jspb.Message {
  getLuMetermakesList(): Array<LU_METERMAKES>;
  setLuMetermakesList(value: Array<LU_METERMAKES>): ArrLU_METERMAKES;
  clearLuMetermakesList(): ArrLU_METERMAKES;
  addLuMetermakes(value?: LU_METERMAKES, index?: number): LU_METERMAKES;

  getLuMetertypeList(): Array<LU_METERMAKES>;
  setLuMetertypeList(value: Array<LU_METERMAKES>): ArrLU_METERMAKES;
  clearLuMetertypeList(): ArrLU_METERMAKES;
  addLuMetertype(value?: LU_METERMAKES, index?: number): LU_METERMAKES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrLU_METERMAKES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrLU_METERMAKES): ArrLU_METERMAKES.AsObject;
  static serializeBinaryToWriter(message: ArrLU_METERMAKES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrLU_METERMAKES;
  static deserializeBinaryFromReader(message: ArrLU_METERMAKES, reader: jspb.BinaryReader): ArrLU_METERMAKES;
}

export namespace ArrLU_METERMAKES {
  export type AsObject = {
    luMetermakesList: Array<LU_METERMAKES.AsObject>,
    luMetertypeList: Array<LU_METERMAKES.AsObject>,
  }
}

export class PeriodFilter extends jspb.Message {
  getFrom(): date_pb.MasDateTime | undefined;
  setFrom(value?: date_pb.MasDateTime): PeriodFilter;
  hasFrom(): boolean;
  clearFrom(): PeriodFilter;

  getTo(): date_pb.MasDateTime | undefined;
  setTo(value?: date_pb.MasDateTime): PeriodFilter;
  hasTo(): boolean;
  clearTo(): PeriodFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodFilter): PeriodFilter.AsObject;
  static serializeBinaryToWriter(message: PeriodFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodFilter;
  static deserializeBinaryFromReader(message: PeriodFilter, reader: jspb.BinaryReader): PeriodFilter;
}

export namespace PeriodFilter {
  export type AsObject = {
    from?: date_pb.MasDateTime.AsObject,
    to?: date_pb.MasDateTime.AsObject,
  }
}

export class AllFeesPaidPeriod extends jspb.Message {
  getFeespaidperiodList(): Array<FeesPaidPeriod>;
  setFeespaidperiodList(value: Array<FeesPaidPeriod>): AllFeesPaidPeriod;
  clearFeespaidperiodList(): AllFeesPaidPeriod;
  addFeespaidperiod(value?: FeesPaidPeriod, index?: number): FeesPaidPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllFeesPaidPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: AllFeesPaidPeriod): AllFeesPaidPeriod.AsObject;
  static serializeBinaryToWriter(message: AllFeesPaidPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllFeesPaidPeriod;
  static deserializeBinaryFromReader(message: AllFeesPaidPeriod, reader: jspb.BinaryReader): AllFeesPaidPeriod;
}

export namespace AllFeesPaidPeriod {
  export type AsObject = {
    feespaidperiodList: Array<FeesPaidPeriod.AsObject>,
  }
}

export class FeesPaidPeriod extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): FeesPaidPeriod;

  getOrgAmount(): number;
  setOrgAmount(value: number): FeesPaidPeriod;

  getVat(): number;
  setVat(value: number): FeesPaidPeriod;

  getAdmin(): number;
  setAdmin(value: number): FeesPaidPeriod;

  getAdminVat(): number;
  setAdminVat(value: number): FeesPaidPeriod;

  getAmount(): number;
  setAmount(value: number): FeesPaidPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeesPaidPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: FeesPaidPeriod): FeesPaidPeriod.AsObject;
  static serializeBinaryToWriter(message: FeesPaidPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeesPaidPeriod;
  static deserializeBinaryFromReader(message: FeesPaidPeriod, reader: jspb.BinaryReader): FeesPaidPeriod;
}

export namespace FeesPaidPeriod {
  export type AsObject = {
    description: string,
    orgAmount: number,
    vat: number,
    admin: number,
    adminVat: number,
    amount: number,
  }
}

export class AllMoqaysaPaidPeriod extends jspb.Message {
  getMoqaysapaidperiodList(): Array<MoqaysaPaidPeriod>;
  setMoqaysapaidperiodList(value: Array<MoqaysaPaidPeriod>): AllMoqaysaPaidPeriod;
  clearMoqaysapaidperiodList(): AllMoqaysaPaidPeriod;
  addMoqaysapaidperiod(value?: MoqaysaPaidPeriod, index?: number): MoqaysaPaidPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllMoqaysaPaidPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: AllMoqaysaPaidPeriod): AllMoqaysaPaidPeriod.AsObject;
  static serializeBinaryToWriter(message: AllMoqaysaPaidPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllMoqaysaPaidPeriod;
  static deserializeBinaryFromReader(message: AllMoqaysaPaidPeriod, reader: jspb.BinaryReader): AllMoqaysaPaidPeriod;
}

export namespace AllMoqaysaPaidPeriod {
  export type AsObject = {
    moqaysapaidperiodList: Array<MoqaysaPaidPeriod.AsObject>,
  }
}

export class MoqaysaPaidPeriod extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): MoqaysaPaidPeriod;

  getCountApps(): number;
  setCountApps(value: number): MoqaysaPaidPeriod;

  getAmount(): number;
  setAmount(value: number): MoqaysaPaidPeriod;

  getCType(): string;
  setCType(value: string): MoqaysaPaidPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoqaysaPaidPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: MoqaysaPaidPeriod): MoqaysaPaidPeriod.AsObject;
  static serializeBinaryToWriter(message: MoqaysaPaidPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoqaysaPaidPeriod;
  static deserializeBinaryFromReader(message: MoqaysaPaidPeriod, reader: jspb.BinaryReader): MoqaysaPaidPeriod;
}

export namespace MoqaysaPaidPeriod {
  export type AsObject = {
    description: string,
    countApps: number,
    amount: number,
    cType: string,
  }
}

export class AllCountActPeriod extends jspb.Message {
  getCountactperiodList(): Array<CountActPeriod>;
  setCountactperiodList(value: Array<CountActPeriod>): AllCountActPeriod;
  clearCountactperiodList(): AllCountActPeriod;
  addCountactperiod(value?: CountActPeriod, index?: number): CountActPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCountActPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: AllCountActPeriod): AllCountActPeriod.AsObject;
  static serializeBinaryToWriter(message: AllCountActPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCountActPeriod;
  static deserializeBinaryFromReader(message: AllCountActPeriod, reader: jspb.BinaryReader): AllCountActPeriod;
}

export namespace AllCountActPeriod {
  export type AsObject = {
    countactperiodList: Array<CountActPeriod.AsObject>,
  }
}

export class CountActPeriod extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): CountActPeriod;

  getCountPosted(): number;
  setCountPosted(value: number): CountActPeriod;

  getCountNotPosted(): number;
  setCountNotPosted(value: number): CountActPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountActPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: CountActPeriod): CountActPeriod.AsObject;
  static serializeBinaryToWriter(message: CountActPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountActPeriod;
  static deserializeBinaryFromReader(message: CountActPeriod, reader: jspb.BinaryReader): CountActPeriod;
}

export namespace CountActPeriod {
  export type AsObject = {
    description: string,
    countPosted: number,
    countNotPosted: number,
  }
}

export class CS_AGREEMS extends jspb.Message {
  getId(): number;
  setId(value: number): CS_AGREEMS;

  getCustkey(): string;
  setCustkey(value: string): CS_AGREEMS;

  getFeeId(): number;
  setFeeId(value: number): CS_AGREEMS;

  getFeeAmount(): number;
  setFeeAmount(value: number): CS_AGREEMS;

  getPaidAmout(): number;
  setPaidAmout(value: number): CS_AGREEMS;

  getAgrmAmount(): number;
  setAgrmAmount(value: number): CS_AGREEMS;

  getNoMonths(): number;
  setNoMonths(value: number): CS_AGREEMS;

  getInterst(): number;
  setInterst(value: number): CS_AGREEMS;

  getIsPosted(): boolean;
  setIsPosted(value: boolean): CS_AGREEMS;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CS_AGREEMS;

  getAgreemTransType(): number;
  setAgreemTransType(value: number): CS_AGREEMS;

  getAgreemTransStype(): number;
  setAgreemTransStype(value: number): CS_AGREEMS;

  getAppId(): number;
  setAppId(value: number): CS_AGREEMS;

  getRevAgreemTrnsType(): number;
  setRevAgreemTrnsType(value: number): CS_AGREEMS;
  hasRevAgreemTrnsType(): boolean;
  clearRevAgreemTrnsType(): CS_AGREEMS;

  getRevAgreemTrnsStype(): number;
  setRevAgreemTrnsStype(value: number): CS_AGREEMS;
  hasRevAgreemTrnsStype(): boolean;
  clearRevAgreemTrnsStype(): CS_AGREEMS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_AGREEMS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_AGREEMS): CS_AGREEMS.AsObject;
  static serializeBinaryToWriter(message: CS_AGREEMS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_AGREEMS;
  static deserializeBinaryFromReader(message: CS_AGREEMS, reader: jspb.BinaryReader): CS_AGREEMS;
}

export namespace CS_AGREEMS {
  export type AsObject = {
    id: number,
    custkey: string,
    feeId: number,
    feeAmount: number,
    paidAmout: number,
    agrmAmount: number,
    noMonths: number,
    interst: number,
    isPosted: boolean,
    isCancelled: boolean,
    agreemTransType: number,
    agreemTransStype: number,
    appId: number,
    revAgreemTrnsType?: number,
    revAgreemTrnsStype?: number,
  }
}

export class OLD_CS_AGREEMS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): OLD_CS_AGREEMS;

  getFeeId(): number;
  setFeeId(value: number): OLD_CS_AGREEMS;

  getFeeAmount(): number;
  setFeeAmount(value: number): OLD_CS_AGREEMS;

  getPaidAmout(): number;
  setPaidAmout(value: number): OLD_CS_AGREEMS;

  getAgrmAmount(): number;
  setAgrmAmount(value: number): OLD_CS_AGREEMS;

  getNoMonths(): number;
  setNoMonths(value: number): OLD_CS_AGREEMS;

  getInterst(): number;
  setInterst(value: number): OLD_CS_AGREEMS;

  getIsPosted(): boolean;
  setIsPosted(value: boolean): OLD_CS_AGREEMS;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): OLD_CS_AGREEMS;

  getAgreemTransType(): number;
  setAgreemTransType(value: number): OLD_CS_AGREEMS;

  getAgreemTransStype(): number;
  setAgreemTransStype(value: number): OLD_CS_AGREEMS;

  getAppId(): number;
  setAppId(value: number): OLD_CS_AGREEMS;

  getRevAgreemTrnsType(): number;
  setRevAgreemTrnsType(value: number): OLD_CS_AGREEMS;
  hasRevAgreemTrnsType(): boolean;
  clearRevAgreemTrnsType(): OLD_CS_AGREEMS;

  getRevAgreemTrnsStype(): number;
  setRevAgreemTrnsStype(value: number): OLD_CS_AGREEMS;
  hasRevAgreemTrnsStype(): boolean;
  clearRevAgreemTrnsStype(): OLD_CS_AGREEMS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OLD_CS_AGREEMS.AsObject;
  static toObject(includeInstance: boolean, msg: OLD_CS_AGREEMS): OLD_CS_AGREEMS.AsObject;
  static serializeBinaryToWriter(message: OLD_CS_AGREEMS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OLD_CS_AGREEMS;
  static deserializeBinaryFromReader(message: OLD_CS_AGREEMS, reader: jspb.BinaryReader): OLD_CS_AGREEMS;
}

export namespace OLD_CS_AGREEMS {
  export type AsObject = {
    custkey: string,
    feeId: number,
    feeAmount: number,
    paidAmout: number,
    agrmAmount: number,
    noMonths: number,
    interst: number,
    isPosted: boolean,
    isCancelled: boolean,
    agreemTransType: number,
    agreemTransStype: number,
    appId: number,
    revAgreemTrnsType?: number,
    revAgreemTrnsStype?: number,
  }
}

export class TOWNSHIP_DTL extends jspb.Message {
  getTownshipNo(): string;
  setTownshipNo(value: string): TOWNSHIP_DTL;

  getStationNo(): number;
  setStationNo(value: number): TOWNSHIP_DTL;
  hasStationNo(): boolean;
  clearStationNo(): TOWNSHIP_DTL;

  getRef(): string;
  setRef(value: string): TOWNSHIP_DTL;
  hasRef(): boolean;
  clearRef(): TOWNSHIP_DTL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TOWNSHIP_DTL.AsObject;
  static toObject(includeInstance: boolean, msg: TOWNSHIP_DTL): TOWNSHIP_DTL.AsObject;
  static serializeBinaryToWriter(message: TOWNSHIP_DTL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TOWNSHIP_DTL;
  static deserializeBinaryFromReader(message: TOWNSHIP_DTL, reader: jspb.BinaryReader): TOWNSHIP_DTL;
}

export namespace TOWNSHIP_DTL {
  export type AsObject = {
    townshipNo: string,
    stationNo?: number,
    ref?: string,
  }
}

export class ArrTOWNSHIP_DTL extends jspb.Message {
  getTownshipDtlList(): Array<TOWNSHIP_DTL>;
  setTownshipDtlList(value: Array<TOWNSHIP_DTL>): ArrTOWNSHIP_DTL;
  clearTownshipDtlList(): ArrTOWNSHIP_DTL;
  addTownshipDtl(value?: TOWNSHIP_DTL, index?: number): TOWNSHIP_DTL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTOWNSHIP_DTL.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTOWNSHIP_DTL): ArrTOWNSHIP_DTL.AsObject;
  static serializeBinaryToWriter(message: ArrTOWNSHIP_DTL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTOWNSHIP_DTL;
  static deserializeBinaryFromReader(message: ArrTOWNSHIP_DTL, reader: jspb.BinaryReader): ArrTOWNSHIP_DTL;
}

export namespace ArrTOWNSHIP_DTL {
  export type AsObject = {
    townshipDtlList: Array<TOWNSHIP_DTL.AsObject>,
  }
}

export class GetCustomerByFlag extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): GetCustomerByFlag;

  getTblName(): string;
  setTblName(value: string): GetCustomerByFlag;
  hasTblName(): boolean;
  clearTblName(): GetCustomerByFlag;

  getColName(): string;
  setColName(value: string): GetCustomerByFlag;
  hasColName(): boolean;
  clearColName(): GetCustomerByFlag;

  getCustkeyColName(): string;
  setCustkeyColName(value: string): GetCustomerByFlag;
  hasCustkeyColName(): boolean;
  clearCustkeyColName(): GetCustomerByFlag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerByFlag.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerByFlag): GetCustomerByFlag.AsObject;
  static serializeBinaryToWriter(message: GetCustomerByFlag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerByFlag;
  static deserializeBinaryFromReader(message: GetCustomerByFlag, reader: jspb.BinaryReader): GetCustomerByFlag;
}

export namespace GetCustomerByFlag {
  export type AsObject = {
    custkey: string,
    tblName?: string,
    colName?: string,
    custkeyColName?: string,
  }
}

export class GetAllByFlag extends jspb.Message {
  getTblName(): string;
  setTblName(value: string): GetAllByFlag;
  hasTblName(): boolean;
  clearTblName(): GetAllByFlag;

  getColName(): string;
  setColName(value: string): GetAllByFlag;
  hasColName(): boolean;
  clearColName(): GetAllByFlag;

  getCustkeyColName(): string;
  setCustkeyColName(value: string): GetAllByFlag;
  hasCustkeyColName(): boolean;
  clearCustkeyColName(): GetAllByFlag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllByFlag.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllByFlag): GetAllByFlag.AsObject;
  static serializeBinaryToWriter(message: GetAllByFlag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllByFlag;
  static deserializeBinaryFromReader(message: GetAllByFlag, reader: jspb.BinaryReader): GetAllByFlag;
}

export namespace GetAllByFlag {
  export type AsObject = {
    tblName?: string,
    colName?: string,
    custkeyColName?: string,
  }
}

export class GetBillgroupByFlag extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): GetBillgroupByFlag;

  getBillgroup(): string;
  setBillgroup(value: string): GetBillgroupByFlag;

  getBookNo(): string;
  setBookNo(value: string): GetBillgroupByFlag;
  hasBookNo(): boolean;
  clearBookNo(): GetBillgroupByFlag;

  getTblName(): string;
  setTblName(value: string): GetBillgroupByFlag;
  hasTblName(): boolean;
  clearTblName(): GetBillgroupByFlag;

  getColName(): string;
  setColName(value: string): GetBillgroupByFlag;
  hasColName(): boolean;
  clearColName(): GetBillgroupByFlag;

  getCustkeyColName(): string;
  setCustkeyColName(value: string): GetBillgroupByFlag;
  hasCustkeyColName(): boolean;
  clearCustkeyColName(): GetBillgroupByFlag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillgroupByFlag.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillgroupByFlag): GetBillgroupByFlag.AsObject;
  static serializeBinaryToWriter(message: GetBillgroupByFlag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillgroupByFlag;
  static deserializeBinaryFromReader(message: GetBillgroupByFlag, reader: jspb.BinaryReader): GetBillgroupByFlag;
}

export namespace GetBillgroupByFlag {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo?: string,
    tblName?: string,
    colName?: string,
    custkeyColName?: string,
  }
}

export class EXTRA_CHARGE extends jspb.Message {
  getFlag(): string;
  setFlag(value: string): EXTRA_CHARGE;

  getCharge(): number;
  setCharge(value: number): EXTRA_CHARGE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EXTRA_CHARGE.AsObject;
  static toObject(includeInstance: boolean, msg: EXTRA_CHARGE): EXTRA_CHARGE.AsObject;
  static serializeBinaryToWriter(message: EXTRA_CHARGE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EXTRA_CHARGE;
  static deserializeBinaryFromReader(message: EXTRA_CHARGE, reader: jspb.BinaryReader): EXTRA_CHARGE;
}

export namespace EXTRA_CHARGE {
  export type AsObject = {
    flag: string,
    charge: number,
  }
}

export class GetLasCustomerInWalkRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): GetLasCustomerInWalkRq;
  hasStationNo(): boolean;
  clearStationNo(): GetLasCustomerInWalkRq;

  getBillgroup(): string;
  setBillgroup(value: string): GetLasCustomerInWalkRq;
  hasBillgroup(): boolean;
  clearBillgroup(): GetLasCustomerInWalkRq;

  getBookNo(): string;
  setBookNo(value: string): GetLasCustomerInWalkRq;
  hasBookNo(): boolean;
  clearBookNo(): GetLasCustomerInWalkRq;

  getWalkNo(): number;
  setWalkNo(value: number): GetLasCustomerInWalkRq;
  hasWalkNo(): boolean;
  clearWalkNo(): GetLasCustomerInWalkRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLasCustomerInWalkRq.AsObject;
  static toObject(includeInstance: boolean, msg: GetLasCustomerInWalkRq): GetLasCustomerInWalkRq.AsObject;
  static serializeBinaryToWriter(message: GetLasCustomerInWalkRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLasCustomerInWalkRq;
  static deserializeBinaryFromReader(message: GetLasCustomerInWalkRq, reader: jspb.BinaryReader): GetLasCustomerInWalkRq;
}

export namespace GetLasCustomerInWalkRq {
  export type AsObject = {
    stationNo?: number,
    billgroup?: string,
    bookNo?: string,
    walkNo?: number,
  }
}

export class NUMBER extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): NUMBER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NUMBER.AsObject;
  static toObject(includeInstance: boolean, msg: NUMBER): NUMBER.AsObject;
  static serializeBinaryToWriter(message: NUMBER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NUMBER;
  static deserializeBinaryFromReader(message: NUMBER, reader: jspb.BinaryReader): NUMBER;
}

export namespace NUMBER {
  export type AsObject = {
    number: number,
  }
}

export class CHECK_METER_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CHECK_METER_RQ;

  getCheckedMeterDiam(): number;
  setCheckedMeterDiam(value: number): CHECK_METER_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHECK_METER_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: CHECK_METER_RQ): CHECK_METER_RQ.AsObject;
  static serializeBinaryToWriter(message: CHECK_METER_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHECK_METER_RQ;
  static deserializeBinaryFromReader(message: CHECK_METER_RQ, reader: jspb.BinaryReader): CHECK_METER_RQ;
}

export namespace CHECK_METER_RQ {
  export type AsObject = {
    custkey: string,
    checkedMeterDiam: number,
  }
}

export class FEE_SETUP extends jspb.Message {
  getId(): number;
  setId(value: number): FEE_SETUP;

  getActivityId(): number;
  setActivityId(value: number): FEE_SETUP;

  getActivityDescription(): string;
  setActivityDescription(value: string): FEE_SETUP;

  getFeeDescription(): string;
  setFeeDescription(value: string): FEE_SETUP;

  getIsActive(): boolean;
  setIsActive(value: boolean): FEE_SETUP;

  getTransType(): number;
  setTransType(value: number): FEE_SETUP;

  getTransStype(): number;
  setTransStype(value: number): FEE_SETUP;

  getVatPrecentage(): number;
  setVatPrecentage(value: number): FEE_SETUP;
  hasVatPrecentage(): boolean;
  clearVatPrecentage(): FEE_SETUP;

  getAdminFeesPrecentage(): number;
  setAdminFeesPrecentage(value: number): FEE_SETUP;
  hasAdminFeesPrecentage(): boolean;
  clearAdminFeesPrecentage(): FEE_SETUP;

  getAdminVatPrecentage(): number;
  setAdminVatPrecentage(value: number): FEE_SETUP;
  hasAdminVatPrecentage(): boolean;
  clearAdminVatPrecentage(): FEE_SETUP;

  getPaymentTransType(): number;
  setPaymentTransType(value: number): FEE_SETUP;

  getPaymentTransStype(): number;
  setPaymentTransStype(value: number): FEE_SETUP;

  getAllowInstallments(): boolean;
  setAllowInstallments(value: boolean): FEE_SETUP;
  hasAllowInstallments(): boolean;
  clearAllowInstallments(): FEE_SETUP;

  getInstallmentTransType(): number;
  setInstallmentTransType(value: number): FEE_SETUP;
  hasInstallmentTransType(): boolean;
  clearInstallmentTransType(): FEE_SETUP;

  getInstallmentTransStype(): number;
  setInstallmentTransStype(value: number): FEE_SETUP;
  hasInstallmentTransStype(): boolean;
  clearInstallmentTransStype(): FEE_SETUP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FEE_SETUP.AsObject;
  static toObject(includeInstance: boolean, msg: FEE_SETUP): FEE_SETUP.AsObject;
  static serializeBinaryToWriter(message: FEE_SETUP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FEE_SETUP;
  static deserializeBinaryFromReader(message: FEE_SETUP, reader: jspb.BinaryReader): FEE_SETUP;
}

export namespace FEE_SETUP {
  export type AsObject = {
    id: number,
    activityId: number,
    activityDescription: string,
    feeDescription: string,
    isActive: boolean,
    transType: number,
    transStype: number,
    vatPrecentage?: number,
    adminFeesPrecentage?: number,
    adminVatPrecentage?: number,
    paymentTransType: number,
    paymentTransStype: number,
    allowInstallments?: boolean,
    installmentTransType?: number,
    installmentTransStype?: number,
  }
}

export class ArrFeeSetup extends jspb.Message {
  getFeeSetupList(): Array<FEE_SETUP>;
  setFeeSetupList(value: Array<FEE_SETUP>): ArrFeeSetup;
  clearFeeSetupList(): ArrFeeSetup;
  addFeeSetup(value?: FEE_SETUP, index?: number): FEE_SETUP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrFeeSetup.AsObject;
  static toObject(includeInstance: boolean, msg: ArrFeeSetup): ArrFeeSetup.AsObject;
  static serializeBinaryToWriter(message: ArrFeeSetup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrFeeSetup;
  static deserializeBinaryFromReader(message: ArrFeeSetup, reader: jspb.BinaryReader): ArrFeeSetup;
}

export namespace ArrFeeSetup {
  export type AsObject = {
    feeSetupList: Array<FEE_SETUP.AsObject>,
  }
}

export class ArrCS_ACTIVITY_FEES extends jspb.Message {
  getCsActivityFeesList(): Array<CS_ACTIVITY_FEES>;
  setCsActivityFeesList(value: Array<CS_ACTIVITY_FEES>): ArrCS_ACTIVITY_FEES;
  clearCsActivityFeesList(): ArrCS_ACTIVITY_FEES;
  addCsActivityFees(value?: CS_ACTIVITY_FEES, index?: number): CS_ACTIVITY_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCS_ACTIVITY_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCS_ACTIVITY_FEES): ArrCS_ACTIVITY_FEES.AsObject;
  static serializeBinaryToWriter(message: ArrCS_ACTIVITY_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCS_ACTIVITY_FEES;
  static deserializeBinaryFromReader(message: ArrCS_ACTIVITY_FEES, reader: jspb.BinaryReader): ArrCS_ACTIVITY_FEES;
}

export namespace ArrCS_ACTIVITY_FEES {
  export type AsObject = {
    csActivityFeesList: Array<CS_ACTIVITY_FEES.AsObject>,
  }
}

export class PROVIDING_NEW_READING extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PROVIDING_NEW_READING;

  getPrRead(): number;
  setPrRead(value: number): PROVIDING_NEW_READING;

  getCrRead(): number;
  setCrRead(value: number): PROVIDING_NEW_READING;

  getAllowDevide(): boolean;
  setAllowDevide(value: boolean): PROVIDING_NEW_READING;

  getCType(): string;
  setCType(value: string): PROVIDING_NEW_READING;
  hasCType(): boolean;
  clearCType(): PROVIDING_NEW_READING;

  getNoUnits(): number;
  setNoUnits(value: number): PROVIDING_NEW_READING;
  hasNoUnits(): boolean;
  clearNoUnits(): PROVIDING_NEW_READING;

  getIsTarakom(): boolean;
  setIsTarakom(value: boolean): PROVIDING_NEW_READING;
  hasIsTarakom(): boolean;
  clearIsTarakom(): PROVIDING_NEW_READING;

  getReadingLength(): number;
  setReadingLength(value: number): PROVIDING_NEW_READING;
  hasReadingLength(): boolean;
  clearReadingLength(): PROVIDING_NEW_READING;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): PROVIDING_NEW_READING;
  hasBilngDate(): boolean;
  clearBilngDate(): PROVIDING_NEW_READING;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PROVIDING_NEW_READING.AsObject;
  static toObject(includeInstance: boolean, msg: PROVIDING_NEW_READING): PROVIDING_NEW_READING.AsObject;
  static serializeBinaryToWriter(message: PROVIDING_NEW_READING, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PROVIDING_NEW_READING;
  static deserializeBinaryFromReader(message: PROVIDING_NEW_READING, reader: jspb.BinaryReader): PROVIDING_NEW_READING;
}

export namespace PROVIDING_NEW_READING {
  export type AsObject = {
    custkey: string,
    prRead: number,
    crRead: number,
    allowDevide: boolean,
    cType?: string,
    noUnits?: number,
    isTarakom?: boolean,
    readingLength?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
  }
}

export class repeteed_PAYMENT_REQUEST extends jspb.Message {
  getPaymentRequestList(): Array<PAYMENT_REQUEST>;
  setPaymentRequestList(value: Array<PAYMENT_REQUEST>): repeteed_PAYMENT_REQUEST;
  clearPaymentRequestList(): repeteed_PAYMENT_REQUEST;
  addPaymentRequest(value?: PAYMENT_REQUEST, index?: number): PAYMENT_REQUEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): repeteed_PAYMENT_REQUEST.AsObject;
  static toObject(includeInstance: boolean, msg: repeteed_PAYMENT_REQUEST): repeteed_PAYMENT_REQUEST.AsObject;
  static serializeBinaryToWriter(message: repeteed_PAYMENT_REQUEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): repeteed_PAYMENT_REQUEST;
  static deserializeBinaryFromReader(message: repeteed_PAYMENT_REQUEST, reader: jspb.BinaryReader): repeteed_PAYMENT_REQUEST;
}

export namespace repeteed_PAYMENT_REQUEST {
  export type AsObject = {
    paymentRequestList: Array<PAYMENT_REQUEST.AsObject>,
  }
}

export class PaymentReq extends jspb.Message {
  getSKey(): string;
  setSKey(value: string): PaymentReq;

  getSKeyType(): number;
  setSKeyType(value: number): PaymentReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentReq.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentReq): PaymentReq.AsObject;
  static serializeBinaryToWriter(message: PaymentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentReq;
  static deserializeBinaryFromReader(message: PaymentReq, reader: jspb.BinaryReader): PaymentReq;
}

export namespace PaymentReq {
  export type AsObject = {
    sKey: string,
    sKeyType: number,
  }
}

export class QUEUE_RESPONSE extends jspb.Message {
  getId(): number;
  setId(value: number): QUEUE_RESPONSE;
  hasId(): boolean;
  clearId(): QUEUE_RESPONSE;

  getRequestid(): string;
  setRequestid(value: string): QUEUE_RESPONSE;
  hasRequestid(): boolean;
  clearRequestid(): QUEUE_RESPONSE;

  getPaymentRequest(): PAYMENT_REQUEST | undefined;
  setPaymentRequest(value?: PAYMENT_REQUEST): QUEUE_RESPONSE;
  hasPaymentRequest(): boolean;
  clearPaymentRequest(): QUEUE_RESPONSE;

  getStatus(): QUEUE_STATUS;
  setStatus(value: QUEUE_STATUS): QUEUE_RESPONSE;
  hasStatus(): boolean;
  clearStatus(): QUEUE_RESPONSE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QUEUE_RESPONSE.AsObject;
  static toObject(includeInstance: boolean, msg: QUEUE_RESPONSE): QUEUE_RESPONSE.AsObject;
  static serializeBinaryToWriter(message: QUEUE_RESPONSE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QUEUE_RESPONSE;
  static deserializeBinaryFromReader(message: QUEUE_RESPONSE, reader: jspb.BinaryReader): QUEUE_RESPONSE;
}

export namespace QUEUE_RESPONSE {
  export type AsObject = {
    id?: number,
    requestid?: string,
    paymentRequest?: PAYMENT_REQUEST.AsObject,
    status?: QUEUE_STATUS,
  }
}

export class StationNo extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): StationNo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationNo.AsObject;
  static toObject(includeInstance: boolean, msg: StationNo): StationNo.AsObject;
  static serializeBinaryToWriter(message: StationNo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationNo;
  static deserializeBinaryFromReader(message: StationNo, reader: jspb.BinaryReader): StationNo;
}

export namespace StationNo {
  export type AsObject = {
    stationNo: number,
  }
}

export class BILLING_GROUPS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): BILLING_GROUPS;

  getGroupId(): string;
  setGroupId(value: string): BILLING_GROUPS;

  getDescription(): string;
  setDescription(value: string): BILLING_GROUPS;
  hasDescription(): boolean;
  clearDescription(): BILLING_GROUPS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILLING_GROUPS.AsObject;
  static toObject(includeInstance: boolean, msg: BILLING_GROUPS): BILLING_GROUPS.AsObject;
  static serializeBinaryToWriter(message: BILLING_GROUPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILLING_GROUPS;
  static deserializeBinaryFromReader(message: BILLING_GROUPS, reader: jspb.BinaryReader): BILLING_GROUPS;
}

export namespace BILLING_GROUPS {
  export type AsObject = {
    stationNo: number,
    groupId: string,
    description?: string,
  }
}

export class ArrBILLING_GROUPS extends jspb.Message {
  getBillingGroupsList(): Array<BILLING_GROUPS>;
  setBillingGroupsList(value: Array<BILLING_GROUPS>): ArrBILLING_GROUPS;
  clearBillingGroupsList(): ArrBILLING_GROUPS;
  addBillingGroups(value?: BILLING_GROUPS, index?: number): BILLING_GROUPS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrBILLING_GROUPS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrBILLING_GROUPS): ArrBILLING_GROUPS.AsObject;
  static serializeBinaryToWriter(message: ArrBILLING_GROUPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrBILLING_GROUPS;
  static deserializeBinaryFromReader(message: ArrBILLING_GROUPS, reader: jspb.BinaryReader): ArrBILLING_GROUPS;
}

export namespace ArrBILLING_GROUPS {
  export type AsObject = {
    billingGroupsList: Array<BILLING_GROUPS.AsObject>,
  }
}

export class CUSTOMER_BOOKS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_BOOKS;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_BOOKS;

  getCode(): string;
  setCode(value: string): CUSTOMER_BOOKS;

  getDescribe(): string;
  setDescribe(value: string): CUSTOMER_BOOKS;
  hasDescribe(): boolean;
  clearDescribe(): CUSTOMER_BOOKS;

  getNoWalks(): number;
  setNoWalks(value: number): CUSTOMER_BOOKS;
  hasNoWalks(): boolean;
  clearNoWalks(): CUSTOMER_BOOKS;

  getAssignedTo(): string;
  setAssignedTo(value: string): CUSTOMER_BOOKS;
  hasAssignedTo(): boolean;
  clearAssignedTo(): CUSTOMER_BOOKS;

  getAssignedToHh(): number;
  setAssignedToHh(value: number): CUSTOMER_BOOKS;
  hasAssignedToHh(): boolean;
  clearAssignedToHh(): CUSTOMER_BOOKS;

  getHandheldId(): string;
  setHandheldId(value: string): CUSTOMER_BOOKS;
  hasHandheldId(): boolean;
  clearHandheldId(): CUSTOMER_BOOKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_BOOKS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_BOOKS): CUSTOMER_BOOKS.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_BOOKS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_BOOKS;
  static deserializeBinaryFromReader(message: CUSTOMER_BOOKS, reader: jspb.BinaryReader): CUSTOMER_BOOKS;
}

export namespace CUSTOMER_BOOKS {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    code: string,
    describe?: string,
    noWalks?: number,
    assignedTo?: string,
    assignedToHh?: number,
    handheldId?: string,
  }
}

export class METER_BOOKS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): METER_BOOKS;

  getBillgroup(): string;
  setBillgroup(value: string): METER_BOOKS;

  getCode(): string;
  setCode(value: string): METER_BOOKS;

  getDescribe(): string;
  setDescribe(value: string): METER_BOOKS;
  hasDescribe(): boolean;
  clearDescribe(): METER_BOOKS;

  getNoWalks(): number;
  setNoWalks(value: number): METER_BOOKS;
  hasNoWalks(): boolean;
  clearNoWalks(): METER_BOOKS;

  getAssignedTo(): string;
  setAssignedTo(value: string): METER_BOOKS;
  hasAssignedTo(): boolean;
  clearAssignedTo(): METER_BOOKS;

  getAssignedToHh(): number;
  setAssignedToHh(value: number): METER_BOOKS;
  hasAssignedToHh(): boolean;
  clearAssignedToHh(): METER_BOOKS;

  getHandheldId(): string;
  setHandheldId(value: string): METER_BOOKS;
  hasHandheldId(): boolean;
  clearHandheldId(): METER_BOOKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): METER_BOOKS.AsObject;
  static toObject(includeInstance: boolean, msg: METER_BOOKS): METER_BOOKS.AsObject;
  static serializeBinaryToWriter(message: METER_BOOKS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): METER_BOOKS;
  static deserializeBinaryFromReader(message: METER_BOOKS, reader: jspb.BinaryReader): METER_BOOKS;
}

export namespace METER_BOOKS {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    code: string,
    describe?: string,
    noWalks?: number,
    assignedTo?: string,
    assignedToHh?: number,
    handheldId?: string,
  }
}

export class ArrCUSTOMER_Books extends jspb.Message {
  getCustomerBooksList(): Array<CUSTOMER_BOOKS>;
  setCustomerBooksList(value: Array<CUSTOMER_BOOKS>): ArrCUSTOMER_Books;
  clearCustomerBooksList(): ArrCUSTOMER_Books;
  addCustomerBooks(value?: CUSTOMER_BOOKS, index?: number): CUSTOMER_BOOKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCUSTOMER_Books.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCUSTOMER_Books): ArrCUSTOMER_Books.AsObject;
  static serializeBinaryToWriter(message: ArrCUSTOMER_Books, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCUSTOMER_Books;
  static deserializeBinaryFromReader(message: ArrCUSTOMER_Books, reader: jspb.BinaryReader): ArrCUSTOMER_Books;
}

export namespace ArrCUSTOMER_Books {
  export type AsObject = {
    customerBooksList: Array<CUSTOMER_BOOKS.AsObject>,
  }
}

export class StationNoBillgroupBookNoRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): StationNoBillgroupBookNoRq;

  getBillgroup(): string;
  setBillgroup(value: string): StationNoBillgroupBookNoRq;

  getBookNo(): string;
  setBookNo(value: string): StationNoBillgroupBookNoRq;

  getNoFilterConnStatus(): boolean;
  setNoFilterConnStatus(value: boolean): StationNoBillgroupBookNoRq;
  hasNoFilterConnStatus(): boolean;
  clearNoFilterConnStatus(): StationNoBillgroupBookNoRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationNoBillgroupBookNoRq.AsObject;
  static toObject(includeInstance: boolean, msg: StationNoBillgroupBookNoRq): StationNoBillgroupBookNoRq.AsObject;
  static serializeBinaryToWriter(message: StationNoBillgroupBookNoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationNoBillgroupBookNoRq;
  static deserializeBinaryFromReader(message: StationNoBillgroupBookNoRq, reader: jspb.BinaryReader): StationNoBillgroupBookNoRq;
}

export namespace StationNoBillgroupBookNoRq {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo: string,
    noFilterConnStatus?: boolean,
  }
}

export class StationNoBillgroupBookNoRqWalkNo extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): StationNoBillgroupBookNoRqWalkNo;

  getBillgroup(): string;
  setBillgroup(value: string): StationNoBillgroupBookNoRqWalkNo;

  getBookNo(): string;
  setBookNo(value: string): StationNoBillgroupBookNoRqWalkNo;
  hasBookNo(): boolean;
  clearBookNo(): StationNoBillgroupBookNoRqWalkNo;

  getWalkNo(): number;
  setWalkNo(value: number): StationNoBillgroupBookNoRqWalkNo;
  hasWalkNo(): boolean;
  clearWalkNo(): StationNoBillgroupBookNoRqWalkNo;

  getNoFilterConnStatus(): boolean;
  setNoFilterConnStatus(value: boolean): StationNoBillgroupBookNoRqWalkNo;
  hasNoFilterConnStatus(): boolean;
  clearNoFilterConnStatus(): StationNoBillgroupBookNoRqWalkNo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StationNoBillgroupBookNoRqWalkNo.AsObject;
  static toObject(includeInstance: boolean, msg: StationNoBillgroupBookNoRqWalkNo): StationNoBillgroupBookNoRqWalkNo.AsObject;
  static serializeBinaryToWriter(message: StationNoBillgroupBookNoRqWalkNo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StationNoBillgroupBookNoRqWalkNo;
  static deserializeBinaryFromReader(message: StationNoBillgroupBookNoRqWalkNo, reader: jspb.BinaryReader): StationNoBillgroupBookNoRqWalkNo;
}

export namespace StationNoBillgroupBookNoRqWalkNo {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo?: string,
    walkNo?: number,
    noFilterConnStatus?: boolean,
  }
}

export class CUSTOMER_WALKS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_WALKS;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_WALKS;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_WALKS;

  getWalkNo(): string;
  setWalkNo(value: string): CUSTOMER_WALKS;

  getDescribe(): string;
  setDescribe(value: string): CUSTOMER_WALKS;
  hasDescribe(): boolean;
  clearDescribe(): CUSTOMER_WALKS;

  getAssignedToHh(): number;
  setAssignedToHh(value: number): CUSTOMER_WALKS;
  hasAssignedToHh(): boolean;
  clearAssignedToHh(): CUSTOMER_WALKS;

  getUnused(): boolean;
  setUnused(value: boolean): CUSTOMER_WALKS;
  hasUnused(): boolean;
  clearUnused(): CUSTOMER_WALKS;

  getMarketing(): number;
  setMarketing(value: number): CUSTOMER_WALKS;
  hasMarketing(): boolean;
  clearMarketing(): CUSTOMER_WALKS;

  getIsHhPrinting(): boolean;
  setIsHhPrinting(value: boolean): CUSTOMER_WALKS;
  hasIsHhPrinting(): boolean;
  clearIsHhPrinting(): CUSTOMER_WALKS;

  getEmpName(): string;
  setEmpName(value: string): CUSTOMER_WALKS;
  hasEmpName(): boolean;
  clearEmpName(): CUSTOMER_WALKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_WALKS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_WALKS): CUSTOMER_WALKS.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_WALKS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_WALKS;
  static deserializeBinaryFromReader(message: CUSTOMER_WALKS, reader: jspb.BinaryReader): CUSTOMER_WALKS;
}

export namespace CUSTOMER_WALKS {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo: string,
    walkNo: string,
    describe?: string,
    assignedToHh?: number,
    unused?: boolean,
    marketing?: number,
    isHhPrinting?: boolean,
    empName?: string,
  }
}

export class ArrCUSTOMER_WALKS extends jspb.Message {
  getCustomerWalksList(): Array<CUSTOMER_WALKS>;
  setCustomerWalksList(value: Array<CUSTOMER_WALKS>): ArrCUSTOMER_WALKS;
  clearCustomerWalksList(): ArrCUSTOMER_WALKS;
  addCustomerWalks(value?: CUSTOMER_WALKS, index?: number): CUSTOMER_WALKS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCUSTOMER_WALKS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCUSTOMER_WALKS): ArrCUSTOMER_WALKS.AsObject;
  static serializeBinaryToWriter(message: ArrCUSTOMER_WALKS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCUSTOMER_WALKS;
  static deserializeBinaryFromReader(message: ArrCUSTOMER_WALKS, reader: jspb.BinaryReader): ArrCUSTOMER_WALKS;
}

export namespace ArrCUSTOMER_WALKS {
  export type AsObject = {
    customerWalksList: Array<CUSTOMER_WALKS.AsObject>,
  }
}

export class PAYMENT_REQUEST extends jspb.Message {
  getId(): number;
  setId(value: number): PAYMENT_REQUEST;
  hasId(): boolean;
  clearId(): PAYMENT_REQUEST;

  getAmount(): number;
  setAmount(value: number): PAYMENT_REQUEST;

  getAccountNumber(): string;
  setAccountNumber(value: string): PAYMENT_REQUEST;
  hasAccountNumber(): boolean;
  clearAccountNumber(): PAYMENT_REQUEST;

  getCustomerName(): string;
  setCustomerName(value: string): PAYMENT_REQUEST;

  getCustomerAddress(): string;
  setCustomerAddress(value: string): PAYMENT_REQUEST;
  hasCustomerAddress(): boolean;
  clearCustomerAddress(): PAYMENT_REQUEST;

  getPaymentDetails(): string;
  setPaymentDetails(value: string): PAYMENT_REQUEST;
  hasPaymentDetails(): boolean;
  clearPaymentDetails(): PAYMENT_REQUEST;

  getDescription(): string;
  setDescription(value: string): PAYMENT_REQUEST;

  getTransType(): string;
  setTransType(value: string): PAYMENT_REQUEST;
  hasTransType(): boolean;
  clearTransType(): PAYMENT_REQUEST;

  getModelType(): string;
  setModelType(value: string): PAYMENT_REQUEST;
  hasModelType(): boolean;
  clearModelType(): PAYMENT_REQUEST;

  getRequestDate(): date_pb.MasDateTime | undefined;
  setRequestDate(value?: date_pb.MasDateTime): PAYMENT_REQUEST;
  hasRequestDate(): boolean;
  clearRequestDate(): PAYMENT_REQUEST;

  getRequestUser(): string;
  setRequestUser(value: string): PAYMENT_REQUEST;

  getExpireDate(): date_pb.MasDateTime | undefined;
  setExpireDate(value?: date_pb.MasDateTime): PAYMENT_REQUEST;
  hasExpireDate(): boolean;
  clearExpireDate(): PAYMENT_REQUEST;

  getConfermed(): boolean;
  setConfermed(value: boolean): PAYMENT_REQUEST;
  hasConfermed(): boolean;
  clearConfermed(): PAYMENT_REQUEST;

  getRequestNumber(): string;
  setRequestNumber(value: string): PAYMENT_REQUEST;

  getSiteCode(): number;
  setSiteCode(value: number): PAYMENT_REQUEST;

  getStationNo(): number;
  setStationNo(value: number): PAYMENT_REQUEST;
  hasStationNo(): boolean;
  clearStationNo(): PAYMENT_REQUEST;

  getState(): QUEUE_STATUS;
  setState(value: QUEUE_STATUS): PAYMENT_REQUEST;
  hasState(): boolean;
  clearState(): PAYMENT_REQUEST;

  getCollectionMethod(): string;
  setCollectionMethod(value: string): PAYMENT_REQUEST;
  hasCollectionMethod(): boolean;
  clearCollectionMethod(): PAYMENT_REQUEST;

  getCancelledReason(): string;
  setCancelledReason(value: string): PAYMENT_REQUEST;
  hasCancelledReason(): boolean;
  clearCancelledReason(): PAYMENT_REQUEST;

  getCancelledBy(): string;
  setCancelledBy(value: string): PAYMENT_REQUEST;
  hasCancelledBy(): boolean;
  clearCancelledBy(): PAYMENT_REQUEST;

  getCancelledDate(): date_pb.MasDateTime | undefined;
  setCancelledDate(value?: date_pb.MasDateTime): PAYMENT_REQUEST;
  hasCancelledDate(): boolean;
  clearCancelledDate(): PAYMENT_REQUEST;

  getCollectionTransactionId(): string;
  setCollectionTransactionId(value: string): PAYMENT_REQUEST;
  hasCollectionTransactionId(): boolean;
  clearCollectionTransactionId(): PAYMENT_REQUEST;

  getCustomerType(): CUSTOMER_TYPE;
  setCustomerType(value: CUSTOMER_TYPE): PAYMENT_REQUEST;

  getCollectionDate(): date_pb.MasDateTime | undefined;
  setCollectionDate(value?: date_pb.MasDateTime): PAYMENT_REQUEST;
  hasCollectionDate(): boolean;
  clearCollectionDate(): PAYMENT_REQUEST;

  getHash(): string;
  setHash(value: string): PAYMENT_REQUEST;
  hasHash(): boolean;
  clearHash(): PAYMENT_REQUEST;

  getRecNo(): string;
  setRecNo(value: string): PAYMENT_REQUEST;
  hasRecNo(): boolean;
  clearRecNo(): PAYMENT_REQUEST;

  getCureency(): string;
  setCureency(value: string): PAYMENT_REQUEST;
  hasCureency(): boolean;
  clearCureency(): PAYMENT_REQUEST;

  getTaxAmount(): number;
  setTaxAmount(value: number): PAYMENT_REQUEST;
  hasTaxAmount(): boolean;
  clearTaxAmount(): PAYMENT_REQUEST;

  getAdminAmount(): number;
  setAdminAmount(value: number): PAYMENT_REQUEST;
  hasAdminAmount(): boolean;
  clearAdminAmount(): PAYMENT_REQUEST;

  getAppTypeName(): string;
  setAppTypeName(value: string): PAYMENT_REQUEST;
  hasAppTypeName(): boolean;
  clearAppTypeName(): PAYMENT_REQUEST;

  getFormNo(): string;
  setFormNo(value: string): PAYMENT_REQUEST;
  hasFormNo(): boolean;
  clearFormNo(): PAYMENT_REQUEST;

  getECode(): string;
  setECode(value: string): PAYMENT_REQUEST;
  hasECode(): boolean;
  clearECode(): PAYMENT_REQUEST;

  getModelId(): number;
  setModelId(value: number): PAYMENT_REQUEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAYMENT_REQUEST.AsObject;
  static toObject(includeInstance: boolean, msg: PAYMENT_REQUEST): PAYMENT_REQUEST.AsObject;
  static serializeBinaryToWriter(message: PAYMENT_REQUEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAYMENT_REQUEST;
  static deserializeBinaryFromReader(message: PAYMENT_REQUEST, reader: jspb.BinaryReader): PAYMENT_REQUEST;
}

export namespace PAYMENT_REQUEST {
  export type AsObject = {
    id?: number,
    amount: number,
    accountNumber?: string,
    customerName: string,
    customerAddress?: string,
    paymentDetails?: string,
    description: string,
    transType?: string,
    modelType?: string,
    requestDate?: date_pb.MasDateTime.AsObject,
    requestUser: string,
    expireDate?: date_pb.MasDateTime.AsObject,
    confermed?: boolean,
    requestNumber: string,
    siteCode: number,
    stationNo?: number,
    state?: QUEUE_STATUS,
    collectionMethod?: string,
    cancelledReason?: string,
    cancelledBy?: string,
    cancelledDate?: date_pb.MasDateTime.AsObject,
    collectionTransactionId?: string,
    customerType: CUSTOMER_TYPE,
    collectionDate?: date_pb.MasDateTime.AsObject,
    hash?: string,
    recNo?: string,
    cureency?: string,
    taxAmount?: number,
    adminAmount?: number,
    appTypeName?: string,
    formNo?: string,
    eCode?: string,
    modelId: number,
  }
}

export class MessageResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): MessageResponse;
  hasMessage(): boolean;
  clearMessage(): MessageResponse;

  getDone(): boolean;
  setDone(value: boolean): MessageResponse;
  hasDone(): boolean;
  clearDone(): MessageResponse;

  getId(): number;
  setId(value: number): MessageResponse;
  hasId(): boolean;
  clearId(): MessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    message?: string,
    done?: boolean,
    id?: number,
  }
}

export class PAY_EXTERNAL_MODULE extends jspb.Message {
  getId(): number;
  setId(value: number): PAY_EXTERNAL_MODULE;

  getName(): string;
  setName(value: string): PAY_EXTERNAL_MODULE;

  getDescription(): string;
  setDescription(value: string): PAY_EXTERNAL_MODULE;
  hasDescription(): boolean;
  clearDescription(): PAY_EXTERNAL_MODULE;

  getVersion(): number;
  setVersion(value: number): PAY_EXTERNAL_MODULE;
  hasVersion(): boolean;
  clearVersion(): PAY_EXTERNAL_MODULE;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): PAY_EXTERNAL_MODULE;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): PAY_EXTERNAL_MODULE;

  getPackageName(): string;
  setPackageName(value: string): PAY_EXTERNAL_MODULE;

  getServiceName(): string;
  setServiceName(value: string): PAY_EXTERNAL_MODULE;

  getIp(): string;
  setIp(value: string): PAY_EXTERNAL_MODULE;
  hasIp(): boolean;
  clearIp(): PAY_EXTERNAL_MODULE;

  getPort(): number;
  setPort(value: number): PAY_EXTERNAL_MODULE;
  hasPort(): boolean;
  clearPort(): PAY_EXTERNAL_MODULE;

  getPayInquirytypeList(): Array<PAY_InquiryTYPE>;
  setPayInquirytypeList(value: Array<PAY_InquiryTYPE>): PAY_EXTERNAL_MODULE;
  clearPayInquirytypeList(): PAY_EXTERNAL_MODULE;
  addPayInquirytype(value?: PAY_InquiryTYPE, index?: number): PAY_InquiryTYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAY_EXTERNAL_MODULE.AsObject;
  static toObject(includeInstance: boolean, msg: PAY_EXTERNAL_MODULE): PAY_EXTERNAL_MODULE.AsObject;
  static serializeBinaryToWriter(message: PAY_EXTERNAL_MODULE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAY_EXTERNAL_MODULE;
  static deserializeBinaryFromReader(message: PAY_EXTERNAL_MODULE, reader: jspb.BinaryReader): PAY_EXTERNAL_MODULE;
}

export namespace PAY_EXTERNAL_MODULE {
  export type AsObject = {
    id: number,
    name: string,
    description?: string,
    version?: number,
    descriptionEn?: string,
    packageName: string,
    serviceName: string,
    ip?: string,
    port?: number,
    payInquirytypeList: Array<PAY_InquiryTYPE.AsObject>,
  }
}

export class PAY_InquiryTYPE extends jspb.Message {
  getKeyId(): number;
  setKeyId(value: number): PAY_InquiryTYPE;

  getName(): string;
  setName(value: string): PAY_InquiryTYPE;

  getDescription(): string;
  setDescription(value: string): PAY_InquiryTYPE;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): PAY_InquiryTYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAY_InquiryTYPE.AsObject;
  static toObject(includeInstance: boolean, msg: PAY_InquiryTYPE): PAY_InquiryTYPE.AsObject;
  static serializeBinaryToWriter(message: PAY_InquiryTYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAY_InquiryTYPE;
  static deserializeBinaryFromReader(message: PAY_InquiryTYPE, reader: jspb.BinaryReader): PAY_InquiryTYPE;
}

export namespace PAY_InquiryTYPE {
  export type AsObject = {
    keyId: number,
    name: string,
    description: string,
    descriptionEn: string,
  }
}

export class MODULE_NAME extends jspb.Message {
  getName(): string;
  setName(value: string): MODULE_NAME;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MODULE_NAME.AsObject;
  static toObject(includeInstance: boolean, msg: MODULE_NAME): MODULE_NAME.AsObject;
  static serializeBinaryToWriter(message: MODULE_NAME, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MODULE_NAME;
  static deserializeBinaryFromReader(message: MODULE_NAME, reader: jspb.BinaryReader): MODULE_NAME;
}

export namespace MODULE_NAME {
  export type AsObject = {
    name: string,
  }
}

export class MODULE_ID_REQ extends jspb.Message {
  getId(): number;
  setId(value: number): MODULE_ID_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MODULE_ID_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: MODULE_ID_REQ): MODULE_ID_REQ.AsObject;
  static serializeBinaryToWriter(message: MODULE_ID_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MODULE_ID_REQ;
  static deserializeBinaryFromReader(message: MODULE_ID_REQ, reader: jspb.BinaryReader): MODULE_ID_REQ;
}

export namespace MODULE_ID_REQ {
  export type AsObject = {
    id: number,
  }
}

export class PAY_EXTERNAL_MODULES extends jspb.Message {
  getPayExternalModuleList(): Array<PAY_EXTERNAL_MODULE>;
  setPayExternalModuleList(value: Array<PAY_EXTERNAL_MODULE>): PAY_EXTERNAL_MODULES;
  clearPayExternalModuleList(): PAY_EXTERNAL_MODULES;
  addPayExternalModule(value?: PAY_EXTERNAL_MODULE, index?: number): PAY_EXTERNAL_MODULE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAY_EXTERNAL_MODULES.AsObject;
  static toObject(includeInstance: boolean, msg: PAY_EXTERNAL_MODULES): PAY_EXTERNAL_MODULES.AsObject;
  static serializeBinaryToWriter(message: PAY_EXTERNAL_MODULES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAY_EXTERNAL_MODULES;
  static deserializeBinaryFromReader(message: PAY_EXTERNAL_MODULES, reader: jspb.BinaryReader): PAY_EXTERNAL_MODULES;
}

export namespace PAY_EXTERNAL_MODULES {
  export type AsObject = {
    payExternalModuleList: Array<PAY_EXTERNAL_MODULE.AsObject>,
  }
}

export class POST_AMOUT_TO_BILLING_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): POST_AMOUT_TO_BILLING_RQ;

  getAmount(): number;
  setAmount(value: number): POST_AMOUT_TO_BILLING_RQ;

  getTransType(): number;
  setTransType(value: number): POST_AMOUT_TO_BILLING_RQ;

  getTransStype(): number;
  setTransStype(value: number): POST_AMOUT_TO_BILLING_RQ;

  getMemoField(): string;
  setMemoField(value: string): POST_AMOUT_TO_BILLING_RQ;

  getEffectDate(): date_pb.MasDateTime | undefined;
  setEffectDate(value?: date_pb.MasDateTime): POST_AMOUT_TO_BILLING_RQ;
  hasEffectDate(): boolean;
  clearEffectDate(): POST_AMOUT_TO_BILLING_RQ;

  getTransactionTypes(): number;
  setTransactionTypes(value: number): POST_AMOUT_TO_BILLING_RQ;
  hasTransactionTypes(): boolean;
  clearTransactionTypes(): POST_AMOUT_TO_BILLING_RQ;

  getNoUnits(): number;
  setNoUnits(value: number): POST_AMOUT_TO_BILLING_RQ;
  hasNoUnits(): boolean;
  clearNoUnits(): POST_AMOUT_TO_BILLING_RQ;

  getFeeId(): number;
  setFeeId(value: number): POST_AMOUT_TO_BILLING_RQ;
  hasFeeId(): boolean;
  clearFeeId(): POST_AMOUT_TO_BILLING_RQ;

  getForDebit(): boolean;
  setForDebit(value: boolean): POST_AMOUT_TO_BILLING_RQ;
  hasForDebit(): boolean;
  clearForDebit(): POST_AMOUT_TO_BILLING_RQ;

  getMainTransactionTypes(): number;
  setMainTransactionTypes(value: number): POST_AMOUT_TO_BILLING_RQ;
  hasMainTransactionTypes(): boolean;
  clearMainTransactionTypes(): POST_AMOUT_TO_BILLING_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): POST_AMOUT_TO_BILLING_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: POST_AMOUT_TO_BILLING_RQ): POST_AMOUT_TO_BILLING_RQ.AsObject;
  static serializeBinaryToWriter(message: POST_AMOUT_TO_BILLING_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): POST_AMOUT_TO_BILLING_RQ;
  static deserializeBinaryFromReader(message: POST_AMOUT_TO_BILLING_RQ, reader: jspb.BinaryReader): POST_AMOUT_TO_BILLING_RQ;
}

export namespace POST_AMOUT_TO_BILLING_RQ {
  export type AsObject = {
    custkey: string,
    amount: number,
    transType: number,
    transStype: number,
    memoField: string,
    effectDate?: date_pb.MasDateTime.AsObject,
    transactionTypes?: number,
    noUnits?: number,
    feeId?: number,
    forDebit?: boolean,
    mainTransactionTypes?: number,
  }
}

export class READING_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): READING_RQ;

  getTblInvoicedReadingsList(): Array<TBL_INVOICED_READINGS>;
  setTblInvoicedReadingsList(value: Array<TBL_INVOICED_READINGS>): READING_RQ;
  clearTblInvoicedReadingsList(): READING_RQ;
  addTblInvoicedReadings(value?: TBL_INVOICED_READINGS, index?: number): TBL_INVOICED_READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): READING_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: READING_RQ): READING_RQ.AsObject;
  static serializeBinaryToWriter(message: READING_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): READING_RQ;
  static deserializeBinaryFromReader(message: READING_RQ, reader: jspb.BinaryReader): READING_RQ;
}

export namespace READING_RQ {
  export type AsObject = {
    custkey: string,
    tblInvoicedReadingsList: Array<TBL_INVOICED_READINGS.AsObject>,
  }
}

export class TBL_INVOICED_READINGS extends jspb.Message {
  getSelectedRead(): boolean;
  setSelectedRead(value: boolean): TBL_INVOICED_READINGS;

  getArchived(): number;
  setArchived(value: number): TBL_INVOICED_READINGS;

  getMeterId(): number;
  setMeterId(value: number): TBL_INVOICED_READINGS;
  hasMeterId(): boolean;
  clearMeterId(): TBL_INVOICED_READINGS;

  getMeterRef(): string;
  setMeterRef(value: string): TBL_INVOICED_READINGS;

  getMeterType(): string;
  setMeterType(value: string): TBL_INVOICED_READINGS;

  getReadingNo(): number;
  setReadingNo(value: number): TBL_INVOICED_READINGS;

  getCrRead(): number;
  setCrRead(value: number): TBL_INVOICED_READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_INVOICED_READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_INVOICED_READINGS): TBL_INVOICED_READINGS.AsObject;
  static serializeBinaryToWriter(message: TBL_INVOICED_READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_INVOICED_READINGS;
  static deserializeBinaryFromReader(message: TBL_INVOICED_READINGS, reader: jspb.BinaryReader): TBL_INVOICED_READINGS;
}

export namespace TBL_INVOICED_READINGS {
  export type AsObject = {
    selectedRead: boolean,
    archived: number,
    meterId?: number,
    meterRef: string,
    meterType: string,
    readingNo: number,
    crRead: number,
  }
}

export class TBL_SELECTED_INVOICED_READINGS extends jspb.Message {
  getSelectedRead(): boolean;
  setSelectedRead(value: boolean): TBL_SELECTED_INVOICED_READINGS;

  getArchived(): number;
  setArchived(value: number): TBL_SELECTED_INVOICED_READINGS;

  getMeterId(): number;
  setMeterId(value: number): TBL_SELECTED_INVOICED_READINGS;
  hasMeterId(): boolean;
  clearMeterId(): TBL_SELECTED_INVOICED_READINGS;

  getMeterRef(): string;
  setMeterRef(value: string): TBL_SELECTED_INVOICED_READINGS;

  getMeterType(): string;
  setMeterType(value: string): TBL_SELECTED_INVOICED_READINGS;

  getReadingNo(): number;
  setReadingNo(value: number): TBL_SELECTED_INVOICED_READINGS;

  getCrRead(): number;
  setCrRead(value: number): TBL_SELECTED_INVOICED_READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_SELECTED_INVOICED_READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_SELECTED_INVOICED_READINGS): TBL_SELECTED_INVOICED_READINGS.AsObject;
  static serializeBinaryToWriter(message: TBL_SELECTED_INVOICED_READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_SELECTED_INVOICED_READINGS;
  static deserializeBinaryFromReader(message: TBL_SELECTED_INVOICED_READINGS, reader: jspb.BinaryReader): TBL_SELECTED_INVOICED_READINGS;
}

export namespace TBL_SELECTED_INVOICED_READINGS {
  export type AsObject = {
    selectedRead: boolean,
    archived: number,
    meterId?: number,
    meterRef: string,
    meterType: string,
    readingNo: number,
    crRead: number,
  }
}

export class ArrTBL_INVOICED_READINGS extends jspb.Message {
  getTblInvoicedReadingsList(): Array<TBL_INVOICED_READINGS>;
  setTblInvoicedReadingsList(value: Array<TBL_INVOICED_READINGS>): ArrTBL_INVOICED_READINGS;
  clearTblInvoicedReadingsList(): ArrTBL_INVOICED_READINGS;
  addTblInvoicedReadings(value?: TBL_INVOICED_READINGS, index?: number): TBL_INVOICED_READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTBL_INVOICED_READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTBL_INVOICED_READINGS): ArrTBL_INVOICED_READINGS.AsObject;
  static serializeBinaryToWriter(message: ArrTBL_INVOICED_READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTBL_INVOICED_READINGS;
  static deserializeBinaryFromReader(message: ArrTBL_INVOICED_READINGS, reader: jspb.BinaryReader): ArrTBL_INVOICED_READINGS;
}

export namespace ArrTBL_INVOICED_READINGS {
  export type AsObject = {
    tblInvoicedReadingsList: Array<TBL_INVOICED_READINGS.AsObject>,
  }
}

export class CANCEL_INVOICED_READING_RQ extends jspb.Message {
  getTblSelectedInvoicedReadingsList(): Array<TBL_SELECTED_INVOICED_READINGS>;
  setTblSelectedInvoicedReadingsList(value: Array<TBL_SELECTED_INVOICED_READINGS>): CANCEL_INVOICED_READING_RQ;
  clearTblSelectedInvoicedReadingsList(): CANCEL_INVOICED_READING_RQ;
  addTblSelectedInvoicedReadings(value?: TBL_SELECTED_INVOICED_READINGS, index?: number): TBL_SELECTED_INVOICED_READINGS;

  getWaterTransType(): number;
  setWaterTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getWaterTransStype(): number;
  setWaterTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getRevWaterTransType(): number;
  setRevWaterTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getRevWaterTransStype(): number;
  setRevWaterTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getSewerTransType(): number;
  setSewerTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getSewerTransStype(): number;
  setSewerTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getRevSewerTransType(): number;
  setRevSewerTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getRevSewerTransStype(): number;
  setRevSewerTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getBasicTransType(): number;
  setBasicTransType(value: number): CANCEL_INVOICED_READING_RQ;
  hasBasicTransType(): boolean;
  clearBasicTransType(): CANCEL_INVOICED_READING_RQ;

  getBasicTransStype(): number;
  setBasicTransStype(value: number): CANCEL_INVOICED_READING_RQ;
  hasBasicTransStype(): boolean;
  clearBasicTransStype(): CANCEL_INVOICED_READING_RQ;

  getRevBasicTransType(): number;
  setRevBasicTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getRevBasicTransStype(): number;
  setRevBasicTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getTanzeemTransType(): number;
  setTanzeemTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getTanzeemTransStype(): number;
  setTanzeemTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getRevTanzeemTransType(): number;
  setRevTanzeemTransType(value: number): CANCEL_INVOICED_READING_RQ;

  getRevTanzeemTransStype(): number;
  setRevTanzeemTransStype(value: number): CANCEL_INVOICED_READING_RQ;

  getCustkey(): string;
  setCustkey(value: string): CANCEL_INVOICED_READING_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCEL_INVOICED_READING_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: CANCEL_INVOICED_READING_RQ): CANCEL_INVOICED_READING_RQ.AsObject;
  static serializeBinaryToWriter(message: CANCEL_INVOICED_READING_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCEL_INVOICED_READING_RQ;
  static deserializeBinaryFromReader(message: CANCEL_INVOICED_READING_RQ, reader: jspb.BinaryReader): CANCEL_INVOICED_READING_RQ;
}

export namespace CANCEL_INVOICED_READING_RQ {
  export type AsObject = {
    tblSelectedInvoicedReadingsList: Array<TBL_SELECTED_INVOICED_READINGS.AsObject>,
    waterTransType: number,
    waterTransStype: number,
    revWaterTransType: number,
    revWaterTransStype: number,
    sewerTransType: number,
    sewerTransStype: number,
    revSewerTransType: number,
    revSewerTransStype: number,
    basicTransType?: number,
    basicTransStype?: number,
    revBasicTransType: number,
    revBasicTransStype: number,
    tanzeemTransType: number,
    tanzeemTransStype: number,
    revTanzeemTransType: number,
    revTanzeemTransStype: number,
    custkey: string,
  }
}

export class CST_AGREEM_TYPES extends jspb.Message {
  getId(): number;
  setId(value: number): CST_AGREEM_TYPES;

  getAgreemDescription(): string;
  setAgreemDescription(value: string): CST_AGREEM_TYPES;

  getAgrmTransType(): number;
  setAgrmTransType(value: number): CST_AGREEM_TYPES;

  getAgrmTransStype(): number;
  setAgrmTransStype(value: number): CST_AGREEM_TYPES;

  getRevTransType(): number;
  setRevTransType(value: number): CST_AGREEM_TYPES;

  getRevTransStype(): number;
  setRevTransStype(value: number): CST_AGREEM_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_AGREEM_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: CST_AGREEM_TYPES): CST_AGREEM_TYPES.AsObject;
  static serializeBinaryToWriter(message: CST_AGREEM_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_AGREEM_TYPES;
  static deserializeBinaryFromReader(message: CST_AGREEM_TYPES, reader: jspb.BinaryReader): CST_AGREEM_TYPES;
}

export namespace CST_AGREEM_TYPES {
  export type AsObject = {
    id: number,
    agreemDescription: string,
    agrmTransType: number,
    agrmTransStype: number,
    revTransType: number,
    revTransStype: number,
  }
}

export class ArrCST_AGREEM_TYPES extends jspb.Message {
  getCstAgreemTypesList(): Array<CST_AGREEM_TYPES>;
  setCstAgreemTypesList(value: Array<CST_AGREEM_TYPES>): ArrCST_AGREEM_TYPES;
  clearCstAgreemTypesList(): ArrCST_AGREEM_TYPES;
  addCstAgreemTypes(value?: CST_AGREEM_TYPES, index?: number): CST_AGREEM_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCST_AGREEM_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCST_AGREEM_TYPES): ArrCST_AGREEM_TYPES.AsObject;
  static serializeBinaryToWriter(message: ArrCST_AGREEM_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCST_AGREEM_TYPES;
  static deserializeBinaryFromReader(message: ArrCST_AGREEM_TYPES, reader: jspb.BinaryReader): ArrCST_AGREEM_TYPES;
}

export namespace ArrCST_AGREEM_TYPES {
  export type AsObject = {
    cstAgreemTypesList: Array<CST_AGREEM_TYPES.AsObject>,
  }
}

export class InstallAmountReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): InstallAmountReq;

  getAmount(): number;
  setAmount(value: number): InstallAmountReq;

  getInterst(): number;
  setInterst(value: number): InstallAmountReq;

  getNoMonths(): number;
  setNoMonths(value: number): InstallAmountReq;

  getAgreemType(): number;
  setAgreemType(value: number): InstallAmountReq;

  getInputFirstInstallDate(): boolean;
  setInputFirstInstallDate(value: boolean): InstallAmountReq;

  getFirstInstallmentDate(): date_pb.MasDateTime | undefined;
  setFirstInstallmentDate(value?: date_pb.MasDateTime): InstallAmountReq;
  hasFirstInstallmentDate(): boolean;
  clearFirstInstallmentDate(): InstallAmountReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstallAmountReq.AsObject;
  static toObject(includeInstance: boolean, msg: InstallAmountReq): InstallAmountReq.AsObject;
  static serializeBinaryToWriter(message: InstallAmountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstallAmountReq;
  static deserializeBinaryFromReader(message: InstallAmountReq, reader: jspb.BinaryReader): InstallAmountReq;
}

export namespace InstallAmountReq {
  export type AsObject = {
    custkey: string,
    amount: number,
    interst: number,
    noMonths: number,
    agreemType: number,
    inputFirstInstallDate: boolean,
    firstInstallmentDate?: date_pb.MasDateTime.AsObject,
  }
}

export class ExpPayments extends jspb.Message {
  getCstCustomers(): CST_CUSTOMERS | undefined;
  setCstCustomers(value?: CST_CUSTOMERS): ExpPayments;
  hasCstCustomers(): boolean;
  clearCstCustomers(): ExpPayments;

  getModuleId(): number;
  setModuleId(value: number): ExpPayments;

  getModuleName(): string;
  setModuleName(value: string): ExpPayments;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpPayments.AsObject;
  static toObject(includeInstance: boolean, msg: ExpPayments): ExpPayments.AsObject;
  static serializeBinaryToWriter(message: ExpPayments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpPayments;
  static deserializeBinaryFromReader(message: ExpPayments, reader: jspb.BinaryReader): ExpPayments;
}

export namespace ExpPayments {
  export type AsObject = {
    cstCustomers?: CST_CUSTOMERS.AsObject,
    moduleId: number,
    moduleName: string,
  }
}

export class AllTransactionTypes extends jspb.Message {
  getTransType(): number;
  setTransType(value: number): AllTransactionTypes;

  getTransStype(): number;
  setTransStype(value: number): AllTransactionTypes;

  getDescription(): string;
  setDescription(value: string): AllTransactionTypes;

  getAllowCredit(): number;
  setAllowCredit(value: number): AllTransactionTypes;
  hasAllowCredit(): boolean;
  clearAllowCredit(): AllTransactionTypes;

  getAllowDebit(): number;
  setAllowDebit(value: number): AllTransactionTypes;
  hasAllowDebit(): boolean;
  clearAllowDebit(): AllTransactionTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllTransactionTypes.AsObject;
  static toObject(includeInstance: boolean, msg: AllTransactionTypes): AllTransactionTypes.AsObject;
  static serializeBinaryToWriter(message: AllTransactionTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllTransactionTypes;
  static deserializeBinaryFromReader(message: AllTransactionTypes, reader: jspb.BinaryReader): AllTransactionTypes;
}

export namespace AllTransactionTypes {
  export type AsObject = {
    transType: number,
    transStype: number,
    description: string,
    allowCredit?: number,
    allowDebit?: number,
  }
}

export class ArrAllTransactionTypes extends jspb.Message {
  getAlltransactiontypesList(): Array<AllTransactionTypes>;
  setAlltransactiontypesList(value: Array<AllTransactionTypes>): ArrAllTransactionTypes;
  clearAlltransactiontypesList(): ArrAllTransactionTypes;
  addAlltransactiontypes(value?: AllTransactionTypes, index?: number): AllTransactionTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrAllTransactionTypes.AsObject;
  static toObject(includeInstance: boolean, msg: ArrAllTransactionTypes): ArrAllTransactionTypes.AsObject;
  static serializeBinaryToWriter(message: ArrAllTransactionTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrAllTransactionTypes;
  static deserializeBinaryFromReader(message: ArrAllTransactionTypes, reader: jspb.BinaryReader): ArrAllTransactionTypes;
}

export namespace ArrAllTransactionTypes {
  export type AsObject = {
    alltransactiontypesList: Array<AllTransactionTypes.AsObject>,
  }
}

export class CustomerDebt extends jspb.Message {
  getUnBilledAmount(): number;
  setUnBilledAmount(value: number): CustomerDebt;

  getBilledAmount(): number;
  setBilledAmount(value: number): CustomerDebt;

  getRemainingInstallments(): number;
  setRemainingInstallments(value: number): CustomerDebt;

  getTotAmount(): number;
  setTotAmount(value: number): CustomerDebt;

  getHasUnPostedRec(): boolean;
  setHasUnPostedRec(value: boolean): CustomerDebt;
  hasHasUnPostedRec(): boolean;
  clearHasUnPostedRec(): CustomerDebt;

  getUnPostedAmount(): number;
  setUnPostedAmount(value: number): CustomerDebt;
  hasUnPostedAmount(): boolean;
  clearUnPostedAmount(): CustomerDebt;

  getHasUnCommitedCollections(): boolean;
  setHasUnCommitedCollections(value: boolean): CustomerDebt;
  hasHasUnCommitedCollections(): boolean;
  clearHasUnCommitedCollections(): CustomerDebt;

  getUnCommitedCollectionsAmt(): number;
  setUnCommitedCollectionsAmt(value: number): CustomerDebt;
  hasUnCommitedCollectionsAmt(): boolean;
  clearUnCommitedCollectionsAmt(): CustomerDebt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerDebt.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerDebt): CustomerDebt.AsObject;
  static serializeBinaryToWriter(message: CustomerDebt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerDebt;
  static deserializeBinaryFromReader(message: CustomerDebt, reader: jspb.BinaryReader): CustomerDebt;
}

export namespace CustomerDebt {
  export type AsObject = {
    unBilledAmount: number,
    billedAmount: number,
    remainingInstallments: number,
    totAmount: number,
    hasUnPostedRec?: boolean,
    unPostedAmount?: number,
    hasUnCommitedCollections?: boolean,
    unCommitedCollectionsAmt?: number,
  }
}

export class CutConnectionForPeriod extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CutConnectionForPeriod;

  getStartDate(): date_pb.MasDateTime | undefined;
  setStartDate(value?: date_pb.MasDateTime): CutConnectionForPeriod;
  hasStartDate(): boolean;
  clearStartDate(): CutConnectionForPeriod;

  getEndDate(): date_pb.MasDateTime | undefined;
  setEndDate(value?: date_pb.MasDateTime): CutConnectionForPeriod;
  hasEndDate(): boolean;
  clearEndDate(): CutConnectionForPeriod;

  getNoMonths(): number;
  setNoMonths(value: number): CutConnectionForPeriod;

  getReconnected(): number;
  setReconnected(value: number): CutConnectionForPeriod;

  getAmount(): number;
  setAmount(value: number): CutConnectionForPeriod;
  hasAmount(): boolean;
  clearAmount(): CutConnectionForPeriod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CutConnectionForPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: CutConnectionForPeriod): CutConnectionForPeriod.AsObject;
  static serializeBinaryToWriter(message: CutConnectionForPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CutConnectionForPeriod;
  static deserializeBinaryFromReader(message: CutConnectionForPeriod, reader: jspb.BinaryReader): CutConnectionForPeriod;
}

export namespace CutConnectionForPeriod {
  export type AsObject = {
    custkey: string,
    startDate?: date_pb.MasDateTime.AsObject,
    endDate?: date_pb.MasDateTime.AsObject,
    noMonths: number,
    reconnected: number,
    amount?: number,
  }
}

export class CustomerAgreems extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustomerAgreems;
  hasCustkey(): boolean;
  clearCustkey(): CustomerAgreems;

  getOldKey(): string;
  setOldKey(value: string): CustomerAgreems;
  hasOldKey(): boolean;
  clearOldKey(): CustomerAgreems;

  getSurname(): string;
  setSurname(value: string): CustomerAgreems;
  hasSurname(): boolean;
  clearSurname(): CustomerAgreems;

  getAddress(): string;
  setAddress(value: string): CustomerAgreems;
  hasAddress(): boolean;
  clearAddress(): CustomerAgreems;

  getAgreemsList(): Array<CustAgreem>;
  setAgreemsList(value: Array<CustAgreem>): CustomerAgreems;
  clearAgreemsList(): CustomerAgreems;
  addAgreems(value?: CustAgreem, index?: number): CustAgreem;

  getInstallsList(): Array<CustInstalls>;
  setInstallsList(value: Array<CustInstalls>): CustomerAgreems;
  clearInstallsList(): CustomerAgreems;
  addInstalls(value?: CustInstalls, index?: number): CustInstalls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAgreems.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAgreems): CustomerAgreems.AsObject;
  static serializeBinaryToWriter(message: CustomerAgreems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAgreems;
  static deserializeBinaryFromReader(message: CustomerAgreems, reader: jspb.BinaryReader): CustomerAgreems;
}

export namespace CustomerAgreems {
  export type AsObject = {
    custkey?: string,
    oldKey?: string,
    surname?: string,
    address?: string,
    agreemsList: Array<CustAgreem.AsObject>,
    installsList: Array<CustInstalls.AsObject>,
  }
}

export class CustInstalls extends jspb.Message {
  getAgrmNo(): number;
  setAgrmNo(value: number): CustInstalls;

  getCustkey(): string;
  setCustkey(value: string): CustInstalls;

  getAmount(): number;
  setAmount(value: number): CustInstalls;

  getChargeDate(): date_pb.MasDateTime | undefined;
  setChargeDate(value?: date_pb.MasDateTime): CustInstalls;
  hasChargeDate(): boolean;
  clearChargeDate(): CustInstalls;

  getInstallmentNo(): number;
  setInstallmentNo(value: number): CustInstalls;
  hasInstallmentNo(): boolean;
  clearInstallmentNo(): CustInstalls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustInstalls.AsObject;
  static toObject(includeInstance: boolean, msg: CustInstalls): CustInstalls.AsObject;
  static serializeBinaryToWriter(message: CustInstalls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustInstalls;
  static deserializeBinaryFromReader(message: CustInstalls, reader: jspb.BinaryReader): CustInstalls;
}

export namespace CustInstalls {
  export type AsObject = {
    agrmNo: number,
    custkey: string,
    amount: number,
    chargeDate?: date_pb.MasDateTime.AsObject,
    installmentNo?: number,
  }
}

export class CustAgreem extends jspb.Message {
  getAgrmNo(): number;
  setAgrmNo(value: number): CustAgreem;

  getCustkey(): string;
  setCustkey(value: string): CustAgreem;

  getAgrmRef(): string;
  setAgrmRef(value: string): CustAgreem;
  hasAgrmRef(): boolean;
  clearAgrmRef(): CustAgreem;

  getEffDate(): date_pb.MasDateTime | undefined;
  setEffDate(value?: date_pb.MasDateTime): CustAgreem;
  hasEffDate(): boolean;
  clearEffDate(): CustAgreem;

  getCompletionDate(): date_pb.MasDateTime | undefined;
  setCompletionDate(value?: date_pb.MasDateTime): CustAgreem;
  hasCompletionDate(): boolean;
  clearCompletionDate(): CustAgreem;

  getAgrmValue(): number;
  setAgrmValue(value: number): CustAgreem;
  hasAgrmValue(): boolean;
  clearAgrmValue(): CustAgreem;

  getAgrmImmpay(): number;
  setAgrmImmpay(value: number): CustAgreem;
  hasAgrmImmpay(): boolean;
  clearAgrmImmpay(): CustAgreem;

  getImmpayRcptno(): string;
  setImmpayRcptno(value: string): CustAgreem;
  hasImmpayRcptno(): boolean;
  clearImmpayRcptno(): CustAgreem;

  getNoInstalments(): number;
  setNoInstalments(value: number): CustAgreem;
  hasNoInstalments(): boolean;
  clearNoInstalments(): CustAgreem;

  getReminderNoInstalments(): number;
  setReminderNoInstalments(value: number): CustAgreem;
  hasReminderNoInstalments(): boolean;
  clearReminderNoInstalments(): CustAgreem;

  getReminderAmount(): number;
  setReminderAmount(value: number): CustAgreem;
  hasReminderAmount(): boolean;
  clearReminderAmount(): CustAgreem;

  getInstlmAmount(): number;
  setInstlmAmount(value: number): CustAgreem;
  hasInstlmAmount(): boolean;
  clearInstlmAmount(): CustAgreem;

  getAgrmType(): number;
  setAgrmType(value: number): CustAgreem;
  hasAgrmType(): boolean;
  clearAgrmType(): CustAgreem;

  getAgrmStatus(): number;
  setAgrmStatus(value: number): CustAgreem;
  hasAgrmStatus(): boolean;
  clearAgrmStatus(): CustAgreem;

  getTrnsType(): number;
  setTrnsType(value: number): CustAgreem;
  hasTrnsType(): boolean;
  clearTrnsType(): CustAgreem;

  getTrnsStype(): number;
  setTrnsStype(value: number): CustAgreem;
  hasTrnsStype(): boolean;
  clearTrnsStype(): CustAgreem;

  getAgremName(): string;
  setAgremName(value: string): CustAgreem;
  hasAgremName(): boolean;
  clearAgremName(): CustAgreem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustAgreem.AsObject;
  static toObject(includeInstance: boolean, msg: CustAgreem): CustAgreem.AsObject;
  static serializeBinaryToWriter(message: CustAgreem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustAgreem;
  static deserializeBinaryFromReader(message: CustAgreem, reader: jspb.BinaryReader): CustAgreem;
}

export namespace CustAgreem {
  export type AsObject = {
    agrmNo: number,
    custkey: string,
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
    agremName?: string,
  }
}

export class TBL_CUST_AGREEM extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_CUST_AGREEM;

  getAgreemNo(): number;
  setAgreemNo(value: number): TBL_CUST_AGREEM;

  getAgreemName(): string;
  setAgreemName(value: string): TBL_CUST_AGREEM;
  hasAgreemName(): boolean;
  clearAgreemName(): TBL_CUST_AGREEM;

  getReminderAmount(): number;
  setReminderAmount(value: number): TBL_CUST_AGREEM;

  getReminderNoQests(): number;
  setReminderNoQests(value: number): TBL_CUST_AGREEM;

  getMemoField(): string;
  setMemoField(value: string): TBL_CUST_AGREEM;

  getSelectedAgreem(): boolean;
  setSelectedAgreem(value: boolean): TBL_CUST_AGREEM;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_CUST_AGREEM.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_CUST_AGREEM): TBL_CUST_AGREEM.AsObject;
  static serializeBinaryToWriter(message: TBL_CUST_AGREEM, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_CUST_AGREEM;
  static deserializeBinaryFromReader(message: TBL_CUST_AGREEM, reader: jspb.BinaryReader): TBL_CUST_AGREEM;
}

export namespace TBL_CUST_AGREEM {
  export type AsObject = {
    custkey: string,
    agreemNo: number,
    agreemName?: string,
    reminderAmount: number,
    reminderNoQests: number,
    memoField: string,
    selectedAgreem: boolean,
  }
}

export class CancelAgreemsReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CancelAgreemsReq;

  getTblCustAgreemList(): Array<TBL_CUST_AGREEM>;
  setTblCustAgreemList(value: Array<TBL_CUST_AGREEM>): CancelAgreemsReq;
  clearTblCustAgreemList(): CancelAgreemsReq;
  addTblCustAgreem(value?: TBL_CUST_AGREEM, index?: number): TBL_CUST_AGREEM;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): CancelAgreemsReq;
  hasTrace(): boolean;
  clearTrace(): CancelAgreemsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelAgreemsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CancelAgreemsReq): CancelAgreemsReq.AsObject;
  static serializeBinaryToWriter(message: CancelAgreemsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelAgreemsReq;
  static deserializeBinaryFromReader(message: CancelAgreemsReq, reader: jspb.BinaryReader): CancelAgreemsReq;
}

export namespace CancelAgreemsReq {
  export type AsObject = {
    custkey: string,
    tblCustAgreemList: Array<TBL_CUST_AGREEM.AsObject>,
    trace?: APP_TRACER.AsObject,
  }
}

export class TBL_FINANCE_TRANS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_FINANCE_TRANS;

  getTransNo(): number;
  setTransNo(value: number): TBL_FINANCE_TRANS;

  getTransName(): string;
  setTransName(value: string): TBL_FINANCE_TRANS;

  getAmount(): number;
  setAmount(value: number): TBL_FINANCE_TRANS;

  getSelectedTransaction(): boolean;
  setSelectedTransaction(value: boolean): TBL_FINANCE_TRANS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_FINANCE_TRANS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_FINANCE_TRANS): TBL_FINANCE_TRANS.AsObject;
  static serializeBinaryToWriter(message: TBL_FINANCE_TRANS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_FINANCE_TRANS;
  static deserializeBinaryFromReader(message: TBL_FINANCE_TRANS, reader: jspb.BinaryReader): TBL_FINANCE_TRANS;
}

export namespace TBL_FINANCE_TRANS {
  export type AsObject = {
    custkey: string,
    transNo: number,
    transName: string,
    amount: number,
    selectedTransaction: boolean,
  }
}

export class CANCEL_FINANCE_TRANS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CANCEL_FINANCE_TRANS;

  getSurname(): string;
  setSurname(value: string): CANCEL_FINANCE_TRANS;

  getUaAddress(): string;
  setUaAddress(value: string): CANCEL_FINANCE_TRANS;

  getTblFinanceTransList(): Array<TBL_FINANCE_TRANS>;
  setTblFinanceTransList(value: Array<TBL_FINANCE_TRANS>): CANCEL_FINANCE_TRANS;
  clearTblFinanceTransList(): CANCEL_FINANCE_TRANS;
  addTblFinanceTrans(value?: TBL_FINANCE_TRANS, index?: number): TBL_FINANCE_TRANS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCEL_FINANCE_TRANS.AsObject;
  static toObject(includeInstance: boolean, msg: CANCEL_FINANCE_TRANS): CANCEL_FINANCE_TRANS.AsObject;
  static serializeBinaryToWriter(message: CANCEL_FINANCE_TRANS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCEL_FINANCE_TRANS;
  static deserializeBinaryFromReader(message: CANCEL_FINANCE_TRANS, reader: jspb.BinaryReader): CANCEL_FINANCE_TRANS;
}

export namespace CANCEL_FINANCE_TRANS {
  export type AsObject = {
    custkey: string,
    surname: string,
    uaAddress: string,
    tblFinanceTransList: Array<TBL_FINANCE_TRANS.AsObject>,
  }
}

export class CHANGE_OWNERSHIP_RQ extends jspb.Message {
  getOldCustkey(): string;
  setOldCustkey(value: string): CHANGE_OWNERSHIP_RQ;

  getOldSurname(): string;
  setOldSurname(value: string): CHANGE_OWNERSHIP_RQ;

  getSurname(): string;
  setSurname(value: string): CHANGE_OWNERSHIP_RQ;

  getUaAddress(): string;
  setUaAddress(value: string): CHANGE_OWNERSHIP_RQ;

  getCustkey(): string;
  setCustkey(value: string): CHANGE_OWNERSHIP_RQ;

  getNid(): string;
  setNid(value: string): CHANGE_OWNERSHIP_RQ;

  getMobileNo(): string;
  setMobileNo(value: string): CHANGE_OWNERSHIP_RQ;

  getTermsVoilent(): boolean;
  setTermsVoilent(value: boolean): CHANGE_OWNERSHIP_RQ;
  hasTermsVoilent(): boolean;
  clearTermsVoilent(): CHANGE_OWNERSHIP_RQ;

  getConsumptionInsurance(): number;
  setConsumptionInsurance(value: number): CHANGE_OWNERSHIP_RQ;
  hasConsumptionInsurance(): boolean;
  clearConsumptionInsurance(): CHANGE_OWNERSHIP_RQ;

  getNetworkConnectivityValue(): number;
  setNetworkConnectivityValue(value: number): CHANGE_OWNERSHIP_RQ;
  hasNetworkConnectivityValue(): boolean;
  clearNetworkConnectivityValue(): CHANGE_OWNERSHIP_RQ;

  getInsuranceDiff(): number;
  setInsuranceDiff(value: number): CHANGE_OWNERSHIP_RQ;
  hasInsuranceDiff(): boolean;
  clearInsuranceDiff(): CHANGE_OWNERSHIP_RQ;

  getBuildingWaterValue(): number;
  setBuildingWaterValue(value: number): CHANGE_OWNERSHIP_RQ;
  hasBuildingWaterValue(): boolean;
  clearBuildingWaterValue(): CHANGE_OWNERSHIP_RQ;

  getMustCheck(): boolean;
  setMustCheck(value: boolean): CHANGE_OWNERSHIP_RQ;
  hasMustCheck(): boolean;
  clearMustCheck(): CHANGE_OWNERSHIP_RQ;

  getIsPrepaied(): boolean;
  setIsPrepaied(value: boolean): CHANGE_OWNERSHIP_RQ;
  hasIsPrepaied(): boolean;
  clearIsPrepaied(): CHANGE_OWNERSHIP_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHANGE_OWNERSHIP_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: CHANGE_OWNERSHIP_RQ): CHANGE_OWNERSHIP_RQ.AsObject;
  static serializeBinaryToWriter(message: CHANGE_OWNERSHIP_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHANGE_OWNERSHIP_RQ;
  static deserializeBinaryFromReader(message: CHANGE_OWNERSHIP_RQ, reader: jspb.BinaryReader): CHANGE_OWNERSHIP_RQ;
}

export namespace CHANGE_OWNERSHIP_RQ {
  export type AsObject = {
    oldCustkey: string,
    oldSurname: string,
    surname: string,
    uaAddress: string,
    custkey: string,
    nid: string,
    mobileNo: string,
    termsVoilent?: boolean,
    consumptionInsurance?: number,
    networkConnectivityValue?: number,
    insuranceDiff?: number,
    buildingWaterValue?: number,
    mustCheck?: boolean,
    isPrepaied?: boolean,
  }
}

export class CHANGE_OWNERSHIP_NO_NEW_ACCOUNT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getOldSurname(): string;
  setOldSurname(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getSurname(): string;
  setSurname(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getUaAddress(): string;
  setUaAddress(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getNid(): string;
  setNid(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getMobileNo(): string;
  setMobileNo(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getTermsVoilent(): boolean;
  setTermsVoilent(value: boolean): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasTermsVoilent(): boolean;
  clearTermsVoilent(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getConsumptionInsurance(): number;
  setConsumptionInsurance(value: number): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasConsumptionInsurance(): boolean;
  clearConsumptionInsurance(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getNetworkConnectivityValue(): number;
  setNetworkConnectivityValue(value: number): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasNetworkConnectivityValue(): boolean;
  clearNetworkConnectivityValue(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getInsuranceDiff(): number;
  setInsuranceDiff(value: number): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasInsuranceDiff(): boolean;
  clearInsuranceDiff(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getBuildingWaterValue(): number;
  setBuildingWaterValue(value: number): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasBuildingWaterValue(): boolean;
  clearBuildingWaterValue(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getOldNid(): string;
  setOldNid(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasOldNid(): boolean;
  clearOldNid(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  getOldMobileNo(): string;
  setOldMobileNo(value: string): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  hasOldMobileNo(): boolean;
  clearOldMobileNo(): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT.AsObject;
  static toObject(includeInstance: boolean, msg: CHANGE_OWNERSHIP_NO_NEW_ACCOUNT): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT.AsObject;
  static serializeBinaryToWriter(message: CHANGE_OWNERSHIP_NO_NEW_ACCOUNT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
  static deserializeBinaryFromReader(message: CHANGE_OWNERSHIP_NO_NEW_ACCOUNT, reader: jspb.BinaryReader): CHANGE_OWNERSHIP_NO_NEW_ACCOUNT;
}

export namespace CHANGE_OWNERSHIP_NO_NEW_ACCOUNT {
  export type AsObject = {
    custkey: string,
    oldSurname: string,
    surname: string,
    uaAddress: string,
    nid: string,
    mobileNo: string,
    termsVoilent?: boolean,
    consumptionInsurance?: number,
    networkConnectivityValue?: number,
    insuranceDiff?: number,
    buildingWaterValue?: number,
    oldNid?: string,
    oldMobileNo?: string,
  }
}

export class ValidateChangeOwnership extends jspb.Message {
  getHasAgreem(): boolean;
  setHasAgreem(value: boolean): ValidateChangeOwnership;

  getHasDebit(): boolean;
  setHasDebit(value: boolean): ValidateChangeOwnership;

  getHasCredit(): boolean;
  setHasCredit(value: boolean): ValidateChangeOwnership;

  getAmount(): number;
  setAmount(value: number): ValidateChangeOwnership;
  hasAmount(): boolean;
  clearAmount(): ValidateChangeOwnership;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateChangeOwnership.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateChangeOwnership): ValidateChangeOwnership.AsObject;
  static serializeBinaryToWriter(message: ValidateChangeOwnership, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateChangeOwnership;
  static deserializeBinaryFromReader(message: ValidateChangeOwnership, reader: jspb.BinaryReader): ValidateChangeOwnership;
}

export namespace ValidateChangeOwnership {
  export type AsObject = {
    hasAgreem: boolean,
    hasDebit: boolean,
    hasCredit: boolean,
    amount?: number,
  }
}

export class AutomaticInstallmentRs extends jspb.Message {
  getMinCharge(): number;
  setMinCharge(value: number): AutomaticInstallmentRs;

  getNonInstallmentAmount(): number;
  setNonInstallmentAmount(value: number): AutomaticInstallmentRs;
  hasNonInstallmentAmount(): boolean;
  clearNonInstallmentAmount(): AutomaticInstallmentRs;

  getTotalFees(): number;
  setTotalFees(value: number): AutomaticInstallmentRs;
  hasTotalFees(): boolean;
  clearTotalFees(): AutomaticInstallmentRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutomaticInstallmentRs.AsObject;
  static toObject(includeInstance: boolean, msg: AutomaticInstallmentRs): AutomaticInstallmentRs.AsObject;
  static serializeBinaryToWriter(message: AutomaticInstallmentRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutomaticInstallmentRs;
  static deserializeBinaryFromReader(message: AutomaticInstallmentRs, reader: jspb.BinaryReader): AutomaticInstallmentRs;
}

export namespace AutomaticInstallmentRs {
  export type AsObject = {
    minCharge: number,
    nonInstallmentAmount?: number,
    totalFees?: number,
  }
}

export class AutomaticInstallment_Req extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): AutomaticInstallment_Req;

  getAppId(): number;
  setAppId(value: number): AutomaticInstallment_Req;

  getStartInstallmentNow(): boolean;
  setStartInstallmentNow(value: boolean): AutomaticInstallment_Req;
  hasStartInstallmentNow(): boolean;
  clearStartInstallmentNow(): AutomaticInstallment_Req;

  getInputFirstInstallDate(): boolean;
  setInputFirstInstallDate(value: boolean): AutomaticInstallment_Req;
  hasInputFirstInstallDate(): boolean;
  clearInputFirstInstallDate(): AutomaticInstallment_Req;

  getStartWithConnection(): boolean;
  setStartWithConnection(value: boolean): AutomaticInstallment_Req;
  hasStartWithConnection(): boolean;
  clearStartWithConnection(): AutomaticInstallment_Req;

  getFirstInstallmentDate(): date_pb.MasDateTime | undefined;
  setFirstInstallmentDate(value?: date_pb.MasDateTime): AutomaticInstallment_Req;
  hasFirstInstallmentDate(): boolean;
  clearFirstInstallmentDate(): AutomaticInstallment_Req;

  getMinCharge(): number;
  setMinCharge(value: number): AutomaticInstallment_Req;

  getInterst(): number;
  setInterst(value: number): AutomaticInstallment_Req;

  getAdvancedPayment(): number;
  setAdvancedPayment(value: number): AutomaticInstallment_Req;

  getNoMonths(): number;
  setNoMonths(value: number): AutomaticInstallment_Req;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutomaticInstallment_Req.AsObject;
  static toObject(includeInstance: boolean, msg: AutomaticInstallment_Req): AutomaticInstallment_Req.AsObject;
  static serializeBinaryToWriter(message: AutomaticInstallment_Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutomaticInstallment_Req;
  static deserializeBinaryFromReader(message: AutomaticInstallment_Req, reader: jspb.BinaryReader): AutomaticInstallment_Req;
}

export namespace AutomaticInstallment_Req {
  export type AsObject = {
    custkey: string,
    appId: number,
    startInstallmentNow?: boolean,
    inputFirstInstallDate?: boolean,
    startWithConnection?: boolean,
    firstInstallmentDate?: date_pb.MasDateTime.AsObject,
    minCharge: number,
    interst: number,
    advancedPayment: number,
    noMonths: number,
  }
}

export class FEES_TYPES extends jspb.Message {
  getId(): number;
  setId(value: number): FEES_TYPES;

  getFeeName(): string;
  setFeeName(value: string): FEES_TYPES;

  getFeeNameEn(): string;
  setFeeNameEn(value: string): FEES_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FEES_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: FEES_TYPES): FEES_TYPES.AsObject;
  static serializeBinaryToWriter(message: FEES_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FEES_TYPES;
  static deserializeBinaryFromReader(message: FEES_TYPES, reader: jspb.BinaryReader): FEES_TYPES;
}

export namespace FEES_TYPES {
  export type AsObject = {
    id: number,
    feeName: string,
    feeNameEn: string,
  }
}

export class ALL_FEES_TYPES extends jspb.Message {
  getFeesTypesList(): Array<FEES_TYPES>;
  setFeesTypesList(value: Array<FEES_TYPES>): ALL_FEES_TYPES;
  clearFeesTypesList(): ALL_FEES_TYPES;
  addFeesTypes(value?: FEES_TYPES, index?: number): FEES_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_FEES_TYPES.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_FEES_TYPES): ALL_FEES_TYPES.AsObject;
  static serializeBinaryToWriter(message: ALL_FEES_TYPES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_FEES_TYPES;
  static deserializeBinaryFromReader(message: ALL_FEES_TYPES, reader: jspb.BinaryReader): ALL_FEES_TYPES;
}

export namespace ALL_FEES_TYPES {
  export type AsObject = {
    feesTypesList: Array<FEES_TYPES.AsObject>,
  }
}

export class SET_FEE_TYPE_RS extends jspb.Message {
  getExternalFeesList(): Array<EXTERNAL_FEES>;
  setExternalFeesList(value: Array<EXTERNAL_FEES>): SET_FEE_TYPE_RS;
  clearExternalFeesList(): SET_FEE_TYPE_RS;
  addExternalFees(value?: EXTERNAL_FEES, index?: number): EXTERNAL_FEES;

  getAllFeesTypesList(): Array<FEES_TYPES>;
  setAllFeesTypesList(value: Array<FEES_TYPES>): SET_FEE_TYPE_RS;
  clearAllFeesTypesList(): SET_FEE_TYPE_RS;
  addAllFeesTypes(value?: FEES_TYPES, index?: number): FEES_TYPES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SET_FEE_TYPE_RS.AsObject;
  static toObject(includeInstance: boolean, msg: SET_FEE_TYPE_RS): SET_FEE_TYPE_RS.AsObject;
  static serializeBinaryToWriter(message: SET_FEE_TYPE_RS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SET_FEE_TYPE_RS;
  static deserializeBinaryFromReader(message: SET_FEE_TYPE_RS, reader: jspb.BinaryReader): SET_FEE_TYPE_RS;
}

export namespace SET_FEE_TYPE_RS {
  export type AsObject = {
    externalFeesList: Array<EXTERNAL_FEES.AsObject>,
    allFeesTypesList: Array<FEES_TYPES.AsObject>,
  }
}

export class Period extends jspb.Message {
  getFrom(): date_pb.MasDateTime | undefined;
  setFrom(value?: date_pb.MasDateTime): Period;
  hasFrom(): boolean;
  clearFrom(): Period;

  getTo(): date_pb.MasDateTime | undefined;
  setTo(value?: date_pb.MasDateTime): Period;
  hasTo(): boolean;
  clearTo(): Period;

  getStationNo(): number;
  setStationNo(value: number): Period;
  hasStationNo(): boolean;
  clearStationNo(): Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    from?: date_pb.MasDateTime.AsObject,
    to?: date_pb.MasDateTime.AsObject,
    stationNo?: number,
  }
}

export class CountActPosted extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): CountActPosted;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): CountActPosted;

  getCountPosted(): number;
  setCountPosted(value: number): CountActPosted;

  getDate(): date_pb.MasDateTime | undefined;
  setDate(value?: date_pb.MasDateTime): CountActPosted;
  hasDate(): boolean;
  clearDate(): CountActPosted;

  getActivityId(): number;
  setActivityId(value: number): CountActPosted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountActPosted.AsObject;
  static toObject(includeInstance: boolean, msg: CountActPosted): CountActPosted.AsObject;
  static serializeBinaryToWriter(message: CountActPosted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountActPosted;
  static deserializeBinaryFromReader(message: CountActPosted, reader: jspb.BinaryReader): CountActPosted;
}

export namespace CountActPosted {
  export type AsObject = {
    description: string,
    descriptionEn: string,
    countPosted: number,
    date?: date_pb.MasDateTime.AsObject,
    activityId: number,
  }
}

export class ArrCountActPosted extends jspb.Message {
  getCountactpostedList(): Array<CountActPosted>;
  setCountactpostedList(value: Array<CountActPosted>): ArrCountActPosted;
  clearCountactpostedList(): ArrCountActPosted;
  addCountactposted(value?: CountActPosted, index?: number): CountActPosted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCountActPosted.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCountActPosted): ArrCountActPosted.AsObject;
  static serializeBinaryToWriter(message: ArrCountActPosted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCountActPosted;
  static deserializeBinaryFromReader(message: ArrCountActPosted, reader: jspb.BinaryReader): ArrCountActPosted;
}

export namespace ArrCountActPosted {
  export type AsObject = {
    countactpostedList: Array<CountActPosted.AsObject>,
  }
}

export class CountActPostedPerStation extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): CountActPostedPerStation;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): CountActPostedPerStation;

  getCountPosted(): number;
  setCountPosted(value: number): CountActPostedPerStation;

  getStationNo(): number;
  setStationNo(value: number): CountActPostedPerStation;

  getActivityId(): number;
  setActivityId(value: number): CountActPostedPerStation;

  getStationName(): string;
  setStationName(value: string): CountActPostedPerStation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountActPostedPerStation.AsObject;
  static toObject(includeInstance: boolean, msg: CountActPostedPerStation): CountActPostedPerStation.AsObject;
  static serializeBinaryToWriter(message: CountActPostedPerStation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountActPostedPerStation;
  static deserializeBinaryFromReader(message: CountActPostedPerStation, reader: jspb.BinaryReader): CountActPostedPerStation;
}

export namespace CountActPostedPerStation {
  export type AsObject = {
    description: string,
    descriptionEn: string,
    countPosted: number,
    stationNo: number,
    activityId: number,
    stationName: string,
  }
}

export class ArrCountActPostedPerStation extends jspb.Message {
  getCountactpostedperstationList(): Array<CountActPostedPerStation>;
  setCountactpostedperstationList(value: Array<CountActPostedPerStation>): ArrCountActPostedPerStation;
  clearCountactpostedperstationList(): ArrCountActPostedPerStation;
  addCountactpostedperstation(value?: CountActPostedPerStation, index?: number): CountActPostedPerStation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCountActPostedPerStation.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCountActPostedPerStation): ArrCountActPostedPerStation.AsObject;
  static serializeBinaryToWriter(message: ArrCountActPostedPerStation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCountActPostedPerStation;
  static deserializeBinaryFromReader(message: ArrCountActPostedPerStation, reader: jspb.BinaryReader): ArrCountActPostedPerStation;
}

export namespace ArrCountActPostedPerStation {
  export type AsObject = {
    countactpostedperstationList: Array<CountActPostedPerStation.AsObject>,
  }
}

export class CS_APPLICATIONS_STATION extends jspb.Message {
  getId(): number;
  setId(value: number): CS_APPLICATIONS_STATION;

  getActId(): number;
  setActId(value: number): CS_APPLICATIONS_STATION;

  getStampUser(): string;
  setStampUser(value: string): CS_APPLICATIONS_STATION;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CS_APPLICATIONS_STATION;
  hasStampDate(): boolean;
  clearStampDate(): CS_APPLICATIONS_STATION;

  getCustkey(): string;
  setCustkey(value: string): CS_APPLICATIONS_STATION;

  getIsPosted(): boolean;
  setIsPosted(value: boolean): CS_APPLICATIONS_STATION;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CS_APPLICATIONS_STATION;

  getBbmForm(): string;
  setBbmForm(value: string): CS_APPLICATIONS_STATION;
  hasBbmForm(): boolean;
  clearBbmForm(): CS_APPLICATIONS_STATION;

  getStationNo(): number;
  setStationNo(value: number): CS_APPLICATIONS_STATION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_APPLICATIONS_STATION.AsObject;
  static toObject(includeInstance: boolean, msg: CS_APPLICATIONS_STATION): CS_APPLICATIONS_STATION.AsObject;
  static serializeBinaryToWriter(message: CS_APPLICATIONS_STATION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_APPLICATIONS_STATION;
  static deserializeBinaryFromReader(message: CS_APPLICATIONS_STATION, reader: jspb.BinaryReader): CS_APPLICATIONS_STATION;
}

export namespace CS_APPLICATIONS_STATION {
  export type AsObject = {
    id: number,
    actId: number,
    stampUser: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    custkey: string,
    isPosted: boolean,
    isCancelled: boolean,
    bbmForm?: string,
    stationNo: number,
  }
}

export class ACTIVITY_STATISTICS extends jspb.Message {
  getAppId(): number;
  setAppId(value: number): ACTIVITY_STATISTICS;

  getActId(): number;
  setActId(value: number): ACTIVITY_STATISTICS;

  getActivityDesc(): string;
  setActivityDesc(value: string): ACTIVITY_STATISTICS;

  getStationNo(): number;
  setStationNo(value: number): ACTIVITY_STATISTICS;

  getBillgroup(): string;
  setBillgroup(value: string): ACTIVITY_STATISTICS;

  getBookNo(): string;
  setBookNo(value: string): ACTIVITY_STATISTICS;

  getWalkNo(): number;
  setWalkNo(value: number): ACTIVITY_STATISTICS;

  getCustkey(): string;
  setCustkey(value: string): ACTIVITY_STATISTICS;

  getSurname(): string;
  setSurname(value: string): ACTIVITY_STATISTICS;

  getUaAddress(): string;
  setUaAddress(value: string): ACTIVITY_STATISTICS;

  getCType(): string;
  setCType(value: string): ACTIVITY_STATISTICS;
  hasCType(): boolean;
  clearCType(): ACTIVITY_STATISTICS;

  getCTypeDesc(): string;
  setCTypeDesc(value: string): ACTIVITY_STATISTICS;
  hasCTypeDesc(): boolean;
  clearCTypeDesc(): ACTIVITY_STATISTICS;

  getCreateDate(): date_pb.MasDateTime | undefined;
  setCreateDate(value?: date_pb.MasDateTime): ACTIVITY_STATISTICS;
  hasCreateDate(): boolean;
  clearCreateDate(): ACTIVITY_STATISTICS;

  getPaymentDate(): date_pb.MasDateTime | undefined;
  setPaymentDate(value?: date_pb.MasDateTime): ACTIVITY_STATISTICS;
  hasPaymentDate(): boolean;
  clearPaymentDate(): ACTIVITY_STATISTICS;

  getPaidAmount(): number;
  setPaidAmount(value: number): ACTIVITY_STATISTICS;
  hasPaidAmount(): boolean;
  clearPaidAmount(): ACTIVITY_STATISTICS;

  getUnpaidAmount(): number;
  setUnpaidAmount(value: number): ACTIVITY_STATISTICS;
  hasUnpaidAmount(): boolean;
  clearUnpaidAmount(): ACTIVITY_STATISTICS;

  getPostedInstalls(): number;
  setPostedInstalls(value: number): ACTIVITY_STATISTICS;
  hasPostedInstalls(): boolean;
  clearPostedInstalls(): ACTIVITY_STATISTICS;

  getUnpostedInstalls(): number;
  setUnpostedInstalls(value: number): ACTIVITY_STATISTICS;
  hasUnpostedInstalls(): boolean;
  clearUnpostedInstalls(): ACTIVITY_STATISTICS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACTIVITY_STATISTICS.AsObject;
  static toObject(includeInstance: boolean, msg: ACTIVITY_STATISTICS): ACTIVITY_STATISTICS.AsObject;
  static serializeBinaryToWriter(message: ACTIVITY_STATISTICS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACTIVITY_STATISTICS;
  static deserializeBinaryFromReader(message: ACTIVITY_STATISTICS, reader: jspb.BinaryReader): ACTIVITY_STATISTICS;
}

export namespace ACTIVITY_STATISTICS {
  export type AsObject = {
    appId: number,
    actId: number,
    activityDesc: string,
    stationNo: number,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    custkey: string,
    surname: string,
    uaAddress: string,
    cType?: string,
    cTypeDesc?: string,
    createDate?: date_pb.MasDateTime.AsObject,
    paymentDate?: date_pb.MasDateTime.AsObject,
    paidAmount?: number,
    unpaidAmount?: number,
    postedInstalls?: number,
    unpostedInstalls?: number,
  }
}

export class ALL_ACTIVITY_STATISTICS extends jspb.Message {
  getActivityStatisticsList(): Array<ACTIVITY_STATISTICS>;
  setActivityStatisticsList(value: Array<ACTIVITY_STATISTICS>): ALL_ACTIVITY_STATISTICS;
  clearActivityStatisticsList(): ALL_ACTIVITY_STATISTICS;
  addActivityStatistics(value?: ACTIVITY_STATISTICS, index?: number): ACTIVITY_STATISTICS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_ACTIVITY_STATISTICS.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_ACTIVITY_STATISTICS): ALL_ACTIVITY_STATISTICS.AsObject;
  static serializeBinaryToWriter(message: ALL_ACTIVITY_STATISTICS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_ACTIVITY_STATISTICS;
  static deserializeBinaryFromReader(message: ALL_ACTIVITY_STATISTICS, reader: jspb.BinaryReader): ALL_ACTIVITY_STATISTICS;
}

export namespace ALL_ACTIVITY_STATISTICS {
  export type AsObject = {
    activityStatisticsList: Array<ACTIVITY_STATISTICS.AsObject>,
  }
}

export class CUSTOMER_TAX_RQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_TAX_RQ;

  getTaxNo(): string;
  setTaxNo(value: string): CUSTOMER_TAX_RQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_TAX_RQ.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_TAX_RQ): CUSTOMER_TAX_RQ.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_TAX_RQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_TAX_RQ;
  static deserializeBinaryFromReader(message: CUSTOMER_TAX_RQ, reader: jspb.BinaryReader): CUSTOMER_TAX_RQ;
}

export namespace CUSTOMER_TAX_RQ {
  export type AsObject = {
    custkey: string,
    taxNo: string,
  }
}

export class ActivityIDRq extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): ActivityIDRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityIDRq.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityIDRq): ActivityIDRq.AsObject;
  static serializeBinaryToWriter(message: ActivityIDRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityIDRq;
  static deserializeBinaryFromReader(message: ActivityIDRq, reader: jspb.BinaryReader): ActivityIDRq;
}

export namespace ActivityIDRq {
  export type AsObject = {
    activityId: number,
  }
}

export class AttachFieldsReq extends jspb.Message {
  getActivityIdList(): Array<number>;
  setActivityIdList(value: Array<number>): AttachFieldsReq;
  clearActivityIdList(): AttachFieldsReq;
  addActivityId(value: number, index?: number): AttachFieldsReq;

  getLuFields(): LU_FIELDS | undefined;
  setLuFields(value?: LU_FIELDS): AttachFieldsReq;
  hasLuFields(): boolean;
  clearLuFields(): AttachFieldsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachFieldsReq.AsObject;
  static toObject(includeInstance: boolean, msg: AttachFieldsReq): AttachFieldsReq.AsObject;
  static serializeBinaryToWriter(message: AttachFieldsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachFieldsReq;
  static deserializeBinaryFromReader(message: AttachFieldsReq, reader: jspb.BinaryReader): AttachFieldsReq;
}

export namespace AttachFieldsReq {
  export type AsObject = {
    activityIdList: Array<number>,
    luFields?: LU_FIELDS.AsObject,
  }
}

export class DataTypes extends jspb.Message {
  getCode(): number;
  setCode(value: number): DataTypes;

  getDescription(): string;
  setDescription(value: string): DataTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTypes.AsObject;
  static toObject(includeInstance: boolean, msg: DataTypes): DataTypes.AsObject;
  static serializeBinaryToWriter(message: DataTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTypes;
  static deserializeBinaryFromReader(message: DataTypes, reader: jspb.BinaryReader): DataTypes;
}

export namespace DataTypes {
  export type AsObject = {
    code: number,
    description: string,
  }
}

export class Lookup extends jspb.Message {
  getCode(): number;
  setCode(value: number): Lookup;

  getDescription(): string;
  setDescription(value: string): Lookup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lookup.AsObject;
  static toObject(includeInstance: boolean, msg: Lookup): Lookup.AsObject;
  static serializeBinaryToWriter(message: Lookup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lookup;
  static deserializeBinaryFromReader(message: Lookup, reader: jspb.BinaryReader): Lookup;
}

export namespace Lookup {
  export type AsObject = {
    code: number,
    description: string,
  }
}

export class AllDataTypes extends jspb.Message {
  getDatatypesList(): Array<DataTypes>;
  setDatatypesList(value: Array<DataTypes>): AllDataTypes;
  clearDatatypesList(): AllDataTypes;
  addDatatypes(value?: DataTypes, index?: number): DataTypes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllDataTypes.AsObject;
  static toObject(includeInstance: boolean, msg: AllDataTypes): AllDataTypes.AsObject;
  static serializeBinaryToWriter(message: AllDataTypes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllDataTypes;
  static deserializeBinaryFromReader(message: AllDataTypes, reader: jspb.BinaryReader): AllDataTypes;
}

export namespace AllDataTypes {
  export type AsObject = {
    datatypesList: Array<DataTypes.AsObject>,
  }
}

export class AllLookup extends jspb.Message {
  getLookupList(): Array<Lookup>;
  setLookupList(value: Array<Lookup>): AllLookup;
  clearLookupList(): AllLookup;
  addLookup(value?: Lookup, index?: number): Lookup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllLookup.AsObject;
  static toObject(includeInstance: boolean, msg: AllLookup): AllLookup.AsObject;
  static serializeBinaryToWriter(message: AllLookup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllLookup;
  static deserializeBinaryFromReader(message: AllLookup, reader: jspb.BinaryReader): AllLookup;
}

export namespace AllLookup {
  export type AsObject = {
    lookupList: Array<Lookup.AsObject>,
  }
}

export class UpdateCustomerType extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): UpdateCustomerType;

  getCustomerType(): number;
  setCustomerType(value: number): UpdateCustomerType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerType.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerType): UpdateCustomerType.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerType;
  static deserializeBinaryFromReader(message: UpdateCustomerType, reader: jspb.BinaryReader): UpdateCustomerType;
}

export namespace UpdateCustomerType {
  export type AsObject = {
    custkey: string,
    customerType: number,
  }
}

export class ActivityID extends jspb.Message {
  getActId(): number;
  setActId(value: number): ActivityID;

  getActDesc(): string;
  setActDesc(value: string): ActivityID;

  getActDescEn(): string;
  setActDescEn(value: string): ActivityID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityID.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityID): ActivityID.AsObject;
  static serializeBinaryToWriter(message: ActivityID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityID;
  static deserializeBinaryFromReader(message: ActivityID, reader: jspb.BinaryReader): ActivityID;
}

export namespace ActivityID {
  export type AsObject = {
    actId: number,
    actDesc: string,
    actDescEn: string,
  }
}

export class INDUSTERIAL_SEWER extends jspb.Message {
  getName(): string;
  setName(value: string): INDUSTERIAL_SEWER;

  getTransType(): number;
  setTransType(value: number): INDUSTERIAL_SEWER;

  getTransStype(): number;
  setTransStype(value: number): INDUSTERIAL_SEWER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INDUSTERIAL_SEWER.AsObject;
  static toObject(includeInstance: boolean, msg: INDUSTERIAL_SEWER): INDUSTERIAL_SEWER.AsObject;
  static serializeBinaryToWriter(message: INDUSTERIAL_SEWER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INDUSTERIAL_SEWER;
  static deserializeBinaryFromReader(message: INDUSTERIAL_SEWER, reader: jspb.BinaryReader): INDUSTERIAL_SEWER;
}

export namespace INDUSTERIAL_SEWER {
  export type AsObject = {
    name: string,
    transType: number,
    transStype: number,
  }
}

export class INDUSTRIAL_REQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): INDUSTRIAL_REQ;

  getPh(): number;
  setPh(value: number): INDUSTRIAL_REQ;

  getTss(): number;
  setTss(value: number): INDUSTRIAL_REQ;

  getBod(): number;
  setBod(value: number): INDUSTRIAL_REQ;

  getCod(): number;
  setCod(value: number): INDUSTRIAL_REQ;

  getOil(): number;
  setOil(value: number): INDUSTRIAL_REQ;

  getTransfer(): number;
  setTransfer(value: number): INDUSTRIAL_REQ;

  getAnalysis(): number;
  setAnalysis(value: number): INDUSTRIAL_REQ;

  getAdmin(): number;
  setAdmin(value: number): INDUSTRIAL_REQ;

  getSample(): number;
  setSample(value: number): INDUSTRIAL_REQ;

  getVat(): number;
  setVat(value: number): INDUSTRIAL_REQ;

  getInsuranceDiff(): number;
  setInsuranceDiff(value: number): INDUSTRIAL_REQ;

  getEffectDate(): date_pb.MasDateTime | undefined;
  setEffectDate(value?: date_pb.MasDateTime): INDUSTRIAL_REQ;
  hasEffectDate(): boolean;
  clearEffectDate(): INDUSTRIAL_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INDUSTRIAL_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: INDUSTRIAL_REQ): INDUSTRIAL_REQ.AsObject;
  static serializeBinaryToWriter(message: INDUSTRIAL_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INDUSTRIAL_REQ;
  static deserializeBinaryFromReader(message: INDUSTRIAL_REQ, reader: jspb.BinaryReader): INDUSTRIAL_REQ;
}

export namespace INDUSTRIAL_REQ {
  export type AsObject = {
    custkey: string,
    ph: number,
    tss: number,
    bod: number,
    cod: number,
    oil: number,
    transfer: number,
    analysis: number,
    admin: number,
    sample: number,
    vat: number,
    insuranceDiff: number,
    effectDate?: date_pb.MasDateTime.AsObject,
  }
}

export class SEND_TO_TAX_REQ extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): SEND_TO_TAX_REQ;

  getCustomerType(): number;
  setCustomerType(value: number): SEND_TO_TAX_REQ;

  getCustType(): string;
  setCustType(value: string): SEND_TO_TAX_REQ;
  hasCustType(): boolean;
  clearCustType(): SEND_TO_TAX_REQ;

  getNid(): string;
  setNid(value: string): SEND_TO_TAX_REQ;
  hasNid(): boolean;
  clearNid(): SEND_TO_TAX_REQ;

  getTaxNo(): string;
  setTaxNo(value: string): SEND_TO_TAX_REQ;
  hasTaxNo(): boolean;
  clearTaxNo(): SEND_TO_TAX_REQ;

  getTblApplicationsList(): Array<TBL_APPLICATIONS>;
  setTblApplicationsList(value: Array<TBL_APPLICATIONS>): SEND_TO_TAX_REQ;
  clearTblApplicationsList(): SEND_TO_TAX_REQ;
  addTblApplications(value?: TBL_APPLICATIONS, index?: number): TBL_APPLICATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEND_TO_TAX_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: SEND_TO_TAX_REQ): SEND_TO_TAX_REQ.AsObject;
  static serializeBinaryToWriter(message: SEND_TO_TAX_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEND_TO_TAX_REQ;
  static deserializeBinaryFromReader(message: SEND_TO_TAX_REQ, reader: jspb.BinaryReader): SEND_TO_TAX_REQ;
}

export namespace SEND_TO_TAX_REQ {
  export type AsObject = {
    custkey: string,
    customerType: number,
    custType?: string,
    nid?: string,
    taxNo?: string,
    tblApplicationsList: Array<TBL_APPLICATIONS.AsObject>,
  }
}

export class TBL_APPLICATIONS extends jspb.Message {
  getSendToTax(): boolean;
  setSendToTax(value: boolean): TBL_APPLICATIONS;

  getAppId(): number;
  setAppId(value: number): TBL_APPLICATIONS;

  getActId(): number;
  setActId(value: number): TBL_APPLICATIONS;

  getWithPost(): boolean;
  setWithPost(value: boolean): TBL_APPLICATIONS;
  hasWithPost(): boolean;
  clearWithPost(): TBL_APPLICATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_APPLICATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_APPLICATIONS): TBL_APPLICATIONS.AsObject;
  static serializeBinaryToWriter(message: TBL_APPLICATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_APPLICATIONS;
  static deserializeBinaryFromReader(message: TBL_APPLICATIONS, reader: jspb.BinaryReader): TBL_APPLICATIONS;
}

export namespace TBL_APPLICATIONS {
  export type AsObject = {
    sendToTax: boolean,
    appId: number,
    actId: number,
    withPost?: boolean,
  }
}

export class TBL_AGREEM_PAYMENT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): TBL_AGREEM_PAYMENT;

  getAgreemNo(): number;
  setAgreemNo(value: number): TBL_AGREEM_PAYMENT;

  getAgreemName(): string;
  setAgreemName(value: string): TBL_AGREEM_PAYMENT;
  hasAgreemName(): boolean;
  clearAgreemName(): TBL_AGREEM_PAYMENT;

  getReminderAmount(): number;
  setReminderAmount(value: number): TBL_AGREEM_PAYMENT;

  getReminderNoQests(): number;
  setReminderNoQests(value: number): TBL_AGREEM_PAYMENT;

  getMemoField(): string;
  setMemoField(value: string): TBL_AGREEM_PAYMENT;
  hasMemoField(): boolean;
  clearMemoField(): TBL_AGREEM_PAYMENT;

  getSelectedAgreem(): boolean;
  setSelectedAgreem(value: boolean): TBL_AGREEM_PAYMENT;

  getAmount(): number;
  setAmount(value: number): TBL_AGREEM_PAYMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_AGREEM_PAYMENT.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_AGREEM_PAYMENT): TBL_AGREEM_PAYMENT.AsObject;
  static serializeBinaryToWriter(message: TBL_AGREEM_PAYMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_AGREEM_PAYMENT;
  static deserializeBinaryFromReader(message: TBL_AGREEM_PAYMENT, reader: jspb.BinaryReader): TBL_AGREEM_PAYMENT;
}

export namespace TBL_AGREEM_PAYMENT {
  export type AsObject = {
    custkey: string,
    agreemNo: number,
    agreemName?: string,
    reminderAmount: number,
    reminderNoQests: number,
    memoField?: string,
    selectedAgreem: boolean,
    amount: number,
  }
}

export class TBL_INSTALLMENT_PAYMENT extends jspb.Message {
  getInstCustkey(): string;
  setInstCustkey(value: string): TBL_INSTALLMENT_PAYMENT;

  getInstAgreemNo(): number;
  setInstAgreemNo(value: number): TBL_INSTALLMENT_PAYMENT;

  getInstAmount(): number;
  setInstAmount(value: number): TBL_INSTALLMENT_PAYMENT;

  getInstNo(): number;
  setInstNo(value: number): TBL_INSTALLMENT_PAYMENT;
  hasInstNo(): boolean;
  clearInstNo(): TBL_INSTALLMENT_PAYMENT;

  getInstSelected(): boolean;
  setInstSelected(value: boolean): TBL_INSTALLMENT_PAYMENT;
  hasInstSelected(): boolean;
  clearInstSelected(): TBL_INSTALLMENT_PAYMENT;

  getInstChargeDate(): string;
  setInstChargeDate(value: string): TBL_INSTALLMENT_PAYMENT;
  hasInstChargeDate(): boolean;
  clearInstChargeDate(): TBL_INSTALLMENT_PAYMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBL_INSTALLMENT_PAYMENT.AsObject;
  static toObject(includeInstance: boolean, msg: TBL_INSTALLMENT_PAYMENT): TBL_INSTALLMENT_PAYMENT.AsObject;
  static serializeBinaryToWriter(message: TBL_INSTALLMENT_PAYMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBL_INSTALLMENT_PAYMENT;
  static deserializeBinaryFromReader(message: TBL_INSTALLMENT_PAYMENT, reader: jspb.BinaryReader): TBL_INSTALLMENT_PAYMENT;
}

export namespace TBL_INSTALLMENT_PAYMENT {
  export type AsObject = {
    instCustkey: string,
    instAgreemNo: number,
    instAmount: number,
    instNo?: number,
    instSelected?: boolean,
    instChargeDate?: string,
  }
}

export class PayAgreemRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PayAgreemRq;

  getTblAgreemPaymentList(): Array<TBL_AGREEM_PAYMENT>;
  setTblAgreemPaymentList(value: Array<TBL_AGREEM_PAYMENT>): PayAgreemRq;
  clearTblAgreemPaymentList(): PayAgreemRq;
  addTblAgreemPayment(value?: TBL_AGREEM_PAYMENT, index?: number): TBL_AGREEM_PAYMENT;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): PayAgreemRq;
  hasTrace(): boolean;
  clearTrace(): PayAgreemRq;

  getTblInstallmentPaymentList(): Array<TBL_INSTALLMENT_PAYMENT>;
  setTblInstallmentPaymentList(value: Array<TBL_INSTALLMENT_PAYMENT>): PayAgreemRq;
  clearTblInstallmentPaymentList(): PayAgreemRq;
  addTblInstallmentPayment(value?: TBL_INSTALLMENT_PAYMENT, index?: number): TBL_INSTALLMENT_PAYMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayAgreemRq.AsObject;
  static toObject(includeInstance: boolean, msg: PayAgreemRq): PayAgreemRq.AsObject;
  static serializeBinaryToWriter(message: PayAgreemRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayAgreemRq;
  static deserializeBinaryFromReader(message: PayAgreemRq, reader: jspb.BinaryReader): PayAgreemRq;
}

export namespace PayAgreemRq {
  export type AsObject = {
    custkey: string,
    tblAgreemPaymentList: Array<TBL_AGREEM_PAYMENT.AsObject>,
    trace?: APP_TRACER.AsObject,
    tblInstallmentPaymentList: Array<TBL_INSTALLMENT_PAYMENT.AsObject>,
  }
}

export class CST_HISTORY extends jspb.Message {
  getId(): number;
  setId(value: number): CST_HISTORY;

  getNotes(): string;
  setNotes(value: string): CST_HISTORY;

  getBpmForm(): string;
  setBpmForm(value: string): CST_HISTORY;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_HISTORY;
  hasStampDate(): boolean;
  clearStampDate(): CST_HISTORY;

  getStampUser(): string;
  setStampUser(value: string): CST_HISTORY;

  getCustkey(): string;
  setCustkey(value: string): CST_HISTORY;

  getAppId(): number;
  setAppId(value: number): CST_HISTORY;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): CST_HISTORY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_HISTORY.AsObject;
  static toObject(includeInstance: boolean, msg: CST_HISTORY): CST_HISTORY.AsObject;
  static serializeBinaryToWriter(message: CST_HISTORY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_HISTORY;
  static deserializeBinaryFromReader(message: CST_HISTORY, reader: jspb.BinaryReader): CST_HISTORY;
}

export namespace CST_HISTORY {
  export type AsObject = {
    id: number,
    notes: string,
    bpmForm: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser: string,
    custkey: string,
    appId: number,
    isCancelled: boolean,
  }
}

export class ArrCST_HISTORY extends jspb.Message {
  getCstHistoryList(): Array<CST_HISTORY>;
  setCstHistoryList(value: Array<CST_HISTORY>): ArrCST_HISTORY;
  clearCstHistoryList(): ArrCST_HISTORY;
  addCstHistory(value?: CST_HISTORY, index?: number): CST_HISTORY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCST_HISTORY.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCST_HISTORY): ArrCST_HISTORY.AsObject;
  static serializeBinaryToWriter(message: ArrCST_HISTORY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCST_HISTORY;
  static deserializeBinaryFromReader(message: ArrCST_HISTORY, reader: jspb.BinaryReader): ArrCST_HISTORY;
}

export namespace ArrCST_HISTORY {
  export type AsObject = {
    cstHistoryList: Array<CST_HISTORY.AsObject>,
  }
}

export class OpenSawatAccountRq extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): OpenSawatAccountRq;

  getBillgroup(): string;
  setBillgroup(value: string): OpenSawatAccountRq;

  getBookNo(): string;
  setBookNo(value: string): OpenSawatAccountRq;

  getSurname(): string;
  setSurname(value: string): OpenSawatAccountRq;

  getUaAddress(): string;
  setUaAddress(value: string): OpenSawatAccountRq;

  getEMail(): string;
  setEMail(value: string): OpenSawatAccountRq;
  hasEMail(): boolean;
  clearEMail(): OpenSawatAccountRq;

  getNid(): string;
  setNid(value: string): OpenSawatAccountRq;
  hasNid(): boolean;
  clearNid(): OpenSawatAccountRq;

  getPassportId(): string;
  setPassportId(value: string): OpenSawatAccountRq;
  hasPassportId(): boolean;
  clearPassportId(): OpenSawatAccountRq;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): OpenSawatAccountRq;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): OpenSawatAccountRq;

  getMobileNo(): string;
  setMobileNo(value: string): OpenSawatAccountRq;
  hasMobileNo(): boolean;
  clearMobileNo(): OpenSawatAccountRq;

  getWalkNo(): number;
  setWalkNo(value: number): OpenSawatAccountRq;

  getAppId(): number;
  setAppId(value: number): OpenSawatAccountRq;
  hasAppId(): boolean;
  clearAppId(): OpenSawatAccountRq;

  getBbmForm(): string;
  setBbmForm(value: string): OpenSawatAccountRq;
  hasBbmForm(): boolean;
  clearBbmForm(): OpenSawatAccountRq;

  getTaxNo(): string;
  setTaxNo(value: string): OpenSawatAccountRq;
  hasTaxNo(): boolean;
  clearTaxNo(): OpenSawatAccountRq;

  getOldKey(): string;
  setOldKey(value: string): OpenSawatAccountRq;
  hasOldKey(): boolean;
  clearOldKey(): OpenSawatAccountRq;

  getNewCTypesList(): Array<NEW_C_TYPES>;
  setNewCTypesList(value: Array<NEW_C_TYPES>): OpenSawatAccountRq;
  clearNewCTypesList(): OpenSawatAccountRq;
  addNewCTypes(value?: NEW_C_TYPES, index?: number): NEW_C_TYPES;

  getTownshipNo(): string;
  setTownshipNo(value: string): OpenSawatAccountRq;

  getHasSewer(): boolean;
  setHasSewer(value: boolean): OpenSawatAccountRq;
  hasHasSewer(): boolean;
  clearHasSewer(): OpenSawatAccountRq;

  getHasMeter(): boolean;
  setHasMeter(value: boolean): OpenSawatAccountRq;

  getMeterRef(): string;
  setMeterRef(value: string): OpenSawatAccountRq;
  hasMeterRef(): boolean;
  clearMeterRef(): OpenSawatAccountRq;

  getNewMeterSize(): number;
  setNewMeterSize(value: number): OpenSawatAccountRq;
  hasNewMeterSize(): boolean;
  clearNewMeterSize(): OpenSawatAccountRq;

  getBillimgMeterSize(): string;
  setBillimgMeterSize(value: string): OpenSawatAccountRq;
  hasBillimgMeterSize(): boolean;
  clearBillimgMeterSize(): OpenSawatAccountRq;

  getMeterMake(): string;
  setMeterMake(value: string): OpenSawatAccountRq;
  hasMeterMake(): boolean;
  clearMeterMake(): OpenSawatAccountRq;

  getMeterInstallRead(): number;
  setMeterInstallRead(value: number): OpenSawatAccountRq;
  hasMeterInstallRead(): boolean;
  clearMeterInstallRead(): OpenSawatAccountRq;

  getNoDials(): number;
  setNoDials(value: number): OpenSawatAccountRq;
  hasNoDials(): boolean;
  clearNoDials(): OpenSawatAccountRq;

  getSerialNo(): string;
  setSerialNo(value: string): OpenSawatAccountRq;
  hasSerialNo(): boolean;
  clearSerialNo(): OpenSawatAccountRq;

  getConvFctr(): number;
  setConvFctr(value: number): OpenSawatAccountRq;
  hasConvFctr(): boolean;
  clearConvFctr(): OpenSawatAccountRq;

  getNewMeterType(): string;
  setNewMeterType(value: string): OpenSawatAccountRq;
  hasNewMeterType(): boolean;
  clearNewMeterType(): OpenSawatAccountRq;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): OpenSawatAccountRq;
  hasInstallDate(): boolean;
  clearInstallDate(): OpenSawatAccountRq;

  getSettingcreate(): string;
  setSettingcreate(value: string): OpenSawatAccountRq;
  hasSettingcreate(): boolean;
  clearSettingcreate(): OpenSawatAccountRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSawatAccountRq.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSawatAccountRq): OpenSawatAccountRq.AsObject;
  static serializeBinaryToWriter(message: OpenSawatAccountRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSawatAccountRq;
  static deserializeBinaryFromReader(message: OpenSawatAccountRq, reader: jspb.BinaryReader): OpenSawatAccountRq;
}

export namespace OpenSawatAccountRq {
  export type AsObject = {
    stationNo: number,
    billgroup: string,
    bookNo: string,
    surname: string,
    uaAddress: string,
    eMail?: string,
    nid?: string,
    passportId?: string,
    prevCustkey?: string,
    mobileNo?: string,
    walkNo: number,
    appId?: number,
    bbmForm?: string,
    taxNo?: string,
    oldKey?: string,
    newCTypesList: Array<NEW_C_TYPES.AsObject>,
    townshipNo: string,
    hasSewer?: boolean,
    hasMeter: boolean,
    meterRef?: string,
    newMeterSize?: number,
    billimgMeterSize?: string,
    meterMake?: string,
    meterInstallRead?: number,
    noDials?: number,
    serialNo?: string,
    convFctr?: number,
    newMeterType?: string,
    installDate?: date_pb.MasDateTime.AsObject,
    settingcreate?: string,
  }
}

export class AllCustkeys extends jspb.Message {
  getCustkeysList(): Array<string>;
  setCustkeysList(value: Array<string>): AllCustkeys;
  clearCustkeysList(): AllCustkeys;
  addCustkeys(value: string, index?: number): AllCustkeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCustkeys.AsObject;
  static toObject(includeInstance: boolean, msg: AllCustkeys): AllCustkeys.AsObject;
  static serializeBinaryToWriter(message: AllCustkeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCustkeys;
  static deserializeBinaryFromReader(message: AllCustkeys, reader: jspb.BinaryReader): AllCustkeys;
}

export namespace AllCustkeys {
  export type AsObject = {
    custkeysList: Array<string>,
  }
}

export class CUSTOMER_C_TYPE extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_C_TYPE;

  getCTypeDesc(): string;
  setCTypeDesc(value: string): CUSTOMER_C_TYPE;

  getOpenAccountDate(): date_pb.MasDateTime | undefined;
  setOpenAccountDate(value?: date_pb.MasDateTime): CUSTOMER_C_TYPE;
  hasOpenAccountDate(): boolean;
  clearOpenAccountDate(): CUSTOMER_C_TYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_C_TYPE.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_C_TYPE): CUSTOMER_C_TYPE.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_C_TYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_C_TYPE;
  static deserializeBinaryFromReader(message: CUSTOMER_C_TYPE, reader: jspb.BinaryReader): CUSTOMER_C_TYPE;
}

export namespace CUSTOMER_C_TYPE {
  export type AsObject = {
    custkey: string,
    cTypeDesc: string,
    openAccountDate?: date_pb.MasDateTime.AsObject,
  }
}

export class AllCUSTOMER_C_TYPE extends jspb.Message {
  getCustomerCTypeList(): Array<CUSTOMER_C_TYPE>;
  setCustomerCTypeList(value: Array<CUSTOMER_C_TYPE>): AllCUSTOMER_C_TYPE;
  clearCustomerCTypeList(): AllCUSTOMER_C_TYPE;
  addCustomerCType(value?: CUSTOMER_C_TYPE, index?: number): CUSTOMER_C_TYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCUSTOMER_C_TYPE.AsObject;
  static toObject(includeInstance: boolean, msg: AllCUSTOMER_C_TYPE): AllCUSTOMER_C_TYPE.AsObject;
  static serializeBinaryToWriter(message: AllCUSTOMER_C_TYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCUSTOMER_C_TYPE;
  static deserializeBinaryFromReader(message: AllCUSTOMER_C_TYPE, reader: jspb.BinaryReader): AllCUSTOMER_C_TYPE;
}

export namespace AllCUSTOMER_C_TYPE {
  export type AsObject = {
    customerCTypeList: Array<CUSTOMER_C_TYPE.AsObject>,
  }
}

export class CHANGE_OWNERSHIPS extends jspb.Message {
  getOldCustkey(): string;
  setOldCustkey(value: string): CHANGE_OWNERSHIPS;

  getOldSurname(): string;
  setOldSurname(value: string): CHANGE_OWNERSHIPS;

  getSurname(): string;
  setSurname(value: string): CHANGE_OWNERSHIPS;

  getCustkey(): string;
  setCustkey(value: string): CHANGE_OWNERSHIPS;

  getChangeDate(): date_pb.MasDateTime | undefined;
  setChangeDate(value?: date_pb.MasDateTime): CHANGE_OWNERSHIPS;
  hasChangeDate(): boolean;
  clearChangeDate(): CHANGE_OWNERSHIPS;

  getRemainAmount(): number;
  setRemainAmount(value: number): CHANGE_OWNERSHIPS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHANGE_OWNERSHIPS.AsObject;
  static toObject(includeInstance: boolean, msg: CHANGE_OWNERSHIPS): CHANGE_OWNERSHIPS.AsObject;
  static serializeBinaryToWriter(message: CHANGE_OWNERSHIPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHANGE_OWNERSHIPS;
  static deserializeBinaryFromReader(message: CHANGE_OWNERSHIPS, reader: jspb.BinaryReader): CHANGE_OWNERSHIPS;
}

export namespace CHANGE_OWNERSHIPS {
  export type AsObject = {
    oldCustkey: string,
    oldSurname: string,
    surname: string,
    custkey: string,
    changeDate?: date_pb.MasDateTime.AsObject,
    remainAmount: number,
  }
}

export class AllCHANGE_OWNERSHIPS extends jspb.Message {
  getChangeOwnershipsList(): Array<CHANGE_OWNERSHIPS>;
  setChangeOwnershipsList(value: Array<CHANGE_OWNERSHIPS>): AllCHANGE_OWNERSHIPS;
  clearChangeOwnershipsList(): AllCHANGE_OWNERSHIPS;
  addChangeOwnerships(value?: CHANGE_OWNERSHIPS, index?: number): CHANGE_OWNERSHIPS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllCHANGE_OWNERSHIPS.AsObject;
  static toObject(includeInstance: boolean, msg: AllCHANGE_OWNERSHIPS): AllCHANGE_OWNERSHIPS.AsObject;
  static serializeBinaryToWriter(message: AllCHANGE_OWNERSHIPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllCHANGE_OWNERSHIPS;
  static deserializeBinaryFromReader(message: AllCHANGE_OWNERSHIPS, reader: jspb.BinaryReader): AllCHANGE_OWNERSHIPS;
}

export namespace AllCHANGE_OWNERSHIPS {
  export type AsObject = {
    changeOwnershipsList: Array<CHANGE_OWNERSHIPS.AsObject>,
  }
}

export class PostFeesToBilling extends jspb.Message {
  getActivitypaid(): APP_FEES | undefined;
  setActivitypaid(value?: APP_FEES): PostFeesToBilling;
  hasActivitypaid(): boolean;
  clearActivitypaid(): PostFeesToBilling;

  getActivityfees(): APP_FEES | undefined;
  setActivityfees(value?: APP_FEES): PostFeesToBilling;
  hasActivityfees(): boolean;
  clearActivityfees(): PostFeesToBilling;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): PostFeesToBilling;
  hasTrace(): boolean;
  clearTrace(): PostFeesToBilling;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostFeesToBilling.AsObject;
  static toObject(includeInstance: boolean, msg: PostFeesToBilling): PostFeesToBilling.AsObject;
  static serializeBinaryToWriter(message: PostFeesToBilling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostFeesToBilling;
  static deserializeBinaryFromReader(message: PostFeesToBilling, reader: jspb.BinaryReader): PostFeesToBilling;
}

export namespace PostFeesToBilling {
  export type AsObject = {
    activitypaid?: APP_FEES.AsObject,
    activityfees?: APP_FEES.AsObject,
    trace?: APP_TRACER.AsObject,
  }
}

export class CHANGE_BILLGROUP_REQ extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CHANGE_BILLGROUP_REQ;

  getCustkey(): string;
  setCustkey(value: string): CHANGE_BILLGROUP_REQ;

  getBillgroup(): string;
  setBillgroup(value: string): CHANGE_BILLGROUP_REQ;

  getBookNo(): string;
  setBookNo(value: string): CHANGE_BILLGROUP_REQ;

  getWalkNo(): number;
  setWalkNo(value: number): CHANGE_BILLGROUP_REQ;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CHANGE_BILLGROUP_REQ;

  getOldBillgroup(): string;
  setOldBillgroup(value: string): CHANGE_BILLGROUP_REQ;

  getOldBookNo(): string;
  setOldBookNo(value: string): CHANGE_BILLGROUP_REQ;

  getOldWalkNo(): number;
  setOldWalkNo(value: number): CHANGE_BILLGROUP_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHANGE_BILLGROUP_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: CHANGE_BILLGROUP_REQ): CHANGE_BILLGROUP_REQ.AsObject;
  static serializeBinaryToWriter(message: CHANGE_BILLGROUP_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHANGE_BILLGROUP_REQ;
  static deserializeBinaryFromReader(message: CHANGE_BILLGROUP_REQ, reader: jspb.BinaryReader): CHANGE_BILLGROUP_REQ;
}

export namespace CHANGE_BILLGROUP_REQ {
  export type AsObject = {
    stationNo: number,
    custkey: string,
    billgroup: string,
    bookNo: string,
    walkNo: number,
    prevCustkey: string,
    oldBillgroup: string,
    oldBookNo: string,
    oldWalkNo: number,
  }
}

export class ArrCS_FEES extends jspb.Message {
  getCsFeesList(): Array<CS_FEES>;
  setCsFeesList(value: Array<CS_FEES>): ArrCS_FEES;
  clearCsFeesList(): ArrCS_FEES;
  addCsFees(value?: CS_FEES, index?: number): CS_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCS_FEES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCS_FEES): ArrCS_FEES.AsObject;
  static serializeBinaryToWriter(message: ArrCS_FEES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCS_FEES;
  static deserializeBinaryFromReader(message: ArrCS_FEES, reader: jspb.BinaryReader): ArrCS_FEES;
}

export namespace ArrCS_FEES {
  export type AsObject = {
    csFeesList: Array<CS_FEES.AsObject>,
  }
}

export class PostFeesToBillingResp extends jspb.Message {
  getCsFeesList(): Array<CS_FEES>;
  setCsFeesList(value: Array<CS_FEES>): PostFeesToBillingResp;
  clearCsFeesList(): PostFeesToBillingResp;
  addCsFees(value?: CS_FEES, index?: number): CS_FEES;

  getCsRecieptList(): Array<CS_FEES>;
  setCsRecieptList(value: Array<CS_FEES>): PostFeesToBillingResp;
  clearCsRecieptList(): PostFeesToBillingResp;
  addCsReciept(value?: CS_FEES, index?: number): CS_FEES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostFeesToBillingResp.AsObject;
  static toObject(includeInstance: boolean, msg: PostFeesToBillingResp): PostFeesToBillingResp.AsObject;
  static serializeBinaryToWriter(message: PostFeesToBillingResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostFeesToBillingResp;
  static deserializeBinaryFromReader(message: PostFeesToBillingResp, reader: jspb.BinaryReader): PostFeesToBillingResp;
}

export namespace PostFeesToBillingResp {
  export type AsObject = {
    csFeesList: Array<CS_FEES.AsObject>,
    csRecieptList: Array<CS_FEES.AsObject>,
  }
}

export class CS_LOCKED_FORMS extends jspb.Message {
  getId(): number;
  setId(value: number): CS_LOCKED_FORMS;

  getFormNo(): string;
  setFormNo(value: string): CS_LOCKED_FORMS;

  getAppId(): number;
  setAppId(value: number): CS_LOCKED_FORMS;

  getErrorMessage(): string;
  setErrorMessage(value: string): CS_LOCKED_FORMS;
  hasErrorMessage(): boolean;
  clearErrorMessage(): CS_LOCKED_FORMS;

  getIsFinished(): boolean;
  setIsFinished(value: boolean): CS_LOCKED_FORMS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CS_LOCKED_FORMS.AsObject;
  static toObject(includeInstance: boolean, msg: CS_LOCKED_FORMS): CS_LOCKED_FORMS.AsObject;
  static serializeBinaryToWriter(message: CS_LOCKED_FORMS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CS_LOCKED_FORMS;
  static deserializeBinaryFromReader(message: CS_LOCKED_FORMS, reader: jspb.BinaryReader): CS_LOCKED_FORMS;
}

export namespace CS_LOCKED_FORMS {
  export type AsObject = {
    id: number,
    formNo: string,
    appId: number,
    errorMessage?: string,
    isFinished: boolean,
  }
}

export class ExtendWaterCut extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ExtendWaterCut;

  getNoMonths(): number;
  setNoMonths(value: number): ExtendWaterCut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendWaterCut.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendWaterCut): ExtendWaterCut.AsObject;
  static serializeBinaryToWriter(message: ExtendWaterCut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendWaterCut;
  static deserializeBinaryFromReader(message: ExtendWaterCut, reader: jspb.BinaryReader): ExtendWaterCut;
}

export namespace ExtendWaterCut {
  export type AsObject = {
    custkey: string,
    noMonths: number,
  }
}

export class MeterIdReq extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): MeterIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: MeterIdReq): MeterIdReq.AsObject;
  static serializeBinaryToWriter(message: MeterIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterIdReq;
  static deserializeBinaryFromReader(message: MeterIdReq, reader: jspb.BinaryReader): MeterIdReq;
}

export namespace MeterIdReq {
  export type AsObject = {
    meterId: number,
  }
}

export class ArrMeterIdsReq extends jspb.Message {
  getMeteridreqList(): Array<MeterIdReq>;
  setMeteridreqList(value: Array<MeterIdReq>): ArrMeterIdsReq;
  clearMeteridreqList(): ArrMeterIdsReq;
  addMeteridreq(value?: MeterIdReq, index?: number): MeterIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrMeterIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ArrMeterIdsReq): ArrMeterIdsReq.AsObject;
  static serializeBinaryToWriter(message: ArrMeterIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrMeterIdsReq;
  static deserializeBinaryFromReader(message: ArrMeterIdsReq, reader: jspb.BinaryReader): ArrMeterIdsReq;
}

export namespace ArrMeterIdsReq {
  export type AsObject = {
    meteridreqList: Array<MeterIdReq.AsObject>,
  }
}

export class ArrConnections extends jspb.Message {
  getConnectionsMap(): jspb.Map<number, CST_CONNECTION>;
  clearConnectionsMap(): ArrConnections;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrConnections.AsObject;
  static toObject(includeInstance: boolean, msg: ArrConnections): ArrConnections.AsObject;
  static serializeBinaryToWriter(message: ArrConnections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrConnections;
  static deserializeBinaryFromReader(message: ArrConnections, reader: jspb.BinaryReader): ArrConnections;
}

export namespace ArrConnections {
  export type AsObject = {
    connectionsMap: Array<[number, CST_CONNECTION.AsObject]>,
  }
}

export class LU_METER_CONDITIONS extends jspb.Message {
  getCode(): string;
  setCode(value: string): LU_METER_CONDITIONS;

  getOpStatus(): MeterOperationStatus;
  setOpStatus(value: MeterOperationStatus): LU_METER_CONDITIONS;

  getDescription(): string;
  setDescription(value: string): LU_METER_CONDITIONS;

  getAccessCode(): number;
  setAccessCode(value: number): LU_METER_CONDITIONS;
  hasAccessCode(): boolean;
  clearAccessCode(): LU_METER_CONDITIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_METER_CONDITIONS.AsObject;
  static toObject(includeInstance: boolean, msg: LU_METER_CONDITIONS): LU_METER_CONDITIONS.AsObject;
  static serializeBinaryToWriter(message: LU_METER_CONDITIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_METER_CONDITIONS;
  static deserializeBinaryFromReader(message: LU_METER_CONDITIONS, reader: jspb.BinaryReader): LU_METER_CONDITIONS;
}

export namespace LU_METER_CONDITIONS {
  export type AsObject = {
    code: string,
    opStatus: MeterOperationStatus,
    description: string,
    accessCode?: number,
  }
}

export class ArrLU_METER_CONDITIONS extends jspb.Message {
  getLuMeterConditionsList(): Array<LU_METER_CONDITIONS>;
  setLuMeterConditionsList(value: Array<LU_METER_CONDITIONS>): ArrLU_METER_CONDITIONS;
  clearLuMeterConditionsList(): ArrLU_METER_CONDITIONS;
  addLuMeterConditions(value?: LU_METER_CONDITIONS, index?: number): LU_METER_CONDITIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrLU_METER_CONDITIONS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrLU_METER_CONDITIONS): ArrLU_METER_CONDITIONS.AsObject;
  static serializeBinaryToWriter(message: ArrLU_METER_CONDITIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrLU_METER_CONDITIONS;
  static deserializeBinaryFromReader(message: ArrLU_METER_CONDITIONS, reader: jspb.BinaryReader): ArrLU_METER_CONDITIONS;
}

export namespace ArrLU_METER_CONDITIONS {
  export type AsObject = {
    luMeterConditionsList: Array<LU_METER_CONDITIONS.AsObject>,
  }
}

export class LU_METER_TYPE extends jspb.Message {
  getCode(): string;
  setCode(value: string): LU_METER_TYPE;

  getDescription(): string;
  setDescription(value: string): LU_METER_TYPE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_METER_TYPE.AsObject;
  static toObject(includeInstance: boolean, msg: LU_METER_TYPE): LU_METER_TYPE.AsObject;
  static serializeBinaryToWriter(message: LU_METER_TYPE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_METER_TYPE;
  static deserializeBinaryFromReader(message: LU_METER_TYPE, reader: jspb.BinaryReader): LU_METER_TYPE;
}

export namespace LU_METER_TYPE {
  export type AsObject = {
    code: string,
    description: string,
  }
}

export class Query extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): Query;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    query: string,
  }
}

export class ArrCST_METER extends jspb.Message {
  getCstMeterList(): Array<CST_METER>;
  setCstMeterList(value: Array<CST_METER>): ArrCST_METER;
  clearCstMeterList(): ArrCST_METER;
  addCstMeter(value?: CST_METER, index?: number): CST_METER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCST_METER.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCST_METER): ArrCST_METER.AsObject;
  static serializeBinaryToWriter(message: ArrCST_METER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCST_METER;
  static deserializeBinaryFromReader(message: ArrCST_METER, reader: jspb.BinaryReader): ArrCST_METER;
}

export namespace ArrCST_METER {
  export type AsObject = {
    cstMeterList: Array<CST_METER.AsObject>,
  }
}

export class ArrCST_METER_MAS extends jspb.Message {
  getCstMeterList(): Array<CST_METER_MAS>;
  setCstMeterList(value: Array<CST_METER_MAS>): ArrCST_METER_MAS;
  clearCstMeterList(): ArrCST_METER_MAS;
  addCstMeter(value?: CST_METER_MAS, index?: number): CST_METER_MAS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCST_METER_MAS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCST_METER_MAS): ArrCST_METER_MAS.AsObject;
  static serializeBinaryToWriter(message: ArrCST_METER_MAS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCST_METER_MAS;
  static deserializeBinaryFromReader(message: ArrCST_METER_MAS, reader: jspb.BinaryReader): ArrCST_METER_MAS;
}

export namespace ArrCST_METER_MAS {
  export type AsObject = {
    cstMeterList: Array<CST_METER_MAS.AsObject>,
  }
}

export class ChangeOldKey extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ChangeOldKey;

  getOldOldKey(): string;
  setOldOldKey(value: string): ChangeOldKey;

  getNewOldKey(): string;
  setNewOldKey(value: string): ChangeOldKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeOldKey.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeOldKey): ChangeOldKey.AsObject;
  static serializeBinaryToWriter(message: ChangeOldKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeOldKey;
  static deserializeBinaryFromReader(message: ChangeOldKey, reader: jspb.BinaryReader): ChangeOldKey;
}

export namespace ChangeOldKey {
  export type AsObject = {
    custkey: string,
    oldOldKey: string,
    newOldKey: string,
  }
}

export class ReverseBillRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ReverseBillRq;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): ReverseBillRq;
  hasBilngDate(): boolean;
  clearBilngDate(): ReverseBillRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReverseBillRq.AsObject;
  static toObject(includeInstance: boolean, msg: ReverseBillRq): ReverseBillRq.AsObject;
  static serializeBinaryToWriter(message: ReverseBillRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReverseBillRq;
  static deserializeBinaryFromReader(message: ReverseBillRq, reader: jspb.BinaryReader): ReverseBillRq;
}

export namespace ReverseBillRq {
  export type AsObject = {
    custkey: string,
    bilngDate?: date_pb.MasDateTime.AsObject,
  }
}

export class EditBillReads extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditBillReads;

  getPrRead(): number;
  setPrRead(value: number): EditBillReads;
  hasPrRead(): boolean;
  clearPrRead(): EditBillReads;

  getCrRead(): number;
  setCrRead(value: number): EditBillReads;
  hasCrRead(): boolean;
  clearCrRead(): EditBillReads;

  getOldEstim(): number;
  setOldEstim(value: number): EditBillReads;
  hasOldEstim(): boolean;
  clearOldEstim(): EditBillReads;

  getNewEstim(): number;
  setNewEstim(value: number): EditBillReads;
  hasNewEstim(): boolean;
  clearNewEstim(): EditBillReads;

  getMeterCondition(): string;
  setMeterCondition(value: string): EditBillReads;
  hasMeterCondition(): boolean;
  clearMeterCondition(): EditBillReads;

  getIsTarakom(): boolean;
  setIsTarakom(value: boolean): EditBillReads;
  hasIsTarakom(): boolean;
  clearIsTarakom(): EditBillReads;

  getBillingDate(): date_pb.MasDateTime | undefined;
  setBillingDate(value?: date_pb.MasDateTime): EditBillReads;
  hasBillingDate(): boolean;
  clearBillingDate(): EditBillReads;

  getAccDate(): date_pb.MasDateTime | undefined;
  setAccDate(value?: date_pb.MasDateTime): EditBillReads;
  hasAccDate(): boolean;
  clearAccDate(): EditBillReads;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditBillReads.AsObject;
  static toObject(includeInstance: boolean, msg: EditBillReads): EditBillReads.AsObject;
  static serializeBinaryToWriter(message: EditBillReads, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditBillReads;
  static deserializeBinaryFromReader(message: EditBillReads, reader: jspb.BinaryReader): EditBillReads;
}

export namespace EditBillReads {
  export type AsObject = {
    custkey: string,
    prRead?: number,
    crRead?: number,
    oldEstim?: number,
    newEstim?: number,
    meterCondition?: string,
    isTarakom?: boolean,
    billingDate?: date_pb.MasDateTime.AsObject,
    accDate?: date_pb.MasDateTime.AsObject,
  }
}

export class DESCREPANCIES_NOACCESS extends jspb.Message {
  getCode(): number;
  setCode(value: number): DESCREPANCIES_NOACCESS;

  getDescribe(): string;
  setDescribe(value: string): DESCREPANCIES_NOACCESS;
  hasDescribe(): boolean;
  clearDescribe(): DESCREPANCIES_NOACCESS;

  getAction(): number;
  setAction(value: number): DESCREPANCIES_NOACCESS;
  hasAction(): boolean;
  clearAction(): DESCREPANCIES_NOACCESS;

  getActionMsg(): string;
  setActionMsg(value: string): DESCREPANCIES_NOACCESS;
  hasActionMsg(): boolean;
  clearActionMsg(): DESCREPANCIES_NOACCESS;

  getActivity(): number;
  setActivity(value: number): DESCREPANCIES_NOACCESS;
  hasActivity(): boolean;
  clearActivity(): DESCREPANCIES_NOACCESS;

  getMeterOpStatus(): number;
  setMeterOpStatus(value: number): DESCREPANCIES_NOACCESS;
  hasMeterOpStatus(): boolean;
  clearMeterOpStatus(): DESCREPANCIES_NOACCESS;

  getFMeterCondition(): string;
  setFMeterCondition(value: string): DESCREPANCIES_NOACCESS;
  hasFMeterCondition(): boolean;
  clearFMeterCondition(): DESCREPANCIES_NOACCESS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DESCREPANCIES_NOACCESS.AsObject;
  static toObject(includeInstance: boolean, msg: DESCREPANCIES_NOACCESS): DESCREPANCIES_NOACCESS.AsObject;
  static serializeBinaryToWriter(message: DESCREPANCIES_NOACCESS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DESCREPANCIES_NOACCESS;
  static deserializeBinaryFromReader(message: DESCREPANCIES_NOACCESS, reader: jspb.BinaryReader): DESCREPANCIES_NOACCESS;
}

export namespace DESCREPANCIES_NOACCESS {
  export type AsObject = {
    code: number,
    describe?: string,
    action?: number,
    actionMsg?: string,
    activity?: number,
    meterOpStatus?: number,
    fMeterCondition?: string,
  }
}

export class ArrDESCREPANCIES_NOACCESS extends jspb.Message {
  getDescrepanciesNoaccessList(): Array<DESCREPANCIES_NOACCESS>;
  setDescrepanciesNoaccessList(value: Array<DESCREPANCIES_NOACCESS>): ArrDESCREPANCIES_NOACCESS;
  clearDescrepanciesNoaccessList(): ArrDESCREPANCIES_NOACCESS;
  addDescrepanciesNoaccess(value?: DESCREPANCIES_NOACCESS, index?: number): DESCREPANCIES_NOACCESS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrDESCREPANCIES_NOACCESS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrDESCREPANCIES_NOACCESS): ArrDESCREPANCIES_NOACCESS.AsObject;
  static serializeBinaryToWriter(message: ArrDESCREPANCIES_NOACCESS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrDESCREPANCIES_NOACCESS;
  static deserializeBinaryFromReader(message: ArrDESCREPANCIES_NOACCESS, reader: jspb.BinaryReader): ArrDESCREPANCIES_NOACCESS;
}

export namespace ArrDESCREPANCIES_NOACCESS {
  export type AsObject = {
    descrepanciesNoaccessList: Array<DESCREPANCIES_NOACCESS.AsObject>,
  }
}

export class HELPER_OBJECTS_VALS extends jspb.Message {
  getAppId(): number;
  setAppId(value: number): HELPER_OBJECTS_VALS;

  getObjectName(): string;
  setObjectName(value: string): HELPER_OBJECTS_VALS;

  getObjectEquation(): string;
  setObjectEquation(value: string): HELPER_OBJECTS_VALS;

  getObjectValue(): number;
  setObjectValue(value: number): HELPER_OBJECTS_VALS;

  getRowNum(): number;
  setRowNum(value: number): HELPER_OBJECTS_VALS;

  getCancelledApp(): boolean;
  setCancelledApp(value: boolean): HELPER_OBJECTS_VALS;

  getIsPosted(): boolean;
  setIsPosted(value: boolean): HELPER_OBJECTS_VALS;

  getIsEnablled(): boolean;
  setIsEnablled(value: boolean): HELPER_OBJECTS_VALS;

  getVat(): number;
  setVat(value: number): HELPER_OBJECTS_VALS;
  hasVat(): boolean;
  clearVat(): HELPER_OBJECTS_VALS;

  getAdmin(): number;
  setAdmin(value: number): HELPER_OBJECTS_VALS;
  hasAdmin(): boolean;
  clearAdmin(): HELPER_OBJECTS_VALS;

  getAdminVat(): number;
  setAdminVat(value: number): HELPER_OBJECTS_VALS;
  hasAdminVat(): boolean;
  clearAdminVat(): HELPER_OBJECTS_VALS;

  getIsMain(): boolean;
  setIsMain(value: boolean): HELPER_OBJECTS_VALS;
  hasIsMain(): boolean;
  clearIsMain(): HELPER_OBJECTS_VALS;

  getOriginalEquation(): string;
  setOriginalEquation(value: string): HELPER_OBJECTS_VALS;
  hasOriginalEquation(): boolean;
  clearOriginalEquation(): HELPER_OBJECTS_VALS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HELPER_OBJECTS_VALS.AsObject;
  static toObject(includeInstance: boolean, msg: HELPER_OBJECTS_VALS): HELPER_OBJECTS_VALS.AsObject;
  static serializeBinaryToWriter(message: HELPER_OBJECTS_VALS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HELPER_OBJECTS_VALS;
  static deserializeBinaryFromReader(message: HELPER_OBJECTS_VALS, reader: jspb.BinaryReader): HELPER_OBJECTS_VALS;
}

export namespace HELPER_OBJECTS_VALS {
  export type AsObject = {
    appId: number,
    objectName: string,
    objectEquation: string,
    objectValue: number,
    rowNum: number,
    cancelledApp: boolean,
    isPosted: boolean,
    isEnablled: boolean,
    vat?: number,
    admin?: number,
    adminVat?: number,
    isMain?: boolean,
    originalEquation?: string,
  }
}

export class HELPER_ERROR extends jspb.Message {
  getAppId(): number;
  setAppId(value: number): HELPER_ERROR;

  getError(): string;
  setError(value: string): HELPER_ERROR;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HELPER_ERROR.AsObject;
  static toObject(includeInstance: boolean, msg: HELPER_ERROR): HELPER_ERROR.AsObject;
  static serializeBinaryToWriter(message: HELPER_ERROR, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HELPER_ERROR;
  static deserializeBinaryFromReader(message: HELPER_ERROR, reader: jspb.BinaryReader): HELPER_ERROR;
}

export namespace HELPER_ERROR {
  export type AsObject = {
    appId: number,
    error: string,
  }
}

export class ArrCustomerMeterConnnections extends jspb.Message {
  getCstConnectionList(): Array<CST_CONNECTION>;
  setCstConnectionList(value: Array<CST_CONNECTION>): ArrCustomerMeterConnnections;
  clearCstConnectionList(): ArrCustomerMeterConnnections;
  addCstConnection(value?: CST_CONNECTION, index?: number): CST_CONNECTION;

  getCstMeterList(): Array<CST_METER>;
  setCstMeterList(value: Array<CST_METER>): ArrCustomerMeterConnnections;
  clearCstMeterList(): ArrCustomerMeterConnnections;
  addCstMeter(value?: CST_METER, index?: number): CST_METER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustomerMeterConnnections.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustomerMeterConnnections): ArrCustomerMeterConnnections.AsObject;
  static serializeBinaryToWriter(message: ArrCustomerMeterConnnections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustomerMeterConnnections;
  static deserializeBinaryFromReader(message: ArrCustomerMeterConnnections, reader: jspb.BinaryReader): ArrCustomerMeterConnnections;
}

export namespace ArrCustomerMeterConnnections {
  export type AsObject = {
    cstConnectionList: Array<CST_CONNECTION.AsObject>,
    cstMeterList: Array<CST_METER.AsObject>,
  }
}

export class CLEAN_AMT_VALUES extends jspb.Message {
  getId(): number;
  setId(value: number): CLEAN_AMT_VALUES;

  getDescripton(): string;
  setDescripton(value: string): CLEAN_AMT_VALUES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CLEAN_AMT_VALUES.AsObject;
  static toObject(includeInstance: boolean, msg: CLEAN_AMT_VALUES): CLEAN_AMT_VALUES.AsObject;
  static serializeBinaryToWriter(message: CLEAN_AMT_VALUES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CLEAN_AMT_VALUES;
  static deserializeBinaryFromReader(message: CLEAN_AMT_VALUES, reader: jspb.BinaryReader): CLEAN_AMT_VALUES;
}

export namespace CLEAN_AMT_VALUES {
  export type AsObject = {
    id: number,
    descripton: string,
  }
}

export class ArrCLEAN_AMT_VALUES extends jspb.Message {
  getCleanAmtValuesList(): Array<CLEAN_AMT_VALUES>;
  setCleanAmtValuesList(value: Array<CLEAN_AMT_VALUES>): ArrCLEAN_AMT_VALUES;
  clearCleanAmtValuesList(): ArrCLEAN_AMT_VALUES;
  addCleanAmtValues(value?: CLEAN_AMT_VALUES, index?: number): CLEAN_AMT_VALUES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCLEAN_AMT_VALUES.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCLEAN_AMT_VALUES): ArrCLEAN_AMT_VALUES.AsObject;
  static serializeBinaryToWriter(message: ArrCLEAN_AMT_VALUES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCLEAN_AMT_VALUES;
  static deserializeBinaryFromReader(message: ArrCLEAN_AMT_VALUES, reader: jspb.BinaryReader): ArrCLEAN_AMT_VALUES;
}

export namespace ArrCLEAN_AMT_VALUES {
  export type AsObject = {
    cleanAmtValuesList: Array<CLEAN_AMT_VALUES.AsObject>,
  }
}

export class CUSTOMER_DTLS extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_DTLS;
  hasStationNo(): boolean;
  clearStationNo(): CUSTOMER_DTLS;

  getStationName(): string;
  setStationName(value: string): CUSTOMER_DTLS;
  hasStationName(): boolean;
  clearStationName(): CUSTOMER_DTLS;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_DTLS;
  hasBillgroup(): boolean;
  clearBillgroup(): CUSTOMER_DTLS;

  getBillgroupName(): string;
  setBillgroupName(value: string): CUSTOMER_DTLS;
  hasBillgroupName(): boolean;
  clearBillgroupName(): CUSTOMER_DTLS;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_DTLS;
  hasBookNo(): boolean;
  clearBookNo(): CUSTOMER_DTLS;

  getBookName(): string;
  setBookName(value: string): CUSTOMER_DTLS;
  hasBookName(): boolean;
  clearBookName(): CUSTOMER_DTLS;

  getWalkNo(): string;
  setWalkNo(value: string): CUSTOMER_DTLS;
  hasWalkNo(): boolean;
  clearWalkNo(): CUSTOMER_DTLS;

  getSeqNo(): number;
  setSeqNo(value: number): CUSTOMER_DTLS;
  hasSeqNo(): boolean;
  clearSeqNo(): CUSTOMER_DTLS;

  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_DTLS;
  hasCustkey(): boolean;
  clearCustkey(): CUSTOMER_DTLS;

  getSurname(): string;
  setSurname(value: string): CUSTOMER_DTLS;
  hasSurname(): boolean;
  clearSurname(): CUSTOMER_DTLS;

  getUaAdress1(): string;
  setUaAdress1(value: string): CUSTOMER_DTLS;
  hasUaAdress1(): boolean;
  clearUaAdress1(): CUSTOMER_DTLS;

  getUaAdress2(): string;
  setUaAdress2(value: string): CUSTOMER_DTLS;
  hasUaAdress2(): boolean;
  clearUaAdress2(): CUSTOMER_DTLS;

  getUaAdress3(): string;
  setUaAdress3(value: string): CUSTOMER_DTLS;
  hasUaAdress3(): boolean;
  clearUaAdress3(): CUSTOMER_DTLS;

  getUaAdress4(): string;
  setUaAdress4(value: string): CUSTOMER_DTLS;
  hasUaAdress4(): boolean;
  clearUaAdress4(): CUSTOMER_DTLS;

  getOldKey(): string;
  setOldKey(value: string): CUSTOMER_DTLS;
  hasOldKey(): boolean;
  clearOldKey(): CUSTOMER_DTLS;

  getNoUnits(): number;
  setNoUnits(value: number): CUSTOMER_DTLS;
  hasNoUnits(): boolean;
  clearNoUnits(): CUSTOMER_DTLS;

  getNoCusomer(): number;
  setNoCusomer(value: number): CUSTOMER_DTLS;
  hasNoCusomer(): boolean;
  clearNoCusomer(): CUSTOMER_DTLS;

  getCtypegrpId(): string;
  setCtypegrpId(value: string): CUSTOMER_DTLS;
  hasCtypegrpId(): boolean;
  clearCtypegrpId(): CUSTOMER_DTLS;

  getCtypeGroupDescription(): string;
  setCtypeGroupDescription(value: string): CUSTOMER_DTLS;
  hasCtypeGroupDescription(): boolean;
  clearCtypeGroupDescription(): CUSTOMER_DTLS;

  getCType(): string;
  setCType(value: string): CUSTOMER_DTLS;
  hasCType(): boolean;
  clearCType(): CUSTOMER_DTLS;

  getCtypeDescription(): string;
  setCtypeDescription(value: string): CUSTOMER_DTLS;
  hasCtypeDescription(): boolean;
  clearCtypeDescription(): CUSTOMER_DTLS;

  getMeterCondition(): string;
  setMeterCondition(value: string): CUSTOMER_DTLS;
  hasMeterCondition(): boolean;
  clearMeterCondition(): CUSTOMER_DTLS;

  getMeterConditionDescribe(): string;
  setMeterConditionDescribe(value: string): CUSTOMER_DTLS;
  hasMeterConditionDescribe(): boolean;
  clearMeterConditionDescribe(): CUSTOMER_DTLS;

  getMeterSize(): string;
  setMeterSize(value: string): CUSTOMER_DTLS;
  hasMeterSize(): boolean;
  clearMeterSize(): CUSTOMER_DTLS;

  getMeterSizeDescribe(): string;
  setMeterSizeDescribe(value: string): CUSTOMER_DTLS;
  hasMeterSizeDescribe(): boolean;
  clearMeterSizeDescribe(): CUSTOMER_DTLS;

  getVirtualStationNo(): number;
  setVirtualStationNo(value: number): CUSTOMER_DTLS;
  hasVirtualStationNo(): boolean;
  clearVirtualStationNo(): CUSTOMER_DTLS;

  getSarvType(): string;
  setSarvType(value: string): CUSTOMER_DTLS;
  hasSarvType(): boolean;
  clearSarvType(): CUSTOMER_DTLS;

  getConStatus(): string;
  setConStatus(value: string): CUSTOMER_DTLS;
  hasConStatus(): boolean;
  clearConStatus(): CUSTOMER_DTLS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_DTLS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_DTLS): CUSTOMER_DTLS.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_DTLS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_DTLS;
  static deserializeBinaryFromReader(message: CUSTOMER_DTLS, reader: jspb.BinaryReader): CUSTOMER_DTLS;
}

export namespace CUSTOMER_DTLS {
  export type AsObject = {
    stationNo?: number,
    stationName?: string,
    billgroup?: string,
    billgroupName?: string,
    bookNo?: string,
    bookName?: string,
    walkNo?: string,
    seqNo?: number,
    custkey?: string,
    surname?: string,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    oldKey?: string,
    noUnits?: number,
    noCusomer?: number,
    ctypegrpId?: string,
    ctypeGroupDescription?: string,
    cType?: string,
    ctypeDescription?: string,
    meterCondition?: string,
    meterConditionDescribe?: string,
    meterSize?: string,
    meterSizeDescribe?: string,
    virtualStationNo?: number,
    sarvType?: string,
    conStatus?: string,
  }
}

export class ArrCUSTOMER_DTLS extends jspb.Message {
  getCustomerDtlsList(): Array<CUSTOMER_DTLS>;
  setCustomerDtlsList(value: Array<CUSTOMER_DTLS>): ArrCUSTOMER_DTLS;
  clearCustomerDtlsList(): ArrCUSTOMER_DTLS;
  addCustomerDtls(value?: CUSTOMER_DTLS, index?: number): CUSTOMER_DTLS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCUSTOMER_DTLS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCUSTOMER_DTLS): ArrCUSTOMER_DTLS.AsObject;
  static serializeBinaryToWriter(message: ArrCUSTOMER_DTLS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCUSTOMER_DTLS;
  static deserializeBinaryFromReader(message: ArrCUSTOMER_DTLS, reader: jspb.BinaryReader): ArrCUSTOMER_DTLS;
}

export namespace ArrCUSTOMER_DTLS {
  export type AsObject = {
    customerDtlsList: Array<CUSTOMER_DTLS.AsObject>,
  }
}

export class ArrCUSTOMER_DTLS_VIEW extends jspb.Message {
  getCustomerDtlsList(): Array<CUSTOMER_DTLS_VIEW>;
  setCustomerDtlsList(value: Array<CUSTOMER_DTLS_VIEW>): ArrCUSTOMER_DTLS_VIEW;
  clearCustomerDtlsList(): ArrCUSTOMER_DTLS_VIEW;
  addCustomerDtls(value?: CUSTOMER_DTLS_VIEW, index?: number): CUSTOMER_DTLS_VIEW;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCUSTOMER_DTLS_VIEW.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCUSTOMER_DTLS_VIEW): ArrCUSTOMER_DTLS_VIEW.AsObject;
  static serializeBinaryToWriter(message: ArrCUSTOMER_DTLS_VIEW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCUSTOMER_DTLS_VIEW;
  static deserializeBinaryFromReader(message: ArrCUSTOMER_DTLS_VIEW, reader: jspb.BinaryReader): ArrCUSTOMER_DTLS_VIEW;
}

export namespace ArrCUSTOMER_DTLS_VIEW {
  export type AsObject = {
    customerDtlsList: Array<CUSTOMER_DTLS_VIEW.AsObject>,
  }
}

export class GroupBy3Req extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): GroupBy3Req;
  hasStationNo(): boolean;
  clearStationNo(): GroupBy3Req;

  getPerCType(): boolean;
  setPerCType(value: boolean): GroupBy3Req;
  hasPerCType(): boolean;
  clearPerCType(): GroupBy3Req;

  getPerStation(): boolean;
  setPerStation(value: boolean): GroupBy3Req;
  hasPerStation(): boolean;
  clearPerStation(): GroupBy3Req;

  getPerBilngDate(): boolean;
  setPerBilngDate(value: boolean): GroupBy3Req;
  hasPerBilngDate(): boolean;
  clearPerBilngDate(): GroupBy3Req;

  getPerCustkey(): boolean;
  setPerCustkey(value: boolean): GroupBy3Req;
  hasPerCustkey(): boolean;
  clearPerCustkey(): GroupBy3Req;

  getPerMeterSize(): boolean;
  setPerMeterSize(value: boolean): GroupBy3Req;
  hasPerMeterSize(): boolean;
  clearPerMeterSize(): GroupBy3Req;

  getPerSewerStatus(): boolean;
  setPerSewerStatus(value: boolean): GroupBy3Req;
  hasPerSewerStatus(): boolean;
  clearPerSewerStatus(): GroupBy3Req;

  getPerMeterCondition(): boolean;
  setPerMeterCondition(value: boolean): GroupBy3Req;
  hasPerMeterCondition(): boolean;
  clearPerMeterCondition(): GroupBy3Req;

  getPerBillgroup(): boolean;
  setPerBillgroup(value: boolean): GroupBy3Req;
  hasPerBillgroup(): boolean;
  clearPerBillgroup(): GroupBy3Req;

  getPerMeterMake(): boolean;
  setPerMeterMake(value: boolean): GroupBy3Req;
  hasPerMeterMake(): boolean;
  clearPerMeterMake(): GroupBy3Req;

  getPerCTypeGroup(): boolean;
  setPerCTypeGroup(value: boolean): GroupBy3Req;
  hasPerCTypeGroup(): boolean;
  clearPerCTypeGroup(): GroupBy3Req;

  getPerReadType(): boolean;
  setPerReadType(value: boolean): GroupBy3Req;
  hasPerReadType(): boolean;
  clearPerReadType(): GroupBy3Req;

  getPerConStatus(): boolean;
  setPerConStatus(value: boolean): GroupBy3Req;
  hasPerConStatus(): boolean;
  clearPerConStatus(): GroupBy3Req;

  getFilter(): string;
  setFilter(value: string): GroupBy3Req;
  hasFilter(): boolean;
  clearFilter(): GroupBy3Req;

  getHaving(): string;
  setHaving(value: string): GroupBy3Req;
  hasHaving(): boolean;
  clearHaving(): GroupBy3Req;

  getHasMeter(): number;
  setHasMeter(value: number): GroupBy3Req;
  hasHasMeter(): boolean;
  clearHasMeter(): GroupBy3Req;

  getIsCody(): number;
  setIsCody(value: number): GroupBy3Req;
  hasIsCody(): boolean;
  clearIsCody(): GroupBy3Req;

  getIsGov(): number;
  setIsGov(value: number): GroupBy3Req;
  hasIsGov(): boolean;
  clearIsGov(): GroupBy3Req;

  getBillgroup(): string;
  setBillgroup(value: string): GroupBy3Req;
  hasBillgroup(): boolean;
  clearBillgroup(): GroupBy3Req;

  getWalkNo(): number;
  setWalkNo(value: number): GroupBy3Req;
  hasWalkNo(): boolean;
  clearWalkNo(): GroupBy3Req;

  getBookNo(): string;
  setBookNo(value: string): GroupBy3Req;
  hasBookNo(): boolean;
  clearBookNo(): GroupBy3Req;

  getCType(): string;
  setCType(value: string): GroupBy3Req;
  hasCType(): boolean;
  clearCType(): GroupBy3Req;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupBy3Req.AsObject;
  static toObject(includeInstance: boolean, msg: GroupBy3Req): GroupBy3Req.AsObject;
  static serializeBinaryToWriter(message: GroupBy3Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupBy3Req;
  static deserializeBinaryFromReader(message: GroupBy3Req, reader: jspb.BinaryReader): GroupBy3Req;
}

export namespace GroupBy3Req {
  export type AsObject = {
    stationNo?: number,
    perCType?: boolean,
    perStation?: boolean,
    perBilngDate?: boolean,
    perCustkey?: boolean,
    perMeterSize?: boolean,
    perSewerStatus?: boolean,
    perMeterCondition?: boolean,
    perBillgroup?: boolean,
    perMeterMake?: boolean,
    perCTypeGroup?: boolean,
    perReadType?: boolean,
    perConStatus?: boolean,
    filter?: string,
    having?: string,
    hasMeter?: number,
    isCody?: number,
    isGov?: number,
    billgroup?: string,
    walkNo?: number,
    bookNo?: string,
    cType?: string,
  }
}

export class CUSTOMER_DTLS_VIEW extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_DTLS_VIEW;
  hasStationNo(): boolean;
  clearStationNo(): CUSTOMER_DTLS_VIEW;

  getStationName(): string;
  setStationName(value: string): CUSTOMER_DTLS_VIEW;
  hasStationName(): boolean;
  clearStationName(): CUSTOMER_DTLS_VIEW;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_DTLS_VIEW;
  hasBillgroup(): boolean;
  clearBillgroup(): CUSTOMER_DTLS_VIEW;

  getBillgroupName(): string;
  setBillgroupName(value: string): CUSTOMER_DTLS_VIEW;
  hasBillgroupName(): boolean;
  clearBillgroupName(): CUSTOMER_DTLS_VIEW;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_DTLS_VIEW;
  hasBookNo(): boolean;
  clearBookNo(): CUSTOMER_DTLS_VIEW;

  getBookName(): string;
  setBookName(value: string): CUSTOMER_DTLS_VIEW;
  hasBookName(): boolean;
  clearBookName(): CUSTOMER_DTLS_VIEW;

  getWalkNo(): string;
  setWalkNo(value: string): CUSTOMER_DTLS_VIEW;
  hasWalkNo(): boolean;
  clearWalkNo(): CUSTOMER_DTLS_VIEW;

  getSeqNo(): number;
  setSeqNo(value: number): CUSTOMER_DTLS_VIEW;
  hasSeqNo(): boolean;
  clearSeqNo(): CUSTOMER_DTLS_VIEW;

  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_DTLS_VIEW;
  hasCustkey(): boolean;
  clearCustkey(): CUSTOMER_DTLS_VIEW;

  getSurname(): string;
  setSurname(value: string): CUSTOMER_DTLS_VIEW;
  hasSurname(): boolean;
  clearSurname(): CUSTOMER_DTLS_VIEW;

  getUaAdress1(): string;
  setUaAdress1(value: string): CUSTOMER_DTLS_VIEW;
  hasUaAdress1(): boolean;
  clearUaAdress1(): CUSTOMER_DTLS_VIEW;

  getUaAdress2(): string;
  setUaAdress2(value: string): CUSTOMER_DTLS_VIEW;
  hasUaAdress2(): boolean;
  clearUaAdress2(): CUSTOMER_DTLS_VIEW;

  getUaAdress3(): string;
  setUaAdress3(value: string): CUSTOMER_DTLS_VIEW;
  hasUaAdress3(): boolean;
  clearUaAdress3(): CUSTOMER_DTLS_VIEW;

  getUaAdress4(): string;
  setUaAdress4(value: string): CUSTOMER_DTLS_VIEW;
  hasUaAdress4(): boolean;
  clearUaAdress4(): CUSTOMER_DTLS_VIEW;

  getOldKey(): string;
  setOldKey(value: string): CUSTOMER_DTLS_VIEW;
  hasOldKey(): boolean;
  clearOldKey(): CUSTOMER_DTLS_VIEW;

  getNoUnits(): number;
  setNoUnits(value: number): CUSTOMER_DTLS_VIEW;
  hasNoUnits(): boolean;
  clearNoUnits(): CUSTOMER_DTLS_VIEW;

  getNoCusomer(): number;
  setNoCusomer(value: number): CUSTOMER_DTLS_VIEW;
  hasNoCusomer(): boolean;
  clearNoCusomer(): CUSTOMER_DTLS_VIEW;

  getCtypegrpId(): string;
  setCtypegrpId(value: string): CUSTOMER_DTLS_VIEW;
  hasCtypegrpId(): boolean;
  clearCtypegrpId(): CUSTOMER_DTLS_VIEW;

  getCtypeGroupDescription(): string;
  setCtypeGroupDescription(value: string): CUSTOMER_DTLS_VIEW;
  hasCtypeGroupDescription(): boolean;
  clearCtypeGroupDescription(): CUSTOMER_DTLS_VIEW;

  getCType(): string;
  setCType(value: string): CUSTOMER_DTLS_VIEW;
  hasCType(): boolean;
  clearCType(): CUSTOMER_DTLS_VIEW;

  getCtypeDescription(): string;
  setCtypeDescription(value: string): CUSTOMER_DTLS_VIEW;
  hasCtypeDescription(): boolean;
  clearCtypeDescription(): CUSTOMER_DTLS_VIEW;

  getMeterCondition(): string;
  setMeterCondition(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterCondition(): boolean;
  clearMeterCondition(): CUSTOMER_DTLS_VIEW;

  getMeterConditionDescribe(): string;
  setMeterConditionDescribe(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterConditionDescribe(): boolean;
  clearMeterConditionDescribe(): CUSTOMER_DTLS_VIEW;

  getMeterSize(): string;
  setMeterSize(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterSize(): boolean;
  clearMeterSize(): CUSTOMER_DTLS_VIEW;

  getMeterSizeDescribe(): string;
  setMeterSizeDescribe(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterSizeDescribe(): boolean;
  clearMeterSizeDescribe(): CUSTOMER_DTLS_VIEW;

  getVirtualStationNo(): number;
  setVirtualStationNo(value: number): CUSTOMER_DTLS_VIEW;
  hasVirtualStationNo(): boolean;
  clearVirtualStationNo(): CUSTOMER_DTLS_VIEW;

  getSarvType(): string;
  setSarvType(value: string): CUSTOMER_DTLS_VIEW;
  hasSarvType(): boolean;
  clearSarvType(): CUSTOMER_DTLS_VIEW;

  getConStatus(): string;
  setConStatus(value: string): CUSTOMER_DTLS_VIEW;
  hasConStatus(): boolean;
  clearConStatus(): CUSTOMER_DTLS_VIEW;

  getVirtualStationName(): string;
  setVirtualStationName(value: string): CUSTOMER_DTLS_VIEW;
  hasVirtualStationName(): boolean;
  clearVirtualStationName(): CUSTOMER_DTLS_VIEW;

  getBgGroupId(): string;
  setBgGroupId(value: string): CUSTOMER_DTLS_VIEW;
  hasBgGroupId(): boolean;
  clearBgGroupId(): CUSTOMER_DTLS_VIEW;

  getBgGroupName(): string;
  setBgGroupName(value: string): CUSTOMER_DTLS_VIEW;
  hasBgGroupName(): boolean;
  clearBgGroupName(): CUSTOMER_DTLS_VIEW;

  getCashierId(): string;
  setCashierId(value: string): CUSTOMER_DTLS_VIEW;
  hasCashierId(): boolean;
  clearCashierId(): CUSTOMER_DTLS_VIEW;

  getCashierName(): string;
  setCashierName(value: string): CUSTOMER_DTLS_VIEW;
  hasCashierName(): boolean;
  clearCashierName(): CUSTOMER_DTLS_VIEW;

  getOldGroup(): string;
  setOldGroup(value: string): CUSTOMER_DTLS_VIEW;
  hasOldGroup(): boolean;
  clearOldGroup(): CUSTOMER_DTLS_VIEW;

  getOldGroupName(): string;
  setOldGroupName(value: string): CUSTOMER_DTLS_VIEW;
  hasOldGroupName(): boolean;
  clearOldGroupName(): CUSTOMER_DTLS_VIEW;

  getFileNo(): string;
  setFileNo(value: string): CUSTOMER_DTLS_VIEW;
  hasFileNo(): boolean;
  clearFileNo(): CUSTOMER_DTLS_VIEW;

  getBildingNo(): string;
  setBildingNo(value: string): CUSTOMER_DTLS_VIEW;
  hasBildingNo(): boolean;
  clearBildingNo(): CUSTOMER_DTLS_VIEW;

  getCustRegsiterNo(): string;
  setCustRegsiterNo(value: string): CUSTOMER_DTLS_VIEW;
  hasCustRegsiterNo(): boolean;
  clearCustRegsiterNo(): CUSTOMER_DTLS_VIEW;

  getCustSeq(): string;
  setCustSeq(value: string): CUSTOMER_DTLS_VIEW;
  hasCustSeq(): boolean;
  clearCustSeq(): CUSTOMER_DTLS_VIEW;

  getIdNo(): string;
  setIdNo(value: string): CUSTOMER_DTLS_VIEW;
  hasIdNo(): boolean;
  clearIdNo(): CUSTOMER_DTLS_VIEW;

  getTaxNo(): string;
  setTaxNo(value: string): CUSTOMER_DTLS_VIEW;
  hasTaxNo(): boolean;
  clearTaxNo(): CUSTOMER_DTLS_VIEW;

  getTelNo(): string;
  setTelNo(value: string): CUSTOMER_DTLS_VIEW;
  hasTelNo(): boolean;
  clearTelNo(): CUSTOMER_DTLS_VIEW;

  getPropRef(): string;
  setPropRef(value: string): CUSTOMER_DTLS_VIEW;
  hasPropRef(): boolean;
  clearPropRef(): CUSTOMER_DTLS_VIEW;

  getPropNo(): string;
  setPropNo(value: string): CUSTOMER_DTLS_VIEW;
  hasPropNo(): boolean;
  clearPropNo(): CUSTOMER_DTLS_VIEW;

  getSrv1Alcto(): number;
  setSrv1Alcto(value: number): CUSTOMER_DTLS_VIEW;
  hasSrv1Alcto(): boolean;
  clearSrv1Alcto(): CUSTOMER_DTLS_VIEW;

  getSewerType(): number;
  setSewerType(value: number): CUSTOMER_DTLS_VIEW;
  hasSewerType(): boolean;
  clearSewerType(): CUSTOMER_DTLS_VIEW;

  getSrv2Alcto(): number;
  setSrv2Alcto(value: number): CUSTOMER_DTLS_VIEW;
  hasSrv2Alcto(): boolean;
  clearSrv2Alcto(): CUSTOMER_DTLS_VIEW;

  getWAssessedCons(): number;
  setWAssessedCons(value: number): CUSTOMER_DTLS_VIEW;
  hasWAssessedCons(): boolean;
  clearWAssessedCons(): CUSTOMER_DTLS_VIEW;

  getWtariffId(): string;
  setWtariffId(value: string): CUSTOMER_DTLS_VIEW;
  hasWtariffId(): boolean;
  clearWtariffId(): CUSTOMER_DTLS_VIEW;

  getStariffId(): string;
  setStariffId(value: string): CUSTOMER_DTLS_VIEW;
  hasStariffId(): boolean;
  clearStariffId(): CUSTOMER_DTLS_VIEW;

  getCtypegrpCode(): string;
  setCtypegrpCode(value: string): CUSTOMER_DTLS_VIEW;
  hasCtypegrpCode(): boolean;
  clearCtypegrpCode(): CUSTOMER_DTLS_VIEW;

  getConnNo(): number;
  setConnNo(value: number): CUSTOMER_DTLS_VIEW;
  hasConnNo(): boolean;
  clearConnNo(): CUSTOMER_DTLS_VIEW;

  getFSequnce(): number;
  setFSequnce(value: number): CUSTOMER_DTLS_VIEW;
  hasFSequnce(): boolean;
  clearFSequnce(): CUSTOMER_DTLS_VIEW;

  getReadSeq(): number;
  setReadSeq(value: number): CUSTOMER_DTLS_VIEW;
  hasReadSeq(): boolean;
  clearReadSeq(): CUSTOMER_DTLS_VIEW;

  getEstimCons(): number;
  setEstimCons(value: number): CUSTOMER_DTLS_VIEW;
  hasEstimCons(): boolean;
  clearEstimCons(): CUSTOMER_DTLS_VIEW;

  getConStatusDescription(): string;
  setConStatusDescription(value: string): CUSTOMER_DTLS_VIEW;
  hasConStatusDescription(): boolean;
  clearConStatusDescription(): CUSTOMER_DTLS_VIEW;

  getMeterType(): string;
  setMeterType(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterType(): boolean;
  clearMeterType(): CUSTOMER_DTLS_VIEW;

  getMeterRef(): string;
  setMeterRef(value: string): CUSTOMER_DTLS_VIEW;
  hasMeterRef(): boolean;
  clearMeterRef(): CUSTOMER_DTLS_VIEW;

  getIsPrepaid(): number;
  setIsPrepaid(value: number): CUSTOMER_DTLS_VIEW;
  hasIsPrepaid(): boolean;
  clearIsPrepaid(): CUSTOMER_DTLS_VIEW;

  getNoDials(): number;
  setNoDials(value: number): CUSTOMER_DTLS_VIEW;
  hasNoDials(): boolean;
  clearNoDials(): CUSTOMER_DTLS_VIEW;

  getKeyCode(): string;
  setKeyCode(value: string): CUSTOMER_DTLS_VIEW;
  hasKeyCode(): boolean;
  clearKeyCode(): CUSTOMER_DTLS_VIEW;

  getMake(): string;
  setMake(value: string): CUSTOMER_DTLS_VIEW;
  hasMake(): boolean;
  clearMake(): CUSTOMER_DTLS_VIEW;

  getMetrMake(): string;
  setMetrMake(value: string): CUSTOMER_DTLS_VIEW;
  hasMetrMake(): boolean;
  clearMetrMake(): CUSTOMER_DTLS_VIEW;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CUSTOMER_DTLS_VIEW;
  hasConnDate(): boolean;
  clearConnDate(): CUSTOMER_DTLS_VIEW;

  getDisconnReasonId(): string;
  setDisconnReasonId(value: string): CUSTOMER_DTLS_VIEW;
  hasDisconnReasonId(): boolean;
  clearDisconnReasonId(): CUSTOMER_DTLS_VIEW;

  getConsumerType(): string;
  setConsumerType(value: string): CUSTOMER_DTLS_VIEW;
  hasConsumerType(): boolean;
  clearConsumerType(): CUSTOMER_DTLS_VIEW;

  getPropType(): number;
  setPropType(value: number): CUSTOMER_DTLS_VIEW;
  hasPropType(): boolean;
  clearPropType(): CUSTOMER_DTLS_VIEW;

  getMtrStatus(): number;
  setMtrStatus(value: number): CUSTOMER_DTLS_VIEW;
  hasMtrStatus(): boolean;
  clearMtrStatus(): CUSTOMER_DTLS_VIEW;

  getMtrOpStatus(): number;
  setMtrOpStatus(value: number): CUSTOMER_DTLS_VIEW;
  hasMtrOpStatus(): boolean;
  clearMtrOpStatus(): CUSTOMER_DTLS_VIEW;

  getIsDeleted(): number;
  setIsDeleted(value: number): CUSTOMER_DTLS_VIEW;
  hasIsDeleted(): boolean;
  clearIsDeleted(): CUSTOMER_DTLS_VIEW;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_DTLS_VIEW.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_DTLS_VIEW): CUSTOMER_DTLS_VIEW.AsObject;
  static serializeBinaryToWriter(message: CUSTOMER_DTLS_VIEW, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_DTLS_VIEW;
  static deserializeBinaryFromReader(message: CUSTOMER_DTLS_VIEW, reader: jspb.BinaryReader): CUSTOMER_DTLS_VIEW;
}

export namespace CUSTOMER_DTLS_VIEW {
  export type AsObject = {
    stationNo?: number,
    stationName?: string,
    billgroup?: string,
    billgroupName?: string,
    bookNo?: string,
    bookName?: string,
    walkNo?: string,
    seqNo?: number,
    custkey?: string,
    surname?: string,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    oldKey?: string,
    noUnits?: number,
    noCusomer?: number,
    ctypegrpId?: string,
    ctypeGroupDescription?: string,
    cType?: string,
    ctypeDescription?: string,
    meterCondition?: string,
    meterConditionDescribe?: string,
    meterSize?: string,
    meterSizeDescribe?: string,
    virtualStationNo?: number,
    sarvType?: string,
    conStatus?: string,
    virtualStationName?: string,
    bgGroupId?: string,
    bgGroupName?: string,
    cashierId?: string,
    cashierName?: string,
    oldGroup?: string,
    oldGroupName?: string,
    fileNo?: string,
    bildingNo?: string,
    custRegsiterNo?: string,
    custSeq?: string,
    idNo?: string,
    taxNo?: string,
    telNo?: string,
    propRef?: string,
    propNo?: string,
    srv1Alcto?: number,
    sewerType?: number,
    srv2Alcto?: number,
    wAssessedCons?: number,
    wtariffId?: string,
    stariffId?: string,
    ctypegrpCode?: string,
    connNo?: number,
    fSequnce?: number,
    readSeq?: number,
    estimCons?: number,
    conStatusDescription?: string,
    meterType?: string,
    meterRef?: string,
    isPrepaid?: number,
    noDials?: number,
    keyCode?: string,
    make?: string,
    metrMake?: string,
    connDate?: date_pb.MasDateTime.AsObject,
    disconnReasonId?: string,
    consumerType?: string,
    propType?: number,
    mtrStatus?: number,
    mtrOpStatus?: number,
    isDeleted?: number,
  }
}

export class EditCustomerReadingRq extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): EditCustomerReadingRq;

  getReadingDate(): date_pb.MasDateTime | undefined;
  setReadingDate(value?: date_pb.MasDateTime): EditCustomerReadingRq;
  hasReadingDate(): boolean;
  clearReadingDate(): EditCustomerReadingRq;

  getReadingValue(): number;
  setReadingValue(value: number): EditCustomerReadingRq;

  getNotes(): string;
  setNotes(value: string): EditCustomerReadingRq;
  hasNotes(): boolean;
  clearNotes(): EditCustomerReadingRq;

  getCustkey(): string;
  setCustkey(value: string): EditCustomerReadingRq;
  hasCustkey(): boolean;
  clearCustkey(): EditCustomerReadingRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCustomerReadingRq.AsObject;
  static toObject(includeInstance: boolean, msg: EditCustomerReadingRq): EditCustomerReadingRq.AsObject;
  static serializeBinaryToWriter(message: EditCustomerReadingRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCustomerReadingRq;
  static deserializeBinaryFromReader(message: EditCustomerReadingRq, reader: jspb.BinaryReader): EditCustomerReadingRq;
}

export namespace EditCustomerReadingRq {
  export type AsObject = {
    meterId: number,
    readingDate?: date_pb.MasDateTime.AsObject,
    readingValue: number,
    notes?: string,
    custkey?: string,
  }
}

export class CreditBilingRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CreditBilingRq;

  getBillGroup(): string;
  setBillGroup(value: string): CreditBilingRq;
  hasBillGroup(): boolean;
  clearBillGroup(): CreditBilingRq;

  getEffectDate(): date_pb.MasDateTime | undefined;
  setEffectDate(value?: date_pb.MasDateTime): CreditBilingRq;
  hasEffectDate(): boolean;
  clearEffectDate(): CreditBilingRq;

  getAmount(): number;
  setAmount(value: number): CreditBilingRq;

  getNotes(): string;
  setNotes(value: string): CreditBilingRq;
  hasNotes(): boolean;
  clearNotes(): CreditBilingRq;

  getTransactionTypeId(): number;
  setTransactionTypeId(value: number): CreditBilingRq;
  hasTransactionTypeId(): boolean;
  clearTransactionTypeId(): CreditBilingRq;

  getDocumentNo(): string;
  setDocumentNo(value: string): CreditBilingRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreditBilingRq.AsObject;
  static toObject(includeInstance: boolean, msg: CreditBilingRq): CreditBilingRq.AsObject;
  static serializeBinaryToWriter(message: CreditBilingRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreditBilingRq;
  static deserializeBinaryFromReader(message: CreditBilingRq, reader: jspb.BinaryReader): CreditBilingRq;
}

export namespace CreditBilingRq {
  export type AsObject = {
    custkey: string,
    billGroup?: string,
    effectDate?: date_pb.MasDateTime.AsObject,
    amount: number,
    notes?: string,
    transactionTypeId?: number,
    documentNo: string,
  }
}

export class BANK_CHECK_COLLECTS extends jspb.Message {
  getBankCheckCollectsList(): Array<BANK_CHECK_COLLECT>;
  setBankCheckCollectsList(value: Array<BANK_CHECK_COLLECT>): BANK_CHECK_COLLECTS;
  clearBankCheckCollectsList(): BANK_CHECK_COLLECTS;
  addBankCheckCollects(value?: BANK_CHECK_COLLECT, index?: number): BANK_CHECK_COLLECT;

  getForUpdate(): boolean;
  setForUpdate(value: boolean): BANK_CHECK_COLLECTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BANK_CHECK_COLLECTS.AsObject;
  static toObject(includeInstance: boolean, msg: BANK_CHECK_COLLECTS): BANK_CHECK_COLLECTS.AsObject;
  static serializeBinaryToWriter(message: BANK_CHECK_COLLECTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BANK_CHECK_COLLECTS;
  static deserializeBinaryFromReader(message: BANK_CHECK_COLLECTS, reader: jspb.BinaryReader): BANK_CHECK_COLLECTS;
}

export namespace BANK_CHECK_COLLECTS {
  export type AsObject = {
    bankCheckCollectsList: Array<BANK_CHECK_COLLECT.AsObject>,
    forUpdate: boolean,
  }
}

export class BANK_CHECK_COLLECT extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): BANK_CHECK_COLLECT;

  getOldKey(): string;
  setOldKey(value: string): BANK_CHECK_COLLECT;
  hasOldKey(): boolean;
  clearOldKey(): BANK_CHECK_COLLECT;

  getSurname(): string;
  setSurname(value: string): BANK_CHECK_COLLECT;
  hasSurname(): boolean;
  clearSurname(): BANK_CHECK_COLLECT;

  getBillGroup(): string;
  setBillGroup(value: string): BANK_CHECK_COLLECT;
  hasBillGroup(): boolean;
  clearBillGroup(): BANK_CHECK_COLLECT;

  getDepositDate(): date_pb.MasDateTime | undefined;
  setDepositDate(value?: date_pb.MasDateTime): BANK_CHECK_COLLECT;
  hasDepositDate(): boolean;
  clearDepositDate(): BANK_CHECK_COLLECT;

  getBankCheckNo(): string;
  setBankCheckNo(value: string): BANK_CHECK_COLLECT;
  hasBankCheckNo(): boolean;
  clearBankCheckNo(): BANK_CHECK_COLLECT;

  getBankCheckAmount(): number;
  setBankCheckAmount(value: number): BANK_CHECK_COLLECT;

  getBankCheckName(): string;
  setBankCheckName(value: string): BANK_CHECK_COLLECT;
  hasBankCheckName(): boolean;
  clearBankCheckName(): BANK_CHECK_COLLECT;

  getReceiptNo(): string;
  setReceiptNo(value: string): BANK_CHECK_COLLECT;
  hasReceiptNo(): boolean;
  clearReceiptNo(): BANK_CHECK_COLLECT;

  getDepositBank(): string;
  setDepositBank(value: string): BANK_CHECK_COLLECT;
  hasDepositBank(): boolean;
  clearDepositBank(): BANK_CHECK_COLLECT;

  getReceivalDate(): date_pb.MasDateTime | undefined;
  setReceivalDate(value?: date_pb.MasDateTime): BANK_CHECK_COLLECT;
  hasReceivalDate(): boolean;
  clearReceivalDate(): BANK_CHECK_COLLECT;

  getDueDate(): date_pb.MasDateTime | undefined;
  setDueDate(value?: date_pb.MasDateTime): BANK_CHECK_COLLECT;
  hasDueDate(): boolean;
  clearDueDate(): BANK_CHECK_COLLECT;

  getNotes(): string;
  setNotes(value: string): BANK_CHECK_COLLECT;
  hasNotes(): boolean;
  clearNotes(): BANK_CHECK_COLLECT;

  getSignature(): string;
  setSignature(value: string): BANK_CHECK_COLLECT;
  hasSignature(): boolean;
  clearSignature(): BANK_CHECK_COLLECT;

  getInsertedInFTrans(): number;
  setInsertedInFTrans(value: number): BANK_CHECK_COLLECT;
  hasInsertedInFTrans(): boolean;
  clearInsertedInFTrans(): BANK_CHECK_COLLECT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BANK_CHECK_COLLECT.AsObject;
  static toObject(includeInstance: boolean, msg: BANK_CHECK_COLLECT): BANK_CHECK_COLLECT.AsObject;
  static serializeBinaryToWriter(message: BANK_CHECK_COLLECT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BANK_CHECK_COLLECT;
  static deserializeBinaryFromReader(message: BANK_CHECK_COLLECT, reader: jspb.BinaryReader): BANK_CHECK_COLLECT;
}

export namespace BANK_CHECK_COLLECT {
  export type AsObject = {
    custkey: string,
    oldKey?: string,
    surname?: string,
    billGroup?: string,
    depositDate?: date_pb.MasDateTime.AsObject,
    bankCheckNo?: string,
    bankCheckAmount: number,
    bankCheckName?: string,
    receiptNo?: string,
    depositBank?: string,
    receivalDate?: date_pb.MasDateTime.AsObject,
    dueDate?: date_pb.MasDateTime.AsObject,
    notes?: string,
    signature?: string,
    insertedInFTrans?: number,
  }
}

export class ConsumpAmount extends jspb.Message {
  getWaterAmt(): number;
  setWaterAmt(value: number): ConsumpAmount;
  hasWaterAmt(): boolean;
  clearWaterAmt(): ConsumpAmount;

  getSewerAmt(): number;
  setSewerAmt(value: number): ConsumpAmount;
  hasSewerAmt(): boolean;
  clearSewerAmt(): ConsumpAmount;

  getCType(): string;
  setCType(value: string): ConsumpAmount;
  hasCType(): boolean;
  clearCType(): ConsumpAmount;

  getNoUnits(): number;
  setNoUnits(value: number): ConsumpAmount;
  hasNoUnits(): boolean;
  clearNoUnits(): ConsumpAmount;

  getIsTarakom(): boolean;
  setIsTarakom(value: boolean): ConsumpAmount;
  hasIsTarakom(): boolean;
  clearIsTarakom(): ConsumpAmount;

  getSewerConsump(): number;
  setSewerConsump(value: number): ConsumpAmount;
  hasSewerConsump(): boolean;
  clearSewerConsump(): ConsumpAmount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumpAmount.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumpAmount): ConsumpAmount.AsObject;
  static serializeBinaryToWriter(message: ConsumpAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumpAmount;
  static deserializeBinaryFromReader(message: ConsumpAmount, reader: jspb.BinaryReader): ConsumpAmount;
}

export namespace ConsumpAmount {
  export type AsObject = {
    waterAmt?: number,
    sewerAmt?: number,
    cType?: string,
    noUnits?: number,
    isTarakom?: boolean,
    sewerConsump?: number,
  }
}

export class PostFeesToBilling_ConsumpRemainRemoveMeter extends jspb.Message {
  getActivitypaid(): APP_FEES | undefined;
  setActivitypaid(value?: APP_FEES): PostFeesToBilling_ConsumpRemainRemoveMeter;
  hasActivitypaid(): boolean;
  clearActivitypaid(): PostFeesToBilling_ConsumpRemainRemoveMeter;

  getActivityfees(): APP_FEES | undefined;
  setActivityfees(value?: APP_FEES): PostFeesToBilling_ConsumpRemainRemoveMeter;
  hasActivityfees(): boolean;
  clearActivityfees(): PostFeesToBilling_ConsumpRemainRemoveMeter;

  getReadingconsump(): PROVIDING_NEW_READING | undefined;
  setReadingconsump(value?: PROVIDING_NEW_READING): PostFeesToBilling_ConsumpRemainRemoveMeter;
  hasReadingconsump(): boolean;
  clearReadingconsump(): PostFeesToBilling_ConsumpRemainRemoveMeter;

  getTrace(): APP_TRACER | undefined;
  setTrace(value?: APP_TRACER): PostFeesToBilling_ConsumpRemainRemoveMeter;
  hasTrace(): boolean;
  clearTrace(): PostFeesToBilling_ConsumpRemainRemoveMeter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostFeesToBilling_ConsumpRemainRemoveMeter.AsObject;
  static toObject(includeInstance: boolean, msg: PostFeesToBilling_ConsumpRemainRemoveMeter): PostFeesToBilling_ConsumpRemainRemoveMeter.AsObject;
  static serializeBinaryToWriter(message: PostFeesToBilling_ConsumpRemainRemoveMeter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostFeesToBilling_ConsumpRemainRemoveMeter;
  static deserializeBinaryFromReader(message: PostFeesToBilling_ConsumpRemainRemoveMeter, reader: jspb.BinaryReader): PostFeesToBilling_ConsumpRemainRemoveMeter;
}

export namespace PostFeesToBilling_ConsumpRemainRemoveMeter {
  export type AsObject = {
    activitypaid?: APP_FEES.AsObject,
    activityfees?: APP_FEES.AsObject,
    readingconsump?: PROVIDING_NEW_READING.AsObject,
    trace?: APP_TRACER.AsObject,
  }
}

export class METER extends jspb.Message {
  getMeterType(): string;
  setMeterType(value: string): METER;
  hasMeterType(): boolean;
  clearMeterType(): METER;

  getMeterRef(): string;
  setMeterRef(value: string): METER;
  hasMeterRef(): boolean;
  clearMeterRef(): METER;

  getCondition(): string;
  setCondition(value: string): METER;
  hasCondition(): boolean;
  clearCondition(): METER;

  getSerialNo(): string;
  setSerialNo(value: string): METER;
  hasSerialNo(): boolean;
  clearSerialNo(): METER;

  getLastRead(): number;
  setLastRead(value: number): METER;
  hasLastRead(): boolean;
  clearLastRead(): METER;

  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): METER;
  hasRemovalDate(): boolean;
  clearRemovalDate(): METER;

  getReadDate(): date_pb.MasDateTime | undefined;
  setReadDate(value?: date_pb.MasDateTime): METER;
  hasReadDate(): boolean;
  clearReadDate(): METER;

  getMeterId(): number;
  setMeterId(value: number): METER;
  hasMeterId(): boolean;
  clearMeterId(): METER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): METER.AsObject;
  static toObject(includeInstance: boolean, msg: METER): METER.AsObject;
  static serializeBinaryToWriter(message: METER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): METER;
  static deserializeBinaryFromReader(message: METER, reader: jspb.BinaryReader): METER;
}

export namespace METER {
  export type AsObject = {
    meterType?: string,
    meterRef?: string,
    condition?: string,
    serialNo?: string,
    lastRead?: number,
    removalDate?: date_pb.MasDateTime.AsObject,
    readDate?: date_pb.MasDateTime.AsObject,
    meterId?: number,
  }
}

export class METERS extends jspb.Message {
  getMetersList(): Array<METER>;
  setMetersList(value: Array<METER>): METERS;
  clearMetersList(): METERS;
  addMeters(value?: METER, index?: number): METER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): METERS.AsObject;
  static toObject(includeInstance: boolean, msg: METERS): METERS.AsObject;
  static serializeBinaryToWriter(message: METERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): METERS;
  static deserializeBinaryFromReader(message: METERS, reader: jspb.BinaryReader): METERS;
}

export namespace METERS {
  export type AsObject = {
    metersList: Array<METER.AsObject>,
  }
}

export class Meter_Filter extends jspb.Message {
  getMessagefilter(): string;
  setMessagefilter(value: string): Meter_Filter;
  hasMessagefilter(): boolean;
  clearMessagefilter(): Meter_Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meter_Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Meter_Filter): Meter_Filter.AsObject;
  static serializeBinaryToWriter(message: Meter_Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meter_Filter;
  static deserializeBinaryFromReader(message: Meter_Filter, reader: jspb.BinaryReader): Meter_Filter;
}

export namespace Meter_Filter {
  export type AsObject = {
    messagefilter?: string,
  }
}

export class METER_INFO extends jspb.Message {
  getMeterType(): string;
  setMeterType(value: string): METER_INFO;
  hasMeterType(): boolean;
  clearMeterType(): METER_INFO;

  getMeterRef(): string;
  setMeterRef(value: string): METER_INFO;
  hasMeterRef(): boolean;
  clearMeterRef(): METER_INFO;

  getMeterId(): number;
  setMeterId(value: number): METER_INFO;
  hasMeterId(): boolean;
  clearMeterId(): METER_INFO;

  getCustkey(): string;
  setCustkey(value: string): METER_INFO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): METER_INFO.AsObject;
  static toObject(includeInstance: boolean, msg: METER_INFO): METER_INFO.AsObject;
  static serializeBinaryToWriter(message: METER_INFO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): METER_INFO;
  static deserializeBinaryFromReader(message: METER_INFO, reader: jspb.BinaryReader): METER_INFO;
}

export namespace METER_INFO {
  export type AsObject = {
    meterType?: string,
    meterRef?: string,
    meterId?: number,
    custkey: string,
  }
}

export class ChangeOwndershipNoAccount extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ChangeOwndershipNoAccount;
  hasCustkey(): boolean;
  clearCustkey(): ChangeOwndershipNoAccount;

  getFromCustkey(): string;
  setFromCustkey(value: string): ChangeOwndershipNoAccount;
  hasFromCustkey(): boolean;
  clearFromCustkey(): ChangeOwndershipNoAccount;

  getNotes(): string;
  setNotes(value: string): ChangeOwndershipNoAccount;
  hasNotes(): boolean;
  clearNotes(): ChangeOwndershipNoAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeOwndershipNoAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeOwndershipNoAccount): ChangeOwndershipNoAccount.AsObject;
  static serializeBinaryToWriter(message: ChangeOwndershipNoAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeOwndershipNoAccount;
  static deserializeBinaryFromReader(message: ChangeOwndershipNoAccount, reader: jspb.BinaryReader): ChangeOwndershipNoAccount;
}

export namespace ChangeOwndershipNoAccount {
  export type AsObject = {
    custkey?: string,
    fromCustkey?: string,
    notes?: string,
  }
}

export class CST_TENANT extends jspb.Message {
  getTenantId(): number;
  setTenantId(value: number): CST_TENANT;
  hasTenantId(): boolean;
  clearTenantId(): CST_TENANT;

  getCustkey(): string;
  setCustkey(value: string): CST_TENANT;

  getName(): string;
  setName(value: string): CST_TENANT;

  getMobileNo(): string;
  setMobileNo(value: string): CST_TENANT;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_TENANT;

  getNid(): string;
  setNid(value: string): CST_TENANT;

  getStartDate(): date_pb.MasDateTime | undefined;
  setStartDate(value?: date_pb.MasDateTime): CST_TENANT;
  hasStartDate(): boolean;
  clearStartDate(): CST_TENANT;

  getEndDate(): date_pb.MasDateTime | undefined;
  setEndDate(value?: date_pb.MasDateTime): CST_TENANT;
  hasEndDate(): boolean;
  clearEndDate(): CST_TENANT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_TENANT.AsObject;
  static toObject(includeInstance: boolean, msg: CST_TENANT): CST_TENANT.AsObject;
  static serializeBinaryToWriter(message: CST_TENANT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_TENANT;
  static deserializeBinaryFromReader(message: CST_TENANT, reader: jspb.BinaryReader): CST_TENANT;
}

export namespace CST_TENANT {
  export type AsObject = {
    tenantId?: number,
    custkey: string,
    name: string,
    mobileNo?: string,
    nid: string,
    startDate?: date_pb.MasDateTime.AsObject,
    endDate?: date_pb.MasDateTime.AsObject,
  }
}

export class APP_TRACER extends jspb.Message {
  getFormNo(): number;
  setFormNo(value: number): APP_TRACER;

  getApplicationTypeId(): number;
  setApplicationTypeId(value: number): APP_TRACER;

  getCompanyId(): number;
  setCompanyId(value: number): APP_TRACER;

  getActivityId(): number;
  setActivityId(value: number): APP_TRACER;

  getActivityPaid(): boolean;
  setActivityPaid(value: boolean): APP_TRACER;

  getActionId(): number;
  setActionId(value: number): APP_TRACER;

  getActionStampDateUnx(): number;
  setActionStampDateUnx(value: number): APP_TRACER;

  getRefrencePay(): number;
  setRefrencePay(value: number): APP_TRACER;

  getRequestType(): REQUEST_MESSAGE_TYPE;
  setRequestType(value: REQUEST_MESSAGE_TYPE): APP_TRACER;

  getAmount(): number;
  setAmount(value: number): APP_TRACER;
  hasAmount(): boolean;
  clearAmount(): APP_TRACER;

  getRequestResponse(): Uint8Array | string;
  getRequestResponse_asU8(): Uint8Array;
  getRequestResponse_asB64(): string;
  setRequestResponse(value: Uint8Array | string): APP_TRACER;
  hasRequestResponse(): boolean;
  clearRequestResponse(): APP_TRACER;

  getCountRepeated(): number;
  setCountRepeated(value: number): APP_TRACER;
  hasCountRepeated(): boolean;
  clearCountRepeated(): APP_TRACER;

  getFirstTime(): date_pb.MasDateTime | undefined;
  setFirstTime(value?: date_pb.MasDateTime): APP_TRACER;
  hasFirstTime(): boolean;
  clearFirstTime(): APP_TRACER;

  getLastTime(): date_pb.MasDateTime | undefined;
  setLastTime(value?: date_pb.MasDateTime): APP_TRACER;
  hasLastTime(): boolean;
  clearLastTime(): APP_TRACER;

  getThisRequest(): Uint8Array | string;
  getThisRequest_asU8(): Uint8Array;
  getThisRequest_asB64(): string;
  setThisRequest(value: Uint8Array | string): APP_TRACER;
  hasThisRequest(): boolean;
  clearThisRequest(): APP_TRACER;

  getBilingAct(): number;
  setBilingAct(value: number): APP_TRACER;
  hasBilingAct(): boolean;
  clearBilingAct(): APP_TRACER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APP_TRACER.AsObject;
  static toObject(includeInstance: boolean, msg: APP_TRACER): APP_TRACER.AsObject;
  static serializeBinaryToWriter(message: APP_TRACER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APP_TRACER;
  static deserializeBinaryFromReader(message: APP_TRACER, reader: jspb.BinaryReader): APP_TRACER;
}

export namespace APP_TRACER {
  export type AsObject = {
    formNo: number,
    applicationTypeId: number,
    companyId: number,
    activityId: number,
    activityPaid: boolean,
    actionId: number,
    actionStampDateUnx: number,
    refrencePay: number,
    requestType: REQUEST_MESSAGE_TYPE,
    amount?: number,
    requestResponse?: Uint8Array | string,
    countRepeated?: number,
    firstTime?: date_pb.MasDateTime.AsObject,
    lastTime?: date_pb.MasDateTime.AsObject,
    thisRequest?: Uint8Array | string,
    bilingAct?: number,
  }
}

export class APP_TRACER_REQUEST_RESPONSE extends jspb.Message {
  getFormNo(): number;
  setFormNo(value: number): APP_TRACER_REQUEST_RESPONSE;

  getApplicationTypeId(): number;
  setApplicationTypeId(value: number): APP_TRACER_REQUEST_RESPONSE;

  getCompanyId(): number;
  setCompanyId(value: number): APP_TRACER_REQUEST_RESPONSE;

  getActivityId(): number;
  setActivityId(value: number): APP_TRACER_REQUEST_RESPONSE;

  getActivityPaid(): boolean;
  setActivityPaid(value: boolean): APP_TRACER_REQUEST_RESPONSE;

  getActionId(): number;
  setActionId(value: number): APP_TRACER_REQUEST_RESPONSE;

  getActionStampDateUnx(): number;
  setActionStampDateUnx(value: number): APP_TRACER_REQUEST_RESPONSE;

  getRefrencePay(): number;
  setRefrencePay(value: number): APP_TRACER_REQUEST_RESPONSE;

  getTraceRequset(): Uint8Array | string;
  getTraceRequset_asU8(): Uint8Array;
  getTraceRequset_asB64(): string;
  setTraceRequset(value: Uint8Array | string): APP_TRACER_REQUEST_RESPONSE;
  hasTraceRequset(): boolean;
  clearTraceRequset(): APP_TRACER_REQUEST_RESPONSE;

  getTraceResponse(): Uint8Array | string;
  getTraceResponse_asU8(): Uint8Array;
  getTraceResponse_asB64(): string;
  setTraceResponse(value: Uint8Array | string): APP_TRACER_REQUEST_RESPONSE;
  hasTraceResponse(): boolean;
  clearTraceResponse(): APP_TRACER_REQUEST_RESPONSE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APP_TRACER_REQUEST_RESPONSE.AsObject;
  static toObject(includeInstance: boolean, msg: APP_TRACER_REQUEST_RESPONSE): APP_TRACER_REQUEST_RESPONSE.AsObject;
  static serializeBinaryToWriter(message: APP_TRACER_REQUEST_RESPONSE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APP_TRACER_REQUEST_RESPONSE;
  static deserializeBinaryFromReader(message: APP_TRACER_REQUEST_RESPONSE, reader: jspb.BinaryReader): APP_TRACER_REQUEST_RESPONSE;
}

export namespace APP_TRACER_REQUEST_RESPONSE {
  export type AsObject = {
    formNo: number,
    applicationTypeId: number,
    companyId: number,
    activityId: number,
    activityPaid: boolean,
    actionId: number,
    actionStampDateUnx: number,
    refrencePay: number,
    traceRequset?: Uint8Array | string,
    traceResponse?: Uint8Array | string,
  }
}

export class EndTenatContract extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EndTenatContract;

  getEndDate(): date_pb.MasDateTime | undefined;
  setEndDate(value?: date_pb.MasDateTime): EndTenatContract;
  hasEndDate(): boolean;
  clearEndDate(): EndTenatContract;

  getTenantId(): number;
  setTenantId(value: number): EndTenatContract;
  hasTenantId(): boolean;
  clearTenantId(): EndTenatContract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndTenatContract.AsObject;
  static toObject(includeInstance: boolean, msg: EndTenatContract): EndTenatContract.AsObject;
  static serializeBinaryToWriter(message: EndTenatContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndTenatContract;
  static deserializeBinaryFromReader(message: EndTenatContract, reader: jspb.BinaryReader): EndTenatContract;
}

export namespace EndTenatContract {
  export type AsObject = {
    custkey: string,
    endDate?: date_pb.MasDateTime.AsObject,
    tenantId?: number,
  }
}

export class TenantLst extends jspb.Message {
  getCstTenantList(): Array<CST_TENANT>;
  setCstTenantList(value: Array<CST_TENANT>): TenantLst;
  clearCstTenantList(): TenantLst;
  addCstTenant(value?: CST_TENANT, index?: number): CST_TENANT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantLst.AsObject;
  static toObject(includeInstance: boolean, msg: TenantLst): TenantLst.AsObject;
  static serializeBinaryToWriter(message: TenantLst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantLst;
  static deserializeBinaryFromReader(message: TenantLst, reader: jspb.BinaryReader): TenantLst;
}

export namespace TenantLst {
  export type AsObject = {
    cstTenantList: Array<CST_TENANT.AsObject>,
  }
}

export class UpdateConnDate extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): UpdateConnDate;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): UpdateConnDate;
  hasConnDate(): boolean;
  clearConnDate(): UpdateConnDate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnDate.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnDate): UpdateConnDate.AsObject;
  static serializeBinaryToWriter(message: UpdateConnDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnDate;
  static deserializeBinaryFromReader(message: UpdateConnDate, reader: jspb.BinaryReader): UpdateConnDate;
}

export namespace UpdateConnDate {
  export type AsObject = {
    custkey: string,
    connDate?: date_pb.MasDateTime.AsObject,
  }
}

export class UpdateActivityDesc extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): UpdateActivityDesc;

  getUaAddress5(): string;
  setUaAddress5(value: string): UpdateActivityDesc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActivityDesc.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActivityDesc): UpdateActivityDesc.AsObject;
  static serializeBinaryToWriter(message: UpdateActivityDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActivityDesc;
  static deserializeBinaryFromReader(message: UpdateActivityDesc, reader: jspb.BinaryReader): UpdateActivityDesc;
}

export namespace UpdateActivityDesc {
  export type AsObject = {
    custkey: string,
    uaAddress5: string,
  }
}

export class ChangeNID extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): ChangeNID;

  getNid(): string;
  setNid(value: string): ChangeNID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeNID.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeNID): ChangeNID.AsObject;
  static serializeBinaryToWriter(message: ChangeNID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeNID;
  static deserializeBinaryFromReader(message: ChangeNID, reader: jspb.BinaryReader): ChangeNID;
}

export namespace ChangeNID {
  export type AsObject = {
    custkey: string,
    nid: string,
  }
}

export class CST_CHARITY_LIST extends jspb.Message {
  getCharitiesList(): Array<CST_CHARITY>;
  setCharitiesList(value: Array<CST_CHARITY>): CST_CHARITY_LIST;
  clearCharitiesList(): CST_CHARITY_LIST;
  addCharities(value?: CST_CHARITY, index?: number): CST_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CHARITY_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CHARITY_LIST): CST_CHARITY_LIST.AsObject;
  static serializeBinaryToWriter(message: CST_CHARITY_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CHARITY_LIST;
  static deserializeBinaryFromReader(message: CST_CHARITY_LIST, reader: jspb.BinaryReader): CST_CHARITY_LIST;
}

export namespace CST_CHARITY_LIST {
  export type AsObject = {
    charitiesList: Array<CST_CHARITY.AsObject>,
  }
}

export class CST_TENANT_CHARITY_LIST extends jspb.Message {
  getTenantsList(): Array<CST_TENANT_CHARITY>;
  setTenantsList(value: Array<CST_TENANT_CHARITY>): CST_TENANT_CHARITY_LIST;
  clearTenantsList(): CST_TENANT_CHARITY_LIST;
  addTenants(value?: CST_TENANT_CHARITY, index?: number): CST_TENANT_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_TENANT_CHARITY_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CST_TENANT_CHARITY_LIST): CST_TENANT_CHARITY_LIST.AsObject;
  static serializeBinaryToWriter(message: CST_TENANT_CHARITY_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_TENANT_CHARITY_LIST;
  static deserializeBinaryFromReader(message: CST_TENANT_CHARITY_LIST, reader: jspb.BinaryReader): CST_TENANT_CHARITY_LIST;
}

export namespace CST_TENANT_CHARITY_LIST {
  export type AsObject = {
    tenantsList: Array<CST_TENANT_CHARITY.AsObject>,
  }
}

export class CST_CREDIT_CHARITY_LIST extends jspb.Message {
  getCreditsList(): Array<CST_CREDIT_CHARITY>;
  setCreditsList(value: Array<CST_CREDIT_CHARITY>): CST_CREDIT_CHARITY_LIST;
  clearCreditsList(): CST_CREDIT_CHARITY_LIST;
  addCredits(value?: CST_CREDIT_CHARITY, index?: number): CST_CREDIT_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CREDIT_CHARITY_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CREDIT_CHARITY_LIST): CST_CREDIT_CHARITY_LIST.AsObject;
  static serializeBinaryToWriter(message: CST_CREDIT_CHARITY_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CREDIT_CHARITY_LIST;
  static deserializeBinaryFromReader(message: CST_CREDIT_CHARITY_LIST, reader: jspb.BinaryReader): CST_CREDIT_CHARITY_LIST;
}

export namespace CST_CREDIT_CHARITY_LIST {
  export type AsObject = {
    creditsList: Array<CST_CREDIT_CHARITY.AsObject>,
  }
}

export class CHARITY_ID extends jspb.Message {
  getId(): number;
  setId(value: number): CHARITY_ID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_ID.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_ID): CHARITY_ID.AsObject;
  static serializeBinaryToWriter(message: CHARITY_ID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_ID;
  static deserializeBinaryFromReader(message: CHARITY_ID, reader: jspb.BinaryReader): CHARITY_ID;
}

export namespace CHARITY_ID {
  export type AsObject = {
    id: number,
  }
}

export class CHARITY_TENANT_NID extends jspb.Message {
  getNid(): string;
  setNid(value: string): CHARITY_TENANT_NID;
  hasNid(): boolean;
  clearNid(): CHARITY_TENANT_NID;

  getCharityNo(): string;
  setCharityNo(value: string): CHARITY_TENANT_NID;
  hasCharityNo(): boolean;
  clearCharityNo(): CHARITY_TENANT_NID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_TENANT_NID.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_TENANT_NID): CHARITY_TENANT_NID.AsObject;
  static serializeBinaryToWriter(message: CHARITY_TENANT_NID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_TENANT_NID;
  static deserializeBinaryFromReader(message: CHARITY_TENANT_NID, reader: jspb.BinaryReader): CHARITY_TENANT_NID;
}

export namespace CHARITY_TENANT_NID {
  export type AsObject = {
    nid?: string,
    charityNo?: string,
  }
}

export class CST_CHARITY extends jspb.Message {
  getId(): number;
  setId(value: number): CST_CHARITY;
  hasId(): boolean;
  clearId(): CST_CHARITY;

  getCharityName(): string;
  setCharityName(value: string): CST_CHARITY;

  getMobileNo(): string;
  setMobileNo(value: string): CST_CHARITY;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_CHARITY;

  getEMail(): string;
  setEMail(value: string): CST_CHARITY;
  hasEMail(): boolean;
  clearEMail(): CST_CHARITY;

  getAddress(): string;
  setAddress(value: string): CST_CHARITY;
  hasAddress(): boolean;
  clearAddress(): CST_CHARITY;

  getNotes(): string;
  setNotes(value: string): CST_CHARITY;
  hasNotes(): boolean;
  clearNotes(): CST_CHARITY;

  getCharityNo(): string;
  setCharityNo(value: string): CST_CHARITY;

  getCharityStartDate(): date_pb.MasDateTime | undefined;
  setCharityStartDate(value?: date_pb.MasDateTime): CST_CHARITY;
  hasCharityStartDate(): boolean;
  clearCharityStartDate(): CST_CHARITY;

  getPoliceImage(): string;
  setPoliceImage(value: string): CST_CHARITY;
  hasPoliceImage(): boolean;
  clearPoliceImage(): CST_CHARITY;

  getOrderImage(): string;
  setOrderImage(value: string): CST_CHARITY;
  hasOrderImage(): boolean;
  clearOrderImage(): CST_CHARITY;

  getAttachmentList(): Array<CST_CHARITY_ATTACHMENT>;
  setAttachmentList(value: Array<CST_CHARITY_ATTACHMENT>): CST_CHARITY;
  clearAttachmentList(): CST_CHARITY;
  addAttachment(value?: CST_CHARITY_ATTACHMENT, index?: number): CST_CHARITY_ATTACHMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CHARITY.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CHARITY): CST_CHARITY.AsObject;
  static serializeBinaryToWriter(message: CST_CHARITY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CHARITY;
  static deserializeBinaryFromReader(message: CST_CHARITY, reader: jspb.BinaryReader): CST_CHARITY;
}

export namespace CST_CHARITY {
  export type AsObject = {
    id?: number,
    charityName: string,
    mobileNo?: string,
    eMail?: string,
    address?: string,
    notes?: string,
    charityNo: string,
    charityStartDate?: date_pb.MasDateTime.AsObject,
    policeImage?: string,
    orderImage?: string,
    attachmentList: Array<CST_CHARITY_ATTACHMENT.AsObject>,
  }
}

export class CST_CHARITY_ATTACHMENT extends jspb.Message {
  getId(): number;
  setId(value: number): CST_CHARITY_ATTACHMENT;

  getCharityId(): number;
  setCharityId(value: number): CST_CHARITY_ATTACHMENT;

  getName(): string;
  setName(value: string): CST_CHARITY_ATTACHMENT;

  getFile(): string;
  setFile(value: string): CST_CHARITY_ATTACHMENT;
  hasFile(): boolean;
  clearFile(): CST_CHARITY_ATTACHMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CHARITY_ATTACHMENT.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CHARITY_ATTACHMENT): CST_CHARITY_ATTACHMENT.AsObject;
  static serializeBinaryToWriter(message: CST_CHARITY_ATTACHMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CHARITY_ATTACHMENT;
  static deserializeBinaryFromReader(message: CST_CHARITY_ATTACHMENT, reader: jspb.BinaryReader): CST_CHARITY_ATTACHMENT;
}

export namespace CST_CHARITY_ATTACHMENT {
  export type AsObject = {
    id: number,
    charityId: number,
    name: string,
    file?: string,
  }
}

export class CST_TENANT_CHARITY extends jspb.Message {
  getId(): number;
  setId(value: number): CST_TENANT_CHARITY;
  hasId(): boolean;
  clearId(): CST_TENANT_CHARITY;

  getSurname(): string;
  setSurname(value: string): CST_TENANT_CHARITY;

  getMobileNo(): string;
  setMobileNo(value: string): CST_TENANT_CHARITY;
  hasMobileNo(): boolean;
  clearMobileNo(): CST_TENANT_CHARITY;

  getEMail(): string;
  setEMail(value: string): CST_TENANT_CHARITY;
  hasEMail(): boolean;
  clearEMail(): CST_TENANT_CHARITY;

  getUaAddress(): string;
  setUaAddress(value: string): CST_TENANT_CHARITY;
  hasUaAddress(): boolean;
  clearUaAddress(): CST_TENANT_CHARITY;

  getNotes(): string;
  setNotes(value: string): CST_TENANT_CHARITY;
  hasNotes(): boolean;
  clearNotes(): CST_TENANT_CHARITY;

  getCharityId(): number;
  setCharityId(value: number): CST_TENANT_CHARITY;
  hasCharityId(): boolean;
  clearCharityId(): CST_TENANT_CHARITY;

  getStationNo(): number;
  setStationNo(value: number): CST_TENANT_CHARITY;
  hasStationNo(): boolean;
  clearStationNo(): CST_TENANT_CHARITY;

  getBillgroup(): string;
  setBillgroup(value: string): CST_TENANT_CHARITY;
  hasBillgroup(): boolean;
  clearBillgroup(): CST_TENANT_CHARITY;

  getBookNo(): string;
  setBookNo(value: string): CST_TENANT_CHARITY;
  hasBookNo(): boolean;
  clearBookNo(): CST_TENANT_CHARITY;

  getWalkNo(): string;
  setWalkNo(value: string): CST_TENANT_CHARITY;
  hasWalkNo(): boolean;
  clearWalkNo(): CST_TENANT_CHARITY;

  getNid(): string;
  setNid(value: string): CST_TENANT_CHARITY;
  hasNid(): boolean;
  clearNid(): CST_TENANT_CHARITY;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CST_TENANT_CHARITY;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): CST_TENANT_CHARITY;

  getCustkey(): string;
  setCustkey(value: string): CST_TENANT_CHARITY;
  hasCustkey(): boolean;
  clearCustkey(): CST_TENANT_CHARITY;

  getBpmForm(): string;
  setBpmForm(value: string): CST_TENANT_CHARITY;
  hasBpmForm(): boolean;
  clearBpmForm(): CST_TENANT_CHARITY;

  getIsPreview(): boolean;
  setIsPreview(value: boolean): CST_TENANT_CHARITY;
  hasIsPreview(): boolean;
  clearIsPreview(): CST_TENANT_CHARITY;

  getIsMoqaysa(): boolean;
  setIsMoqaysa(value: boolean): CST_TENANT_CHARITY;
  hasIsMoqaysa(): boolean;
  clearIsMoqaysa(): CST_TENANT_CHARITY;

  getPreviewAmount(): number;
  setPreviewAmount(value: number): CST_TENANT_CHARITY;
  hasPreviewAmount(): boolean;
  clearPreviewAmount(): CST_TENANT_CHARITY;

  getMoqaysaAmount(): number;
  setMoqaysaAmount(value: number): CST_TENANT_CHARITY;
  hasMoqaysaAmount(): boolean;
  clearMoqaysaAmount(): CST_TENANT_CHARITY;

  getIsStatus(): number;
  setIsStatus(value: number): CST_TENANT_CHARITY;
  hasIsStatus(): boolean;
  clearIsStatus(): CST_TENANT_CHARITY;

  getFinalAmountCharge(): number;
  setFinalAmountCharge(value: number): CST_TENANT_CHARITY;
  hasFinalAmountCharge(): boolean;
  clearFinalAmountCharge(): CST_TENANT_CHARITY;

  getCharityNo(): string;
  setCharityNo(value: string): CST_TENANT_CHARITY;
  hasCharityNo(): boolean;
  clearCharityNo(): CST_TENANT_CHARITY;

  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): CST_TENANT_CHARITY;
  hasCharityCreditNo(): boolean;
  clearCharityCreditNo(): CST_TENANT_CHARITY;

  getBenefitStatus(): number;
  setBenefitStatus(value: number): CST_TENANT_CHARITY;
  hasBenefitStatus(): boolean;
  clearBenefitStatus(): CST_TENANT_CHARITY;

  getIsPreviewSewer(): boolean;
  setIsPreviewSewer(value: boolean): CST_TENANT_CHARITY;
  hasIsPreviewSewer(): boolean;
  clearIsPreviewSewer(): CST_TENANT_CHARITY;

  getIsMoqaysaSewer(): boolean;
  setIsMoqaysaSewer(value: boolean): CST_TENANT_CHARITY;
  hasIsMoqaysaSewer(): boolean;
  clearIsMoqaysaSewer(): CST_TENANT_CHARITY;

  getPreviewAmountSewer(): number;
  setPreviewAmountSewer(value: number): CST_TENANT_CHARITY;
  hasPreviewAmountSewer(): boolean;
  clearPreviewAmountSewer(): CST_TENANT_CHARITY;

  getMoqaysaAmountSewer(): number;
  setMoqaysaAmountSewer(value: number): CST_TENANT_CHARITY;
  hasMoqaysaAmountSewer(): boolean;
  clearMoqaysaAmountSewer(): CST_TENANT_CHARITY;

  getIsStatusSewer(): number;
  setIsStatusSewer(value: number): CST_TENANT_CHARITY;
  hasIsStatusSewer(): boolean;
  clearIsStatusSewer(): CST_TENANT_CHARITY;

  getBpmFormSewer(): string;
  setBpmFormSewer(value: string): CST_TENANT_CHARITY;
  hasBpmFormSewer(): boolean;
  clearBpmFormSewer(): CST_TENANT_CHARITY;

  getIsPreviewPaid(): boolean;
  setIsPreviewPaid(value: boolean): CST_TENANT_CHARITY;
  hasIsPreviewPaid(): boolean;
  clearIsPreviewPaid(): CST_TENANT_CHARITY;

  getIsPreviewSewerPaid(): boolean;
  setIsPreviewSewerPaid(value: boolean): CST_TENANT_CHARITY;
  hasIsPreviewSewerPaid(): boolean;
  clearIsPreviewSewerPaid(): CST_TENANT_CHARITY;

  getCharityCreditNoSewer(): string;
  setCharityCreditNoSewer(value: string): CST_TENANT_CHARITY;
  hasCharityCreditNoSewer(): boolean;
  clearCharityCreditNoSewer(): CST_TENANT_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_TENANT_CHARITY.AsObject;
  static toObject(includeInstance: boolean, msg: CST_TENANT_CHARITY): CST_TENANT_CHARITY.AsObject;
  static serializeBinaryToWriter(message: CST_TENANT_CHARITY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_TENANT_CHARITY;
  static deserializeBinaryFromReader(message: CST_TENANT_CHARITY, reader: jspb.BinaryReader): CST_TENANT_CHARITY;
}

export namespace CST_TENANT_CHARITY {
  export type AsObject = {
    id?: number,
    surname: string,
    mobileNo?: string,
    eMail?: string,
    uaAddress?: string,
    notes?: string,
    charityId?: number,
    stationNo?: number,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    nid?: string,
    prevCustkey?: string,
    custkey?: string,
    bpmForm?: string,
    isPreview?: boolean,
    isMoqaysa?: boolean,
    previewAmount?: number,
    moqaysaAmount?: number,
    isStatus?: number,
    finalAmountCharge?: number,
    charityNo?: string,
    charityCreditNo?: string,
    benefitStatus?: number,
    isPreviewSewer?: boolean,
    isMoqaysaSewer?: boolean,
    previewAmountSewer?: number,
    moqaysaAmountSewer?: number,
    isStatusSewer?: number,
    bpmFormSewer?: string,
    isPreviewPaid?: boolean,
    isPreviewSewerPaid?: boolean,
    charityCreditNoSewer?: string,
  }
}

export class CST_CREDIT_CHARITY extends jspb.Message {
  getId(): number;
  setId(value: number): CST_CREDIT_CHARITY;
  hasId(): boolean;
  clearId(): CST_CREDIT_CHARITY;

  getCreditAmount(): number;
  setCreditAmount(value: number): CST_CREDIT_CHARITY;

  getCreditAvailable(): number;
  setCreditAvailable(value: number): CST_CREDIT_CHARITY;
  hasCreditAvailable(): boolean;
  clearCreditAvailable(): CST_CREDIT_CHARITY;

  getCreditPending(): number;
  setCreditPending(value: number): CST_CREDIT_CHARITY;
  hasCreditPending(): boolean;
  clearCreditPending(): CST_CREDIT_CHARITY;

  getCreditUsed(): number;
  setCreditUsed(value: number): CST_CREDIT_CHARITY;
  hasCreditUsed(): boolean;
  clearCreditUsed(): CST_CREDIT_CHARITY;

  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): CST_CREDIT_CHARITY;

  getCharityCreditDate(): date_pb.MasDateTime | undefined;
  setCharityCreditDate(value?: date_pb.MasDateTime): CST_CREDIT_CHARITY;
  hasCharityCreditDate(): boolean;
  clearCharityCreditDate(): CST_CREDIT_CHARITY;

  getNotes(): string;
  setNotes(value: string): CST_CREDIT_CHARITY;
  hasNotes(): boolean;
  clearNotes(): CST_CREDIT_CHARITY;

  getCharityId(): number;
  setCharityId(value: number): CST_CREDIT_CHARITY;
  hasCharityId(): boolean;
  clearCharityId(): CST_CREDIT_CHARITY;

  getCharityNo(): string;
  setCharityNo(value: string): CST_CREDIT_CHARITY;
  hasCharityNo(): boolean;
  clearCharityNo(): CST_CREDIT_CHARITY;

  getCheqNo(): string;
  setCheqNo(value: string): CST_CREDIT_CHARITY;
  hasCheqNo(): boolean;
  clearCheqNo(): CST_CREDIT_CHARITY;

  getCheqBank(): string;
  setCheqBank(value: string): CST_CREDIT_CHARITY;
  hasCheqBank(): boolean;
  clearCheqBank(): CST_CREDIT_CHARITY;

  getCheqDate(): date_pb.MasDateTime | undefined;
  setCheqDate(value?: date_pb.MasDateTime): CST_CREDIT_CHARITY;
  hasCheqDate(): boolean;
  clearCheqDate(): CST_CREDIT_CHARITY;

  getCharityName(): string;
  setCharityName(value: string): CST_CREDIT_CHARITY;
  hasCharityName(): boolean;
  clearCharityName(): CST_CREDIT_CHARITY;

  getDeportedAmount(): number;
  setDeportedAmount(value: number): CST_CREDIT_CHARITY;
  hasDeportedAmount(): boolean;
  clearDeportedAmount(): CST_CREDIT_CHARITY;

  getIsFake(): boolean;
  setIsFake(value: boolean): CST_CREDIT_CHARITY;
  hasIsFake(): boolean;
  clearIsFake(): CST_CREDIT_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_CREDIT_CHARITY.AsObject;
  static toObject(includeInstance: boolean, msg: CST_CREDIT_CHARITY): CST_CREDIT_CHARITY.AsObject;
  static serializeBinaryToWriter(message: CST_CREDIT_CHARITY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_CREDIT_CHARITY;
  static deserializeBinaryFromReader(message: CST_CREDIT_CHARITY, reader: jspb.BinaryReader): CST_CREDIT_CHARITY;
}

export namespace CST_CREDIT_CHARITY {
  export type AsObject = {
    id?: number,
    creditAmount: number,
    creditAvailable?: number,
    creditPending?: number,
    creditUsed?: number,
    charityCreditNo: string,
    charityCreditDate?: date_pb.MasDateTime.AsObject,
    notes?: string,
    charityId?: number,
    charityNo?: string,
    cheqNo?: string,
    cheqBank?: string,
    cheqDate?: date_pb.MasDateTime.AsObject,
    charityName?: string,
    deportedAmount?: number,
    isFake?: boolean,
  }
}

export class CST_FAKE_CREDIT_RESOURCE extends jspb.Message {
  getCreditCharityId(): number;
  setCreditCharityId(value: number): CST_FAKE_CREDIT_RESOURCE;

  getCreditAmount(): number;
  setCreditAmount(value: number): CST_FAKE_CREDIT_RESOURCE;

  getStampUser(): number;
  setStampUser(value: number): CST_FAKE_CREDIT_RESOURCE;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CST_FAKE_CREDIT_RESOURCE;
  hasStampDate(): boolean;
  clearStampDate(): CST_FAKE_CREDIT_RESOURCE;

  getStampModeifyUser(): number;
  setStampModeifyUser(value: number): CST_FAKE_CREDIT_RESOURCE;
  hasStampModeifyUser(): boolean;
  clearStampModeifyUser(): CST_FAKE_CREDIT_RESOURCE;

  getStampModeifyDate(): date_pb.MasDateTime | undefined;
  setStampModeifyDate(value?: date_pb.MasDateTime): CST_FAKE_CREDIT_RESOURCE;
  hasStampModeifyDate(): boolean;
  clearStampModeifyDate(): CST_FAKE_CREDIT_RESOURCE;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): CST_FAKE_CREDIT_RESOURCE;
  hasIsDeleted(): boolean;
  clearIsDeleted(): CST_FAKE_CREDIT_RESOURCE;

  getId(): number;
  setId(value: number): CST_FAKE_CREDIT_RESOURCE;
  hasId(): boolean;
  clearId(): CST_FAKE_CREDIT_RESOURCE;

  getCharityId(): number;
  setCharityId(value: number): CST_FAKE_CREDIT_RESOURCE;
  hasCharityId(): boolean;
  clearCharityId(): CST_FAKE_CREDIT_RESOURCE;

  getGeneratedCreditNo(): string;
  setGeneratedCreditNo(value: string): CST_FAKE_CREDIT_RESOURCE;
  hasGeneratedCreditNo(): boolean;
  clearGeneratedCreditNo(): CST_FAKE_CREDIT_RESOURCE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CST_FAKE_CREDIT_RESOURCE.AsObject;
  static toObject(includeInstance: boolean, msg: CST_FAKE_CREDIT_RESOURCE): CST_FAKE_CREDIT_RESOURCE.AsObject;
  static serializeBinaryToWriter(message: CST_FAKE_CREDIT_RESOURCE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CST_FAKE_CREDIT_RESOURCE;
  static deserializeBinaryFromReader(message: CST_FAKE_CREDIT_RESOURCE, reader: jspb.BinaryReader): CST_FAKE_CREDIT_RESOURCE;
}

export namespace CST_FAKE_CREDIT_RESOURCE {
  export type AsObject = {
    creditCharityId: number,
    creditAmount: number,
    stampUser: number,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampModeifyUser?: number,
    stampModeifyDate?: date_pb.MasDateTime.AsObject,
    isDeleted?: boolean,
    id?: number,
    charityId?: number,
    generatedCreditNo?: string,
  }
}

export class ACCEPT_OR_REJECT_CHARITY_TENANT extends jspb.Message {
  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): ACCEPT_OR_REJECT_CHARITY_TENANT;

  getCharityNo(): string;
  setCharityNo(value: string): ACCEPT_OR_REJECT_CHARITY_TENANT;

  getCharityTenantRequestsList(): Array<CHARITY_TENANT_REQUESTS>;
  setCharityTenantRequestsList(value: Array<CHARITY_TENANT_REQUESTS>): ACCEPT_OR_REJECT_CHARITY_TENANT;
  clearCharityTenantRequestsList(): ACCEPT_OR_REJECT_CHARITY_TENANT;
  addCharityTenantRequests(value?: CHARITY_TENANT_REQUESTS, index?: number): CHARITY_TENANT_REQUESTS;

  getCustkey(): string;
  setCustkey(value: string): ACCEPT_OR_REJECT_CHARITY_TENANT;
  hasCustkey(): boolean;
  clearCustkey(): ACCEPT_OR_REJECT_CHARITY_TENANT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACCEPT_OR_REJECT_CHARITY_TENANT.AsObject;
  static toObject(includeInstance: boolean, msg: ACCEPT_OR_REJECT_CHARITY_TENANT): ACCEPT_OR_REJECT_CHARITY_TENANT.AsObject;
  static serializeBinaryToWriter(message: ACCEPT_OR_REJECT_CHARITY_TENANT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACCEPT_OR_REJECT_CHARITY_TENANT;
  static deserializeBinaryFromReader(message: ACCEPT_OR_REJECT_CHARITY_TENANT, reader: jspb.BinaryReader): ACCEPT_OR_REJECT_CHARITY_TENANT;
}

export namespace ACCEPT_OR_REJECT_CHARITY_TENANT {
  export type AsObject = {
    charityCreditNo: string,
    charityNo: string,
    charityTenantRequestsList: Array<CHARITY_TENANT_REQUESTS.AsObject>,
    custkey?: string,
  }
}

export class CHARITY_TENANT_REQUESTS extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CHARITY_TENANT_REQUESTS;

  getCharityStatus(): boolean;
  setCharityStatus(value: boolean): CHARITY_TENANT_REQUESTS;
  hasCharityStatus(): boolean;
  clearCharityStatus(): CHARITY_TENANT_REQUESTS;

  getPreviewAmount(): number;
  setPreviewAmount(value: number): CHARITY_TENANT_REQUESTS;
  hasPreviewAmount(): boolean;
  clearPreviewAmount(): CHARITY_TENANT_REQUESTS;

  getMoqaysaAmount(): number;
  setMoqaysaAmount(value: number): CHARITY_TENANT_REQUESTS;
  hasMoqaysaAmount(): boolean;
  clearMoqaysaAmount(): CHARITY_TENANT_REQUESTS;

  getNid(): string;
  setNid(value: string): CHARITY_TENANT_REQUESTS;

  getCharityNo(): string;
  setCharityNo(value: string): CHARITY_TENANT_REQUESTS;
  hasCharityNo(): boolean;
  clearCharityNo(): CHARITY_TENANT_REQUESTS;

  getPreviewAmountSewer(): number;
  setPreviewAmountSewer(value: number): CHARITY_TENANT_REQUESTS;
  hasPreviewAmountSewer(): boolean;
  clearPreviewAmountSewer(): CHARITY_TENANT_REQUESTS;

  getMoqaysaAmountSewer(): number;
  setMoqaysaAmountSewer(value: number): CHARITY_TENANT_REQUESTS;
  hasMoqaysaAmountSewer(): boolean;
  clearMoqaysaAmountSewer(): CHARITY_TENANT_REQUESTS;

  getCharityStatusSewer(): boolean;
  setCharityStatusSewer(value: boolean): CHARITY_TENANT_REQUESTS;
  hasCharityStatusSewer(): boolean;
  clearCharityStatusSewer(): CHARITY_TENANT_REQUESTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_TENANT_REQUESTS.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_TENANT_REQUESTS): CHARITY_TENANT_REQUESTS.AsObject;
  static serializeBinaryToWriter(message: CHARITY_TENANT_REQUESTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_TENANT_REQUESTS;
  static deserializeBinaryFromReader(message: CHARITY_TENANT_REQUESTS, reader: jspb.BinaryReader): CHARITY_TENANT_REQUESTS;
}

export namespace CHARITY_TENANT_REQUESTS {
  export type AsObject = {
    custkey: string,
    charityStatus?: boolean,
    previewAmount?: number,
    moqaysaAmount?: number,
    nid: string,
    charityNo?: string,
    previewAmountSewer?: number,
    moqaysaAmountSewer?: number,
    charityStatusSewer?: boolean,
  }
}

export class CheckCharityTenant extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CheckCharityTenant;

  getNid(): string;
  setNid(value: string): CheckCharityTenant;

  getFinalAmountCharge(): number;
  setFinalAmountCharge(value: number): CheckCharityTenant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCharityTenant.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCharityTenant): CheckCharityTenant.AsObject;
  static serializeBinaryToWriter(message: CheckCharityTenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCharityTenant;
  static deserializeBinaryFromReader(message: CheckCharityTenant, reader: jspb.BinaryReader): CheckCharityTenant;
}

export namespace CheckCharityTenant {
  export type AsObject = {
    custkey: string,
    nid: string,
    finalAmountCharge: number,
  }
}

export class CheckCharityTenant_BPM extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CheckCharityTenant_BPM;

  getBpmForm(): string;
  setBpmForm(value: string): CheckCharityTenant_BPM;

  getFinalAmountCharge(): number;
  setFinalAmountCharge(value: number): CheckCharityTenant_BPM;

  getNid(): string;
  setNid(value: string): CheckCharityTenant_BPM;
  hasNid(): boolean;
  clearNid(): CheckCharityTenant_BPM;

  getCharityFeesType(): number;
  setCharityFeesType(value: number): CheckCharityTenant_BPM;
  hasCharityFeesType(): boolean;
  clearCharityFeesType(): CheckCharityTenant_BPM;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCharityTenant_BPM.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCharityTenant_BPM): CheckCharityTenant_BPM.AsObject;
  static serializeBinaryToWriter(message: CheckCharityTenant_BPM, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCharityTenant_BPM;
  static deserializeBinaryFromReader(message: CheckCharityTenant_BPM, reader: jspb.BinaryReader): CheckCharityTenant_BPM;
}

export namespace CheckCharityTenant_BPM {
  export type AsObject = {
    custkey: string,
    bpmForm: string,
    finalAmountCharge: number,
    nid?: string,
    charityFeesType?: number,
  }
}

export class REDIT_CHARITY_RESPONSE extends jspb.Message {
  getCreditCharityList(): Array<CST_CREDIT_CHARITY>;
  setCreditCharityList(value: Array<CST_CREDIT_CHARITY>): REDIT_CHARITY_RESPONSE;
  clearCreditCharityList(): REDIT_CHARITY_RESPONSE;
  addCreditCharity(value?: CST_CREDIT_CHARITY, index?: number): CST_CREDIT_CHARITY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): REDIT_CHARITY_RESPONSE.AsObject;
  static toObject(includeInstance: boolean, msg: REDIT_CHARITY_RESPONSE): REDIT_CHARITY_RESPONSE.AsObject;
  static serializeBinaryToWriter(message: REDIT_CHARITY_RESPONSE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): REDIT_CHARITY_RESPONSE;
  static deserializeBinaryFromReader(message: REDIT_CHARITY_RESPONSE, reader: jspb.BinaryReader): REDIT_CHARITY_RESPONSE;
}

export namespace REDIT_CHARITY_RESPONSE {
  export type AsObject = {
    creditCharityList: Array<CST_CREDIT_CHARITY.AsObject>,
  }
}

export class GENERATED_CHARITY_CREDIT extends jspb.Message {
  getCharityId(): number;
  setCharityId(value: number): GENERATED_CHARITY_CREDIT;

  getGeneratedCreditNo(): string;
  setGeneratedCreditNo(value: string): GENERATED_CHARITY_CREDIT;

  getCharityCreaditListList(): Array<CHARITY_CREADIT_LIST>;
  setCharityCreaditListList(value: Array<CHARITY_CREADIT_LIST>): GENERATED_CHARITY_CREDIT;
  clearCharityCreaditListList(): GENERATED_CHARITY_CREDIT;
  addCharityCreaditList(value?: CHARITY_CREADIT_LIST, index?: number): CHARITY_CREADIT_LIST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GENERATED_CHARITY_CREDIT.AsObject;
  static toObject(includeInstance: boolean, msg: GENERATED_CHARITY_CREDIT): GENERATED_CHARITY_CREDIT.AsObject;
  static serializeBinaryToWriter(message: GENERATED_CHARITY_CREDIT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GENERATED_CHARITY_CREDIT;
  static deserializeBinaryFromReader(message: GENERATED_CHARITY_CREDIT, reader: jspb.BinaryReader): GENERATED_CHARITY_CREDIT;
}

export namespace GENERATED_CHARITY_CREDIT {
  export type AsObject = {
    charityId: number,
    generatedCreditNo: string,
    charityCreaditListList: Array<CHARITY_CREADIT_LIST.AsObject>,
  }
}

export class CHARITY_CREADIT_LIST extends jspb.Message {
  getCreditCharityId(): number;
  setCreditCharityId(value: number): CHARITY_CREADIT_LIST;

  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): CHARITY_CREADIT_LIST;

  getDeportedAmount(): number;
  setDeportedAmount(value: number): CHARITY_CREADIT_LIST;

  getCharityId(): number;
  setCharityId(value: number): CHARITY_CREADIT_LIST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_CREADIT_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_CREADIT_LIST): CHARITY_CREADIT_LIST.AsObject;
  static serializeBinaryToWriter(message: CHARITY_CREADIT_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_CREADIT_LIST;
  static deserializeBinaryFromReader(message: CHARITY_CREADIT_LIST, reader: jspb.BinaryReader): CHARITY_CREADIT_LIST;
}

export namespace CHARITY_CREADIT_LIST {
  export type AsObject = {
    creditCharityId: number,
    charityCreditNo: string,
    deportedAmount: number,
    charityId: number,
  }
}

export class CANCEL_FAKE_CHARITY_CREDIT extends jspb.Message {
  getCharityId(): number;
  setCharityId(value: number): CANCEL_FAKE_CHARITY_CREDIT;

  getGeneratedCreditNo(): string;
  setGeneratedCreditNo(value: string): CANCEL_FAKE_CHARITY_CREDIT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCEL_FAKE_CHARITY_CREDIT.AsObject;
  static toObject(includeInstance: boolean, msg: CANCEL_FAKE_CHARITY_CREDIT): CANCEL_FAKE_CHARITY_CREDIT.AsObject;
  static serializeBinaryToWriter(message: CANCEL_FAKE_CHARITY_CREDIT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCEL_FAKE_CHARITY_CREDIT;
  static deserializeBinaryFromReader(message: CANCEL_FAKE_CHARITY_CREDIT, reader: jspb.BinaryReader): CANCEL_FAKE_CHARITY_CREDIT;
}

export namespace CANCEL_FAKE_CHARITY_CREDIT {
  export type AsObject = {
    charityId: number,
    generatedCreditNo: string,
  }
}

export class PAY_CONSUMPTION_REQUEST extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): PAY_CONSUMPTION_REQUEST;

  getAmount(): number;
  setAmount(value: number): PAY_CONSUMPTION_REQUEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAY_CONSUMPTION_REQUEST.AsObject;
  static toObject(includeInstance: boolean, msg: PAY_CONSUMPTION_REQUEST): PAY_CONSUMPTION_REQUEST.AsObject;
  static serializeBinaryToWriter(message: PAY_CONSUMPTION_REQUEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAY_CONSUMPTION_REQUEST;
  static deserializeBinaryFromReader(message: PAY_CONSUMPTION_REQUEST, reader: jspb.BinaryReader): PAY_CONSUMPTION_REQUEST;
}

export namespace PAY_CONSUMPTION_REQUEST {
  export type AsObject = {
    custkey: string,
    amount: number,
  }
}

export class changeCustomerStationRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): changeCustomerStationRq;

  getStationNo(): number;
  setStationNo(value: number): changeCustomerStationRq;

  getBillgroup(): string;
  setBillgroup(value: string): changeCustomerStationRq;

  getBookNo(): string;
  setBookNo(value: string): changeCustomerStationRq;

  getWalkNo(): number;
  setWalkNo(value: number): changeCustomerStationRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): changeCustomerStationRq.AsObject;
  static toObject(includeInstance: boolean, msg: changeCustomerStationRq): changeCustomerStationRq.AsObject;
  static serializeBinaryToWriter(message: changeCustomerStationRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): changeCustomerStationRq;
  static deserializeBinaryFromReader(message: changeCustomerStationRq, reader: jspb.BinaryReader): changeCustomerStationRq;
}

export namespace changeCustomerStationRq {
  export type AsObject = {
    custkey: string,
    stationNo: number,
    billgroup: string,
    bookNo: string,
    walkNo: number,
  }
}

export class extendAgreemRq extends jspb.Message {
  getNoMonths(): number;
  setNoMonths(value: number): extendAgreemRq;

  getCustkey(): string;
  setCustkey(value: string): extendAgreemRq;

  getAgreemNo(): number;
  setAgreemNo(value: number): extendAgreemRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): extendAgreemRq.AsObject;
  static toObject(includeInstance: boolean, msg: extendAgreemRq): extendAgreemRq.AsObject;
  static serializeBinaryToWriter(message: extendAgreemRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): extendAgreemRq;
  static deserializeBinaryFromReader(message: extendAgreemRq, reader: jspb.BinaryReader): extendAgreemRq;
}

export namespace extendAgreemRq {
  export type AsObject = {
    noMonths: number,
    custkey: string,
    agreemNo: number,
  }
}

export class meterReading extends jspb.Message {
  getMeterId(): number;
  setMeterId(value: number): meterReading;
  hasMeterId(): boolean;
  clearMeterId(): meterReading;

  getMeterRef(): string;
  setMeterRef(value: string): meterReading;
  hasMeterRef(): boolean;
  clearMeterRef(): meterReading;

  getReadingValue(): number;
  setReadingValue(value: number): meterReading;

  getReadingDate(): date_pb.MasDateTime | undefined;
  setReadingDate(value?: date_pb.MasDateTime): meterReading;
  hasReadingDate(): boolean;
  clearReadingDate(): meterReading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): meterReading.AsObject;
  static toObject(includeInstance: boolean, msg: meterReading): meterReading.AsObject;
  static serializeBinaryToWriter(message: meterReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): meterReading;
  static deserializeBinaryFromReader(message: meterReading, reader: jspb.BinaryReader): meterReading;
}

export namespace meterReading {
  export type AsObject = {
    meterId?: number,
    meterRef?: string,
    readingValue: number,
    readingDate?: date_pb.MasDateTime.AsObject,
  }
}

export class changeCustomerPhoneRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): changeCustomerPhoneRq;

  getMobileNo(): string;
  setMobileNo(value: string): changeCustomerPhoneRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): changeCustomerPhoneRq.AsObject;
  static toObject(includeInstance: boolean, msg: changeCustomerPhoneRq): changeCustomerPhoneRq.AsObject;
  static serializeBinaryToWriter(message: changeCustomerPhoneRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): changeCustomerPhoneRq;
  static deserializeBinaryFromReader(message: changeCustomerPhoneRq, reader: jspb.BinaryReader): changeCustomerPhoneRq;
}

export namespace changeCustomerPhoneRq {
  export type AsObject = {
    custkey: string,
    mobileNo: string,
  }
}

export class changeCustomerCrNoRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): changeCustomerCrNoRq;

  getCrNo(): string;
  setCrNo(value: string): changeCustomerCrNoRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): changeCustomerCrNoRq.AsObject;
  static toObject(includeInstance: boolean, msg: changeCustomerCrNoRq): changeCustomerCrNoRq.AsObject;
  static serializeBinaryToWriter(message: changeCustomerCrNoRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): changeCustomerCrNoRq;
  static deserializeBinaryFromReader(message: changeCustomerCrNoRq, reader: jspb.BinaryReader): changeCustomerCrNoRq;
}

export namespace changeCustomerCrNoRq {
  export type AsObject = {
    custkey: string,
    crNo: string,
  }
}

export class CleanFeesRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CleanFeesRq;

  getProptypeId(): number;
  setProptypeId(value: number): CleanFeesRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CleanFeesRq.AsObject;
  static toObject(includeInstance: boolean, msg: CleanFeesRq): CleanFeesRq.AsObject;
  static serializeBinaryToWriter(message: CleanFeesRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CleanFeesRq;
  static deserializeBinaryFromReader(message: CleanFeesRq, reader: jspb.BinaryReader): CleanFeesRq;
}

export namespace CleanFeesRq {
  export type AsObject = {
    custkey: string,
    proptypeId: number,
  }
}

export class CustWallet extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustWallet;

  getBalance(): number;
  setBalance(value: number): CustWallet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustWallet.AsObject;
  static toObject(includeInstance: boolean, msg: CustWallet): CustWallet.AsObject;
  static serializeBinaryToWriter(message: CustWallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustWallet;
  static deserializeBinaryFromReader(message: CustWallet, reader: jspb.BinaryReader): CustWallet;
}

export namespace CustWallet {
  export type AsObject = {
    custkey: string,
    balance: number,
  }
}

export class WalletDetailsRq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): WalletDetailsRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletDetailsRq.AsObject;
  static toObject(includeInstance: boolean, msg: WalletDetailsRq): WalletDetailsRq.AsObject;
  static serializeBinaryToWriter(message: WalletDetailsRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletDetailsRq;
  static deserializeBinaryFromReader(message: WalletDetailsRq, reader: jspb.BinaryReader): WalletDetailsRq;
}

export namespace WalletDetailsRq {
  export type AsObject = {
    custkey: string,
  }
}

export class WalletDetailsRs extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): WalletDetailsRs;
  hasCustkey(): boolean;
  clearCustkey(): WalletDetailsRs;

  getTransNo(): number;
  setTransNo(value: number): WalletDetailsRs;
  hasTransNo(): boolean;
  clearTransNo(): WalletDetailsRs;

  getTrnsType(): number;
  setTrnsType(value: number): WalletDetailsRs;
  hasTrnsType(): boolean;
  clearTrnsType(): WalletDetailsRs;

  getTrnsStype(): number;
  setTrnsStype(value: number): WalletDetailsRs;
  hasTrnsStype(): boolean;
  clearTrnsStype(): WalletDetailsRs;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): WalletDetailsRs;
  hasBilngDate(): boolean;
  clearBilngDate(): WalletDetailsRs;

  getAmount(): number;
  setAmount(value: number): WalletDetailsRs;
  hasAmount(): boolean;
  clearAmount(): WalletDetailsRs;

  getDocumntNo(): string;
  setDocumntNo(value: string): WalletDetailsRs;
  hasDocumntNo(): boolean;
  clearDocumntNo(): WalletDetailsRs;

  getNotes(): string;
  setNotes(value: string): WalletDetailsRs;
  hasNotes(): boolean;
  clearNotes(): WalletDetailsRs;

  getIsBlnce(): number;
  setIsBlnce(value: number): WalletDetailsRs;
  hasIsBlnce(): boolean;
  clearIsBlnce(): WalletDetailsRs;

  getActualTransNo(): number;
  setActualTransNo(value: number): WalletDetailsRs;
  hasActualTransNo(): boolean;
  clearActualTransNo(): WalletDetailsRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletDetailsRs.AsObject;
  static toObject(includeInstance: boolean, msg: WalletDetailsRs): WalletDetailsRs.AsObject;
  static serializeBinaryToWriter(message: WalletDetailsRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletDetailsRs;
  static deserializeBinaryFromReader(message: WalletDetailsRs, reader: jspb.BinaryReader): WalletDetailsRs;
}

export namespace WalletDetailsRs {
  export type AsObject = {
    custkey?: string,
    transNo?: number,
    trnsType?: number,
    trnsStype?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    amount?: number,
    documntNo?: string,
    notes?: string,
    isBlnce?: number,
    actualTransNo?: number,
  }
}

export class EditCustomerMainData extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditCustomerMainData;

  getNid(): string;
  setNid(value: string): EditCustomerMainData;

  getSurname(): string;
  setSurname(value: string): EditCustomerMainData;

  getUaAddress(): string;
  setUaAddress(value: string): EditCustomerMainData;

  getSerialNo(): string;
  setSerialNo(value: string): EditCustomerMainData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCustomerMainData.AsObject;
  static toObject(includeInstance: boolean, msg: EditCustomerMainData): EditCustomerMainData.AsObject;
  static serializeBinaryToWriter(message: EditCustomerMainData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCustomerMainData;
  static deserializeBinaryFromReader(message: EditCustomerMainData, reader: jspb.BinaryReader): EditCustomerMainData;
}

export namespace EditCustomerMainData {
  export type AsObject = {
    custkey: string,
    nid: string,
    surname: string,
    uaAddress: string,
    serialNo: string,
  }
}

export class EditCustomerDirections extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): EditCustomerDirections;

  getDirection1(): string;
  setDirection1(value: string): EditCustomerDirections;
  hasDirection1(): boolean;
  clearDirection1(): EditCustomerDirections;

  getDirection2(): string;
  setDirection2(value: string): EditCustomerDirections;
  hasDirection2(): boolean;
  clearDirection2(): EditCustomerDirections;

  getDirection3(): string;
  setDirection3(value: string): EditCustomerDirections;
  hasDirection3(): boolean;
  clearDirection3(): EditCustomerDirections;

  getDirection4(): string;
  setDirection4(value: string): EditCustomerDirections;
  hasDirection4(): boolean;
  clearDirection4(): EditCustomerDirections;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCustomerDirections.AsObject;
  static toObject(includeInstance: boolean, msg: EditCustomerDirections): EditCustomerDirections.AsObject;
  static serializeBinaryToWriter(message: EditCustomerDirections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCustomerDirections;
  static deserializeBinaryFromReader(message: EditCustomerDirections, reader: jspb.BinaryReader): EditCustomerDirections;
}

export namespace EditCustomerDirections {
  export type AsObject = {
    custkey: string,
    direction1?: string,
    direction2?: string,
    direction3?: string,
    direction4?: string,
  }
}

export class RegisterFieldsForTableRq extends jspb.Message {
  getTableId(): number;
  setTableId(value: number): RegisterFieldsForTableRq;

  getActId(): number;
  setActId(value: number): RegisterFieldsForTableRq;

  getTblActivityFieldsList(): Array<TBL_ACTIVITY_FIELDS>;
  setTblActivityFieldsList(value: Array<TBL_ACTIVITY_FIELDS>): RegisterFieldsForTableRq;
  clearTblActivityFieldsList(): RegisterFieldsForTableRq;
  addTblActivityFields(value?: TBL_ACTIVITY_FIELDS, index?: number): TBL_ACTIVITY_FIELDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterFieldsForTableRq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterFieldsForTableRq): RegisterFieldsForTableRq.AsObject;
  static serializeBinaryToWriter(message: RegisterFieldsForTableRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterFieldsForTableRq;
  static deserializeBinaryFromReader(message: RegisterFieldsForTableRq, reader: jspb.BinaryReader): RegisterFieldsForTableRq;
}

export namespace RegisterFieldsForTableRq {
  export type AsObject = {
    tableId: number,
    actId: number,
    tblActivityFieldsList: Array<TBL_ACTIVITY_FIELDS.AsObject>,
  }
}

export class CustDataAndArrINVOICES extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustDataAndArrINVOICES;
  hasCustkey(): boolean;
  clearCustkey(): CustDataAndArrINVOICES;

  getSurname(): string;
  setSurname(value: string): CustDataAndArrINVOICES;
  hasSurname(): boolean;
  clearSurname(): CustDataAndArrINVOICES;

  getStationDescribe(): string;
  setStationDescribe(value: string): CustDataAndArrINVOICES;
  hasStationDescribe(): boolean;
  clearStationDescribe(): CustDataAndArrINVOICES;

  getBillgroupDescribe(): string;
  setBillgroupDescribe(value: string): CustDataAndArrINVOICES;
  hasBillgroupDescribe(): boolean;
  clearBillgroupDescribe(): CustDataAndArrINVOICES;

  getCtypesDescribe(): string;
  setCtypesDescribe(value: string): CustDataAndArrINVOICES;
  hasCtypesDescribe(): boolean;
  clearCtypesDescribe(): CustDataAndArrINVOICES;

  getNoUnits(): number;
  setNoUnits(value: number): CustDataAndArrINVOICES;
  hasNoUnits(): boolean;
  clearNoUnits(): CustDataAndArrINVOICES;

  getInvoicesList(): Array<INVOICES>;
  setInvoicesList(value: Array<INVOICES>): CustDataAndArrINVOICES;
  clearInvoicesList(): CustDataAndArrINVOICES;
  addInvoices(value?: INVOICES, index?: number): INVOICES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustDataAndArrINVOICES.AsObject;
  static toObject(includeInstance: boolean, msg: CustDataAndArrINVOICES): CustDataAndArrINVOICES.AsObject;
  static serializeBinaryToWriter(message: CustDataAndArrINVOICES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustDataAndArrINVOICES;
  static deserializeBinaryFromReader(message: CustDataAndArrINVOICES, reader: jspb.BinaryReader): CustDataAndArrINVOICES;
}

export namespace CustDataAndArrINVOICES {
  export type AsObject = {
    custkey?: string,
    surname?: string,
    stationDescribe?: string,
    billgroupDescribe?: string,
    ctypesDescribe?: string,
    noUnits?: number,
    invoicesList: Array<INVOICES.AsObject>,
  }
}

export class InvoiceAgreemReq extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): InvoiceAgreemReq;
  hasCustkey(): boolean;
  clearCustkey(): InvoiceAgreemReq;

  getCycleId(): number;
  setCycleId(value: number): InvoiceAgreemReq;
  hasCycleId(): boolean;
  clearCycleId(): InvoiceAgreemReq;

  getNoMonths(): number;
  setNoMonths(value: number): InvoiceAgreemReq;
  hasNoMonths(): boolean;
  clearNoMonths(): InvoiceAgreemReq;

  getPenaltyPercentage(): number;
  setPenaltyPercentage(value: number): InvoiceAgreemReq;
  hasPenaltyPercentage(): boolean;
  clearPenaltyPercentage(): InvoiceAgreemReq;

  getIsActivity(): boolean;
  setIsActivity(value: boolean): InvoiceAgreemReq;
  hasIsActivity(): boolean;
  clearIsActivity(): InvoiceAgreemReq;

  getTransTypeFTrans(): number;
  setTransTypeFTrans(value: number): InvoiceAgreemReq;

  getTransStypeFTrans(): number;
  setTransStypeFTrans(value: number): InvoiceAgreemReq;

  getTransTypeCustAgreem(): number;
  setTransTypeCustAgreem(value: number): InvoiceAgreemReq;

  getTransStypeCustAgreem(): number;
  setTransStypeCustAgreem(value: number): InvoiceAgreemReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceAgreemReq.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceAgreemReq): InvoiceAgreemReq.AsObject;
  static serializeBinaryToWriter(message: InvoiceAgreemReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceAgreemReq;
  static deserializeBinaryFromReader(message: InvoiceAgreemReq, reader: jspb.BinaryReader): InvoiceAgreemReq;
}

export namespace InvoiceAgreemReq {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
    noMonths?: number,
    penaltyPercentage?: number,
    isActivity?: boolean,
    transTypeFTrans: number,
    transStypeFTrans: number,
    transTypeCustAgreem: number,
    transStypeCustAgreem: number,
  }
}

export class INVOICES extends jspb.Message {
  getInvoiceDate(): date_pb.MasDateTime | undefined;
  setInvoiceDate(value?: date_pb.MasDateTime): INVOICES;
  hasInvoiceDate(): boolean;
  clearInvoiceDate(): INVOICES;

  getCycleId(): number;
  setCycleId(value: number): INVOICES;
  hasCycleId(): boolean;
  clearCycleId(): INVOICES;

  getCustkey(): string;
  setCustkey(value: string): INVOICES;
  hasCustkey(): boolean;
  clearCustkey(): INVOICES;

  getWaterAmt(): number;
  setWaterAmt(value: number): INVOICES;
  hasWaterAmt(): boolean;
  clearWaterAmt(): INVOICES;

  getSewerAmt(): number;
  setSewerAmt(value: number): INVOICES;
  hasSewerAmt(): boolean;
  clearSewerAmt(): INVOICES;

  getTanzeemAmt(): number;
  setTanzeemAmt(value: number): INVOICES;
  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): INVOICES;

  getBasicAmt(): number;
  setBasicAmt(value: number): INVOICES;
  hasBasicAmt(): boolean;
  clearBasicAmt(): INVOICES;

  getTaxAmt(): number;
  setTaxAmt(value: number): INVOICES;
  hasTaxAmt(): boolean;
  clearTaxAmt(): INVOICES;

  getRoundAmt(): number;
  setRoundAmt(value: number): INVOICES;
  hasRoundAmt(): boolean;
  clearRoundAmt(): INVOICES;

  getOtherAmt(): number;
  setOtherAmt(value: number): INVOICES;
  hasOtherAmt(): boolean;
  clearOtherAmt(): INVOICES;

  getInstallAmt(): number;
  setInstallAmt(value: number): INVOICES;
  hasInstallAmt(): boolean;
  clearInstallAmt(): INVOICES;

  getDueAmount(): number;
  setDueAmount(value: number): INVOICES;
  hasDueAmount(): boolean;
  clearDueAmount(): INVOICES;

  getConsump(): number;
  setConsump(value: number): INVOICES;
  hasConsump(): boolean;
  clearConsump(): INVOICES;

  getCType(): string;
  setCType(value: string): INVOICES;
  hasCType(): boolean;
  clearCType(): INVOICES;

  getNoUnits(): number;
  setNoUnits(value: number): INVOICES;
  hasNoUnits(): boolean;
  clearNoUnits(): INVOICES;

  getBillgroup(): string;
  setBillgroup(value: string): INVOICES;
  hasBillgroup(): boolean;
  clearBillgroup(): INVOICES;

  getContractAmt(): number;
  setContractAmt(value: number): INVOICES;
  hasContractAmt(): boolean;
  clearContractAmt(): INVOICES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): INVOICES.AsObject;
  static toObject(includeInstance: boolean, msg: INVOICES): INVOICES.AsObject;
  static serializeBinaryToWriter(message: INVOICES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): INVOICES;
  static deserializeBinaryFromReader(message: INVOICES, reader: jspb.BinaryReader): INVOICES;
}

export namespace INVOICES {
  export type AsObject = {
    invoiceDate?: date_pb.MasDateTime.AsObject,
    cycleId?: number,
    custkey?: string,
    waterAmt?: number,
    sewerAmt?: number,
    tanzeemAmt?: number,
    basicAmt?: number,
    taxAmt?: number,
    roundAmt?: number,
    otherAmt?: number,
    installAmt?: number,
    dueAmount?: number,
    consump?: number,
    cType?: string,
    noUnits?: number,
    billgroup?: string,
    contractAmt?: number,
  }
}

export class ArrSMS_TEMPLATE extends jspb.Message {
  getSmsTemplateList(): Array<SMS_TEMPLATE>;
  setSmsTemplateList(value: Array<SMS_TEMPLATE>): ArrSMS_TEMPLATE;
  clearSmsTemplateList(): ArrSMS_TEMPLATE;
  addSmsTemplate(value?: SMS_TEMPLATE, index?: number): SMS_TEMPLATE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrSMS_TEMPLATE.AsObject;
  static toObject(includeInstance: boolean, msg: ArrSMS_TEMPLATE): ArrSMS_TEMPLATE.AsObject;
  static serializeBinaryToWriter(message: ArrSMS_TEMPLATE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrSMS_TEMPLATE;
  static deserializeBinaryFromReader(message: ArrSMS_TEMPLATE, reader: jspb.BinaryReader): ArrSMS_TEMPLATE;
}

export namespace ArrSMS_TEMPLATE {
  export type AsObject = {
    smsTemplateList: Array<SMS_TEMPLATE.AsObject>,
  }
}

export class SMS_TEMPLATE extends jspb.Message {
  getTemplateId(): number;
  setTemplateId(value: number): SMS_TEMPLATE;
  hasTemplateId(): boolean;
  clearTemplateId(): SMS_TEMPLATE;

  getTemplate(): string;
  setTemplate(value: string): SMS_TEMPLATE;

  getTemplateDesc(): string;
  setTemplateDesc(value: string): SMS_TEMPLATE;

  getIsActive(): boolean;
  setIsActive(value: boolean): SMS_TEMPLATE;
  hasIsActive(): boolean;
  clearIsActive(): SMS_TEMPLATE;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): SMS_TEMPLATE;
  hasIsDefault(): boolean;
  clearIsDefault(): SMS_TEMPLATE;

  getIsSystem(): boolean;
  setIsSystem(value: boolean): SMS_TEMPLATE;
  hasIsSystem(): boolean;
  clearIsSystem(): SMS_TEMPLATE;

  getSmsType(): number;
  setSmsType(value: number): SMS_TEMPLATE;

  getExpiryDays(): number;
  setExpiryDays(value: number): SMS_TEMPLATE;
  hasExpiryDays(): boolean;
  clearExpiryDays(): SMS_TEMPLATE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMS_TEMPLATE.AsObject;
  static toObject(includeInstance: boolean, msg: SMS_TEMPLATE): SMS_TEMPLATE.AsObject;
  static serializeBinaryToWriter(message: SMS_TEMPLATE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMS_TEMPLATE;
  static deserializeBinaryFromReader(message: SMS_TEMPLATE, reader: jspb.BinaryReader): SMS_TEMPLATE;
}

export namespace SMS_TEMPLATE {
  export type AsObject = {
    templateId?: number,
    template: string,
    templateDesc: string,
    isActive?: boolean,
    isDefault?: boolean,
    isSystem?: boolean,
    smsType: number,
    expiryDays?: number,
  }
}

export class SMS_TEMPLATE_ID extends jspb.Message {
  getTemplateId(): number;
  setTemplateId(value: number): SMS_TEMPLATE_ID;
  hasTemplateId(): boolean;
  clearTemplateId(): SMS_TEMPLATE_ID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMS_TEMPLATE_ID.AsObject;
  static toObject(includeInstance: boolean, msg: SMS_TEMPLATE_ID): SMS_TEMPLATE_ID.AsObject;
  static serializeBinaryToWriter(message: SMS_TEMPLATE_ID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMS_TEMPLATE_ID;
  static deserializeBinaryFromReader(message: SMS_TEMPLATE_ID, reader: jspb.BinaryReader): SMS_TEMPLATE_ID;
}

export namespace SMS_TEMPLATE_ID {
  export type AsObject = {
    templateId?: number,
  }
}

export class SMS_SENT_DATA extends jspb.Message {
  getSmsId(): number;
  setSmsId(value: number): SMS_SENT_DATA;
  hasSmsId(): boolean;
  clearSmsId(): SMS_SENT_DATA;

  getCustkey(): string;
  setCustkey(value: string): SMS_SENT_DATA;
  hasCustkey(): boolean;
  clearCustkey(): SMS_SENT_DATA;

  getMobileNo(): string;
  setMobileNo(value: string): SMS_SENT_DATA;
  hasMobileNo(): boolean;
  clearMobileNo(): SMS_SENT_DATA;

  getSmsText(): string;
  setSmsText(value: string): SMS_SENT_DATA;
  hasSmsText(): boolean;
  clearSmsText(): SMS_SENT_DATA;

  getSmsDate(): date_pb.MasDateTime | undefined;
  setSmsDate(value?: date_pb.MasDateTime): SMS_SENT_DATA;
  hasSmsDate(): boolean;
  clearSmsDate(): SMS_SENT_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMS_SENT_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: SMS_SENT_DATA): SMS_SENT_DATA.AsObject;
  static serializeBinaryToWriter(message: SMS_SENT_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMS_SENT_DATA;
  static deserializeBinaryFromReader(message: SMS_SENT_DATA, reader: jspb.BinaryReader): SMS_SENT_DATA;
}

export namespace SMS_SENT_DATA {
  export type AsObject = {
    smsId?: number,
    custkey?: string,
    mobileNo?: string,
    smsText?: string,
    smsDate?: date_pb.MasDateTime.AsObject,
  }
}

export class ArrSMS_SENT_DATA extends jspb.Message {
  getSmsSentDataList(): Array<SMS_SENT_DATA>;
  setSmsSentDataList(value: Array<SMS_SENT_DATA>): ArrSMS_SENT_DATA;
  clearSmsSentDataList(): ArrSMS_SENT_DATA;
  addSmsSentData(value?: SMS_SENT_DATA, index?: number): SMS_SENT_DATA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrSMS_SENT_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: ArrSMS_SENT_DATA): ArrSMS_SENT_DATA.AsObject;
  static serializeBinaryToWriter(message: ArrSMS_SENT_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrSMS_SENT_DATA;
  static deserializeBinaryFromReader(message: ArrSMS_SENT_DATA, reader: jspb.BinaryReader): ArrSMS_SENT_DATA;
}

export namespace ArrSMS_SENT_DATA {
  export type AsObject = {
    smsSentDataList: Array<SMS_SENT_DATA.AsObject>,
  }
}

export class CustomersBill extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustomersBill;
  hasCustkey(): boolean;
  clearCustkey(): CustomersBill;

  getSurname(): string;
  setSurname(value: string): CustomersBill;
  hasSurname(): boolean;
  clearSurname(): CustomersBill;

  getCtype(): string;
  setCtype(value: string): CustomersBill;
  hasCtype(): boolean;
  clearCtype(): CustomersBill;

  getBillgroup(): string;
  setBillgroup(value: string): CustomersBill;
  hasBillgroup(): boolean;
  clearBillgroup(): CustomersBill;

  getBookNo(): string;
  setBookNo(value: string): CustomersBill;
  hasBookNo(): boolean;
  clearBookNo(): CustomersBill;

  getTotalAmount(): number;
  setTotalAmount(value: number): CustomersBill;
  hasTotalAmount(): boolean;
  clearTotalAmount(): CustomersBill;

  getTotalCount(): number;
  setTotalCount(value: number): CustomersBill;
  hasTotalCount(): boolean;
  clearTotalCount(): CustomersBill;

  getLastNotifyDate(): date_pb.MasDateTime | undefined;
  setLastNotifyDate(value?: date_pb.MasDateTime): CustomersBill;
  hasLastNotifyDate(): boolean;
  clearLastNotifyDate(): CustomersBill;

  getLastCollectionDate(): date_pb.MasDateTime | undefined;
  setLastCollectionDate(value?: date_pb.MasDateTime): CustomersBill;
  hasLastCollectionDate(): boolean;
  clearLastCollectionDate(): CustomersBill;

  getLastBillDate(): date_pb.MasDateTime | undefined;
  setLastBillDate(value?: date_pb.MasDateTime): CustomersBill;
  hasLastBillDate(): boolean;
  clearLastBillDate(): CustomersBill;

  getMobileno(): string;
  setMobileno(value: string): CustomersBill;
  hasMobileno(): boolean;
  clearMobileno(): CustomersBill;

  getHasMobileno(): boolean;
  setHasMobileno(value: boolean): CustomersBill;
  hasHasMobileno(): boolean;
  clearHasMobileno(): CustomersBill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomersBill.AsObject;
  static toObject(includeInstance: boolean, msg: CustomersBill): CustomersBill.AsObject;
  static serializeBinaryToWriter(message: CustomersBill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomersBill;
  static deserializeBinaryFromReader(message: CustomersBill, reader: jspb.BinaryReader): CustomersBill;
}

export namespace CustomersBill {
  export type AsObject = {
    custkey?: string,
    surname?: string,
    ctype?: string,
    billgroup?: string,
    bookNo?: string,
    totalAmount?: number,
    totalCount?: number,
    lastNotifyDate?: date_pb.MasDateTime.AsObject,
    lastCollectionDate?: date_pb.MasDateTime.AsObject,
    lastBillDate?: date_pb.MasDateTime.AsObject,
    mobileno?: string,
    hasMobileno?: boolean,
  }
}

export class ArrCustomersBills extends jspb.Message {
  getItemsList(): Array<CustomersBill>;
  setItemsList(value: Array<CustomersBill>): ArrCustomersBills;
  clearItemsList(): ArrCustomersBills;
  addItems(value?: CustomersBill, index?: number): CustomersBill;

  getSmsTemplateId(): number;
  setSmsTemplateId(value: number): ArrCustomersBills;
  hasSmsTemplateId(): boolean;
  clearSmsTemplateId(): ArrCustomersBills;

  getSmsType(): SMS_TYPE;
  setSmsType(value: SMS_TYPE): ArrCustomersBills;

  getExpireDate(): number;
  setExpireDate(value: number): ArrCustomersBills;
  hasExpireDate(): boolean;
  clearExpireDate(): ArrCustomersBills;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustomersBills.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustomersBills): ArrCustomersBills.AsObject;
  static serializeBinaryToWriter(message: ArrCustomersBills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustomersBills;
  static deserializeBinaryFromReader(message: ArrCustomersBills, reader: jspb.BinaryReader): ArrCustomersBills;
}

export namespace ArrCustomersBills {
  export type AsObject = {
    itemsList: Array<CustomersBill.AsObject>,
    smsTemplateId?: number,
    smsType: SMS_TYPE,
    expireDate?: number,
  }
}

export class CustomerBillsFilter extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustomerBillsFilter;
  hasCustkey(): boolean;
  clearCustkey(): CustomerBillsFilter;

  getCtype(): string;
  setCtype(value: string): CustomerBillsFilter;
  hasCtype(): boolean;
  clearCtype(): CustomerBillsFilter;

  getBillgroup(): string;
  setBillgroup(value: string): CustomerBillsFilter;
  hasBillgroup(): boolean;
  clearBillgroup(): CustomerBillsFilter;

  getBookNo(): string;
  setBookNo(value: string): CustomerBillsFilter;
  hasBookNo(): boolean;
  clearBookNo(): CustomerBillsFilter;

  getOperator(): AmountOperators;
  setOperator(value: AmountOperators): CustomerBillsFilter;
  hasOperator(): boolean;
  clearOperator(): CustomerBillsFilter;

  getAmount(): number;
  setAmount(value: number): CustomerBillsFilter;
  hasAmount(): boolean;
  clearAmount(): CustomerBillsFilter;

  getLastCollectionDate(): date_pb.MasDateTime | undefined;
  setLastCollectionDate(value?: date_pb.MasDateTime): CustomerBillsFilter;
  hasLastCollectionDate(): boolean;
  clearLastCollectionDate(): CustomerBillsFilter;

  getLastNotifyDate(): date_pb.MasDateTime | undefined;
  setLastNotifyDate(value?: date_pb.MasDateTime): CustomerBillsFilter;
  hasLastNotifyDate(): boolean;
  clearLastNotifyDate(): CustomerBillsFilter;

  getLastBillDate(): date_pb.MasDateTime | undefined;
  setLastBillDate(value?: date_pb.MasDateTime): CustomerBillsFilter;
  hasLastBillDate(): boolean;
  clearLastBillDate(): CustomerBillsFilter;

  getIsMeterConnected(): boolean;
  setIsMeterConnected(value: boolean): CustomerBillsFilter;
  hasIsMeterConnected(): boolean;
  clearIsMeterConnected(): CustomerBillsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBillsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBillsFilter): CustomerBillsFilter.AsObject;
  static serializeBinaryToWriter(message: CustomerBillsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBillsFilter;
  static deserializeBinaryFromReader(message: CustomerBillsFilter, reader: jspb.BinaryReader): CustomerBillsFilter;
}

export namespace CustomerBillsFilter {
  export type AsObject = {
    custkey?: string,
    ctype?: string,
    billgroup?: string,
    bookNo?: string,
    operator?: AmountOperators,
    amount?: number,
    lastCollectionDate?: date_pb.MasDateTime.AsObject,
    lastNotifyDate?: date_pb.MasDateTime.AsObject,
    lastBillDate?: date_pb.MasDateTime.AsObject,
    isMeterConnected?: boolean,
  }
}

export class CustomerCrmFilter extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustomerCrmFilter;
  hasCustkey(): boolean;
  clearCustkey(): CustomerCrmFilter;

  getBillgroup(): string;
  setBillgroup(value: string): CustomerCrmFilter;
  hasBillgroup(): boolean;
  clearBillgroup(): CustomerCrmFilter;

  getBookNo(): string;
  setBookNo(value: string): CustomerCrmFilter;
  hasBookNo(): boolean;
  clearBookNo(): CustomerCrmFilter;

  getStationNosList(): Array<number>;
  setStationNosList(value: Array<number>): CustomerCrmFilter;
  clearStationNosList(): CustomerCrmFilter;
  addStationNos(value: number, index?: number): CustomerCrmFilter;

  getSiteCodesList(): Array<number>;
  setSiteCodesList(value: Array<number>): CustomerCrmFilter;
  clearSiteCodesList(): CustomerCrmFilter;
  addSiteCodes(value: number, index?: number): CustomerCrmFilter;

  getLastNotifyDate(): date_pb.MasDateTime | undefined;
  setLastNotifyDate(value?: date_pb.MasDateTime): CustomerCrmFilter;
  hasLastNotifyDate(): boolean;
  clearLastNotifyDate(): CustomerCrmFilter;

  getFromDate(): date_pb.MasDateTime | undefined;
  setFromDate(value?: date_pb.MasDateTime): CustomerCrmFilter;
  hasFromDate(): boolean;
  clearFromDate(): CustomerCrmFilter;

  getToDate(): date_pb.MasDateTime | undefined;
  setToDate(value?: date_pb.MasDateTime): CustomerCrmFilter;
  hasToDate(): boolean;
  clearToDate(): CustomerCrmFilter;

  getPaymentDueDays(): number;
  setPaymentDueDays(value: number): CustomerCrmFilter;
  hasPaymentDueDays(): boolean;
  clearPaymentDueDays(): CustomerCrmFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerCrmFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerCrmFilter): CustomerCrmFilter.AsObject;
  static serializeBinaryToWriter(message: CustomerCrmFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerCrmFilter;
  static deserializeBinaryFromReader(message: CustomerCrmFilter, reader: jspb.BinaryReader): CustomerCrmFilter;
}

export namespace CustomerCrmFilter {
  export type AsObject = {
    custkey?: string,
    billgroup?: string,
    bookNo?: string,
    stationNosList: Array<number>,
    siteCodesList: Array<number>,
    lastNotifyDate?: date_pb.MasDateTime.AsObject,
    fromDate?: date_pb.MasDateTime.AsObject,
    toDate?: date_pb.MasDateTime.AsObject,
    paymentDueDays?: number,
  }
}

export class CustomersCrmBill extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustomersCrmBill;
  hasCustkey(): boolean;
  clearCustkey(): CustomersCrmBill;

  getSurname(): string;
  setSurname(value: string): CustomersCrmBill;
  hasSurname(): boolean;
  clearSurname(): CustomersCrmBill;

  getBillgroup(): string;
  setBillgroup(value: string): CustomersCrmBill;
  hasBillgroup(): boolean;
  clearBillgroup(): CustomersCrmBill;

  getBookNo(): string;
  setBookNo(value: string): CustomersCrmBill;
  hasBookNo(): boolean;
  clearBookNo(): CustomersCrmBill;

  getPaymentOrderNo(): string;
  setPaymentOrderNo(value: string): CustomersCrmBill;
  hasPaymentOrderNo(): boolean;
  clearPaymentOrderNo(): CustomersCrmBill;

  getAmount(): number;
  setAmount(value: number): CustomersCrmBill;
  hasAmount(): boolean;
  clearAmount(): CustomersCrmBill;

  getLastNotifyDate(): date_pb.MasDateTime | undefined;
  setLastNotifyDate(value?: date_pb.MasDateTime): CustomersCrmBill;
  hasLastNotifyDate(): boolean;
  clearLastNotifyDate(): CustomersCrmBill;

  getMobileno(): string;
  setMobileno(value: string): CustomersCrmBill;
  hasMobileno(): boolean;
  clearMobileno(): CustomersCrmBill;

  getHasMobileno(): boolean;
  setHasMobileno(value: boolean): CustomersCrmBill;
  hasHasMobileno(): boolean;
  clearHasMobileno(): CustomersCrmBill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomersCrmBill.AsObject;
  static toObject(includeInstance: boolean, msg: CustomersCrmBill): CustomersCrmBill.AsObject;
  static serializeBinaryToWriter(message: CustomersCrmBill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomersCrmBill;
  static deserializeBinaryFromReader(message: CustomersCrmBill, reader: jspb.BinaryReader): CustomersCrmBill;
}

export namespace CustomersCrmBill {
  export type AsObject = {
    custkey?: string,
    surname?: string,
    billgroup?: string,
    bookNo?: string,
    paymentOrderNo?: string,
    amount?: number,
    lastNotifyDate?: date_pb.MasDateTime.AsObject,
    mobileno?: string,
    hasMobileno?: boolean,
  }
}

export class ArrCustomersCrmBills extends jspb.Message {
  getItemsList(): Array<CustomersCrmBill>;
  setItemsList(value: Array<CustomersCrmBill>): ArrCustomersCrmBills;
  clearItemsList(): ArrCustomersCrmBills;
  addItems(value?: CustomersCrmBill, index?: number): CustomersCrmBill;

  getSmsTemplateId(): number;
  setSmsTemplateId(value: number): ArrCustomersCrmBills;
  hasSmsTemplateId(): boolean;
  clearSmsTemplateId(): ArrCustomersCrmBills;

  getSmsType(): SMS_TYPE;
  setSmsType(value: SMS_TYPE): ArrCustomersCrmBills;

  getExpireDate(): number;
  setExpireDate(value: number): ArrCustomersCrmBills;
  hasExpireDate(): boolean;
  clearExpireDate(): ArrCustomersCrmBills;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustomersCrmBills.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustomersCrmBills): ArrCustomersCrmBills.AsObject;
  static serializeBinaryToWriter(message: ArrCustomersCrmBills, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustomersCrmBills;
  static deserializeBinaryFromReader(message: ArrCustomersCrmBills, reader: jspb.BinaryReader): ArrCustomersCrmBills;
}

export namespace ArrCustomersCrmBills {
  export type AsObject = {
    itemsList: Array<CustomersCrmBill.AsObject>,
    smsTemplateId?: number,
    smsType: SMS_TYPE,
    expireDate?: number,
  }
}

export class CHARITY_RECONCILIATION extends jspb.Message {
  getId(): number;
  setId(value: number): CHARITY_RECONCILIATION;
  hasId(): boolean;
  clearId(): CHARITY_RECONCILIATION;

  getCharityId(): number;
  setCharityId(value: number): CHARITY_RECONCILIATION;

  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): CHARITY_RECONCILIATION;
  hasCharityCreditNo(): boolean;
  clearCharityCreditNo(): CHARITY_RECONCILIATION;

  getReconciliationDate(): date_pb.MasDateTime | undefined;
  setReconciliationDate(value?: date_pb.MasDateTime): CHARITY_RECONCILIATION;
  hasReconciliationDate(): boolean;
  clearReconciliationDate(): CHARITY_RECONCILIATION;

  getDescription(): string;
  setDescription(value: string): CHARITY_RECONCILIATION;
  hasDescription(): boolean;
  clearDescription(): CHARITY_RECONCILIATION;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CHARITY_RECONCILIATION;
  hasStampDate(): boolean;
  clearStampDate(): CHARITY_RECONCILIATION;

  getStampUser(): string;
  setStampUser(value: string): CHARITY_RECONCILIATION;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_RECONCILIATION.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_RECONCILIATION): CHARITY_RECONCILIATION.AsObject;
  static serializeBinaryToWriter(message: CHARITY_RECONCILIATION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_RECONCILIATION;
  static deserializeBinaryFromReader(message: CHARITY_RECONCILIATION, reader: jspb.BinaryReader): CHARITY_RECONCILIATION;
}

export namespace CHARITY_RECONCILIATION {
  export type AsObject = {
    id?: number,
    charityId: number,
    charityCreditNo?: string,
    reconciliationDate?: date_pb.MasDateTime.AsObject,
    description?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser: string,
  }
}

export class CHARITY_RECONCILIATION_Rq extends jspb.Message {
  getCstCreditCharity(): CST_CREDIT_CHARITY | undefined;
  setCstCreditCharity(value?: CST_CREDIT_CHARITY): CHARITY_RECONCILIATION_Rq;
  hasCstCreditCharity(): boolean;
  clearCstCreditCharity(): CHARITY_RECONCILIATION_Rq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_RECONCILIATION_Rq.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_RECONCILIATION_Rq): CHARITY_RECONCILIATION_Rq.AsObject;
  static serializeBinaryToWriter(message: CHARITY_RECONCILIATION_Rq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_RECONCILIATION_Rq;
  static deserializeBinaryFromReader(message: CHARITY_RECONCILIATION_Rq, reader: jspb.BinaryReader): CHARITY_RECONCILIATION_Rq;
}

export namespace CHARITY_RECONCILIATION_Rq {
  export type AsObject = {
    cstCreditCharity?: CST_CREDIT_CHARITY.AsObject,
  }
}

export class CHARITY_RECONCILIATION_Rq_LIST extends jspb.Message {
  getCharityCreditNo(): string;
  setCharityCreditNo(value: string): CHARITY_RECONCILIATION_Rq_LIST;
  hasCharityCreditNo(): boolean;
  clearCharityCreditNo(): CHARITY_RECONCILIATION_Rq_LIST;

  getDescription(): string;
  setDescription(value: string): CHARITY_RECONCILIATION_Rq_LIST;

  getReconciliationDate(): date_pb.MasDateTime | undefined;
  setReconciliationDate(value?: date_pb.MasDateTime): CHARITY_RECONCILIATION_Rq_LIST;
  hasReconciliationDate(): boolean;
  clearReconciliationDate(): CHARITY_RECONCILIATION_Rq_LIST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_RECONCILIATION_Rq_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_RECONCILIATION_Rq_LIST): CHARITY_RECONCILIATION_Rq_LIST.AsObject;
  static serializeBinaryToWriter(message: CHARITY_RECONCILIATION_Rq_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_RECONCILIATION_Rq_LIST;
  static deserializeBinaryFromReader(message: CHARITY_RECONCILIATION_Rq_LIST, reader: jspb.BinaryReader): CHARITY_RECONCILIATION_Rq_LIST;
}

export namespace CHARITY_RECONCILIATION_Rq_LIST {
  export type AsObject = {
    charityCreditNo?: string,
    description: string,
    reconciliationDate?: date_pb.MasDateTime.AsObject,
  }
}

export class CHARITY_NO_RECONCILIATION_Rq extends jspb.Message {
  getCstCharitisId(): string;
  setCstCharitisId(value: string): CHARITY_NO_RECONCILIATION_Rq;
  hasCstCharitisId(): boolean;
  clearCstCharitisId(): CHARITY_NO_RECONCILIATION_Rq;

  getReconciliationDateFrom(): date_pb.MasDateTime | undefined;
  setReconciliationDateFrom(value?: date_pb.MasDateTime): CHARITY_NO_RECONCILIATION_Rq;
  hasReconciliationDateFrom(): boolean;
  clearReconciliationDateFrom(): CHARITY_NO_RECONCILIATION_Rq;

  getReconciliationDateTo(): date_pb.MasDateTime | undefined;
  setReconciliationDateTo(value?: date_pb.MasDateTime): CHARITY_NO_RECONCILIATION_Rq;
  hasReconciliationDateTo(): boolean;
  clearReconciliationDateTo(): CHARITY_NO_RECONCILIATION_Rq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_NO_RECONCILIATION_Rq.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_NO_RECONCILIATION_Rq): CHARITY_NO_RECONCILIATION_Rq.AsObject;
  static serializeBinaryToWriter(message: CHARITY_NO_RECONCILIATION_Rq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_NO_RECONCILIATION_Rq;
  static deserializeBinaryFromReader(message: CHARITY_NO_RECONCILIATION_Rq, reader: jspb.BinaryReader): CHARITY_NO_RECONCILIATION_Rq;
}

export namespace CHARITY_NO_RECONCILIATION_Rq {
  export type AsObject = {
    cstCharitisId?: string,
    reconciliationDateFrom?: date_pb.MasDateTime.AsObject,
    reconciliationDateTo?: date_pb.MasDateTime.AsObject,
  }
}

export class CHARITY_NO_RECONCILIATION_Res extends jspb.Message {
  getCstCreditCharity(): CST_CREDIT_CHARITY | undefined;
  setCstCreditCharity(value?: CST_CREDIT_CHARITY): CHARITY_NO_RECONCILIATION_Res;
  hasCstCreditCharity(): boolean;
  clearCstCreditCharity(): CHARITY_NO_RECONCILIATION_Res;

  getReconciliationDate(): date_pb.MasDateTime | undefined;
  setReconciliationDate(value?: date_pb.MasDateTime): CHARITY_NO_RECONCILIATION_Res;
  hasReconciliationDate(): boolean;
  clearReconciliationDate(): CHARITY_NO_RECONCILIATION_Res;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_NO_RECONCILIATION_Res.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_NO_RECONCILIATION_Res): CHARITY_NO_RECONCILIATION_Res.AsObject;
  static serializeBinaryToWriter(message: CHARITY_NO_RECONCILIATION_Res, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_NO_RECONCILIATION_Res;
  static deserializeBinaryFromReader(message: CHARITY_NO_RECONCILIATION_Res, reader: jspb.BinaryReader): CHARITY_NO_RECONCILIATION_Res;
}

export namespace CHARITY_NO_RECONCILIATION_Res {
  export type AsObject = {
    cstCreditCharity?: CST_CREDIT_CHARITY.AsObject,
    reconciliationDate?: date_pb.MasDateTime.AsObject,
  }
}

export class CHARITY_NO_RECONCILIATION_Res_LIST extends jspb.Message {
  getCharityNoReconciliationResList(): Array<CHARITY_NO_RECONCILIATION_Res>;
  setCharityNoReconciliationResList(value: Array<CHARITY_NO_RECONCILIATION_Res>): CHARITY_NO_RECONCILIATION_Res_LIST;
  clearCharityNoReconciliationResList(): CHARITY_NO_RECONCILIATION_Res_LIST;
  addCharityNoReconciliationRes(value?: CHARITY_NO_RECONCILIATION_Res, index?: number): CHARITY_NO_RECONCILIATION_Res;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CHARITY_NO_RECONCILIATION_Res_LIST.AsObject;
  static toObject(includeInstance: boolean, msg: CHARITY_NO_RECONCILIATION_Res_LIST): CHARITY_NO_RECONCILIATION_Res_LIST.AsObject;
  static serializeBinaryToWriter(message: CHARITY_NO_RECONCILIATION_Res_LIST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CHARITY_NO_RECONCILIATION_Res_LIST;
  static deserializeBinaryFromReader(message: CHARITY_NO_RECONCILIATION_Res_LIST, reader: jspb.BinaryReader): CHARITY_NO_RECONCILIATION_Res_LIST;
}

export namespace CHARITY_NO_RECONCILIATION_Res_LIST {
  export type AsObject = {
    charityNoReconciliationResList: Array<CHARITY_NO_RECONCILIATION_Res.AsObject>,
  }
}

export class SMS_TYPE_REQ extends jspb.Message {
  getSmsType(): SMS_TYPE;
  setSmsType(value: SMS_TYPE): SMS_TYPE_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SMS_TYPE_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: SMS_TYPE_REQ): SMS_TYPE_REQ.AsObject;
  static serializeBinaryToWriter(message: SMS_TYPE_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SMS_TYPE_REQ;
  static deserializeBinaryFromReader(message: SMS_TYPE_REQ, reader: jspb.BinaryReader): SMS_TYPE_REQ;
}

export namespace SMS_TYPE_REQ {
  export type AsObject = {
    smsType: SMS_TYPE,
  }
}

export enum CONN_STATUS { 
  CONNECTED_WITHOUT_METER = 0,
  CONNECTED_WITH_METER = 1,
  DISCONNECTED_WITH_METER = 2,
  DISCONNECTED_WITHOUT_METER = 3,
}
export enum SERVICE_TYPE { 
  WATER = 0,
  SEWER = 1,
  ELECTRICITY = 2,
  GAS = 3,
  HYDRANT = 4,
  FIRE = 5,
}
export enum MeterOperationStatus { 
  WORKING = 0,
  NOT_WORKING = 1,
}
export enum TAX_STATE { 
  NOT_SEND = 0,
  SENT = 1,
}
export enum DATATYPE { 
  INT = 0,
  FLOAT = 1,
  STRING = 2,
  BOOL = 3,
  DATE = 4,
  DATETIME = 5,
  BASE64 = 6,
  LIST = 7,
  OUT_LIST = 8,
  PDF = 9,
  TABLE = 10,
}
export enum FIELDKIND { 
  TEL = 0,
  EMAIL = 2,
  ID = 3,
  ADDRESS = 4,
  CHECK_LIST = 5,
  LABEL = 6,
  PARAGRAPH = 7,
}
export enum QUEUE_STATUS { 
  OPEN = 0,
  CLOSE = 1,
  CANCEL = 2,
  EXPIRED = 3,
}
export enum CUSTOMER_TYPE { 
  CUSTOMER = 0,
  COLLABORATOR = 1,
  EMPLOYEE = 2,
  ORGANIZATION = 3,
  ALL = 4,
}
export enum REQUEST_MESSAGE_TYPE { 
  INITAL = 0,
  SUCCESS = 1,
  ERROR = 2,
}
export enum SMS_TEMPLATE_FIELDS { 
  CUSTKEY = 1,
  SURNAME = 2,
  TOTAL_AMOUNT = 3,
  TOTAL_COUNT = 4,
  LAST_BIL_DATE = 5,
  LAST_COL_DATE = 6,
  LAST_NOTIFY_DATE = 7,
  BILLGROUP_DESCRIBE = 8,
  BOOK_NO_DESCRIBE = 9,
  CTYPE_DESCRIBE = 10,
  MOBILE_NO = 11,
  SITE_DESCRIBE = 12,
  STATION_DESCRIBE = 13,
  PAYMENT_ORDER_NO = 14,
  ELECTRONIC_PAYMENT_NO = 15,
}
export enum AmountOperators { 
  EQUAL = 0,
  GREATER_THAN_OR_EQUAL = 1,
  LESS_THAN_OR_EQUAL = 2,
}
export enum SMS_STATUS { 
  SMS_PENDING = 0,
  SMS_SENT = 1,
  SMS_FAILED = 2,
}
export enum SMS_TYPE { 
  SMS_TYPE_UNSPECIFIED = 0,
  SMS_TYPE_GENERAL = 1,
  SMS_TYPE_MADYONYA = 2,
  SMS_TYPE_CRM = 3,
}
