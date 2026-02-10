import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columnsSecond } from "./columns";
import type { collectorType } from "./types";

export type SelectedPathsTableProps = {
  data: collectorType[];
};

export default function SelectedPathsTable({ data }: SelectedPathsTableProps) {
  return (
    <div className="h-full flex" dir="rtl">
      <SharedTablePagination data={data} columns={columnsSecond} />
    </div>
  );
}
