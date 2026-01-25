import { useState } from "react";
import type { departmentFormType } from "./types";

export const useDepartmentForm = () => {
  const [data, setData] = useState<departmentFormType[]>([]);
  const handleSubmittion = (formData: departmentFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: departmentFormType,
    rowIndex: number,
    updatedData?: departmentFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: departmentFormType, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
