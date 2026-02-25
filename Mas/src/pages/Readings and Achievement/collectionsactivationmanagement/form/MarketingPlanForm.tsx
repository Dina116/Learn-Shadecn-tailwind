import { Controller, useFormContext } from "react-hook-form";

import type { MarfetingFormRef, MarfetingFormType } from "../types";
import { forwardRef } from "react";
import React from "react";
import { Box, TextField, Typography } from "@mui/material";

type Props = {
  id: string;
};
const MarketingPlanForm = forwardRef<MarfetingFormRef, Props>(() => {
  const {
    control,
    formState: { errors },
  } = useFormContext<MarfetingFormType>();
  const formRef = React.useRef<HTMLFormElement>(null);
  return (
    <form ref={formRef} noValidate dir="rtl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          // width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "0.75rem" }}>
          اسم الخطة <span style={{ color: "red" }}>*</span>
        </Typography>

        <Controller
          name="description"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                type="text"
                size="small"
                fullWidth
                variant="outlined"
                required
                error={!!errors.description}
                helperText={errors.description?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f0f0f0",
                  },
                  "& input::placeholder": { color: "gray", opacity: 1 },
                }}
              />
            );
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%",
        }}
      >
        <Typography
          variant="button"
          sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
        >
          المبلغ - الحد الادنى <span style={{ color: "red" }}>*</span>
        </Typography>

        <Controller
          name="refAmount"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                type="number"
                size="small"
                fullWidth
                variant="outlined"
                required
                error={!!errors.refAmount}
                helperText={errors.refAmount?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f0f0f0",
                  },
                  "& input::placeholder": { color: "gray", opacity: 1 },
                }}
              />
            );
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "0.75rem" }}>
          عدد الشهور بدون تحصيل<span style={{ color: "red" }}>*</span>
        </Typography>

        <Controller
          name="noMonthes"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                type="number"
                size="small"
                fullWidth
                variant="outlined"
                required
                error={!!errors.noMonthes}
                helperText={errors.noMonthes?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f0f0f0",
                  },
                  "& input::placeholder": { color: "gray", opacity: 1 },
                }}
              />
            );
          }}
        />
      </Box>
    </form>
  );
});

export default MarketingPlanForm;
