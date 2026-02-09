// import { Button } from "@mui/material";
import ScoutsTable from "./ScoutsTable";

import AddScoutsDialog from "./AddScoutsDialog";
import { useForm } from "../../../../hooks/systemmanagement/scouts/useForm";

export default function ScoutsScreen() {
  const { data, handleDelete, handleEdit } = useForm();

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
            سجل الكشافيين
          </h6>
        </div>
        <div className="flex flex-col w-full justify-end items-end bg-white  rounded-lg pe-2 ">
          {/* <div className="flex flex-row gap-4 justify-end">
           
          </div> */}
          <AddScoutsDialog />
          <ScoutsTable
            data={data}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}
