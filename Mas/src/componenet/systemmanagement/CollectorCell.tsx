import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import type { CollectorCellProps } from "../../pages/Readings and Achievement/systemmanagement/readingpaths/types";

export default function CollectorCell({
  assignedCollectorId,
  collectors,
  onCollectorChange,
  shownameWithId,
}: CollectorCellProps) {
  const selectedCollector =
    (collectors || []).find((c) => c.ID === assignedCollectorId) || null;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexDirection: "row-reverse",
        width: "100%",
      }}
    >
      <Autocomplete
        size="small"
        options={collectors || []}
        getOptionLabel={(option) => option.FULL_NAME}
        value={selectedCollector}
        onChange={(_, newValue) => {
          onCollectorChange(newValue ? newValue.ID : 0);
        }}
        sx={{
          flexGrow: 1,
          direction: "rtl",
          backgroundColor: "#fcfcfc",
          "& .MuiOutlinedInput-root": {
            height: 30,
            fontSize: "0.8rem",
          },
          "& .MuiAutocomplete-endAdornment": {
            right: "auto  !important",
            left: 8,
          },
        }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            sx={{ fontSize: "0.8rem", textAlign: "right", direction: "rtl" }}
          >
            {shownameWithId
              ? `${option.FULL_NAME} - ${option.ID}`
              : option.FULL_NAME}
          </Box>
        )}
      />

      {assignedCollectorId && !shownameWithId && (
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "gray",
            padding: "4px 8px",
            borderRadius: 1,
            color: "white",
            fontWeight: "bold",
            minWidth: "fit-content",
          }}
        >
          {assignedCollectorId}
        </Typography>
      )}
    </Box>
  );
}
