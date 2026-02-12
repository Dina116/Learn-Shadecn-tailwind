import { Switch } from "@mui/material";
import type { Columns } from "../../../../SharedTypes";
import type { WalkPath } from "./types";

export const columnsFirst: Columns<WalkPath>[] = [
  {
    key: "number",
    label: "الكود",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
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
    key: "IS_COLLECTION",
    label: "تحصيل",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, row: any, rowIndex: number) => (
      <Switch
        size="small"
        checked={!!row.IS_COLLECTION}
        onChange={(e) => {
          console.log("Switch toggled for row", rowIndex, e.target.checked);
        }}
        sx={{
          "& .MuiSwitch-switchBase": {
            padding: 0.5,
          },
          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
          },
          "& .MuiSwitch-track": {
            borderRadius: 8,
          },
        }}
      />
    ),
  },
  {
    key: "IS_READING",
    label: "قراءة",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, row: any, rowIndex: number) => (
      <Switch
        size="small"
        checked={!!row.IS_READING}
        onChange={(e) => {
          console.log("Switch toggled for row", rowIndex, e.target.checked);
        }}
        sx={{
          "& .MuiSwitch-switchBase": {
            padding: 0.5,
          },
          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
          },
          "& .MuiSwitch-track": {
            borderRadius: 8,
          },
        }}
      />
    ),
  },
  {
    key: "COLLECTOR",
    label: "محصل سابق",
  },
  {
    key: "READER",
    label: "قارئ سابق ",
  },
  {
    key: "actions",
    label: "الاجراءات",
  },
];

export const columnsSecond: Columns<WalkPath>[] = [
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
    key: "COLLECTOR",
    label: "تحصيل",
  },
  {
    key: "READER",
    label: "قراءة",
  },
  {
    key: "actions",
    label: "الاجراءات",
  },
];
