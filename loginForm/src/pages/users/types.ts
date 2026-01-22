import type z from "zod";
import type { userSchema } from "./userSchema";

export type UserCredentails = {
  id: string;
  userCode: string;
  status: "active" | "processing" | "offline";
  userName: string;
  branch: string;
  jobs: string;
  actions: string;
};
export type userFormType = z.infer<typeof userSchema>;
export type DeleteUserDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};
export type EditUserDialogProps = {
  rowdata: userFormType;
  onSubmit: (data: userFormType) => void;
};
export type UserFormProps = {
  onSubmit: (formData: userFormType) => void;
  defaultValues?: userFormType;
};
export type userTableProps = {
  data: userFormType[];
  onEdit: (row: userFormType, rowIndex: number) => void;
  onDelete: (row: userFormType, rowIndex: number) => void;
};

export const selectItemsCompanyData = [
  {
    label: "هيئة المجتمعات العمرانية",
    value: "هيئة المجتمعات العمرانية",
  },
];
export const selectItemsJobsAndUserData = [
  {
    label: "admin profile",
    value: "admin profile",
  },
  {
    label: "خدمة عملاء",
    value: "خدمة عملاء",
  },
];
export const selectedItemsPrintData = [
  {
    label: "عادي",
    value: "عادي",
  },
  {
    label: "حراري",
    value: "حراري",
  },
];
export const selectedItemsDepartement = [
  {
    label: "first",
    value: "first",
  },
  {
    label: "second",
    value: "second",
  },
];
