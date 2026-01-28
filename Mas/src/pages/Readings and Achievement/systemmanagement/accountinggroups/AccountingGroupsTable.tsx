import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";

export default function AccountingGroupsTable() {
  return (
    <SharedTable
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: any, rowIndex: number) =>
              col.render(value, row, rowIndex, {
                //    onEdit: onEdit,
                //    onDelete: onDelete,
              })
          : undefined,
      }))}
      data={[]}
    />
  );
}
