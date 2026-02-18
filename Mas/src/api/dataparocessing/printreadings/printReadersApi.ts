import type {
  QueryParams,
  Readers,
  ReadingDataType,
} from "../../../pages/Readings and Achievement/dataprocessing/types";
import axiosClient from "../../apiservices/axiosClient";

export const getReaders = async (): Promise<Readers[]> => {
  const response = await axiosClient.get("/Emp/GetReaders");
  return response.data;
};

type DynamicApiResponse = {
  [key: string]: ReadingDataType;
};

export const getReadingsData = async (
  params: QueryParams,
): Promise<DynamicApiResponse[]> => {
  if (Object.keys(params).length === 0) {
    return Promise.resolve([]);
  }

  const searchParams = new URLSearchParams();
  if (params.empId) {
    searchParams.append("EMP_ID", String(params.empId));
  }
  if (params.group) {
    searchParams.append("BILLGROUP", params.group);
  }
  if (params.path) {
    searchParams.append("WALK_NO", params.path);
  }
  if (params.book) {
    searchParams.append("BOOK_NO", params.book);
  }
  if (params.filter) {
    searchParams.append("$filter", params.filter);
  }

  const queryString = searchParams.toString();
  console.log("Final URL Query String:", queryString);

  const response = await axiosClient.get<DynamicApiResponse[]>(
    `/Reading/Reading?${queryString}`,
  );

  return response.data;
};
