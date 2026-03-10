import { MyResponse } from './grpc';
import {
  Empty,
  ArrRegularRelationEntity,
  RegularRelationEntity,
  ArrRegularRelationValues,
  RegularRelationValues,
  ArrTariffBands,
  TariffBands,
  ArrTariffExtraFees,
  TariffExtraFees,
  ArrTariffs,
  Tariffs,
  GET_SERVICETYPES,
  TariffsData,
  GET_CHARGETYPES,
  GET_ENTITYTYPES,
  RegularChargeIdReq,
  RegularChargeInfo,
  RegularChargeReq,
  TariffIdReq,
  RegularChargeRequest,
  RegularCharge,
  ArrCTGConsumptionServiceTariff,
  CTGConsumptionServiceTariff,
  TransCodesRes,
  GET_CHARGEREGULARCALCSTRATEGY,
  // TransCodesRes,
} from '../entities/_gen/biller_service_pb';

export interface IGoBillerServiceRepo {
  getAllRegularRelationEntity(
    input: RegularChargeReq,
  ): MyResponse<ArrRegularRelationEntity>;
  saveRegularRelationEntity(input: RegularRelationEntity): MyResponse<Empty>;
  getAllRegularRelationValues(
    input: RegularChargeReq,
  ): MyResponse<ArrRegularRelationValues>;
  saveRegularRelationValues(input: RegularRelationValues): MyResponse<Empty>;
  getAllTariffBands(input: TariffIdReq): MyResponse<ArrTariffBands>;
  saveTariffBands(input: TariffBands): MyResponse<Empty>;

  getAllTariffExtraFees(input: TariffIdReq): MyResponse<ArrTariffExtraFees>;
  saveTariffExtraFees(input: TariffExtraFees): MyResponse<Empty>;

  getAllTariffs(input: Empty): MyResponse<ArrTariffs>;
  saveTariffs(input: Tariffs): MyResponse<Empty>;
  getAllRegularCharges(input: Empty): MyResponse<RegularChargeRequest>;
  saveRegularCharges(input: RegularCharge): MyResponse<Empty>;
  getServiceTypes(input: Empty): MyResponse<GET_SERVICETYPES>;
  saveTariffsData(input: TariffsData): MyResponse<Empty>;
  getChargeTypes(input: Empty): MyResponse<GET_CHARGETYPES>;
  getEntityTypes(input: Empty): MyResponse<GET_ENTITYTYPES>;
  getRegularChargeInfo(
    input: RegularChargeIdReq,
  ): MyResponse<RegularChargeInfo>;
  getAllCTGConsumptionServiceTariffs(input: Empty): MyResponse<ArrCTGConsumptionServiceTariff>;
  saveCTGConsumptionServiceTariff(input: CTGConsumptionServiceTariff): MyResponse<Empty>;
  getTransCodes(input: Empty): MyResponse<TransCodesRes>;
  getChargeRegularCalcStrategy(input: Empty): MyResponse<GET_CHARGEREGULARCALCSTRATEGY>; // not used
}
