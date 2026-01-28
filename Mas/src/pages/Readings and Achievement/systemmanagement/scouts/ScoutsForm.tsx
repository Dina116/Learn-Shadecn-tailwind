import { Controller, useForm } from "react-hook-form";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { forwardRef, useImperativeHandle } from "react";

export type ScoutFormProps = {
  onSubmit: (formData: scoutsFormType) => void;
  defaultValues?: scoutsFormType;
  onClose?: () => void;
};
export interface ScoutsFormRef {
  submit: () => void;
}
const ScoutForm = forwardRef<ScoutsFormRef, ScoutFormProps>(
  ({ onSubmit }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      // reset,
    } = useForm<scoutsFormType>({
      defaultValues: {
        Code: 0,
        name: "",
        branch: "",
        portalPhone: "",
        usercode: "",
        status: true,
        phone1: 0,
        phone2: 0,
        type: "",
      },
      resolver: zodResolver(ScoutesSchema),
    });

    // const handleSubmittion: SubmitHandler<scoutsFormType> = (data) => {
    //   console.log("البيانات صالحة:", data);
    //   onSubmit(data);
    // };
    const onValidSubmit = (data: scoutsFormType) => {
      console.log("Form data is valid:", data);
      onSubmit(data); // استدعاء الدالة التي تم تمريرها من الـ Dialog
    };

    useImperativeHandle(ref, () => ({
      // عندما يستدعي الأب `formRef.current.submit()`، سيتم تنفيذ هذا الكود
      submit: handleSubmit(onValidSubmit),
    }));
    return (
      <Box
        dir="rtl"
        component="form"
        // component="form"
        // onSubmit={handleSubmit(handleSubmittion)}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // width: 500,
          gap: 2,
          p: 2,
        }}
        noValidate
      >
        <div className="flex flex-row w-full justify-around gap-2 ">
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              الكود
            </Typography>
            <Controller
              name="Code"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  size="small"
                  variant="outlined"
                  defaultValue="Disabled"
                  fullWidth
                  error={!!errors.Code}
                  helperText={errors.Code?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              اسم الكشاف
            </Typography>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  fullWidth
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
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              كود الموظف
            </Typography>
            <Controller
              name="usercode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  fullWidth
                  error={!!errors.usercode}
                  helperText={errors.usercode?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              الفرع
            </Typography>
            <Controller
              name="branch"
              control={control}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  error={!!errors.branch}
                  size="small"
                  sx={{ minWidth: 200 }}
                >
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
                  >
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
          <Typography
            variant="caption"
            display="block"
            sx={{ fontWeight: "bold" }}
          >
            نوع الكشاف
          </Typography>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                size="small"
                error={!!errors.type}
                helperText={errors.type?.message}
              />
            )}
          />
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              الوحدة المحمولة
            </Typography>
            <Controller
              name="portalPhone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  error={!!errors.portalPhone}
                  helperText={errors.portalPhone?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              رقم هاتف 1
            </Typography>
            <Controller
              name="phone1"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  error={!!errors.phone1}
                  helperText={errors.phone1?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-row w-full items-end gap-4">
          <div className="flex flex-col flex-grow">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              رقم هاتف 2
            </Typography>
            <Controller
              name="phone2"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  variant="outlined"
                  error={!!errors.phone2}
                  helperText={errors.phone2?.message}
                />
              )}
            />
          </div>
          <Typography sx={{ mb: "2px" }}>نشط</Typography>
          <Button
            type="button"
            variant="contained"
            size="small"
            color="error"
            sx={{ height: "fit-content", mb: "6px" }}
          >
            تعطيل الكشاف
          </Button>
        </div>
        {/* <div className="flex flex-row-reverse justify-start gap-2 mt-5 mb-5">
          <Button
            type="reset"
            variant="outlined"
            sx={{ borderColor: "red", color: "red" }}
            onClick={() => {
              reset();
            }}
          >
            إلغاء
          </Button>
          <Button type="submit" variant="contained" size="small">
            حفظ
          </Button>
        </div> */}
      </Box>
    );
  },
);

export default ScoutForm;
