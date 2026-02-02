import { useQuery } from "@tanstack/react-query";
import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { scoutsFormType, scoutsTableProps } from "./scoutstypes";
import { getScouts } from "./api/scoutsApi";

export default function ScoutsTable({ onDelete, onEdit }: scoutsTableProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["scouts"],
    queryFn: getScouts,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
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
      data={data || []}
    />
  );
}
