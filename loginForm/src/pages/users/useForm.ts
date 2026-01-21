import { useState } from "react";
import type { userFormType } from "./UserForm";

export const useForm = () => {
  const [data, setData] = useState<userFormType[]>([]);
  const handleSubmittion = (formData: userFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  return { data, handleSubmittion };
};
