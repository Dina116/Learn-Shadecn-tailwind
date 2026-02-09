import type z from "zod";
import type { SwitchSchema } from "./SwitchSchema";

export type SwitchFormType = z.infer<typeof SwitchSchema>;

export type SwitchFormProps = {
  onSubmit?: (formData: SwitchFormType) => void;
  defaultValues?: SwitchFormType;
  onClose?: () => void;
};

export interface SwitchFormRef {
  submit: () => void;
}