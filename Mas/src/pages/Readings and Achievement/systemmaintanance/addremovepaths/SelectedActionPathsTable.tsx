import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import type { WalkPath } from "../switchcollectorspath/types";
import { columnsSecond } from "./columns";
import { RowActions } from "./RowActions";

export type SelectedActionPathsTableProps = {
  data: WalkPath[];
  onTransfer: (row: WalkPath, actionType: string) => void;
};
export default function SelectedActionPathsTable({
  data,
  onTransfer,
}: SelectedActionPathsTableProps) {
  return (
    <div className="h-full flex" dir="rtl">
      <SharedTablePagination
        data={data}
        columns={columnsSecond.map((col) =>
          col.key === "actions"
            ? {
                ...col,
                render: (_, row: WalkPath) => (
                  <RowActions
                    row={row}
                     onAction={(type) => onTransfer && onTransfer(row, type)}
                  />
                ),
              }
            : col,
        )}
      />
    </div>
  );
}
