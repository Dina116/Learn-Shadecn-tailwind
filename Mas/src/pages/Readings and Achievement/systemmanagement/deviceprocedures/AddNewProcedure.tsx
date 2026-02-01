import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import type { DeviceProcedureFormRef, DeviceProcedureTypes } from "./types";
import DeviceProcedureForm from "./DeviceProcedureForm";

interface AddNewProcedureDialogProps {
  onSubmit: (data: DeviceProcedureTypes) => void;
}
export default function AddNewProcedureDialog({
  onSubmit,
}: AddNewProcedureDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<DeviceProcedureFormRef>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: DeviceProcedureTypes) => {
    console.log("Data received in Dialog from Form:", data);
    onSubmit(data);
    handleCloseDialog();
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
          text: "حفظ",
          onClick: handleSave,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <DeviceProcedureForm onSubmit={handleFormSubmit} ref={formRef} />
      </SharedDialog>
    </Box>
  );
}
