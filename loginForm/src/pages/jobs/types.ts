import type z from "zod";
import type { formSchema } from "./formSchema";

export type JobesCredentails = {
  id: string;
  jobName: string;
  description: string;
  userNumber: number;
  status: "active" | "inactive";
  actions: string;
};
export type jobFormType = z.infer<typeof formSchema>;
export type DeleteJobDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};
export type EditUserDialogProps = {
  rowdata: jobFormType;
  onSubmit: (data: jobFormType) => void;
};
export type jobFormProps = {
  onSubmit: (formData: z.infer<typeof formSchema>) => void;
  defaultValues?: jobFormType;
};
export type jobTableProps = {
  data: jobFormType[];
  onEdit: (row: jobFormType, rowIndex: number) => void;
  onDelete: (row: jobFormType, rowIndex: number) => void;
};