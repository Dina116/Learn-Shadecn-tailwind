import type React from "react";
import type { formSchema } from "./form/formSchema";
import type z from "zod";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export type formInputDataType = z.input<typeof formSchema>;
export type formtDataType = z.output<typeof formSchema>;

export type DialogProps = {
  data?: formtDataType[];
  title?: string;
  id: string;
  isDialogOpen?: boolean;
  formRef?: React.RefObject<FormUIRef | null>;
  handleFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  // <-- Also corrected, see next point
  handleSave?: () => void;
  handleCloseDialog?: () => void;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  watch: UseFormWatch<formInputDataType>;
};
export interface FormUIRef {
  submit: () => void;
}
export type SelectOption = {
  value: string | number;
  label: string;
};
