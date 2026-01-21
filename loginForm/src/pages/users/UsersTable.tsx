import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { userFormType } from "./types";

export type userTableProps = {
  data: userFormType[];
  onEdit: (row: userFormType, rowIndex: number) => void;
  onDelete: (row: userFormType, rowIndex: number) => void;
};
export function UsersTable({ data, onDelete, onEdit }: userTableProps) {
  return (
    <SharedTable<userFormType>
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
