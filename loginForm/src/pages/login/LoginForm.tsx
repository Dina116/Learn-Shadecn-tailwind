import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import type { InputFormData } from "./types";
import { LoginSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LoginFormProps {
  onSubmit: (data: InputFormData) => void;
}
export default function LoginForm({ onSubmit }: LoginFormProps) {
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
  };
  return (
    <Card className="w-full max-w-md rounded-xl shadow-lg ">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Login to your account
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmition)}
        >
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="username"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="username"
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </span>
          )}
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
          <Button
            type="submit"
            variant="default"
            className="bg-blue-900 hover:bg-blue-800 transition-all duration-200
 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
