import { getCookie } from "../../../utils/cookies";

export const RequestMeta = (timeout?: string) => {
  const token = getCookie("token");
  const metadata = {
    timeout: timeout ?? "1800000",
  };

  if (token) {
    return {
      ...metadata,
      authorization: `bearer ${token}`,
    };
  }
  return metadata;
};
