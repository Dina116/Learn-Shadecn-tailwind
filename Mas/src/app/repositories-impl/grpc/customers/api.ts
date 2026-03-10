/* eslint-disable @typescript-eslint/no-explicit-any */
import { MasCustomersClient } from 'grpc-web-client-gen/CustomersServiceClientPb';
import {
  ArrBILLING_GROUPS,
  ArrCustomersBills,
  ArrCustomersCrmBills,
  ArrSMS_SENT_DATA,
  ArrSMS_TEMPLATE,
  BILLING_GROUPS,
  CustkeyRq,
  CustomerBillsFilter,
  CustomerCrmFilter,
  Empty,
  LU_CTG,
  LU_CTGS,
  MessageResponse,
  SMS_SENT_DATA,
  SMS_TEMPLATE,
  SMS_TEMPLATE_ID,
  SMS_TYPE_REQ,
  StationNo,
} from 'grpc-web-client-gen/Customers_pb';
import { FormCustomerCrm, FormCustomerSms, FormDateTime } from './converter';
import { makeBaseUrl } from '@/app/services';
import { RequestMeta } from '../shared';

const client = new MasCustomersClient(
  `${makeBaseUrl()}:${import.meta.env.VITE_grpcPort}`,
);
export function getFilteredCustomersForCrmSMSApi(
  obj: CustomerCrmFilter.AsObject,
): Promise<ArrCustomersCrmBills.AsObject> {
  return new Promise<ArrCustomersCrmBills.AsObject>((resolve, reject) => {
    try {
      const req = new CustomerCrmFilter();
      req.setBillgroup(obj.billgroup!);
      req.setBookNo(obj.bookNo!);
      req.setCustkey(obj.custkey!);
      req.setFromDate(FormDateTime(obj.fromDate!));
      req.setToDate(FormDateTime(obj.toDate!));
      req.setLastNotifyDate(FormDateTime(obj.lastNotifyDate!));
      req.setPaymentDueDays(obj.paymentDueDays!);
      req.setSiteCodesList(obj.siteCodesList!);
      req.setStationNosList(obj.stationNosList!);
      const meta: any = RequestMeta();
      client.getFilteredCustomersForCrmSMS(
        req,
        meta,
        (err: any | null, resp: ArrCustomersCrmBills | null) => {
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
export function getFilteredCustomersSMSApi(
  obj: CustomerBillsFilter.AsObject,
): Promise<ArrCustomersBills.AsObject> {
  return new Promise<ArrCustomersBills.AsObject>((resolve, reject) => {
    try {
      const req = new CustomerBillsFilter();
      req.setBillgroup(obj.billgroup!);
      req.setBookNo(obj.bookNo!);
      req.setCustkey(obj.custkey!);
      req.setAmount(obj.amount!);
      req.setCtype(obj.ctype!);
      req.setIsMeterConnected(obj.isMeterConnected!);
      req.setLastBillDate(FormDateTime(obj.lastBillDate!));
      req.setLastCollectionDate(FormDateTime(obj.lastCollectionDate!));
      req.setLastNotifyDate(FormDateTime(obj.lastNotifyDate!));
      req.setOperator(obj.operator!);
      const meta: any = RequestMeta();
      client.getFilteredCustomersForSMS(
        req,
        meta,
        (err: any | null, resp: ArrCustomersBills | null) => {
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

export function sendCustomersCrmSMSApi(
  obj: ArrCustomersCrmBills.AsObject,
): Promise<MessageResponse.AsObject> {
  return new Promise<MessageResponse.AsObject>((resolve, reject) => {
    try {
      const req = new ArrCustomersCrmBills();
      req.setItemsList(obj.itemsList.map((it) => FormCustomerCrm(it)));
      req.setSmsTemplateId(obj.smsTemplateId!);
      req.setSmsType(obj.smsType!);
      req.setExpireDate(obj.expireDate!);
      console.log(req.toObject(), 'red');
      const meta: any = RequestMeta();
      client.sendCustomersCrmSMS(
        req,
        meta,
        (err: any | null, resp: MessageResponse | null) => {
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
export function sendCustomersSMSApi(
  obj: ArrCustomersBills.AsObject,
): Promise<MessageResponse.AsObject> {
  return new Promise<MessageResponse.AsObject>((resolve, reject) => {
    try {
      const req = new ArrCustomersBills();
      req.setItemsList(obj.itemsList.map((it) => FormCustomerSms(it)));
      req.setSmsTemplateId(obj.smsTemplateId!);
      req.setSmsType(obj.smsType!);
      req.setExpireDate(obj.expireDate!);
      const meta: any = RequestMeta();
      console.log(req.toObject(), 'reqsend');
      client.sendCustomersSMS(
        req,
        meta,
        (err: any | null, resp: MessageResponse | null) => {
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
export function getSMSACTIVETEMPLATESApi(): Promise<SMS_TEMPLATE.AsObject[]> {
  return new Promise<SMS_TEMPLATE.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getSMS_ACTIVE_TEMPLATES(
        req,
        meta,
        (err: any | null, resp: ArrSMS_TEMPLATE | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().smsTemplateList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getSMSDefaultTemplateApi(
  obj: SMS_TYPE_REQ.AsObject,
): Promise<SMS_TEMPLATE.AsObject> {
  return new Promise<SMS_TEMPLATE.AsObject>((resolve, reject) => {
    try {
      const req = new SMS_TYPE_REQ();
      req.setSmsType(obj.smsType!);
      const meta: any = RequestMeta();
      client.getSMS_DEFAULT_TEMPLATE(
        req,
        meta,
        (err: any | null, resp: SMS_TEMPLATE | null) => {
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
export function getSMSTemplateByIdApi(
  obj: SMS_TEMPLATE_ID.AsObject,
): Promise<SMS_TEMPLATE.AsObject> {
  return new Promise<SMS_TEMPLATE.AsObject>((resolve, reject) => {
    try {
      const req = new SMS_TEMPLATE_ID();
      req.setTemplateId(obj.templateId!);
      const meta: any = RequestMeta();
      client.getSMS_TEMPLATE_BY_ID(
        req,
        meta,
        (err: any | null, resp: SMS_TEMPLATE | null) => {
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
export function getAllSMSTemplateApi(
  obj: SMS_TYPE_REQ.AsObject,
): Promise<SMS_TEMPLATE.AsObject[]> {
  return new Promise<SMS_TEMPLATE.AsObject[]>((resolve, reject) => {
    try {
      const req = new SMS_TYPE_REQ();
      req.setSmsType(obj.smsType!);
      const meta: any = RequestMeta();
      client.getALLSMS_TEMPLATE(
        req,
        meta,
        (err: any | null, resp: ArrSMS_TEMPLATE | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().smsTemplateList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}

export function getSmsHistoryByCustkeyApi(
  obj: CustkeyRq.AsObject,
): Promise<SMS_SENT_DATA.AsObject[]> {
  return new Promise<SMS_SENT_DATA.AsObject[]>((resolve, reject) => {
    try {
      const req = new CustkeyRq();
      req.setCustkey(obj.custkey!);
      const meta: any = RequestMeta();
      client.getSmsHistoryByCustkey(
        req,
        meta,
        (err: any | null, resp: ArrSMS_SENT_DATA | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().smsSentDataList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
export function getLuCtgsApi(): Promise<LU_CTG.AsObject[]> {
  return new Promise<LU_CTG.AsObject[]>((resolve, reject) => {
    try {
      const req = new Empty();
      const meta: any = RequestMeta();
      client.getLuCtgs(req, meta, (err: any | null, resp: LU_CTGS | null) => {
        if (err != null) {
          reject(err);
        } else if (resp) {
          resolve(resp.toObject().luCtgList);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
export function createTemplateApi(
  obj: SMS_TEMPLATE.AsObject,
): Promise<MessageResponse.AsObject> {
  return new Promise<MessageResponse.AsObject>((resolve, reject) => {
    try {
      const req = new SMS_TEMPLATE();
      req.setExpiryDays(obj.expiryDays!);
      req.setIsActive(obj.isActive!);
      req.setIsDefault(obj.isDefault!);
      req.setIsSystem(obj.isSystem!);
      req.setSmsType(obj.smsType!);
      req.setTemplate(obj.template!);
      req.setTemplateDesc(obj.templateDesc!);
      req.setTemplateId(obj.templateId!);

      const meta: any = RequestMeta();
      client.createSMS_TEMPLATE(
        req,
        meta,
        (err: any | null, resp: MessageResponse | null) => {
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

export function updateTemplateApi(
  obj: SMS_TEMPLATE.AsObject,
): Promise<MessageResponse.AsObject> {
  return new Promise<MessageResponse.AsObject>((resolve, reject) => {
    try {
      const req = new SMS_TEMPLATE();
      req.setExpiryDays(obj.expiryDays!);
      req.setIsActive(obj.isActive!);
      req.setIsDefault(obj.isDefault!);
      req.setIsSystem(obj.isSystem!);
      req.setSmsType(obj.smsType!);
      req.setTemplate(obj.template!);
      req.setTemplateDesc(obj.templateDesc!);
      req.setTemplateId(obj.templateId!);
      console.log(req.toObject(), 'reqqqqqq');
      const meta: any = RequestMeta();
      client.updateSMS_TEMPLATE(
        req,
        meta,
        (err: any | null, resp: MessageResponse | null) => {
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
export function deleteTemplateApi(
  obj: SMS_TEMPLATE.AsObject,
): Promise<MessageResponse.AsObject> {
  return new Promise<MessageResponse.AsObject>((resolve, reject) => {
    try {
      const req = new SMS_TEMPLATE();
      req.setExpiryDays(obj.expiryDays!);
      req.setIsActive(obj.isActive!);
      req.setIsDefault(obj.isDefault!);
      req.setIsSystem(obj.isSystem!);
      req.setSmsType(obj.smsType!);
      req.setTemplate(obj.template!);
      req.setTemplateDesc(obj.templateDesc!);
      req.setTemplateId(obj.templateId!);

      const meta: any = RequestMeta();
      client.deleteSMS_TEMPLATE(
        req,
        meta,
        (err: any | null, resp: MessageResponse | null) => {
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

export function getAllBillGroupByStationApi(
  obj: StationNo.AsObject,
): Promise<BILLING_GROUPS.AsObject[]> {
  return new Promise<BILLING_GROUPS.AsObject[]>((resolve, reject) => {
    try {
      const req = new StationNo();
      req.setStationNo(obj.stationNo);
      const meta: any = RequestMeta();
      client.getAllBillgroupsByStation(
        req,
        meta,
        (err: any | null, resp: ArrBILLING_GROUPS | null) => {
          if (err != null) {
            reject(err);
          } else if (resp) {
            resolve(resp.toObject().billingGroupsList);
          }
        },
      );
    } catch (e) {
      reject(e);
    }
  });
}
