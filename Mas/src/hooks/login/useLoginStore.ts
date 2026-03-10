import create from "zustand";
import type { LoginState, UserToken } from "../../pages/login/types";
import type { USERS } from "../../pages/Readings and Achievement/controlpanel/moneyTransfeer/users";
import { checkTokenCookie, getCookie, setCookie } from "../../utils/cookies";
import {jwtDecode} from 'jwt-decode';

const isUSerLoged = localStorage.getItem('userLoged');

let userDataLoged: USERS = {} as USERS;

if (isUSerLoged) {
  userDataLoged = JSON.parse(isUSerLoged);
}
let userToken: UserToken = {} as UserToken;

if (checkTokenCookie()) {
  if (import.meta.env.VITE_IS_GOV_BASIC) {
    userToken = {
      ...userDataLoged as USERS,
      isSuccess: true,
    } as UserToken;
  } else {
    userToken = {
      ...jwtDecode(getCookie('token')),
      isSuccess: true,
    } as UserToken;
  }
} else {
  userToken = {
    isSuccess: false,
  } as UserToken;
}

export const useLoginStore = create<LoginState>((set) => ({
  user: userToken,
  updateLogin: (token: UserToken) =>
    set(() => ({ user: { ...token, isSuccess: true } })),
  logOut: () => {
    console.log('logout');
    set((state) => ({ ...state, user: { isSuccess: false } as UserToken }));
    setCookie('token', '', true);
    console.log(checkTokenCookie());
    window.location.reload();
  },
}));
