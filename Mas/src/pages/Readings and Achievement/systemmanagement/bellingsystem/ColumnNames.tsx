import type { Columns } from "../../../SharedTypes";
import CollectorCell from "./customerwalks/component/CollectorCell";
import type { BellingTypes } from "./types";

export type Collectors = {
  ID: number;
  USER_NAME: string;
  PASSWORD: string;
  FULL_NAME: string;
  DEVICE_ID: string;
  BRANCH_ID: number;
  READING: boolean;
  COLLECTION: boolean;
  ENABLE_HH_PRINTING: boolean;
};
export const createColumns = (
  collectors: Collectors[],
): Columns<BellingTypes>[] => [
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
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
