// package: dbmessages
// file: dbmessages/collectionmessages.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CANCELLED_REQUEST extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasRequestBy(): boolean;
  clearRequestBy(): void;
  getRequestBy(): string | undefined;
  setRequestBy(value: string): void;

  hasRequestDate(): boolean;
  clearRequestDate(): void;
  getRequestDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCounter(): boolean;
  clearCounter(): void;
  getCounter(): number | undefined;
  setCounter(value: number): void;

  hasState(): boolean;
  clearState(): void;
  getState(): number | undefined;
  setState(value: number): void;

  hasClosed(): boolean;
  clearClosed(): void;
  getClosed(): boolean | undefined;
  setClosed(value: boolean): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): string | undefined;
  setStatus(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<CANCELLED_BILL_ACTION>;
  setActionsList(value: Array<CANCELLED_BILL_ACTION>): void;
  addActions(value?: CANCELLED_BILL_ACTION, index?: number): CANCELLED_BILL_ACTION;

  clearBillsList(): void;
  getBillsList(): Array<CANCELLED_BILL>;
  setBillsList(value: Array<CANCELLED_BILL>): void;
  addBills(value?: CANCELLED_BILL, index?: number): CANCELLED_BILL;

  hasCancelled(): boolean;
  clearCancelled(): void;
  getCancelled(): boolean | undefined;
  setCancelled(value: boolean): void;

  hasEdited(): boolean;
  clearEdited(): void;
  getEdited(): boolean | undefined;
  setEdited(value: boolean): void;

  hasApplicationtype(): boolean;
  clearApplicationtype(): void;
  getApplicationtype(): number | undefined;
  setApplicationtype(value: number): void;

  getEntriesMap(): jspb.Map<string, FieldValue>;
  clearEntriesMap(): void;
  hasApplicationtypename(): boolean;
  clearApplicationtypename(): void;
  getApplicationtypename(): string | undefined;
  setApplicationtypename(value: string): void;

  hasIscancelled(): boolean;
  clearIscancelled(): void;
  getIscancelled(): boolean | undefined;
  setIscancelled(value: boolean): void;

  clearEntriesfiledsList(): void;
  getEntriesfiledsList(): Array<Field>;
  setEntriesfiledsList(value: Array<Field>): void;
  addEntriesfileds(value?: Field, index?: number): Field;

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

  hasClientId(): boolean;
  clearClientId(): void;
  getClientId(): number | undefined;
  setClientId(value: number): void;

  hasCountReject(): boolean;
  clearCountReject(): void;
  getCountReject(): number | undefined;
  setCountReject(value: number): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCELLED_REQUEST.AsObject;
  static toObject(includeInstance: boolean, msg: CANCELLED_REQUEST): CANCELLED_REQUEST.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CANCELLED_REQUEST, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCELLED_REQUEST;
  static deserializeBinaryFromReader(message: CANCELLED_REQUEST, reader: jspb.BinaryReader): CANCELLED_REQUEST;
}

export namespace CANCELLED_REQUEST {
  export type AsObject = {
    stationNo?: number,
    formNo?: number,
    custkey?: string,
    documentNo?: string,
    requestBy?: string,
    requestDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    counter?: number,
    state?: number,
    closed?: boolean,
    status?: string,
    surname?: string,
    comment?: string,
    actionsList: Array<CANCELLED_BILL_ACTION.AsObject>,
    billsList: Array<CANCELLED_BILL.AsObject>,
    cancelled?: boolean,
    edited?: boolean,
    applicationtype?: number,
    entriesMap: Array<[string, FieldValue.AsObject]>,
    applicationtypename?: string,
    iscancelled?: boolean,
    entriesfiledsList: Array<Field.AsObject>,
    address?: string,
    tele?: string,
    nid?: string,
    email?: string,
    agreement?: boolean,
    clientId?: number,
    countReject?: number,
    cancelation?: boolean,
  }
}

export class CANCELLED_BILL_ACTION extends jspb.Message {
  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasActionId(): boolean;
  clearActionId(): void;
  getActionId(): number | undefined;
  setActionId(value: number): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): number | undefined;
  setUserId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasActionduration(): boolean;
  clearActionduration(): void;
  getActionduration(): number | undefined;
  setActionduration(value: number): void;

  hasActionDurationType(): boolean;
  clearActionDurationType(): void;
  getActionDurationType(): DurationTypeMap[keyof DurationTypeMap] | undefined;
  setActionDurationType(value: DurationTypeMap[keyof DurationTypeMap]): void;

  hasEstimateaction(): boolean;
  clearEstimateaction(): void;
  getEstimateaction(): number | undefined;
  setEstimateaction(value: number): void;

  hasStampUserFullname(): boolean;
  clearStampUserFullname(): void;
  getStampUserFullname(): string | undefined;
  setStampUserFullname(value: string): void;

  hasActionDurationTypename(): boolean;
  clearActionDurationTypename(): void;
  getActionDurationTypename(): string | undefined;
  setActionDurationTypename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCELLED_BILL_ACTION.AsObject;
  static toObject(includeInstance: boolean, msg: CANCELLED_BILL_ACTION): CANCELLED_BILL_ACTION.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CANCELLED_BILL_ACTION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCELLED_BILL_ACTION;
  static deserializeBinaryFromReader(message: CANCELLED_BILL_ACTION, reader: jspb.BinaryReader): CANCELLED_BILL_ACTION;
}

export namespace CANCELLED_BILL_ACTION {
  export type AsObject = {
    formNo?: number,
    actionId?: number,
    documentNo?: string,
    custkey?: string,
    stampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampUser?: string,
    comment?: string,
    userId?: number,
    description?: string,
    actionduration?: number,
    actionDurationType?: DurationTypeMap[keyof DurationTypeMap],
    estimateaction?: number,
    stampUserFullname?: string,
    actionDurationTypename?: string,
  }
}

export class CANCELLED_BILL extends jspb.Message {
  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasCancelledBy(): boolean;
  clearCancelledBy(): void;
  getCancelledBy(): string | undefined;
  setCancelledBy(value: string): void;

  hasCancelledDate(): boolean;
  clearCancelledDate(): void;
  getCancelledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasApplicationtype(): boolean;
  clearApplicationtype(): void;
  getApplicationtype(): number | undefined;
  setApplicationtype(value: number): void;

  hasInform(): boolean;
  clearInform(): void;
  getInform(): boolean | undefined;
  setInform(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CANCELLED_BILL.AsObject;
  static toObject(includeInstance: boolean, msg: CANCELLED_BILL): CANCELLED_BILL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CANCELLED_BILL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CANCELLED_BILL;
  static deserializeBinaryFromReader(message: CANCELLED_BILL, reader: jspb.BinaryReader): CANCELLED_BILL;
}

export namespace CANCELLED_BILL {
  export type AsObject = {
    formNo?: number,
    custkey?: string,
    paymentNo?: string,
    documentNo?: string,
    clBlnce?: number,
    cancelledBy?: string,
    cancelledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stationNo?: number,
    surname?: string,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comment?: string,
    applicationtype?: number,
    inform?: boolean,
  }
}

export class LU_CANCELLED_BILL_ACTION extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCurrentState(): boolean;
  clearCurrentState(): void;
  getCurrentState(): number | undefined;
  setCurrentState(value: number): void;

  hasNextState(): boolean;
  clearNextState(): void;
  getNextState(): number | undefined;
  setNextState(value: number): void;

  hasClosed(): boolean;
  clearClosed(): void;
  getClosed(): boolean | undefined;
  setClosed(value: boolean): void;

  hasStartUp(): boolean;
  clearStartUp(): void;
  getStartUp(): boolean | undefined;
  setStartUp(value: boolean): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): number | undefined;
  setDepartment(value: number): void;

  hasApplicationtype(): boolean;
  clearApplicationtype(): void;
  getApplicationtype(): number | undefined;
  setApplicationtype(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<FieldGroup>;
  setFieldsList(value: Array<FieldGroup>): void;
  addFields(value?: FieldGroup, index?: number): FieldGroup;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): number | undefined;
  setDuration(value: number): void;

  hasDurationType(): boolean;
  clearDurationType(): void;
  getDurationType(): DurationTypeMap[keyof DurationTypeMap] | undefined;
  setDurationType(value: DurationTypeMap[keyof DurationTypeMap]): void;

  hasIdd(): boolean;
  clearIdd(): void;
  getIdd(): number | undefined;
  setIdd(value: number): void;

  hasRecalcRejectAction(): boolean;
  clearRecalcRejectAction(): void;
  getRecalcRejectAction(): boolean | undefined;
  setRecalcRejectAction(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_CANCELLED_BILL_ACTION.AsObject;
  static toObject(includeInstance: boolean, msg: LU_CANCELLED_BILL_ACTION): LU_CANCELLED_BILL_ACTION.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LU_CANCELLED_BILL_ACTION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_CANCELLED_BILL_ACTION;
  static deserializeBinaryFromReader(message: LU_CANCELLED_BILL_ACTION, reader: jspb.BinaryReader): LU_CANCELLED_BILL_ACTION;
}

export namespace LU_CANCELLED_BILL_ACTION {
  export type AsObject = {
    id?: number,
    description?: string,
    currentState?: number,
    nextState?: number,
    closed?: boolean,
    startUp?: boolean,
    department?: number,
    applicationtype?: number,
    fieldsList: Array<FieldGroup.AsObject>,
    duration?: number,
    durationType?: DurationTypeMap[keyof DurationTypeMap],
    idd?: number,
    recalcRejectAction?: boolean,
  }
}

export class LU_CANCELLED_BILL_STATE extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasRecalReady(): boolean;
  clearRecalReady(): void;
  getRecalReady(): boolean | undefined;
  setRecalReady(value: boolean): void;

  hasCancelled(): boolean;
  clearCancelled(): void;
  getCancelled(): boolean | undefined;
  setCancelled(value: boolean): void;

  hasEdited(): boolean;
  clearEdited(): void;
  getEdited(): boolean | undefined;
  setEdited(value: boolean): void;

  hasApplicationtype(): boolean;
  clearApplicationtype(): void;
  getApplicationtype(): number | undefined;
  setApplicationtype(value: number): void;

  hasIdd(): boolean;
  clearIdd(): void;
  getIdd(): number | undefined;
  setIdd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_CANCELLED_BILL_STATE.AsObject;
  static toObject(includeInstance: boolean, msg: LU_CANCELLED_BILL_STATE): LU_CANCELLED_BILL_STATE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LU_CANCELLED_BILL_STATE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_CANCELLED_BILL_STATE;
  static deserializeBinaryFromReader(message: LU_CANCELLED_BILL_STATE, reader: jspb.BinaryReader): LU_CANCELLED_BILL_STATE;
}

export namespace LU_CANCELLED_BILL_STATE {
  export type AsObject = {
    id?: number,
    description?: string,
    recalReady?: boolean,
    cancelled?: boolean,
    edited?: boolean,
    applicationtype?: number,
    idd?: number,
  }
}

export class PAYMENT_METHOD extends jspb.Message {
  hasTypeId(): boolean;
  clearTypeId(): void;
  getTypeId(): number | undefined;
  setTypeId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasBilingCode(): boolean;
  clearBilingCode(): void;
  getBilingCode(): string | undefined;
  setBilingCode(value: string): void;

  hasIsSystem(): boolean;
  clearIsSystem(): void;
  getIsSystem(): boolean | undefined;
  setIsSystem(value: boolean): void;

  hasSelectable(): boolean;
  clearSelectable(): void;
  getSelectable(): boolean | undefined;
  setSelectable(value: boolean): void;

  hasSelectableHh(): boolean;
  clearSelectableHh(): void;
  getSelectableHh(): boolean | undefined;
  setSelectableHh(value: boolean): void;

  hasReceiptChargeAmount1(): boolean;
  clearReceiptChargeAmount1(): void;
  getReceiptChargeAmount1(): number | undefined;
  setReceiptChargeAmount1(value: number): void;

  hasReceiptChargePercentage1(): boolean;
  clearReceiptChargePercentage1(): void;
  getReceiptChargePercentage1(): number | undefined;
  setReceiptChargePercentage1(value: number): void;

  hasReceiptChargeTitle1(): boolean;
  clearReceiptChargeTitle1(): void;
  getReceiptChargeTitle1(): string | undefined;
  setReceiptChargeTitle1(value: string): void;

  hasReceiptChargeAmount2(): boolean;
  clearReceiptChargeAmount2(): void;
  getReceiptChargeAmount2(): number | undefined;
  setReceiptChargeAmount2(value: number): void;

  hasReceiptChargePercentage2(): boolean;
  clearReceiptChargePercentage2(): void;
  getReceiptChargePercentage2(): number | undefined;
  setReceiptChargePercentage2(value: number): void;

  hasReceiptChargeTitle2(): boolean;
  clearReceiptChargeTitle2(): void;
  getReceiptChargeTitle2(): string | undefined;
  setReceiptChargeTitle2(value: string): void;

  hasReceiptChargeAmount3(): boolean;
  clearReceiptChargeAmount3(): void;
  getReceiptChargeAmount3(): number | undefined;
  setReceiptChargeAmount3(value: number): void;

  hasReceiptChargePercentage3(): boolean;
  clearReceiptChargePercentage3(): void;
  getReceiptChargePercentage3(): number | undefined;
  setReceiptChargePercentage3(value: number): void;

  hasReceiptChargeTitle3(): boolean;
  clearReceiptChargeTitle3(): void;
  getReceiptChargeTitle3(): string | undefined;
  setReceiptChargeTitle3(value: string): void;

  hasApplyMin1(): boolean;
  clearApplyMin1(): void;
  getApplyMin1(): number | undefined;
  setApplyMin1(value: number): void;

  hasApplyMax1(): boolean;
  clearApplyMax1(): void;
  getApplyMax1(): number | undefined;
  setApplyMax1(value: number): void;

  hasValueMin1(): boolean;
  clearValueMin1(): void;
  getValueMin1(): number | undefined;
  setValueMin1(value: number): void;

  hasValueMax1(): boolean;
  clearValueMax1(): void;
  getValueMax1(): number | undefined;
  setValueMax1(value: number): void;

  hasApplyMin2(): boolean;
  clearApplyMin2(): void;
  getApplyMin2(): number | undefined;
  setApplyMin2(value: number): void;

  hasApplyMax2(): boolean;
  clearApplyMax2(): void;
  getApplyMax2(): number | undefined;
  setApplyMax2(value: number): void;

  hasValueMin2(): boolean;
  clearValueMin2(): void;
  getValueMin2(): number | undefined;
  setValueMin2(value: number): void;

  hasValueMax2(): boolean;
  clearValueMax2(): void;
  getValueMax2(): number | undefined;
  setValueMax2(value: number): void;

  hasApplyMin3(): boolean;
  clearApplyMin3(): void;
  getApplyMin3(): number | undefined;
  setApplyMin3(value: number): void;

  hasApplyMax3(): boolean;
  clearApplyMax3(): void;
  getApplyMax3(): number | undefined;
  setApplyMax3(value: number): void;

  hasValueMin3(): boolean;
  clearValueMin3(): void;
  getValueMin3(): number | undefined;
  setValueMin3(value: number): void;

  hasValueMax3(): boolean;
  clearValueMax3(): void;
  getValueMax3(): number | undefined;
  setValueMax3(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PAYMENT_METHOD.AsObject;
  static toObject(includeInstance: boolean, msg: PAYMENT_METHOD): PAYMENT_METHOD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PAYMENT_METHOD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PAYMENT_METHOD;
  static deserializeBinaryFromReader(message: PAYMENT_METHOD, reader: jspb.BinaryReader): PAYMENT_METHOD;
}

export namespace PAYMENT_METHOD {
  export type AsObject = {
    typeId?: number,
    description?: string,
    bilingCode?: string,
    isSystem?: boolean,
    selectable?: boolean,
    selectableHh?: boolean,
    receiptChargeAmount1?: number,
    receiptChargePercentage1?: number,
    receiptChargeTitle1?: string,
    receiptChargeAmount2?: number,
    receiptChargePercentage2?: number,
    receiptChargeTitle2?: string,
    receiptChargeAmount3?: number,
    receiptChargePercentage3?: number,
    receiptChargeTitle3?: string,
    applyMin1?: number,
    applyMax1?: number,
    valueMin1?: number,
    valueMax1?: number,
    applyMin2?: number,
    applyMax2?: number,
    valueMin2?: number,
    valueMax2?: number,
    applyMin3?: number,
    applyMax3?: number,
    valueMin3?: number,
    valueMax3?: number,
    id?: number,
  }
}

export class RECEIPT extends jspb.Message {
  hasReceiptNo(): boolean;
  clearReceiptNo(): void;
  getReceiptNo(): string | undefined;
  setReceiptNo(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasCollectionDate(): boolean;
  clearCollectionDate(): void;
  getCollectionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCollectionType(): boolean;
  clearCollectionType(): void;
  getCollectionType(): number | undefined;
  setCollectionType(value: number): void;

  hasCollectionMethod(): boolean;
  clearCollectionMethod(): void;
  getCollectionMethod(): number | undefined;
  setCollectionMethod(value: number): void;

  hasPaymentMethod(): boolean;
  clearPaymentMethod(): void;
  getPaymentMethod(): number | undefined;
  setPaymentMethod(value: number): void;

  hasCheqNo(): boolean;
  clearCheqNo(): void;
  getCheqNo(): string | undefined;
  setCheqNo(value: string): void;

  hasCheqBank(): boolean;
  clearCheqBank(): void;
  getCheqBank(): string | undefined;
  setCheqBank(value: string): void;

  hasDiscountAmount(): boolean;
  clearDiscountAmount(): void;
  getDiscountAmount(): number | undefined;
  setDiscountAmount(value: number): void;

  hasDiscountDocumentNo(): boolean;
  clearDiscountDocumentNo(): void;
  getDiscountDocumentNo(): string | undefined;
  setDiscountDocumentNo(value: string): void;

  hasDocumentNo(): boolean;
  clearDocumentNo(): void;
  getDocumentNo(): string | undefined;
  setDocumentNo(value: string): void;

  hasCancelled(): boolean;
  clearCancelled(): void;
  getCancelled(): boolean | undefined;
  setCancelled(value: boolean): void;

  hasCancelledAmount(): boolean;
  clearCancelledAmount(): void;
  getCancelledAmount(): number | undefined;
  setCancelledAmount(value: number): void;

  hasCancelledBy(): boolean;
  clearCancelledBy(): void;
  getCancelledBy(): string | undefined;
  setCancelledBy(value: string): void;

  hasCancelledReason(): boolean;
  clearCancelledReason(): void;
  getCancelledReason(): string | undefined;
  setCancelledReason(value: string): void;

  hasCancelledDate(): boolean;
  clearCancelledDate(): void;
  getCancelledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelledDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

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
  getStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDepositId(): boolean;
  clearDepositId(): void;
  getDepositId(): number | undefined;
  setDepositId(value: number): void;

  hasIsPosted(): boolean;
  clearIsPosted(): void;
  getIsPosted(): boolean | undefined;
  setIsPosted(value: boolean): void;

  hasPostDate(): boolean;
  clearPostDate(): void;
  getPostDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPostBy(): boolean;
  clearPostBy(): void;
  getPostBy(): string | undefined;
  setPostBy(value: string): void;

  hasTransNo(): boolean;
  clearTransNo(): void;
  getTransNo(): number | undefined;
  setTransNo(value: number): void;

  hasInsCycleId(): boolean;
  clearInsCycleId(): void;
  getInsCycleId(): number | undefined;
  setInsCycleId(value: number): void;

  hasInsBilngDate(): boolean;
  clearInsBilngDate(): void;
  getInsBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInsBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasIsHafzaPrinted(): boolean;
  clearIsHafzaPrinted(): void;
  getIsHafzaPrinted(): boolean | undefined;
  setIsHafzaPrinted(value: boolean): void;

  hasHafzaPrintCount(): boolean;
  clearHafzaPrintCount(): void;
  getHafzaPrintCount(): number | undefined;
  setHafzaPrintCount(value: number): void;

  hasHafzaPrintDate(): boolean;
  clearHafzaPrintDate(): void;
  getHafzaPrintDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setHafzaPrintDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasCollectionId(): boolean;
  clearCollectionId(): void;
  getCollectionId(): number | undefined;
  setCollectionId(value: number): void;

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

  hasCancelledRecieptNo(): boolean;
  clearCancelledRecieptNo(): void;
  getCancelledRecieptNo(): string | undefined;
  setCancelledRecieptNo(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): number | undefined;
  setUserId(value: number): void;

  hasFptn(): boolean;
  clearFptn(): void;
  getFptn(): string | undefined;
  setFptn(value: string): void;

  hasFcrn(): boolean;
  clearFcrn(): void;
  getFcrn(): string | undefined;
  setFcrn(value: string): void;

  hasBlrptn(): boolean;
  clearBlrptn(): void;
  getBlrptn(): string | undefined;
  setBlrptn(value: string): void;

  hasReceiptType(): boolean;
  clearReceiptType(): void;
  getReceiptType(): number | undefined;
  setReceiptType(value: number): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RECEIPT.AsObject;
  static toObject(includeInstance: boolean, msg: RECEIPT): RECEIPT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RECEIPT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RECEIPT;
  static deserializeBinaryFromReader(message: RECEIPT, reader: jspb.BinaryReader): RECEIPT;
}

export namespace RECEIPT {
  export type AsObject = {
    receiptNo?: string,
    custkey?: string,
    paymentNo?: string,
    amount?: number,
    empId?: number,
    collectionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    collectionType?: number,
    collectionMethod?: number,
    paymentMethod?: number,
    cheqNo?: string,
    cheqBank?: string,
    discountAmount?: number,
    discountDocumentNo?: string,
    documentNo?: string,
    cancelled?: boolean,
    cancelledAmount?: number,
    cancelledBy?: string,
    cancelledReason?: string,
    cancelledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lat?: number,
    lng?: number,
    accurecy?: number,
    deviceId?: string,
    stampUser?: string,
    stampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    depositId?: number,
    isPosted?: boolean,
    postDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postBy?: string,
    transNo?: number,
    insCycleId?: number,
    insBilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cycleId?: number,
    isHafzaPrinted?: boolean,
    hafzaPrintCount?: number,
    hafzaPrintDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    stationNo?: number,
    statmNo?: number,
    collectionId?: number,
    receiptCharge1?: number,
    receiptCharge2?: number,
    receiptCharge3?: number,
    cancelledRecieptNo?: string,
    userId?: number,
    fptn?: string,
    fcrn?: string,
    blrptn?: string,
    receiptType?: number,
    comment?: string,
  }
}

export class RECEPT_ITEM extends jspb.Message {
  hasCollectorName(): boolean;
  clearCollectorName(): void;
  getCollectorName(): string | undefined;
  setCollectorName(value: string): void;

  hasCollectionTypeDesc(): boolean;
  clearCollectionTypeDesc(): void;
  getCollectionTypeDesc(): string | undefined;
  setCollectionTypeDesc(value: string): void;

  hasPaymentMethodDesc(): boolean;
  clearPaymentMethodDesc(): void;
  getPaymentMethodDesc(): string | undefined;
  setPaymentMethodDesc(value: string): void;

  hasCollectionMethodDesc(): boolean;
  clearCollectionMethodDesc(): void;
  getCollectionMethodDesc(): string | undefined;
  setCollectionMethodDesc(value: string): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): RECEIPT | undefined;
  setReceipt(value?: RECEIPT): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RECEPT_ITEM.AsObject;
  static toObject(includeInstance: boolean, msg: RECEPT_ITEM): RECEPT_ITEM.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RECEPT_ITEM, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RECEPT_ITEM;
  static deserializeBinaryFromReader(message: RECEPT_ITEM, reader: jspb.BinaryReader): RECEPT_ITEM;
}

export namespace RECEPT_ITEM {
  export type AsObject = {
    collectorName?: string,
    collectionTypeDesc?: string,
    paymentMethodDesc?: string,
    collectionMethodDesc?: string,
    receipt?: RECEIPT.AsObject,
  }
}

export class BILL extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSCrReading(): boolean;
  clearSCrReading(): void;
  getSCrReading(): number | undefined;
  setSCrReading(value: number): void;

  hasSPrReading(): boolean;
  clearSPrReading(): void;
  getSPrReading(): number | undefined;
  setSPrReading(value: number): void;

  hasSConsump(): boolean;
  clearSConsump(): void;
  getSConsump(): number | undefined;
  setSConsump(value: number): void;

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

  hasPreviousAmountCollected(): boolean;
  clearPreviousAmountCollected(): void;
  getPreviousAmountCollected(): number | undefined;
  setPreviousAmountCollected(value: number): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasInstalmentDate(): boolean;
  clearInstalmentDate(): void;
  getInstalmentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInstalmentDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAmountCollected(): boolean;
  clearAmountCollected(): void;
  getAmountCollected(): number | undefined;
  setAmountCollected(value: number): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  clearReceptsList(): void;
  getReceptsList(): Array<RECEPT_ITEM>;
  setReceptsList(value: Array<RECEPT_ITEM>): void;
  addRecepts(value?: RECEPT_ITEM, index?: number): RECEPT_ITEM;

  hasCtg(): boolean;
  clearCtg(): void;
  getCtg(): string | undefined;
  setCtg(value: string): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasCollectionDate(): boolean;
  clearCollectionDate(): void;
  getCollectionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasIsCancelled(): boolean;
  clearIsCancelled(): void;
  getIsCancelled(): boolean | undefined;
  setIsCancelled(value: boolean): void;

  hasRecalcId(): boolean;
  clearRecalcId(): void;
  getRecalcId(): number | undefined;
  setRecalcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BILL.AsObject;
  static toObject(includeInstance: boolean, msg: BILL): BILL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BILL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BILL;
  static deserializeBinaryFromReader(message: BILL, reader: jspb.BinaryReader): BILL;
}

export namespace BILL {
  export type AsObject = {
    custkey?: string,
    paymentNo?: string,
    cycleId?: number,
    seqNo?: number,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sCrReading?: number,
    sPrReading?: number,
    sConsump?: number,
    clBlnce?: number,
    opBlnce?: number,
    instalment?: number,
    previousAmountCollected?: number,
    calcType?: string,
    instalmentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    amountCollected?: number,
    surname?: string,
    receptsList: Array<RECEPT_ITEM.AsObject>,
    ctg?: string,
    oldKey?: string,
    collectionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dueAmount?: number,
    isCancelled?: boolean,
    recalcId?: number,
  }
}

export class VWHAND_BILL extends jspb.Message {
  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasStatmNo(): boolean;
  clearStatmNo(): void;
  getStatmNo(): number | undefined;
  setStatmNo(value: number): void;

  hasReadingDeviceid(): boolean;
  clearReadingDeviceid(): void;
  getReadingDeviceid(): string | undefined;
  setReadingDeviceid(value: string): void;

  hasCollectionDeviceid(): boolean;
  clearCollectionDeviceid(): void;
  getCollectionDeviceid(): string | undefined;
  setCollectionDeviceid(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNoC(): boolean;
  clearBookNoC(): void;
  getBookNoC(): string | undefined;
  setBookNoC(value: string): void;

  hasWalkNoC(): boolean;
  clearWalkNoC(): void;
  getWalkNoC(): string | undefined;
  setWalkNoC(value: string): void;

  hasSeqNoC(): boolean;
  clearSeqNoC(): void;
  getSeqNoC(): number | undefined;
  setSeqNoC(value: number): void;

  hasBookNoR(): boolean;
  clearBookNoR(): void;
  getBookNoR(): string | undefined;
  setBookNoR(value: string): void;

  hasWalkNoR(): boolean;
  clearWalkNoR(): void;
  getWalkNoR(): string | undefined;
  setWalkNoR(value: string): void;

  hasSeqNoR(): boolean;
  clearSeqNoR(): void;
  getSeqNoR(): number | undefined;
  setSeqNoR(value: number): void;

  hasTentName(): boolean;
  clearTentName(): void;
  getTentName(): string | undefined;
  setTentName(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

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

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasPrRead1(): boolean;
  clearPrRead1(): void;
  getPrRead1(): number | undefined;
  setPrRead1(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasDescrepancy(): boolean;
  clearDescrepancy(): void;
  getDescrepancy(): number | undefined;
  setDescrepancy(value: number): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  hasOpStatus(): boolean;
  clearOpStatus(): void;
  getOpStatus(): number | undefined;
  setOpStatus(value: number): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasMinConsump(): boolean;
  clearMinConsump(): void;
  getMinConsump(): number | undefined;
  setMinConsump(value: number): void;

  hasMaxConsump(): boolean;
  clearMaxConsump(): void;
  getMaxConsump(): number | undefined;
  setMaxConsump(value: number): void;

  hasCtypegrpId(): boolean;
  clearCtypegrpId(): void;
  getCtypegrpId(): string | undefined;
  setCtypegrpId(value: string): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasServAloc(): boolean;
  clearServAloc(): void;
  getServAloc(): string | undefined;
  setServAloc(value: string): void;

  hasLatC(): boolean;
  clearLatC(): void;
  getLatC(): number | undefined;
  setLatC(value: number): void;

  hasLngC(): boolean;
  clearLngC(): void;
  getLngC(): number | undefined;
  setLngC(value: number): void;

  hasLatR(): boolean;
  clearLatR(): void;
  getLatR(): number | undefined;
  setLatR(value: number): void;

  hasLngR(): boolean;
  clearLngR(): void;
  getLngR(): number | undefined;
  setLngR(value: number): void;

  hasIsReadingRow(): boolean;
  clearIsReadingRow(): void;
  getIsReadingRow(): number | undefined;
  setIsReadingRow(value: number): void;

  hasIsCollectionRow(): boolean;
  clearIsCollectionRow(): void;
  getIsCollectionRow(): number | undefined;
  setIsCollectionRow(value: number): void;

  hasNoUnitsNew(): boolean;
  clearNoUnitsNew(): void;
  getNoUnitsNew(): number | undefined;
  setNoUnitsNew(value: number): void;

  hasCTypeNew(): boolean;
  clearCTypeNew(): void;
  getCTypeNew(): string | undefined;
  setCTypeNew(value: string): void;

  hasIsSewerAllocateNew(): boolean;
  clearIsSewerAllocateNew(): void;
  getIsSewerAllocateNew(): boolean | undefined;
  setIsSewerAllocateNew(value: boolean): void;

  hasReadingDate(): boolean;
  clearReadingDate(): void;
  getReadingDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadingDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCollectionDate(): boolean;
  clearCollectionDate(): void;
  getCollectionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIsPostedR(): boolean;
  clearIsPostedR(): void;
  getIsPostedR(): boolean | undefined;
  setIsPostedR(value: boolean): void;

  hasPostDateR(): boolean;
  clearPostDateR(): void;
  getPostDateR(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostDateR(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReadingNote(): boolean;
  clearReadingNote(): void;
  getReadingNote(): number | undefined;
  setReadingNote(value: number): void;

  hasCollectionNote(): boolean;
  clearCollectionNote(): void;
  getCollectionNote(): number | undefined;
  setCollectionNote(value: number): void;

  hasLocationSource(): boolean;
  clearLocationSource(): void;
  getLocationSource(): number | undefined;
  setLocationSource(value: number): void;

  hasLocationDate(): boolean;
  clearLocationDate(): void;
  getLocationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLocationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEmpidC(): boolean;
  clearEmpidC(): void;
  getEmpidC(): number | undefined;
  setEmpidC(value: number): void;

  hasEmpidR(): boolean;
  clearEmpidR(): void;
  getEmpidR(): number | undefined;
  setEmpidR(value: number): void;

  hasHhuserC(): boolean;
  clearHhuserC(): void;
  getHhuserC(): string | undefined;
  setHhuserC(value: string): void;

  hasHhuserR(): boolean;
  clearHhuserR(): void;
  getHhuserR(): string | undefined;
  setHhuserR(value: string): void;

  hasAccurecyC(): boolean;
  clearAccurecyC(): void;
  getAccurecyC(): number | undefined;
  setAccurecyC(value: number): void;

  hasAccurecyR(): boolean;
  clearAccurecyR(): void;
  getAccurecyR(): number | undefined;
  setAccurecyR(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasUpdateCountC(): boolean;
  clearUpdateCountC(): void;
  getUpdateCountC(): number | undefined;
  setUpdateCountC(value: number): void;

  hasSyncCountC(): boolean;
  clearSyncCountC(): void;
  getSyncCountC(): number | undefined;
  setSyncCountC(value: number): void;

  hasUpdateCountR(): boolean;
  clearUpdateCountR(): void;
  getUpdateCountR(): number | undefined;
  setUpdateCountR(value: number): void;

  hasSyncCountR(): boolean;
  clearSyncCountR(): void;
  getSyncCountR(): number | undefined;
  setSyncCountR(value: number): void;

  hasIsCancelledC(): boolean;
  clearIsCancelledC(): void;
  getIsCancelledC(): boolean | undefined;
  setIsCancelledC(value: boolean): void;

  hasIsCancelledR(): boolean;
  clearIsCancelledR(): void;
  getIsCancelledR(): boolean | undefined;
  setIsCancelledR(value: boolean): void;

  hasCancelDateC(): boolean;
  clearCancelDateC(): void;
  getCancelDateC(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelDateC(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCancelDateR(): boolean;
  clearCancelDateR(): void;
  getCancelDateR(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelDateR(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCancelByC(): boolean;
  clearCancelByC(): void;
  getCancelByC(): string | undefined;
  setCancelByC(value: string): void;

  hasCancelByR(): boolean;
  clearCancelByR(): void;
  getCancelByR(): string | undefined;
  setCancelByR(value: string): void;

  hasIsLockedC(): boolean;
  clearIsLockedC(): void;
  getIsLockedC(): boolean | undefined;
  setIsLockedC(value: boolean): void;

  hasIsLockedR(): boolean;
  clearIsLockedR(): void;
  getIsLockedR(): boolean | undefined;
  setIsLockedR(value: boolean): void;

  hasLatRef(): boolean;
  clearLatRef(): void;
  getLatRef(): number | undefined;
  setLatRef(value: number): void;

  hasLngRef(): boolean;
  clearLngRef(): void;
  getLngRef(): number | undefined;
  setLngRef(value: number): void;

  hasIsRef(): boolean;
  clearIsRef(): void;
  getIsRef(): boolean | undefined;
  setIsRef(value: boolean): void;

  hasDistanceRef(): boolean;
  clearDistanceRef(): void;
  getDistanceRef(): number | undefined;
  setDistanceRef(value: number): void;

  hasReadingDistance(): boolean;
  clearReadingDistance(): void;
  getReadingDistance(): number | undefined;
  setReadingDistance(value: number): void;

  hasOperationFlage(): boolean;
  clearOperationFlage(): void;
  getOperationFlage(): number | undefined;
  setOperationFlage(value: number): void;

  hasGard(): boolean;
  clearGard(): void;
  getGard(): boolean | undefined;
  setGard(value: boolean): void;

  hasPayPrintCount(): boolean;
  clearPayPrintCount(): void;
  getPayPrintCount(): number | undefined;
  setPayPrintCount(value: number): void;

  hasPrvPrintCount(): boolean;
  clearPrvPrintCount(): void;
  getPrvPrintCount(): number | undefined;
  setPrvPrintCount(value: number): void;

  hasInstalmentRatio(): boolean;
  clearInstalmentRatio(): void;
  getInstalmentRatio(): string | undefined;
  setInstalmentRatio(value: string): void;

  hasConsumptionType(): boolean;
  clearConsumptionType(): void;
  getConsumptionType(): string | undefined;
  setConsumptionType(value: string): void;

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

  hasHafzaPrintCount(): boolean;
  clearHafzaPrintCount(): void;
  getHafzaPrintCount(): number | undefined;
  setHafzaPrintCount(value: number): void;

  hasBuildingNo(): boolean;
  clearBuildingNo(): void;
  getBuildingNo(): number | undefined;
  setBuildingNo(value: number): void;

  hasGroupCode(): boolean;
  clearGroupCode(): void;
  getGroupCode(): number | undefined;
  setGroupCode(value: number): void;

  hasFileNo(): boolean;
  clearFileNo(): void;
  getFileNo(): number | undefined;
  setFileNo(value: number): void;

  hasAccesCode(): boolean;
  clearAccesCode(): void;
  getAccesCode(): string | undefined;
  setAccesCode(value: string): void;

  hasPrAccesCode(): boolean;
  clearPrAccesCode(): void;
  getPrAccesCode(): string | undefined;
  setPrAccesCode(value: string): void;

  hasPrOpStatus(): boolean;
  clearPrOpStatus(): void;
  getPrOpStatus(): number | undefined;
  setPrOpStatus(value: number): void;

  hasNoDials(): boolean;
  clearNoDials(): void;
  getNoDials(): number | undefined;
  setNoDials(value: number): void;

  hasClockOver(): boolean;
  clearClockOver(): void;
  getClockOver(): boolean | undefined;
  setClockOver(value: boolean): void;

  hasSuperLockR(): boolean;
  clearSuperLockR(): void;
  getSuperLockR(): boolean | undefined;
  setSuperLockR(value: boolean): void;

  hasIsHhNotified(): boolean;
  clearIsHhNotified(): void;
  getIsHhNotified(): boolean | undefined;
  setIsHhNotified(value: boolean): void;

  hasIsHqNotifiedC(): boolean;
  clearIsHqNotifiedC(): void;
  getIsHqNotifiedC(): boolean | undefined;
  setIsHqNotifiedC(value: boolean): void;

  hasIsHqNotifiedR(): boolean;
  clearIsHqNotifiedR(): void;
  getIsHqNotifiedR(): boolean | undefined;
  setIsHqNotifiedR(value: boolean): void;

  hasModifiedAvrgConsump(): boolean;
  clearModifiedAvrgConsump(): void;
  getModifiedAvrgConsump(): number | undefined;
  setModifiedAvrgConsump(value: number): void;

  hasConnAvrgConsump(): boolean;
  clearConnAvrgConsump(): void;
  getConnAvrgConsump(): number | undefined;
  setConnAvrgConsump(value: number): void;

  hasPrAvrgCons(): boolean;
  clearPrAvrgCons(): void;
  getPrAvrgCons(): number | undefined;
  setPrAvrgCons(value: number): void;

  hasPrevMeterRef(): boolean;
  clearPrevMeterRef(): void;
  getPrevMeterRef(): string | undefined;
  setPrevMeterRef(value: string): void;

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

  hasTakafulAmt(): boolean;
  clearTakafulAmt(): void;
  getTakafulAmt(): number | undefined;
  setTakafulAmt(value: number): void;

  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): void;
  getTanzeemAmt(): number | undefined;
  setTanzeemAmt(value: number): void;

  hasMeterInstallsAmt(): boolean;
  clearMeterInstallsAmt(): void;
  getMeterInstallsAmt(): number | undefined;
  setMeterInstallsAmt(value: number): void;

  hasConnInstallsAmt(): boolean;
  clearConnInstallsAmt(): void;
  getConnInstallsAmt(): number | undefined;
  setConnInstallsAmt(value: number): void;

  hasRoundAmt(): boolean;
  clearRoundAmt(): void;
  getRoundAmt(): number | undefined;
  setRoundAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  hasOtherAmt1(): boolean;
  clearOtherAmt1(): void;
  getOtherAmt1(): number | undefined;
  setOtherAmt1(value: number): void;

  hasOtherAmt2(): boolean;
  clearOtherAmt2(): void;
  getOtherAmt2(): number | undefined;
  setOtherAmt2(value: number): void;

  hasOtherAmt3(): boolean;
  clearOtherAmt3(): void;
  getOtherAmt3(): number | undefined;
  setOtherAmt3(value: number): void;

  hasOtherAmt4(): boolean;
  clearOtherAmt4(): void;
  getOtherAmt4(): number | undefined;
  setOtherAmt4(value: number): void;

  hasOtherAmt5(): boolean;
  clearOtherAmt5(): void;
  getOtherAmt5(): number | undefined;
  setOtherAmt5(value: number): void;

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

  hasComputerAmt(): boolean;
  clearComputerAmt(): void;
  getComputerAmt(): number | undefined;
  setComputerAmt(value: number): void;

  hasContractAmt(): boolean;
  clearContractAmt(): void;
  getContractAmt(): number | undefined;
  setContractAmt(value: number): void;

  hasGovAmt(): boolean;
  clearGovAmt(): void;
  getGovAmt(): number | undefined;
  setGovAmt(value: number): void;

  hasUniAmt(): boolean;
  clearUniAmt(): void;
  getUniAmt(): number | undefined;
  setUniAmt(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasBillReady(): boolean;
  clearBillReady(): void;
  getBillReady(): boolean | undefined;
  setBillReady(value: boolean): void;

  hasPrRead2(): boolean;
  clearPrRead2(): void;
  getPrRead2(): number | undefined;
  setPrRead2(value: number): void;

  hasPrCons(): boolean;
  clearPrCons(): void;
  getPrCons(): number | undefined;
  setPrCons(value: number): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasPrReadType(): boolean;
  clearPrReadType(): void;
  getPrReadType(): string | undefined;
  setPrReadType(value: string): void;

  hasIsAccConsump(): boolean;
  clearIsAccConsump(): void;
  getIsAccConsump(): boolean | undefined;
  setIsAccConsump(value: boolean): void;

  hasAccDate(): boolean;
  clearAccDate(): void;
  getAccDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMarked(): boolean;
  clearMarked(): void;
  getMarked(): boolean | undefined;
  setMarked(value: boolean): void;

  hasMarkeNote(): boolean;
  clearMarkeNote(): void;
  getMarkeNote(): string | undefined;
  setMarkeNote(value: string): void;

  hasNegativeFlage(): boolean;
  clearNegativeFlage(): void;
  getNegativeFlage(): number | undefined;
  setNegativeFlage(value: number): void;

  hasIsGardPost(): boolean;
  clearIsGardPost(): void;
  getIsGardPost(): boolean | undefined;
  setIsGardPost(value: boolean): void;

  hasPortalCrReading(): boolean;
  clearPortalCrReading(): void;
  getPortalCrReading(): number | undefined;
  setPortalCrReading(value: number): void;

  hasPortalCrDate(): boolean;
  clearPortalCrDate(): void;
  getPortalCrDate(): number | undefined;
  setPortalCrDate(value: number): void;

  hasGardStampdate(): boolean;
  clearGardStampdate(): void;
  getGardStampdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGardStampdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasGardUser(): boolean;
  clearGardUser(): void;
  getGardUser(): string | undefined;
  setGardUser(value: string): void;

  hasIsMultiCtypes(): boolean;
  clearIsMultiCtypes(): void;
  getIsMultiCtypes(): boolean | undefined;
  setIsMultiCtypes(value: boolean): void;

  hasOtherCurAmt(): boolean;
  clearOtherCurAmt(): void;
  getOtherCurAmt(): number | undefined;
  setOtherCurAmt(value: number): void;

  hasCleanAmt(): boolean;
  clearCleanAmt(): void;
  getCleanAmt(): number | undefined;
  setCleanAmt(value: number): void;

  hasCollectionAmt(): boolean;
  clearCollectionAmt(): void;
  getCollectionAmt(): number | undefined;
  setCollectionAmt(value: number): void;

  hasPartialCurAmt(): boolean;
  clearPartialCurAmt(): void;
  getPartialCurAmt(): number | undefined;
  setPartialCurAmt(value: number): void;

  hasAmountCollected(): boolean;
  clearAmountCollected(): void;
  getAmountCollected(): number | undefined;
  setAmountCollected(value: number): void;

  hasBillAmount(): boolean;
  clearBillAmount(): void;
  getBillAmount(): number | undefined;
  setBillAmount(value: number): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasIssueSt(): boolean;
  clearIssueSt(): void;
  getIssueSt(): number | undefined;
  setIssueSt(value: number): void;

  hasIssueType(): boolean;
  clearIssueType(): void;
  getIssueType(): number | undefined;
  setIssueType(value: number): void;

  hasIssueStId(): boolean;
  clearIssueStId(): void;
  getIssueStId(): number | undefined;
  setIssueStId(value: number): void;

  hasPrintReady(): boolean;
  clearPrintReady(): void;
  getPrintReady(): boolean | undefined;
  setPrintReady(value: boolean): void;

  hasBillAdjAmount(): boolean;
  clearBillAdjAmount(): void;
  getBillAdjAmount(): number | undefined;
  setBillAdjAmount(value: number): void;

  hasInstalmentDate(): boolean;
  clearInstalmentDate(): void;
  getInstalmentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInstalmentDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMinCharge(): boolean;
  clearMinCharge(): void;
  getMinCharge(): number | undefined;
  setMinCharge(value: number): void;

  hasPrevOwnerC(): boolean;
  clearPrevOwnerC(): void;
  getPrevOwnerC(): number | undefined;
  setPrevOwnerC(value: number): void;

  hasTransfeerDateC(): boolean;
  clearTransfeerDateC(): void;
  getTransfeerDateC(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTransfeerDateC(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrevOwnerR(): boolean;
  clearPrevOwnerR(): void;
  getPrevOwnerR(): number | undefined;
  setPrevOwnerR(value: number): void;

  hasTransfeerDateR(): boolean;
  clearTransfeerDateR(): void;
  getTransfeerDateR(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTransfeerDateR(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReadingCycleid(): boolean;
  clearReadingCycleid(): void;
  getReadingCycleid(): number | undefined;
  setReadingCycleid(value: number): void;

  hasReadingBilngdate(): boolean;
  clearReadingBilngdate(): void;
  getReadingBilngdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadingBilngdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReadBy(): boolean;
  clearReadBy(): void;
  getReadBy(): string | undefined;
  setReadBy(value: string): void;

  hasReadMethod(): boolean;
  clearReadMethod(): void;
  getReadMethod(): string | undefined;
  setReadMethod(value: string): void;

  hasIsEstimReading(): boolean;
  clearIsEstimReading(): void;
  getIsEstimReading(): boolean | undefined;
  setIsEstimReading(value: boolean): void;

  hasIsMultiConn(): boolean;
  clearIsMultiConn(): void;
  getIsMultiConn(): boolean | undefined;
  setIsMultiConn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VWHAND_BILL.AsObject;
  static toObject(includeInstance: boolean, msg: VWHAND_BILL): VWHAND_BILL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VWHAND_BILL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VWHAND_BILL;
  static deserializeBinaryFromReader(message: VWHAND_BILL, reader: jspb.BinaryReader): VWHAND_BILL;
}

export namespace VWHAND_BILL {
  export type AsObject = {
    stationNo?: number,
    custkey?: string,
    cycleId?: number,
    statmNo?: number,
    readingDeviceid?: string,
    collectionDeviceid?: string,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    billgroup?: string,
    bookNoC?: string,
    walkNoC?: string,
    seqNoC?: number,
    bookNoR?: string,
    walkNoR?: string,
    seqNoR?: number,
    tentName?: string,
    cType?: string,
    description?: string,
    meterType?: string,
    meterRef?: string,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    propRef?: string,
    crReading?: number,
    prRead1?: number,
    consump?: number,
    descrepancy?: number,
    stampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampUser?: string,
    opStatus?: number,
    clBlnce?: number,
    deliverySt?: number,
    paymentNo?: string,
    minConsump?: number,
    maxConsump?: number,
    ctypegrpId?: string,
    noUnits?: number,
    servAloc?: string,
    latC?: number,
    lngC?: number,
    latR?: number,
    lngR?: number,
    isReadingRow?: number,
    isCollectionRow?: number,
    noUnitsNew?: number,
    cTypeNew?: string,
    isSewerAllocateNew?: boolean,
    readingDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    collectionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isPostedR?: boolean,
    postDateR?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readingNote?: number,
    collectionNote?: number,
    locationSource?: number,
    locationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    empidC?: number,
    empidR?: number,
    hhuserC?: string,
    hhuserR?: string,
    accurecyC?: number,
    accurecyR?: number,
    oldKey?: string,
    updateCountC?: number,
    syncCountC?: number,
    updateCountR?: number,
    syncCountR?: number,
    isCancelledC?: boolean,
    isCancelledR?: boolean,
    cancelDateC?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelDateR?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelByC?: string,
    cancelByR?: string,
    isLockedC?: boolean,
    isLockedR?: boolean,
    latRef?: number,
    lngRef?: number,
    isRef?: boolean,
    distanceRef?: number,
    readingDistance?: number,
    operationFlage?: number,
    gard?: boolean,
    payPrintCount?: number,
    prvPrintCount?: number,
    instalmentRatio?: string,
    consumptionType?: string,
    readType?: number,
    sMeterType?: string,
    sConsump?: number,
    sPrReading?: number,
    sCrReading?: number,
    hafzaPrintCount?: number,
    buildingNo?: number,
    groupCode?: number,
    fileNo?: number,
    accesCode?: string,
    prAccesCode?: string,
    prOpStatus?: number,
    noDials?: number,
    clockOver?: boolean,
    superLockR?: boolean,
    isHhNotified?: boolean,
    isHqNotifiedC?: boolean,
    isHqNotifiedR?: boolean,
    modifiedAvrgConsump?: number,
    connAvrgConsump?: number,
    prAvrgCons?: number,
    prevMeterRef?: string,
    waterAmt?: number,
    sewerAmt?: number,
    basicAmt?: number,
    taxAmt?: number,
    installsAmt?: number,
    dbtAmt?: number,
    crdtAmt?: number,
    agreemAmt?: number,
    takafulAmt?: number,
    tanzeemAmt?: number,
    meterInstallsAmt?: number,
    connInstallsAmt?: number,
    roundAmt?: number,
    otherAmt?: number,
    otherAmt1?: number,
    otherAmt2?: number,
    otherAmt3?: number,
    otherAmt4?: number,
    otherAmt5?: number,
    meterAmt?: number,
    connAmt?: number,
    meterManAmt?: number,
    computerAmt?: number,
    contractAmt?: number,
    govAmt?: number,
    uniAmt?: number,
    opBlnce?: number,
    instalment?: number,
    curPaymnts?: number,
    curCharges?: number,
    billReady?: boolean,
    prRead2?: number,
    prCons?: number,
    calcType?: string,
    prReadType?: string,
    isAccConsump?: boolean,
    accDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    marked?: boolean,
    markeNote?: string,
    negativeFlage?: number,
    isGardPost?: boolean,
    portalCrReading?: number,
    portalCrDate?: number,
    gardStampdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gardUser?: string,
    isMultiCtypes?: boolean,
    otherCurAmt?: number,
    cleanAmt?: number,
    collectionAmt?: number,
    partialCurAmt?: number,
    amountCollected?: number,
    billAmount?: number,
    dueAmount?: number,
    issueSt?: number,
    issueType?: number,
    issueStId?: number,
    printReady?: boolean,
    billAdjAmount?: number,
    instalmentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    minCharge?: number,
    prevOwnerC?: number,
    transfeerDateC?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    prevOwnerR?: number,
    transfeerDateR?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readingCycleid?: number,
    readingBilngdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readBy?: string,
    readMethod?: string,
    isEstimReading?: boolean,
    isMultiConn?: boolean,
  }
}

export class ListValue extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string | undefined;
  setValue(value: string): void;

  hasFieldid(): boolean;
  clearFieldid(): void;
  getFieldid(): number | undefined;
  setFieldid(value: number): void;

  hasFieldidd(): boolean;
  clearFieldidd(): void;
  getFieldidd(): number | undefined;
  setFieldidd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValue.AsObject;
  static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValue;
  static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export namespace ListValue {
  export type AsObject = {
    key?: string,
    value?: string,
    fieldid?: number,
    fieldidd?: number,
  }
}

export class ListValues extends jspb.Message {
  clearListvaluesList(): void;
  getListvaluesList(): Array<ListValue>;
  setListvaluesList(value: Array<ListValue>): void;
  addListvalues(value?: ListValue, index?: number): ListValue;

  hasFieldid(): boolean;
  clearFieldid(): void;
  getFieldid(): number | undefined;
  setFieldid(value: number): void;

  hasFieldidd(): boolean;
  clearFieldidd(): void;
  getFieldidd(): number | undefined;
  setFieldidd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValues.AsObject;
  static toObject(includeInstance: boolean, msg: ListValues): ListValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValues;
  static deserializeBinaryFromReader(message: ListValues, reader: jspb.BinaryReader): ListValues;
}

export namespace ListValues {
  export type AsObject = {
    listvaluesList: Array<ListValue.AsObject>,
    fieldid?: number,
    fieldidd?: number,
  }
}

export class Field extends jspb.Message {
  hasSeq(): boolean;
  clearSeq(): void;
  getSeq(): number | undefined;
  setSeq(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasDatatype(): boolean;
  clearDatatype(): void;
  getDatatype(): DataTypeMap[keyof DataTypeMap] | undefined;
  setDatatype(value: DataTypeMap[keyof DataTypeMap]): void;

  hasIsrequired(): boolean;
  clearIsrequired(): void;
  getIsrequired(): boolean | undefined;
  setIsrequired(value: boolean): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): FieldKindMap[keyof FieldKindMap] | undefined;
  setKind(value: FieldKindMap[keyof FieldKindMap]): void;

  hasFormat(): boolean;
  clearFormat(): void;
  getFormat(): string | undefined;
  setFormat(value: string): void;

  hasListvalues(): boolean;
  clearListvalues(): void;
  getListvalues(): ListValues | undefined;
  setListvalues(value?: ListValues): void;

  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): number | undefined;
  setGroupid(value: number): void;

  hasFieldvalue(): boolean;
  clearFieldvalue(): void;
  getFieldvalue(): FieldValue | undefined;
  setFieldvalue(value?: FieldValue): void;

  hasFieldid(): boolean;
  clearFieldid(): void;
  getFieldid(): number | undefined;
  setFieldid(value: number): void;

  hasFieldidd(): boolean;
  clearFieldidd(): void;
  getFieldidd(): number | undefined;
  setFieldidd(value: number): void;

  hasGroupidd(): boolean;
  clearGroupidd(): void;
  getGroupidd(): number | undefined;
  setGroupidd(value: number): void;

  hasDatasourceid(): boolean;
  clearDatasourceid(): void;
  getDatasourceid(): number | undefined;
  setDatasourceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    seq?: number,
    name?: string,
    title?: string,
    datatype?: DataTypeMap[keyof DataTypeMap],
    isrequired?: boolean,
    kind?: FieldKindMap[keyof FieldKindMap],
    format?: string,
    listvalues?: ListValues.AsObject,
    groupid?: number,
    fieldvalue?: FieldValue.AsObject,
    fieldid?: number,
    fieldidd?: number,
    groupidd?: number,
    datasourceid?: number,
  }
}

export class FieldValue extends jspb.Message {
  hasAsnumber(): boolean;
  clearAsnumber(): void;
  getAsnumber(): number | undefined;
  setAsnumber(value: number): void;

  hasAsstring(): boolean;
  clearAsstring(): void;
  getAsstring(): string | undefined;
  setAsstring(value: string): void;

  hasAsdate(): boolean;
  clearAsdate(): void;
  getAsdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAsboolean(): boolean;
  clearAsboolean(): void;
  getAsboolean(): boolean | undefined;
  setAsboolean(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldValue.AsObject;
  static toObject(includeInstance: boolean, msg: FieldValue): FieldValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldValue;
  static deserializeBinaryFromReader(message: FieldValue, reader: jspb.BinaryReader): FieldValue;
}

export namespace FieldValue {
  export type AsObject = {
    asnumber?: number,
    asstring?: string,
    asdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    asboolean?: boolean,
  }
}

export class FieldGroup extends jspb.Message {
  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasSeq(): boolean;
  clearSeq(): void;
  getSeq(): number | undefined;
  setSeq(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): void;
  addFields(value?: Field, index?: number): Field;

  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): number | undefined;
  setGroupid(value: number): void;

  hasGroupidd(): boolean;
  clearGroupidd(): void;
  getGroupidd(): number | undefined;
  setGroupidd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldGroup.AsObject;
  static toObject(includeInstance: boolean, msg: FieldGroup): FieldGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldGroup;
  static deserializeBinaryFromReader(message: FieldGroup, reader: jspb.BinaryReader): FieldGroup;
}

export namespace FieldGroup {
  export type AsObject = {
    title?: string,
    seq?: number,
    fieldsList: Array<Field.AsObject>,
    groupid?: number,
    groupidd?: number,
  }
}

export class ApplicationType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasIcon(): boolean;
  clearIcon(): void;
  getIcon(): string | undefined;
  setIcon(value: string): void;

  hasSeq(): boolean;
  clearSeq(): void;
  getSeq(): number | undefined;
  setSeq(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<FieldGroup>;
  setFieldsList(value: Array<FieldGroup>): void;
  addFields(value?: FieldGroup, index?: number): FieldGroup;

  clearStatesList(): void;
  getStatesList(): Array<LU_CANCELLED_BILL_STATE>;
  setStatesList(value: Array<LU_CANCELLED_BILL_STATE>): void;
  addStates(value?: LU_CANCELLED_BILL_STATE, index?: number): LU_CANCELLED_BILL_STATE;

  clearActionsList(): void;
  getActionsList(): Array<LU_CANCELLED_BILL_ACTION>;
  setActionsList(value: Array<LU_CANCELLED_BILL_ACTION>): void;
  addActions(value?: LU_CANCELLED_BILL_ACTION, index?: number): LU_CANCELLED_BILL_ACTION;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): boolean | undefined;
  setActive(value: boolean): void;

  hasWithbills(): boolean;
  clearWithbills(): void;
  getWithbills(): boolean | undefined;
  setWithbills(value: boolean): void;

  hasDraw(): boolean;
  clearDraw(): void;
  getDraw(): string | undefined;
  setDraw(value: string): void;

  hasAdvices(): boolean;
  clearAdvices(): void;
  getAdvices(): string | undefined;
  setAdvices(value: string): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): number | undefined;
  setCategory(value: number): void;

  hasCategoryName(): boolean;
  clearCategoryName(): void;
  getCategoryName(): string | undefined;
  setCategoryName(value: string): void;

  hasWithCustkey(): boolean;
  clearWithCustkey(): void;
  getWithCustkey(): boolean | undefined;
  setWithCustkey(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationType.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationType): ApplicationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationType;
  static deserializeBinaryFromReader(message: ApplicationType, reader: jspb.BinaryReader): ApplicationType;
}

export namespace ApplicationType {
  export type AsObject = {
    id?: number,
    description?: string,
    icon?: string,
    seq?: number,
    fieldsList: Array<FieldGroup.AsObject>,
    statesList: Array<LU_CANCELLED_BILL_STATE.AsObject>,
    actionsList: Array<LU_CANCELLED_BILL_ACTION.AsObject>,
    active?: boolean,
    withbills?: boolean,
    draw?: string,
    advices?: string,
    category?: number,
    categoryName?: string,
    withCustkey?: boolean,
  }
}

export class META_DATA extends jspb.Message {
  hasMetaName(): boolean;
  clearMetaName(): void;
  getMetaName(): string | undefined;
  setMetaName(value: string): void;

  hasMetaTitle(): boolean;
  clearMetaTitle(): void;
  getMetaTitle(): string | undefined;
  setMetaTitle(value: string): void;

  hasMetaType(): boolean;
  clearMetaType(): void;
  getMetaType(): DataTypeMap[keyof DataTypeMap] | undefined;
  setMetaType(value: DataTypeMap[keyof DataTypeMap]): void;

  hasMetaKind(): boolean;
  clearMetaKind(): void;
  getMetaKind(): FieldKindMap[keyof FieldKindMap] | undefined;
  setMetaKind(value: FieldKindMap[keyof FieldKindMap]): void;

  hasMetaFormat(): boolean;
  clearMetaFormat(): void;
  getMetaFormat(): string | undefined;
  setMetaFormat(value: string): void;

  hasMetaDatasourceId(): boolean;
  clearMetaDatasourceId(): void;
  getMetaDatasourceId(): string | undefined;
  setMetaDatasourceId(value: string): void;

  hasMetaSystem(): boolean;
  clearMetaSystem(): void;
  getMetaSystem(): boolean | undefined;
  setMetaSystem(value: boolean): void;

  hasDatasource(): boolean;
  clearDatasource(): void;
  getDatasource(): DATASOURCE | undefined;
  setDatasource(value?: DATASOURCE): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): META_DATA.AsObject;
  static toObject(includeInstance: boolean, msg: META_DATA): META_DATA.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: META_DATA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): META_DATA;
  static deserializeBinaryFromReader(message: META_DATA, reader: jspb.BinaryReader): META_DATA;
}

export namespace META_DATA {
  export type AsObject = {
    metaName?: string,
    metaTitle?: string,
    metaType?: DataTypeMap[keyof DataTypeMap],
    metaKind?: FieldKindMap[keyof FieldKindMap],
    metaFormat?: string,
    metaDatasourceId?: string,
    metaSystem?: boolean,
    datasource?: DATASOURCE.AsObject,
  }
}

export class DATASOURCE extends jspb.Message {
  hasDatasourceName(): boolean;
  clearDatasourceName(): void;
  getDatasourceName(): string | undefined;
  setDatasourceName(value: string): void;

  hasDatasourceParent(): boolean;
  clearDatasourceParent(): void;
  getDatasourceParent(): string | undefined;
  setDatasourceParent(value: string): void;

  clearDatasourceDetailsList(): void;
  getDatasourceDetailsList(): Array<DATASOURCE_DETAIL>;
  setDatasourceDetailsList(value: Array<DATASOURCE_DETAIL>): void;
  addDatasourceDetails(value?: DATASOURCE_DETAIL, index?: number): DATASOURCE_DETAIL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DATASOURCE.AsObject;
  static toObject(includeInstance: boolean, msg: DATASOURCE): DATASOURCE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DATASOURCE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DATASOURCE;
  static deserializeBinaryFromReader(message: DATASOURCE, reader: jspb.BinaryReader): DATASOURCE;
}

export namespace DATASOURCE {
  export type AsObject = {
    datasourceName?: string,
    datasourceParent?: string,
    datasourceDetailsList: Array<DATASOURCE_DETAIL.AsObject>,
  }
}

export class DATASOURCE_DETAIL extends jspb.Message {
  hasDetailName(): boolean;
  clearDetailName(): void;
  getDetailName(): string | undefined;
  setDetailName(value: string): void;

  hasDatasourceName(): boolean;
  clearDatasourceName(): void;
  getDatasourceName(): string | undefined;
  setDatasourceName(value: string): void;

  hasDetailParent(): boolean;
  clearDetailParent(): void;
  getDetailParent(): string | undefined;
  setDetailParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DATASOURCE_DETAIL.AsObject;
  static toObject(includeInstance: boolean, msg: DATASOURCE_DETAIL): DATASOURCE_DETAIL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DATASOURCE_DETAIL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DATASOURCE_DETAIL;
  static deserializeBinaryFromReader(message: DATASOURCE_DETAIL, reader: jspb.BinaryReader): DATASOURCE_DETAIL;
}

export namespace DATASOURCE_DETAIL {
  export type AsObject = {
    detailName?: string,
    datasourceName?: string,
    detailParent?: string,
  }
}

export class PRODUCTS extends jspb.Message {
  hasProductId(): boolean;
  clearProductId(): void;
  getProductId(): number | undefined;
  setProductId(value: number): void;

  hasProductName(): boolean;
  clearProductName(): void;
  getProductName(): string | undefined;
  setProductName(value: string): void;

  hasProductDescription(): boolean;
  clearProductDescription(): void;
  getProductDescription(): string | undefined;
  setProductDescription(value: string): void;

  hasProductNotes(): boolean;
  clearProductNotes(): void;
  getProductNotes(): string | undefined;
  setProductNotes(value: string): void;

  hasProductCount(): boolean;
  clearProductCount(): void;
  getProductCount(): number | undefined;
  setProductCount(value: number): void;

  hasProductCategoryId(): boolean;
  clearProductCategoryId(): void;
  getProductCategoryId(): number | undefined;
  setProductCategoryId(value: number): void;

  hasProductPrice(): boolean;
  clearProductPrice(): void;
  getProductPrice(): number | undefined;
  setProductPrice(value: number): void;

  hasProductIsShow(): boolean;
  clearProductIsShow(): void;
  getProductIsShow(): boolean | undefined;
  setProductIsShow(value: boolean): void;

  hasProductIsTax(): boolean;
  clearProductIsTax(): void;
  getProductIsTax(): boolean | undefined;
  setProductIsTax(value: boolean): void;

  hasProductTax(): boolean;
  clearProductTax(): void;
  getProductTax(): number | undefined;
  setProductTax(value: number): void;

  clearProductsImagesList(): void;
  getProductsImagesList(): Array<PRODUCTS_IMAGES>;
  setProductsImagesList(value: Array<PRODUCTS_IMAGES>): void;
  addProductsImages(value?: PRODUCTS_IMAGES, index?: number): PRODUCTS_IMAGES;

  hasProductCategory(): boolean;
  clearProductCategory(): void;
  getProductCategory(): PRODUCT_CATEGORY | undefined;
  setProductCategory(value?: PRODUCT_CATEGORY): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PRODUCTS.AsObject;
  static toObject(includeInstance: boolean, msg: PRODUCTS): PRODUCTS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PRODUCTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PRODUCTS;
  static deserializeBinaryFromReader(message: PRODUCTS, reader: jspb.BinaryReader): PRODUCTS;
}

export namespace PRODUCTS {
  export type AsObject = {
    productId?: number,
    productName?: string,
    productDescription?: string,
    productNotes?: string,
    productCount?: number,
    productCategoryId?: number,
    productPrice?: number,
    productIsShow?: boolean,
    productIsTax?: boolean,
    productTax?: number,
    productsImagesList: Array<PRODUCTS_IMAGES.AsObject>,
    productCategory?: PRODUCT_CATEGORY.AsObject,
  }
}

export class PRODUCTS_IMAGES extends jspb.Message {
  hasProductId(): boolean;
  clearProductId(): void;
  getProductId(): number | undefined;
  setProductId(value: number): void;

  hasProductImage(): boolean;
  clearProductImage(): void;
  getProductImage(): Uint8Array | string;
  getProductImage_asU8(): Uint8Array;
  getProductImage_asB64(): string;
  setProductImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PRODUCTS_IMAGES.AsObject;
  static toObject(includeInstance: boolean, msg: PRODUCTS_IMAGES): PRODUCTS_IMAGES.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PRODUCTS_IMAGES, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PRODUCTS_IMAGES;
  static deserializeBinaryFromReader(message: PRODUCTS_IMAGES, reader: jspb.BinaryReader): PRODUCTS_IMAGES;
}

export namespace PRODUCTS_IMAGES {
  export type AsObject = {
    productId?: number,
    productImage: Uint8Array | string,
  }
}

export class PRODUCT_CATEGORY extends jspb.Message {
  hasProductCategoryId(): boolean;
  clearProductCategoryId(): void;
  getProductCategoryId(): number | undefined;
  setProductCategoryId(value: number): void;

  hasProductCategoryName(): boolean;
  clearProductCategoryName(): void;
  getProductCategoryName(): string | undefined;
  setProductCategoryName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PRODUCT_CATEGORY.AsObject;
  static toObject(includeInstance: boolean, msg: PRODUCT_CATEGORY): PRODUCT_CATEGORY.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PRODUCT_CATEGORY, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PRODUCT_CATEGORY;
  static deserializeBinaryFromReader(message: PRODUCT_CATEGORY, reader: jspb.BinaryReader): PRODUCT_CATEGORY;
}

export namespace PRODUCT_CATEGORY {
  export type AsObject = {
    productCategoryId?: number,
    productCategoryName?: string,
  }
}

export class APPLICATION_PRODUCTS extends jspb.Message {
  hasProductId(): boolean;
  clearProductId(): void;
  getProductId(): number | undefined;
  setProductId(value: number): void;

  hasProductName(): boolean;
  clearProductName(): void;
  getProductName(): string | undefined;
  setProductName(value: string): void;

  hasProductCount(): boolean;
  clearProductCount(): void;
  getProductCount(): number | undefined;
  setProductCount(value: number): void;

  hasProductFormNo(): boolean;
  clearProductFormNo(): void;
  getProductFormNo(): number | undefined;
  setProductFormNo(value: number): void;

  hasProductApplicationType(): boolean;
  clearProductApplicationType(): void;
  getProductApplicationType(): number | undefined;
  setProductApplicationType(value: number): void;

  hasProductPrice(): boolean;
  clearProductPrice(): void;
  getProductPrice(): number | undefined;
  setProductPrice(value: number): void;

  hasProductTax(): boolean;
  clearProductTax(): void;
  getProductTax(): number | undefined;
  setProductTax(value: number): void;

  hasProductDate(): boolean;
  clearProductDate(): void;
  getProductDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProductDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasProductFinal(): boolean;
  clearProductFinal(): void;
  getProductFinal(): number | undefined;
  setProductFinal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APPLICATION_PRODUCTS.AsObject;
  static toObject(includeInstance: boolean, msg: APPLICATION_PRODUCTS): APPLICATION_PRODUCTS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: APPLICATION_PRODUCTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APPLICATION_PRODUCTS;
  static deserializeBinaryFromReader(message: APPLICATION_PRODUCTS, reader: jspb.BinaryReader): APPLICATION_PRODUCTS;
}

export namespace APPLICATION_PRODUCTS {
  export type AsObject = {
    productId?: number,
    productName?: string,
    productCount?: number,
    productFormNo?: number,
    productApplicationType?: number,
    productPrice?: number,
    productTax?: number,
    productDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    productFinal?: number,
  }
}

export interface DataTypeMap {
  INT: 0;
  FLOAT: 2;
  STRING: 3;
  BOOL: 4;
  DATE: 5;
  DATETIME: 6;
  BASE64: 7;
  LIST: 8;
}

export const DataType: DataTypeMap;

export interface FieldKindMap {
  TEL: 0;
  EMAIL: 2;
  ID: 3;
  ADDRESS: 4;
}

export const FieldKind: FieldKindMap;

export interface DurationTypeMap {
  HOUR: 0;
  DAY: 1;
}

export const DurationType: DurationTypeMap;

