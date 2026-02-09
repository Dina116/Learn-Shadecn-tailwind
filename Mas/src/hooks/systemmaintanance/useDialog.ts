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

export default function useDialog(id: string) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<FormThreeFieldsRef>(null);

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
      onError: (err: any) => {
        toast.error(err.message || "حدث خطأ أثناء التنفيذ");
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
  };
}
