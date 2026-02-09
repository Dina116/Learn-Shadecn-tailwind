import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";

export const getCollectors = async () => {
  try {
    const res = await axiosClient.get("/Emp/GetCollectors");
    console.log("res", res.data);
    return res.data;
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
