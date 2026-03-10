import { useMutation } from '@tanstack/react-query';
import type { ChangePasswordRequest, LoginRequest, USERS } from '../../domain/entities/systemMangement/users';
import { authClient } from '../../services';
// import { authClient } from '@/app/services';
// import {
//   USERS,
//   LoginRequest,
//   ChangePasswordRequest,
// } from '@/domain/entities/systemMangement/users';

type Props = {
  onSuccess?: (req: USERS) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
  onMutate?: (req?: LoginRequest) => void;
};

export const useLoginOldAuthApi = ({ onSuccess, onError, onMutate }: Props) => {
  const mutation = useMutation({
    mutationFn: (req: LoginRequest) => authClient.login(req),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};

type PasswordProps = {
  onSuccess?: (res: USERS | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
  onMutate?: (req?: ChangePasswordRequest) => void;
};
export const useChangePasswordApi = ({
  onSuccess,
  onError,
  onMutate,
}: PasswordProps) => {
  const mutation = useMutation({
    mutationFn: (req: ChangePasswordRequest) => authClient.changePassword(req),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};
