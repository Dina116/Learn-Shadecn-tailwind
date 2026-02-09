import { Button, Box } from "@mui/material";
import type { ShowDialogProps } from "../../types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import FormThreeFieldsWrapper from "./FormThreeFieldsWrapper";
import useDialog from "../../../../../hooks/systemmaintanance/useDialog";

export default function ShowDialog({ data, title, id }: ShowDialogProps) {
  const {
    handleFormSubmit,
    handleOpenDialog,
    handleSave,
    isDialogOpen,
    formRef,
    handleCloseDialog,
  } = useDialog(id);

  console.log("data from ShowDialog ", data);
  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <Button variant="contained" onClick={handleOpenDialog}>
        عرض
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title={title ?? ""}
        maxWidth="xs"
        primaryAction={{
          text: "حفظ",
          onClick: handleSave,
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog,
        }}
      >
        <FormThreeFieldsWrapper
          onSubmit={handleFormSubmit}
          ref={formRef}
          data={data}
          id={id}
        />
      </SharedDialog>
    </Box>
  );
}
