/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { reading } from '@/app/services';
import {
  CANCELPREPARETOALLREQ,
  IHHProcessResponceMessage,
  MAS2BILLINGREQ,
} from '@/domain/entities/hhProcessResponseMessage';
import {
  IBill2masReq,
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  IModyfyReadingReq,
  IUpdateInfoReq,
  OntherDataRequest,
  REJECTPORTALREQ,
  READING,
  READINGIMGHISTREQ,
} from '@/domain/entities/reading';
import { GETMETERINFOREQ, HANDMHST } from '@/domain/entities/handMhSt';
import { Odata } from '@/app/httpclient/odata';
import {
  CONNDTLTARRIFAALLOC,
  GETCONNTARRIFAREQ,
  UPDATECONNTARRIFAREQ,
} from '@/domain/entities/connDtlTarifaAlloc';
import { HHBCYC } from '@/domain/entities/hhBcyc';
import { PortalReadingRejection } from '@/app/repositories-impl/contracts/PortalReadingRejection';
import { GIZAMETER, GIZAMETERREQ } from '@/domain/entities/gizaMeter';
import { READINGSTATUSITEM } from '@/domain/entities/readingstatusItem';
import { MAPLOCATION } from '@/domain/entities/mapLocation';
import {
  ICustomerMeterReq,
  ICustomerMeters,
  IHandReadings,
  IHandReadingsReq,
} from '@/domain/entities/customerMeters';
// import { IMGS } from '@/domain/entities/extReading';

export const billing2masReadingkey = 'billing2masReadingkey';
export const closeRWalkRoureKey = 'closeRWalkRoureKey';
export const closeRWalkRoureIndeviceKey = 'closeRWalkRoureIndeviceKey';
export const modifyReadingKey = 'modifyReadingKey';
export const meterInfoKey = 'meterInfoKey';
export const getReadingKey = 'getReadingKey';
export const getReadingsKey = 'getReadingsKey';
export const getMeterInfoKey = 'getMeterInfoKey';
export const getCustomerInfoKey = 'getCustomerInfoKey';
export const cancelPrepearToDeviceReadingKey =
  'cancelPrepearToDeviceReadingKey';
export const cancelReadingKey = 'cancelReadingKey';
export const closecolWalkReadingKey = 'closecolWalkReadingKey';
export const rePrepareReadingWalkKey = 'rePrepareReadingWalkKey';
export const reOpenReadingForGrpKey = 'rePrepareReadingWalkKey';
export const bcycKey = 'bcycKey';
export const gizaMeterKey = 'gizaMeterKey';
export const readingImgHistKey = 'readingImgHistKey';
export const readingImgKey = 'readingImgKey';

type ReadingsBilling2MAS = {
  onSuccess?: (res: IHHProcessResponceMessage, req: IBill2masReq) => void;
  onError?: (err: AxiosError, req: IBill2masReq) => void;
};
export const useReadingBilling2MAsApi = ({
  onSuccess,
  onError,
}: ReadingsBilling2MAS) => {
  const mutation = useMutation({
    mutationFn: (req: IBill2masReq) => reading.Billing2Mas(req),
    onSuccess,
    onError,
  });
  return mutation;
};
// export const useCloseRWalkRouteApi = (req: IBillGroupBookWalkBilng) => {
//   const query = useQuery<IHHProcessResponceMessage, Error>({
//     queryKey: [closeRWalkRoureKey, req],
//     queryFn: () => reading.CloseWalkRoute(req),
//     enabled: true,
//   });
//   return query;
// };
type CloseRWalkProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (err: AxiosError, req: IBillGroupBookWalkBilng) => void;
};

export const useCloseRWalkRoutApi = ({
  onSuccess,
  onError,
}: CloseRWalkProps) => {
  const mutate = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) => reading.CloseWalkRoute(req),
    onSuccess,
    onError,
  });

  return mutate;
};
// export const useCloseRWalkRouteIndeviceApi = (req: IBillGroupBookWalkBilng) => {
//   const query = useQuery<IHHProcessResponceMessage, Error>({
//     queryKey: [closeRWalkRoureIndeviceKey, req],
//     queryFn: () => reading.CloseRWalkInDevice(req),
//     enabled: true,
//   });
//   return query;
// };
type CloseRWalkInDeviceProps = {
  onSuccess?: (
    res: IHHProcessResponceMessage,
    req: IBillGroupBookWalkBilng,
  ) => void;
  onError?: (err: AxiosError, req: IBillGroupBookWalkBilng) => void;
};

export const useCloseRWalkRouteIndeviceApi = ({
  onSuccess,
  onError,
}: CloseRWalkInDeviceProps) => {
  const mutate = useMutation({
    mutationFn: (req: IBillGroupBookWalkBilng) =>
      reading.CloseRWalkInDevice(req),
    onSuccess,
    onError,
  });

  return mutate;
};
// /////////////////// dataMangement modifyreading

export const useGetCustomerInfoApi = (req: Odata) => {
  const query = useQuery<HANDMHST[], Error>({
    queryKey: [getCustomerInfoKey, req],
    queryFn: () => reading.getCustomerInfo(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

export const useGetMeterInfoApi = (req: GETMETERINFOREQ) => {
  const query = useQuery<HANDMHST, Error>({
    queryKey: [getMeterInfoKey, req],
    queryFn: () => reading.getMeterInfo(req),
    enabled: req.CUSTKEY.length > 0,
  });
  return query;
};

type UpdateMeterInfoProps = {
  onSuccess: (res: boolean) => void;
  onError: (err: AxiosError) => void;
};

export const useUpdateMeterInfoApi = ({
  onSuccess,
  onError,
}: UpdateMeterInfoProps) => {
  const mutation = useMutation({
    mutationFn: (req: IUpdateInfoReq) => reading.updateMeterInfo(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type ModifyReadingProps = {
  onSuccess: (res: IHHProcessResponceMessage, req: IModyfyReadingReq) => void;
  onError: (err: AxiosError, req: IModyfyReadingReq) => void;
};

export const useModifyReadingApi = ({
  onSuccess,
  onError,
}: ModifyReadingProps) => {
  const mutation = useMutation({
    mutationFn: (req: IModyfyReadingReq) => reading.ModifyReading(req),
    onSuccess,
    onError,
  });
  return mutation;
};

type ModifyReadingBulkProps = {
  onSuccess: (
    res: Record<string, IHHProcessResponceMessage>,
    req: IModyfyReadingReq[],
  ) => void;
  onError: (err: AxiosError, req: IModyfyReadingReq[]) => void;
};
export const useModifyReadingBulkNewApi = ({
  onSuccess,
  onError,
}: ModifyReadingBulkProps) => {
  const mutation = useMutation({
    mutationFn: (req: IModyfyReadingReq[]) => reading.ModifyReadingBulk(req),
    onSuccess,
    onError,
  });
  return mutation;
};

export const useGetReadingApi = (
  req: IBillGroupBookWalk & OntherDataRequest & Odata,
) => {
  const query = useQuery<READING[], Error>({
    queryKey: [getReadingsKey, req],
    queryFn: () => reading.Reading(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

// /////////////modifyReadingWalk
export const useGetConnTarifaAllocatApi = (req: GETCONNTARRIFAREQ) => {
  const query = useQuery<CONNDTLTARRIFAALLOC[], Error>({
    queryKey: [getReadingKey, req],
    queryFn: () => reading.GetConnTarifaAlloc(req),
    enabled: Object.keys(req).length > 0,
    cacheTime: 0,
    staleTime: 0,
  });
  return query;
};
type UpdateConnTarifaProps = {
  onSuccess?: (res: CONNDTLTARRIFAALLOC[]) => void;
  onMutate?: (req: UPDATECONNTARRIFAREQ) => void;
  onError?: () => void;
};
export const useUpdateConnTarifaApi = ({
  onSuccess,
  onMutate,
}: UpdateConnTarifaProps) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATECONNTARRIFAREQ) => reading.UpdateConnTarifa(req),
    onSuccess,
    onMutate,
  });
  return mutation;
};
type RejectionPoratalReadingProps = {
  onSuccess?: (res: boolean) => void;
  onMutate?: (req: REJECTPORTALREQ) => void;
  onError?: (er:any) => void;
};
export const useRejectionPortalReadingApi = ({
  onSuccess,
  onMutate,
  onError,
}: RejectionPoratalReadingProps) => {
  const mutation = useMutation({
    mutationFn: (req: REJECTPORTALREQ) => reading.RejectPortalReading(req),
    onSuccess,
    onMutate,
    onError,
  });
  return mutation;
};
type AcceptPoratalReadingProps = {
  onSuccess?: (res: boolean) => void;
  onError?: () => void;
  onMutate?: (CUSTKEY: string) => void;
};
export const useAcceptPortalReadingApi = ({
  onSuccess,
  onMutate,
  onError,
}: AcceptPoratalReadingProps) => {
  const mutation = useMutation({
    mutationFn: (CUSTKEY) => reading.AcceptPortalReading(CUSTKEY),
    onSuccess,
    onMutate,
    onError,
  });
  return mutation;
};

// ---------------------------------------------------------
interface IpropsReading {
  onSuccess: (res: IHHProcessResponceMessage) => void;
}

export const useCancelReadingApi = ({ onSuccess }: IpropsReading) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => reading.CancelReadings(req),
    onSuccess,
  });
  return mutation;
};
// ---------------------------------------------------------

export const useCancelPrepearToDeviceReadingApi = ({
  onSuccess,
}: IpropsReading) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => reading.CancelPrepearToDevice(req),
    onSuccess,
  });
  return mutation;
};
// ---------------------------------------------------------
export const useClosecolWalkReadingApi = ({ onSuccess }: IpropsReading) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => reading.CloseInDevice(req),
    onSuccess,
  });
  return mutation;
};
// ---------------------------------------------------------
export const useRePrepareReadingWalkApi = ({ onSuccess }: IpropsReading) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) => reading.ReOpenClosedInDevice(req),
    onSuccess,
  });
  return mutation;
};
// ---------------------------------------------------------
interface IuseReOpenColForGrpReq {
  onSuccess: (res: number) => void;
}
export interface IReOpenReadingForGrpReq {
  billgroup: string;
}

export const useReOpenReadingForGrpApi = ({
  onSuccess,
}: IuseReOpenColForGrpReq) => {
  const mutation = useMutation({
    mutationFn: (req: IReOpenReadingForGrpReq) =>
      reading.ReOpenClosededBillgroup(req),
    onSuccess,
  });
  return mutation;
};
export const useReOpenReadingForWalkOnHhApi = ({
  onSuccess,
}: IpropsReading) => {
  const mutation = useMutation({
    mutationFn: (req: IBillGroupBookWalk) =>
      reading.ReOpenClosedInDevice(req),
    onSuccess,
  });
  return mutation;
};
// ---------------------------------------------------------

export interface IBcycReq {
  deviceid: string;
  empid?: number;
}
export const useReadingBcycApi = (req: IBcycReq) => {
  const query = useQuery<HHBCYC[], Error>({
    queryKey: [bcycKey, req],
    queryFn: () => reading.Bcyc(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

export const useGizaMeterApi = (req: GIZAMETERREQ) => {
  const query = useQuery<GIZAMETER[], Error>({
    queryKey: [gizaMeterKey, req],
    queryFn: () => reading.GizaMeters(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};

type Mas2BillingProps = {
  onSuccess?: (res: IHHProcessResponceMessage, req: MAS2BILLINGREQ) => void;
  onError?: (err: AxiosError, req: MAS2BILLINGREQ) => void;
};
export const useMas2BillingApi = ({ onSuccess, onError }: Mas2BillingProps) => {
  const mutation = useMutation({
    mutationFn: (req: MAS2BILLINGREQ) => reading.Mas2Billing(req),
    onSuccess,
    onError,
  });
  return mutation;
};
type UpdateCustomerLocationProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useUpdateCustomerLocationApi = ({
  onSuccess,
}: UpdateCustomerLocationProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: IBillGroupBookWalk & {
        user: number;
      },
    ) => reading.UpdateCustomerLocation(req),
    onSuccess,
  });
  return mutation;
};
type GetReadingStatusByBookNoProps = {
  onSuccess?: (res: READINGSTATUSITEM[]) => void;
};
export const useGetReadingStatusByBookNoApi = ({
  onSuccess,
}: GetReadingStatusByBookNoProps) => {
  const mutation = useMutation({
    mutationFn: () => reading.GetReadingsStatusByBookNo(),
    onSuccess,
  });
  return mutation;
};

type MapLocationProps = {
  onSuccess?: (res: MAPLOCATION[]) => void;
};
export const useMapLocationReadingApi = ({ onSuccess }: MapLocationProps) => {
  const mutation = useMutation({
    mutationFn: () => reading.GetLocationReadingDescepancy(),
    onSuccess,
  });
  return mutation;
};
type CancelPrepareToDeviceAllProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useCancelPrepareToDeviceAllApi = ({
  onSuccess,
}: CancelPrepareToDeviceAllProps) => {
  const mutation = useMutation({
    mutationFn: (req: CANCELPREPARETOALLREQ) =>
      reading.CancelPrepearToDeviceAll(req),
    onSuccess,
  });
  return mutation;
};
type CancelReadingsProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const useCancelReadingAllApi = ({ onSuccess }: CancelReadingsProps) => {
  const mutation = useMutation({
    mutationFn: (req: CANCELPREPARETOALLREQ) => reading.CancelReadingsAll(req),
    onSuccess,
  });
  return mutation;
};

type GetProps = {
  onSuccess?: (res: HANDMHST[]) => void;
};
export const useGetApi = ({ onSuccess }: GetProps) => {
  const mutation = useMutation({
    mutationFn: (req: Odata) => reading.Get(req),
    onSuccess,
  });
  return mutation;
};
type AppentMimTypeProps = {
  onSuccess?: (res: string) => void;
};
export const useAppendMimeTypeApi = ({ onSuccess }: AppentMimTypeProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: PortalReadingRejection & {
        base64: string;
      },
    ) => reading.appendMimType(req),
    onSuccess,
  });
  return mutation;
};

export const useReadingImgsHistoryApi = (req: READINGIMGHISTREQ) => {
  const query = useQuery<string[], Error>({
    queryKey: [readingImgHistKey, req],
    queryFn: () => reading.ReadingImageHistory(req),
    enabled: Object.keys(req).length > 0 && req?.custkey?.length > 0,
  });
  return query;
};
export const useReadingImgApi = (req: READINGIMGHISTREQ) => {
  const query = useQuery<string, Error>({
    queryKey: [readingImgKey, req],
    queryFn: () => reading.ReadingImage(req),
    enabled: Object.keys(req).length > 0 && req?.custkey?.length > 0,
  });
  return query;
};

type UseGetCustomerMetersApiProps = {
  onSuccess?: (res: ICustomerMeters[]) => void;
};
export const useGetCustomerMetersApi = ({
  onSuccess,
}: UseGetCustomerMetersApiProps) => {
  const mutation = useMutation({
    mutationFn: (req: ICustomerMeterReq) => reading.GetCustomerMeters(req),
    onSuccess,
  });
  return mutation;
};

// export const useGetCustomerMetersApi = (req: ICustomerMeterReq) => {
//   const query = useQuery<ICustomerMeters, Error>({
//     queryKey: ['useGetCustomerMetersApiKey', req],
//     queryFn: () => reading.GetCustomerMeters(req),
//     enabled: Object.keys(req).length > 0,
//   });
//   return query;
// };

type UpdateCustomerMeterApiProps = {
  onSuccess?: (res: IHHProcessResponceMessage) => void;
};
export const UpdateCustomerMeterApi = ({
  onSuccess,
}: UpdateCustomerMeterApiProps) => {
  const mutation = useMutation({
    mutationFn: (req: ICustomerMeters) => reading.UpdateCustomerMeter(req),
    onSuccess,
  });
  return mutation;
};

type GetHandReadingsProps = {
  onSuccess?: (res: IHandReadings[]) => void;
};
export const GetHandReadingsApi = ({ onSuccess }: GetHandReadingsProps) => {
  const mutation = useMutation({
    mutationFn: (req: IHandReadingsReq) => reading.GetHandReadings(req),
    onSuccess,
  });
  return mutation;
};
