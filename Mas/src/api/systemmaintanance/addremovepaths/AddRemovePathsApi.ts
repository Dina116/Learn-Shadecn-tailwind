import axios from "axios";
import axiosClient from "../../apiservices/axiosClient";
import type { collectorType } from "../../../pages/Readings and Achievement/systemmaintanance/billscollection/addremovepaths/types";
// import type { WalkPath } from "../../../pages/Readings and Achievement/systemmaintanance/switchcollectorspath/types";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveChanges = async (data: collectorType[]) => {
  console.log("data from save change", data);
  const res = await axiosClient.post("/Books/UpdateBooksForEmp", data);
  return res.data;
};
