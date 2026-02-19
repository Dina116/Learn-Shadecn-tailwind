import type { Columns } from "../../../../SharedTypes";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: Columns<any>[] = [
  { key: "record", label: "السجل" },
  { key: "name", label: "الاسم" },
  { key: "accountNumber", label: "رقم الحساب" },
  { key: "prevReadings", label: "م قراءات سابق" },
  { key: "prevCollection", label: "م تحصيل سابق" },
  { key: "new5", label: "جديد5" },
  { key: "new", label: "جديد" },
  {
    key: "number",
    label: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
