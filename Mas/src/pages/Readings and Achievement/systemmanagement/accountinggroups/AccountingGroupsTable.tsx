import { useQuery } from "@tanstack/react-query";
import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import { getAccountingGroups } from "./api/accountingGroupsApi";

export default function AccountingGroupsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["accountinggroups"],
    queryFn: getAccountingGroups,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <SharedTable
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: any, rowIndex: number) =>
              col.render(value, row, rowIndex, {})
          : undefined,
      }))}
      data={data}
    />
  );
}
