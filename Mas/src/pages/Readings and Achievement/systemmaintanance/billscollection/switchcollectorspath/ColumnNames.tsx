import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { WalkPath } from "./types";
import type { Columns } from "../../../../SharedTypes";

export const createColumnsFromHeaders = (
  onActionClick: (row: WalkPath) => void,
): Columns<WalkPath>[] => [
  {
    key: "number",
    label: "الكود",
    render: (_value, _row, rowIndex) => rowIndex + 1,
  },
  {
    key: "BILNG_DATE",
    label: "الدورة",
  },
  {
    key: "BILLGROUP",
    label: "المجموعة",
  },
  {
    key: "BOOK_NO",
    label: "السجل",
  },
  {
    key: "WALK_NO",
    label: "المسار",
  },
  {
    key: "BILLS",
    label: "عدد الفواتير",
  },
  {
    key: "BILLS",
    label: "القيمة",
  },
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value, row) => (
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#357d37",
          "&:hover": { backgroundColor: "#357d37" },
          color: "white",
          width: 20,
          height: 20,
        }}
        onClick={() => onActionClick(row)}
      >
        <ArrowBackIcon sx={{ fontSize: 12 }} />
      </IconButton>
    ),
  },
];

export const columnsToHeaders: Columns<WalkPath>[] = [
  {
    key: "number",
    label: "الكود",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
  {
    key: "BILNG_DATE",
    label: "الدورة",
  },
  {
    key: "BILLGROUP",
    label: "المجموعة",
  },

  {
    key: "BOOK_NO",
    label: "السجل",
  },
  {
    key: "WALK_NO",
    label: "المسار",
  },
  {
    key: "BILLS",
    label: "عدد الفواتير",
  },
  {
    key: "BILLS",
    label: "القيمة",
  },
];
