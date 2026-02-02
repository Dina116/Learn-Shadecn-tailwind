import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";

export const getUsers = async () => {
  try {
    const response = await axiosClient.get("/Stations/Get");
    console.log("users data", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch users");
    } else {
      throw new Error("Failed to fetch usesr");
    }
  }
};
