import AddUsersDialog from "./AddUsersDialog";
import UsersTable from "./UserTable";

export default function UsersScreen() {
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
            سجل المستخدمين
          </h6>
        </div>
        <div className="flex flex-col w-full justify-end items-end bg-white  rounded-lg pe-2 ">
          <AddUsersDialog />
          <UsersTable data={[]} />
        </div>
      </div>
    </div>
  );
}
