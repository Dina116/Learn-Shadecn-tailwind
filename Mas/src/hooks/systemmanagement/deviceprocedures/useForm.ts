import { useState } from "react";
import type { DeviceProcedureTypes } from "../../../pages/Readings and Achievement/systemmanagement/deviceprocedures/types";


export const useForm = () => {
  const [data, setData] = useState<DeviceProcedureTypes[]>([]);
  const handleSubmittion = (formData: DeviceProcedureTypes) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: DeviceProcedureTypes,
    rowIndex: number,
    updatedData?: DeviceProcedureTypes,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: DeviceProcedureTypes, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
