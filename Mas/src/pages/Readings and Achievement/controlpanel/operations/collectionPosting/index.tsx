import { Toaster } from "react-hot-toast";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import { useEffect } from "react";
import type { STATMDEPOSIT } from "../../types";
import Form from "../../componenet/Form";
import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SharedTable from "../../../../../componenet/shared/SharedTable";
import { TableErrorsColumns } from "../columns";
import { Box, Button } from "@mui/material";
import useCollectionPosting from "./useCollectionPosting";

export default function CollectionPosting() {
  const {
    columns,
    counters,
    errorToShow,
    formattedGroups,
    handleCloseErrorDialog,
    handleExecuteAction,
    handleLoadData,
    initialTableData,
    isDataLoading,
    isExecuting,
    isGroupsLoading,
    refetchAllDeposits,
    updatingRowKey,
    depositIdForErrorDialog,
    tableData,
  } = useCollectionPosting();

  useEffect(() => {
    if (!initialTableData) {
      refetchAllDeposits();
    }
  }, [initialTableData, refetchAllDeposits]);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="ترحيل التحصيل" />
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
            showDivider={false}
          />
          <Box sx={{ mr: 3, direction: "rtl" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => refetchAllDeposits()}
            >
              تحميل كل التوريدات للدورة المفتوحة
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              p: 2,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <MultiLevelHeaderTable<STATMDEPOSIT>
              columns={columns}
              data={tableData}
              keyField="DEPOSIT_ID"
              updatingRowKey={updatingRowKey}
            />
          </Box>
        </div>
      </div>
      <SharedDialog
        open={!!depositIdForErrorDialog}
        onClose={handleCloseErrorDialog}
        maxWidth="sm"
        title="تفاصيل الخطأ"
      >
        <SharedTable columns={TableErrorsColumns} data={errorToShow} />
      </SharedDialog>
    </div>
  );
}
