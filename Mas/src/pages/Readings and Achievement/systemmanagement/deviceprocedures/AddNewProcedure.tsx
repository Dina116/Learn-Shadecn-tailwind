import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import type { DeviceProcedureFormRef, DeviceProcedureTypes } from "./types";
import DeviceProcedureForm from "./DeviceProcedureForm";
import { useAddDevice } from "../../../../hooks/systemmanagement/deviceprocedures/useAddDevice";


export default function AddNewProcedureDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<DeviceProcedureFormRef>(null);
  const { mutate, isError, isPending } = useAddDevice();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: DeviceProcedureTypes) => {
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
        إضافة نوع صيانة جديد
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="إضافة نوع صيانة جديد "
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
        <DeviceProcedureForm onSubmit={handleFormSubmit} ref={formRef} />
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
