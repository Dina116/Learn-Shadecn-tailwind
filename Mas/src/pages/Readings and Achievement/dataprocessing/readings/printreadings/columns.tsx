import type { Columns } from "../../../../SharedTypes";
import type { ReadingDataType } from "../../types";

export const columns: Columns<ReadingDataType>[] = [
  {
    key: "pr_read1",
    label: "قراءة سابقة",
  },
  {
    key: "GROUP_CODE",
    label: "الرقم القديم ",
  },
  {
    key: "CUSTKEY",
    label: "رقم الحساب ",
  },
  {
    key: "ua_adress1",
    label: "العنوان",
  },
  {
    key: "tent_name",
    label: "الاسم",
  },
  {
    key: "WALK_NO_C",
    label: "المسار",
  },
  {
    key: "BOOK_NO_C",
    label: "السجل",
  },
  {
    key: "BILLGROUP",
    label: "المجموعه",
  },
  {
    key: "SEQ_NO_C",
    label: "مسلسل",
  },
  {
    key: "number",
    label: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: ReadingDataType, rowIndex: number) =>
      rowIndex + 1,
  },
];
