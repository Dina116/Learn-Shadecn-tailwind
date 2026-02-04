import { useQuery } from "@tanstack/react-query";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { DeviceProcedureTableProps, DeviceProcedureTypes } from "./types";
import { getDeviceProcedure } from "./api/deviceApi";

export default function DeviceProceduresTable({
  onDelete,
  onEdit,
}: DeviceProcedureTableProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["deviceprocedure"],
    queryFn: getDeviceProcedure,
  });
  if (isLoading) <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <SharedTablePagination<DeviceProcedureTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: DeviceProcedureTypes, rowIndex: number) =>
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
