import { SharedTable } from "@/components/sharedComponenet/SharedTable";
import { columns } from "./ColumnNames";
import type { jobFormType } from "./types";

export type jobTableProps = {
  data: jobFormType[];
};
export default function JobsTable({ data }: jobTableProps) {
  return <SharedTable columns={columns} data={data} />;
}
