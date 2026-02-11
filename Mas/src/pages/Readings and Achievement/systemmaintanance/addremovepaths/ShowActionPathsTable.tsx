import { IconButton } from "@mui/material";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { columnsFirst } from "./columns";
import DeleteIcon from "@mui/icons-material/Delete";
import type { WalkPathUI } from "./types";

export type ShowActionPathsTableProps = {
  data: WalkPathUI[];
  onRemove: (row: WalkPathUI) => void;
};

export default function ShowActionPathsTable({
  data,
  onRemove,
}: ShowActionPathsTableProps) {
  return (
    <div className="h-full flex " dir="rtl">
      <SharedTablePagination
        data={data}
        columns={columnsFirst.map((col) =>
          col.key === "actions"
            ? {
                ...col,
                render: (_, row: WalkPathUI) =>
                  row.isTransferred ? (
                    <IconButton color="error" onClick={() => onRemove(row)}>
                      <DeleteIcon />
                    </IconButton>
                  ) : null,
              }
            : col,
        )}
      />
    </div>
  );
}
