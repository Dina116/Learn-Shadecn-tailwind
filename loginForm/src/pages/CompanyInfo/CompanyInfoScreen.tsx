import { useCompanyForm } from "./useCompanyForm";
import AddCompanyDialog from "./AddCompanyDialog";
import { CompanyTable } from "./CompanyTable";

export default function CompanyInfoScreen() {
  const { handleSubmittion, data, handleEdit } = useCompanyForm();
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
          تعريف الارقام الضريبية للشركات
        </h6>
      </div>
      <div className="flex flex-row gap-4 justify-end mb-4">
        <AddCompanyDialog onSubmit={handleSubmittion} />
      </div>
      <div className="flex flex-col justify-end  items-end bg-white p-4 rounded-lg shadow-md">
        <CompanyTable data={data} onEdit={handleEdit} />
      </div>
    </div>
  );
}
