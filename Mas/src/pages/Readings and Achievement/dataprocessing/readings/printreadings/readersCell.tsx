import { Autocomplete, Box, TextField } from "@mui/material";
import type { ReaderCellProps } from "../../types";

export default function ReaderCell({
  selectedReaderId,
  readers,
  onReaderChange,
  getOptionDisabled,
}: ReaderCellProps) {
  const selectedReader =
    (readers || []).find((c) => c.ID === selectedReaderId) || null;
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
        options={readers || []}
        getOptionDisabled={getOptionDisabled}
        getOptionLabel={(option) => option.FULL_NAME}
        value={selectedReader}
        onChange={(_, newValue) => {
          onReaderChange?.(newValue ? newValue.ID : 0);
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
            {option.FULL_NAME}
          </Box>
        )}
      />
    </Box>
  );
}
