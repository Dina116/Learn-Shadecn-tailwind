import { Box } from "@mui/material";
import SharedDialog from "../../../componenet/shared/SharedDialog";
import type { DialogProps, formInputDataType } from "./types";
import FormUI from "./form/FormUI";
import { useFormContext } from "react-hook-form";

export default function Dialog({
  data,
  id,
  handleCloseDialog,
  isDialogOpen,
  title,
  formRef,
  disabledFields,
  onFetchComplete,
  onSuccessfulSubmit,
  selectedRows,
  setSelectedRows,
  tableData,
}: DialogProps) {
  const { handleSubmit } = useFormContext<formInputDataType>();
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
        maxWidth={tableData.length > 0 ? "md" : "sm"}
        primaryAction={{
          text: "حفظ",
          onClick: handleSubmit(onSuccessfulSubmit, onFormError),
        }}
        secondaryAction={{
          text: "إلغاء",
          onClick: handleCloseDialog ?? (() => {}),
        }}
      >
        <FormUI
          ref={formRef}
          data={data}
          id={id}
          onFetchComplete={onFetchComplete}
          disabledFields={disabledFields}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          tableData={tableData}
        />
      </SharedDialog>
    </Box>
  );
}
