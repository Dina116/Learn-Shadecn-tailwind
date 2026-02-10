import axios from "axios";
import axiosClient from "../../apiservices/axiosClient";


export const getEmp = async () => {
  try {
    const res = await axiosClient.get("/Emp/Get");
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};
export const getBook = async (empid: string) => {
  const res = await axiosClient.get(`/Books/BookCycleByEmpId?empid=${empid}`);
  return res.data;
};
