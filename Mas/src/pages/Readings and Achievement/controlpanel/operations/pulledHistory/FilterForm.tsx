import { Controller, useForm } from "react-hook-form";
import {
  Autocomplete,
  Button,
  InputLabel,
  TextField,
  Box,
  type AutocompleteRenderInputParams,
} from "@mui/material";
import {
  CalendarIcon,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { FormFilterType } from "./types";
import { useGetAllStationsApi } from "../../api/useControlApi";
import dayjs from "dayjs";

interface Props {
  onSubmit: (data: FormFilterType) => void;
  stationNo?: number;
}
const compactFieldStyles = {
  "& .MuiOutlinedInput-root": {
    height: "35px",
    padding: "0 8px !important",
  },
  "& .MuiOutlinedInput-input": {
    padding: "6px 8px",
  },
};

export default function FilterForm({ onSubmit, stationNo }: Props) {
  const { data: stations } = useGetAllStationsApi();
  const { handleSubmit, control } = useForm<FormFilterType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-6 " dir="rtl">
        <Controller
          name="StationNo"
          control={control}
          render={({ field: { onChange } }) => (
            <Box>
              <InputLabel
                sx={{
                  mb: 1,
                  color: "black",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                الفرع
              </InputLabel>
              <Autocomplete
                options={stations || []}
                defaultValue={
                  stations?.find((s) => s.stationNo === stationNo) || null
                }
                fullWidth
                sx={{
                  // width: 550,
                  "& .MuiAutocomplete-endAdornment": {
                    right: "auto !important",
                    left: "9px",
                  },
                  "& .MuiOutlinedInput-root": {
                    //   minHeight: 20,
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
                getOptionLabel={(option) => option.description || ""}
                onChange={(_, value) => onChange(value?.stationNo)}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    size="small"
                    sx={compactFieldStyles}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: <>{params.InputProps.endAdornment}</>,
                    }}
                  />
                )}
              />
            </Box>
          )}
        />
        <Controller
          name="Custkey"
          control={control}
          render={({ field }) => (
            <Box>
              <InputLabel
                sx={{
                  mb: 1,
                  color: "black",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                رقم الحساب
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                {...field}
                sx={{ ...compactFieldStyles }}
              />
            </Box>
          )}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="StartDate"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  sx={{
                    mb: 0.5,
                    color: "black",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  تاريخ بداية مدة السحب
                </InputLabel>
                <DatePicker
                  format="YYYY-MM-DD"
                  className="w-full"
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
                        textAlign: "right",
                        "& .MuiOutlinedInput-root": {
                          height: 28,
                          minHeight: 28,
                        },
                        "& .MuiInputBase-input": {
                          padding: "2px 6px",
                          fontSize: "0.75rem",
                        },
                        // "& .MuiOutlinedInput-root": {
                        //   height: 32,
                        //   minHeight: 32,
                        // },
                        // "& .MuiInputBase-input": {
                        //   padding: "4px 8px",
                        //   fontSize: "0.8rem",
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "flex-start",
                        //   direction: "ltr",
                        // },
                      },
                      inputProps: {
                        style: {
                          padding: "8.5px 14px",
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
                    ...compactFieldStyles,
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
              </Box>
            )}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="EndDate"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  sx={{
                    mb: 1,
                    color: "black",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  تاريخ نهاية مدة السحب
                </InputLabel>
                <DatePicker
                  format="YYYY-MM-DD"
                  className="w-full"
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
                        //   width: 550,
                        textAlign: "right",
                        //   "& .MuiInputBase-input": {
                        //     display: "flex",
                        //     alignItems: "center",
                        //     justifyContent: "flex-start",
                        //     direction: "ltr",
                        //   },
                      },
                    },
                    inputAdornment: {
                      position: "end",
                      sx: {
                        marginRight: "8px",
                      },
                    },
                  }}
                  sx={{
                    ...compactFieldStyles,
                    "& .MuiInputBase-root": {
                      width: 250,
                      "& .MuiInputBase-root": {
                        direction: "ltr",
                        textAlign: "center",
                        "& .MuiInputAdornment-root": {
                          marginRight: "8px",
                        },
                      },
                    },
                  }}
                />
              </Box>
            )}
          />
        </LocalizationProvider>
      </div>

      <Box sx={{ display: "flex", mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ mx: "auto", px: 4, height: "30px", width: 20 }}
        >
          تنفيذ
        </Button>
      </Box>
    </form>
  );
}
