import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import { columns } from "./columns";
import RearrangementForm from "./RearrangementForm";

export default function RearrangementPaths() {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-2  ">
          <div className=" text-right pe-4 ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
         inline-block                          
         bg-gradient-to-r from-orange-600 to-orange-400  
         bg-no-repeat          
         bg-[length:100%_3px]  
         bg-bottom"
            >
              اعادة ترتيب مسارات القراءات
            </h6>
          </div>
          <RearrangementForm />
          <SharedTablePagination columns={columns} data={[]} />
        </div>
      </div>
    </div>
  );
}
