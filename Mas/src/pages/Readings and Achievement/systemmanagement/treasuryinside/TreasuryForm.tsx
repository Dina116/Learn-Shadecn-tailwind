import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle } from "react";
import type { TreasuryFormRef, TreasuryTypes } from "./types";
import { TreasurySchema } from "./TreasurySchema";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export type TreasuryFormProps = {
  onSubmit: (formData: TreasuryTypes) => void;
  defaultValues?: TreasuryTypes;
  onClose?: () => void;
};

const TreasuryForm = forwardRef<TreasuryFormRef, TreasuryFormProps>(
  ({ onSubmit }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<TreasuryTypes>({
      defaultValues: {
        branch: "",
        descriprtion: "",
        code: "",
      },
      resolver: zodResolver(TreasurySchema),
    });

    const onValidSubmit = (data: TreasuryTypes) => {
      onSubmit(data);
    };

    useImperativeHandle(ref, () => ({
      submit: handleSubmit(onValidSubmit),
    }));

    const renderField = (
      name: keyof TreasuryTypes,
      label: string,
      type = "text",
      required = false,
    ) => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
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
              slotProps={{
                inputLabel: { shrink: true },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fcfcfc",
                },
              }}
            />
          )}
        />
      </Box>
    );

    const renderselectField = (
      name: keyof TreasuryTypes,
      label: string,
      required = false,
    ) => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Typography>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              IconComponent={(props) => (
                <KeyboardArrowDownIcon
                  {...props}
                  sx={{
                    ".MuiSelect-icon": {
                      left: "7px",
                      right: "auto",
                    },
                  }}
                />
              )}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fcfcfc",
                },
              }}
              size="small"
              fullWidth
              variant="outlined"
            >
              <MenuItem value="branch1">فرع 1</MenuItem>
              <MenuItem value="branch2">فرع 2</MenuItem>
              <MenuItem value="branch3">فرع 3</MenuItem>
            </Select>
          )}
        />
      </Box>
    );

    return (
      <Box
        dir="rtl"
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 30px",
          p: 3,
        }}
        noValidate
      >
        {renderField("code", "الرقم", "string", false)}
        {renderField("descriprtion", "الوصف", "string", false)}

        {renderselectField("branch", "الفرع")}
      </Box>
    );
  },
);

export default TreasuryForm;
