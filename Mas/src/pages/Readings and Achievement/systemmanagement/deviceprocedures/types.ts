import { z } from "zod";
import { DeviceSchema } from "./DeviceSchema";

export type DeviceProcedureTypes = z.infer<typeof DeviceSchema>;

export type DeviceProcedureTableProps = {
  data: DeviceProcedureTypes[];
  onEdit?: (row: DeviceProcedureTypes, rowIndex: number) => void;
  onDelete?: (row: DeviceProcedureTypes, rowIndex: number) => void;
};

export type DeviceProcedureFormProps = {
  onSubmit: (formData: DeviceProcedureTypes) => void;
  defaultValues?: DeviceProcedureTypes;
  onClose?: () => void;
};

export interface DeviceProcedureFormRef {
  submit: () => void;
}

export type EditDeviceProcedureDialogProps = {
  rowdata: DeviceProcedureTypes;
};
