import {
  Button,
  CircularProgress,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useNavigate } from "react-router-dom";
import { LoginSchema } from "./Validation";
// import type { LoginFormProps } from "./types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginViewModel } from "./useLogin";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function LoginForm() {
  const {
    onChangeInputHandler,
    onClickSubmitHandler,
    inputs,
    isLoading,
    showPassword,
    setShowPassword,
  } = useLoginViewModel();
  // const navigation = useNavigate();
  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  // const handleSubmition = (data: InputFormData) => {
  //   console.log("submitting....");
  //   onSubmit(data);
  //   navigation("/home");
  //   console.log("submit successfully ....");
  // };
  return (
    <Paper
      elevation={6}
      className="w-full max-w-[350px] p-6 rounded-xl bg-gray-100 shadow-2xl"
    >
      <Typography
        variant="h6"
        className="text-[#007bbd] text-center font-extrabold mb-6 text-sky-900"
      >
        تسجيل الدخول
      </Typography>

      <form className="space-y-4" onSubmit={onClickSubmitHandler}>
        <div className="space-y-1">
          <Typography className="text-[#005a8e] text-right text-xs font-bold text-sky-900">
            الاسم
          </Typography>
          <Controller
            control={control}
            render={({ field: { onBlur } }) => (
              <TextField
                id="Username"
                fullWidth
                variant="standard"
                required
                placeholder="اسم الدخول"
                size="small"
                onBlur={onBlur}
                onChange={onChangeInputHandler}
                value={inputs.username}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className="text-gray-400 !text-xl" />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: {
                    className: "py-1 text-sm",
                    style: {
                      textAlign: "right",
                      direction: "rtl",
                    },
                  },
                }}
              />
            )}
            name="username"
          />
          {errors.username && (
            <span className="flex justify-end text-red-500 text-sm mt-1">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <Typography className="text-[#005a8e] text-right text-xs font-bold text-sky-900">
            كلمة المرور
          </Typography>
          <Controller
            control={control}
            render={({ field: { onBlur } }) => (
              <TextField
                id="Password"
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="standard"
                placeholder="••••••••"
                required
                size="small"
                onBlur={onBlur}
                onChange={onChangeInputHandler}
                value={inputs.password}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </InputAdornment>
                    ),
                  },
                  htmlInput: {
                    className: "py-1 text-sm",
                    style: {
                      textAlign: "right",
                      direction: "rtl",
                    },
                  },
                }}
              />
            )}
            name="password"
          />
          {errors.password && (
            <span className="flex justify-end text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-center">
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            endIcon={
              isLoading ? (
                <CircularProgress
                  thickness={5}
                  size="30px"
                  color="primary"
                  sx={{
                    marginRight: 3,
                  }}
                />
              ) : null
            }
            className="text-center bg-[#007bbd] hover:bg-[#005a8e] py-1.5 text-base font-bold capitalize shadow-md"
          >
            تسجيل الدخول
          </Button>
        </div>
      </form>
    </Paper>
  );
}
