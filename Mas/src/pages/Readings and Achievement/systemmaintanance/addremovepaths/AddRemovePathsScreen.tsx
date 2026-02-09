import { Button } from "@mui/material";
import SelectedPathsTable from "./AvailablePathsTable";
import AvailablePathsTable from "./AvailablePathsTable";
import CollectorFilterBar from "./CollectorFilterBar";
// import PathsTablesSection from "./PathsTablesSection";
// import SaveChangesFooter from "./SaveChangesFooter";

export default function AddRemovePathsScreen() {
  return (
    <div className="w-full h-screen  bg-gray-100 pe-8">
      <div className="flex flex-col gap-2  w-full">
        <div className=" text-right ">
          <h6
            className="text-2xl text-black font-extrabold mt-1
           inline-block                          
           bg-gradient-to-r from-orange-600 to-orange-400  
           bg-no-repeat          
           bg-[length:100%_3px]  
           bg-bottom"
          >
            اضافة وحذف مناطق للمحصلين
          </h6>
        </div>
        <div className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-4 h-[85%]">
          <CollectorFilterBar />
          <div
            className="grid grid-cols-[1.5fr_1fr] gap-4 flex-1 overflow-hidden "
            dir="rtl"
          >
            <AvailablePathsTable />
            <SelectedPathsTable />
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="contained" color="primary">
              حفظ التغييرات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
