import { useCallback, useState } from "react";
import type {
  HistoryRequest,
  Imodals,
  ProcessWalk,
  PullStatmentsReply,
} from "./types";
import type { CellPreparedEvent } from "devextreme/ui/data_grid";

export default function usePulledHistory() {
  const [totalPageCount, setTotalPageCount] = useState<number>(5);
  //   const ProcessWalkList = useRef<ProcessWalk[]>([]);
  const [processWalkList, setProcessWalkList] = useState<ProcessWalk[]>([]);
  const [modals, setModals] = useState<Imodals>();
  const [historyReq, setHistoryReq] = useState<HistoryRequest>(
    {} as HistoryRequest,
  );

  const handleOnCellPrepared = useCallback(
    (e: CellPreparedEvent<PullStatmentsReply, unknown>) => {
      if (e.rowType === "data" && e.column.dataField === "success") {
        e.cellElement.style.background = "#EEFFDD";
        e.cellElement.style.fontWeight = "800";
        e.cellElement.className = e.cellElement.className.replace("ddf", "eee");
        e.cellElement.style.cursor = "pointer";
        e.cellElement.addEventListener("click", () => {
          setProcessWalkList(e.data.SusccsedWalks);
          //   ProcessWalkList.current = e.data.SusccsedWalks;
          setModals({ openModalSuccess: true });
        });
        e.cellElement.addEventListener("mouseenter", () => {
          e.cellElement.style.backgroundColor = "#dcf6c1";
        });
        e.cellElement.addEventListener("mouseleave", () => {
          e.cellElement.style.backgroundColor = "#EEFFDD";
        });
      }
      if (e.rowType === "data" && e.column.dataField === "failed") {
        e.cellElement.style.background = " #ffdddd";
        e.cellElement.style.fontWeight = "800";
        e.cellElement.style.cursor = "pointer";
        e.cellElement.className = e.cellElement.className.replace("ddf", "eee");
        e.cellElement.addEventListener("mouseenter", () => {
          e.cellElement.style.backgroundColor = "#fed1d1";
        });
        e.cellElement.addEventListener("mouseleave", () => {
          e.cellElement.style.backgroundColor = "#ffdddd";
        });
        e.cellElement.addEventListener("click", () => {
          setProcessWalkList(e.data.FailedWalks);
          //   ProcessWalkList.current = e.data.FailedWalks;
          setModals({ openModalFailed: true });
        });
      }
    },
    [],
  );
  return {
    historyReq,
    modals,
    processWalkList,
    setProcessWalkList,
    // ProcessWalkList,
    totalPageCount,
    setTotalPageCount,
    setModals,
    setHistoryReq,
    handleOnCellPrepared,
  };
}
