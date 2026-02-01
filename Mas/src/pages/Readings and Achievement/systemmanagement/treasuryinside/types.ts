import type z from "zod";
import type { TreasurySchema } from "./TreasurySchema";

export type TreasuryTypes = z.infer<typeof TreasurySchema>;

export type TreasuryTableProps = {
  data: TreasuryTypes[];
  onEdit?: (row: TreasuryTypes, rowIndex: number) => void;
  onDelete?: (row: TreasuryTypes, rowIndex: number) => void;
};

export type DeviceProcedureFormProps = {
  onSubmit: (formData: TreasuryTypes) => void;
  defaultValues?: TreasuryTypes;
  onClose?: () => void;
};

export interface TreasuryFormRef {
  submit: () => void;
}

export type EditTreasuryDialogProps = {
  rowdata: TreasuryTypes;
  onSubmit: (data: TreasuryTypes) => void;
};
