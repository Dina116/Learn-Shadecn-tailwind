import type z from "zod";
import type { formSchema } from "./FormSchema";

export type departmentFormProps = {
  onSubmit: (formData: z.infer<typeof formSchema>) => void;
  defaultValues?: departmentFormType;
  onClose?: () => void;
};
export type departmentFormType = z.infer<typeof formSchema>;

export type departmentTableProps = {
  data: departmentFormType[];
  onDelete?: (row: departmentFormType, rowIndex: number) => void;
};
export type DeleteDepartmentDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};
