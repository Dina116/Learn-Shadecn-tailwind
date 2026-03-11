/* eslint-disable @typescript-eslint/no-explicit-any */
import create from "zustand";
import type { LoginState, UserToken } from "../../pages/login/types";
// import type { USERS } from "../../pages/Readings and Achievement/controlpanel/moneyTransfeer/users";
import { checkTokenCookie, getCookie, setCookie } from "../../utils/cookies";
import { jwtDecode } from "jwt-decode";

const emptyUser: UserToken = {
  userID: 0,
  username: "",
  isactive: false,
  IsPortal: false,
  SITE_CODE: 0,
  isSuccess: false,
};

function mapToUserToken(data: any): UserToken {
  return {
    userID: data.userID ?? 0,
    username: data.username ?? "",
    isactive: data.isactive ?? false,
    IsPortal: data.IsPortal ?? false,
    SITE_CODE: data.SITE_CODE ?? 0,
    isSuccess: true,
  };
}

function getInitialUserToken(): UserToken {
  if (!checkTokenCookie()) return emptyUser;
  const tokenData = jwtDecode(getCookie("token"));
  return mapToUserToken(tokenData);
}

const userToken = getInitialUserToken();

export const useLoginStore = create<LoginState>((set) => ({
  user: userToken,
  updateLogin: (token: UserToken) =>
    set((state) => ({
      ...state,
      user: { ...state.user, ...token, isSuccess: true },
    })),
  logOut: () => {
    console.log("logout");
    set({ user: emptyUser });
    setCookie("token", "", true);
    console.log(checkTokenCookie());
  },
}));
