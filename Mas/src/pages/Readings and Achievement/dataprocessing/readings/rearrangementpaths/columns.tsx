import React from "react";
import type { Columns } from "../../../../SharedTypes";
import type { loadWalksType } from "../../types";
import { TextField } from "@mui/material";

export const getColumns = (
  setTableData: React.Dispatch<React.SetStateAction<loadWalksType[]>>,
): Columns<loadWalksType>[] => [
  { key: "BOOK_NO_C", label: "السجل" },
  { key: "tent_name", label: "الاسم" },
  { key: "CUSTKEY", label: "رقم الحساب" },
  { key: "SEQ_NO_R", label: "م قراءات سابق" },
  { key: "SEQ_NO_C", label: "م تحصيل سابق" },
  {
    key: "NEW_SEQ_R",
    label: "جديد5",
    render: (value, row, rowIndex) => (
      <TextField
        size="small"
        type="number"
        variant="standard"
        value={row.NEW_SEQ_R ?? ""}
        onChange={(e) => {
          const newValue = e.target.value;
          setTableData((prev) =>
            prev.map((item, index) =>
              index === rowIndex
                ? { ...item, NEW_SEQ_R: Number(newValue) }
                : item,
            ),
          );
        }}
        sx={{
          width: "100%",
          direction: "rtl",
          backgroundColor: "#fff",
          "& .MuiInputBase-root": {
            height: 32,
            width: 100,
          },
          "& .MuiInputBase-input": {
            padding: "4px 6px",
          },
        }}
      />
    ),
  },
  {
    key: "NEW_SEQ_C",
    label: "جديد",
    render: (value, row, rowIndex) => (
      <TextField
        size="small"
        type="number"
        variant="standard"
        value={row.NEW_SEQ_C ?? ""}
        onChange={(e) => {
          const newValue = e.target.value;
          setTableData((prev) =>
            prev.map((item, index) =>
              index === rowIndex
                ? { ...item, NEW_SEQ_C: Number(newValue) }
                : item,
            ),
          );
        }}
        sx={{
          width: "100%",
          direction: "rtl",
          backgroundColor: "#fff",
          "& .MuiInputBase-root": {
            height: 32,
            width: 100,
          },
          "& .MuiInputBase-input": {
            padding: "4px 6px",
          },
        }}
      />
    ),
  },
  {
    key: "number",
    label: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: loadWalksType, rowIndex: number) =>
      rowIndex + 1,
  },
];
