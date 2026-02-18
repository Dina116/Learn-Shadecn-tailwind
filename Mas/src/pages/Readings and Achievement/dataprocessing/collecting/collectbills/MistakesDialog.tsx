import { Box, Button } from "@mui/material";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import { useState } from "react";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import { mistaketablecolumns } from "./tableColumns";
import type { MistakesDialogProps } from "../../types";

export default function MistakesDialog({ data }: MistakesDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleOpenDialog}
        size="small"
        sx={{
          minWidth: 0,
          py: 0.9,
          fontSize: 12,
          lineHeight: 1,
          backgroundColor: "#e31e1e",
        }}
      >
        الاخطاء
      </Button>
      <SharedDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="رسائل الخطأ"
        maxWidth="sm"
      >
        <SharedTablePagination columns={mistaketablecolumns} data={data} />
      </SharedDialog>
    </Box>
  );
}
