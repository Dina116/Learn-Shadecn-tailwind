import { useRef, useState } from "react";
import SharedDialog from "../../../../componenet/shared/SharedDialog";

import { Box, Button } from "@mui/material";
import type {
  DeviceProcedureFormRef,
  EditDeviceProcedureDialogProps,
  DeviceProcedureTypes,
} from "./types";
import DeviceProcedureForm from "./DeviceProcedureForm";

export default function EditDeviceProcedureDialog({
  onSubmit,
  rowdata,
}: EditDeviceProcedureDialogProps) {
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
      <Button
        variant="outlined"
        onClick={handleOpenDialog}
        size="small"
        sx={{
          height: 30,
          border: "none",
          "&:hover": {
            border: "none",
          },
        }}
      >
        ✏️
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="تعديل نوع الصيانة"
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
        <DeviceProcedureForm
          onSubmit={handleFormSubmit}
          ref={formRef}
          defaultValues={rowdata}
        />
      </SharedDialog>
    </Box>
  );
}
