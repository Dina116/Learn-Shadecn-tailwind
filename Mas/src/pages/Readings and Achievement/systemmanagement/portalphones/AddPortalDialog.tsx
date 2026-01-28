import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import type { PortalPhonesTypes } from "./types";
import { type PortalFormRef } from "./PortalForms";
import PortalForm from "./PortalForms";

interface AddPortalDialogProps {
  onSubmit: (data: PortalPhonesTypes) => void;
}
export default function AddScoutsDialog({ onSubmit }: AddPortalDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<PortalFormRef>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: PortalPhonesTypes) => {
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
        إضافة كشاف جديد
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="إضافة كشاف جديد"
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
        <PortalForm onSubmit={handleFormSubmit} ref={formRef} />

        {/* onSubmit={handleFormSubmit} ref={formRef} */}
      </SharedDialog>
    </Box>
  );
}
