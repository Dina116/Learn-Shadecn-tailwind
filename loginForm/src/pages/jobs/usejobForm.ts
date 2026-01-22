import { useState } from "react";
import type { jobFormType } from "./types";

export const useJobForm = () => {
  const [data, setData] = useState<jobFormType[]>([]);
  const handleSubmittion = (formData: jobFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: jobFormType,
    rowIndex: number,
    updatedData?: jobFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: jobFormType, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
