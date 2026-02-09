import { useState } from "react";
import type { ConsumerTypes } from "../../../pages/Readings and Achievement/systemmanagement/consumeractivities/ConsumerTypes";


export const useForm = () => {
  const [data, setData] = useState<ConsumerTypes[]>([]);
  const handleSubmittion = (formData: ConsumerTypes) => {
    setData((prev) => [...prev, formData]);
    console.log("Login data submitted:", formData);
  };
  return { data, handleSubmittion };
};
