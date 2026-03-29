import { goAuthClient } from "@/app/services";
import type {
  CollectionDestributionItm,
  COLLECTIONPOSTEDSHAREDREQ,
  PostReq,
} from "@/pages/Readings and Achievement/controlpanel/moneyTransfeer/types";
import axiosClient from "../apiservices/axiosClient";
import type { STATMDEPOSIT } from "@/pages/Readings and Achievement/controlpanel/types";
import type {
  GetSettingValueRq,
  SETTINGS,
  SiteCode,
  SITES,
  UNPOSTEDDETAILSREQ,
  UNPOSTEDREQ,
} from "@/componenet/shared/dataGrid/types";
import axios from "axios";
import type { Min_USER_STATIONS } from "@/domain/entities/_gen/GoAuth_pb";

export const Getuserprofilee = async () => {
  console.log("Getuserprofilee");
  const data = await goAuthClient.getUserProfile({});
  console.log("data of Getuserprofilee", data.response);
  return data.response;
};

export const refreshTokenWithNewSt = async (req: Min_USER_STATIONS) => {
  const data = await goAuthClient.refreshTokenWithNewSt(req);
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
    console.log("Api Response getIsHeadQuarter:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed getIsHeadQuarter:", error);
    throw error;
  }
};

export const getTemplate = async () => {
  const res = await axios.get(
    `${
      import.meta.env.BASE_URL === "/"
        ? "/htmlTemplates/test.html"
        : `${import.meta.env.BASE_URL}htmlTemplates/test.html?t=${Date.now()}`
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
    const res = await axiosClient.get(
      `/Collection/GetPosted?empid=${req.empid}&depositId=${req.depositId}`,
    );
    console.log("Api Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};
