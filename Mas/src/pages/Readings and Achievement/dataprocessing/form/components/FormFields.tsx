import { Controller, type Control, type FieldErrors } from "react-hook-form";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { SectionRow } from "./LayoutHelpers";
import type { formInputDataType } from "../../types";

type FieldProps = {
  name: keyof formInputDataType;
  label: string;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  type?: string;
  required?: boolean;
};

export const RenderField = ({
  name,
  label,
  control,
  errors,
  type = "text",
  required = false,
}: FieldProps) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>

    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          size="small"
          fullWidth
          variant="outlined"
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#fcfcfc" },
            "& input::placeholder": { color: "gray", opacity: 1 },
          }}
        />
      )}
    />
  </Box>
);

type CheckboxProps = {
  name: keyof formInputDataType;
  label: string;
  control: Control<formInputDataType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: (field: keyof formInputDataType) => any;
  children?: React.ReactNode;
};

export const RenderCheckbox = ({
  name,
  label,
  control,
  watch,
  children,
}: CheckboxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value = watch(name as any);
  return (
    <>
      <SectionRow>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              sx={{
                width: "100%",
                m: 0,
                direction: "rtl",

                "& .MuiFormControlLabel-label": {
                  ml: 0,
                  mr: 1,
                },
              }}
              label={<Typography fontWeight="bold">{label}</Typography>}
              control={
                <Checkbox
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              }
              labelPlacement="end"
            />
          )}
        />
      </SectionRow>
      {value && children}
    </>
  );
};
