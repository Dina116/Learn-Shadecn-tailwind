import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";
import type { DeviceProcedureTypes } from "../types";

export const getDeviceProcedure = async () => {
  try {
    const response = await axiosClient.get("/Action/Get");
    console.log("get device procedure", response.data);
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
export const addDeviceProcedure = async (data: DeviceProcedureTypes) => {
  try {
    const response = await axiosClient.post("/Action/Post", data);
    console.log("add device procedure", response.data);
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
export const editDeviceProcedure = async ({
  id,
  data,
}: {
  id: number;
  data: DeviceProcedureTypes;
}) => {
  const response = await axiosClient.put("/Action/Put", data, {
    params: { id },
  });
  return response.data;
};
export const deleteDevice = async (id: number) => {
  return axiosClient.delete("/Action/Delete", { params: { id } });
};
