import { useState } from "react";
import type { companyFormType } from "./types";

export const useCompanyForm = () => {
  const [data, setData] = useState<companyFormType[]>([]);
  const handleSubmittion = (formData: companyFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: companyFormType,
    rowIndex: number,
    updatedData?: companyFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: companyFormType, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
