import type { MultiLevelHeaderTableColumn } from "../../SharedTypes";

export const newTableColumns: MultiLevelHeaderTableColumn[] = [
  { field: "group", header: "المجموعة" },
  { field: "description", header: "الوصف" },
  { field: "cycle", header: "الدورة" },
  {
    field: "totalPaths",
    header: "عدد المسارات",
    children: [
      { field: "totalPathsReading", header: "قراءات" },
      { field: "totalPathsCollection", header: "تحصيل" },
    ],
  },
  {
    field: "withdrawnPaths",
    header: "عدد ما تم سحبة",
    children: [
      { field: "withdrawnPathsReading", header: "قراءات" },
      { field: "withdrawnPathsCollection", header: "تحصيل" },
    ],
  },
  {
    field: "openPaths",
    header: "عدد المسارات المفتوحة",
    children: [
      { field: "openPathsReading", header: "قراءات" },
      { field: "openPathsCollection", header: "تحصيل" },
    ],
  },
  {
    field: "closedPaths",
    header: "عدد المسارات المغلقة",
    children: [
      { field: "closedPathsReading", header: "قراءات" },
      { field: "closedPathsCollection", header: "تحصيل" },
    ],
  },
];
