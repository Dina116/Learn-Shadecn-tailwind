import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldPath,
} from "react-hook-form";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { SectionRow } from "./LayoutHelpers";
import type { FieldProps, formInputDataType, SelectOption } from "../../types";

export const RenderField = <TFieldName extends FieldPath<formInputDataType>>({
  name,
  label,
  control,
  errors,
  type = "text",
  required = false,
  disabled = false,
  render,
}: FieldProps<TFieldName>) => (
  <Box
    sx={{ display: "flex", flexDirection: "column", gap: 0.5, width: "100%" }}
  >
    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>

    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        if (render) {
          return render(field);
        }
        return (
          <TextField
            {...field}
            type={type}
            size="small"
            fullWidth
            disabled={disabled}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: disabled ? "#f0f0f0" : "#fcfcfc",
              },
              "& input::placeholder": { color: "gray", opacity: 1 },
            }}
          />
        );
      }}
    />
  </Box>
);

export type CheckboxProps = {
  name: keyof formInputDataType;
  label: string;
  control: Control<formInputDataType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: (field: keyof formInputDataType) => any;
  children?: React.ReactNode;
  // labelPlacement?: "start" | "end" | "top" | "bottom";
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
                // width: "100%",
                m: 0,
                // direction: "rtl",

                // "& .MuiFormControlLabel-label": {
                //   ml: 0,
                //   mr: 1,
                // },
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

type RenderSelectProps = {
  name: keyof formInputDataType;
  label: string;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  options: SelectOption[];
  disabled?: boolean;
};

export const RenderSelect = ({
  name,
  label,
  control,
  errors,
  options,
  disabled = false,
}: RenderSelectProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
      <FormControl fullWidth error={!!errors[name]}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              dir="rtl"
              labelId={`select-label-${name}`}
              size="small"
              disabled={disabled}
              sx={{
                backgroundColor: disabled ? "#f0f0f0" : "#fcfcfc",
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors[name] && (
          <FormHelperText>{errors[name]?.message as string}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
