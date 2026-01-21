import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { userFormType } from "./types";

export type userTableProps = {
  data: userFormType[];
};
export function UsersTable({ data }: userTableProps) {
  return <SharedTable<userFormType> columns={columns} data={data} />;
}
