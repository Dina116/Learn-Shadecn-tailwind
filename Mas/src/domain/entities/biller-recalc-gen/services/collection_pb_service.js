// package: services
// file: services/collection.proto

var services_collection_pb = require("../services/collection_pb");
var messages_collectionmessages_pb = require("../messages/collectionmessages_pb");
var serverhostmessages_collectionmessages_pb = require("../serverhostmessages/collectionmessages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var collectionService = (function () {
  function collectionService() {}
  collectionService.serviceName = "services.collectionService";
  return collectionService;
}());

collectionService.GetPaymentMethods = {
  methodName: "GetPaymentMethods",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: messages_collectionmessages_pb.Empty,
  responseType: messages_collectionmessages_pb.GetPaymentMethodsResponse
};

collectionService.GetCashierBalance = {
  methodName: "GetCashierBalance",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: services_collection_pb.GetCashierBalanceRequest,
  responseType: serverhostmessages_collectionmessages_pb.CashierBalance
};

collectionService.GetPaymentForHq = {
  methodName: "GetPaymentForHq",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: services_collection_pb.GetPaymentForHqRequest,
  responseType: messages_collectionmessages_pb.GetPaymentForHqResponse
};

collectionService.CalcCharge = {
  methodName: "CalcCharge",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: services_collection_pb.CalcChargeRequest,
  responseType: services_collection_pb.CalcChargeResponse
};

collectionService.HqCollectBill = {
  methodName: "HqCollectBill",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: services_collection_pb.HqCollectBillRequest,
  responseType: serverhostmessages_collectionmessages_pb.CollectionDestributionItem
};

collectionService.Info = {
  methodName: "Info",
  service: collectionService,
  requestStream: false,
  responseStream: false,
  requestType: messages_collectionmessages_pb.Empty,
  responseType: messages_collectionmessages_pb.ServiceInfo
};

exports.collectionService = collectionService;

function collectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

collectionServiceClient.prototype.getPaymentMethods = function getPaymentMethods(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.GetPaymentMethods, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

collectionServiceClient.prototype.getCashierBalance = function getCashierBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.GetCashierBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

collectionServiceClient.prototype.getPaymentForHq = function getPaymentForHq(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.GetPaymentForHq, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

collectionServiceClient.prototype.calcCharge = function calcCharge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.CalcCharge, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

collectionServiceClient.prototype.hqCollectBill = function hqCollectBill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.HqCollectBill, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

collectionServiceClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(collectionService.Info, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.collectionServiceClient = collectionServiceClient;

