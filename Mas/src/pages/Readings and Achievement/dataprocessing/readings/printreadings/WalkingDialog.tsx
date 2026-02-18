import { Box } from "@mui/material";
import type { walkingDialogProps } from "../../types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import WalkForm from "./walkform/WalkForm";

export default function WalkingDialog({
  handleCloseDialog,
  isDialogOpen,
  title,
  formRef,
  handleFormSubmit,
  handleSave,
}: walkingDialogProps) {
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
        <WalkForm ref={formRef} onSubmit={handleFormSubmit} />
      </SharedDialog>
    </Box>
  );
}
