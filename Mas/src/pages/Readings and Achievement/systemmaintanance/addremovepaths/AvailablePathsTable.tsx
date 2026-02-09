import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { pathsColumns } from "./columns";

const data: any[] = [];

export default function SelectedPathsTable() {
  return (
    <div className="h-full flex " dir="rtl">
      <SharedTablePagination columns={pathsColumns} data={data} />
    </div>
  );
}
