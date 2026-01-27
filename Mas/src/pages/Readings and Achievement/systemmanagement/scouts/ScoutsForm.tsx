import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type { scoutsFormType } from "./scoutstypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScoutesSchema } from "./ScoutsSchema";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export type ScoutFormProps = {
  onSubmit: (formData: scoutsFormType) => void;
  defaultValues?: scoutsFormType;
  onClose?: () => void;
};
export default function ScoutForm({ onSubmit }: ScoutFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<scoutsFormType>({
    defaultValues: {
      code: 0,
      name: "",
      branch: "",
      portalphone: "",
      usercode: "",
      status: true,
    },
    resolver: zodResolver(ScoutesSchema),
  });

  const handleSubmittion: SubmitHandler<scoutsFormType> = (data) => {
    console.log("البيانات صالحة:", data);
    onSubmit(data);
  };
  return (
    <Box
      dir="rtl"
      component="form"
      onSubmit={handleSubmit(handleSubmittion)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 3,
        maxWidth: 900,
        mx: "auto",
      }}
      noValidate
    >
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs">الكود</label>
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                variant="outlined"
                error={!!errors.code}
                helperText={errors.code?.message}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs">اسم الكشاف</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs">كود الموظف</label>
          <Controller
            name="usercode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.code}
                helperText={errors.code?.message}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xs">الفرع</label>
          <Controller
            name="branch"
            control={control}
            render={({ field }) => (
              <FormControl
                fullWidth
                error={!!errors.branch}
                className="flex flrx-row"
              >
                <Select {...field}>
                  <MenuItem value="branch1">فرع 1</MenuItem>
                  <MenuItem value="branch2">فرع 2</MenuItem>
                  <MenuItem value="branch3">فرع 3</MenuItem>
                </Select>
                {errors.branch && (
                  <Typography color="error" variant="caption">
                    {errors.branch.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs">نوع الكشاف</label>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              error={!!errors.portalphone}
              helperText={errors.portalphone?.message}
            />
          )}
        />
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <label>الوحده المحموله</label>
          <Controller
            name="portalphone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.portalphone}
                helperText={errors.portalphone?.message}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>رقم هاتف 1</label>
          <Controller
            name="phone1"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.portalphone}
                helperText={errors.portalphone?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <label>رقم هاتف 2</label>
          <Controller
            name="phone2"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                error={!!errors.portalphone}
                helperText={errors.portalphone?.message}
              />
            )}
          />
        </div>
        <Typography>نشط</Typography>
        <Button
          type="button"
          variant="contained"
          size="small"
          sx={{ backgroundColor: "red" }}
        >
          تعطيل الكشاف
        </Button>
      </div>
      <Button type="submit" variant="contained" size="large">
        حفظ
      </Button>
    </Box>
  );
}
