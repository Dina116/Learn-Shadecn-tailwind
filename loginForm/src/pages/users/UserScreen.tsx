import { Button } from "@/components/ui/button";
import Navbar from "../home/header/Navbar";
import { UsersTable } from "./UsersTable";
import AddUserDialog from "./AddUserDialog";
import { useForm } from "./useForm";

export default function UserScreen() {
  const { data,handleSubmittion} = useForm();
  return (
    <>
      <Navbar />
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
          <Button
            variant="outline"
            className="text-blue-900 bg-gray-100 border-blue-900 hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-900 "
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
            ربط مجموعة مستخدمين علي وظائف
          </Button>
          <AddUserDialog onSubmit={handleSubmittion} />
        </div>
        <div>
          <UsersTable data={data} />
        </div>
      </div>
    </>
  );
}
