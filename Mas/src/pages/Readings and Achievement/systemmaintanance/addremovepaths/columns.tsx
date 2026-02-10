import { IconButton, Switch } from "@mui/material";
import type { Columns } from "../../../SharedTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import { RowActions } from "./RowActions";

export const columnsFirst: Columns[] = [
  {
    key: "number",
    label: "الكود",
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
    render: (_value, row, rowIndex) => (
      <IconButton
        size="small"
        color="error"
        onClick={() => console.log("Delete clicked for row", rowIndex, row)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    ),
  },
];

export const columnsSecond: Columns[] = [
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
    render: (_value, row) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RowActions row={row} />
      </div>
    ),
  },
];
