import UpdateFromBillingDatabase from "../consumeractivities/updatefrombillingdatabase";
import AccountingGroupsTable from "./AccountingGroupsTable";

export default function AccountingGroupsScreen() {
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
            سجل المجموعات المحاسبية
          </h6>
        </div>
        <div className="flex flex-col w-full justify-end items-end bg-white  rounded-lg pe-2 ps-2 ">
          <UpdateFromBillingDatabase />
          <AccountingGroupsTable />
        </div>
      </div>
    </div>
  );
}
