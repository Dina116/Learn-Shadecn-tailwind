import { useState } from "react";
import SystemMaintenanceTabs from "../SystemMaintenanceTabs";

export default function DataProcessingScreen() {
  const [tab, setTab] = useState(0);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
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
              معالجة البيانات
            </h6>
          </div>
          <SystemMaintenanceTabs value={tab} onChange={setTab} />
        </div>
      </div>
    </div>
  );
}
