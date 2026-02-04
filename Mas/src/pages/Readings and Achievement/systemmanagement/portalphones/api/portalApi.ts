import axios from "axios";
import axiosClient from "../../../../../apiservices/axiosClient";
import type { PortalPhonesTypes } from "../types";

export const getPortalPhones = async () => {
  try {
    const response = await axiosClient.get("/Devices/Get");
    console.log("Portal Phones", response.data);
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
export const addPortal = async (data: PortalPhonesTypes) => {
  try {
    const response = await axiosClient.post("/Devices/Post", data);
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
export const editPortal = async ({
  id,
  data,
}: {
  id: string;
  data: PortalPhonesTypes;
}) => {
  console.log("Sending edit request", { id, data });
  const response = await axiosClient.put("/Devices/Put", data, {
    params: { id },
  });
  return response.data;
};
export const deletePortal = async (id: number) => {
  return axiosClient.delete("Devices/Delete", { params: { id } });
};
