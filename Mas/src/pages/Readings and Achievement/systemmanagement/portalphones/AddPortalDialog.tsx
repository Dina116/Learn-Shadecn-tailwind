import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import type { PortalPhonesTypes } from "./types";
import { type PortalFormRef } from "./PortalForms";
import PortalForm from "./PortalForms";
import { useAddPortal } from "./api/useAddPortal";

export default function AddScoutsDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<PortalFormRef>(null);
  const { mutate, isError, isPending } = useAddPortal();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: PortalPhonesTypes) => {
    console.log("Data received in Dialog from Form:", data);
    mutate(data, {
      onSuccess: () => {
        handleCloseDialog();
      },
    });
  };
  const handleSave = () => {
    console.log("يتم الحفظ...");
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <Button variant="contained" onClick={handleOpenDialog}>
        إضافة وحدة محمولة جديدة
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="إضافة كشاف جديد"
        maxWidth="sm"
        primaryAction={{
          text: isPending ? "جاري الحفظ..." : "حفظ",
          onClick: handleSave,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <PortalForm onSubmit={handleFormSubmit} ref={formRef} />
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
