import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columnsFirst } from "./columns";
import type { collectorType } from "./types";

export type AvailablePathsTableProps = {
  data: collectorType[];
};

export default function AvailablePathsTable({
  data,
}: AvailablePathsTableProps) {
  return (
    <div className="h-full flex " dir="rtl">
      <SharedTablePagination columns={columnsFirst} data={data} />
    </div>
  );
}
