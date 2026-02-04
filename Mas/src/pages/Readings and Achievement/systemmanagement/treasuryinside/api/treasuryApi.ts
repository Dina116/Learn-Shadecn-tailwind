import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";
import type { TreasuryTypes } from "../types";

export const getTreasuryData = async () => {
  try {
    const response = await axiosClient.get("/CashBox/Get");
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
export const addNewTreasury = async (data: TreasuryTypes) => {
  try {
    const response = await axiosClient.post("/CashBox/Post", data);
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
