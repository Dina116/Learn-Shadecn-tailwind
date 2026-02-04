import type { Columns } from "../../../SharedTypes";

export const columns: Columns[] = [
  {
    key: "DESCRIPTION",
    label: "الوصف",
  },

  {
    key: "CTYPEGRP_ID",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
