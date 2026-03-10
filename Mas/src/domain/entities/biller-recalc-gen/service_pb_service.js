// package: billing
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingChargeService = (function () {
  function BillingChargeService() {}
  BillingChargeService.serviceName = "billing.BillingChargeService";
  return BillingChargeService;
}());

BillingChargeService.Info = {
  methodName: "Info",
  service: BillingChargeService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

BillingChargeService.Charge = {
  methodName: "Charge",
  service: BillingChargeService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.ChargeRequest,
  responseType: service_pb.BillResponce
};

BillingChargeService.Setup = {
  methodName: "Setup",
  service: BillingChargeService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.SetupData,
  responseType: service_pb.Empty
};

exports.BillingChargeService = BillingChargeService;

function BillingChargeServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingChargeServiceClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingChargeService.Info, {
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

BillingChargeServiceClient.prototype.charge = function charge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingChargeService.Charge, {
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

BillingChargeServiceClient.prototype.setup = function setup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingChargeService.Setup, {
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

exports.BillingChargeServiceClient = BillingChargeServiceClient;

var BillingTariffProvider = (function () {
  function BillingTariffProvider() {}
  BillingTariffProvider.serviceName = "billing.BillingTariffProvider";
  return BillingTariffProvider;
}());

BillingTariffProvider.Info = {
  methodName: "Info",
  service: BillingTariffProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

BillingTariffProvider.GetSetupData = {
  methodName: "GetSetupData",
  service: BillingTariffProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.SetupData
};

exports.BillingTariffProvider = BillingTariffProvider;

function BillingTariffProviderClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingTariffProviderClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingTariffProvider.Info, {
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

BillingTariffProviderClient.prototype.getSetupData = function getSetupData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingTariffProvider.GetSetupData, {
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

exports.BillingTariffProviderClient = BillingTariffProviderClient;

var BillingDataProvider = (function () {
  function BillingDataProvider() {}
  BillingDataProvider.serviceName = "billing.BillingDataProvider";
  return BillingDataProvider;
}());

BillingDataProvider.Info = {
  methodName: "Info",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

BillingDataProvider.GetCustomerByCustkey = {
  methodName: "GetCustomerByCustkey",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Key,
  responseType: service_pb.Customer
};

BillingDataProvider.GetCustomersByBillgroup = {
  methodName: "GetCustomersByBillgroup",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Key,
  responseType: service_pb.CustomersList
};

BillingDataProvider.GetLoockup = {
  methodName: "GetLoockup",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Entity,
  responseType: service_pb.LookUpsResponce
};

BillingDataProvider.GetCtgs = {
  methodName: "GetCtgs",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.CtgsResponce
};

BillingDataProvider.GetBillsByCustkey = {
  methodName: "GetBillsByCustkey",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.GetBillRequest,
  responseType: service_pb.BillResponce
};

BillingDataProvider.GetBillsByFormNo = {
  methodName: "GetBillsByFormNo",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.GetBillRequest,
  responseType: service_pb.BillResponce
};

BillingDataProvider.Login = {
  methodName: "Login",
  service: BillingDataProvider,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.LoginRequest,
  responseType: service_pb.LoginResponce
};

exports.BillingDataProvider = BillingDataProvider;

function BillingDataProviderClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingDataProviderClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.Info, {
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

BillingDataProviderClient.prototype.getCustomerByCustkey = function getCustomerByCustkey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetCustomerByCustkey, {
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

BillingDataProviderClient.prototype.getCustomersByBillgroup = function getCustomersByBillgroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetCustomersByBillgroup, {
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

BillingDataProviderClient.prototype.getLoockup = function getLoockup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetLoockup, {
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

BillingDataProviderClient.prototype.getCtgs = function getCtgs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetCtgs, {
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

BillingDataProviderClient.prototype.getBillsByCustkey = function getBillsByCustkey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetBillsByCustkey, {
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

BillingDataProviderClient.prototype.getBillsByFormNo = function getBillsByFormNo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.GetBillsByFormNo, {
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

BillingDataProviderClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataProvider.Login, {
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

exports.BillingDataProviderClient = BillingDataProviderClient;

var BillingDataCousumer = (function () {
  function BillingDataCousumer() {}
  BillingDataCousumer.serviceName = "billing.BillingDataCousumer";
  return BillingDataCousumer;
}());

BillingDataCousumer.Info = {
  methodName: "Info",
  service: BillingDataCousumer,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

BillingDataCousumer.WriteFinantialData = {
  methodName: "WriteFinantialData",
  service: BillingDataCousumer,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.PostMessage,
  responseType: service_pb.Empty
};

BillingDataCousumer.WriteFinantialDataOne = {
  methodName: "WriteFinantialDataOne",
  service: BillingDataCousumer,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.PostMessage,
  responseType: service_pb.Empty
};

exports.BillingDataCousumer = BillingDataCousumer;

function BillingDataCousumerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingDataCousumerClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataCousumer.Info, {
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

BillingDataCousumerClient.prototype.writeFinantialData = function writeFinantialData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataCousumer.WriteFinantialData, {
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

BillingDataCousumerClient.prototype.writeFinantialDataOne = function writeFinantialDataOne(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingDataCousumer.WriteFinantialDataOne, {
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

exports.BillingDataCousumerClient = BillingDataCousumerClient;

var Engine = (function () {
  function Engine() {}
  Engine.serviceName = "billing.Engine";
  return Engine;
}());

Engine.Info = {
  methodName: "Info",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

Engine.Calulate = {
  methodName: "Calulate",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.ChargeRequest,
  responseType: service_pb.BillResponce
};

Engine.Post = {
  methodName: "Post",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.PostMessage,
  responseType: service_pb.Empty
};

Engine.PostOne = {
  methodName: "PostOne",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.PostMessage,
  responseType: service_pb.Empty
};

Engine.GetCustomerByCustkey = {
  methodName: "GetCustomerByCustkey",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Key,
  responseType: service_pb.Customer
};

Engine.GetLoockup = {
  methodName: "GetLoockup",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Entity,
  responseType: service_pb.LookUpsResponce
};

Engine.GetCtgs = {
  methodName: "GetCtgs",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.CtgsResponce
};

Engine.GetBillsByCustkey = {
  methodName: "GetBillsByCustkey",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.GetBillRequest,
  responseType: service_pb.BillResponce
};

Engine.GetBillsByFormNo = {
  methodName: "GetBillsByFormNo",
  service: Engine,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.GetBillRequest,
  responseType: service_pb.BillResponce
};

exports.Engine = Engine;

function EngineClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EngineClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.Info, {
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

EngineClient.prototype.calulate = function calulate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.Calulate, {
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

EngineClient.prototype.post = function post(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.Post, {
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

EngineClient.prototype.postOne = function postOne(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.PostOne, {
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

EngineClient.prototype.getCustomerByCustkey = function getCustomerByCustkey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.GetCustomerByCustkey, {
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

EngineClient.prototype.getLoockup = function getLoockup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.GetLoockup, {
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

EngineClient.prototype.getCtgs = function getCtgs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.GetCtgs, {
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

EngineClient.prototype.getBillsByCustkey = function getBillsByCustkey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.GetBillsByCustkey, {
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

EngineClient.prototype.getBillsByFormNo = function getBillsByFormNo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Engine.GetBillsByFormNo, {
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

exports.EngineClient = EngineClient;

var LoginService = (function () {
  function LoginService() {}
  LoginService.serviceName = "billing.LoginService";
  return LoginService;
}());

LoginService.Login = {
  methodName: "Login",
  service: LoginService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.LoginRequest,
  responseType: service_pb.LoginResponce
};

LoginService.Info = {
  methodName: "Info",
  service: LoginService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.Empty,
  responseType: service_pb.ServiceInfo
};

exports.LoginService = LoginService;

function LoginServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoginService.Login, {
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

LoginServiceClient.prototype.info = function info(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LoginService.Info, {
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

exports.LoginServiceClient = LoginServiceClient;

