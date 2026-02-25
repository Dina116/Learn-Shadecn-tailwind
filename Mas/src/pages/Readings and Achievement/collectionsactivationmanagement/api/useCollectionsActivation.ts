import { useState } from "react";
import { useForm } from "react-hook-form";
import type { MarfetingFormInputType, MarfetingFormType } from "../types";
import { formSchema } from "../form/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AddMarketingPlanConfig } from "./CollectingActivationsApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCollectionsActivation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const navigate = useNavigate();
  const methods = useForm<MarfetingFormInputType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      noMonthes: null,
      refAmount: null,
    },
  });
  const handleOpenDialog = (id: string, title: string) => {
    setIsDialogOpen(true);
    setOpenDialogId(id);
    setDialogTitle(title);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setOpenDialogId(null);
    methods.reset();
  };

  const handleCardClick = (id: string, title: string) => {
    console.log(`Card clicked! ID: "${id}", Title: "${title}"`);
    switch (id) {
      case "Marketing_Plan_Setup":
        handleOpenDialog(id, title);
        break;
      case "Marketing_Plan_Execution":
        navigate("/readings/collectionsactivation/MarketingPlanExecution");
    }
  };

  const { mutate: addMarketingPlanConfig } = useMutation({
    mutationFn: AddMarketingPlanConfig,
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

  const handleFormSubmit = (data: MarfetingFormType) => {
    console.log("Data received. Submitting based on ID:", openDialogId);
    console.log("Data received in Dialog from Form:", data);

    switch (openDialogId) {
      case "Marketing_Plan_Setup": {
        const payload = {
          description: data.description,
          refAmount: data.refAmount,
          noMonthes: data.noMonthes,
        };
        addMarketingPlanConfig(payload);
      }
    }
    methods.reset();
  };
  return {
    isDialogOpen,
    openDialogId,
    dialogTitle,
    handleCloseDialog,
    handleOpenDialog,
    methods,
    handleFormSubmit,
    addMarketingPlanConfig,
    handleCardClick,
  };
};
