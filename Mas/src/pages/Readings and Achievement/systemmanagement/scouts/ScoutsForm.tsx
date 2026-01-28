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
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { forwardRef, useImperativeHandle, useState } from "react";
import TabPanel from "../../../../componenet/shared/TabPanel";

export type ScoutFormProps = {
  onSubmit: (formData: scoutsFormType) => void;
  defaultValues?: scoutsFormType;
  onClose?: () => void;
};
export interface ScoutsFormRef {
  submit: () => void;
}
function a11yProps(index: number) {
  return {
    id: `scout-tab-${index}`,
    "aria-controls": `scout-tabpanel-${index}`,
  };
}
const ScoutForm = forwardRef<ScoutsFormRef, ScoutFormProps>(
  ({ onSubmit }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
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
        portalPhones: "",
        username: "",
        password: "",
      },
      resolver: zodResolver(ScoutesSchema),
    });

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      setCurrentTab(newValue);
    };
    const onValidSubmit = (data: scoutsFormType) => {
      console.log("Form data is valid:", data);
      onSubmit(data);
    };
    useImperativeHandle(ref, () => ({
      submit: handleSubmit(onValidSubmit),
    }));
    return (
      <Box
        dir="rtl"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}
        noValidate
      >
        <Box
          sx={{
            backgroundColor: "#f0f2f5",
            minHeight: "auto",
            "& .MuiTab-root": {
              minHeight: "auto",
              minWidth: "auto",
              flex: 1,
              margin: "4px",
              color: "#555",
              fontWeight: 600,
              opacity: 1,
              "&.Mui-selected": {
                backgroundImage:
                  "radial-gradient(circle, #0086cf 0%, #005a8e 100%)",
                color: "#ffffff",
              },
            },
          }}
        >
          <Tabs value={currentTab} onChange={handleTabChange}>
            <Tab label="بيانات الكشافات الرئيسية" {...a11yProps(0)} />
            <Tab label="تعيين وحده محموله" {...a11yProps(1)} />
            <Tab label="تغيير بيانات الدخول" {...a11yProps(2)} />
            <Tab label="الصلاحيات" {...a11yProps(3)} />
            <Tab label="اعدادات اضافية" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={currentTab} index={0}>
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
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              الوحدات المحمولة
            </Typography>
            <Controller
              name="portalPhones"
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
                    <MenuItem value="branch1">لا يوجد</MenuItem>
                  </Select>
                  {errors.portalPhones && (
                    <Typography color="error" variant="caption">
                      {errors.portalPhones.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </div>
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <div className="flex flex-col gap-1">
            <Typography
              variant="caption"
              display="block"
              sx={{ fontWeight: "bold" }}
            >
              اسم المستخدم
            </Typography>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder="اقل من 5 حروف"
                  sx={{ fontSize: 2 }}
                  size="small"
                  error={!!errors.username}
                  helperText={errors.username?.message}
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
              كلمة المرور
            </Typography>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  size="small"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </div>
        </TabPanel>
      </Box>
    );
  },
);

export default ScoutForm;
