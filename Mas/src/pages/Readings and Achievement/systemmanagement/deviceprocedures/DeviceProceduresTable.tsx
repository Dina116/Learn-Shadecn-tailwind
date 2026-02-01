import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { DeviceProcedureTableProps, DeviceProcedureTypes } from "./types";

export default function DeviceProceduresTable({
  data,
  onDelete,
  onEdit,
}: DeviceProcedureTableProps) {
  return (
    <SharedTablePagination<DeviceProcedureTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: DeviceProcedureTypes, rowIndex: number) =>
              col.render(value, row, rowIndex, {
                onEdit: onEdit,
                onDelete: onDelete,
              })
          : undefined,
      }))}
      data={data}
    />
  );
}
