/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ArrCustomersBills,
  ArrCustomersCrmBills,
  BILLING_GROUPS,
  CustkeyRq,
  CustomerBillsFilter,
  CustomerCrmFilter,
  LU_CTG,
  MessageResponse,
  SMS_SENT_DATA,
  SMS_TEMPLATE,
  SMS_TEMPLATE_ID,
  SMS_TYPE_REQ,
  StationNo,
} from 'grpc-web-client-gen/Customers_pb';

import {
  createTemplateApi,
  deleteTemplateApi,
  getAllBillGroupByStationApi,
  getAllSMSTemplateApi,
  getFilteredCustomersForCrmSMSApi,
  getFilteredCustomersSMSApi,
  getLuCtgsApi,
  getSMSACTIVETEMPLATESApi,
  getSMSDefaultTemplateApi,
  getSmsHistoryByCustkeyApi,
  getSMSTemplateByIdApi,
  sendCustomersCrmSMSApi,
  sendCustomersSMSApi,
  updateTemplateApi,
} from '@/app/repositories-impl/grpc/customers/api';

// const getFilteredCustomer = async (req: CustomerBillsFilter) => {
//   console.log('Refetching data with new request:', req);

//   const data = await masCustomers.getFilteredCustomersForSMS(req);
//   return data.response;
// };
// const getFilteredCustomerCrmSms = async (req: CustomerCrmFilter) => {
//   console.log('Refetching data with new request:', req);

//   const data = await masCustomers.getFilteredCustomersForCrmSMS(req);
//   return data.response;
// };
// const getSmsHistoryBuCustkey = async (req: CustkeyRq) => {
//   console.log('Refetching data with new request:', req);

//   const data = await masCustomers.getSmsHistoryByCustkey(req);
//   return data.response.SMS_SENT_DATA;
// };
// const sendCustomersSMS = async (req: ArrCustomersBills) => {
//   const data = await masCustomers.sendCustomersSMS(req);
//   return data.response;
// };

// const sendCustomersCrmSMS = async (req: ArrCustomersCrmBills.AsObject) => {
//   const data = await masCustomers.sendCustomersCrmSMS(req);
//   return data.response;
// };

// const getSmsTemplete = async (req: Empty) => {
//   const data = await masCustomers.getALLSMSTEMPLATE(req);
//   return data.response;
// };
// const getSmsDefaultTemplete = async (req: Empty) => {
//   const data = await masCustomers.getSMSDEFAULTTEMPLATE(req);
//   return data.response;
// };
// const getSmsActiveTemplete = async (req: Empty) => {
//   const data = await masCustomers.getSMSACTIVETEMPLATES(req);
//   return data.response;
// };
// const getSmsTempleteById = async (req: SMS_TEMPLATE_ID) => {
//   const data = await masCustomers.getSMSTEMPLATEBYID(req);
//   return data.response;
// };
// const CreateTemplete = async (req: SMS_TEMPLATE) => {
//   const data = await masCustomers.createSMSTEMPLATE(req);
//   return data.response;
// };
// const updateTemplete = async (req: SMS_TEMPLATE) => {
//   const data = await masCustomers.updateSMSTEMPLATE(req);
//   return data.response;
// };
// const deleteTemplete = async (req: SMS_TEMPLATE) => {
//   const data = await masCustomers.deleteSMSTEMPLATE(req);
//   return data.response;
// };

// const getLuCtg = async () => {
//   const data = await masCustomers.getLuCtgs({});
//   return data.response.LU_CTG;
// };
type Props = {
  onSuccess?: (res: MessageResponse.AsObject) => void;
  onError?: (error: any) => void;
};

export const useSendCustomerSMSApi = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation({
    mutationFn: (req: ArrCustomersBills.AsObject) => sendCustomersSMSApi(req),
    onSuccess,
    onError,
  });
  return mutation;
};

export const useGetFilteredCustomersApi = (
  req: CustomerBillsFilter.AsObject,
) => {
  const query = useQuery<ArrCustomersBills.AsObject>({
    queryKey: ['getFilteredCustomerkey', req],
    queryFn: () => getFilteredCustomersSMSApi(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

export const useGetFilteredCustomersCrmApi = (
  req: CustomerCrmFilter.AsObject,
) => {
  const query = useQuery<ArrCustomersCrmBills.AsObject>({
    queryKey: ['getFilteredCustomerCrmkey', req],
    queryFn: () => getFilteredCustomersForCrmSMSApi(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
// export const getSmsHistoryBuCustkeykey = 'getSmsHistoryBuCustkeykey';
export const useGetSmsHistoryBuCustkeyApi = (req: CustkeyRq.AsObject) => {
  const query = useQuery<SMS_SENT_DATA.AsObject[]>({
    queryKey: ['getSmsHistoryBuCustkeykey', req],
    queryFn: () => getSmsHistoryByCustkeyApi(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
export const useSendCustomerCrmSMSApi = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation({
    mutationFn: (req: ArrCustomersCrmBills.AsObject) =>
      sendCustomersCrmSMSApi(req),
    onSuccess,
    onError,
  });
  return mutation;
};

export const getLuCtgCustomerskey = 'getLuCtgCustomerskey';
export const useGetLuCtgsCustomersApi = () => {
  const query = useQuery<LU_CTG.AsObject[]>({
    queryKey: ['getLuCtgCustomerskey'],
    queryFn: () => getLuCtgsApi(),
    enabled: true,
  });
  return query;
};

type CrudProps = {
  onSuccess?: (res: MessageResponse.AsObject) => void;
};

export const useAddSmsTempleteApi = ({ onSuccess }: CrudProps) => {
  const mutation = useMutation({
    mutationFn: (req: SMS_TEMPLATE.AsObject) => createTemplateApi(req),
    onSuccess,
  });
  return mutation;
};

export const useUpdateSmsTempleteApi = ({ onSuccess }: CrudProps) => {
  const mutation = useMutation({
    mutationFn: (req: SMS_TEMPLATE.AsObject) => updateTemplateApi(req),
    onSuccess,
  });
  return mutation;
};
export const useDeleteSmsTempleteApi = ({ onSuccess }: CrudProps) => {
  const mutation = useMutation({
    mutationFn: (req: SMS_TEMPLATE.AsObject) => deleteTemplateApi(req),
    onSuccess,
  });
  return mutation;
};

export const getSmsTempletekey = 'getSmsTempletekey';
export const useGetSmsTempleteApi = (
  obj: SMS_TYPE_REQ.AsObject,
  enable: boolean,
) => {
  const query = useQuery<SMS_TEMPLATE.AsObject[]>({
    queryKey: [getSmsTempletekey, obj],
    queryFn: () => getAllSMSTemplateApi(obj),
    enabled: enable,
  });
  return query;
};
export const getSmsDefaultTempletekey = 'getSmsDefaultTempletekey';
export const useGetSmsDefaultTempleteApi = (
  req: SMS_TYPE_REQ.AsObject,
  enable: boolean,
) => {
  const query = useQuery<SMS_TEMPLATE.AsObject>({
    queryKey: [getSmsDefaultTempletekey, req],
    queryFn: () => getSMSDefaultTemplateApi(req),
    enabled: enable,
  });
  return query;
};
export const getSmsActiveTempletekey = 'getSmsActiveTempletekey';
export const useGetSmsActiveTempleteApi = (enable: boolean) => {
  const query = useQuery<SMS_TEMPLATE.AsObject[]>({
    queryKey: [getSmsActiveTempletekey],
    queryFn: () => getSMSACTIVETEMPLATESApi(),
    enabled: enable,
  });
  return query;
};

export const getSmsTempleteByIdkey = 'getSmsTempleteByIdkey';
export const useGetSmsTempleteByIdApi = (req: SMS_TEMPLATE_ID.AsObject) => {
  const query = useQuery<SMS_TEMPLATE.AsObject>({
    queryKey: [getSmsTempleteByIdkey, req],
    queryFn: () => getSMSTemplateByIdApi(req),
    enabled: true,
  });
  return query;
};

export const useGetBillGroupByStattionApi = (req: StationNo.AsObject) => {
  const query = useQuery<BILLING_GROUPS.AsObject[]>({
    queryKey: ['billgroupByStation', req],
    queryFn: () => getAllBillGroupByStationApi(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
