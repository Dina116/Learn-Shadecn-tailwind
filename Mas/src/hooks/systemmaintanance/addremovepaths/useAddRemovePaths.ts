import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { collectorType } from "../../../pages/Readings and Achievement/systemmaintanance/addremovepaths/types";
import {
  getBook,
  getEmp,
} from "../../../api/systemmaintanance/addremovepaths/AddRemovePathsApi";


export default function useAddRemovePaths() {
  const [availablePaths, setAvailablePaths] = useState<collectorType[]>([]);
  const [selectedPaths, setSelectedPaths] = useState<collectorType[]>([]);
  const { data: emp = [] } = useQuery({
    queryKey: ["AddRemovePathsemp"],
    queryFn: () => getEmp(),
  });
  console.log("emp from AddRemovePaths api", emp);

  const getBookForAvailable = useMutation({
    mutationFn: (empid: string) => getBook(empid),
    onSuccess: (data) => {
      setAvailablePaths(data);
    },
  });

  const getBookForSelected = useMutation({
    mutationFn: (empid: string) => getBook(empid),
    onSuccess: (data) => {
      setSelectedPaths(data);
    },
  });

  return {
    emp,
    selectedPaths,
    availablePaths,
    getBookForAvailable: getBookForAvailable.mutate,
    getBookForSelected: getBookForSelected.mutate,
  };
}
