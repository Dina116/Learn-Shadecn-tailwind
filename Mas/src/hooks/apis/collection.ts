/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  CALCCHARGEREQ,
  COLLECTIONPOSTEDSHAREDREQ,
  COLLECTORSPERFORMANCEREQ,
  CUSTKEYREQ,
  CollectionDestributionItm,
  GETLASTRECEIPTREQ,
  ICancelCollectionReq,
  ICloseGardReq,
  IPaymentForHqReq,
  IPaymentReq,
  IUncollectedReq,
  LISTPAYMENTSREQ,
  RejectPostReq,
  UNCOLLECECTEDREQ,
  UNPOSTEDREQ,
  UNPOSTEDGROUPMETHODREQ,
  UNPOSTEDGROUPMETHODS,
  ICHANGEPAYMENTMETHOD,
  ChangeReciptsModel,
  IReopenClosedBillGroupBookReq,
} from '@/domain/entities/collection';
import { collection, emps } from '@/app/services';
import { EMPS } from '@/domain/entities/systemMangement/emp';
import {
  IBill2masReq,
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  IReOpenGardReq,
} from '@/domain/entities/reading';
import {
  COMPONENTSTATEPOSTCOLLECTIONREQ,
  IHHProcessResponceMessage,
  RECOLLECTEDCANCELSTMREQ,
  UPDATECUSTOMERBILLSBILLGRPREQ,
  UPDATECUSTOMERBILLSREQ,
} from '@/domain/entities/hhProcessResponseMessage';
import {
  BILLINGDATEREQ,
  STATMDEPOSIT,
  StatmValidation,
} from '@/domain/entities/statmDeposit';
import {
  COLLECTIONSUMMARY,
  GARDSUMMARYREQ,
} from '@/domain/entities/collectionSummary';
import { GARD, POSTGARDREQ, SAVEGARDREQ } from '@/domain/entities/gard';
import {
  COLLECBILLREQUESTAPI,
  COLLECTIONLISTOFBILLSREQAPI,
  COLLECTIONLISTOFBILLSREQAPINew,
  PARTIALCOLLECTBILLREQAPI,
} from '@/app/repositories-impl/contracts/collectBill';
import { HHBCYC } from '@/domain/entities/hhBcyc';
import { CASHIERBALANCE } from '@/domain/entities/cashierBalance';
import { PostReq } from '@/app/repositories-impl/contracts/requestModels';
import { BALANCE } from '@/domain/entities/balance';
import {
  CANCELRECEIPTREQ,
  EMPREQ,
  MyReceipt,
  RECEIPTREQ,
} from '@/domain/entities/receipt';
import { REOPENCLOSEDBILLGROUPREQ } from '@/domain/entities/billGroups';
import {
  CollectionDestributionItem,
  CollectionDestributionReceipt,
  GetPaymentReciptRequest,
  ReciptBulkItem,
} from '@/app/repositories-impl/contracts/collectionDestributionItem';
import { HHProcessResponceMessageApi } from '@/app/repositories-impl/contracts/hh-process-response-message';

export const ColBcycKey = 'ColBcycKey';
export const paymentListkey = 'paymentListkey';
export const unpostStatmentDepositKey = 'unpostStatmentDepositKey';
export const closeWalkRoutKey = 'closeWalkRoutKey';
export const closeCWalkInDeviceKey = 'closeCWalkInDeviceKey';
export const closeFawryKey = 'closeFawryKey';
export const unPostSummaryKey = 'unPostSummaryKey';
export const unPostKey = 'unPostKey';
export const postKey = 'postKey';
export const paymentLengthKey = 'paymentLengthKey';
export const reOpenGardKey = 'reOpenGardKey';
export const getBillKey = 'getBillKey';
export const getBillDataKey = 'getBillDataKey';
export const cancelStmsKey = 'cancelStmsKey';
export const cancelPrepearToDeviceKey = 'cancelPrepearToDeviceKey';
export const closecolWalkKey = 'closecolWalkKey';
export const rePrepareColWalkKey = 'rePrepareColWalkKey';
export const reOpenColForGrpKey = 'reOpenColForGrpKey';
export const permitTwoPeriodKey = 'permitTwoPeriodKey';
export const getPaymentHqKey = 'getPaymentHqKey';
export const getCashierBalanceKey = 'getCashierBalanceKey';
export const calcChargeKey = 'calcChargeKey';
export const HqColListBillsKey = 'HqColListBillsKey';
export const hqCollectBillKey = 'hqCollectBillKey';
export const reCalcDueAmountKey = 'reCalcDueAmountKey';
export const destributedReceiptKey = 'destributedReceiptKey';
export const getPaymentForPrintKey = 'getPaymentForPrintKey';
export const unCollectedDetatilsGardKey = 'unCollectedDetatilsGardKey';
export const useGetNewReceiptNoKey = 'useGetNewReceiptNoKey';
export const useGetDepositKey = 'useGetDepositKey';
export const GetUnPostedDetailsKey = 'GetUnPostedDetailsKey';
export const changePaymentMethodKey = 'changePaymentMethodKey';
export const hqCollectPartialKey = 'hqCollectPartialKey';
export const getUnPostedGroupMethod = 'getUnPostedGroupMethod';
// export const openFawryKey = 'openFawryKey';

type Billing2masProps = {
  onSuccess?: (res: IHHProcessResponceMessage, req: IBill2masReq) => void;
  onError?: (error: any, req: IBill2masReq) => void;
};

export const useCollectionBilling2MasApi = ({
  onSuccess,
  onError,
}: Billing2masProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBill2masReq) => collection.Billing2Mas(req),
    onSuccess,
    onError,
  });

  return mutation;
};

export const useGetUnPostedStatmentDepositApi = (req: {
  all?: boolean | undefined;
}) => {
  const query = useQuery<STATMDEPOSIT[], Error>({
    queryKey: [unpostStatmentDepositKey, req],
    queryFn: () => collection.GetUnPostedStatmDeposits(req),
    enabled: true,
    cacheTime: 0,
    staleTime: 0,
  });
  return query;
};
// export const useCloseWalkRoutApi = (req: IBillGroupBookWalkBilng) => {
//   const query = useQuery<IHHProcessResponceMessage, Error>({
//     queryKey: [closeWalkRoutKey, req],
//     queryFn: () => collection.CloseWalkRoute(req),
//     enabled: true,
//   });
//   return query;
// };
type CloseCWalkProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (error: AxiosError, req: IBillGroupBookWalkBilng) => void;
};

export const useCloseCWalkRoutApi = ({
  onSuccess,
  onError,
}: CloseCWalkProps) => {
  const mutate = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) =>
      collection.CloseWalkRoute(req),
    onSuccess,
    onError,
  });

  return mutate;
};

// export const useCloseColWalkInDeviceApi = (req: IBillGroupBookWalkBilng) => {
//   const query = useQuery<IHHProcessResponceMessage, Error>({
//     queryKey: [closeCWalkInDeviceKey, req],
//     queryFn: () => collection.CloseCWalkInDevice(req),
//     enabled: true,
//   });
//   return query;
// };

type CloseCWalkInDeviceProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req?: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (err: AxiosError, req: IBillGroupBookWalkBilng) => void;
};

export const useCloseCWalkRoutInDeviceApi = ({
  onSuccess,
  onError,
}: CloseCWalkInDeviceProps) => {
  const mutate = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) =>
      collection.CloseCWalkInDevice(req),
    onSuccess,
    onError,
  });

  return mutate;
};

type CloseFawryProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (error: AxiosError, req: IBillGroupBookWalkBilng) => void;
};
export const useCloseFawryeApi = ({ onSuccess, onError }: CloseFawryProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) => collection.CloseFawry(req),
    onSuccess,
    onError,
  });

  return mutation;
};
// export const useOpenFawryeApi = (req: IBillGroupBookWalkBilng) => {
//   const query = useQuery<IHHProcessResponceMessage, Error>({
//     queryKey: [openFawryKey, req],
//     queryFn: () => collection.OpenFawry(req),
//     retry: 0,
//     enabled: true,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//   });
//   return query;
// };
type OpenFawryProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (err: AxiosError, req: IBillGroupBookWalkBilng) => void;
};

export const useOpenFawryeApi = ({ onSuccess, onError }: OpenFawryProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) => collection.OpenFawry(req),
    onSuccess,
    onError,
  });

  return mutation;
};
export const useGetUnPostedSummaryApi = () => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [unPostSummaryKey],
    queryFn: () => collection.GetUnPostedSummary(),
    enabled: true,
  });
  return query;
};
export const useGetUnPostedApi = (req: UNPOSTEDREQ) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [unPostKey, req],
    queryFn: () => collection.GetUnPosted(req),
    enabled: Object.keys(req).length > 0 && req.empid !== 0,
  });
  return query;
};

type UpdateCustomerBillsProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: UPDATECUSTOMERBILLSBILLGRPREQ,
  ) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any, req: UPDATECUSTOMERBILLSBILLGRPREQ) => void;
};

export const useUpdateCustomerBillsBillgroupApi = ({
  onSuccess,
  onError,
}: UpdateCustomerBillsProps) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATECUSTOMERBILLSBILLGRPREQ) =>
      collection.UpdateCustomerBillsBillgroup(req),
    onSuccess,
    onError,
  });
  return mutation;
};
export const test = async () => {
  const data = await emps.getEmps();
  return { data };
};

export const useTestApis = () => {
  const query = useQuery<{ data: Array<EMPS> }, AxiosError>({
    queryKey: ['test'],
    queryFn: () => test(),
    enabled: true,
  });
  return query;
};
// ////////////gard
type PostGardProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
  onError?: (error: AxiosError, req: POSTGARDREQ) => void;
};

export const usePostGardToBillingApi = ({
  onSuccess,
  onError,
}: PostGardProps) => {
  const mutation = useMutation({
    mutationFn: (req: POSTGARDREQ) => collection.PostGardToBilling(req),
    onSuccess,
    onError,
  });
  return mutation;
};

export const useGetPaymentLengthApi = () => {
  const query = useQuery<number, AxiosError>({
    queryKey: [paymentLengthKey],
    queryFn: () => collection.GetPaymentLength(),
    enabled: true,
  });
  return query;
};

type GetGardSummaryProps = {
  onSuccess?: (res: COLLECTIONSUMMARY[]) => void;
};

export const useGetGardSummaryApi = ({ onSuccess }: GetGardSummaryProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: IBillGroupBookWalkBilng & {
        empid?: number | undefined;
      },
    ) => collection.GetGardSummary(req),
    onSuccess,
  });
  return mutation;
};
type SaveGardProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useSaveGardApi = ({ onSuccess }: SaveGardProps) => {
  const mutation = useMutation({
    mutationFn: (req: SAVEGARDREQ) => collection.SaveGard(req),
    onSuccess,
  });
  return mutation;
};

type CloseGardProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useCloseGardApi = ({ onSuccess }: CloseGardProps) => {
  const mutation = useMutation({
    mutationFn: (req: ICloseGardReq) => collection.CloseGard(req),
    onSuccess,
  });
  return mutation;
};

type ReOpenGardProps = {
  onSuccess?: (res: boolean) => void;
};
export const useReOpenGardApi = ({ onSuccess }: ReOpenGardProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: IReOpenGardReq & {
        empid?: number | undefined;
      },
    ) => collection.ReOpenGard(req),
    onSuccess,
  });
  return mutation;
};
type UnCollectedDetailProps = {
  onSuccess?: (res: GARD[]) => void;
};
export const useGetUnCollectedDetailApi = ({
  onSuccess,
}: UnCollectedDetailProps) => {
  const mutation = useMutation({
    mutationFn: (req: IReOpenGardReq & IUncollectedReq) =>
      collection.GetUnCollectedDetails(req),
    onSuccess,
  });
  return mutation;
};
// export const useGetUnCollectedDetailApi = (
//   req: IBillGroupBookWalk & IUncollectedReq,
// ) => {
//   const query = useQuery<Gard[], AxiosError>({
//     queryKey: [unCollectedDetatilsGardKey, req],
//     queryFn: () => collection.getUnCollectedDetails(req),
//     enabled: Object.keys(req).length > 0,
//   });
//   return query;
// };
// /////////////////////////////// systemmaintainance

// DATA MANAGEMENT

type UpdateBillsProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
  onError?: (err: AxiosError) => void;
};
export const useUpdateBillsApi = ({ onSuccess, onError }: UpdateBillsProps) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATECUSTOMERBILLSREQ) =>
      collection.UpdateCustomerBills(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type RejectPostedReceipt = {
  onSuccess?: (res: HHProcessResponceMessageApi) => void;
};
export const useRejectPostedReceipt = ({ onSuccess }: RejectPostedReceipt) => {
  const mutation = useMutation({
    mutationFn: (req: RejectPostReq) => collection.rejectReceiptPost(req),
    onSuccess,
  });
  return mutation;
};

export interface IunPostedDetailsReq {
  empid: number | undefined;
  depositId?: number | undefined;
  custkey?: string;
}
export const useGetUnPostedDetails = (req: IunPostedDetailsReq) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [GetUnPostedDetailsKey, req],
    queryFn: () => collection.GetUnPostedDetails(req),
    enabled:
      Object.keys(req).length > 0 && req?.empid !== 0 && req.custkey !== '',
  });
  return query;
};

export const useGetBillDataApi = (req: IPaymentReq) => {
  const query = useQuery<CollectionDestributionItm, Error>({
    queryKey: [getBillDataKey, req],
    queryFn: () => collection.GetPayment(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

type CollectBillProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
  onError?: (err: AxiosError) => void;
};
export const useCollectBillApi = ({ onSuccess, onError }: CollectBillProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECBILLREQUESTAPI) => collection.CollectBill(req),
    onSuccess,
    onError,
  });
  return mutation;
};
type ChangePaymentMethodProps = {
  onSuccess?: (res: boolean) => void;
};
export const useChangePaymethodUnPostedPayments = ({
  onSuccess,
}: ChangePaymentMethodProps) => {
  const mutation = useMutation({
    mutationFn: (req: ICHANGEPAYMENTMETHOD) =>
      collection.ChangePayMethodUnPostedPaymentNos(req),
    onSuccess,
  });
  return mutation;
};

export const useChangePayMethodUnPostedReciptsNos = ({
  onSuccess,
}: ChangePaymentMethodProps) => {
  const mutation = useMutation({
    mutationFn: (req: ChangeReciptsModel) =>
      collection.ChangePayMethodUnPostedReciptsNos(req),
    onSuccess,
  });
  return mutation;
};
export const useGetBillApi = (req: GETLASTRECEIPTREQ) => {
  const query = useQuery<CollectionDestributionItm, Error>({
    queryKey: [getBillKey, req],
    queryFn: () => collection.GetLastReceipt(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
export const useGetListBillsApi = (req: GETLASTRECEIPTREQ) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [getBillKey, req],
    queryFn: () => collection.GetLastReceipts(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
type CancelBillProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
  onError?: (err: AxiosError) => void;
};
export const useCancelBillApi = ({ onSuccess, onError }: CancelBillProps) => {
  const mutation = useMutation({
    mutationFn: (req: ICancelCollectionReq) => collection.CancelCollection(req),
    onSuccess,
    onError,
  });
  return mutation;
};

// -------------------------------------------------------------------------

interface IpropsCollection {
  onSuccess: (res: IHHProcessResponceMessage) => void;
}

export const useCancelStmsApi = ({ onSuccess }: IpropsCollection) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => collection.CancelStms(req),
    onSuccess,
  });
  return mutation;
};
// -------------------------------------------------------------------------

export const useCancelPrepearToDeviceApi = ({
  onSuccess,
}: IpropsCollection) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) =>
      collection.CancelPrepearToDevice(req),
    onSuccess,
  });
  return mutation;
};
// -------------------------------------------------------------------------

export const useClosecolWalkApi = ({ onSuccess }: IpropsCollection) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) => collection.CloseInDevice(req),
    onSuccess,
  });
  return mutation;
};
// -------------------------------------------------------------------------
export const useRePrepareColWalkApi = ({ onSuccess }: IpropsCollection) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) =>
      collection.ReOpenClosedInDevice(req),
    onSuccess,
  });
  return mutation;
};

// -------------------------------------------------------------------------

interface IuseReOpenColForGrpReq {
  onSuccess: (res: number) => void;
}
// export interface IReOpenGrbReq {
//   billgroup: string;
//   empid: number;
// }

export const useReOpenColForGrpApi = ({
  onSuccess,
}: IuseReOpenColForGrpReq) => {
  const mutation = useMutation({
    mutationFn: (req: REOPENCLOSEDBILLGROUPREQ) =>
      collection.ReOpenClosededBillgroup(req),
    onSuccess,
  });
  return mutation;
};
export const useReOpenColForWalkOnHHApi = ({
  // لكل الدورات
  onSuccess,
}: IpropsCollection) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) =>
      collection.ReOpenClosedInDevice(req),
    onSuccess,
  });
  return mutation;
};
interface IPropsReOpenClosedBillGroypBook {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IReopenClosedBillGroupBookReq,
  ) => void;
  onError?: (
    error: AxiosError<{
      ExceptionMessage: string;
    }>,
    req: IReopenClosedBillGroupBookReq,
  ) => void;
}
export const useReOpenClosedBillgroupBook = ({
  onSuccess,
  onError,
}: IPropsReOpenClosedBillGroypBook) => {
  const mutation = useMutation({
    mutationFn: (req: IReopenClosedBillGroupBookReq) => {
      console.log('useReOpenClosedBillgroupBook', req);
      return collection.ReOpenClosedBillGroupBook(req);
    },
    onSuccess,
    onError,
  });
  return mutation;
};
// -------------------------------------------------------------------------
export interface IPermitTwoPeriodReq {
  empid: number;
}
export const usePermitTwoPeriodApi = ({
  onSuccess,
}: IuseReOpenColForGrpReq) => {
  const mutation = useMutation({
    mutationFn: (req: IPermitTwoPeriodReq) => collection.ClearHafzaPrint(req),
    onSuccess,
  });
  return mutation;
};

export const useCollectionBcycApi = (req: {
  deviceid: string;
  empid?: number;
}) => {
  const query = useQuery<HHBCYC[], Error>({
    queryKey: [ColBcycKey, req],
    queryFn: () => collection.Bcyc(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
// /////////////////////// hq محصل مكتب

export const useGetPaymentForHqApi = (
  req: IPaymentForHqReq,
  select?: (data: CollectionDestributionItm[]) => CollectionDestributionItm[],
) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [getPaymentHqKey, req],
    queryFn: () => collection.GetPaymentForHq(req),
    enabled: Object.keys(req).length > 0,
    cacheTime: 0,
    select,
  });
  return query;
};

export const useGetCashierBalanceApi = (custkey: string, enable?: boolean) => {
  const query = useQuery<CASHIERBALANCE, Error>({
    queryKey: [getCashierBalanceKey, custkey],
    queryFn: () => collection.GetCashierBalance(custkey),
    enabled: enable || true,
  });
  return query;
};

export const GetUnPostedGroupMethod = (
  req: UNPOSTEDGROUPMETHODREQ,
  enable?: boolean,
) => {
  const query = useQuery<UNPOSTEDGROUPMETHODS[], Error>({
    queryKey: [getUnPostedGroupMethod, req?.empid],
    queryFn: () => collection.GetUnPostedGroupMethod(req?.empid),
    enabled: enable || true,
  });
  return query;
};

export const useCalcChargeApi = (req: CALCCHARGEREQ) => {
  const query = useQuery<number[], Error>({
    queryKey: [calcChargeKey, req],
    queryFn: () => collection.CalcCharge(req),
    enabled: req?.paymentMethod !== undefined,
    cacheTime: 0,
  });
  return query;
};

type CollectListBillsProps = {
  onSuccess: (res: CollectionDestributionItm) => void;
  onError?: (err: AxiosError) => void;
};

export const useHqCollectionListOfBillsApi = ({
  onSuccess,
  onError,
}: CollectListBillsProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECTIONLISTOFBILLSREQAPI) =>
      collection.HqCollectListOfBills(req),
    onSuccess,
    onError,
  });
  return mutation;
};

export const useHqCollectionListOfBillsNewApi = ({
  onSuccess,
  onError,
}: CollectListBillsProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECTIONLISTOFBILLSREQAPINew) =>
      collection.HqCollectListOfBillsNew(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type HqCollectBillReq = {
  onSuccess: (res: CollectionDestributionItm) => void;
  onError?: (err: AxiosError) => void;
};

export const useHqCollectBillApi = ({
  onSuccess,
  onError,
}: HqCollectBillReq) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECBILLREQUESTAPI) => collection.HqCollectBill(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type PartialCollectProps = {
  onSuccess: (res: CollectionDestributionItm) => void;
  onError?: (err: AxiosError) => void;
};

export const useHqPartialCollectApi = ({
  onSuccess,
  onError,
}: PartialCollectProps) => {
  const mutation = useMutation({
    mutationFn: (req: PARTIALCOLLECTBILLREQAPI) =>
      collection.HqPartialCollect(req),
    onSuccess,
    onError,
  });
  return mutation;
};
export const useReCalcDueAmountApi = (
  req: IBillGroupBookWalk & {
    custkey?: string | undefined;
  },
) => {
  const query = useQuery<IHHProcessResponceMessage, Error>({
    queryKey: [reCalcDueAmountKey, req],
    queryFn: () => collection.ReCalcDueAmount(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

export const useDestributedReceiptApi = (req: {
  custkey?: string | undefined;
}) => {
  const query = useQuery<CollectionDestributionItm, Error>({
    queryKey: [destributedReceiptKey, req],
    queryFn: () => collection.DestributeReceipts(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
export const useGetPaymentForPrintApi = (req: {
  custkey?: string | undefined;
  bilngDate?: string | undefined;
  billgroup?: number | undefined;
  bookno?: number | undefined;
  walkno?: number | undefined;
}) => {
  const query = useQuery<void, Error>({
    queryKey: [getPaymentForPrintKey, req],
    queryFn: () => collection.GetPaymentsForPrint(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
// ////////////

export const useGetDepositApi = (empId: number) => {
  const query = useQuery<STATMDEPOSIT[], Error>({
    queryKey: [useGetDepositKey, empId],
    queryFn: () => collection.GetDeposits(empId),
    enabled: !!empId && empId !== 0,
  });
  return query;
};

type GetIssuePerWalkProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetIssuePerWalkApi = ({ onSuccess }: GetIssuePerWalkProps) => {
  const mutation = useMutation({
    mutationFn: (bilng_date?: Date | undefined) =>
      collection.GetIssuePerWalk(bilng_date),
    onSuccess,
  });
  return mutation;
};
type GetIssuePerBillGroupProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetIssuePerBillGroupApi = ({
  onSuccess,
}: GetIssuePerBillGroupProps) => {
  const mutation = useMutation({
    mutationFn: (bilng_date?: Date | undefined) =>
      collection.GetIssuePerBillgroup(bilng_date),
    onSuccess,
  });
  return mutation;
};
type Mas2BillingProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
  onError?: (err: AxiosError, DepositId: number) => void;
};
export const useMas2BillingApi = ({ onSuccess, onError }: Mas2BillingProps) => {
  const mutation = useMutation({
    mutationFn: (DepositId: number) => collection.Mas2Billing(DepositId),
    onSuccess,
    onError,
  });
  return mutation;
};

type GetNewReceptNoProps = {
  onSuccess?: (res: number) => void;
  onError?: (err: Error) => void;
};
export const useGetNewReceiptNoApi = ({
  onSuccess,
  onError,
}: GetNewReceptNoProps) => {
  const mutation = useMutation({
    mutationFn: () => collection.GetNewReceptNo(),
    onSuccess,
    onError,
  });
  return mutation;
};

type PostProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
};
export const usePostApi = ({ onSuccess, onError }: PostProps) => {
  const mutation = useMutation({
    mutationFn: (req: PostReq) => collection.Post(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type UnPostedGroupBilingDateProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useUnPostedGroupBillingDateApi = ({
  onSuccess,
}: UnPostedGroupBilingDateProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECTIONPOSTEDSHAREDREQ) =>
      collection.GetUnPostedGroupBybilng_date(req),
    onSuccess,
  });
  return mutation;
};
type GetCollectorPerformanceProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetCollectorsPerformanceeApi = ({
  onSuccess,
}: GetCollectorPerformanceProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECTORSPERFORMANCEREQ) =>
      collection.GetCollectorsPerformance(req),
    onSuccess,
  });
  return mutation;
};
type GetUnCollectedPerWalkProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetUnCollectedPerWalkApi = ({
  onSuccess,
}: GetUnCollectedPerWalkProps) => {
  const mutation = useMutation({
    mutationFn: (req: UNCOLLECECTEDREQ) =>
      collection.GetUnCollectedPerWalk(req),
    onSuccess,
  });
  return mutation;
};
type PrintProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const usePrintApi = ({ onSuccess }: PrintProps) => {
  const mutation = useMutation({
    mutationFn: (empid: number) => collection.Print(empid),
    onSuccess,
  });
  return mutation;
};
export const useGetPostedApi = (req: COLLECTIONPOSTEDSHAREDREQ) => {
  const query = useQuery<CollectionDestributionItm[], Error>({
    queryKey: [postKey, req],
    queryFn: () => collection.GetPosted(req),
    cacheTime: 0,
    staleTime: 0,
    enabled: Object.keys(req || {}).length > 0 && req?.empid !== 0,
  });
  return query;
};

type GetPostedDetailsProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetPostedDetailsApi = ({
  onSuccess,
}: GetPostedDetailsProps) => {
  const mutation = useMutation({
    mutationFn: (req: COLLECTIONPOSTEDSHAREDREQ) =>
      collection.GetPostedDetails(req),
    onSuccess,
  });
  return mutation;
};
type GetUnCollectedDetailsForWalkProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetUnCollectedDetailsFoeWalksApi = ({
  onSuccess,
}: GetUnCollectedDetailsForWalkProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: IBillGroupBookWalk & {
        mark?: boolean | undefined;
      },
    ) => collection.GetUnCollectedDetailsForWalk(req),
    onSuccess,
  });
  return mutation;
};
type GetGetBranshGardSummaryProps = {
  onSuccess?: (res: COLLECTIONSUMMARY[]) => void;
};
export const useGetBranshGardSummaryApi = ({
  onSuccess,
}: GetGetBranshGardSummaryProps) => {
  const mutation = useMutation({
    mutationFn: (req: GARDSUMMARYREQ) => collection.GetBranchGardSummary(req),
    onSuccess,
  });
  return mutation;
};
type GetCustomerPaymentsProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetCustomerPaymentsApi = ({
  onSuccess,
}: GetCustomerPaymentsProps) => {
  const mutation = useMutation({
    mutationFn: (req: { custkey: string }) =>
      collection.GetCustomerPayments(req),
    onSuccess,
  });
  return mutation;
};
type GetUnCollectedCustomerPaymentsProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetUnCollectedCustomerPaymentsApi = ({
  onSuccess,
}: GetUnCollectedCustomerPaymentsProps) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTKEYREQ) =>
      collection.GetUnCollectedCustomerPayments(req),
    onSuccess,
  });
  return mutation;
};
type GetReCalcDataProps = {
  onSuccess?: (res: CollectionDestributionItm) => void;
};
export const useGetReCalcDataApi = ({ onSuccess }: GetReCalcDataProps) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTKEYREQ) => collection.GetReCalcData(req),
    onSuccess,
  });
  return mutation;
};
type ListPaymentsProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useListPaymentsApi = ({ onSuccess }: ListPaymentsProps) => {
  const mutation = useMutation({
    mutationFn: (req: LISTPAYMENTSREQ) => collection.ListPayments(req),
    onSuccess,
  });
  return mutation;
};
type GetPaymentsForHqProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetPaymentsForHqApi = ({
  onSuccess,
}: GetPaymentsForHqProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng & CUSTKEYREQ) =>
      collection.GetPaymentsForHq(req),
    onSuccess,
  });
  return mutation;
};

type GetMissingCollectionProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetMissingCollectionApi = ({
  onSuccess,
}: GetMissingCollectionProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) =>
      collection.GetMissingCollection(req),
    onSuccess,
  });
  return mutation;
};
type GetBalanceProps = {
  onSuccess?: (res: BALANCE[]) => void;
};
export const useGetBalanceApi = ({ onSuccess }: GetBalanceProps) => {
  const mutation = useMutation({
    mutationFn: () => collection.GetBalance(),
    onSuccess,
  });
  return mutation;
};
type GetCollectionPerDeviceProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetCollectionPerDeviceApi = ({
  onSuccess,
}: GetCollectionPerDeviceProps) => {
  const mutation = useMutation({
    mutationFn: () => collection.GetCollectionPerDevice(),
    onSuccess,
  });
  return mutation;
};
type GetCollectionPerBookProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetCollectionPerBookApi = ({
  onSuccess,
}: GetCollectionPerBookProps) => {
  const mutation = useMutation({
    mutationFn: () => collection.GetCollectionPerBook(),
    onSuccess,
  });
  return mutation;
};
type CancelStmAllProps = {
  onSuccess?: (res: IHHProcessResponceMessage[]) => void;
};
export const useCancelStatmApi = ({ onSuccess }: CancelStmAllProps) => {
  const mutation = useMutation({
    mutationFn: (req: { deviceid: string }) => collection.CancelStmsAll(req),
    onSuccess,
  });
  return mutation;
};
type CancelPrepareToDeviceAllProps = {
  onSuccess?: (res: IHHProcessResponceMessage[]) => void;
};
export const useCancelPrepareToDeviceAllApi = ({
  onSuccess,
}: CancelPrepareToDeviceAllProps) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) =>
      collection.CancelPrepearToDeviceAll(req),
    onSuccess,
  });
  return mutation;
};
type ComponentPostedStmCollectionProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useComponentPostedStmCollectionApi = ({
  onSuccess,
}: ComponentPostedStmCollectionProps) => {
  const mutation = useMutation({
    mutationFn: (req: COMPONENTSTATEPOSTCOLLECTIONREQ) =>
      collection.CompensatePostedStmCollection(req),
    onSuccess,
  });
  return mutation;
};
type ReCollectedCanceldStmProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useReCollectedCancelStmApi = ({
  onSuccess,
}: ReCollectedCanceldStmProps) => {
  const mutation = useMutation({
    mutationFn: (req: RECOLLECTEDCANCELSTMREQ) =>
      collection.RecollectCanceledStm(req),
    onSuccess,
  });
  return mutation;
};
type CancelStmDepositProps = {
  onSuccess?: (res: STATMDEPOSIT[]) => void;
};
export const useCancelStmDepositApi = ({
  onSuccess,
}: CancelStmDepositProps) => {
  const mutation = useMutation({
    mutationFn: (req: BILLINGDATEREQ) => collection.GetStatmDeposits(req),
    onSuccess,
  });
  return mutation;
};

type CancelReceiptsProps = {
  onSuccess?: (res: MyReceipt[]) => void;
};
export const useCancelReceiptsApi = ({ onSuccess }: CancelReceiptsProps) => {
  const mutation = useMutation({
    mutationFn: (req: CANCELRECEIPTREQ) => collection.CancelledReceipts(req),
    onSuccess,
  });
  return mutation;
};
type OfficePendingProps = {
  onSuccess?: (res: MyReceipt[]) => void;
};
export const useOfficePendingApi = ({ onSuccess }: OfficePendingProps) => {
  const mutation = useMutation({
    mutationFn: (req: EMPREQ) => collection.OfficePendingReceipts(req),
    onSuccess,
  });
  return mutation;
};
type CancelPrintLogsProps = {
  onSuccess?: (res: MyReceipt[]) => void;
};
export const useCanceldPrintLogsApi = ({ onSuccess }: CancelPrintLogsProps) => {
  const mutation = useMutation({
    mutationFn: (req: EMPREQ & BILLINGDATEREQ) =>
      collection.CancelledPrintLogs(req),
    onSuccess,
  });
  return mutation;
};
type ReCeiptsProps = {
  onSuccess?: (res: MyReceipt[]) => void;
};
export const useReceiptsApi = ({ onSuccess }: ReCeiptsProps) => {
  const mutation = useMutation({
    mutationFn: (req: RECEIPTREQ) => collection.Receipts(req),
    onSuccess,
  });
  return mutation;
};
type GetValidationReportProps = {
  onSuccess?: (res: StatmValidation[]) => void;
};
export const useGetValidationReportApi = ({
  onSuccess,
}: GetValidationReportProps) => {
  const mutation = useMutation({
    mutationFn: (req: { insBilngDate?: string | Date | undefined }) =>
      collection.GetValidationReport(req),
    onSuccess,
  });
  return mutation;
};
type GetUnCollectBillPerBillGroupProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetUnCollectBillPerBillGrouptApi = ({
  onSuccess,
}: GetUnCollectBillPerBillGroupProps) => {
  const mutation = useMutation({
    mutationFn: (req: BILLINGDATEREQ) =>
      collection.GetUnCollectedBillsItemsPerBillgroup(req),
    onSuccess,
  });
  return mutation;
};
type GetUnCollectBillPerWalkProps = {
  onSuccess?: (res: CollectionDestributionItm[]) => void;
};
export const useGetUnCollectBillPerWalkApi = ({
  onSuccess,
}: GetUnCollectBillPerWalkProps) => {
  const mutation = useMutation({
    mutationFn: (req: BILLINGDATEREQ) =>
      collection.GetUnCollectedBillsItemsPerWalk(req),
    onSuccess,
  });
  return mutation;
};

type IGetPaymentReciptProps = {
  onSuccess?: (
    res: CollectionDestributionItem,
    req: GetPaymentReciptRequest,
  ) => void;
  onError?: (error: any, req: GetPaymentReciptRequest) => void;
};

export const useGetPaymentRecipt = ({
  onSuccess,
  onError,
}: IGetPaymentReciptProps) => {
  const mutation = useMutation({
    mutationFn: (req: GetPaymentReciptRequest) =>
      collection.GetPaymentRecipt(req),
    onSuccess,
    onError,
  });

  return mutation;
};

type IGetReciptsCustomer = {
  onSuccess?: (res: CollectionDestributionReceipt[], req: string) => void;
  onError?: (error: any, req: string) => void;
};

export const useGetReciptsCustomer = ({
  onSuccess,
  onError,
}: IGetReciptsCustomer) => {
  const mutation = useMutation({
    mutationFn: (custkey: string) => collection.GetReciptsCustomer(custkey),
    onSuccess,
    onError,
  });

  return mutation;
};

type IGetPaymentReciptsProps = {
  onSuccess?: (
    res: CollectionDestributionItem[],
    req: ReciptBulkItem[],
  ) => void;
  onError?: (error: any, req: ReciptBulkItem[]) => void;
};

export const useGetPaymentRecipts = ({
  onSuccess,
  onError,
}: IGetPaymentReciptsProps) => {
  const mutation = useMutation({
    mutationFn: (req: ReciptBulkItem[]) => collection.GetPaymentRecipts(req),
    onSuccess,
    onError,
  });

  return mutation;
};
