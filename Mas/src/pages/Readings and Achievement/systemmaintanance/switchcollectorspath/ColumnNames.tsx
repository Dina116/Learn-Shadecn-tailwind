import { IconButton } from "@mui/material";
import type { Columns } from "../../../SharedTypes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { WalkPath } from "./types";

export const columnsFromHeaders: Columns<WalkPath>[] = [
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
  {
    key: "actions",
    label: "الاجراءات",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, row: any, rowIndex: number) => (
      <IconButton
        size="small"
        sx={{
          backgroundColor: "#357d37",
          "&:hover": { backgroundColor: "#357d37" },
          color: "white",
          width: 20,
          height: 20,
        }}
        onClick={() => {
          console.log("Clicked action for row", rowIndex, row);
        }}
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
