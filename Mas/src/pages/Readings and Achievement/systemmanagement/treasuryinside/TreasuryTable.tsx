import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { TreasuryTableProps, TreasuryTypes } from "./types";

export default function TreasutyTable({
  data,
  onDelete,
  onEdit,
}: TreasuryTableProps) {
  return (
    <SharedTablePagination<TreasuryTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: TreasuryTypes, rowIndex: number) =>
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
