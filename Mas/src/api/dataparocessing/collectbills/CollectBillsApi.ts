import axios from "axios";
import axiosClient from "../../apiservices/axiosClient";

export const getCollectors = async () => {
  try {
    const res = await axiosClient.get("/Emp/GetCollectors");
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

export const GetUnPostedDetails = async ({ empid }: { empid: number }) => {
  try {
    const res = await axiosClient.get(
      `/Collection/GetUnPostedDetails?empid=${empid}`,
    );
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
export const collectBill = async ({
  payment_no,
  empid,
  locked,
}: {
  payment_no: string;
  empid: number;
  locked: boolean;
}) => {
  try {
    const res = await axiosClient.get(
      `/Collection/CollectBill?payment_no=${payment_no}&empid=${empid}&locked=${locked}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const serverMessage =
        error.response?.data?.message || error.response?.data;
      throw new Error(serverMessage || "فشل في تحصيل الفاتورة");
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("حدث خطأ غير معروف");
    }
  }
};
