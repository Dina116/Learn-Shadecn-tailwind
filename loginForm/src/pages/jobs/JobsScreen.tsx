import { Button } from "@/components/ui/button";
import JobsTable from "./JobsTable";

export default function JobsScreen() {
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
        <Button variant="default" className="bg-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white "
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
          إضافة وظيفة
        </Button>
      </div>
      <div>
        <JobsTable />
      </div>
    </div>
  );
}
