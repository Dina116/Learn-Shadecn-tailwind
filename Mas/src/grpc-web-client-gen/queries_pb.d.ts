import * as jspb from 'google-protobuf'

import * as date_pb from './date_pb'; // proto import: "date.proto"


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

export class BillgroupRq extends jspb.Message {
  getBillgroup(): string;
  setBillgroup(value: string): BillgroupRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillgroupRq.AsObject;
  static toObject(includeInstance: boolean, msg: BillgroupRq): BillgroupRq.AsObject;
  static serializeBinaryToWriter(message: BillgroupRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillgroupRq;
  static deserializeBinaryFromReader(message: BillgroupRq, reader: jspb.BinaryReader): BillgroupRq;
}

export namespace BillgroupRq {
  export type AsObject = {
    billgroup: string,
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

export class SearchCustomerRq extends jspb.Message {
  getFiltersList(): Array<Filters>;
  setFiltersList(value: Array<Filters>): SearchCustomerRq;
  clearFiltersList(): SearchCustomerRq;
  addFilters(value?: Filters, index?: number): Filters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCustomerRq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCustomerRq): SearchCustomerRq.AsObject;
  static serializeBinaryToWriter(message: SearchCustomerRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCustomerRq;
  static deserializeBinaryFromReader(message: SearchCustomerRq, reader: jspb.BinaryReader): SearchCustomerRq;
}

export namespace SearchCustomerRq {
  export type AsObject = {
    filtersList: Array<Filters.AsObject>,
  }
}

export class SearchCustomerRs extends jspb.Message {
  getBasiccustomerdetailsList(): Array<BasicCustomerDetails>;
  setBasiccustomerdetailsList(value: Array<BasicCustomerDetails>): SearchCustomerRs;
  clearBasiccustomerdetailsList(): SearchCustomerRs;
  addBasiccustomerdetails(value?: BasicCustomerDetails, index?: number): BasicCustomerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCustomerRs.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCustomerRs): SearchCustomerRs.AsObject;
  static serializeBinaryToWriter(message: SearchCustomerRs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCustomerRs;
  static deserializeBinaryFromReader(message: SearchCustomerRs, reader: jspb.BinaryReader): SearchCustomerRs;
}

export namespace SearchCustomerRs {
  export type AsObject = {
    basiccustomerdetailsList: Array<BasicCustomerDetails.AsObject>,
  }
}

export class BasicCustomerDetails extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): BasicCustomerDetails;

  getSurname(): string;
  setSurname(value: string): BasicCustomerDetails;
  hasSurname(): boolean;
  clearSurname(): BasicCustomerDetails;

  getBillgroup(): string;
  setBillgroup(value: string): BasicCustomerDetails;
  hasBillgroup(): boolean;
  clearBillgroup(): BasicCustomerDetails;

  getBookNo(): string;
  setBookNo(value: string): BasicCustomerDetails;
  hasBookNo(): boolean;
  clearBookNo(): BasicCustomerDetails;

  getUaAddress(): string;
  setUaAddress(value: string): BasicCustomerDetails;
  hasUaAddress(): boolean;
  clearUaAddress(): BasicCustomerDetails;

  getOldKey(): string;
  setOldKey(value: string): BasicCustomerDetails;
  hasOldKey(): boolean;
  clearOldKey(): BasicCustomerDetails;

  getOpenDate(): date_pb.MasDateTime | undefined;
  setOpenDate(value?: date_pb.MasDateTime): BasicCustomerDetails;
  hasOpenDate(): boolean;
  clearOpenDate(): BasicCustomerDetails;

  getWalkNo(): string;
  setWalkNo(value: string): BasicCustomerDetails;
  hasWalkNo(): boolean;
  clearWalkNo(): BasicCustomerDetails;

  getMeterRef(): string;
  setMeterRef(value: string): BasicCustomerDetails;
  hasMeterRef(): boolean;
  clearMeterRef(): BasicCustomerDetails;

  getPropertyId(): number;
  setPropertyId(value: number): BasicCustomerDetails;
  hasPropertyId(): boolean;
  clearPropertyId(): BasicCustomerDetails;

  getStationNo(): number;
  setStationNo(value: number): BasicCustomerDetails;
  hasStationNo(): boolean;
  clearStationNo(): BasicCustomerDetails;

  getStationName(): string;
  setStationName(value: string): BasicCustomerDetails;
  hasStationName(): boolean;
  clearStationName(): BasicCustomerDetails;

  getMeterId(): number;
  setMeterId(value: number): BasicCustomerDetails;
  hasMeterId(): boolean;
  clearMeterId(): BasicCustomerDetails;

  getCrNo(): string;
  setCrNo(value: string): BasicCustomerDetails;
  hasCrNo(): boolean;
  clearCrNo(): BasicCustomerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicCustomerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: BasicCustomerDetails): BasicCustomerDetails.AsObject;
  static serializeBinaryToWriter(message: BasicCustomerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicCustomerDetails;
  static deserializeBinaryFromReader(message: BasicCustomerDetails, reader: jspb.BinaryReader): BasicCustomerDetails;
}

export namespace BasicCustomerDetails {
  export type AsObject = {
    custkey: string,
    surname?: string,
    billgroup?: string,
    bookNo?: string,
    uaAddress?: string,
    oldKey?: string,
    openDate?: date_pb.MasDateTime.AsObject,
    walkNo?: string,
    meterRef?: string,
    propertyId?: number,
    stationNo?: number,
    stationName?: string,
    meterId?: number,
    crNo?: string,
  }
}

export class Filters extends jspb.Message {
  getValue(): string;
  setValue(value: string): Filters;

  getFiltercondition(): FilterCondition;
  setFiltercondition(value: FilterCondition): Filters;

  getSearchfilters(): SearchFilters;
  setSearchfilters(value: SearchFilters): Filters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filters.AsObject;
  static toObject(includeInstance: boolean, msg: Filters): Filters.AsObject;
  static serializeBinaryToWriter(message: Filters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filters;
  static deserializeBinaryFromReader(message: Filters, reader: jspb.BinaryReader): Filters;
}

export namespace Filters {
  export type AsObject = {
    value: string,
    filtercondition: FilterCondition,
    searchfilters: SearchFilters,
  }
}

export class CUSTOMER_MAIN_DATA extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CUSTOMER_MAIN_DATA;

  getSurname(): string;
  setSurname(value: string): CUSTOMER_MAIN_DATA;
  hasSurname(): boolean;
  clearSurname(): CUSTOMER_MAIN_DATA;

  getBillgroup(): string;
  setBillgroup(value: string): CUSTOMER_MAIN_DATA;
  hasBillgroup(): boolean;
  clearBillgroup(): CUSTOMER_MAIN_DATA;

  getBookNo(): string;
  setBookNo(value: string): CUSTOMER_MAIN_DATA;
  hasBookNo(): boolean;
  clearBookNo(): CUSTOMER_MAIN_DATA;

  getUaAddress(): string;
  setUaAddress(value: string): CUSTOMER_MAIN_DATA;
  hasUaAddress(): boolean;
  clearUaAddress(): CUSTOMER_MAIN_DATA;

  getOldKey(): string;
  setOldKey(value: string): CUSTOMER_MAIN_DATA;
  hasOldKey(): boolean;
  clearOldKey(): CUSTOMER_MAIN_DATA;

  getPropRef(): string;
  setPropRef(value: string): CUSTOMER_MAIN_DATA;
  hasPropRef(): boolean;
  clearPropRef(): CUSTOMER_MAIN_DATA;

  getMeterRef(): string;
  setMeterRef(value: string): CUSTOMER_MAIN_DATA;
  hasMeterRef(): boolean;
  clearMeterRef(): CUSTOMER_MAIN_DATA;

  getPrevCustkey(): string;
  setPrevCustkey(value: string): CUSTOMER_MAIN_DATA;
  hasPrevCustkey(): boolean;
  clearPrevCustkey(): CUSTOMER_MAIN_DATA;

  getPrevPropRef(): string;
  setPrevPropRef(value: string): CUSTOMER_MAIN_DATA;
  hasPrevPropRef(): boolean;
  clearPrevPropRef(): CUSTOMER_MAIN_DATA;

  getNoUnits(): number;
  setNoUnits(value: number): CUSTOMER_MAIN_DATA;
  hasNoUnits(): boolean;
  clearNoUnits(): CUSTOMER_MAIN_DATA;

  getMeterDiam(): string;
  setMeterDiam(value: string): CUSTOMER_MAIN_DATA;
  hasMeterDiam(): boolean;
  clearMeterDiam(): CUSTOMER_MAIN_DATA;

  getMeterStatus(): string;
  setMeterStatus(value: string): CUSTOMER_MAIN_DATA;
  hasMeterStatus(): boolean;
  clearMeterStatus(): CUSTOMER_MAIN_DATA;

  getConnStatus(): string;
  setConnStatus(value: string): CUSTOMER_MAIN_DATA;
  hasConnStatus(): boolean;
  clearConnStatus(): CUSTOMER_MAIN_DATA;

  getNid(): string;
  setNid(value: string): CUSTOMER_MAIN_DATA;
  hasNid(): boolean;
  clearNid(): CUSTOMER_MAIN_DATA;

  getTaxNo(): string;
  setTaxNo(value: string): CUSTOMER_MAIN_DATA;
  hasTaxNo(): boolean;
  clearTaxNo(): CUSTOMER_MAIN_DATA;

  getHasWater(): boolean;
  setHasWater(value: boolean): CUSTOMER_MAIN_DATA;
  hasHasWater(): boolean;
  clearHasWater(): CUSTOMER_MAIN_DATA;

  getHasSewer(): boolean;
  setHasSewer(value: boolean): CUSTOMER_MAIN_DATA;
  hasHasSewer(): boolean;
  clearHasSewer(): CUSTOMER_MAIN_DATA;

  getInstallDate(): date_pb.MasDateTime | undefined;
  setInstallDate(value?: date_pb.MasDateTime): CUSTOMER_MAIN_DATA;
  hasInstallDate(): boolean;
  clearInstallDate(): CUSTOMER_MAIN_DATA;

  getRemovalDate(): date_pb.MasDateTime | undefined;
  setRemovalDate(value?: date_pb.MasDateTime): CUSTOMER_MAIN_DATA;
  hasRemovalDate(): boolean;
  clearRemovalDate(): CUSTOMER_MAIN_DATA;

  getCTypeDescription(): string;
  setCTypeDescription(value: string): CUSTOMER_MAIN_DATA;
  hasCTypeDescription(): boolean;
  clearCTypeDescription(): CUSTOMER_MAIN_DATA;

  getMeterType(): string;
  setMeterType(value: string): CUSTOMER_MAIN_DATA;
  hasMeterType(): boolean;
  clearMeterType(): CUSTOMER_MAIN_DATA;

  getMeterTypeDesc(): string;
  setMeterTypeDesc(value: string): CUSTOMER_MAIN_DATA;
  hasMeterTypeDesc(): boolean;
  clearMeterTypeDesc(): CUSTOMER_MAIN_DATA;

  getMeterMake(): string;
  setMeterMake(value: string): CUSTOMER_MAIN_DATA;
  hasMeterMake(): boolean;
  clearMeterMake(): CUSTOMER_MAIN_DATA;

  getMeterMakeDesc(): string;
  setMeterMakeDesc(value: string): CUSTOMER_MAIN_DATA;
  hasMeterMakeDesc(): boolean;
  clearMeterMakeDesc(): CUSTOMER_MAIN_DATA;

  getConnDate(): date_pb.MasDateTime | undefined;
  setConnDate(value?: date_pb.MasDateTime): CUSTOMER_MAIN_DATA;
  hasConnDate(): boolean;
  clearConnDate(): CUSTOMER_MAIN_DATA;

  getMobileNo(): string;
  setMobileNo(value: string): CUSTOMER_MAIN_DATA;
  hasMobileNo(): boolean;
  clearMobileNo(): CUSTOMER_MAIN_DATA;

  getMeterNoDigits(): number;
  setMeterNoDigits(value: number): CUSTOMER_MAIN_DATA;
  hasMeterNoDigits(): boolean;
  clearMeterNoDigits(): CUSTOMER_MAIN_DATA;

  getLastReading(): number;
  setLastReading(value: number): CUSTOMER_MAIN_DATA;
  hasLastReading(): boolean;
  clearLastReading(): CUSTOMER_MAIN_DATA;

  getIsMasterConnection(): boolean;
  setIsMasterConnection(value: boolean): CUSTOMER_MAIN_DATA;
  hasIsMasterConnection(): boolean;
  clearIsMasterConnection(): CUSTOMER_MAIN_DATA;

  getNoSubConnections(): number;
  setNoSubConnections(value: number): CUSTOMER_MAIN_DATA;
  hasNoSubConnections(): boolean;
  clearNoSubConnections(): CUSTOMER_MAIN_DATA;

  getCType(): string;
  setCType(value: string): CUSTOMER_MAIN_DATA;
  hasCType(): boolean;
  clearCType(): CUSTOMER_MAIN_DATA;

  getIsPrepaid(): boolean;
  setIsPrepaid(value: boolean): CUSTOMER_MAIN_DATA;
  hasIsPrepaid(): boolean;
  clearIsPrepaid(): CUSTOMER_MAIN_DATA;

  getStationNo(): number;
  setStationNo(value: number): CUSTOMER_MAIN_DATA;
  hasStationNo(): boolean;
  clearStationNo(): CUSTOMER_MAIN_DATA;

  getStationName(): string;
  setStationName(value: string): CUSTOMER_MAIN_DATA;
  hasStationName(): boolean;
  clearStationName(): CUSTOMER_MAIN_DATA;

  getHasMeter(): boolean;
  setHasMeter(value: boolean): CUSTOMER_MAIN_DATA;
  hasHasMeter(): boolean;
  clearHasMeter(): CUSTOMER_MAIN_DATA;

  getMeterId(): number;
  setMeterId(value: number): CUSTOMER_MAIN_DATA;
  hasMeterId(): boolean;
  clearMeterId(): CUSTOMER_MAIN_DATA;

  getCstMultiCtgList(): Array<CST_MULTI_CTG>;
  setCstMultiCtgList(value: Array<CST_MULTI_CTG>): CUSTOMER_MAIN_DATA;
  clearCstMultiCtgList(): CUSTOMER_MAIN_DATA;
  addCstMultiCtg(value?: CST_MULTI_CTG, index?: number): CST_MULTI_CTG;

  getBookName(): string;
  setBookName(value: string): CUSTOMER_MAIN_DATA;
  hasBookName(): boolean;
  clearBookName(): CUSTOMER_MAIN_DATA;

  getOpenDate(): date_pb.MasDateTime | undefined;
  setOpenDate(value?: date_pb.MasDateTime): CUSTOMER_MAIN_DATA;
  hasOpenDate(): boolean;
  clearOpenDate(): CUSTOMER_MAIN_DATA;

  getTenantsList(): Array<CST_TENANT>;
  setTenantsList(value: Array<CST_TENANT>): CUSTOMER_MAIN_DATA;
  clearTenantsList(): CUSTOMER_MAIN_DATA;
  addTenants(value?: CST_TENANT, index?: number): CST_TENANT;

  getUaAdress5(): string;
  setUaAdress5(value: string): CUSTOMER_MAIN_DATA;
  hasUaAdress5(): boolean;
  clearUaAdress5(): CUSTOMER_MAIN_DATA;

  getSerialNo(): string;
  setSerialNo(value: string): CUSTOMER_MAIN_DATA;
  hasSerialNo(): boolean;
  clearSerialNo(): CUSTOMER_MAIN_DATA;

  getMeterTagNo(): string;
  setMeterTagNo(value: string): CUSTOMER_MAIN_DATA;
  hasMeterTagNo(): boolean;
  clearMeterTagNo(): CUSTOMER_MAIN_DATA;

  getWalletamount(): number;
  setWalletamount(value: number): CUSTOMER_MAIN_DATA;
  hasWalletamount(): boolean;
  clearWalletamount(): CUSTOMER_MAIN_DATA;

  getAgreemsamount(): number;
  setAgreemsamount(value: number): CUSTOMER_MAIN_DATA;
  hasAgreemsamount(): boolean;
  clearAgreemsamount(): CUSTOMER_MAIN_DATA;

  getUnbilledamount(): number;
  setUnbilledamount(value: number): CUSTOMER_MAIN_DATA;
  hasUnbilledamount(): boolean;
  clearUnbilledamount(): CUSTOMER_MAIN_DATA;

  getClBalance(): number;
  setClBalance(value: number): CUSTOMER_MAIN_DATA;
  hasClBalance(): boolean;
  clearClBalance(): CUSTOMER_MAIN_DATA;

  getCustwalletList(): Array<CustWallet>;
  setCustwalletList(value: Array<CustWallet>): CUSTOMER_MAIN_DATA;
  clearCustwalletList(): CUSTOMER_MAIN_DATA;
  addCustwallet(value?: CustWallet, index?: number): CustWallet;

  getDirection1(): string;
  setDirection1(value: string): CUSTOMER_MAIN_DATA;
  hasDirection1(): boolean;
  clearDirection1(): CUSTOMER_MAIN_DATA;

  getDirection2(): string;
  setDirection2(value: string): CUSTOMER_MAIN_DATA;
  hasDirection2(): boolean;
  clearDirection2(): CUSTOMER_MAIN_DATA;

  getDirection3(): string;
  setDirection3(value: string): CUSTOMER_MAIN_DATA;
  hasDirection3(): boolean;
  clearDirection3(): CUSTOMER_MAIN_DATA;

  getDirection4(): string;
  setDirection4(value: string): CUSTOMER_MAIN_DATA;
  hasDirection4(): boolean;
  clearDirection4(): CUSTOMER_MAIN_DATA;

  getWalkNo(): string;
  setWalkNo(value: string): CUSTOMER_MAIN_DATA;
  hasWalkNo(): boolean;
  clearWalkNo(): CUSTOMER_MAIN_DATA;

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
    custkey: string,
    surname?: string,
    billgroup?: string,
    bookNo?: string,
    uaAddress?: string,
    oldKey?: string,
    propRef?: string,
    meterRef?: string,
    prevCustkey?: string,
    prevPropRef?: string,
    noUnits?: number,
    meterDiam?: string,
    meterStatus?: string,
    connStatus?: string,
    nid?: string,
    taxNo?: string,
    hasWater?: boolean,
    hasSewer?: boolean,
    installDate?: date_pb.MasDateTime.AsObject,
    removalDate?: date_pb.MasDateTime.AsObject,
    cTypeDescription?: string,
    meterType?: string,
    meterTypeDesc?: string,
    meterMake?: string,
    meterMakeDesc?: string,
    connDate?: date_pb.MasDateTime.AsObject,
    mobileNo?: string,
    meterNoDigits?: number,
    lastReading?: number,
    isMasterConnection?: boolean,
    noSubConnections?: number,
    cType?: string,
    isPrepaid?: boolean,
    stationNo?: number,
    stationName?: string,
    hasMeter?: boolean,
    meterId?: number,
    cstMultiCtgList: Array<CST_MULTI_CTG.AsObject>,
    bookName?: string,
    openDate?: date_pb.MasDateTime.AsObject,
    tenantsList: Array<CST_TENANT.AsObject>,
    uaAdress5?: string,
    serialNo?: string,
    meterTagNo?: string,
    walletamount?: number,
    agreemsamount?: number,
    unbilledamount?: number,
    clBalance?: number,
    custwalletList: Array<CustWallet.AsObject>,
    direction1?: string,
    direction2?: string,
    direction3?: string,
    direction4?: string,
    walkNo?: string,
    crNo?: string,
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

export class ArrTRANSACTIONS extends jspb.Message {
  getTransactionsList(): Array<TRANSACTIONS>;
  setTransactionsList(value: Array<TRANSACTIONS>): ArrTRANSACTIONS;
  clearTransactionsList(): ArrTRANSACTIONS;
  addTransactions(value?: TRANSACTIONS, index?: number): TRANSACTIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrTRANSACTIONS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrTRANSACTIONS): ArrTRANSACTIONS.AsObject;
  static serializeBinaryToWriter(message: ArrTRANSACTIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrTRANSACTIONS;
  static deserializeBinaryFromReader(message: ArrTRANSACTIONS, reader: jspb.BinaryReader): ArrTRANSACTIONS;
}

export namespace ArrTRANSACTIONS {
  export type AsObject = {
    transactionsList: Array<TRANSACTIONS.AsObject>,
  }
}

export class TRANSACTIONS extends jspb.Message {
  getTransNo(): number;
  setTransNo(value: number): TRANSACTIONS;

  getAmount(): number;
  setAmount(value: number): TRANSACTIONS;

  getDescription(): string;
  setDescription(value: string): TRANSACTIONS;
  hasDescription(): boolean;
  clearDescription(): TRANSACTIONS;

  getDocumentNo(): string;
  setDocumentNo(value: string): TRANSACTIONS;
  hasDocumentNo(): boolean;
  clearDocumentNo(): TRANSACTIONS;

  getEffectDte(): date_pb.MasDateTime | undefined;
  setEffectDte(value?: date_pb.MasDateTime): TRANSACTIONS;
  hasEffectDte(): boolean;
  clearEffectDte(): TRANSACTIONS;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): TRANSACTIONS;
  hasBilngDate(): boolean;
  clearBilngDate(): TRANSACTIONS;

  getMemoFld(): string;
  setMemoFld(value: string): TRANSACTIONS;
  hasMemoFld(): boolean;
  clearMemoFld(): TRANSACTIONS;

  getStatmNo(): number;
  setStatmNo(value: number): TRANSACTIONS;
  hasStatmNo(): boolean;
  clearStatmNo(): TRANSACTIONS;

  getTrnsType(): number;
  setTrnsType(value: number): TRANSACTIONS;
  hasTrnsType(): boolean;
  clearTrnsType(): TRANSACTIONS;

  getTrnsStype(): number;
  setTrnsStype(value: number): TRANSACTIONS;
  hasTrnsStype(): boolean;
  clearTrnsStype(): TRANSACTIONS;

  getCrReading(): number;
  setCrReading(value: number): TRANSACTIONS;
  hasCrReading(): boolean;
  clearCrReading(): TRANSACTIONS;

  getPrReading(): number;
  setPrReading(value: number): TRANSACTIONS;
  hasPrReading(): boolean;
  clearPrReading(): TRANSACTIONS;

  getConsump(): number;
  setConsump(value: number): TRANSACTIONS;
  hasConsump(): boolean;
  clearConsump(): TRANSACTIONS;

  getReadType(): number;
  setReadType(value: number): TRANSACTIONS;
  hasReadType(): boolean;
  clearReadType(): TRANSACTIONS;

  getRunningBlance(): number;
  setRunningBlance(value: number): TRANSACTIONS;
  hasRunningBlance(): boolean;
  clearRunningBlance(): TRANSACTIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TRANSACTIONS.AsObject;
  static toObject(includeInstance: boolean, msg: TRANSACTIONS): TRANSACTIONS.AsObject;
  static serializeBinaryToWriter(message: TRANSACTIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TRANSACTIONS;
  static deserializeBinaryFromReader(message: TRANSACTIONS, reader: jspb.BinaryReader): TRANSACTIONS;
}

export namespace TRANSACTIONS {
  export type AsObject = {
    transNo: number,
    amount: number,
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

export class ArrSTATMENT extends jspb.Message {
  getStatmentList(): Array<STATMENT>;
  setStatmentList(value: Array<STATMENT>): ArrSTATMENT;
  clearStatmentList(): ArrSTATMENT;
  addStatment(value?: STATMENT, index?: number): STATMENT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrSTATMENT.AsObject;
  static toObject(includeInstance: boolean, msg: ArrSTATMENT): ArrSTATMENT.AsObject;
  static serializeBinaryToWriter(message: ArrSTATMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrSTATMENT;
  static deserializeBinaryFromReader(message: ArrSTATMENT, reader: jspb.BinaryReader): ArrSTATMENT;
}

export namespace ArrSTATMENT {
  export type AsObject = {
    statmentList: Array<STATMENT.AsObject>,
  }
}

export class STATMENT extends jspb.Message {
  getPaymentNo(): string;
  setPaymentNo(value: string): STATMENT;
  hasPaymentNo(): boolean;
  clearPaymentNo(): STATMENT;

  getStatmNo(): number;
  setStatmNo(value: number): STATMENT;

  getClBlnce(): number;
  setClBlnce(value: number): STATMENT;
  hasClBlnce(): boolean;
  clearClBlnce(): STATMENT;

  getCurCharges(): number;
  setCurCharges(value: number): STATMENT;
  hasCurCharges(): boolean;
  clearCurCharges(): STATMENT;

  getOpBlnce(): number;
  setOpBlnce(value: number): STATMENT;
  hasOpBlnce(): boolean;
  clearOpBlnce(): STATMENT;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): STATMENT;
  hasBilngDate(): boolean;
  clearBilngDate(): STATMENT;

  getDeliverySt(): number;
  setDeliverySt(value: number): STATMENT;

  getTransactionsList(): Array<TRANSACTIONS>;
  setTransactionsList(value: Array<TRANSACTIONS>): STATMENT;
  clearTransactionsList(): STATMENT;
  addTransactions(value?: TRANSACTIONS, index?: number): TRANSACTIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STATMENT.AsObject;
  static toObject(includeInstance: boolean, msg: STATMENT): STATMENT.AsObject;
  static serializeBinaryToWriter(message: STATMENT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STATMENT;
  static deserializeBinaryFromReader(message: STATMENT, reader: jspb.BinaryReader): STATMENT;
}

export namespace STATMENT {
  export type AsObject = {
    paymentNo?: string,
    statmNo: number,
    clBlnce?: number,
    curCharges?: number,
    opBlnce?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    deliverySt: number,
    transactionsList: Array<TRANSACTIONS.AsObject>,
  }
}

export class ArrCustAgreem extends jspb.Message {
  getCustagreemList(): Array<CustAgreem>;
  setCustagreemList(value: Array<CustAgreem>): ArrCustAgreem;
  clearCustagreemList(): ArrCustAgreem;
  addCustagreem(value?: CustAgreem, index?: number): CustAgreem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustAgreem.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustAgreem): ArrCustAgreem.AsObject;
  static serializeBinaryToWriter(message: ArrCustAgreem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustAgreem;
  static deserializeBinaryFromReader(message: ArrCustAgreem, reader: jspb.BinaryReader): ArrCustAgreem;
}

export namespace ArrCustAgreem {
  export type AsObject = {
    custagreemList: Array<CustAgreem.AsObject>,
  }
}

export class CustAgreem extends jspb.Message {
  getAgrmNo(): number;
  setAgrmNo(value: number): CustAgreem;
  hasAgrmNo(): boolean;
  clearAgrmNo(): CustAgreem;

  getCustkey(): string;
  setCustkey(value: string): CustAgreem;
  hasCustkey(): boolean;
  clearCustkey(): CustAgreem;

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

  getInstalmentsList(): Array<AgremInstalment>;
  setInstalmentsList(value: Array<AgremInstalment>): CustAgreem;
  clearInstalmentsList(): CustAgreem;
  addInstalments(value?: AgremInstalment, index?: number): AgremInstalment;

  getAgremName(): string;
  setAgremName(value: string): CustAgreem;
  hasAgremName(): boolean;
  clearAgremName(): CustAgreem;

  getPenaltyValue(): number;
  setPenaltyValue(value: number): CustAgreem;
  hasPenaltyValue(): boolean;
  clearPenaltyValue(): CustAgreem;

  getPenaltyType(): number;
  setPenaltyType(value: number): CustAgreem;
  hasPenaltyType(): boolean;
  clearPenaltyType(): CustAgreem;

  getPenaltyTypeName(): string;
  setPenaltyTypeName(value: string): CustAgreem;
  hasPenaltyTypeName(): boolean;
  clearPenaltyTypeName(): CustAgreem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustAgreem.AsObject;
  static toObject(includeInstance: boolean, msg: CustAgreem): CustAgreem.AsObject;
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
    penaltyValue?: number,
    penaltyType?: number,
    penaltyTypeName?: string,
  }
}

export class AgremInstalment extends jspb.Message {
  getInstalmentNo(): number;
  setInstalmentNo(value: number): AgremInstalment;

  getTransNo(): number;
  setTransNo(value: number): AgremInstalment;
  hasTransNo(): boolean;
  clearTransNo(): AgremInstalment;

  getAmount(): number;
  setAmount(value: number): AgremInstalment;
  hasAmount(): boolean;
  clearAmount(): AgremInstalment;

  getInvoiceDate(): date_pb.MasDateTime | undefined;
  setInvoiceDate(value?: date_pb.MasDateTime): AgremInstalment;
  hasInvoiceDate(): boolean;
  clearInvoiceDate(): AgremInstalment;

  getChargeDate(): date_pb.MasDateTime | undefined;
  setChargeDate(value?: date_pb.MasDateTime): AgremInstalment;
  hasChargeDate(): boolean;
  clearChargeDate(): AgremInstalment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgremInstalment.AsObject;
  static toObject(includeInstance: boolean, msg: AgremInstalment): AgremInstalment.AsObject;
  static serializeBinaryToWriter(message: AgremInstalment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgremInstalment;
  static deserializeBinaryFromReader(message: AgremInstalment, reader: jspb.BinaryReader): AgremInstalment;
}

export namespace AgremInstalment {
  export type AsObject = {
    instalmentNo: number,
    transNo?: number,
    amount?: number,
    invoiceDate?: date_pb.MasDateTime.AsObject,
    chargeDate?: date_pb.MasDateTime.AsObject,
  }
}

export class READINGS extends jspb.Message {
  getReadingNo(): number;
  setReadingNo(value: number): READINGS;

  getBReadings(): number;
  setBReadings(value: number): READINGS;

  getConsump(): number;
  setConsump(value: number): READINGS;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): READINGS;

  getIsInvoiced(): boolean;
  setIsInvoiced(value: boolean): READINGS;

  getInvoiceDate(): date_pb.MasDateTime | undefined;
  setInvoiceDate(value?: date_pb.MasDateTime): READINGS;
  hasInvoiceDate(): boolean;
  clearInvoiceDate(): READINGS;

  getReadingDate(): date_pb.MasDateTime | undefined;
  setReadingDate(value?: date_pb.MasDateTime): READINGS;
  hasReadingDate(): boolean;
  clearReadingDate(): READINGS;

  getMasReadMethod(): number;
  setMasReadMethod(value: number): READINGS;
  hasMasReadMethod(): boolean;
  clearMasReadMethod(): READINGS;

  getMasReadBy(): string;
  setMasReadBy(value: string): READINGS;
  hasMasReadBy(): boolean;
  clearMasReadBy(): READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: READINGS): READINGS.AsObject;
  static serializeBinaryToWriter(message: READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): READINGS;
  static deserializeBinaryFromReader(message: READINGS, reader: jspb.BinaryReader): READINGS;
}

export namespace READINGS {
  export type AsObject = {
    readingNo: number,
    bReadings: number,
    consump: number,
    isCancelled: boolean,
    isInvoiced: boolean,
    invoiceDate?: date_pb.MasDateTime.AsObject,
    readingDate?: date_pb.MasDateTime.AsObject,
    masReadMethod?: number,
    masReadBy?: string,
  }
}

export class ArrREADINGS extends jspb.Message {
  getReadingsList(): Array<READINGS>;
  setReadingsList(value: Array<READINGS>): ArrREADINGS;
  clearReadingsList(): ArrREADINGS;
  addReadings(value?: READINGS, index?: number): READINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrREADINGS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrREADINGS): ArrREADINGS.AsObject;
  static serializeBinaryToWriter(message: ArrREADINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrREADINGS;
  static deserializeBinaryFromReader(message: ArrREADINGS, reader: jspb.BinaryReader): ArrREADINGS;
}

export namespace ArrREADINGS {
  export type AsObject = {
    readingsList: Array<READINGS.AsObject>,
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

export class TEST extends jspb.Message {
  getNumberR(): number;
  setNumberR(value: number): TEST;

  getNumberO(): number;
  setNumberO(value: number): TEST;
  hasNumberO(): boolean;
  clearNumberO(): TEST;

  getStringR(): string;
  setStringR(value: string): TEST;

  getStringO(): string;
  setStringO(value: string): TEST;
  hasStringO(): boolean;
  clearStringO(): TEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TEST.AsObject;
  static toObject(includeInstance: boolean, msg: TEST): TEST.AsObject;
  static serializeBinaryToWriter(message: TEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TEST;
  static deserializeBinaryFromReader(message: TEST, reader: jspb.BinaryReader): TEST;
}

export namespace TEST {
  export type AsObject = {
    numberR: number,
    numberO?: number,
    stringR: string,
    stringO?: string,
  }
}

export class JSON_TEST extends jspb.Message {
  getTest(): string;
  setTest(value: string): JSON_TEST;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JSON_TEST.AsObject;
  static toObject(includeInstance: boolean, msg: JSON_TEST): JSON_TEST.AsObject;
  static serializeBinaryToWriter(message: JSON_TEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JSON_TEST;
  static deserializeBinaryFromReader(message: JSON_TEST, reader: jspb.BinaryReader): JSON_TEST;
}

export namespace JSON_TEST {
  export type AsObject = {
    test: string,
  }
}

export class ArrBILL_PRINT extends jspb.Message {
  getBillPrintList(): Array<BILL_PRINT>;
  setBillPrintList(value: Array<BILL_PRINT>): ArrBILL_PRINT;
  clearBillPrintList(): ArrBILL_PRINT;
  addBillPrint(value?: BILL_PRINT, index?: number): BILL_PRINT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrBILL_PRINT.AsObject;
  static toObject(includeInstance: boolean, msg: ArrBILL_PRINT): ArrBILL_PRINT.AsObject;
  static serializeBinaryToWriter(message: ArrBILL_PRINT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrBILL_PRINT;
  static deserializeBinaryFromReader(message: ArrBILL_PRINT, reader: jspb.BinaryReader): ArrBILL_PRINT;
}

export namespace ArrBILL_PRINT {
  export type AsObject = {
    billPrintList: Array<BILL_PRINT.AsObject>,
  }
}

export class BILL_PRINT extends jspb.Message {
  getStationNo(): number;
  setStationNo(value: number): BILL_PRINT;
  hasStationNo(): boolean;
  clearStationNo(): BILL_PRINT;

  getStationName(): string;
  setStationName(value: string): BILL_PRINT;
  hasStationName(): boolean;
  clearStationName(): BILL_PRINT;

  getBillgroup(): string;
  setBillgroup(value: string): BILL_PRINT;
  hasBillgroup(): boolean;
  clearBillgroup(): BILL_PRINT;

  getBillgroupName(): string;
  setBillgroupName(value: string): BILL_PRINT;
  hasBillgroupName(): boolean;
  clearBillgroupName(): BILL_PRINT;

  getBookNo(): string;
  setBookNo(value: string): BILL_PRINT;
  hasBookNo(): boolean;
  clearBookNo(): BILL_PRINT;

  getBookName(): string;
  setBookName(value: string): BILL_PRINT;
  hasBookName(): boolean;
  clearBookName(): BILL_PRINT;

  getWalkNo(): string;
  setWalkNo(value: string): BILL_PRINT;
  hasWalkNo(): boolean;
  clearWalkNo(): BILL_PRINT;

  getSeqNo(): number;
  setSeqNo(value: number): BILL_PRINT;
  hasSeqNo(): boolean;
  clearSeqNo(): BILL_PRINT;

  getCustkey(): string;
  setCustkey(value: string): BILL_PRINT;
  hasCustkey(): boolean;
  clearCustkey(): BILL_PRINT;

  getSurname(): string;
  setSurname(value: string): BILL_PRINT;
  hasSurname(): boolean;
  clearSurname(): BILL_PRINT;

  getUaAdress1(): string;
  setUaAdress1(value: string): BILL_PRINT;
  hasUaAdress1(): boolean;
  clearUaAdress1(): BILL_PRINT;

  getUaAdress2(): string;
  setUaAdress2(value: string): BILL_PRINT;
  hasUaAdress2(): boolean;
  clearUaAdress2(): BILL_PRINT;

  getUaAdress3(): string;
  setUaAdress3(value: string): BILL_PRINT;
  hasUaAdress3(): boolean;
  clearUaAdress3(): BILL_PRINT;

  getUaAdress4(): string;
  setUaAdress4(value: string): BILL_PRINT;
  hasUaAdress4(): boolean;
  clearUaAdress4(): BILL_PRINT;

  getOldKey(): string;
  setOldKey(value: string): BILL_PRINT;
  hasOldKey(): boolean;
  clearOldKey(): BILL_PRINT;

  getTaxNo(): string;
  setTaxNo(value: string): BILL_PRINT;
  hasTaxNo(): boolean;
  clearTaxNo(): BILL_PRINT;

  getTelNo(): string;
  setTelNo(value: string): BILL_PRINT;
  hasTelNo(): boolean;
  clearTelNo(): BILL_PRINT;

  getIdNo(): string;
  setIdNo(value: string): BILL_PRINT;
  hasIdNo(): boolean;
  clearIdNo(): BILL_PRINT;

  getPropRef(): string;
  setPropRef(value: string): BILL_PRINT;
  hasPropRef(): boolean;
  clearPropRef(): BILL_PRINT;

  getMeterType(): string;
  setMeterType(value: string): BILL_PRINT;
  hasMeterType(): boolean;
  clearMeterType(): BILL_PRINT;

  getMeterRef(): string;
  setMeterRef(value: string): BILL_PRINT;
  hasMeterRef(): boolean;
  clearMeterRef(): BILL_PRINT;

  getCType(): string;
  setCType(value: string): BILL_PRINT;
  hasCType(): boolean;
  clearCType(): BILL_PRINT;

  getCtypegrpId(): string;
  setCtypegrpId(value: string): BILL_PRINT;
  hasCtypegrpId(): boolean;
  clearCtypegrpId(): BILL_PRINT;

  getIsMainCtype(): number;
  setIsMainCtype(value: number): BILL_PRINT;
  hasIsMainCtype(): boolean;
  clearIsMainCtype(): BILL_PRINT;

  getMainCType(): string;
  setMainCType(value: string): BILL_PRINT;
  hasMainCType(): boolean;
  clearMainCType(): BILL_PRINT;

  getHasSewer(): number;
  setHasSewer(value: number): BILL_PRINT;
  hasHasSewer(): boolean;
  clearHasSewer(): BILL_PRINT;

  getSewerType(): number;
  setSewerType(value: number): BILL_PRINT;
  hasSewerType(): boolean;
  clearSewerType(): BILL_PRINT;

  getNoUnits(): number;
  setNoUnits(value: number): BILL_PRINT;
  hasNoUnits(): boolean;
  clearNoUnits(): BILL_PRINT;

  getMeterConditionCode(): string;
  setMeterConditionCode(value: string): BILL_PRINT;
  hasMeterConditionCode(): boolean;
  clearMeterConditionCode(): BILL_PRINT;

  getMeterSizeCode(): string;
  setMeterSizeCode(value: string): BILL_PRINT;
  hasMeterSizeCode(): boolean;
  clearMeterSizeCode(): BILL_PRINT;

  getIssueSt(): string;
  setIssueSt(value: string): BILL_PRINT;
  hasIssueSt(): boolean;
  clearIssueSt(): BILL_PRINT;

  getIsTarakom(): number;
  setIsTarakom(value: number): BILL_PRINT;
  hasIsTarakom(): boolean;
  clearIsTarakom(): BILL_PRINT;

  getDeliverySt(): number;
  setDeliverySt(value: number): BILL_PRINT;
  hasDeliverySt(): boolean;
  clearDeliverySt(): BILL_PRINT;

  getCycleId(): number;
  setCycleId(value: number): BILL_PRINT;
  hasCycleId(): boolean;
  clearCycleId(): BILL_PRINT;

  getBilngDate(): date_pb.MasDateTime | undefined;
  setBilngDate(value?: date_pb.MasDateTime): BILL_PRINT;
  hasBilngDate(): boolean;
  clearBilngDate(): BILL_PRINT;

  getStatmNo(): number;
  setStatmNo(value: number): BILL_PRINT;
  hasStatmNo(): boolean;
  clearStatmNo(): BILL_PRINT;

  getPaymentNo(): string;
  setPaymentNo(value: string): BILL_PRINT;
  hasPaymentNo(): boolean;
  clearPaymentNo(): BILL_PRINT;

  getGardPaymentNo(): string;
  setGardPaymentNo(value: string): BILL_PRINT;
  hasGardPaymentNo(): boolean;
  clearGardPaymentNo(): BILL_PRINT;

  getMarketing(): number;
  setMarketing(value: number): BILL_PRINT;
  hasMarketing(): boolean;
  clearMarketing(): BILL_PRINT;

  getOpBlnce(): number;
  setOpBlnce(value: number): BILL_PRINT;
  hasOpBlnce(): boolean;
  clearOpBlnce(): BILL_PRINT;

  getClBlnce(): number;
  setClBlnce(value: number): BILL_PRINT;
  hasClBlnce(): boolean;
  clearClBlnce(): BILL_PRINT;

  getInstalment(): number;
  setInstalment(value: number): BILL_PRINT;
  hasInstalment(): boolean;
  clearInstalment(): BILL_PRINT;

  getCurCharges(): number;
  setCurCharges(value: number): BILL_PRINT;
  hasCurCharges(): boolean;
  clearCurCharges(): BILL_PRINT;

  getCurPaymnts(): number;
  setCurPaymnts(value: number): BILL_PRINT;
  hasCurPaymnts(): boolean;
  clearCurPaymnts(): BILL_PRINT;

  getCollectionAmt(): number;
  setCollectionAmt(value: number): BILL_PRINT;
  hasCollectionAmt(): boolean;
  clearCollectionAmt(): BILL_PRINT;

  getPartialCurAmt(): number;
  setPartialCurAmt(value: number): BILL_PRINT;
  hasPartialCurAmt(): boolean;
  clearPartialCurAmt(): BILL_PRINT;

  getDueAmount(): number;
  setDueAmount(value: number): BILL_PRINT;
  hasDueAmount(): boolean;
  clearDueAmount(): BILL_PRINT;

  getNetDueAmount(): number;
  setNetDueAmount(value: number): BILL_PRINT;
  hasNetDueAmount(): boolean;
  clearNetDueAmount(): BILL_PRINT;

  getWaterAmt(): number;
  setWaterAmt(value: number): BILL_PRINT;
  hasWaterAmt(): boolean;
  clearWaterAmt(): BILL_PRINT;

  getSewerAmt(): number;
  setSewerAmt(value: number): BILL_PRINT;
  hasSewerAmt(): boolean;
  clearSewerAmt(): BILL_PRINT;

  getTanzeemAmt(): number;
  setTanzeemAmt(value: number): BILL_PRINT;
  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): BILL_PRINT;

  getBasicAmt(): number;
  setBasicAmt(value: number): BILL_PRINT;
  hasBasicAmt(): boolean;
  clearBasicAmt(): BILL_PRINT;

  getContractAmt(): number;
  setContractAmt(value: number): BILL_PRINT;
  hasContractAmt(): boolean;
  clearContractAmt(): BILL_PRINT;

  getTaxAmt(): number;
  setTaxAmt(value: number): BILL_PRINT;
  hasTaxAmt(): boolean;
  clearTaxAmt(): BILL_PRINT;

  getRoundAmt(): number;
  setRoundAmt(value: number): BILL_PRINT;
  hasRoundAmt(): boolean;
  clearRoundAmt(): BILL_PRINT;

  getInstallsAmt(): number;
  setInstallsAmt(value: number): BILL_PRINT;
  hasInstallsAmt(): boolean;
  clearInstallsAmt(): BILL_PRINT;

  getInstallsPastCycleAmt(): number;
  setInstallsPastCycleAmt(value: number): BILL_PRINT;
  hasInstallsPastCycleAmt(): boolean;
  clearInstallsPastCycleAmt(): BILL_PRINT;

  getInstallsTawselaAmt(): number;
  setInstallsTawselaAmt(value: number): BILL_PRINT;
  hasInstallsTawselaAmt(): boolean;
  clearInstallsTawselaAmt(): BILL_PRINT;

  getInstallsTarakomAmt(): number;
  setInstallsTarakomAmt(value: number): BILL_PRINT;
  hasInstallsTarakomAmt(): boolean;
  clearInstallsTarakomAmt(): BILL_PRINT;

  getInstallsMeterFixAmt(): number;
  setInstallsMeterFixAmt(value: number): BILL_PRINT;
  hasInstallsMeterFixAmt(): boolean;
  clearInstallsMeterFixAmt(): BILL_PRINT;

  getInstallsHighConsumpAmt(): number;
  setInstallsHighConsumpAmt(value: number): BILL_PRINT;
  hasInstallsHighConsumpAmt(): boolean;
  clearInstallsHighConsumpAmt(): BILL_PRINT;

  getAgreemPenaltyAmt(): number;
  setAgreemPenaltyAmt(value: number): BILL_PRINT;
  hasAgreemPenaltyAmt(): boolean;
  clearAgreemPenaltyAmt(): BILL_PRINT;

  getTakafulAmt(): number;
  setTakafulAmt(value: number): BILL_PRINT;
  hasTakafulAmt(): boolean;
  clearTakafulAmt(): BILL_PRINT;

  getMeterAmt(): number;
  setMeterAmt(value: number): BILL_PRINT;
  hasMeterAmt(): boolean;
  clearMeterAmt(): BILL_PRINT;

  getConnAmt(): number;
  setConnAmt(value: number): BILL_PRINT;
  hasConnAmt(): boolean;
  clearConnAmt(): BILL_PRINT;

  getVirtualAdj(): number;
  setVirtualAdj(value: number): BILL_PRINT;
  hasVirtualAdj(): boolean;
  clearVirtualAdj(): BILL_PRINT;

  getMeterManAmt(): number;
  setMeterManAmt(value: number): BILL_PRINT;
  hasMeterManAmt(): boolean;
  clearMeterManAmt(): BILL_PRINT;

  getKhasmTaswya(): number;
  setKhasmTaswya(value: number): BILL_PRINT;
  hasKhasmTaswya(): boolean;
  clearKhasmTaswya(): BILL_PRINT;

  getKestTswya(): number;
  setKestTswya(value: number): BILL_PRINT;
  hasKestTswya(): boolean;
  clearKestTswya(): BILL_PRINT;

  getPastCycAgreemAmt(): number;
  setPastCycAgreemAmt(value: number): BILL_PRINT;
  hasPastCycAgreemAmt(): boolean;
  clearPastCycAgreemAmt(): BILL_PRINT;

  getWaterTarakomDiscountAmt(): number;
  setWaterTarakomDiscountAmt(value: number): BILL_PRINT;
  hasWaterTarakomDiscountAmt(): boolean;
  clearWaterTarakomDiscountAmt(): BILL_PRINT;

  getSewerTarakomDiscountAmt(): number;
  setSewerTarakomDiscountAmt(value: number): BILL_PRINT;
  hasSewerTarakomDiscountAmt(): boolean;
  clearSewerTarakomDiscountAmt(): BILL_PRINT;

  getTarakomAgreemAmt(): number;
  setTarakomAgreemAmt(value: number): BILL_PRINT;
  hasTarakomAgreemAmt(): boolean;
  clearTarakomAgreemAmt(): BILL_PRINT;

  getAgreemAmt(): number;
  setAgreemAmt(value: number): BILL_PRINT;
  hasAgreemAmt(): boolean;
  clearAgreemAmt(): BILL_PRINT;

  getDbtAmt(): number;
  setDbtAmt(value: number): BILL_PRINT;
  hasDbtAmt(): boolean;
  clearDbtAmt(): BILL_PRINT;

  getCrdtAmt(): number;
  setCrdtAmt(value: number): BILL_PRINT;
  hasCrdtAmt(): boolean;
  clearCrdtAmt(): BILL_PRINT;

  getOtherAmt(): number;
  setOtherAmt(value: number): BILL_PRINT;
  hasOtherAmt(): boolean;
  clearOtherAmt(): BILL_PRINT;

  getOtherAmt1(): number;
  setOtherAmt1(value: number): BILL_PRINT;
  hasOtherAmt1(): boolean;
  clearOtherAmt1(): BILL_PRINT;

  getOtherAmt2(): number;
  setOtherAmt2(value: number): BILL_PRINT;
  hasOtherAmt2(): boolean;
  clearOtherAmt2(): BILL_PRINT;

  getOtherAmt3(): number;
  setOtherAmt3(value: number): BILL_PRINT;
  hasOtherAmt3(): boolean;
  clearOtherAmt3(): BILL_PRINT;

  getOtherAmt4(): number;
  setOtherAmt4(value: number): BILL_PRINT;
  hasOtherAmt4(): boolean;
  clearOtherAmt4(): BILL_PRINT;

  getCsFeesAmt(): number;
  setCsFeesAmt(value: number): BILL_PRINT;
  hasCsFeesAmt(): boolean;
  clearCsFeesAmt(): BILL_PRINT;

  getCsPaymentAmt(): number;
  setCsPaymentAmt(value: number): BILL_PRINT;
  hasCsPaymentAmt(): boolean;
  clearCsPaymentAmt(): BILL_PRINT;

  getCsAgreemAmt(): number;
  setCsAgreemAmt(value: number): BILL_PRINT;
  hasCsAgreemAmt(): boolean;
  clearCsAgreemAmt(): BILL_PRINT;

  getCsAgreemInstallAmt(): number;
  setCsAgreemInstallAmt(value: number): BILL_PRINT;
  hasCsAgreemInstallAmt(): boolean;
  clearCsAgreemInstallAmt(): BILL_PRINT;

  getReadType(): number;
  setReadType(value: number): BILL_PRINT;
  hasReadType(): boolean;
  clearReadType(): BILL_PRINT;

  getWtariffId(): string;
  setWtariffId(value: string): BILL_PRINT;
  hasWtariffId(): boolean;
  clearWtariffId(): BILL_PRINT;

  getStariffId(): string;
  setStariffId(value: string): BILL_PRINT;
  hasStariffId(): boolean;
  clearStariffId(): BILL_PRINT;

  getPrReading(): number;
  setPrReading(value: number): BILL_PRINT;
  hasPrReading(): boolean;
  clearPrReading(): BILL_PRINT;

  getCrReading(): number;
  setCrReading(value: number): BILL_PRINT;
  hasCrReading(): boolean;
  clearCrReading(): BILL_PRINT;

  getConsump(): number;
  setConsump(value: number): BILL_PRINT;
  hasConsump(): boolean;
  clearConsump(): BILL_PRINT;

  getCustBand(): number;
  setCustBand(value: number): BILL_PRINT;
  hasCustBand(): boolean;
  clearCustBand(): BILL_PRINT;

  getNoBands(): number;
  setNoBands(value: number): BILL_PRINT;
  hasNoBands(): boolean;
  clearNoBands(): BILL_PRINT;

  getWaterBnd1From(): number;
  setWaterBnd1From(value: number): BILL_PRINT;
  hasWaterBnd1From(): boolean;
  clearWaterBnd1From(): BILL_PRINT;

  getWaterBnd1To(): number;
  setWaterBnd1To(value: number): BILL_PRINT;
  hasWaterBnd1To(): boolean;
  clearWaterBnd1To(): BILL_PRINT;

  getWaterPriceB1(): number;
  setWaterPriceB1(value: number): BILL_PRINT;
  hasWaterPriceB1(): boolean;
  clearWaterPriceB1(): BILL_PRINT;

  getWaterBnd2From(): number;
  setWaterBnd2From(value: number): BILL_PRINT;
  hasWaterBnd2From(): boolean;
  clearWaterBnd2From(): BILL_PRINT;

  getWaterBnd2To(): number;
  setWaterBnd2To(value: number): BILL_PRINT;
  hasWaterBnd2To(): boolean;
  clearWaterBnd2To(): BILL_PRINT;

  getWaterPriceB2(): number;
  setWaterPriceB2(value: number): BILL_PRINT;
  hasWaterPriceB2(): boolean;
  clearWaterPriceB2(): BILL_PRINT;

  getWaterBnd3From(): number;
  setWaterBnd3From(value: number): BILL_PRINT;
  hasWaterBnd3From(): boolean;
  clearWaterBnd3From(): BILL_PRINT;

  getWaterBnd3To(): number;
  setWaterBnd3To(value: number): BILL_PRINT;
  hasWaterBnd3To(): boolean;
  clearWaterBnd3To(): BILL_PRINT;

  getWaterPriceB3(): number;
  setWaterPriceB3(value: number): BILL_PRINT;
  hasWaterPriceB3(): boolean;
  clearWaterPriceB3(): BILL_PRINT;

  getWaterBnd4From(): number;
  setWaterBnd4From(value: number): BILL_PRINT;
  hasWaterBnd4From(): boolean;
  clearWaterBnd4From(): BILL_PRINT;

  getWaterBnd4To(): number;
  setWaterBnd4To(value: number): BILL_PRINT;
  hasWaterBnd4To(): boolean;
  clearWaterBnd4To(): BILL_PRINT;

  getWaterPriceB4(): number;
  setWaterPriceB4(value: number): BILL_PRINT;
  hasWaterPriceB4(): boolean;
  clearWaterPriceB4(): BILL_PRINT;

  getWaterBnd5From(): number;
  setWaterBnd5From(value: number): BILL_PRINT;
  hasWaterBnd5From(): boolean;
  clearWaterBnd5From(): BILL_PRINT;

  getWaterBnd5To(): number;
  setWaterBnd5To(value: number): BILL_PRINT;
  hasWaterBnd5To(): boolean;
  clearWaterBnd5To(): BILL_PRINT;

  getWaterPriceB5(): number;
  setWaterPriceB5(value: number): BILL_PRINT;
  hasWaterPriceB5(): boolean;
  clearWaterPriceB5(): BILL_PRINT;

  getConsB1(): number;
  setConsB1(value: number): BILL_PRINT;
  hasConsB1(): boolean;
  clearConsB1(): BILL_PRINT;

  getConsB2(): number;
  setConsB2(value: number): BILL_PRINT;
  hasConsB2(): boolean;
  clearConsB2(): BILL_PRINT;

  getConsB3(): number;
  setConsB3(value: number): BILL_PRINT;
  hasConsB3(): boolean;
  clearConsB3(): BILL_PRINT;

  getConsB4(): number;
  setConsB4(value: number): BILL_PRINT;
  hasConsB4(): boolean;
  clearConsB4(): BILL_PRINT;

  getConsB5(): number;
  setConsB5(value: number): BILL_PRINT;
  hasConsB5(): boolean;
  clearConsB5(): BILL_PRINT;

  getWaterAmountB1(): number;
  setWaterAmountB1(value: number): BILL_PRINT;
  hasWaterAmountB1(): boolean;
  clearWaterAmountB1(): BILL_PRINT;

  getWaterAmountB2(): number;
  setWaterAmountB2(value: number): BILL_PRINT;
  hasWaterAmountB2(): boolean;
  clearWaterAmountB2(): BILL_PRINT;

  getWaterAmountB3(): number;
  setWaterAmountB3(value: number): BILL_PRINT;
  hasWaterAmountB3(): boolean;
  clearWaterAmountB3(): BILL_PRINT;

  getWaterAmountB4(): number;
  setWaterAmountB4(value: number): BILL_PRINT;
  hasWaterAmountB4(): boolean;
  clearWaterAmountB4(): BILL_PRINT;

  getWaterAmountB5(): number;
  setWaterAmountB5(value: number): BILL_PRINT;
  hasWaterAmountB5(): boolean;
  clearWaterAmountB5(): BILL_PRINT;

  getSewerConsump(): number;
  setSewerConsump(value: number): BILL_PRINT;
  hasSewerConsump(): boolean;
  clearSewerConsump(): BILL_PRINT;

  getSewerCustBand(): number;
  setSewerCustBand(value: number): BILL_PRINT;
  hasSewerCustBand(): boolean;
  clearSewerCustBand(): BILL_PRINT;

  getSewerBnd1From(): number;
  setSewerBnd1From(value: number): BILL_PRINT;
  hasSewerBnd1From(): boolean;
  clearSewerBnd1From(): BILL_PRINT;

  getSewerBnd1To(): number;
  setSewerBnd1To(value: number): BILL_PRINT;
  hasSewerBnd1To(): boolean;
  clearSewerBnd1To(): BILL_PRINT;

  getSewerPriceB1(): number;
  setSewerPriceB1(value: number): BILL_PRINT;
  hasSewerPriceB1(): boolean;
  clearSewerPriceB1(): BILL_PRINT;

  getSewerBnd2From(): number;
  setSewerBnd2From(value: number): BILL_PRINT;
  hasSewerBnd2From(): boolean;
  clearSewerBnd2From(): BILL_PRINT;

  getSewerBnd2To(): number;
  setSewerBnd2To(value: number): BILL_PRINT;
  hasSewerBnd2To(): boolean;
  clearSewerBnd2To(): BILL_PRINT;

  getSewerPriceB2(): number;
  setSewerPriceB2(value: number): BILL_PRINT;
  hasSewerPriceB2(): boolean;
  clearSewerPriceB2(): BILL_PRINT;

  getSewerBnd3From(): number;
  setSewerBnd3From(value: number): BILL_PRINT;
  hasSewerBnd3From(): boolean;
  clearSewerBnd3From(): BILL_PRINT;

  getSewerBnd3To(): number;
  setSewerBnd3To(value: number): BILL_PRINT;
  hasSewerBnd3To(): boolean;
  clearSewerBnd3To(): BILL_PRINT;

  getSewerPriceB3(): number;
  setSewerPriceB3(value: number): BILL_PRINT;
  hasSewerPriceB3(): boolean;
  clearSewerPriceB3(): BILL_PRINT;

  getSewerBnd4From(): number;
  setSewerBnd4From(value: number): BILL_PRINT;
  hasSewerBnd4From(): boolean;
  clearSewerBnd4From(): BILL_PRINT;

  getSewerBnd4To(): number;
  setSewerBnd4To(value: number): BILL_PRINT;
  hasSewerBnd4To(): boolean;
  clearSewerBnd4To(): BILL_PRINT;

  getSewerPriceB4(): number;
  setSewerPriceB4(value: number): BILL_PRINT;
  hasSewerPriceB4(): boolean;
  clearSewerPriceB4(): BILL_PRINT;

  getSewerBnd5From(): number;
  setSewerBnd5From(value: number): BILL_PRINT;
  hasSewerBnd5From(): boolean;
  clearSewerBnd5From(): BILL_PRINT;

  getSewerBnd5To(): number;
  setSewerBnd5To(value: number): BILL_PRINT;
  hasSewerBnd5To(): boolean;
  clearSewerBnd5To(): BILL_PRINT;

  getSewerPriceB5(): number;
  setSewerPriceB5(value: number): BILL_PRINT;
  hasSewerPriceB5(): boolean;
  clearSewerPriceB5(): BILL_PRINT;

  getSconsB1(): number;
  setSconsB1(value: number): BILL_PRINT;
  hasSconsB1(): boolean;
  clearSconsB1(): BILL_PRINT;

  getSconsB2(): number;
  setSconsB2(value: number): BILL_PRINT;
  hasSconsB2(): boolean;
  clearSconsB2(): BILL_PRINT;

  getSconsB3(): number;
  setSconsB3(value: number): BILL_PRINT;
  hasSconsB3(): boolean;
  clearSconsB3(): BILL_PRINT;

  getSconsB4(): number;
  setSconsB4(value: number): BILL_PRINT;
  hasSconsB4(): boolean;
  clearSconsB4(): BILL_PRINT;

  getSconsB5(): number;
  setSconsB5(value: number): BILL_PRINT;
  hasSconsB5(): boolean;
  clearSconsB5(): BILL_PRINT;

  getSewerAmountB1(): number;
  setSewerAmountB1(value: number): BILL_PRINT;
  hasSewerAmountB1(): boolean;
  clearSewerAmountB1(): BILL_PRINT;

  getSewerAmountB2(): number;
  setSewerAmountB2(value: number): BILL_PRINT;
  hasSewerAmountB2(): boolean;
  clearSewerAmountB2(): BILL_PRINT;

  getSewerAmountB3(): number;
  setSewerAmountB3(value: number): BILL_PRINT;
  hasSewerAmountB3(): boolean;
  clearSewerAmountB3(): BILL_PRINT;

  getSewerAmountB4(): number;
  setSewerAmountB4(value: number): BILL_PRINT;
  hasSewerAmountB4(): boolean;
  clearSewerAmountB4(): BILL_PRINT;

  getSewerAmountB5(): number;
  setSewerAmountB5(value: number): BILL_PRINT;
  hasSewerAmountB5(): boolean;
  clearSewerAmountB5(): BILL_PRINT;

  getIsModified(): number;
  setIsModified(value: number): BILL_PRINT;
  hasIsModified(): boolean;
  clearIsModified(): BILL_PRINT;

  getErrorAmt(): number;
  setErrorAmt(value: number): BILL_PRINT;
  hasErrorAmt(): boolean;
  clearErrorAmt(): BILL_PRINT;

  getHasError(): number;
  setHasError(value: number): BILL_PRINT;
  hasHasError(): boolean;
  clearHasError(): BILL_PRINT;

  getErrorMsg(): string;
  setErrorMsg(value: string): BILL_PRINT;
  hasErrorMsg(): boolean;
  clearErrorMsg(): BILL_PRINT;

  getAccuracyValue(): number;
  setAccuracyValue(value: number): BILL_PRINT;
  hasAccuracyValue(): boolean;
  clearAccuracyValue(): BILL_PRINT;

  getVirtualStationNo(): number;
  setVirtualStationNo(value: number): BILL_PRINT;
  hasVirtualStationNo(): boolean;
  clearVirtualStationNo(): BILL_PRINT;

  getVirtualStationDescribe(): string;
  setVirtualStationDescribe(value: string): BILL_PRINT;
  hasVirtualStationDescribe(): boolean;
  clearVirtualStationDescribe(): BILL_PRINT;

  getCtypegrpCode(): string;
  setCtypegrpCode(value: string): BILL_PRINT;
  hasCtypegrpCode(): boolean;
  clearCtypegrpCode(): BILL_PRINT;

  getCtypeDescription(): string;
  setCtypeDescription(value: string): BILL_PRINT;
  hasCtypeDescription(): boolean;
  clearCtypeDescription(): BILL_PRINT;

  getCtypeGroupDescription(): string;
  setCtypeGroupDescription(value: string): BILL_PRINT;
  hasCtypeGroupDescription(): boolean;
  clearCtypeGroupDescription(): BILL_PRINT;

  getMeterSize(): string;
  setMeterSize(value: string): BILL_PRINT;
  hasMeterSize(): boolean;
  clearMeterSize(): BILL_PRINT;

  getMeterCondition(): string;
  setMeterCondition(value: string): BILL_PRINT;
  hasMeterCondition(): boolean;
  clearMeterCondition(): BILL_PRINT;

  getNoBills(): number;
  setNoBills(value: number): BILL_PRINT;
  hasNoBills(): boolean;
  clearNoBills(): BILL_PRINT;

  getCycleDescr(): string;
  setCycleDescr(value: string): BILL_PRINT;
  hasCycleDescr(): boolean;
  clearCycleDescr(): BILL_PRINT;

  getAdjustmentType(): string;
  setAdjustmentType(value: string): BILL_PRINT;
  hasAdjustmentType(): boolean;
  clearAdjustmentType(): BILL_PRINT;

  getBillAmount(): number;
  setBillAmount(value: number): BILL_PRINT;
  hasBillAmount(): boolean;
  clearBillAmount(): BILL_PRINT;

  getAdvancePayment(): number;
  setAdvancePayment(value: number): BILL_PRINT;
  hasAdvancePayment(): boolean;
  clearAdvancePayment(): BILL_PRINT;

  getAdvanceAdjustment(): number;
  setAdvanceAdjustment(value: number): BILL_PRINT;
  hasAdvanceAdjustment(): boolean;
  clearAdvanceAdjustment(): BILL_PRINT;

  getConsumpDescribe(): string;
  setConsumpDescribe(value: string): BILL_PRINT;
  hasConsumpDescribe(): boolean;
  clearConsumpDescribe(): BILL_PRINT;

  getConsumpSequence(): number;
  setConsumpSequence(value: number): BILL_PRINT;
  hasConsumpSequence(): boolean;
  clearConsumpSequence(): BILL_PRINT;

  getHighConsumpAgrmAmt(): number;
  setHighConsumpAgrmAmt(value: number): BILL_PRINT;
  hasHighConsumpAgrmAmt(): boolean;
  clearHighConsumpAgrmAmt(): BILL_PRINT;

  getPayBillAgrmAmt(): number;
  setPayBillAgrmAmt(value: number): BILL_PRINT;
  hasPayBillAgrmAmt(): boolean;
  clearPayBillAgrmAmt(): BILL_PRINT;

  getPayCsAgrmAmt(): number;
  setPayCsAgrmAmt(value: number): BILL_PRINT;
  hasPayCsAgrmAmt(): boolean;
  clearPayCsAgrmAmt(): BILL_PRINT;

  getIsPrinted(): number;
  setIsPrinted(value: number): BILL_PRINT;
  hasIsPrinted(): boolean;
  clearIsPrinted(): BILL_PRINT;

  getIsCody(): number;
  setIsCody(value: number): BILL_PRINT;
  hasIsCody(): boolean;
  clearIsCody(): BILL_PRINT;

  getHasMeter(): number;
  setHasMeter(value: number): BILL_PRINT;
  hasHasMeter(): boolean;
  clearHasMeter(): BILL_PRINT;

  getIsGov(): number;
  setIsGov(value: number): BILL_PRINT;
  hasIsGov(): boolean;
  clearIsGov(): BILL_PRINT;

  getEstdamaBand(): number;
  setEstdamaBand(value: number): BILL_PRINT;
  hasEstdamaBand(): boolean;
  clearEstdamaBand(): BILL_PRINT;

  getSewerNounits(): number;
  setSewerNounits(value: number): BILL_PRINT;
  hasSewerNounits(): boolean;
  clearSewerNounits(): BILL_PRINT;

  getReadingNo(): number;
  setReadingNo(value: number): BILL_PRINT;
  hasReadingNo(): boolean;
  clearReadingNo(): BILL_PRINT;

  getEstdamaCalcMethod(): string;
  setEstdamaCalcMethod(value: string): BILL_PRINT;
  hasEstdamaCalcMethod(): boolean;
  clearEstdamaCalcMethod(): BILL_PRINT;

  getIsGovDescribe(): string;
  setIsGovDescribe(value: string): BILL_PRINT;
  hasIsGovDescribe(): boolean;
  clearIsGovDescribe(): BILL_PRINT;

  getHasMeterDescribe(): string;
  setHasMeterDescribe(value: string): BILL_PRINT;
  hasHasMeterDescribe(): boolean;
  clearHasMeterDescribe(): BILL_PRINT;

  getIsCodyDescribe(): string;
  setIsCodyDescribe(value: string): BILL_PRINT;
  hasIsCodyDescribe(): boolean;
  clearIsCodyDescribe(): BILL_PRINT;

  getWaterDebitAmt(): number;
  setWaterDebitAmt(value: number): BILL_PRINT;
  hasWaterDebitAmt(): boolean;
  clearWaterDebitAmt(): BILL_PRINT;

  getSewerDebitAmt(): number;
  setSewerDebitAmt(value: number): BILL_PRINT;
  hasSewerDebitAmt(): boolean;
  clearSewerDebitAmt(): BILL_PRINT;

  getBasicDebitAmt(): number;
  setBasicDebitAmt(value: number): BILL_PRINT;
  hasBasicDebitAmt(): boolean;
  clearBasicDebitAmt(): BILL_PRINT;

  getTanzeemDebitAmt(): number;
  setTanzeemDebitAmt(value: number): BILL_PRINT;
  hasTanzeemDebitAmt(): boolean;
  clearTanzeemDebitAmt(): BILL_PRINT;

  getTaxDebitAmt(): number;
  setTaxDebitAmt(value: number): BILL_PRINT;
  hasTaxDebitAmt(): boolean;
  clearTaxDebitAmt(): BILL_PRINT;

  getContractDebitAmt(): number;
  setContractDebitAmt(value: number): BILL_PRINT;
  hasContractDebitAmt(): boolean;
  clearContractDebitAmt(): BILL_PRINT;

  getGeneralDebitAmt(): number;
  setGeneralDebitAmt(value: number): BILL_PRINT;
  hasGeneralDebitAmt(): boolean;
  clearGeneralDebitAmt(): BILL_PRINT;

  getInstallsWtrInsuranceAmt(): number;
  setInstallsWtrInsuranceAmt(value: number): BILL_PRINT;
  hasInstallsWtrInsuranceAmt(): boolean;
  clearInstallsWtrInsuranceAmt(): BILL_PRINT;

  getInstallsSwrInsuranceAmt(): number;
  setInstallsSwrInsuranceAmt(value: number): BILL_PRINT;
  hasInstallsSwrInsuranceAmt(): boolean;
  clearInstallsSwrInsuranceAmt(): BILL_PRINT;

  getRoomAgreemAmt(): number;
  setRoomAgreemAmt(value: number): BILL_PRINT;
  hasRoomAgreemAmt(): boolean;
  clearRoomAgreemAmt(): BILL_PRINT;

  getMosharkaAgreemAmt(): number;
  setMosharkaAgreemAmt(value: number): BILL_PRINT;
  hasMosharkaAgreemAmt(): boolean;
  clearMosharkaAgreemAmt(): BILL_PRINT;

  getMoqAgreemAmt(): number;
  setMoqAgreemAmt(value: number): BILL_PRINT;
  hasMoqAgreemAmt(): boolean;
  clearMoqAgreemAmt(): BILL_PRINT;

  getMeterFixAgreemAmt(): number;
  setMeterFixAgreemAmt(value: number): BILL_PRINT;
  hasMeterFixAgreemAmt(): boolean;
  clearMeterFixAgreemAmt(): BILL_PRINT;

  getMoqDefAgreemAmt(): number;
  setMoqDefAgreemAmt(value: number): BILL_PRINT;
  hasMoqDefAgreemAmt(): boolean;
  clearMoqDefAgreemAmt(): BILL_PRINT;

  getInstallsMoqDefAmt(): number;
  setInstallsMoqDefAmt(value: number): BILL_PRINT;
  hasInstallsMoqDefAmt(): boolean;
  clearInstallsMoqDefAmt(): BILL_PRINT;

  getInstallsRoomAmt(): number;
  setInstallsRoomAmt(value: number): BILL_PRINT;
  hasInstallsRoomAmt(): boolean;
  clearInstallsRoomAmt(): BILL_PRINT;

  getInstallsMosharkaAmt(): number;
  setInstallsMosharkaAmt(value: number): BILL_PRINT;
  hasInstallsMosharkaAmt(): boolean;
  clearInstallsMosharkaAmt(): BILL_PRINT;

  getInstallsMoqAmt(): number;
  setInstallsMoqAmt(value: number): BILL_PRINT;
  hasInstallsMoqAmt(): boolean;
  clearInstallsMoqAmt(): BILL_PRINT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILL_PRINT.AsObject;
  static toObject(includeInstance: boolean, msg: BILL_PRINT): BILL_PRINT.AsObject;
  static serializeBinaryToWriter(message: BILL_PRINT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILL_PRINT;
  static deserializeBinaryFromReader(message: BILL_PRINT, reader: jspb.BinaryReader): BILL_PRINT;
}

export namespace BILL_PRINT {
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
    taxNo?: string,
    telNo?: string,
    idNo?: string,
    propRef?: string,
    meterType?: string,
    meterRef?: string,
    cType?: string,
    ctypegrpId?: string,
    isMainCtype?: number,
    mainCType?: string,
    hasSewer?: number,
    sewerType?: number,
    noUnits?: number,
    meterConditionCode?: string,
    meterSizeCode?: string,
    issueSt?: string,
    isTarakom?: number,
    deliverySt?: number,
    cycleId?: number,
    bilngDate?: date_pb.MasDateTime.AsObject,
    statmNo?: number,
    paymentNo?: string,
    gardPaymentNo?: string,
    marketing?: number,
    opBlnce?: number,
    clBlnce?: number,
    instalment?: number,
    curCharges?: number,
    curPaymnts?: number,
    collectionAmt?: number,
    partialCurAmt?: number,
    dueAmount?: number,
    netDueAmount?: number,
    waterAmt?: number,
    sewerAmt?: number,
    tanzeemAmt?: number,
    basicAmt?: number,
    contractAmt?: number,
    taxAmt?: number,
    roundAmt?: number,
    installsAmt?: number,
    installsPastCycleAmt?: number,
    installsTawselaAmt?: number,
    installsTarakomAmt?: number,
    installsMeterFixAmt?: number,
    installsHighConsumpAmt?: number,
    agreemPenaltyAmt?: number,
    takafulAmt?: number,
    meterAmt?: number,
    connAmt?: number,
    virtualAdj?: number,
    meterManAmt?: number,
    khasmTaswya?: number,
    kestTswya?: number,
    pastCycAgreemAmt?: number,
    waterTarakomDiscountAmt?: number,
    sewerTarakomDiscountAmt?: number,
    tarakomAgreemAmt?: number,
    agreemAmt?: number,
    dbtAmt?: number,
    crdtAmt?: number,
    otherAmt?: number,
    otherAmt1?: number,
    otherAmt2?: number,
    otherAmt3?: number,
    otherAmt4?: number,
    csFeesAmt?: number,
    csPaymentAmt?: number,
    csAgreemAmt?: number,
    csAgreemInstallAmt?: number,
    readType?: number,
    wtariffId?: string,
    stariffId?: string,
    prReading?: number,
    crReading?: number,
    consump?: number,
    custBand?: number,
    noBands?: number,
    waterBnd1From?: number,
    waterBnd1To?: number,
    waterPriceB1?: number,
    waterBnd2From?: number,
    waterBnd2To?: number,
    waterPriceB2?: number,
    waterBnd3From?: number,
    waterBnd3To?: number,
    waterPriceB3?: number,
    waterBnd4From?: number,
    waterBnd4To?: number,
    waterPriceB4?: number,
    waterBnd5From?: number,
    waterBnd5To?: number,
    waterPriceB5?: number,
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
    sewerConsump?: number,
    sewerCustBand?: number,
    sewerBnd1From?: number,
    sewerBnd1To?: number,
    sewerPriceB1?: number,
    sewerBnd2From?: number,
    sewerBnd2To?: number,
    sewerPriceB2?: number,
    sewerBnd3From?: number,
    sewerBnd3To?: number,
    sewerPriceB3?: number,
    sewerBnd4From?: number,
    sewerBnd4To?: number,
    sewerPriceB4?: number,
    sewerBnd5From?: number,
    sewerBnd5To?: number,
    sewerPriceB5?: number,
    sconsB1?: number,
    sconsB2?: number,
    sconsB3?: number,
    sconsB4?: number,
    sconsB5?: number,
    sewerAmountB1?: number,
    sewerAmountB2?: number,
    sewerAmountB3?: number,
    sewerAmountB4?: number,
    sewerAmountB5?: number,
    isModified?: number,
    errorAmt?: number,
    hasError?: number,
    errorMsg?: string,
    accuracyValue?: number,
    virtualStationNo?: number,
    virtualStationDescribe?: string,
    ctypegrpCode?: string,
    ctypeDescription?: string,
    ctypeGroupDescription?: string,
    meterSize?: string,
    meterCondition?: string,
    noBills?: number,
    cycleDescr?: string,
    adjustmentType?: string,
    billAmount?: number,
    advancePayment?: number,
    advanceAdjustment?: number,
    consumpDescribe?: string,
    consumpSequence?: number,
    highConsumpAgrmAmt?: number,
    payBillAgrmAmt?: number,
    payCsAgrmAmt?: number,
    isPrinted?: number,
    isCody?: number,
    hasMeter?: number,
    isGov?: number,
    estdamaBand?: number,
    sewerNounits?: number,
    readingNo?: number,
    estdamaCalcMethod?: string,
    isGovDescribe?: string,
    hasMeterDescribe?: string,
    isCodyDescribe?: string,
    waterDebitAmt?: number,
    sewerDebitAmt?: number,
    basicDebitAmt?: number,
    tanzeemDebitAmt?: number,
    taxDebitAmt?: number,
    contractDebitAmt?: number,
    generalDebitAmt?: number,
    installsWtrInsuranceAmt?: number,
    installsSwrInsuranceAmt?: number,
    roomAgreemAmt?: number,
    mosharkaAgreemAmt?: number,
    moqAgreemAmt?: number,
    meterFixAgreemAmt?: number,
    moqDefAgreemAmt?: number,
    installsMoqDefAmt?: number,
    installsRoomAmt?: number,
    installsMosharkaAmt?: number,
    installsMoqAmt?: number,
  }
}

export class Amount extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): Amount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Amount.AsObject;
  static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
  static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Amount;
  static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
  export type AsObject = {
    amount: number,
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

export class ArrWalletDetails extends jspb.Message {
  getWalletdetailsrsList(): Array<WalletDetailsRs>;
  setWalletdetailsrsList(value: Array<WalletDetailsRs>): ArrWalletDetails;
  clearWalletdetailsrsList(): ArrWalletDetails;
  addWalletdetailsrs(value?: WalletDetailsRs, index?: number): WalletDetailsRs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrWalletDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ArrWalletDetails): ArrWalletDetails.AsObject;
  static serializeBinaryToWriter(message: ArrWalletDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrWalletDetails;
  static deserializeBinaryFromReader(message: ArrWalletDetails, reader: jspb.BinaryReader): ArrWalletDetails;
}

export namespace ArrWalletDetails {
  export type AsObject = {
    walletdetailsrsList: Array<WalletDetailsRs.AsObject>,
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

export class ArrCustREADINGS extends jspb.Message {
  getReadingsList(): Array<READING_DETAILS>;
  setReadingsList(value: Array<READING_DETAILS>): ArrCustREADINGS;
  clearReadingsList(): ArrCustREADINGS;
  addReadings(value?: READING_DETAILS, index?: number): READING_DETAILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrCustREADINGS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrCustREADINGS): ArrCustREADINGS.AsObject;
  static serializeBinaryToWriter(message: ArrCustREADINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrCustREADINGS;
  static deserializeBinaryFromReader(message: ArrCustREADINGS, reader: jspb.BinaryReader): ArrCustREADINGS;
}

export namespace ArrCustREADINGS {
  export type AsObject = {
    readingsList: Array<READING_DETAILS.AsObject>,
  }
}

export class READING_DETAILS extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): READING_DETAILS;
  hasConnectionId(): boolean;
  clearConnectionId(): READING_DETAILS;

  getMeterId(): string;
  setMeterId(value: string): READING_DETAILS;
  hasMeterId(): boolean;
  clearMeterId(): READING_DETAILS;

  getReading(): string;
  setReading(value: string): READING_DETAILS;
  hasReading(): boolean;
  clearReading(): READING_DETAILS;

  getReadingDate(): date_pb.MasDateTime | undefined;
  setReadingDate(value?: date_pb.MasDateTime): READING_DETAILS;
  hasReadingDate(): boolean;
  clearReadingDate(): READING_DETAILS;

  getInvoicedDate(): date_pb.MasDateTime | undefined;
  setInvoicedDate(value?: date_pb.MasDateTime): READING_DETAILS;
  hasInvoicedDate(): boolean;
  clearInvoicedDate(): READING_DETAILS;

  getConsump(): number;
  setConsump(value: number): READING_DETAILS;
  hasConsump(): boolean;
  clearConsump(): READING_DETAILS;

  getIsCancelled(): boolean;
  setIsCancelled(value: boolean): READING_DETAILS;
  hasIsCancelled(): boolean;
  clearIsCancelled(): READING_DETAILS;

  getIsInvoiced(): boolean;
  setIsInvoiced(value: boolean): READING_DETAILS;
  hasIsInvoiced(): boolean;
  clearIsInvoiced(): READING_DETAILS;

  getReadingNo(): string;
  setReadingNo(value: string): READING_DETAILS;
  hasReadingNo(): boolean;
  clearReadingNo(): READING_DETAILS;

  getMasReadMethod(): number;
  setMasReadMethod(value: number): READING_DETAILS;
  hasMasReadMethod(): boolean;
  clearMasReadMethod(): READING_DETAILS;

  getMasReadBy(): string;
  setMasReadBy(value: string): READING_DETAILS;
  hasMasReadBy(): boolean;
  clearMasReadBy(): READING_DETAILS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): READING_DETAILS.AsObject;
  static toObject(includeInstance: boolean, msg: READING_DETAILS): READING_DETAILS.AsObject;
  static serializeBinaryToWriter(message: READING_DETAILS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): READING_DETAILS;
  static deserializeBinaryFromReader(message: READING_DETAILS, reader: jspb.BinaryReader): READING_DETAILS;
}

export namespace READING_DETAILS {
  export type AsObject = {
    connectionId?: string,
    meterId?: string,
    reading?: string,
    readingDate?: date_pb.MasDateTime.AsObject,
    invoicedDate?: date_pb.MasDateTime.AsObject,
    consump?: number,
    isCancelled?: boolean,
    isInvoiced?: boolean,
    readingNo?: string,
    masReadMethod?: number,
    masReadBy?: string,
  }
}

export enum FilterCondition { 
  UNDIFIENDFILTERCONDITION = 0,
  EQUALS = 1,
  CONTAINS = 2,
  STARTWITH = 3,
  ENDWITH = 4,
  INCONTAIN = 5,
}
export enum SearchFilters { 
  UNDIFIENDSEARCHFILTERS = 0,
  CUSTKEY = 1,
  BILLGROUP = 2,
  BOOK_NO = 3,
  SURNAME = 4,
  OLD_KEY = 5,
  PROP_REF = 6,
  METER_REF = 7,
  METER_TYPE = 8,
  UA_ADDRESS = 9,
  NATIONAL_ID = 10,
  TEL_NO = 11,
  TAX_NO = 12,
  WALK_NO = 13,
  PROPERTY_ID = 14,
}
