// source: biller_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.billing.ArrCTGConsumptionServiceTariff', null, global);
goog.exportSymbol('proto.billing.ArrRegularCharges', null, global);
goog.exportSymbol('proto.billing.ArrRegularRelationEntity', null, global);
goog.exportSymbol('proto.billing.ArrRegularRelationValues', null, global);
goog.exportSymbol('proto.billing.ArrTariffBands', null, global);
goog.exportSymbol('proto.billing.ArrTariffExtraFees', null, global);
goog.exportSymbol('proto.billing.ArrTariffs', null, global);
goog.exportSymbol('proto.billing.Bill', null, global);
goog.exportSymbol('proto.billing.BillResponce', null, global);
goog.exportSymbol('proto.billing.CHARGE_REGULAR_CALC_STRATEGY', null, global);
goog.exportSymbol('proto.billing.CHARGE_TYPE_DATA', null, global);
goog.exportSymbol('proto.billing.CONNECTION_STATUS_TYPE', null, global);
goog.exportSymbol('proto.billing.CTGConsumptionServiceTariff', null, global);
goog.exportSymbol('proto.billing.CancelledRequest', null, global);
goog.exportSymbol('proto.billing.ChargeRegularCalcStrategy', null, global);
goog.exportSymbol('proto.billing.ChargeRequest', null, global);
goog.exportSymbol('proto.billing.ChargeSetting', null, global);
goog.exportSymbol('proto.billing.ChargeType', null, global);
goog.exportSymbol('proto.billing.Connection', null, global);
goog.exportSymbol('proto.billing.Ctg', null, global);
goog.exportSymbol('proto.billing.CtgsResponce', null, global);
goog.exportSymbol('proto.billing.Customer', null, global);
goog.exportSymbol('proto.billing.CustomersList', null, global);
goog.exportSymbol('proto.billing.ENTITY_CATEGORY_TYPE', null, global);
goog.exportSymbol('proto.billing.ENTITY_TYPE', null, global);
goog.exportSymbol('proto.billing.ENTITY_TYPE_DATA', null, global);
goog.exportSymbol('proto.billing.Empty', null, global);
goog.exportSymbol('proto.billing.Entity', null, global);
goog.exportSymbol('proto.billing.EntityChargeMappedValue', null, global);
goog.exportSymbol('proto.billing.EntityEnableMappedValue', null, global);
goog.exportSymbol('proto.billing.Entity_lockup', null, global);
goog.exportSymbol('proto.billing.ExtraCharge', null, global);
goog.exportSymbol('proto.billing.ExtraTariffFess', null, global);
goog.exportSymbol('proto.billing.FLAGS_TYPES', null, global);
goog.exportSymbol('proto.billing.FinantialTransaction', null, global);
goog.exportSymbol('proto.billing.GET_CHARGEREGULARCALCSTRATEGY', null, global);
goog.exportSymbol('proto.billing.GET_CHARGETYPES', null, global);
goog.exportSymbol('proto.billing.GET_ENTITYTYPES', null, global);
goog.exportSymbol('proto.billing.GET_SERVICETYPES', null, global);
goog.exportSymbol('proto.billing.GetBillRequest', null, global);
goog.exportSymbol('proto.billing.Key', null, global);
goog.exportSymbol('proto.billing.LoginRequest', null, global);
goog.exportSymbol('proto.billing.LoginResponce', null, global);
goog.exportSymbol('proto.billing.LookUp', null, global);
goog.exportSymbol('proto.billing.LookUpsResponce', null, global);
goog.exportSymbol('proto.billing.MeasuredTransaction', null, global);
goog.exportSymbol('proto.billing.Meter', null, global);
goog.exportSymbol('proto.billing.MeterOperationStatus', null, global);
goog.exportSymbol('proto.billing.PROPERTY_VACATED_TYPES', null, global);
goog.exportSymbol('proto.billing.PostMessage', null, global);
goog.exportSymbol('proto.billing.Property', null, global);
goog.exportSymbol('proto.billing.READING_TYPE', null, global);
goog.exportSymbol('proto.billing.Reading', null, global);
goog.exportSymbol('proto.billing.RegularCharge', null, global);
goog.exportSymbol('proto.billing.RegularChargeEntity', null, global);
goog.exportSymbol('proto.billing.RegularChargeIdReq', null, global);
goog.exportSymbol('proto.billing.RegularChargeInfo', null, global);
goog.exportSymbol('proto.billing.RegularChargePeriod', null, global);
goog.exportSymbol('proto.billing.RegularChargeReq', null, global);
goog.exportSymbol('proto.billing.RegularChargeRequest', null, global);
goog.exportSymbol('proto.billing.RegularEnableEntity', null, global);
goog.exportSymbol('proto.billing.RegularRelationEntity', null, global);
goog.exportSymbol('proto.billing.RegularRelationValues', null, global);
goog.exportSymbol('proto.billing.ReleationType', null, global);
goog.exportSymbol('proto.billing.SERVICE_TYPE', null, global);
goog.exportSymbol('proto.billing.SERVICE_TYPE_DATA', null, global);
goog.exportSymbol('proto.billing.Service', null, global);
goog.exportSymbol('proto.billing.ServiceInfo', null, global);
goog.exportSymbol('proto.billing.ServiceReading', null, global);
goog.exportSymbol('proto.billing.ServiceTariff', null, global);
goog.exportSymbol('proto.billing.ServiceType', null, global);
goog.exportSymbol('proto.billing.ServiceTypeRepsonce', null, global);
goog.exportSymbol('proto.billing.SetupData', null, global);
goog.exportSymbol('proto.billing.SubConnection', null, global);
goog.exportSymbol('proto.billing.SubConnectionReading', null, global);
goog.exportSymbol('proto.billing.Tariff', null, global);
goog.exportSymbol('proto.billing.TariffBand', null, global);
goog.exportSymbol('proto.billing.TariffBands', null, global);
goog.exportSymbol('proto.billing.TariffCodeReq', null, global);
goog.exportSymbol('proto.billing.TariffExtraFees', null, global);
goog.exportSymbol('proto.billing.TariffIdReq', null, global);
goog.exportSymbol('proto.billing.Tariffs', null, global);
goog.exportSymbol('proto.billing.TariffsData', null, global);
goog.exportSymbol('proto.billing.TariffsDataRes', null, global);
goog.exportSymbol('proto.billing.TransCode', null, global);
goog.exportSymbol('proto.billing.TransCodes', null, global);
goog.exportSymbol('proto.billing.TransCodesData', null, global);
goog.exportSymbol('proto.billing.TransCodesRes', null, global);
goog.exportSymbol('proto.billing.VERION', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Empty.displayName = 'proto.billing.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Meter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Meter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Meter.displayName = 'proto.billing.Meter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.Connection.repeatedFields_, null);
};
goog.inherits(proto.billing.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Connection.displayName = 'proto.billing.Connection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.SubConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.SubConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.SubConnection.displayName = 'proto.billing.SubConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Service.displayName = 'proto.billing.Service';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Property = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.Property.repeatedFields_, null);
};
goog.inherits(proto.billing.Property, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Property.displayName = 'proto.billing.Property';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Customer.displayName = 'proto.billing.Customer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ServiceTariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ServiceTariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ServiceTariff.displayName = 'proto.billing.ServiceTariff';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Ctg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.Ctg.repeatedFields_, null);
};
goog.inherits(proto.billing.Ctg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Ctg.displayName = 'proto.billing.Ctg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ExtraTariffFess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ExtraTariffFess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ExtraTariffFess.displayName = 'proto.billing.ExtraTariffFess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffBand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TariffBand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffBand.displayName = 'proto.billing.TariffBand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Tariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.Tariff.repeatedFields_, null);
};
goog.inherits(proto.billing.Tariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Tariff.displayName = 'proto.billing.Tariff';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.EntityChargeMappedValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.EntityChargeMappedValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.EntityChargeMappedValue.displayName = 'proto.billing.EntityChargeMappedValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.EntityEnableMappedValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.EntityEnableMappedValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.EntityEnableMappedValue.displayName = 'proto.billing.EntityEnableMappedValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularChargeEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.RegularChargeEntity.repeatedFields_, null);
};
goog.inherits(proto.billing.RegularChargeEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularChargeEntity.displayName = 'proto.billing.RegularChargeEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularEnableEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.RegularEnableEntity.repeatedFields_, null);
};
goog.inherits(proto.billing.RegularEnableEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularEnableEntity.displayName = 'proto.billing.RegularEnableEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularCharge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularCharge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularCharge.displayName = 'proto.billing.RegularCharge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularChargeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.RegularChargeRequest.repeatedFields_, null);
};
goog.inherits(proto.billing.RegularChargeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularChargeRequest.displayName = 'proto.billing.RegularChargeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TransCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TransCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TransCode.displayName = 'proto.billing.TransCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ServiceType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ServiceType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ServiceType.displayName = 'proto.billing.ServiceType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ServiceTypeRepsonce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ServiceTypeRepsonce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ServiceTypeRepsonce.displayName = 'proto.billing.ServiceTypeRepsonce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ChargeSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ChargeSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ChargeSetting.displayName = 'proto.billing.ChargeSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.SubConnectionReading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.SubConnectionReading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.SubConnectionReading.displayName = 'proto.billing.SubConnectionReading';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Reading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Reading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Reading.displayName = 'proto.billing.Reading';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ServiceReading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ServiceReading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ServiceReading.displayName = 'proto.billing.ServiceReading';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ChargeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ChargeRequest.repeatedFields_, null);
};
goog.inherits(proto.billing.ChargeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ChargeRequest.displayName = 'proto.billing.ChargeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ExtraCharge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ExtraCharge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ExtraCharge.displayName = 'proto.billing.ExtraCharge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.MeasuredTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.MeasuredTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.MeasuredTransaction.displayName = 'proto.billing.MeasuredTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.FinantialTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.FinantialTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.FinantialTransaction.displayName = 'proto.billing.FinantialTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Bill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.Bill.repeatedFields_, null);
};
goog.inherits(proto.billing.Bill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Bill.displayName = 'proto.billing.Bill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CancelledRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.CancelledRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CancelledRequest.displayName = 'proto.billing.CancelledRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.BillResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.BillResponce.repeatedFields_, null);
};
goog.inherits(proto.billing.BillResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.BillResponce.displayName = 'proto.billing.BillResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ServiceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.ServiceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ServiceInfo.displayName = 'proto.billing.ServiceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.SetupData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.SetupData.repeatedFields_, null);
};
goog.inherits(proto.billing.SetupData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.SetupData.displayName = 'proto.billing.SetupData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CustomersList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.CustomersList.repeatedFields_, null);
};
goog.inherits(proto.billing.CustomersList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CustomersList.displayName = 'proto.billing.CustomersList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Key.displayName = 'proto.billing.Key';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.LookUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.LookUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.LookUp.displayName = 'proto.billing.LookUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.LookUpsResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.LookUpsResponce.repeatedFields_, null);
};
goog.inherits(proto.billing.LookUpsResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.LookUpsResponce.displayName = 'proto.billing.LookUpsResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CtgsResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.CtgsResponce.repeatedFields_, null);
};
goog.inherits(proto.billing.CtgsResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CtgsResponce.displayName = 'proto.billing.CtgsResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Entity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Entity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Entity.displayName = 'proto.billing.Entity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.GetBillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.GetBillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.GetBillRequest.displayName = 'proto.billing.GetBillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.LoginRequest.displayName = 'proto.billing.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.LoginResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.LoginResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.LoginResponce.displayName = 'proto.billing.LoginResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.PostMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.PostMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.PostMessage.displayName = 'proto.billing.PostMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.SERVICE_TYPE_DATA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.SERVICE_TYPE_DATA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.SERVICE_TYPE_DATA.displayName = 'proto.billing.SERVICE_TYPE_DATA';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.GET_SERVICETYPES = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.GET_SERVICETYPES.repeatedFields_, null);
};
goog.inherits(proto.billing.GET_SERVICETYPES, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.GET_SERVICETYPES.displayName = 'proto.billing.GET_SERVICETYPES';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CHARGE_TYPE_DATA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.CHARGE_TYPE_DATA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CHARGE_TYPE_DATA.displayName = 'proto.billing.CHARGE_TYPE_DATA';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.GET_CHARGETYPES = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.GET_CHARGETYPES.repeatedFields_, null);
};
goog.inherits(proto.billing.GET_CHARGETYPES, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.GET_CHARGETYPES.displayName = 'proto.billing.GET_CHARGETYPES';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Entity_lockup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Entity_lockup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Entity_lockup.displayName = 'proto.billing.Entity_lockup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ENTITY_TYPE_DATA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ENTITY_TYPE_DATA.repeatedFields_, null);
};
goog.inherits(proto.billing.ENTITY_TYPE_DATA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ENTITY_TYPE_DATA.displayName = 'proto.billing.ENTITY_TYPE_DATA';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.GET_ENTITYTYPES = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.GET_ENTITYTYPES.repeatedFields_, null);
};
goog.inherits(proto.billing.GET_ENTITYTYPES, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.GET_ENTITYTYPES.displayName = 'proto.billing.GET_ENTITYTYPES';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.CHARGE_REGULAR_CALC_STRATEGY, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CHARGE_REGULAR_CALC_STRATEGY.displayName = 'proto.billing.CHARGE_REGULAR_CALC_STRATEGY';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.GET_CHARGEREGULARCALCSTRATEGY.repeatedFields_, null);
};
goog.inherits(proto.billing.GET_CHARGEREGULARCALCSTRATEGY, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.GET_CHARGEREGULARCALCSTRATEGY.displayName = 'proto.billing.GET_CHARGEREGULARCALCSTRATEGY';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.Tariffs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.Tariffs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.Tariffs.displayName = 'proto.billing.Tariffs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrTariffs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrTariffs.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrTariffs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrTariffs.displayName = 'proto.billing.ArrTariffs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffBands = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TariffBands, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffBands.displayName = 'proto.billing.TariffBands';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrTariffBands = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrTariffBands.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrTariffBands, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrTariffBands.displayName = 'proto.billing.ArrTariffBands';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffExtraFees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TariffExtraFees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffExtraFees.displayName = 'proto.billing.TariffExtraFees';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrTariffExtraFees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrTariffExtraFees.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrTariffExtraFees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrTariffExtraFees.displayName = 'proto.billing.ArrTariffExtraFees';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffsData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.TariffsData.repeatedFields_, null);
};
goog.inherits(proto.billing.TariffsData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffsData.displayName = 'proto.billing.TariffsData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffCodeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TariffCodeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffCodeReq.displayName = 'proto.billing.TariffCodeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffsDataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.TariffsDataRes.repeatedFields_, null);
};
goog.inherits(proto.billing.TariffsDataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffsDataRes.displayName = 'proto.billing.TariffsDataRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TariffIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TariffIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TariffIdReq.displayName = 'proto.billing.TariffIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrRegularCharges = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrRegularCharges.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrRegularCharges, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrRegularCharges.displayName = 'proto.billing.ArrRegularCharges';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularChargeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularChargeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularChargeInfo.displayName = 'proto.billing.RegularChargeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularChargeIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularChargeIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularChargeIdReq.displayName = 'proto.billing.RegularChargeIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularChargeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularChargeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularChargeReq.displayName = 'proto.billing.RegularChargeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularRelationEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularRelationEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularRelationEntity.displayName = 'proto.billing.RegularRelationEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrRegularRelationEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrRegularRelationEntity.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrRegularRelationEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrRegularRelationEntity.displayName = 'proto.billing.ArrRegularRelationEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.RegularRelationValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.RegularRelationValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.RegularRelationValues.displayName = 'proto.billing.RegularRelationValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrRegularRelationValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrRegularRelationValues.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrRegularRelationValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrRegularRelationValues.displayName = 'proto.billing.ArrRegularRelationValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TransCodesData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.TransCodesData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TransCodesData.displayName = 'proto.billing.TransCodesData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.TransCodesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.TransCodesRes.repeatedFields_, null);
};
goog.inherits(proto.billing.TransCodesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.TransCodesRes.displayName = 'proto.billing.TransCodesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.CTGConsumptionServiceTariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.billing.CTGConsumptionServiceTariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.CTGConsumptionServiceTariff.displayName = 'proto.billing.CTGConsumptionServiceTariff';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.billing.ArrCTGConsumptionServiceTariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.billing.ArrCTGConsumptionServiceTariff.repeatedFields_, null);
};
goog.inherits(proto.billing.ArrCTGConsumptionServiceTariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.billing.ArrCTGConsumptionServiceTariff.displayName = 'proto.billing.ArrCTGConsumptionServiceTariff';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Empty}
 */
proto.billing.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Empty;
  return proto.billing.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Empty}
 */
proto.billing.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Meter.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Meter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Meter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Meter.toObject = function(includeInstance, msg) {
  var f, obj = {
metertype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
meterref: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
diameter: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
converterfactor: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
opstatus: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Meter}
 */
proto.billing.Meter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Meter;
  return proto.billing.Meter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Meter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Meter}
 */
proto.billing.Meter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetertype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeterref(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiameter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConverterfactor(value);
      break;
    case 5:
      var value = /** @type {!proto.billing.MeterOperationStatus} */ (reader.readEnum());
      msg.setOpstatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Meter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Meter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Meter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Meter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {!proto.billing.MeterOperationStatus} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * required string MeterType = 1;
 * @return {string}
 */
proto.billing.Meter.prototype.getMetertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.setMetertype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.clearMetertype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Meter.prototype.hasMetertype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string MeterRef = 2;
 * @return {string}
 */
proto.billing.Meter.prototype.getMeterref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.setMeterref = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.clearMeterref = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Meter.prototype.hasMeterref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 Diameter = 3;
 * @return {number}
 */
proto.billing.Meter.prototype.getDiameter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.setDiameter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.clearDiameter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Meter.prototype.hasDiameter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 ConverterFactor = 4;
 * @return {number}
 */
proto.billing.Meter.prototype.getConverterfactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.setConverterfactor = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.clearConverterfactor = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Meter.prototype.hasConverterfactor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required MeterOperationStatus OpStatus = 5;
 * @return {!proto.billing.MeterOperationStatus}
 */
proto.billing.Meter.prototype.getOpstatus = function() {
  return /** @type {!proto.billing.MeterOperationStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.billing.MeterOperationStatus} value
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.setOpstatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Meter} returns this
 */
proto.billing.Meter.prototype.clearOpstatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Meter.prototype.hasOpstatus = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.Connection.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
ctype: (f = msg.getCtype()) && proto.billing.Ctg.toObject(includeInstance, f),
nounits: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
isbulkmeter: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
conndiameter: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
meter: (f = msg.getMeter()) && proto.billing.Meter.toObject(includeInstance, f),
estimcons: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
connectionstatus: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
subconnectionsList: jspb.Message.toObjectList(msg.getSubconnectionsList(),
    proto.billing.SubConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Connection}
 */
proto.billing.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Connection;
  return proto.billing.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Connection}
 */
proto.billing.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.setCtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNounits(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbulkmeter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConndiameter(value);
      break;
    case 6:
      var value = new proto.billing.Meter;
      reader.readMessage(value,proto.billing.Meter.deserializeBinaryFromReader);
      msg.setMeter(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEstimcons(value);
      break;
    case 8:
      var value = /** @type {!proto.billing.CONNECTION_STATUS_TYPE} */ (reader.readEnum());
      msg.setConnectionstatus(value);
      break;
    case 9:
      var value = new proto.billing.SubConnection;
      reader.readMessage(value,proto.billing.SubConnection.deserializeBinaryFromReader);
      msg.addSubconnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtype();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMeter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.billing.Meter.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {!proto.billing.CONNECTION_STATUS_TYPE} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getSubconnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.billing.SubConnection.serializeBinaryToWriter
    );
  }
};


/**
 * required Ctg CType = 1;
 * @return {!proto.billing.Ctg}
 */
proto.billing.Connection.prototype.getCtype = function() {
  return /** @type{!proto.billing.Ctg} */ (
    jspb.Message.getWrapperField(this, proto.billing.Ctg, 1, 1));
};


/**
 * @param {!proto.billing.Ctg} value
 * @return {!proto.billing.Connection} returns this
*/
proto.billing.Connection.prototype.setCtype = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearCtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 NoUnits = 3;
 * @return {number}
 */
proto.billing.Connection.prototype.getNounits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.setNounits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearNounits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasNounits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool IsBulkMeter = 4;
 * @return {boolean}
 */
proto.billing.Connection.prototype.getIsbulkmeter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.setIsbulkmeter = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearIsbulkmeter = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasIsbulkmeter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 ConnDiameter = 5;
 * @return {number}
 */
proto.billing.Connection.prototype.getConndiameter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.setConndiameter = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearConndiameter = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasConndiameter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Meter Meter = 6;
 * @return {?proto.billing.Meter}
 */
proto.billing.Connection.prototype.getMeter = function() {
  return /** @type{?proto.billing.Meter} */ (
    jspb.Message.getWrapperField(this, proto.billing.Meter, 6));
};


/**
 * @param {?proto.billing.Meter|undefined} value
 * @return {!proto.billing.Connection} returns this
*/
proto.billing.Connection.prototype.setMeter = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearMeter = function() {
  return this.setMeter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasMeter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double EstimCons = 7;
 * @return {number}
 */
proto.billing.Connection.prototype.getEstimcons = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.setEstimcons = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearEstimcons = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasEstimcons = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CONNECTION_STATUS_TYPE ConnectionStatus = 8;
 * @return {!proto.billing.CONNECTION_STATUS_TYPE}
 */
proto.billing.Connection.prototype.getConnectionstatus = function() {
  return /** @type {!proto.billing.CONNECTION_STATUS_TYPE} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.billing.CONNECTION_STATUS_TYPE} value
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.setConnectionstatus = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearConnectionstatus = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Connection.prototype.hasConnectionstatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated SubConnection SubConnections = 9;
 * @return {!Array<!proto.billing.SubConnection>}
 */
proto.billing.Connection.prototype.getSubconnectionsList = function() {
  return /** @type{!Array<!proto.billing.SubConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.SubConnection, 9));
};


/**
 * @param {!Array<!proto.billing.SubConnection>} value
 * @return {!proto.billing.Connection} returns this
*/
proto.billing.Connection.prototype.setSubconnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.billing.SubConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.SubConnection}
 */
proto.billing.Connection.prototype.addSubconnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.billing.SubConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Connection} returns this
 */
proto.billing.Connection.prototype.clearSubconnectionsList = function() {
  return this.setSubconnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.SubConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.SubConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.SubConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SubConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
ctype: (f = msg.getCtype()) && proto.billing.Ctg.toObject(includeInstance, f),
estimateconsumption: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
consumptionpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
nounits: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
conndiameter: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
meter: (f = msg.getMeter()) && proto.billing.Meter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.SubConnection}
 */
proto.billing.SubConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.SubConnection;
  return proto.billing.SubConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.SubConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.SubConnection}
 */
proto.billing.SubConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.setCtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEstimateconsumption(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsumptionpercentage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNounits(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConndiameter(value);
      break;
    case 7:
      var value = new proto.billing.Meter;
      reader.readMessage(value,proto.billing.Meter.deserializeBinaryFromReader);
      msg.setMeter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.SubConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.SubConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.SubConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SubConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtype();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMeter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.billing.Meter.serializeBinaryToWriter
    );
  }
};


/**
 * required Ctg CType = 1;
 * @return {!proto.billing.Ctg}
 */
proto.billing.SubConnection.prototype.getCtype = function() {
  return /** @type{!proto.billing.Ctg} */ (
    jspb.Message.getWrapperField(this, proto.billing.Ctg, 1, 1));
};


/**
 * @param {!proto.billing.Ctg} value
 * @return {!proto.billing.SubConnection} returns this
*/
proto.billing.SubConnection.prototype.setCtype = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearCtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double EstimateConsumption = 3;
 * @return {number}
 */
proto.billing.SubConnection.prototype.getEstimateconsumption = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.setEstimateconsumption = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearEstimateconsumption = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasEstimateconsumption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double ConsumptionPercentage = 4;
 * @return {number}
 */
proto.billing.SubConnection.prototype.getConsumptionpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.setConsumptionpercentage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearConsumptionpercentage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasConsumptionpercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 NoUnits = 5;
 * @return {number}
 */
proto.billing.SubConnection.prototype.getNounits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.setNounits = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearNounits = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasNounits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ConnDiameter = 6;
 * @return {string}
 */
proto.billing.SubConnection.prototype.getConndiameter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.setConndiameter = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearConndiameter = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasConndiameter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Meter Meter = 7;
 * @return {?proto.billing.Meter}
 */
proto.billing.SubConnection.prototype.getMeter = function() {
  return /** @type{?proto.billing.Meter} */ (
    jspb.Message.getWrapperField(this, proto.billing.Meter, 7));
};


/**
 * @param {?proto.billing.Meter|undefined} value
 * @return {!proto.billing.SubConnection} returns this
*/
proto.billing.SubConnection.prototype.setMeter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.SubConnection} returns this
 */
proto.billing.SubConnection.prototype.clearMeter = function() {
  return this.setMeter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnection.prototype.hasMeter = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
servicetype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
connection: (f = msg.getConnection()) && proto.billing.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Service}
 */
proto.billing.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Service;
  return proto.billing.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Service}
 */
proto.billing.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setServicetype(value);
      break;
    case 2:
      var value = new proto.billing.Connection;
      reader.readMessage(value,proto.billing.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.billing.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * required SERVICE_TYPE ServiceType = 1;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.Service.prototype.getServicetype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.Service} returns this
 */
proto.billing.Service.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Service} returns this
 */
proto.billing.Service.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Service.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Connection Connection = 2;
 * @return {!proto.billing.Connection}
 */
proto.billing.Service.prototype.getConnection = function() {
  return /** @type{!proto.billing.Connection} */ (
    jspb.Message.getWrapperField(this, proto.billing.Connection, 2, 1));
};


/**
 * @param {!proto.billing.Connection} value
 * @return {!proto.billing.Service} returns this
*/
proto.billing.Service.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Service} returns this
 */
proto.billing.Service.prototype.clearConnection = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Service.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.Property.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Property.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Property.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Property} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Property.toObject = function(includeInstance, msg) {
  var f, obj = {
propref: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
infoflag1: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
infoflag2: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
infoflag3: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
infoflag4: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
infoflag5: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
norooms: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
servicesList: jspb.Message.toObjectList(msg.getServicesList(),
    proto.billing.Service.toObject, includeInstance),
isvacated: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
township: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Property}
 */
proto.billing.Property.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Property;
  return proto.billing.Property.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Property} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Property}
 */
proto.billing.Property.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropref(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag1(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag2(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag3(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag4(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag5(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNorooms(value);
      break;
    case 9:
      var value = new proto.billing.Service;
      reader.readMessage(value,proto.billing.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsvacated(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTownship(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Property.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Property.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Property} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Property.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.billing.Service.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * required string PropRef = 1;
 * @return {string}
 */
proto.billing.Property.prototype.getPropref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setPropref = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearPropref = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasPropref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string InfoFlag1 = 3;
 * @return {string}
 */
proto.billing.Property.prototype.getInfoflag1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setInfoflag1 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearInfoflag1 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasInfoflag1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string InfoFlag2 = 4;
 * @return {string}
 */
proto.billing.Property.prototype.getInfoflag2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setInfoflag2 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearInfoflag2 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasInfoflag2 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string InfoFlag3 = 5;
 * @return {string}
 */
proto.billing.Property.prototype.getInfoflag3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setInfoflag3 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearInfoflag3 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasInfoflag3 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string InfoFlag4 = 6;
 * @return {string}
 */
proto.billing.Property.prototype.getInfoflag4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setInfoflag4 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearInfoflag4 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasInfoflag4 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string InfoFlag5 = 7;
 * @return {string}
 */
proto.billing.Property.prototype.getInfoflag5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setInfoflag5 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearInfoflag5 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasInfoflag5 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 NoRooms = 8;
 * @return {number}
 */
proto.billing.Property.prototype.getNorooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setNorooms = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearNorooms = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasNorooms = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Service Services = 9;
 * @return {!Array<!proto.billing.Service>}
 */
proto.billing.Property.prototype.getServicesList = function() {
  return /** @type{!Array<!proto.billing.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Service, 9));
};


/**
 * @param {!Array<!proto.billing.Service>} value
 * @return {!proto.billing.Property} returns this
*/
proto.billing.Property.prototype.setServicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.billing.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Service}
 */
proto.billing.Property.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.billing.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};


/**
 * optional bool IsVacated = 10;
 * @return {boolean}
 */
proto.billing.Property.prototype.getIsvacated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setIsvacated = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearIsvacated = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasIsvacated = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string Township = 11;
 * @return {string}
 */
proto.billing.Property.prototype.getTownship = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.setTownship = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Property} returns this
 */
proto.billing.Property.prototype.clearTownship = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Property.prototype.hasTownship = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
custtype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
iscompany: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
infoflag1: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
infoflag2: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
infoflag3: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
infoflag4: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
infoflag5: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
property: (f = msg.getProperty()) && proto.billing.Property.toObject(includeInstance, f),
billgroup: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
cyclelength: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Customer}
 */
proto.billing.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Customer;
  return proto.billing.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Customer}
 */
proto.billing.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCusttype(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscompany(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag1(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag2(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag3(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag4(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoflag5(value);
      break;
    case 9:
      var value = new proto.billing.Property;
      reader.readMessage(value,proto.billing.Property.deserializeBinaryFromReader);
      msg.setProperty(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroup(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCyclelength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProperty();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.billing.Property.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * required string Custkey = 1;
 * @return {string}
 */
proto.billing.Customer.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 CustType = 2;
 * @return {number}
 */
proto.billing.Customer.prototype.getCusttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setCusttype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearCusttype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasCusttype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool IsCompany = 3;
 * @return {boolean}
 */
proto.billing.Customer.prototype.getIscompany = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setIscompany = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearIscompany = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasIscompany = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string InfoFlag1 = 4;
 * @return {string}
 */
proto.billing.Customer.prototype.getInfoflag1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setInfoflag1 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearInfoflag1 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasInfoflag1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string InfoFlag2 = 5;
 * @return {string}
 */
proto.billing.Customer.prototype.getInfoflag2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setInfoflag2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearInfoflag2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasInfoflag2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string InfoFlag3 = 6;
 * @return {string}
 */
proto.billing.Customer.prototype.getInfoflag3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setInfoflag3 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearInfoflag3 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasInfoflag3 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string InfoFlag4 = 7;
 * @return {string}
 */
proto.billing.Customer.prototype.getInfoflag4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setInfoflag4 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearInfoflag4 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasInfoflag4 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string InfoFlag5 = 8;
 * @return {string}
 */
proto.billing.Customer.prototype.getInfoflag5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setInfoflag5 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearInfoflag5 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasInfoflag5 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Property Property = 9;
 * @return {?proto.billing.Property}
 */
proto.billing.Customer.prototype.getProperty = function() {
  return /** @type{?proto.billing.Property} */ (
    jspb.Message.getWrapperField(this, proto.billing.Property, 9));
};


/**
 * @param {?proto.billing.Property|undefined} value
 * @return {!proto.billing.Customer} returns this
*/
proto.billing.Customer.prototype.setProperty = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearProperty = function() {
  return this.setProperty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasProperty = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * required string Billgroup = 10;
 * @return {string}
 */
proto.billing.Customer.prototype.getBillgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setBillgroup = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearBillgroup = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasBillgroup = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 CycleLength = 11;
 * @return {number}
 */
proto.billing.Customer.prototype.getCyclelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.setCyclelength = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Customer} returns this
 */
proto.billing.Customer.prototype.clearCyclelength = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Customer.prototype.hasCyclelength = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ServiceTariff.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ServiceTariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ServiceTariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceTariff.toObject = function(includeInstance, msg) {
  var f, obj = {
servicetype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
tariffcode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
iszerotarif: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
transcode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
taxpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
discountpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ServiceTariff}
 */
proto.billing.ServiceTariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ServiceTariff;
  return proto.billing.ServiceTariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ServiceTariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ServiceTariff}
 */
proto.billing.ServiceTariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setServicetype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffcode(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIszerotarif(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTaxpercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiscountpercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ServiceTariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ServiceTariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ServiceTariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceTariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * required SERVICE_TYPE ServiceType = 1;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.ServiceTariff.prototype.getServicetype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TariffCode = 2;
 * @return {string}
 */
proto.billing.ServiceTariff.prototype.getTariffcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setTariffcode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearTariffcode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasTariffcode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool IsZeroTarif = 3;
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.getIszerotarif = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setIszerotarif = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearIszerotarif = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasIszerotarif = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required string TransCode = 4;
 * @return {string}
 */
proto.billing.ServiceTariff.prototype.getTranscode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setTranscode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearTranscode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasTranscode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double TaxPercentage = 5;
 * @return {number}
 */
proto.billing.ServiceTariff.prototype.getTaxpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setTaxpercentage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearTaxpercentage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasTaxpercentage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double DiscountPercentage = 6;
 * @return {number}
 */
proto.billing.ServiceTariff.prototype.getDiscountpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.setDiscountpercentage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTariff} returns this
 */
proto.billing.ServiceTariff.prototype.clearDiscountpercentage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTariff.prototype.hasDiscountpercentage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.Ctg.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Ctg.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Ctg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Ctg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Ctg.toObject = function(includeInstance, msg) {
  var f, obj = {
ctype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
ctypegroupid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
tariffsList: jspb.Message.toObjectList(msg.getTariffsList(),
    proto.billing.ServiceTariff.toObject, includeInstance),
opEstimCons: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
noopEstimCons: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
groupdescription: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
weigth: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Ctg}
 */
proto.billing.Ctg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Ctg;
  return proto.billing.Ctg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Ctg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Ctg}
 */
proto.billing.Ctg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtypegroupid(value);
      break;
    case 3:
      var value = new proto.billing.ServiceTariff;
      reader.readMessage(value,proto.billing.ServiceTariff.deserializeBinaryFromReader);
      msg.addTariffs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpEstimCons(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNoopEstimCons(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupdescription(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeigth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Ctg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Ctg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Ctg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Ctg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTariffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.billing.ServiceTariff.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * required string CType = 1;
 * @return {string}
 */
proto.billing.Ctg.prototype.getCtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setCtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearCtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string CTypeGroupid = 2;
 * @return {string}
 */
proto.billing.Ctg.prototype.getCtypegroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setCtypegroupid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearCtypegroupid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasCtypegroupid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ServiceTariff Tariffs = 3;
 * @return {!Array<!proto.billing.ServiceTariff>}
 */
proto.billing.Ctg.prototype.getTariffsList = function() {
  return /** @type{!Array<!proto.billing.ServiceTariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.ServiceTariff, 3));
};


/**
 * @param {!Array<!proto.billing.ServiceTariff>} value
 * @return {!proto.billing.Ctg} returns this
*/
proto.billing.Ctg.prototype.setTariffsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.billing.ServiceTariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.ServiceTariff}
 */
proto.billing.Ctg.prototype.addTariffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.billing.ServiceTariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearTariffsList = function() {
  return this.setTariffsList([]);
};


/**
 * optional double OP_ESTIM_CONS = 4;
 * @return {number}
 */
proto.billing.Ctg.prototype.getOpEstimCons = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setOpEstimCons = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearOpEstimCons = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasOpEstimCons = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double NOOP_ESTIM_CONS = 5;
 * @return {number}
 */
proto.billing.Ctg.prototype.getNoopEstimCons = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setNoopEstimCons = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearNoopEstimCons = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasNoopEstimCons = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required string Description = 6;
 * @return {string}
 */
proto.billing.Ctg.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string GroupDescription = 7;
 * @return {string}
 */
proto.billing.Ctg.prototype.getGroupdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setGroupdescription = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearGroupdescription = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasGroupdescription = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double Weigth = 8;
 * @return {number}
 */
proto.billing.Ctg.prototype.getWeigth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.setWeigth = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Ctg} returns this
 */
proto.billing.Ctg.prototype.clearWeigth = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Ctg.prototype.hasWeigth = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ExtraTariffFess.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ExtraTariffFess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ExtraTariffFess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ExtraTariffFess.toObject = function(includeInstance, msg) {
  var f, obj = {
transcode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
amountpermeter: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
taxpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
fixedamount: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ExtraTariffFess}
 */
proto.billing.ExtraTariffFess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ExtraTariffFess;
  return proto.billing.ExtraTariffFess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ExtraTariffFess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ExtraTariffFess}
 */
proto.billing.ExtraTariffFess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountpermeter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTaxpercentage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFixedamount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ExtraTariffFess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ExtraTariffFess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ExtraTariffFess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ExtraTariffFess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * required string TransCode = 1;
 * @return {string}
 */
proto.billing.ExtraTariffFess.prototype.getTranscode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.setTranscode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.clearTranscode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraTariffFess.prototype.hasTranscode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.billing.ExtraTariffFess.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraTariffFess.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double AmountPerMeter = 3;
 * @return {number}
 */
proto.billing.ExtraTariffFess.prototype.getAmountpermeter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.setAmountpermeter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.clearAmountpermeter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraTariffFess.prototype.hasAmountpermeter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double TaxPercentage = 4;
 * @return {number}
 */
proto.billing.ExtraTariffFess.prototype.getTaxpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.setTaxpercentage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.clearTaxpercentage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraTariffFess.prototype.hasTaxpercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double FixedAmount = 5;
 * @return {number}
 */
proto.billing.ExtraTariffFess.prototype.getFixedamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.setFixedamount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraTariffFess} returns this
 */
proto.billing.ExtraTariffFess.prototype.clearFixedamount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraTariffFess.prototype.hasFixedamount = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffBand.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffBand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffBand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffBand.toObject = function(includeInstance, msg) {
  var f, obj = {
from: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
to: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
constant: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
charge: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffBand}
 */
proto.billing.TariffBand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffBand;
  return proto.billing.TariffBand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffBand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffBand}
 */
proto.billing.TariffBand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConstant(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCharge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffBand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffBand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffBand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffBand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * required double From = 1;
 * @return {number}
 */
proto.billing.TariffBand.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.setFrom = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.clearFrom = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBand.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required double To = 2;
 * @return {number}
 */
proto.billing.TariffBand.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.setTo = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.clearTo = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBand.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required double Constant = 3;
 * @return {number}
 */
proto.billing.TariffBand.prototype.getConstant = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.setConstant = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.clearConstant = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBand.prototype.hasConstant = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required double Charge = 4;
 * @return {number}
 */
proto.billing.TariffBand.prototype.getCharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.setCharge = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBand} returns this
 */
proto.billing.TariffBand.prototype.clearCharge = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBand.prototype.hasCharge = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.Tariff.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Tariff.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Tariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Tariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Tariff.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffcode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
extrafeesList: jspb.Message.toObjectList(msg.getExtrafeesList(),
    proto.billing.ExtraTariffFess.toObject, includeInstance),
bandsList: jspb.Message.toObjectList(msg.getBandsList(),
    proto.billing.TariffBand.toObject, includeInstance),
effectdate: (f = msg.getEffectdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
consumptionpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Tariff}
 */
proto.billing.Tariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Tariff;
  return proto.billing.Tariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Tariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Tariff}
 */
proto.billing.Tariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffcode(value);
      break;
    case 4:
      var value = new proto.billing.ExtraTariffFess;
      reader.readMessage(value,proto.billing.ExtraTariffFess.deserializeBinaryFromReader);
      msg.addExtrafees(value);
      break;
    case 5:
      var value = new proto.billing.TariffBand;
      reader.readMessage(value,proto.billing.TariffBand.deserializeBinaryFromReader);
      msg.addBands(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectdate(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsumptionpercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Tariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Tariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Tariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Tariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtrafeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.billing.ExtraTariffFess.serializeBinaryToWriter
    );
  }
  f = message.getBandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.billing.TariffBand.serializeBinaryToWriter
    );
  }
  f = message.getEffectdate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * required string TariffCode = 1;
 * @return {string}
 */
proto.billing.Tariff.prototype.getTariffcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.setTariffcode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.clearTariffcode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariff.prototype.hasTariffcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ExtraTariffFess ExtraFees = 4;
 * @return {!Array<!proto.billing.ExtraTariffFess>}
 */
proto.billing.Tariff.prototype.getExtrafeesList = function() {
  return /** @type{!Array<!proto.billing.ExtraTariffFess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.ExtraTariffFess, 4));
};


/**
 * @param {!Array<!proto.billing.ExtraTariffFess>} value
 * @return {!proto.billing.Tariff} returns this
*/
proto.billing.Tariff.prototype.setExtrafeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.billing.ExtraTariffFess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.ExtraTariffFess}
 */
proto.billing.Tariff.prototype.addExtrafees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.billing.ExtraTariffFess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.clearExtrafeesList = function() {
  return this.setExtrafeesList([]);
};


/**
 * repeated TariffBand Bands = 5;
 * @return {!Array<!proto.billing.TariffBand>}
 */
proto.billing.Tariff.prototype.getBandsList = function() {
  return /** @type{!Array<!proto.billing.TariffBand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffBand, 5));
};


/**
 * @param {!Array<!proto.billing.TariffBand>} value
 * @return {!proto.billing.Tariff} returns this
*/
proto.billing.Tariff.prototype.setBandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.billing.TariffBand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffBand}
 */
proto.billing.Tariff.prototype.addBands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.billing.TariffBand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.clearBandsList = function() {
  return this.setBandsList([]);
};


/**
 * required google.protobuf.Timestamp EffectDate = 6;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.Tariff.prototype.getEffectdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.Tariff} returns this
*/
proto.billing.Tariff.prototype.setEffectdate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.clearEffectdate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariff.prototype.hasEffectdate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double ConsumptionPercentage = 7;
 * @return {number}
 */
proto.billing.Tariff.prototype.getConsumptionpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.setConsumptionpercentage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariff} returns this
 */
proto.billing.Tariff.prototype.clearConsumptionpercentage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariff.prototype.hasConsumptionpercentage = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.EntityChargeMappedValue.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.EntityChargeMappedValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.EntityChargeMappedValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.EntityChargeMappedValue.toObject = function(includeInstance, msg) {
  var f, obj = {
from: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
to: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
lukey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
value: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.EntityChargeMappedValue}
 */
proto.billing.EntityChargeMappedValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.EntityChargeMappedValue;
  return proto.billing.EntityChargeMappedValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.EntityChargeMappedValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.EntityChargeMappedValue}
 */
proto.billing.EntityChargeMappedValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLukey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.EntityChargeMappedValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.EntityChargeMappedValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.EntityChargeMappedValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.EntityChargeMappedValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double From = 1;
 * @return {number}
 */
proto.billing.EntityChargeMappedValue.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.setFrom = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.clearFrom = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityChargeMappedValue.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double To = 2;
 * @return {number}
 */
proto.billing.EntityChargeMappedValue.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.setTo = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.clearTo = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityChargeMappedValue.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string LuKey = 3;
 * @return {string}
 */
proto.billing.EntityChargeMappedValue.prototype.getLukey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.setLukey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.clearLukey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityChargeMappedValue.prototype.hasLukey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Value = 4;
 * @return {number}
 */
proto.billing.EntityChargeMappedValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityChargeMappedValue} returns this
 */
proto.billing.EntityChargeMappedValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityChargeMappedValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.EntityEnableMappedValue.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.EntityEnableMappedValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.EntityEnableMappedValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.EntityEnableMappedValue.toObject = function(includeInstance, msg) {
  var f, obj = {
lukey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
value: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.EntityEnableMappedValue}
 */
proto.billing.EntityEnableMappedValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.EntityEnableMappedValue;
  return proto.billing.EntityEnableMappedValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.EntityEnableMappedValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.EntityEnableMappedValue}
 */
proto.billing.EntityEnableMappedValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLukey(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.EntityEnableMappedValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.EntityEnableMappedValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.EntityEnableMappedValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.EntityEnableMappedValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * required string LuKey = 3;
 * @return {string}
 */
proto.billing.EntityEnableMappedValue.prototype.getLukey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.EntityEnableMappedValue} returns this
 */
proto.billing.EntityEnableMappedValue.prototype.setLukey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityEnableMappedValue} returns this
 */
proto.billing.EntityEnableMappedValue.prototype.clearLukey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityEnableMappedValue.prototype.hasLukey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool Value = 4;
 * @return {boolean}
 */
proto.billing.EntityEnableMappedValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.EntityEnableMappedValue} returns this
 */
proto.billing.EntityEnableMappedValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.EntityEnableMappedValue} returns this
 */
proto.billing.EntityEnableMappedValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.EntityEnableMappedValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.RegularChargeEntity.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularChargeEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularChargeEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularChargeEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
entitytype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
mappedvaluesList: jspb.Message.toObjectList(msg.getMappedvaluesList(),
    proto.billing.EntityChargeMappedValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularChargeEntity}
 */
proto.billing.RegularChargeEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularChargeEntity;
  return proto.billing.RegularChargeEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularChargeEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularChargeEntity}
 */
proto.billing.RegularChargeEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.ENTITY_TYPE} */ (reader.readEnum());
      msg.setEntitytype(value);
      break;
    case 2:
      var value = new proto.billing.EntityChargeMappedValue;
      reader.readMessage(value,proto.billing.EntityChargeMappedValue.deserializeBinaryFromReader);
      msg.addMappedvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularChargeEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularChargeEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularChargeEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMappedvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.billing.EntityChargeMappedValue.serializeBinaryToWriter
    );
  }
};


/**
 * required ENTITY_TYPE EntityType = 1;
 * @return {!proto.billing.ENTITY_TYPE}
 */
proto.billing.RegularChargeEntity.prototype.getEntitytype = function() {
  return /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.billing.ENTITY_TYPE} value
 * @return {!proto.billing.RegularChargeEntity} returns this
 */
proto.billing.RegularChargeEntity.prototype.setEntitytype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularChargeEntity} returns this
 */
proto.billing.RegularChargeEntity.prototype.clearEntitytype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularChargeEntity.prototype.hasEntitytype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated EntityChargeMappedValue MappedValues = 2;
 * @return {!Array<!proto.billing.EntityChargeMappedValue>}
 */
proto.billing.RegularChargeEntity.prototype.getMappedvaluesList = function() {
  return /** @type{!Array<!proto.billing.EntityChargeMappedValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.EntityChargeMappedValue, 2));
};


/**
 * @param {!Array<!proto.billing.EntityChargeMappedValue>} value
 * @return {!proto.billing.RegularChargeEntity} returns this
*/
proto.billing.RegularChargeEntity.prototype.setMappedvaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.billing.EntityChargeMappedValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.EntityChargeMappedValue}
 */
proto.billing.RegularChargeEntity.prototype.addMappedvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.billing.EntityChargeMappedValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.RegularChargeEntity} returns this
 */
proto.billing.RegularChargeEntity.prototype.clearMappedvaluesList = function() {
  return this.setMappedvaluesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.RegularEnableEntity.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularEnableEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularEnableEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularEnableEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularEnableEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
entitytype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
mappedvaluesList: jspb.Message.toObjectList(msg.getMappedvaluesList(),
    proto.billing.EntityEnableMappedValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularEnableEntity}
 */
proto.billing.RegularEnableEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularEnableEntity;
  return proto.billing.RegularEnableEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularEnableEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularEnableEntity}
 */
proto.billing.RegularEnableEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.ENTITY_TYPE} */ (reader.readEnum());
      msg.setEntitytype(value);
      break;
    case 2:
      var value = new proto.billing.EntityEnableMappedValue;
      reader.readMessage(value,proto.billing.EntityEnableMappedValue.deserializeBinaryFromReader);
      msg.addMappedvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularEnableEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularEnableEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularEnableEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularEnableEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMappedvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.billing.EntityEnableMappedValue.serializeBinaryToWriter
    );
  }
};


/**
 * required ENTITY_TYPE EntityType = 1;
 * @return {!proto.billing.ENTITY_TYPE}
 */
proto.billing.RegularEnableEntity.prototype.getEntitytype = function() {
  return /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.billing.ENTITY_TYPE} value
 * @return {!proto.billing.RegularEnableEntity} returns this
 */
proto.billing.RegularEnableEntity.prototype.setEntitytype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularEnableEntity} returns this
 */
proto.billing.RegularEnableEntity.prototype.clearEntitytype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularEnableEntity.prototype.hasEntitytype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated EntityEnableMappedValue MappedValues = 2;
 * @return {!Array<!proto.billing.EntityEnableMappedValue>}
 */
proto.billing.RegularEnableEntity.prototype.getMappedvaluesList = function() {
  return /** @type{!Array<!proto.billing.EntityEnableMappedValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.EntityEnableMappedValue, 2));
};


/**
 * @param {!Array<!proto.billing.EntityEnableMappedValue>} value
 * @return {!proto.billing.RegularEnableEntity} returns this
*/
proto.billing.RegularEnableEntity.prototype.setMappedvaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.billing.EntityEnableMappedValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.EntityEnableMappedValue}
 */
proto.billing.RegularEnableEntity.prototype.addMappedvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.billing.EntityEnableMappedValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.RegularEnableEntity} returns this
 */
proto.billing.RegularEnableEntity.prototype.clearMappedvaluesList = function() {
  return this.setMappedvaluesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularCharge.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularCharge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularCharge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularCharge.toObject = function(includeInstance, msg) {
  var f, obj = {
regularchargeid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
effectdate: (f = msg.getEffectdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
effectdateto: (f = msg.getEffectdateto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
transcode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
title: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
ischargable: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
servicetype: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
chargecalcperiod: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
chargeinterval: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
chargemonthlyday: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
chargetype: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
fixedcharge: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
fixedchargediscount: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
mincharge: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f,
vatpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f,
relationchargeentity: (f = msg.getRelationchargeentity()) && proto.billing.RegularChargeEntity.toObject(includeInstance, f),
relationenableentity: (f = msg.getRelationenableentity()) && proto.billing.RegularEnableEntity.toObject(includeInstance, f),
bypass: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
ctypecalcbase: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
perunit: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularCharge}
 */
proto.billing.RegularCharge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularCharge;
  return proto.billing.RegularCharge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularCharge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularCharge}
 */
proto.billing.RegularCharge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegularchargeid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectdate(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectdateto(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIschargable(value);
      break;
    case 8:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setServicetype(value);
      break;
    case 9:
      var value = /** @type {!proto.billing.RegularChargePeriod} */ (reader.readEnum());
      msg.setChargecalcperiod(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChargeinterval(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChargemonthlyday(value);
      break;
    case 12:
      var value = /** @type {!proto.billing.ChargeType} */ (reader.readEnum());
      msg.setChargetype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFixedcharge(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFixedchargediscount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMincharge(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVatpercentage(value);
      break;
    case 17:
      var value = new proto.billing.RegularChargeEntity;
      reader.readMessage(value,proto.billing.RegularChargeEntity.deserializeBinaryFromReader);
      msg.setRelationchargeentity(value);
      break;
    case 18:
      var value = new proto.billing.RegularEnableEntity;
      reader.readMessage(value,proto.billing.RegularEnableEntity.deserializeBinaryFromReader);
      msg.setRelationenableentity(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBypass(value);
      break;
    case 20:
      var value = /** @type {!proto.billing.ChargeRegularCalcStrategy} */ (reader.readEnum());
      msg.setCtypecalcbase(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPerunit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularCharge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularCharge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularCharge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularCharge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEffectdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEffectdateto();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.billing.RegularChargePeriod} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {!proto.billing.ChargeType} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getRelationchargeentity();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.billing.RegularChargeEntity.serializeBinaryToWriter
    );
  }
  f = message.getRelationenableentity();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.billing.RegularEnableEntity.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {!proto.billing.ChargeRegularCalcStrategy} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
};


/**
 * required string RegularChargeId = 1;
 * @return {string}
 */
proto.billing.RegularCharge.prototype.getRegularchargeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setRegularchargeid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearRegularchargeid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasRegularchargeid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required google.protobuf.Timestamp EffectDate = 2;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.RegularCharge.prototype.getEffectdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.RegularCharge} returns this
*/
proto.billing.RegularCharge.prototype.setEffectdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearEffectdate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasEffectdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp EffectDateTo = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.RegularCharge.prototype.getEffectdateto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.RegularCharge} returns this
*/
proto.billing.RegularCharge.prototype.setEffectdateto = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearEffectdateto = function() {
  return this.setEffectdateto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasEffectdateto = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required string TransCode = 4;
 * @return {string}
 */
proto.billing.RegularCharge.prototype.getTranscode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setTranscode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearTranscode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasTranscode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required string Title = 5;
 * @return {string}
 */
proto.billing.RegularCharge.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required bool IsChargable = 6;
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.getIschargable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setIschargable = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearIschargable = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasIschargable = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required SERVICE_TYPE ServiceType = 8;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.RegularCharge.prototype.getServicetype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * required RegularChargePeriod ChargeCalcPeriod = 9;
 * @return {!proto.billing.RegularChargePeriod}
 */
proto.billing.RegularCharge.prototype.getChargecalcperiod = function() {
  return /** @type {!proto.billing.RegularChargePeriod} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/**
 * @param {!proto.billing.RegularChargePeriod} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setChargecalcperiod = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearChargecalcperiod = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasChargecalcperiod = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 ChargeInterval = 10;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getChargeinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setChargeinterval = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearChargeinterval = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasChargeinterval = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 ChargeMonthlyDay = 11;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getChargemonthlyday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setChargemonthlyday = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearChargemonthlyday = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasChargemonthlyday = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ChargeType ChargeType = 12;
 * @return {!proto.billing.ChargeType}
 */
proto.billing.RegularCharge.prototype.getChargetype = function() {
  return /** @type {!proto.billing.ChargeType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.billing.ChargeType} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setChargetype = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearChargetype = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasChargetype = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double FixedCharge = 13;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getFixedcharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setFixedcharge = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearFixedcharge = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasFixedcharge = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double FixedChargeDiscount = 14;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getFixedchargediscount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setFixedchargediscount = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearFixedchargediscount = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasFixedchargediscount = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double MinCharge = 15;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getMincharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setMincharge = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearMincharge = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasMincharge = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double VatPercentage = 16;
 * @return {number}
 */
proto.billing.RegularCharge.prototype.getVatpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setVatpercentage = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearVatpercentage = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasVatpercentage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RegularChargeEntity RelationChargeEntity = 17;
 * @return {?proto.billing.RegularChargeEntity}
 */
proto.billing.RegularCharge.prototype.getRelationchargeentity = function() {
  return /** @type{?proto.billing.RegularChargeEntity} */ (
    jspb.Message.getWrapperField(this, proto.billing.RegularChargeEntity, 17));
};


/**
 * @param {?proto.billing.RegularChargeEntity|undefined} value
 * @return {!proto.billing.RegularCharge} returns this
*/
proto.billing.RegularCharge.prototype.setRelationchargeentity = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearRelationchargeentity = function() {
  return this.setRelationchargeentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasRelationchargeentity = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RegularEnableEntity RelationEnableEntity = 18;
 * @return {?proto.billing.RegularEnableEntity}
 */
proto.billing.RegularCharge.prototype.getRelationenableentity = function() {
  return /** @type{?proto.billing.RegularEnableEntity} */ (
    jspb.Message.getWrapperField(this, proto.billing.RegularEnableEntity, 18));
};


/**
 * @param {?proto.billing.RegularEnableEntity|undefined} value
 * @return {!proto.billing.RegularCharge} returns this
*/
proto.billing.RegularCharge.prototype.setRelationenableentity = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearRelationenableentity = function() {
  return this.setRelationenableentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasRelationenableentity = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool Bypass = 19;
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.getBypass = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setBypass = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearBypass = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasBypass = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ChargeRegularCalcStrategy CTypeCalcBase = 20;
 * @return {!proto.billing.ChargeRegularCalcStrategy}
 */
proto.billing.RegularCharge.prototype.getCtypecalcbase = function() {
  return /** @type {!proto.billing.ChargeRegularCalcStrategy} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.billing.ChargeRegularCalcStrategy} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setCtypecalcbase = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearCtypecalcbase = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasCtypecalcbase = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool PerUnit = 21;
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.getPerunit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.setPerunit = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularCharge} returns this
 */
proto.billing.RegularCharge.prototype.clearPerunit = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularCharge.prototype.hasPerunit = function() {
  return jspb.Message.getField(this, 21) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.RegularChargeRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularChargeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularChargeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularChargeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
regularchargeList: jspb.Message.toObjectList(msg.getRegularchargeList(),
    proto.billing.RegularCharge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularChargeRequest}
 */
proto.billing.RegularChargeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularChargeRequest;
  return proto.billing.RegularChargeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularChargeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularChargeRequest}
 */
proto.billing.RegularChargeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.RegularCharge;
      reader.readMessage(value,proto.billing.RegularCharge.deserializeBinaryFromReader);
      msg.addRegularcharge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularChargeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularChargeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularChargeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularchargeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.RegularCharge.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RegularCharge RegularCharge = 1;
 * @return {!Array<!proto.billing.RegularCharge>}
 */
proto.billing.RegularChargeRequest.prototype.getRegularchargeList = function() {
  return /** @type{!Array<!proto.billing.RegularCharge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.RegularCharge, 1));
};


/**
 * @param {!Array<!proto.billing.RegularCharge>} value
 * @return {!proto.billing.RegularChargeRequest} returns this
*/
proto.billing.RegularChargeRequest.prototype.setRegularchargeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.RegularCharge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.RegularCharge}
 */
proto.billing.RegularChargeRequest.prototype.addRegularcharge = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.RegularCharge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.RegularChargeRequest} returns this
 */
proto.billing.RegularChargeRequest.prototype.clearRegularchargeList = function() {
  return this.setRegularchargeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TransCode.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TransCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TransCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCode.toObject = function(includeInstance, msg) {
  var f, obj = {
code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
edamscode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
edamsscode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TransCode}
 */
proto.billing.TransCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TransCode;
  return proto.billing.TransCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TransCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TransCode}
 */
proto.billing.TransCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEdamscode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEdamsscode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TransCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TransCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TransCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * required string Code = 1;
 * @return {string}
 */
proto.billing.TransCode.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCode.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Description = 2;
 * @return {string}
 */
proto.billing.TransCode.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCode.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 EdamsCode = 3;
 * @return {number}
 */
proto.billing.TransCode.prototype.getEdamscode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.setEdamscode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.clearEdamscode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCode.prototype.hasEdamscode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 EdamsSCode = 4;
 * @return {number}
 */
proto.billing.TransCode.prototype.getEdamsscode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.setEdamsscode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCode} returns this
 */
proto.billing.TransCode.prototype.clearEdamsscode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCode.prototype.hasEdamsscode = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ServiceType.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ServiceType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ServiceType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceType.toObject = function(includeInstance, msg) {
  var f, obj = {
stype: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
isselectable: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
isbasic: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ServiceType}
 */
proto.billing.ServiceType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ServiceType;
  return proto.billing.ServiceType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ServiceType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ServiceType}
 */
proto.billing.ServiceType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setStype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsselectable(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbasic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ServiceType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ServiceType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ServiceType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * required SERVICE_TYPE SType = 8;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.ServiceType.prototype.getStype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.setStype = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.clearStype = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.hasStype = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.billing.ServiceType.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool IsSelectable = 4;
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.getIsselectable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.setIsselectable = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.clearIsselectable = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.hasIsselectable = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool IsBasic = 5;
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.getIsbasic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.setIsbasic = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceType} returns this
 */
proto.billing.ServiceType.prototype.clearIsbasic = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceType.prototype.hasIsbasic = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ServiceTypeRepsonce.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ServiceTypeRepsonce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ServiceTypeRepsonce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceTypeRepsonce.toObject = function(includeInstance, msg) {
  var f, obj = {
stype: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ServiceTypeRepsonce}
 */
proto.billing.ServiceTypeRepsonce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ServiceTypeRepsonce;
  return proto.billing.ServiceTypeRepsonce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ServiceTypeRepsonce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ServiceTypeRepsonce}
 */
proto.billing.ServiceTypeRepsonce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setStype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ServiceTypeRepsonce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ServiceTypeRepsonce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ServiceTypeRepsonce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceTypeRepsonce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * required SERVICE_TYPE SType = 8;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.ServiceTypeRepsonce.prototype.getStype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.ServiceTypeRepsonce} returns this
 */
proto.billing.ServiceTypeRepsonce.prototype.setStype = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceTypeRepsonce} returns this
 */
proto.billing.ServiceTypeRepsonce.prototype.clearStype = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceTypeRepsonce.prototype.hasStype = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ChargeSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ChargeSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ChargeSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ChargeSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
cyclelength: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
bilingdate: (f = msg.getBilingdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ignoretimeeffect: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
paymentno: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
taxfinantialtransembded: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ChargeSetting}
 */
proto.billing.ChargeSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ChargeSetting;
  return proto.billing.ChargeSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ChargeSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ChargeSetting}
 */
proto.billing.ChargeSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCyclelength(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilingdate(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoretimeeffect(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentno(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTaxfinantialtransembded(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ChargeSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ChargeSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ChargeSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ChargeSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBilingdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * required int64 CycleLength = 2;
 * @return {number}
 */
proto.billing.ChargeSetting.prototype.getCyclelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.setCyclelength = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.clearCyclelength = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.hasCyclelength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required google.protobuf.Timestamp BilingDate = 3;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.ChargeSetting.prototype.getBilingdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.ChargeSetting} returns this
*/
proto.billing.ChargeSetting.prototype.setBilingdate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.clearBilingdate = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.hasBilingdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool IgnoreTimeEffect = 4;
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.getIgnoretimeeffect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.setIgnoretimeeffect = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.clearIgnoretimeeffect = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.hasIgnoretimeeffect = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string PaymentNo = 5;
 * @return {string}
 */
proto.billing.ChargeSetting.prototype.getPaymentno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.setPaymentno = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.clearPaymentno = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.hasPaymentno = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool TaxFinantialTransEmbded = 6;
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.getTaxfinantialtransembded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.setTaxfinantialtransembded = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeSetting} returns this
 */
proto.billing.ChargeSetting.prototype.clearTaxfinantialtransembded = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeSetting.prototype.hasTaxfinantialtransembded = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.SubConnectionReading.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.SubConnectionReading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.SubConnectionReading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SubConnectionReading.toObject = function(includeInstance, msg) {
  var f, obj = {
ctype: (f = msg.getCtype()) && proto.billing.Ctg.toObject(includeInstance, f),
nounits: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
percentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
estimconsump: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.SubConnectionReading}
 */
proto.billing.SubConnectionReading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.SubConnectionReading;
  return proto.billing.SubConnectionReading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.SubConnectionReading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.SubConnectionReading}
 */
proto.billing.SubConnectionReading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.setCtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNounits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPercentage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEstimconsump(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.SubConnectionReading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.SubConnectionReading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.SubConnectionReading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SubConnectionReading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtype();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * required Ctg Ctype = 1;
 * @return {!proto.billing.Ctg}
 */
proto.billing.SubConnectionReading.prototype.getCtype = function() {
  return /** @type{!proto.billing.Ctg} */ (
    jspb.Message.getWrapperField(this, proto.billing.Ctg, 1, 1));
};


/**
 * @param {!proto.billing.Ctg} value
 * @return {!proto.billing.SubConnectionReading} returns this
*/
proto.billing.SubConnectionReading.prototype.setCtype = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.clearCtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnectionReading.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 NoUnits = 2;
 * @return {number}
 */
proto.billing.SubConnectionReading.prototype.getNounits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.setNounits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.clearNounits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnectionReading.prototype.hasNounits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required double Percentage = 3;
 * @return {number}
 */
proto.billing.SubConnectionReading.prototype.getPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.setPercentage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.clearPercentage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnectionReading.prototype.hasPercentage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required double EstimConsump = 4;
 * @return {number}
 */
proto.billing.SubConnectionReading.prototype.getEstimconsump = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.setEstimconsump = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SubConnectionReading} returns this
 */
proto.billing.SubConnectionReading.prototype.clearEstimconsump = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SubConnectionReading.prototype.hasEstimconsump = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Reading.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Reading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Reading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Reading.toObject = function(includeInstance, msg) {
  var f, obj = {
consump: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
prreading: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
crreading: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
prdate: (f = msg.getPrdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
crdate: (f = msg.getCrdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
readtype: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
readingby: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Reading}
 */
proto.billing.Reading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Reading;
  return proto.billing.Reading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Reading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Reading}
 */
proto.billing.Reading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsump(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrreading(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCrreading(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPrdate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCrdate(value);
      break;
    case 6:
      var value = /** @type {!proto.billing.READING_TYPE} */ (reader.readEnum());
      msg.setReadtype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadingby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Reading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Reading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Reading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Reading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPrdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCrdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.billing.READING_TYPE} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional double Consump = 1;
 * @return {number}
 */
proto.billing.Reading.prototype.getConsump = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.setConsump = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearConsump = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasConsump = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double PrReading = 2;
 * @return {number}
 */
proto.billing.Reading.prototype.getPrreading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.setPrreading = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearPrreading = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasPrreading = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double CrReading = 3;
 * @return {number}
 */
proto.billing.Reading.prototype.getCrreading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.setCrreading = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearCrreading = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasCrreading = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp PrDate = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.Reading.prototype.getPrdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.Reading} returns this
*/
proto.billing.Reading.prototype.setPrdate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearPrdate = function() {
  return this.setPrdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasPrdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp CrDate = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.Reading.prototype.getCrdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.Reading} returns this
*/
proto.billing.Reading.prototype.setCrdate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearCrdate = function() {
  return this.setCrdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasCrdate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional READING_TYPE ReadType = 6;
 * @return {!proto.billing.READING_TYPE}
 */
proto.billing.Reading.prototype.getReadtype = function() {
  return /** @type {!proto.billing.READING_TYPE} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.billing.READING_TYPE} value
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.setReadtype = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearReadtype = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasReadtype = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string ReadingBy = 7;
 * @return {string}
 */
proto.billing.Reading.prototype.getReadingby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.setReadingby = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Reading} returns this
 */
proto.billing.Reading.prototype.clearReadingby = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Reading.prototype.hasReadingby = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ServiceReading.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ServiceReading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ServiceReading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceReading.toObject = function(includeInstance, msg) {
  var f, obj = {
servicetype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
reading: (f = msg.getReading()) && proto.billing.Reading.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ServiceReading}
 */
proto.billing.ServiceReading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ServiceReading;
  return proto.billing.ServiceReading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ServiceReading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ServiceReading}
 */
proto.billing.ServiceReading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setServicetype(value);
      break;
    case 2:
      var value = new proto.billing.Reading;
      reader.readMessage(value,proto.billing.Reading.deserializeBinaryFromReader);
      msg.setReading(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ServiceReading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ServiceReading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ServiceReading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceReading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReading();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.billing.Reading.serializeBinaryToWriter
    );
  }
};


/**
 * required SERVICE_TYPE ServiceType = 1;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.ServiceReading.prototype.getServicetype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.ServiceReading} returns this
 */
proto.billing.ServiceReading.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceReading} returns this
 */
proto.billing.ServiceReading.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceReading.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Reading Reading = 2;
 * @return {!proto.billing.Reading}
 */
proto.billing.ServiceReading.prototype.getReading = function() {
  return /** @type{!proto.billing.Reading} */ (
    jspb.Message.getWrapperField(this, proto.billing.Reading, 2, 1));
};


/**
 * @param {!proto.billing.Reading} value
 * @return {!proto.billing.ServiceReading} returns this
*/
proto.billing.ServiceReading.prototype.setReading = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceReading} returns this
 */
proto.billing.ServiceReading.prototype.clearReading = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceReading.prototype.hasReading = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ChargeRequest.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ChargeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ChargeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ChargeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ChargeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
customer: (f = msg.getCustomer()) && proto.billing.Customer.toObject(includeInstance, f),
servicesreadingsList: jspb.Message.toObjectList(msg.getServicesreadingsList(),
    proto.billing.ServiceReading.toObject, includeInstance),
setting: (f = msg.getSetting()) && proto.billing.ChargeSetting.toObject(includeInstance, f),
servicesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
oldbill: (f = msg.getOldbill()) && proto.billing.Bill.toObject(includeInstance, f),
cyclelength: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
newBill: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ChargeRequest}
 */
proto.billing.ChargeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ChargeRequest;
  return proto.billing.ChargeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ChargeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ChargeRequest}
 */
proto.billing.ChargeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Customer;
      reader.readMessage(value,proto.billing.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = new proto.billing.ServiceReading;
      reader.readMessage(value,proto.billing.ServiceReading.deserializeBinaryFromReader);
      msg.addServicesreadings(value);
      break;
    case 3:
      var value = new proto.billing.ChargeSetting;
      reader.readMessage(value,proto.billing.ChargeSetting.deserializeBinaryFromReader);
      msg.setSetting(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.billing.SERVICE_TYPE>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addServices(values[i]);
      }
      break;
    case 6:
      var value = new proto.billing.Bill;
      reader.readMessage(value,proto.billing.Bill.deserializeBinaryFromReader);
      msg.setOldbill(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCyclelength(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNewBill(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ChargeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ChargeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ChargeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ChargeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.Customer.serializeBinaryToWriter
    );
  }
  f = message.getServicesreadingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.billing.ServiceReading.serializeBinaryToWriter
    );
  }
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.billing.ChargeSetting.serializeBinaryToWriter
    );
  }
  f = message.getServicesList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      4,
      f
    );
  }
  f = message.getOldbill();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.billing.Bill.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * required Customer Customer = 1;
 * @return {!proto.billing.Customer}
 */
proto.billing.ChargeRequest.prototype.getCustomer = function() {
  return /** @type{!proto.billing.Customer} */ (
    jspb.Message.getWrapperField(this, proto.billing.Customer, 1, 1));
};


/**
 * @param {!proto.billing.Customer} value
 * @return {!proto.billing.ChargeRequest} returns this
*/
proto.billing.ChargeRequest.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearCustomer = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ServiceReading ServicesReadings = 2;
 * @return {!Array<!proto.billing.ServiceReading>}
 */
proto.billing.ChargeRequest.prototype.getServicesreadingsList = function() {
  return /** @type{!Array<!proto.billing.ServiceReading>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.ServiceReading, 2));
};


/**
 * @param {!Array<!proto.billing.ServiceReading>} value
 * @return {!proto.billing.ChargeRequest} returns this
*/
proto.billing.ChargeRequest.prototype.setServicesreadingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.billing.ServiceReading=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.ServiceReading}
 */
proto.billing.ChargeRequest.prototype.addServicesreadings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.billing.ServiceReading, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearServicesreadingsList = function() {
  return this.setServicesreadingsList([]);
};


/**
 * required ChargeSetting Setting = 3;
 * @return {!proto.billing.ChargeSetting}
 */
proto.billing.ChargeRequest.prototype.getSetting = function() {
  return /** @type{!proto.billing.ChargeSetting} */ (
    jspb.Message.getWrapperField(this, proto.billing.ChargeSetting, 3, 1));
};


/**
 * @param {!proto.billing.ChargeSetting} value
 * @return {!proto.billing.ChargeRequest} returns this
*/
proto.billing.ChargeRequest.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearSetting = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.hasSetting = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated SERVICE_TYPE Services = 4;
 * @return {!Array<!proto.billing.SERVICE_TYPE>}
 */
proto.billing.ChargeRequest.prototype.getServicesList = function() {
  return /** @type {!Array<!proto.billing.SERVICE_TYPE>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.billing.SERVICE_TYPE>} value
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.setServicesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @param {number=} opt_index
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.addServices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearServicesList = function() {
  return this.setServicesList([]);
};


/**
 * optional Bill OldBill = 6;
 * @return {?proto.billing.Bill}
 */
proto.billing.ChargeRequest.prototype.getOldbill = function() {
  return /** @type{?proto.billing.Bill} */ (
    jspb.Message.getWrapperField(this, proto.billing.Bill, 6));
};


/**
 * @param {?proto.billing.Bill|undefined} value
 * @return {!proto.billing.ChargeRequest} returns this
*/
proto.billing.ChargeRequest.prototype.setOldbill = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearOldbill = function() {
  return this.setOldbill(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.hasOldbill = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 CycleLength = 7;
 * @return {number}
 */
proto.billing.ChargeRequest.prototype.getCyclelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.setCyclelength = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearCyclelength = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.hasCyclelength = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool NEW_BILL = 8;
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.getNewBill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.setNewBill = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ChargeRequest} returns this
 */
proto.billing.ChargeRequest.prototype.clearNewBill = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ChargeRequest.prototype.hasNewBill = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ExtraCharge.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ExtraCharge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ExtraCharge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ExtraCharge.toObject = function(includeInstance, msg) {
  var f, obj = {
description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
code: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
amount: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ExtraCharge}
 */
proto.billing.ExtraCharge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ExtraCharge;
  return proto.billing.ExtraCharge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ExtraCharge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ExtraCharge}
 */
proto.billing.ExtraCharge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ExtraCharge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ExtraCharge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ExtraCharge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ExtraCharge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string DESCRIPTION = 1;
 * @return {string}
 */
proto.billing.ExtraCharge.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraCharge.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Code = 2;
 * @return {string}
 */
proto.billing.ExtraCharge.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.clearCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraCharge.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required double Amount = 3;
 * @return {number}
 */
proto.billing.ExtraCharge.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ExtraCharge} returns this
 */
proto.billing.ExtraCharge.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ExtraCharge.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.MeasuredTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.MeasuredTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.MeasuredTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.MeasuredTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
consump: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
crreading: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
prreading: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
readtype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
metertype: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
meterref: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.MeasuredTransaction}
 */
proto.billing.MeasuredTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.MeasuredTransaction;
  return proto.billing.MeasuredTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.MeasuredTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.MeasuredTransaction}
 */
proto.billing.MeasuredTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsump(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCrreading(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrreading(value);
      break;
    case 4:
      var value = /** @type {!proto.billing.READING_TYPE} */ (reader.readEnum());
      msg.setReadtype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetertype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeterref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.MeasuredTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.MeasuredTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.MeasuredTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.MeasuredTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {!proto.billing.READING_TYPE} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * required double Consump = 1;
 * @return {number}
 */
proto.billing.MeasuredTransaction.prototype.getConsump = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setConsump = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearConsump = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasConsump = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double CrReading = 2;
 * @return {number}
 */
proto.billing.MeasuredTransaction.prototype.getCrreading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setCrreading = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearCrreading = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasCrreading = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double PrReading = 3;
 * @return {number}
 */
proto.billing.MeasuredTransaction.prototype.getPrreading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setPrreading = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearPrreading = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasPrreading = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required READING_TYPE ReadType = 4;
 * @return {!proto.billing.READING_TYPE}
 */
proto.billing.MeasuredTransaction.prototype.getReadtype = function() {
  return /** @type {!proto.billing.READING_TYPE} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.billing.READING_TYPE} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setReadtype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearReadtype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasReadtype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string MeterType = 5;
 * @return {string}
 */
proto.billing.MeasuredTransaction.prototype.getMetertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setMetertype = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearMetertype = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasMetertype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string MeterRef = 6;
 * @return {string}
 */
proto.billing.MeasuredTransaction.prototype.getMeterref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.setMeterref = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.MeasuredTransaction} returns this
 */
proto.billing.MeasuredTransaction.prototype.clearMeterref = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.MeasuredTransaction.prototype.hasMeterref = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.FinantialTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.FinantialTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.FinantialTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.FinantialTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
servicetype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
code: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
bilngdate: (f = msg.getBilngdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
effdate: (f = msg.getEffdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
amount: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
taxamount: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
discountamount: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
ctype: (f = msg.getCtype()) && proto.billing.Ctg.toObject(includeInstance, f),
nounits: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
propref: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
mtransaction: (f = msg.getMtransaction()) && proto.billing.MeasuredTransaction.toObject(includeInstance, f),
description: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
consumptionpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
tariffid: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
editable: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
bandsconsumpMap: (f = msg.getBandsconsumpMap()) ? f.toObject(includeInstance, undefined) : [],
bandsamountMap: (f = msg.getBandsamountMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.FinantialTransaction}
 */
proto.billing.FinantialTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.FinantialTransaction;
  return proto.billing.FinantialTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.FinantialTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.FinantialTransaction}
 */
proto.billing.FinantialTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.SERVICE_TYPE} */ (reader.readEnum());
      msg.setServicetype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilngdate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffdate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTaxamount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiscountamount(value);
      break;
    case 8:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.setCtype(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNounits(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropref(value);
      break;
    case 11:
      var value = new proto.billing.MeasuredTransaction;
      reader.readMessage(value,proto.billing.MeasuredTransaction.deserializeBinaryFromReader);
      msg.setMtransaction(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsumptionpercentage(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffid(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditable(value);
      break;
    case 16:
      var value = msg.getBandsconsumpMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readDouble, null, 0, 0.0);
         });
      break;
    case 17:
      var value = msg.getBandsamountMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readDouble, null, 0, 0.0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.FinantialTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.FinantialTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.FinantialTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.FinantialTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBilngdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEffdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getCtype();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMtransaction();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.billing.MeasuredTransaction.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getBandsconsumpMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getBandsamountMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(17, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeDouble);
  }
};


/**
 * required SERVICE_TYPE ServiceType = 1;
 * @return {!proto.billing.SERVICE_TYPE}
 */
proto.billing.FinantialTransaction.prototype.getServicetype = function() {
  return /** @type {!proto.billing.SERVICE_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.billing.SERVICE_TYPE} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Code = 2;
 * @return {string}
 */
proto.billing.FinantialTransaction.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required google.protobuf.Timestamp BilngDate = 3;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.FinantialTransaction.prototype.getBilngdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.FinantialTransaction} returns this
*/
proto.billing.FinantialTransaction.prototype.setBilngdate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearBilngdate = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasBilngdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required google.protobuf.Timestamp EffDate = 4;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.FinantialTransaction.prototype.getEffdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.FinantialTransaction} returns this
*/
proto.billing.FinantialTransaction.prototype.setEffdate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearEffdate = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasEffdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required double Amount = 5;
 * @return {number}
 */
proto.billing.FinantialTransaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double TaxAmount = 6;
 * @return {number}
 */
proto.billing.FinantialTransaction.prototype.getTaxamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setTaxamount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearTaxamount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasTaxamount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double DiscountAmount = 7;
 * @return {number}
 */
proto.billing.FinantialTransaction.prototype.getDiscountamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setDiscountamount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearDiscountamount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasDiscountamount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Ctg Ctype = 8;
 * @return {?proto.billing.Ctg}
 */
proto.billing.FinantialTransaction.prototype.getCtype = function() {
  return /** @type{?proto.billing.Ctg} */ (
    jspb.Message.getWrapperField(this, proto.billing.Ctg, 8));
};


/**
 * @param {?proto.billing.Ctg|undefined} value
 * @return {!proto.billing.FinantialTransaction} returns this
*/
proto.billing.FinantialTransaction.prototype.setCtype = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearCtype = function() {
  return this.setCtype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasCtype = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 NoUnits = 9;
 * @return {number}
 */
proto.billing.FinantialTransaction.prototype.getNounits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setNounits = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearNounits = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasNounits = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string PropRef = 10;
 * @return {string}
 */
proto.billing.FinantialTransaction.prototype.getPropref = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setPropref = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearPropref = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasPropref = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MeasuredTransaction MTransaction = 11;
 * @return {?proto.billing.MeasuredTransaction}
 */
proto.billing.FinantialTransaction.prototype.getMtransaction = function() {
  return /** @type{?proto.billing.MeasuredTransaction} */ (
    jspb.Message.getWrapperField(this, proto.billing.MeasuredTransaction, 11));
};


/**
 * @param {?proto.billing.MeasuredTransaction|undefined} value
 * @return {!proto.billing.FinantialTransaction} returns this
*/
proto.billing.FinantialTransaction.prototype.setMtransaction = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearMtransaction = function() {
  return this.setMtransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasMtransaction = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string Description = 12;
 * @return {string}
 */
proto.billing.FinantialTransaction.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double ConsumptionPercentage = 13;
 * @return {number}
 */
proto.billing.FinantialTransaction.prototype.getConsumptionpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setConsumptionpercentage = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearConsumptionpercentage = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasConsumptionpercentage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string TariffId = 14;
 * @return {string}
 */
proto.billing.FinantialTransaction.prototype.getTariffid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setTariffid = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearTariffid = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasTariffid = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool Editable = 15;
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.getEditable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.setEditable = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearEditable = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.FinantialTransaction.prototype.hasEditable = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * map<int32, double> BandsConsump = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.billing.FinantialTransaction.prototype.getBandsconsumpMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearBandsconsumpMap = function() {
  this.getBandsconsumpMap().clear();
  return this;
};


/**
 * map<int32, double> BandsAmount = 17;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.billing.FinantialTransaction.prototype.getBandsamountMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 17, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.billing.FinantialTransaction} returns this
 */
proto.billing.FinantialTransaction.prototype.clearBandsamountMap = function() {
  this.getBandsamountMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.Bill.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Bill.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Bill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Bill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Bill.toObject = function(includeInstance, msg) {
  var f, obj = {
paymentno: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
bilngdate: (f = msg.getBilngdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
ftransactionsList: jspb.Message.toObjectList(msg.getFtransactionsList(),
    proto.billing.FinantialTransaction.toObject, includeInstance),
servicesreadingsList: jspb.Message.toObjectList(msg.getServicesreadingsList(),
    proto.billing.ServiceReading.toObject, includeInstance),
customer: (f = msg.getCustomer()) && proto.billing.Customer.toObject(includeInstance, f),
clbalance: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
comment: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Bill}
 */
proto.billing.Bill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Bill;
  return proto.billing.Bill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Bill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Bill}
 */
proto.billing.Bill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentno(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilngdate(value);
      break;
    case 3:
      var value = new proto.billing.FinantialTransaction;
      reader.readMessage(value,proto.billing.FinantialTransaction.deserializeBinaryFromReader);
      msg.addFtransactions(value);
      break;
    case 4:
      var value = new proto.billing.ServiceReading;
      reader.readMessage(value,proto.billing.ServiceReading.deserializeBinaryFromReader);
      msg.addServicesreadings(value);
      break;
    case 7:
      var value = new proto.billing.Customer;
      reader.readMessage(value,proto.billing.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClbalance(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Bill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Bill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Bill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Bill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBilngdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFtransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.billing.FinantialTransaction.serializeBinaryToWriter
    );
  }
  f = message.getServicesreadingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.billing.ServiceReading.serializeBinaryToWriter
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.billing.Customer.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * required string PaymentNo = 1;
 * @return {string}
 */
proto.billing.Bill.prototype.getPaymentno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.setPaymentno = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearPaymentno = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Bill.prototype.hasPaymentno = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required google.protobuf.Timestamp BilngDate = 2;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.Bill.prototype.getBilngdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.Bill} returns this
*/
proto.billing.Bill.prototype.setBilngdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearBilngdate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Bill.prototype.hasBilngdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FinantialTransaction FTransactions = 3;
 * @return {!Array<!proto.billing.FinantialTransaction>}
 */
proto.billing.Bill.prototype.getFtransactionsList = function() {
  return /** @type{!Array<!proto.billing.FinantialTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.FinantialTransaction, 3));
};


/**
 * @param {!Array<!proto.billing.FinantialTransaction>} value
 * @return {!proto.billing.Bill} returns this
*/
proto.billing.Bill.prototype.setFtransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.billing.FinantialTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.FinantialTransaction}
 */
proto.billing.Bill.prototype.addFtransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.billing.FinantialTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearFtransactionsList = function() {
  return this.setFtransactionsList([]);
};


/**
 * repeated ServiceReading ServicesReadings = 4;
 * @return {!Array<!proto.billing.ServiceReading>}
 */
proto.billing.Bill.prototype.getServicesreadingsList = function() {
  return /** @type{!Array<!proto.billing.ServiceReading>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.ServiceReading, 4));
};


/**
 * @param {!Array<!proto.billing.ServiceReading>} value
 * @return {!proto.billing.Bill} returns this
*/
proto.billing.Bill.prototype.setServicesreadingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.billing.ServiceReading=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.ServiceReading}
 */
proto.billing.Bill.prototype.addServicesreadings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.billing.ServiceReading, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearServicesreadingsList = function() {
  return this.setServicesreadingsList([]);
};


/**
 * required Customer Customer = 7;
 * @return {!proto.billing.Customer}
 */
proto.billing.Bill.prototype.getCustomer = function() {
  return /** @type{!proto.billing.Customer} */ (
    jspb.Message.getWrapperField(this, proto.billing.Customer, 7, 1));
};


/**
 * @param {!proto.billing.Customer} value
 * @return {!proto.billing.Bill} returns this
*/
proto.billing.Bill.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearCustomer = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Bill.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double ClBalance = 8;
 * @return {number}
 */
proto.billing.Bill.prototype.getClbalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.setClbalance = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearClbalance = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Bill.prototype.hasClbalance = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string Comment = 9;
 * @return {string}
 */
proto.billing.Bill.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Bill} returns this
 */
proto.billing.Bill.prototype.clearComment = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Bill.prototype.hasComment = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CancelledRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CancelledRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CancelledRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CancelledRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
formno: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
formdate: (f = msg.getFormdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
status: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
comment: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CancelledRequest}
 */
proto.billing.CancelledRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CancelledRequest;
  return proto.billing.CancelledRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CancelledRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CancelledRequest}
 */
proto.billing.CancelledRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormno(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFormdate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CancelledRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CancelledRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CancelledRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CancelledRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFormdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * required int64 FormNo = 1;
 * @return {number}
 */
proto.billing.CancelledRequest.prototype.getFormno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.setFormno = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.clearFormno = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CancelledRequest.prototype.hasFormno = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp FormDate = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.CancelledRequest.prototype.getFormdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.CancelledRequest} returns this
*/
proto.billing.CancelledRequest.prototype.setFormdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.clearFormdate = function() {
  return this.setFormdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CancelledRequest.prototype.hasFormdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Status = 3;
 * @return {string}
 */
proto.billing.CancelledRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CancelledRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Comment = 4;
 * @return {string}
 */
proto.billing.CancelledRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CancelledRequest} returns this
 */
proto.billing.CancelledRequest.prototype.clearComment = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CancelledRequest.prototype.hasComment = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.BillResponce.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.BillResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.BillResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.BillResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.BillResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
billsList: jspb.Message.toObjectList(msg.getBillsList(),
    proto.billing.Bill.toObject, includeInstance),
recalcform: (f = msg.getRecalcform()) && proto.billing.CancelledRequest.toObject(includeInstance, f),
calculatedAgain: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.BillResponce}
 */
proto.billing.BillResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.BillResponce;
  return proto.billing.BillResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.BillResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.BillResponce}
 */
proto.billing.BillResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Bill;
      reader.readMessage(value,proto.billing.Bill.deserializeBinaryFromReader);
      msg.addBills(value);
      break;
    case 2:
      var value = new proto.billing.CancelledRequest;
      reader.readMessage(value,proto.billing.CancelledRequest.deserializeBinaryFromReader);
      msg.setRecalcform(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCalculatedAgain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.BillResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.BillResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.BillResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.BillResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.Bill.serializeBinaryToWriter
    );
  }
  f = message.getRecalcform();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.billing.CancelledRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated Bill Bills = 1;
 * @return {!Array<!proto.billing.Bill>}
 */
proto.billing.BillResponce.prototype.getBillsList = function() {
  return /** @type{!Array<!proto.billing.Bill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Bill, 1));
};


/**
 * @param {!Array<!proto.billing.Bill>} value
 * @return {!proto.billing.BillResponce} returns this
*/
proto.billing.BillResponce.prototype.setBillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.Bill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Bill}
 */
proto.billing.BillResponce.prototype.addBills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.Bill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.BillResponce} returns this
 */
proto.billing.BillResponce.prototype.clearBillsList = function() {
  return this.setBillsList([]);
};


/**
 * optional CancelledRequest RecalcForm = 2;
 * @return {?proto.billing.CancelledRequest}
 */
proto.billing.BillResponce.prototype.getRecalcform = function() {
  return /** @type{?proto.billing.CancelledRequest} */ (
    jspb.Message.getWrapperField(this, proto.billing.CancelledRequest, 2));
};


/**
 * @param {?proto.billing.CancelledRequest|undefined} value
 * @return {!proto.billing.BillResponce} returns this
*/
proto.billing.BillResponce.prototype.setRecalcform = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.BillResponce} returns this
 */
proto.billing.BillResponce.prototype.clearRecalcform = function() {
  return this.setRecalcform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.BillResponce.prototype.hasRecalcform = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool Calculated_Again = 3;
 * @return {boolean}
 */
proto.billing.BillResponce.prototype.getCalculatedAgain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.BillResponce} returns this
 */
proto.billing.BillResponce.prototype.setCalculatedAgain = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.BillResponce} returns this
 */
proto.billing.BillResponce.prototype.clearCalculatedAgain = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.BillResponce.prototype.hasCalculatedAgain = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ServiceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ServiceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ServiceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ServiceInfo}
 */
proto.billing.ServiceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ServiceInfo;
  return proto.billing.ServiceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ServiceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ServiceInfo}
 */
proto.billing.ServiceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ServiceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ServiceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ServiceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ServiceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required string Name = 1;
 * @return {string}
 */
proto.billing.ServiceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ServiceInfo} returns this
 */
proto.billing.ServiceInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceInfo} returns this
 */
proto.billing.ServiceInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Version = 2;
 * @return {string}
 */
proto.billing.ServiceInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ServiceInfo} returns this
 */
proto.billing.ServiceInfo.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ServiceInfo} returns this
 */
proto.billing.ServiceInfo.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ServiceInfo.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.SetupData.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.SetupData.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.SetupData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.SetupData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SetupData.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffsList: jspb.Message.toObjectList(msg.getTariffsList(),
    proto.billing.Tariff.toObject, includeInstance),
ctgsList: jspb.Message.toObjectList(msg.getCtgsList(),
    proto.billing.Ctg.toObject, includeInstance),
regularchargesList: jspb.Message.toObjectList(msg.getRegularchargesList(),
    proto.billing.RegularCharge.toObject, includeInstance),
transcodesList: jspb.Message.toObjectList(msg.getTranscodesList(),
    proto.billing.TransCode.toObject, includeInstance),
withRound: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.SetupData}
 */
proto.billing.SetupData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.SetupData;
  return proto.billing.SetupData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.SetupData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.SetupData}
 */
proto.billing.SetupData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Tariff;
      reader.readMessage(value,proto.billing.Tariff.deserializeBinaryFromReader);
      msg.addTariffs(value);
      break;
    case 2:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.addCtgs(value);
      break;
    case 3:
      var value = new proto.billing.RegularCharge;
      reader.readMessage(value,proto.billing.RegularCharge.deserializeBinaryFromReader);
      msg.addRegularcharges(value);
      break;
    case 4:
      var value = new proto.billing.TransCode;
      reader.readMessage(value,proto.billing.TransCode.deserializeBinaryFromReader);
      msg.addTranscodes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithRound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.SetupData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.SetupData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.SetupData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SetupData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.Tariff.serializeBinaryToWriter
    );
  }
  f = message.getCtgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
  f = message.getRegularchargesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.billing.RegularCharge.serializeBinaryToWriter
    );
  }
  f = message.getTranscodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.billing.TransCode.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated Tariff Tariffs = 1;
 * @return {!Array<!proto.billing.Tariff>}
 */
proto.billing.SetupData.prototype.getTariffsList = function() {
  return /** @type{!Array<!proto.billing.Tariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Tariff, 1));
};


/**
 * @param {!Array<!proto.billing.Tariff>} value
 * @return {!proto.billing.SetupData} returns this
*/
proto.billing.SetupData.prototype.setTariffsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.Tariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Tariff}
 */
proto.billing.SetupData.prototype.addTariffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.Tariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.clearTariffsList = function() {
  return this.setTariffsList([]);
};


/**
 * repeated Ctg Ctgs = 2;
 * @return {!Array<!proto.billing.Ctg>}
 */
proto.billing.SetupData.prototype.getCtgsList = function() {
  return /** @type{!Array<!proto.billing.Ctg>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Ctg, 2));
};


/**
 * @param {!Array<!proto.billing.Ctg>} value
 * @return {!proto.billing.SetupData} returns this
*/
proto.billing.SetupData.prototype.setCtgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.billing.Ctg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Ctg}
 */
proto.billing.SetupData.prototype.addCtgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.billing.Ctg, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.clearCtgsList = function() {
  return this.setCtgsList([]);
};


/**
 * repeated RegularCharge RegularCharges = 3;
 * @return {!Array<!proto.billing.RegularCharge>}
 */
proto.billing.SetupData.prototype.getRegularchargesList = function() {
  return /** @type{!Array<!proto.billing.RegularCharge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.RegularCharge, 3));
};


/**
 * @param {!Array<!proto.billing.RegularCharge>} value
 * @return {!proto.billing.SetupData} returns this
*/
proto.billing.SetupData.prototype.setRegularchargesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.billing.RegularCharge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.RegularCharge}
 */
proto.billing.SetupData.prototype.addRegularcharges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.billing.RegularCharge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.clearRegularchargesList = function() {
  return this.setRegularchargesList([]);
};


/**
 * repeated TransCode TransCodes = 4;
 * @return {!Array<!proto.billing.TransCode>}
 */
proto.billing.SetupData.prototype.getTranscodesList = function() {
  return /** @type{!Array<!proto.billing.TransCode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TransCode, 4));
};


/**
 * @param {!Array<!proto.billing.TransCode>} value
 * @return {!proto.billing.SetupData} returns this
*/
proto.billing.SetupData.prototype.setTranscodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.billing.TransCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TransCode}
 */
proto.billing.SetupData.prototype.addTranscodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.billing.TransCode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.clearTranscodesList = function() {
  return this.setTranscodesList([]);
};


/**
 * optional bool With_Round = 5;
 * @return {boolean}
 */
proto.billing.SetupData.prototype.getWithRound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.setWithRound = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SetupData} returns this
 */
proto.billing.SetupData.prototype.clearWithRound = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SetupData.prototype.hasWithRound = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.CustomersList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CustomersList.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CustomersList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CustomersList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CustomersList.toObject = function(includeInstance, msg) {
  var f, obj = {
customersList: jspb.Message.toObjectList(msg.getCustomersList(),
    proto.billing.Customer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CustomersList}
 */
proto.billing.CustomersList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CustomersList;
  return proto.billing.CustomersList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CustomersList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CustomersList}
 */
proto.billing.CustomersList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Customer;
      reader.readMessage(value,proto.billing.Customer.deserializeBinaryFromReader);
      msg.addCustomers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CustomersList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CustomersList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CustomersList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CustomersList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.Customer.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Customer Customers = 1;
 * @return {!Array<!proto.billing.Customer>}
 */
proto.billing.CustomersList.prototype.getCustomersList = function() {
  return /** @type{!Array<!proto.billing.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Customer, 1));
};


/**
 * @param {!Array<!proto.billing.Customer>} value
 * @return {!proto.billing.CustomersList} returns this
*/
proto.billing.CustomersList.prototype.setCustomersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Customer}
 */
proto.billing.CustomersList.prototype.addCustomers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.CustomersList} returns this
 */
proto.billing.CustomersList.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
bilngdate: (f = msg.getBilngdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Key}
 */
proto.billing.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Key;
  return proto.billing.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Key}
 */
proto.billing.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilngdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBilngdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * required string Key = 1;
 * @return {string}
 */
proto.billing.Key.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Key} returns this
 */
proto.billing.Key.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Key} returns this
 */
proto.billing.Key.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Key.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required google.protobuf.Timestamp BilngDate = 2;
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.billing.Key.prototype.getBilngdate = function() {
  return /** @type{!proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2, 1));
};


/**
 * @param {!proto.google.protobuf.Timestamp} value
 * @return {!proto.billing.Key} returns this
*/
proto.billing.Key.prototype.setBilngdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Key} returns this
 */
proto.billing.Key.prototype.clearBilngdate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Key.prototype.hasBilngdate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.LookUp.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.LookUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.LookUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LookUp.toObject = function(includeInstance, msg) {
  var f, obj = {
code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.LookUp}
 */
proto.billing.LookUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.LookUp;
  return proto.billing.LookUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.LookUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.LookUp}
 */
proto.billing.LookUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.LookUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.LookUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.LookUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LookUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required string Code = 1;
 * @return {string}
 */
proto.billing.LookUp.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.LookUp} returns this
 */
proto.billing.LookUp.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LookUp} returns this
 */
proto.billing.LookUp.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LookUp.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Description = 2;
 * @return {string}
 */
proto.billing.LookUp.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.LookUp} returns this
 */
proto.billing.LookUp.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LookUp} returns this
 */
proto.billing.LookUp.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LookUp.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.LookUpsResponce.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.LookUpsResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.LookUpsResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.LookUpsResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LookUpsResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
lookupsList: jspb.Message.toObjectList(msg.getLookupsList(),
    proto.billing.LookUp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.LookUpsResponce}
 */
proto.billing.LookUpsResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.LookUpsResponce;
  return proto.billing.LookUpsResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.LookUpsResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.LookUpsResponce}
 */
proto.billing.LookUpsResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.LookUp;
      reader.readMessage(value,proto.billing.LookUp.deserializeBinaryFromReader);
      msg.addLookups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.LookUpsResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.LookUpsResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.LookUpsResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LookUpsResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLookupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.LookUp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LookUp LookUps = 1;
 * @return {!Array<!proto.billing.LookUp>}
 */
proto.billing.LookUpsResponce.prototype.getLookupsList = function() {
  return /** @type{!Array<!proto.billing.LookUp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.LookUp, 1));
};


/**
 * @param {!Array<!proto.billing.LookUp>} value
 * @return {!proto.billing.LookUpsResponce} returns this
*/
proto.billing.LookUpsResponce.prototype.setLookupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.LookUp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.LookUp}
 */
proto.billing.LookUpsResponce.prototype.addLookups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.LookUp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.LookUpsResponce} returns this
 */
proto.billing.LookUpsResponce.prototype.clearLookupsList = function() {
  return this.setLookupsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.CtgsResponce.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CtgsResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CtgsResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CtgsResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CtgsResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
ctgsList: jspb.Message.toObjectList(msg.getCtgsList(),
    proto.billing.Ctg.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CtgsResponce}
 */
proto.billing.CtgsResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CtgsResponce;
  return proto.billing.CtgsResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CtgsResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CtgsResponce}
 */
proto.billing.CtgsResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Ctg;
      reader.readMessage(value,proto.billing.Ctg.deserializeBinaryFromReader);
      msg.addCtgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CtgsResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CtgsResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CtgsResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CtgsResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.Ctg.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Ctg Ctgs = 1;
 * @return {!Array<!proto.billing.Ctg>}
 */
proto.billing.CtgsResponce.prototype.getCtgsList = function() {
  return /** @type{!Array<!proto.billing.Ctg>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Ctg, 1));
};


/**
 * @param {!Array<!proto.billing.Ctg>} value
 * @return {!proto.billing.CtgsResponce} returns this
*/
proto.billing.CtgsResponce.prototype.setCtgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.Ctg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Ctg}
 */
proto.billing.CtgsResponce.prototype.addCtgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.Ctg, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.CtgsResponce} returns this
 */
proto.billing.CtgsResponce.prototype.clearCtgsList = function() {
  return this.setCtgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Entity.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Entity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Entity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Entity.toObject = function(includeInstance, msg) {
  var f, obj = {
entitytype: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Entity}
 */
proto.billing.Entity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Entity;
  return proto.billing.Entity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Entity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Entity}
 */
proto.billing.Entity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.billing.ENTITY_TYPE} */ (reader.readEnum());
      msg.setEntitytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Entity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Entity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Entity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Entity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * required ENTITY_TYPE EntityType = 1;
 * @return {!proto.billing.ENTITY_TYPE}
 */
proto.billing.Entity.prototype.getEntitytype = function() {
  return /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.billing.ENTITY_TYPE} value
 * @return {!proto.billing.Entity} returns this
 */
proto.billing.Entity.prototype.setEntitytype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Entity} returns this
 */
proto.billing.Entity.prototype.clearEntitytype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Entity.prototype.hasEntitytype = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.GetBillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.GetBillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.GetBillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GetBillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
paymentno: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
bilngdatefrom: (f = msg.getBilngdatefrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
bilngdateto: (f = msg.getBilngdateto()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
formno: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
fromCancelBill: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
bpmFormNo: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
bpmApplicationTypeId: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
bpmCompanyId: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
withBpm: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
withFake: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
newBiller: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.GetBillRequest}
 */
proto.billing.GetBillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.GetBillRequest;
  return proto.billing.GetBillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.GetBillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.GetBillRequest}
 */
proto.billing.GetBillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentno(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilngdatefrom(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBilngdateto(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormno(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromCancelBill(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBpmFormNo(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBpmApplicationTypeId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBpmCompanyId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithBpm(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithFake(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNewBiller(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.GetBillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.GetBillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.GetBillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GetBillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBilngdatefrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBilngdateto();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * required string Custkey = 1;
 * @return {string}
 */
proto.billing.GetBillRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string PaymentNo = 2;
 * @return {string}
 */
proto.billing.GetBillRequest.prototype.getPaymentno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setPaymentno = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearPaymentno = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasPaymentno = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp BilngDateFrom = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.GetBillRequest.prototype.getBilngdatefrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.GetBillRequest} returns this
*/
proto.billing.GetBillRequest.prototype.setBilngdatefrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearBilngdatefrom = function() {
  return this.setBilngdatefrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasBilngdatefrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp BilngDateTo = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.GetBillRequest.prototype.getBilngdateto = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.GetBillRequest} returns this
*/
proto.billing.GetBillRequest.prototype.setBilngdateto = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearBilngdateto = function() {
  return this.setBilngdateto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasBilngdateto = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string FormNo = 5;
 * @return {string}
 */
proto.billing.GetBillRequest.prototype.getFormno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setFormno = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearFormno = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasFormno = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool From_Cancel_Bill = 6;
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.getFromCancelBill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setFromCancelBill = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearFromCancelBill = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasFromCancelBill = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 BPM_FORM_NO = 7;
 * @return {number}
 */
proto.billing.GetBillRequest.prototype.getBpmFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setBpmFormNo = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearBpmFormNo = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasBpmFormNo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 BPM_APPLICATION_TYPE_ID = 8;
 * @return {number}
 */
proto.billing.GetBillRequest.prototype.getBpmApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setBpmApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearBpmApplicationTypeId = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasBpmApplicationTypeId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 BPM_COMPANY_ID = 9;
 * @return {number}
 */
proto.billing.GetBillRequest.prototype.getBpmCompanyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setBpmCompanyId = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearBpmCompanyId = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasBpmCompanyId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool WITH_BPM = 10;
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.getWithBpm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setWithBpm = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearWithBpm = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasWithBpm = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool WITH_FAKE = 11;
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.getWithFake = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setWithFake = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearWithFake = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasWithFake = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool NEW_BILLER = 12;
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.getNewBiller = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.setNewBiller = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.GetBillRequest} returns this
 */
proto.billing.GetBillRequest.prototype.clearNewBiller = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.GetBillRequest.prototype.hasNewBiller = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
username: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
password: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.LoginRequest}
 */
proto.billing.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.LoginRequest;
  return proto.billing.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.LoginRequest}
 */
proto.billing.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required string Username = 1;
 * @return {string}
 */
proto.billing.LoginRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.LoginRequest} returns this
 */
proto.billing.LoginRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LoginRequest} returns this
 */
proto.billing.LoginRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LoginRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Password = 2;
 * @return {string}
 */
proto.billing.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.LoginRequest} returns this
 */
proto.billing.LoginRequest.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LoginRequest} returns this
 */
proto.billing.LoginRequest.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LoginRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.LoginResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.LoginResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.LoginResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LoginResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
succssed: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.LoginResponce}
 */
proto.billing.LoginResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.LoginResponce;
  return proto.billing.LoginResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.LoginResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.LoginResponce}
 */
proto.billing.LoginResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccssed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.LoginResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.LoginResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.LoginResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.LoginResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string Token = 1;
 * @return {string}
 */
proto.billing.LoginResponce.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.LoginResponce} returns this
 */
proto.billing.LoginResponce.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LoginResponce} returns this
 */
proto.billing.LoginResponce.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LoginResponce.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool Succssed = 2;
 * @return {boolean}
 */
proto.billing.LoginResponce.prototype.getSuccssed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.LoginResponce} returns this
 */
proto.billing.LoginResponce.prototype.setSuccssed = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.LoginResponce} returns this
 */
proto.billing.LoginResponce.prototype.clearSuccssed = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.LoginResponce.prototype.hasSuccssed = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.PostMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.PostMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.PostMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.PostMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
data: (f = msg.getData()) && proto.billing.BillResponce.toObject(includeInstance, f),
iscancelledrequest: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
cancelledrequestformno: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
withBpm: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
withFake: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.PostMessage}
 */
proto.billing.PostMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.PostMessage;
  return proto.billing.PostMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.PostMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.PostMessage}
 */
proto.billing.PostMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.BillResponce;
      reader.readMessage(value,proto.billing.BillResponce.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscancelledrequest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelledrequestformno(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithBpm(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithFake(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.PostMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.PostMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.PostMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.PostMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.BillResponce.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * required BillResponce Data = 1;
 * @return {!proto.billing.BillResponce}
 */
proto.billing.PostMessage.prototype.getData = function() {
  return /** @type{!proto.billing.BillResponce} */ (
    jspb.Message.getWrapperField(this, proto.billing.BillResponce, 1, 1));
};


/**
 * @param {!proto.billing.BillResponce} value
 * @return {!proto.billing.PostMessage} returns this
*/
proto.billing.PostMessage.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.clearData = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool IsCancelledRequest = 2;
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.getIscancelledrequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.setIscancelledrequest = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.clearIscancelledrequest = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.hasIscancelledrequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 CancelledRequestFormNo = 3;
 * @return {number}
 */
proto.billing.PostMessage.prototype.getCancelledrequestformno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.setCancelledrequestformno = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.clearCancelledrequestformno = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.hasCancelledrequestformno = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool WITH_BPM = 4;
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.getWithBpm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.setWithBpm = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.clearWithBpm = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.hasWithBpm = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool WITH_FAKE = 5;
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.getWithFake = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.setWithFake = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.PostMessage} returns this
 */
proto.billing.PostMessage.prototype.clearWithFake = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.PostMessage.prototype.hasWithFake = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.SERVICE_TYPE_DATA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.SERVICE_TYPE_DATA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SERVICE_TYPE_DATA.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.SERVICE_TYPE_DATA}
 */
proto.billing.SERVICE_TYPE_DATA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.SERVICE_TYPE_DATA;
  return proto.billing.SERVICE_TYPE_DATA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.SERVICE_TYPE_DATA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.SERVICE_TYPE_DATA}
 */
proto.billing.SERVICE_TYPE_DATA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.SERVICE_TYPE_DATA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.SERVICE_TYPE_DATA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.SERVICE_TYPE_DATA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string NAME = 2;
 * @return {string}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DESCRIPTION = 3;
 * @return {string}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.SERVICE_TYPE_DATA} returns this
 */
proto.billing.SERVICE_TYPE_DATA.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.SERVICE_TYPE_DATA.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.GET_SERVICETYPES.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.GET_SERVICETYPES.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.GET_SERVICETYPES.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.GET_SERVICETYPES} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_SERVICETYPES.toObject = function(includeInstance, msg) {
  var f, obj = {
serviceTypeDataList: jspb.Message.toObjectList(msg.getServiceTypeDataList(),
    proto.billing.SERVICE_TYPE_DATA.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.GET_SERVICETYPES}
 */
proto.billing.GET_SERVICETYPES.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.GET_SERVICETYPES;
  return proto.billing.GET_SERVICETYPES.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.GET_SERVICETYPES} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.GET_SERVICETYPES}
 */
proto.billing.GET_SERVICETYPES.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.SERVICE_TYPE_DATA;
      reader.readMessage(value,proto.billing.SERVICE_TYPE_DATA.deserializeBinaryFromReader);
      msg.addServiceTypeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.GET_SERVICETYPES.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.GET_SERVICETYPES.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.GET_SERVICETYPES} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_SERVICETYPES.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceTypeDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.SERVICE_TYPE_DATA.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SERVICE_TYPE_DATA SERVICE_TYPE_DATA = 1;
 * @return {!Array<!proto.billing.SERVICE_TYPE_DATA>}
 */
proto.billing.GET_SERVICETYPES.prototype.getServiceTypeDataList = function() {
  return /** @type{!Array<!proto.billing.SERVICE_TYPE_DATA>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.SERVICE_TYPE_DATA, 1));
};


/**
 * @param {!Array<!proto.billing.SERVICE_TYPE_DATA>} value
 * @return {!proto.billing.GET_SERVICETYPES} returns this
*/
proto.billing.GET_SERVICETYPES.prototype.setServiceTypeDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.SERVICE_TYPE_DATA=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.SERVICE_TYPE_DATA}
 */
proto.billing.GET_SERVICETYPES.prototype.addServiceTypeData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.SERVICE_TYPE_DATA, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.GET_SERVICETYPES} returns this
 */
proto.billing.GET_SERVICETYPES.prototype.clearServiceTypeDataList = function() {
  return this.setServiceTypeDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CHARGE_TYPE_DATA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CHARGE_TYPE_DATA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CHARGE_TYPE_DATA.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CHARGE_TYPE_DATA}
 */
proto.billing.CHARGE_TYPE_DATA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CHARGE_TYPE_DATA;
  return proto.billing.CHARGE_TYPE_DATA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CHARGE_TYPE_DATA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CHARGE_TYPE_DATA}
 */
proto.billing.CHARGE_TYPE_DATA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CHARGE_TYPE_DATA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CHARGE_TYPE_DATA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CHARGE_TYPE_DATA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string NAME = 2;
 * @return {string}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DESCRIPTION = 3;
 * @return {string}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_TYPE_DATA} returns this
 */
proto.billing.CHARGE_TYPE_DATA.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_TYPE_DATA.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.GET_CHARGETYPES.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.GET_CHARGETYPES.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.GET_CHARGETYPES.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.GET_CHARGETYPES} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_CHARGETYPES.toObject = function(includeInstance, msg) {
  var f, obj = {
chargeTypeDataList: jspb.Message.toObjectList(msg.getChargeTypeDataList(),
    proto.billing.CHARGE_TYPE_DATA.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.GET_CHARGETYPES}
 */
proto.billing.GET_CHARGETYPES.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.GET_CHARGETYPES;
  return proto.billing.GET_CHARGETYPES.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.GET_CHARGETYPES} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.GET_CHARGETYPES}
 */
proto.billing.GET_CHARGETYPES.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.CHARGE_TYPE_DATA;
      reader.readMessage(value,proto.billing.CHARGE_TYPE_DATA.deserializeBinaryFromReader);
      msg.addChargeTypeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.GET_CHARGETYPES.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.GET_CHARGETYPES.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.GET_CHARGETYPES} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_CHARGETYPES.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeTypeDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.CHARGE_TYPE_DATA.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CHARGE_TYPE_DATA CHARGE_TYPE_DATA = 1;
 * @return {!Array<!proto.billing.CHARGE_TYPE_DATA>}
 */
proto.billing.GET_CHARGETYPES.prototype.getChargeTypeDataList = function() {
  return /** @type{!Array<!proto.billing.CHARGE_TYPE_DATA>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.CHARGE_TYPE_DATA, 1));
};


/**
 * @param {!Array<!proto.billing.CHARGE_TYPE_DATA>} value
 * @return {!proto.billing.GET_CHARGETYPES} returns this
*/
proto.billing.GET_CHARGETYPES.prototype.setChargeTypeDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.CHARGE_TYPE_DATA=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.CHARGE_TYPE_DATA}
 */
proto.billing.GET_CHARGETYPES.prototype.addChargeTypeData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.CHARGE_TYPE_DATA, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.GET_CHARGETYPES} returns this
 */
proto.billing.GET_CHARGETYPES.prototype.clearChargeTypeDataList = function() {
  return this.setChargeTypeDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Entity_lockup.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Entity_lockup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Entity_lockup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Entity_lockup.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Entity_lockup}
 */
proto.billing.Entity_lockup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Entity_lockup;
  return proto.billing.Entity_lockup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Entity_lockup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Entity_lockup}
 */
proto.billing.Entity_lockup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Entity_lockup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Entity_lockup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Entity_lockup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Entity_lockup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.billing.Entity_lockup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Entity_lockup} returns this
 */
proto.billing.Entity_lockup.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Entity_lockup} returns this
 */
proto.billing.Entity_lockup.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Entity_lockup.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string NAME = 2;
 * @return {string}
 */
proto.billing.Entity_lockup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Entity_lockup} returns this
 */
proto.billing.Entity_lockup.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Entity_lockup} returns this
 */
proto.billing.Entity_lockup.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Entity_lockup.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ENTITY_TYPE_DATA.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ENTITY_TYPE_DATA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ENTITY_TYPE_DATA} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ENTITY_TYPE_DATA.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
categoryType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
entityLockupList: jspb.Message.toObjectList(msg.getEntityLockupList(),
    proto.billing.Entity_lockup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ENTITY_TYPE_DATA}
 */
proto.billing.ENTITY_TYPE_DATA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ENTITY_TYPE_DATA;
  return proto.billing.ENTITY_TYPE_DATA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ENTITY_TYPE_DATA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ENTITY_TYPE_DATA}
 */
proto.billing.ENTITY_TYPE_DATA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.billing.ENTITY_CATEGORY_TYPE} */ (reader.readEnum());
      msg.setCategoryType(value);
      break;
    case 5:
      var value = new proto.billing.Entity_lockup;
      reader.readMessage(value,proto.billing.Entity_lockup.deserializeBinaryFromReader);
      msg.addEntityLockup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ENTITY_TYPE_DATA.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ENTITY_TYPE_DATA} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ENTITY_TYPE_DATA.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.billing.ENTITY_CATEGORY_TYPE} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEntityLockupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.billing.Entity_lockup.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string NAME = 2;
 * @return {string}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DESCRIPTION = 3;
 * @return {string}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ENTITY_CATEGORY_TYPE category_type = 4;
 * @return {!proto.billing.ENTITY_CATEGORY_TYPE}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.getCategoryType = function() {
  return /** @type {!proto.billing.ENTITY_CATEGORY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.billing.ENTITY_CATEGORY_TYPE} value
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.setCategoryType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.clearCategoryType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.hasCategoryType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Entity_lockup entity_lockup = 5;
 * @return {!Array<!proto.billing.Entity_lockup>}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.getEntityLockupList = function() {
  return /** @type{!Array<!proto.billing.Entity_lockup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Entity_lockup, 5));
};


/**
 * @param {!Array<!proto.billing.Entity_lockup>} value
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
*/
proto.billing.ENTITY_TYPE_DATA.prototype.setEntityLockupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.billing.Entity_lockup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Entity_lockup}
 */
proto.billing.ENTITY_TYPE_DATA.prototype.addEntityLockup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.billing.Entity_lockup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ENTITY_TYPE_DATA} returns this
 */
proto.billing.ENTITY_TYPE_DATA.prototype.clearEntityLockupList = function() {
  return this.setEntityLockupList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.GET_ENTITYTYPES.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.GET_ENTITYTYPES.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.GET_ENTITYTYPES.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.GET_ENTITYTYPES} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_ENTITYTYPES.toObject = function(includeInstance, msg) {
  var f, obj = {
entityTypeDataList: jspb.Message.toObjectList(msg.getEntityTypeDataList(),
    proto.billing.ENTITY_TYPE_DATA.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.GET_ENTITYTYPES}
 */
proto.billing.GET_ENTITYTYPES.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.GET_ENTITYTYPES;
  return proto.billing.GET_ENTITYTYPES.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.GET_ENTITYTYPES} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.GET_ENTITYTYPES}
 */
proto.billing.GET_ENTITYTYPES.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.ENTITY_TYPE_DATA;
      reader.readMessage(value,proto.billing.ENTITY_TYPE_DATA.deserializeBinaryFromReader);
      msg.addEntityTypeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.GET_ENTITYTYPES.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.GET_ENTITYTYPES.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.GET_ENTITYTYPES} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_ENTITYTYPES.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityTypeDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.ENTITY_TYPE_DATA.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ENTITY_TYPE_DATA ENTITY_TYPE_DATA = 1;
 * @return {!Array<!proto.billing.ENTITY_TYPE_DATA>}
 */
proto.billing.GET_ENTITYTYPES.prototype.getEntityTypeDataList = function() {
  return /** @type{!Array<!proto.billing.ENTITY_TYPE_DATA>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.ENTITY_TYPE_DATA, 1));
};


/**
 * @param {!Array<!proto.billing.ENTITY_TYPE_DATA>} value
 * @return {!proto.billing.GET_ENTITYTYPES} returns this
*/
proto.billing.GET_ENTITYTYPES.prototype.setEntityTypeDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.ENTITY_TYPE_DATA=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.ENTITY_TYPE_DATA}
 */
proto.billing.GET_ENTITYTYPES.prototype.addEntityTypeData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.ENTITY_TYPE_DATA, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.GET_ENTITYTYPES} returns this
 */
proto.billing.GET_ENTITYTYPES.prototype.clearEntityTypeDataList = function() {
  return this.setEntityTypeDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CHARGE_REGULAR_CALC_STRATEGY.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CHARGE_REGULAR_CALC_STRATEGY;
  return proto.billing.CHARGE_REGULAR_CALC_STRATEGY.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CHARGE_REGULAR_CALC_STRATEGY.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ID = 1;
 * @return {number}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string NAME = 2;
 * @return {string}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DESCRIPTION = 3;
 * @return {string}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY} returns this
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CHARGE_REGULAR_CALC_STRATEGY.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.GET_CHARGEREGULARCALCSTRATEGY.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.toObject = function(includeInstance, msg) {
  var f, obj = {
chargeRegularCalcStrategyList: jspb.Message.toObjectList(msg.getChargeRegularCalcStrategyList(),
    proto.billing.CHARGE_REGULAR_CALC_STRATEGY.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.GET_CHARGEREGULARCALCSTRATEGY;
  return proto.billing.GET_CHARGEREGULARCALCSTRATEGY.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.CHARGE_REGULAR_CALC_STRATEGY;
      reader.readMessage(value,proto.billing.CHARGE_REGULAR_CALC_STRATEGY.deserializeBinaryFromReader);
      msg.addChargeRegularCalcStrategy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.GET_CHARGEREGULARCALCSTRATEGY.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeRegularCalcStrategyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.CHARGE_REGULAR_CALC_STRATEGY.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CHARGE_REGULAR_CALC_STRATEGY CHARGE_REGULAR_CALC_STRATEGY = 1;
 * @return {!Array<!proto.billing.CHARGE_REGULAR_CALC_STRATEGY>}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.getChargeRegularCalcStrategyList = function() {
  return /** @type{!Array<!proto.billing.CHARGE_REGULAR_CALC_STRATEGY>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.CHARGE_REGULAR_CALC_STRATEGY, 1));
};


/**
 * @param {!Array<!proto.billing.CHARGE_REGULAR_CALC_STRATEGY>} value
 * @return {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY} returns this
*/
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.setChargeRegularCalcStrategyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.CHARGE_REGULAR_CALC_STRATEGY}
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.addChargeRegularCalcStrategy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.CHARGE_REGULAR_CALC_STRATEGY, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.GET_CHARGEREGULARCALCSTRATEGY} returns this
 */
proto.billing.GET_CHARGEREGULARCALCSTRATEGY.prototype.clearChargeRegularCalcStrategyList = function() {
  return this.setChargeRegularCalcStrategyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.Tariffs.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.Tariffs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.Tariffs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Tariffs.toObject = function(includeInstance, msg) {
  var f, obj = {
tarrifId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
tariffCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
effectDate: (f = msg.getEffectDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
description: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
consumpPercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.Tariffs}
 */
proto.billing.Tariffs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.Tariffs;
  return proto.billing.Tariffs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.Tariffs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.Tariffs}
 */
proto.billing.Tariffs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTarrifId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffCode(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConsumpPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.Tariffs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.Tariffs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.Tariffs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.Tariffs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEffectDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int64 TARRIF_ID = 1;
 * @return {number}
 */
proto.billing.Tariffs.prototype.getTarrifId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.setTarrifId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.clearTarrifId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariffs.prototype.hasTarrifId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TARIFF_CODE = 2;
 * @return {string}
 */
proto.billing.Tariffs.prototype.getTariffCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.setTariffCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.clearTariffCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariffs.prototype.hasTariffCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp EFFECT_DATE = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.Tariffs.prototype.getEffectDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.Tariffs} returns this
*/
proto.billing.Tariffs.prototype.setEffectDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.clearEffectDate = function() {
  return this.setEffectDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariffs.prototype.hasEffectDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string DESCRIPTION = 4;
 * @return {string}
 */
proto.billing.Tariffs.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariffs.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double CONSUMP_PERCENTAGE = 5;
 * @return {number}
 */
proto.billing.Tariffs.prototype.getConsumpPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.setConsumpPercentage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.Tariffs} returns this
 */
proto.billing.Tariffs.prototype.clearConsumpPercentage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.Tariffs.prototype.hasConsumpPercentage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrTariffs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrTariffs.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrTariffs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrTariffs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffs.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffsList: jspb.Message.toObjectList(msg.getTariffsList(),
    proto.billing.Tariffs.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrTariffs}
 */
proto.billing.ArrTariffs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrTariffs;
  return proto.billing.ArrTariffs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrTariffs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrTariffs}
 */
proto.billing.ArrTariffs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Tariffs;
      reader.readMessage(value,proto.billing.Tariffs.deserializeBinaryFromReader);
      msg.addTariffs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrTariffs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrTariffs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrTariffs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.Tariffs.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tariffs Tariffs = 1;
 * @return {!Array<!proto.billing.Tariffs>}
 */
proto.billing.ArrTariffs.prototype.getTariffsList = function() {
  return /** @type{!Array<!proto.billing.Tariffs>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.Tariffs, 1));
};


/**
 * @param {!Array<!proto.billing.Tariffs>} value
 * @return {!proto.billing.ArrTariffs} returns this
*/
proto.billing.ArrTariffs.prototype.setTariffsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.Tariffs=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.Tariffs}
 */
proto.billing.ArrTariffs.prototype.addTariffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.Tariffs, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrTariffs} returns this
 */
proto.billing.ArrTariffs.prototype.clearTariffsList = function() {
  return this.setTariffsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffBands.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffBands.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffBands} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffBands.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
effectDate: (f = msg.getEffectDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
rangeFrom: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
rangeTo: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
constant: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
charge: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffBands}
 */
proto.billing.TariffBands.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffBands;
  return proto.billing.TariffBands.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffBands} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffBands}
 */
proto.billing.TariffBands.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangeFrom(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangeTo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConstant(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCharge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffBands.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffBands.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffBands} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffBands.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEffectDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string TARIFF_ID = 1;
 * @return {string}
 */
proto.billing.TariffBands.prototype.getTariffId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.setTariffId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearTariffId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasTariffId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp EFFECT_DATE = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.billing.TariffBands.prototype.getEffectDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.billing.TariffBands} returns this
*/
proto.billing.TariffBands.prototype.setEffectDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearEffectDate = function() {
  return this.setEffectDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasEffectDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double RANGE_FROM = 3;
 * @return {number}
 */
proto.billing.TariffBands.prototype.getRangeFrom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.setRangeFrom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearRangeFrom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasRangeFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double RANGE_TO = 4;
 * @return {number}
 */
proto.billing.TariffBands.prototype.getRangeTo = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.setRangeTo = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearRangeTo = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasRangeTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double CONSTANT = 5;
 * @return {number}
 */
proto.billing.TariffBands.prototype.getConstant = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.setConstant = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearConstant = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasConstant = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double CHARGE = 6;
 * @return {number}
 */
proto.billing.TariffBands.prototype.getCharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.setCharge = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffBands} returns this
 */
proto.billing.TariffBands.prototype.clearCharge = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffBands.prototype.hasCharge = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrTariffBands.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrTariffBands.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrTariffBands.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrTariffBands} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffBands.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffbandsList: jspb.Message.toObjectList(msg.getTariffbandsList(),
    proto.billing.TariffBands.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrTariffBands}
 */
proto.billing.ArrTariffBands.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrTariffBands;
  return proto.billing.ArrTariffBands.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrTariffBands} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrTariffBands}
 */
proto.billing.ArrTariffBands.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.TariffBands;
      reader.readMessage(value,proto.billing.TariffBands.deserializeBinaryFromReader);
      msg.addTariffbands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrTariffBands.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrTariffBands.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrTariffBands} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffBands.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffbandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.TariffBands.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TariffBands TariffBands = 1;
 * @return {!Array<!proto.billing.TariffBands>}
 */
proto.billing.ArrTariffBands.prototype.getTariffbandsList = function() {
  return /** @type{!Array<!proto.billing.TariffBands>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffBands, 1));
};


/**
 * @param {!Array<!proto.billing.TariffBands>} value
 * @return {!proto.billing.ArrTariffBands} returns this
*/
proto.billing.ArrTariffBands.prototype.setTariffbandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.TariffBands=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffBands}
 */
proto.billing.ArrTariffBands.prototype.addTariffbands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.TariffBands, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrTariffBands} returns this
 */
proto.billing.ArrTariffBands.prototype.clearTariffbandsList = function() {
  return this.setTariffbandsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffExtraFees.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffExtraFees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffExtraFees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffExtraFees.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
transCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
amountPerMeter: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
amountPerPercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
fixedAmount: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffExtraFees}
 */
proto.billing.TariffExtraFees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffExtraFees;
  return proto.billing.TariffExtraFees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffExtraFees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffExtraFees}
 */
proto.billing.TariffExtraFees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTariffId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountPerMeter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountPerPercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFixedAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffExtraFees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffExtraFees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffExtraFees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffExtraFees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional int64 TARIFF_ID = 1;
 * @return {number}
 */
proto.billing.TariffExtraFees.prototype.getTariffId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setTariffId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearTariffId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasTariffId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TRANS_CODE = 2;
 * @return {string}
 */
proto.billing.TariffExtraFees.prototype.getTransCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setTransCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearTransCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasTransCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DESCRIPTION = 3;
 * @return {string}
 */
proto.billing.TariffExtraFees.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double AMOUNT_PER_METER = 4;
 * @return {number}
 */
proto.billing.TariffExtraFees.prototype.getAmountPerMeter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setAmountPerMeter = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearAmountPerMeter = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasAmountPerMeter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double AMOUNT_PER_PERCENTAGE = 5;
 * @return {number}
 */
proto.billing.TariffExtraFees.prototype.getAmountPerPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setAmountPerPercentage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearAmountPerPercentage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasAmountPerPercentage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double FIXED_AMOUNT = 6;
 * @return {number}
 */
proto.billing.TariffExtraFees.prototype.getFixedAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.setFixedAmount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffExtraFees} returns this
 */
proto.billing.TariffExtraFees.prototype.clearFixedAmount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffExtraFees.prototype.hasFixedAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrTariffExtraFees.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrTariffExtraFees.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrTariffExtraFees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrTariffExtraFees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffExtraFees.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffextrafeesList: jspb.Message.toObjectList(msg.getTariffextrafeesList(),
    proto.billing.TariffExtraFees.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrTariffExtraFees}
 */
proto.billing.ArrTariffExtraFees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrTariffExtraFees;
  return proto.billing.ArrTariffExtraFees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrTariffExtraFees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrTariffExtraFees}
 */
proto.billing.ArrTariffExtraFees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.TariffExtraFees;
      reader.readMessage(value,proto.billing.TariffExtraFees.deserializeBinaryFromReader);
      msg.addTariffextrafees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrTariffExtraFees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrTariffExtraFees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrTariffExtraFees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrTariffExtraFees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffextrafeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.TariffExtraFees.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TariffExtraFees TariffExtraFees = 1;
 * @return {!Array<!proto.billing.TariffExtraFees>}
 */
proto.billing.ArrTariffExtraFees.prototype.getTariffextrafeesList = function() {
  return /** @type{!Array<!proto.billing.TariffExtraFees>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffExtraFees, 1));
};


/**
 * @param {!Array<!proto.billing.TariffExtraFees>} value
 * @return {!proto.billing.ArrTariffExtraFees} returns this
*/
proto.billing.ArrTariffExtraFees.prototype.setTariffextrafeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.TariffExtraFees=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffExtraFees}
 */
proto.billing.ArrTariffExtraFees.prototype.addTariffextrafees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.TariffExtraFees, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrTariffExtraFees} returns this
 */
proto.billing.ArrTariffExtraFees.prototype.clearTariffextrafeesList = function() {
  return this.setTariffextrafeesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.TariffsData.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffsData.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffsData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffsData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffsData.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffs: (f = msg.getTariffs()) && proto.billing.Tariffs.toObject(includeInstance, f),
tariffbandsList: jspb.Message.toObjectList(msg.getTariffbandsList(),
    proto.billing.TariffBands.toObject, includeInstance),
tariffextrafeesList: jspb.Message.toObjectList(msg.getTariffextrafeesList(),
    proto.billing.TariffExtraFees.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffsData}
 */
proto.billing.TariffsData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffsData;
  return proto.billing.TariffsData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffsData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffsData}
 */
proto.billing.TariffsData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.Tariffs;
      reader.readMessage(value,proto.billing.Tariffs.deserializeBinaryFromReader);
      msg.setTariffs(value);
      break;
    case 2:
      var value = new proto.billing.TariffBands;
      reader.readMessage(value,proto.billing.TariffBands.deserializeBinaryFromReader);
      msg.addTariffbands(value);
      break;
    case 3:
      var value = new proto.billing.TariffExtraFees;
      reader.readMessage(value,proto.billing.TariffExtraFees.deserializeBinaryFromReader);
      msg.addTariffextrafees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffsData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffsData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffsData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffsData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.Tariffs.serializeBinaryToWriter
    );
  }
  f = message.getTariffbandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.billing.TariffBands.serializeBinaryToWriter
    );
  }
  f = message.getTariffextrafeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.billing.TariffExtraFees.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tariffs Tariffs = 1;
 * @return {?proto.billing.Tariffs}
 */
proto.billing.TariffsData.prototype.getTariffs = function() {
  return /** @type{?proto.billing.Tariffs} */ (
    jspb.Message.getWrapperField(this, proto.billing.Tariffs, 1));
};


/**
 * @param {?proto.billing.Tariffs|undefined} value
 * @return {!proto.billing.TariffsData} returns this
*/
proto.billing.TariffsData.prototype.setTariffs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.TariffsData} returns this
 */
proto.billing.TariffsData.prototype.clearTariffs = function() {
  return this.setTariffs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffsData.prototype.hasTariffs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TariffBands TariffBands = 2;
 * @return {!Array<!proto.billing.TariffBands>}
 */
proto.billing.TariffsData.prototype.getTariffbandsList = function() {
  return /** @type{!Array<!proto.billing.TariffBands>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffBands, 2));
};


/**
 * @param {!Array<!proto.billing.TariffBands>} value
 * @return {!proto.billing.TariffsData} returns this
*/
proto.billing.TariffsData.prototype.setTariffbandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.billing.TariffBands=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffBands}
 */
proto.billing.TariffsData.prototype.addTariffbands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.billing.TariffBands, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.TariffsData} returns this
 */
proto.billing.TariffsData.prototype.clearTariffbandsList = function() {
  return this.setTariffbandsList([]);
};


/**
 * repeated TariffExtraFees TariffExtraFees = 3;
 * @return {!Array<!proto.billing.TariffExtraFees>}
 */
proto.billing.TariffsData.prototype.getTariffextrafeesList = function() {
  return /** @type{!Array<!proto.billing.TariffExtraFees>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffExtraFees, 3));
};


/**
 * @param {!Array<!proto.billing.TariffExtraFees>} value
 * @return {!proto.billing.TariffsData} returns this
*/
proto.billing.TariffsData.prototype.setTariffextrafeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.billing.TariffExtraFees=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffExtraFees}
 */
proto.billing.TariffsData.prototype.addTariffextrafees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.billing.TariffExtraFees, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.TariffsData} returns this
 */
proto.billing.TariffsData.prototype.clearTariffextrafeesList = function() {
  return this.setTariffextrafeesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffCodeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffCodeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffCodeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffCodeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffCodeReq}
 */
proto.billing.TariffCodeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffCodeReq;
  return proto.billing.TariffCodeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffCodeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffCodeReq}
 */
proto.billing.TariffCodeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffCodeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffCodeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffCodeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffCodeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string TARIFF_CODE = 1;
 * @return {string}
 */
proto.billing.TariffCodeReq.prototype.getTariffCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TariffCodeReq} returns this
 */
proto.billing.TariffCodeReq.prototype.setTariffCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffCodeReq} returns this
 */
proto.billing.TariffCodeReq.prototype.clearTariffCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffCodeReq.prototype.hasTariffCode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.TariffsDataRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffsDataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffsDataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffsDataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffsDataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffsdataList: jspb.Message.toObjectList(msg.getTariffsdataList(),
    proto.billing.TariffsData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffsDataRes}
 */
proto.billing.TariffsDataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffsDataRes;
  return proto.billing.TariffsDataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffsDataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffsDataRes}
 */
proto.billing.TariffsDataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.TariffsData;
      reader.readMessage(value,proto.billing.TariffsData.deserializeBinaryFromReader);
      msg.addTariffsdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffsDataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffsDataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffsDataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffsDataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffsdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.TariffsData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TariffsData TariffsData = 1;
 * @return {!Array<!proto.billing.TariffsData>}
 */
proto.billing.TariffsDataRes.prototype.getTariffsdataList = function() {
  return /** @type{!Array<!proto.billing.TariffsData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TariffsData, 1));
};


/**
 * @param {!Array<!proto.billing.TariffsData>} value
 * @return {!proto.billing.TariffsDataRes} returns this
*/
proto.billing.TariffsDataRes.prototype.setTariffsdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.TariffsData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TariffsData}
 */
proto.billing.TariffsDataRes.prototype.addTariffsdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.TariffsData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.TariffsDataRes} returns this
 */
proto.billing.TariffsDataRes.prototype.clearTariffsdataList = function() {
  return this.setTariffsdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TariffIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TariffIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TariffIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TariffIdReq}
 */
proto.billing.TariffIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TariffIdReq;
  return proto.billing.TariffIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TariffIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TariffIdReq}
 */
proto.billing.TariffIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TariffIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TariffIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TariffIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TariffIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string TARIFF_ID = 1;
 * @return {string}
 */
proto.billing.TariffIdReq.prototype.getTariffId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TariffIdReq} returns this
 */
proto.billing.TariffIdReq.prototype.setTariffId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TariffIdReq} returns this
 */
proto.billing.TariffIdReq.prototype.clearTariffId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TariffIdReq.prototype.hasTariffId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrRegularCharges.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrRegularCharges.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrRegularCharges.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrRegularCharges} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularCharges.toObject = function(includeInstance, msg) {
  var f, obj = {
regularchargesList: jspb.Message.toObjectList(msg.getRegularchargesList(),
    proto.billing.RegularCharge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrRegularCharges}
 */
proto.billing.ArrRegularCharges.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrRegularCharges;
  return proto.billing.ArrRegularCharges.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrRegularCharges} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrRegularCharges}
 */
proto.billing.ArrRegularCharges.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.RegularCharge;
      reader.readMessage(value,proto.billing.RegularCharge.deserializeBinaryFromReader);
      msg.addRegularcharges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrRegularCharges.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrRegularCharges.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrRegularCharges} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularCharges.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularchargesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.RegularCharge.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RegularCharge RegularCharges = 1;
 * @return {!Array<!proto.billing.RegularCharge>}
 */
proto.billing.ArrRegularCharges.prototype.getRegularchargesList = function() {
  return /** @type{!Array<!proto.billing.RegularCharge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.RegularCharge, 1));
};


/**
 * @param {!Array<!proto.billing.RegularCharge>} value
 * @return {!proto.billing.ArrRegularCharges} returns this
*/
proto.billing.ArrRegularCharges.prototype.setRegularchargesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.RegularCharge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.RegularCharge}
 */
proto.billing.ArrRegularCharges.prototype.addRegularcharges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.RegularCharge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrRegularCharges} returns this
 */
proto.billing.ArrRegularCharges.prototype.clearRegularchargesList = function() {
  return this.setRegularchargesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularChargeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularChargeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularChargeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
regularcharges: (f = msg.getRegularcharges()) && proto.billing.RegularCharge.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularChargeInfo}
 */
proto.billing.RegularChargeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularChargeInfo;
  return proto.billing.RegularChargeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularChargeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularChargeInfo}
 */
proto.billing.RegularChargeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.RegularCharge;
      reader.readMessage(value,proto.billing.RegularCharge.deserializeBinaryFromReader);
      msg.setRegularcharges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularChargeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularChargeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularChargeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularcharges();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.billing.RegularCharge.serializeBinaryToWriter
    );
  }
};


/**
 * optional RegularCharge RegularCharges = 1;
 * @return {?proto.billing.RegularCharge}
 */
proto.billing.RegularChargeInfo.prototype.getRegularcharges = function() {
  return /** @type{?proto.billing.RegularCharge} */ (
    jspb.Message.getWrapperField(this, proto.billing.RegularCharge, 1));
};


/**
 * @param {?proto.billing.RegularCharge|undefined} value
 * @return {!proto.billing.RegularChargeInfo} returns this
*/
proto.billing.RegularChargeInfo.prototype.setRegularcharges = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.billing.RegularChargeInfo} returns this
 */
proto.billing.RegularChargeInfo.prototype.clearRegularcharges = function() {
  return this.setRegularcharges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularChargeInfo.prototype.hasRegularcharges = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularChargeIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularChargeIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularChargeIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
regularChargeId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularChargeIdReq}
 */
proto.billing.RegularChargeIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularChargeIdReq;
  return proto.billing.RegularChargeIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularChargeIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularChargeIdReq}
 */
proto.billing.RegularChargeIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegularChargeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularChargeIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularChargeIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularChargeIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string REGULAR_CHARGE_ID = 1;
 * @return {string}
 */
proto.billing.RegularChargeIdReq.prototype.getRegularChargeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularChargeIdReq} returns this
 */
proto.billing.RegularChargeIdReq.prototype.setRegularChargeId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularChargeIdReq} returns this
 */
proto.billing.RegularChargeIdReq.prototype.clearRegularChargeId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularChargeIdReq.prototype.hasRegularChargeId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularChargeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularChargeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularChargeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
regularChargeId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularChargeReq}
 */
proto.billing.RegularChargeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularChargeReq;
  return proto.billing.RegularChargeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularChargeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularChargeReq}
 */
proto.billing.RegularChargeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegularChargeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularChargeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularChargeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularChargeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularChargeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string REGULAR_CHARGE_ID = 1;
 * @return {string}
 */
proto.billing.RegularChargeReq.prototype.getRegularChargeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularChargeReq} returns this
 */
proto.billing.RegularChargeReq.prototype.setRegularChargeId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularChargeReq} returns this
 */
proto.billing.RegularChargeReq.prototype.clearRegularChargeId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularChargeReq.prototype.hasRegularChargeId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularRelationEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularRelationEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularRelationEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularRelationEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
regularChargeId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
releationType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
entityType: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularRelationEntity}
 */
proto.billing.RegularRelationEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularRelationEntity;
  return proto.billing.RegularRelationEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularRelationEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularRelationEntity}
 */
proto.billing.RegularRelationEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegularChargeId(value);
      break;
    case 2:
      var value = /** @type {!proto.billing.ReleationType} */ (reader.readEnum());
      msg.setReleationType(value);
      break;
    case 3:
      var value = /** @type {!proto.billing.ENTITY_TYPE} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularRelationEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularRelationEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularRelationEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularRelationEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.billing.ReleationType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string REGULAR_CHARGE_ID = 1;
 * @return {string}
 */
proto.billing.RegularRelationEntity.prototype.getRegularChargeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.setRegularChargeId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.clearRegularChargeId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationEntity.prototype.hasRegularChargeId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReleationType RELEATION_TYPE = 2;
 * @return {!proto.billing.ReleationType}
 */
proto.billing.RegularRelationEntity.prototype.getReleationType = function() {
  return /** @type {!proto.billing.ReleationType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.billing.ReleationType} value
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.setReleationType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.clearReleationType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationEntity.prototype.hasReleationType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ENTITY_TYPE ENTITY_TYPE = 3;
 * @return {!proto.billing.ENTITY_TYPE}
 */
proto.billing.RegularRelationEntity.prototype.getEntityType = function() {
  return /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.billing.ENTITY_TYPE} value
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.setEntityType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationEntity} returns this
 */
proto.billing.RegularRelationEntity.prototype.clearEntityType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationEntity.prototype.hasEntityType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrRegularRelationEntity.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrRegularRelationEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrRegularRelationEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrRegularRelationEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularRelationEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
regularrelationentityList: jspb.Message.toObjectList(msg.getRegularrelationentityList(),
    proto.billing.RegularRelationEntity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrRegularRelationEntity}
 */
proto.billing.ArrRegularRelationEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrRegularRelationEntity;
  return proto.billing.ArrRegularRelationEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrRegularRelationEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrRegularRelationEntity}
 */
proto.billing.ArrRegularRelationEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.RegularRelationEntity;
      reader.readMessage(value,proto.billing.RegularRelationEntity.deserializeBinaryFromReader);
      msg.addRegularrelationentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrRegularRelationEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrRegularRelationEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrRegularRelationEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularRelationEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularrelationentityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.RegularRelationEntity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RegularRelationEntity RegularRelationEntity = 1;
 * @return {!Array<!proto.billing.RegularRelationEntity>}
 */
proto.billing.ArrRegularRelationEntity.prototype.getRegularrelationentityList = function() {
  return /** @type{!Array<!proto.billing.RegularRelationEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.RegularRelationEntity, 1));
};


/**
 * @param {!Array<!proto.billing.RegularRelationEntity>} value
 * @return {!proto.billing.ArrRegularRelationEntity} returns this
*/
proto.billing.ArrRegularRelationEntity.prototype.setRegularrelationentityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.RegularRelationEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.RegularRelationEntity}
 */
proto.billing.ArrRegularRelationEntity.prototype.addRegularrelationentity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.RegularRelationEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrRegularRelationEntity} returns this
 */
proto.billing.ArrRegularRelationEntity.prototype.clearRegularrelationentityList = function() {
  return this.setRegularrelationentityList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.RegularRelationValues.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.RegularRelationValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.RegularRelationValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularRelationValues.toObject = function(includeInstance, msg) {
  var f, obj = {
regularChargeId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
entityType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
luKey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
rangeFrom: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
rangeTo: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
value: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
enableValue: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.RegularRelationValues}
 */
proto.billing.RegularRelationValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.RegularRelationValues;
  return proto.billing.RegularRelationValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.RegularRelationValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.RegularRelationValues}
 */
proto.billing.RegularRelationValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegularChargeId(value);
      break;
    case 2:
      var value = /** @type {!proto.billing.ENTITY_TYPE} */ (reader.readEnum());
      msg.setEntityType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLuKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangeFrom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRangeTo(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.RegularRelationValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.RegularRelationValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.RegularRelationValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.RegularRelationValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string REGULAR_CHARGE_ID = 1;
 * @return {string}
 */
proto.billing.RegularRelationValues.prototype.getRegularChargeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setRegularChargeId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearRegularChargeId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasRegularChargeId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ENTITY_TYPE ENTITY_TYPE = 2;
 * @return {!proto.billing.ENTITY_TYPE}
 */
proto.billing.RegularRelationValues.prototype.getEntityType = function() {
  return /** @type {!proto.billing.ENTITY_TYPE} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.billing.ENTITY_TYPE} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setEntityType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearEntityType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasEntityType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string LU_KEY = 3;
 * @return {string}
 */
proto.billing.RegularRelationValues.prototype.getLuKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setLuKey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearLuKey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasLuKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double RANGE_FROM = 4;
 * @return {number}
 */
proto.billing.RegularRelationValues.prototype.getRangeFrom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setRangeFrom = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearRangeFrom = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasRangeFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double RANGE_TO = 5;
 * @return {number}
 */
proto.billing.RegularRelationValues.prototype.getRangeTo = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setRangeTo = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearRangeTo = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasRangeTo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double VALUE = 6;
 * @return {number}
 */
proto.billing.RegularRelationValues.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearValue = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasValue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool ENABLE_VALUE = 7;
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.getEnableValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.setEnableValue = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.RegularRelationValues} returns this
 */
proto.billing.RegularRelationValues.prototype.clearEnableValue = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.RegularRelationValues.prototype.hasEnableValue = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrRegularRelationValues.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrRegularRelationValues.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrRegularRelationValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrRegularRelationValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularRelationValues.toObject = function(includeInstance, msg) {
  var f, obj = {
regularrelationvaluesList: jspb.Message.toObjectList(msg.getRegularrelationvaluesList(),
    proto.billing.RegularRelationValues.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrRegularRelationValues}
 */
proto.billing.ArrRegularRelationValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrRegularRelationValues;
  return proto.billing.ArrRegularRelationValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrRegularRelationValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrRegularRelationValues}
 */
proto.billing.ArrRegularRelationValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.RegularRelationValues;
      reader.readMessage(value,proto.billing.RegularRelationValues.deserializeBinaryFromReader);
      msg.addRegularrelationvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrRegularRelationValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrRegularRelationValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrRegularRelationValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrRegularRelationValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularrelationvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.RegularRelationValues.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RegularRelationValues RegularRelationValues = 1;
 * @return {!Array<!proto.billing.RegularRelationValues>}
 */
proto.billing.ArrRegularRelationValues.prototype.getRegularrelationvaluesList = function() {
  return /** @type{!Array<!proto.billing.RegularRelationValues>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.RegularRelationValues, 1));
};


/**
 * @param {!Array<!proto.billing.RegularRelationValues>} value
 * @return {!proto.billing.ArrRegularRelationValues} returns this
*/
proto.billing.ArrRegularRelationValues.prototype.setRegularrelationvaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.RegularRelationValues=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.RegularRelationValues}
 */
proto.billing.ArrRegularRelationValues.prototype.addRegularrelationvalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.RegularRelationValues, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrRegularRelationValues} returns this
 */
proto.billing.ArrRegularRelationValues.prototype.clearRegularrelationvaluesList = function() {
  return this.setRegularrelationvaluesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TransCodesData.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TransCodesData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TransCodesData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCodesData.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TransCodesData}
 */
proto.billing.TransCodesData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TransCodesData;
  return proto.billing.TransCodesData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TransCodesData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TransCodesData}
 */
proto.billing.TransCodesData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TransCodesData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TransCodesData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TransCodesData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCodesData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.billing.TransCodesData.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.TransCodesData} returns this
 */
proto.billing.TransCodesData.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCodesData} returns this
 */
proto.billing.TransCodesData.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCodesData.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.billing.TransCodesData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.TransCodesData} returns this
 */
proto.billing.TransCodesData.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.TransCodesData} returns this
 */
proto.billing.TransCodesData.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.TransCodesData.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.TransCodesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.TransCodesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.TransCodesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.TransCodesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCodesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
transcodesdataList: jspb.Message.toObjectList(msg.getTranscodesdataList(),
    proto.billing.TransCodesData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.TransCodesRes}
 */
proto.billing.TransCodesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.TransCodesRes;
  return proto.billing.TransCodesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.TransCodesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.TransCodesRes}
 */
proto.billing.TransCodesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.TransCodesData;
      reader.readMessage(value,proto.billing.TransCodesData.deserializeBinaryFromReader);
      msg.addTranscodesdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.TransCodesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.TransCodesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.TransCodesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.TransCodesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranscodesdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.TransCodesData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransCodesData TransCodesData = 1;
 * @return {!Array<!proto.billing.TransCodesData>}
 */
proto.billing.TransCodesRes.prototype.getTranscodesdataList = function() {
  return /** @type{!Array<!proto.billing.TransCodesData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.TransCodesData, 1));
};


/**
 * @param {!Array<!proto.billing.TransCodesData>} value
 * @return {!proto.billing.TransCodesRes} returns this
*/
proto.billing.TransCodesRes.prototype.setTranscodesdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.TransCodesData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.TransCodesData}
 */
proto.billing.TransCodesRes.prototype.addTranscodesdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.TransCodesData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.TransCodesRes} returns this
 */
proto.billing.TransCodesRes.prototype.clearTranscodesdataList = function() {
  return this.setTranscodesdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.CTGConsumptionServiceTariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.CTGConsumptionServiceTariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CTGConsumptionServiceTariff.toObject = function(includeInstance, msg) {
  var f, obj = {
ctypeid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
servicetype: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
transcode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
tariffid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
ctypegrpid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
iszerotariff: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
taxpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
discountpercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.CTGConsumptionServiceTariff}
 */
proto.billing.CTGConsumptionServiceTariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.CTGConsumptionServiceTariff;
  return proto.billing.CTGConsumptionServiceTariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.CTGConsumptionServiceTariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.CTGConsumptionServiceTariff}
 */
proto.billing.CTGConsumptionServiceTariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtypeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServicetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTariffid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCtypegrpid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIszerotariff(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTaxpercentage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiscountpercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.CTGConsumptionServiceTariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.CTGConsumptionServiceTariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.CTGConsumptionServiceTariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional string CTypeID = 1;
 * @return {string}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getCtypeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setCtypeid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearCtypeid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasCtypeid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 ServiceType = 2;
 * @return {number}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getServicetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setServicetype = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearServicetype = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasServicetype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string TransCode = 3;
 * @return {string}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getTranscode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setTranscode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearTranscode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasTranscode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string TariffID = 4;
 * @return {string}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getTariffid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setTariffid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearTariffid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasTariffid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string CTypeGrpID = 5;
 * @return {string}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getCtypegrpid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setCtypegrpid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearCtypegrpid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasCtypegrpid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool IsZeroTariff = 6;
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getIszerotariff = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setIszerotariff = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearIszerotariff = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasIszerotariff = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double TaxPercentage = 7;
 * @return {number}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getTaxpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setTaxpercentage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearTaxpercentage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasTaxpercentage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double DiscountPercentage = 8;
 * @return {number}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.getDiscountpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.setDiscountpercentage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.billing.CTGConsumptionServiceTariff} returns this
 */
proto.billing.CTGConsumptionServiceTariff.prototype.clearDiscountpercentage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.billing.CTGConsumptionServiceTariff.prototype.hasDiscountpercentage = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.billing.ArrCTGConsumptionServiceTariff.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.billing.ArrCTGConsumptionServiceTariff.prototype.toObject = function(opt_includeInstance) {
  return proto.billing.ArrCTGConsumptionServiceTariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.billing.ArrCTGConsumptionServiceTariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrCTGConsumptionServiceTariff.toObject = function(includeInstance, msg) {
  var f, obj = {
ctgconsumptionservicetariffList: jspb.Message.toObjectList(msg.getCtgconsumptionservicetariffList(),
    proto.billing.CTGConsumptionServiceTariff.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.billing.ArrCTGConsumptionServiceTariff}
 */
proto.billing.ArrCTGConsumptionServiceTariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.billing.ArrCTGConsumptionServiceTariff;
  return proto.billing.ArrCTGConsumptionServiceTariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.billing.ArrCTGConsumptionServiceTariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.billing.ArrCTGConsumptionServiceTariff}
 */
proto.billing.ArrCTGConsumptionServiceTariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.billing.CTGConsumptionServiceTariff;
      reader.readMessage(value,proto.billing.CTGConsumptionServiceTariff.deserializeBinaryFromReader);
      msg.addCtgconsumptionservicetariff(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.billing.ArrCTGConsumptionServiceTariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.billing.ArrCTGConsumptionServiceTariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.billing.ArrCTGConsumptionServiceTariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.billing.ArrCTGConsumptionServiceTariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtgconsumptionservicetariffList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.billing.CTGConsumptionServiceTariff.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CTGConsumptionServiceTariff CTGConsumptionServiceTariff = 1;
 * @return {!Array<!proto.billing.CTGConsumptionServiceTariff>}
 */
proto.billing.ArrCTGConsumptionServiceTariff.prototype.getCtgconsumptionservicetariffList = function() {
  return /** @type{!Array<!proto.billing.CTGConsumptionServiceTariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.billing.CTGConsumptionServiceTariff, 1));
};


/**
 * @param {!Array<!proto.billing.CTGConsumptionServiceTariff>} value
 * @return {!proto.billing.ArrCTGConsumptionServiceTariff} returns this
*/
proto.billing.ArrCTGConsumptionServiceTariff.prototype.setCtgconsumptionservicetariffList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.billing.CTGConsumptionServiceTariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.billing.CTGConsumptionServiceTariff}
 */
proto.billing.ArrCTGConsumptionServiceTariff.prototype.addCtgconsumptionservicetariff = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.billing.CTGConsumptionServiceTariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.billing.ArrCTGConsumptionServiceTariff} returns this
 */
proto.billing.ArrCTGConsumptionServiceTariff.prototype.clearCtgconsumptionservicetariffList = function() {
  return this.setCtgconsumptionservicetariffList([]);
};


/**
 * @enum {number}
 */
proto.billing.VERION = {
  PROTO_VERSION: 57
};

/**
 * @enum {number}
 */
proto.billing.MeterOperationStatus = {
  WORKING: 0,
  NOT_WORKING: 1
};

/**
 * @enum {number}
 */
proto.billing.SERVICE_TYPE = {
  WATER: 0,
  SEWER: 1,
  ELECTRICITY: 2,
  GAS: 3,
  HYDRANT: 4,
  FIRE: 5
};

/**
 * @enum {number}
 */
proto.billing.CONNECTION_STATUS_TYPE = {
  CONNECTED_WITHOUT_METER: 0,
  CONNECTED_WITH_METER: 1,
  DISCONNECTED_WITH_METER: 2,
  DISCONNECTED_WITHOUT_METER: 3
};

/**
 * @enum {number}
 */
proto.billing.READING_TYPE = {
  ACTUAL: 0,
  AVERAGE: 1,
  ESTIMATE: 2
};

/**
 * @enum {number}
 */
proto.billing.RegularChargePeriod = {
  BILL: 1,
  MONTHLY: 2
};

/**
 * @enum {number}
 */
proto.billing.ENTITY_TYPE = {
  CTYPE: 1,
  CTYPE_GROUP: 2,
  CUSTOMER_TYPE: 3,
  CUSTOMER_FLAG1: 4,
  CUSTOMER_FLAG2: 5,
  CUSTOMER_FLAG3: 6,
  CUSTOMER_FLAG4: 7,
  CUSTOMER_FLAG5: 8,
  PROPERTY_VACATED: 9,
  PROPERTY_FLAG1: 10,
  PROPERTY_FLAG2: 11,
  PROPERTY_FLAG3: 12,
  PROPERTY_FLAG4: 13,
  PROPERTY_FLAG5: 14,
  CONNECTION_DIAMETER: 15,
  CONNECTION_STATUS: 16,
  CONNECTION_ISBULK_METER: 18,
  METER_DIAMETER: 19,
  SERVICE: 20,
  TOWINSHIP: 21,
  CONSUMPTION: 22
};

/**
 * @enum {number}
 */
proto.billing.ChargeRegularCalcStrategy = {
  EACH_ONE: 0,
  SUM_ALL: 1,
  MAIN_CTYPE: 2,
  HIGHTEST_AMOUNT: 3,
  LOWEST_AMOUNT: 4,
  DUPPLICATE_EACH_CTYPE: 5,
  DUPPLICATE_EACH_CTYPE_GROUP: 6
};

/**
 * @enum {number}
 */
proto.billing.ChargeType = {
  FIXED: 0,
  RELATION: 1
};

/**
 * @enum {number}
 */
proto.billing.ReleationType = {
  ENABLE_RELEATION: 1,
  CHARGE_RELEATION: 2
};

/**
 * @enum {number}
 */
proto.billing.ENTITY_CATEGORY_TYPE = {
  UNKNOWN_CATEGORY: 0,
  LOOKUP: 1,
  RANGE: 2
};

/**
 * @enum {number}
 */
proto.billing.FLAGS_TYPES = {
  UNKNOWN_FLAG: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5
};

/**
 * @enum {number}
 */
proto.billing.PROPERTY_VACATED_TYPES = {
  UNKNOWN_PROPERTY: 0,
  VACATED: 1,
  NOT_VACATED: 2
};

/**
 * @enum {number}
 */
proto.billing.TransCodes = {
  WATER_AMT: 0,
  SEWER_AMT: 1,
  BASIC_AMT: 2,
  TANZEEM_AMT: 3,
  TAX_AMT: 4,
  CRDT_AMT: 5,
  DBT_AMT: 6,
  CLEAN_AMT: 7,
  ROUND_AMT: 8,
  OTHER_AMT: 9,
  ADMIN_AMT: 10,
  CONTRACT_AMT: 11,
  INITIAL_AMT: 12
};

goog.object.extend(exports, proto.billing);
