import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import type {
  formtDataType,
  formInputDataType,
  FormUIRef,
  UpdateCustomerReaderProps,
  Receipt,
  CancelCollectionParams,
} from "../../pages/Readings and Achievement/dataprocessing/types";
import {
  CancelCollection,
  CollectBills,
  ModifyPrevReading,
  ModifyReading,
  RejectCollection,
  UpdateCustomerBills,
  UpdateCustomerReader,
  UpdateMetroInfo,
  type CollectBillsParams,
} from "../../api/dataparocessing/DataProcessingApi";
import { useForm, useWatch } from "react-hook-form";
import { formSchema } from "../../pages/Readings and Achievement/dataprocessing/form/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function toInputDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}
export default function useDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [disabledFields, setDisabledFields] = useState<string[]>([]);
  const [tableData, setTableData] = useState<Receipt[]>([]);
  const [selectedRows, setSelectedRows] = useState<Receipt[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [originalData, setOriginalData] = useState<any>(null);
  const [savedFormsData, setSavedFormsData] = useState<
    Record<string, Partial<formInputDataType>>
  >({});
  const formRef = useRef<FormUIRef>(null);

  const methods = useForm<formInputDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CUSTKEY: "",
      comment: "",
      PAYMENT_NO: "",
      chequeBank: "",
      chequeNo: "",
      discount: "",
      discountDocumentNo: "",
      collection_id: "",
      MODIFIED_AVRG_CONSUMP: "",
      reading_id: "",
      tent_name: "",
      operationCode: "",
      invoiceAmount: "",
      collectedAmount: "",
      paymentMethod: "",
      paymentType: "",
      collector: "",
      collectionType: "",
      CL_BLNCE: 0,
      PROPERTY_ID: "",
      CONN_AVRG_CONSUMP: "",
      consump: "",
      note: "-1",
      BOOK_NO_C: "",
      WALK_NO_C: "",
      new_meter_type: "",
      meter_ref: "",
      description: "",
      LNG: "",
      LAT: "",
      OLD_KEY: "",
      pr_read1: 0,
      cr_reading: 0,
      startDate: toInputDateString(new Date()),
      endDate: toInputDateString(new Date()),
      date: toInputDateString(new Date()),
      collectionDate: toInputDateString(new Date()),
      BILNG_DATE: toInputDateString(new Date()),
      oldreadingdate: toInputDateString(new Date()),
      includeInvoice: undefined,
      networkCollection: false,
      enableInstallment: false,
      locked: false,
      searchByInvoice: false,
      IsInvoiced: undefined,
      disable_mobile_edit: false,
      enableDiscount: false,
      SURNAME: "",
    },
  });

  const watchedCustkey = useWatch({
    control: methods.control,
    name: "CUSTKEY",
  });

  useEffect(() => {
    if (watchedCustkey && savedFormsData[watchedCustkey]) {
      const savedData = savedFormsData[watchedCustkey];
      const fieldsToDisable: string[] = [];
      for (const key in savedData) {
        const typedKey = key as keyof formInputDataType;
        const value = savedData[typedKey];
        if (value !== null && value !== "" && value !== 0) {
          methods.setValue(typedKey, value);
          fieldsToDisable.push(key);
        }
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisabledFields((prev) => [...new Set([...prev, ...fieldsToDisable])]);
    }
  }, [watchedCustkey, savedFormsData, methods]);
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
    onSuccess: (data, variables) => {
      toast.success(`تم إلغاء الإيصال ${variables.receipt_no} بنجاح`);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any, variables) => {
      toast.error(
        `فشل إلغاء الإيصال ${variables.receipt_no}: ${error.message}`,
      );
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

  const { mutate: updateMetroInfoMutate } = useMutation({
    mutationFn: UpdateMetroInfo,
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

  const handleOpenDialog = (id: string, title: string) => {
    setIsDialogOpen(true);
    setDisabledFields([]);
    methods.reset();
    setOriginalData(null);
    setOpenDialogId(id);
    setDialogTitle(title);
    setTableData([]);
    setSelectedRows([]);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setOpenDialogId(null);
  };
  const handleFetchComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchedData: any,
    fieldNames: string[],
    // setTableData?: (data: Receipt[]) => void,
  ) => {
    console.log("[useDialog] Handling fetch complete...");

    if (Array.isArray(fetchedData)) {
      console.log(
        "[useDialog] Fetched data is an array, updating table state.",
      );
      setTableData(fetchedData as Receipt[]);
      setOriginalData(null);
      setDisabledFields([]);
    } else {
      console.log(
        "[useDialog] Fetched data is an object, updating form state.",
      );
      setOriginalData(fetchedData);
      setTableData([]);
      setDisabledFields((prev) => [...new Set([...prev, ...fieldNames])]);
    }
  };

  const handleFormSubmit = (data: formInputDataType) => {
    console.log("Data received. Submitting based on ID:", openDialogId);
    console.log("Data received in Dialog from Form:", data);

    const cleanData = data as formtDataType;

    if (data.CUSTKEY) {
      setSavedFormsData((prev) => ({ ...prev, [data.CUSTKEY]: data }));
    }
    switch (openDialogId) {
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
          if (!originalData) {
            return;
          }
          const payload: CollectBillsParams = {
            CUSTKEY: originalData.CUSTKEY,
            PAYMENT_NO: originalData.PAYMENT_NO,
            empid: originalData.EMP_ID,
            locked: data.locked || false,
            enableDiscount: data.enableDiscount || false,
            chequeBank: data.chequeBank,
            chequeNo: data.chequeNo,
            discount: data.discount,
            discountDocumentNo: data.discountDocumentNo,
          };

          collectBillsMutate(payload);
        }
        break;

      case "cancel_supplier_invoice_collection":
      case "cancel_invoice_collection": {
        console.log("Handling cancel collection. Selected rows:", selectedRows);

        if (selectedRows.length === 0) {
          toast.error("الرجاء تحديد إيصال واحد على الأقل لإلغائه.");
          return;
        }
        selectedRows.forEach((row) => {
          const payload: CancelCollectionParams = {
            custkey: row.CUSTKEY,
            payment_no: row.PAYMENT_NO,
            collectionId: row.COLLECTION_ID,
            cancelledAmount: row.COLLECTED_AMOUNT,
            receipt_no: row.RECEIPT_NO,
          };
          cancelCollectionMutate(payload);
        });
        handleCloseDialog();
        break;
      }

      case "disable_receipt_posting": {
        if (!cleanData.PAYMENT_NO || !cleanData.collection_id) {
          toast.error("رقم الدفعة ومعرف التحصيل حقول مطلوبة.");
          return;
        }
        const rejectionData = {
          custkey: cleanData.CUSTKEY,
          payment_no: parseInt(cleanData.PAYMENT_NO, 10),
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
        console.log("MATCHED: edit_customer_reading");
        if (!originalData) {
          return;
        }
        const payload = {
          CUSTKEY: originalData.CUSTKEY,
          note: data.note || "-1",
          empid: originalData.EMPID_C,
          cycleid: originalData.CYCLE_ID,
          reading: data.cr_reading ? Number(data.cr_reading) : undefined,
          MODIFIED_AVRG_CONSUMP: data.MODIFIED_AVRG_CONSUMP
            ? String(data.MODIFIED_AVRG_CONSUMP)
            : undefined,
        };
        console.log("Final payload for ModifyReading:", payload);
        if (!payload.CUSTKEY) {
          toast.error("رقم الحساب مفقود في البيانات الأصلية.");
          return;
        }

        modifyReadingMutate(payload);
        break;
      }

      case "change_meter_status": {
        if (!originalData) {
          return;
        }
        const payload = {
          CUSTKEY: originalData.CUSTKEY,
          meter_ref: originalData.meter_ref,
          meter_type: originalData.meter_type,
          new_meter_type: originalData.new_meter_type || "",
          new_no_dials: originalData.new_no_dials || 0,
          new_meter_ref: data.new_meter_ref
            ? Number(data.new_meter_ref)
            : undefined,
        };
        updateMetroInfoMutate(payload);
        break;
      }

      case "request_previous_reading": {
        if (!originalData) {
          toast.error("لا توجد بيانات أصلية للحفظ.");
          return;
        }

        const payload = {
          Custkey: originalData.Custkey,
          comment: data.comment,
          reading: String(data.reading_id ?? ""),
          date: String(data.date.toString().split("T")[0]),
        };
        console.log("Custkey from modifyPrevReadingMutate", payload.Custkey);
        modifyPrevReadingMutate(payload);
        break;
      }

      case "edit_sir_notes": {
        const payload: UpdateCustomerReaderProps = {
          CUSTKEY: originalData.CUSTKEY,
          METER_ID: originalData.METER_ID,
          METAR_NOTE: data.METAR_NOTE || "",
        };
        if (originalData.LAT !== null && originalData.LAT !== undefined) {
          payload.LAT = originalData.LAT;
        }
        if (originalData.LNG !== null && originalData.LNG !== undefined) {
          payload.LNG = originalData.LNG;
        }
        console.log("Final payload for UpdateCustomerReader:", payload);
        updateCustomerReaderMutate(payload);
        break;
      }

      default:
        console.error(`No mutation defined for id: ${openDialogId}`);
        toast.error(`إجراء غير معروف: ${openDialogId}`);
    }
  };

  const updateDisabledFields = (newFields: string[]) => {
    console.log("[useDialog] Adding new fields to disabled list:", newFields);
    setDisabledFields((prev) => [...new Set([...prev, ...newFields])]);
  };

  return {
    handleSave,
    handleOpenDialog,
    isDialogOpen,
    methods,
    handleFormSubmit,
    formRef,
    handleCloseDialog,
    updateDisabledFields,
    dialogTitle,
    openDialogId,
    disabledFields,
    onFetchComplete: handleFetchComplete,
    tableData,
    selectedRows,
    setSelectedRows,
  };
}
