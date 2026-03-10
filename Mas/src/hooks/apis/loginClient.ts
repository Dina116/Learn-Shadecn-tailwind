import { useMutation } from "@tanstack/react-query";
// import type { LoginRequest, LoginResponse } from '../../domain/entities/_gen/GoAuth_pb';
// import { loginClient } from '../../services';
import { signInApi } from "../../app/repositories-impl/grpc/login/api";
import type {
  LoginRequest,
  LoginResponse,
} from "grpc-web-client-gen/GoAuth_pb";
// import { loginClient } from '@/app/services';
// import { LoginRequest, LoginResponse } from '@/domain/entities/_gen/GoAuth_pb';

// const signIn = async (req: LoginRequest) => {
//   const data = await loginClient.signIn(req);
//   return data.response;
// };

type Props = {
  onSuccess?: (res: LoginResponse.AsObject, req: LoginRequest.AsObject) => void;
  onError?: (err: Error) => void;
};

export const useLoginApi = ({ onSuccess, onError }: Props) => {
  console.log("hello from useLoginApi");
  const mutation = useMutation({
    mutationFn: (req: LoginRequest.AsObject) => signInApi(req),
    onSuccess,
    onError,
  });

  return mutation;
};
