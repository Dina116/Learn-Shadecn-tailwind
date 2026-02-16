import type {
  FormThreeFieldsRef,
  FormThreeFieldTypes,
} from "../../pages/Readings and Achievement/systemmaintanance/types";
import { useMutation } from "@tanstack/react-query";
import {
  cancelStms,
  cancelPrepearToDevice,
  closeInDevice,
  reOpenClosedInDevice,
  reOpenClosededBillgroupBook,
  cancelReadings,
  CancelPrepearReadingsToDevice,
  closeInReadingsDevice,
  reOpenClosedInReadingsDevice,
  reOpenClosededReadingsBillgroup,
} from "../../pages/Readings and Achievement/systemmaintanance/api/SystemApi";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useShowDialog(id: string) {
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<FormThreeFieldsRef>(null);
  const navigation = useNavigate();

  // ===============Collectings====================
  const { mutate: cancelStmsMutate } = useMutation({
    mutationFn: cancelStms,
  });

  const { mutate: cancelPreparation } = useMutation({
    mutationFn: cancelPrepearToDevice,
  });
  const { mutate: lockcollectionunit } = useMutation({
    mutationFn: closeInDevice,
  });

  const { mutate: reprepareclosedpath } = useMutation({
    mutationFn: reOpenClosedInDevice,
  });

  const { mutate: reopenclosedpaths } = useMutation({
    mutationFn: reOpenClosededBillgroupBook,
  });

  // ==================Readings====================

  const { mutate: cancelReading } = useMutation({
    mutationFn: cancelReadings,
  });

  const { mutate: cancelReadingPreparation } = useMutation({
    mutationFn: CancelPrepearReadingsToDevice,
  });
  const { mutate: closeReadingDecvice } = useMutation({
    mutationFn: closeInReadingsDevice,
  });

  const { mutate: reopenClosedReadingsDevice } = useMutation({
    mutationFn: reOpenClosedInReadingsDevice,
  });

  const { mutate: reopenclosedbillgroup } = useMutation({
    mutationFn: reOpenClosededReadingsBillgroup,
  });

  const handelNavigateToSwitchCollectorPath = () => {
    console.log("navigate to switch collectors path");
    navigation("/systemMaintanance/switchcollectorspath");
  };

  const handelNavigateToAddRemovePath = () => {
    console.log("navigate to Add Remove Path");
    navigation("/systemMaintanance/addremovepaths");
  };

  const handleNavigateToSwitchReadersPath = () => {
    console.log("navigate to switch Readers path");
    navigation("/systemMaintanance/switchReadersPathsScreen");
  };

  const handleSave = () => {
    console.log("يتم الحفظ...");
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: FormThreeFieldTypes) => {
    console.log("Data received in Dialog from Form:", data);

    const mutationCallbacks = {
      onSuccess: () => {
        toast.success("تم التنفيذ بنجاح");
        handleCloseDialog();
      },
      onError: (error: unknown) => {
        let errorMessage = "حدث خطأ أثناء التنفيذ";
        if (
          typeof error === "object" &&
          error !== null &&
          "message" in error &&
          typeof (error as { message?: unknown }).message === "string"
        ) {
          errorMessage = (error as { message: string }).message;
        }
        toast.error(errorMessage);
      },
    };
    switch (id) {
      // ==========Collectings==================
      case "reverse_collection":
        cancelStmsMutate(data, mutationCallbacks);
        break;
      case "cancel_preparation":
        cancelPreparation(data, mutationCallbacks);
        break;
      case "lock_collection_unit":
        lockcollectionunit(data, mutationCallbacks);
        break;
      case "reprepare_closed_path":
        reprepareclosedpath(data, mutationCallbacks);
        break;
      case "reopen_closed_paths":
        reopenclosedpaths(data, mutationCallbacks);
        break;
      // ==================Readings=================
      case "reverse_readings":
        cancelReadings(data);
        break;
      case "cancel_readings_preparation":
        CancelPrepearReadingsToDevice(data);
        break;
      case "lock_reading_collection_unit":
        closeInReadingsDevice(data);
        break;
      case "reprepare_readind_closed_path":
        reOpenClosedInReadingsDevice(data);
        break;
      case "reopen_reading_group_collection":
        reOpenClosededReadingsBillgroup(data);
        break;
      case "reopen_reading_closed_paths":
        reOpenClosedInReadingsDevice(data);
        break;
      default:
        console.error(`No mutation defined for id: ${id}`);
        toast.error(`إجراء غير معروف: ${id}`);
    }
  };

  return {
    handleSave,
    handleOpenDialog,
    isDialogOpen,
    handleFormSubmit,
    formRef,
    handleCloseDialog,
    handelNavigateToSwitchCollectorPath,
    handelNavigateToAddRemovePath,
    cancelReading,
    cancelReadingPreparation,
    closeReadingDecvice,
    reopenClosedReadingsDevice,
    reopenclosedbillgroup,
    handleNavigateToSwitchReadersPath,
  };
}
