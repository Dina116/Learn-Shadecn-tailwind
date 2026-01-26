import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "./Validation";
import type { InputFormData, LoginFormProps } from "./types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const navigation = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const handleSubmition = (data: InputFormData) => {
    console.log("submitting....");
    onSubmit(data);
    navigation("/home");
    console.log("submit successfully ....");
  };
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

      <form className="space-y-4" onSubmit={handleSubmit(handleSubmition)}>
        <div className="space-y-1">
          <Typography className="text-[#005a8e] text-right text-xs font-bold text-sky-900">
            الاسم
          </Typography>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                fullWidth
                variant="standard"
                placeholder="اسم الدخول"
                size="small"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
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
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                fullWidth
                type="password"
                variant="standard"
                placeholder="........"
                size="small"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOffIcon className="text-gray-400 !text-xl" />
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
            variant="contained"
            className="text-center bg-[#007bbd] hover:bg-[#005a8e] py-1.5 text-base font-bold capitalize shadow-md"
          >
            تسجيل الدخول
          </Button>
        </div>
      </form>
    </Paper>
  );
}
