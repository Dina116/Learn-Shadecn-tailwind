// ./customerwalks/component/CollectorCell.tsx

import { Select, MenuItem, Typography, Box } from "@mui/material";
import type { Collectors } from "../../ColumnNames";
type CollectorCellProps = {
  assignedCollectorId: number;
  collectors: Collectors[];
  onCollectorChange: (newCollectorId: number) => void;
};

export default function CollectorCell({
  assignedCollectorId,
  collectors,
  onCollectorChange,
}: CollectorCellProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: "row-reverse",
      }}
    >
      <Select
        value={assignedCollectorId ?? ""}
        onChange={(event) => {
          onCollectorChange(event.target.value as number);
        }}
        size="small"
        sx={{ width: 200, direction: "rtl" }}
      >
        <MenuItem value="">
          <em>اختر محصِّل</em>
        </MenuItem>
        {collectors.map((collector) => (
          <MenuItem key={collector.ID} value={collector.ID}>
            {collector.FULL_NAME}
          </MenuItem>
        ))}
      </Select>
      {assignedCollectorId && (
        <Typography
          variant="body2"
          sx={{  backgroundColor: "gray", padding: 1, borderRadius:1, color:"white" }}
        >
          {assignedCollectorId}
        </Typography>
      )}
    </Box>
  );
}
