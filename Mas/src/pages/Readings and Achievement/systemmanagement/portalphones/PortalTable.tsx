import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { PortalTableProps, PortalPhonesTypes } from "./types";

export default function PortalTable({
  data,
  onDelete,
  onEdit,
}: PortalTableProps) {
  return (
    <SharedTable<PortalPhonesTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: PortalPhonesTypes, rowIndex: number) =>
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
