import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { jobTableProps } from "./types";


export default function JobsTable({ data, onDelete, onEdit }: jobTableProps) {
  return (
    <SharedTable
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: any, rowIndex: number) =>
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
