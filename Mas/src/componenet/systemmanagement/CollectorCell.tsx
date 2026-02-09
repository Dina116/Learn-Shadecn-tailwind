import { Box, MenuItem, Select, Typography } from "@mui/material";
import type { CollectorCellProps } from "../../pages/Readings and Achievement/systemmanagement/readingpaths/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function CollectorCell({
  assignedCollectorId,
  collectors,
  onCollectorChange,
  shownameWithId,
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
        IconComponent={(props) => (
          <KeyboardArrowDownIcon
            {...props}
            sx={{ left: "7px", right: "auto !important" }}
          />
        )}
        sx={{
          flexGrow: 1,
          height: 30,
          fontSize: "0.8rem",
          backgroundColor: "#fcfcfc",
          "& .MuiSelect-select": {
            padding: "3px 10px",
            textAlign: "right",
          },
        }}
      >
        {collectors.map((collector) => (
          <MenuItem key={collector.ID} value={collector.ID}>
            {shownameWithId
              ? `${collector.FULL_NAME} - ${collector.ID}`
              : collector.FULL_NAME}
          </MenuItem>
        ))}
      </Select>
      {assignedCollectorId && (
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "gray",
            padding: 1,
            borderRadius: 1,
            color: "white",
          }}
        >
          {assignedCollectorId}
        </Typography>
      )}
    </Box>
  );
}
