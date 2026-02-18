import type { Columns } from "../../../../SharedTypes";
import type { mistakeTableTypes, UnpostedDetail } from "../../types";

export const maintableColumns: Columns<UnpostedDetail>[] = [
  {
    key: "ISSUED_AMOUNT",
    label: "المبلغ",
  },
  {
    key: "SURNAME",
    label: "الاسم",
  },
  {
    key: "PAYMENT_NO",
    label: "رقم الفاتورة ",
  },
  {
    key: "CUSTKEY",
    label: "رقم الحساب ",
  },
  {
    key: "SEQ_NO",
    label: "م",
  },
  {
    key: "number",
    label: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: UnpostedDetail, rowIndex: number) =>
      rowIndex + 1,
  },
];

export const mistaketablecolumns: Columns<mistakeTableTypes>[] = [
  {
    key: "number",
    label: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: mistakeTableTypes, rowIndex: number) =>
      rowIndex + 1,
  },
  {
    key: "payment_no",
    label: "كود الفاتورة",
  },
  {
    key: "timestamp",
    label: "الوقت",
  },
  {
    key: "message",
    label: "الرسالة",
  },
];
