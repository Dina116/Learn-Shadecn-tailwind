import { useState } from "react";
import type { PortalPhonesTypes } from "../../../pages/Readings and Achievement/systemmanagement/portalphones/types";


export const useForm = () => {
  const [data, setData] = useState<PortalPhonesTypes[]>([]);
  const handleSubmittion = (formData: PortalPhonesTypes) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  const handleEdit = (
    row: PortalPhonesTypes,
    rowIndex: number,
    updatedData?: PortalPhonesTypes,
  ) => {
    if (!updatedData) return;
    setData((prev) =>
      prev.map((item, index) => (index === rowIndex ? updatedData : item)),
    );
    console.log("Updated row:", updatedData);
  };

  const handleDelete = (row: PortalPhonesTypes, rowIndex: number) => {
    setData((prev) => prev.filter((_, i) => i !== rowIndex));
  };
  return { data, handleSubmittion, handleEdit, handleDelete };
};
