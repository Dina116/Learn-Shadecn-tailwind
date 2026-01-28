import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { userFormTypes, usersTableProps } from "./userstypes";

export default function UsersTable({
  data,
  onDelete,
  onEdit,
}: usersTableProps) {
  return (
    <SharedTable<userFormTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: userFormTypes, rowIndex: number) =>
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
