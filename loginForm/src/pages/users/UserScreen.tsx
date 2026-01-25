import { Button } from "@/components/ui/button";
import { UsersTable } from "./UsersTable";
import AddUserDialog from "./AddUserDialog";
import { useForm } from "./useForm";
import ConnentUserstoJobs from "./connentuserstojobs/ConnentUserstoJobs";

export default function UserScreen() {
  const { data, handleSubmittion, handleDelete, handleEdit } = useForm();
  return (
    <>
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
            ادارة المستخدمين
          </h6>
        </div>
        <div className="flex flex-row gap-4 justify-end mb-4">
          <ConnentUserstoJobs />
          <AddUserDialog onSubmit={handleSubmittion} />
        </div>
        <div className="flex flex-col justify-end  items-end bg-white p-4 rounded-lg shadow-md">
          <Button className="text-right text-sm bg-sky-800 hover:bg-sky-900 w-19 mb-2 ">
            طباعة
          </Button>
          <UsersTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>
    </>
  );
}
