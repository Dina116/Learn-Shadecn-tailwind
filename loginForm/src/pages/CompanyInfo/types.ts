import type z from "zod";
import type { formSchema } from "./formSchema";

export type companyFormProps = {
  onSubmit: (formData: z.infer<typeof formSchema>) => void;
  defaultValues?: companyFormType;
  onClose?: () => void;
};
export type companyFormType = z.infer<typeof formSchema>;
export type comapanyTableProps = {
  data: companyFormType[];
  onEdit: (row: companyFormType, rowIndex: number) => void;
  onDelete?: (row: companyFormType, rowIndex: number) => void;
};
export type EditCompanyDialogProps = {
  rowdata: companyFormType;
  onSubmit: (data: companyFormType) => void;
};
