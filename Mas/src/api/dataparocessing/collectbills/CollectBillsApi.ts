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

export const getPaymentMethods = async () => {
  try {
    const res = await axiosClient.get("/Collection/getPaymentMethods");
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch payment methods",
      );
    } else {
      throw new Error("Failed to fetch payment methods");
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

type ChangeMethodPayload = {
  PaymentMethod: number;
  Recipts: string[];
};
export const changePaymentMethod = async (payload: ChangeMethodPayload) => {
  try {
    const res = await axiosClient.post(
      "/Collection/ChangePayMethodUnPostedReciptsNos",
      payload,
    );

    if (typeof res.data === "string" && res.data.includes("خطأ")) {
      throw new Error(res.data);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "فشل تغيير طريقة الدفع");
    }
    throw error;
  }
};
