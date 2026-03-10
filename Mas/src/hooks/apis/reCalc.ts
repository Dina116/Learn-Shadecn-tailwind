import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { reCalcModifyInvoice } from '@/app/services';
import {
  CUSTMODDATA,
  GETRECALCMODIFYINVICEREQ,
} from '@/domain/entities/custModData';
import { IHHProcessResponceMessage } from '@/domain/entities/hhProcessResponseMessage';
import { FILLRECALCREQ, FILLRECALCRES } from '@/domain/entities/fillRecalcres';
import {
  MODIFYRECALCREQ,
  MODIFYRECALCRES,
} from '@/domain/entities/modifyAndExcuteRecalc';

export const reCalcModifyInvoiceKey = 'reCalcModifyInvoiceKey';
export const getCTGKey = 'getCTGKey';
export const meterConditionKey = 'meterConditionKey';
export const fillRecalc = 'fillRecalc';
export const getCustomerDataKey = 'getCustomerDataKey';

export const useGetRecalModifyInvoiceApi = (req: GETRECALCMODIFYINVICEREQ) => {
  const query = useQuery<void, Error>({
    queryKey: [reCalcModifyInvoiceKey, req],
    queryFn: () => reCalcModifyInvoice.GetRecalModifyInvoices(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

type GetCustomerdata = {
  onSuccess?: (req: CUSTMODDATA) => void;
};
export const useGetCustomerdataApi = ({ onSuccess }: GetCustomerdata) => {
  const mutation = useMutation({
    mutationFn: (custkey: string) =>
      reCalcModifyInvoice.GetCustomerData(custkey),
    onSuccess,
  });

  return mutation;
};

type UpdateCustomerdata = {
  onSuccess?: (req: IHHProcessResponceMessage) => void;
};
export const useUpdateCustomerdataApi = ({ onSuccess }: UpdateCustomerdata) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTMODDATA) => reCalcModifyInvoice.PostCustomerData(req),
    onSuccess,
  });
  return mutation;
};
export const useGetRecalcInvoices = (req: FILLRECALCREQ) => {
  const query = useQuery<FILLRECALCRES, AxiosError>({
    queryKey: [fillRecalc, req],
    queryFn: () => reCalcModifyInvoice.FillRecal(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

type ModifyInvoices = {
  onSuccess?: (res: FILLRECALCRES) => void;
};

export const useModifyAndExcuteApi = ({ onSuccess }: ModifyInvoices) => {
  const mutation = useMutation({
    mutationFn: (funReq: { req: MODIFYRECALCREQ; data: MODIFYRECALCRES }) =>
      reCalcModifyInvoice.ModifyAndExecute(funReq?.req, funReq?.data),
    onSuccess,
  });

  return mutation;
};
