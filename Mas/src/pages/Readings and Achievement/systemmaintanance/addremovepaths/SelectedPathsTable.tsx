import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { pathsColumns } from "./columns";

const data: any[] = [];

export default function SelectedPathsTable() {
  return (
    <div className="h-full flex" dir="rtl">
      <SharedTablePagination data={data} columns={pathsColumns} />
    </div>
  );
}
