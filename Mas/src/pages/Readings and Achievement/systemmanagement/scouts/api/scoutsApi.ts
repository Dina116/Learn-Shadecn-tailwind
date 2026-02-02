import axiosClient from "../../../../../apiservices/axiosClient";
import axios from "axios";

export const getScouts = async () => {
  try {
    const response = await axiosClient.get("/Emp/Get");
    console.log("scouts data", response.data);
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
