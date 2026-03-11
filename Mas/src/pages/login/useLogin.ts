import { useState } from "react";
import { useLoginStore } from "../../hooks/login/useLoginStore";
import { useNavigate } from "react-router-dom";

import { setCookie } from "../../utils/cookies";
import type { UserToken } from "./types";
import { jwtDecode } from "jwt-decode";
import { useLoginApi } from "../../api/login/loginClient";
import toast from "react-hot-toast";
import type {
  LoginRequest,
  LoginResponse,
} from "../../domain/entities/_gen/GoAuth_pb";

export default function useLogin() {
  const navigate = useNavigate();
  const { updateLogin } = useLoginStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputs, setInputs] = useState<LoginRequest>({
    Username: "",
    Password: "",
    ISPORTAL: false,
  });
  console.log("BASE", import.meta.env.VITE_BASE_URL_DEV);
  console.log("GRPC", import.meta.env.VITE_grpcPort);

  const { mutate, isSuccess, isError, isLoading, error } = useLoginApi({
    onSuccess(res: LoginResponse) {
      setCookie("token", res?.Token);
      console.log("jwt login");
      const userToken: UserToken = jwtDecode(res.Token!);
      updateLogin({ ...userToken, isSuccess: true });
      navigate("/home");
    },
    onError(err) {
      toast.error(window.decodeURIComponent(err ? err?.message : ""));
    },
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState: LoginRequest) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit clicked", inputs);
    mutate({
      Username: inputs.Username,
      Password: inputs.Password,
      ISPORTAL: inputs.ISPORTAL,
    });
  };
  return {
    onChangeInput,
    onClickSubmit,
    setShowPassword,
    inputs,
    isSuccess,
    isError,
    isLoading,
    error,
    showPassword,
  };
}
