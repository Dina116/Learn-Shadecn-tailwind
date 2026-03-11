/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import type {
  LoginRequest,
  LoginResponse,
} from "../../domain/entities/_gen/GoAuth_pb";
import { loginClient as LoginClient } from "../../domain/entities/_gen/GoAuth_pb.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://mas3:7000",
  format: "binary",
});

const client = new LoginClient(transport);

const signIn = async (req: LoginRequest): Promise<LoginResponse> => {
  try {
    const data = await client.signIn(req);
    return data.response;
  } catch (err: any) {
    throw new Error(err?.message || "Login API failed");
  }
};

type Props = {
  onSuccess?: (res: LoginResponse, req: LoginRequest) => void;
  onError?: (err: Error) => void;
};

export const useLoginApi = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: signIn,
    onSuccess,
    onError,
  });
  return mutation;
};
