import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import type { departmentFormType, departmentTableProps } from "./types";
import { columns } from "./ColumnNames";

export function DepartmentTable({
  data,
  onDelete,
}: departmentTableProps) {
  return (
    <SharedTable<departmentFormType>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: departmentFormType, rowIndex: number) =>
              col.render(value, row, rowIndex, {
                onDelete: onDelete,
              })
          : undefined,
      }))}
      data={data}
    />
  );
}
