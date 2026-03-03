import { Toaster } from "react-hot-toast";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import FilterForm from "./FilterForm";
import { Box } from "@mui/material";
import MultiLevelHeaderTable from "../../../../../componenet/shared/MultiLevelHeaderTable";
import { column } from "./columns";

export default function PulledHistory() {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="سجل تحديث بيانات الفواتير" />
          <div className="mb-5 rounded-md bg-white p-2">
            <FilterForm
              onSubmit={(data) => {
                console.log(data);
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
              //   data={tableData}
              //   keyField="DEPOSIT_ID"
              //   updatingRowKey={updatingRowKey}
            />
          </Box>
        </div>
      </div>
      {/* <SharedDialog
        open={!!depositIdForErrorDialog}
        onClose={handleCloseErrorDialog}
        maxWidth="sm"
        title="تفاصيل الخطأ"
      >
        <SharedTable columns={TableErrorsColumns} data={errorToShow} />
      </SharedDialog> */}
    </div>
  );
}
