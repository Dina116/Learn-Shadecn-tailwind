import MasPageHeader from "@/componenet/header/MasPageHeader";
import { Toaster } from "react-hot-toast";
import Form from "../componenet/Form";
import MultiLevelHeaderTable from "@/componenet/shared/MultiLevelHeaderTable";
import type { BOOKCYCLE } from "../types";
import useHHPrepear from "./useHHPrepear";

export default function HhPrepear() {
  const {
    bookCycles,
    counters,
    handleSubmitAction,
    handleExecute,
    updatingRowKey,
    columns,
    // executionErrors,
    // refetch
  } = useHHPrepear();
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="  تجهيز البيانات" />
          <Form
            showBillingDate={true}
            showGroups={true}
            onLoad={handleSubmitAction}
            onExecute={handleExecute}
            isExecuting={false}
            showCounters={true}
            showCompletedCounter={false}
            completedCounterTitle="التامة"
            counters={counters}
            showDivider={true}
            showLoadingBtn={true}
          />

          <MultiLevelHeaderTable<BOOKCYCLE>
            columns={columns}
            data={bookCycles || []}
            keyField="BILLGROUP"
            updatingRowKey={updatingRowKey}
          />
        </div>
      </div>
    </div>
  );
}
