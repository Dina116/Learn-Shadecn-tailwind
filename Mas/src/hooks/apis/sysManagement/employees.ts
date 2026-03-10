/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { emps } from '@/app/services';
import {
  DELETEEMPREQ,
  EMPS,
  UPDATEEMPREQ,
} from '@/domain/entities/systemMangement/emp';
import { useGetUserProfileApi } from './users';
// import { useGetUserProfileApi } from './users';

export const getAllCollectorsKey = 'getAllCollectorsKey';
export const getAllEmpsKey = 'getAllEmpsKey';
export const getAllCollectors = async (): Promise<EMPS[]> => {
  const data = await emps.getAllCollectors();
  return data;
};

export const useGetAllCollectorsApi = (select?: (data: EMPS[]) => EMPS[]) => {
  const { data: userProfile } = useGetUserProfileApi();
  // console.log(user?.stationNo, 'user?.stationNo');
  // console.log('All Emmmpppsa');
  const query = useQuery<EMPS[], Error>({
    queryKey: [getAllCollectorsKey],
    queryFn: () => getAllCollectors(),
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 60000, // 60sec
    staleTime: 50000, // 50sec
    select: (collectors) => {
      // console.log(collectors, userProfile?.USER?.STATION_NO, "ER");
      // Apply the filter if select is not provided
      const filteredData = collectors.filter(
        (collector) => collector.branchId === userProfile?.USER?.STATION_NO,
      );
      return select ? select(filteredData) : filteredData;
    },
  });
  return query;
};

export const useGetAllEmpsApi = () => {
  const query = useQuery<EMPS[], Error>({
    queryKey: [getAllEmpsKey],
    queryFn: async () => {
      const data = await emps.getEmps();
      return data.sort((a, b) =>
        (a?.fullName || '').localeCompare(b?.fullName || ''),
      );
    },
    retry: 0,
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return query;
};

type PropsAddEmp = {
  onSuccess?: () => void;
};
// export const addNewEmp = async (req: ADDEMPREQ) => {
//   console.log(req, 'reqqq');
//   const data = await emps.addNewEmp(req);
//   return data;
// };

export const useAddEmpApi = ({ onSuccess }: PropsAddEmp) => {
  const mutation = useMutation({
    mutationFn: (req: { entity: EMPS }) => emps.addNewEmp(req),
    onSuccess,
  });

  return mutation;
};

type PropsEditEmp = {
  onSuccess?: (req: void) => void;
  onMutate?: (req?: UPDATEEMPREQ) => void;
};
// export const editEmp = async (req: UPDATEEMPREQ) => {
//   const data = await emps.updateEmp(req);
//   return data;
// };

export const useEditEmpApi = ({ onSuccess }: PropsEditEmp) => {
  const mutation = useMutation({
    mutationFn: (req: UPDATEEMPREQ) => emps.updateEmp(req),
    onSuccess,
  });

  return mutation;
};

type PropsDeleteEmp = {
  onSuccess?: (req: EMPS) => void;
};

export const useDeleteEmpApi = ({ onSuccess }: PropsDeleteEmp) => {
  const mutation = useMutation({
    mutationFn: (req: DELETEEMPREQ) => emps.deleteEmp(req),
    onSuccess,
  });

  return mutation;
};
