import { Box, TextField, Typography, Paper, Autocomplete } from "@mui/material";
import { Controller } from "react-hook-form";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  activityItems: { id: number; title: string; filter: string }[];
  selectedActivityId?: number;
};

export const ActivityAndConsumpFields = ({
  control,
  activityItems,
  selectedActivityId,
}: Props) => (
  <Box
    className="flex items-start gap-4"
    sx={{ direction: "rtl", flexDirection: "row-reverse" }}
  >
    {selectedActivityId === 5 && <ConsumpFields control={control} />}

    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle2" fontWeight="bold">
        الأنشطة
      </Typography>
      <Controller
        name="activityId"
        control={control}
        render={({ field, fieldState: { error } }) => {
          const selectedValue =
            activityItems.find((item) => item.id === field.value) || null;

          return (
            <Autocomplete
              value={selectedValue}
              onChange={(event, newValue) =>
                field.onChange(newValue ? newValue.id : null)
              }
              onBlur={field.onBlur}
              options={activityItems}
              getOptionLabel={(option) => option.title}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              sx={{
                flexGrow: 1,
                direction: "rtl",
                backgroundColor: "#fcfcfc",
                "& .MuiOutlinedInput-root": { height: 30, fontSize: "0.8rem" },
                "& .MuiAutocomplete-endAdornment": {
                  right: "auto  !important",
                  left: 8,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  error={!!error}
                  helperText={error?.message}
                  sx={{
                    direction: "rtl",
                    "& .MuiOutlinedInput-root": {
                      paddingRight: "9px !important",
                    },
                  }}
                />
              )}
              PaperComponent={(props) => (
                <Paper {...props} sx={{ direction: "rtl" }} />
              )}
              noOptionsText="لا توجد خيارات"
            />
          );
        }}
      />
    </Box>
  </Box>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConsumpFields = ({ control }: { control: any }) => (
  <Box display="flex" gap={1} alignItems="flex-end">
    <Box>
      <Typography fontSize={12} fontWeight="bold">
        من
      </Typography>
      <Controller
        name="consumpFrom"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            size="small"
            sx={{
              width: 90,
              "& .MuiOutlinedInput-root": { height: 30, fontSize: 13 },
              "& .MuiOutlinedInput-input": {
                padding: "4px 8px",
                textAlign: "center",
              },
            }}
          />
        )}
      />
    </Box>

    <Box>
      <Typography fontSize={12} fontWeight="bold">
        الى
      </Typography>
      <Controller
        name="consumpTo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            size="small"
            sx={{
              width: 90,
              "& .MuiOutlinedInput-root": { height: 30, fontSize: 13 },
              "& .MuiOutlinedInput-input": {
                padding: "4px 8px",
                textAlign: "center",
              },
            }}
          />
        )}
      />
    </Box>
  </Box>
);
