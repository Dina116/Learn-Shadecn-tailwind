// package: serverhostmessages
// file: serverhostmessages/collectionmessages.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CollectionDestributionItem extends jspb.Message {
  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

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

  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): void;
  getTanzeemAmt(): number | undefined;
  setTanzeemAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  hasRoundAmt(): boolean;
  clearRoundAmt(): void;
  getRoundAmt(): number | undefined;
  setRoundAmt(value: number): void;

  hasCurCharges(): boolean;
  clearCurCharges(): void;
  getCurCharges(): number | undefined;
  setCurCharges(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): string | undefined;
  setActivity(value: string): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasCrReaing(): boolean;
  clearCrReaing(): void;
  getCrReaing(): number | undefined;
  setCrReaing(value: number): void;

  hasPrReading(): boolean;
  clearPrReading(): void;
  getPrReading(): number | undefined;
  setPrReading(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasTotalamountcollected(): boolean;
  clearTotalamountcollected(): void;
  getTotalamountcollected(): number | undefined;
  setTotalamountcollected(value: number): void;

  hasTotalcountcollected(): boolean;
  clearTotalcountcollected(): void;
  getTotalcountcollected(): number | undefined;
  setTotalcountcollected(value: number): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasInstalmentDate(): boolean;
  clearInstalmentDate(): void;
  getInstalmentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInstalmentDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReminderValue(): boolean;
  clearReminderValue(): void;
  getReminderValue(): number | undefined;
  setReminderValue(value: number): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasBillAmount(): boolean;
  clearBillAmount(): void;
  getBillAmount(): number | undefined;
  setBillAmount(value: number): void;

  hasIsCollectedByOwner(): boolean;
  clearIsCollectedByOwner(): void;
  getIsCollectedByOwner(): boolean | undefined;
  setIsCollectedByOwner(value: boolean): void;

  hasIsCollectedByOther(): boolean;
  clearIsCollectedByOther(): void;
  getIsCollectedByOther(): boolean | undefined;
  setIsCollectedByOther(value: boolean): void;

  clearCtypesDtlList(): void;
  getCtypesDtlList(): Array<CTYPE_DTL>;
  setCtypesDtlList(value: Array<CTYPE_DTL>): void;
  addCtypesDtl(value?: CTYPE_DTL, index?: number): CTYPE_DTL;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasIssuedAmount(): boolean;
  clearIssuedAmount(): void;
  getIssuedAmount(): number | undefined;
  setIssuedAmount(value: number): void;

  hasIssuedCount(): boolean;
  clearIssuedCount(): void;
  getIssuedCount(): number | undefined;
  setIssuedCount(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasCtg(): boolean;
  clearCtg(): void;
  getCtg(): string | undefined;
  setCtg(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasIsCtypes(): boolean;
  clearIsCtypes(): void;
  getIsCtypes(): boolean | undefined;
  setIsCtypes(value: boolean): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): string | undefined;
  setUser(value: string): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAgreemAmt(): boolean;
  clearAgreemAmt(): void;
  getAgreemAmt(): number | undefined;
  setAgreemAmt(value: number): void;

  hasConnInstallsAmt(): boolean;
  clearConnInstallsAmt(): void;
  getConnInstallsAmt(): number | undefined;
  setConnInstallsAmt(value: number): void;

  hasCrdtAmt(): boolean;
  clearCrdtAmt(): void;
  getCrdtAmt(): number | undefined;
  setCrdtAmt(value: number): void;

  hasDbtAmt(): boolean;
  clearDbtAmt(): void;
  getDbtAmt(): number | undefined;
  setDbtAmt(value: number): void;

  hasInstallsAmt(): boolean;
  clearInstallsAmt(): void;
  getInstallsAmt(): number | undefined;
  setInstallsAmt(value: number): void;

  hasMeterInstallsAmt(): boolean;
  clearMeterInstallsAmt(): void;
  getMeterInstallsAmt(): number | undefined;
  setMeterInstallsAmt(value: number): void;

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

  hasTakafulAmt(): boolean;
  clearTakafulAmt(): void;
  getTakafulAmt(): number | undefined;
  setTakafulAmt(value: number): void;

  hasComputerAmt(): boolean;
  clearComputerAmt(): void;
  getComputerAmt(): number | undefined;
  setComputerAmt(value: number): void;

  hasConnAmt(): boolean;
  clearConnAmt(): void;
  getConnAmt(): number | undefined;
  setConnAmt(value: number): void;

  hasContractAmt(): boolean;
  clearContractAmt(): void;
  getContractAmt(): number | undefined;
  setContractAmt(value: number): void;

  hasGovAmt(): boolean;
  clearGovAmt(): void;
  getGovAmt(): number | undefined;
  setGovAmt(value: number): void;

  hasMeterAmt(): boolean;
  clearMeterAmt(): void;
  getMeterAmt(): number | undefined;
  setMeterAmt(value: number): void;

  hasMeterManAmt(): boolean;
  clearMeterManAmt(): void;
  getMeterManAmt(): number | undefined;
  setMeterManAmt(value: number): void;

  hasUniAmt(): boolean;
  clearUniAmt(): void;
  getUniAmt(): number | undefined;
  setUniAmt(value: number): void;

  hasCleanAmt(): boolean;
  clearCleanAmt(): void;
  getCleanAmt(): number | undefined;
  setCleanAmt(value: number): void;

  hasCurPaymnts(): boolean;
  clearCurPaymnts(): void;
  getCurPaymnts(): number | undefined;
  setCurPaymnts(value: number): void;

  hasPrRead1(): boolean;
  clearPrRead1(): void;
  getPrRead1(): number | undefined;
  setPrRead1(value: number): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasBillAdjAmount(): boolean;
  clearBillAdjAmount(): void;
  getBillAdjAmount(): number | undefined;
  setBillAdjAmount(value: number): void;

  hasCollectionAmt(): boolean;
  clearCollectionAmt(): void;
  getCollectionAmt(): number | undefined;
  setCollectionAmt(value: number): void;

  hasRequestComment(): boolean;
  clearRequestComment(): void;
  getRequestComment(): string | undefined;
  setRequestComment(value: string): void;

  hasActionComment(): boolean;
  clearActionComment(): void;
  getActionComment(): string | undefined;
  setActionComment(value: string): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasFormNo(): boolean;
  clearFormNo(): void;
  getFormNo(): number | undefined;
  setFormNo(value: number): void;

  hasOldClBlnce(): boolean;
  clearOldClBlnce(): void;
  getOldClBlnce(): number | undefined;
  setOldClBlnce(value: number): void;

  hasApplicationTypeId(): boolean;
  clearApplicationTypeId(): void;
  getApplicationTypeId(): number | undefined;
  setApplicationTypeId(value: number): void;

  hasAdvanceCollection(): boolean;
  clearAdvanceCollection(): void;
  getAdvanceCollection(): boolean | undefined;
  setAdvanceCollection(value: boolean): void;

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

  hasLastAction(): boolean;
  clearLastAction(): void;
  getLastAction(): number | undefined;
  setLastAction(value: number): void;

  hasLastActionName(): boolean;
  clearLastActionName(): void;
  getLastActionName(): string | undefined;
  setLastActionName(value: string): void;

  hasTahselStampDate(): boolean;
  clearTahselStampDate(): void;
  getTahselStampDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTahselStampDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCancelation(): boolean;
  clearCancelation(): void;
  getCancelation(): boolean | undefined;
  setCancelation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionDestributionItem.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionDestributionItem): CollectionDestributionItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionDestributionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionDestributionItem;
  static deserializeBinaryFromReader(message: CollectionDestributionItem, reader: jspb.BinaryReader): CollectionDestributionItem;
}

export namespace CollectionDestributionItem {
  export type AsObject = {
    paymentNo?: string,
    clBlnce?: number,
    deliverySt?: number,
    opBlnce?: number,
    instalment?: number,
    waterAmt?: number,
    sewerAmt?: number,
    basicAmt?: number,
    taxAmt?: number,
    tanzeemAmt?: number,
    otherAmt?: number,
    roundAmt?: number,
    curCharges?: number,
    noUnits?: number,
    activity?: string,
    calcType?: string,
    crReaing?: number,
    prReading?: number,
    consump?: number,
    address?: string,
    totalamountcollected?: number,
    totalcountcollected?: number,
    readType?: number,
    instalmentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reminderValue?: number,
    dueAmount?: number,
    billAmount?: number,
    isCollectedByOwner?: boolean,
    isCollectedByOther?: boolean,
    ctypesDtlList: Array<CTYPE_DTL.AsObject>,
    empId?: number,
    custkey?: string,
    seqNo?: number,
    issuedAmount?: number,
    issuedCount?: number,
    billgroup?: string,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bookNo?: string,
    walkNo?: string,
    cycleId?: number,
    ctg?: string,
    surname?: string,
    oldKey?: string,
    isCtypes?: boolean,
    user?: string,
    stampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    agreemAmt?: number,
    connInstallsAmt?: number,
    crdtAmt?: number,
    dbtAmt?: number,
    installsAmt?: number,
    meterInstallsAmt?: number,
    otherAmt1?: number,
    otherAmt2?: number,
    otherAmt3?: number,
    otherAmt4?: number,
    otherAmt5?: number,
    takafulAmt?: number,
    computerAmt?: number,
    connAmt?: number,
    contractAmt?: number,
    govAmt?: number,
    meterAmt?: number,
    meterManAmt?: number,
    uniAmt?: number,
    cleanAmt?: number,
    curPaymnts?: number,
    prRead1?: number,
    meterRef?: string,
    billAdjAmount?: number,
    collectionAmt?: number,
    requestComment?: string,
    actionComment?: string,
    comment?: string,
    formNo?: number,
    oldClBlnce?: number,
    applicationTypeId?: number,
    advanceCollection?: boolean,
    tele?: string,
    nid?: string,
    email?: string,
    agreement?: boolean,
    lastAction?: number,
    lastActionName?: string,
    tahselStampDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelation?: boolean,
  }
}

export class CTYPE_DTL extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasTotalAmount(): boolean;
  clearTotalAmount(): void;
  getTotalAmount(): number | undefined;
  setTotalAmount(value: number): void;

  hasWaterAmt(): boolean;
  clearWaterAmt(): void;
  getWaterAmt(): number | undefined;
  setWaterAmt(value: number): void;

  hasSewerAmt(): boolean;
  clearSewerAmt(): void;
  getSewerAmt(): number | undefined;
  setSewerAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTYPE_DTL.AsObject;
  static toObject(includeInstance: boolean, msg: CTYPE_DTL): CTYPE_DTL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CTYPE_DTL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTYPE_DTL;
  static deserializeBinaryFromReader(message: CTYPE_DTL, reader: jspb.BinaryReader): CTYPE_DTL;
}

export namespace CTYPE_DTL {
  export type AsObject = {
    description?: string,
    totalAmount?: number,
    waterAmt?: number,
    sewerAmt?: number,
    otherAmt?: number,
  }
}

export class OldNewItem extends jspb.Message {
  hasOlditem(): boolean;
  clearOlditem(): void;
  getOlditem(): CollectionDestributionItem;
  setOlditem(value?: CollectionDestributionItem): void;

  hasNewitem(): boolean;
  clearNewitem(): void;
  getNewitem(): CollectionDestributionItem | undefined;
  setNewitem(value?: CollectionDestributionItem): void;

  hasIsCollected(): boolean;
  clearIsCollected(): void;
  getIsCollected(): boolean | undefined;
  setIsCollected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OldNewItem.AsObject;
  static toObject(includeInstance: boolean, msg: OldNewItem): OldNewItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OldNewItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OldNewItem;
  static deserializeBinaryFromReader(message: OldNewItem, reader: jspb.BinaryReader): OldNewItem;
}

export namespace OldNewItem {
  export type AsObject = {
    olditem: CollectionDestributionItem.AsObject,
    newitem?: CollectionDestributionItem.AsObject,
    isCollected?: boolean,
  }
}

export class CashierBalance extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasTotalcollectedamount(): boolean;
  clearTotalcollectedamount(): void;
  getTotalcollectedamount(): number | undefined;
  setTotalcollectedamount(value: number): void;

  hasTotalcollectedcount(): boolean;
  clearTotalcollectedcount(): void;
  getTotalcollectedcount(): number | undefined;
  setTotalcollectedcount(value: number): void;

  hasCustomertotalcollectedamount(): boolean;
  clearCustomertotalcollectedamount(): void;
  getCustomertotalcollectedamount(): number | undefined;
  setCustomertotalcollectedamount(value: number): void;

  hasCustomertotalcollectedcount(): boolean;
  clearCustomertotalcollectedcount(): void;
  getCustomertotalcollectedcount(): number | undefined;
  setCustomertotalcollectedcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashierBalance.AsObject;
  static toObject(includeInstance: boolean, msg: CashierBalance): CashierBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CashierBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashierBalance;
  static deserializeBinaryFromReader(message: CashierBalance, reader: jspb.BinaryReader): CashierBalance;
}

export namespace CashierBalance {
  export type AsObject = {
    custkey?: string,
    totalcollectedamount?: number,
    totalcollectedcount?: number,
    customertotalcollectedamount?: number,
    customertotalcollectedcount?: number,
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
  getEffectDte(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectDte(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    effectDte?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  getEffDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCompletionDate(): boolean;
  clearCompletionDate(): void;
  getCompletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    effDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasChargeDate(): boolean;
  clearChargeDate(): void;
  getChargeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChargeDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    chargeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  getConnectioninfo(): ConnectionInfo | undefined;
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
    connectioninfo?: ConnectionInfo.AsObject,
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

export class ConnectionInfo extends jspb.Message {
  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasConnectionDate(): boolean;
  clearConnectionDate(): void;
  getConnectionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setConnectionDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConnStatus(): boolean;
  clearConnStatus(): void;
  getConnStatus(): number | undefined;
  setConnStatus(value: number): void;

  hasMeterinfo(): boolean;
  clearMeterinfo(): void;
  getMeterinfo(): MeterInfo | undefined;
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
    connectionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    connStatus?: number,
    meterinfo?: MeterInfo.AsObject,
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
  getInstallDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInstallDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRemovalDate(): boolean;
  clearRemovalDate(): void;
  getRemovalDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRemovalDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasConversionFactor(): boolean;
  clearConversionFactor(): void;
  getConversionFactor(): number | undefined;
  setConversionFactor(value: number): void;

  hasSerialNo(): boolean;
  clearSerialNo(): void;
  getSerialNo(): string | undefined;
  setSerialNo(value: string): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  clearReadingsList(): void;
  getReadingsList(): Array<MeterRdg>;
  setReadingsList(value: Array<MeterRdg>): void;
  addReadings(value?: MeterRdg, index?: number): MeterRdg;

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
    installDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    removalDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    conversionFactor?: number,
    serialNo?: string,
    meterId?: number,
    readingsList: Array<MeterRdg.AsObject>,
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
  getCurDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCurDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIsInvoiced(): boolean;
  clearIsInvoiced(): void;
  getIsInvoiced(): number | undefined;
  setIsInvoiced(value: number): void;

  hasInvoiceBilngDate(): boolean;
  clearInvoiceBilngDate(): void;
  getInvoiceBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasIsCancelled(): boolean;
  clearIsCancelled(): void;
  getIsCancelled(): boolean | undefined;
  setIsCancelled(value: boolean): void;

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
    curDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isInvoiced?: number,
    invoiceBilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isCancelled?: boolean,
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
  getBilngDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBilngDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    bilngDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deliverySt?: number,
    transactionsList: Array<F_TRANSACTION.AsObject>,
  }
}

