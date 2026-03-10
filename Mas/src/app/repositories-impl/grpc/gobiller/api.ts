import {
  ArrCTGConsumptionServiceTariff,
  CTGConsumptionServiceTariff,
  Empty,
  RegularChargeIdReq,
  RegularChargeInfo,
  RegularCharge,
  RegularChargeRequest,
  TariffIdReq,
  ArrTariffBands,
  TariffBands,
  ArrTariffExtraFees,
  TariffExtraFees,
  ArrTariffs,
  Tariffs,
  TariffsData,
  TransCodesRes,
  TransCodesData,
  GET_CHARGETYPES,
  CHARGE_TYPE_DATA,
  GET_ENTITYTYPES,
  ENTITY_TYPE_DATA,
  ArrRegularRelationValues,
  RegularRelationValues,
  RegularChargeReq,
  ArrRegularRelationEntity,
  RegularRelationEntity,
  GET_SERVICETYPES,
  SERVICE_TYPE_DATA,
} from 'grpc-web-client-gen/biller_service_pb';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BillingTariffProviderClient } from 'grpc-web-client-gen/Biller_serviceServiceClientPb';
import { RequestMeta } from '../shared';

import { makeBaseUrl } from '@/app/services';
import {
  FormDate,
  FormExtralFees,
  FormRegularChargeEntity,
  FormRegularEnableEntity,
  FormTarrifBands,
  FormTarrifs,
} from './converter';

const client = new BillingTariffProviderClient(
  `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
);
export function getAllCTGConsumptionServiceTariffsApi(): Promise<
  CTGConsumptionServiceTariff.AsObject[]
> {
  return new Promise<CTGConsumptionServiceTariff.AsObject[]>(
    (resolve, reject) => {
      try {
        const req = new Empty();
        const meta: any = RequestMeta();
        client.getAllCTGConsumptionServiceTariffs(
          req,
          meta,
          (err: any | null, resp: ArrCTGConsumptionServiceTariff | null) => {
            if (err != null) {
              reject(err);
            } else if (resp) {
              resolve(resp.toObject().ctgconsumptionservicetariffList);
            }
          },
        );
      } catch (e) {
        reject(e);
      }
    },
  );
}

export function saveCTGConsumptionServiceTariffApi(
  obj: CTGConsumptionServiceTariff.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new CTGConsumptionServiceTariff();
      req.setCtypegrpid(obj.ctypegrpid!);
      req.setCtypeid(obj.ctypeid!);
      req.setDiscountpercentage(obj.discountpercentage!);
      req.setIszerotariff(obj.iszerotariff!);
      req.setServicetype(obj.servicetype!);
      req.setTariffid(obj.tariffid!);
      req.setTaxpercentage(obj.taxpercentage!);
      req.setTranscode(obj.transcode!);

      const meta: any = RequestMeta();
      client.saveCTGConsumptionServiceTariff(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function saveRegularRelationEntityApi(
  obj: RegularRelationEntity.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new RegularRelationEntity();
      req.setEntityType(obj.entityType!);
      req.setRegularChargeId(obj.regularChargeId!);
      req.setReleationType(obj.releationType!);

      const meta: any = RequestMeta();
      client.saveRegularRelationEntity(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function saveRegularRelationValuesApi(
  obj: RegularRelationValues.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new RegularRelationValues();
      req.setEntityType(obj.entityType!);
      req.setRegularChargeId(obj.regularChargeId!);
      req.setEnableValue(obj.enableValue!);
      req.setLuKey(obj.luKey!);
      req.setRangeFrom(obj.rangeFrom!);
      req.setRangeTo(obj.rangeTo!);
      req.setValue(obj.value!);

      const meta: any = RequestMeta();
      client.saveRegularRelationValues(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}

export function saveRegularChargesApi(
  obj: RegularCharge.AsObject,
): Promise<Empty> {
  return new Promise<Empty>((resolve, reject) => {
    try {
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

      const meta: any = RequestMeta();
      client.saveRegularCharges(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getAllRegularChargesApi(): Promise<RegularCharge.AsObject[]> {
  return new Promise<RegularCharge.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getAllRegularCharges(
        req,
        meta,
        (err: any | null, resp: RegularChargeRequest | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().regularchargeList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getRegularChargeInfoApi(
  obj: RegularChargeIdReq.AsObject,
): Promise<RegularCharge.AsObject> {
  return new Promise<RegularCharge.AsObject>((resolve, reject) => {
    try {
      const req = new RegularChargeIdReq();
      req.setRegularChargeId(obj.regularChargeId!);
      const meta: any = RequestMeta();
      client.getRegularChargeInfo(
        req,
        meta,
        (err: any | null, resp: RegularChargeInfo | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().regularcharges!);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getEntityTypeApi(): Promise<ENTITY_TYPE_DATA.AsObject[]> {
  return new Promise<ENTITY_TYPE_DATA.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getEntityTypes(
        req,
        meta,
        (err: any | null, resp: GET_ENTITYTYPES | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().entityTypeDataList!);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getChargeTypeApi(): Promise<CHARGE_TYPE_DATA.AsObject[]> {
  return new Promise<CHARGE_TYPE_DATA.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getChargeTypes(
        req,
        meta,
        (err: any | null, resp: GET_CHARGETYPES | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().chargeTypeDataList!);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getAllRegularRelationValuesApi(
  obj: RegularChargeReq.AsObject,
): Promise<RegularRelationValues.AsObject[]> {
  return new Promise<RegularRelationValues.AsObject[]>((resolve, reject) => {
    try {
      const req = new RegularChargeReq();
      req.setRegularChargeId(obj.regularChargeId!);
      const meta: any = RequestMeta();
      client.getAllRegularRelationValues(
        req,
        meta,
        (err: any | null, resp: ArrRegularRelationValues | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().regularrelationvaluesList!);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getAllRegularRelationEntityApi(
  obj: RegularChargeReq.AsObject,
): Promise<RegularRelationEntity.AsObject[]> {
  return new Promise<RegularRelationEntity.AsObject[]>((resolve, reject) => {
    try {
      const req = new RegularChargeReq();
      req.setRegularChargeId(obj.regularChargeId!);
      const meta: any = RequestMeta();
      client.getAllRegularRelationEntity(
        req,
        meta,
        (err: any | null, resp: ArrRegularRelationEntity | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().regularrelationentityList!);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getallTarrifBandsApi(
  obj: TariffIdReq.AsObject,
): Promise<TariffBands.AsObject[]> {
  return new Promise<TariffBands.AsObject[]>((resolve, reject) => {
    try {
      const req = new TariffIdReq();
      req.setTariffId(obj.tariffId!);
      const meta: any = RequestMeta();
      client.getAllTariffBands(
        req,
        meta,
        (err: any | null, resp: ArrTariffBands | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().tariffbandsList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getallTarrifsApi(): Promise<Tariffs.AsObject[]> {
  return new Promise<Tariffs.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getAllTariffs(
        req,
        meta,
        (err: any | null, resp: ArrTariffs | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().tariffsList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getallTarrifExtraFeesApi(
  obj: TariffIdReq.AsObject,
): Promise<TariffExtraFees.AsObject[]> {
  return new Promise<TariffExtraFees.AsObject[]>((resolve, reject) => {
    try {
      const req = new TariffIdReq();
      req.setTariffId(obj.tariffId!);
      const meta: any = RequestMeta();
      client.getAllTariffExtraFees(
        req,
        meta,
        (err: any | null, resp: ArrTariffExtraFees | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().tariffextrafeesList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function saveTarrifExtraFeesApi(
  obj: TariffExtraFees.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new TariffExtraFees();
      req.setAmountPerMeter(obj.amountPerMeter!);
      req.setDescription(obj.description!);
      req.setTariffId(obj.tariffId!);
      req.setAmountPerPercentage(obj.amountPerPercentage!);
      req.setDescription(obj.description!);
      req.setFixedAmount(obj.fixedAmount!);
      req.setTransCode(obj.transCode!);
      const meta: any = RequestMeta();
      client.saveTariffExtraFees(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function saveTarrifBandsApi(
  obj: TariffBands.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new TariffBands();
      req.setCharge(obj.charge!);
      req.setConstant(obj.constant!);
      req.setEffectDate(FormDate(obj.effectDate!));
      req.setRangeFrom(obj.rangeFrom!);
      req.setRangeTo(obj.rangeTo!);
      req.setTariffId(obj.tariffId!);
      const meta: any = RequestMeta();
      client.saveTariffBands(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function saveTarrifsApi(
  obj: Tariffs.AsObject,
): Promise<Tariffs.AsObject> {
  return new Promise<Tariffs.AsObject>((resolve, reject) => {
    try {
      const req = new Tariffs();
      req.setConsumpPercentage(obj.consumpPercentage!);
      req.setDescription(obj.description!);
      req.setEffectDate(FormDate(obj.effectDate!));
      req.setTariffCode(obj.tariffCode!);
      req.setTarrifId(obj.tarrifId!);
      const meta: any = RequestMeta();
      client.saveTariffs(req, meta, (err: any | null, resp: Empty | null) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          resolve(resp.toObject());
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
export function saveTarrifsDataApi(
  obj: TariffsData.AsObject,
): Promise<Empty.AsObject> {
  return new Promise<Empty.AsObject>((resolve, reject) => {
    try {
      const req = new TariffsData();
      req.setTariffbandsList(
        obj.tariffbandsList.map((item) => FormTarrifBands(item)),
      );
      req.setTariffextrafeesList(
        obj.tariffextrafeesList?.map((item) => FormExtralFees(item)),
      );
      req.setTariffs(FormTarrifs(obj.tariffs!));
      console.log('req in saveTarrifsDataApi', req.toObject());
      const meta: any = RequestMeta();
      client.saveTariffsData(
        req,
        meta,
        (err: any | null, resp: Empty | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject());
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getTranscodeApi(): Promise<TransCodesData.AsObject[]> {
  return new Promise<TransCodesData.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getTransCodes(
        req,
        meta,
        (err: any | null, resp: TransCodesRes | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().transcodesdataList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getServiceTypesApi(): Promise<SERVICE_TYPE_DATA.AsObject[]> {
  return new Promise<SERVICE_TYPE_DATA.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getServiceTypes(
        req,
        meta,
        (err: any | null, resp: GET_SERVICETYPES | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().serviceTypeDataList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
