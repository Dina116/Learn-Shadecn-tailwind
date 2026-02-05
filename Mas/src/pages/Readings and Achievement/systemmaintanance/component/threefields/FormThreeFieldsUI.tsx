import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { FormThreeFieldTypes, SelectOption } from "../../types";

type Props = {
  control: Control<FormThreeFieldTypes>;
  errors: FieldErrors<FormThreeFieldTypes>;
  dataOptions: SelectOption[];
  books: SelectOption[];
  walks: SelectOption[];
  id: string;
};
const FormThreeFieldsUI = ({
  control,
  errors,
  dataOptions,
  books,
  walks,
  id,
}: Props) => {
  const renderSelectField = (
    name: keyof FormThreeFieldTypes,
    label: string,
    required = true,
    options: SelectOption[],
  ) => (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 0.5, width: "100%" }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            displayEmpty
            IconComponent={(props) => (
              <KeyboardArrowDownIcon
                {...props}
                sx={{ ".MuiSelect-icon": { left: "7px", right: "auto" } }}
              />
            )}
            sx={{ "& .MuiOutlinedInput-root": { backgroundColor: "#fcfcfc" } }}
            size="small"
            fullWidth
            variant="outlined"
            error={!!errors[name]}
          >
            {options.length === 0 ? (
              <MenuItem disabled value="no-data">
                لا يوجد بيانات
              </MenuItem>
            ) : (
              options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            )}
          </Select>
        )}
      />
    </Box>
  );
  const renderField = (
    name: keyof FormThreeFieldTypes,
    label: string,
    type = "text",
    required = false,
  ) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            size="small"
            fullWidth
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            slotProps={{
              inputLabel: { shrink: true },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fcfcfc",
              },
            }}
          />
        )}
      />
    </Box>
  );
  const renderForm = () => {
    switch (id) {
      case "reverse_collection":
        return (
          <>
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("BOOK_NO", "السجل", true, books)}
            {renderSelectField("WALK_DESCRIPTION", "المسار", true, walks)}
          </>
        );
      case "lock_collection_unit":
        return (
          <>
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("BOOK_NO", "السجل", true, books)}
            {renderSelectField("WALK_DESCRIPTION", "المسار", true, walks)}
            {renderField("Collection_Count", "عدد التحصيل", "number", true)}
          </>
        );
    }
  };
  return (
    <Box dir="rtl" sx={{ p: 3 }} component="form" noValidate>
      {renderForm()}
    </Box>
  );
};

export default FormThreeFieldsUI;
