import { useQuery } from "@tanstack/react-query";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columns } from "./ColumnNames";
import type { ConsumerTypes } from "./ConsumerTypes";
import { getConsumers } from "./api/consumersApi";

export default function ConsumerTable() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["consumeractivities"],
    queryFn: getConsumers,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <SharedTablePagination<ConsumerTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: ConsumerTypes, rowIndex: number) =>
              col.render(value, row, rowIndex, {})
          : undefined,
      }))}
      data={data}
    />
  );
}
