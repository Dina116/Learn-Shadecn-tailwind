import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField, Typography } from "@mui/material";
import { forwardRef, useImperativeHandle } from "react";
import type { PortalPhonesTypes } from "./types";
import { portalSchema } from "./portalSchema";

export type PortalFormProps = {
  onSubmit: (formData: PortalPhonesTypes) => void;
  defaultValues?: PortalPhonesTypes;
  onClose?: () => void;
};

export interface PortalFormRef {
  submit: () => void;
}

const PortalForm = forwardRef<PortalFormRef, PortalFormProps>(
  ({ onSubmit, defaultValues }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<PortalPhonesTypes>({
      defaultValues: defaultValues || {
        ID: "",
        DEVICE_ID: "",
        branch: "",
        dedicatedto: "",
        status: "",
        chipnumber: 0,
        company: "",
        model: "",
        notes: "",
        operatingsystem: "",
        osversion: "",
        idnumber: 0,
        paymentdate: new Date(),
        warranty: 0,
        internetstartdate: new Date(),
        packagerenewal: 0,
        charger: "",
      },
      resolver: zodResolver(portalSchema),
    });

    const onValidSubmit = (data: PortalPhonesTypes) => {
      onSubmit(data);
    };

    useImperativeHandle(ref, () => ({
      submit: handleSubmit(onValidSubmit),
    }));

    const renderField = (
      name: keyof PortalPhonesTypes,
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
        {renderField("ID", "رقم الجهاز", "string", true)}
        {renderField("DEVICE_ID", "كود الوحدة", "string", true)}

        {renderField("company", "الشركة المصنعة")}
        {renderField("model", "الموديل")}

        {renderField("chipnumber", "رقم الشريحة", "number")}
        {renderField("dedicatedto", "مخصص لـ")}

        {renderField("notes", "ملاحظات")}
        {renderField("status", "الحالة")}

        {renderField("operatingsystem", "نظام التشغيل")}
        {renderField("osversion", "اصدار نظام التشغيل")}

        {renderField("idnumber", "رقم البطارية")}
        {renderField("paymentdate", "تاريخ الشراء", "date")}

        {renderField("warranty", "الضمان", "number")}
        {renderField("internetstartdate", "بداية باقة الانترنت", "date")}

        {renderField("packagerenewal", "تجديد الباقة", "number")}
        {renderField("charger", "الشاحن")}
      </Box>
    );
  },
);

export default PortalForm;
