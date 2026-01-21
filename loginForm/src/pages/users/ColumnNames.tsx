import type { Columns } from "../sharedTypes";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
  },
  {
    key: "jobs",
    label: "الوظائف",
  },
  {
    key: "status",
    label: "نشط",
  },
  {
    key: "defaultbranch",
    label: "الفرع الافتراضي",
  },
  {
    key: "entername",
    label: "اسم الدخول",
  },
  {
    key: "username",
    label: "اسم المستخدم",
  },

  {
    key: "userCode",
    label: "كود المستخدم",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
