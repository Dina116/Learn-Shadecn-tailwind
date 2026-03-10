import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useLoginStore } from "../../hooks/login/useLoginStore";
import type { USERS } from "../../domain/entities/systemMangement/users";
import type { UserToken } from "../../domain/entities/common";
import { setCookie } from "../../utils/cookies";
import { useLoginOldAuthApi } from "../../hooks/apis/auth";
import { useLoginApi } from "../../hooks/apis/loginClient";
import type {
  LoginRequest,
  LoginResponse,
} from "grpc-web-client-gen/GoAuth_pb";
// import type { LoginRequest, LoginResponse } from "../../domain/entities/_gen/GoAuth_pb";

const useLogin = () => {

  const { updateLogin } = useLoginStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<LoginRequest.AsObject>({
    username: "",
    password: "",
    isportal: false,
  });

  const convert = (username: string, password: string) => {
    const x: string = `${username}:${password}`;
    const b64 = btoa(x);
    return b64;
  };

  console.log("BASE", import.meta.env.VITE_BASE_URL_DEV);
  console.log("GRPC", import.meta.env.VITE_grpcPort);

  const { mutate: mutateOldAuth } = useLoginOldAuthApi({
    onSuccess(data: USERS) {
      const authheader: string = convert(inputs.username, inputs.password);
      setCookie("token", authheader);
      localStorage.setItem("userLoged", JSON.stringify(data));
      const userToken: USERS = data; // jwt_decode(authheader);
      console.log(data, "res");
      updateLogin({ ...userToken, isSuccess: true } as UserToken);
      navigate("/home");
      // window.location.reload();
    },
    onError(err) {
      toast.error(window.decodeURIComponent(err ? err?.response?.data : ""));
    },
  });
  const { mutate, isSuccess, isError, isLoading, error } = useLoginApi({
    onSuccess(res: LoginResponse.AsObject) {
      setCookie("token", res?.token);
      console.log("jwt login");
      const userToken: UserToken = jwtDecode(res.token!); // jwt_decode(authheader);
      updateLogin({ ...userToken, isSuccess: true });
      navigate("/");
      // window.location.reload();
    },
    onError(err) {
      toast.error(window.decodeURIComponent(err ? err?.message : ""));
    },
  });

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState: LoginRequest.AsObject) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit clicked", inputs);
    if (import.meta.env.VITE_IS_GOV_BASIC) {
      mutateOldAuth({ username: inputs.username, password: inputs.password });
      return;
    }
    mutate({
      username: inputs.username,
      password: inputs.password,

      isportal: false,
    });
  };

  return {
    onChangeInputHandler,
    onClickSubmitHandler,
    setShowPassword,
    inputs,
    isSuccess,
    isError,
    isLoading,
    error,
    showPassword,
  };
};

export const useLoginViewModel = useLogin;
