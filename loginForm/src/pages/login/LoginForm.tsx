import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import type { InputFormData, LoginFormProps } from "./types";
import { LoginSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AuthIconSvg from "./AuthIconSvg";

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const navigation = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormData>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const handleSubmition = (data: InputFormData) => {
    onSubmit(data);
    navigation("/home");
  };

  return (
    <div className="w-full lg:w-2/5 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <AuthIconSvg />
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmition)}
        >
          <label
            htmlFor="username"
            className="flex justify-end text-sm font-small"
          >
            <span className="text-red-500">*</span> الاسم
          </label>
          <Controller
            control={control}
            rules={{ required: "هذا الحقل مطلوب" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                className="flex justify-end text-right"
                placeholder="اسم الدخول"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="username"
          />
          {errors.username && (
            <span className="flex justify-end text-red-500 text-sm mt-1">
              {errors.username.message}
            </span>
          )}
          <label
            htmlFor="password"
            className="flex justify-end text-sm font-small"
          >
            <span className="text-red-500">*</span> كلمة المرور
          </label>
          <Controller
            control={control}
            rules={{ required: "هذا الحقل مطلوب" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                className="flex justify-end text-right"
                placeholder="******"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <span className="flex justify-end text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="default"
              className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-12 rounded transition-all duration-200 "
            >
              تسجيل الدخول
            </Button>
          </div>
        </form>
        <div className="mt-8 text-center text-xs text-gray-500 flex justify-between items-center">
          <span>Powerd By MAS</span>
          <span>v3.9.5</span>
          <span>المنظومة الموحدة لادارة صلاحيات المستخدمين</span>
        </div>
      </div>
    </div>
  );
}
