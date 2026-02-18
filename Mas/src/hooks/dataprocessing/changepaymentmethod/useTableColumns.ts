import { useMemo } from "react";
import type { UnpostedDetail } from "../../../pages/Readings and Achievement/dataprocessing/types";
import { getColumns } from "../../../pages/Readings and Achievement/dataprocessing/collecting/changepaymentmethod/columns";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useTableColumns(
  params: any,
  unpostedDetails: UnpostedDetail[] | undefined,
) {
  return useMemo(
    () =>
      getColumns({
        ...params,
        isAllSelected:
          (unpostedDetails ?? []).length > 0 &&
          params.selectedReceipts.length === (unpostedDetails ?? []).length,
      }),
    [params, unpostedDetails],
  );
}
