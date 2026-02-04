import { useRef, useState } from "react";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import PortalForm, { type PortalFormRef } from "./PortalForms";
import type { EditPortalDialogProps, PortalPhonesTypes } from "./types";
import { Box, Button } from "@mui/material";
import { useEditPortal } from "./api/useEditPortal";

export default function EditPortalDialog({ rowdata }: EditPortalDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<PortalFormRef>(null);
  const { mutate: editPortal, isPending, isError, error } = useEditPortal();

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (data: PortalPhonesTypes) => {
    console.log("Data received in Dialog from Form:", data);
    editPortal(
      { id: rowdata.DEVICE_ID, data },
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
        title="تعديل الوحدة المحمولة"
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
        <PortalForm
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
