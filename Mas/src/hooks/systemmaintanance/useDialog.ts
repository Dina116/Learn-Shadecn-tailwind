import type {
  FormThreeFieldsRef,
  FormThreeFieldTypes,
  //   ShowDialogProps,
} from "../../pages/Readings and Achievement/systemmaintanance/types";
// import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import { useMutation } from "@tanstack/react-query";
import {
  cancelStms,
  cancelPrepearToDevice,
  closeInDevice,
  reOpenClosedInDevice,
  reOpenClosededBillgroupBook,
} from "../../pages/Readings and Achievement/systemmaintanance/api/SystemApi";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useDialog(id: string) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<FormThreeFieldsRef>(null);
  const navigation = useNavigate();

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
  const handelNavigateToSwitchCollectorPath = () => {
    console.log("navigate to switch collectors path");
    navigation("/systemMaintanance/switchcollectorspath");
  };
  const handelNavigateToAddRemovePath = () => {
    console.log("navigate to Add Remove Path");
    navigation("/systemMaintanance/addremovepaths");
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
  };
}
