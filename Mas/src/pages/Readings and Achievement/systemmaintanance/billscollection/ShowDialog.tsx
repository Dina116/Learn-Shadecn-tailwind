import { Button, Box } from "@mui/material";
import type { ShowDialogProps } from "../types";
import useDialog from "../../../../hooks/systemmaintanance/useShowDialog";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
import FormThreeFieldsWrapper from "../component/threefields/FormThreeFieldsWrapper";

export default function ShowDialog({ data, title, id }: ShowDialogProps) {
  const {
    handleFormSubmit,
    handleOpenDialog,
    handleSave,
    isDialogOpen,
    formRef,
    handleCloseDialog,
    handelNavigateToAddRemovePath,
    handelNavigateToSwitchCollectorPath,
  } = useDialog(id);

  console.log("data from ShowDialog ", data);

  const handleNavigation = () => {
    switch (id) {
      case "switch_collectors_path":
        handelNavigateToSwitchCollectorPath();
        break;
      case "add_remove_paths":
        handelNavigateToAddRemovePath();
        break;
      default:
        handleOpenDialog();
    }
  };
  return (
    <Box sx={{ paddingTop: 1, mb: 1 }}>
      <Button variant="contained" onClick={handleNavigation}>
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
