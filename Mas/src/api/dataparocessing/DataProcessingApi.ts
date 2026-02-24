import axios from "axios";
import axiosClient from "../apiservices/axiosClient";
import type {
  CancelCollectionParams,
  formtDataType,
  GetLastReceiptsProps,
  ModifyReadingParams,
  UpdateCustomerReaderProps,
  UpdateMetroInfoParam,
} from "../../pages/Readings and Achievement/dataprocessing/types";

////////////Collectings/////////////////
export const UpdateCustomerBills = async ({
  CUSTKEY,
  startDate,
  endDate,
}: {
  CUSTKEY: string;
  startDate: string;
  endDate: string;
}) => {
  try {
    const res = await axiosClient.get(
      `/Collection/UpdateCustomerBills?custkey=${CUSTKEY}&startDate=${startDate}&endDate=${endDate}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};

export type CollectBillsParams = {
  CUSTKEY: string;
  PAYMENT_NO: string;
  empid: number;
  locked: boolean;
  enableDiscount: boolean;
  discount?: string;
  discountDocumentNo?: string;
  chequeNo?: string;
  chequeBank?: string;
};

export const CollectBills = async (payload: CollectBillsParams) => {
  const params = new URLSearchParams({
    custkey: payload.CUSTKEY,
    payment_no: payload.PAYMENT_NO,
    empid: String(payload.empid),
    locked: String(payload.locked),
    enableDiscount: String(payload.enableDiscount),
  });
  if (payload.discount && String(payload.discount).trim() !== "") {
    params.append("discount", String(payload.discount));
  }
  if (
    payload.discountDocumentNo &&
    String(payload.discountDocumentNo).trim() !== ""
  ) {
    params.append("discountDocumentNo", String(payload.discountDocumentNo));
  }
  if (payload.chequeNo && String(payload.chequeNo).trim() !== "") {
    params.append("chequeNo", String(payload.chequeNo));
  }
  if (payload.chequeBank && String(payload.chequeBank).trim() !== "") {
    params.append("chequeBank", String(payload.chequeBank));
  }
  console.log("hi from CollectBills ");
  const finalUrl = `/Collection/CollectBill?${params.toString()}`;
  console.log("Final URL for ModifyReading:", finalUrl);
  try {
    const res = await axiosClient.get(finalUrl);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to modify reading",
      );
    }
  }
};



export const CancelCollection = async (payload: CancelCollectionParams) => {
  const params = new URLSearchParams({
    custkey: payload.custkey,
    payment_no: payload.payment_no,
    collectionId: String(payload.collectionId),
    cancelledAmount: String(payload.cancelledAmount),
    receipt_no: payload.receipt_no,
  });

  const finalUrl = `/Collection/CancelCollection?${params.toString()}`;
  console.log("Cancelling with URL:", finalUrl);

  try {
    const res = await axiosClient.get(finalUrl);
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

export const GetPayment = async (payload: formtDataType) => {
  const params = new URLSearchParams();

  console.log("custkey from GetPayment", payload.CUSTKEY);
  if (payload.CUSTKEY && String(payload.CUSTKEY).trim() !== "") {
    params.append("custkey", String(payload.CUSTKEY));
  }
  if (payload.PAYMENT_NO && String(payload.PAYMENT_NO).trim() !== "") {
    params.append("payment_no", String(payload.PAYMENT_NO));
  }

  const finalUrl = `/Collection/GetPayment?${params.toString()}`;
  console.log("Final URL for GetPayment:", finalUrl);
  try {
    const res = await axiosClient.get(finalUrl);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to GetPayment");
    }
  }
};

export const GetLastReceipts = async (payload: GetLastReceiptsProps) => {
  const params = new URLSearchParams({
    custkey: String(payload.CUSTKEY),
    includeDeposted: String(payload.includeDeposted),
  });
  console.log("custkey from GetLastReceipts", payload.CUSTKEY);
  const finalUrl = `Collection/GetLastReceipts?${params.toString()}`;
  console.log("Final URL for GetLastReceipts:", finalUrl);
  try {
    const res = await axiosClient.get(finalUrl);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to GetLastReceipts",
      );
    }
  }
};

//////////////Readings/////////////////

export const ModifyReading = async (payload: ModifyReadingParams) => {
  const params = new URLSearchParams({
    custkey: payload.CUSTKEY,
    note: payload.note,
    empid: String(payload.empid),
    cycleid: String(payload.cycleid),
  });
  if (payload.reading) {
    params.append("reading", String(payload.reading));
  }
  if (payload.MODIFIED_AVRG_CONSUMP) {
    params.append(
      "MODIFIED_AVRG_CONSUMP",
      String(payload.MODIFIED_AVRG_CONSUMP),
    );
  }
  const finalUrl = `/Reading/ModifyReading?${params.toString()}`;
  console.log("Final URL for ModifyReading:", finalUrl);
  try {
    const res = await axiosClient.get(finalUrl);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to modify reading",
      );
    }
  }
};

export const UpdateMetroInfo = async (payload: UpdateMetroInfoParam) => {
  const params = new URLSearchParams({
    CUSTKEY: payload.CUSTKEY,
    meter_ref: payload.meter_ref,
    meter_type: payload.meter_type,
    new_meter_type: payload.new_meter_type,
    new_no_dials: String(payload.new_no_dials),
  });
  console.log("new_meter_ref from UpdateMetroInfo", payload.new_meter_ref);
  if (payload.new_meter_ref) {
    console.log("new_meter_ref from UpdateMetroInfo", payload.new_meter_ref);
    params.append("new_meter_ref", String(payload.new_meter_ref));
  }
  const finalUrl = `/Reading/UpdateMeterInfo?${params.toString()}`;
  console.log("Final URL for UpdateMeterInfo:", finalUrl);
  try {
    const res = await axiosClient.get(finalUrl);
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
  comment,
  date,
  Custkey,
  reading,
}: {
  comment: string;
  date: string;
  Custkey: string;
  reading: string;
}) => {
  console.log("Custkey from ModifyPrevReading", Custkey);
  try {
    const res = await axiosClient.get(
      `/Billing/ModifyPrevReading?comment=${comment}&date=${date}&custkey=${Custkey}&reading=${reading}`,
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

export const UpdateCustomerReader = async (data: UpdateCustomerReaderProps) => {
  try {
    const res = await axiosClient.put(`/Reading/UpdateCustomerMeter`, data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to update customer reader",
      );
    }
  }
};

export const GetCustomerMeters = async ({ custkey }: { custkey: string }) => {
  try {
    const res = await axiosClient.get(
      `Reading/GetCustomerMeters?custkey=${custkey}`,
    );
    if (Array.isArray(res.data) && res.data.length > 0) {
      console.log(
        "API returned an array, returning the first object:",
        res.data[0],
      );
      return res.data[0];
    } else if (res.data) {
      console.log("API returned a single object:", res.data);
      return res.data;
    }

    console.warn(
      "API returned no data or an empty array for custkey:",
      custkey,
    );
    return {};
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to GetCustomerMeters",
      );
    }
  }
};
export const GetCustomerReader = async ({ custkey }: { custkey: string }) => {
  try {
    const res = await axiosClient.get(
      `/Reading/Get?$filter=CUSTKEY+eq+%27${custkey}%27`,
    );
    if (Array.isArray(res.data) && res.data.length > 0) {
      console.log(
        "API returned an array, returning the first object:",
        res.data[0],
      );
      return res.data[0];
    } else if (res.data) {
      console.log("API returned a single object:", res.data);
      return res.data;
    }

    console.warn(
      "API returned no data or an empty array for custkey:",
      custkey,
    );
    return {};
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to update customer reader",
      );
    }
  }
};

export const GetLastBilngReading = async ({ custkey }: { custkey: string }) => {
  try {
    console.log("custkey from GetLastBilngReading", custkey);
    const res = await axiosClient.get(
      `Billing/GetLastBilngReading?custkey=${custkey}`,
    );
    if (Array.isArray(res.data) && res.data.length > 0) {
      console.log(
        "API returned an array, returning the first object:",
        res.data[0],
      );
      return res.data[0];
    } else if (res.data) {
      console.log("API returned a single object:", res.data);
      return res.data;
    }

    console.warn(
      "API returned no data or an empty array for custkey:",
      custkey,
    );
    return {};
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "GetLastBilngReading");
    }
  }
};
