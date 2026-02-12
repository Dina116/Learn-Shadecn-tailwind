import { useState } from "react";
import type { SwitchFormType } from "./types";

export const useSwitchForm = () => {
  const [data, setData] = useState<SwitchFormType[]>([]);
  const handleSubmittion = (formData: SwitchFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: SwitchFormType,
    rowIndex: number,
    updatedData?: SwitchFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: SwitchFormType, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
