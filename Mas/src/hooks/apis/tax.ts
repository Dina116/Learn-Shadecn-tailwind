/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { taxService } from '@/app/services';
import { ADDPAYTAXPORTALREQ, GETSTATUSREQ, TAX } from '@/domain/entities/tax';
import { ReqAllow } from '@/domain/entities/bookCycle';

export const allowTaxPortalKey = 'allowTaxPortalKey';
type AllowTaxPortal = {
  onSuccess?: (res: TAX, req: ReqAllow) => void;
  onMutate?: (req: ReqAllow) => void;
  onError?: (error: any, req: ReqAllow) => void;
};

export const useAllowTaxPortalApi = ({
  onSuccess,
  onMutate,
  onError,
}: AllowTaxPortal) => {
  const mutation = useMutation({
    mutationFn: (req: ReqAllow) => taxService.AllowTaxPortal(req),
    onSuccess,
    onMutate,
    onError,
  });
  return mutation;
};

export const getStatusKey = 'getStatusKey';
export const useGetStatusApi = (req: GETSTATUSREQ) => {
  const query = useQuery<boolean, Error>({
    queryKey: [getStatusKey, req],
    queryFn: () => taxService.GetStatus(req),
    enabled: Object.keys(req).length > 0,
  });
  return query;
};
type AddPaymentTaxPortalProps = {
  onSuccess?: (res: boolean, req: ADDPAYTAXPORTALREQ) => void;
  onError?: (error: AxiosError, req: ADDPAYTAXPORTALREQ) => void;
};
export const useAddPaymntTaxPortalApi = ({
  onSuccess,
  onError,
}: AddPaymentTaxPortalProps) => {
  const mutation = useMutation({
    mutationFn: (req: ADDPAYTAXPORTALREQ) =>
      taxService.AddPaymentTaxPortal(req),
    onSuccess,
    onError,
  });
  return mutation;
};
