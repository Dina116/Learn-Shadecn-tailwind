import {
  CustomerBillsFilter,
  ArrCustomersBills,
  MessageResponse,
  LU_CTGS,
  Empty,
  ArrSMS_TEMPLATE,
  SMS_TEMPLATE_ID,
  SMS_TEMPLATE,
  CustkeyRq,
  ArrSMS_SENT_DATA,
  ArrCustomersCrmBills,
  CustomerCrmFilter,
} from '../entities/_gen/Customers_pb';
import { MyResponse } from './grpc';

export interface ICustomerRepo {
  getFilteredCustomersForSMS(
    input: CustomerBillsFilter,
  ): MyResponse<ArrCustomersBills>;
  sendCustomersSMS(input: ArrCustomersBills): MyResponse<MessageResponse>;
  getLuCtgs(input: Empty): MyResponse<LU_CTGS>;
  getALLSMSTEMPLATE(input: Empty): MyResponse<ArrSMS_TEMPLATE>;
  getSMSACTIVETEMPLATES(input: Empty): MyResponse<ArrSMS_TEMPLATE>;
  getSMSTEMPLATEBYID(input: SMS_TEMPLATE_ID): MyResponse<SMS_TEMPLATE>;
  getSMSDEFAULTTEMPLATE(input: Empty): MyResponse<SMS_TEMPLATE>;
  createSMSTEMPLATE(input: SMS_TEMPLATE): MyResponse<MessageResponse>;
  updateSMSTEMPLATE(input: SMS_TEMPLATE): MyResponse<MessageResponse>;
  deleteSMSTEMPLATE(input: SMS_TEMPLATE): MyResponse<MessageResponse>;
  getSmsHistoryByCustkey(input: CustkeyRq): MyResponse<ArrSMS_SENT_DATA>;
  getFilteredCustomersForCrmSMS(
    input: CustomerCrmFilter,
  ): MyResponse<ArrCustomersCrmBills>;

  sendCustomersCrmSMS(input: ArrCustomersCrmBills): MyResponse<MessageResponse>;
}
