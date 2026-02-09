import { SwitchForm } from "./SwitchForm";
import CollectorDataTable from "./CollectorDataTable";
import { fromHeaders, toHeaders } from "./ColumnNames";

const fromData: any[] = [];
const toData: any[] = [];

export default function SwitchCollectorsPathScreen() {
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
          <SwitchForm />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-1" dir="rtl">
        <div className="w-full">
          <CollectorDataTable
            title="إلى"
            titleColor="#90ee90"
            data={toData}
            headers={toHeaders}
          />
        </div>
        <div className="w-full">
          <CollectorDataTable
            title="من"
            titleColor="#f08080"
            data={fromData}
            headers={fromHeaders}
          />
        </div>
      </div>
    </div>
  );
}
