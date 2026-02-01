// ConsumerTable.tsx

import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { ConsumerTableProps, ConsumerTypes } from "./ConsumerTypes";

export default function SubActivitiesTable({ data }: ConsumerTableProps) {
  const visibleColumns = columns.filter((col) => col.key !== "description");

  return (
    <SharedTablePagination<ConsumerTypes>
      columns={visibleColumns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: ConsumerTypes, rowIndex: number) =>
              col.render(value, row, rowIndex, {})
          : undefined,
      }))}
      data={data}
    />
  );
}
