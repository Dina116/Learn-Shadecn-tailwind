import { Box, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import type { renderFormProps } from "../../../types";
import ReaderCell from "../readersCell";

type Props = {
  readers: renderFormProps["readers"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
};
export const ReaderSelector = ({ readers, control }: Props) => (
  <Box>
    <Typography variant="subtitle2" fontWeight="bold">
      الكشاف <span style={{ color: "red" }}>*</span>
    </Typography>
    <Controller
      name="readerId"
      control={control}
      rules={{ required: "الكشاف مطلوب" }}
      render={({ field }) => (
        <ReaderCell
          readers={readers}
          selectedReaderId={field.value}
          onReaderChange={field.onChange}
        />
      )}
    />
  </Box>
);
