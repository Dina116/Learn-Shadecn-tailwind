import axios from "axios";
import axiosClient, {
  axiosClient_two,
} from "../../../../api/apiservices/axiosClient";
import type {
  // BOOKCYCLE,
  FilterValues,
  Mas2BillingPayload,
  // ReadingWalkData,
  STATMDEPOSIT,
  WalkData,
} from "../types";
import type { ReadingDataWithStatus } from "../operations/readingsPulled/columns";
import type { BOOKCYCLEWithStatus } from "./useControlApi";
import type { HistoryRequest } from "../operations/pulledHistory/types";
import {
  oldAuthTempUserProfile,
  // oldAuthTempUserProfile,
  type GetSettingValueRq,
  type SETTINGS,
  type SiteCode,
  type SITES,
  type UNPOSTEDDETAILSREQ,
  type UNPOSTEDREQ,
} from "../../../../componenet/shared/dataGrid/types";
import type {
  CollectionDestributionItm,
  COLLECTIONPOSTEDSHAREDREQ,
  PostReq,
} from "../moneyTransfeer/types";
import type { USERS } from "../moneyTransfeer/users";
import { goAuthClient } from "../../../../services";
// import type { USERS } from "../moneyTransfeer/users";

export const getBillGroups = async () => {
  try {
    const res = await axiosClient.get("LU/BillGroups");
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch Emp");
    }
    throw new Error("Failed to fetch Emp");
  }
};

export const getCustomerWalkCycle = async (
  filters: FilterValues,
): Promise<WalkData[]> => {
  const groupsString = filters.groups?.map((g) => g.id).join(",");
  if (!groupsString || !filters.billingDate) {
    return [];
  }

  const params = new URLSearchParams({
    groups: groupsString,
    order: "desc",
    bilng_date: new Date(filters.billingDate).toISOString(),
  });

  try {
    const res = await axiosClient.get(
      `/Books/CustomerWalkCycle?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "فشل في جلب بيانات الجدول",
      );
    }
    throw new Error("فشل في جلب بيانات الجدول");
  }
};

// export const getMeterWalkCycle = async (
//   filters: FilterValues,
// ): Promise<ReadingWalkData[]> => {
//   const groupsString = filters.groups?.map((g) => g.id).join(",");
//   if (!groupsString || !filters.billingDate) {
//     return [];
//   }
//   const params = new URLSearchParams({
//     groups: groupsString,
//     order: "desc",
//   });
//   try {
//     const res = await axiosClient.get(
//       `/Books/MeterWalkCycle?${params.toString()}`,
//     );
//     return res.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(
//         error.response?.data?.message || "فشل في جلب بيانات الجدول",
//       );
//     }
//     throw new Error("فشل في جلب بيانات الجدول");
//   }
// };
export const getMeterWalkCycle = async <T>(
  params: Record<string, string>,
): Promise<T[]> => {
  try {
    const res = await axiosClient.get("/Books/MeterWalkCycle", {
      params,
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "فشل في جلب بيانات الجدول",
      );
    }
    throw new Error("فشل في جلب بيانات الجدول");
  }
};

export type ExecuteBillingPayload = WalkData & {
  bilngDate: string;
};
export const executeBilling2Mas = async (payload: ExecuteBillingPayload) => {
  const params = new URLSearchParams({
    STATION_NO: String(payload.STATION_NO),
    BILLGROUP: payload.BILLGROUP,
    BOOK_NO: payload.BOOK_NO,
    WALK_NO: payload.WALK_NO,
    CYCLE_ID: String(payload.CYCLE_ID),
    IS_COLLECTION: String(payload.IS_COLLECTION),
    IS_READING: String(payload.IS_READING),
    ASSIGNED_TO_HH: String(payload.ASSIGNED_TO_HH),
    WALK_DESCRIPTION: payload.WALK_DESCRIPTION,
    EMPID_C: String(payload.EMPID_C),
    IS_CUSTOMER_BOOK: String(payload.IS_CUSTOMER_BOOK),
    ALLOW_FAWRY: String(payload.ALLOW_FAWRY),
    MARKETING: String(payload.MARKETING),
    COUNT_CYCLES: String(payload.COUNT_CYCLES),
    ALL_BILL_DATE: String(payload.ALL_BILL_DATE),
    IS_ALLOWED_C_FRONT: String(payload.IS_ALLOWED_C_FRONT),
    IS_ALLOWED_R_FRONT: String(payload.IS_ALLOWED_R_FRONT),
    bilngDate: new Date(payload.bilngDate).toISOString(),
    withMissing: "false",
    postNegativeFlage: "false",
    isretry: "false",
  });

  try {
    const res = await axiosClient.get(
      `/Collection/Billing2Mas?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          `فشل تنفيذ العملية للدفتر: ${payload.BOOK_NO}`,
      );
    }
    throw new Error(`فشل تنفيذ العملية للدفتر: ${payload.BOOK_NO}`);
  }
};

export type ReadingBillingPayload = ReadingDataWithStatus & {
  bilngDate: string;
};
export const readingsBilling2Mas = async (payload: ReadingBillingPayload) => {
  const params = new URLSearchParams({
    STATION_NO: String(payload.STATION_NO),
    BILLGROUP: payload.BILLGROUP,
    BOOK_NO: payload.BOOK_NO,
    WALK_NO: payload.WALK_NO,
    CYCLE_ID: String(payload.CYCLE_ID),
    IS_COLLECTION: String(payload.IS_COLLECTION),
    IS_READING: String(payload.IS_READING),
    ASSIGNED_TO_HH: String(payload.ASSIGNED_TO_HH),
    WALK_DESCRIPTION: payload.WALK_DESCRIPTION,
    EMPID_R: String(payload.EMPID_R),
    ISSUED_COUNT: String(payload.ISSUED_COUNT),
    IS_METER_BOOK: String(payload.IS_METER_BOOK),
    COUNT_CYCLES: String(payload.COUNT_CYCLES),
    ALL_BILL_DATE: String(payload.ALL_BILL_DATE),
    IS_ALLOWED_C_FRONT: String(payload.IS_ALLOWED_C_FRONT),
    IS_ALLOWED_R_FRONT: String(payload.IS_ALLOWED_R_FRONT),
    bilngDate: new Date(payload.bilngDate).toISOString(),
    withMissing: "false",
    postNegativeFlage: "false",
    isretry: "false",
    uflag: "false",
  });

  try {
    const res = await axiosClient.get(
      `/Reading/Billing2Mas?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          `فشل تنفيذ العملية للدفتر: ${payload.BOOK_NO}`,
      );
    }
    throw new Error(`فشل تنفيذ العملية للدفتر: ${payload.BOOK_NO}`);
  }
};

////////////////////CollectionPosting//////////////////

export const GetUnPostedStatmDeposits = async () => {
  try {
    const res = await axiosClient.get("/Collection/GetUnPostedStatmDeposits");
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Deposits",
      );
    }
    throw new Error("Failed to fetch Deposits");
  }
};

export const collectionMas2Billing = async (payload: STATMDEPOSIT) => {
  try {
    const res = await axiosClient.get(
      `/Collection/Mas2Billing?DepositId=${payload.DEPOSIT_ID}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch Deposits",
      );
    }
    throw new Error("Failed to fetch Deposits");
  }
};

//////////////////ReadingsPosting////////////////////
//BOOKCYCLE
export const readingsMeterWalkCycle = async (
  filters: FilterValues,
): Promise<BOOKCYCLEWithStatus[]> => {
  const groupsString = filters.groups?.map((g) => g.id).join(",");
  if (!groupsString || !filters.billingDate) {
    return [];
  }
  const params = new URLSearchParams({
    groups: groupsString,
    order: "desc",
    isPost: "true",
  });
  try {
    const res = await axiosClient.get(
      `/Books/MeterWalkCycle?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "فشل في جلب بيانات الجدول",
      );
    }
    throw new Error("فشل في جلب بيانات الجدول");
  }
};
export const readingPostingMas2Billing = async (
  payload: Mas2BillingPayload,
) => {
  const params = new URLSearchParams({
    STATION_NO: String(payload.STATION_NO),
    BILLGROUP: payload.BILLGROUP,
    BOOK_NO: payload.BOOK_NO,
    WALK_NO: payload.WALK_NO,
    CYCLE_ID: String(payload.CYCLE_ID),
    BILNG_DATE: payload.BILNG_DATE,

    BDB_CDB_C: String(payload.flags.BDB_CDB_C ?? ""),
    BDB_CDB_DATE_C: payload.flags.BDB_CDB_DATE_C ?? "",
    BDB_CDB_R: String(payload.flags.BDB_CDB_R ?? ""),
    BDB_CDB_DATE_R: payload.flags.BDB_CDB_DATE_R ?? "",
    BDB_CDB_USER_R: payload.flags.BDB_CDB_USER_R,

    CDB_HH_C: String(payload.flags.CDB_HH_C ?? ""),
    CDB_HH_DATE_C: payload.flags.CDB_HH_DATE_C ?? "",
    CDB_HH_R: String(payload.flags.CDB_HH_R ?? ""),
    CDB_HH_DATE_R: payload.flags.CDB_HH_DATE_R ?? "",
    CDB_HH_USER_R: payload.flags.CDB_HH_USER_R,

    HH_CDB_R: String(payload.flags.HH_CDB_R ?? ""),

    CDB_BDB_C: String(payload.flags.CDB_BDB_C ?? ""),
    CDB_BDB_DATE_C: payload.flags.CDB_BDB_DATE_C ?? "",
    CDB_BDB_USER_C: payload.flags.CDB_BDB_USER_C,
    CDB_BDB_R: String(payload.flags.CDB_BDB_R ?? ""),
    CDB_BDB_DATE_R: payload.flags.CDB_BDB_DATE_R ?? "",
    CDB_BDB_USER_R: payload.flags.CDB_BDB_USER_R,

    ISCYCLE_COMPLETED_C: String(payload.flags.ISCYCLE_COMPLETED_C ?? ""),
    ISCYCLE_COMPLETED_R: String(payload.flags.ISCYCLE_COMPLETED_R ?? ""),

    DEVICEID_R: payload.flags.DEVICEID_R,
    DEVICEID_C: payload.flags.DEVICEID_C,

    IS_ALLOWED_C: String(payload.flags.IS_ALLOWED_C ?? ""),
    IS_ALLOWED_R: String(payload.flags.IS_ALLOWED_R ?? ""),
    IS_READY_C: String(payload.flags.IS_READY_C ?? ""),
    IS_READY_R: String(payload.flags.IS_READY_R ?? ""),

    COUNT_R: String(payload.flags.COUNT_R ?? ""),
    EMPID_C: String(payload.flags.EMPID_C ?? ""),
    EMPID_R: String(payload.flags.EMPID_R ?? ""),

    IS_METER_BOOK: String(payload.flags.IS_METER_BOOK ?? ""),
    IS_REVIRSE_R: String(payload.flags.IS_REVIRSE_R ?? ""),
    ISCLOSED_INDEVICE_C: String(payload.flags.ISCLOSED_INDEVICE_C ?? ""),
    ISCLOSED_INDEVICE_R: String(payload.flags.ISCLOSED_INDEVICE_R ?? ""),

    ALLOW_FAWRY: String(payload.flags.ALLOW_FAWRY ?? ""),
    READER: payload.flags.READER,
    COLLECTOR: payload.flags.COLLECTOR,

    COUNT_CYCLES: String(payload.flags.COUNT_CYCLES ?? ""),
    ALL_BILL_DATE: String(payload.flags.ALL_BILL_DATE ?? ""),
  });
  try {
    const res = await axiosClient.get(
      `/Reading/Mas2Billing?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "فشل في جلب بيانات الجدول",
      );
    }
    throw new Error("فشل في جلب بيانات الجدول");
  }
};

////////////////////CloseRWalk////////////////////////
export const closeWalkRoute = async (payload: BOOKCYCLEWithStatus) => {
  const params = new URLSearchParams({
    STATION_NO: String(payload.STATION_NO),
    BILLGROUP: payload.BILLGROUP,
    BOOK_NO: payload.BOOK_NO,
    WALK_NO: payload.WALK_NO,
    CYCLE_ID: String(payload.CYCLE_ID),

    IS_COLLECTION: String(payload.IS_COLLECTION),
    IS_READING: String(payload.IS_READING),
    ASSIGNED_TO_HH: String(payload.ASSIGNED_TO_HH ?? ""),

    BILNG_DATE: payload.BILNG_DATE ?? "",

    BDB_CDB_C: String(payload.BDB_CDB_C ?? ""),
    BDB_CDB_DATE_C: payload.BDB_CDB_DATE_C ?? "",
    BDB_CDB_R: String(payload.BDB_CDB_R ?? ""),
    BDB_CDB_DATE_R: payload.BDB_CDB_DATE_R ?? "",
    BDB_CDB_USER_R: payload.BDB_CDB_USER_R,

    CDB_HH_C: String(payload.CDB_HH_C ?? ""),
    CDB_HH_DATE_C: payload.CDB_HH_DATE_C ?? "",
    CDB_HH_R: String(payload.CDB_HH_R ?? ""),
    CDB_HH_DATE_R: payload.CDB_HH_DATE_R ?? "",
    CDB_HH_USER_R: payload.CDB_HH_USER_R,

    HH_CDB_R: String(payload.HH_CDB_R ?? ""),

    CDB_BDB_C: String(payload.CDB_BDB_C ?? ""),
    CDB_BDB_DATE_C: payload.CDB_BDB_DATE_C ?? "",
    CDB_BDB_USER_C: payload.CDB_BDB_USER_C,
    CDB_BDB_R: String(payload.CDB_BDB_R ?? ""),
    CDB_BDB_DATE_R: payload.CDB_BDB_DATE_R ?? "",
    CDB_BDB_USER_R: payload.CDB_BDB_USER_R,

    ISCYCLE_COMPLETED_C: String(payload.ISCYCLE_COMPLETED_C ?? ""),
    ISCYCLE_COMPLETED_R: String(payload.ISCYCLE_COMPLETED_R ?? ""),

    DEVICEID_R: payload.DEVICEID_R,
    DEVICEID_C: payload.DEVICEID_C,

    WALK_DESCRIPTION: payload.WALK_DESCRIPTION,

    IS_ALLOWED_C: String(payload.IS_ALLOWED_C ?? ""),
    IS_ALLOWED_R: String(payload.IS_ALLOWED_R ?? ""),
    IS_READY_C: String(payload.IS_READY_C ?? ""),
    IS_READY_R: String(payload.IS_READY_R ?? ""),

    COUNT_R: String(payload.COUNT_R ?? ""),
    EMPID_C: String(payload.EMPID_C ?? ""),
    EMPID_R: String(payload.EMPID_R ?? ""),

    ISSUED_COUNT: String(payload.ISSUED_COUNT ?? ""),
    IS_METER_BOOK: String(payload.IS_METER_BOOK ?? ""),

    ISCLOSED_INDEVICE_C: String(payload.ISCLOSED_INDEVICE_C ?? ""),

    ALLOW_FAWRY: String(payload.ALLOW_FAWRY ?? ""),

    READER: payload.READER,
    COLLECTOR: payload.COLLECTOR,

    COUNT_CYCLES: String(payload.COUNT_CYCLES ?? ""),
    ALL_BILL_DATE: String(payload.ALL_BILL_DATE ?? ""),

    IS_ALLOWED_C_FRONT: String(payload.IS_ALLOWED_C_FRONT ?? ""),
    IS_ALLOWED_R_FRONT: String(payload.IS_ALLOWED_R_FRONT ?? ""),

    uniqueID: String(payload.guid ?? ""),
    rowIndex: "0",
    billgroup: payload.BILLGROUP,
    bookno: payload.BOOK_NO,
    walkno: payload.WALK_NO,
    guid: String(payload.guid ?? ""),

    postNegativeFlage: "false",
    isretry: "false",

    bilng_date: payload.BILNG_DATE ?? "",
    bilngDate: payload.BILNG_DATE ?? "",

    uflag: "false",
  });

  try {
    const res = await axiosClient.get(
      `/Reading/CloseWalkRoute?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "فشل في إغلاق المسار");
    }
    throw new Error("فشل في إغلاق المسار");
  }
};

///////////////////////CloseCWalk///////////////////////////

export const customerWalkCycle = async <T>(
  params: Record<string, string>,
): Promise<T[]> => {
  try {
    const res = await axiosClient.get("/Books/CustomerWalkCycle", {
      params,
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "فشل في جلب بيانات الجدول",
      );
    }
    throw new Error("فشل في جلب بيانات الجدول");
  }
};

export const closeCollectionWalkRoute = async (
  payload: BOOKCYCLEWithStatus,
) => {
  const params = new URLSearchParams({
    STATION_NO: String(payload.STATION_NO),
    BILLGROUP: payload.BILLGROUP,
    BOOK_NO: payload.BOOK_NO,
    WALK_NO: payload.WALK_NO,
    CYCLE_ID: String(payload.CYCLE_ID),

    IS_COLLECTION: String(payload.IS_COLLECTION),
    IS_READING: String(payload.IS_READING),
    ASSIGNED_TO_HH: String(payload.ASSIGNED_TO_HH ?? ""),

    BDB_CDB_C: String(payload.BDB_CDB_C ?? ""),
    BDB_CDB_DATE_C: payload.BDB_CDB_DATE_C ?? "",
    BDB_CDB_R: String(payload.BDB_CDB_R ?? ""),
    BDB_CDB_DATE_R: payload.BDB_CDB_DATE_R ?? "",
    BDB_CDB_USER_R: payload.BDB_CDB_USER_R,

    CDB_HH_C: String(payload.CDB_HH_C ?? ""),
    CDB_HH_DATE_C: payload.CDB_HH_DATE_C ?? "",
    CDB_HH_R: String(payload.CDB_HH_R ?? ""),
    CDB_HH_DATE_R: payload.CDB_HH_DATE_R ?? "",
    CDB_HH_USER_R: payload.CDB_HH_USER_R,

    HH_CDB_R: String(payload.HH_CDB_R ?? ""),

    CDB_BDB_R: String(payload.CDB_BDB_R ?? ""),
    CDB_BDB_DATE_R: payload.CDB_BDB_DATE_R ?? "",
    CDB_BDB_USER_R: payload.CDB_BDB_USER_R,

    ISCYCLE_COMPLETED_C: String(payload.ISCYCLE_COMPLETED_C ?? ""),
    ISCYCLE_COMPLETED_R: String(payload.ISCYCLE_COMPLETED_R ?? ""),

    DEVICEID_R: payload.DEVICEID_R,
    DEVICEID_C: payload.DEVICEID_C,

    WALK_DESCRIPTION: payload.WALK_DESCRIPTION,

    IS_ALLOWED_C: String(payload.IS_ALLOWED_C ?? ""),
    IS_ALLOWED_R: String(payload.IS_ALLOWED_R ?? ""),
    IS_READY_C: String(payload.IS_READY_C ?? ""),
    IS_READY_R: String(payload.IS_READY_R ?? ""),

    COUNT_R: String(payload.COUNT_R ?? ""),
    EMPID_C: String(payload.EMPID_C ?? ""),
    EMPID_R: String(payload.EMPID_R ?? ""),

    ISSUED_COUNT: String(payload.ISSUED_COUNT ?? ""),
    IS_METER_BOOK: String(payload.IS_METER_BOOK ?? ""),

    ISCLOSED_INDEVICE_C: String(payload.ISCLOSED_INDEVICE_C ?? ""),

    ALLOW_FAWRY: String(payload.ALLOW_FAWRY ?? ""),

    READER: payload.READER,
    COLLECTOR: payload.COLLECTOR,

    COUNT_CYCLES: String(payload.COUNT_CYCLES ?? ""),
    ALL_BILL_DATE: String(payload.ALL_BILL_DATE ?? ""),

    IS_ALLOWED_C_FRONT: String(payload.IS_ALLOWED_C_FRONT ?? ""),
    IS_ALLOWED_R_FRONT: String(payload.IS_ALLOWED_R_FRONT ?? ""),

    uniqueID: String(payload.guid ?? ""),
    rowIndex: "0",
    billgroup: payload.BILLGROUP,
    bookno: payload.BOOK_NO,
    walkno: payload.WALK_NO,
    guid: String(payload.guid ?? ""),

    postNegativeFlage: "false",
    isretry: "false",

    bilng_date: payload.BILNG_DATE ?? "",
    bilngDate: payload.BILNG_DATE ?? "",

    uflag: "false",
  });

  try {
    const res = await axiosClient.get(
      `/Collection/CloseWalkRoute?${params.toString()}`,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "فشل إغلاق المسار");
    }
    throw new Error("فشل إغلاق المسار");
  }
};

//////////////////PulledHistory//////////////////
export const getAllStations = async () => {
  try {
    const res = await axiosClient.get("/Stations/Get");
    console.log("stations", res.data);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "فشل جلب الفروع ");
    }
    throw new Error("فشل جلب الفروع");
  }
};
export const getHistory = async (req: HistoryRequest) => {
  console.log("Api REq", req);
  try {
    const res = await axiosClient_two.post(
      "/micromas.StatementsService/GetHistory",
      req,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

///////////////users//////////////////
export const Getuserprofilee = async () => {
  const basicUserObject: USERS = localStorage.getItem("userLoged")
    ? JSON.parse(localStorage.getItem("userLoged") || "")
    : undefined;

  if (import.meta.env.VITE_IS_GOV_BASIC) {
    return oldAuthTempUserProfile(basicUserObject?.allowGovCollection || false);
  }
  const data = await goAuthClient.getUserProfile({});
  // eslint-disable-next-line max-len
  return data.response;
};
///////////////////////////////////////////////////
export const getCurrentStations = async () => {
  try {
    const res = await axiosClient.get("/Stations/Current");
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const GetUnPosted = async (
  req: UNPOSTEDREQ,
): Promise<CollectionDestributionItm[]> => {
  try {
    const res = await axiosClient.get(
      `/Collection/GetUnPosted?empid=${req.empid}`,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const Post = async (
  req: PostReq,
): Promise<CollectionDestributionItm[]> => {
  try {
    const res = await axiosClient.get(
      `/Collection/Post?Count=${req.Count}&Amount=${req.Amount}&ReciptNo=${req.ReciptNo}&postToBilling=${req.postToBilling}&empid=${req.empid}`,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const GetNewReceptNo = async (): Promise<number> => {
  try {
    const res = await axiosClient.get(`/Collection/GetNewReceptNo`);
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const GetUnPostedDetails = async (
  req: UNPOSTEDDETAILSREQ,
): Promise<CollectionDestributionItm[]> => {
  try {
    const res = await axiosClient.get(
      `/Collection/GetUnPostedDetails?empid=${req.empid}`,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export interface MyResponeData<I extends object, O extends object> {
  response: O;
  headers: I;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MyResponse<T extends object> = Promise<MyResponeData<any, T>>;

export const getSiteLogo = async (req: SiteCode): Promise<SITES> => {
  const res = await axiosClient.post(
    "/MasProvider.MasProvider/GetSiteLogo",
    req,
  );
  return res.data.response;
};

export const getSettingValue = async (
  req: GetSettingValueRq,
): Promise<SETTINGS> => {
  const res = await axiosClient.post(
    "/MasProvider.MasProvider/GetSettingValue",
    req,
  );
  return res.data.response;
};

export const GetUnPostedSummary = async () => {
  try {
    const res = await axiosClient.get("/Collection/GetUnPostedSummary");
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};
export const getIsHeadQuarter = async () => {
  try {
    const res = await axiosClient.get("/System/IS_HEAD_QUARTER");
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const getTemplate = async () => {
  const res = await axios.get(
    `${
      import.meta.env.BASE_URL === "/"
        ? "/htmlTemplates/hafza.html"
        : `${import.meta.env.BASE_URL}/htmlTemplates/hafza.html?t=${Date.now()}`
    }`,
  );
  return res.data;
};

export const getAllCollectors = async () => {
  try {
    const res = await axiosClient.get("/Emp/GetCollectors");
    console.log("Api Response from getAllCollectors:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed from getAllCollectors:", error);
    throw error;
  }
};

export const GetDeposits = async (empId: number): Promise<STATMDEPOSIT[]> => {
  try {
    const res = await axiosClient.get(`/Collection/GetDeposits?id=${empId}`);
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

export const GetPosted = async (
  req: COLLECTIONPOSTEDSHAREDREQ,
): Promise<CollectionDestributionItm[]> => {
  try {
    const res = await axiosClient.post(
      `/Collection/GetPosted?empid=${req.empid}&depositId=${req.depositId}`,
      req,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};
