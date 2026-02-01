import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle } from "react";
import type {
  DeviceProcedureFormProps,
  DeviceProcedureFormRef,
  DeviceProcedureTypes,
} from "./types";
import { DeviceSchema } from "./DeviceSchema";

const DeviceProcedureForm = forwardRef<
  DeviceProcedureFormRef,
  DeviceProcedureFormProps
>(({ onSubmit }, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DeviceProcedureTypes>({
    defaultValues: {
      code: "",
      type: "",
    },
    resolver: zodResolver(DeviceSchema),
  });

  const onValidSubmit = (data: DeviceProcedureTypes) => {
    onSubmit(data);
  };

  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onValidSubmit),
  }));

  const renderField = (
    name: keyof DeviceProcedureTypes,
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
      {renderField("code", "الكود", "string", false)}
      {renderField("type", "النوع", "string", false)}
    </Box>
  );
});

export default DeviceProcedureForm;
