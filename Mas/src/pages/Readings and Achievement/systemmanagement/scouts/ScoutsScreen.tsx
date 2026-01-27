import { Button } from "@mui/material";
import ScoutsTable from "./ScoutsTable";
import { useForm } from "./useForm";
import AddScoutsDialog from "./AddScoutsDialog";

export default function ScoutsScreen() {
  const { data, handleDelete, handleEdit, handleSubmittion } = useForm();
  return (
    <div className="w-screen h-screen flex justify-end bg-gray-100">
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
            سجل الكشافيين
          </h6>
        </div>
        <div className="flex flex-row gap-4 justify-end mb-4">
          <AddScoutsDialog onSubmit={handleSubmittion} />
        </div>
        <div className="flex flex-col w-full justify-end  items-end bg-white p-4 rounded-lg shadow-md">
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
