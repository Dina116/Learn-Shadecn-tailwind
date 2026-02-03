import type z from "zod";
import type { ScoutesSchema } from "./ScoutsSchema";

export type scoutsFormType = z.infer<typeof ScoutesSchema>;
export type scoutsTableProps = {
  data: scoutsFormType[];
  onEdit: (row: scoutsFormType, rowIndex: number) => void;
  onDelete: (row: scoutsFormType, rowIndex: number) => void;
};
export type EditScoutsDialogProps = {
  rowdata: scoutsFormType;
};
export type ScoutFormProps = {
  onSubmit: (formData: scoutsFormType) => void;
  defaultValues?: scoutsFormType;
  onClose?: () => void;
};
export interface ScoutsFormRef {
  submit: () => void;
}
