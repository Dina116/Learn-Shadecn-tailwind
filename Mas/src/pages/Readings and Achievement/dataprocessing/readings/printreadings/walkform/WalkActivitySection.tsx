import { Autocomplete, Box, Paper, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

export default function WalkActivitySection({
  control,
  activityItems,
  selectedActivityId,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              activityItems.find((item: any) => item.id === field.value) ||
              null;

            return (
              <Autocomplete
                value={selectedValue}
                onChange={(event, newValue) =>
                  field.onChange(newValue ? newValue.id : null)
                }
                onBlur={field.onBlur}
                options={activityItems}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                getOptionLabel={(option: any) => option.title}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                isOptionEqualToValue={(option: any, value: any) =>
                  option.id === value.id
                }
                sx={{
                  flexGrow: 1,
                  direction: "rtl",
                  backgroundColor: "#fcfcfc",
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                  },
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
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ConsumpFields({ control }: any) {
  return (
    <Box display="flex" gap={1} alignItems="flex-end">
      <NumberField label="من" name="consumpFrom" control={control} />
      <NumberField label="الى" name="consumpTo" control={control} />
    </Box>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NumberField({ label, name, control }: any) {
  return (
    <Box>
      <Typography fontSize={12} fontWeight="bold">
        {label}
      </Typography>

      <Controller
        name={name}
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
  );
}
