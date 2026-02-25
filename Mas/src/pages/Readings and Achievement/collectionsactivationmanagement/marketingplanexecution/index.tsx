import { Toaster } from "react-hot-toast";
import { useMarketingLogic } from "./useMarketingLogic";
import { Paper } from "@mui/material";
import FilterForm from "./FilterForm";
import MarketingTable from "./MarketingTable";

export default function MarketingPlanExecution() {
  const {
    apiResponse,
    selectedBillGroups,
    handleFilterSubmit,
    handleSelectionChange,
    handleExecute,
  } = useMarketingLogic();
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <Toaster position="top-center" />
        <div className="flex flex-col gap-5">
          <div className=" text-right pe-12 ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
           inline-block                          
           bg-gradient-to-r from-orange-600 to-orange-400  
           bg-no-repeat          
           bg-[length:100%_3px]  
           bg-bottom"
            >
              اعداد خطة التسويق
            </h6>
          </div>
          <Paper elevation={3} sx={{ p: 3 }}>
            <FilterForm onSubmit={handleFilterSubmit}  />
          </Paper>

          <Paper elevation={3} sx={{ p: 3 }}>
            <MarketingTable
              apiResponse={apiResponse}
              selectedBillGroups={selectedBillGroups}
              onSelectionChange={handleSelectionChange}
              onExecute={handleExecute}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}
