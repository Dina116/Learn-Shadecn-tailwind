import Checkbox from "@mui/material/Checkbox";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect } from "react";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";

type ConsumpFlages = { value: number; name: string };

export type Flages = {
  isretry: boolean | undefined;
  uflag: boolean | undefined;
  consumpFlages: number | undefined;
};

type PostedFlagesProps = {
  open: boolean;
  handleClose: () => void;
  handleSubmitFlages: (data: Flages) => void;
};

const flagesValues: Flages = {
  isretry: undefined,
  uflag: undefined,
  consumpFlages: undefined,
};
const consumpFlages: ConsumpFlages[] = [
  { value: 0, name: "عدم ترحيل الاستهلاك السالب" },
  { value: 1, name: "تحويل الاستهلاك السالب الي مغلق" },
  { value: 2, name: "تحويل الاستهلاك السالب الي صفري" },
  { value: 3, name: "ترحيل الاستهلاك السالب " },
];

export default function PostedFlages({
  open,
  handleClose,
  handleSubmitFlages,
}: PostedFlagesProps) {
  const { control, handleSubmit, reset } = useForm<Flages>({
    defaultValues: flagesValues,
  });

  useEffect(() => {
    reset({});
  }, [reset]);

  return (
    <SharedDialog
      maxWidth="xs"
      open={open}
      title="محددات ترحيل القراءات"
      primaryAction={{
        text: "حفظ",
        onClick: handleSubmit(handleSubmitFlages),
      }}
      secondaryAction={{
        text: "إلغاء",
        onClick: handleClose,
      }}
      onClose={handleClose}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        <Controller
          name="isretry"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="اعادة ارسال جميع البيانات السابقة مرة اخري"
            />
          )}
        />

        <Controller
          name="uflag"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="UFLAG"
            />
          )}
        />
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel
            component="legend"
            sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}
          >
            التعامل مع الاستهلاك السالب
          </FormLabel>
          <Controller
            name="consumpFlages"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                {consumpFlages.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.name}
                  />
                ))}
              </RadioGroup>
            )}
          />
        </FormControl>
      </Box>
    </SharedDialog>
  );
}
