import { Toaster } from "react-hot-toast";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import { useEffect } from "react";
import type { WalkData } from "../../types";
import Form from "../../componenet/Form";
import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SharedTable from "../../../../../componenet/shared/SharedTable";
import { TableErrorsColumns } from "../columns";
import useCollectedPulledPerGroup from "./useCollectedPulledPerGroup";

export default function CollectedPulledPerGroup() {
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
  } = useCollectedPulledPerGroup();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="سحب التحصيلات" />
          <Form
            showBillingDate={true}
            showGroups={true}
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
            showLoadingBtn={true}
          />
          <MultiLevelHeaderTable<WalkData>
            columns={columns}
            data={tableData || []}
            keyField="BOOK_NO"
            updatingRowKey={updatingRowKey}
          />
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
