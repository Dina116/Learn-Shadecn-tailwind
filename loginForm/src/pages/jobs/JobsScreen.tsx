import AddJobDialog from "./AddJobDialog";
import JobsTable from "./JobsTable";
import { useJobForm } from "./usejobForm";

export default function JobsScreen() {
  const { data, handleSubmittion, handleDelete, handleEdit } = useJobForm();
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
          ادارة الوظائف
        </h6>
      </div>
      <div className="flex flex-row gap-4 justify-end mb-4">
        <AddJobDialog onSubmit={handleSubmittion} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <JobsTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}
