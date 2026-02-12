import { SwitchForm } from "./SwitchForm";
import CollectorDataTable from "./CollectorDataTable";
import { createColumnsFromHeaders, columnsToHeaders } from "./ColumnNames";
import useSwitchCollectorPath from "../../../../../hooks/systemmaintanance/switchcollectorspath/useSwitchCollectorPath";
import { useState } from "react";
import type { WalkPath } from "./types";
import SwitchConfirmDialog from "./SwitchConfirmDialog";

export default function SwitchCollectorsPathScreen() {
  const { switchData, handleSubmittion, selectedFrom, selectedTo, emp } =
    useSwitchCollectorPath();
  const [selectedRow, setSelectedRow] = useState<WalkPath | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleRowAction = (row: WalkPath) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

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
            تبديل عهدة فواتير بين محصلين
          </h6>
        </div>
        <div className="w-full bg-white max-h-[280px] overflow-auto">
          <SwitchForm onSubmit={handleSubmittion} emp={emp} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-1" dir="rtl">
        <>
          <CollectorDataTable
            title={
              selectedFrom
                ? `من: ${selectedFrom.name} - ${selectedFrom.id}`
                : "من"
            }
            titleColor="#ee9696"
            data={switchData.from}
            headers={createColumnsFromHeaders(handleRowAction)}
          />
          <SwitchConfirmDialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            row={selectedRow}
            from={
              selectedFrom
                ? `من: ${selectedFrom.name} - ${selectedFrom.id}`
                : "من"
            }
            to={
              selectedTo ? `إلى: ${selectedTo.name} - ${selectedTo.id}` : "إلى"
            }
          />
        </>

        <CollectorDataTable
          title={
            selectedTo ? `إلى: ${selectedTo.name} - ${selectedTo.id}` : "إلى"
          }
          titleColor="#b4eadf"
          data={switchData.to}
          headers={columnsToHeaders}
        />
      </div>
    </div>
  );
}
