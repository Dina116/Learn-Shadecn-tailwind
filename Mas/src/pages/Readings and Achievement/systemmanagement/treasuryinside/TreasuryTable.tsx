import { useQuery } from "@tanstack/react-query";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { TreasuryTableProps, TreasuryTypes } from "./types";
import { getTreasuryData } from "./api/treasuryApi";

export default function TreasutyTable({
  onDelete,
  onEdit,
}: TreasuryTableProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["treasuryinside"],
    queryFn: getTreasuryData,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
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
