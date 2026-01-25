import { SharedTable } from "@/components/sharedComponenet/SharedTable";

import type { comapanyTableProps, companyFormType } from "./types";
import { columns } from "./ColumnsNames";

export function CompanyTable({ data, onDelete, onEdit }: comapanyTableProps) {
  return (
    <SharedTable<companyFormType>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: companyFormType, rowIndex: number) =>
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
