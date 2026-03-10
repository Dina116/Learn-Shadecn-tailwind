/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { cashbox } from '@/app/services';
import {
  ADDNEWRECEIPTREQ,
  ADDNRWRECEIPTRES,
  CASHBOXSESSION,
  CLOSESESSIONREQ,
  STARTNEWSEESIONREQ,
} from '@/domain/entities/cashboxSession';
import {
  CASHBOX,
  DELETECASHBOXREQ,
  SESSIONRECEIPTS,
  UBDATECHASHBOXREQ,
} from '@/domain/entities/systemMangement/cashBox';
import {
  CollectionDestributionItm,
  UNPOSTEDReCEIPTSByBILLINGDATEREQ,
} from '@/domain/entities/collection';
import { Iresponse } from '@/app/repositories-impl/http/cashBox';

export const cashbboxSessionKey = 'cashbboxSessionKey';
export const postReceiptApikey = 'postReceiptApikey';
export const closeSessionKey = 'closeSessionKey';
export const UnPostedReceiptsGroup = 'UnPostedReceiptsGroup';

export const useGetCashboxSesionApi = () => {
  const query = useQuery<CASHBOXSESSION, Error>({
    queryKey: [cashbboxSessionKey],
    queryFn: () => cashbox.GetMySession(),
    enabled: true,
  });
  return query;
};

type GetCashboxSesionReceiptProps = {
  onMutate?: () => void;
  onSuccess?: (res: SESSIONRECEIPTS[]) => void;
  onError?: (error: any) => void;
};
export const useGetCashboxSesionReceiptApi = ({
  onError,
  onMutate,
  onSuccess,
}: GetCashboxSesionReceiptProps) => {
  const mutation = useMutation({
    mutationFn: () => cashbox.SessionReceipts(),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};

type AddNewReceiptProps = {
  onMutate?: (req: ADDNEWRECEIPTREQ) => void;
  onSuccess?: (res: ADDNRWRECEIPTRES) => void;
  onError?: (error: any) => void;
};
export const useAddNewReceiptApi = ({
  onError,
  onMutate,
  onSuccess,
}: AddNewReceiptProps) => {
  const mutation = useMutation({
    mutationFn: (req: ADDNEWRECEIPTREQ) => cashbox.AddNewReceipt(req),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};

// type GetUnPostedReceiptsGroupByBilngDateProps = {
//   onMutate?: (req: UNPOSTEDReCEIPTSByBILLINGDATEREQ) => void;
//   onSuccess?: (res: CollectionDestributionItm[]) => void;
//   onError?: (error: any) => void;
// };
// export const useGetUnPostedReceiptsGroupByBilngDateApi = ({
//   onError,
//   onMutate,
//   onSuccess,
// }: GetUnPostedReceiptsGroupByBilngDateProps) => {
//   const mutation = useMutation({
//     mutationFn: (req: UNPOSTEDReCEIPTSByBILLINGDATEREQ) =>
//       cashbox.GetUnPostedReceiptsGroupByBilngDate(req),
//     onSuccess,
//     onError,
//     onMutate,
//   });

//   return mutation;
// };

export const useGetUnPostedReceiptsGroupByBilngDateApi = (
  req: UNPOSTEDReCEIPTSByBILLINGDATEREQ,
) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [UnPostedReceiptsGroup, req],
    queryFn: () => cashbox.GetUnPostedReceiptsGroupByBilngDate(req),
    enabled: Object?.keys(req)?.length > 0 && req?.empid !== undefined,
    cacheTime: 0,
    staleTime: 0,
  });
  return query;
};

type StartNewSessionProps = {
  onMutate?: (req: STARTNEWSEESIONREQ) => void;
  onSuccess?: (res: CASHBOXSESSION) => void;
  onError?: (error: any) => void;
};
export const useStartSessionApi = ({ onSuccess }: StartNewSessionProps) => {
  const mutation = useMutation({
    mutationFn: (req: STARTNEWSEESIONREQ) => cashbox.StartNewSession(req),
    onSuccess,
  });

  return mutation;
};

type GetMySessionProps = {
  onMutate?: () => void;
  onSuccess?: (res: CASHBOXSESSION) => void;
  onError?: (error: any) => void;
};
export const useGetMySessionApi = ({
  onError,
  onMutate,
  onSuccess,
}: GetMySessionProps) => {
  const mutation = useMutation({
    mutationFn: () => cashbox.GetMySession(),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};

type CloseMySessionProps = {
  onMutate?: (req: CLOSESESSIONREQ) => void;
  onSuccess?: (res: string) => void;
  onError?: (error: any) => void;
};
export const useCloseSessionApi = ({
  onError,
  onMutate,
  onSuccess,
}: CloseMySessionProps) => {
  const mutation = useMutation({
    mutationFn: (req: CLOSESESSIONREQ) => cashbox.CloseSession(req),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};

type AddCashboxProps = {
  onSuccess?: (req: Iresponse) => void;
};

export const useAddCashboxApi = ({ onSuccess }: AddCashboxProps) => {
  const mutation = useMutation({
    mutationFn: (req: CASHBOX) => cashbox.AddCashBox(req),
    onSuccess,
  });

  return mutation;
};
type EditCashboxProps = {
  onSuccess?: (req: Iresponse) => void;
};

export const useEditCashboxApi = ({ onSuccess }: EditCashboxProps) => {
  const mutation = useMutation({
    mutationFn: (req: UBDATECHASHBOXREQ) => cashbox.UpdateChashBox(req),
    onSuccess,
  });

  return mutation;
};
type DelCashboxProps = {
  onSuccess?: (req: Iresponse) => void;
};

export const useDeleteCashboxApi = ({ onSuccess }: DelCashboxProps) => {
  const mutation = useMutation({
    mutationFn: (req: DELETECASHBOXREQ) => cashbox.DeleteCashBox(req),
    onSuccess,
  });

  return mutation;
};
