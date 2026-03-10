/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { Odata } from '@/app/httpclient/odata';
import { customerSeq } from '@/app/services';
import { CUSTOMERSEQ } from '@/domain/entities/customerSeq';
import { Ipostreq } from '@/domain/entities/collection';

type GetBookSeqProps = {
  onSuccess?: (res: CUSTOMERSEQ[]) => void;
};
export const useGetBookSeqApi = ({ onSuccess }: GetBookSeqProps) => {
  const mutation = useMutation({
    mutationFn: (
      req: {
        bookno: string;
        walkno: string;
      } & Odata,
    ) => customerSeq.getBookSeq(req),
    onSuccess,
  });
  return mutation;
};

type BookSeqSaveProps = {
  onSuccess?: (res: void) => void;
};
export const useBookSeqSaveApi = ({ onSuccess }: BookSeqSaveProps) => {
  const mutation = useMutation({
    mutationFn: (req: CUSTOMERSEQ[]) => customerSeq.save(req),
    onSuccess,
  });
  return mutation;
};
type BookSeqPostProps = {
  onSuccess?: (res: boolean) => void;
};
export const useBookSeqPostApi = ({ onSuccess }: BookSeqPostProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.post(req),
    onSuccess,
  });
  return mutation;
};
type BookSeqPostCProps = {
  onSuccess?: (res: void) => void;
};
export const useBookSeqPostCApi = ({ onSuccess }: BookSeqPostCProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.postC(req),
    onSuccess,
  });
  return mutation;
};
type BookSeqPostRProps = {
  onSuccess?: (res: void) => void;
};
export const useBookSeqPostRApi = ({ onSuccess }: BookSeqPostRProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.postR(req),
    onSuccess,
  });
  return mutation;
};

type BookSeqPostHqProps = {
  onSuccess?: (res: void) => void;
};
export const useBookSeqPostHqApi = ({ onSuccess }: BookSeqPostHqProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.postHq(req),
    onSuccess,
  });
  return mutation;
};

type CustomerSeqPostHqCProps = {
  onSuccess?: (res: any[]) => void;
};
export const useBookSeqPostToHqCApi = ({
  onSuccess,
}: CustomerSeqPostHqCProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.PostToHqC(req),
    onSuccess,
  });
  return mutation;
};

type CustomerSeqPostHqRProps = {
  onSuccess?: (res: any[]) => void;
};
export const useBookSeqPostToHqRApi = ({
  onSuccess,
}: CustomerSeqPostHqRProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.PostToHqR(req),
    onSuccess,
  });
  return mutation;
};
type SendToServerProps = {
  onSuccess?: (res: any[]) => void;
};
export const useSendToServerRApi = ({ onSuccess }: SendToServerProps) => {
  const mutation = useMutation({
    mutationFn: (req: Ipostreq) => customerSeq.SendToServer(req),
    onSuccess,
  });
  return mutation;
};
