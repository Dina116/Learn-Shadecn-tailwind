import { getCookie } from "../../../utils/cookies";

export const RequestMeta = (timeout?: number) => {
  const token = getCookie("token");
  const metadata = {
    timeout: timeout ?? 30000,
  };

  if (token) {
    return {
      ...metadata,
      authorization: `bearer ${token}`,
    };
  }
  return metadata;
};
