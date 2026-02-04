import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";
export const getMeterWalks = async (groups: string) => {
  try {
    const res = await axiosClient.get("/Books/MeterWalks", {
      params: { groups },
    });
    console.log("Raw API response for getCustomerWalks:", res.data);
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
export const getReaders = async () => {
  try {
    const res = await axiosClient.get("/Emp/GetReaders");
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
export const unassignedMeterWalks = async (unassigned: boolean) => {
  try {
    const res = await axiosClient.get("/Books/MeterWalks", {
      params: { unassigned },
    });
    console.log("Raw API response for unassignedWalks:", res.data);
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
