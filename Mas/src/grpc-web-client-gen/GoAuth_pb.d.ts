import * as jspb from 'google-protobuf'

import * as date_pb from './date_pb'; // proto import: "date.proto"


export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): LoginRequest;
  hasDeviceToken(): boolean;
  clearDeviceToken(): LoginRequest;

  getIsportal(): boolean;
  setIsportal(value: boolean): LoginRequest;
  hasIsportal(): boolean;
  clearIsportal(): LoginRequest;

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
    deviceToken?: string,
    isportal?: boolean,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponse;
  hasToken(): boolean;
  clearToken(): LoginResponse;

  getSuccssed(): boolean;
  setSuccssed(value: boolean): LoginResponse;
  hasSuccssed(): boolean;
  clearSuccssed(): LoginResponse;

  getActivated(): boolean;
  setActivated(value: boolean): LoginResponse;
  hasActivated(): boolean;
  clearActivated(): LoginResponse;

  getName(): string;
  setName(value: string): LoginResponse;
  hasName(): boolean;
  clearName(): LoginResponse;

  getSecondName(): string;
  setSecondName(value: string): LoginResponse;
  hasSecondName(): boolean;
  clearSecondName(): LoginResponse;

  getThirdName(): string;
  setThirdName(value: string): LoginResponse;
  hasThirdName(): boolean;
  clearThirdName(): LoginResponse;

  getWithCustkey(): boolean;
  setWithCustkey(value: boolean): LoginResponse;
  hasWithCustkey(): boolean;
  clearWithCustkey(): LoginResponse;

  getExpiresat(): date_pb.MasDateTime | undefined;
  setExpiresat(value?: date_pb.MasDateTime): LoginResponse;
  hasExpiresat(): boolean;
  clearExpiresat(): LoginResponse;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): LoginResponse;
  hasIsAdmin(): boolean;
  clearIsAdmin(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token?: string,
    succssed?: boolean,
    activated?: boolean,
    name?: string,
    secondName?: string,
    thirdName?: string,
    withCustkey?: boolean,
    expiresat?: date_pb.MasDateTime.AsObject,
    isAdmin?: boolean,
  }
}

export class SignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): SignInResponse;
  hasToken(): boolean;
  clearToken(): SignInResponse;

  getSuccssed(): boolean;
  setSuccssed(value: boolean): SignInResponse;
  hasSuccssed(): boolean;
  clearSuccssed(): SignInResponse;

  getName(): string;
  setName(value: string): SignInResponse;
  hasName(): boolean;
  clearName(): SignInResponse;

  getExpiresat(): date_pb.MasDateTime | undefined;
  setExpiresat(value?: date_pb.MasDateTime): SignInResponse;
  hasExpiresat(): boolean;
  clearExpiresat(): SignInResponse;

  getUser(): USERS | undefined;
  setUser(value?: USERS): SignInResponse;
  hasUser(): boolean;
  clearUser(): SignInResponse;

  getSiteName(): string;
  setSiteName(value: string): SignInResponse;
  hasSiteName(): boolean;
  clearSiteName(): SignInResponse;

  getStationName(): string;
  setStationName(value: string): SignInResponse;
  hasStationName(): boolean;
  clearStationName(): SignInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
  static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInResponse;
  static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
  export type AsObject = {
    token?: string,
    succssed?: boolean,
    name?: string,
    expiresat?: date_pb.MasDateTime.AsObject,
    user?: USERS.AsObject,
    siteName?: string,
    stationName?: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): RegisterResponse;
  hasMessage(): boolean;
  clearMessage(): RegisterResponse;

  getSaveid(): number;
  setSaveid(value: number): RegisterResponse;
  hasSaveid(): boolean;
  clearSaveid(): RegisterResponse;

  getToken(): string;
  setToken(value: string): RegisterResponse;
  hasToken(): boolean;
  clearToken(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    message?: string,
    saveid?: number,
    token?: string,
  }
}

export class SignInWithRequest extends jspb.Message {
  getApplicationType(): Applications;
  setApplicationType(value: Applications): SignInWithRequest;

  getApplicationId(): number;
  setApplicationId(value: number): SignInWithRequest;

  getUserName(): string;
  setUserName(value: string): SignInWithRequest;
  hasUserName(): boolean;
  clearUserName(): SignInWithRequest;

  getEmail(): string;
  setEmail(value: string): SignInWithRequest;
  hasEmail(): boolean;
  clearEmail(): SignInWithRequest;

  getMobileNo(): string;
  setMobileNo(value: string): SignInWithRequest;
  hasMobileNo(): boolean;
  clearMobileNo(): SignInWithRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInWithRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInWithRequest): SignInWithRequest.AsObject;
  static serializeBinaryToWriter(message: SignInWithRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInWithRequest;
  static deserializeBinaryFromReader(message: SignInWithRequest, reader: jspb.BinaryReader): SignInWithRequest;
}

export namespace SignInWithRequest {
  export type AsObject = {
    applicationType: Applications,
    applicationId: number,
    userName?: string,
    email?: string,
    mobileNo?: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): RegisterRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): RegisterRequest;

  getRelatedCustkeyList(): Array<RELATED_CUSTKEY>;
  setRelatedCustkeyList(value: Array<RELATED_CUSTKEY>): RegisterRequest;
  clearRelatedCustkeyList(): RegisterRequest;
  addRelatedCustkey(value?: RELATED_CUSTKEY, index?: number): RELATED_CUSTKEY;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;
  hasPassword(): boolean;
  clearPassword(): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;
  hasEmail(): boolean;
  clearEmail(): RegisterRequest;

  getMobileNo(): string;
  setMobileNo(value: string): RegisterRequest;

  getName(): string;
  setName(value: string): RegisterRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): RegisterRequest;

  getSecondName(): string;
  setSecondName(value: string): RegisterRequest;
  hasSecondName(): boolean;
  clearSecondName(): RegisterRequest;

  getThirdName(): string;
  setThirdName(value: string): RegisterRequest;
  hasThirdName(): boolean;
  clearThirdName(): RegisterRequest;

  getNid(): string;
  setNid(value: string): RegisterRequest;
  hasNid(): boolean;
  clearNid(): RegisterRequest;

  getAddress(): string;
  setAddress(value: string): RegisterRequest;
  hasAddress(): boolean;
  clearAddress(): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    siteCode?: number,
    relatedCustkeyList: Array<RELATED_CUSTKEY.AsObject>,
    password?: string,
    email?: string,
    mobileNo: string,
    name: string,
    deviceToken: string,
    secondName?: string,
    thirdName?: string,
    nid?: string,
    address?: string,
  }
}

export class ForgetRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): ForgetRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): ForgetRequest;

  getEmail(): string;
  setEmail(value: string): ForgetRequest;
  hasEmail(): boolean;
  clearEmail(): ForgetRequest;

  getMobileNo(): string;
  setMobileNo(value: string): ForgetRequest;
  hasMobileNo(): boolean;
  clearMobileNo(): ForgetRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): ForgetRequest;
  hasDeviceToken(): boolean;
  clearDeviceToken(): ForgetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgetRequest): ForgetRequest.AsObject;
  static serializeBinaryToWriter(message: ForgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgetRequest;
  static deserializeBinaryFromReader(message: ForgetRequest, reader: jspb.BinaryReader): ForgetRequest;
}

export namespace ForgetRequest {
  export type AsObject = {
    siteCode?: number,
    email?: string,
    mobileNo?: string,
    deviceToken?: string,
  }
}

export class ValRequest extends jspb.Message {
  getResetpasscode(): string;
  setResetpasscode(value: string): ValRequest;

  getMobileNo(): string;
  setMobileNo(value: string): ValRequest;
  hasMobileNo(): boolean;
  clearMobileNo(): ValRequest;

  getNewpassword(): string;
  setNewpassword(value: string): ValRequest;

  getEmail(): string;
  setEmail(value: string): ValRequest;
  hasEmail(): boolean;
  clearEmail(): ValRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValRequest): ValRequest.AsObject;
  static serializeBinaryToWriter(message: ValRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValRequest;
  static deserializeBinaryFromReader(message: ValRequest, reader: jspb.BinaryReader): ValRequest;
}

export namespace ValRequest {
  export type AsObject = {
    resetpasscode: string,
    mobileNo?: string,
    newpassword: string,
    email?: string,
  }
}

export class Emptymessage extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): Emptymessage;
  hasModuleId(): boolean;
  clearModuleId(): Emptymessage;

  getVersion(): string;
  setVersion(value: string): Emptymessage;
  hasVersion(): boolean;
  clearVersion(): Emptymessage;

  getIsHandHeld(): boolean;
  setIsHandHeld(value: boolean): Emptymessage;
  hasIsHandHeld(): boolean;
  clearIsHandHeld(): Emptymessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Emptymessage.AsObject;
  static toObject(includeInstance: boolean, msg: Emptymessage): Emptymessage.AsObject;
  static serializeBinaryToWriter(message: Emptymessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Emptymessage;
  static deserializeBinaryFromReader(message: Emptymessage, reader: jspb.BinaryReader): Emptymessage;
}

export namespace Emptymessage {
  export type AsObject = {
    moduleId?: string,
    version?: string,
    isHandHeld?: boolean,
  }
}

export class AdminSignInRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): AdminSignInRequest;
  hasUserName(): boolean;
  clearUserName(): AdminSignInRequest;

  getPassword(): string;
  setPassword(value: string): AdminSignInRequest;
  hasPassword(): boolean;
  clearPassword(): AdminSignInRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): AdminSignInRequest;
  hasDeviceToken(): boolean;
  clearDeviceToken(): AdminSignInRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminSignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminSignInRequest): AdminSignInRequest.AsObject;
  static serializeBinaryToWriter(message: AdminSignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminSignInRequest;
  static deserializeBinaryFromReader(message: AdminSignInRequest, reader: jspb.BinaryReader): AdminSignInRequest;
}

export namespace AdminSignInRequest {
  export type AsObject = {
    userName?: string,
    password?: string,
    deviceToken?: string,
  }
}

export class GetAllSitesResponse extends jspb.Message {
  getSitesList(): Array<SITES>;
  setSitesList(value: Array<SITES>): GetAllSitesResponse;
  clearSitesList(): GetAllSitesResponse;
  addSites(value?: SITES, index?: number): SITES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSitesResponse): GetAllSitesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllSitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSitesResponse;
  static deserializeBinaryFromReader(message: GetAllSitesResponse, reader: jspb.BinaryReader): GetAllSitesResponse;
}

export namespace GetAllSitesResponse {
  export type AsObject = {
    sitesList: Array<SITES.AsObject>,
  }
}

export class SITES extends jspb.Message {
  getCode(): number;
  setCode(value: number): SITES;
  hasCode(): boolean;
  clearCode(): SITES;

  getDescribe(): string;
  setDescribe(value: string): SITES;
  hasDescribe(): boolean;
  clearDescribe(): SITES;

  getIsActive(): boolean;
  setIsActive(value: boolean): SITES;
  hasIsActive(): boolean;
  clearIsActive(): SITES;

  getSeq(): number;
  setSeq(value: number): SITES;
  hasSeq(): boolean;
  clearSeq(): SITES;

  getBillingIp(): string;
  setBillingIp(value: string): SITES;
  hasBillingIp(): boolean;
  clearBillingIp(): SITES;

  getBillingPassword(): string;
  setBillingPassword(value: string): SITES;
  hasBillingPassword(): boolean;
  clearBillingPassword(): SITES;

  getBillingPortNo(): string;
  setBillingPortNo(value: string): SITES;
  hasBillingPortNo(): boolean;
  clearBillingPortNo(): SITES;

  getBillingUsername(): string;
  setBillingUsername(value: string): SITES;
  hasBillingUsername(): boolean;
  clearBillingUsername(): SITES;

  getSiteImage(): string;
  setSiteImage(value: string): SITES;
  hasSiteImage(): boolean;
  clearSiteImage(): SITES;

  getHasMas(): boolean;
  setHasMas(value: boolean): SITES;
  hasHasMas(): boolean;
  clearHasMas(): SITES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SITES.AsObject;
  static toObject(includeInstance: boolean, msg: SITES): SITES.AsObject;
  static serializeBinaryToWriter(message: SITES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SITES;
  static deserializeBinaryFromReader(message: SITES, reader: jspb.BinaryReader): SITES;
}

export namespace SITES {
  export type AsObject = {
    code?: number,
    describe?: string,
    isActive?: boolean,
    seq?: number,
    billingIp?: string,
    billingPassword?: string,
    billingPortNo?: string,
    billingUsername?: string,
    siteImage?: string,
    hasMas?: boolean,
  }
}

export class licenceResponse extends jspb.Message {
  getLicence(): string;
  setLicence(value: string): licenceResponse;
  hasLicence(): boolean;
  clearLicence(): licenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): licenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: licenceResponse): licenceResponse.AsObject;
  static serializeBinaryToWriter(message: licenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): licenceResponse;
  static deserializeBinaryFromReader(message: licenceResponse, reader: jspb.BinaryReader): licenceResponse;
}

export namespace licenceResponse {
  export type AsObject = {
    licence?: string,
  }
}

export class access_contraint_response extends jspb.Message {
  getAccesscontraint(): string;
  setAccesscontraint(value: string): access_contraint_response;
  hasAccesscontraint(): boolean;
  clearAccesscontraint(): access_contraint_response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): access_contraint_response.AsObject;
  static toObject(includeInstance: boolean, msg: access_contraint_response): access_contraint_response.AsObject;
  static serializeBinaryToWriter(message: access_contraint_response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): access_contraint_response;
  static deserializeBinaryFromReader(message: access_contraint_response, reader: jspb.BinaryReader): access_contraint_response;
}

export namespace access_contraint_response {
  export type AsObject = {
    accesscontraint?: string,
  }
}

export class CashierRequest extends jspb.Message {
  getCashierId(): number;
  setCashierId(value: number): CashierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CashierRequest): CashierRequest.AsObject;
  static serializeBinaryToWriter(message: CashierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashierRequest;
  static deserializeBinaryFromReader(message: CashierRequest, reader: jspb.BinaryReader): CashierRequest;
}

export namespace CashierRequest {
  export type AsObject = {
    cashierId: number,
  }
}

export class GetlientSCountsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): GetlientSCountsResponse;
  hasTotal(): boolean;
  clearTotal(): GetlientSCountsResponse;

  getTotalDay(): number;
  setTotalDay(value: number): GetlientSCountsResponse;
  hasTotalDay(): boolean;
  clearTotalDay(): GetlientSCountsResponse;

  getTotalWeek(): number;
  setTotalWeek(value: number): GetlientSCountsResponse;
  hasTotalWeek(): boolean;
  clearTotalWeek(): GetlientSCountsResponse;

  getTotalMounth(): number;
  setTotalMounth(value: number): GetlientSCountsResponse;
  hasTotalMounth(): boolean;
  clearTotalMounth(): GetlientSCountsResponse;

  getTotalYear(): number;
  setTotalYear(value: number): GetlientSCountsResponse;
  hasTotalYear(): boolean;
  clearTotalYear(): GetlientSCountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetlientSCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetlientSCountsResponse): GetlientSCountsResponse.AsObject;
  static serializeBinaryToWriter(message: GetlientSCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetlientSCountsResponse;
  static deserializeBinaryFromReader(message: GetlientSCountsResponse, reader: jspb.BinaryReader): GetlientSCountsResponse;
}

export namespace GetlientSCountsResponse {
  export type AsObject = {
    total?: number,
    totalDay?: number,
    totalWeek?: number,
    totalMounth?: number,
    totalYear?: number,
  }
}

export class ProfileResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ProfileResponse;
  hasMessage(): boolean;
  clearMessage(): ProfileResponse;

  getDone(): boolean;
  setDone(value: boolean): ProfileResponse;
  hasDone(): boolean;
  clearDone(): ProfileResponse;

  getProfileId(): number;
  setProfileId(value: number): ProfileResponse;
  hasProfileId(): boolean;
  clearProfileId(): ProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    message?: string,
    done?: boolean,
    profileId?: number,
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

export class CustRequest extends jspb.Message {
  getCustkey(): string;
  setCustkey(value: string): CustRequest;

  getSiteCode(): number;
  setSiteCode(value: number): CustRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): CustRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustRequest): CustRequest.AsObject;
  static serializeBinaryToWriter(message: CustRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustRequest;
  static deserializeBinaryFromReader(message: CustRequest, reader: jspb.BinaryReader): CustRequest;
}

export namespace CustRequest {
  export type AsObject = {
    custkey: string,
    siteCode?: number,
  }
}

export class AddRelatedCustkeyRequest extends jspb.Message {
  getClientId(): number;
  setClientId(value: number): AddRelatedCustkeyRequest;

  getCustkey(): string;
  setCustkey(value: string): AddRelatedCustkeyRequest;

  getCustname(): string;
  setCustname(value: string): AddRelatedCustkeyRequest;
  hasCustname(): boolean;
  clearCustname(): AddRelatedCustkeyRequest;

  getSiteCode(): number;
  setSiteCode(value: number): AddRelatedCustkeyRequest;

  getBillgroup(): string;
  setBillgroup(value: string): AddRelatedCustkeyRequest;
  hasBillgroup(): boolean;
  clearBillgroup(): AddRelatedCustkeyRequest;

  getBookNo(): string;
  setBookNo(value: string): AddRelatedCustkeyRequest;
  hasBookNo(): boolean;
  clearBookNo(): AddRelatedCustkeyRequest;

  getStationNo(): number;
  setStationNo(value: number): AddRelatedCustkeyRequest;

  getAddress(): string;
  setAddress(value: string): AddRelatedCustkeyRequest;
  hasAddress(): boolean;
  clearAddress(): AddRelatedCustkeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRelatedCustkeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRelatedCustkeyRequest): AddRelatedCustkeyRequest.AsObject;
  static serializeBinaryToWriter(message: AddRelatedCustkeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRelatedCustkeyRequest;
  static deserializeBinaryFromReader(message: AddRelatedCustkeyRequest, reader: jspb.BinaryReader): AddRelatedCustkeyRequest;
}

export namespace AddRelatedCustkeyRequest {
  export type AsObject = {
    clientId: number,
    custkey: string,
    custname?: string,
    siteCode: number,
    billgroup?: string,
    bookNo?: string,
    stationNo: number,
    address?: string,
  }
}

export class GetCountsRequest extends jspb.Message {
  getType(): Counts_type;
  setType(value: Counts_type): GetCountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountsRequest): GetCountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountsRequest;
  static deserializeBinaryFromReader(message: GetCountsRequest, reader: jspb.BinaryReader): GetCountsRequest;
}

export namespace GetCountsRequest {
  export type AsObject = {
    type: Counts_type,
  }
}

export class GetCountsResponse extends jspb.Message {
  getTotalUsers(): number;
  setTotalUsers(value: number): GetCountsResponse;
  hasTotalUsers(): boolean;
  clearTotalUsers(): GetCountsResponse;

  getTotalClients(): number;
  setTotalClients(value: number): GetCountsResponse;
  hasTotalClients(): boolean;
  clearTotalClients(): GetCountsResponse;

  getTotalAdmins(): number;
  setTotalAdmins(value: number): GetCountsResponse;
  hasTotalAdmins(): boolean;
  clearTotalAdmins(): GetCountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountsResponse): GetCountsResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountsResponse;
  static deserializeBinaryFromReader(message: GetCountsResponse, reader: jspb.BinaryReader): GetCountsResponse;
}

export namespace GetCountsResponse {
  export type AsObject = {
    totalUsers?: number,
    totalClients?: number,
    totalAdmins?: number,
  }
}

export class AdminRegisterRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): AdminRegisterRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): AdminRegisterRequest;

  getPassword(): string;
  setPassword(value: string): AdminRegisterRequest;
  hasPassword(): boolean;
  clearPassword(): AdminRegisterRequest;

  getEmail(): string;
  setEmail(value: string): AdminRegisterRequest;
  hasEmail(): boolean;
  clearEmail(): AdminRegisterRequest;

  getUserName(): string;
  setUserName(value: string): AdminRegisterRequest;

  getName(): string;
  setName(value: string): AdminRegisterRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): AdminRegisterRequest;
  hasDeviceToken(): boolean;
  clearDeviceToken(): AdminRegisterRequest;

  getNid(): string;
  setNid(value: string): AdminRegisterRequest;
  hasNid(): boolean;
  clearNid(): AdminRegisterRequest;

  getAddress(): string;
  setAddress(value: string): AdminRegisterRequest;
  hasAddress(): boolean;
  clearAddress(): AdminRegisterRequest;

  getMobileNo(): string;
  setMobileNo(value: string): AdminRegisterRequest;
  hasMobileNo(): boolean;
  clearMobileNo(): AdminRegisterRequest;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): AdminRegisterRequest;
  hasSysAdmin(): boolean;
  clearSysAdmin(): AdminRegisterRequest;

  getReadings(): boolean;
  setReadings(value: boolean): AdminRegisterRequest;
  hasReadings(): boolean;
  clearReadings(): AdminRegisterRequest;

  getNews(): boolean;
  setNews(value: boolean): AdminRegisterRequest;
  hasNews(): boolean;
  clearNews(): AdminRegisterRequest;

  getSupport(): boolean;
  setSupport(value: boolean): AdminRegisterRequest;
  hasSupport(): boolean;
  clearSupport(): AdminRegisterRequest;

  getUsers(): boolean;
  setUsers(value: boolean): AdminRegisterRequest;
  hasUsers(): boolean;
  clearUsers(): AdminRegisterRequest;

  getServeses(): boolean;
  setServeses(value: boolean): AdminRegisterRequest;
  hasServeses(): boolean;
  clearServeses(): AdminRegisterRequest;

  getCtgServess(): boolean;
  setCtgServess(value: boolean): AdminRegisterRequest;
  hasCtgServess(): boolean;
  clearCtgServess(): AdminRegisterRequest;

  getReports(): boolean;
  setReports(value: boolean): AdminRegisterRequest;
  hasReports(): boolean;
  clearReports(): AdminRegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminRegisterRequest): AdminRegisterRequest.AsObject;
  static serializeBinaryToWriter(message: AdminRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminRegisterRequest;
  static deserializeBinaryFromReader(message: AdminRegisterRequest, reader: jspb.BinaryReader): AdminRegisterRequest;
}

export namespace AdminRegisterRequest {
  export type AsObject = {
    siteCode?: number,
    password?: string,
    email?: string,
    userName: string,
    name: string,
    deviceToken?: string,
    nid?: string,
    address?: string,
    mobileNo?: string,
    sysAdmin?: boolean,
    readings?: boolean,
    news?: boolean,
    support?: boolean,
    users?: boolean,
    serveses?: boolean,
    ctgServess?: boolean,
    reports?: boolean,
  }
}

export class GetAllADMINSResponse extends jspb.Message {
  getAdminsList(): Array<ADMINS>;
  setAdminsList(value: Array<ADMINS>): GetAllADMINSResponse;
  clearAdminsList(): GetAllADMINSResponse;
  addAdmins(value?: ADMINS, index?: number): ADMINS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllADMINSResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllADMINSResponse): GetAllADMINSResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllADMINSResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllADMINSResponse;
  static deserializeBinaryFromReader(message: GetAllADMINSResponse, reader: jspb.BinaryReader): GetAllADMINSResponse;
}

export namespace GetAllADMINSResponse {
  export type AsObject = {
    adminsList: Array<ADMINS.AsObject>,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): UpdateProfileRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): UpdateProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateProfileRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateProfileRequest;

  getMobileNo(): string;
  setMobileNo(value: string): UpdateProfileRequest;
  hasMobileNo(): boolean;
  clearMobileNo(): UpdateProfileRequest;

  getUserName(): string;
  setUserName(value: string): UpdateProfileRequest;

  getDeviceToken(): string;
  setDeviceToken(value: string): UpdateProfileRequest;
  hasDeviceToken(): boolean;
  clearDeviceToken(): UpdateProfileRequest;

  getAdminName(): string;
  setAdminName(value: string): UpdateProfileRequest;
  hasAdminName(): boolean;
  clearAdminName(): UpdateProfileRequest;

  getNid(): string;
  setNid(value: string): UpdateProfileRequest;
  hasNid(): boolean;
  clearNid(): UpdateProfileRequest;

  getAddress(): string;
  setAddress(value: string): UpdateProfileRequest;
  hasAddress(): boolean;
  clearAddress(): UpdateProfileRequest;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): UpdateProfileRequest;
  hasSysAdmin(): boolean;
  clearSysAdmin(): UpdateProfileRequest;

  getReadings(): boolean;
  setReadings(value: boolean): UpdateProfileRequest;
  hasReadings(): boolean;
  clearReadings(): UpdateProfileRequest;

  getNews(): boolean;
  setNews(value: boolean): UpdateProfileRequest;
  hasNews(): boolean;
  clearNews(): UpdateProfileRequest;

  getSupport(): boolean;
  setSupport(value: boolean): UpdateProfileRequest;
  hasSupport(): boolean;
  clearSupport(): UpdateProfileRequest;

  getUsers(): boolean;
  setUsers(value: boolean): UpdateProfileRequest;
  hasUsers(): boolean;
  clearUsers(): UpdateProfileRequest;

  getServeses(): boolean;
  setServeses(value: boolean): UpdateProfileRequest;
  hasServeses(): boolean;
  clearServeses(): UpdateProfileRequest;

  getCtgServess(): boolean;
  setCtgServess(value: boolean): UpdateProfileRequest;
  hasCtgServess(): boolean;
  clearCtgServess(): UpdateProfileRequest;

  getReports(): boolean;
  setReports(value: boolean): UpdateProfileRequest;
  hasReports(): boolean;
  clearReports(): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    siteCode?: number,
    email?: string,
    mobileNo?: string,
    userName: string,
    deviceToken?: string,
    adminName?: string,
    nid?: string,
    address?: string,
    sysAdmin?: boolean,
    readings?: boolean,
    news?: boolean,
    support?: boolean,
    users?: boolean,
    serveses?: boolean,
    ctgServess?: boolean,
    reports?: boolean,
  }
}

export class ResetAdminPassRequest extends jspb.Message {
  getAdminId(): number;
  setAdminId(value: number): ResetAdminPassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetAdminPassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetAdminPassRequest): ResetAdminPassRequest.AsObject;
  static serializeBinaryToWriter(message: ResetAdminPassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetAdminPassRequest;
  static deserializeBinaryFromReader(message: ResetAdminPassRequest, reader: jspb.BinaryReader): ResetAdminPassRequest;
}

export namespace ResetAdminPassRequest {
  export type AsObject = {
    adminId: number,
  }
}

export class ResetPassRequest extends jspb.Message {
  getMobileNo(): string;
  setMobileNo(value: string): ResetPassRequest;

  getNewpassword(): string;
  setNewpassword(value: string): ResetPassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPassRequest): ResetPassRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPassRequest;
  static deserializeBinaryFromReader(message: ResetPassRequest, reader: jspb.BinaryReader): ResetPassRequest;
}

export namespace ResetPassRequest {
  export type AsObject = {
    mobileNo: string,
    newpassword: string,
  }
}

export class GetAdminRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdminRequest): GetAdminRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdminRequest;
  static deserializeBinaryFromReader(message: GetAdminRequest, reader: jspb.BinaryReader): GetAdminRequest;
}

export namespace GetAdminRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetAllUserResponse extends jspb.Message {
  getUsersList(): Array<MUSERS>;
  setUsersList(value: Array<MUSERS>): GetAllUserResponse;
  clearUsersList(): GetAllUserResponse;
  addUsers(value?: MUSERS, index?: number): MUSERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUserResponse): GetAllUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUserResponse;
  static deserializeBinaryFromReader(message: GetAllUserResponse, reader: jspb.BinaryReader): GetAllUserResponse;
}

export namespace GetAllUserResponse {
  export type AsObject = {
    usersList: Array<MUSERS.AsObject>,
  }
}

export class MUSERS extends jspb.Message {
  getId(): number;
  setId(value: number): MUSERS;

  getStationNo(): number;
  setStationNo(value: number): MUSERS;
  hasStationNo(): boolean;
  clearStationNo(): MUSERS;

  getFullName(): string;
  setFullName(value: string): MUSERS;
  hasFullName(): boolean;
  clearFullName(): MUSERS;

  getUserName(): string;
  setUserName(value: string): MUSERS;
  hasUserName(): boolean;
  clearUserName(): MUSERS;

  getNid(): string;
  setNid(value: string): MUSERS;
  hasNid(): boolean;
  clearNid(): MUSERS;

  getEmail(): string;
  setEmail(value: string): MUSERS;
  hasEmail(): boolean;
  clearEmail(): MUSERS;

  getSiteCode(): number;
  setSiteCode(value: number): MUSERS;
  hasSiteCode(): boolean;
  clearSiteCode(): MUSERS;

  getMobileNo(): string;
  setMobileNo(value: string): MUSERS;
  hasMobileNo(): boolean;
  clearMobileNo(): MUSERS;

  getSuperuser(): boolean;
  setSuperuser(value: boolean): MUSERS;
  hasSuperuser(): boolean;
  clearSuperuser(): MUSERS;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): MUSERS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): MUSERS;

  getIsCashier(): boolean;
  setIsCashier(value: boolean): MUSERS;
  hasIsCashier(): boolean;
  clearIsCashier(): MUSERS;

  getUserStationsList(): Array<USER_STATIONS>;
  setUserStationsList(value: Array<USER_STATIONS>): MUSERS;
  clearUserStationsList(): MUSERS;
  addUserStations(value?: USER_STATIONS, index?: number): USER_STATIONS;

  getProfilesIdList(): Array<ProfileId>;
  setProfilesIdList(value: Array<ProfileId>): MUSERS;
  clearProfilesIdList(): MUSERS;
  addProfilesId(value?: ProfileId, index?: number): ProfileId;

  getIsactive(): boolean;
  setIsactive(value: boolean): MUSERS;
  hasIsactive(): boolean;
  clearIsactive(): MUSERS;

  getUserProfileImage(): string;
  setUserProfileImage(value: string): MUSERS;
  hasUserProfileImage(): boolean;
  clearUserProfileImage(): MUSERS;

  getCashierId(): number;
  setCashierId(value: number): MUSERS;
  hasCashierId(): boolean;
  clearCashierId(): MUSERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MUSERS.AsObject;
  static toObject(includeInstance: boolean, msg: MUSERS): MUSERS.AsObject;
  static serializeBinaryToWriter(message: MUSERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MUSERS;
  static deserializeBinaryFromReader(message: MUSERS, reader: jspb.BinaryReader): MUSERS;
}

export namespace MUSERS {
  export type AsObject = {
    id: number,
    stationNo?: number,
    fullName?: string,
    userName?: string,
    nid?: string,
    email?: string,
    siteCode?: number,
    mobileNo?: string,
    superuser?: boolean,
    sysAdmin?: boolean,
    isCashier?: boolean,
    userStationsList: Array<USER_STATIONS.AsObject>,
    profilesIdList: Array<ProfileId.AsObject>,
    isactive?: boolean,
    userProfileImage?: string,
    cashierId?: number,
  }
}

export class MicroUpdateRequest extends jspb.Message {
  getClientid(): number;
  setClientid(value: number): MicroUpdateRequest;

  getRelatedCustkeyList(): Array<RELATED_CUSTKEY>;
  setRelatedCustkeyList(value: Array<RELATED_CUSTKEY>): MicroUpdateRequest;
  clearRelatedCustkeyList(): MicroUpdateRequest;
  addRelatedCustkey(value?: RELATED_CUSTKEY, index?: number): RELATED_CUSTKEY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MicroUpdateRequest): MicroUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: MicroUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroUpdateRequest;
  static deserializeBinaryFromReader(message: MicroUpdateRequest, reader: jspb.BinaryReader): MicroUpdateRequest;
}

export namespace MicroUpdateRequest {
  export type AsObject = {
    clientid: number,
    relatedCustkeyList: Array<RELATED_CUSTKEY.AsObject>,
  }
}

export class AllDataRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): AllDataRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): AllDataRequest;

  getStationNo(): number;
  setStationNo(value: number): AllDataRequest;
  hasStationNo(): boolean;
  clearStationNo(): AllDataRequest;

  getBillgroup(): string;
  setBillgroup(value: string): AllDataRequest;
  hasBillgroup(): boolean;
  clearBillgroup(): AllDataRequest;

  getBookNo(): string;
  setBookNo(value: string): AllDataRequest;
  hasBookNo(): boolean;
  clearBookNo(): AllDataRequest;

  getDirection(): Dir;
  setDirection(value: Dir): AllDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllDataRequest): AllDataRequest.AsObject;
  static serializeBinaryToWriter(message: AllDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllDataRequest;
  static deserializeBinaryFromReader(message: AllDataRequest, reader: jspb.BinaryReader): AllDataRequest;
}

export namespace AllDataRequest {
  export type AsObject = {
    siteCode?: number,
    stationNo?: number,
    billgroup?: string,
    bookNo?: string,
    direction: Dir,
  }
}

export class AllDataResponse extends jspb.Message {
  getClList(): Array<CLIENTS>;
  setClList(value: Array<CLIENTS>): AllDataResponse;
  clearClList(): AllDataResponse;
  addCl(value?: CLIENTS, index?: number): CLIENTS;

  getUsList(): Array<MUSERS>;
  setUsList(value: Array<MUSERS>): AllDataResponse;
  clearUsList(): AllDataResponse;
  addUs(value?: MUSERS, index?: number): MUSERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllDataResponse): AllDataResponse.AsObject;
  static serializeBinaryToWriter(message: AllDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllDataResponse;
  static deserializeBinaryFromReader(message: AllDataResponse, reader: jspb.BinaryReader): AllDataResponse;
}

export namespace AllDataResponse {
  export type AsObject = {
    clList: Array<CLIENTS.AsObject>,
    usList: Array<MUSERS.AsObject>,
  }
}

export class ActivationRequest extends jspb.Message {
  getActivationpasscode(): string;
  setActivationpasscode(value: string): ActivationRequest;

  getVerificationType(): VTYPE;
  setVerificationType(value: VTYPE): ActivationRequest;
  hasVerificationType(): boolean;
  clearVerificationType(): ActivationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivationRequest): ActivationRequest.AsObject;
  static serializeBinaryToWriter(message: ActivationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivationRequest;
  static deserializeBinaryFromReader(message: ActivationRequest, reader: jspb.BinaryReader): ActivationRequest;
}

export namespace ActivationRequest {
  export type AsObject = {
    activationpasscode: string,
    verificationType?: VTYPE,
  }
}

export class GetUserProfileResponse extends jspb.Message {
  getUser(): USERS | undefined;
  setUser(value?: USERS): GetUserProfileResponse;
  hasUser(): boolean;
  clearUser(): GetUserProfileResponse;

  getSiteName(): string;
  setSiteName(value: string): GetUserProfileResponse;
  hasSiteName(): boolean;
  clearSiteName(): GetUserProfileResponse;

  getStationName(): string;
  setStationName(value: string): GetUserProfileResponse;
  hasStationName(): boolean;
  clearStationName(): GetUserProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserProfileResponse): GetUserProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserProfileResponse;
  static deserializeBinaryFromReader(message: GetUserProfileResponse, reader: jspb.BinaryReader): GetUserProfileResponse;
}

export namespace GetUserProfileResponse {
  export type AsObject = {
    user?: USERS.AsObject,
    siteName?: string,
    stationName?: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetUserByNameRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): GetUserByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByNameRequest): GetUserByNameRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByNameRequest;
  static deserializeBinaryFromReader(message: GetUserByNameRequest, reader: jspb.BinaryReader): GetUserByNameRequest;
}

export namespace GetUserByNameRequest {
  export type AsObject = {
    userName: string,
  }
}

export class GetClientRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetClientRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClientRequest): GetClientRequest.AsObject;
  static serializeBinaryToWriter(message: GetClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClientRequest;
  static deserializeBinaryFromReader(message: GetClientRequest, reader: jspb.BinaryReader): GetClientRequest;
}

export namespace GetClientRequest {
  export type AsObject = {
    id: number,
  }
}

export class USERSS extends jspb.Message {
  getUsersList(): Array<USERS>;
  setUsersList(value: Array<USERS>): USERSS;
  clearUsersList(): USERSS;
  addUsers(value?: USERS, index?: number): USERS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERSS.AsObject;
  static toObject(includeInstance: boolean, msg: USERSS): USERSS.AsObject;
  static serializeBinaryToWriter(message: USERSS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERSS;
  static deserializeBinaryFromReader(message: USERSS, reader: jspb.BinaryReader): USERSS;
}

export namespace USERSS {
  export type AsObject = {
    usersList: Array<USERS.AsObject>,
  }
}

export class PassUserRequest extends jspb.Message {
  getSiteCode(): number;
  setSiteCode(value: number): PassUserRequest;
  hasSiteCode(): boolean;
  clearSiteCode(): PassUserRequest;

  getNewpassword(): string;
  setNewpassword(value: string): PassUserRequest;

  getPassword(): string;
  setPassword(value: string): PassUserRequest;

  getUserName(): string;
  setUserName(value: string): PassUserRequest;
  hasUserName(): boolean;
  clearUserName(): PassUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PassUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PassUserRequest): PassUserRequest.AsObject;
  static serializeBinaryToWriter(message: PassUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PassUserRequest;
  static deserializeBinaryFromReader(message: PassUserRequest, reader: jspb.BinaryReader): PassUserRequest;
}

export namespace PassUserRequest {
  export type AsObject = {
    siteCode?: number,
    newpassword: string,
    password: string,
    userName?: string,
  }
}

export class Add_DEPARTMENT_REQ extends jspb.Message {
  getSiteId(): string;
  setSiteId(value: string): Add_DEPARTMENT_REQ;

  getName(): string;
  setName(value: string): Add_DEPARTMENT_REQ;

  getDescription(): string;
  setDescription(value: string): Add_DEPARTMENT_REQ;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): Add_DEPARTMENT_REQ;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): Add_DEPARTMENT_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Add_DEPARTMENT_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: Add_DEPARTMENT_REQ): Add_DEPARTMENT_REQ.AsObject;
  static serializeBinaryToWriter(message: Add_DEPARTMENT_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Add_DEPARTMENT_REQ;
  static deserializeBinaryFromReader(message: Add_DEPARTMENT_REQ, reader: jspb.BinaryReader): Add_DEPARTMENT_REQ;
}

export namespace Add_DEPARTMENT_REQ {
  export type AsObject = {
    siteId: string,
    name: string,
    description: string,
    descriptionEn?: string,
  }
}

export class DEPARTMENT_REQ extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DEPARTMENT_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEPARTMENT_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: DEPARTMENT_REQ): DEPARTMENT_REQ.AsObject;
  static serializeBinaryToWriter(message: DEPARTMENT_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEPARTMENT_REQ;
  static deserializeBinaryFromReader(message: DEPARTMENT_REQ, reader: jspb.BinaryReader): DEPARTMENT_REQ;
}

export namespace DEPARTMENT_REQ {
  export type AsObject = {
    userId: number,
  }
}

export class USERS_DEPARTMENTS extends jspb.Message {
  getDepartmentId(): number;
  setDepartmentId(value: number): USERS_DEPARTMENTS;

  getName(): string;
  setName(value: string): USERS_DEPARTMENTS;

  getUserId(): number;
  setUserId(value: number): USERS_DEPARTMENTS;

  getDeleted(): boolean;
  setDeleted(value: boolean): USERS_DEPARTMENTS;
  hasDeleted(): boolean;
  clearDeleted(): USERS_DEPARTMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERS_DEPARTMENTS.AsObject;
  static toObject(includeInstance: boolean, msg: USERS_DEPARTMENTS): USERS_DEPARTMENTS.AsObject;
  static serializeBinaryToWriter(message: USERS_DEPARTMENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERS_DEPARTMENTS;
  static deserializeBinaryFromReader(message: USERS_DEPARTMENTS, reader: jspb.BinaryReader): USERS_DEPARTMENTS;
}

export namespace USERS_DEPARTMENTS {
  export type AsObject = {
    departmentId: number,
    name: string,
    userId: number,
    deleted?: boolean,
  }
}

export class DEPARTMENTS extends jspb.Message {
  getDepartmentId(): number;
  setDepartmentId(value: number): DEPARTMENTS;

  getSiteId(): string;
  setSiteId(value: string): DEPARTMENTS;

  getName(): string;
  setName(value: string): DEPARTMENTS;

  getDescription(): string;
  setDescription(value: string): DEPARTMENTS;
  hasDescription(): boolean;
  clearDescription(): DEPARTMENTS;

  getDepartemntUsersList(): Array<number>;
  setDepartemntUsersList(value: Array<number>): DEPARTMENTS;
  clearDepartemntUsersList(): DEPARTMENTS;
  addDepartemntUsers(value: number, index?: number): DEPARTMENTS;

  getDescriptionEn(): string;
  setDescriptionEn(value: string): DEPARTMENTS;
  hasDescriptionEn(): boolean;
  clearDescriptionEn(): DEPARTMENTS;

  getDeleted(): boolean;
  setDeleted(value: boolean): DEPARTMENTS;
  hasDeleted(): boolean;
  clearDeleted(): DEPARTMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEPARTMENTS.AsObject;
  static toObject(includeInstance: boolean, msg: DEPARTMENTS): DEPARTMENTS.AsObject;
  static serializeBinaryToWriter(message: DEPARTMENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEPARTMENTS;
  static deserializeBinaryFromReader(message: DEPARTMENTS, reader: jspb.BinaryReader): DEPARTMENTS;
}

export namespace DEPARTMENTS {
  export type AsObject = {
    departmentId: number,
    siteId: string,
    name: string,
    description?: string,
    departemntUsersList: Array<number>,
    descriptionEn?: string,
    deleted?: boolean,
  }
}

export class USER_DEPARTMENTS extends jspb.Message {
  getDepartmentsList(): Array<DEPARTMENTS>;
  setDepartmentsList(value: Array<DEPARTMENTS>): USER_DEPARTMENTS;
  clearDepartmentsList(): USER_DEPARTMENTS;
  addDepartments(value?: DEPARTMENTS, index?: number): DEPARTMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USER_DEPARTMENTS.AsObject;
  static toObject(includeInstance: boolean, msg: USER_DEPARTMENTS): USER_DEPARTMENTS.AsObject;
  static serializeBinaryToWriter(message: USER_DEPARTMENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USER_DEPARTMENTS;
  static deserializeBinaryFromReader(message: USER_DEPARTMENTS, reader: jspb.BinaryReader): USER_DEPARTMENTS;
}

export namespace USER_DEPARTMENTS {
  export type AsObject = {
    departmentsList: Array<DEPARTMENTS.AsObject>,
  }
}

export class AllDEPARTMENTS extends jspb.Message {
  getDepartmentsList(): Array<DEPARTMENTS>;
  setDepartmentsList(value: Array<DEPARTMENTS>): AllDEPARTMENTS;
  clearDepartmentsList(): AllDEPARTMENTS;
  addDepartments(value?: DEPARTMENTS, index?: number): DEPARTMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllDEPARTMENTS.AsObject;
  static toObject(includeInstance: boolean, msg: AllDEPARTMENTS): AllDEPARTMENTS.AsObject;
  static serializeBinaryToWriter(message: AllDEPARTMENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllDEPARTMENTS;
  static deserializeBinaryFromReader(message: AllDEPARTMENTS, reader: jspb.BinaryReader): AllDEPARTMENTS;
}

export namespace AllDEPARTMENTS {
  export type AsObject = {
    departmentsList: Array<DEPARTMENTS.AsObject>,
  }
}

export class GETDEPARTMENTSFILTER extends jspb.Message {
  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): GETDEPARTMENTSFILTER;
  hasIsDeleted(): boolean;
  clearIsDeleted(): GETDEPARTMENTSFILTER;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GETDEPARTMENTSFILTER.AsObject;
  static toObject(includeInstance: boolean, msg: GETDEPARTMENTSFILTER): GETDEPARTMENTSFILTER.AsObject;
  static serializeBinaryToWriter(message: GETDEPARTMENTSFILTER, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GETDEPARTMENTSFILTER;
  static deserializeBinaryFromReader(message: GETDEPARTMENTSFILTER, reader: jspb.BinaryReader): GETDEPARTMENTSFILTER;
}

export namespace GETDEPARTMENTSFILTER {
  export type AsObject = {
    isDeleted?: boolean,
  }
}

export class GETUSERDEPARTMENTSREQ extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GETUSERDEPARTMENTSREQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GETUSERDEPARTMENTSREQ.AsObject;
  static toObject(includeInstance: boolean, msg: GETUSERDEPARTMENTSREQ): GETUSERDEPARTMENTSREQ.AsObject;
  static serializeBinaryToWriter(message: GETUSERDEPARTMENTSREQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GETUSERDEPARTMENTSREQ;
  static deserializeBinaryFromReader(message: GETUSERDEPARTMENTSREQ, reader: jspb.BinaryReader): GETUSERDEPARTMENTSREQ;
}

export namespace GETUSERDEPARTMENTSREQ {
  export type AsObject = {
    userId: number,
  }
}

export class USERDEPARTMENTSMESG extends jspb.Message {
  getDepartments(): DEPARTMENTS | undefined;
  setDepartments(value?: DEPARTMENTS): USERDEPARTMENTSMESG;
  hasDepartments(): boolean;
  clearDepartments(): USERDEPARTMENTSMESG;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERDEPARTMENTSMESG.AsObject;
  static toObject(includeInstance: boolean, msg: USERDEPARTMENTSMESG): USERDEPARTMENTSMESG.AsObject;
  static serializeBinaryToWriter(message: USERDEPARTMENTSMESG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERDEPARTMENTSMESG;
  static deserializeBinaryFromReader(message: USERDEPARTMENTSMESG, reader: jspb.BinaryReader): USERDEPARTMENTSMESG;
}

export namespace USERDEPARTMENTSMESG {
  export type AsObject = {
    departments?: DEPARTMENTS.AsObject,
  }
}

export class DEPARTMENTIID extends jspb.Message {
  getDepartmentId(): number;
  setDepartmentId(value: number): DEPARTMENTIID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEPARTMENTIID.AsObject;
  static toObject(includeInstance: boolean, msg: DEPARTMENTIID): DEPARTMENTIID.AsObject;
  static serializeBinaryToWriter(message: DEPARTMENTIID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEPARTMENTIID;
  static deserializeBinaryFromReader(message: DEPARTMENTIID, reader: jspb.BinaryReader): DEPARTMENTIID;
}

export namespace DEPARTMENTIID {
  export type AsObject = {
    departmentId: number,
  }
}

export class USERDEPARTMENTSRES extends jspb.Message {
  getUserDepartments(): USER_DEPARTMENTS | undefined;
  setUserDepartments(value?: USER_DEPARTMENTS): USERDEPARTMENTSRES;
  hasUserDepartments(): boolean;
  clearUserDepartments(): USERDEPARTMENTSRES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERDEPARTMENTSRES.AsObject;
  static toObject(includeInstance: boolean, msg: USERDEPARTMENTSRES): USERDEPARTMENTSRES.AsObject;
  static serializeBinaryToWriter(message: USERDEPARTMENTSRES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERDEPARTMENTSRES;
  static deserializeBinaryFromReader(message: USERDEPARTMENTSRES, reader: jspb.BinaryReader): USERDEPARTMENTSRES;
}

export namespace USERDEPARTMENTSRES {
  export type AsObject = {
    userDepartments?: USER_DEPARTMENTS.AsObject,
  }
}

export class USERS_STATIONS extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): USERS_STATIONS;

  getMainStationNo(): number;
  setMainStationNo(value: number): USERS_STATIONS;
  hasMainStationNo(): boolean;
  clearMainStationNo(): USERS_STATIONS;

  getStationName(): string;
  setStationName(value: string): USERS_STATIONS;
  hasStationName(): boolean;
  clearStationName(): USERS_STATIONS;

  getSiteCode(): number;
  setSiteCode(value: number): USERS_STATIONS;
  hasSiteCode(): boolean;
  clearSiteCode(): USERS_STATIONS;

  getSiteName(): string;
  setSiteName(value: string): USERS_STATIONS;
  hasSiteName(): boolean;
  clearSiteName(): USERS_STATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERS_STATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: USERS_STATIONS): USERS_STATIONS.AsObject;
  static serializeBinaryToWriter(message: USERS_STATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERS_STATIONS;
  static deserializeBinaryFromReader(message: USERS_STATIONS, reader: jspb.BinaryReader): USERS_STATIONS;
}

export namespace USERS_STATIONS {
  export type AsObject = {
    userId: number,
    mainStationNo?: number,
    stationName?: string,
    siteCode?: number,
    siteName?: string,
  }
}

export class USER_STATIONS extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): USER_STATIONS;

  getOrgId(): number;
  setOrgId(value: number): USER_STATIONS;

  getSiteCode(): number;
  setSiteCode(value: number): USER_STATIONS;

  getSectorId(): number;
  setSectorId(value: number): USER_STATIONS;

  getStationId(): number;
  setStationId(value: number): USER_STATIONS;

  getIsMain(): boolean;
  setIsMain(value: boolean): USER_STATIONS;
  hasIsMain(): boolean;
  clearIsMain(): USER_STATIONS;

  getDeleted(): boolean;
  setDeleted(value: boolean): USER_STATIONS;
  hasDeleted(): boolean;
  clearDeleted(): USER_STATIONS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): USER_STATIONS;
  hasStampDate(): boolean;
  clearStampDate(): USER_STATIONS;

  getStampUser(): string;
  setStampUser(value: string): USER_STATIONS;
  hasStampUser(): boolean;
  clearStampUser(): USER_STATIONS;

  getSiteName(): string;
  setSiteName(value: string): USER_STATIONS;
  hasSiteName(): boolean;
  clearSiteName(): USER_STATIONS;

  getStationName(): string;
  setStationName(value: string): USER_STATIONS;
  hasStationName(): boolean;
  clearStationName(): USER_STATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USER_STATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: USER_STATIONS): USER_STATIONS.AsObject;
  static serializeBinaryToWriter(message: USER_STATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USER_STATIONS;
  static deserializeBinaryFromReader(message: USER_STATIONS, reader: jspb.BinaryReader): USER_STATIONS;
}

export namespace USER_STATIONS {
  export type AsObject = {
    userId: number,
    orgId: number,
    siteCode: number,
    sectorId: number,
    stationId: number,
    isMain?: boolean,
    deleted?: boolean,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    siteName?: string,
    stationName?: string,
  }
}

export class ALL_TAX_CLIENT_IDS extends jspb.Message {
  getTaxClientIdsList(): Array<TAX_CLIENT_IDS>;
  setTaxClientIdsList(value: Array<TAX_CLIENT_IDS>): ALL_TAX_CLIENT_IDS;
  clearTaxClientIdsList(): ALL_TAX_CLIENT_IDS;
  addTaxClientIds(value?: TAX_CLIENT_IDS, index?: number): TAX_CLIENT_IDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALL_TAX_CLIENT_IDS.AsObject;
  static toObject(includeInstance: boolean, msg: ALL_TAX_CLIENT_IDS): ALL_TAX_CLIENT_IDS.AsObject;
  static serializeBinaryToWriter(message: ALL_TAX_CLIENT_IDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ALL_TAX_CLIENT_IDS;
  static deserializeBinaryFromReader(message: ALL_TAX_CLIENT_IDS, reader: jspb.BinaryReader): ALL_TAX_CLIENT_IDS;
}

export namespace ALL_TAX_CLIENT_IDS {
  export type AsObject = {
    taxClientIdsList: Array<TAX_CLIENT_IDS.AsObject>,
  }
}

export class TAX_CLIENT_ID_REQ extends jspb.Message {
  getTaxClientIds(): TAX_CLIENT_IDS | undefined;
  setTaxClientIds(value?: TAX_CLIENT_IDS): TAX_CLIENT_ID_REQ;
  hasTaxClientIds(): boolean;
  clearTaxClientIds(): TAX_CLIENT_ID_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TAX_CLIENT_ID_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: TAX_CLIENT_ID_REQ): TAX_CLIENT_ID_REQ.AsObject;
  static serializeBinaryToWriter(message: TAX_CLIENT_ID_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TAX_CLIENT_ID_REQ;
  static deserializeBinaryFromReader(message: TAX_CLIENT_ID_REQ, reader: jspb.BinaryReader): TAX_CLIENT_ID_REQ;
}

export namespace TAX_CLIENT_ID_REQ {
  export type AsObject = {
    taxClientIds?: TAX_CLIENT_IDS.AsObject,
  }
}

export class CLIENT_ID_REQ extends jspb.Message {
  getRowId(): number;
  setRowId(value: number): CLIENT_ID_REQ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CLIENT_ID_REQ.AsObject;
  static toObject(includeInstance: boolean, msg: CLIENT_ID_REQ): CLIENT_ID_REQ.AsObject;
  static serializeBinaryToWriter(message: CLIENT_ID_REQ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CLIENT_ID_REQ;
  static deserializeBinaryFromReader(message: CLIENT_ID_REQ, reader: jspb.BinaryReader): CLIENT_ID_REQ;
}

export namespace CLIENT_ID_REQ {
  export type AsObject = {
    rowId: number,
  }
}

export class TAX_CLIENT_IDS extends jspb.Message {
  getRowId(): number;
  setRowId(value: number): TAX_CLIENT_IDS;

  getSiteId(): number;
  setSiteId(value: number): TAX_CLIENT_IDS;

  getClientId(): string;
  setClientId(value: string): TAX_CLIENT_IDS;

  getBranchId(): string;
  setBranchId(value: string): TAX_CLIENT_IDS;

  getIsTest(): boolean;
  setIsTest(value: boolean): TAX_CLIENT_IDS;
  hasIsTest(): boolean;
  clearIsTest(): TAX_CLIENT_IDS;

  getDeleted(): boolean;
  setDeleted(value: boolean): TAX_CLIENT_IDS;
  hasDeleted(): boolean;
  clearDeleted(): TAX_CLIENT_IDS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TAX_CLIENT_IDS.AsObject;
  static toObject(includeInstance: boolean, msg: TAX_CLIENT_IDS): TAX_CLIENT_IDS.AsObject;
  static serializeBinaryToWriter(message: TAX_CLIENT_IDS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TAX_CLIENT_IDS;
  static deserializeBinaryFromReader(message: TAX_CLIENT_IDS, reader: jspb.BinaryReader): TAX_CLIENT_IDS;
}

export namespace TAX_CLIENT_IDS {
  export type AsObject = {
    rowId: number,
    siteId: number,
    clientId: string,
    branchId: string,
    isTest?: boolean,
    deleted?: boolean,
  }
}

export class Min_USER_STATIONS extends jspb.Message {
  getOrgId(): number;
  setOrgId(value: number): Min_USER_STATIONS;

  getSiteCode(): number;
  setSiteCode(value: number): Min_USER_STATIONS;

  getSectorId(): number;
  setSectorId(value: number): Min_USER_STATIONS;

  getStationId(): number;
  setStationId(value: number): Min_USER_STATIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Min_USER_STATIONS.AsObject;
  static toObject(includeInstance: boolean, msg: Min_USER_STATIONS): Min_USER_STATIONS.AsObject;
  static serializeBinaryToWriter(message: Min_USER_STATIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Min_USER_STATIONS;
  static deserializeBinaryFromReader(message: Min_USER_STATIONS, reader: jspb.BinaryReader): Min_USER_STATIONS;
}

export namespace Min_USER_STATIONS {
  export type AsObject = {
    orgId: number,
    siteCode: number,
    sectorId: number,
    stationId: number,
  }
}

export class RegisterUserRequest extends jspb.Message {
  getUsers(): USERS | undefined;
  setUsers(value?: USERS): RegisterUserRequest;
  hasUsers(): boolean;
  clearUsers(): RegisterUserRequest;

  getGetuserresponse(): Getuserresponse | undefined;
  setGetuserresponse(value?: Getuserresponse): RegisterUserRequest;
  hasGetuserresponse(): boolean;
  clearGetuserresponse(): RegisterUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    users?: USERS.AsObject,
    getuserresponse?: Getuserresponse.AsObject,
  }
}

export class Getuserresponse extends jspb.Message {
  getApplicationTypeRolesList(): Array<ApplicationTypeRole>;
  setApplicationTypeRolesList(value: Array<ApplicationTypeRole>): Getuserresponse;
  clearApplicationTypeRolesList(): Getuserresponse;
  addApplicationTypeRoles(value?: ApplicationTypeRole, index?: number): ApplicationTypeRole;

  getUserid(): number;
  setUserid(value: number): Getuserresponse;
  hasUserid(): boolean;
  clearUserid(): Getuserresponse;

  getProfileid(): number;
  setProfileid(value: number): Getuserresponse;
  hasProfileid(): boolean;
  clearProfileid(): Getuserresponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Getuserresponse.AsObject;
  static toObject(includeInstance: boolean, msg: Getuserresponse): Getuserresponse.AsObject;
  static serializeBinaryToWriter(message: Getuserresponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Getuserresponse;
  static deserializeBinaryFromReader(message: Getuserresponse, reader: jspb.BinaryReader): Getuserresponse;
}

export namespace Getuserresponse {
  export type AsObject = {
    applicationTypeRolesList: Array<ApplicationTypeRole.AsObject>,
    userid?: number,
    profileid?: number,
  }
}

export class ApplicationTypeRole extends jspb.Message {
  getApplicationRolesList(): Array<ApplicationRoleState>;
  setApplicationRolesList(value: Array<ApplicationRoleState>): ApplicationTypeRole;
  clearApplicationRolesList(): ApplicationTypeRole;
  addApplicationRoles(value?: ApplicationRoleState, index?: number): ApplicationRoleState;

  getApplicationtypeid(): number;
  setApplicationtypeid(value: number): ApplicationTypeRole;
  hasApplicationtypeid(): boolean;
  clearApplicationtypeid(): ApplicationTypeRole;

  getApplicationtypename(): string;
  setApplicationtypename(value: string): ApplicationTypeRole;
  hasApplicationtypename(): boolean;
  clearApplicationtypename(): ApplicationTypeRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationTypeRole.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationTypeRole): ApplicationTypeRole.AsObject;
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
  getStateRolesList(): Array<ApplicationRole>;
  setStateRolesList(value: Array<ApplicationRole>): ApplicationRoleState;
  clearStateRolesList(): ApplicationRoleState;
  addStateRoles(value?: ApplicationRole, index?: number): ApplicationRole;

  getStateid(): number;
  setStateid(value: number): ApplicationRoleState;
  hasStateid(): boolean;
  clearStateid(): ApplicationRoleState;

  getStatename(): string;
  setStatename(value: string): ApplicationRoleState;
  hasStatename(): boolean;
  clearStatename(): ApplicationRoleState;

  getApplicationtypeid(): number;
  setApplicationtypeid(value: number): ApplicationRoleState;
  hasApplicationtypeid(): boolean;
  clearApplicationtypeid(): ApplicationRoleState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRoleState.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRoleState): ApplicationRoleState.AsObject;
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
  getActionid(): number;
  setActionid(value: number): ApplicationRole;
  hasActionid(): boolean;
  clearActionid(): ApplicationRole;

  getActionname(): string;
  setActionname(value: string): ApplicationRole;
  hasActionname(): boolean;
  clearActionname(): ApplicationRole;

  getActiondone(): boolean;
  setActiondone(value: boolean): ApplicationRole;
  hasActiondone(): boolean;
  clearActiondone(): ApplicationRole;

  getActionview(): ACTIONVIEW;
  setActionview(value: ACTIONVIEW): ApplicationRole;
  hasActionview(): boolean;
  clearActionview(): ApplicationRole;

  getActionduration(): number;
  setActionduration(value: number): ApplicationRole;
  hasActionduration(): boolean;
  clearActionduration(): ApplicationRole;

  getActionDurationType(): DurationType;
  setActionDurationType(value: DurationType): ApplicationRole;
  hasActionDurationType(): boolean;
  clearActionDurationType(): ApplicationRole;

  getStateid(): number;
  setStateid(value: number): ApplicationRole;
  hasStateid(): boolean;
  clearStateid(): ApplicationRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRole.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRole): ApplicationRole.AsObject;
  static serializeBinaryToWriter(message: ApplicationRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationRole;
  static deserializeBinaryFromReader(message: ApplicationRole, reader: jspb.BinaryReader): ApplicationRole;
}

export namespace ApplicationRole {
  export type AsObject = {
    actionid?: number,
    actionname?: string,
    actiondone?: boolean,
    actionview?: ACTIONVIEW,
    actionduration?: number,
    actionDurationType?: DurationType,
    stateid?: number,
  }
}

export class RELATED_ACOUNTS extends jspb.Message {
  getClientId(): number;
  setClientId(value: number): RELATED_ACOUNTS;

  getApplicationType(): Applications;
  setApplicationType(value: Applications): RELATED_ACOUNTS;

  getApplicationId(): number;
  setApplicationId(value: number): RELATED_ACOUNTS;

  getUserName(): string;
  setUserName(value: string): RELATED_ACOUNTS;
  hasUserName(): boolean;
  clearUserName(): RELATED_ACOUNTS;

  getEmail(): string;
  setEmail(value: string): RELATED_ACOUNTS;
  hasEmail(): boolean;
  clearEmail(): RELATED_ACOUNTS;

  getMobileNo(): string;
  setMobileNo(value: string): RELATED_ACOUNTS;
  hasMobileNo(): boolean;
  clearMobileNo(): RELATED_ACOUNTS;

  getPhoto(): string;
  setPhoto(value: string): RELATED_ACOUNTS;
  hasPhoto(): boolean;
  clearPhoto(): RELATED_ACOUNTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RELATED_ACOUNTS.AsObject;
  static toObject(includeInstance: boolean, msg: RELATED_ACOUNTS): RELATED_ACOUNTS.AsObject;
  static serializeBinaryToWriter(message: RELATED_ACOUNTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RELATED_ACOUNTS;
  static deserializeBinaryFromReader(message: RELATED_ACOUNTS, reader: jspb.BinaryReader): RELATED_ACOUNTS;
}

export namespace RELATED_ACOUNTS {
  export type AsObject = {
    clientId: number,
    applicationType: Applications,
    applicationId: number,
    userName?: string,
    email?: string,
    mobileNo?: string,
    photo?: string,
  }
}

export class ADMINS extends jspb.Message {
  getId(): number;
  setId(value: number): ADMINS;

  getSiteCode(): number;
  setSiteCode(value: number): ADMINS;
  hasSiteCode(): boolean;
  clearSiteCode(): ADMINS;

  getEmail(): string;
  setEmail(value: string): ADMINS;
  hasEmail(): boolean;
  clearEmail(): ADMINS;

  getMobileNo(): string;
  setMobileNo(value: string): ADMINS;
  hasMobileNo(): boolean;
  clearMobileNo(): ADMINS;

  getUserName(): string;
  setUserName(value: string): ADMINS;

  getPassword(): string;
  setPassword(value: string): ADMINS;
  hasPassword(): boolean;
  clearPassword(): ADMINS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): ADMINS;
  hasStampDate(): boolean;
  clearStampDate(): ADMINS;

  getStampUser(): string;
  setStampUser(value: string): ADMINS;
  hasStampUser(): boolean;
  clearStampUser(): ADMINS;

  getIsActive(): boolean;
  setIsActive(value: boolean): ADMINS;
  hasIsActive(): boolean;
  clearIsActive(): ADMINS;

  getDeviceToken(): string;
  setDeviceToken(value: string): ADMINS;
  hasDeviceToken(): boolean;
  clearDeviceToken(): ADMINS;

  getAdminName(): string;
  setAdminName(value: string): ADMINS;
  hasAdminName(): boolean;
  clearAdminName(): ADMINS;

  getNid(): string;
  setNid(value: string): ADMINS;
  hasNid(): boolean;
  clearNid(): ADMINS;

  getAddress(): string;
  setAddress(value: string): ADMINS;
  hasAddress(): boolean;
  clearAddress(): ADMINS;

  getLastLoginIp(): string;
  setLastLoginIp(value: string): ADMINS;
  hasLastLoginIp(): boolean;
  clearLastLoginIp(): ADMINS;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): ADMINS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): ADMINS;

  getReadings(): boolean;
  setReadings(value: boolean): ADMINS;
  hasReadings(): boolean;
  clearReadings(): ADMINS;

  getNews(): boolean;
  setNews(value: boolean): ADMINS;
  hasNews(): boolean;
  clearNews(): ADMINS;

  getSupport(): boolean;
  setSupport(value: boolean): ADMINS;
  hasSupport(): boolean;
  clearSupport(): ADMINS;

  getUsers(): boolean;
  setUsers(value: boolean): ADMINS;
  hasUsers(): boolean;
  clearUsers(): ADMINS;

  getServices(): boolean;
  setServices(value: boolean): ADMINS;
  hasServices(): boolean;
  clearServices(): ADMINS;

  getCtgServices(): boolean;
  setCtgServices(value: boolean): ADMINS;
  hasCtgServices(): boolean;
  clearCtgServices(): ADMINS;

  getReports(): boolean;
  setReports(value: boolean): ADMINS;
  hasReports(): boolean;
  clearReports(): ADMINS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ADMINS.AsObject;
  static toObject(includeInstance: boolean, msg: ADMINS): ADMINS.AsObject;
  static serializeBinaryToWriter(message: ADMINS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ADMINS;
  static deserializeBinaryFromReader(message: ADMINS, reader: jspb.BinaryReader): ADMINS;
}

export namespace ADMINS {
  export type AsObject = {
    id: number,
    siteCode?: number,
    email?: string,
    mobileNo?: string,
    userName: string,
    password?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    isActive?: boolean,
    deviceToken?: string,
    adminName?: string,
    nid?: string,
    address?: string,
    lastLoginIp?: string,
    sysAdmin?: boolean,
    readings?: boolean,
    news?: boolean,
    support?: boolean,
    users?: boolean,
    services?: boolean,
    ctgServices?: boolean,
    reports?: boolean,
  }
}

export class CLIENTS extends jspb.Message {
  getId(): number;
  setId(value: number): CLIENTS;

  getSiteCode(): number;
  setSiteCode(value: number): CLIENTS;
  hasSiteCode(): boolean;
  clearSiteCode(): CLIENTS;

  getEmail(): string;
  setEmail(value: string): CLIENTS;
  hasEmail(): boolean;
  clearEmail(): CLIENTS;

  getMobileNo(): string;
  setMobileNo(value: string): CLIENTS;
  hasMobileNo(): boolean;
  clearMobileNo(): CLIENTS;

  getPassword(): string;
  setPassword(value: string): CLIENTS;
  hasPassword(): boolean;
  clearPassword(): CLIENTS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): CLIENTS;
  hasStampDate(): boolean;
  clearStampDate(): CLIENTS;

  getIsActive(): boolean;
  setIsActive(value: boolean): CLIENTS;
  hasIsActive(): boolean;
  clearIsActive(): CLIENTS;

  getActivationCode(): string;
  setActivationCode(value: string): CLIENTS;
  hasActivationCode(): boolean;
  clearActivationCode(): CLIENTS;

  getDeviceToken(): string;
  setDeviceToken(value: string): CLIENTS;
  hasDeviceToken(): boolean;
  clearDeviceToken(): CLIENTS;

  getFirstName(): string;
  setFirstName(value: string): CLIENTS;
  hasFirstName(): boolean;
  clearFirstName(): CLIENTS;

  getSecondName(): string;
  setSecondName(value: string): CLIENTS;
  hasSecondName(): boolean;
  clearSecondName(): CLIENTS;

  getThirdName(): string;
  setThirdName(value: string): CLIENTS;
  hasThirdName(): boolean;
  clearThirdName(): CLIENTS;

  getIsBlocked(): boolean;
  setIsBlocked(value: boolean): CLIENTS;
  hasIsBlocked(): boolean;
  clearIsBlocked(): CLIENTS;

  getCountSendActivation(): number;
  setCountSendActivation(value: number): CLIENTS;
  hasCountSendActivation(): boolean;
  clearCountSendActivation(): CLIENTS;

  getNid(): string;
  setNid(value: string): CLIENTS;
  hasNid(): boolean;
  clearNid(): CLIENTS;

  getResetCode(): string;
  setResetCode(value: string): CLIENTS;
  hasResetCode(): boolean;
  clearResetCode(): CLIENTS;

  getExpiresat(): date_pb.MasDateTime | undefined;
  setExpiresat(value?: date_pb.MasDateTime): CLIENTS;
  hasExpiresat(): boolean;
  clearExpiresat(): CLIENTS;

  getAddress(): string;
  setAddress(value: string): CLIENTS;
  hasAddress(): boolean;
  clearAddress(): CLIENTS;

  getLastLoginIp(): string;
  setLastLoginIp(value: string): CLIENTS;
  hasLastLoginIp(): boolean;
  clearLastLoginIp(): CLIENTS;

  getRelatedCustkeyList(): Array<RELATED_CUSTKEY>;
  setRelatedCustkeyList(value: Array<RELATED_CUSTKEY>): CLIENTS;
  clearRelatedCustkeyList(): CLIENTS;
  addRelatedCustkey(value?: RELATED_CUSTKEY, index?: number): RELATED_CUSTKEY;

  getIsTester(): boolean;
  setIsTester(value: boolean): CLIENTS;
  hasIsTester(): boolean;
  clearIsTester(): CLIENTS;

  getEmailVcode(): string;
  setEmailVcode(value: string): CLIENTS;
  hasEmailVcode(): boolean;
  clearEmailVcode(): CLIENTS;

  getIsEmailVerified(): boolean;
  setIsEmailVerified(value: boolean): CLIENTS;
  hasIsEmailVerified(): boolean;
  clearIsEmailVerified(): CLIENTS;

  getUnVEmail(): string;
  setUnVEmail(value: string): CLIENTS;
  hasUnVEmail(): boolean;
  clearUnVEmail(): CLIENTS;

  getCul(): number;
  setCul(value: number): CLIENTS;
  hasCul(): boolean;
  clearCul(): CLIENTS;

  getCulDate(): date_pb.MasDateTime | undefined;
  setCulDate(value?: date_pb.MasDateTime): CLIENTS;
  hasCulDate(): boolean;
  clearCulDate(): CLIENTS;

  getCula(): number;
  setCula(value: number): CLIENTS;
  hasCula(): boolean;
  clearCula(): CLIENTS;

  getIsEnc(): ENCRYPTION;
  setIsEnc(value: ENCRYPTION): CLIENTS;
  hasIsEnc(): boolean;
  clearIsEnc(): CLIENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CLIENTS.AsObject;
  static toObject(includeInstance: boolean, msg: CLIENTS): CLIENTS.AsObject;
  static serializeBinaryToWriter(message: CLIENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CLIENTS;
  static deserializeBinaryFromReader(message: CLIENTS, reader: jspb.BinaryReader): CLIENTS;
}

export namespace CLIENTS {
  export type AsObject = {
    id: number,
    siteCode?: number,
    email?: string,
    mobileNo?: string,
    password?: string,
    stampDate?: date_pb.MasDateTime.AsObject,
    isActive?: boolean,
    activationCode?: string,
    deviceToken?: string,
    firstName?: string,
    secondName?: string,
    thirdName?: string,
    isBlocked?: boolean,
    countSendActivation?: number,
    nid?: string,
    resetCode?: string,
    expiresat?: date_pb.MasDateTime.AsObject,
    address?: string,
    lastLoginIp?: string,
    relatedCustkeyList: Array<RELATED_CUSTKEY.AsObject>,
    isTester?: boolean,
    emailVcode?: string,
    isEmailVerified?: boolean,
    unVEmail?: string,
    cul?: number,
    culDate?: date_pb.MasDateTime.AsObject,
    cula?: number,
    isEnc?: ENCRYPTION,
  }
}

export class RELATED_CUSTKEY extends jspb.Message {
  getClientId(): number;
  setClientId(value: number): RELATED_CUSTKEY;

  getCustkey(): string;
  setCustkey(value: string): RELATED_CUSTKEY;

  getCustname(): string;
  setCustname(value: string): RELATED_CUSTKEY;
  hasCustname(): boolean;
  clearCustname(): RELATED_CUSTKEY;

  getSiteCode(): number;
  setSiteCode(value: number): RELATED_CUSTKEY;

  getBillgroup(): string;
  setBillgroup(value: string): RELATED_CUSTKEY;
  hasBillgroup(): boolean;
  clearBillgroup(): RELATED_CUSTKEY;

  getBookNo(): string;
  setBookNo(value: string): RELATED_CUSTKEY;
  hasBookNo(): boolean;
  clearBookNo(): RELATED_CUSTKEY;

  getStationNo(): number;
  setStationNo(value: number): RELATED_CUSTKEY;
  hasStationNo(): boolean;
  clearStationNo(): RELATED_CUSTKEY;

  getAddress(): string;
  setAddress(value: string): RELATED_CUSTKEY;
  hasAddress(): boolean;
  clearAddress(): RELATED_CUSTKEY;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): RELATED_CUSTKEY;
  hasIsDefault(): boolean;
  clearIsDefault(): RELATED_CUSTKEY;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RELATED_CUSTKEY.AsObject;
  static toObject(includeInstance: boolean, msg: RELATED_CUSTKEY): RELATED_CUSTKEY.AsObject;
  static serializeBinaryToWriter(message: RELATED_CUSTKEY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RELATED_CUSTKEY;
  static deserializeBinaryFromReader(message: RELATED_CUSTKEY, reader: jspb.BinaryReader): RELATED_CUSTKEY;
}

export namespace RELATED_CUSTKEY {
  export type AsObject = {
    clientId: number,
    custkey: string,
    custname?: string,
    siteCode: number,
    billgroup?: string,
    bookNo?: string,
    stationNo?: number,
    address?: string,
    isDefault?: boolean,
  }
}

export class USERS extends jspb.Message {
  getId(): number;
  setId(value: number): USERS;

  getStationNo(): number;
  setStationNo(value: number): USERS;
  hasStationNo(): boolean;
  clearStationNo(): USERS;

  getFullName(): string;
  setFullName(value: string): USERS;
  hasFullName(): boolean;
  clearFullName(): USERS;

  getUserName(): string;
  setUserName(value: string): USERS;
  hasUserName(): boolean;
  clearUserName(): USERS;

  getPassword(): string;
  setPassword(value: string): USERS;
  hasPassword(): boolean;
  clearPassword(): USERS;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): USERS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): USERS;

  getReadingAdmin(): boolean;
  setReadingAdmin(value: boolean): USERS;
  hasReadingAdmin(): boolean;
  clearReadingAdmin(): USERS;

  getCollectionAdmin(): boolean;
  setCollectionAdmin(value: boolean): USERS;
  hasCollectionAdmin(): boolean;
  clearCollectionAdmin(): USERS;

  getReporingAdmin(): boolean;
  setReporingAdmin(value: boolean): USERS;
  hasReporingAdmin(): boolean;
  clearReporingAdmin(): USERS;

  getHhMonitor(): boolean;
  setHhMonitor(value: boolean): USERS;
  hasHhMonitor(): boolean;
  clearHhMonitor(): USERS;

  getUserManagement(): boolean;
  setUserManagement(value: boolean): USERS;
  hasUserManagement(): boolean;
  clearUserManagement(): USERS;

  getDataAdmin(): boolean;
  setDataAdmin(value: boolean): USERS;
  hasDataAdmin(): boolean;
  clearDataAdmin(): USERS;

  getSystemMntinance(): boolean;
  setSystemMntinance(value: boolean): USERS;
  hasSystemMntinance(): boolean;
  clearSystemMntinance(): USERS;

  getNid(): string;
  setNid(value: string): USERS;
  hasNid(): boolean;
  clearNid(): USERS;

  getEmail(): string;
  setEmail(value: string): USERS;
  hasEmail(): boolean;
  clearEmail(): USERS;

  getAllowCollection(): boolean;
  setAllowCollection(value: boolean): USERS;
  hasAllowCollection(): boolean;
  clearAllowCollection(): USERS;

  getAllowModifyReading(): boolean;
  setAllowModifyReading(value: boolean): USERS;
  hasAllowModifyReading(): boolean;
  clearAllowModifyReading(): USERS;

  getAllowDeposit(): boolean;
  setAllowDeposit(value: boolean): USERS;
  hasAllowDeposit(): boolean;
  clearAllowDeposit(): USERS;

  getAloowCancel(): boolean;
  setAloowCancel(value: boolean): USERS;
  hasAloowCancel(): boolean;
  clearAloowCancel(): USERS;

  getAllowReporting(): boolean;
  setAllowReporting(value: boolean): USERS;
  hasAllowReporting(): boolean;
  clearAllowReporting(): USERS;

  getIsEnc(): ENCRYPTION;
  setIsEnc(value: ENCRYPTION): USERS;
  hasIsEnc(): boolean;
  clearIsEnc(): USERS;

  getAllowCompensation(): boolean;
  setAllowCompensation(value: boolean): USERS;
  hasAllowCompensation(): boolean;
  clearAllowCompensation(): USERS;

  getAllowCancel(): boolean;
  setAllowCancel(value: boolean): USERS;
  hasAllowCancel(): boolean;
  clearAllowCancel(): USERS;

  getMapReading(): boolean;
  setMapReading(value: boolean): USERS;
  hasMapReading(): boolean;
  clearMapReading(): USERS;

  getMapCollection(): boolean;
  setMapCollection(value: boolean): USERS;
  hasMapCollection(): boolean;
  clearMapCollection(): USERS;

  getMapLocation(): boolean;
  setMapLocation(value: boolean): USERS;
  hasMapLocation(): boolean;
  clearMapLocation(): USERS;

  getMapPath(): boolean;
  setMapPath(value: boolean): USERS;
  hasMapPath(): boolean;
  clearMapPath(): USERS;

  getMapComplaints(): boolean;
  setMapComplaints(value: boolean): USERS;
  hasMapComplaints(): boolean;
  clearMapComplaints(): USERS;

  getMapBadConn(): boolean;
  setMapBadConn(value: boolean): USERS;
  hasMapBadConn(): boolean;
  clearMapBadConn(): USERS;

  getWalkArrangePost(): boolean;
  setWalkArrangePost(value: boolean): USERS;
  hasWalkArrangePost(): boolean;
  clearWalkArrangePost(): USERS;

  getUpdateCustomerLocation(): boolean;
  setUpdateCustomerLocation(value: boolean): USERS;
  hasUpdateCustomerLocation(): boolean;
  clearUpdateCustomerLocation(): USERS;

  getAllowCancelDepCol(): boolean;
  setAllowCancelDepCol(value: boolean): USERS;
  hasAllowCancelDepCol(): boolean;
  clearAllowCancelDepCol(): USERS;

  getAllowRecolCancel(): boolean;
  setAllowRecolCancel(value: boolean): USERS;
  hasAllowRecolCancel(): boolean;
  clearAllowRecolCancel(): USERS;

  getAllowMaps(): boolean;
  setAllowMaps(value: boolean): USERS;
  hasAllowMaps(): boolean;
  clearAllowMaps(): USERS;

  getAllowLoaddataC(): boolean;
  setAllowLoaddataC(value: boolean): USERS;
  hasAllowLoaddataC(): boolean;
  clearAllowLoaddataC(): USERS;

  getAllowLoaddataR(): boolean;
  setAllowLoaddataR(value: boolean): USERS;
  hasAllowLoaddataR(): boolean;
  clearAllowLoaddataR(): USERS;

  getIsCashier(): boolean;
  setIsCashier(value: boolean): USERS;
  hasIsCashier(): boolean;
  clearIsCashier(): USERS;

  getCashierId(): number;
  setCashierId(value: number): USERS;
  hasCashierId(): boolean;
  clearCashierId(): USERS;

  getAllowMeterModify(): boolean;
  setAllowMeterModify(value: boolean): USERS;
  hasAllowMeterModify(): boolean;
  clearAllowMeterModify(): USERS;

  getAllowGard(): boolean;
  setAllowGard(value: boolean): USERS;
  hasAllowGard(): boolean;
  clearAllowGard(): USERS;

  getResendCollection(): boolean;
  setResendCollection(value: boolean): USERS;
  hasResendCollection(): boolean;
  clearResendCollection(): USERS;

  getResendReading(): boolean;
  setResendReading(value: boolean): USERS;
  hasResendReading(): boolean;
  clearResendReading(): USERS;

  getCloseCollection(): boolean;
  setCloseCollection(value: boolean): USERS;
  hasCloseCollection(): boolean;
  clearCloseCollection(): USERS;

  getCloseReading(): boolean;
  setCloseReading(value: boolean): USERS;
  hasCloseReading(): boolean;
  clearCloseReading(): USERS;

  getCollectionDiscount(): boolean;
  setCollectionDiscount(value: boolean): USERS;
  hasCollectionDiscount(): boolean;
  clearCollectionDiscount(): USERS;

  getRefreshBillsData(): boolean;
  setRefreshBillsData(value: boolean): USERS;
  hasRefreshBillsData(): boolean;
  clearRefreshBillsData(): USERS;

  getCalculateDueAmount(): boolean;
  setCalculateDueAmount(value: boolean): USERS;
  hasCalculateDueAmount(): boolean;
  clearCalculateDueAmount(): USERS;

  getCollectBillSinglUint(): boolean;
  setCollectBillSinglUint(value: boolean): USERS;
  hasCollectBillSinglUint(): boolean;
  clearCollectBillSinglUint(): USERS;

  getPrintPaymentRequest(): boolean;
  setPrintPaymentRequest(value: boolean): USERS;
  hasPrintPaymentRequest(): boolean;
  clearPrintPaymentRequest(): USERS;

  getPartialCollection(): boolean;
  setPartialCollection(value: boolean): USERS;
  hasPartialCollection(): boolean;
  clearPartialCollection(): USERS;

  getAlonePanel(): boolean;
  setAlonePanel(value: boolean): USERS;
  hasAlonePanel(): boolean;
  clearAlonePanel(): USERS;

  getRefreshCustomerBills(): boolean;
  setRefreshCustomerBills(value: boolean): USERS;
  hasRefreshCustomerBills(): boolean;
  clearRefreshCustomerBills(): USERS;

  getEdamsRecalcNew(): boolean;
  setEdamsRecalcNew(value: boolean): USERS;
  hasEdamsRecalcNew(): boolean;
  clearEdamsRecalcNew(): USERS;

  getAllowFawryOpen(): boolean;
  setAllowFawryOpen(value: boolean): USERS;
  hasAllowFawryOpen(): boolean;
  clearAllowFawryOpen(): USERS;

  getAllowFawryClose(): boolean;
  setAllowFawryClose(value: boolean): USERS;
  hasAllowFawryClose(): boolean;
  clearAllowFawryClose(): USERS;

  getAllowModifyPrevReading(): boolean;
  setAllowModifyPrevReading(value: boolean): USERS;
  hasAllowModifyPrevReading(): boolean;
  clearAllowModifyPrevReading(): USERS;

  getListCollection(): boolean;
  setListCollection(value: boolean): USERS;
  hasListCollection(): boolean;
  clearListCollection(): USERS;

  getMarketing(): boolean;
  setMarketing(value: boolean): USERS;
  hasMarketing(): boolean;
  clearMarketing(): USERS;

  getPrepearHafza(): boolean;
  setPrepearHafza(value: boolean): USERS;
  hasPrepearHafza(): boolean;
  clearPrepearHafza(): USERS;

  getCashBox(): boolean;
  setCashBox(value: boolean): USERS;
  hasCashBox(): boolean;
  clearCashBox(): USERS;

  getSwitch(): boolean;
  setSwitch(value: boolean): USERS;
  hasSwitch(): boolean;
  clearSwitch(): USERS;

  getUflag(): boolean;
  setUflag(value: boolean): USERS;
  hasUflag(): boolean;
  clearUflag(): USERS;

  getPortal(): boolean;
  setPortal(value: boolean): USERS;
  hasPortal(): boolean;
  clearPortal(): USERS;

  getSurvey(): boolean;
  setSurvey(value: boolean): USERS;
  hasSurvey(): boolean;
  clearSurvey(): USERS;

  getReports(): boolean;
  setReports(value: boolean): USERS;
  hasReports(): boolean;
  clearReports(): USERS;

  getDashboard(): boolean;
  setDashboard(value: boolean): USERS;
  hasDashboard(): boolean;
  clearDashboard(): USERS;

  getQuery(): boolean;
  setQuery(value: boolean): USERS;
  hasQuery(): boolean;
  clearQuery(): USERS;

  getDeviceManagment(): boolean;
  setDeviceManagment(value: boolean): USERS;
  hasDeviceManagment(): boolean;
  clearDeviceManagment(): USERS;

  getSync(): boolean;
  setSync(value: boolean): USERS;
  hasSync(): boolean;
  clearSync(): USERS;

  getCancelBill(): boolean;
  setCancelBill(value: boolean): USERS;
  hasCancelBill(): boolean;
  clearCancelBill(): USERS;

  getCancelDelivery(): boolean;
  setCancelDelivery(value: boolean): USERS;
  hasCancelDelivery(): boolean;
  clearCancelDelivery(): USERS;

  getDepartment(): number;
  setDepartment(value: number): USERS;
  hasDepartment(): boolean;
  clearDepartment(): USERS;

  getAllowCustMod(): boolean;
  setAllowCustMod(value: boolean): USERS;
  hasAllowCustMod(): boolean;
  clearAllowCustMod(): USERS;

  getAllowEstimReading(): boolean;
  setAllowEstimReading(value: boolean): USERS;
  hasAllowEstimReading(): boolean;
  clearAllowEstimReading(): USERS;

  getAllowBatchEstimReading(): boolean;
  setAllowBatchEstimReading(value: boolean): USERS;
  hasAllowBatchEstimReading(): boolean;
  clearAllowBatchEstimReading(): USERS;

  getCreateApplication(): boolean;
  setCreateApplication(value: boolean): USERS;
  hasCreateApplication(): boolean;
  clearCreateApplication(): USERS;

  getBiller(): boolean;
  setBiller(value: boolean): USERS;
  hasBiller(): boolean;
  clearBiller(): USERS;

  getCancelApplication(): boolean;
  setCancelApplication(value: boolean): USERS;
  hasCancelApplication(): boolean;
  clearCancelApplication(): USERS;

  getEditApplication(): boolean;
  setEditApplication(value: boolean): USERS;
  hasEditApplication(): boolean;
  clearEditApplication(): USERS;

  getDeleteApplication(): boolean;
  setDeleteApplication(value: boolean): USERS;
  hasDeleteApplication(): boolean;
  clearDeleteApplication(): USERS;

  getPresentCancelBill(): boolean;
  setPresentCancelBill(value: boolean): USERS;
  hasPresentCancelBill(): boolean;
  clearPresentCancelBill(): USERS;

  getClosedApplication(): boolean;
  setClosedApplication(value: boolean): USERS;
  hasClosedApplication(): boolean;
  clearClosedApplication(): USERS;

  getIsactive(): boolean;
  setIsactive(value: boolean): USERS;
  hasIsactive(): boolean;
  clearIsactive(): USERS;

  getDeleted(): boolean;
  setDeleted(value: boolean): USERS;
  hasDeleted(): boolean;
  clearDeleted(): USERS;

  getSiteCode(): number;
  setSiteCode(value: number): USERS;
  hasSiteCode(): boolean;
  clearSiteCode(): USERS;

  getMobileNo(): string;
  setMobileNo(value: string): USERS;
  hasMobileNo(): boolean;
  clearMobileNo(): USERS;

  getSuperuser(): boolean;
  setSuperuser(value: boolean): USERS;
  hasSuperuser(): boolean;
  clearSuperuser(): USERS;

  getProfileIdList(): Array<ProfileId>;
  setProfileIdList(value: Array<ProfileId>): USERS;
  clearProfileIdList(): USERS;
  addProfileId(value?: ProfileId, index?: number): ProfileId;

  getUserStationsList(): Array<USER_STATIONS>;
  setUserStationsList(value: Array<USER_STATIONS>): USERS;
  clearUserStationsList(): USERS;
  addUserStations(value?: USER_STATIONS, index?: number): USER_STATIONS;

  getAllPermissions(): AUTH_ALL_PERMISSIONS | undefined;
  setAllPermissions(value?: AUTH_ALL_PERMISSIONS): USERS;
  hasAllPermissions(): boolean;
  clearAllPermissions(): USERS;

  getCul(): number;
  setCul(value: number): USERS;
  hasCul(): boolean;
  clearCul(): USERS;

  getCulDate(): date_pb.MasDateTime | undefined;
  setCulDate(value?: date_pb.MasDateTime): USERS;
  hasCulDate(): boolean;
  clearCulDate(): USERS;

  getCula(): number;
  setCula(value: number): USERS;
  hasCula(): boolean;
  clearCula(): USERS;

  getSystemReports(): boolean;
  setSystemReports(value: boolean): USERS;
  hasSystemReports(): boolean;
  clearSystemReports(): USERS;

  getCrystalReports(): boolean;
  setCrystalReports(value: boolean): USERS;
  hasCrystalReports(): boolean;
  clearCrystalReports(): USERS;

  getCrmReports(): boolean;
  setCrmReports(value: boolean): USERS;
  hasCrmReports(): boolean;
  clearCrmReports(): USERS;

  getGeneralReport(): boolean;
  setGeneralReport(value: boolean): USERS;
  hasGeneralReport(): boolean;
  clearGeneralReport(): USERS;

  getAppReport(): boolean;
  setAppReport(value: boolean): USERS;
  hasAppReport(): boolean;
  clearAppReport(): USERS;

  getAccessConstraint(): string;
  setAccessConstraint(value: string): USERS;
  hasAccessConstraint(): boolean;
  clearAccessConstraint(): USERS;

  getCduCommite(): boolean;
  setCduCommite(value: boolean): USERS;
  hasCduCommite(): boolean;
  clearCduCommite(): USERS;

  getCduEdit(): boolean;
  setCduEdit(value: boolean): USERS;
  hasCduEdit(): boolean;
  clearCduEdit(): USERS;

  getCduVerify(): boolean;
  setCduVerify(value: boolean): USERS;
  hasCduVerify(): boolean;
  clearCduVerify(): USERS;

  getCduApprove(): boolean;
  setCduApprove(value: boolean): USERS;
  hasCduApprove(): boolean;
  clearCduApprove(): USERS;

  getCduReports(): boolean;
  setCduReports(value: boolean): USERS;
  hasCduReports(): boolean;
  clearCduReports(): USERS;

  getCduDashborad(): boolean;
  setCduDashborad(value: boolean): USERS;
  hasCduDashborad(): boolean;
  clearCduDashborad(): USERS;

  getCduVerifyKhelsa(): boolean;
  setCduVerifyKhelsa(value: boolean): USERS;
  hasCduVerifyKhelsa(): boolean;
  clearCduVerifyKhelsa(): USERS;

  getCduApproveKhelsa(): boolean;
  setCduApproveKhelsa(value: boolean): USERS;
  hasCduApproveKhelsa(): boolean;
  clearCduApproveKhelsa(): USERS;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): USERS;
  hasStampDate(): boolean;
  clearStampDate(): USERS;

  getStampUser(): string;
  setStampUser(value: string): USERS;
  hasStampUser(): boolean;
  clearStampUser(): USERS;

  getAllowGovCollection(): boolean;
  setAllowGovCollection(value: boolean): USERS;
  hasAllowGovCollection(): boolean;
  clearAllowGovCollection(): USERS;

  getAllowMeterStatusChange(): boolean;
  setAllowMeterStatusChange(value: boolean): USERS;
  hasAllowMeterStatusChange(): boolean;
  clearAllowMeterStatusChange(): USERS;

  getAllowEstimConsump(): boolean;
  setAllowEstimConsump(value: boolean): USERS;
  hasAllowEstimConsump(): boolean;
  clearAllowEstimConsump(): USERS;

  getAllowCustomerResequence(): boolean;
  setAllowCustomerResequence(value: boolean): USERS;
  hasAllowCustomerResequence(): boolean;
  clearAllowCustomerResequence(): USERS;

  getAllowTaxPush(): boolean;
  setAllowTaxPush(value: boolean): USERS;
  hasAllowTaxPush(): boolean;
  clearAllowTaxPush(): USERS;

  getEmpManagement(): boolean;
  setEmpManagement(value: boolean): USERS;
  hasEmpManagement(): boolean;
  clearEmpManagement(): USERS;

  getWalkcAssignment(): boolean;
  setWalkcAssignment(value: boolean): USERS;
  hasWalkcAssignment(): boolean;
  clearWalkcAssignment(): USERS;

  getWalkrAssignment(): boolean;
  setWalkrAssignment(value: boolean): USERS;
  hasWalkrAssignment(): boolean;
  clearWalkrAssignment(): USERS;

  getPrinterType(): string;
  setPrinterType(value: string): USERS;
  hasPrinterType(): boolean;
  clearPrinterType(): USERS;

  getUserProfileImage(): string;
  setUserProfileImage(value: string): USERS;
  hasUserProfileImage(): boolean;
  clearUserProfileImage(): USERS;

  getDepartmentsList(): Array<DEPARTMENTS>;
  setDepartmentsList(value: Array<DEPARTMENTS>): USERS;
  clearDepartmentsList(): USERS;
  addDepartments(value?: DEPARTMENTS, index?: number): DEPARTMENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USERS.AsObject;
  static toObject(includeInstance: boolean, msg: USERS): USERS.AsObject;
  static serializeBinaryToWriter(message: USERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USERS;
  static deserializeBinaryFromReader(message: USERS, reader: jspb.BinaryReader): USERS;
}

export namespace USERS {
  export type AsObject = {
    id: number,
    stationNo?: number,
    fullName?: string,
    userName?: string,
    password?: string,
    sysAdmin?: boolean,
    readingAdmin?: boolean,
    collectionAdmin?: boolean,
    reporingAdmin?: boolean,
    hhMonitor?: boolean,
    userManagement?: boolean,
    dataAdmin?: boolean,
    systemMntinance?: boolean,
    nid?: string,
    email?: string,
    allowCollection?: boolean,
    allowModifyReading?: boolean,
    allowDeposit?: boolean,
    aloowCancel?: boolean,
    allowReporting?: boolean,
    isEnc?: ENCRYPTION,
    allowCompensation?: boolean,
    allowCancel?: boolean,
    mapReading?: boolean,
    mapCollection?: boolean,
    mapLocation?: boolean,
    mapPath?: boolean,
    mapComplaints?: boolean,
    mapBadConn?: boolean,
    walkArrangePost?: boolean,
    updateCustomerLocation?: boolean,
    allowCancelDepCol?: boolean,
    allowRecolCancel?: boolean,
    allowMaps?: boolean,
    allowLoaddataC?: boolean,
    allowLoaddataR?: boolean,
    isCashier?: boolean,
    cashierId?: number,
    allowMeterModify?: boolean,
    allowGard?: boolean,
    resendCollection?: boolean,
    resendReading?: boolean,
    closeCollection?: boolean,
    closeReading?: boolean,
    collectionDiscount?: boolean,
    refreshBillsData?: boolean,
    calculateDueAmount?: boolean,
    collectBillSinglUint?: boolean,
    printPaymentRequest?: boolean,
    partialCollection?: boolean,
    alonePanel?: boolean,
    refreshCustomerBills?: boolean,
    edamsRecalcNew?: boolean,
    allowFawryOpen?: boolean,
    allowFawryClose?: boolean,
    allowModifyPrevReading?: boolean,
    listCollection?: boolean,
    marketing?: boolean,
    prepearHafza?: boolean,
    cashBox?: boolean,
    pb_switch?: boolean,
    uflag?: boolean,
    portal?: boolean,
    survey?: boolean,
    reports?: boolean,
    dashboard?: boolean,
    query?: boolean,
    deviceManagment?: boolean,
    sync?: boolean,
    cancelBill?: boolean,
    cancelDelivery?: boolean,
    department?: number,
    allowCustMod?: boolean,
    allowEstimReading?: boolean,
    allowBatchEstimReading?: boolean,
    createApplication?: boolean,
    biller?: boolean,
    cancelApplication?: boolean,
    editApplication?: boolean,
    deleteApplication?: boolean,
    presentCancelBill?: boolean,
    closedApplication?: boolean,
    isactive?: boolean,
    deleted?: boolean,
    siteCode?: number,
    mobileNo?: string,
    superuser?: boolean,
    profileIdList: Array<ProfileId.AsObject>,
    userStationsList: Array<USER_STATIONS.AsObject>,
    allPermissions?: AUTH_ALL_PERMISSIONS.AsObject,
    cul?: number,
    culDate?: date_pb.MasDateTime.AsObject,
    cula?: number,
    systemReports?: boolean,
    crystalReports?: boolean,
    crmReports?: boolean,
    generalReport?: boolean,
    appReport?: boolean,
    accessConstraint?: string,
    cduCommite?: boolean,
    cduEdit?: boolean,
    cduVerify?: boolean,
    cduApprove?: boolean,
    cduReports?: boolean,
    cduDashborad?: boolean,
    cduVerifyKhelsa?: boolean,
    cduApproveKhelsa?: boolean,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    allowGovCollection?: boolean,
    allowMeterStatusChange?: boolean,
    allowEstimConsump?: boolean,
    allowCustomerResequence?: boolean,
    allowTaxPush?: boolean,
    empManagement?: boolean,
    walkcAssignment?: boolean,
    walkrAssignment?: boolean,
    printerType?: string,
    userProfileImage?: string,
    departmentsList: Array<DEPARTMENTS.AsObject>,
  }
}

export class UserArry extends jspb.Message {
  getUserIdList(): Array<GetUserRequest>;
  setUserIdList(value: Array<GetUserRequest>): UserArry;
  clearUserIdList(): UserArry;
  addUserId(value?: GetUserRequest, index?: number): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserArry.AsObject;
  static toObject(includeInstance: boolean, msg: UserArry): UserArry.AsObject;
  static serializeBinaryToWriter(message: UserArry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserArry;
  static deserializeBinaryFromReader(message: UserArry, reader: jspb.BinaryReader): UserArry;
}

export namespace UserArry {
  export type AsObject = {
    userIdList: Array<GetUserRequest.AsObject>,
  }
}

export class ProfileId extends jspb.Message {
  getProfilesId(): number;
  setProfilesId(value: number): ProfileId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileId.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileId): ProfileId.AsObject;
  static serializeBinaryToWriter(message: ProfileId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileId;
  static deserializeBinaryFromReader(message: ProfileId, reader: jspb.BinaryReader): ProfileId;
}

export namespace ProfileId {
  export type AsObject = {
    profilesId: number,
  }
}

export class DeleteProfileReq extends jspb.Message {
  getProfilesId(): number;
  setProfilesId(value: number): DeleteProfileReq;

  getDeletionReason(): string;
  setDeletionReason(value: string): DeleteProfileReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProfileReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProfileReq): DeleteProfileReq.AsObject;
  static serializeBinaryToWriter(message: DeleteProfileReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProfileReq;
  static deserializeBinaryFromReader(message: DeleteProfileReq, reader: jspb.BinaryReader): DeleteProfileReq;
}

export namespace DeleteProfileReq {
  export type AsObject = {
    profilesId: number,
    deletionReason: string,
  }
}

export class AUTH_PROFILES extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_PROFILES;
  hasProfileId(): boolean;
  clearProfileId(): AUTH_PROFILES;

  getName(): string;
  setName(value: string): AUTH_PROFILES;

  getDescription(): string;
  setDescription(value: string): AUTH_PROFILES;
  hasDescription(): boolean;
  clearDescription(): AUTH_PROFILES;

  getDeleted(): boolean;
  setDeleted(value: boolean): AUTH_PROFILES;
  hasDeleted(): boolean;
  clearDeleted(): AUTH_PROFILES;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): AUTH_PROFILES;
  hasStampDate(): boolean;
  clearStampDate(): AUTH_PROFILES;

  getStampUser(): string;
  setStampUser(value: string): AUTH_PROFILES;
  hasStampUser(): boolean;
  clearStampUser(): AUTH_PROFILES;

  getIsActive(): boolean;
  setIsActive(value: boolean): AUTH_PROFILES;
  hasIsActive(): boolean;
  clearIsActive(): AUTH_PROFILES;

  getDeletionReason(): string;
  setDeletionReason(value: string): AUTH_PROFILES;
  hasDeletionReason(): boolean;
  clearDeletionReason(): AUTH_PROFILES;

  getAllPermissions(): AUTH_ALL_PERMISSIONS | undefined;
  setAllPermissions(value?: AUTH_ALL_PERMISSIONS): AUTH_PROFILES;
  hasAllPermissions(): boolean;
  clearAllPermissions(): AUTH_PROFILES;

  getUsersCount(): number;
  setUsersCount(value: number): AUTH_PROFILES;
  hasUsersCount(): boolean;
  clearUsersCount(): AUTH_PROFILES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_PROFILES.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_PROFILES): AUTH_PROFILES.AsObject;
  static serializeBinaryToWriter(message: AUTH_PROFILES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_PROFILES;
  static deserializeBinaryFromReader(message: AUTH_PROFILES, reader: jspb.BinaryReader): AUTH_PROFILES;
}

export namespace AUTH_PROFILES {
  export type AsObject = {
    profileId?: number,
    name: string,
    description?: string,
    deleted?: boolean,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
    isActive?: boolean,
    deletionReason?: string,
    allPermissions?: AUTH_ALL_PERMISSIONS.AsObject,
    usersCount?: number,
  }
}

export class All_PROFILES extends jspb.Message {
  getAllProfilesList(): Array<AUTH_PROFILES>;
  setAllProfilesList(value: Array<AUTH_PROFILES>): All_PROFILES;
  clearAllProfilesList(): All_PROFILES;
  addAllProfiles(value?: AUTH_PROFILES, index?: number): AUTH_PROFILES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): All_PROFILES.AsObject;
  static toObject(includeInstance: boolean, msg: All_PROFILES): All_PROFILES.AsObject;
  static serializeBinaryToWriter(message: All_PROFILES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): All_PROFILES;
  static deserializeBinaryFromReader(message: All_PROFILES, reader: jspb.BinaryReader): All_PROFILES;
}

export namespace All_PROFILES {
  export type AsObject = {
    allProfilesList: Array<AUTH_PROFILES.AsObject>,
  }
}

export class AUTH_USERS_PROFILES extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_USERS_PROFILES;

  getUserId(): number;
  setUserId(value: number): AUTH_USERS_PROFILES;

  getIsActive(): boolean;
  setIsActive(value: boolean): AUTH_USERS_PROFILES;
  hasIsActive(): boolean;
  clearIsActive(): AUTH_USERS_PROFILES;

  getDeleted(): boolean;
  setDeleted(value: boolean): AUTH_USERS_PROFILES;
  hasDeleted(): boolean;
  clearDeleted(): AUTH_USERS_PROFILES;

  getStampDate(): date_pb.MasDateTime | undefined;
  setStampDate(value?: date_pb.MasDateTime): AUTH_USERS_PROFILES;
  hasStampDate(): boolean;
  clearStampDate(): AUTH_USERS_PROFILES;

  getStampUser(): string;
  setStampUser(value: string): AUTH_USERS_PROFILES;
  hasStampUser(): boolean;
  clearStampUser(): AUTH_USERS_PROFILES;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_USERS_PROFILES.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_USERS_PROFILES): AUTH_USERS_PROFILES.AsObject;
  static serializeBinaryToWriter(message: AUTH_USERS_PROFILES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_USERS_PROFILES;
  static deserializeBinaryFromReader(message: AUTH_USERS_PROFILES, reader: jspb.BinaryReader): AUTH_USERS_PROFILES;
}

export namespace AUTH_USERS_PROFILES {
  export type AsObject = {
    profileId: number,
    userId: number,
    isActive?: boolean,
    deleted?: boolean,
    stampDate?: date_pb.MasDateTime.AsObject,
    stampUser?: string,
  }
}

export class AddProfilesRequest extends jspb.Message {
  getProfile(): AUTH_PROFILES | undefined;
  setProfile(value?: AUTH_PROFILES): AddProfilesRequest;
  hasProfile(): boolean;
  clearProfile(): AddProfilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddProfilesRequest): AddProfilesRequest.AsObject;
  static serializeBinaryToWriter(message: AddProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProfilesRequest;
  static deserializeBinaryFromReader(message: AddProfilesRequest, reader: jspb.BinaryReader): AddProfilesRequest;
}

export namespace AddProfilesRequest {
  export type AsObject = {
    profile?: AUTH_PROFILES.AsObject,
  }
}

export class UserToProfileRq extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserToProfileRq;

  getProfileId(): number;
  setProfileId(value: number): UserToProfileRq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserToProfileRq.AsObject;
  static toObject(includeInstance: boolean, msg: UserToProfileRq): UserToProfileRq.AsObject;
  static serializeBinaryToWriter(message: UserToProfileRq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserToProfileRq;
  static deserializeBinaryFromReader(message: UserToProfileRq, reader: jspb.BinaryReader): UserToProfileRq;
}

export namespace UserToProfileRq {
  export type AsObject = {
    userId: number,
    profileId: number,
  }
}

export class AUTH_ALL_PERMISSIONS extends jspb.Message {
  getCashbox(): CASHBOX_PERMISSIONS | undefined;
  setCashbox(value?: CASHBOX_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasCashbox(): boolean;
  clearCashbox(): AUTH_ALL_PERMISSIONS;

  getCrm(): CRM_PERMISSIONS | undefined;
  setCrm(value?: CRM_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasCrm(): boolean;
  clearCrm(): AUTH_ALL_PERMISSIONS;

  getAuth(): AUTH_PERMISSIONS | undefined;
  setAuth(value?: AUTH_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasAuth(): boolean;
  clearAuth(): AUTH_ALL_PERMISSIONS;

  getPaymentgetway(): PAYMENTGETWAY_PERMISSIONS | undefined;
  setPaymentgetway(value?: PAYMENTGETWAY_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasPaymentgetway(): boolean;
  clearPaymentgetway(): AUTH_ALL_PERMISSIONS;

  getCdu(): CDU_PERMISSIONS | undefined;
  setCdu(value?: CDU_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasCdu(): boolean;
  clearCdu(): AUTH_ALL_PERMISSIONS;

  getBi(): BI_PERMISSIONS | undefined;
  setBi(value?: BI_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasBi(): boolean;
  clearBi(): AUTH_ALL_PERMISSIONS;

  getBpm(): BPM_PERMISSIONS | undefined;
  setBpm(value?: BPM_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasBpm(): boolean;
  clearBpm(): AUTH_ALL_PERMISSIONS;

  getPortal(): PORTAL_PERMISSIONS | undefined;
  setPortal(value?: PORTAL_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasPortal(): boolean;
  clearPortal(): AUTH_ALL_PERMISSIONS;

  getGeneral(): GENERAL_PERMISSIONS | undefined;
  setGeneral(value?: GENERAL_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasGeneral(): boolean;
  clearGeneral(): AUTH_ALL_PERMISSIONS;

  getBiller(): BILLER_PERMISSIONS | undefined;
  setBiller(value?: BILLER_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasBiller(): boolean;
  clearBiller(): AUTH_ALL_PERMISSIONS;

  getBilling(): BILLING_PERMISSIONS | undefined;
  setBilling(value?: BILLING_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasBilling(): boolean;
  clearBilling(): AUTH_ALL_PERMISSIONS;

  getTax(): TAX_PERMISSIONS | undefined;
  setTax(value?: TAX_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasTax(): boolean;
  clearTax(): AUTH_ALL_PERMISSIONS;

  getMas(): MAS_PERMISSIONS | undefined;
  setMas(value?: MAS_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasMas(): boolean;
  clearMas(): AUTH_ALL_PERMISSIONS;

  getGov(): GOV_PERMISSIONS | undefined;
  setGov(value?: GOV_PERMISSIONS): AUTH_ALL_PERMISSIONS;
  hasGov(): boolean;
  clearGov(): AUTH_ALL_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_ALL_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_ALL_PERMISSIONS): AUTH_ALL_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_ALL_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_ALL_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_ALL_PERMISSIONS, reader: jspb.BinaryReader): AUTH_ALL_PERMISSIONS;
}

export namespace AUTH_ALL_PERMISSIONS {
  export type AsObject = {
    cashbox?: CASHBOX_PERMISSIONS.AsObject,
    crm?: CRM_PERMISSIONS.AsObject,
    auth?: AUTH_PERMISSIONS.AsObject,
    paymentgetway?: PAYMENTGETWAY_PERMISSIONS.AsObject,
    cdu?: CDU_PERMISSIONS.AsObject,
    bi?: BI_PERMISSIONS.AsObject,
    bpm?: BPM_PERMISSIONS.AsObject,
    portal?: PORTAL_PERMISSIONS.AsObject,
    general?: GENERAL_PERMISSIONS.AsObject,
    biller?: BILLER_PERMISSIONS.AsObject,
    billing?: BILLING_PERMISSIONS.AsObject,
    tax?: TAX_PERMISSIONS.AsObject,
    mas?: MAS_PERMISSIONS.AsObject,
    gov?: GOV_PERMISSIONS.AsObject,
  }
}

export class AUTH_CASHBOX_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_CASHBOX_PERMISSIONS;

  getCashbox(): CASHBOX_PERMISSIONS | undefined;
  setCashbox(value?: CASHBOX_PERMISSIONS): AUTH_CASHBOX_PERMISSIONS;
  hasCashbox(): boolean;
  clearCashbox(): AUTH_CASHBOX_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_CASHBOX_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_CASHBOX_PERMISSIONS): AUTH_CASHBOX_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_CASHBOX_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_CASHBOX_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_CASHBOX_PERMISSIONS, reader: jspb.BinaryReader): AUTH_CASHBOX_PERMISSIONS;
}

export namespace AUTH_CASHBOX_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    cashbox?: CASHBOX_PERMISSIONS.AsObject,
  }
}

export class AUTH_CRM_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_CRM_PERMISSIONS;

  getCrm(): CRM_PERMISSIONS | undefined;
  setCrm(value?: CRM_PERMISSIONS): AUTH_CRM_PERMISSIONS;
  hasCrm(): boolean;
  clearCrm(): AUTH_CRM_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_CRM_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_CRM_PERMISSIONS): AUTH_CRM_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_CRM_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_CRM_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_CRM_PERMISSIONS, reader: jspb.BinaryReader): AUTH_CRM_PERMISSIONS;
}

export namespace AUTH_CRM_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    crm?: CRM_PERMISSIONS.AsObject,
  }
}

export class AUTH_OWN_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_OWN_PERMISSIONS;

  getAuth(): AUTH_PERMISSIONS | undefined;
  setAuth(value?: AUTH_PERMISSIONS): AUTH_OWN_PERMISSIONS;
  hasAuth(): boolean;
  clearAuth(): AUTH_OWN_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_OWN_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_OWN_PERMISSIONS): AUTH_OWN_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_OWN_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_OWN_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_OWN_PERMISSIONS, reader: jspb.BinaryReader): AUTH_OWN_PERMISSIONS;
}

export namespace AUTH_OWN_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    auth?: AUTH_PERMISSIONS.AsObject,
  }
}

export class AUTH_PAYMENTGETWAY_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_PAYMENTGETWAY_PERMISSIONS;

  getPaymentgetway(): PAYMENTGETWAY_PERMISSIONS | undefined;
  setPaymentgetway(value?: PAYMENTGETWAY_PERMISSIONS): AUTH_PAYMENTGETWAY_PERMISSIONS;
  hasPaymentgetway(): boolean;
  clearPaymentgetway(): AUTH_PAYMENTGETWAY_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_PAYMENTGETWAY_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_PAYMENTGETWAY_PERMISSIONS): AUTH_PAYMENTGETWAY_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_PAYMENTGETWAY_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_PAYMENTGETWAY_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_PAYMENTGETWAY_PERMISSIONS, reader: jspb.BinaryReader): AUTH_PAYMENTGETWAY_PERMISSIONS;
}

export namespace AUTH_PAYMENTGETWAY_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    paymentgetway?: PAYMENTGETWAY_PERMISSIONS.AsObject,
  }
}

export class AUTH_CDU_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_CDU_PERMISSIONS;

  getCdu(): CDU_PERMISSIONS | undefined;
  setCdu(value?: CDU_PERMISSIONS): AUTH_CDU_PERMISSIONS;
  hasCdu(): boolean;
  clearCdu(): AUTH_CDU_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_CDU_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_CDU_PERMISSIONS): AUTH_CDU_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_CDU_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_CDU_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_CDU_PERMISSIONS, reader: jspb.BinaryReader): AUTH_CDU_PERMISSIONS;
}

export namespace AUTH_CDU_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    cdu?: CDU_PERMISSIONS.AsObject,
  }
}

export class AUTH_BI_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_BI_PERMISSIONS;

  getBi(): BI_PERMISSIONS | undefined;
  setBi(value?: BI_PERMISSIONS): AUTH_BI_PERMISSIONS;
  hasBi(): boolean;
  clearBi(): AUTH_BI_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_BI_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_BI_PERMISSIONS): AUTH_BI_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_BI_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_BI_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_BI_PERMISSIONS, reader: jspb.BinaryReader): AUTH_BI_PERMISSIONS;
}

export namespace AUTH_BI_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    bi?: BI_PERMISSIONS.AsObject,
  }
}

export class AUTH_BPM_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_BPM_PERMISSIONS;

  getBpm(): BPM_PERMISSIONS | undefined;
  setBpm(value?: BPM_PERMISSIONS): AUTH_BPM_PERMISSIONS;
  hasBpm(): boolean;
  clearBpm(): AUTH_BPM_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_BPM_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_BPM_PERMISSIONS): AUTH_BPM_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_BPM_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_BPM_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_BPM_PERMISSIONS, reader: jspb.BinaryReader): AUTH_BPM_PERMISSIONS;
}

export namespace AUTH_BPM_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    bpm?: BPM_PERMISSIONS.AsObject,
  }
}

export class AUTH_PORTAL_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_PORTAL_PERMISSIONS;

  getPortal(): PORTAL_PERMISSIONS | undefined;
  setPortal(value?: PORTAL_PERMISSIONS): AUTH_PORTAL_PERMISSIONS;
  hasPortal(): boolean;
  clearPortal(): AUTH_PORTAL_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_PORTAL_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_PORTAL_PERMISSIONS): AUTH_PORTAL_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_PORTAL_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_PORTAL_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_PORTAL_PERMISSIONS, reader: jspb.BinaryReader): AUTH_PORTAL_PERMISSIONS;
}

export namespace AUTH_PORTAL_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    portal?: PORTAL_PERMISSIONS.AsObject,
  }
}

export class AUTH_GENERAL_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_GENERAL_PERMISSIONS;

  getGeneral(): GENERAL_PERMISSIONS | undefined;
  setGeneral(value?: GENERAL_PERMISSIONS): AUTH_GENERAL_PERMISSIONS;
  hasGeneral(): boolean;
  clearGeneral(): AUTH_GENERAL_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_GENERAL_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_GENERAL_PERMISSIONS): AUTH_GENERAL_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_GENERAL_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_GENERAL_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_GENERAL_PERMISSIONS, reader: jspb.BinaryReader): AUTH_GENERAL_PERMISSIONS;
}

export namespace AUTH_GENERAL_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    general?: GENERAL_PERMISSIONS.AsObject,
  }
}

export class AUTH_BILLER_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_BILLER_PERMISSIONS;

  getBiller(): BILLER_PERMISSIONS | undefined;
  setBiller(value?: BILLER_PERMISSIONS): AUTH_BILLER_PERMISSIONS;
  hasBiller(): boolean;
  clearBiller(): AUTH_BILLER_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_BILLER_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_BILLER_PERMISSIONS): AUTH_BILLER_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_BILLER_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_BILLER_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_BILLER_PERMISSIONS, reader: jspb.BinaryReader): AUTH_BILLER_PERMISSIONS;
}

export namespace AUTH_BILLER_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    biller?: BILLER_PERMISSIONS.AsObject,
  }
}

export class AUTH_BILLING_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_BILLING_PERMISSIONS;

  getBilling(): BILLING_PERMISSIONS | undefined;
  setBilling(value?: BILLING_PERMISSIONS): AUTH_BILLING_PERMISSIONS;
  hasBilling(): boolean;
  clearBilling(): AUTH_BILLING_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_BILLING_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_BILLING_PERMISSIONS): AUTH_BILLING_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_BILLING_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_BILLING_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_BILLING_PERMISSIONS, reader: jspb.BinaryReader): AUTH_BILLING_PERMISSIONS;
}

export namespace AUTH_BILLING_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    billing?: BILLING_PERMISSIONS.AsObject,
  }
}

export class AUTH_TAX_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_TAX_PERMISSIONS;

  getTax(): TAX_PERMISSIONS | undefined;
  setTax(value?: TAX_PERMISSIONS): AUTH_TAX_PERMISSIONS;
  hasTax(): boolean;
  clearTax(): AUTH_TAX_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_TAX_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_TAX_PERMISSIONS): AUTH_TAX_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_TAX_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_TAX_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_TAX_PERMISSIONS, reader: jspb.BinaryReader): AUTH_TAX_PERMISSIONS;
}

export namespace AUTH_TAX_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    tax?: TAX_PERMISSIONS.AsObject,
  }
}

export class AUTH_MAS_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_MAS_PERMISSIONS;

  getMas(): MAS_PERMISSIONS | undefined;
  setMas(value?: MAS_PERMISSIONS): AUTH_MAS_PERMISSIONS;
  hasMas(): boolean;
  clearMas(): AUTH_MAS_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_MAS_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_MAS_PERMISSIONS): AUTH_MAS_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_MAS_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_MAS_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_MAS_PERMISSIONS, reader: jspb.BinaryReader): AUTH_MAS_PERMISSIONS;
}

export namespace AUTH_MAS_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    mas?: MAS_PERMISSIONS.AsObject,
  }
}

export class AUTH_GOV_PERMISSIONS extends jspb.Message {
  getProfileId(): number;
  setProfileId(value: number): AUTH_GOV_PERMISSIONS;

  getGov(): GOV_PERMISSIONS | undefined;
  setGov(value?: GOV_PERMISSIONS): AUTH_GOV_PERMISSIONS;
  hasGov(): boolean;
  clearGov(): AUTH_GOV_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_GOV_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_GOV_PERMISSIONS): AUTH_GOV_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_GOV_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_GOV_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_GOV_PERMISSIONS, reader: jspb.BinaryReader): AUTH_GOV_PERMISSIONS;
}

export namespace AUTH_GOV_PERMISSIONS {
  export type AsObject = {
    profileId: number,
    gov?: GOV_PERMISSIONS.AsObject,
  }
}

export class CASHBOX_PERMISSIONS extends jspb.Message {
  getCashBox(): boolean;
  setCashBox(value: boolean): CASHBOX_PERMISSIONS;
  hasCashBox(): boolean;
  clearCashBox(): CASHBOX_PERMISSIONS;

  getCollectionAdmin(): boolean;
  setCollectionAdmin(value: boolean): CASHBOX_PERMISSIONS;
  hasCollectionAdmin(): boolean;
  clearCollectionAdmin(): CASHBOX_PERMISSIONS;

  getAllowCollection(): boolean;
  setAllowCollection(value: boolean): CASHBOX_PERMISSIONS;
  hasAllowCollection(): boolean;
  clearAllowCollection(): CASHBOX_PERMISSIONS;

  getIsCashier(): boolean;
  setIsCashier(value: boolean): CASHBOX_PERMISSIONS;
  hasIsCashier(): boolean;
  clearIsCashier(): CASHBOX_PERMISSIONS;

  getAllowCancel(): boolean;
  setAllowCancel(value: boolean): CASHBOX_PERMISSIONS;
  hasAllowCancel(): boolean;
  clearAllowCancel(): CASHBOX_PERMISSIONS;

  getAddCollectionDate(): boolean;
  setAddCollectionDate(value: boolean): CASHBOX_PERMISSIONS;
  hasAddCollectionDate(): boolean;
  clearAddCollectionDate(): CASHBOX_PERMISSIONS;

  getCashboxReports(): boolean;
  setCashboxReports(value: boolean): CASHBOX_PERMISSIONS;
  hasCashboxReports(): boolean;
  clearCashboxReports(): CASHBOX_PERMISSIONS;

  getSkipReceipt(): boolean;
  setSkipReceipt(value: boolean): CASHBOX_PERMISSIONS;
  hasSkipReceipt(): boolean;
  clearSkipReceipt(): CASHBOX_PERMISSIONS;

  getAllowPrintDamageReceipt(): boolean;
  setAllowPrintDamageReceipt(value: boolean): CASHBOX_PERMISSIONS;
  hasAllowPrintDamageReceipt(): boolean;
  clearAllowPrintDamageReceipt(): CASHBOX_PERMISSIONS;

  getCancelReceipt(): boolean;
  setCancelReceipt(value: boolean): CASHBOX_PERMISSIONS;
  hasCancelReceipt(): boolean;
  clearCancelReceipt(): CASHBOX_PERMISSIONS;

  getCancelPayment(): boolean;
  setCancelPayment(value: boolean): CASHBOX_PERMISSIONS;
  hasCancelPayment(): boolean;
  clearCancelPayment(): CASHBOX_PERMISSIONS;

  getCrudCashboxes(): boolean;
  setCrudCashboxes(value: boolean): CASHBOX_PERMISSIONS;
  hasCrudCashboxes(): boolean;
  clearCrudCashboxes(): CASHBOX_PERMISSIONS;

  getCashairRePrintReceipt(): boolean;
  setCashairRePrintReceipt(value: boolean): CASHBOX_PERMISSIONS;
  hasCashairRePrintReceipt(): boolean;
  clearCashairRePrintReceipt(): CASHBOX_PERMISSIONS;

  getCashboxReview(): boolean;
  setCashboxReview(value: boolean): CASHBOX_PERMISSIONS;
  hasCashboxReview(): boolean;
  clearCashboxReview(): CASHBOX_PERMISSIONS;

  getEditReceiptDtl(): boolean;
  setEditReceiptDtl(value: boolean): CASHBOX_PERMISSIONS;
  hasEditReceiptDtl(): boolean;
  clearEditReceiptDtl(): CASHBOX_PERMISSIONS;

  getCloseCashboxSession(): boolean;
  setCloseCashboxSession(value: boolean): CASHBOX_PERMISSIONS;
  hasCloseCashboxSession(): boolean;
  clearCloseCashboxSession(): CASHBOX_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CASHBOX_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: CASHBOX_PERMISSIONS): CASHBOX_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: CASHBOX_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CASHBOX_PERMISSIONS;
  static deserializeBinaryFromReader(message: CASHBOX_PERMISSIONS, reader: jspb.BinaryReader): CASHBOX_PERMISSIONS;
}

export namespace CASHBOX_PERMISSIONS {
  export type AsObject = {
    cashBox?: boolean,
    collectionAdmin?: boolean,
    allowCollection?: boolean,
    isCashier?: boolean,
    allowCancel?: boolean,
    addCollectionDate?: boolean,
    cashboxReports?: boolean,
    skipReceipt?: boolean,
    allowPrintDamageReceipt?: boolean,
    cancelReceipt?: boolean,
    cancelPayment?: boolean,
    crudCashboxes?: boolean,
    cashairRePrintReceipt?: boolean,
    cashboxReview?: boolean,
    editReceiptDtl?: boolean,
    closeCashboxSession?: boolean,
  }
}

export class CRM_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): CRM_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): CRM_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CRM_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: CRM_PERMISSIONS): CRM_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: CRM_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CRM_PERMISSIONS;
  static deserializeBinaryFromReader(message: CRM_PERMISSIONS, reader: jspb.BinaryReader): CRM_PERMISSIONS;
}

export namespace CRM_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
  }
}

export class AUTH_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): AUTH_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): AUTH_PERMISSIONS;

  getEditUser(): boolean;
  setEditUser(value: boolean): AUTH_PERMISSIONS;
  hasEditUser(): boolean;
  clearEditUser(): AUTH_PERMISSIONS;

  getDeleteUser(): boolean;
  setDeleteUser(value: boolean): AUTH_PERMISSIONS;
  hasDeleteUser(): boolean;
  clearDeleteUser(): AUTH_PERMISSIONS;

  getProfileAdmin(): boolean;
  setProfileAdmin(value: boolean): AUTH_PERMISSIONS;
  hasProfileAdmin(): boolean;
  clearProfileAdmin(): AUTH_PERMISSIONS;

  getEditProfile(): boolean;
  setEditProfile(value: boolean): AUTH_PERMISSIONS;
  hasEditProfile(): boolean;
  clearEditProfile(): AUTH_PERMISSIONS;

  getDeleteProfile(): boolean;
  setDeleteProfile(value: boolean): AUTH_PERMISSIONS;
  hasDeleteProfile(): boolean;
  clearDeleteProfile(): AUTH_PERMISSIONS;

  getDepartment(): boolean;
  setDepartment(value: boolean): AUTH_PERMISSIONS;
  hasDepartment(): boolean;
  clearDepartment(): AUTH_PERMISSIONS;

  getEditDepartment(): boolean;
  setEditDepartment(value: boolean): AUTH_PERMISSIONS;
  hasEditDepartment(): boolean;
  clearEditDepartment(): AUTH_PERMISSIONS;

  getDeleteDepartment(): boolean;
  setDeleteDepartment(value: boolean): AUTH_PERMISSIONS;
  hasDeleteDepartment(): boolean;
  clearDeleteDepartment(): AUTH_PERMISSIONS;

  getTaxClientId(): boolean;
  setTaxClientId(value: boolean): AUTH_PERMISSIONS;
  hasTaxClientId(): boolean;
  clearTaxClientId(): AUTH_PERMISSIONS;

  getEditTaxClientId(): boolean;
  setEditTaxClientId(value: boolean): AUTH_PERMISSIONS;
  hasEditTaxClientId(): boolean;
  clearEditTaxClientId(): AUTH_PERMISSIONS;

  getDeleteTaxClientId(): boolean;
  setDeleteTaxClientId(value: boolean): AUTH_PERMISSIONS;
  hasDeleteTaxClientId(): boolean;
  clearDeleteTaxClientId(): AUTH_PERMISSIONS;

  getDeleteLinkedProfile(): boolean;
  setDeleteLinkedProfile(value: boolean): AUTH_PERMISSIONS;
  hasDeleteLinkedProfile(): boolean;
  clearDeleteLinkedProfile(): AUTH_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_PERMISSIONS): AUTH_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: AUTH_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_PERMISSIONS;
  static deserializeBinaryFromReader(message: AUTH_PERMISSIONS, reader: jspb.BinaryReader): AUTH_PERMISSIONS;
}

export namespace AUTH_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
    editUser?: boolean,
    deleteUser?: boolean,
    profileAdmin?: boolean,
    editProfile?: boolean,
    deleteProfile?: boolean,
    department?: boolean,
    editDepartment?: boolean,
    deleteDepartment?: boolean,
    taxClientId?: boolean,
    editTaxClientId?: boolean,
    deleteTaxClientId?: boolean,
    deleteLinkedProfile?: boolean,
  }
}

export class PAYMENTGETWAY_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): PAYMENTGETWAY_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): PAYMENTGETWAY_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAYMENTGETWAY_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: PAYMENTGETWAY_PERMISSIONS): PAYMENTGETWAY_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: PAYMENTGETWAY_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAYMENTGETWAY_PERMISSIONS;
  static deserializeBinaryFromReader(message: PAYMENTGETWAY_PERMISSIONS, reader: jspb.BinaryReader): PAYMENTGETWAY_PERMISSIONS;
}

export namespace PAYMENTGETWAY_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
  }
}

export class CDU_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): CDU_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): CDU_PERMISSIONS;

  getCduCommite(): boolean;
  setCduCommite(value: boolean): CDU_PERMISSIONS;
  hasCduCommite(): boolean;
  clearCduCommite(): CDU_PERMISSIONS;

  getCduEdit(): boolean;
  setCduEdit(value: boolean): CDU_PERMISSIONS;
  hasCduEdit(): boolean;
  clearCduEdit(): CDU_PERMISSIONS;

  getCduVerify(): boolean;
  setCduVerify(value: boolean): CDU_PERMISSIONS;
  hasCduVerify(): boolean;
  clearCduVerify(): CDU_PERMISSIONS;

  getCduApprove(): boolean;
  setCduApprove(value: boolean): CDU_PERMISSIONS;
  hasCduApprove(): boolean;
  clearCduApprove(): CDU_PERMISSIONS;

  getCduReports(): boolean;
  setCduReports(value: boolean): CDU_PERMISSIONS;
  hasCduReports(): boolean;
  clearCduReports(): CDU_PERMISSIONS;

  getCduDashborad(): boolean;
  setCduDashborad(value: boolean): CDU_PERMISSIONS;
  hasCduDashborad(): boolean;
  clearCduDashborad(): CDU_PERMISSIONS;

  getCduVerifyKhelsa(): boolean;
  setCduVerifyKhelsa(value: boolean): CDU_PERMISSIONS;
  hasCduVerifyKhelsa(): boolean;
  clearCduVerifyKhelsa(): CDU_PERMISSIONS;

  getCduApproveKhelsa(): boolean;
  setCduApproveKhelsa(value: boolean): CDU_PERMISSIONS;
  hasCduApproveKhelsa(): boolean;
  clearCduApproveKhelsa(): CDU_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CDU_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: CDU_PERMISSIONS): CDU_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: CDU_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CDU_PERMISSIONS;
  static deserializeBinaryFromReader(message: CDU_PERMISSIONS, reader: jspb.BinaryReader): CDU_PERMISSIONS;
}

export namespace CDU_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
    cduCommite?: boolean,
    cduEdit?: boolean,
    cduVerify?: boolean,
    cduApprove?: boolean,
    cduReports?: boolean,
    cduDashborad?: boolean,
    cduVerifyKhelsa?: boolean,
    cduApproveKhelsa?: boolean,
  }
}

export class BI_PERMISSIONS extends jspb.Message {
  getQueryMas(): boolean;
  setQueryMas(value: boolean): BI_PERMISSIONS;
  hasQueryMas(): boolean;
  clearQueryMas(): BI_PERMISSIONS;

  getQueryTax(): boolean;
  setQueryTax(value: boolean): BI_PERMISSIONS;
  hasQueryTax(): boolean;
  clearQueryTax(): BI_PERMISSIONS;

  getQueryBiling(): boolean;
  setQueryBiling(value: boolean): BI_PERMISSIONS;
  hasQueryBiling(): boolean;
  clearQueryBiling(): BI_PERMISSIONS;

  getQueryCrm(): boolean;
  setQueryCrm(value: boolean): BI_PERMISSIONS;
  hasQueryCrm(): boolean;
  clearQueryCrm(): BI_PERMISSIONS;

  getMasReports(): boolean;
  setMasReports(value: boolean): BI_PERMISSIONS;
  hasMasReports(): boolean;
  clearMasReports(): BI_PERMISSIONS;

  getBilingReports(): boolean;
  setBilingReports(value: boolean): BI_PERMISSIONS;
  hasBilingReports(): boolean;
  clearBilingReports(): BI_PERMISSIONS;

  getCrmReports(): boolean;
  setCrmReports(value: boolean): BI_PERMISSIONS;
  hasCrmReports(): boolean;
  clearCrmReports(): BI_PERMISSIONS;

  getTaxReports(): boolean;
  setTaxReports(value: boolean): BI_PERMISSIONS;
  hasTaxReports(): boolean;
  clearTaxReports(): BI_PERMISSIONS;

  getSystemReports(): boolean;
  setSystemReports(value: boolean): BI_PERMISSIONS;
  hasSystemReports(): boolean;
  clearSystemReports(): BI_PERMISSIONS;

  getCrystalReports(): boolean;
  setCrystalReports(value: boolean): BI_PERMISSIONS;
  hasCrystalReports(): boolean;
  clearCrystalReports(): BI_PERMISSIONS;

  getOtherReports(): boolean;
  setOtherReports(value: boolean): BI_PERMISSIONS;
  hasOtherReports(): boolean;
  clearOtherReports(): BI_PERMISSIONS;

  getReporingAdmin(): boolean;
  setReporingAdmin(value: boolean): BI_PERMISSIONS;
  hasReporingAdmin(): boolean;
  clearReporingAdmin(): BI_PERMISSIONS;

  getMainDashboard(): boolean;
  setMainDashboard(value: boolean): BI_PERMISSIONS;
  hasMainDashboard(): boolean;
  clearMainDashboard(): BI_PERMISSIONS;

  getDashboardMas(): boolean;
  setDashboardMas(value: boolean): BI_PERMISSIONS;
  hasDashboardMas(): boolean;
  clearDashboardMas(): BI_PERMISSIONS;

  getDashboardBpm(): boolean;
  setDashboardBpm(value: boolean): BI_PERMISSIONS;
  hasDashboardBpm(): boolean;
  clearDashboardBpm(): BI_PERMISSIONS;

  getDashboardTax(): boolean;
  setDashboardTax(value: boolean): BI_PERMISSIONS;
  hasDashboardTax(): boolean;
  clearDashboardTax(): BI_PERMISSIONS;

  getDashboardCdu(): boolean;
  setDashboardCdu(value: boolean): BI_PERMISSIONS;
  hasDashboardCdu(): boolean;
  clearDashboardCdu(): BI_PERMISSIONS;

  getSensitiveData(): boolean;
  setSensitiveData(value: boolean): BI_PERMISSIONS;
  hasSensitiveData(): boolean;
  clearSensitiveData(): BI_PERMISSIONS;

  getDashboardEsdar(): boolean;
  setDashboardEsdar(value: boolean): BI_PERMISSIONS;
  hasDashboardEsdar(): boolean;
  clearDashboardEsdar(): BI_PERMISSIONS;

  getShowClientFile(): boolean;
  setShowClientFile(value: boolean): BI_PERMISSIONS;
  hasShowClientFile(): boolean;
  clearShowClientFile(): BI_PERMISSIONS;

  getLongSession(): boolean;
  setLongSession(value: boolean): BI_PERMISSIONS;
  hasLongSession(): boolean;
  clearLongSession(): BI_PERMISSIONS;

  getCeoDashboardPairStation(): boolean;
  setCeoDashboardPairStation(value: boolean): BI_PERMISSIONS;
  hasCeoDashboardPairStation(): boolean;
  clearCeoDashboardPairStation(): BI_PERMISSIONS;

  getCtoDashboard(): boolean;
  setCtoDashboard(value: boolean): BI_PERMISSIONS;
  hasCtoDashboard(): boolean;
  clearCtoDashboard(): BI_PERMISSIONS;

  getCtoDashboarPerStation(): boolean;
  setCtoDashboarPerStation(value: boolean): BI_PERMISSIONS;
  hasCtoDashboarPerStation(): boolean;
  clearCtoDashboarPerStation(): BI_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BI_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: BI_PERMISSIONS): BI_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: BI_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BI_PERMISSIONS;
  static deserializeBinaryFromReader(message: BI_PERMISSIONS, reader: jspb.BinaryReader): BI_PERMISSIONS;
}

export namespace BI_PERMISSIONS {
  export type AsObject = {
    queryMas?: boolean,
    queryTax?: boolean,
    queryBiling?: boolean,
    queryCrm?: boolean,
    masReports?: boolean,
    bilingReports?: boolean,
    crmReports?: boolean,
    taxReports?: boolean,
    systemReports?: boolean,
    crystalReports?: boolean,
    otherReports?: boolean,
    reporingAdmin?: boolean,
    mainDashboard?: boolean,
    dashboardMas?: boolean,
    dashboardBpm?: boolean,
    dashboardTax?: boolean,
    dashboardCdu?: boolean,
    sensitiveData?: boolean,
    dashboardEsdar?: boolean,
    showClientFile?: boolean,
    longSession?: boolean,
    ceoDashboardPairStation?: boolean,
    ctoDashboard?: boolean,
    ctoDashboarPerStation?: boolean,
  }
}

export class BPM_PERMISSIONS extends jspb.Message {
  getSuperuser(): boolean;
  setSuperuser(value: boolean): BPM_PERMISSIONS;
  hasSuperuser(): boolean;
  clearSuperuser(): BPM_PERMISSIONS;

  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): BPM_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): BPM_PERMISSIONS;

  getDashboard(): boolean;
  setDashboard(value: boolean): BPM_PERMISSIONS;
  hasDashboard(): boolean;
  clearDashboard(): BPM_PERMISSIONS;

  getCancelApplication(): boolean;
  setCancelApplication(value: boolean): BPM_PERMISSIONS;
  hasCancelApplication(): boolean;
  clearCancelApplication(): BPM_PERMISSIONS;

  getReports(): boolean;
  setReports(value: boolean): BPM_PERMISSIONS;
  hasReports(): boolean;
  clearReports(): BPM_PERMISSIONS;

  getSystemmNtinance(): boolean;
  setSystemmNtinance(value: boolean): BPM_PERMISSIONS;
  hasSystemmNtinance(): boolean;
  clearSystemmNtinance(): BPM_PERMISSIONS;

  getAppReport(): boolean;
  setAppReport(value: boolean): BPM_PERMISSIONS;
  hasAppReport(): boolean;
  clearAppReport(): BPM_PERMISSIONS;

  getGeneralReport(): boolean;
  setGeneralReport(value: boolean): BPM_PERMISSIONS;
  hasGeneralReport(): boolean;
  clearGeneralReport(): BPM_PERMISSIONS;

  getDashboardTotalmascollections(): boolean;
  setDashboardTotalmascollections(value: boolean): BPM_PERMISSIONS;
  hasDashboardTotalmascollections(): boolean;
  clearDashboardTotalmascollections(): BPM_PERMISSIONS;

  getDashboardTotalcrmcollections(): boolean;
  setDashboardTotalcrmcollections(value: boolean): BPM_PERMISSIONS;
  hasDashboardTotalcrmcollections(): boolean;
  clearDashboardTotalcrmcollections(): BPM_PERMISSIONS;

  getDashboardTotalsummascrm(): boolean;
  setDashboardTotalsummascrm(value: boolean): BPM_PERMISSIONS;
  hasDashboardTotalsummascrm(): boolean;
  clearDashboardTotalsummascrm(): BPM_PERMISSIONS;

  getDashboardCurrentappscount(): boolean;
  setDashboardCurrentappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardCurrentappscount(): boolean;
  clearDashboardCurrentappscount(): BPM_PERMISSIONS;

  getDashboradCanceledappscount(): boolean;
  setDashboradCanceledappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboradCanceledappscount(): boolean;
  clearDashboradCanceledappscount(): BPM_PERMISSIONS;

  getDashboardPendingappscount(): boolean;
  setDashboardPendingappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardPendingappscount(): boolean;
  clearDashboardPendingappscount(): BPM_PERMISSIONS;

  getDashboardRunningappscount(): boolean;
  setDashboardRunningappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardRunningappscount(): boolean;
  clearDashboardRunningappscount(): BPM_PERMISSIONS;

  getDashboardClosedappscount(): boolean;
  setDashboardClosedappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardClosedappscount(): boolean;
  clearDashboardClosedappscount(): BPM_PERMISSIONS;

  getDashboardRequireduserappscount(): boolean;
  setDashboardRequireduserappscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardRequireduserappscount(): boolean;
  clearDashboardRequireduserappscount(): BPM_PERMISSIONS;

  getDashboardUsertakeactionscount(): boolean;
  setDashboardUsertakeactionscount(value: boolean): BPM_PERMISSIONS;
  hasDashboardUsertakeactionscount(): boolean;
  clearDashboardUsertakeactionscount(): BPM_PERMISSIONS;

  getDashboardAveragedaysexecapp(): boolean;
  setDashboardAveragedaysexecapp(value: boolean): BPM_PERMISSIONS;
  hasDashboardAveragedaysexecapp(): boolean;
  clearDashboardAveragedaysexecapp(): BPM_PERMISSIONS;

  getDashboradTotalmonthcomparewithprev(): boolean;
  setDashboradTotalmonthcomparewithprev(value: boolean): BPM_PERMISSIONS;
  hasDashboradTotalmonthcomparewithprev(): boolean;
  clearDashboradTotalmonthcomparewithprev(): BPM_PERMISSIONS;

  getDashboardTotalincomeforapp(): boolean;
  setDashboardTotalincomeforapp(value: boolean): BPM_PERMISSIONS;
  hasDashboardTotalincomeforapp(): boolean;
  clearDashboardTotalincomeforapp(): BPM_PERMISSIONS;

  getDashboardCountsPersantagesdoneapps(): boolean;
  setDashboardCountsPersantagesdoneapps(value: boolean): BPM_PERMISSIONS;
  hasDashboardCountsPersantagesdoneapps(): boolean;
  clearDashboardCountsPersantagesdoneapps(): BPM_PERMISSIONS;

  getDashboardExecappspeedindicator(): boolean;
  setDashboardExecappspeedindicator(value: boolean): BPM_PERMISSIONS;
  hasDashboardExecappspeedindicator(): boolean;
  clearDashboardExecappspeedindicator(): BPM_PERMISSIONS;

  getCancelApps(): boolean;
  setCancelApps(value: boolean): BPM_PERMISSIONS;
  hasCancelApps(): boolean;
  clearCancelApps(): BPM_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BPM_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: BPM_PERMISSIONS): BPM_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: BPM_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BPM_PERMISSIONS;
  static deserializeBinaryFromReader(message: BPM_PERMISSIONS, reader: jspb.BinaryReader): BPM_PERMISSIONS;
}

export namespace BPM_PERMISSIONS {
  export type AsObject = {
    superuser?: boolean,
    sysAdmin?: boolean,
    dashboard?: boolean,
    cancelApplication?: boolean,
    reports?: boolean,
    systemmNtinance?: boolean,
    appReport?: boolean,
    generalReport?: boolean,
    dashboardTotalmascollections?: boolean,
    dashboardTotalcrmcollections?: boolean,
    dashboardTotalsummascrm?: boolean,
    dashboardCurrentappscount?: boolean,
    dashboradCanceledappscount?: boolean,
    dashboardPendingappscount?: boolean,
    dashboardRunningappscount?: boolean,
    dashboardClosedappscount?: boolean,
    dashboardRequireduserappscount?: boolean,
    dashboardUsertakeactionscount?: boolean,
    dashboardAveragedaysexecapp?: boolean,
    dashboradTotalmonthcomparewithprev?: boolean,
    dashboardTotalincomeforapp?: boolean,
    dashboardCountsPersantagesdoneapps?: boolean,
    dashboardExecappspeedindicator?: boolean,
    cancelApps?: boolean,
  }
}

export class PORTAL_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): PORTAL_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): PORTAL_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PORTAL_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: PORTAL_PERMISSIONS): PORTAL_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: PORTAL_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PORTAL_PERMISSIONS;
  static deserializeBinaryFromReader(message: PORTAL_PERMISSIONS, reader: jspb.BinaryReader): PORTAL_PERMISSIONS;
}

export namespace PORTAL_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
  }
}

export class GENERAL_PERMISSIONS extends jspb.Message {
  getAccessConstraint(): string;
  setAccessConstraint(value: string): GENERAL_PERMISSIONS;
  hasAccessConstraint(): boolean;
  clearAccessConstraint(): GENERAL_PERMISSIONS;

  getDashboard(): boolean;
  setDashboard(value: boolean): GENERAL_PERMISSIONS;
  hasDashboard(): boolean;
  clearDashboard(): GENERAL_PERMISSIONS;

  getQuery(): boolean;
  setQuery(value: boolean): GENERAL_PERMISSIONS;
  hasQuery(): boolean;
  clearQuery(): GENERAL_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GENERAL_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: GENERAL_PERMISSIONS): GENERAL_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: GENERAL_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GENERAL_PERMISSIONS;
  static deserializeBinaryFromReader(message: GENERAL_PERMISSIONS, reader: jspb.BinaryReader): GENERAL_PERMISSIONS;
}

export namespace GENERAL_PERMISSIONS {
  export type AsObject = {
    accessConstraint?: string,
    dashboard?: boolean,
    query?: boolean,
  }
}

export class BILLER_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): BILLER_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): BILLER_PERMISSIONS;

  getCreateApplication(): boolean;
  setCreateApplication(value: boolean): BILLER_PERMISSIONS;
  hasCreateApplication(): boolean;
  clearCreateApplication(): BILLER_PERMISSIONS;

  getBiller(): boolean;
  setBiller(value: boolean): BILLER_PERMISSIONS;
  hasBiller(): boolean;
  clearBiller(): BILLER_PERMISSIONS;

  getCancelApplication(): boolean;
  setCancelApplication(value: boolean): BILLER_PERMISSIONS;
  hasCancelApplication(): boolean;
  clearCancelApplication(): BILLER_PERMISSIONS;

  getEditApplication(): boolean;
  setEditApplication(value: boolean): BILLER_PERMISSIONS;
  hasEditApplication(): boolean;
  clearEditApplication(): BILLER_PERMISSIONS;

  getDeleteApplication(): boolean;
  setDeleteApplication(value: boolean): BILLER_PERMISSIONS;
  hasDeleteApplication(): boolean;
  clearDeleteApplication(): BILLER_PERMISSIONS;

  getPresentCancelBill(): boolean;
  setPresentCancelBill(value: boolean): BILLER_PERMISSIONS;
  hasPresentCancelBill(): boolean;
  clearPresentCancelBill(): BILLER_PERMISSIONS;

  getClosedApplication(): boolean;
  setClosedApplication(value: boolean): BILLER_PERMISSIONS;
  hasClosedApplication(): boolean;
  clearClosedApplication(): BILLER_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILLER_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: BILLER_PERMISSIONS): BILLER_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: BILLER_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILLER_PERMISSIONS;
  static deserializeBinaryFromReader(message: BILLER_PERMISSIONS, reader: jspb.BinaryReader): BILLER_PERMISSIONS;
}

export namespace BILLER_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
    createApplication?: boolean,
    biller?: boolean,
    cancelApplication?: boolean,
    editApplication?: boolean,
    deleteApplication?: boolean,
    presentCancelBill?: boolean,
    closedApplication?: boolean,
  }
}

export class BILLING_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): BILLING_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): BILLING_PERMISSIONS;

  getBiller(): boolean;
  setBiller(value: boolean): BILLING_PERMISSIONS;
  hasBiller(): boolean;
  clearBiller(): BILLING_PERMISSIONS;

  getEdamsBillingSteps(): boolean;
  setEdamsBillingSteps(value: boolean): BILLING_PERMISSIONS;
  hasEdamsBillingSteps(): boolean;
  clearEdamsBillingSteps(): BILLING_PERMISSIONS;

  getEdamsBillingStepsSettings(): boolean;
  setEdamsBillingStepsSettings(value: boolean): BILLING_PERMISSIONS;
  hasEdamsBillingStepsSettings(): boolean;
  clearEdamsBillingStepsSettings(): BILLING_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILLING_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: BILLING_PERMISSIONS): BILLING_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: BILLING_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILLING_PERMISSIONS;
  static deserializeBinaryFromReader(message: BILLING_PERMISSIONS, reader: jspb.BinaryReader): BILLING_PERMISSIONS;
}

export namespace BILLING_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
    biller?: boolean,
    edamsBillingSteps?: boolean,
    edamsBillingStepsSettings?: boolean,
  }
}

export class MAS_PERMISSIONS extends jspb.Message {
  getSysAdmin(): boolean;
  setSysAdmin(value: boolean): MAS_PERMISSIONS;
  hasSysAdmin(): boolean;
  clearSysAdmin(): MAS_PERMISSIONS;

  getReadingAdmin(): boolean;
  setReadingAdmin(value: boolean): MAS_PERMISSIONS;
  hasReadingAdmin(): boolean;
  clearReadingAdmin(): MAS_PERMISSIONS;

  getCollectionAdmin(): boolean;
  setCollectionAdmin(value: boolean): MAS_PERMISSIONS;
  hasCollectionAdmin(): boolean;
  clearCollectionAdmin(): MAS_PERMISSIONS;

  getReporingAdmin(): boolean;
  setReporingAdmin(value: boolean): MAS_PERMISSIONS;
  hasReporingAdmin(): boolean;
  clearReporingAdmin(): MAS_PERMISSIONS;

  getHhMonitor(): boolean;
  setHhMonitor(value: boolean): MAS_PERMISSIONS;
  hasHhMonitor(): boolean;
  clearHhMonitor(): MAS_PERMISSIONS;

  getUserManagement(): boolean;
  setUserManagement(value: boolean): MAS_PERMISSIONS;
  hasUserManagement(): boolean;
  clearUserManagement(): MAS_PERMISSIONS;

  getDataAdmin(): boolean;
  setDataAdmin(value: boolean): MAS_PERMISSIONS;
  hasDataAdmin(): boolean;
  clearDataAdmin(): MAS_PERMISSIONS;

  getSystemMntinance(): boolean;
  setSystemMntinance(value: boolean): MAS_PERMISSIONS;
  hasSystemMntinance(): boolean;
  clearSystemMntinance(): MAS_PERMISSIONS;

  getAllowCollection(): boolean;
  setAllowCollection(value: boolean): MAS_PERMISSIONS;
  hasAllowCollection(): boolean;
  clearAllowCollection(): MAS_PERMISSIONS;

  getAllowModifyReading(): boolean;
  setAllowModifyReading(value: boolean): MAS_PERMISSIONS;
  hasAllowModifyReading(): boolean;
  clearAllowModifyReading(): MAS_PERMISSIONS;

  getAllowDeposit(): boolean;
  setAllowDeposit(value: boolean): MAS_PERMISSIONS;
  hasAllowDeposit(): boolean;
  clearAllowDeposit(): MAS_PERMISSIONS;

  getAloowCancel(): boolean;
  setAloowCancel(value: boolean): MAS_PERMISSIONS;
  hasAloowCancel(): boolean;
  clearAloowCancel(): MAS_PERMISSIONS;

  getAllowReporting(): boolean;
  setAllowReporting(value: boolean): MAS_PERMISSIONS;
  hasAllowReporting(): boolean;
  clearAllowReporting(): MAS_PERMISSIONS;

  getAllowCompensation(): boolean;
  setAllowCompensation(value: boolean): MAS_PERMISSIONS;
  hasAllowCompensation(): boolean;
  clearAllowCompensation(): MAS_PERMISSIONS;

  getAllowCancel(): boolean;
  setAllowCancel(value: boolean): MAS_PERMISSIONS;
  hasAllowCancel(): boolean;
  clearAllowCancel(): MAS_PERMISSIONS;

  getMapReading(): boolean;
  setMapReading(value: boolean): MAS_PERMISSIONS;
  hasMapReading(): boolean;
  clearMapReading(): MAS_PERMISSIONS;

  getMapCollection(): boolean;
  setMapCollection(value: boolean): MAS_PERMISSIONS;
  hasMapCollection(): boolean;
  clearMapCollection(): MAS_PERMISSIONS;

  getMapLocation(): boolean;
  setMapLocation(value: boolean): MAS_PERMISSIONS;
  hasMapLocation(): boolean;
  clearMapLocation(): MAS_PERMISSIONS;

  getMapPath(): boolean;
  setMapPath(value: boolean): MAS_PERMISSIONS;
  hasMapPath(): boolean;
  clearMapPath(): MAS_PERMISSIONS;

  getMapComplaints(): boolean;
  setMapComplaints(value: boolean): MAS_PERMISSIONS;
  hasMapComplaints(): boolean;
  clearMapComplaints(): MAS_PERMISSIONS;

  getMapBadConn(): boolean;
  setMapBadConn(value: boolean): MAS_PERMISSIONS;
  hasMapBadConn(): boolean;
  clearMapBadConn(): MAS_PERMISSIONS;

  getWalkArrangePost(): boolean;
  setWalkArrangePost(value: boolean): MAS_PERMISSIONS;
  hasWalkArrangePost(): boolean;
  clearWalkArrangePost(): MAS_PERMISSIONS;

  getUpdateCustomerLocation(): boolean;
  setUpdateCustomerLocation(value: boolean): MAS_PERMISSIONS;
  hasUpdateCustomerLocation(): boolean;
  clearUpdateCustomerLocation(): MAS_PERMISSIONS;

  getAllowCancelDepCol(): boolean;
  setAllowCancelDepCol(value: boolean): MAS_PERMISSIONS;
  hasAllowCancelDepCol(): boolean;
  clearAllowCancelDepCol(): MAS_PERMISSIONS;

  getAllowRecolCancel(): boolean;
  setAllowRecolCancel(value: boolean): MAS_PERMISSIONS;
  hasAllowRecolCancel(): boolean;
  clearAllowRecolCancel(): MAS_PERMISSIONS;

  getAllowMaps(): boolean;
  setAllowMaps(value: boolean): MAS_PERMISSIONS;
  hasAllowMaps(): boolean;
  clearAllowMaps(): MAS_PERMISSIONS;

  getAllowLoaddataC(): boolean;
  setAllowLoaddataC(value: boolean): MAS_PERMISSIONS;
  hasAllowLoaddataC(): boolean;
  clearAllowLoaddataC(): MAS_PERMISSIONS;

  getAllowLoaddataR(): boolean;
  setAllowLoaddataR(value: boolean): MAS_PERMISSIONS;
  hasAllowLoaddataR(): boolean;
  clearAllowLoaddataR(): MAS_PERMISSIONS;

  getIsCashier(): boolean;
  setIsCashier(value: boolean): MAS_PERMISSIONS;
  hasIsCashier(): boolean;
  clearIsCashier(): MAS_PERMISSIONS;

  getAllowMeterModify(): boolean;
  setAllowMeterModify(value: boolean): MAS_PERMISSIONS;
  hasAllowMeterModify(): boolean;
  clearAllowMeterModify(): MAS_PERMISSIONS;

  getAllowGard(): boolean;
  setAllowGard(value: boolean): MAS_PERMISSIONS;
  hasAllowGard(): boolean;
  clearAllowGard(): MAS_PERMISSIONS;

  getResendCollection(): boolean;
  setResendCollection(value: boolean): MAS_PERMISSIONS;
  hasResendCollection(): boolean;
  clearResendCollection(): MAS_PERMISSIONS;

  getResendReading(): boolean;
  setResendReading(value: boolean): MAS_PERMISSIONS;
  hasResendReading(): boolean;
  clearResendReading(): MAS_PERMISSIONS;

  getCloseCollection(): boolean;
  setCloseCollection(value: boolean): MAS_PERMISSIONS;
  hasCloseCollection(): boolean;
  clearCloseCollection(): MAS_PERMISSIONS;

  getCloseReading(): boolean;
  setCloseReading(value: boolean): MAS_PERMISSIONS;
  hasCloseReading(): boolean;
  clearCloseReading(): MAS_PERMISSIONS;

  getCollectionDiscount(): boolean;
  setCollectionDiscount(value: boolean): MAS_PERMISSIONS;
  hasCollectionDiscount(): boolean;
  clearCollectionDiscount(): MAS_PERMISSIONS;

  getRefreshBillsData(): boolean;
  setRefreshBillsData(value: boolean): MAS_PERMISSIONS;
  hasRefreshBillsData(): boolean;
  clearRefreshBillsData(): MAS_PERMISSIONS;

  getCalculateDueAmount(): boolean;
  setCalculateDueAmount(value: boolean): MAS_PERMISSIONS;
  hasCalculateDueAmount(): boolean;
  clearCalculateDueAmount(): MAS_PERMISSIONS;

  getCollectBillSinglUint(): boolean;
  setCollectBillSinglUint(value: boolean): MAS_PERMISSIONS;
  hasCollectBillSinglUint(): boolean;
  clearCollectBillSinglUint(): MAS_PERMISSIONS;

  getPrintPaymentRequest(): boolean;
  setPrintPaymentRequest(value: boolean): MAS_PERMISSIONS;
  hasPrintPaymentRequest(): boolean;
  clearPrintPaymentRequest(): MAS_PERMISSIONS;

  getPartialCollection(): boolean;
  setPartialCollection(value: boolean): MAS_PERMISSIONS;
  hasPartialCollection(): boolean;
  clearPartialCollection(): MAS_PERMISSIONS;

  getAlonePanel(): boolean;
  setAlonePanel(value: boolean): MAS_PERMISSIONS;
  hasAlonePanel(): boolean;
  clearAlonePanel(): MAS_PERMISSIONS;

  getRefreshCustomerBills(): boolean;
  setRefreshCustomerBills(value: boolean): MAS_PERMISSIONS;
  hasRefreshCustomerBills(): boolean;
  clearRefreshCustomerBills(): MAS_PERMISSIONS;

  getEdamsRecalcNew(): boolean;
  setEdamsRecalcNew(value: boolean): MAS_PERMISSIONS;
  hasEdamsRecalcNew(): boolean;
  clearEdamsRecalcNew(): MAS_PERMISSIONS;

  getAllowFawryOpen(): boolean;
  setAllowFawryOpen(value: boolean): MAS_PERMISSIONS;
  hasAllowFawryOpen(): boolean;
  clearAllowFawryOpen(): MAS_PERMISSIONS;

  getAllowFawryClose(): boolean;
  setAllowFawryClose(value: boolean): MAS_PERMISSIONS;
  hasAllowFawryClose(): boolean;
  clearAllowFawryClose(): MAS_PERMISSIONS;

  getAllowModifyPrevReading(): boolean;
  setAllowModifyPrevReading(value: boolean): MAS_PERMISSIONS;
  hasAllowModifyPrevReading(): boolean;
  clearAllowModifyPrevReading(): MAS_PERMISSIONS;

  getListCollection(): boolean;
  setListCollection(value: boolean): MAS_PERMISSIONS;
  hasListCollection(): boolean;
  clearListCollection(): MAS_PERMISSIONS;

  getMarketing(): boolean;
  setMarketing(value: boolean): MAS_PERMISSIONS;
  hasMarketing(): boolean;
  clearMarketing(): MAS_PERMISSIONS;

  getPrepearHafza(): boolean;
  setPrepearHafza(value: boolean): MAS_PERMISSIONS;
  hasPrepearHafza(): boolean;
  clearPrepearHafza(): MAS_PERMISSIONS;

  getCashBox(): boolean;
  setCashBox(value: boolean): MAS_PERMISSIONS;
  hasCashBox(): boolean;
  clearCashBox(): MAS_PERMISSIONS;

  getSwitch(): boolean;
  setSwitch(value: boolean): MAS_PERMISSIONS;
  hasSwitch(): boolean;
  clearSwitch(): MAS_PERMISSIONS;

  getUflag(): boolean;
  setUflag(value: boolean): MAS_PERMISSIONS;
  hasUflag(): boolean;
  clearUflag(): MAS_PERMISSIONS;

  getPortal(): boolean;
  setPortal(value: boolean): MAS_PERMISSIONS;
  hasPortal(): boolean;
  clearPortal(): MAS_PERMISSIONS;

  getSurvey(): boolean;
  setSurvey(value: boolean): MAS_PERMISSIONS;
  hasSurvey(): boolean;
  clearSurvey(): MAS_PERMISSIONS;

  getReports(): boolean;
  setReports(value: boolean): MAS_PERMISSIONS;
  hasReports(): boolean;
  clearReports(): MAS_PERMISSIONS;

  getDashboard(): boolean;
  setDashboard(value: boolean): MAS_PERMISSIONS;
  hasDashboard(): boolean;
  clearDashboard(): MAS_PERMISSIONS;

  getQuery(): boolean;
  setQuery(value: boolean): MAS_PERMISSIONS;
  hasQuery(): boolean;
  clearQuery(): MAS_PERMISSIONS;

  getDeviceManagment(): boolean;
  setDeviceManagment(value: boolean): MAS_PERMISSIONS;
  hasDeviceManagment(): boolean;
  clearDeviceManagment(): MAS_PERMISSIONS;

  getSync(): boolean;
  setSync(value: boolean): MAS_PERMISSIONS;
  hasSync(): boolean;
  clearSync(): MAS_PERMISSIONS;

  getCancelBill(): boolean;
  setCancelBill(value: boolean): MAS_PERMISSIONS;
  hasCancelBill(): boolean;
  clearCancelBill(): MAS_PERMISSIONS;

  getCancelDelivery(): boolean;
  setCancelDelivery(value: boolean): MAS_PERMISSIONS;
  hasCancelDelivery(): boolean;
  clearCancelDelivery(): MAS_PERMISSIONS;

  getAllowCustMod(): boolean;
  setAllowCustMod(value: boolean): MAS_PERMISSIONS;
  hasAllowCustMod(): boolean;
  clearAllowCustMod(): MAS_PERMISSIONS;

  getAllowEstimReading(): boolean;
  setAllowEstimReading(value: boolean): MAS_PERMISSIONS;
  hasAllowEstimReading(): boolean;
  clearAllowEstimReading(): MAS_PERMISSIONS;

  getAllowBatchEstimReading(): boolean;
  setAllowBatchEstimReading(value: boolean): MAS_PERMISSIONS;
  hasAllowBatchEstimReading(): boolean;
  clearAllowBatchEstimReading(): MAS_PERMISSIONS;

  getCreateApplication(): boolean;
  setCreateApplication(value: boolean): MAS_PERMISSIONS;
  hasCreateApplication(): boolean;
  clearCreateApplication(): MAS_PERMISSIONS;

  getBiller(): boolean;
  setBiller(value: boolean): MAS_PERMISSIONS;
  hasBiller(): boolean;
  clearBiller(): MAS_PERMISSIONS;

  getCancelApplication(): boolean;
  setCancelApplication(value: boolean): MAS_PERMISSIONS;
  hasCancelApplication(): boolean;
  clearCancelApplication(): MAS_PERMISSIONS;

  getEditApplication(): boolean;
  setEditApplication(value: boolean): MAS_PERMISSIONS;
  hasEditApplication(): boolean;
  clearEditApplication(): MAS_PERMISSIONS;

  getDeleteApplication(): boolean;
  setDeleteApplication(value: boolean): MAS_PERMISSIONS;
  hasDeleteApplication(): boolean;
  clearDeleteApplication(): MAS_PERMISSIONS;

  getPresentCancelBill(): boolean;
  setPresentCancelBill(value: boolean): MAS_PERMISSIONS;
  hasPresentCancelBill(): boolean;
  clearPresentCancelBill(): MAS_PERMISSIONS;

  getClosedApplication(): boolean;
  setClosedApplication(value: boolean): MAS_PERMISSIONS;
  hasClosedApplication(): boolean;
  clearClosedApplication(): MAS_PERMISSIONS;

  getIsactive(): boolean;
  setIsactive(value: boolean): MAS_PERMISSIONS;
  hasIsactive(): boolean;
  clearIsactive(): MAS_PERMISSIONS;

  getDeleted(): boolean;
  setDeleted(value: boolean): MAS_PERMISSIONS;
  hasDeleted(): boolean;
  clearDeleted(): MAS_PERMISSIONS;

  getAllowCustomerResequence(): boolean;
  setAllowCustomerResequence(value: boolean): MAS_PERMISSIONS;
  hasAllowCustomerResequence(): boolean;
  clearAllowCustomerResequence(): MAS_PERMISSIONS;

  getAllowEstimConsump(): boolean;
  setAllowEstimConsump(value: boolean): MAS_PERMISSIONS;
  hasAllowEstimConsump(): boolean;
  clearAllowEstimConsump(): MAS_PERMISSIONS;

  getAllowTaxPush(): boolean;
  setAllowTaxPush(value: boolean): MAS_PERMISSIONS;
  hasAllowTaxPush(): boolean;
  clearAllowTaxPush(): MAS_PERMISSIONS;

  getCloseCollectionIndevice(): boolean;
  setCloseCollectionIndevice(value: boolean): MAS_PERMISSIONS;
  hasCloseCollectionIndevice(): boolean;
  clearCloseCollectionIndevice(): MAS_PERMISSIONS;

  getEdamsRecalc(): boolean;
  setEdamsRecalc(value: boolean): MAS_PERMISSIONS;
  hasEdamsRecalc(): boolean;
  clearEdamsRecalc(): MAS_PERMISSIONS;

  getAllowMeterStatusChange(): boolean;
  setAllowMeterStatusChange(value: boolean): MAS_PERMISSIONS;
  hasAllowMeterStatusChange(): boolean;
  clearAllowMeterStatusChange(): MAS_PERMISSIONS;

  getAllowPostC(): boolean;
  setAllowPostC(value: boolean): MAS_PERMISSIONS;
  hasAllowPostC(): boolean;
  clearAllowPostC(): MAS_PERMISSIONS;

  getAllowPostR(): boolean;
  setAllowPostR(value: boolean): MAS_PERMISSIONS;
  hasAllowPostR(): boolean;
  clearAllowPostR(): MAS_PERMISSIONS;

  getCloseReadingIndevice(): boolean;
  setCloseReadingIndevice(value: boolean): MAS_PERMISSIONS;
  hasCloseReadingIndevice(): boolean;
  clearCloseReadingIndevice(): MAS_PERMISSIONS;

  getEdamsClearReadings(): boolean;
  setEdamsClearReadings(value: boolean): MAS_PERMISSIONS;
  hasEdamsClearReadings(): boolean;
  clearEdamsClearReadings(): MAS_PERMISSIONS;

  getEdamsCs(): boolean;
  setEdamsCs(value: boolean): MAS_PERMISSIONS;
  hasEdamsCs(): boolean;
  clearEdamsCs(): MAS_PERMISSIONS;

  getEmpManagement(): boolean;
  setEmpManagement(value: boolean): MAS_PERMISSIONS;
  hasEmpManagement(): boolean;
  clearEmpManagement(): MAS_PERMISSIONS;

  getPrinterType(): string;
  setPrinterType(value: string): MAS_PERMISSIONS;
  hasPrinterType(): boolean;
  clearPrinterType(): MAS_PERMISSIONS;

  getWalkcAssignment(): boolean;
  setWalkcAssignment(value: boolean): MAS_PERMISSIONS;
  hasWalkcAssignment(): boolean;
  clearWalkcAssignment(): MAS_PERMISSIONS;

  getWalkrAssignment(): boolean;
  setWalkrAssignment(value: boolean): MAS_PERMISSIONS;
  hasWalkrAssignment(): boolean;
  clearWalkrAssignment(): MAS_PERMISSIONS;

  getReprintReceipt(): boolean;
  setReprintReceipt(value: boolean): MAS_PERMISSIONS;
  hasReprintReceipt(): boolean;
  clearReprintReceipt(): MAS_PERMISSIONS;

  getAllowOperationsCollectionWalk(): boolean;
  setAllowOperationsCollectionWalk(value: boolean): MAS_PERMISSIONS;
  hasAllowOperationsCollectionWalk(): boolean;
  clearAllowOperationsCollectionWalk(): MAS_PERMISSIONS;

  getCustomerNotification(): boolean;
  setCustomerNotification(value: boolean): MAS_PERMISSIONS;
  hasCustomerNotification(): boolean;
  clearCustomerNotification(): MAS_PERMISSIONS;

  getManageCustomerNotificationModules(): boolean;
  setManageCustomerNotificationModules(value: boolean): MAS_PERMISSIONS;
  hasManageCustomerNotificationModules(): boolean;
  clearManageCustomerNotificationModules(): MAS_PERMISSIONS;

  getSendCustomerServiceNotification(): boolean;
  setSendCustomerServiceNotification(value: boolean): MAS_PERMISSIONS;
  hasSendCustomerServiceNotification(): boolean;
  clearSendCustomerServiceNotification(): MAS_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MAS_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: MAS_PERMISSIONS): MAS_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: MAS_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MAS_PERMISSIONS;
  static deserializeBinaryFromReader(message: MAS_PERMISSIONS, reader: jspb.BinaryReader): MAS_PERMISSIONS;
}

export namespace MAS_PERMISSIONS {
  export type AsObject = {
    sysAdmin?: boolean,
    readingAdmin?: boolean,
    collectionAdmin?: boolean,
    reporingAdmin?: boolean,
    hhMonitor?: boolean,
    userManagement?: boolean,
    dataAdmin?: boolean,
    systemMntinance?: boolean,
    allowCollection?: boolean,
    allowModifyReading?: boolean,
    allowDeposit?: boolean,
    aloowCancel?: boolean,
    allowReporting?: boolean,
    allowCompensation?: boolean,
    allowCancel?: boolean,
    mapReading?: boolean,
    mapCollection?: boolean,
    mapLocation?: boolean,
    mapPath?: boolean,
    mapComplaints?: boolean,
    mapBadConn?: boolean,
    walkArrangePost?: boolean,
    updateCustomerLocation?: boolean,
    allowCancelDepCol?: boolean,
    allowRecolCancel?: boolean,
    allowMaps?: boolean,
    allowLoaddataC?: boolean,
    allowLoaddataR?: boolean,
    isCashier?: boolean,
    allowMeterModify?: boolean,
    allowGard?: boolean,
    resendCollection?: boolean,
    resendReading?: boolean,
    closeCollection?: boolean,
    closeReading?: boolean,
    collectionDiscount?: boolean,
    refreshBillsData?: boolean,
    calculateDueAmount?: boolean,
    collectBillSinglUint?: boolean,
    printPaymentRequest?: boolean,
    partialCollection?: boolean,
    alonePanel?: boolean,
    refreshCustomerBills?: boolean,
    edamsRecalcNew?: boolean,
    allowFawryOpen?: boolean,
    allowFawryClose?: boolean,
    allowModifyPrevReading?: boolean,
    listCollection?: boolean,
    marketing?: boolean,
    prepearHafza?: boolean,
    cashBox?: boolean,
    pb_switch?: boolean,
    uflag?: boolean,
    portal?: boolean,
    survey?: boolean,
    reports?: boolean,
    dashboard?: boolean,
    query?: boolean,
    deviceManagment?: boolean,
    sync?: boolean,
    cancelBill?: boolean,
    cancelDelivery?: boolean,
    allowCustMod?: boolean,
    allowEstimReading?: boolean,
    allowBatchEstimReading?: boolean,
    createApplication?: boolean,
    biller?: boolean,
    cancelApplication?: boolean,
    editApplication?: boolean,
    deleteApplication?: boolean,
    presentCancelBill?: boolean,
    closedApplication?: boolean,
    isactive?: boolean,
    deleted?: boolean,
    allowCustomerResequence?: boolean,
    allowEstimConsump?: boolean,
    allowTaxPush?: boolean,
    closeCollectionIndevice?: boolean,
    edamsRecalc?: boolean,
    allowMeterStatusChange?: boolean,
    allowPostC?: boolean,
    allowPostR?: boolean,
    closeReadingIndevice?: boolean,
    edamsClearReadings?: boolean,
    edamsCs?: boolean,
    empManagement?: boolean,
    printerType?: string,
    walkcAssignment?: boolean,
    walkrAssignment?: boolean,
    reprintReceipt?: boolean,
    allowOperationsCollectionWalk?: boolean,
    customerNotification?: boolean,
    manageCustomerNotificationModules?: boolean,
    sendCustomerServiceNotification?: boolean,
  }
}

export class GOV_PERMISSIONS extends jspb.Message {
  getAllowGovCollection(): boolean;
  setAllowGovCollection(value: boolean): GOV_PERMISSIONS;
  hasAllowGovCollection(): boolean;
  clearAllowGovCollection(): GOV_PERMISSIONS;

  getIsCashier(): boolean;
  setIsCashier(value: boolean): GOV_PERMISSIONS;
  hasIsCashier(): boolean;
  clearIsCashier(): GOV_PERMISSIONS;

  getAddPaymentFile(): boolean;
  setAddPaymentFile(value: boolean): GOV_PERMISSIONS;
  hasAddPaymentFile(): boolean;
  clearAddPaymentFile(): GOV_PERMISSIONS;

  getEditPaymentFile(): boolean;
  setEditPaymentFile(value: boolean): GOV_PERMISSIONS;
  hasEditPaymentFile(): boolean;
  clearEditPaymentFile(): GOV_PERMISSIONS;

  getDeletePaymentFile(): boolean;
  setDeletePaymentFile(value: boolean): GOV_PERMISSIONS;
  hasDeletePaymentFile(): boolean;
  clearDeletePaymentFile(): GOV_PERMISSIONS;

  getAddPayment(): boolean;
  setAddPayment(value: boolean): GOV_PERMISSIONS;
  hasAddPayment(): boolean;
  clearAddPayment(): GOV_PERMISSIONS;

  getEditPayment(): boolean;
  setEditPayment(value: boolean): GOV_PERMISSIONS;
  hasEditPayment(): boolean;
  clearEditPayment(): GOV_PERMISSIONS;

  getDeletePayment(): boolean;
  setDeletePayment(value: boolean): GOV_PERMISSIONS;
  hasDeletePayment(): boolean;
  clearDeletePayment(): GOV_PERMISSIONS;

  getAddEmp(): boolean;
  setAddEmp(value: boolean): GOV_PERMISSIONS;
  hasAddEmp(): boolean;
  clearAddEmp(): GOV_PERMISSIONS;

  getEditEmp(): boolean;
  setEditEmp(value: boolean): GOV_PERMISSIONS;
  hasEditEmp(): boolean;
  clearEditEmp(): GOV_PERMISSIONS;

  getCancelCollection(): boolean;
  setCancelCollection(value: boolean): GOV_PERMISSIONS;
  hasCancelCollection(): boolean;
  clearCancelCollection(): GOV_PERMISSIONS;

  getViewReports(): boolean;
  setViewReports(value: boolean): GOV_PERMISSIONS;
  hasViewReports(): boolean;
  clearViewReports(): GOV_PERMISSIONS;

  getAddCentral(): boolean;
  setAddCentral(value: boolean): GOV_PERMISSIONS;
  hasAddCentral(): boolean;
  clearAddCentral(): GOV_PERMISSIONS;

  getReviewCentral(): boolean;
  setReviewCentral(value: boolean): GOV_PERMISSIONS;
  hasReviewCentral(): boolean;
  clearReviewCentral(): GOV_PERMISSIONS;

  getApproveCentral(): boolean;
  setApproveCentral(value: boolean): GOV_PERMISSIONS;
  hasApproveCentral(): boolean;
  clearApproveCentral(): GOV_PERMISSIONS;

  getDeleteCentral(): boolean;
  setDeleteCentral(value: boolean): GOV_PERMISSIONS;
  hasDeleteCentral(): boolean;
  clearDeleteCentral(): GOV_PERMISSIONS;

  getCentralReport(): boolean;
  setCentralReport(value: boolean): GOV_PERMISSIONS;
  hasCentralReport(): boolean;
  clearCentralReport(): GOV_PERMISSIONS;

  getMergeAmount(): boolean;
  setMergeAmount(value: boolean): GOV_PERMISSIONS;
  hasMergeAmount(): boolean;
  clearMergeAmount(): GOV_PERMISSIONS;

  getReassigneAmount(): boolean;
  setReassigneAmount(value: boolean): GOV_PERMISSIONS;
  hasReassigneAmount(): boolean;
  clearReassigneAmount(): GOV_PERMISSIONS;

  getMergeAllItems(): boolean;
  setMergeAllItems(value: boolean): GOV_PERMISSIONS;
  hasMergeAllItems(): boolean;
  clearMergeAllItems(): GOV_PERMISSIONS;

  getMergeWaterItems(): boolean;
  setMergeWaterItems(value: boolean): GOV_PERMISSIONS;
  hasMergeWaterItems(): boolean;
  clearMergeWaterItems(): GOV_PERMISSIONS;

  getAutoFillItems(): boolean;
  setAutoFillItems(value: boolean): GOV_PERMISSIONS;
  hasAutoFillItems(): boolean;
  clearAutoFillItems(): GOV_PERMISSIONS;

  getCancelAllocatePayment(): boolean;
  setCancelAllocatePayment(value: boolean): GOV_PERMISSIONS;
  hasCancelAllocatePayment(): boolean;
  clearCancelAllocatePayment(): GOV_PERMISSIONS;

  getReduceFileAmount(): boolean;
  setReduceFileAmount(value: boolean): GOV_PERMISSIONS;
  hasReduceFileAmount(): boolean;
  clearReduceFileAmount(): GOV_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GOV_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: GOV_PERMISSIONS): GOV_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: GOV_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GOV_PERMISSIONS;
  static deserializeBinaryFromReader(message: GOV_PERMISSIONS, reader: jspb.BinaryReader): GOV_PERMISSIONS;
}

export namespace GOV_PERMISSIONS {
  export type AsObject = {
    allowGovCollection?: boolean,
    isCashier?: boolean,
    addPaymentFile?: boolean,
    editPaymentFile?: boolean,
    deletePaymentFile?: boolean,
    addPayment?: boolean,
    editPayment?: boolean,
    deletePayment?: boolean,
    addEmp?: boolean,
    editEmp?: boolean,
    cancelCollection?: boolean,
    viewReports?: boolean,
    addCentral?: boolean,
    reviewCentral?: boolean,
    approveCentral?: boolean,
    deleteCentral?: boolean,
    centralReport?: boolean,
    mergeAmount?: boolean,
    reassigneAmount?: boolean,
    mergeAllItems?: boolean,
    mergeWaterItems?: boolean,
    autoFillItems?: boolean,
    cancelAllocatePayment?: boolean,
    reduceFileAmount?: boolean,
  }
}

export class TAX_PERMISSIONS extends jspb.Message {
  getManageItems(): boolean;
  setManageItems(value: boolean): TAX_PERMISSIONS;
  hasManageItems(): boolean;
  clearManageItems(): TAX_PERMISSIONS;

  getManegeClients(): boolean;
  setManegeClients(value: boolean): TAX_PERMISSIONS;
  hasManegeClients(): boolean;
  clearManegeClients(): TAX_PERMISSIONS;

  getCustomerToGroup(): boolean;
  setCustomerToGroup(value: boolean): TAX_PERMISSIONS;
  hasCustomerToGroup(): boolean;
  clearCustomerToGroup(): TAX_PERMISSIONS;

  getManageGroups(): boolean;
  setManageGroups(value: boolean): TAX_PERMISSIONS;
  hasManageGroups(): boolean;
  clearManageGroups(): TAX_PERMISSIONS;

  getGroups(): boolean;
  setGroups(value: boolean): TAX_PERMISSIONS;
  hasGroups(): boolean;
  clearGroups(): TAX_PERMISSIONS;

  getSubGroups(): boolean;
  setSubGroups(value: boolean): TAX_PERMISSIONS;
  hasSubGroups(): boolean;
  clearSubGroups(): TAX_PERMISSIONS;

  getAccecptCollectedInvoicesGroups(): boolean;
  setAccecptCollectedInvoicesGroups(value: boolean): TAX_PERMISSIONS;
  hasAccecptCollectedInvoicesGroups(): boolean;
  clearAccecptCollectedInvoicesGroups(): TAX_PERMISSIONS;

  getCollecteInvoices(): boolean;
  setCollecteInvoices(value: boolean): TAX_PERMISSIONS;
  hasCollecteInvoices(): boolean;
  clearCollecteInvoices(): TAX_PERMISSIONS;

  getAddClientsToSubgroup(): boolean;
  setAddClientsToSubgroup(value: boolean): TAX_PERMISSIONS;
  hasAddClientsToSubgroup(): boolean;
  clearAddClientsToSubgroup(): TAX_PERMISSIONS;

  getManageSubgroupInvoices(): boolean;
  setManageSubgroupInvoices(value: boolean): TAX_PERMISSIONS;
  hasManageSubgroupInvoices(): boolean;
  clearManageSubgroupInvoices(): TAX_PERMISSIONS;

  getCancelCollectedInvoices(): boolean;
  setCancelCollectedInvoices(value: boolean): TAX_PERMISSIONS;
  hasCancelCollectedInvoices(): boolean;
  clearCancelCollectedInvoices(): TAX_PERMISSIONS;

  getAccecptCollectedInvoicesSubgroups(): boolean;
  setAccecptCollectedInvoicesSubgroups(value: boolean): TAX_PERMISSIONS;
  hasAccecptCollectedInvoicesSubgroups(): boolean;
  clearAccecptCollectedInvoicesSubgroups(): TAX_PERMISSIONS;

  getTaxTypes(): boolean;
  setTaxTypes(value: boolean): TAX_PERMISSIONS;
  hasTaxTypes(): boolean;
  clearTaxTypes(): TAX_PERMISSIONS;

  getManageActivity(): boolean;
  setManageActivity(value: boolean): TAX_PERMISSIONS;
  hasManageActivity(): boolean;
  clearManageActivity(): TAX_PERMISSIONS;

  getManageReports(): boolean;
  setManageReports(value: boolean): TAX_PERMISSIONS;
  hasManageReports(): boolean;
  clearManageReports(): TAX_PERMISSIONS;

  getClientReports(): boolean;
  setClientReports(value: boolean): TAX_PERMISSIONS;
  hasClientReports(): boolean;
  clearClientReports(): TAX_PERMISSIONS;

  getOtherReports(): boolean;
  setOtherReports(value: boolean): TAX_PERMISSIONS;
  hasOtherReports(): boolean;
  clearOtherReports(): TAX_PERMISSIONS;

  getManagePurchases(): boolean;
  setManagePurchases(value: boolean): TAX_PERMISSIONS;
  hasManagePurchases(): boolean;
  clearManagePurchases(): TAX_PERMISSIONS;

  getAcceptPurchases(): boolean;
  setAcceptPurchases(value: boolean): TAX_PERMISSIONS;
  hasAcceptPurchases(): boolean;
  clearAcceptPurchases(): TAX_PERMISSIONS;

  getCancelPurchases(): boolean;
  setCancelPurchases(value: boolean): TAX_PERMISSIONS;
  hasCancelPurchases(): boolean;
  clearCancelPurchases(): TAX_PERMISSIONS;

  getManageInvoices(): boolean;
  setManageInvoices(value: boolean): TAX_PERMISSIONS;
  hasManageInvoices(): boolean;
  clearManageInvoices(): TAX_PERMISSIONS;

  getCreateInvoice(): boolean;
  setCreateInvoice(value: boolean): TAX_PERMISSIONS;
  hasCreateInvoice(): boolean;
  clearCreateInvoice(): TAX_PERMISSIONS;

  getUploadInvoiceExcel(): boolean;
  setUploadInvoiceExcel(value: boolean): TAX_PERMISSIONS;
  hasUploadInvoiceExcel(): boolean;
  clearUploadInvoiceExcel(): TAX_PERMISSIONS;

  getDraftInvoices(): boolean;
  setDraftInvoices(value: boolean): TAX_PERMISSIONS;
  hasDraftInvoices(): boolean;
  clearDraftInvoices(): TAX_PERMISSIONS;

  getAcceptDraftInvoices(): boolean;
  setAcceptDraftInvoices(value: boolean): TAX_PERMISSIONS;
  hasAcceptDraftInvoices(): boolean;
  clearAcceptDraftInvoices(): TAX_PERMISSIONS;

  getAcceptInvoices(): boolean;
  setAcceptInvoices(value: boolean): TAX_PERMISSIONS;
  hasAcceptInvoices(): boolean;
  clearAcceptInvoices(): TAX_PERMISSIONS;

  getReviewInvoices(): boolean;
  setReviewInvoices(value: boolean): TAX_PERMISSIONS;
  hasReviewInvoices(): boolean;
  clearReviewInvoices(): TAX_PERMISSIONS;

  getSentInvoices(): boolean;
  setSentInvoices(value: boolean): TAX_PERMISSIONS;
  hasSentInvoices(): boolean;
  clearSentInvoices(): TAX_PERMISSIONS;

  getPrintClientInvoices(): boolean;
  setPrintClientInvoices(value: boolean): TAX_PERMISSIONS;
  hasPrintClientInvoices(): boolean;
  clearPrintClientInvoices(): TAX_PERMISSIONS;

  getPrintEtaInvoices(): boolean;
  setPrintEtaInvoices(value: boolean): TAX_PERMISSIONS;
  hasPrintEtaInvoices(): boolean;
  clearPrintEtaInvoices(): TAX_PERMISSIONS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TAX_PERMISSIONS.AsObject;
  static toObject(includeInstance: boolean, msg: TAX_PERMISSIONS): TAX_PERMISSIONS.AsObject;
  static serializeBinaryToWriter(message: TAX_PERMISSIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TAX_PERMISSIONS;
  static deserializeBinaryFromReader(message: TAX_PERMISSIONS, reader: jspb.BinaryReader): TAX_PERMISSIONS;
}

export namespace TAX_PERMISSIONS {
  export type AsObject = {
    manageItems?: boolean,
    manegeClients?: boolean,
    customerToGroup?: boolean,
    manageGroups?: boolean,
    groups?: boolean,
    subGroups?: boolean,
    accecptCollectedInvoicesGroups?: boolean,
    collecteInvoices?: boolean,
    addClientsToSubgroup?: boolean,
    manageSubgroupInvoices?: boolean,
    cancelCollectedInvoices?: boolean,
    accecptCollectedInvoicesSubgroups?: boolean,
    taxTypes?: boolean,
    manageActivity?: boolean,
    manageReports?: boolean,
    clientReports?: boolean,
    otherReports?: boolean,
    managePurchases?: boolean,
    acceptPurchases?: boolean,
    cancelPurchases?: boolean,
    manageInvoices?: boolean,
    createInvoice?: boolean,
    uploadInvoiceExcel?: boolean,
    draftInvoices?: boolean,
    acceptDraftInvoices?: boolean,
    acceptInvoices?: boolean,
    reviewInvoices?: boolean,
    sentInvoices?: boolean,
    printClientInvoices?: boolean,
    printEtaInvoices?: boolean,
  }
}

export class AUTH_LICENCE extends jspb.Message {
  getLicence(): string;
  setLicence(value: string): AUTH_LICENCE;
  hasLicence(): boolean;
  clearLicence(): AUTH_LICENCE;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_LICENCE.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_LICENCE): AUTH_LICENCE.AsObject;
  static serializeBinaryToWriter(message: AUTH_LICENCE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_LICENCE;
  static deserializeBinaryFromReader(message: AUTH_LICENCE, reader: jspb.BinaryReader): AUTH_LICENCE;
}

export namespace AUTH_LICENCE {
  export type AsObject = {
    licence?: string,
  }
}

export class AUTH_SETTINGS extends jspb.Message {
  getKey(): string;
  setKey(value: string): AUTH_SETTINGS;
  hasKey(): boolean;
  clearKey(): AUTH_SETTINGS;

  getValue(): number;
  setValue(value: number): AUTH_SETTINGS;
  hasValue(): boolean;
  clearValue(): AUTH_SETTINGS;

  getDescription(): string;
  setDescription(value: string): AUTH_SETTINGS;
  hasDescription(): boolean;
  clearDescription(): AUTH_SETTINGS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AUTH_SETTINGS.AsObject;
  static toObject(includeInstance: boolean, msg: AUTH_SETTINGS): AUTH_SETTINGS.AsObject;
  static serializeBinaryToWriter(message: AUTH_SETTINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AUTH_SETTINGS;
  static deserializeBinaryFromReader(message: AUTH_SETTINGS, reader: jspb.BinaryReader): AUTH_SETTINGS;
}

export namespace AUTH_SETTINGS {
  export type AsObject = {
    key?: string,
    value?: number,
    description?: string,
  }
}

export enum Applications { 
  FACEBOOK = 1,
  GOOGLE = 2,
  TWITTER = 3,
  LINKEDIN = 4,
  APPLE = 5,
}
export enum ACTIONVIEW { 
  ONEVIEW = 1,
  TWOVIEW = 2,
  THREEVIEW = 3,
  NOVIEW = 0,
}
export enum DurationType { 
  HOUR = 0,
  DAY = 1,
}
export enum Counts_type { 
  COUNT_CLIENTS = 1,
  COUNT_USERS = 2,
  COUNT_ADMINS = 3,
  COUNT_ALL = 4,
}
export enum VTYPE { 
  EMAIL = 1,
  MOBILE = 2,
}
export enum Dir { 
  CLS = 0,
  USS = 1,
  BOTH = 2,
}
export enum ENCRYPTION { 
  NOT_ENCRYPTION = 0,
  PASS_ENCRYPTION_ONLY = 1,
  ALL_SENSITIVE_DATA_ENCRYPTION = 2,
}
