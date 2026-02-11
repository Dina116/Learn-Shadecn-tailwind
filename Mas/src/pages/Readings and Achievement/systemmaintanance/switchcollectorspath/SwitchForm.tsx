import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type {
  SwitchFormInput,
  SwitchFormProps,
  SwitchFormRef,
  SwitchFormType,
} from "./types";
import { forwardRef, useImperativeHandle, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SwitchSchema } from "./SwitchSchema";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DownloadIcon from "@mui/icons-material/Download";
import { renderselectField } from "./RenderSelectField";
import { renderField } from "./FieldsRender";
// import useSwitchCollectorPath from "../../../../hooks/systemmaintanance/switchcollectorspath/useSwitchCollectorPath";

export const SwitchForm = forwardRef<SwitchFormRef, SwitchFormProps>(
  ({ onSubmit, defaultValues, emp }, ref): ReactNode => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<SwitchFormInput, any, SwitchFormType>({
      resolver: zodResolver(SwitchSchema),
      defaultValues: defaultValues || {
        date: new Date().toISOString().split("T")[0],
        from: undefined,
        to: undefined,
        group_id: undefined,
        include_previous_invoices: false,
        last_cycle_only: false,
      },
    });
    // const { emp } = useSwitchCollectorPath();

    const onValidSubmit: SubmitHandler<SwitchFormType> = (data) => {
      onSubmit?.(data);
    };
    useImperativeHandle(ref, () => ({
      submit: handleSubmit(onValidSubmit),
    }));
    if (!emp) return null;
    return (
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onValidSubmit)}
        dir="rtl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          {renderselectField<SwitchFormType>(
            "from",
            "من",
            true,
            control,
            errors,
            [],
            emp,
          )}
          {renderselectField<SwitchFormType>(
            "to",
            "إلى",
            true,
            control,
            errors,
            [],
            emp,
          )}
          {renderField<SwitchFormType>(
            "group_id",
            "رقم المجموعة",
            "text",
            control,
            errors,
          )}
          {renderField<SwitchFormType>(
            "date",
            "دورة الاصدار",
            "date",
            control,
            errors,
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Controller
            name="include_previous_invoices"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    size="small"
                    sx={{
                      padding: "4px",
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="يشمل الفواتير السابقة للعملاء التي في عهدة آخرين"
                sx={{
                  justifyContent: "stretch",
                  alignItems: "flex-start",
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.8rem",
                    lineHeight: 2.1,
                  },
                }}
              />
            )}
          />
          <Controller
            name="last_cycle_only"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    size="small"
                    sx={{
                      padding: "4px",
                      "& .MuiSvgIcon-root": {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label="آخر دورة فقط"
                sx={{
                  justifyContent: "stretch",
                  alignItems: "flex-start",
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.8rem",
                    lineHeight: 2,
                  },
                }}
              />
            )}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            borderTop: "1px solid #e0e0e0",
            pt: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<DownloadIcon />}
            sx={{
              minHeight: 30,
              height: 30,
              gap: 1,
              px: 1.8,
              fontSize: "0.8rem",
              textTransform: "none",
              "& .MuiButton-startIcon svg": {
                fontSize: 18,
              },
            }}
          >
            تحميل المسارات
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<CameraAltIcon />}
            sx={{
              minHeight: 30,
              height: 30,
              gap: 1,
              px: 1.8,
              fontSize: "0.8rem",
              textTransform: "none",
              "& .MuiButton-startIcon svg": {
                fontSize: 18,
              },
            }}
          >
            سجل تسليم وتسلّم
          </Button>
        </Box>
      </Box>
    );
  },
);
