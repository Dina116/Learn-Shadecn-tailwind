import { useForm, Controller } from "react-hook-form";
import type { FilterFormProps, GETMARKETINGPLANREQ } from "../types";
import { useGetMarketingPlansListApi } from "./marketing";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

export default function FilterForm({ onSubmit }: FilterFormProps) {
  const { data: plans } = useGetMarketingPlansListApi();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GETMARKETINGPLANREQ>({
    defaultValues: {
      plan_id: undefined,
      bilngDate: new Date().toISOString().split("T")[0],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-right">
      <div className="flex flex-row gap-4 items-end" dir="rtl">
        <div>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>
            تحديد الخطة <span className="text-red-500">*</span>
          </Typography>
          <Controller
            name="plan_id"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Autocomplete
                onChange={(event, item) => {
                  onChange(item ? item.ID : null);
                }}
                sx={{
                  flexGrow: 1,
                  direction: "rtl",
                  backgroundColor: "#fcfcfc",
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                    width: 250,
                  },
                  "& .MuiAutocomplete-endAdornment": {
                    right: "auto  !important",
                    left: 8,
                  },
                  textAlign: "end",
                }}
                value={plans?.find((plan) => plan.ID === value) || null}
                options={plans?.filter((plan) => plan.DESCRIPTION) || []}
                getOptionLabel={(option) => option.DESCRIPTION || ""}
                isOptionEqualToValue={(option, val) => option.ID === val.ID}
                slotProps={{
                  popper: {
                    sx: {
                      direction: "rtl",
                    },
                  },
                }}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    {...props}
                    key={option.ID}
                    sx={{
                      fontSize: "0.875rem",
                      textAlign: "right",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    {option.DESCRIPTION}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                    size="small"
                  />
                )}
              />
            )}
          />
          {errors.plan_id && (
            <p className="mt-1 text-sm text-red-600">
              {errors.plan_id.message}
            </p>
          )}
        </div>

        <div>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>
            تاريخ الدورة <span className="text-red-500">*</span>
          </Typography>
          <Controller
            name="bilngDate"
            control={control}
            rules={{ required: "التاريخ مطلوب" }}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                id="bilngDate"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                    width: 250,
                  },
                }}
              />
            )}
          />
          {errors.bilngDate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.bilngDate.message}
            </p>
          )}
        </div>
        <div>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>
            المجموعات
          </Typography>
          <Controller
            name="target"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                id="target"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                    width: 250,
                  },
                }}
              />
            )}
          />
          {errors.target && (
            <p className="mt-1 text-sm text-red-600">{errors.target.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            sx={{ backgroundColor: " #2688d9 ", color: "white" }}
            size="small"
          >
            عرض
          </Button>
        </div>
      </div>
    </form>
  );
}
