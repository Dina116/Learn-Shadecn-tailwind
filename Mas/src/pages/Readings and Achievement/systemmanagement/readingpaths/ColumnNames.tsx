import { Typography } from "@mui/material";
import type { CellRenderResult, Columns } from "../../../SharedTypes";
import CollectorCell from "../../../../componenet/systemmanagement/CollectorCell";
import type { Collectors, ReadingTypes } from "./types";

export const createColumns = (
  collectors: Collectors[],
): Columns<ReadingTypes>[] => [
  {
    key: "ASSIGNED_TO_HH",
    label: "مخصص ل",
    render: (value, row) => (
      <CollectorCell
        assignedCollectorId={value}
        collectors={collectors}
        onCollectorChange={(newCollectorId) => {
          console.log(
            `سيتم تحديث المسار ${row.WALK_NO} إلى المحصل ${newCollectorId}`,
          );
        }}
      />
    ),
  },
  {
    key: "DESCRIBE",
    label: "الوصف",
  },
  {
    key: "WALK_NO",
    label: "المسار",
  },

  {
    key: "BOOK_NO",
    label: "السجل",
  },

  {
    key: "BILLGROUP",
    label: "المجموعة",
  },
  {
    key: "number",
    label: "م",
    render: (
      _value: any,
      row: ReadingTypes,
      rowIndex: number,
    ): CellRenderResult => {
      if (row.ASSIGNED_TO_HH == null) {
        return {
          content: (
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              {rowIndex + 1}
            </Typography>
          ),
          cellStyle: {
            backgroundColor: "#d32f2f",
            textAlign: "center",
          },
        };
      } else {
        return rowIndex + 1;
      }
    },
  },
];
