import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";

export function UsersTable() {
  return <SharedTable columns={columns} />;
}