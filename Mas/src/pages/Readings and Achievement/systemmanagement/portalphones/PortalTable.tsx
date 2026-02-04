import { useQuery } from "@tanstack/react-query";
import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { PortalTableProps, PortalPhonesTypes } from "./types";
import { getPortalPhones } from "./api/portalApi";

export default function PortalTable({ onDelete, onEdit }: PortalTableProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["portalphones"],
    queryFn: getPortalPhones,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
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
