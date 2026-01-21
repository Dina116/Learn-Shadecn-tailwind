import { useState } from "react";
import type { formSchema } from "./formSchema";
import type z from "zod";

export const useJobForm = () => {
  const [data, setData] = useState<z.infer<typeof formSchema>[]>([]);
  const handleSubmittion = (formData: z.infer<typeof formSchema>) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  return { data, handleSubmittion };
};