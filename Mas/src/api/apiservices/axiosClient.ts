import { getCookie } from "@/utils/cookies";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.100.7:25555/api", //http://192.168.100.7:25555  http://172.16.17.21:25555  http://mas3:25555
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  },
  // timeout: 5000,
});
export const axiosClient_two = axios.create({
  baseURL: "http://172.16.17.21:7000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  },
});

export default axiosClient;
