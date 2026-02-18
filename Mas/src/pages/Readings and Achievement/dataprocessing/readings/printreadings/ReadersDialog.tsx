import { Box } from "@mui/material";
import type { redaersDialogProps } from "../../types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import ReadersForm from "./readerform/readersform";

export default function ReadersDialog({
  data,
  handleCloseDialog,
  isDialogOpen,
  title,
  formRef,
  handleFormSubmit,
  handleSave,
}: redaersDialogProps) {
  return (
    <Box sx={{ paddingTop: 1, mb: 1, direction: "rtl" }}>
      <SharedDialog
        open={isDialogOpen ?? false}
        onClose={handleCloseDialog ?? (() => {})}
        title={title ?? ""}
        maxWidth="xs"
        primaryAction={{
          text: "تحميل",
          onClick: handleSave ?? (() => {}),
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog ?? (() => {}),
        }}
      >
        <ReadersForm readers={data} ref={formRef} onSubmit={handleFormSubmit} />
      </SharedDialog>
    </Box>
  );
}
