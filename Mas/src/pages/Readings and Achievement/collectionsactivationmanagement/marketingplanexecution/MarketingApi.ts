import toast from "react-hot-toast";
import axiosClient from "../../../../api/apiservices/axiosClient";
import type { GETMARKETINGPLANREQ, MARKETINGRESULT, Plan } from "../types";


export const ApplyMarketingPlan = async (
  filters: GETMARKETINGPLANREQ,
): Promise<MARKETINGRESULT> => {
  const params = new URLSearchParams({
    bilngDate: new Date(filters.bilngDate).toISOString(),
    plan_id: String(filters.plan_id),
    ...(filters.noMonthes && { noMonthes: String(filters.noMonthes) }),
    ...(filters.refAmount && { refAmount: String(filters.refAmount) }),
    ...(filters.target && { target: filters.target }),
    ...(filters.rejected && { rejected: filters.rejected }),
  });
  try {
    const response = await axiosClient.get(
      `/Marketing/GetMarketingPlan?${params.toString()}`,
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.error(error.message || "حدث خطأ أثناء التنفيذ ❌");
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "فشل في جلب تفاصيل الخطة",
    );
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetMarketingPlansList = async (): Promise<Plan[]> => {
  const response = await axiosClient.get("/Marketing/MarketingPlansList");
  return response.data;
};
