import { useFormContext } from "react-hook-form";
import type { DialogProps, MarfetingFormType } from "../types";
import { Box } from "@mui/material";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import MarketingPlanForm from "./MarketingPlanForm";

export default function Dialog({
  id,
  handleCloseDialog,
  isDialogOpen,
  title,
  formRef,
  onSuccessfulSubmit,
}: DialogProps) {
  const { handleSubmit } = useFormContext<MarfetingFormType>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormError = (errors: any) => {
    console.error("Form validation failed:", errors);
  };
  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <SharedDialog
        open={isDialogOpen ?? false}
        onClose={handleCloseDialog ?? (() => {})}
        title={title ?? ""}
        maxWidth="xs"
        primaryAction={{
          text: "حفظ",
          onClick: handleSubmit(onSuccessfulSubmit, onFormError),
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog ?? (() => {}),
        }}
      >
        <MarketingPlanForm ref={formRef} id={id} />
      </SharedDialog>
    </Box>
  );
}
