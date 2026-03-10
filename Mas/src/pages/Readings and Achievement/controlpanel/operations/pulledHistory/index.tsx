import { Toaster } from "react-hot-toast";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import FilterForm from "./FilterForm";
import {
  Autocomplete,
  Box,
  Pagination,
  TextField,
  type AutocompleteRenderInputParams,
} from "@mui/material";
import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
import { column } from "./columns";
import { useGetHistory } from "../../api/useControlApi";
import usePulledHistory from "./usePulledHistory";
import SuccessWalksModal from "./SuccessWalksModal";
import FailedWalksModal from "./FailedWalksModal";

export default function PulledHistory() {
  const {
    setHistoryReq,
    // handleOnCellPrepared,
    setModals,
    totalPageCount,
    setTotalPageCount,
    modals,
    historyReq,
    processWalkList,
    setProcessWalkList,
  } = usePulledHistory();
  const { data: historyList, remove } = useGetHistory(historyReq);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="سجل تحديث بيانات الفواتير" />
          <div className="mb-5 rounded-md bg-white p-2">
            <FilterForm
              getFilterdData={(data) => {
                remove();
                setHistoryReq((prev) => ({
                  ...prev,
                  ...data,
                  PageSize: prev.PageSize || 0,
                  PageIndex: prev.PageIndex || 0,
                  EndDate: data.EndDate,
                  StartDate: data.StartDate,

                  StationNo: Number(data.StationNo),
                }));
              }}
            />
          </div>

          <Box
            sx={{
              backgroundColor: "white",
              p: 2,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <MultiLevelHeaderTable
              columns={column}
              data={historyList?.PullStatments || []}
              keyField="Billgroup"
              // updatingRowKey={updatingRowKey}
            />
            <div className="mt-3 flex items-center justify-between ">
              <Autocomplete
                sx={{ width: "10%" }}
                disablePortal
                id="pageSize"
                options={["50", "100", "150"]}
                defaultValue="50"
                onChange={(_e, val) => {
                  setTotalPageCount(
                    Math.ceil(
                      Number(historyList?.TOTAL_COUNT || 50) / Number(val),
                    ) || 1,
                  );
                  setHistoryReq((prev) => ({
                    ...prev,
                    StationNo: prev.StationNo,
                    PageIndex: prev.PageIndex || 0,
                    PageSize: Number(val) || 200,
                  }));
                }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField placeholder="Page Size" {...params} />
                )}
              />
              <Pagination
                count={totalPageCount}
                variant="outlined"
                shape="rounded"
                onChange={(_event, page) => {
                  setHistoryReq((prev) => ({
                    ...prev,
                    StationNo: prev.StationNo,
                    PageSize: prev.PageSize || 0,
                    PageIndex: Number(page),
                  }));
                }}
              />
            </div>
          </Box>
        </div>
      </div>
      <SuccessWalksModal
        handleClose={() => {
          setModals({ openModalSuccess: false });
          setProcessWalkList([]);
        }}
        walks={processWalkList}
        open={modals?.openModalSuccess || false}
      />
      <FailedWalksModal
        handleClose={() => {
          setModals({ openModalFailed: false });
          setProcessWalkList([]);
        }}
        walks={processWalkList}
        open={modals?.openModalFailed || false}
      />
    </div>
  );
}
