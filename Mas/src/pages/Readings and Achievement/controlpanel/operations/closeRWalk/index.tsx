import { Toaster } from "react-hot-toast";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import Form from "../../componenet/Form";
import { useEffect } from "react";
import useCloseRWalk from "./useCloseRWalk";
import { Box, CircularProgress } from "@mui/material";
import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
import type { BOOKCYCLE } from "../../types";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SharedTable from "../../../../../componenet/shared/SharedTable";
import { TableErrorsColumns } from "../columns";
// import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
// import type { BOOKCYCLE } from "../../types";

export default function CloseRWalk() {
  const {
    columns,
    counters,
    errorToShow,
    formattedGroups,
    handleCloseErrorDialog,
    handleExecuteAction,
    handleLoadData,
    isDataLoading,
    isExecuting,
    isGroupsLoading,
    refetch,
    updatingRowKey,
    bookNoForErrorDialog,
    tableData,
    isFetching,
  } = useCloseRWalk();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="إغلاق مسار قراءة" />
          <Form
            onLoad={handleLoadData}
            isLoading={isDataLoading}
            groupsList={formattedGroups}
            isGroupsLoading={isGroupsLoading}
            showCounters={true}
            onExecute={handleExecuteAction}
            isExecuting={isExecuting}
            showCompletedCounter={true}
            completedCounterTitle="التامة "
            counters={counters}
            showDivider={true}
            showBillingDate={true}
            showGroups={true}
            showLoadingBtn={true}
          />

          {isFetching && (
            <div className="flex flex-row items-center justify-center">
              <CircularProgress
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          )}
          <Box
            sx={{
              backgroundColor: "white",
              p: 2,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <MultiLevelHeaderTable<BOOKCYCLE>
              columns={columns}
              data={tableData}
              keyField="BOOK_NO"
              updatingRowKey={updatingRowKey}
            />
          </Box>
        </div>
      </div>
      <SharedDialog
        open={!!bookNoForErrorDialog}
        onClose={handleCloseErrorDialog}
        maxWidth="sm"
        title="تفاصيل الخطأ"
      >
        <SharedTable columns={TableErrorsColumns} data={errorToShow} />
      </SharedDialog>
    </div>
  );
}
