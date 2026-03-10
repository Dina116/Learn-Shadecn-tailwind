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
import type { HistoryRequest } from "./types";
import { useGetAllStationsApi } from "../../api/useControlApi";
import dayjs from "dayjs";

interface Props {
  getFilterdData: (data: HistoryRequest) => void;
  stationNo?: number | null;
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

export default function FilterForm({ getFilterdData, stationNo }: Props) {
  const { data: stations } = useGetAllStationsApi();
  const onSubmit = (data: HistoryRequest) => {
    console.log(data, "DataFormFilter");
    getFilterdData(data);
  };
  const { handleSubmit, control } = useForm<HistoryRequest>();

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
                // multiple
                limitTags={2}
                options={stations || []}
                defaultValue={
                  stations?.find((s) => s.STATION_NO === stationNo) || null
                }
                fullWidth
                sx={{
                  // width: 550,
                  "& .MuiAutocomplete-option": {
                    backgroundColor: "#fff",
                    color: "#000 !important",
                  },
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
                    sx: {
                      textAlign: "right",
                      "& .MuiAutocomplete-option": {
                        color: "#000 !important",
                        fontSize: "0.85rem",
                      },
                    },
                  },
                }}
                getOptionLabel={(option) => option.DESCRIPTION || ""}
                onChange={(_, value) => onChange(value?.STATION_NO)}
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
                  views={["year", "month", "day"]}
                  format="DD/MM/YYYY"
                  className="w-full"
                  value={field.value ? dayjs(field.value.datetime) : null}
                  onChange={(newValue) => {
                    field.onChange(
                      newValue
                        ? { datetime: newValue.toISOString() }
                        : undefined,
                    );
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
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        },
                        "& .MuiInputBase-input": {
                          padding: "2px 6px",
                          fontSize: "0.75rem",
                          textAlign: "right",
                          direction: "ltr",
                        },
                        "& input::placeholder": {
                          textAlign: "right",
                        },
                      },
                      inputProps: {
                        style: {
                          padding: "8.5px 14px",
                          fontSize: "0.75rem",
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
                    textAlign: "right",
                  }}
                >
                  تاريخ نهاية مدة السحب
                </InputLabel>
                <DatePicker
                  format="DD/MM/YYYY"
                  className="w-full"
                  value={field.value ? dayjs(field.value.datetime) : null}
                  onChange={(newValue) => {
                    field.onChange(
                      newValue
                        ? { datetime: newValue.toISOString() }
                        : undefined,
                    );
                  }}
                  slots={{
                    openPickerIcon: CalendarIcon,
                  }}
                  slotProps={{
                    textField: {
                      placeholder: "DD/MM/YYYY",
                      size: "small",
                    },
                  }}
                  sx={{
                    direction: "ltr",
                    "& .MuiInputBase-input": {
                      textAlign: "right",
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
