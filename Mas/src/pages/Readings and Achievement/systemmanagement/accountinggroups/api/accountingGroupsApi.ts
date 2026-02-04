import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";

export const getAccountingGroups = async () => {
  try {
    const response = await axiosClient.get("/LU/BillGroups");
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

