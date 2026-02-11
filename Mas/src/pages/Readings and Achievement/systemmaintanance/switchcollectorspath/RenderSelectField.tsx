import { Box, Typography } from "@mui/material";
import type { SelectOption } from "../types";
import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form";
import CollectorCell from "../../../../componenet/systemmanagement/CollectorCell";
import type { Collectors } from "../../systemmanagement/bellingsystem/types";

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
