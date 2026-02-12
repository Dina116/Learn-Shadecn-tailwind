import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type {
  FormThreeFieldTypes,
  SelectOption,
  FormThreeFieldInput,
} from "../../types";

type Props = {
  formRef: React.RefObject<HTMLFormElement | null>;
  control: Control<FormThreeFieldInput>;
  errors: FieldErrors<FormThreeFieldInput>;
  dataOptions: SelectOption[];
  books: SelectOption[];
  walks: SelectOption[];
  id: string;
  emp: SelectOption[];
};
const FormThreeFieldsUI = ({
  formRef,
  control,
  errors,
  dataOptions,
  books,
  walks,
  id,
  emp,
}: Props) => {
  const renderSelectField = (
    name: keyof FormThreeFieldTypes,
    label: string,
    required = true,
    options?: SelectOption[],
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
          <>
            <Select
              {...field}
              displayEmpty
              IconComponent={(props) => (
                <KeyboardArrowDownIcon
                  {...props}
                  sx={{ ".MuiSelect-icon": { left: "7px", right: "auto" } }}
                />
              )}
              sx={{
                "& .MuiOutlinedInput-root": { backgroundColor: "#fcfcfc" },
              }}
              size="small"
              fullWidth
              variant="outlined"
              error={!!errors[name]}
            >
              {options?.length === 0 ? (
                <MenuItem disabled value="no-data">
                  لا يوجد بيانات
                </MenuItem>
              ) : (
                options?.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              )}
            </Select>
            {errors[name] && (
              <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
                {errors[name]?.message as string}
              </Typography>
            )}
          </>
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
      case "cancel_preparation":
      case "reprepare_closed_path":
      case "reopen_mobile_unit_path":
      case "reverse_readings":
      case "cancel_readings_preparation":
      case "reprepare_readind_closed_path":
      case "reopen_reading_group_collection":
      case "reopen_reading_closed_paths":
        return (
          <>
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("BOOK_NO", "السجل", true, books)}
            {renderSelectField("WALK_DESCRIPTION", "المسار", true, walks)}
          </>
        );

      case "lock_collection_unit":
      case "lock_reading_collection_unit":
        return (
          <>
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("BOOK_NO", "السجل", true, books)}
            {renderSelectField("WALK_DESCRIPTION", "المسار", true, walks)}
            {renderField("Collection_Count", "عدد التحصيل", "number", true)}
          </>
        );
      case "reopen_group_collection":
        return (
          <>
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("ID", "المحصل", true, emp)}
          </>
        );
      case "allow_merge_two_orders":
        return <>{renderSelectField("ID", "المحصل", true, emp)}</>;

      case "reopen_closed_paths":
        return (
          <>
            {renderSelectField("ID", "المحصل", true, emp)}
            {renderSelectField("BILLGROUP", "رقم المجموعة", true, dataOptions)}
            {renderSelectField("BOOK_NO", "السجل", true, books)}
            {renderSelectField("WALK_DESCRIPTION", "المسار", true, walks)}
          </>
        );

      default:
        return null;
    }
  };
  return (
    <form ref={formRef} noValidate dir="rtl" style={{ padding: "16px" }}>
      {renderForm()}
    </form>
  );
};

export default FormThreeFieldsUI;
