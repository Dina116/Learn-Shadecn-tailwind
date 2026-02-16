import { Box } from "@mui/material";
import SharedDialog from "../../../componenet/shared/SharedDialog";
import type { DialogProps } from "./types";
import FormUI from "./form/FormUI";

export default function Dialog({
  data,
  id,
  handleCloseDialog,
  isDialogOpen,
  title,
  handleFormSubmit,
  formRef,
  control,
  errors,
  watch,
  handleSave,
}: DialogProps) {
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
        <FormUI
          onSubmit={handleFormSubmit ?? (() => {})}
          ref={formRef}
          data={data}
          id={id}
          control={control}
          errors={errors}
          watch={watch}
        />
      </SharedDialog>
    </Box>
  );
}
