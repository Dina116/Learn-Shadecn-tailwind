import React, { useMemo } from "react";
import type { IModalsProps, ProcessWalk } from "./types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import type { Columns } from "../../../../SharedTypes";

export default function SuccessWalksModal({
  walks,
  open,
  handleClose,
}: IModalsProps) {
  const colList :Columns<ProcessWalk>[]= useMemo(
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
        label: "عدد الفواتير الناجحة",
        key: "SucssededBills",
      },
    ],
    [],
  );
  return (
    <SharedDialog onClose={handleClose} open={open} title="المسارات التامة">
      <SharedTablePagination
        columns={colList}
        data={walks}
      />
    </SharedDialog>
  );
}
