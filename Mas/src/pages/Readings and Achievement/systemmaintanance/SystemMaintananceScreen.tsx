// import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import SystemMaintenanceTabs from "./SystemMaintenanceTabs";
import ReadingCards from "./ReadingCards";
import UploadCards from "./UploadCards";
import { useQuery } from "@tanstack/react-query";
import { getBillGroups } from "./api/SystemApi";

export default function SystemMaintananceScreen() {
  //   const location = useLocation();
  //   const isParentRoute = location.pathname === "/systemManagement";
  const { data } = useQuery({
    queryKey: ["billgroups"],
    queryFn: getBillGroups,
  });
  console.log("data from SystemMaintananceScreen ", data);
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
              صيانة النظام
            </h6>
          </div>
          <SystemMaintenanceTabs value={tab} onChange={setTab} />
          {tab === 0 && <UploadCards data={data ?? []} />}
          {tab === 1 && <ReadingCards />}
        </div>
      </div>
    </div>
  );
}
