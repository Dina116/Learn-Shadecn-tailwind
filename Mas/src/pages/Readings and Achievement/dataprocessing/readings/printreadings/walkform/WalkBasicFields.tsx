import { Box, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    height: 30,
    fontSize: 13,
  },
  "& .MuiOutlinedInput-input": {
    padding: "4px 8px",
    textAlign: "start",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WalkBasicFields({ control }: any) {
  return (
    <>
      <Field label="المجموعه" name="BILLGROUP" control={control} />
      <Field label="المسار" name="WALK_NO" control={control} />
      <Field label="السجل" name="BOOK_NO" control={control} />
    </>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Field({ label, name, control }: any) {
  return (
    <Box>
      <Typography variant="subtitle2" fontWeight="bold">
        {label}
        <span style={{ color: "red" }}>*</span>
      </Typography>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth sx={inputStyle} />
        )}
      />
    </Box>
  );
}
