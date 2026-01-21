import { useState } from "react";
import type { formSchema } from "./formSchema";
import type z from "zod";

export const useJobForm = () => {
  const [data, setData] = useState<z.infer<typeof formSchema>[]>([]);
  const handleSubmittion = (formData: z.infer<typeof formSchema>) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: any,
    rowIndex: number,
    updatedData?: userFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: any, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
