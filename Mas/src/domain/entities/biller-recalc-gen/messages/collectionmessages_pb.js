// source: messages/collectionmessages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var dbmessages_collectionmessages_pb = require('../dbmessages/collectionmessages_pb.js');
goog.object.extend(proto, dbmessages_collectionmessages_pb);
var serverhostmessages_collectionmessages_pb = require('../serverhostmessages/collectionmessages_pb.js');
goog.object.extend(proto, serverhostmessages_collectionmessages_pb);
goog.exportSymbol('proto.messages.ActionView', null, global);
goog.exportSymbol('proto.messages.ApplicationActionRequest', null, global);
goog.exportSymbol('proto.messages.ApplicationActionResponse', null, global);
goog.exportSymbol('proto.messages.ApplicationListRequest', null, global);
goog.exportSymbol('proto.messages.ApplicationListResponse', null, global);
goog.exportSymbol('proto.messages.ApplicationRequest', null, global);
goog.exportSymbol('proto.messages.ApplicationResponse', null, global);
goog.exportSymbol('proto.messages.ApplicationRole', null, global);
goog.exportSymbol('proto.messages.ApplicationRoleState', null, global);
goog.exportSymbol('proto.messages.ApplicationTypeRole', null, global);
goog.exportSymbol('proto.messages.ApplicationTypesRs', null, global);
goog.exportSymbol('proto.messages.ApplicationsReportRequest', null, global);
goog.exportSymbol('proto.messages.ApplicationsReportResponse', null, global);
goog.exportSymbol('proto.messages.BILLING_ISSUE_TYPE', null, global);
goog.exportSymbol('proto.messages.BillActionsResponse', null, global);
goog.exportSymbol('proto.messages.BillStatesResponse', null, global);
goog.exportSymbol('proto.messages.CancelApplicationRequest', null, global);
goog.exportSymbol('proto.messages.CustomerInfo', null, global);
goog.exportSymbol('proto.messages.Empty', null, global);
goog.exportSymbol('proto.messages.GETRequest', null, global);
goog.exportSymbol('proto.messages.GategoryType', null, global);
goog.exportSymbol('proto.messages.GategoryTypeID', null, global);
goog.exportSymbol('proto.messages.GategoryTypesRs', null, global);
goog.exportSymbol('proto.messages.GetCategoryProductResponse', null, global);
goog.exportSymbol('proto.messages.GetCustomerBooksRequest', null, global);
goog.exportSymbol('proto.messages.GetCustomerDetailRequest', null, global);
goog.exportSymbol('proto.messages.GetCustomerDetailResponse', null, global);
goog.exportSymbol('proto.messages.GetCustomerPaymentsRequest', null, global);
goog.exportSymbol('proto.messages.GetCustomerPaymentsResponse', null, global);
goog.exportSymbol('proto.messages.GetDataSourceDetailRequest', null, global);
goog.exportSymbol('proto.messages.GetDataSourceDetailResponse', null, global);
goog.exportSymbol('proto.messages.GetDataSourceResponse', null, global);
goog.exportSymbol('proto.messages.GetFormNoPaymentsRequest', null, global);
goog.exportSymbol('proto.messages.GetFormNoPaymentsResponse', null, global);
goog.exportSymbol('proto.messages.GetFormNoPaymentsResponseItem', null, global);
goog.exportSymbol('proto.messages.GetFromBilngRequest', null, global);
goog.exportSymbol('proto.messages.GetMetaDataResponse', null, global);
goog.exportSymbol('proto.messages.GetPaymentActionsRequest', null, global);
goog.exportSymbol('proto.messages.GetPaymentActionsResponse', null, global);
goog.exportSymbol('proto.messages.GetPaymentForHqResponse', null, global);
goog.exportSymbol('proto.messages.GetPaymentMethodsResponse', null, global);
goog.exportSymbol('proto.messages.GetPaymentRequest', null, global);
goog.exportSymbol('proto.messages.GetPaymentResponse', null, global);
goog.exportSymbol('proto.messages.GetProductsRequest', null, global);
goog.exportSymbol('proto.messages.GetProductsResponse', null, global);
goog.exportSymbol('proto.messages.GetStationsResponse', null, global);
goog.exportSymbol('proto.messages.GetUserListResponse', null, global);
goog.exportSymbol('proto.messages.GetUserResponse', null, global);
goog.exportSymbol('proto.messages.GetUsersRequest', null, global);
goog.exportSymbol('proto.messages.ListBillsRequest', null, global);
goog.exportSymbol('proto.messages.LookUpItem', null, global);
goog.exportSymbol('proto.messages.LookUpMessage', null, global);
goog.exportSymbol('proto.messages.MessageID', null, global);
goog.exportSymbol('proto.messages.MessageResponse', null, global);
goog.exportSymbol('proto.messages.ReportPayment', null, global);
goog.exportSymbol('proto.messages.SaveApplicationRequest', null, global);
goog.exportSymbol('proto.messages.SaveApplicationTypeRequest', null, global);
goog.exportSymbol('proto.messages.SearchBy', null, global);
goog.exportSymbol('proto.messages.SearchFilter', null, global);
goog.exportSymbol('proto.messages.SearchItem', null, global);
goog.exportSymbol('proto.messages.SearchRequest', null, global);
goog.exportSymbol('proto.messages.SearchResult', null, global);
goog.exportSymbol('proto.messages.ServiceInfo', null, global);
goog.exportSymbol('proto.messages.Station', null, global);
goog.exportSymbol('proto.messages.UserPrivcy', null, global);
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
proto.messages.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.Empty.displayName = 'proto.messages.Empty';
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
proto.messages.ServiceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ServiceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ServiceInfo.displayName = 'proto.messages.ServiceInfo';
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
proto.messages.MessageID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.MessageID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.MessageID.displayName = 'proto.messages.MessageID';
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
proto.messages.ApplicationListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationListRequest.displayName = 'proto.messages.ApplicationListRequest';
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
proto.messages.ApplicationListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.ApplicationListResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.ApplicationListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationListResponse.displayName = 'proto.messages.ApplicationListResponse';
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
proto.messages.GetCustomerPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetCustomerPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCustomerPaymentsRequest.displayName = 'proto.messages.GetCustomerPaymentsRequest';
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
proto.messages.GetCustomerPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetCustomerPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetCustomerPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCustomerPaymentsResponse.displayName = 'proto.messages.GetCustomerPaymentsResponse';
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
proto.messages.SaveApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.SaveApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.SaveApplicationRequest.displayName = 'proto.messages.SaveApplicationRequest';
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
proto.messages.MessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.MessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.MessageResponse.displayName = 'proto.messages.MessageResponse';
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
proto.messages.ApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationRequest.displayName = 'proto.messages.ApplicationRequest';
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
proto.messages.ApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationResponse.displayName = 'proto.messages.ApplicationResponse';
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
proto.messages.ApplicationActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationActionRequest.displayName = 'proto.messages.ApplicationActionRequest';
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
proto.messages.ApplicationActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationActionResponse.displayName = 'proto.messages.ApplicationActionResponse';
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
proto.messages.GetPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentRequest.displayName = 'proto.messages.GetPaymentRequest';
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
proto.messages.GetPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentResponse.displayName = 'proto.messages.GetPaymentResponse';
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
proto.messages.BillActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.BillActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.BillActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.BillActionsResponse.displayName = 'proto.messages.BillActionsResponse';
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
proto.messages.BillStatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.BillStatesResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.BillStatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.BillStatesResponse.displayName = 'proto.messages.BillStatesResponse';
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
proto.messages.ApplicationsReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationsReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationsReportRequest.displayName = 'proto.messages.ApplicationsReportRequest';
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
proto.messages.ApplicationsReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.ApplicationsReportResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.ApplicationsReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationsReportResponse.displayName = 'proto.messages.ApplicationsReportResponse';
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
proto.messages.GetStationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetStationsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetStationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetStationsResponse.displayName = 'proto.messages.GetStationsResponse';
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
proto.messages.Station = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.Station, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.Station.displayName = 'proto.messages.Station';
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
proto.messages.GetFormNoPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetFormNoPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetFormNoPaymentsRequest.displayName = 'proto.messages.GetFormNoPaymentsRequest';
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
proto.messages.ReportPayment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ReportPayment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ReportPayment.displayName = 'proto.messages.ReportPayment';
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
proto.messages.GetFormNoPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetFormNoPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetFormNoPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetFormNoPaymentsResponse.displayName = 'proto.messages.GetFormNoPaymentsResponse';
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
proto.messages.GetFormNoPaymentsResponseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetFormNoPaymentsResponseItem.repeatedFields_, null);
};
goog.inherits(proto.messages.GetFormNoPaymentsResponseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetFormNoPaymentsResponseItem.displayName = 'proto.messages.GetFormNoPaymentsResponseItem';
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
proto.messages.ApplicationTypesRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.ApplicationTypesRs.repeatedFields_, null);
};
goog.inherits(proto.messages.ApplicationTypesRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationTypesRs.displayName = 'proto.messages.ApplicationTypesRs';
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
proto.messages.SaveApplicationTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.SaveApplicationTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.SaveApplicationTypeRequest.displayName = 'proto.messages.SaveApplicationTypeRequest';
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
proto.messages.GetUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetUsersRequest.displayName = 'proto.messages.GetUsersRequest';
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
proto.messages.GetUserListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetUserListResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetUserListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetUserListResponse.displayName = 'proto.messages.GetUserListResponse';
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
proto.messages.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetUserResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetUserResponse.displayName = 'proto.messages.GetUserResponse';
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
proto.messages.UserPrivcy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.UserPrivcy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.UserPrivcy.displayName = 'proto.messages.UserPrivcy';
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
proto.messages.ApplicationTypeRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.ApplicationTypeRole.repeatedFields_, null);
};
goog.inherits(proto.messages.ApplicationTypeRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationTypeRole.displayName = 'proto.messages.ApplicationTypeRole';
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
proto.messages.ApplicationRoleState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.ApplicationRoleState.repeatedFields_, null);
};
goog.inherits(proto.messages.ApplicationRoleState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationRoleState.displayName = 'proto.messages.ApplicationRoleState';
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
proto.messages.ApplicationRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ApplicationRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ApplicationRole.displayName = 'proto.messages.ApplicationRole';
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
proto.messages.CancelApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.CancelApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.CancelApplicationRequest.displayName = 'proto.messages.CancelApplicationRequest';
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
proto.messages.GetPaymentMethodsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetPaymentMethodsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetPaymentMethodsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentMethodsResponse.displayName = 'proto.messages.GetPaymentMethodsResponse';
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
proto.messages.SearchItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.SearchItem.repeatedFields_, null);
};
goog.inherits(proto.messages.SearchItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.SearchItem.displayName = 'proto.messages.SearchItem';
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
proto.messages.SearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.SearchResult.repeatedFields_, null);
};
goog.inherits(proto.messages.SearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.SearchResult.displayName = 'proto.messages.SearchResult';
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
proto.messages.SearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.SearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.SearchRequest.displayName = 'proto.messages.SearchRequest';
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
proto.messages.GETRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GETRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GETRequest.displayName = 'proto.messages.GETRequest';
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
proto.messages.ListBillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.ListBillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.ListBillsRequest.displayName = 'proto.messages.ListBillsRequest';
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
proto.messages.GetFromBilngRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetFromBilngRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetFromBilngRequest.displayName = 'proto.messages.GetFromBilngRequest';
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
proto.messages.CustomerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.CustomerInfo.repeatedFields_, null);
};
goog.inherits(proto.messages.CustomerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.CustomerInfo.displayName = 'proto.messages.CustomerInfo';
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
proto.messages.GetPaymentForHqResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetPaymentForHqResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetPaymentForHqResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentForHqResponse.displayName = 'proto.messages.GetPaymentForHqResponse';
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
proto.messages.GetPaymentActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetPaymentActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentActionsRequest.displayName = 'proto.messages.GetPaymentActionsRequest';
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
proto.messages.GetPaymentActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetPaymentActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetPaymentActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetPaymentActionsResponse.displayName = 'proto.messages.GetPaymentActionsResponse';
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
proto.messages.GetCustomerBooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetCustomerBooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCustomerBooksRequest.displayName = 'proto.messages.GetCustomerBooksRequest';
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
proto.messages.LookUpMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.LookUpMessage.repeatedFields_, null);
};
goog.inherits(proto.messages.LookUpMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.LookUpMessage.displayName = 'proto.messages.LookUpMessage';
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
proto.messages.LookUpItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.LookUpItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.LookUpItem.displayName = 'proto.messages.LookUpItem';
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
proto.messages.GetCustomerDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetCustomerDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCustomerDetailRequest.displayName = 'proto.messages.GetCustomerDetailRequest';
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
proto.messages.GetCustomerDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetCustomerDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCustomerDetailResponse.displayName = 'proto.messages.GetCustomerDetailResponse';
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
proto.messages.GategoryTypesRs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GategoryTypesRs.repeatedFields_, null);
};
goog.inherits(proto.messages.GategoryTypesRs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GategoryTypesRs.displayName = 'proto.messages.GategoryTypesRs';
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
proto.messages.GategoryType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GategoryType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GategoryType.displayName = 'proto.messages.GategoryType';
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
proto.messages.GetProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetProductsRequest.displayName = 'proto.messages.GetProductsRequest';
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
proto.messages.GetProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetProductsResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetProductsResponse.displayName = 'proto.messages.GetProductsResponse';
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
proto.messages.GetCategoryProductResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetCategoryProductResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetCategoryProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetCategoryProductResponse.displayName = 'proto.messages.GetCategoryProductResponse';
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
proto.messages.GetMetaDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetMetaDataResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetMetaDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetMetaDataResponse.displayName = 'proto.messages.GetMetaDataResponse';
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
proto.messages.GetDataSourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetDataSourceResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetDataSourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetDataSourceResponse.displayName = 'proto.messages.GetDataSourceResponse';
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
proto.messages.GetDataSourceDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GetDataSourceDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetDataSourceDetailRequest.displayName = 'proto.messages.GetDataSourceDetailRequest';
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
proto.messages.GetDataSourceDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.messages.GetDataSourceDetailResponse.repeatedFields_, null);
};
goog.inherits(proto.messages.GetDataSourceDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GetDataSourceDetailResponse.displayName = 'proto.messages.GetDataSourceDetailResponse';
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
proto.messages.GategoryTypeID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.messages.GategoryTypeID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.messages.GategoryTypeID.displayName = 'proto.messages.GategoryTypeID';
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
proto.messages.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.Empty.toObject = function(includeInstance, msg) {
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
 * @return {!proto.messages.Empty}
 */
proto.messages.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.Empty;
  return proto.messages.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.Empty}
 */
proto.messages.Empty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.Empty.serializeBinaryToWriter = function(message, writer) {
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
proto.messages.ServiceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ServiceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ServiceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ServiceInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.messages.ServiceInfo}
 */
proto.messages.ServiceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ServiceInfo;
  return proto.messages.ServiceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ServiceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ServiceInfo}
 */
proto.messages.ServiceInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.ServiceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ServiceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ServiceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ServiceInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.messages.ServiceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ServiceInfo} returns this
 */
proto.messages.ServiceInfo.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ServiceInfo} returns this
 */
proto.messages.ServiceInfo.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ServiceInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Version = 2;
 * @return {string}
 */
proto.messages.ServiceInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ServiceInfo} returns this
 */
proto.messages.ServiceInfo.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ServiceInfo} returns this
 */
proto.messages.ServiceInfo.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ServiceInfo.prototype.hasVersion = function() {
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
proto.messages.MessageID.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.MessageID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.MessageID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.MessageID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.MessageID}
 */
proto.messages.MessageID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.MessageID;
  return proto.messages.MessageID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.MessageID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.MessageID}
 */
proto.messages.MessageID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
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
proto.messages.MessageID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.MessageID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.MessageID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.MessageID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * required int64 ID = 1;
 * @return {number}
 */
proto.messages.MessageID.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.MessageID} returns this
 */
proto.messages.MessageID.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.MessageID} returns this
 */
proto.messages.MessageID.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.MessageID.prototype.hasId = function() {
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
proto.messages.ApplicationListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    includeclose: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    custkey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    applicationtype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    clientid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationListRequest}
 */
proto.messages.ApplicationListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationListRequest;
  return proto.messages.ApplicationListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationListRequest}
 */
proto.messages.ApplicationListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeclose(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientid(value);
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
proto.messages.ApplicationListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.messages.ApplicationListRequest.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.setState = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.clearState = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool includeClose = 2;
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.getIncludeclose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.setIncludeclose = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.clearIncludeclose = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.hasIncludeclose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string custkey = 3;
 * @return {string}
 */
proto.messages.ApplicationListRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 ApplicationType = 4;
 * @return {number}
 */
proto.messages.ApplicationListRequest.prototype.getApplicationtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.setApplicationtype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.clearApplicationtype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.hasApplicationtype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 ClientID = 5;
 * @return {number}
 */
proto.messages.ApplicationListRequest.prototype.getClientid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.setClientid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationListRequest} returns this
 */
proto.messages.ApplicationListRequest.prototype.clearClientid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationListRequest.prototype.hasClientid = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.ApplicationListResponse.repeatedFields_ = [1];



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
proto.messages.ApplicationListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancelledbilllistList: jspb.Message.toObjectList(msg.getCancelledbilllistList(),
    dbmessages_collectionmessages_pb.CANCELLED_REQUEST.toObject, includeInstance)
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
 * @return {!proto.messages.ApplicationListResponse}
 */
proto.messages.ApplicationListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationListResponse;
  return proto.messages.ApplicationListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationListResponse}
 */
proto.messages.ApplicationListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.CANCELLED_REQUEST;
      reader.readMessage(value,dbmessages_collectionmessages_pb.CANCELLED_REQUEST.deserializeBinaryFromReader);
      msg.addCancelledbilllist(value);
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
proto.messages.ApplicationListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancelledbilllistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.CANCELLED_REQUEST.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.CANCELLED_REQUEST CancelledBillList = 1;
 * @return {!Array<!proto.dbmessages.CANCELLED_REQUEST>}
 */
proto.messages.ApplicationListResponse.prototype.getCancelledbilllistList = function() {
  return /** @type{!Array<!proto.dbmessages.CANCELLED_REQUEST>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.CANCELLED_REQUEST, 1));
};


/**
 * @param {!Array<!proto.dbmessages.CANCELLED_REQUEST>} value
 * @return {!proto.messages.ApplicationListResponse} returns this
*/
proto.messages.ApplicationListResponse.prototype.setCancelledbilllistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.CANCELLED_REQUEST=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.CANCELLED_REQUEST}
 */
proto.messages.ApplicationListResponse.prototype.addCancelledbilllist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.CANCELLED_REQUEST, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.ApplicationListResponse} returns this
 */
proto.messages.ApplicationListResponse.prototype.clearCancelledbilllistList = function() {
  return this.setCancelledbilllistList([]);
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
proto.messages.GetCustomerPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCustomerPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCustomerPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    formNo: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.GetCustomerPaymentsRequest}
 */
proto.messages.GetCustomerPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCustomerPaymentsRequest;
  return proto.messages.GetCustomerPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCustomerPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCustomerPaymentsRequest}
 */
proto.messages.GetCustomerPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFormNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
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
proto.messages.GetCustomerPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCustomerPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCustomerPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string custkey = 1;
 * @return {string}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 form_no = 2;
 * @return {number}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 application_type_id = 3;
 * @return {number}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerPaymentsRequest} returns this
 */
proto.messages.GetCustomerPaymentsRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerPaymentsRequest.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetCustomerPaymentsResponse.repeatedFields_ = [1];



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
proto.messages.GetCustomerPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCustomerPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCustomerPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    serverhostmessages_collectionmessages_pb.CollectionDestributionItem.toObject, includeInstance)
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
 * @return {!proto.messages.GetCustomerPaymentsResponse}
 */
proto.messages.GetCustomerPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCustomerPaymentsResponse;
  return proto.messages.GetCustomerPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCustomerPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCustomerPaymentsResponse}
 */
proto.messages.GetCustomerPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.CollectionDestributionItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.GetCustomerPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCustomerPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCustomerPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      serverhostmessages_collectionmessages_pb.CollectionDestributionItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated serverhostmessages.CollectionDestributionItem items = 1;
 * @return {!Array<!proto.serverhostmessages.CollectionDestributionItem>}
 */
proto.messages.GetCustomerPaymentsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.CollectionDestributionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.CollectionDestributionItem, 1));
};


/**
 * @param {!Array<!proto.serverhostmessages.CollectionDestributionItem>} value
 * @return {!proto.messages.GetCustomerPaymentsResponse} returns this
*/
proto.messages.GetCustomerPaymentsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.serverhostmessages.CollectionDestributionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.CollectionDestributionItem}
 */
proto.messages.GetCustomerPaymentsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.serverhostmessages.CollectionDestributionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetCustomerPaymentsResponse} returns this
 */
proto.messages.GetCustomerPaymentsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.messages.SaveApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.SaveApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.SaveApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SaveApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && dbmessages_collectionmessages_pb.CANCELLED_REQUEST.toObject(includeInstance, f)
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
 * @return {!proto.messages.SaveApplicationRequest}
 */
proto.messages.SaveApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.SaveApplicationRequest;
  return proto.messages.SaveApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.SaveApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.SaveApplicationRequest}
 */
proto.messages.SaveApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.CANCELLED_REQUEST;
      reader.readMessage(value,dbmessages_collectionmessages_pb.CANCELLED_REQUEST.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.messages.SaveApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.SaveApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.SaveApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SaveApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.CANCELLED_REQUEST.serializeBinaryToWriter
    );
  }
};


/**
 * required dbmessages.CANCELLED_REQUEST request = 1;
 * @return {!proto.dbmessages.CANCELLED_REQUEST}
 */
proto.messages.SaveApplicationRequest.prototype.getRequest = function() {
  return /** @type{!proto.dbmessages.CANCELLED_REQUEST} */ (
    jspb.Message.getWrapperField(this, dbmessages_collectionmessages_pb.CANCELLED_REQUEST, 1, 1));
};


/**
 * @param {!proto.dbmessages.CANCELLED_REQUEST} value
 * @return {!proto.messages.SaveApplicationRequest} returns this
*/
proto.messages.SaveApplicationRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SaveApplicationRequest} returns this
 */
proto.messages.SaveApplicationRequest.prototype.clearRequest = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SaveApplicationRequest.prototype.hasRequest = function() {
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
proto.messages.MessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.MessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.MessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.MessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    saveid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.messages.MessageResponse}
 */
proto.messages.MessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.MessageResponse;
  return proto.messages.MessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.MessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.MessageResponse}
 */
proto.messages.MessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSaveid(value);
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
proto.messages.MessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.MessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.MessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.MessageResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required string message = 1;
 * @return {string}
 */
proto.messages.MessageResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.MessageResponse} returns this
 */
proto.messages.MessageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.MessageResponse} returns this
 */
proto.messages.MessageResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.MessageResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 saveId = 2;
 * @return {number}
 */
proto.messages.MessageResponse.prototype.getSaveid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.MessageResponse} returns this
 */
proto.messages.MessageResponse.prototype.setSaveid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.MessageResponse} returns this
 */
proto.messages.MessageResponse.prototype.clearSaveid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.MessageResponse.prototype.hasSaveid = function() {
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
proto.messages.ApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationRequest}
 */
proto.messages.ApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationRequest;
  return proto.messages.ApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationRequest}
 */
proto.messages.ApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
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
proto.messages.ApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
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
};


/**
 * required int64 form_no = 1;
 * @return {number}
 */
proto.messages.ApplicationRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRequest} returns this
 */
proto.messages.ApplicationRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRequest} returns this
 */
proto.messages.ApplicationRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 application_type_id = 2;
 * @return {number}
 */
proto.messages.ApplicationRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRequest} returns this
 */
proto.messages.ApplicationRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRequest} returns this
 */
proto.messages.ApplicationRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRequest.prototype.hasApplicationTypeId = function() {
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
proto.messages.ApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: (f = msg.getContent()) && dbmessages_collectionmessages_pb.CANCELLED_REQUEST.toObject(includeInstance, f)
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
 * @return {!proto.messages.ApplicationResponse}
 */
proto.messages.ApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationResponse;
  return proto.messages.ApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationResponse}
 */
proto.messages.ApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.CANCELLED_REQUEST;
      reader.readMessage(value,dbmessages_collectionmessages_pb.CANCELLED_REQUEST.deserializeBinaryFromReader);
      msg.setContent(value);
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
proto.messages.ApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.CANCELLED_REQUEST.serializeBinaryToWriter
    );
  }
};


/**
 * optional dbmessages.CANCELLED_REQUEST Content = 1;
 * @return {?proto.dbmessages.CANCELLED_REQUEST}
 */
proto.messages.ApplicationResponse.prototype.getContent = function() {
  return /** @type{?proto.dbmessages.CANCELLED_REQUEST} */ (
    jspb.Message.getWrapperField(this, dbmessages_collectionmessages_pb.CANCELLED_REQUEST, 1));
};


/**
 * @param {?proto.dbmessages.CANCELLED_REQUEST|undefined} value
 * @return {!proto.messages.ApplicationResponse} returns this
*/
proto.messages.ApplicationResponse.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.ApplicationResponse} returns this
 */
proto.messages.ApplicationResponse.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationResponse.prototype.hasContent = function() {
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
proto.messages.ApplicationActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    action: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    comment: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    requestComment: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    tele: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    nid: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    email: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    agreement: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    cancelation: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationActionRequest}
 */
proto.messages.ApplicationActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationActionRequest;
  return proto.messages.ApplicationActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationActionRequest}
 */
proto.messages.ApplicationActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestComment(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTele(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgreement(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelation(value);
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
proto.messages.ApplicationActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional int64 form_no = 1;
 * @return {number}
 */
proto.messages.ApplicationActionRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 action = 2;
 * @return {number}
 */
proto.messages.ApplicationActionRequest.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setAction = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearAction = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearComment = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasComment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string request_comment = 4;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getRequestComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setRequestComment = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearRequestComment = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasRequestComment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 application_type_id = 5;
 * @return {number}
 */
proto.messages.ApplicationActionRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ADDRESS = 6;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string TELE = 7;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getTele = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setTele = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearTele = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasTele = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string NID = 8;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getNid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setNid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearNid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasNid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string EMAIL = 9;
 * @return {string}
 */
proto.messages.ApplicationActionRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool AGREEMENT = 10;
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.getAgreement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setAgreement = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearAgreement = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasAgreement = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool CANCELATION = 11;
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.getCancelation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.setCancelation = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionRequest} returns this
 */
proto.messages.ApplicationActionRequest.prototype.clearCancelation = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionRequest.prototype.hasCancelation = function() {
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
proto.messages.ApplicationActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationActionResponse}
 */
proto.messages.ApplicationActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationActionResponse;
  return proto.messages.ApplicationActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationActionResponse}
 */
proto.messages.ApplicationActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.messages.ApplicationActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationActionResponse.serializeBinaryToWriter = function(message, writer) {
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
 * required string message = 1;
 * @return {string}
 */
proto.messages.ApplicationActionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationActionResponse} returns this
 */
proto.messages.ApplicationActionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationActionResponse} returns this
 */
proto.messages.ApplicationActionResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationActionResponse.prototype.hasMessage = function() {
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
proto.messages.GetPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    custkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    skipbracodtrim: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    forquery: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    cycleId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.messages.GetPaymentRequest}
 */
proto.messages.GetPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentRequest;
  return proto.messages.GetPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentRequest}
 */
proto.messages.GetPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipbracodtrim(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForquery(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCycleId(value);
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
proto.messages.GetPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
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
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string payment_no = 1;
 * @return {string}
 */
proto.messages.GetPaymentRequest.prototype.getPaymentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.setPaymentNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.clearPaymentNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.hasPaymentNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custkey = 2;
 * @return {string}
 */
proto.messages.GetPaymentRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool skipBracodTrim = 3;
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.getSkipbracodtrim = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.setSkipbracodtrim = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.clearSkipbracodtrim = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.hasSkipbracodtrim = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool forQuery = 4;
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.getForquery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.setForquery = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.clearForquery = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.hasForquery = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 cycle_id = 5;
 * @return {number}
 */
proto.messages.GetPaymentRequest.prototype.getCycleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.setCycleId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentRequest} returns this
 */
proto.messages.GetPaymentRequest.prototype.clearCycleId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentRequest.prototype.hasCycleId = function() {
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
proto.messages.GetPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && serverhostmessages_collectionmessages_pb.CollectionDestributionItem.toObject(includeInstance, f)
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
 * @return {!proto.messages.GetPaymentResponse}
 */
proto.messages.GetPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentResponse;
  return proto.messages.GetPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentResponse}
 */
proto.messages.GetPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.CollectionDestributionItem.deserializeBinaryFromReader);
      msg.setItem(value);
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
proto.messages.GetPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      serverhostmessages_collectionmessages_pb.CollectionDestributionItem.serializeBinaryToWriter
    );
  }
};


/**
 * required serverhostmessages.CollectionDestributionItem item = 1;
 * @return {!proto.serverhostmessages.CollectionDestributionItem}
 */
proto.messages.GetPaymentResponse.prototype.getItem = function() {
  return /** @type{!proto.serverhostmessages.CollectionDestributionItem} */ (
    jspb.Message.getWrapperField(this, serverhostmessages_collectionmessages_pb.CollectionDestributionItem, 1, 1));
};


/**
 * @param {!proto.serverhostmessages.CollectionDestributionItem} value
 * @return {!proto.messages.GetPaymentResponse} returns this
*/
proto.messages.GetPaymentResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentResponse} returns this
 */
proto.messages.GetPaymentResponse.prototype.clearItem = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentResponse.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.BillActionsResponse.repeatedFields_ = [1];



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
proto.messages.BillActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.BillActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.BillActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.BillActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION.toObject, includeInstance)
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
 * @return {!proto.messages.BillActionsResponse}
 */
proto.messages.BillActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.BillActionsResponse;
  return proto.messages.BillActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.BillActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.BillActionsResponse}
 */
proto.messages.BillActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION;
      reader.readMessage(value,dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.BillActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.BillActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.BillActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.BillActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.LU_CANCELLED_BILL_ACTION items = 1;
 * @return {!Array<!proto.dbmessages.LU_CANCELLED_BILL_ACTION>}
 */
proto.messages.BillActionsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.dbmessages.LU_CANCELLED_BILL_ACTION>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_ACTION, 1));
};


/**
 * @param {!Array<!proto.dbmessages.LU_CANCELLED_BILL_ACTION>} value
 * @return {!proto.messages.BillActionsResponse} returns this
*/
proto.messages.BillActionsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.LU_CANCELLED_BILL_ACTION=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.LU_CANCELLED_BILL_ACTION}
 */
proto.messages.BillActionsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.LU_CANCELLED_BILL_ACTION, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.BillActionsResponse} returns this
 */
proto.messages.BillActionsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.BillStatesResponse.repeatedFields_ = [1];



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
proto.messages.BillStatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.BillStatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.BillStatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.BillStatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE.toObject, includeInstance)
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
 * @return {!proto.messages.BillStatesResponse}
 */
proto.messages.BillStatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.BillStatesResponse;
  return proto.messages.BillStatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.BillStatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.BillStatesResponse}
 */
proto.messages.BillStatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE;
      reader.readMessage(value,dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.BillStatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.BillStatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.BillStatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.BillStatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.LU_CANCELLED_BILL_STATE items = 1;
 * @return {!Array<!proto.dbmessages.LU_CANCELLED_BILL_STATE>}
 */
proto.messages.BillStatesResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.dbmessages.LU_CANCELLED_BILL_STATE>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.LU_CANCELLED_BILL_STATE, 1));
};


/**
 * @param {!Array<!proto.dbmessages.LU_CANCELLED_BILL_STATE>} value
 * @return {!proto.messages.BillStatesResponse} returns this
*/
proto.messages.BillStatesResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.LU_CANCELLED_BILL_STATE=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.LU_CANCELLED_BILL_STATE}
 */
proto.messages.BillStatesResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.LU_CANCELLED_BILL_STATE, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.BillStatesResponse} returns this
 */
proto.messages.BillStatesResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.messages.ApplicationsReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationsReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationsReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationsReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    custkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    formNo: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    requestFrom: (f = msg.getRequestFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    requestTo: (f = msg.getRequestTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stampFrom: (f = msg.getStampFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stampTo: (f = msg.getStampTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stationNo: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    agreement: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    cancelation: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationsReportRequest}
 */
proto.messages.ApplicationsReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationsReportRequest;
  return proto.messages.ApplicationsReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationsReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationsReportRequest}
 */
proto.messages.ApplicationsReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormNo(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestFrom(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestTo(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStampFrom(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStampTo(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationNo(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgreement(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelation(value);
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
proto.messages.ApplicationsReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationsReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationsReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationsReportRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRequestFrom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRequestTo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStampFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStampTo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.messages.ApplicationsReportRequest.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setState = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearState = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custkey = 2;
 * @return {string}
 */
proto.messages.ApplicationsReportRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 form_no = 3;
 * @return {number}
 */
proto.messages.ApplicationsReportRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp request_from = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.ApplicationsReportRequest.prototype.getRequestFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
*/
proto.messages.ApplicationsReportRequest.prototype.setRequestFrom = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearRequestFrom = function() {
  return this.setRequestFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasRequestFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp request_to = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.ApplicationsReportRequest.prototype.getRequestTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
*/
proto.messages.ApplicationsReportRequest.prototype.setRequestTo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearRequestTo = function() {
  return this.setRequestTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasRequestTo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp stamp_from = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.ApplicationsReportRequest.prototype.getStampFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
*/
proto.messages.ApplicationsReportRequest.prototype.setStampFrom = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearStampFrom = function() {
  return this.setStampFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasStampFrom = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp stamp_to = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.ApplicationsReportRequest.prototype.getStampTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
*/
proto.messages.ApplicationsReportRequest.prototype.setStampTo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearStampTo = function() {
  return this.setStampTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasStampTo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 station_no = 8;
 * @return {number}
 */
proto.messages.ApplicationsReportRequest.prototype.getStationNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setStationNo = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearStationNo = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasStationNo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 application_type_id = 9;
 * @return {number}
 */
proto.messages.ApplicationsReportRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool AGREEMENT = 10;
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.getAgreement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setAgreement = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearAgreement = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasAgreement = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool CANCELATION = 11;
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.getCancelation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.setCancelation = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationsReportRequest} returns this
 */
proto.messages.ApplicationsReportRequest.prototype.clearCancelation = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationsReportRequest.prototype.hasCancelation = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.ApplicationsReportResponse.repeatedFields_ = [1];



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
proto.messages.ApplicationsReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationsReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationsReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationsReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    serverhostmessages_collectionmessages_pb.CollectionDestributionItem.toObject, includeInstance)
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
 * @return {!proto.messages.ApplicationsReportResponse}
 */
proto.messages.ApplicationsReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationsReportResponse;
  return proto.messages.ApplicationsReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationsReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationsReportResponse}
 */
proto.messages.ApplicationsReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.CollectionDestributionItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.ApplicationsReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationsReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationsReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationsReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      serverhostmessages_collectionmessages_pb.CollectionDestributionItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated serverhostmessages.CollectionDestributionItem items = 1;
 * @return {!Array<!proto.serverhostmessages.CollectionDestributionItem>}
 */
proto.messages.ApplicationsReportResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.CollectionDestributionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.CollectionDestributionItem, 1));
};


/**
 * @param {!Array<!proto.serverhostmessages.CollectionDestributionItem>} value
 * @return {!proto.messages.ApplicationsReportResponse} returns this
*/
proto.messages.ApplicationsReportResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.serverhostmessages.CollectionDestributionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.CollectionDestributionItem}
 */
proto.messages.ApplicationsReportResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.serverhostmessages.CollectionDestributionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.ApplicationsReportResponse} returns this
 */
proto.messages.ApplicationsReportResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetStationsResponse.repeatedFields_ = [1];



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
proto.messages.GetStationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetStationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetStationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetStationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stationsList: jspb.Message.toObjectList(msg.getStationsList(),
    proto.messages.Station.toObject, includeInstance)
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
 * @return {!proto.messages.GetStationsResponse}
 */
proto.messages.GetStationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetStationsResponse;
  return proto.messages.GetStationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetStationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetStationsResponse}
 */
proto.messages.GetStationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.Station;
      reader.readMessage(value,proto.messages.Station.deserializeBinaryFromReader);
      msg.addStations(value);
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
proto.messages.GetStationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetStationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetStationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetStationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.Station.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Station stations = 1;
 * @return {!Array<!proto.messages.Station>}
 */
proto.messages.GetStationsResponse.prototype.getStationsList = function() {
  return /** @type{!Array<!proto.messages.Station>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.Station, 1));
};


/**
 * @param {!Array<!proto.messages.Station>} value
 * @return {!proto.messages.GetStationsResponse} returns this
*/
proto.messages.GetStationsResponse.prototype.setStationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.Station=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.Station}
 */
proto.messages.GetStationsResponse.prototype.addStations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.Station, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetStationsResponse} returns this
 */
proto.messages.GetStationsResponse.prototype.clearStationsList = function() {
  return this.setStationsList([]);
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
proto.messages.Station.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.Station.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.Station} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.Station.toObject = function(includeInstance, msg) {
  var f, obj = {
    stationNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ishead: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.Station}
 */
proto.messages.Station.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.Station;
  return proto.messages.Station.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.Station} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.Station}
 */
proto.messages.Station.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIshead(value);
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
proto.messages.Station.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.Station.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.Station} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.Station.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * required int32 station_no = 1;
 * @return {number}
 */
proto.messages.Station.prototype.getStationNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.setStationNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.clearStationNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.Station.prototype.hasStationNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.messages.Station.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.Station.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool IsHead = 3;
 * @return {boolean}
 */
proto.messages.Station.prototype.getIshead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.setIshead = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.Station} returns this
 */
proto.messages.Station.prototype.clearIshead = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.Station.prototype.hasIshead = function() {
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
proto.messages.GetFormNoPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetFormNoPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetFormNoPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    formNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    custkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    stampFrom: (f = msg.getStampFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stampTo: (f = msg.getStampTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    reqFrom: (f = msg.getReqFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    reqTo: (f = msg.getReqTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    witholdnewbills: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    stationno: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    agreement: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    tahselFrom: (f = msg.getTahselFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tahselTo: (f = msg.getTahselTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    cancelation: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f
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
 * @return {!proto.messages.GetFormNoPaymentsRequest}
 */
proto.messages.GetFormNoPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetFormNoPaymentsRequest;
  return proto.messages.GetFormNoPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetFormNoPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetFormNoPaymentsRequest}
 */
proto.messages.GetFormNoPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStampFrom(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStampTo(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReqFrom(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReqTo(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWitholdnewbills(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationno(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgreement(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTahselFrom(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTahselTo(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelation(value);
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
proto.messages.GetFormNoPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetFormNoPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetFormNoPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getStampFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStampTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReqFrom();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReqTo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
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
  f = message.getTahselFrom();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTahselTo();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional int64 form_no = 1;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custkey = 2;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp stamp_from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getStampFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setStampFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearStampFrom = function() {
  return this.setStampFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasStampFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp stamp_to = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getStampTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setStampTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearStampTo = function() {
  return this.setStampTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasStampTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp req_from = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getReqFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setReqFrom = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearReqFrom = function() {
  return this.setReqFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasReqFrom = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp req_to = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getReqTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setReqTo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearReqTo = function() {
  return this.setReqTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasReqTo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required bool WithOldNewBills = 7;
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getWitholdnewbills = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setWitholdnewbills = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearWitholdnewbills = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasWitholdnewbills = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 StationNo = 8;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getStationno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setStationno = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearStationno = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasStationno = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 application_type_id = 9;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool AGREEMENT = 10;
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getAgreement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setAgreement = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearAgreement = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasAgreement = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp tahsel_from = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getTahselFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setTahselFrom = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearTahselFrom = function() {
  return this.setTahselFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasTahselFrom = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp tahsel_to = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getTahselTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
*/
proto.messages.GetFormNoPaymentsRequest.prototype.setTahselTo = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearTahselTo = function() {
  return this.setTahselTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasTahselTo = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool CANCELATION = 13;
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.getCancelation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.setCancelation = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsRequest} returns this
 */
proto.messages.GetFormNoPaymentsRequest.prototype.clearCancelation = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsRequest.prototype.hasCancelation = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.messages.ReportPayment.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ReportPayment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ReportPayment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ReportPayment.toObject = function(includeInstance, msg) {
  var f, obj = {
    report: msg.getReport_asB64(),
    totalcount: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    seq: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    ext: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.messages.ReportPayment}
 */
proto.messages.ReportPayment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ReportPayment;
  return proto.messages.ReportPayment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ReportPayment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ReportPayment}
 */
proto.messages.ReportPayment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReport(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
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
proto.messages.ReportPayment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ReportPayment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ReportPayment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ReportPayment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
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
 * required bytes Report = 1;
 * @return {!(string|Uint8Array)}
 */
proto.messages.ReportPayment.prototype.getReport = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * required bytes Report = 1;
 * This is a type-conversion wrapper around `getReport()`
 * @return {string}
 */
proto.messages.ReportPayment.prototype.getReport_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReport()));
};


/**
 * required bytes Report = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReport()`
 * @return {!Uint8Array}
 */
proto.messages.ReportPayment.prototype.getReport_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReport()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.setReport = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.clearReport = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ReportPayment.prototype.hasReport = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 TotalCount = 2;
 * @return {number}
 */
proto.messages.ReportPayment.prototype.getTotalcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.setTotalcount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.clearTotalcount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ReportPayment.prototype.hasTotalcount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 SEQ = 3;
 * @return {number}
 */
proto.messages.ReportPayment.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.setSeq = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.clearSeq = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ReportPayment.prototype.hasSeq = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required string EXT = 4;
 * @return {string}
 */
proto.messages.ReportPayment.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.setExt = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ReportPayment} returns this
 */
proto.messages.ReportPayment.prototype.clearExt = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ReportPayment.prototype.hasExt = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetFormNoPaymentsResponse.repeatedFields_ = [1];



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
proto.messages.GetFormNoPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetFormNoPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetFormNoPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    formsList: jspb.Message.toObjectList(msg.getFormsList(),
    proto.messages.GetFormNoPaymentsResponseItem.toObject, includeInstance)
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
 * @return {!proto.messages.GetFormNoPaymentsResponse}
 */
proto.messages.GetFormNoPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetFormNoPaymentsResponse;
  return proto.messages.GetFormNoPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetFormNoPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetFormNoPaymentsResponse}
 */
proto.messages.GetFormNoPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.GetFormNoPaymentsResponseItem;
      reader.readMessage(value,proto.messages.GetFormNoPaymentsResponseItem.deserializeBinaryFromReader);
      msg.addForms(value);
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
proto.messages.GetFormNoPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetFormNoPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetFormNoPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.GetFormNoPaymentsResponseItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetFormNoPaymentsResponseItem Forms = 1;
 * @return {!Array<!proto.messages.GetFormNoPaymentsResponseItem>}
 */
proto.messages.GetFormNoPaymentsResponse.prototype.getFormsList = function() {
  return /** @type{!Array<!proto.messages.GetFormNoPaymentsResponseItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.GetFormNoPaymentsResponseItem, 1));
};


/**
 * @param {!Array<!proto.messages.GetFormNoPaymentsResponseItem>} value
 * @return {!proto.messages.GetFormNoPaymentsResponse} returns this
*/
proto.messages.GetFormNoPaymentsResponse.prototype.setFormsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.GetFormNoPaymentsResponseItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.GetFormNoPaymentsResponseItem}
 */
proto.messages.GetFormNoPaymentsResponse.prototype.addForms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.GetFormNoPaymentsResponseItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetFormNoPaymentsResponse} returns this
 */
proto.messages.GetFormNoPaymentsResponse.prototype.clearFormsList = function() {
  return this.setFormsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetFormNoPaymentsResponseItem.repeatedFields_ = [7];



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
proto.messages.GetFormNoPaymentsResponseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetFormNoPaymentsResponseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetFormNoPaymentsResponseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsResponseItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    formno: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    custkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    documentNo: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    requestDate: (f = msg.getRequestDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastDate: (f = msg.getLastDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    countpayments: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    serverhostmessages_collectionmessages_pb.OldNewItem.toObject, includeInstance),
    stationname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    stationno: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    statusname: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    requestComment: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    tele: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    nid: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    email: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    agreement: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    actionComment: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    tahselDate: (f = msg.getTahselDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    cancelation: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f
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
 * @return {!proto.messages.GetFormNoPaymentsResponseItem}
 */
proto.messages.GetFormNoPaymentsResponseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetFormNoPaymentsResponseItem;
  return proto.messages.GetFormNoPaymentsResponseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetFormNoPaymentsResponseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem}
 */
proto.messages.GetFormNoPaymentsResponseItem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCustkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentNo(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastDate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountpayments(value);
      break;
    case 7:
      var value = new serverhostmessages_collectionmessages_pb.OldNewItem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.OldNewItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStationname(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationno(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusname(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestComment(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTele(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setNid(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgreement(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionComment(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTahselDate(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelation(value);
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
proto.messages.GetFormNoPaymentsResponseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetFormNoPaymentsResponseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetFormNoPaymentsResponseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFormNoPaymentsResponseItem.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRequestDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      serverhostmessages_collectionmessages_pb.OldNewItem.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getTahselDate();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
 * optional int64 FormNo = 1;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getFormno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setFormno = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearFormno = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasFormno = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custkey = 2;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string DOCUMENT_NO = 3;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getDocumentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setDocumentNo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearDocumentNo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasDocumentNo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp REQUEST_DATE = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getRequestDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
*/
proto.messages.GetFormNoPaymentsResponseItem.prototype.setRequestDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearRequestDate = function() {
  return this.setRequestDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasRequestDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp Last_DATE = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getLastDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
*/
proto.messages.GetFormNoPaymentsResponseItem.prototype.setLastDate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearLastDate = function() {
  return this.setLastDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasLastDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 CountPayments = 6;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getCountpayments = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setCountpayments = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearCountpayments = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasCountpayments = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated serverhostmessages.OldNewItem items = 7;
 * @return {!Array<!proto.serverhostmessages.OldNewItem>}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.OldNewItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.OldNewItem, 7));
};


/**
 * @param {!Array<!proto.serverhostmessages.OldNewItem>} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
*/
proto.messages.GetFormNoPaymentsResponseItem.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.serverhostmessages.OldNewItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.OldNewItem}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.serverhostmessages.OldNewItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional string StationName = 8;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getStationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setStationname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearStationname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasStationname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 StationNo = 9;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getStationno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setStationno = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearStationno = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasStationno = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 Status = 10;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string StatusName = 11;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getStatusname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setStatusname = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearStatusname = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasStatusname = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 application_type_id = 12;
 * @return {number}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string request_comment = 13;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getRequestComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setRequestComment = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearRequestComment = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasRequestComment = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string ADDRESS = 14;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string TELE = 15;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getTele = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setTele = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearTele = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasTele = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string NID = 16;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getNid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setNid = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearNid = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasNid = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string EMAIL = 17;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool AGREEMENT = 18;
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getAgreement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setAgreement = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearAgreement = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasAgreement = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string ACTION_COMMENT = 19;
 * @return {string}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getActionComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setActionComment = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearActionComment = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasActionComment = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.Timestamp TAHSEL_DATE = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getTahselDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
*/
proto.messages.GetFormNoPaymentsResponseItem.prototype.setTahselDate = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearTahselDate = function() {
  return this.setTahselDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasTahselDate = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool CANCELATION = 21;
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.getCancelation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.setCancelation = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFormNoPaymentsResponseItem} returns this
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.clearCancelation = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFormNoPaymentsResponseItem.prototype.hasCancelation = function() {
  return jspb.Message.getField(this, 21) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.ApplicationTypesRs.repeatedFields_ = [1];



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
proto.messages.ApplicationTypesRs.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationTypesRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationTypesRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationTypesRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationtypesList: jspb.Message.toObjectList(msg.getApplicationtypesList(),
    dbmessages_collectionmessages_pb.ApplicationType.toObject, includeInstance)
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
 * @return {!proto.messages.ApplicationTypesRs}
 */
proto.messages.ApplicationTypesRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationTypesRs;
  return proto.messages.ApplicationTypesRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationTypesRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationTypesRs}
 */
proto.messages.ApplicationTypesRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.ApplicationType;
      reader.readMessage(value,dbmessages_collectionmessages_pb.ApplicationType.deserializeBinaryFromReader);
      msg.addApplicationtypes(value);
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
proto.messages.ApplicationTypesRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationTypesRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationTypesRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationTypesRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationtypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.ApplicationType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.ApplicationType ApplicationTypes = 1;
 * @return {!Array<!proto.dbmessages.ApplicationType>}
 */
proto.messages.ApplicationTypesRs.prototype.getApplicationtypesList = function() {
  return /** @type{!Array<!proto.dbmessages.ApplicationType>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.ApplicationType, 1));
};


/**
 * @param {!Array<!proto.dbmessages.ApplicationType>} value
 * @return {!proto.messages.ApplicationTypesRs} returns this
*/
proto.messages.ApplicationTypesRs.prototype.setApplicationtypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.ApplicationType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.ApplicationType}
 */
proto.messages.ApplicationTypesRs.prototype.addApplicationtypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.ApplicationType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.ApplicationTypesRs} returns this
 */
proto.messages.ApplicationTypesRs.prototype.clearApplicationtypesList = function() {
  return this.setApplicationtypesList([]);
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
proto.messages.SaveApplicationTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.SaveApplicationTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.SaveApplicationTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SaveApplicationTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationtypes: (f = msg.getApplicationtypes()) && dbmessages_collectionmessages_pb.ApplicationType.toObject(includeInstance, f)
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
 * @return {!proto.messages.SaveApplicationTypeRequest}
 */
proto.messages.SaveApplicationTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.SaveApplicationTypeRequest;
  return proto.messages.SaveApplicationTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.SaveApplicationTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.SaveApplicationTypeRequest}
 */
proto.messages.SaveApplicationTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.ApplicationType;
      reader.readMessage(value,dbmessages_collectionmessages_pb.ApplicationType.deserializeBinaryFromReader);
      msg.setApplicationtypes(value);
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
proto.messages.SaveApplicationTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.SaveApplicationTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.SaveApplicationTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SaveApplicationTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationtypes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.ApplicationType.serializeBinaryToWriter
    );
  }
};


/**
 * optional dbmessages.ApplicationType ApplicationTypes = 1;
 * @return {?proto.dbmessages.ApplicationType}
 */
proto.messages.SaveApplicationTypeRequest.prototype.getApplicationtypes = function() {
  return /** @type{?proto.dbmessages.ApplicationType} */ (
    jspb.Message.getWrapperField(this, dbmessages_collectionmessages_pb.ApplicationType, 1));
};


/**
 * @param {?proto.dbmessages.ApplicationType|undefined} value
 * @return {!proto.messages.SaveApplicationTypeRequest} returns this
*/
proto.messages.SaveApplicationTypeRequest.prototype.setApplicationtypes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.SaveApplicationTypeRequest} returns this
 */
proto.messages.SaveApplicationTypeRequest.prototype.clearApplicationtypes = function() {
  return this.setApplicationtypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SaveApplicationTypeRequest.prototype.hasApplicationtypes = function() {
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
proto.messages.GetUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    withlogo: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    withroles: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.GetUsersRequest}
 */
proto.messages.GetUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetUsersRequest;
  return proto.messages.GetUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetUsersRequest}
 */
proto.messages.GetUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithlogo(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithroles(value);
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
proto.messages.GetUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int32 UserID = 1;
 * @return {number}
 */
proto.messages.GetUsersRequest.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.setUserid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.clearUserid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUsersRequest.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool WithLogo = 2;
 * @return {boolean}
 */
proto.messages.GetUsersRequest.prototype.getWithlogo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.setWithlogo = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.clearWithlogo = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUsersRequest.prototype.hasWithlogo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool WithRoles = 3;
 * @return {boolean}
 */
proto.messages.GetUsersRequest.prototype.getWithroles = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.setWithroles = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUsersRequest} returns this
 */
proto.messages.GetUsersRequest.prototype.clearWithroles = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUsersRequest.prototype.hasWithroles = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetUserListResponse.repeatedFields_ = [1];



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
proto.messages.GetUserListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetUserListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetUserListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUserListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.messages.GetUserResponse.toObject, includeInstance)
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
 * @return {!proto.messages.GetUserListResponse}
 */
proto.messages.GetUserListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetUserListResponse;
  return proto.messages.GetUserListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetUserListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetUserListResponse}
 */
proto.messages.GetUserListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.GetUserResponse;
      reader.readMessage(value,proto.messages.GetUserResponse.deserializeBinaryFromReader);
      msg.addUsers(value);
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
proto.messages.GetUserListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetUserListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetUserListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUserListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.GetUserResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetUserResponse Users = 1;
 * @return {!Array<!proto.messages.GetUserResponse>}
 */
proto.messages.GetUserListResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.messages.GetUserResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.GetUserResponse, 1));
};


/**
 * @param {!Array<!proto.messages.GetUserResponse>} value
 * @return {!proto.messages.GetUserListResponse} returns this
*/
proto.messages.GetUserListResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.GetUserResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.GetUserResponse}
 */
proto.messages.GetUserListResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.GetUserResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetUserListResponse} returns this
 */
proto.messages.GetUserListResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetUserResponse.repeatedFields_ = [9];



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
proto.messages.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    stationmo: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    stationname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    companyname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    companylogo: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    departmentid: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    departmentname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    applicationTypeRolesList: jspb.Message.toObjectList(msg.getApplicationTypeRolesList(),
    proto.messages.ApplicationTypeRole.toObject, includeInstance),
    userprivcy: (f = msg.getUserprivcy()) && proto.messages.UserPrivcy.toObject(includeInstance, f),
    userfullname: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.messages.GetUserResponse}
 */
proto.messages.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetUserResponse;
  return proto.messages.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetUserResponse}
 */
proto.messages.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationmo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStationname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanylogo(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepartmentid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepartmentname(value);
      break;
    case 9:
      var value = new proto.messages.ApplicationTypeRole;
      reader.readMessage(value,proto.messages.ApplicationTypeRole.deserializeBinaryFromReader);
      msg.addApplicationTypeRoles(value);
      break;
    case 10:
      var value = new proto.messages.UserPrivcy;
      reader.readMessage(value,proto.messages.UserPrivcy.deserializeBinaryFromReader);
      msg.setUserprivcy(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserfullname(value);
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
proto.messages.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
  f = message.getApplicationTypeRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.messages.ApplicationTypeRole.serializeBinaryToWriter
    );
  }
  f = message.getUserprivcy();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.messages.UserPrivcy.serializeBinaryToWriter
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
 * optional int32 userID = 1;
 * @return {number}
 */
proto.messages.GetUserResponse.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setUserid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearUserid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string UserName = 2;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 StationMo = 3;
 * @return {number}
 */
proto.messages.GetUserResponse.prototype.getStationmo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setStationmo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearStationmo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasStationmo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string StationName = 4;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getStationname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setStationname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearStationname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasStationname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string CompanyName = 5;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getCompanyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setCompanyname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearCompanyname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasCompanyname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string CompanyLogo = 6;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getCompanylogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setCompanylogo = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearCompanylogo = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasCompanylogo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 DepartmentID = 7;
 * @return {number}
 */
proto.messages.GetUserResponse.prototype.getDepartmentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setDepartmentid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearDepartmentid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasDepartmentid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string DepartmentName = 8;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getDepartmentname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setDepartmentname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearDepartmentname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasDepartmentname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ApplicationTypeRole application_type_roles = 9;
 * @return {!Array<!proto.messages.ApplicationTypeRole>}
 */
proto.messages.GetUserResponse.prototype.getApplicationTypeRolesList = function() {
  return /** @type{!Array<!proto.messages.ApplicationTypeRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.ApplicationTypeRole, 9));
};


/**
 * @param {!Array<!proto.messages.ApplicationTypeRole>} value
 * @return {!proto.messages.GetUserResponse} returns this
*/
proto.messages.GetUserResponse.prototype.setApplicationTypeRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.messages.ApplicationTypeRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.ApplicationTypeRole}
 */
proto.messages.GetUserResponse.prototype.addApplicationTypeRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.messages.ApplicationTypeRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearApplicationTypeRolesList = function() {
  return this.setApplicationTypeRolesList([]);
};


/**
 * optional UserPrivcy UserPrivcy = 10;
 * @return {?proto.messages.UserPrivcy}
 */
proto.messages.GetUserResponse.prototype.getUserprivcy = function() {
  return /** @type{?proto.messages.UserPrivcy} */ (
    jspb.Message.getWrapperField(this, proto.messages.UserPrivcy, 10));
};


/**
 * @param {?proto.messages.UserPrivcy|undefined} value
 * @return {!proto.messages.GetUserResponse} returns this
*/
proto.messages.GetUserResponse.prototype.setUserprivcy = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearUserprivcy = function() {
  return this.setUserprivcy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasUserprivcy = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string UserFullName = 11;
 * @return {string}
 */
proto.messages.GetUserResponse.prototype.getUserfullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.setUserfullname = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetUserResponse} returns this
 */
proto.messages.GetUserResponse.prototype.clearUserfullname = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetUserResponse.prototype.hasUserfullname = function() {
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
proto.messages.UserPrivcy.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.UserPrivcy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.UserPrivcy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.UserPrivcy.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleteapplication: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    biller: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    createapplication: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    editapplication: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    cancelapplication: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    sysAdmin: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    userManagement: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    custMod: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    reportMod: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.messages.UserPrivcy}
 */
proto.messages.UserPrivcy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.UserPrivcy;
  return proto.messages.UserPrivcy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.UserPrivcy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.UserPrivcy}
 */
proto.messages.UserPrivcy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteapplication(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBiller(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateapplication(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditapplication(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelapplication(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSysAdmin(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserManagement(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustMod(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReportMod(value);
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
proto.messages.UserPrivcy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.UserPrivcy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.UserPrivcy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.UserPrivcy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional bool DeleteApplication = 1;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getDeleteapplication = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setDeleteapplication = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearDeleteapplication = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasDeleteapplication = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool Biller = 2;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getBiller = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setBiller = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearBiller = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasBiller = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool CreateApplication = 3;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getCreateapplication = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setCreateapplication = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearCreateapplication = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasCreateapplication = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool EditApplication = 4;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getEditapplication = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setEditapplication = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearEditapplication = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasEditapplication = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool CancelApplication = 5;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getCancelapplication = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setCancelapplication = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearCancelapplication = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasCancelapplication = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool SYS_ADMIN = 6;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getSysAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setSysAdmin = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearSysAdmin = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasSysAdmin = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool USER_MANAGEMENT = 7;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getUserManagement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setUserManagement = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearUserManagement = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasUserManagement = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool CUST_MOD = 8;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getCustMod = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setCustMod = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearCustMod = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasCustMod = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool REPORT_MOD = 9;
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.getReportMod = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.setReportMod = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.UserPrivcy} returns this
 */
proto.messages.UserPrivcy.prototype.clearReportMod = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.UserPrivcy.prototype.hasReportMod = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.ApplicationTypeRole.repeatedFields_ = [1];



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
proto.messages.ApplicationTypeRole.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationTypeRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationTypeRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationTypeRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationRolesList: jspb.Message.toObjectList(msg.getApplicationRolesList(),
    proto.messages.ApplicationRoleState.toObject, includeInstance),
    applicationtypeid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    applicationtypename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationTypeRole}
 */
proto.messages.ApplicationTypeRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationTypeRole;
  return proto.messages.ApplicationTypeRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationTypeRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationTypeRole}
 */
proto.messages.ApplicationTypeRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.ApplicationRoleState;
      reader.readMessage(value,proto.messages.ApplicationRoleState.deserializeBinaryFromReader);
      msg.addApplicationRoles(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationtypeid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationtypename(value);
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
proto.messages.ApplicationTypeRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationTypeRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationTypeRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationTypeRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.ApplicationRoleState.serializeBinaryToWriter
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
};


/**
 * repeated ApplicationRoleState application_roles = 1;
 * @return {!Array<!proto.messages.ApplicationRoleState>}
 */
proto.messages.ApplicationTypeRole.prototype.getApplicationRolesList = function() {
  return /** @type{!Array<!proto.messages.ApplicationRoleState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.ApplicationRoleState, 1));
};


/**
 * @param {!Array<!proto.messages.ApplicationRoleState>} value
 * @return {!proto.messages.ApplicationTypeRole} returns this
*/
proto.messages.ApplicationTypeRole.prototype.setApplicationRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.ApplicationRoleState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.ApplicationRoleState}
 */
proto.messages.ApplicationTypeRole.prototype.addApplicationRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.ApplicationRoleState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.ApplicationTypeRole} returns this
 */
proto.messages.ApplicationTypeRole.prototype.clearApplicationRolesList = function() {
  return this.setApplicationRolesList([]);
};


/**
 * optional int32 ApplicationTypeID = 2;
 * @return {number}
 */
proto.messages.ApplicationTypeRole.prototype.getApplicationtypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationTypeRole} returns this
 */
proto.messages.ApplicationTypeRole.prototype.setApplicationtypeid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationTypeRole} returns this
 */
proto.messages.ApplicationTypeRole.prototype.clearApplicationtypeid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationTypeRole.prototype.hasApplicationtypeid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ApplicationTypeName = 3;
 * @return {string}
 */
proto.messages.ApplicationTypeRole.prototype.getApplicationtypename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationTypeRole} returns this
 */
proto.messages.ApplicationTypeRole.prototype.setApplicationtypename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationTypeRole} returns this
 */
proto.messages.ApplicationTypeRole.prototype.clearApplicationtypename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationTypeRole.prototype.hasApplicationtypename = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.ApplicationRoleState.repeatedFields_ = [1];



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
proto.messages.ApplicationRoleState.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationRoleState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationRoleState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRoleState.toObject = function(includeInstance, msg) {
  var f, obj = {
    stateRolesList: jspb.Message.toObjectList(msg.getStateRolesList(),
    proto.messages.ApplicationRole.toObject, includeInstance),
    stateid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    statename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    applicationtypeid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationRoleState}
 */
proto.messages.ApplicationRoleState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationRoleState;
  return proto.messages.ApplicationRoleState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationRoleState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationRoleState}
 */
proto.messages.ApplicationRoleState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.ApplicationRole;
      reader.readMessage(value,proto.messages.ApplicationRole.deserializeBinaryFromReader);
      msg.addStateRoles(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStateid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationtypeid(value);
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
proto.messages.ApplicationRoleState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationRoleState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationRoleState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRoleState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStateRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.ApplicationRole.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated ApplicationRole state_roles = 1;
 * @return {!Array<!proto.messages.ApplicationRole>}
 */
proto.messages.ApplicationRoleState.prototype.getStateRolesList = function() {
  return /** @type{!Array<!proto.messages.ApplicationRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.ApplicationRole, 1));
};


/**
 * @param {!Array<!proto.messages.ApplicationRole>} value
 * @return {!proto.messages.ApplicationRoleState} returns this
*/
proto.messages.ApplicationRoleState.prototype.setStateRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.ApplicationRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.ApplicationRole}
 */
proto.messages.ApplicationRoleState.prototype.addStateRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.ApplicationRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.clearStateRolesList = function() {
  return this.setStateRolesList([]);
};


/**
 * optional int32 StateID = 2;
 * @return {number}
 */
proto.messages.ApplicationRoleState.prototype.getStateid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.setStateid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.clearStateid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRoleState.prototype.hasStateid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string StateName = 3;
 * @return {string}
 */
proto.messages.ApplicationRoleState.prototype.getStatename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.setStatename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.clearStatename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRoleState.prototype.hasStatename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 ApplicationTypeID = 4;
 * @return {number}
 */
proto.messages.ApplicationRoleState.prototype.getApplicationtypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.setApplicationtypeid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRoleState} returns this
 */
proto.messages.ApplicationRoleState.prototype.clearApplicationtypeid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRoleState.prototype.hasApplicationtypeid = function() {
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
proto.messages.ApplicationRole.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ApplicationRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ApplicationRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    actionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    actiondone: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    actionview: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    actionduration: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    actionDurationType: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    stateid: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.messages.ApplicationRole}
 */
proto.messages.ApplicationRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ApplicationRole;
  return proto.messages.ApplicationRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ApplicationRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ApplicationRole}
 */
proto.messages.ApplicationRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActiondone(value);
      break;
    case 4:
      var value = /** @type {!proto.messages.ActionView} */ (reader.readEnum());
      msg.setActionview(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActionduration(value);
      break;
    case 6:
      var value = /** @type {!proto.dbmessages.DurationType} */ (reader.readEnum());
      msg.setActionDurationType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStateid(value);
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
proto.messages.ApplicationRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ApplicationRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ApplicationRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ApplicationRole.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {!proto.messages.ActionView} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {!proto.dbmessages.DurationType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 ActionID = 1;
 * @return {number}
 */
proto.messages.ApplicationRole.prototype.getActionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActionid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActionid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActionid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ActionName = 2;
 * @return {string}
 */
proto.messages.ApplicationRole.prototype.getActionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool ActionDone = 3;
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.getActiondone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActiondone = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActiondone = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActiondone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActionView ActionView = 4;
 * @return {!proto.messages.ActionView}
 */
proto.messages.ApplicationRole.prototype.getActionview = function() {
  return /** @type {!proto.messages.ActionView} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.messages.ActionView} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActionview = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActionview = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActionview = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 ActionDuration = 5;
 * @return {number}
 */
proto.messages.ApplicationRole.prototype.getActionduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActionduration = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActionduration = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActionduration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional dbmessages.DurationType Action_Duration_Type = 6;
 * @return {!proto.dbmessages.DurationType}
 */
proto.messages.ApplicationRole.prototype.getActionDurationType = function() {
  return /** @type {!proto.dbmessages.DurationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.dbmessages.DurationType} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setActionDurationType = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearActionDurationType = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasActionDurationType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 StateID = 7;
 * @return {number}
 */
proto.messages.ApplicationRole.prototype.getStateid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.setStateid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ApplicationRole} returns this
 */
proto.messages.ApplicationRole.prototype.clearStateid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ApplicationRole.prototype.hasStateid = function() {
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
proto.messages.CancelApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.CancelApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.CancelApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.CancelApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationtypeid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    formno: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.messages.CancelApplicationRequest}
 */
proto.messages.CancelApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.CancelApplicationRequest;
  return proto.messages.CancelApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.CancelApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.CancelApplicationRequest}
 */
proto.messages.CancelApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationtypeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormno(value);
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
proto.messages.CancelApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.CancelApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.CancelApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.CancelApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * required int32 ApplicationTypeID = 1;
 * @return {number}
 */
proto.messages.CancelApplicationRequest.prototype.getApplicationtypeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.CancelApplicationRequest} returns this
 */
proto.messages.CancelApplicationRequest.prototype.setApplicationtypeid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CancelApplicationRequest} returns this
 */
proto.messages.CancelApplicationRequest.prototype.clearApplicationtypeid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CancelApplicationRequest.prototype.hasApplicationtypeid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 FormNo = 2;
 * @return {number}
 */
proto.messages.CancelApplicationRequest.prototype.getFormno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.CancelApplicationRequest} returns this
 */
proto.messages.CancelApplicationRequest.prototype.setFormno = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CancelApplicationRequest} returns this
 */
proto.messages.CancelApplicationRequest.prototype.clearFormno = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CancelApplicationRequest.prototype.hasFormno = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetPaymentMethodsResponse.repeatedFields_ = [1];



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
proto.messages.GetPaymentMethodsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentMethodsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentMethodsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentMethodsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodslistList: jspb.Message.toObjectList(msg.getMethodslistList(),
    dbmessages_collectionmessages_pb.PAYMENT_METHOD.toObject, includeInstance)
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
 * @return {!proto.messages.GetPaymentMethodsResponse}
 */
proto.messages.GetPaymentMethodsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentMethodsResponse;
  return proto.messages.GetPaymentMethodsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentMethodsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentMethodsResponse}
 */
proto.messages.GetPaymentMethodsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.PAYMENT_METHOD;
      reader.readMessage(value,dbmessages_collectionmessages_pb.PAYMENT_METHOD.deserializeBinaryFromReader);
      msg.addMethodslist(value);
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
proto.messages.GetPaymentMethodsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentMethodsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentMethodsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentMethodsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.PAYMENT_METHOD.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.PAYMENT_METHOD MethodsList = 1;
 * @return {!Array<!proto.dbmessages.PAYMENT_METHOD>}
 */
proto.messages.GetPaymentMethodsResponse.prototype.getMethodslistList = function() {
  return /** @type{!Array<!proto.dbmessages.PAYMENT_METHOD>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.PAYMENT_METHOD, 1));
};


/**
 * @param {!Array<!proto.dbmessages.PAYMENT_METHOD>} value
 * @return {!proto.messages.GetPaymentMethodsResponse} returns this
*/
proto.messages.GetPaymentMethodsResponse.prototype.setMethodslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.PAYMENT_METHOD=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.PAYMENT_METHOD}
 */
proto.messages.GetPaymentMethodsResponse.prototype.addMethodslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.PAYMENT_METHOD, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetPaymentMethodsResponse} returns this
 */
proto.messages.GetPaymentMethodsResponse.prototype.clearMethodslistList = function() {
  return this.setMethodslistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.SearchItem.repeatedFields_ = [12];



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
proto.messages.SearchItem.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.SearchItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.SearchItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    surname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    oldKey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    propRef: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    meterRef: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    billgroup: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    bookNo: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    walkNo: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    amountCollected: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
    clBlnce: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    billsList: jspb.Message.toObjectList(msg.getBillsList(),
    dbmessages_collectionmessages_pb.BILL.toObject, includeInstance)
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
 * @return {!proto.messages.SearchItem}
 */
proto.messages.SearchItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.SearchItem;
  return proto.messages.SearchItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.SearchItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.SearchItem}
 */
proto.messages.SearchItem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSurname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropRef(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeterRef(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroup(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookNo(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalkNo(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountCollected(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClBlnce(value);
      break;
    case 12:
      var value = new dbmessages_collectionmessages_pb.BILL;
      reader.readMessage(value,dbmessages_collectionmessages_pb.BILL.deserializeBinaryFromReader);
      msg.addBills(value);
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
proto.messages.SearchItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.SearchItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.SearchItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchItem.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getBillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      dbmessages_collectionmessages_pb.BILL.serializeBinaryToWriter
    );
  }
};


/**
 * optional string CUSTKEY = 1;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string SURNAME = 2;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string OLD_KEY = 3;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getOldKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setOldKey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearOldKey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasOldKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string PROP_REF = 4;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getPropRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setPropRef = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearPropRef = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasPropRef = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string ADDRESS = 5;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string METER_REF = 6;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getMeterRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setMeterRef = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearMeterRef = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasMeterRef = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string BILLGROUP = 7;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getBillgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setBillgroup = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearBillgroup = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasBillgroup = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string BOOK_NO = 8;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getBookNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setBookNo = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearBookNo = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasBookNo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string WALK_NO = 9;
 * @return {string}
 */
proto.messages.SearchItem.prototype.getWalkNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setWalkNo = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearWalkNo = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasWalkNo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double AMOUNT_COLLECTED = 10;
 * @return {number}
 */
proto.messages.SearchItem.prototype.getAmountCollected = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setAmountCollected = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearAmountCollected = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasAmountCollected = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double CL_BLNCE = 11;
 * @return {number}
 */
proto.messages.SearchItem.prototype.getClBlnce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.setClBlnce = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearClBlnce = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchItem.prototype.hasClBlnce = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated dbmessages.BILL BILLS = 12;
 * @return {!Array<!proto.dbmessages.BILL>}
 */
proto.messages.SearchItem.prototype.getBillsList = function() {
  return /** @type{!Array<!proto.dbmessages.BILL>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.BILL, 12));
};


/**
 * @param {!Array<!proto.dbmessages.BILL>} value
 * @return {!proto.messages.SearchItem} returns this
*/
proto.messages.SearchItem.prototype.setBillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.dbmessages.BILL=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.BILL}
 */
proto.messages.SearchItem.prototype.addBills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.dbmessages.BILL, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.SearchItem} returns this
 */
proto.messages.SearchItem.prototype.clearBillsList = function() {
  return this.setBillsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.SearchResult.repeatedFields_ = [2];



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
proto.messages.SearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.SearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.SearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.messages.SearchItem.toObject, includeInstance)
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
 * @return {!proto.messages.SearchResult}
 */
proto.messages.SearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.SearchResult;
  return proto.messages.SearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.SearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.SearchResult}
 */
proto.messages.SearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = new proto.messages.SearchItem;
      reader.readMessage(value,proto.messages.SearchItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.SearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.SearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.SearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.messages.SearchItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 COUNT = 1;
 * @return {number}
 */
proto.messages.SearchResult.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.SearchResult} returns this
 */
proto.messages.SearchResult.prototype.setCount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchResult} returns this
 */
proto.messages.SearchResult.prototype.clearCount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchResult.prototype.hasCount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SearchItem Items = 2;
 * @return {!Array<!proto.messages.SearchItem>}
 */
proto.messages.SearchResult.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.messages.SearchItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.SearchItem, 2));
};


/**
 * @param {!Array<!proto.messages.SearchItem>} value
 * @return {!proto.messages.SearchResult} returns this
*/
proto.messages.SearchResult.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.messages.SearchItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.SearchItem}
 */
proto.messages.SearchResult.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.messages.SearchItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.SearchResult} returns this
 */
proto.messages.SearchResult.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.messages.SearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.SearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.SearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    searchby: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    billgroupcode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    customerbookcode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    searchfilter: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.messages.SearchRequest}
 */
proto.messages.SearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.SearchRequest;
  return proto.messages.SearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.SearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.SearchRequest}
 */
proto.messages.SearchRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.messages.SearchBy} */ (reader.readEnum());
      msg.setSearchby(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroupcode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerbookcode(value);
      break;
    case 5:
      var value = /** @type {!proto.messages.SearchFilter} */ (reader.readEnum());
      msg.setSearchfilter(value);
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
proto.messages.SearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.SearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.SearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.SearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.messages.SearchBy} */ (jspb.Message.getField(message, 2));
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.messages.SearchFilter} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * required string Key = 1;
 * @return {string}
 */
proto.messages.SearchRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchRequest.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SearchBy searchBy = 2;
 * @return {!proto.messages.SearchBy}
 */
proto.messages.SearchRequest.prototype.getSearchby = function() {
  return /** @type {!proto.messages.SearchBy} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.messages.SearchBy} value
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.setSearchby = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.clearSearchby = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchRequest.prototype.hasSearchby = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string billgroupCode = 3;
 * @return {string}
 */
proto.messages.SearchRequest.prototype.getBillgroupcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.setBillgroupcode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.clearBillgroupcode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchRequest.prototype.hasBillgroupcode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string customerBookCode = 4;
 * @return {string}
 */
proto.messages.SearchRequest.prototype.getCustomerbookcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.setCustomerbookcode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.clearCustomerbookcode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchRequest.prototype.hasCustomerbookcode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SearchFilter searchFilter = 5;
 * @return {!proto.messages.SearchFilter}
 */
proto.messages.SearchRequest.prototype.getSearchfilter = function() {
  return /** @type {!proto.messages.SearchFilter} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.messages.SearchFilter} value
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.setSearchfilter = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.SearchRequest} returns this
 */
proto.messages.SearchRequest.prototype.clearSearchfilter = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.SearchRequest.prototype.hasSearchfilter = function() {
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
proto.messages.GETRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GETRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GETRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GETRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    cycleId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.messages.GETRequest}
 */
proto.messages.GETRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GETRequest;
  return proto.messages.GETRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GETRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GETRequest}
 */
proto.messages.GETRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCycleId(value);
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
proto.messages.GETRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GETRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GETRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GETRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required string custKey = 1;
 * @return {string}
 */
proto.messages.GETRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GETRequest} returns this
 */
proto.messages.GETRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GETRequest} returns this
 */
proto.messages.GETRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GETRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 CYCLE_ID = 2;
 * @return {number}
 */
proto.messages.GETRequest.prototype.getCycleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GETRequest} returns this
 */
proto.messages.GETRequest.prototype.setCycleId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GETRequest} returns this
 */
proto.messages.GETRequest.prototype.clearCycleId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GETRequest.prototype.hasCycleId = function() {
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
proto.messages.ListBillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.ListBillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.ListBillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ListBillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.ListBillsRequest}
 */
proto.messages.ListBillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.ListBillsRequest;
  return proto.messages.ListBillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.ListBillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.ListBillsRequest}
 */
proto.messages.ListBillsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.ListBillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.ListBillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.ListBillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.ListBillsRequest.serializeBinaryToWriter = function(message, writer) {
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
 * required string custKey = 1;
 * @return {string}
 */
proto.messages.ListBillsRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.ListBillsRequest} returns this
 */
proto.messages.ListBillsRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.ListBillsRequest} returns this
 */
proto.messages.ListBillsRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.ListBillsRequest.prototype.hasCustkey = function() {
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
proto.messages.GetFromBilngRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetFromBilngRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetFromBilngRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFromBilngRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.GetFromBilngRequest}
 */
proto.messages.GetFromBilngRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetFromBilngRequest;
  return proto.messages.GetFromBilngRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetFromBilngRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetFromBilngRequest}
 */
proto.messages.GetFromBilngRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.GetFromBilngRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetFromBilngRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetFromBilngRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetFromBilngRequest.serializeBinaryToWriter = function(message, writer) {
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
 * required string custKey = 1;
 * @return {string}
 */
proto.messages.GetFromBilngRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetFromBilngRequest} returns this
 */
proto.messages.GetFromBilngRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetFromBilngRequest} returns this
 */
proto.messages.GetFromBilngRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetFromBilngRequest.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.CustomerInfo.repeatedFields_ = [12,13,14];



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
proto.messages.CustomerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.CustomerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.CustomerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.CustomerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    propRef: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    billgroup: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    bookNo: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    walkNo: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    seqNo: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    prevCustkey: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    oldKey: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    surname: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    propinfo: (f = msg.getPropinfo()) && serverhostmessages_collectionmessages_pb.PropInfo.toObject(includeInstance, f),
    agreemsList: jspb.Message.toObjectList(msg.getAgreemsList(),
    serverhostmessages_collectionmessages_pb.CustAgreem.toObject, includeInstance),
    statmentsList: jspb.Message.toObjectList(msg.getStatmentsList(),
    serverhostmessages_collectionmessages_pb.STATMENT.toObject, includeInstance),
    allTransactionsList: jspb.Message.toObjectList(msg.getAllTransactionsList(),
    serverhostmessages_collectionmessages_pb.F_TRANSACTION.toObject, includeInstance)
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
 * @return {!proto.messages.CustomerInfo}
 */
proto.messages.CustomerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.CustomerInfo;
  return proto.messages.CustomerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.CustomerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.CustomerInfo}
 */
proto.messages.CustomerInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPropRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroup(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalkNo(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeqNo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevCustkey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 11:
      var value = new serverhostmessages_collectionmessages_pb.PropInfo;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.PropInfo.deserializeBinaryFromReader);
      msg.setPropinfo(value);
      break;
    case 12:
      var value = new serverhostmessages_collectionmessages_pb.CustAgreem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.CustAgreem.deserializeBinaryFromReader);
      msg.addAgreems(value);
      break;
    case 13:
      var value = new serverhostmessages_collectionmessages_pb.STATMENT;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.STATMENT.deserializeBinaryFromReader);
      msg.addStatments(value);
      break;
    case 14:
      var value = new serverhostmessages_collectionmessages_pb.F_TRANSACTION;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.F_TRANSACTION.deserializeBinaryFromReader);
      msg.addAllTransactions(value);
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
proto.messages.CustomerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.CustomerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.CustomerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.CustomerInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
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
  f = message.getPropinfo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      serverhostmessages_collectionmessages_pb.PropInfo.serializeBinaryToWriter
    );
  }
  f = message.getAgreemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      serverhostmessages_collectionmessages_pb.CustAgreem.serializeBinaryToWriter
    );
  }
  f = message.getStatmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      serverhostmessages_collectionmessages_pb.STATMENT.serializeBinaryToWriter
    );
  }
  f = message.getAllTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      serverhostmessages_collectionmessages_pb.F_TRANSACTION.serializeBinaryToWriter
    );
  }
};


/**
 * optional string CUSTKEY = 1;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string PROP_REF = 2;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getPropRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setPropRef = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearPropRef = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasPropRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string BILLGROUP = 3;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getBillgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setBillgroup = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearBillgroup = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasBillgroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string BOOK_NO = 4;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getBookNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setBookNo = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearBookNo = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasBookNo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string WALK_NO = 5;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getWalkNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setWalkNo = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearWalkNo = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasWalkNo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 SEQ_NO = 6;
 * @return {number}
 */
proto.messages.CustomerInfo.prototype.getSeqNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setSeqNo = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearSeqNo = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasSeqNo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string PREV_CUSTKEY = 7;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getPrevCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setPrevCustkey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearPrevCustkey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasPrevCustkey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string OLD_KEY = 8;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getOldKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setOldKey = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearOldKey = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasOldKey = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string SURNAME = 9;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setSurname = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearSurname = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasSurname = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string ADDRESS = 10;
 * @return {string}
 */
proto.messages.CustomerInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional serverhostmessages.PropInfo PropInfo = 11;
 * @return {?proto.serverhostmessages.PropInfo}
 */
proto.messages.CustomerInfo.prototype.getPropinfo = function() {
  return /** @type{?proto.serverhostmessages.PropInfo} */ (
    jspb.Message.getWrapperField(this, serverhostmessages_collectionmessages_pb.PropInfo, 11));
};


/**
 * @param {?proto.serverhostmessages.PropInfo|undefined} value
 * @return {!proto.messages.CustomerInfo} returns this
*/
proto.messages.CustomerInfo.prototype.setPropinfo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearPropinfo = function() {
  return this.setPropinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.CustomerInfo.prototype.hasPropinfo = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated serverhostmessages.CustAgreem AGREEMS = 12;
 * @return {!Array<!proto.serverhostmessages.CustAgreem>}
 */
proto.messages.CustomerInfo.prototype.getAgreemsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.CustAgreem>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.CustAgreem, 12));
};


/**
 * @param {!Array<!proto.serverhostmessages.CustAgreem>} value
 * @return {!proto.messages.CustomerInfo} returns this
*/
proto.messages.CustomerInfo.prototype.setAgreemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.serverhostmessages.CustAgreem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.CustAgreem}
 */
proto.messages.CustomerInfo.prototype.addAgreems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.serverhostmessages.CustAgreem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearAgreemsList = function() {
  return this.setAgreemsList([]);
};


/**
 * repeated serverhostmessages.STATMENT STATMENTS = 13;
 * @return {!Array<!proto.serverhostmessages.STATMENT>}
 */
proto.messages.CustomerInfo.prototype.getStatmentsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.STATMENT>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.STATMENT, 13));
};


/**
 * @param {!Array<!proto.serverhostmessages.STATMENT>} value
 * @return {!proto.messages.CustomerInfo} returns this
*/
proto.messages.CustomerInfo.prototype.setStatmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.serverhostmessages.STATMENT=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.STATMENT}
 */
proto.messages.CustomerInfo.prototype.addStatments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.serverhostmessages.STATMENT, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearStatmentsList = function() {
  return this.setStatmentsList([]);
};


/**
 * repeated serverhostmessages.F_TRANSACTION ALL_TRANSACTIONS = 14;
 * @return {!Array<!proto.serverhostmessages.F_TRANSACTION>}
 */
proto.messages.CustomerInfo.prototype.getAllTransactionsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.F_TRANSACTION>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.F_TRANSACTION, 14));
};


/**
 * @param {!Array<!proto.serverhostmessages.F_TRANSACTION>} value
 * @return {!proto.messages.CustomerInfo} returns this
*/
proto.messages.CustomerInfo.prototype.setAllTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.serverhostmessages.F_TRANSACTION=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.F_TRANSACTION}
 */
proto.messages.CustomerInfo.prototype.addAllTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.serverhostmessages.F_TRANSACTION, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.CustomerInfo} returns this
 */
proto.messages.CustomerInfo.prototype.clearAllTransactionsList = function() {
  return this.setAllTransactionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetPaymentForHqResponse.repeatedFields_ = [1];



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
proto.messages.GetPaymentForHqResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentForHqResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentForHqResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentForHqResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    serverhostmessages_collectionmessages_pb.CollectionDestributionItem.toObject, includeInstance)
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
 * @return {!proto.messages.GetPaymentForHqResponse}
 */
proto.messages.GetPaymentForHqResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentForHqResponse;
  return proto.messages.GetPaymentForHqResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentForHqResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentForHqResponse}
 */
proto.messages.GetPaymentForHqResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new serverhostmessages_collectionmessages_pb.CollectionDestributionItem;
      reader.readMessage(value,serverhostmessages_collectionmessages_pb.CollectionDestributionItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.GetPaymentForHqResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentForHqResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentForHqResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentForHqResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      serverhostmessages_collectionmessages_pb.CollectionDestributionItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated serverhostmessages.CollectionDestributionItem items = 1;
 * @return {!Array<!proto.serverhostmessages.CollectionDestributionItem>}
 */
proto.messages.GetPaymentForHqResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.serverhostmessages.CollectionDestributionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, serverhostmessages_collectionmessages_pb.CollectionDestributionItem, 1));
};


/**
 * @param {!Array<!proto.serverhostmessages.CollectionDestributionItem>} value
 * @return {!proto.messages.GetPaymentForHqResponse} returns this
*/
proto.messages.GetPaymentForHqResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.serverhostmessages.CollectionDestributionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.serverhostmessages.CollectionDestributionItem}
 */
proto.messages.GetPaymentForHqResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.serverhostmessages.CollectionDestributionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetPaymentForHqResponse} returns this
 */
proto.messages.GetPaymentForHqResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.messages.GetPaymentActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentNo: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    formNo: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    applicationTypeId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.GetPaymentActionsRequest}
 */
proto.messages.GetPaymentActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentActionsRequest;
  return proto.messages.GetPaymentActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentActionsRequest}
 */
proto.messages.GetPaymentActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentNo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFormNo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationTypeId(value);
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
proto.messages.GetPaymentActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentActionsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * required string payment_no = 1;
 * @return {string}
 */
proto.messages.GetPaymentActionsRequest.prototype.getPaymentNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.setPaymentNo = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.clearPaymentNo = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentActionsRequest.prototype.hasPaymentNo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 form_no = 2;
 * @return {number}
 */
proto.messages.GetPaymentActionsRequest.prototype.getFormNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.setFormNo = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.clearFormNo = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentActionsRequest.prototype.hasFormNo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 application_type_id = 3;
 * @return {number}
 */
proto.messages.GetPaymentActionsRequest.prototype.getApplicationTypeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.setApplicationTypeId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentActionsRequest} returns this
 */
proto.messages.GetPaymentActionsRequest.prototype.clearApplicationTypeId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentActionsRequest.prototype.hasApplicationTypeId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetPaymentActionsResponse.repeatedFields_ = [1];



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
proto.messages.GetPaymentActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetPaymentActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetPaymentActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION.toObject, includeInstance),
    billComment: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    requestComment: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.GetPaymentActionsResponse}
 */
proto.messages.GetPaymentActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetPaymentActionsResponse;
  return proto.messages.GetPaymentActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetPaymentActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetPaymentActionsResponse}
 */
proto.messages.GetPaymentActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION;
      reader.readMessage(value,dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillComment(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestComment(value);
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
proto.messages.GetPaymentActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetPaymentActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetPaymentActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetPaymentActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION.serializeBinaryToWriter
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
 * repeated dbmessages.CANCELLED_BILL_ACTION items = 1;
 * @return {!Array<!proto.dbmessages.CANCELLED_BILL_ACTION>}
 */
proto.messages.GetPaymentActionsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.dbmessages.CANCELLED_BILL_ACTION>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.CANCELLED_BILL_ACTION, 1));
};


/**
 * @param {!Array<!proto.dbmessages.CANCELLED_BILL_ACTION>} value
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
*/
proto.messages.GetPaymentActionsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.CANCELLED_BILL_ACTION=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.CANCELLED_BILL_ACTION}
 */
proto.messages.GetPaymentActionsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.CANCELLED_BILL_ACTION, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
 */
proto.messages.GetPaymentActionsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional string bill_comment = 2;
 * @return {string}
 */
proto.messages.GetPaymentActionsResponse.prototype.getBillComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
 */
proto.messages.GetPaymentActionsResponse.prototype.setBillComment = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
 */
proto.messages.GetPaymentActionsResponse.prototype.clearBillComment = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentActionsResponse.prototype.hasBillComment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string request_comment = 3;
 * @return {string}
 */
proto.messages.GetPaymentActionsResponse.prototype.getRequestComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
 */
proto.messages.GetPaymentActionsResponse.prototype.setRequestComment = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetPaymentActionsResponse} returns this
 */
proto.messages.GetPaymentActionsResponse.prototype.clearRequestComment = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetPaymentActionsResponse.prototype.hasRequestComment = function() {
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
proto.messages.GetCustomerBooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCustomerBooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCustomerBooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerBooksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    billgroupcode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.GetCustomerBooksRequest}
 */
proto.messages.GetCustomerBooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCustomerBooksRequest;
  return proto.messages.GetCustomerBooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCustomerBooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCustomerBooksRequest}
 */
proto.messages.GetCustomerBooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroupcode(value);
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
proto.messages.GetCustomerBooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCustomerBooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCustomerBooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerBooksRequest.serializeBinaryToWriter = function(message, writer) {
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
 * required string BillGroupCode = 1;
 * @return {string}
 */
proto.messages.GetCustomerBooksRequest.prototype.getBillgroupcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerBooksRequest} returns this
 */
proto.messages.GetCustomerBooksRequest.prototype.setBillgroupcode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerBooksRequest} returns this
 */
proto.messages.GetCustomerBooksRequest.prototype.clearBillgroupcode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerBooksRequest.prototype.hasBillgroupcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.LookUpMessage.repeatedFields_ = [1];



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
proto.messages.LookUpMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.LookUpMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.LookUpMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.LookUpMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.messages.LookUpItem.toObject, includeInstance)
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
 * @return {!proto.messages.LookUpMessage}
 */
proto.messages.LookUpMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.LookUpMessage;
  return proto.messages.LookUpMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.LookUpMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.LookUpMessage}
 */
proto.messages.LookUpMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.LookUpItem;
      reader.readMessage(value,proto.messages.LookUpItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.messages.LookUpMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.LookUpMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.LookUpMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.LookUpMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.LookUpItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LookUpItem items = 1;
 * @return {!Array<!proto.messages.LookUpItem>}
 */
proto.messages.LookUpMessage.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.messages.LookUpItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.LookUpItem, 1));
};


/**
 * @param {!Array<!proto.messages.LookUpItem>} value
 * @return {!proto.messages.LookUpMessage} returns this
*/
proto.messages.LookUpMessage.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.LookUpItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.LookUpItem}
 */
proto.messages.LookUpMessage.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.LookUpItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.LookUpMessage} returns this
 */
proto.messages.LookUpMessage.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.messages.LookUpItem.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.LookUpItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.LookUpItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.LookUpItem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.messages.LookUpItem}
 */
proto.messages.LookUpItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.LookUpItem;
  return proto.messages.LookUpItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.LookUpItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.LookUpItem}
 */
proto.messages.LookUpItem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.LookUpItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.LookUpItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.LookUpItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.LookUpItem.serializeBinaryToWriter = function(message, writer) {
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
proto.messages.LookUpItem.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.LookUpItem} returns this
 */
proto.messages.LookUpItem.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.LookUpItem} returns this
 */
proto.messages.LookUpItem.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.LookUpItem.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string Description = 2;
 * @return {string}
 */
proto.messages.LookUpItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.LookUpItem} returns this
 */
proto.messages.LookUpItem.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.LookUpItem} returns this
 */
proto.messages.LookUpItem.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.LookUpItem.prototype.hasDescription = function() {
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
proto.messages.GetCustomerDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCustomerDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCustomerDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.GetCustomerDetailRequest}
 */
proto.messages.GetCustomerDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCustomerDetailRequest;
  return proto.messages.GetCustomerDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCustomerDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCustomerDetailRequest}
 */
proto.messages.GetCustomerDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.GetCustomerDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCustomerDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCustomerDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerDetailRequest.serializeBinaryToWriter = function(message, writer) {
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
 * required string Custkey = 1;
 * @return {string}
 */
proto.messages.GetCustomerDetailRequest.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailRequest} returns this
 */
proto.messages.GetCustomerDetailRequest.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailRequest} returns this
 */
proto.messages.GetCustomerDetailRequest.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailRequest.prototype.hasCustkey = function() {
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
proto.messages.GetCustomerDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCustomerDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCustomerDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    custkey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    stationNo: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    stationName: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    billgroup: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.messages.GetCustomerDetailResponse}
 */
proto.messages.GetCustomerDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCustomerDetailResponse;
  return proto.messages.GetCustomerDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCustomerDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCustomerDetailResponse}
 */
proto.messages.GetCustomerDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStationNo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStationName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillgroup(value);
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
proto.messages.GetCustomerDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCustomerDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCustomerDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCustomerDetailResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
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
 * required string Custkey = 1;
 * @return {string}
 */
proto.messages.GetCustomerDetailResponse.prototype.getCustkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setCustkey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearCustkey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasCustkey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.messages.GetCustomerDetailResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Address = 3;
 * @return {string}
 */
proto.messages.GetCustomerDetailResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 Station_No = 4;
 * @return {number}
 */
proto.messages.GetCustomerDetailResponse.prototype.getStationNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setStationNo = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearStationNo = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasStationNo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Station_Name = 5;
 * @return {string}
 */
proto.messages.GetCustomerDetailResponse.prototype.getStationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setStationName = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearStationName = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasStationName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string BillGroup = 6;
 * @return {string}
 */
proto.messages.GetCustomerDetailResponse.prototype.getBillgroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.setBillgroup = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetCustomerDetailResponse} returns this
 */
proto.messages.GetCustomerDetailResponse.prototype.clearBillgroup = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetCustomerDetailResponse.prototype.hasBillgroup = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GategoryTypesRs.repeatedFields_ = [1];



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
proto.messages.GategoryTypesRs.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GategoryTypesRs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GategoryTypesRs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryTypesRs.toObject = function(includeInstance, msg) {
  var f, obj = {
    gategorytypesList: jspb.Message.toObjectList(msg.getGategorytypesList(),
    proto.messages.GategoryType.toObject, includeInstance)
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
 * @return {!proto.messages.GategoryTypesRs}
 */
proto.messages.GategoryTypesRs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GategoryTypesRs;
  return proto.messages.GategoryTypesRs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GategoryTypesRs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GategoryTypesRs}
 */
proto.messages.GategoryTypesRs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.messages.GategoryType;
      reader.readMessage(value,proto.messages.GategoryType.deserializeBinaryFromReader);
      msg.addGategorytypes(value);
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
proto.messages.GategoryTypesRs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GategoryTypesRs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GategoryTypesRs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryTypesRs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGategorytypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.messages.GategoryType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GategoryType GategoryTypes = 1;
 * @return {!Array<!proto.messages.GategoryType>}
 */
proto.messages.GategoryTypesRs.prototype.getGategorytypesList = function() {
  return /** @type{!Array<!proto.messages.GategoryType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.messages.GategoryType, 1));
};


/**
 * @param {!Array<!proto.messages.GategoryType>} value
 * @return {!proto.messages.GategoryTypesRs} returns this
*/
proto.messages.GategoryTypesRs.prototype.setGategorytypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.messages.GategoryType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.messages.GategoryType}
 */
proto.messages.GategoryTypesRs.prototype.addGategorytypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.messages.GategoryType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GategoryTypesRs} returns this
 */
proto.messages.GategoryTypesRs.prototype.clearGategorytypesList = function() {
  return this.setGategorytypesList([]);
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
proto.messages.GategoryType.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GategoryType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GategoryType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    isTop: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.messages.GategoryType}
 */
proto.messages.GategoryType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GategoryType;
  return proto.messages.GategoryType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GategoryType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GategoryType}
 */
proto.messages.GategoryType.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTop(value);
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
proto.messages.GategoryType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GategoryType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GategoryType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryType.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * required int32 ID = 1;
 * @return {number}
 */
proto.messages.GategoryType.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GategoryType.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.messages.GategoryType.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GategoryType.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool Is_Top = 3;
 * @return {boolean}
 */
proto.messages.GategoryType.prototype.getIsTop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.setIsTop = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GategoryType} returns this
 */
proto.messages.GategoryType.prototype.clearIsTop = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GategoryType.prototype.hasIsTop = function() {
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
proto.messages.GetProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    productCategoryId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.GetProductsRequest}
 */
proto.messages.GetProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetProductsRequest;
  return proto.messages.GetProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetProductsRequest}
 */
proto.messages.GetProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProductCategoryId(value);
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
proto.messages.GetProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 PRODUCT_CATEGORY_ID = 1;
 * @return {number}
 */
proto.messages.GetProductsRequest.prototype.getProductCategoryId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GetProductsRequest} returns this
 */
proto.messages.GetProductsRequest.prototype.setProductCategoryId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetProductsRequest} returns this
 */
proto.messages.GetProductsRequest.prototype.clearProductCategoryId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetProductsRequest.prototype.hasProductCategoryId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetProductsResponse.repeatedFields_ = [1];



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
proto.messages.GetProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    dbmessages_collectionmessages_pb.PRODUCTS.toObject, includeInstance)
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
 * @return {!proto.messages.GetProductsResponse}
 */
proto.messages.GetProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetProductsResponse;
  return proto.messages.GetProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetProductsResponse}
 */
proto.messages.GetProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.PRODUCTS;
      reader.readMessage(value,dbmessages_collectionmessages_pb.PRODUCTS.deserializeBinaryFromReader);
      msg.addProducts(value);
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
proto.messages.GetProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.PRODUCTS.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.PRODUCTS PRODUCTS = 1;
 * @return {!Array<!proto.dbmessages.PRODUCTS>}
 */
proto.messages.GetProductsResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.dbmessages.PRODUCTS>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.PRODUCTS, 1));
};


/**
 * @param {!Array<!proto.dbmessages.PRODUCTS>} value
 * @return {!proto.messages.GetProductsResponse} returns this
*/
proto.messages.GetProductsResponse.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.PRODUCTS=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.PRODUCTS}
 */
proto.messages.GetProductsResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.PRODUCTS, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetProductsResponse} returns this
 */
proto.messages.GetProductsResponse.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetCategoryProductResponse.repeatedFields_ = [1];



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
proto.messages.GetCategoryProductResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetCategoryProductResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetCategoryProductResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCategoryProductResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    dbmessages_collectionmessages_pb.PRODUCT_CATEGORY.toObject, includeInstance)
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
 * @return {!proto.messages.GetCategoryProductResponse}
 */
proto.messages.GetCategoryProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetCategoryProductResponse;
  return proto.messages.GetCategoryProductResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetCategoryProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetCategoryProductResponse}
 */
proto.messages.GetCategoryProductResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.PRODUCT_CATEGORY;
      reader.readMessage(value,dbmessages_collectionmessages_pb.PRODUCT_CATEGORY.deserializeBinaryFromReader);
      msg.addCategories(value);
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
proto.messages.GetCategoryProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetCategoryProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetCategoryProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetCategoryProductResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.PRODUCT_CATEGORY.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.PRODUCT_CATEGORY CATEGORIES = 1;
 * @return {!Array<!proto.dbmessages.PRODUCT_CATEGORY>}
 */
proto.messages.GetCategoryProductResponse.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.dbmessages.PRODUCT_CATEGORY>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.PRODUCT_CATEGORY, 1));
};


/**
 * @param {!Array<!proto.dbmessages.PRODUCT_CATEGORY>} value
 * @return {!proto.messages.GetCategoryProductResponse} returns this
*/
proto.messages.GetCategoryProductResponse.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.PRODUCT_CATEGORY=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.PRODUCT_CATEGORY}
 */
proto.messages.GetCategoryProductResponse.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.PRODUCT_CATEGORY, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetCategoryProductResponse} returns this
 */
proto.messages.GetCategoryProductResponse.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetMetaDataResponse.repeatedFields_ = [1];



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
proto.messages.GetMetaDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetMetaDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetMetaDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetMetaDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    metasList: jspb.Message.toObjectList(msg.getMetasList(),
    dbmessages_collectionmessages_pb.META_DATA.toObject, includeInstance)
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
 * @return {!proto.messages.GetMetaDataResponse}
 */
proto.messages.GetMetaDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetMetaDataResponse;
  return proto.messages.GetMetaDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetMetaDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetMetaDataResponse}
 */
proto.messages.GetMetaDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.META_DATA;
      reader.readMessage(value,dbmessages_collectionmessages_pb.META_DATA.deserializeBinaryFromReader);
      msg.addMetas(value);
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
proto.messages.GetMetaDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetMetaDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetMetaDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetMetaDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.META_DATA.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.META_DATA METAS = 1;
 * @return {!Array<!proto.dbmessages.META_DATA>}
 */
proto.messages.GetMetaDataResponse.prototype.getMetasList = function() {
  return /** @type{!Array<!proto.dbmessages.META_DATA>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.META_DATA, 1));
};


/**
 * @param {!Array<!proto.dbmessages.META_DATA>} value
 * @return {!proto.messages.GetMetaDataResponse} returns this
*/
proto.messages.GetMetaDataResponse.prototype.setMetasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.META_DATA=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.META_DATA}
 */
proto.messages.GetMetaDataResponse.prototype.addMetas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.META_DATA, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetMetaDataResponse} returns this
 */
proto.messages.GetMetaDataResponse.prototype.clearMetasList = function() {
  return this.setMetasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetDataSourceResponse.repeatedFields_ = [1];



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
proto.messages.GetDataSourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetDataSourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetDataSourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasourcesList: jspb.Message.toObjectList(msg.getDatasourcesList(),
    dbmessages_collectionmessages_pb.DATASOURCE.toObject, includeInstance)
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
 * @return {!proto.messages.GetDataSourceResponse}
 */
proto.messages.GetDataSourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetDataSourceResponse;
  return proto.messages.GetDataSourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetDataSourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetDataSourceResponse}
 */
proto.messages.GetDataSourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.DATASOURCE;
      reader.readMessage(value,dbmessages_collectionmessages_pb.DATASOURCE.deserializeBinaryFromReader);
      msg.addDatasources(value);
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
proto.messages.GetDataSourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetDataSourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetDataSourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.DATASOURCE.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.DATASOURCE DATASOURCES = 1;
 * @return {!Array<!proto.dbmessages.DATASOURCE>}
 */
proto.messages.GetDataSourceResponse.prototype.getDatasourcesList = function() {
  return /** @type{!Array<!proto.dbmessages.DATASOURCE>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.DATASOURCE, 1));
};


/**
 * @param {!Array<!proto.dbmessages.DATASOURCE>} value
 * @return {!proto.messages.GetDataSourceResponse} returns this
*/
proto.messages.GetDataSourceResponse.prototype.setDatasourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.DATASOURCE=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.DATASOURCE}
 */
proto.messages.GetDataSourceResponse.prototype.addDatasources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.DATASOURCE, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetDataSourceResponse} returns this
 */
proto.messages.GetDataSourceResponse.prototype.clearDatasourcesList = function() {
  return this.setDatasourcesList([]);
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
proto.messages.GetDataSourceDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetDataSourceDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetDataSourceDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasourceName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    detailParent: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.messages.GetDataSourceDetailRequest}
 */
proto.messages.GetDataSourceDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetDataSourceDetailRequest;
  return proto.messages.GetDataSourceDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetDataSourceDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetDataSourceDetailRequest}
 */
proto.messages.GetDataSourceDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetailParent(value);
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
proto.messages.GetDataSourceDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetDataSourceDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetDataSourceDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceDetailRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional string DATASOURCE_NAME = 1;
 * @return {string}
 */
proto.messages.GetDataSourceDetailRequest.prototype.getDatasourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetDataSourceDetailRequest} returns this
 */
proto.messages.GetDataSourceDetailRequest.prototype.setDatasourceName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetDataSourceDetailRequest} returns this
 */
proto.messages.GetDataSourceDetailRequest.prototype.clearDatasourceName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetDataSourceDetailRequest.prototype.hasDatasourceName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string DETAIL_PARENT = 2;
 * @return {string}
 */
proto.messages.GetDataSourceDetailRequest.prototype.getDetailParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.messages.GetDataSourceDetailRequest} returns this
 */
proto.messages.GetDataSourceDetailRequest.prototype.setDetailParent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GetDataSourceDetailRequest} returns this
 */
proto.messages.GetDataSourceDetailRequest.prototype.clearDetailParent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GetDataSourceDetailRequest.prototype.hasDetailParent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.messages.GetDataSourceDetailResponse.repeatedFields_ = [1];



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
proto.messages.GetDataSourceDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GetDataSourceDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GetDataSourceDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasourceDetailsList: jspb.Message.toObjectList(msg.getDatasourceDetailsList(),
    dbmessages_collectionmessages_pb.DATASOURCE_DETAIL.toObject, includeInstance)
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
 * @return {!proto.messages.GetDataSourceDetailResponse}
 */
proto.messages.GetDataSourceDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GetDataSourceDetailResponse;
  return proto.messages.GetDataSourceDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GetDataSourceDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GetDataSourceDetailResponse}
 */
proto.messages.GetDataSourceDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dbmessages_collectionmessages_pb.DATASOURCE_DETAIL;
      reader.readMessage(value,dbmessages_collectionmessages_pb.DATASOURCE_DETAIL.deserializeBinaryFromReader);
      msg.addDatasourceDetails(value);
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
proto.messages.GetDataSourceDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GetDataSourceDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GetDataSourceDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GetDataSourceDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasourceDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      dbmessages_collectionmessages_pb.DATASOURCE_DETAIL.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dbmessages.DATASOURCE_DETAIL DATASOURCE_DETAILS = 1;
 * @return {!Array<!proto.dbmessages.DATASOURCE_DETAIL>}
 */
proto.messages.GetDataSourceDetailResponse.prototype.getDatasourceDetailsList = function() {
  return /** @type{!Array<!proto.dbmessages.DATASOURCE_DETAIL>} */ (
    jspb.Message.getRepeatedWrapperField(this, dbmessages_collectionmessages_pb.DATASOURCE_DETAIL, 1));
};


/**
 * @param {!Array<!proto.dbmessages.DATASOURCE_DETAIL>} value
 * @return {!proto.messages.GetDataSourceDetailResponse} returns this
*/
proto.messages.GetDataSourceDetailResponse.prototype.setDatasourceDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.dbmessages.DATASOURCE_DETAIL=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dbmessages.DATASOURCE_DETAIL}
 */
proto.messages.GetDataSourceDetailResponse.prototype.addDatasourceDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.dbmessages.DATASOURCE_DETAIL, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.messages.GetDataSourceDetailResponse} returns this
 */
proto.messages.GetDataSourceDetailResponse.prototype.clearDatasourceDetailsList = function() {
  return this.setDatasourceDetailsList([]);
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
proto.messages.GategoryTypeID.prototype.toObject = function(opt_includeInstance) {
  return proto.messages.GategoryTypeID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.messages.GategoryTypeID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryTypeID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.messages.GategoryTypeID}
 */
proto.messages.GategoryTypeID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.messages.GategoryTypeID;
  return proto.messages.GategoryTypeID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.messages.GategoryTypeID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.messages.GategoryTypeID}
 */
proto.messages.GategoryTypeID.deserializeBinaryFromReader = function(msg, reader) {
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
proto.messages.GategoryTypeID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.messages.GategoryTypeID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.messages.GategoryTypeID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.messages.GategoryTypeID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 ID = 1;
 * @return {number}
 */
proto.messages.GategoryTypeID.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.messages.GategoryTypeID} returns this
 */
proto.messages.GategoryTypeID.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.messages.GategoryTypeID} returns this
 */
proto.messages.GategoryTypeID.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.messages.GategoryTypeID.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.messages.ActionView = {
  ONEVIEW: 1,
  TWOVIEW: 2,
  THREEVIEW: 3,
  NOVIEW: 0
};

/**
 * @enum {number}
 */
proto.messages.SearchFilter = {
  EQUAL: 0,
  CONTAIN: 1,
  START_WITH: 2,
  END_WITH: 3
};

/**
 * @enum {number}
 */
proto.messages.SearchBy = {
  CUSTKEY: 0,
  PAYMENT_NO: 1,
  OLD_KEY: 2,
  METER_REF: 3,
  PROP_REF: 4,
  SURNAME: 5,
  ADDRESS: 6
};

/**
 * @enum {number}
 */
proto.messages.BILLING_ISSUE_TYPE = {
  UNDEFINED: -1,
  ACCUMLATED: 0,
  SINGLE: 1
};

goog.object.extend(exports, proto.messages);
