import { SharedRadioGroup } from "@/components/sharedComponenet/SharedRadioGroup";
import AddDepartmentDialog from "./AddDepartmentDialog";
import { DepartmentTable } from "./DepartmentTable";
import { useDepartmentForm } from "./useDepartmentForm";

export default function ManageDepartmentScreen() {
  const { data, handleSubmittion, handleDelete } = useDepartmentForm();
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <div className=" flex flex-col md:flex-row justify-end items-center mb-8 text-right ">
        <h6
          className="text-lg text-black font-bold 
      inline-block         
      pb-1                 
      bg-gradient-to-r from-blue-500 to-teal-400  
      bg-no-repeat          
      bg-[length:100%_3px]  
      bg-bottom           "
        >
          ادارة الاقسام
        </h6>
      </div>
      <div className="flex flex-row gap-4 justify-end mb-4">
        <AddDepartmentDialog onSubmit={handleSubmittion} />
      </div>
      <div className="flex flex-col justify-end  items-end bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-row justify-end gap-5 pb-2">
          <SharedRadioGroup name={"الاقسام المحذوفة"} />
          <SharedRadioGroup name={"الاقسام الموجودة"} />
        </div>
        <DepartmentTable data={data} onDelete={handleDelete} />
      </div>
    </div>
  );
}
