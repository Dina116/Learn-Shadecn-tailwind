import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import type {
  FormThreeFieldsRef,
  FormThreeFieldTypes,
  ShowDialogProps,
} from "../../types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import { useMutation } from "@tanstack/react-query";
import { cancelStms } from "../../api/SystemApi";
import toast from "react-hot-toast";
import FormThreeFieldsWrapper from "./FormThreeFieldsWrapper";

export default function ShowDialog({ data, title, id }: ShowDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<FormThreeFieldsRef>(null);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: cancelStms,
    onSuccess: () => {
      console.log("تم التنفيذ بنجاح");
      handleCloseDialog();
    },
    onError: (err) => {
      console.log("حصل خطأ", err);
    },
  });

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleFormSubmit = (data: FormThreeFieldTypes) => {
    console.log("Data received in Dialog from Form:", data);
    mutate(data, {
      onSuccess: () => {
        toast.success("تم التنفيذ بنجاح");
        handleCloseDialog();
      },

      onError: () => {
        toast.error("حدث خطأ أثناء التنفيذ");
      },
    });
  };
  const handleSave = () => {
    console.log("يتم الحفظ...");
    if (formRef.current) {
      formRef.current.submit();
    }
  };
  console.log("data from ShowDialog ", data);
  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <Button variant="contained" onClick={handleOpenDialog}>
        عرض
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title={title}
        maxWidth="xs"
        primaryAction={{
          text: isPending ? "جارٍ التنفيذ..." : "حفظ",
          onClick: handleSave,
          disabled: isPending,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <FormThreeFieldsWrapper
          onSubmit={handleFormSubmit}
          ref={formRef}
          data={data}
          id={id}
        />
        {isError && (
          <Box
            sx={{
              color: "error.main",
              mt: 2,
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            حدث خطأ أثناء إضافة الكشاف
          </Box>
        )}
      </SharedDialog>
    </Box>
  );
}
