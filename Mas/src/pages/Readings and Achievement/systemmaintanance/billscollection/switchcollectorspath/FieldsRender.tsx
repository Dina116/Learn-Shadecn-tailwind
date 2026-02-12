import { Box, TextField } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form";

export const renderField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  type = "text",
  control: Control<T>,
  errors: FieldErrors<T>,
) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          size="small"
          fullWidth
          label={label}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          slotProps={{
            inputLabel: { shrink: true },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fcfcfc",
              height: 30,
              fontSize: "0.8rem",
            },
            "& .MuiOutlinedInput-input": {
              padding: "6px 10px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "0.75rem",
              top: -2,
            },
            "& .MuiFormHelperText-root": {
              fontSize: "0.7rem",
              marginTop: "2px",
            },
          }}
        />
      )}
    />
  </Box>
);
