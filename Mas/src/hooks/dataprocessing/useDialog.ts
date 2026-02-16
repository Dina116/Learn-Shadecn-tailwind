import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import type {
  formtDataType,
  formInputDataType,
  FormUIRef,
} from "../../pages/Readings and Achievement/dataprocessing/types";
import {
  CancelCollection,
  CollectBills,
  ModifyPrevReading,
  ModifyReading,
  RejectCollection,
  UpdateCustomerBills,
  UpdateCustomerReader,
} from "../../api/dataparocessing/DataProcessingApi";

export default function useDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<FormUIRef>(null);
  // ===============Collectings====================

  const { mutate: updateCustomerBillsMutate } = useMutation({
    mutationFn: UpdateCustomerBills,
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
  });

  const { mutate: collectBillsMutate } = useMutation({
    mutationFn: CollectBills,
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
  });

  const { mutate: cancelCollectionMutate } = useMutation({
    mutationFn: CancelCollection,
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
  });

  const { mutate: rejectCollectionMutate } = useMutation({
    mutationFn: RejectCollection,
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
  });

  // ==================Readings====================

  const { mutate: modifyReadingMutate } = useMutation({
    mutationFn: ModifyReading,
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
  });

  //   const { mutate: updateMetroInfoMutate } = useMutation({
  //     mutationFn: UpdateMetroInfo,
  //     onSuccess: () => {
  //       toast.success("تم التنفيذ بنجاح");
  //       handleCloseDialog();
  //     },
  //     onError: (error: unknown) => {
  //       let errorMessage = "حدث خطأ أثناء التنفيذ";
  //       if (
  //         typeof error === "object" &&
  //         error !== null &&
  //         "message" in error &&
  //         typeof (error as { message?: unknown }).message === "string"
  //       ) {
  //         errorMessage = (error as { message: string }).message;
  //       }
  //       toast.error(errorMessage);
  //     },
  //   });

  const { mutate: modifyPrevReadingMutate } = useMutation({
    mutationFn: ModifyPrevReading,
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
  });

  const { mutate: updateCustomerReaderMutate } = useMutation({
    mutationFn: UpdateCustomerReader,
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
  });

  ////////////////////////////////////////////////
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

  const handleFormSubmit = (data: formInputDataType, id: string) => {
    console.log("Data received in Dialog from Form:", data);
    const cleanData = data as formtDataType;
    console.log(`Switching on ID: "${id}"`);
    switch (id) {
      // ==========Collectings==================
      case "update_customer_invoices":
        {
          console.log("MATCHED: update_customer_invoices");
          const formattedData = {
            ...data,
            startDate: cleanData.startDate.toISOString().split("T")[0],
            endDate: cleanData.endDate.toISOString().split("T")[0],
          };
          updateCustomerBillsMutate(formattedData);
        }
        break;

      case "add_invoice_collection":
        {
          const collectionData = {
            ...data,
            enableDiscount: cleanData.enableDiscount ?? false,
            disable_mobile_edit: cleanData.disable_mobile_edit ?? false,
          };
          collectBillsMutate(collectionData);
        }
        break;

      case "cancel_invoice_collection":
        {
          cancelCollectionMutate({ custkey: cleanData.custkey });
        }
        break;
      case "cancel_supplier_invoice_collection":
        {
          cancelCollectionMutate(cleanData);
        }
        break;

      case "disable_receipt_posting": {
        if (!cleanData.payment_no || !cleanData.collection_id) {
          toast.error("رقم الدفعة ومعرف التحصيل حقول مطلوبة.");
          return;
        }
        const rejectionData = {
          custkey: cleanData.custkey,
          payment_no: parseInt(cleanData.payment_no, 10),
          collection_id: parseInt(cleanData.collection_id, 10),
        };
        if (
          isNaN(rejectionData.payment_no) ||
          isNaN(rejectionData.collection_id)
        ) {
          toast.error("قيم رقم الدفعة أو معرف التحصيل غير صالحة.");
          return;
        }

        rejectCollectionMutate(rejectionData);
        break;
      }

      /////////////////Readings//////////////////

      case "edit_customer_reading": {
        const readingData = {
          ...data,

          note: cleanData.note ?? "",
          name: cleanData.name ?? "",
        };

        modifyReadingMutate(readingData);
        break;
      }

      //   case "change_meter_status": {
      //     const metroInfoData = {
      //       ...data,
      //       note: data.note ?? "",
      //       name: data.name ?? "",
      //     };
      //     updateMetroInfoMutate(metroInfoData);
      //     break;
      //   }

      case "request_previous_reading": {
        if (!data.date || !data.currentreading || !data.description) {
          toast.error("التاريخ، القراءة الحالية، والوصف حقول مطلوبة.");
          return;
        }
        const prevReadingData = {
          custkey: cleanData.custkey,
          description: cleanData.description,
          date: cleanData.date.toISOString().split("T")[0],
          reading: String(cleanData.currentreading),
        };

        modifyPrevReadingMutate(prevReadingData);
        break;
      }

      case "edit_sir_notes":
        updateCustomerReaderMutate(cleanData);
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
