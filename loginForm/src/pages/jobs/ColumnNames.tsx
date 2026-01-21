import type { Columns } from "../sharedTypes";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
  },
  {
    key: "status",
    label: "نشط",
  },
  {
    key: "usersnumbers",
    label: "عدد المستخدمين",
  },
  {
    key: "description",
    label: "الوصف",
  },
  {
    key: "jobname",
    label: "اسم الوظيفة",
  },

  {
    key: "jobcode",
    label: "كود الوظيفة",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
