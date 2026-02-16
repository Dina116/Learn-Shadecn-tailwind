import axios from "axios";
import axiosClient from "../../../../api/apiservices/axiosClient";
import type { formtDataType } from "../types";

////////////Collectings/////////////////
export const UpdateCustomerBills = async ({
  custkey,
  startDate,
  endDate,
}: {
  custkey: string;
  startDate: string;
  endDate: string;
}) => {
  try {
    const res = await axiosClient.get(
      `/Collection/UpdateCustomerBills?custkey=${custkey}&startDate=${startDate}&endDate=${endDate}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};

export const CollectBills = async ({
  custkey,
  disable_mobile_edit,
  enableDiscount,
}: {
  custkey: string;
  disable_mobile_edit: boolean;
  enableDiscount: boolean;
}) => {
  try {
    const res = await axiosClient.get(
      `/Collection/CollectBill?custkey=${custkey}&locked=${disable_mobile_edit}&enableDiscount=${enableDiscount}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};

export const CancelCollection = async ({ custkey }: { custkey: string }) => {
  try {
    const res = await axiosClient.get(
      `/Collection/CancelCollection?custkey=${custkey}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to cancel collection",
      );
    }
    throw new Error("Failed to cancel collection");
  }
};

export const RejectCollection = async ({
  custkey,
  payment_no,
  collection_id,
}: {
  custkey: string;
  payment_no: number;
  collection_id: number;
}) => {
  try {
    const res = await axiosClient.get(
      `/Collection/RejectReceiptPost?custkey=${custkey}&payment_no=${payment_no}&collection_id=${collection_id}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to cancel collection",
      );
    }
    throw new Error("Failed to cancel collection");
  }
};

//////////////Readings/////////////////
export const ModifyReading = async ({
  custkey,
  note,
  name,
}: {
  custkey: string;
  note: string;
  name: string;
}) => {
  try {
    const res = await axiosClient.get(
      `/Reading/ModifyReading?custkey=${custkey}&note=${note}&name=${name}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to modify reading",
      );
    }
  }
};

export const UpdateMetroInfo = async ({
  custkey,
  meter_ref,
  meter_type,
  new_meter_type,
  new_no_dials,
}: {
  custkey: string;
  meter_ref: string;
  meter_type: string;
  new_meter_type: string;
  new_no_dials: number;
}) => {
  try {
    const res = await axiosClient.get(
      `/Reading/UpdateMeterInfo?custkey=${custkey}&meter_ref=${meter_ref}&meter_type=${meter_type}&new_meter_type=${new_meter_type}&new_no_dials=${new_no_dials}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to update metro info",
      );
    }
  }
};

export const ModifyPrevReading = async ({
  description,
  date,
  custkey,
  reading,
}: {
  description: string;
  date: string;
  custkey: string;
  reading: string;
}) => {
  try {
    const res = await axiosClient.get(
      `/Billing/ModifyPrevReading?comment=${description}&date=${date}&custkey=${custkey}&reading=${reading}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to modify previous reading",
      );
    }
  }
};

export const UpdateCustomerReader = async (data: formtDataType) => {
  try {
    const res = await axiosClient.post(`/Reading/UpdateCustomerMeter`, data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to update customer reader",
      );
    }
  }
};
