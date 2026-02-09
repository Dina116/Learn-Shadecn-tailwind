import { Box, Typography } from "@mui/material";
import type { SelectOption } from "../types";
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollectorCell from "../../../../componenet/systemmanagement/CollectorCell";
import type { Collectors } from "../../systemmanagement/bellingsystem/types";
// import { Collectors } from "../../systemmanagement/bellingsystem/types";

export const renderselectField = <T extends FieldValues>(
  name: Path<T>,
  label: string,
  required = false,
  control: Control<T>,
  errors: FieldErrors<T>,
  options?: SelectOption[],
  collectors: Collectors[] = [],
) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        width: "100%",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333" }}>
        {label} {required}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            <CollectorCell
              assignedCollectorId={value}
              collectors={collectors}
              onCollectorChange={(newId) => onChange(newId)}
              shownameWithId={true}
            />
            {errors[name] && (
              <Typography
                color="error"
                variant="caption"
                sx={{ mt: 0.3, fontSize: "0.7rem" }}
              >
                {errors[name]?.message as string}
              </Typography>
            )}
          </>
        )}
      />
    </Box>
  );
};
// render={({ field }) => (
//   <>
//     <Select
//       {...field}
//       displayEmpty
//       IconComponent={(props) => (
//         <KeyboardArrowDownIcon
//           {...props}
//           sx={{ ".MuiSelect-icon": { left: "7px", right: "auto" } }}
//         />
//       )}
//       sx={{
//         "& .MuiOutlinedInput-root": {
//           backgroundColor: "#fcfcfc",
//           height: 30,
//           fontSize: "0.8rem",
//         },
//         "& .MuiOutlinedInput-input": {
//           padding: "3px 5px",
//         },
//         "& .MuiInputLabel-root": {
//           fontSize: "0.75rem",
//           top: -2,
//         },
//         "& .MuiFormHelperText-root": {
//           fontSize: "0.7rem",
//           marginTop: "2px",
//         },
//       }}
//       size="small"
//       fullWidth
//       variant="outlined"
//       error={!!errors[name]}
//     >
//       {options?.length === 0 ? (
//         <MenuItem disabled value="no-data">
//           لا يوجد بيانات
//         </MenuItem>
//       ) : (
//         options?.map((option) => (
//           <MenuItem key={option.label} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))
//       )}
//     </Select>
//     {errors[name] && (
//       <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
//         {errors[name]?.message as string}
//       </Typography>
//     )}
//   </>
// )}
