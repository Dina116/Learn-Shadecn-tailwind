import { getCookie } from "../../../utils/cookies";


export const RequestMeta = (timeout?: number) => {
  const token = getCookie('token');
  const intialMeta = {
    timeout: timeout || 30000, // 30 seconds
    authorization: '',
  };
  if (token !== null || token !== '') {
    const auth = `bearer ${token}`;
    intialMeta.authorization = auth;
    return intialMeta;
  }
  return intialMeta;
};
