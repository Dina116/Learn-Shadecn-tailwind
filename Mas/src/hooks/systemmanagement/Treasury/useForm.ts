import { useState } from "react";
import type { TreasuryTypes } from "../../../pages/Readings and Achievement/systemmanagement/treasuryinside/types";

export const useForm = () => {
  const [data, setData] = useState<TreasuryTypes[]>([]);
  const handleSubmittion = (formData: TreasuryTypes) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: TreasuryTypes,
    rowIndex: number,
    updatedData?: TreasuryTypes,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: TreasuryTypes, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
