import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import CachedIcon from "@mui/icons-material/Cached";
import {
  Box,
  Button,
  // Grid,
  Paper,
  TextField,
  Typography,
  Autocomplete,
  CircularProgress,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  CalendarIcon,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { ControlPanelFormProps, FilterValues } from "../types";
import dayjs from "dayjs";

const CounterCard = ({
  value,
  title,
  color,
}: {
  value: number;
  title: string;
  color: string;
}) => (
  <Box sx={{ textAlign: "center" }}>
    <Box
      sx={{
        border: 1,
        borderColor: "black",
        width: 60,
        height: 50,
        pt: 1,
        bgcolor: color,
        color: "white",
        textAlign: "center",
        borderRadius: 1,
        mx: "auto",
      }}
    >
      <Typography variant="h6">{value}</Typography>
    </Box>
    <Typography variant="body2" color="gray">
      {title}
    </Typography>
  </Box>
);

export default function Form({
  showBillingDate,
  showGroups,
  showCounters,
  onLoad,
  onExecute,
  // isLoading,
  isExecuting,
  counters,
  groupsList = [],
  isGroupsLoading,
  showCompletedCounter,
  completedCounterTitle = "التامة",
  showLoadingBtn,
  showDivider,
  isAllOption,
  isAllBillings,
  handleChageAllBilings,
}: ControlPanelFormProps) {
  const { control, handleSubmit, watch } = useForm<FilterValues>({
    defaultValues: {
      billingDate: new Date().toISOString().split("T")[0],
      groups: [],
      AllBilingDate: false,
    },
  });
  const isAllBillingDateChecked = watch("AllBilingDate");

  const onSubmit: SubmitHandler<FilterValues> = (data) => {
    const dataForApi = {
      ...data,
      billingDate: data.billingDate
        ? dayjs(data.billingDate).format("YYYY-MM-DD")
        : undefined,
    };
    onLoad(dataForApi);
  };

  return (
    <Paper sx={{ p: 2, border: "1px solid #ddd", direction: "rtl" }}>
      {(showCounters || showCompletedCounter) && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // sx={{ mb: 2 }}
        >
          {showCompletedCounter ? (
            <CounterCard
              value={counters?.completed || 0}
              title={completedCounterTitle}
              color="info.main"
            />
          ) : (
            <Box />
          )}

          {showCounters && (
            <Box display="flex" gap={3}>
              <CounterCard
                value={counters?.success || 0}
                title="الناجحة"
                color="success.light"
              />
              <CounterCard
                value={counters?.failed || 0}
                title="الأخطاء"
                color="error.main"
              />
              <CounterCard
                value={counters?.pending || 0}
                title="قيد المعالجة"
                color="#ffc107"
              />
            </Box>
          )}
          {onExecute ? (
            <Button
              variant="contained"
              onClick={onExecute}
              disabled={isExecuting}
              sx={{
                height: 40,
                border: 1,
                borderColor: "black",
                backgroundColor: "orangered",
              }}
              size="small"
            >
              {isExecuting ? "جاري التنفيذ..." : "تنفيذ"}
            </Button>
          ) : (
            <Box />
          )}
        </Box>
      )}
      {showDivider && <Divider />}

      <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
        {/* <Grid container spacing={2} alignItems="flex-end"> */}
        <Box display="flex" alignItems="flex-end" gap={3} flexWrap="wrap">
          {showGroups && (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                المجموعات
              </Typography>
              <Controller
                name="groups"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    multiple
                    limitTags={2}
                    options={groupsList}
                    loading={isGroupsLoading}
                    getOptionLabel={(option) => option.name}
                    onChange={(_, data) => field.onChange(data)}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    sx={{
                      width: 300,
                      "& .MuiAutocomplete-endAdornment": {
                        right: "auto !important",
                        left: "9px",
                      },
                      "& .MuiOutlinedInput-root": {
                        minHeight: 30,
                        alignItems: "flex-start",
                        paddingTop: "1px",
                        paddingRight: "2px !important",
                        paddingLeft: "2px !important",
                      },
                    }}
                    slotProps={{
                      popper: {
                        sx: { direction: "rtl" },
                      },
                      paper: {
                        sx: { textAlign: "right" },
                      },
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <>
                              {isGroupsLoading ? (
                                <CircularProgress color="inherit" size={20} />
                              ) : null}
                              {params.InputProps.endAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                )}
              />
            </Box>
          )}

          {showBillingDate && !isAllBillingDateChecked && (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                تاريخ الدورة
              </Typography>
              <Controller
                name="billingDate"
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      format="YYYY-MM-DD"
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(newValue) => {
                        field.onChange(newValue);
                      }}
                      slots={{
                        openPickerIcon: CalendarIcon,
                      }}
                      slotProps={{
                        textField: {
                          size: "small",
                          sx: {
                            width: 250,
                            textAlign: "right",
                            "& .MuiInputBase-input": {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              direction: "ltr",
                            },
                          },
                        },
                        inputAdornment: {
                          position: "start",
                          sx: {
                            marginRight: "8px",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          width: 250,
                          "& .MuiInputBase-root": {
                            direction: "ltr",
                            textAlign: "right",
                            "& .MuiInputAdornment-root": {
                              marginRight: "8px",
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                )}
              />
            </Box>
          )}
          {isAllOption || isAllBillings ? (
            <Box>
              <Controller
                name="AllBilingDate"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        size="small"
                        sx={{ paddingRight: 0 }}
                      />
                    }
                    label="كل الدورات"
                    onChange={(_e, checked: boolean) => {
                      field.onChange(checked);
                      if (handleChageAllBilings) {
                        handleChageAllBilings(checked);
                      }
                    }}
                  />
                )}
              />
            </Box>
          ) : null}
          {showLoadingBtn && (
            <Box sx={{paddingRight:2}}>
              <Button
                type="submit"
                variant="outlined"
                startIcon={<CachedIcon />}
                sx={{ height: 35, fontWeight: "bold", gap: 1 }}
              >
                تحميل
              </Button>
            </Box>
          )}
        </Box>
      </form>
    </Paper>
  );
}
