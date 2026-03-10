import { useMemo } from "react";
import type { IModalsProps, ProcessWalk } from "./types";
import type { Columns } from "../../../../SharedTypes";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";

export default function FailedWalksModal({
  walks,
  open,
  handleClose,
}: IModalsProps) {
  const colList: Columns<ProcessWalk>[] = useMemo(
    () => [
      {
        label: "المجموعة",
        key: "Billgroup",
        allowEditing: false,
      },
      {
        label: "المنطقة",
        key: "BookNo",
        allowEditing: false,
      },
      {
        label: "المسار",
        allowEditing: false,
        key: "WalkNo",
      },
      {
        label: "الرسالة",
        key: "Message",
      },
    ],
    [],
  );
  return (
    <SharedDialog onClose={handleClose} open={open} title="المسارات الخاطئة">
      <SharedTablePagination columns={colList} data={walks} />
    </SharedDialog>
  );
}
