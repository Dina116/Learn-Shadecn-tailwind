import axiosClient from "../../apiservices/axiosClient";
import type {
  CustomerSeq,
  loadWalksType,
} from "../../../pages/Readings and Achievement/dataprocessing/types";

export const downloadWalks = async (
  data: CustomerSeq,
): Promise<loadWalksType[]> => {
  try {
    const res = await axiosClient.get(
      `/CustomerSeq/BookSeq?bookno=${data.bookno}&walkno=${data.walkno}&mode=${data.mode}&$filter=1+eq+1`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export type SavePayload = {
  formData: CustomerSeq;
  tableData: loadWalksType[];
};

export const saveWalks = async (payload: SavePayload) => {
  try {
    const res = await axiosClient.post("/CustomerSeq/Save", payload.tableData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postWalks = async (payload: SavePayload) => {
  try {
    const { bookno, walkno } = payload.formData;
    const res = await axiosClient.post(
      `CustomerSeq/PostR?bookno=%2527${bookno}%2527&walkno=%2527${walkno}%2527&save=true`,
      payload.tableData,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
