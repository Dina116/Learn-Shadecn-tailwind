import axiosClient from "../../../../../api/apiservices/axiosClient";
import axios from "axios";
import type { scoutsFormType } from "../scoutstypes";

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
export const addScouts = async (data: scoutsFormType) => {
  try {
    const response = await axiosClient.post("/Emp/Post", data);
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
export const deleteScout = async (id: number) => {
  return axiosClient.delete(`/Emp/Delete`, { params: { id } });
};
export const editScout = async ({
  id,
  data,
}: {
  id: number;
  data: scoutsFormType;
}) => {
  console.log("Sending edit request", { id, data });
  const response = await axiosClient.put(`/Emp/Put`, data, { params: { id } });
  return response.data;
};
