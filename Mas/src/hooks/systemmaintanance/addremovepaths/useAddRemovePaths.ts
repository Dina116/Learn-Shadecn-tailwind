import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  getBook,
  getEmp,
  saveChanges,
} from "../../../api/systemmaintanance/addremovepaths/AddRemovePathsApi";
import type { WalkPath } from "../../../pages/Readings and Achievement/systemmaintanance/switchcollectorspath/types";
import type {
  collectorType,
  WalkPathUI,
} from "../../../pages/Readings and Achievement/systemmaintanance/addremovepaths/types";

export default function useAddRemovePaths() {
  const [availablePaths, setAvailablePaths] = useState<WalkPathUI[]>([]);
  const [selectedPaths, setSelectedPaths] = useState<WalkPathUI[]>([]);

  const hasTransferredRows = availablePaths.some((p) => p.isTransferred);

  const lastTransferredRow = [...availablePaths]
    .reverse()
    .find((p) => p.isTransferred);

  const { data: emp = [] } = useQuery({
    queryKey: ["AddRemovePathsemp"],
    queryFn: () => getEmp(),
  });

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

  const saveChangesMutation = useMutation({
    mutationFn: (request: collectorType[]) => saveChanges(request),
  });

  const buildPayload = (paths: WalkPathUI[]) => {
    const p = paths.map((row) => ({
      BILLGROUP: row.BILLGROUP,
      BOOK_NO: row.BOOK_NO,
      COLLECTOR: row.COLLECTOR || "",
      EMPID: row.EMPID_C,
      EMPID_C: row.EMPID_C ?? 0,
      EMPID_R: row.EMPID_R ?? 0,
      IS_COLLECTION: !!row.IS_COLLECTION,
      IS_READING: !!row.IS_READING,
      READER: row.READER || "",
      STATION_NO: row.STATION_NO,
      WALK_NO: row.WALK_NO,
      isNew: true,
    }));
    console.log("buildPayload from buildPayload", p);
    return p;
  };

  const handleSave = async () => {
    console.log("selectedPaths in handleSave", selectedPaths);
    const payload = buildPayload(selectedPaths);
    console.log("Sending payload:", payload);
    try {
      await saveChangesMutation.mutate(payload);
    } catch (err) {
      console.error("Error saving:", err);
    }
  };

  const transferToSelected = (row: WalkPath, actionType: string) => {
    const isCollection = actionType.includes("collection");
    const isReading = actionType.includes("reading");
    const updatedRow = {
      ...row,
      IS_COLLECTION: isCollection,
      IS_READING: isReading,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      COLLECTOR: (row.READER || row.COLLECTOR || "") as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      READER: (row.READER || row.COLLECTOR || "") as any,
      isTransferred: true,
    };
    setAvailablePaths((prev) => [...prev, updatedRow]);
    setSelectedPaths((prev) => prev.filter((p) => p.BOOK_NO !== row.BOOK_NO));
  };
  console.log("availablePaths", availablePaths);
  console.log("selectedPaths", selectedPaths);

  const removeFromSelected = (row: WalkPath) => {
    const cleanedRow = {
      ...row,
      isTransferred: false,
    };
    setSelectedPaths((prev) => [...prev, cleanedRow]);
    setAvailablePaths((prev) => prev.filter((p) => p.BOOK_NO !== row.BOOK_NO));
  };

  return {
    emp,
    selectedPaths,
    availablePaths,
    getBookForAvailable: getBookForAvailable.mutate,
    getBookForSelected: getBookForSelected.mutate,
    transferToSelected,
    removeFromSelected,
    hasTransferredRows,
    lastTransferredRow,
    handleSave,
    isSaving: saveChangesMutation.isPending,
    buildPayload,
  };
}
