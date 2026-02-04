import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";

export const getConsumers = async () => {
  try {
    const response = await axiosClient.get("/LU/ConsumptionGroupTypes/Get");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch scouts",
      );
    } else {
      throw new Error("Failed to fetch scouts");
    }
  }
};
