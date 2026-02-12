import axios from "axios";
import axiosClient from "../../../../api/apiservices/axiosClient";

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

export const getEmp = async () => {
  const res = await axiosClient.get("/Emp/Get");
  // console.log("emp data from api", res.data);
  return res.data;
};

//==========Collectings================
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

export const cancelPrepearToDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Collection/CancelPrepearToDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const closeInDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Collection/CloseInDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const reOpenClosedInDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Collection/ReOpenClosedInDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const reOpenClosededBillgroupBook = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Collection/ReOpenClosededBillgroupBook?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

// ================Readings=================

export const cancelReadings = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Reading/CancelReadings?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const CancelPrepearReadingsToDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `Reading/CancelPrepearToDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const closeInReadingsDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Reading/CloseInDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const reOpenClosedInReadingsDevice = async (data: {
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_DESCRIPTION: string;
}) => {
  const res = await axiosClient.get(
    `/Reading/ReOpenClosedInDevice?BILLGROUP=${data.BILLGROUP}&BOOK_NO=${data.BOOK_NO}&WALK_NO=${data.WALK_DESCRIPTION}`,
  );
  return res.data;
};

export const reOpenClosededReadingsBillgroup = async (data: {
  BILLGROUP: string;
}) => {
  const res = await axiosClient.get(
    `/Reading/ReOpenClosededBillgroup?billgroup=${data.BILLGROUP}`,
  );
  return res.data;
};
