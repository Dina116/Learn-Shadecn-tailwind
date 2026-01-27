import { useState } from "react";
import type { scoutsFormType } from "./scoutstypes";


export const useForm = () => {
  const [data, setData] = useState<scoutsFormType[]>([]);
  const handleSubmittion = (formData: scoutsFormType) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: scoutsFormType,
    rowIndex: number,
    updatedData?: scoutsFormType,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: scoutsFormType, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
