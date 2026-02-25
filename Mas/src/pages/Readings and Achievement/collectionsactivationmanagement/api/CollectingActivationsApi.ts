import axios from "axios";
import axiosClient from "../../../../api/apiservices/axiosClient";

export type AddMarketingPlanConfigProps = {
  description: string;
  refAmount: number;
  noMonthes: number;
};
export const AddMarketingPlanConfig = async ({
  description,
  noMonthes,
  refAmount,
}: AddMarketingPlanConfigProps) => {
  try {
    const res = await axiosClient.get(
      `/Marketing/AddMarketingPlanConfig?description=${description}&refAmount=${refAmount}&noMonthes=${noMonthes}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};
