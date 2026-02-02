import { useQuery } from "@tanstack/react-query";
import SharedTable from "../../../../componenet/shared/SharedTable";
import { columns } from "./ColumnNames";
import type { userFormTypes, usersTableProps } from "./userstypes";
import { getUsers } from "./api/userApi";

export default function UsersTable({ onDelete, onEdit }: usersTableProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <SharedTable<userFormTypes>
      columns={columns.map((col) => ({
        ...col,
        render: col.render
          ? (value: any, row: userFormTypes, rowIndex: number) =>
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
