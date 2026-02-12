import { Box } from "@mui/material";
import type { ShowDialogProps } from "../types";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import FormThreeFieldsWrapper from "../component/threefields/FormThreeFieldsWrapper";
import useDialog from "../../../../hooks/systemmaintanance/useDialog";

export default function ReadingDialog({
  data,
  id,
  handleCloseDialog,
  isDialogOpen,
  title,
}: ShowDialogProps) {
  const { formRef, handleFormSubmit, handleSave } = useDialog(id);
  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <SharedDialog
        open={isDialogOpen ?? false}
        onClose={handleCloseDialog ?? (() => {})}
        title={title ?? ""}
        maxWidth="xs"
        primaryAction={{
          text: "حفظ",
          onClick: handleSave ?? (() => {}),
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog ?? (() => {}),
        }}
      >
        <FormThreeFieldsWrapper
          onSubmit={handleFormSubmit ?? (() => {})}
          ref={formRef}
          data={data}
          id={id}
        />
      </SharedDialog>
    </Box>
  );
}
