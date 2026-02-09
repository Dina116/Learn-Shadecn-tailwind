import { useRef, useState } from "react";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import { Box, Button } from "@mui/material";
import ScoutForm from "./ScoutsForm";
import type {
  EditScoutsDialogProps,
  ScoutsFormRef,
  scoutsFormType,
} from "./scoutstypes";
import { useEditScout } from "../../../../hooks/systemmanagement/scouts/useEditScout";


export default function EditScoutsDialog({ rowdata }: EditScoutsDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<ScoutsFormRef>(null);
  const { mutate: editScout, isPending, isError ,error} = useEditScout();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: scoutsFormType) => {
    console.log("Data received in Dialog from Form:", data);
    editScout(
      { id: rowdata.ID, data },
      {
        onSuccess: () => {
          handleCloseDialog();
        },
      },
    );
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
        title="تعديل كشاف"
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
        <ScoutForm
          onSubmit={handleFormSubmit}
          ref={formRef}
          defaultValues={rowdata}
        />
        {isError && (
          <>
            {console.log("Error detected:", error)}
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
          </>
        )}
      </SharedDialog>
    </Box>
  );
}
