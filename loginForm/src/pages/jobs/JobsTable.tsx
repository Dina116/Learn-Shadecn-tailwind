import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";

export default function JobsTable() {
  return <SharedTable columns={columns} />;
}
