import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { jobFormType } from "./types";

export type jobTableProps = {
  data: jobFormType[];
  onEdit: (row: jobFormType, rowIndex: number) => void;
  onDelete: (row: jobFormType, rowIndex: number) => void;
};
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
