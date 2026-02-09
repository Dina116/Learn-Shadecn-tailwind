import type { Columns } from "../../../SharedTypes";

export const columns: Columns[] = [
  {
    key: "UNUSED",
    label: "الحالة",
  },
  {
    key: "STATION_NO",
    label: "الفرع",
  },

  {
    key: "DESCRIPTION",
    label: "الوصف",
  },

  {
    key: "GROUP_ID",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
