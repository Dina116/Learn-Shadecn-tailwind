import { useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import ScoutForm, { type ScoutFormProps } from "./ScoutsForm";

export default function AddScoutsDialog({ onSubmit }: ScoutFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    console.log("يتم الحفظ...");
    handleCloseDialog();
  };

  return (
    <Box sx={{ padding: 4  }}>
      <Button variant="contained" onClick={handleOpenDialog}>
        إضافة كشاف جديد
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="إضافة كشاف جديد"
        maxWidth="md"
        primaryAction={{
          text: "حفظ",
          onClick: handleSave,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <ScoutForm onSubmit={onSubmit} />
      </SharedDialog>
    </Box>
  );
}
