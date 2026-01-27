import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { scoutsFormType, scoutsTableProps } from "./scoutstypes";

export default function ScoutsTable({
  data,
  onDelete,
  onEdit,
}: scoutsTableProps) {
  return (
    <SharedTable<scoutsFormType>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: scoutsFormType, rowIndex: number) =>
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
