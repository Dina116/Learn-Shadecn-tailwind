import { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import ScoutForm from "./ScoutsForm";
import type { ScoutsFormRef, scoutsFormType } from "./scoutstypes";
import { useAddScout } from "../../../../hooks/systemmanagement/scouts/useAddScout";


// interface AddScoutsDialogProps {
//   onSubmit: (data: scoutsFormType) => void;
// }
export default function AddScoutsDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<ScoutsFormRef>(null);
  const { mutate, isError, isPending } = useAddScout();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: scoutsFormType) => {
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
        إضافة كشاف جديد
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="إضافة كشاف جديد"
        maxWidth="sm"
        primaryAction={{
          text: isPending ? "جاري الحفظ..." : "حفظ",
          onClick: handleSave,
          disabled: isPending,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <ScoutForm onSubmit={handleFormSubmit} ref={formRef} />
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
