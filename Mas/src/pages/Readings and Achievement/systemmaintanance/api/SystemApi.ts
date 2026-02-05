import axios from "axios";
import axiosClient from "../../../../apiservices/axiosClient";

export const getBillGroups = async () => {
  try {
    const res = await axiosClient.get("/LU/BillGroups");
    console.log("data from BillGrops", res.data);
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
export const getBooks = async (groupId: string, stationNo: number) => {
  const res = await axiosClient.get(
    `/Books/BookCycle?groups=${groupId}&STATION_NO=${stationNo}`,
  );
  return res.data;
};
export const getWalks = async (groupId: string, stationNo: number) => {
  const res = await axiosClient.get(
    `/Books/CustomerWalkCycle?groups=${groupId}&STATION_NO=${stationNo}`,
  );
  return res.data;
};
export const cancelStms = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Collection/CancelStms?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};
