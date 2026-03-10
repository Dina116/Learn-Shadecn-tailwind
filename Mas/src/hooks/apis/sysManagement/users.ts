/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { goAuthClient, users } from '@/app/services';
import {
  ADDUSEREQ,
  DELETEUSEREQ,
  UPDATEUSERREQ,
  USERS,
} from '@/domain/entities/systemMangement/users';
import { getCookie } from '@/utils/cookies';
import { prepareData } from '@/app/repositories-impl/http/users';
import {
  AUTH_PROFILES,
  GetUserProfileResponse,
  Min_USER_STATIONS,
  MUSERS,
  RegisterResponse,
} from '@/domain/entities/_gen/GoAuth_pb';
import { useLoginStore } from '@/stores/slices/login';

export const oldAuthTempUserProfile = (
  state: boolean,
): GetUserProfileResponse =>
  ({
    USER: {
      ALL_PERMISSIONS: {
        GOV: {
          ADD_EMP: state,
          ADD_PAYMENT: state,
          ADD_PAYMENT_FILE: state,
          ALLOW_GOV_COLLECTION: state,
          CANCEL_COLLECTION: state,
          DELETE_PAYMENT: state,
          DELETE_PAYMENT_FILE: state,
          EDIT_EMP: state,
          EDIT_PAYMENT: state,
          EDIT_PAYMENT_FILE: state,
          IS_CASHIER: state,
          VIEW_REPORTS: state,
          ADD_CENTRAL: state,
          APPROVE_CENTRAL: state,
          CENTRAL_REPORT: state,
          DELETE_CENTRAL: state,
          REVIEW_CENTRAL: state,
        },
        MAS: {
          QUERY: true,
        },
      },
    },
  }) as GetUserProfileResponse;

export const Getuserprofilee = async () => {
  const basicUserObject: USERS = localStorage.getItem('userLoged')
    ? JSON.parse(localStorage.getItem('userLoged') || '')
    : undefined;

  if (import.meta.env.VITE_IS_GOV_BASIC) {
    return oldAuthTempUserProfile(basicUserObject?.allowGovCollection || false);
  }
  const data = await goAuthClient.getUserProfile({});
  // eslint-disable-next-line max-len
  return data.response;
};

export const refreshTokenWithNewSt = async (req: Min_USER_STATIONS) => {
  const data = await goAuthClient.refreshTokenWithNewSt(req);
  return data.response;
};

export const useGetUserProfileApi = () => {
  const { user } = useLoginStore();
  const query = useQuery<GetUserProfileResponse, Error>({
    queryKey: ['getUserProfile'],
    queryFn: () => Getuserprofilee(),
    retry: 0,
    enabled: user?.isSuccess,
  });
  return query;
};

export const getAllUsers = async (): Promise<MUSERS[]> => {
  // const data = await users.getUsers();
  const data = await goAuthClient.getAllUser({});
  return data.response.users;
};
export const getAllProfiles = async (): Promise<AUTH_PROFILES[]> => {
  // const data = await users.getUsers();
  const data = await goAuthClient.getAllProfiles({});
  return data.response.All_PROFILES;
};

export const useGetAllUsersApi = () => {
  const query = useQuery<MUSERS[], Error>({
    queryKey: ['getUsersNewAuth'],
    queryFn: () => getAllUsers(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 5 * 1000 * 60,
  });
  return query;
};
export const useGetAllProfilesApi = () => {
  const query = useQuery<AUTH_PROFILES[], Error>({
    queryKey: ['getAllProfiles'],
    queryFn: () => getAllProfiles(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 5 * 1000 * 60,
  });
  return query;
};

/// old
export const getAllUsers2 = async (): Promise<USERS[]> => {
  const data = await users.getUsers();
  return data;
};

export const useGetAllUsersApi2 = () => {
  const query = useQuery<USERS[], Error>({
    queryKey: ['getUsers'],
    queryFn: () => getAllUsers2(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 5 * 1000 * 60,
  });
  return query;
};
type PropsAddUser = {
  onSuccess?: (req: void) => void;
  onMutate?: (req?: { entity: USERS }) => void;
};
export const addNewUser = async (req: ADDUSEREQ) => {
  const data = await users.addNewUser(req);
  return data;
};

export const useAddUserApi = ({ onSuccess, onMutate }: PropsAddUser) => {
  const mutation = useMutation({
    mutationFn: (req: ADDUSEREQ) => addNewUser(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};

type PropsEditUser = {
  onSuccess?: (req: void) => void;
  onMutate?: (req?: UPDATEUSERREQ) => void;
};

axios.defaults.headers.put.Authorization = `Basic ${getCookie('token')}`;

export const makeBaseUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_BASE_URL_DEV;
  }
  return `http://${window.location.hostname}`;
};

export const editUser = async (req: UPDATEUSERREQ) => {
  const request = prepareData({ entity: req.entity });
  const res = await axios.put(
    `${makeBaseUrl()}:${
      import.meta.env.VITE_httpPort
    }/api/Users/Put?id=${req?.id}&undefind`,
    {
      ...request,
    },
  );
  console.log(request, 'sslsl');
  // const data = await users.updateUser(req);
  return res.data;
};

export const useEditUserApi = ({ onSuccess, onMutate }: PropsEditUser) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATEUSERREQ) => editUser(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};

type PropsDeleteUser = {
  onSuccess?: (req: USERS) => void;
  onMutate?: (req?: DELETEUSEREQ) => void;
};

export const useDeleteUserApi = ({ onSuccess, onMutate }: PropsDeleteUser) => {
  const mutation = useMutation({
    mutationFn: (req: DELETEUSEREQ) => users.deleteUser(req),
    onSuccess,
    onMutate,
  });

  return mutation;
};

type IrefreshTockenProps = {
  onSuccess?: (res: RegisterResponse) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (err: any) => void;
  onMutate?: (req?: Min_USER_STATIONS) => void;
};
export const useRefreshTokenWithNewSt = ({
  onSuccess,
  onError,
  onMutate,
}: IrefreshTockenProps) => {
  const mutation = useMutation({
    mutationFn: (req: Min_USER_STATIONS) => refreshTokenWithNewSt(req),
    onSuccess,
    onError,
    onMutate,
  });

  return mutation;
};
