import axios from "axios";
import axiosClient from "../../apiservices/axiosClient";


export const getCollectors = async () => {
  try {
    const res = await axiosClient.get("/Emp/GetCollectors");
    console.log("res", res.data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Collectors",
      );
    } else {
      throw new Error("Failed to fetch Collectors");
    }
  }
};

export const loadSwitchList = async (empid: string) => {
  try {
    const res = await axiosClient.get(`/Books/SwitchList?empid=${empid}`);
    console.log("res loadSwitchList", res.data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Collectors",
      );
    } else {
      throw new Error("Failed to fetch Collectors");
    }
  }
};
