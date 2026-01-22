import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { userFormType, userTableProps } from "./types";

export function UsersTable({ data, onDelete, onEdit }: userTableProps) {
  return (
    <SharedTable<userFormType>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: userFormType, rowIndex: number) =>
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
