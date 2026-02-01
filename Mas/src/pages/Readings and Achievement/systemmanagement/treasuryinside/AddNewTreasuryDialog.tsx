import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import type { TreasuryFormRef, TreasuryTypes } from "./types";
import TreasuryForm from "./TreasuryForm";

interface AddNewTreasuryDialogProps {
  onSubmit: (data: TreasuryTypes) => void;
}
export default function AddNewTreasuryDialog({
  onSubmit,
}: AddNewTreasuryDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<TreasuryFormRef>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: TreasuryTypes) => {
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
        <TreasuryForm onSubmit={handleFormSubmit} ref={formRef} />
      </SharedDialog>
    </Box>
  );
}
