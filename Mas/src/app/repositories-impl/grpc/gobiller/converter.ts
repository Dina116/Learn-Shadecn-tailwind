import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  EntityChargeMappedValue,
  EntityEnableMappedValue,
  RegularEnableEntity,
  RegularChargeEntity,
  TariffBands,
  TariffExtraFees,
  Tariffs,
  RegularCharge,
} from 'grpc-web-client-gen/biller_service_pb';

export const FormDate = (date: Timestamp.AsObject) => {
  if (!date) return undefined;
  const req = new Timestamp();
  req.setSeconds(Number(date.seconds));
  req.setNanos(date.nanos!);
  return req;
};

export const FormMapValue = (obj: EntityChargeMappedValue.AsObject) => {
  const req = new EntityChargeMappedValue();
  req.setFrom(obj.from!);
  req.setTo(obj.to!);
  req.setValue(obj.value!);
  req.setLukey(obj.lukey!);
  return req;
};
export const FormMapValueEnableRelation = (
  obj: EntityEnableMappedValue.AsObject,
) => {
  const req = new EntityEnableMappedValue();
  req.setLukey(obj.lukey!);
  req.setValue(obj.value!);
  return req;
};

export const FormRegularChargeEntity = (obj: RegularChargeEntity.AsObject) => {
  const req = new RegularChargeEntity();
  req.setEntitytype(obj.entitytype!);
  req.setMappedvaluesList(
    obj.mappedvaluesList.map((item) => FormMapValue(item)),
  );

  return req;
};

export const FormRegularEnableEntity = (obj: RegularEnableEntity.AsObject) => {
  const req = new RegularEnableEntity();
  req.setEntitytype(obj.entitytype!);
  req.setMappedvaluesList(
    obj.mappedvaluesList.map((item) => FormMapValueEnableRelation(item)),
  );

  return req;
};

export const FormTarrifBands = (obj: TariffBands.AsObject) => {
  const req = new TariffBands();
  req.setCharge(obj.charge!);
  req.setConstant(obj.constant!);
  req.setEffectDate(FormDate(obj.effectDate!));
  req.setRangeFrom(obj.rangeFrom!);
  req.setRangeTo(obj.rangeTo!);
  req.setTariffId(obj.tariffId!);
  return req;
};
export const FormExtralFees = (obj: TariffExtraFees.AsObject) => {
  const req = new TariffExtraFees();
  req.setAmountPerMeter(obj.amountPerMeter!);
  req.setDescription(obj.description!);
  req.setTariffId(obj.tariffId!);
  req.setAmountPerPercentage(obj.amountPerPercentage!);
  req.setDescription(obj.description!);
  req.setFixedAmount(obj.fixedAmount!);
  req.setTransCode(obj.transCode!);
  return req;
};
export const FormTarrifs = (obj: Tariffs.AsObject) => {
  const req = new Tariffs();
  req.setConsumpPercentage(obj.consumpPercentage!);
  req.setDescription(obj.description!);
  req.setEffectDate(FormDate(obj.effectDate!));
  req.setTariffCode(obj.tariffCode!);
  req.setTarrifId(obj.tarrifId!);
  return req;
};
export const FormRegularChargeReq = (obj: RegularCharge.AsObject) => {
  const req = new RegularCharge();
  req.setBypass(obj.bypass!);
  req.setRegularchargeid(obj.regularchargeid!);
  req.setChargecalcperiod(obj.chargecalcperiod!);
  req.setChargeinterval(obj.chargeinterval!);
  req.setChargemonthlyday(obj.chargemonthlyday!);
  req.setChargetype(obj.chargetype!);
  req.setIschargable(obj.ischargable!);
  req.setCtypecalcbase(obj.ctypecalcbase!);
  const FormDatex = FormDate(obj.effectdate!);
  req.setEffectdate(FormDatex);
  req.setEffectdateto(FormDate(obj.effectdateto!));
  req.setFixedcharge(obj.fixedcharge!);
  req.setRelationchargeentity(
    FormRegularChargeEntity(obj.relationchargeentity!),
  );
  req.setRelationenableentity(
    FormRegularEnableEntity(obj.relationenableentity!),
  );
  req.setFixedchargediscount(obj.fixedchargediscount!);
  req.setIschargable(obj.ischargable!);
  req.setMincharge(obj.mincharge!);
  req.setPerunit(obj.perunit!);
  req.setServicetype(obj.servicetype!);
  req.setTitle(obj.title!);
  req.setTranscode(obj.transcode!);
  req.setVatpercentage(obj.vatpercentage!);
  return req;
};
