import { SharedRadioGroup } from "@/components/sharedComponenet/SharedRadioGroup";
import { SelectField } from "@/components/sharedComponenet/SharedSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selectedItemsModuleName, selectedItemsState } from "./types";

export default function AssignReportsScreen() {
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
          تعيين تقارير علي مجموعة من الوظائف
        </h6>
      </div>
      <div className="flex flex-row  justify-between bg-white gap-5 pt-7 pl-5 pr-5 pb-5">
        <SelectField label="الحالة" selectItems={selectedItemsState} />
        <SelectField label="التصنيف" />
        <SelectField
          label="اسم الموديول"
          selectItems={selectedItemsModuleName}
        />
      </div>

      <div className=" mt-5">
        <div className="flex flex-row w-full justify-between items-center bg-white gap-5 pt-7 pl-5 pr-5 pb-5">
          <div className="flex flex-row items-center gap-5">
            <SharedRadioGroup name="نشط" />
            <SharedRadioGroup name="غير نشط" />
          </div>

          <div className="flex flex-row items-center gap-5">
            <Button className="bg-sky-800 hover:bg-sky-900">
              تعيين لمجموعة من الوظائف
            </Button>
            <div className="flex flex-col justify-end items-end">
              <Label className="flex flex-row justify-end pb-1">بحث </Label>
              <Input />
            </div>
            <div className="flex flex-col">
              <Label className="flex flex-row justify-end pb-1">
                بحث بالكود
              </Label>
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
