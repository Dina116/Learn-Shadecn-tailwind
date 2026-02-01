import type { Columns } from "../../../SharedTypes";

export const columns: Columns[] = [
  {
    key: "description",
    label: "الوصف",
  },

  {
    key: "Code",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
