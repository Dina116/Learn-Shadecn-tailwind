import { Box, Button, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import CollectorCell from "../../../../componenet/systemmanagement/CollectorCell";
import type { Emp } from "../types";
import { useState } from "react";

type CollectorFilterBarProps = {
  collectors: Emp[];
  getBookMutate1: (empid: string) => void;
  getBookMutate2: (empid: string) => void;
};
export default function CollectorFilterBar({
  collectors,
  getBookMutate1,
  getBookMutate2,
}: CollectorFilterBarProps) {
  const [assignedCollectorId1, setAssignedCollectorId1] = useState(0);
  const [assignedCollectorId2, setAssignedCollectorId2] = useState(0);
  return (
    <Box className="flex gap-4 items-end" sx={{ direction: "rtl" }}>
      <Box className="flex gap-3 items-end">
        <div className="w-140">
          <Typography fontSize={13} fontWeight="bold">
            الكشاف / المحصل
          </Typography>
          <CollectorCell
            assignedCollectorId={assignedCollectorId1 ?? undefined}
            collectors={collectors ?? []}
            onCollectorChange={(newId) => {
              setAssignedCollectorId1(newId);
              getBookMutate1(String(newId));
            }}
            shownameWithId={true}
          />
        </div>

        <Button
          variant="contained"
          size="small"
          disabled
          sx={{
            minHeight: 30,
            height: 30,
            gap: 1,
            px: 1.8,
            fontSize: "0.8rem",
            textTransform: "none",
            "& .MuiButton-startIcon svg": {
              fontSize: 18,
            },
          }}
          endIcon={<RedoIcon />}
        >
          تراجع
        </Button>
      </Box>

      <Box className="w-110 ms-5">
        <Typography fontSize={13} fontWeight="bold">
          الكشاف / المحصل
        </Typography>
        <CollectorCell
          assignedCollectorId={assignedCollectorId2 ?? undefined}
          collectors={collectors ?? []}
          onCollectorChange={(newId) => {
            setAssignedCollectorId2(newId);
            getBookMutate2(String(newId));
          }}
          shownameWithId={true}
        />
      </Box>
    </Box>
  );
}
